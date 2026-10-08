import { h } from "@stencil/core";
import { formatDate } from "../../../utils/date/index";
import { formatNumber, formatPercent } from "../../../utils/number";
import { interpolate } from "../../../services/locale/t";
const CYCLE_MS = 5200;
const TOAST_MS = 3200;
const EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)';
const EASE_IN_OUT = 'cubic-bezier(0.77, 0, 0.175, 1)';
// Fast in (~300ms), long hold, quicker exit; per-keyframe easing keeps one animation
const TOAST_IN_OUT = [
    { opacity: 0, transform: 'translateY(-6px) scale(0.96)', easing: EASE_OUT },
    { opacity: 1, transform: 'translateY(0) scale(1)', offset: 0.1 },
    { opacity: 1, transform: 'translateY(0) scale(1)', offset: 0.92, easing: 'ease-in' },
    { opacity: 0, transform: 'translateY(-4px) scale(0.98)' },
];
const TOAST_FADE = [
    { opacity: 0 },
    { opacity: 1, offset: 0.1 },
    { opacity: 1, offset: 0.92 },
    { opacity: 0 },
];
// The bar wrapper itself is unskewed (only its base is), so these compose cleanly
const BAR_OUT = [
    { opacity: 1, transform: 'scaleX(1)' },
    { opacity: 0, transform: 'scaleX(0.9)' },
];
const BAR_IN = [
    { opacity: 0, transform: 'scaleX(0.6)', filter: 'blur(2px)' },
    { opacity: 1, transform: 'scaleX(1)', filter: 'blur(0)' },
];
const COUNT_TICK = [
    { opacity: 0, transform: 'translateY(40%)' },
    { opacity: 1, transform: 'translateY(0)' },
];
// "+1" rises in next to the counter, holds, then fades off
const DELTA_POP = [
    { opacity: 0, transform: 'translateY(4px) scale(0.95)', easing: EASE_OUT },
    { opacity: 1, transform: 'translateY(0) scale(1)', offset: 0.15 },
    { opacity: 1, transform: 'translateY(0) scale(1)', offset: 0.75, easing: 'ease-in' },
    { opacity: 0, transform: 'translateY(-3px) scale(1)' },
];
const DELTA_FADE = [{ opacity: 0 }, { opacity: 1, offset: 0.15 }, { opacity: 1, offset: 0.75 }, { opacity: 0 }];
/** Default booking-status colors of the property calendar legend. */
const STATUS = {
    inHouse: '#31bef1',
    confirmed: '#45b16d',
    checkedOut: '#a0a0a0',
};
/** Mirrors the main calendar's layout: room-type header rows, then their units. */
const CATEGORIES = [
    {
        key: 'Lcz_LoginPromoDeluxeDouble',
        name: 'Deluxe Double',
        available: [1, 0, 1, 2, 1, 0, 0],
        units: [
            { slot: 1, name: '101' },
            { slot: 2, name: '102', past: { offset: -2, nights: 2, status: 'checkedOut', guest: 'J. Saab', number: '58201746' } },
            { slot: 3, name: '103' },
        ],
    },
    {
        key: 'Lcz_LoginPromoGardenSuite',
        name: 'Garden Suite',
        available: [0, 1, 0, 0, 1, 1, 0],
        units: [
            { slot: 4, name: 'S1' },
            { slot: 5, name: 'S2', past: { offset: -3, nights: 3, status: 'checkedOut', guest: 'T. Younes', number: '58199302' } },
        ],
    },
];
const UNIT_NAMES = new Map(CATEGORIES.flatMap(c => c.units.map(u => [u.slot, u.name])));
/** Seed state of each unit's live bar; `cycle()` reassigns bars by `slot` from here on. Mostly confirmed. */
const INITIAL_STAYS = {
    1: { offset: -2, nights: 4, status: 'inHouse', guest: 'L. Karam', number: '58204411' },
    2: { offset: 1, nights: 3, status: 'confirmed', guest: 'M. Assi', number: '4821937560', ota: true },
    3: { offset: 0, nights: 2, status: 'confirmed', guest: 'R. Fares', number: '58207325' },
    4: { offset: -1, nights: 5, status: 'confirmed', guest: 'C. Halabi', number: '2215408', ota: true },
    5: { offset: 2, nights: 3, status: 'confirmed', guest: 'N. Haddad', number: '58210068' },
};
/** Occupancy shown under each weekday, Sunday-first. */
const OCCUPANCY = [72, 85, 91, 64, 58, 77, 96];
function startOfDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
/**
 * Grid placement for a stay. The grid has two half-columns per day, so (like the main
 * calendar) a bar starts mid check-in day and ends mid check-out day. Line 2 is the first
 * day's start, line 16 the last day's end. `cutStart`/`cutEnd` mark bars that run past the
 * visible week, which the calendar draws with a square edge. `null` when outside the week.
 */
