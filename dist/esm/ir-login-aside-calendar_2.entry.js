import { r as registerInstance, h, a as getElement } from './index-DKZeCK8T.js';
import { f as formatDate } from './ir-date-XXNYhmSL.js';
import './moment-Mki5YqAR.js';
import { c as formatNumber, d as formatPercent, b as formatCount } from './number-B8waOzTO.js';
import { i as interpolate } from './t-Bvz1wS_D.js';
import { u as upcomingWeek, E as EXTRA_PROFIT, a as EXTRA_BOOKINGS, B as BEAT_MS, n as nextBeat, b as BEATS, C as CURRENCY, r as rateLevel, W as WEEK, c as BASE_RATE, d as CONTACT_EMAIL, e as SIGNALS, R as ROOMS } from './dynamic-pricing-story-Br-0K3_Y.js';
import './locale-scope-Jre4lb6k.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';

const irLoginAsideCalendarCss = () => `ir-login-aside-calendar{display:block;height:100%}.pms-auth__promo{position:relative;box-sizing:border-box;min-height:100%;overflow:hidden;padding:2.75rem 3rem 2.25rem;display:flex;flex-direction:column;background:#1E293B;color:black}.pms-auth__promo::before{content:"";position:absolute;top:30%;left:50%;width:640px;height:640px;transform:translate(-50%, -35%);text-align:start;background:radial-gradient(   circle,   rgba(0, 113, 236, 0.28) 0%,   rgba(0, 113, 236, 0) 65% );pointer-events:none}.pms-auth__promo>*{position:relative}.promo-eyebrow{display:inline-flex;align-items:center;gap:0.45rem;font-size:0.7rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#c3d7f3;margin:0 0 0.7rem}.promo-eyebrow .pulse-dot{width:7px;height:7px;border-radius:50%;background:#4ade80;animation:dot-pulse 1.4s ease-in-out infinite}@keyframes dot-pulse{0%,100%{transform:scale(0.85);opacity:0.75}50%{transform:scale(1.15);opacity:1}}.pms-auth__promo-title{font-family:var(--font-body);font-weight:700;font-size:1.65rem;letter-spacing:-0.01em;line-height:1.22;margin:0 0 0.55rem;color:#fff !important;text-align:start}.pms-auth__promo-copy{font-size:0.92rem;line-height:1.55;color:#94A3B8;margin:0;max-width:60ch;text-align:start}.cal-wrap{flex:1;display:flex;align-items:center;justify-content:center;min-height:320px;padding:2rem 0;container-type:inline-size;isolation:isolate}.cal{--u:min(1px, calc(100cqw / 600));--cal-label:calc(170 * var(--u));--cal-cell:calc(58 * var(--u));--cal-row-h:calc(30 * var(--u));--cal-category-h:calc(40 * var(--u));--cal-em:calc(14 * var(--u));--cal-radius:calc(12 * var(--u));--cal-brand:#0071ec;--cal-current-day:#e9f2fe;--cal-text:#1e293b;--cal-text-quiet:#64748b;--cal-border:#e2e8f0;--cal-month:#f1f5f9;--cal-month-alt:#e2e8f0;position:relative;width:calc(var(--cal-label) + 7 * var(--cal-cell));flex:none;background:#fff;border-radius:var(--cal-radius);font-size:var(--cal-em);box-shadow:0 0 0 1px rgba(15, 23, 42, 0.04),                 0 1px 2px rgba(4, 6, 16, 0.18),                 0 calc(12 * var(--u)) calc(24 * var(--u)) calc(-8 * var(--u)) rgba(4, 6, 16, 0.35),                 0 calc(40 * var(--u)) calc(80 * var(--u)) calc(-16 * var(--u)) rgba(4, 6, 16, 0.55)}.cal::before{content:"";position:absolute;inset:calc(-7 * var(--u));z-index:-1;border-radius:calc(var(--cal-radius) + 7 * var(--u));background:linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));box-shadow:inset 0 0 0 1px rgba(255, 255, 255, 0.1);pointer-events:none}.cal__grid{overflow:hidden;border-radius:var(--cal-radius)}.cal__row{display:grid;grid-template-columns:var(--cal-label) repeat(14, calc(var(--cal-cell) / 2));grid-template-rows:var(--cal-row-h);align-items:center}.cal__row>*{grid-row:1}.cal__row+.cal__row{border-top:1px solid var(--cal-border)}.cal__label{grid-column:1;align-self:stretch;display:flex;align-items:center;min-width:0;padding-inline:calc(10 * var(--u)) calc(6 * var(--u));border-inline-end:1px solid var(--cal-border);font-size:0.9em;color:var(--cal-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cal__label--unit{padding-inline-start:calc(20 * var(--u))}.cal__cell{align-self:stretch;display:grid;place-items:center;border-inline-start:1px solid var(--cal-border)}.cal__label+.cal__cell{border-inline-start:0}.cal__cell.is-today,.cal__day.is-today{background:var(--cal-current-day)}.cal__row--head{grid-template-rows:calc(20 * var(--u)) calc(58 * var(--u));align-items:stretch}.cal__row--head .cal__corner{grid-row:1 / 3;grid-column:1;display:flex;align-items:center;padding-inline:calc(10 * var(--u));border-inline-end:1px solid var(--cal-border);border-bottom:1px solid var(--cal-border)}.cal__search{flex:1;display:flex;align-items:center;gap:calc(6 * var(--u));height:calc(28 * var(--u));padding-inline:calc(8 * var(--u));border-radius:calc(4 * var(--u));border:1px solid var(--cal-border);font-size:0.8em;color:#94a3b8}.cal__search wa-icon{font-size:0.9em}.cal__row--head .cal__month{grid-row:1;display:grid;place-items:center;background:var(--cal-month);border-inline-start:1px solid var(--cal-border);font-size:0.9em;font-weight:700;text-transform:uppercase;color:var(--cal-text-quiet);white-space:nowrap;overflow:hidden}.cal__row--head .cal__month.is-alt{background:var(--cal-month-alt)}.cal__row--head .cal__day{grid-row:2;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(2 * var(--u));min-width:0;border-bottom:1px solid var(--cal-border);color:var(--cal-text-quiet)}.cal__day-title{font-size:0.8em;font-weight:600;white-space:nowrap}.cal__day.is-weekend .cal__day-title{font-weight:700;color:var(--cal-text)}.cal__day.is-today .cal__day-title{font-weight:700}.cal__day-occupancy{font-size:0.75em;font-variant-numeric:tabular-nums}.cal__row--category{grid-template-rows:var(--cal-category-h)}.cal__row--category .cal__label,.cal__row--category .cal__cell{font-weight:700}.cal__row--category .cal__cell{color:var(--cal-text);font-variant-numeric:tabular-nums}.cal__row--category .cal__cell.is-zero{color:var(--cal-text-quiet)}.cal__bar{position:relative;z-index:1;height:calc(20 * var(--u));margin-inline:calc(4 * var(--u));display:flex;align-items:center;min-width:0;transform-origin:left center;will-change:transform, opacity}.cal__bar[hidden]{display:none}.cal__bar-base{position:absolute;inset:0;border-radius:calc(4 * var(--u));background-color:var(--bar-color);transform:skewX(-22deg)}.cal__bar.is-ota .cal__bar-base{border:calc(2 * var(--u)) solid #343a40}.cal__bar.is-cut-start .cal__bar-base::before,.cal__bar.is-cut-end .cal__bar-base::after{content:"";position:absolute;top:0;bottom:0;width:50%;background-color:var(--bar-color);transform:skewX(22deg)}.cal__bar.is-cut-start .cal__bar-base::before{left:calc(-4 * var(--u));transform-origin:right;border-radius:0 calc(4 * var(--u)) calc(4 * var(--u)) 0}.cal__bar.is-cut-end .cal__bar-base::after{right:calc(-4 * var(--u));transform-origin:left;border-radius:calc(4 * var(--u)) 0 0 calc(4 * var(--u))}.cal__bar.is-ota.is-cut-start .cal__bar-base::before,.cal__bar.is-ota.is-cut-end .cal__bar-base::after{top:calc(-2 * var(--u));bottom:calc(-2 * var(--u));border-block:calc(2 * var(--u)) solid #343a40}.cal__bar-title{position:relative;min-width:0;max-width:calc(100% - 10 * var(--u));padding-inline-start:calc(5 * var(--u));overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:0.8em;color:#fff}.cal__toast{position:absolute;top:calc(-24 * var(--u));right:calc(-16 * var(--u));display:flex;align-items:center;gap:calc(10 * var(--u));background:rgba(17, 20, 38, 0.86);-webkit-backdrop-filter:blur(14px) saturate(140%);backdrop-filter:blur(14px) saturate(140%);color:#fff;border-radius:calc(12 * var(--u));padding:calc(9 * var(--u)) calc(14 * var(--u)) calc(9 * var(--u)) calc(9 * var(--u));font-size:calc(13 * var(--u));font-weight:600;letter-spacing:-0.005em;box-shadow:inset 0 0 0 1px rgba(255, 255, 255, 0.1),                 inset 0 1px 0 rgba(255, 255, 255, 0.08),                 0 calc(4 * var(--u)) calc(8 * var(--u)) rgba(4, 6, 16, 0.25),                 0 calc(18 * var(--u)) calc(36 * var(--u)) calc(-6 * var(--u)) rgba(4, 6, 16, 0.5);opacity:0;transform-origin:top right;pointer-events:none;z-index:3}.cal__toast-icon{width:calc(32 * var(--u));height:calc(32 * var(--u));border-radius:calc(9 * var(--u));display:flex;align-items:center;justify-content:center;flex:none;background-image:linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.25);transition:background-color 200ms ease}.cal__toast-icon wa-icon{font-size:calc(14 * var(--u));color:#fff}.cal__toast-sub{display:block;margin-top:calc(1 * var(--u));font-size:calc(11 * var(--u));font-weight:500;color:rgba(203, 213, 225, 0.75)}@media (prefers-reduced-motion: reduce){.promo-eyebrow .pulse-dot{animation:none}}.promo-stats{display:grid;grid-template-columns:repeat(3, minmax(0, 1fr));margin:0 0 1.4rem;padding:0;background:linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.025));border:1px solid rgba(255, 255, 255, 0.08);border-radius:14px;box-shadow:0 1px 0 rgba(255, 255, 255, 0.06) inset}.promo-stat{display:flex;flex-direction:column;gap:0.4rem;min-width:0;padding:1rem 1.15rem 1.05rem}.promo-stat+.promo-stat{position:relative}.promo-stat+.promo-stat::before{content:"";position:absolute;left:0;top:1rem;bottom:1rem;width:1px;background:rgba(255, 255, 255, 0.08)}.promo-stat__label{display:flex;align-items:center;gap:0.4rem;margin:0;font-size:0.7rem;font-weight:500;line-height:1.3;color:#94A3B8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.promo-stat__label wa-icon{flex:none;font-size:0.72rem;color:#60a5fa}.promo-stat__num{margin:0;font-size:1.6rem;font-weight:700;line-height:1;letter-spacing:-0.02em;color:#fff;font-variant-numeric:tabular-nums}.promo-stat__value{display:flex;align-items:center;gap:0.45rem;margin:0}.promo-stat__delta{padding:0.15rem 0.4rem;border-radius:999px;background:rgba(74, 222, 128, 0.14);color:#4ade80;font-size:0.68rem;font-weight:700;line-height:1;font-variant-numeric:tabular-nums;opacity:0;transform-origin:left center;pointer-events:none}.pms-auth__promo-link{font-size:0.82rem;font-weight:600;color:#c3d7f3;text-decoration:none;display:inline-flex;align-items:center;gap:0.35rem}.pms-auth__promo-link:hover{text-decoration:underline}`;

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
const IrLoginAsideCalendar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
        return (h("aside", { key: '35635b55a1da6a6d70a668cacb7e2b100981c925', class: "pms-auth__promo" }, h("div", { key: '6087938ccd915ec8003aa1b837e45c3592a54e3d' }, h("h2", { key: 'd3f1b88bc53d62f45e051b68f7256d5246c140f6', class: "pms-auth__promo-title" }, tr('Lcz_LoginPromoTitle', 'One calendar. Every booking.')), h("p", { key: '47203f738bf15b8d602ef2df0b53836457018a6e', class: "pms-auth__promo-copy" }, tr('Lcz_LoginPromoCopy', 'Booking.com, Expedia, Airbnb and walk-ins all land on the same calendar. Your team always knows which rooms are taken, and double bookings stop slipping through.'))), h("div", { key: 'c931e8a55b5f38b368d95f7da9046199662dda1a', class: "cal-wrap", "aria-hidden": "true" }, h("div", { key: '0fa3b3ec3a418b4178a6a9cd5dcd3d997835fa9b', class: "cal" }, h("div", { key: '6fbf427d4c4ef6c09082327a617abe6897ec0094', class: "cal__toast", ref: el => (this.toast = el) }, h("span", { key: '96283eacfaf48f83ced8d846626cd60119dc7d9d', class: "cal__toast-icon", style: { backgroundColor: STATUS.confirmed }, ref: el => (this.toastIcon = el) }, h("wa-icon", { key: '99e89fee683756f78c18e3060fe1ebcd3d173035', name: "calendar-plus", variant: "solid" })), h("span", { key: '7269089a43875fccc640ac4328580b4c1f26026a' }, h("span", { key: '9df55bfe615c629089e7d6d56a7843cc49fdc0af', ref: el => (this.toastTitle = el) }, firstToast.title), h("span", { key: '6d6854cff4d9e63e451ce7698710cca6a9f3854d', class: "cal__toast-sub", ref: el => (this.toastSub = el) }, firstToast.detail))), h("div", { key: '2440a223deed12f166342bc955457db1f36bea06', class: "cal__grid", ref: el => (this.calBody = el) }, h("div", { key: '9e57e23f399298fea083f342ab344beecbe90d6b', class: "cal__row cal__row--head" }, h("span", { key: '508e40d5270ec6df319cd31e46a1b10be1c43775', class: "cal__corner" }, h("span", { key: 'c8d2877995ab5b772235b87d9204e3be41047c05', class: "cal__search" }, h("wa-icon", { key: '5af614d11975606b1f7cc0c0ffd36850ff2dfaf4', name: "magnifying-glass" }), tr('Lcz_LoginPromoFindUnit', 'Find a unit'))), this.monthSegments.map((segment, i) => (h("span", { class: { 'cal__month': true, 'is-alt': i % 2 === 1 }, style: { gridColumn: `${2 + 2 * segment.start} / span ${2 * segment.days}` } }, segment.label))), this.week.map((day, i) => (h("span", { class: { 'cal__day': true, 'is-today': i === todayIndex, 'is-weekend': i === 0 || i === 6 }, style: { gridColumn: `${2 + 2 * i} / span 2` } }, h("span", { class: "cal__day-title" }, formatDate(day, 'ddd D')), h("span", { class: "cal__day-occupancy" }, formatPercent(OCCUPANCY[i])))))), CATEGORIES.map(category => [
            h("div", { class: "cal__row cal__row--category" }, h("span", { class: "cal__label" }, tr(category.key, category.name)), this.renderCells(todayIndex, category.available)),
            ...category.units.map(unit => (h("div", { class: "cal__row" }, h("span", { class: "cal__label cal__label--unit" }, unit.name), this.renderCells(todayIndex), unit.past && this.renderBar(unit.past, todayIndex), this.renderBar(INITIAL_STAYS[unit.slot], todayIndex, unit.slot)))),
        ])))), h("dl", { key: '751583c349ac0d340ff404f9fea0f42925e04c19', class: "promo-stats" }, h("div", { key: 'cb3335670187a9ed09aba9856957ddee3949f6a5', class: "promo-stat" }, h("dt", { key: '273b976f7abe334cfc9a2ee4b3e779b20877ac73', class: "promo-stat__label" }, h("wa-icon", { key: '48a3ae2745311046c78a5af349c26b18eb5d92e9', name: "calendar-days", variant: "solid" }), tr('Lcz_LoginPromoCalendarForEveryChannel', 'Calendar for every channel')), h("dd", { key: 'ddd2d7316413bea7d2e8c63d6bda278b6aeef95b', class: "promo-stat__num" }, formatNumber(1))), h("div", { key: '75b0b42c99d6c938e820926549fda9692da83803', class: "promo-stat" }, h("dt", { key: 'ab4d2366126254b619a492e45540fe6e7fe54df2', class: "promo-stat__label" }, h("wa-icon", { key: '9a6088f774c1302ba332af08b4a67ac4503e640a', name: "calendar-check", variant: "solid" }), tr('Lcz_LoginPromoBookingsToday', 'Bookings today')), h("dd", { key: 'bdbd5a019338d9c56c550fb8b1e2710116f71ea6', class: "promo-stat__value" }, h("span", { key: '93fdbd2acbface61ea53fec91989f9068847c286', class: "promo-stat__num", ref: el => (this.statCount = el) }, formatNumber(this.bookingCount)), h("span", { key: '74979b07628435d0d2b2928f995d8f8ca03f0eb7', class: "promo-stat__delta", "aria-hidden": "true", ref: el => (this.statDelta = el) }, "+", formatNumber(1)))), h("div", { key: '598fdf6b05d8d6875efac9d8ad356ae8a7768790', class: "promo-stat" }, h("dt", { key: '5bfb5ea76766630b2235f462ccb6a56dff7616da', class: "promo-stat__label" }, h("wa-icon", { key: '7877cea32b5a3108ce637626043430015a3504c1', name: "shield-halved", variant: "solid" }), tr('Lcz_LoginPromoDoubleBookings', 'Double bookings')), h("dd", { key: 'baaa59cce7b6f862de808239af70811210fe1d4e', class: "promo-stat__num" }, formatNumber(0)))), h("a", { key: '79ca1950ec619c9f2a06c70a87493e12fe8b3de9', class: "pms-auth__promo-link", href: "https://info.igloorooms.com", target: "_blank", rel: "noopener noreferrer" }, tr('Lcz_LoginPromoSeeHowItWorks', 'See how igloorooms works'), h("wa-icon", { key: '27678c5b9c58573e0531089cfc1cde33d1102b7a', name: "arrow-right" }))));
    }
};
IrLoginAsideCalendar.style = irLoginAsideCalendarCss();

