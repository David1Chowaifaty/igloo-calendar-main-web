import { h, r as registerInstance, a as getElement, H as Host } from './index-DKZeCK8T.js';
import { A as ApiClient } from './ApiClient-4jHvz1N4.js';
import { B as BookingService } from './booking.store-DE5QtFwo.js';
import { B as BookingListingService } from './index-DVJIoKYt.js';
import { s as sumUnits, f as filterInHouse, c as countRooms, D as DASHBOARD_PAGE_SIZE, a as DATE_CHANGE_DEBOUNCE_MS, l as loadDepartures, b as loadArrivals, d as countOverdueDepartures, e as countDepartingUnits, g as countOverdueArrivals, h as countUnassignedArrivals } from './dashboard.helpers-BSlUkMdp.js';
import { P as PropertyService } from './index-D9mPQ1ky.js';
import { c as calendar_data } from './calendar-data-DknGMMFc.js';
import { a as addDaysISO, n as nightsBetween, t as todayISO } from './calendar-dates-D3hVfsrC.js';
import { r as realtimeService } from './realtime.service-CGYmIxkT.js';
import { L as LanguageSync } from './language-sync-D7Gk7F48.js';
import { S as SCREEN_TABLES, L as LocaleController } from './locale.controller-BdYR01Ld.js';
import { t } from './t-Bvz1wS_D.js';
import { R as RoomService } from './room.service-Dj9W-iXt.js';
import { S as SetupService } from './index-BjCyQqYQ.js';
import { d as setArrivalsPageSize, a as arrivalsStore } from './arrivals.store-CsaTCqrZ.js';
import { e as setDeparturesPageSize, d as departuresStore } from './departures.store-CgrWKna6.js';
import { B as BatchingQueue } from './batch-queue-C1TEoadh.js';
import { b as formatCount } from './number-B8waOzTO.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { c as cjsExports } from './index-Bn8mRT4P.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './IBooking-B4waZCSK.js';
import './types-CB66a07H.js';
import './utils-iP-LMQsp.js';
import './booking.dto-B554ToUQ.js';
import './type-DjfVZqvs.js';
import './ir-date-XXNYhmSL.js';
import './locale-scope-Jre4lb6k.js';
import './language-observer-CHgzsZkY.js';
import './booking-BERGGrrf.js';
import './functions-Ebyqqazo.js';
import './commonSchemas-Cx9w9d8l.js';
import './types-CyZFzmvF.js';
import './utils-BjFJEvis.js';
import './v4-CK3_k8jD.js';

/*
 * Mock fixtures for the dashboard endpoints that don't exist yet (cancellations).
 * Booking fixtures only carry the fields the booking table cells read, so they are cast to `Booking`.
 */
const DIRECT_ORIGIN = { Label: 'Direct | website', Icon: 'https://x.igloorooms.com/assets/images/png/direct.png' };
/** 0 = yesterday, 1 = today, 2 = tomorrow — picks a fixture variant so changing day visibly changes the data. */
function dayIndex(date) {
    const offset = nightsBetween(todayISO(), date);
    return Math.min(Math.max(offset + 1, 0), 2);
}
function mockBooking(input) {
    const [first_name, last_name] = input.guest;
    const guest = { id: Number(input.nbr.slice(-6)), first_name, last_name };
    return {
        booking_nbr: input.nbr,
        channel_booking_nbr: null,
        origin: DIRECT_ORIGIN,
        source: { code: '', description: 'Website', tag: null },
        is_direct: true,
        is_requested_to_cancel: false,
        guest,
        status: input.status ?? { code: '001', description: 'Confirmed' },
        currency: calendar_data.currency ?? { id: 1, code: 'EUR', symbol: '€' },
        booked_on: { date: input.bookedOn ?? input.from, hour: 10, minute: 15 },
        financial: { gross_total: input.total, due_amount: 0, cancelation_penality_as_if_today: 0 },
        guest_financial: { due_amount: 0 },
        rooms: [
            {
                identifier: `${input.nbr}-1`,
                from_date: input.from,
                to_date: input.to,
                guest,
                roomtype: { name: input.roomType },
                unit: input.unit ? { id: Number(input.unit), name: input.unit } : null,
                in_out: { code: input.inOut ?? '000', description: '' },
                occupancy: { adult_nbr: 2, children_nbr: 0, infant_nbr: 0 },
                sharing_persons: [],
            },
        ],
    };
}
function mockCancellations(date) {
    const cancelled = { code: '003', description: 'Cancelled' };
    const rows = [
        mockBooking({
            nbr: '72311904536',
            guest: ['Sophie', 'Laurent'],
            roomType: 'Double room with Balcony',
            unit: null,
            from: addDaysISO(date, 5),
            to: addDaysISO(date, 7),
            total: 0,
            status: cancelled,
            bookedOn: addDaysISO(date, -20),
        }),
        mockBooking({
            nbr: '33018827190',
            guest: ['Henrik', 'Olsen'],
            roomType: 'Suite for 4 with balcony',
            unit: null,
            from: addDaysISO(date, 12),
            to: addDaysISO(date, 15),
            total: 0,
            status: cancelled,
            bookedOn: addDaysISO(date, -41),
        }),
    ];
    return rows.slice(0, dayIndex(date) === 0 ? 1 : 2);
}

/**
 * Data source for the dashboard widgets. Each method covers one day (`params.date`).
 */
