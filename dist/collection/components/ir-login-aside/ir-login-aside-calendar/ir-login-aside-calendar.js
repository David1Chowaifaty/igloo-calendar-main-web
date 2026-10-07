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
        return (h("aside", { key: '724c983f0984700625cebc850b6696aba06c7f2f', class: "pms-auth__promo" }, h("div", { key: '6e8f922155900ef8e933e4d4ffc77d3d736fbca4' }, h("h2", { key: '2f7a174ea49ac72bdbc2696d1afed54eabdeacaa', class: "pms-auth__promo-title" }, tr('Lcz_LoginPromoTitle', 'One calendar. Every booking.')), h("p", { key: '38173c1ecba3b3d5012ecacbc0457be48c8f6404', class: "pms-auth__promo-copy" }, tr('Lcz_LoginPromoCopy', 'Booking.com, Expedia, Airbnb and walk-ins all land on the same calendar. Your team always knows which rooms are taken, and double bookings stop slipping through.'))), h("div", { key: '1ca6de55ceef64110f38314479096b803e995568', class: "cal-wrap", "aria-hidden": "true" }, h("div", { key: 'cc1d84888b381a72f764b24e2c7a8542c25c861e', class: "cal" }, h("div", { key: '76234e48d29dfd994afb127f0223d3905da19c6b', class: "cal__toast", ref: el => (this.toast = el) }, h("span", { key: '97eb94de7d938bb5859512b21d4e08ee6c0762a3', class: "cal__toast-icon", style: { backgroundColor: STATUS.confirmed }, ref: el => (this.toastIcon = el) }, h("wa-icon", { key: 'c6a1e8150c2845a5be04e0e004f6f556cce79e7d', name: "calendar-plus", variant: "solid" })), h("span", { key: '57f541e8bcdeceb75780392f2ce57f0135556c16' }, h("span", { key: 'bdf5671516e5b1e544802a945526e2be7abdfba9', ref: el => (this.toastTitle = el) }, firstToast.title), h("span", { key: '3a82956482ee5bc7a06499f2481ab8668b8f5d27', class: "cal__toast-sub", ref: el => (this.toastSub = el) }, firstToast.detail))), h("div", { key: 'da1107e4367c4634000d1bb7644d719a04a2b9f6', class: "cal__grid", ref: el => (this.calBody = el) }, h("div", { key: 'b3e39dad4140a865d08a1a70cb3442a3a9923020', class: "cal__row cal__row--head" }, h("span", { key: '9c1b4fcb20a08c673d9e521f6ea96f668273c1f5', class: "cal__corner" }, h("span", { key: 'e0afc13eaba6c66551665c80518e6b07ed1c74f3', class: "cal__search" }, h("wa-icon", { key: '25669f125ff96821736c09f1c263ce7e02cb780c', name: "magnifying-glass" }), tr('Lcz_LoginPromoFindUnit', 'Find a unit'))), this.monthSegments.map((segment, i) => (h("span", { class: { 'cal__month': true, 'is-alt': i % 2 === 1 }, style: { gridColumn: `${2 + 2 * segment.start} / span ${2 * segment.days}` } }, segment.label))), this.week.map((day, i) => (h("span", { class: { 'cal__day': true, 'is-today': i === todayIndex, 'is-weekend': i === 0 || i === 6 }, style: { gridColumn: `${2 + 2 * i} / span 2` } }, h("span", { class: "cal__day-title" }, formatDate(day, 'ddd D')), h("span", { class: "cal__day-occupancy" }, formatPercent(OCCUPANCY[i])))))), CATEGORIES.map(category => [
            h("div", { class: "cal__row cal__row--category" }, h("span", { class: "cal__label" }, tr(category.key, category.name)), this.renderCells(todayIndex, category.available)),
            ...category.units.map(unit => (h("div", { class: "cal__row" }, h("span", { class: "cal__label cal__label--unit" }, unit.name), this.renderCells(todayIndex), unit.past && this.renderBar(unit.past, todayIndex), this.renderBar(INITIAL_STAYS[unit.slot], todayIndex, unit.slot)))),
        ])))), h("dl", { key: '0cc27b433a95950af12cdc20326b079cb601aec5', class: "promo-stats" }, h("div", { key: 'd2af386df5dc47112bfad81f85bf9e0298756148', class: "promo-stat" }, h("dt", { key: 'a97cf904900a5b2927a42abbe309f20690098fed', class: "promo-stat__label" }, h("wa-icon", { key: 'e185a6c183f4f87cced9f934c0b362d3bb19246d', name: "calendar-days", variant: "solid" }), tr('Lcz_LoginPromoCalendarForEveryChannel', 'Calendar for every channel')), h("dd", { key: '73997cf19ff5c70925fe543a4cc6da4a8ee38b0a', class: "promo-stat__num" }, formatNumber(1))), h("div", { key: 'f9ae0d12e7d2a4d949b347b6d3c4fe6e1247aaf4', class: "promo-stat" }, h("dt", { key: '7d4b50be05506be5905ee735adabcb08eda91f4b', class: "promo-stat__label" }, h("wa-icon", { key: 'e83255f8892902ea88a944419411f022f94340e8', name: "calendar-check", variant: "solid" }), tr('Lcz_LoginPromoBookingsToday', 'Bookings today')), h("dd", { key: '12228be3c62f12a0df8668a26cfbdc0545ad00b9', class: "promo-stat__value" }, h("span", { key: '6a2c03cafdfc0785d93f2168c11ccf4b5f6f3f41', class: "promo-stat__num", ref: el => (this.statCount = el) }, formatNumber(this.bookingCount)), h("span", { key: '4e6033703dfcd10f7b8d57fda34e161b0a162b19', class: "promo-stat__delta", "aria-hidden": "true", ref: el => (this.statDelta = el) }, "+", formatNumber(1)))), h("div", { key: 'dacc5b4d2ac5d6599c734b7d95bb6bc66f09accb', class: "promo-stat" }, h("dt", { key: '33956fff5bb9a4e982f0b267b2ec552e2649ede4', class: "promo-stat__label" }, h("wa-icon", { key: '6cff289e5ef5d6e6b64cbf83280dcadc84fb2c3b', name: "shield-halved", variant: "solid" }), tr('Lcz_LoginPromoDoubleBookings', 'Double bookings')), h("dd", { key: '3b8667c7eb05bc559712b35398917921d9c28431', class: "promo-stat__num" }, formatNumber(0)))), h("a", { key: 'ce412a57e5a866e4c84410429f6b16a30887ac1e', class: "pms-auth__promo-link", href: "https://info.igloorooms.com", target: "_blank", rel: "noopener noreferrer" }, tr('Lcz_LoginPromoSeeHowItWorks', 'See how igloorooms works'), h("wa-icon", { key: '01cb871ac0b2460fe2d8780cd2a1c722c65022c7', name: "arrow-right" }))));
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