const irLoginAsideDynamicPricingCss = () => `ir-login-aside-dynamic-pricing{display:block;height:100%}.dp-promo{--dp-ease-out:cubic-bezier(0.23, 1, 0.32, 1);--dp-ease-in-out:cubic-bezier(0.77, 0, 0.175, 1);--dp-ease-spring:cubic-bezier(0.34, 1.3, 0.64, 1);--dp-duration:620ms;--dp-stagger:90ms;--dp-brand:#0071ec;--dp-brand-quiet:#e9f2fe;--dp-gain:#15803d;--dp-gain-fill:#22c55e;--dp-gain-quiet:#e7f8ee;--dp-text:#1e293b;--dp-text-quiet:#64748b;--dp-border:#e2e8f0;position:relative;box-sizing:border-box;min-height:100%;overflow:hidden;padding:2.75rem 3rem 2.25rem;display:flex;flex-direction:column;gap:1.5rem;background:#1e293b;color:#fff}.dp-promo[data-beat='fixed']{--dp-duration:280ms;--dp-stagger:0ms}.dp-promo::before,.dp-promo::after{content:'';position:absolute;inset-block-start:30%;inset-inline:calc(50% - 320px);height:640px;transform:translateY(-35%);pointer-events:none}.dp-promo::before{background:radial-gradient(circle, rgba(0, 113, 236, 0.28) 0%, rgba(0, 113, 236, 0) 65%)}.dp-promo::after{inset-block-start:55%;background:radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0) 65%);opacity:0;transition:opacity 900ms var(--dp-ease-out)}.dp-promo[data-beat='payoff']::after{opacity:1}.dp-promo>*{position:relative;z-index:1}.dp-promo__title{margin:0 0 0.55rem;font-family:var(--font-body);font-size:1.65rem;font-weight:700;letter-spacing:-0.01em;line-height:1.22;text-align:start;color:#fff !important}.dp-promo__copy{margin:0;max-width:60ch;font-size:0.92rem;line-height:1.55;text-align:start;color:#94a3b8}.dp-promo__stage{flex:1;display:flex;flex-direction:column;justify-content:center;gap:0.85rem;min-width:0}.dp-promo__steps{display:grid;font-size:1.05rem;font-weight:600;line-height:1.3;text-align:center;color:#fff}.dp-promo__step{grid-area:1 / 1;opacity:0;transform:translateY(6px);filter:blur(2px);transition:opacity 260ms var(--dp-ease-out),     transform 260ms var(--dp-ease-out),     filter 260ms var(--dp-ease-out)}.dp-promo__step.is-active{opacity:1;transform:translateY(0);filter:blur(0);transition-delay:120ms}.dp-board-wrap{display:flex;justify-content:center;container-type:inline-size}.dp-board{--u:min(1.2px, calc(100cqw / 536));--dp-label:calc(108 * var(--u));--dp-col:calc(61 * var(--u));flex:none;width:calc(var(--dp-label) + 7 * var(--dp-col));overflow:hidden;border-radius:calc(12 * var(--u));background:#fff;color:var(--dp-text);font-size:calc(11 * var(--u));line-height:1.25;box-shadow:0 0 0 1px rgba(15, 23, 42, 0.04),     0 1px 2px rgba(4, 6, 16, 0.18),     0 calc(12 * var(--u)) calc(24 * var(--u)) calc(-8 * var(--u)) rgba(4, 6, 16, 0.35),     0 calc(40 * var(--u)) calc(80 * var(--u)) calc(-16 * var(--u)) rgba(4, 6, 16, 0.55)}.dp-board__row{display:grid;grid-template-columns:var(--dp-label) repeat(7, var(--dp-col));align-items:stretch}.dp-board__row+.dp-board__row{border-block-start:1px solid var(--dp-border)}.dp-board__row--head{background:#f1f5f9}.dp-board__label{display:flex;align-items:center;min-width:0;padding-inline:calc(10 * var(--u)) calc(2 * var(--u));font-weight:600;color:var(--dp-text-quiet)}.dp-board__day{padding-block:calc(7 * var(--u));font-weight:600;text-align:center;color:var(--dp-text)}.dp-board__row--signals{grid-auto-rows:calc(30 * var(--u));align-items:center}.dp-board__row--signals>*{grid-row:1}.dp-board__row--occupancy{min-height:calc(48 * var(--u))}.dp-signal{display:flex;align-items:center;justify-content:center;gap:calc(5 * var(--u));min-width:0;height:calc(22 * var(--u));margin-inline:calc(3 * var(--u));padding-inline:calc(6 * var(--u));border-radius:calc(6 * var(--u));font-size:calc(10.5 * var(--u));font-weight:600;opacity:0;transform:translateY(calc(-8 * var(--u))) scale(0.96);transition:opacity var(--dp-duration) var(--dp-ease-out),     transform var(--dp-duration) var(--dp-ease-out);transition-delay:calc(var(--dp-order) * 6 * var(--dp-stagger))}.dp-signal.is-on{opacity:1;transform:translateY(0) scale(1)}.dp-signal--high{background:var(--dp-gain-quiet);color:var(--dp-gain)}.dp-signal--low{background:var(--dp-brand-quiet);color:var(--dp-brand)}.dp-signal wa-icon{flex:none}.dp-signal__label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dp-board__row--rates{--dp-rates-h:calc(122 * var(--u));position:relative;isolation:isolate;height:var(--dp-rates-h)}.dp-board__row--rates>.dp-board__label{grid-row:1;align-items:flex-start;padding-block-start:calc(10 * var(--u))}.dp-board__row--rates::after{content:'';position:absolute;z-index:1;inset-inline:var(--dp-label) 0;inset-block-end:calc(var(--dp-from) * var(--u));border-block-start:1px dashed #94a3b8;pointer-events:none}.dp-board__fixed{position:absolute;inset-inline-start:calc(10 * var(--u));inset-block-end:calc(var(--dp-from) * var(--u));transform:translateY(50%);font-size:calc(10 * var(--u));font-weight:500;color:var(--dp-text-quiet);white-space:nowrap}.dp-rate{--dp-level:var(--dp-from);--dp-dir:1;position:relative;grid-row:1;overflow:hidden;min-width:0}.dp-rate.is-moved{--dp-level:var(--dp-to)}.dp-rate.is-down{--dp-dir:-1}.dp-rate__bar,.dp-rate__base{position:absolute;inset-inline:calc(7 * var(--u));inset-block-end:calc(-1 * var(--dp-rates-h));height:var(--dp-rates-h);border-start-start-radius:calc(5 * var(--u));border-start-end-radius:calc(5 * var(--u));background:#cbd5e1}.dp-rate__base{transform:translateY(calc(var(--dp-from) * var(--u) * -1))}.dp-rate.is-up .dp-rate__base{border-start-start-radius:0;border-start-end-radius:0}.dp-rate__bar,.dp-rate__price{transition:transform var(--dp-duration) var(--dp-ease-spring);transition-delay:calc(var(--dp-order) * var(--dp-stagger))}.dp-rate__bar{transform:translateY(calc(var(--dp-level) * var(--u) * -1));transition:transform var(--dp-duration) var(--dp-ease-spring),     background-color var(--dp-duration) var(--dp-ease-out);transition-delay:calc(var(--dp-order) * var(--dp-stagger))}.dp-rate.is-up.is-moved .dp-rate__bar{background:var(--dp-gain)}.dp-rate.is-down.is-moved .dp-rate__bar{background:var(--dp-brand)}.dp-rate__tag{display:block;padding-block-start:calc(4 * var(--u));overflow:hidden;font-size:calc(9 * var(--u));font-weight:700;text-align:center;text-overflow:ellipsis;white-space:nowrap;color:#fff;opacity:0;transition:opacity var(--dp-duration) var(--dp-ease-out);transition-delay:calc(var(--dp-order) * var(--dp-stagger) + 180ms)}.dp-rate.is-moved .dp-rate__tag{opacity:1}.dp-rate__price{position:absolute;z-index:2;inset-inline:0;inset-block-end:calc(3 * var(--u));display:flex;justify-content:center;transform:translateY(calc(var(--dp-level) * var(--u) * -1))}.dp-rate__value{padding-inline:calc(3 * var(--u));border-radius:calc(3 * var(--u));background:#fff;font-size:calc(16 * var(--u));font-weight:700;line-height:1.15;letter-spacing:-0.02em;font-variant-numeric:tabular-nums}.dp-swap{display:grid;justify-items:center}.dp-swap__from,.dp-swap__to{grid-area:1 / 1;transition:opacity var(--dp-duration) var(--dp-ease-out),     transform var(--dp-duration) var(--dp-ease-out),     filter var(--dp-duration) var(--dp-ease-out);transition-delay:calc(var(--dp-order, 0) * var(--dp-stagger))}.dp-swap__to{opacity:0;transform:translateY(calc(var(--dp-dir, 1) * 70%));filter:blur(2px)}.is-moved .dp-swap__from{opacity:0;transform:translateY(calc(var(--dp-dir, 1) * -70%));filter:blur(2px)}.is-moved .dp-swap__to{opacity:1;transform:translateY(0);filter:blur(0)}.dp-rate.is-up.is-moved .dp-swap__to{color:var(--dp-gain)}.dp-rate.is-down.is-moved .dp-swap__to{color:var(--dp-brand)}.dp-occ{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(4 * var(--u));padding-block:calc(6 * var(--u))}.dp-occ__label{font-size:calc(10.5 * var(--u));font-weight:600;color:var(--dp-text-quiet);font-variant-numeric:tabular-nums}.dp-occ__track{width:calc(34 * var(--u));height:calc(14 * var(--u));overflow:hidden;border-radius:calc(4 * var(--u));background:#f1f5f9}.dp-occ__fill{display:block;width:100%;height:100%;background:#cbd5e1;transform:scaleY(var(--dp-from));transform-origin:center bottom;transition:transform calc(var(--dp-duration) * 1.4) var(--dp-ease-in-out),     background-color var(--dp-duration) var(--dp-ease-out);transition-delay:calc(var(--dp-order) * var(--dp-stagger))}.dp-occ.is-moved .dp-occ__fill{transform:scaleY(var(--dp-to))}.dp-occ.is-up.is-moved .dp-occ__fill{background:var(--dp-gain-fill)}.dp-occ.is-down.is-moved .dp-occ__fill{background:var(--dp-brand)}.dp-promo__stats{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:0.35rem 2rem;margin:0.35rem 0 0;padding:0.8rem 1.15rem;background:linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.025));border:1px solid rgba(255, 255, 255, 0.08);border-radius:14px;box-shadow:0 1px 0 rgba(255, 255, 255, 0.06) inset;transition:border-color 600ms var(--dp-ease-out),     background-color 600ms var(--dp-ease-out)}.dp-promo[data-beat='payoff'] .dp-promo__stats{border-color:rgba(74, 222, 128, 0.4);background-color:rgba(74, 222, 128, 0.08)}.dp-stat{display:flex;align-items:baseline;gap:0.5rem;opacity:0.55;transition:opacity 500ms var(--dp-ease-out)}.dp-promo[data-beat='payoff'] .dp-stat{opacity:1}.dp-stat__label{margin:0;font-size:0.8rem;font-weight:500;color:#94a3b8;white-space:nowrap}.dp-stat__value{margin:0;font-size:1.4rem;font-weight:700;line-height:1;letter-spacing:-0.02em;color:#fff;font-variant-numeric:tabular-nums}.dp-promo[data-beat='payoff'] .dp-stat__value--profit{color:#4ade80}.dp-promo__footer{margin:0;font-size:0.82rem;line-height:1.4;text-align:start;color:#94a3b8}.dp-promo__link{--dp-arrow-dir:1;display:inline-flex;align-items:center;gap:0.35rem;font-weight:600;color:#fff;text-decoration:none}.dp-promo__link:hover,.dp-promo__link:focus{color:#fff;text-decoration:none}[dir='rtl'] .dp-promo__link{--dp-arrow-dir:-1}.dp-promo__arrow{flex:none;transform:scaleX(var(--dp-arrow-dir));transition:transform 160ms var(--dp-ease-out)}@media (hover: hover) and (pointer: fine){.dp-promo__link:hover .dp-promo__arrow{transform:scaleX(var(--dp-arrow-dir)) translateX(3px)}}.dp-promo__link:focus-visible{outline:2px solid #fff;outline-offset:2px;border-radius:2px}`;