class DashboardService {
    bookingService = new BookingService();
    bookingListingService = new BookingListingService();
    propertyService = new PropertyService();
    async getDayPerformance({ property_id, date }) {
        const { DailyStats } = await this.propertyService.getMonthlyStats({ property_id, from_date: date, to_date: date });
        const day = DailyStats?.[0];
        return {
            occupancy: day?.Occupancy ?? 0,
            bookedUnits: day?.Units_booked ?? 0,
            roomRevenue: day?.Rooms_Revenue ?? 0,
            adr: day?.ADR ?? 0,
        };
    }
    async getUnitsSummary({ property_id, date, language }) {
        const days = await this.bookingService.fetchExposedCalendarDays({ propertyid: property_id, from_date: date, to_date: date, language });
        const day = days.find(d => d.value === date) ?? days[0];
        return sumUnits(day?.room_types ?? [], date);
    }
    /** Rooms checked in whose stay covers `date`. */
    async getInHouse({ property_id, date, language }) {
        const bookings = await this.getExposedBookings(property_id, date, { filter_type: '5', booking_status: '002', language });
        return filterInHouse(bookings, date);
    }
    /** Bookings created on `date`. */
    async getNewBookings({ property_id, date, language }) {
        return this.getExposedBookings(property_id, date, { filter_type: '1', booking_status: '', language });
    }
    /**
     * Units (rooms) in bookings made on `date` that still await confirmation.
     * Only meaningful when the property's booking criteria list the pending status (001).
     */
    async getPendingUnits({ property_id, date, language }) {
        const bookings = await this.getExposedBookings(property_id, date, { filter_type: '1', booking_status: '001', language });
        return countRooms(bookings);
    }
    // TODO: replace with real endpoint (bookings cancelled on `date`).
    async getCancellations(params) {
        return mockCancellations(params.date);
    }
    async getExposedBookings(property_id, date, filters) {
        const result = await this.bookingListingService.getExposedBookings({
            property_id,
            from: date,
            to: date,
            balance_filter: '0',
            start_row: 0,
            end_row: DASHBOARD_PAGE_SIZE,
            total_count: 0,
            name: '',
            book_nbr: '',
            affiliate_id: 0,
            is_mpo_managed: false,
            is_mpo_used: false,
            is_for_mobile: false,
            is_combined_view: false,
            is_to_export: false,
            channel: '',
            ...filters,
        }, { skipStore: true });
        return (result ?? []).map(b => ({ ...b, rooms: b.rooms ?? [] }));
    }
}

/*
 * Placeholders for the dashboard parts that load after first paint. They render inside
 * ir-dashboard's scope, so their styles live in `ir-dashboard.css`.
 */
/** Stand-in for a summary card's count. */
const CountSkeleton = () => h("wa-skeleton", { effect: "pulse", class: "dashboard-skeleton dashboard-skeleton--count", "aria-hidden": "true" });
/** Mirrors the booking tables' shared columns: Booking#, Booked by / Guest, Unit, Dates, Balance. */
const COLUMN_SHAPES = ['stacked', 'stacked', 'text', 'stacked', 'pill'];
/** Bar widths (%) cycled across cells so the rows read as text, not as a grid of identical blocks. */
const WIDTHS = [72, 54, 88, 63, 80, 47, 69, 92, 58];
const width = (row, column, line = 0) => `${WIDTHS[(row * 3 + column * 2 + line) % WIDTHS.length]}%`;
const Cell = ({ shape, row, column }) => {
    switch (shape) {
        case 'stacked':
            return (h("div", { class: "dashboard-table-skeleton__cell" }, h("wa-skeleton", { effect: "pulse", class: "dashboard-skeleton", style: { inlineSize: width(row, column) } }), h("wa-skeleton", { effect: "pulse", class: "dashboard-skeleton dashboard-skeleton--meta", style: { inlineSize: width(row, column, 1) } })));
        case 'pill':
            return (h("div", { class: "dashboard-table-skeleton__cell dashboard-table-skeleton__cell--center" }, h("wa-skeleton", { effect: "pulse", class: "dashboard-skeleton dashboard-skeleton--pill" })));
        case 'action':
            return (h("div", { class: "dashboard-table-skeleton__cell dashboard-table-skeleton__cell--end" }, h("wa-skeleton", { effect: "pulse", class: "dashboard-skeleton dashboard-skeleton--action" })));
        default:
            return (h("div", { class: "dashboard-table-skeleton__cell" }, h("wa-skeleton", { effect: "pulse", class: "dashboard-skeleton", style: { inlineSize: width(row, column) } })));
    }
};
/**
 * Stand-in for a panel's booking table, laid out like the real one: a header row of short labels over
 * rows whose cells match the real columns' shapes. Renders more rows than fit; they fade out towards the bottom instead of ending on a hard edge.
 */
const TableSkeleton = ({ rows = 16, extraColumn }) => {
    const shapes = extraColumn ? [...COLUMN_SHAPES, extraColumn] : COLUMN_SHAPES;
    return (h("div", { class: "dashboard-table-skeleton", "aria-busy": "true", "aria-hidden": "true", "data-extra-column": extraColumn }, h("div", { class: "dashboard-table-skeleton__head" }, shapes.map(shape => (h("div", { class: { 'dashboard-table-skeleton__cell': true, 'dashboard-table-skeleton__cell--center': shape === 'pill' } }, shape !== 'action' && h("wa-skeleton", { effect: "pulse", class: "dashboard-skeleton dashboard-skeleton--label" }))))), h("div", { class: "dashboard-table-skeleton__body" }, Array.from({ length: rows }, (_, row) => (h("div", { class: "dashboard-table-skeleton__row" }, shapes.map((shape, column) => (h(Cell, { shape: shape, row: row, column: column })))))))));
};