function stayPlacement(stay, todayIndex) {
    const start = todayIndex + stay.offset;
    const end = start + stay.nights;
    if (start > 6 || end < 0) {
        return null;
    }
    const cutStart = start < 0;
    const cutEnd = end > 6;
    return { column: `${cutStart ? 2 : 3 + 2 * start} / ${cutEnd ? 16 : 3 + 2 * end}`, cutStart, cutEnd };
}
/** The guest's name, or "Walk-in" for front-desk stays that don't have one yet. */
function guestName(stay, tr) {
    return stay.guest ?? tr('Lcz_LoginPromoWalkIn', 'Walk-in');
}
/** "Name - number", the same title igl-booking-event renders. */
function barTitle(stay, tr) {
    return `${guestName(stay, tr)} - ${stay.number}`;
}
function nightsLabel(nights, tr) {
    return nights === 1 ? tr('Lcz_LoginPromoOneNight', '1 night') : tr('Lcz_LoginPromoNights', '%1 nights', [formatNumber(nights)]);
}
/** The toast's two lines. Should read like a note from a colleague, not a log line. */
function toastCopy(booking, tr) {
    const unit = UNIT_NAMES.get(booking.slot);
    const nights = nightsLabel(booking.nights, tr);
    if (booking.channel === null) {
        return {
            title: tr('Lcz_LoginPromoWalkInCheckedIn', 'Walk-in guest checked into room %1', [unit]),
            detail: tr('Lcz_LoginPromoAddedAtFrontDesk', '%1, added at the front desk', [nights]),
        };
    }
    return {
        title: tr('Lcz_LoginPromoGuestBooked', '%1 just booked room %2', [guestName(booking, tr), unit]),
        detail: tr('Lcz_LoginPromoCameInFrom', '%1, came in from %2', [nights, booking.channel]),
    };
}
export class IrLoginAsideCalendar {
    /**
     * Translated labels from the server, keyed by `Lcz_*`. Any key that's missing (or the whole
     * object, until it arrives) falls back to the built-in English text.
     */
    localeEntries = null;
    toast;
    toastIcon;
    toastTitle;
    toastSub;
    calBody;
    statCount;
    statDelta;
    cycleTimeout;
    cycleInterval;
    landTimeout;
    reduceMotion = false;
    /** Local midnight of the current day; drives the month band, the week row and the highlighted column. */
    today = startOfDay(new Date());
    index = 0;
    bookingCount = 184;
    /** Incoming bookings: always in the future (never collide with past stays) and almost all confirmed. */
    bookings = [
        { slot: 3, offset: 2, nights: 3, status: 'confirmed', channel: 'Booking.com', guest: 'S. Nader', number: '4830215977', ota: true },
        { slot: 5, offset: 1, nights: 2, status: 'confirmed', channel: 'Expedia', guest: 'L. Karam', number: '2216734' },
        { slot: 2, offset: 3, nights: 4, status: 'confirmed', channel: 'Airbnb', guest: 'J. Haddad', number: 'HMQ4ZK2', ota: true },
        { slot: 4, offset: 1, nights: 1, status: 'confirmed', channel: null, guest: null, number: '58213350' },
        { slot: 1, offset: 2, nights: 3, status: 'confirmed', channel: 'Booking.com', guest: 'A. Saab', number: '4830477120', ota: true },
        { slot: 3, offset: 1, nights: 2, status: 'confirmed', channel: 'Expedia', guest: 'M. Fares', number: '2217011', ota: true },
        { slot: 5, offset: 3, nights: 3, status: 'confirmed', channel: 'Airbnb', guest: 'R. Khoury', number: 'HMT8PL6', ota: true },
        { slot: 2, offset: 1, nights: 2, status: 'confirmed', channel: null, guest: null, number: '58214102' },
    ];
    tr = (key, fallback, params) => interpolate(this.localeEntries?.[key] || fallback, params);
    componentDidLoad() {
        this.reduceMotion = !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
        this.cycleTimeout = window.setTimeout(() => {
            this.cycle();
            this.cycleInterval = window.setInterval(this.cycle, CYCLE_MS);
        }, 1600);
    }
    disconnectedCallback() {
        window.clearTimeout(this.cycleTimeout);
        window.clearTimeout(this.landTimeout);
        window.clearInterval(this.cycleInterval);
    }
    /** The current week, Sunday-first. */
    get week() {
        const sunday = this.today.getDate() - this.today.getDay();
        return Array.from({ length: 7 }, (_, i) => new Date(this.today.getFullYear(), this.today.getMonth(), sunday + i));
    }
    /** Month band segments over the week: two when the week straddles a month boundary. */
    get monthSegments() {
        const segments = [];
        this.week.forEach((day, i) => {
            const last = segments[segments.length - 1];
            if (last && last.key === day.getMonth()) {
                last.days++;
            }
            else {
                segments.push({ label: formatDate(day, 'MMM YYYY'), start: i, days: 1, key: day.getMonth() });
            }
        });
        return segments;
    }
    /** Keeps the header honest if the page stays open past midnight. */
    syncToday() {
        const now = startOfDay(new Date());
        if (now.getTime() !== this.today.getTime()) {
            this.today = now;
        }
    }
    cycle = () => {
        // Don't burn cycles (or skip ahead) while the tab is in the background
        if (document.hidden) {
            return;
        }
        this.syncToday();
        if (!this.toast || !this.toastIcon || !this.toastTitle || !this.toastSub || !this.calBody) {
            return;
        }
        const booking = this.bookings[this.index];
        this.index = (this.index + 1) % this.bookings.length;
        const copy = toastCopy(booking, this.tr);
        this.toastIcon.style.backgroundColor = STATUS[booking.status];
        this.toastIcon.innerHTML = `<wa-icon name="${booking.channel === null ? 'pen' : 'calendar-plus'}" variant="solid"></wa-icon>`;
        this.toastTitle.textContent = copy.title;
        this.toastSub.textContent = copy.detail;
        this.toast.getAnimations().forEach(a => a.cancel());
        this.toast.animate(this.reduceMotion ? TOAST_FADE : TOAST_IN_OUT, { duration: TOAST_MS, easing: 'linear' });
        // Once the toast has been read, the booking "lands" in the calendar
        this.landTimeout = window.setTimeout(() => this.landBooking(booking), 900);
    };
    async landBooking(booking) {
        const bar = this.calBody?.querySelector(`.cal__bar[data-slot="${booking.slot}"]`);
        const placement = stayPlacement(booking, this.today.getDay());
        if (bar && placement) {
            bar.getAnimations().forEach(a => a.cancel());
            // Exit quickly, swap while invisible, then enter with a strong ease-out
            await bar.animate(this.reduceMotion ? [{ opacity: 1 }, { opacity: 0 }] : BAR_OUT, { duration: 160, easing: EASE_IN_OUT, fill: 'forwards' }).finished.catch(() => { });
            bar.hidden = false;
            bar.style.gridColumn = placement.column;
            bar.style.setProperty('--bar-color', STATUS[booking.status]);
            bar.classList.toggle('is-ota', !!booking.ota);
            bar.classList.toggle('is-cut-start', placement.cutStart);
            bar.classList.toggle('is-cut-end', placement.cutEnd);
            const title = bar.querySelector('.cal__bar-title');
            if (title) {
                title.textContent = barTitle(booking, this.tr);
            }
            bar.getAnimations().forEach(a => a.cancel());
            bar.animate(this.reduceMotion ? [{ opacity: 0 }, { opacity: 1 }] : BAR_IN, { duration: 420, easing: EASE_OUT });
        }
        this.bookingCount++;
        if (this.statCount) {
            this.statCount.textContent = formatNumber(this.bookingCount);
            this.statCount.animate(this.reduceMotion ? [{ opacity: 0.4 }, { opacity: 1 }] : COUNT_TICK, { duration: 280, easing: EASE_OUT });
        }
        if (this.statDelta) {
            this.statDelta.getAnimations().forEach(a => a.cancel());
            this.statDelta.animate(this.reduceMotion ? DELTA_FADE : DELTA_POP, { duration: 1600, easing: 'linear' });
        }
    }
    /** The seven day cells behind a row; today's carries the `.currentDay` tint. */
    renderCells(todayIndex, values) {
        return Array.from({ length: 7 }, (_, i) => (h("span", { class: { 'cal__cell': true, 'is-today': i === todayIndex, 'is-zero': values?.[i] === 0 }, style: { gridColumn: `${2 + 2 * i} / span 2` } }, values ? formatNumber(values[i]) : null)));
    }
    /** Same anatomy as igl-booking-event: a skewed colored base with an unskewed title over it. */
    renderBar(stay, todayIndex, slot) {
        const placement = stayPlacement(stay, todayIndex);
        return (h("span", { class: { 'cal__bar': true, 'is-ota': !!stay.ota, 'is-cut-start': !!placement?.cutStart, 'is-cut-end': !!placement?.cutEnd }, "data-slot": slot, hidden: !placement, style: { 'gridColumn': placement?.column ?? '2 / 3', '--bar-color': STATUS[stay.status] } }, h("span", { class: "cal__bar-base" }), h("span", { class: "cal__bar-title" }, barTitle(stay, this.tr))));
    }
    render() {
        const todayIndex = this.today.getDay();
        const tr = this.tr;
        // The toast is invisible until the first cycle; this just keeps its markup meaningful
        const firstToast = toastCopy(this.bookings[0], tr);
        return (h("aside", { key: '86d3c1bb358f540915c8e835bea50e493bb7a1a5', class: "pms-auth__promo" }, h("div", { key: '9569504cffd1dbb501d358bf76dcd978117792bd' }, h("h2", { key: '21f68da935adb58a174ec0913030598eebce3906', class: "pms-auth__promo-title" }, tr('Lcz_LoginPromoTitle', 'One calendar. Every booking.')), h("p", { key: 'b7dd2a509b48cef5a2db55faabe40694ca80cb9f', class: "pms-auth__promo-copy" }, tr('Lcz_LoginPromoCopy', 'Booking.com, Expedia, Airbnb and walk-ins all land on the same calendar. Your team always knows which rooms are taken, and double bookings stop slipping through.'))), h("div", { key: 'fbec0b7f459b145ff844fa4b2356293a2b9f97ec', class: "cal-wrap", "aria-hidden": "true" }, h("div", { key: 'e67a06e3626ca6d0ba80351b9564fbbe4e328a9a', class: "cal" }, h("div", { key: 'df28d7d08476a5acb98d77cb5cf816f980da4116', class: "cal__toast", ref: el => (this.toast = el) }, h("span", { key: '4d51075fae461eee759f9555c4c58891fa1b92f0', class: "cal__toast-icon", style: { backgroundColor: STATUS.confirmed }, ref: el => (this.toastIcon = el) }, h("wa-icon", { key: '4515a8116de51131f9b222183c03bfd449e09d9c', name: "calendar-plus", variant: "solid" })), h("span", { key: '1c5da4d7ba2b6866e2ee6da813e369249dafb838' }, h("span", { key: '9a811d1dda183b91a037d0c8f28af0999f57d19f', ref: el => (this.toastTitle = el) }, firstToast.title), h("span", { key: '981ea7bd447d50cedc9419e21dee64588ae8ad63', class: "cal__toast-sub", ref: el => (this.toastSub = el) }, firstToast.detail))), h("div", { key: '9ff4f81d8d151d4eee0c08da3be7e07165d7c22a', class: "cal__grid", ref: el => (this.calBody = el) }, h("div", { key: '6464f2d97074975405ad8357c5ea44581458a4e1', class: "cal__row cal__row--head" }, h("span", { key: '87ab20ebf2dd78c797a0e5fb7bcae44ca8d3ef1f', class: "cal__corner" }, h("span", { key: '8f2ea2f48423d6b7ba00e9a24cdd929f31161e61', class: "cal__search" }, h("wa-icon", { key: 'f44ec81c1735d4fe9ed648cfa916fb4eaee17a9d', name: "magnifying-glass" }), tr('Lcz_LoginPromoFindUnit', 'Find a unit'))), this.monthSegments.map((segment, i) => (h("span", { class: { 'cal__month': true, 'is-alt': i % 2 === 1 }, style: { gridColumn: `${2 + 2 * segment.start} / span ${2 * segment.days}` } }, segment.label))), this.week.map((day, i) => (h("span", { class: { 'cal__day': true, 'is-today': i === todayIndex, 'is-weekend': i === 0 || i === 6 }, style: { gridColumn: `${2 + 2 * i} / span 2` } }, h("span", { class: "cal__day-title" }, formatDate(day, 'ddd D')), h("span", { class: "cal__day-occupancy" }, formatPercent(OCCUPANCY[i])))))), CATEGORIES.map(category => [
            h("div", { class: "cal__row cal__row--category" }, h("span", { class: "cal__label" }, tr(category.key, category.name)), this.renderCells(todayIndex, category.available)),
            ...category.units.map(unit => (h("div", { class: "cal__row" }, h("span", { class: "cal__label cal__label--unit" }, unit.name), this.renderCells(todayIndex), unit.past && this.renderBar(unit.past, todayIndex), this.renderBar(INITIAL_STAYS[unit.slot], todayIndex, unit.slot)))),
        ])))), h("dl", { key: '6d34bb1265edd380d4323b42fab9f386f90ca93e', class: "promo-stats" }, h("div", { key: '825e76d0f2dc6aa1ff10baad264edd4d5a853dc4', class: "promo-stat" }, h("dt", { key: '4d53ec8d53de84e534e8fdddf3317ddcf7d82b2b', class: "promo-stat__label" }, h("wa-icon", { key: '01b74d321476a675be13868e714717e0f2537a9f', name: "calendar-days", variant: "solid" }), tr('Lcz_LoginPromoCalendarForEveryChannel', 'Calendar for every channel')), h("dd", { key: 'b9a0236126f407678fc6185a8bddbbe63c4fe342', class: "promo-stat__num" }, formatNumber(1))), h("div", { key: '91ce8adcab5b9918f9f162954fd9f8be8a3908e7', class: "promo-stat" }, h("dt", { key: '169de2d5ae93846e09fafe9cd268268cb661d3a8', class: "promo-stat__label" }, h("wa-icon", { key: '07c34f2987f70e92a5e608b597f95db8de3d22fc', name: "calendar-check", variant: "solid" }), tr('Lcz_LoginPromoBookingsToday', 'Bookings today')), h("dd", { key: 'a33a07138b7b870411495ab8876bcc736efdafc5', class: "promo-stat__value" }, h("span", { key: '4f7b11476afe15847797f4e6eb2d03f0d0e9885e', class: "promo-stat__num", ref: el => (this.statCount = el) }, formatNumber(this.bookingCount)), h("span", { key: 'e13812142f0f68f26c42d9fcef7864f1f40cfe61', class: "promo-stat__delta", "aria-hidden": "true", ref: el => (this.statDelta = el) }, "+", formatNumber(1)))), h("div", { key: 'ed1f6c0992103da62995b812ecb21500a66f3f6c', class: "promo-stat" }, h("dt", { key: '80f89e87d3c769b3399e9878078e22bc7fcb3d4a', class: "promo-stat__label" }, h("wa-icon", { key: '9cc8d4790b0cdfd14a7aa0966c11275d56af4599', name: "shield-halved", variant: "solid" }), tr('Lcz_LoginPromoDoubleBookings', 'Double bookings')), h("dd", { key: '34ea6a502dbac16cf9ad9047906e0b4f89794c6f', class: "promo-stat__num" }, formatNumber(0)))), h("a", { key: '204ee3f857ffb0c67bec785f8b656626500e361b', class: "pms-auth__promo-link", href: "https://info.igloorooms.com", target: "_blank", rel: "noopener noreferrer" }, tr('Lcz_LoginPromoSeeHowItWorks', 'See how igloorooms works'), h("wa-icon", { key: 'f57b7796c4ab7c0c688c8da1dd8bc97999acd5af', name: "arrow-right" }))));
    }
    static get is() { return "ir-login-aside-calendar"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-login-aside-calendar.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-login-aside-calendar.css"]
        };
    }
    static get properties() {
        return {
            "localeEntries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TLocaleEntries | null",
                    "resolved": "{ [x: string]: string; }",
                    "references": {
                        "TLocaleEntries": {
                            "location": "import",
                            "path": "@/stores/locales.store",
                            "id": "src/stores/locales.store.ts::TLocaleEntries",
                            "referenceLocation": "TLocaleEntries"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Translated labels from the server, keyed by `Lcz_*`. Any key that's missing (or the whole\nobject, until it arrives) falls back to the built-in English text."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "today": {}
        };
    }
}