const COUNT_MS = 1400;
const PAUSED_RETRY_MS = 1000;
/** Incentives move first, then the festival nights, so the eye sweeps across the week once. */
const RATE_ORDER = WEEK.map((night, index) => ({ night, index }))
    .filter(({ night }) => night.rate !== BASE_RATE)
    .sort((a, b) => a.night.rate - b.night.rate || a.index - b.index)
    .map(({ index }) => index);
const money = (amount) => `${CURRENCY}${formatCount(amount)}`;
const occupancy = (sold) => formatPercent((sold / ROOMS) * 100);
const IrLoginAsideDynamicPricing = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    /**
     * Translated labels from the server, keyed by `Lcz_*`. Any key that's missing (or the whole
     * object, until it arrives) falls back to the built-in English text.
     */
    localeEntries = null;
    beat = 'fixed';
    extraProfit = 0;
    extraBookings = 0;
    beatTimeout;
    countFrame;
    week = upcomingWeek(new Date());
    tr = (key, fallback) => this.localeEntries?.[key] || fallback;
    connectedCallback() {
        if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
            // The payoff frame still tells the whole story, it just doesn't play
            this.beat = 'payoff';
            this.extraProfit = EXTRA_PROFIT;
            this.extraBookings = EXTRA_BOOKINGS;
            return;
        }
        this.schedule();
    }
    disconnectedCallback() {
        window.clearTimeout(this.beatTimeout);
        window.cancelAnimationFrame(this.countFrame);
    }
    schedule() {
        this.beatTimeout = window.setTimeout(this.advance, BEAT_MS[this.beat]);
    }
    advance = () => {
        // Don't play to nobody: a background tab, or the aside hidden on small screens
        if (document.hidden || !this.el.offsetWidth) {
            this.beatTimeout = window.setTimeout(this.advance, PAUSED_RETRY_MS);
            return;
        }
        this.beat = nextBeat(this.beat);
        if (this.beat === 'payoff') {
            this.countUp();
        }
        else if (this.beat === 'fixed') {
            this.extraProfit = 0;
            this.extraBookings = 0;
        }
        this.schedule();
    };
    countUp() {
        const start = performance.now();
        const tick = (now) => {
            const progress = Math.min((now - start) / COUNT_MS, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            this.extraProfit = Math.round(EXTRA_PROFIT * eased);
            this.extraBookings = Math.round(EXTRA_BOOKINGS * eased);
            if (progress < 1) {
                this.countFrame = window.requestAnimationFrame(tick);
            }
        };
        this.countFrame = window.requestAnimationFrame(tick);
    }
    reached(beat) {
        return BEATS.indexOf(this.beat) >= BEATS.indexOf(beat);
    }
    renderRate(night, index) {
        const up = night.rate > BASE_RATE;
        const down = night.rate < BASE_RATE;
        const moved = up || down;
        return (h("span", { class: { 'dp-rate': true, 'is-up': up, 'is-down': down, 'is-moved': moved && this.reached('rates') }, style: { '--dp-order': String(Math.max(RATE_ORDER.indexOf(index), 0)), '--dp-to': String(rateLevel(night.rate)) } }, h("span", { class: "dp-rate__bar" }, moved && h("span", { class: "dp-rate__tag" }, up ? `+${money(night.rate - BASE_RATE)}` : this.tr('Lcz_LoginPromoDpIncentive', 'Incentive'))), !down && h("span", { class: "dp-rate__base" }), h("span", { class: "dp-rate__price" }, moved ? (h("span", { class: "dp-swap" }, h("span", { class: "dp-swap__from dp-rate__value" }, money(BASE_RATE)), h("span", { class: "dp-swap__to dp-rate__value" }, money(night.rate)))) : (h("span", { class: "dp-rate__value" }, money(BASE_RATE))))));
    }
    renderOccupancy(night, index) {
        const changed = night.soldAfter !== night.soldBefore;
        const before = night.soldBefore / ROOMS;
        const after = night.soldAfter / ROOMS;
        return (h("span", { class: { 'dp-occ': true, 'is-up': night.rate > BASE_RATE, 'is-down': night.rate < BASE_RATE, 'is-moved': changed && this.reached('bookings') }, style: { '--dp-order': String(index), '--dp-from': String(before), '--dp-to': String(after) } }, changed ? (h("span", { class: "dp-swap dp-occ__label" }, h("span", { class: "dp-swap__from" }, occupancy(night.soldBefore)), h("span", { class: "dp-swap__to" }, occupancy(night.soldAfter)))) : (h("span", { class: "dp-occ__label" }, occupancy(night.soldBefore))), h("span", { class: "dp-occ__track" }, h("span", { class: "dp-occ__fill" }))));
    }
    render() {
        const tr = this.tr;
        const steps = {
            fixed: tr('Lcz_LoginPromoDpStepFixed', 'Every night, the same rate.'),
            signals: tr('Lcz_LoginPromoDpStepSignals', "Dynamic Pricing spots what's coming."),
            rates: tr('Lcz_LoginPromoDpStepRates', 'Rates adjust, night by night.'),
            bookings: tr('Lcz_LoginPromoDpStepBookings', 'Busy nights earn more. Quiet nights fill up.'),
            payoff: tr('Lcz_LoginPromoDpStepPayoff', 'Same week. More money.'),
        };
        const subject = encodeURIComponent(tr('Lcz_LoginPromoDpEmailSubject', 'Enable Dynamic Pricing'));
        return (h("aside", { key: 'e38740e4c85f65e7a8032b1139c450d64b10e0ef', class: "dp-promo", "data-beat": this.beat }, h("div", { key: 'e6cb8ee74bff9fc66dc52845747ac884abb2dfca', class: "dp-promo__intro" }, h("h2", { key: '7c7fdfaf28922b06a02f4403e76593fce45a282e', class: "dp-promo__title" }, tr('Lcz_LoginPromoDpTitle', 'Your rates should move when demand does.')), h("p", { key: '67bc35db5f309e9bb720055acf0c3f845f7d123a', class: "dp-promo__copy" }, tr('Lcz_LoginPromoDpCopy', "Dynamic Pricing watches what's coming, raises rates when demand climbs, and adds Incentives when dates run quiet."))), h("div", { key: 'cd3cbec0987ff6e717e21395cfe494fce51d5d80', class: "dp-promo__stage", "aria-hidden": "true" }, h("div", { key: 'edec5e03e9c205b472934561d1da042e770acb18', class: "dp-promo__steps" }, BEATS.map(beat => (h("span", { class: { 'dp-promo__step': true, 'is-active': beat === this.beat } }, steps[beat])))), h("div", { key: '08ef979c42cf1e795b0edf8e1d51515ea5659703', class: "dp-board-wrap" }, h("div", { key: '290b37710350589a266e101799da8c9037945b75', class: "dp-board" }, h("div", { key: '1f436768e5865903d9bf962de7423bc2c95fce2d', class: "dp-board__row dp-board__row--head" }, h("span", { key: '4073de5a80881d788bf7407ef1ec5068e7c0f7b2', class: "dp-board__label" }), this.week.map(day => (h("span", { class: "dp-board__day" }, formatDate(day, 'ddd D'))))), h("div", { key: '42264d28f63cf6cd9dc01994a80cf5c2cc337cb7', class: "dp-board__row dp-board__row--signals" }, h("span", { key: '5a0540a4afca22d4afd38fae21f64f03e6579cec', class: "dp-board__label" }, tr('Lcz_LoginPromoDpDemandSignals', 'Demand Signals')), SIGNALS.map((signal, index) => (h("span", { class: { 'dp-signal': true, [`dp-signal--${signal.tone}`]: true, 'is-on': this.reached('signals') }, style: { 'gridColumn': `${signal.first + 2} / ${signal.last + 3}`, '--dp-order': String(index) } }, h("wa-icon", { name: signal.icon, variant: "solid" }), h("span", { class: "dp-signal__label" }, tr(signal.key, signal.label)))))), h("div", { key: '1dc2e75da62269bd50821a0af6c8b79d7a3cfe1b', class: "dp-board__row dp-board__row--rates", style: { '--dp-from': String(rateLevel(BASE_RATE)) } }, h("span", { key: 'bf185bc3babcaa9803a999f9b620dabd1b9e3a99', class: "dp-board__label" }, tr('Lcz_LoginPromoDpNightlyRate', 'Nightly rate')), h("span", { key: '9df9356027f6053ce18130c2e3569350b45bcc31', class: "dp-board__fixed" }, tr('Lcz_LoginPromoDpFixedRate', 'Fixed rate'), " ", money(BASE_RATE)), WEEK.map((night, index) => this.renderRate(night, index))), h("div", { key: 'da08fbaa5cb3c1497a5966701420d44c39267d7e', class: "dp-board__row dp-board__row--occupancy" }, h("span", { key: 'f640162d9dff4f326c0b0724f2fb55724799e17b', class: "dp-board__label" }, tr('Lcz_LoginPromoDpOccupancy', 'Occupancy')), WEEK.map((night, index) => this.renderOccupancy(night, index))))), h("dl", { key: 'e902332939e1e54e1fdb9a674c022891486fe0f0', class: "dp-promo__stats" }, h("div", { key: 'fc27ea1985a358427df12ae52ebe61f0f1f1a0ac', class: "dp-stat" }, h("dt", { key: 'e8e1c08163229929e5f6a4a0f4bdc67bcecad87c', class: "dp-stat__label" }, tr('Lcz_LoginPromoDpExtraProfit', 'Extra Profit')), h("dd", { key: 'dd3aac046355c79ced2db06765acec2238b2258a', class: "dp-stat__value dp-stat__value--profit" }, "+", money(this.extraProfit))), h("div", { key: 'db1784e92be0aa2d898b6b072a6ee638f7feb0e4', class: "dp-stat" }, h("dt", { key: 'c7193a6ee9a7a1660c01401fd4b266467a975d11', class: "dp-stat__label" }, tr('Lcz_LoginPromoDpExtraBookings', 'Extra Bookings')), h("dd", { key: '4c22facbcd1f0a04cdb8c963b62768fc4314f0e5', class: "dp-stat__value" }, "+", formatCount(this.extraBookings))))), h("p", { key: '02eca33c7cbf90a17b30c45aea2a23db4b1e1ab4', class: "dp-promo__footer" }, tr('Lcz_LoginPromoDpPrompt', 'Not using Dynamic Pricing yet?'), ' ', h("a", { key: '2a4ead908eaf2bf54ea1c2cde231e6bfe2138239', class: "dp-promo__link", href: `mailto:${CONTACT_EMAIL}?subject=${subject}` }, tr('Lcz_LoginPromoDpCta', 'Contact igloorooms to enable it'), h("wa-icon", { key: 'd7f5b6a452fe75dfd900a9dd1f78ac1cf83d2a3d', class: "dp-promo__arrow", name: "arrow-right" })))));
    }
};
IrLoginAsideDynamicPricing.style = irLoginAsideDynamicPricingCss();

export { IrLoginAsideCalendar as ir_login_aside_calendar, IrLoginAsideDynamicPricing as ir_login_aside_dynamic_pricing };