const irDashboardCss = () => `.sc-ir-dashboard-h{--ease-out:cubic-bezier(0.23, 1, 0.32, 1);display:block}.dashboard-layout.sc-ir-dashboard{display:flex;flex-direction:column;gap:var(--wa-space-l)}.dashboard-aside.sc-ir-dashboard{display:flex;flex-direction:column;gap:var(--wa-space-m)}.dashboard-main.sc-ir-dashboard{display:flex;flex-direction:column;flex:1 1 auto;min-inline-size:0}@media (min-width: 992px){.sc-ir-dashboard-h{--dashboard-table-min-block-size:20rem}ir-page.sc-ir-dashboard{block-size:calc(100dvh - var(--dashboard-reserved-block-size, 0px))}ir-page.sc-ir-dashboard::part(body){flex:1 1 auto;min-block-size:0}.dashboard-layout.sc-ir-dashboard{flex:1 1 auto;flex-direction:row;min-block-size:0}.dashboard-aside.sc-ir-dashboard{flex:0 0 clamp(17rem, 16vw, 20rem);min-block-size:0;overflow-y:auto;scrollbar-width:thin}ir-dashboard-date-navigator.sc-ir-dashboard{flex:none;block-size:var(--dashboard-summary-block-size, auto)}ir-dashboard-stats.sc-ir-dashboard{flex:1 1 auto}.dashboard-main.sc-ir-dashboard{min-block-size:0}.dashboard-tabs.sc-ir-dashboard{flex:1 1 auto;min-block-size:0}.dashboard-tabs.sc-ir-dashboard::part(base){block-size:100%}.dashboard-tabs.sc-ir-dashboard::part(body),.dashboard-tab-panel[active].sc-ir-dashboard,.dashboard-tab-panel.sc-ir-dashboard::part(base){display:flex;flex:1 1 auto;flex-direction:column;min-block-size:0}.dashboard-tab-panel.sc-ir-dashboard>*.sc-ir-dashboard{flex:1 1 auto;min-block-size:var(--dashboard-table-min-block-size)}}.dashboard-tabs.sc-ir-dashboard{--indicator-color:transparent;--track-color:transparent;--track-width:0}.dashboard-tabs.sc-ir-dashboard::part(tabs),.dashboard-tabs.sc-ir-dashboard [part~="tabs"]{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:var(--wa-space-s);border:0}.dashboard-tab.sc-ir-dashboard:last-of-type{grid-column:1 / -1}@media (min-width: 768px){.dashboard-tabs.sc-ir-dashboard::part(tabs){grid-template-columns:repeat(5, minmax(0, 1fr))}.dashboard-tab.sc-ir-dashboard:last-of-type{grid-column:auto}}.dashboard-tab.sc-ir-dashboard{display:block;color:var(--wa-color-text-normal)}.dashboard-tab[active].sc-ir-dashboard{border-block-end:0;margin-block-end:0}.dashboard-tab.sc-ir-dashboard::part(base),.dashboard-tab.sc-ir-dashboard [part~="base"]{display:grid;grid-template-rows:auto 1fr minmax(1.25rem, auto);align-items:start;gap:var(--wa-space-2xs);block-size:100%;min-block-size:6.25rem;padding:var(--wa-space-m);border-radius:var(--wa-border-radius-l);background-color:var(--wa-color-surface-default);white-space:normal;transition:border-color 150ms ease,     box-shadow 150ms ease,     transform 160ms var(--ease-out)}.dashboard-layout--compact.sc-ir-dashboard .dashboard-tab.sc-ir-dashboard::part(base),.dashboard-layout--compact.sc-ir-dashboard .dashboard-tab.sc-ir-dashboard [part~="base"],.dashboard-layout--tight.sc-ir-dashboard .dashboard-tab.sc-ir-dashboard::part(base),.dashboard-layout--tight.sc-ir-dashboard .dashboard-tab.sc-ir-dashboard [part~="base"]{min-block-size:0;padding:var(--wa-space-s) var(--wa-space-m)}.dashboard-layout--compact.sc-ir-dashboard .dashboard-tab__count.sc-ir-dashboard{font-size:var(--wa-font-size-xl)}.dashboard-layout--tight.sc-ir-dashboard .dashboard-tab__count.sc-ir-dashboard{font-size:var(--wa-font-size-l)}.dashboard-tab.sc-ir-dashboard:not([disabled]):active::part(base),.dashboard-tab.sc-ir-dashboard:not([disabled]):active [part~="base"]{transform:scale(0.98)}.dashboard-tab[active].sc-ir-dashboard::part(base),.dashboard-tab[active].sc-ir-dashboard [part~="base"]{border-color:var(--wa-color-brand-fill-loud);box-shadow:inset 0 0 0 1px var(--wa-color-brand-fill-loud)}@media (hover: hover) and (pointer: fine){.dashboard-tab.sc-ir-dashboard:not([active],[disabled]).sc-ir-dashboard:hover::part(base){border-color:var(--wa-color-brand-border-normal)}}.dashboard-tab__label.sc-ir-dashboard{overflow:hidden;font-size:var(--wa-font-size-s);font-weight:var(--wa-font-weight-semibold);color:var(--wa-color-text-quiet);text-overflow:ellipsis;white-space:nowrap;transition:color 150ms ease}.dashboard-tab[active].sc-ir-dashboard .dashboard-tab__label.sc-ir-dashboard,.dashboard-tab[active].sc-ir-dashboard .dashboard-tab__count.sc-ir-dashboard{color:var(--wa-color-brand-on-quiet)}.dashboard-tab__count.sc-ir-dashboard{font-size:var(--wa-font-size-2xl);font-weight:var(--wa-font-weight-bold);line-height:1.1;font-variant-numeric:tabular-nums;transition:color 150ms ease}.dashboard-tab__count-row.sc-ir-dashboard{display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-2xs);min-inline-size:0}.dashboard-tab__notes.sc-ir-dashboard{display:flex;justify-content:flex-end;min-inline-size:0}.dashboard-tab__note.sc-ir-dashboard{padding:0 var(--wa-space-xs);border:var(--wa-border-width-s) var(--wa-border-style) var(--wa-color-warning-border-normal);border-radius:var(--wa-border-radius-pill);color:var(--wa-color-warning-on-quiet);font-size:var(--wa-font-size-xs);font-weight:var(--wa-font-weight-semibold);line-height:1.25rem;white-space:nowrap;max-inline-size:100%;overflow:hidden;text-overflow:ellipsis}.dashboard-tab__note--overdue.sc-ir-dashboard{border-color:var(--wa-color-danger-border-normal);color:var(--wa-color-danger-on-quiet)}.dashboard-tab__note--unassigned.sc-ir-dashboard{border-color:var(--wa-color-brand-fill-loud);background-color:var(--wa-color-brand-fill-loud);color:var(--wa-color-brand-on-loud)}.dashboard-tab-panel.sc-ir-dashboard{--padding:var(--wa-space-m) 0 0}.dashboard-skeleton.sc-ir-dashboard{--color:color-mix(in oklab, var(--wa-color-neutral-fill-normal) 65%, var(--wa-color-surface-default));block-size:0.75rem;min-block-size:0}.dashboard-skeleton.sc-ir-dashboard::part(indicator),.dashboard-skeleton.sc-ir-dashboard [part~="indicator"]{border-radius:var(--wa-border-radius-s)}.dashboard-skeleton--count.sc-ir-dashboard{inline-size:1.75em;block-size:0.8em;margin-block:0.15em}.dashboard-skeleton--label.sc-ir-dashboard{inline-size:3.5rem;block-size:0.625rem}.dashboard-skeleton--meta.sc-ir-dashboard{--color:color-mix(in oklab, var(--wa-color-neutral-fill-normal) 40%, var(--wa-color-surface-default));block-size:0.5rem}.dashboard-skeleton--pill.sc-ir-dashboard{inline-size:4.5rem;block-size:1.25rem}.dashboard-skeleton--action.sc-ir-dashboard{inline-size:7.5rem;block-size:2rem}.dashboard-skeleton--action.sc-ir-dashboard::part(indicator),.dashboard-skeleton--action.sc-ir-dashboard [part~="indicator"]{border-radius:var(--wa-border-radius-m)}.dashboard-table-skeleton.sc-ir-dashboard{display:flex;flex-direction:column;min-block-size:var(--dashboard-table-min-block-size, 60vh);overflow:hidden;background-color:var(--wa-color-surface-default)}.dashboard-table-skeleton__head.sc-ir-dashboard,.dashboard-table-skeleton__row.sc-ir-dashboard{display:grid;grid-template-columns:minmax(0, 1.1fr) minmax(0, 1.2fr) minmax(0, 2fr) minmax(0, 1fr) minmax(0, 0.9fr);align-items:center;column-gap:var(--wa-space-l);min-inline-size:40rem;padding-inline:1rem}.dashboard-table-skeleton[data-extra-column].sc-ir-dashboard .dashboard-table-skeleton__head.sc-ir-dashboard,.dashboard-table-skeleton[data-extra-column].sc-ir-dashboard .dashboard-table-skeleton__row.sc-ir-dashboard{grid-template-columns:minmax(0, 1.1fr) minmax(0, 1.2fr) minmax(0, 2fr) minmax(0, 1fr) minmax(0, 0.9fr) minmax(0, 1fr)}.dashboard-table-skeleton__head.sc-ir-dashboard{flex:none;min-block-size:3.625rem;border-block-end:var(--wa-border-width-s) var(--wa-border-style) var(--wa-color-neutral-border-normal)}.dashboard-table-skeleton__body.sc-ir-dashboard{flex:1 1 auto;min-block-size:0;overflow:hidden;mask-image:linear-gradient(to bottom, #000 35%, transparent)}.dashboard-table-skeleton__row.sc-ir-dashboard{min-block-size:3.3rem;border-block-end:var(--wa-border-width-s) var(--wa-border-style) var(--wa-color-neutral-border-quiet)}.dashboard-table-skeleton__cell.sc-ir-dashboard{display:flex;flex-direction:column;align-items:flex-start;gap:0.375rem;min-inline-size:0}.dashboard-table-skeleton__cell--center.sc-ir-dashboard{align-items:center}.dashboard-table-skeleton__cell--end.sc-ir-dashboard{align-items:flex-end}@media (prefers-reduced-motion: reduce){.dashboard-tab.sc-ir-dashboard::part(base){transition:none}.dashboard-skeleton.sc-ir-dashboard::part(indicator){animation:none}.dashboard-tab.sc-ir-dashboard:active::part(base){transform:none}}`;

const TABS = ['arrivals', 'departures', 'inHouse', 'bookings', 'cancellations'];
/** Shape of each tab's last table column in its skeleton: the check-in / check-out button, "Booked on", or the status; in-house has none. */
const SKELETON_EXTRA_COLUMN = {
    arrivals: 'action',
    departures: 'action',
    bookings: 'text',
    cancellations: 'pill',
};
/**
 * Endpoints that show ir-page's full-page loader: the interceptor's defaults minus the calendar and
 * bookings reads, which the dashboard covers with skeletons instead.
 */
const OVERLAY_ENDPOINTS = ['/ReAllocate_Exposed_Room', '/UnBlock_Exposed_Unit'];
/** Desktop breakpoint where the rail sits beside the table and shares its height (matches ir-dashboard.css). */
const DESKTOP_QUERY = '(min-width: 992px)';
/** Rail heights (px) where each density still leaves the ring room (11rem spacious, 9rem regular, 7.5rem compact); tight lets it shrink. */
const RAIL_SPACIOUS_MIN_HEIGHT = 720;
const RAIL_REGULAR_MIN_HEIGHT = 650;
const RAIL_COMPACT_MIN_HEIGHT = 570;
const IrDashboard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    /** Authentication token issued by the PMS backend. */
    ticket;
    /** ID of the property (hotel). */
    propertyid;
    /** Two-letter language code used for translations and API locale. */
    language = 'en';
    /** Property alias (aname), used when `propertyid` is missing. */
    p;
    /** API base URL override. */
    baseurl;
    isPageLoading = true;
    isPerformanceLoading = false;
    isUnitsLoading = false;
    isPendingLoading = false;
    selectedDate = todayISO();
    activeTab = 'arrivals';
    /** How tightly the rail's cards are drawn, so they fit the height the host page leaves on desktop. */
    railDensity = 'regular';
    asOf;
    performance;
    units;
    pendingUnits = null;
    /** Whether the property's booking criteria include the pending status (001); without it there's nothing to fetch and Pending shows 0. */
    hasPendingStatus = true;
    inHouse = [];
    newBookings = [];
    cancellations = [];
    /** Day each tab's data was loaded for. A tab whose entry isn't `selectedDate` shows a spinner instead of its panel and count. */
    tabDates = {};
    /** Tabs with a fetch in flight for the current `loadSeq`. A tab still loading its day's data is disabled. */
    loadingTabs = {};
    countries;
    paymentEntries;
    bookingNumber;
    checkoutRoomIdentifier = null;
    booking;
    payment;
    apiClientService = new ApiClient();
    roomService = new RoomService();
    bookingService = new BookingService();
    bookingListingService = new BookingListingService();
    setupService = new SetupService();
    dashboardService = new DashboardService();
    paymentFolioRef;
    /** Guards against out-of-order responses when the day changes quickly. */
    loadSeq = 0;
    /** `loadSeq` each tab was last fetched under, so a tab is fetched at most once per load (background prefetch or show). */
    tabSeqs = {};
    /** Settles once `calendar_data.property` is loaded; the arrivals / departures stores wait on it. */
    propertyReady = Promise.resolve();
    tabGroupRef;
    /** Set when a new day's arrivals land; the next render selects the arrivals tab in the tab group. */
    selectArrivalsAfterRender = false;
    unsubscribeRealtime = null;
    /** Day changes, debounced into a single day load. */
    dayChange$ = new cjsExports.Subject();
    dayChangeSubscription = null;
    /** Set while a day change's debounced load is waiting; clearing it drops that load. */
    isDayLoadPending = false;
    /** Collects realtime notifications so a burst triggers one refresh, at most every 3s. */
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new LanguageSync(SCREEN_TABLES.dashboard, () => this.init());
    realtimeQueue = new BatchingQueue(messages => this.processRealtimeBatch(messages), {
        batchSize: 1000,
        flushInterval: 3000,
        onError: e => console.error('Dashboard realtime refresh error:', e),
    });
    /** Watches the host page so a header or footer that resizes or mounts late re-fits the dashboard. */
    pageResizeObserver = null;
    fitFrame = null;
    /** Last height (px) the host page renders above and below the dashboard. */
    reservedBlockSize = null;
    asideRef;
    async componentDidRender() {
        if (!this.selectArrivalsAfterRender || !this.tabGroupRef) {
            return;
        }
        this.selectArrivalsAfterRender = false;
        // wa-tab-group refuses to select a disabled tab, and the arrivals tab is disabled until its data lands. Its `active`
        // may already read "arrivals" (first load), so re-run the selection now that the tab is enabled.
        await this.tabGroupRef.updateComplete;
        this.tabGroupRef.updateActiveTab();
    }
    connectedCallback() {
        this.dayChangeSubscription = this.dayChange$
            .pipe(cjsExports.debounceTime(DATE_CHANGE_DEBOUNCE_MS), 
        // A direct `loadDay` while the debounce was running already loaded the day.
        cjsExports.filter(() => this.isDayLoadPending))
            .subscribe(() => this.loadDay());
    }
    componentWillLoad() {
        if (this.baseurl) {
            this.apiClientService.setBaseUrl(this.baseurl);
        }
        setArrivalsPageSize(DASHBOARD_PAGE_SIZE);
        setDeparturesPageSize(DASHBOARD_PAGE_SIZE);
        if (this.ticket) {
            this.apiClientService.setApiClient(this.ticket);
            this.init();
        }
    }
    componentDidLoad() {
        this.languageSync.connect();
        this.fitToPage();
        window.addEventListener('resize', this.scheduleFitToPage);
        this.pageResizeObserver = new ResizeObserver(this.scheduleFitToPage);
        this.pageResizeObserver.observe(document.body);
        this.pageResizeObserver.observe(this.asideRef);
        const tab = this.el.querySelector('.dashboard-tab');
        if (tab) {
            this.pageResizeObserver.observe(tab);
        }
    }
    disconnectedCallback() {
        window.removeEventListener('resize', this.scheduleFitToPage);
        this.pageResizeObserver?.disconnect();
        this.pageResizeObserver = null;
        if (this.fitFrame !== null) {
            cancelAnimationFrame(this.fitFrame);
            this.fitFrame = null;
        }
        this.languageSync.disconnect();
        this.unsubscribeRealtime?.();
        this.unsubscribeRealtime = null;
        this.realtimeQueue.clear();
        this.dayChangeSubscription?.unsubscribe();
        this.dayChangeSubscription = null;
        this.isDayLoadPending = false;
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue && newValue !== oldValue) {
            this.apiClientService.setApiClient(newValue);
            this.init();
        }
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    handleOpenBookingDetails(e) {
        this.bookingNumber = e.detail;
    }
    handlePayBookingBalance(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { booking_nbr, payment } = e.detail;
        this.booking = this.findBooking(booking_nbr);
        const paymentType = this.paymentEntries?.types.find(p => p.CODE_NAME === payment.payment_type.code);
        this.payment = {
            ...payment,
            payment_type: {
                code: paymentType?.CODE_NAME,
                description: paymentType?.CODE_VALUE_EN,
                operation: paymentType?.NOTES,
            },
        };
        this.paymentFolioRef?.openFolio();
    }
    handleResetCancellationDueAmount(e) {
        this.reloadAfterChange(e);
    }
    handleUpdateRoomGuests(e) {
        this.reloadAfterChange(e);
    }
    reloadAfterChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.loadDay();
    }
    scheduleFitToPage = () => {
        if (this.fitFrame !== null) {
            return;
        }
        this.fitFrame = requestAnimationFrame(() => {
            this.fitFrame = null;
            this.fitToPage();
        });
    };
    fitToPage() {
        this.measureReserved();
        this.updateRailDensity();
        this.measureSummaryRow();
    }
    /**
     * Gives the date card the summary cards' height, so the rail's cards line up with the tab cards and the table beside
     * them. The tab cards' height comes from their own content, never from the date card, so this can't feed back.
     */
    measureSummaryRow() {
        const tab = this.el.querySelector('.dashboard-tab');
        const height = tab?.getBoundingClientRect().height ?? 0;
        if (height > 0) {
            this.el.style.setProperty('--dashboard-summary-block-size', `${height}px`);
        }
    }
    /**
     * Height of what the page renders under the dashboard: every in-flow element after it (or after one of its ancestors)
     * that sits below it, plus the ancestors' bottom padding and borders and the body's bottom margin. Summing those
     * rather than reading the document's height keeps the dashboard's own overflow (a short screen under the tables'
     * height floor) from counting as footer and shrinking the dashboard further.
     */
    measureBelow() {
        let below = 0;
        let node = this.el;
        while (node.parentElement && node !== document.body) {
            const bottom = node.getBoundingClientRect().bottom;
            for (let sibling = node.nextElementSibling; sibling; sibling = sibling.nextElementSibling) {
                const style = getComputedStyle(sibling);
                const rect = sibling.getBoundingClientRect();
                // Skips hidden and out-of-flow elements, and ones beside the dashboard rather than under it.
                if (style.display === 'none' || style.position === 'absolute' || style.position === 'fixed' || rect.top < bottom - 1) {
                    continue;
                }
                below += rect.height + parseFloat(style.marginBlockStart) + parseFloat(style.marginBlockEnd);
            }
            const parent = node.parentElement;
            const parentStyle = getComputedStyle(parent);
            below += parseFloat(parentStyle.paddingBlockEnd) + parseFloat(parentStyle.borderBlockEndWidth);
            if (parent === document.body) {
                below += parseFloat(parentStyle.marginBlockEnd);
            }
            node = parent;
        }
        return below;
    }
    /**
     * Picks the rail density from the rail's height, which the layout sets (not its content), so a density change never
     * re-triggers itself. Below the desktop breakpoint the rail is content-sized and stays regular.
     */
    updateRailDensity() {
        const height = this.asideRef?.clientHeight ?? 0;
        let density = 'regular';
        if (window.matchMedia(DESKTOP_QUERY).matches && height > 0) {
            if (height >= RAIL_SPACIOUS_MIN_HEIGHT) {
                density = 'spacious';
            }
            else if (height >= RAIL_REGULAR_MIN_HEIGHT) {
                density = 'regular';
            }
            else {
                density = height >= RAIL_COMPACT_MIN_HEIGHT ? 'compact' : 'tight';
            }
        }
        if (density !== this.railDensity) {
            this.railDensity = density;
        }
    }
    /**
     * Measures what the host page renders above (header, body padding) and below (footer) the dashboard, so the desktop
     * layout's height is the viewport minus that and the page never scrolls. Writing only on change keeps the body
     * observer from looping: our own resize re-measures to the same value.
     */
    measureReserved() {
        const above = this.el.getBoundingClientRect().top + window.scrollY;
        const reserved = Math.max(0, Math.round(above + this.measureBelow()));
        if (reserved === this.reservedBlockSize) {
            return;
        }
        this.reservedBlockSize = reserved;
        this.el.style.setProperty('--dashboard-reserved-block-size', `${reserved}px`);
    }
    get propertyId() {
        return calendar_data.property?.id ?? this.propertyid;
    }
    async init() {
        try {
            this.isPageLoading = true;
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = LocaleController.load({ language: this.language, tables: SCREEN_TABLES.dashboard });
            if (!this.propertyid && !this.p) {
                throw new Error('Missing credentials');
            }
            ++this.loadSeq;
            const propertyReady = calendar_data?.property
                ? Promise.resolve(null)
                : this.roomService.getExposedProperty({ id: this.propertyid || 0, aname: this.p, language: LocaleController.language, is_backend: true });
            this.propertyReady = propertyReady;
            // With a known id these go out alongside the property; with only an alias they need its id first.
            const withPropertyId = (fn) => (this.propertyId ? fn() : propertyReady.then(fn));
            const [, , criteria, countries, paymentEntries] = await Promise.all([
                propertyReady,
                localeReady,
                withPropertyId(() => this.bookingListingService.getExposedBookingsCriteria({ property_id: this.propertyId, language: LocaleController.language })),
                this.bookingService.getCountries(LocaleController.language),
                this.setupService.getPaymentEntries(),
                withPropertyId(() => this.loadTab('arrivals')),
            ]);
            this.hasPendingStatus = !!criteria?.statuses?.some(status => status.code === '001');
            this.countries = countries;
            this.paymentEntries = paymentEntries;
            this.subscribeRealtime();
        }
        catch (error) {
            console.error(error);
            return;
        }
        finally {
            this.isPageLoading = false;
        }
        this.loadRest();
    }
    subscribeRealtime() {
        this.unsubscribeRealtime?.();
        this.unsubscribeRealtime = realtimeService.subscribe(this.propertyId, msg => {
            if (msg.reason === 'UPDATE_CALENDAR_AVAILABILITY' || msg.reason === 'ROOM_STATUS_CHANGED') {
                this.realtimeQueue.offer(msg);
            }
        });
    }
    /** Runs one refresh for every notification queued in the last 3s. */
    async processRealtimeBatch(messages) {
        // Init is already loading fresh data.
        if (this.isPageLoading) {
            return;
        }
        if (messages.some(msg => msg.reason === 'UPDATE_CALENDAR_AVAILABILITY')) {
            await this.loadDay();
            return;
        }
        // Checking a guest in or out also changes who's in-house.
        const tabs = new Set(['inHouse']);
        for (const msg of messages) {
            if (msg.reason === 'ROOM_STATUS_CHANGED') {
                tabs.add(this.tabForRoomStatus(msg.payload));
            }
        }
        const seq = this.loadSeq;
        await Promise.all([...this.loadStats(), ...[...tabs].map(tab => this.reloadTab(tab))]);
        if (seq === this.loadSeq) {
            this.asOf = hooks().format('HH:mm');
        }
    }
    /** The tab a room's status change belongs to: the one already listing the room, else the one its new status points to. */
    tabForRoomStatus({ room_identifier, status }) {
        const listsRoom = (bookings) => bookings?.some(b => b.rooms?.some(r => r.identifier === room_identifier));
        if (listsRoom(departuresStore.bookings)) {
            return 'departures';
        }
        if (listsRoom(arrivalsStore.bookings)) {
            return 'arrivals';
        }
        return status === '002' ? 'departures' : 'arrivals';
    }
    /** Re-fetches one tab for the current day without marking the other tabs stale. */
    reloadTab(tab) {
        delete this.tabSeqs[tab];
        return this.loadTab(tab);
    }
    /**
     * (Re)loads the selected day. Bumping `loadSeq` drops in-flight responses for the previous day
     * and marks every tab stale.
     */
    loadDay() {
        this.isDayLoadPending = false;
        ++this.loadSeq;
        return this.loadRest();
    }
    /** Phases 2 and 3: the visible tab and the stats first, then the other tabs in the background. */
    async loadRest() {
        const seq = this.loadSeq;
        await Promise.all([this.loadTab(this.activeTab), ...this.loadStats()]);
        // A newer day took over and runs its own background pass.
        if (seq !== this.loadSeq) {
            return;
        }
        this.asOf = hooks().format('HH:mm');
        await Promise.all(TABS.map(tab => this.loadTab(tab)));
    }
    loadStats() {
        const params = { property_id: this.propertyId, date: this.selectedDate, language: LocaleController.language };
        const loads = [
            this.loadStat(() => this.dashboardService.getDayPerformance(params), performance => (this.performance = performance), loading => (this.isPerformanceLoading = loading)),
            this.loadStat(() => this.dashboardService.getUnitsSummary(params), units => (this.units = units), loading => (this.isUnitsLoading = loading)),
        ];
        if (this.hasPendingStatus) {
            loads.push(this.loadStat(() => this.dashboardService.getPendingUnits(params), pendingUnits => (this.pendingUnits = pendingUnits), loading => (this.isPendingLoading = loading)));
        }
        else {
            this.pendingUnits = 0;
        }
        return loads;
    }
    /** Fetches one stats source for the current day, dropping the result if a newer day was requested meanwhile. */
    async loadStat(fetch, apply, setLoading) {
        const seq = this.loadSeq;
        setLoading(true);
        try {
            const value = await fetch();
            if (seq === this.loadSeq) {
                apply(value);
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            if (seq === this.loadSeq) {
                setLoading(false);
            }
        }
    }
    /** Fetches a tab's data unless it was already fetched (or is in flight) for the current `loadSeq`. */
    async loadTab(tab) {
        if (this.tabSeqs[tab] === this.loadSeq) {
            return;
        }
        const seq = this.loadSeq;
        const date = this.selectedDate;
        this.tabSeqs[tab] = seq;
        // A same-day refresh (after an action in a drawer or dialog) keeps the user on their tab.
        const isNewDay = this.tabDates[tab] !== date;
        this.loadingTabs = { ...this.loadingTabs, [tab]: true };
        try {
            await this.fetchTab(tab, date, seq);
            if (seq === this.loadSeq) {
                this.tabDates = { ...this.tabDates, [tab]: date };
                // Every new day's arrivals open the arrivals tab.
                if (tab === 'arrivals' && isNewDay) {
                    this.activeTab = 'arrivals';
                    this.selectArrivalsAfterRender = true;
                }
            }
        }
        catch (error) {
            console.error(error);
            // Let the next show retry.
            if (this.tabSeqs[tab] === seq) {
                delete this.tabSeqs[tab];
            }
        }
        finally {
            // A stale load leaves the flag to the current day's load of this tab, which always follows.
            if (seq === this.loadSeq) {
                this.loadingTabs = { ...this.loadingTabs, [tab]: false };
            }
        }
    }
    async fetchTab(tab, date, seq) {
        const params = { property_id: this.propertyId, date, language: LocaleController.language };
        switch (tab) {
            case 'arrivals':
                return loadArrivals(this.propertyId, date, this.propertyReady);
            case 'departures':
                return loadDepartures(this.propertyId, date, this.propertyReady);
            case 'inHouse': {
                const inHouse = await this.dashboardService.getInHouse(params);
                if (seq === this.loadSeq) {
                    this.inHouse = inHouse;
                }
                return;
            }
            case 'bookings': {
                const newBookings = await this.dashboardService.getNewBookings(params);
                if (seq === this.loadSeq) {
                    this.newBookings = newBookings;
                }
                return;
            }
            case 'cancellations': {
                const cancellations = await this.dashboardService.getCancellations(params);
                if (seq === this.loadSeq) {
                    this.cancellations = cancellations;
                }
                return;
            }
        }
    }
    isTabLoaded(tab) {
        return this.tabDates[tab] === this.selectedDate;
    }
    findBooking(bookingNumber) {
        const pools = [arrivalsStore.bookings, departuresStore.bookings, this.inHouse, this.newBookings, this.cancellations];
        for (const pool of pools) {
            const match = pool?.find(b => b.booking_nbr === bookingNumber);
            if (match) {
                return match;
            }
        }
        return undefined;
    }
    handleDateChange(e) {
        e.stopPropagation();
        this.selectedDate = e.detail;
        // Drop the previous day's in-flight responses now, rather than when the debounced load starts.
        ++this.loadSeq;
        // While init is running the day isn't loadable yet (no property): init's `loadRest` loads `selectedDate` once it finishes.
        if (this.isPageLoading) {
            return;
        }
        // Dim the previous day's figures straight away; the debounced load clears the flags when the new day's land.
        this.isPerformanceLoading = true;
        this.isUnitsLoading = true;
        this.isPendingLoading = this.hasPendingStatus;
        this.isDayLoadPending = true;
        this.dayChange$.next();
    }
    handleTabShow(e) {
        // Ignore wa-tab-show bubbling up from tab groups nested inside the panels.
        if (e.target !== e.currentTarget) {
            return;
        }
        this.activeTab = e.detail.name;
        // During init the property may not be loaded yet, and during a day change's debounce the day isn't settled;
        // either way the coming `loadRest` loads the active tab first.
        if (this.isPageLoading || this.isDayLoadPending) {
            return;
        }
        this.loadTab(this.activeTab);
    }
    handleCheckoutRedirect(e) {
        e.stopPropagation();
        this.checkoutRoomIdentifier = e.detail.identifier;
        this.bookingNumber = e.detail.bookingNumber;
    }
    get counts() {
        const today = todayISO();
        return {
            // The API's total spans every page; the loaded page is the fallback when it omits it.
            arrivals: arrivalsStore.pagination.total || arrivalsStore.bookings.length,
            unassignedArrivals: countUnassignedArrivals(arrivalsStore.bookings, this.selectedDate),
            overdueArrivals: countOverdueArrivals(arrivalsStore.bookings, today),
            departures: countDepartingUnits(departuresStore.bookings, this.selectedDate),
            overdueDepartures: countOverdueDepartures(departuresStore.bookings, today),
            inHouse: countRooms(this.inHouse),
            bookings: this.newBookings.length,
            cancellations: this.cancellations.length,
        };
    }
    renderTab(tab, label, count, { overdueNote, unassigned } = {}) {
        // Counts come from the tab's own data, so they're unknown until the tab has been opened for this day.
        const loaded = this.isTabLoaded(tab);
        // Disabled only while its data is on the way (or the page itself is loading); a failed load stays clickable so showing it retries.
        // Same-day refreshes keep the loaded data on screen, so the tab stays enabled.
        const disabled = !loaded && (this.isPageLoading || !!this.loadingTabs[tab]);
        return (h("wa-tab", { slot: "nav", panel: tab, class: "dashboard-tab", "data-tab": tab, disabled: disabled }, h("span", { class: "dashboard-tab__label" }, label), h("span", { class: "dashboard-tab__count-row" }, h("span", { class: "dashboard-tab__count" }, loaded ? formatCount(count) : h(CountSkeleton, null)), loaded && unassigned > 0 && (h("span", { class: "dashboard-tab__note dashboard-tab__note--unassigned" }, t('Lcz_UnassignedCount', { fallback: '%1 unassigned', params: [formatCount(unassigned)] })))), h("span", { class: "dashboard-tab__notes" }, loaded && overdueNote && h("span", { class: "dashboard-tab__note dashboard-tab__note--overdue" }, overdueNote))));
    }
    renderPanel(tab) {
        // Only the visible panel is mounted, so hidden panels don't keep their dialogs and tables alive.
        if (tab !== this.activeTab) {
            return null;
        }
        // Skeleton only while the tab has no data for this day yet; same-day refreshes keep the panel (and its open dialogs) mounted.
        if (!this.isTabLoaded(tab)) {
            return h(TableSkeleton, { extraColumn: SKELETON_EXTRA_COLUMN[tab] });
        }
        switch (tab) {
            case 'arrivals':
                return h("ir-dashboard-arrivals", { language: this.language, countries: this.countries });
            case 'departures':
                return (h("ir-dashboard-departures", { propertyId: this.propertyId, date: this.selectedDate, onCheckoutRedirect: e => this.handleCheckoutRedirect(e) }));
            case 'inHouse':
                return (h("ir-dashboard-bookings-table", { variant: "inHouse", bookings: this.inHouse, emptyMessage: t('Lcz_NoGuestsInHouse', { fallback: 'No guests in-house.' }) }));
            case 'bookings':
                return (h("ir-dashboard-bookings-table", { variant: "newBookings", bookings: this.newBookings, emptyMessage: t('Lcz_NoBookingsMadeOnThisDay', { fallback: 'No bookings made on this day.' }) }));
            case 'cancellations':
                return (h("ir-dashboard-bookings-table", { variant: "cancellations", bookings: this.cancellations, emptyMessage: t('Lcz_NoCancellationsOnThisDay', { fallback: 'No cancellations on this day.' }) }));
        }
    }
    render() {
        const counts = this.counts;
        return (h(Host, { key: '788f726e3380ed0fe380c619e91495b0d231f7a8' }, h("ir-page", { key: 'ad0f3c1372adf8f3d623af2442e51a029888daec', label: t('Lcz_Dashboard', { fallback: 'Dashboard' }), handledEndpoints: OVERLAY_ENDPOINTS }, h("div", { key: '31d69d54ca3a020ec7fa84f5ec3d67b3052917e9', class: `dashboard-layout dashboard-layout--${this.railDensity}` }, h("aside", { key: '5106a5a07b811f85f26a016a1caa7c9d6c8a6a4c', class: "dashboard-aside", ref: el => (this.asideRef = el) }, h("ir-dashboard-date-navigator", { key: '0bd6b4ac204779aca7d848dc8fbb0490e09a61c5', date: this.selectedDate, density: this.railDensity, onDateChange: e => this.handleDateChange(e) }), h("ir-dashboard-stats", { key: '4160d60a7e24a3d4482dd93e08065e24da7e61e4', density: this.railDensity, performance: this.performance, units: this.units, pendingUnits: this.pendingUnits, currencySymbol: calendar_data.currency?.symbol, performanceLoading: this.isPerformanceLoading, unitsLoading: this.isUnitsLoading, pendingLoading: this.isPendingLoading })), h("section", { key: '8d47712bb1406d243bd05b5f2d93308269251c0f', class: "dashboard-main", "aria-busy": this.isPageLoading ? 'true' : null }, h("wa-tab-group", { key: '3cfd58be1f0afe6e8ccaab230abe7f7db6304a83', class: "dashboard-tabs", ref: el => (this.tabGroupRef = el), activation: "manual", active: this.activeTab, withoutScrollControls: true, "onwa-tab-show": e => this.handleTabShow(e) }, this.renderTab('arrivals', t('Lcz_Arrivals', { fallback: 'Arrivals' }), counts.arrivals, {
            overdueNote: counts.overdueArrivals > 0 ? t('Lcz_OverdueCheckInsCount', { fallback: '%1 overdue check-ins', params: [formatCount(counts.overdueArrivals)] }) : undefined,
            unassigned: counts.unassignedArrivals,
        }), this.renderTab('departures', t('Lcz_Departures', { fallback: 'Departures' }), counts.departures, {
            overdueNote: counts.overdueDepartures > 0
                ? t('Lcz_OverdueCheckOutsCount', { fallback: '%1 overdue check-outs', params: [formatCount(counts.overdueDepartures)] })
                : undefined,
        }), this.renderTab('inHouse', t('Lcz_InHouse', { fallback: 'In-house' }), counts.inHouse), this.renderTab('bookings', t('Lcz_Bookings', { fallback: 'Bookings' }), counts.bookings), this.renderTab('cancellations', t('Lcz_Cancellations', { fallback: 'Cancellations' }), counts.cancellations), TABS.map(tab => (h("wa-tab-panel", { key: tab, name: tab, class: "dashboard-tab-panel" }, this.renderPanel(tab)))))))), !this.isPageLoading && [
            h("ir-booking-details-drawer", { key: '2e7bac97419009149413a2de8be1c56ea7297a66', open: !!this.bookingNumber, propertyId: this.propertyId, bookingNumber: this.bookingNumber?.toString(), checkoutRoomIdentifier: this.checkoutRoomIdentifier, ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => {
                    this.bookingNumber = null;
                    this.checkoutRoomIdentifier = null;
                    this.loadDay();
                } }),
            h("ir-payment-folio", { key: '4f2a9463b194a25594a6ed4e90c8bac1dbc10787', style: { height: 'auto' }, booking: this.booking, bookingNumber: this.booking?.booking_nbr, paymentEntries: this.paymentEntries, payment: this.payment, mode: 'payment-action', ref: el => (this.paymentFolioRef = el), onCloseModal: () => {
                    this.booking = null;
                    this.payment = null;
                } }),
        ]));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }],
        "language": [{
                "languageChanged": 0
            }]
    }; }
};
IrDashboard.style = irDashboardCss();

export { IrDashboard as ir_dashboard };
