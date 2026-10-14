'use strict';

var index$2 = require('./index-IDeZZwEK.js');
var ApiClient = require('./ApiClient-u7fuhiXA.js');
var booking_service = require('./booking.service-xFFQEG7h.js');
var index = require('./index-g72tsL_B.js');
var dashboard_helpers = require('./dashboard.helpers-LJmbV4HP.js');
var index$1 = require('./index-CK0Nvnny.js');
var calendarData = require('./calendar-data-DZk0v7WL.js');
var calendarDates = require('./calendar-dates-BxDGM1ix.js');
var realtime_service = require('./realtime.service-BMgF8Zdb.js');
var languageSync = require('./language-sync-w92_g_pi.js');
var locale_controller = require('./locale.controller-BtkICUK3.js');
var t = require('./t-sd8HJHNy.js');
var room_service = require('./room.service-DgB2Jucs.js');
var index$3 = require('./index-B68FhsPq.js');
var arrivals_store = require('./arrivals.store-DgqgVg8s.js');
var departures_store = require('./departures.store-GRnPmXjI.js');
var batchQueue = require('./batch-queue-gfZuZuvL.js');
var number = require('./number-D6oFwIUn.js');
var moment = require('./moment-CdViwxPQ.js');
var index$4 = require('./index-Dssn3hdS.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./IBooking-hDE_y33g.js');
require('./types-BVJQZ50e.js');
require('./utils-CpEd8z_J.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
require('./ir-date-Bjy8vNGm.js');
require('./locales.store-D6DJIhoZ.js');
require('./language-observer-DKp37LIu.js');
require('./booking-DETR93Bg.js');
require('./functions-BsloxeNr.js');
require('./commonSchemas-D4iFLV5-.js');
require('./types-sp5nWPAa.js');
require('./utils-DdTHrEYB.js');
require('./v4-_2BfiRUa.js');

/*
 * Mock fixtures for the dashboard endpoints that don't exist yet (cancellations).
 * Booking fixtures only carry the fields the booking table cells read, so they are cast to `Booking`.
 */
const DIRECT_ORIGIN = { Label: 'Direct | website', Icon: 'https://x.igloorooms.com/assets/images/png/direct.png' };
/** 0 = yesterday, 1 = today, 2 = tomorrow — picks a fixture variant so changing day visibly changes the data. */
function dayIndex(date) {
    const offset = calendarDates.nightsBetween(calendarDates.todayISO(), date);
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
        currency: calendarData.calendar_data.currency ?? { id: 1, code: 'EUR', symbol: '€' },
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
            from: calendarDates.addDaysISO(date, 5),
            to: calendarDates.addDaysISO(date, 7),
            total: 0,
            status: cancelled,
            bookedOn: calendarDates.addDaysISO(date, -20),
        }),
        mockBooking({
            nbr: '33018827190',
            guest: ['Henrik', 'Olsen'],
            roomType: 'Suite for 4 with balcony',
            unit: null,
            from: calendarDates.addDaysISO(date, 12),
            to: calendarDates.addDaysISO(date, 15),
            total: 0,
            status: cancelled,
            bookedOn: calendarDates.addDaysISO(date, -41),
        }),
    ];
    return rows.slice(0, dayIndex(date) === 0 ? 1 : 2);
}

/**
 * Data source for the dashboard widgets. Each method covers one day (`params.date`).
 */
class DashboardService {
    bookingService = new booking_service.BookingService();
    bookingListingService = new index.BookingListingService();
    propertyService = new index$1.PropertyService();
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
        return dashboard_helpers.sumUnits(day?.room_types ?? [], date);
    }
    /** Rooms checked in whose stay covers `date`. */
    async getInHouse({ property_id, date, language }) {
        const bookings = await this.getExposedBookings(property_id, date, { filter_type: '5', booking_status: '002', language });
        return dashboard_helpers.filterInHouse(bookings, date);
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
        return dashboard_helpers.countRooms(bookings);
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
            end_row: dashboard_helpers.DASHBOARD_PAGE_SIZE,
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
const CountSkeleton = () => index$2.h("wa-skeleton", { effect: "pulse", class: "dashboard-skeleton dashboard-skeleton--count", "aria-hidden": "true" });
/** Mirrors the booking tables' shared columns: Booking#, Booked by / Guest, Unit, Dates, Balance. */
const COLUMN_SHAPES = ['stacked', 'stacked', 'text', 'stacked', 'pill'];
/** Bar widths (%) cycled across cells so the rows read as text, not as a grid of identical blocks. */
const WIDTHS = [72, 54, 88, 63, 80, 47, 69, 92, 58];
const width = (row, column, line = 0) => `${WIDTHS[(row * 3 + column * 2 + line) % WIDTHS.length]}%`;
const Cell = ({ shape, row, column }) => {
    switch (shape) {
        case 'stacked':
            return (index$2.h("div", { class: "dashboard-table-skeleton__cell" }, index$2.h("wa-skeleton", { effect: "pulse", class: "dashboard-skeleton", style: { inlineSize: width(row, column) } }), index$2.h("wa-skeleton", { effect: "pulse", class: "dashboard-skeleton dashboard-skeleton--meta", style: { inlineSize: width(row, column, 1) } })));
        case 'pill':
            return (index$2.h("div", { class: "dashboard-table-skeleton__cell dashboard-table-skeleton__cell--center" }, index$2.h("wa-skeleton", { effect: "pulse", class: "dashboard-skeleton dashboard-skeleton--pill" })));
        case 'action':
            return (index$2.h("div", { class: "dashboard-table-skeleton__cell dashboard-table-skeleton__cell--end" }, index$2.h("wa-skeleton", { effect: "pulse", class: "dashboard-skeleton dashboard-skeleton--action" })));
        default:
            return (index$2.h("div", { class: "dashboard-table-skeleton__cell" }, index$2.h("wa-skeleton", { effect: "pulse", class: "dashboard-skeleton", style: { inlineSize: width(row, column) } })));
    }
};
/**
 * Stand-in for a panel's booking table, laid out like the real one: a header row of short labels over
 * rows whose cells match the real columns' shapes. Renders more rows than fit; they fade out towards the bottom instead of ending on a hard edge.
 */
const TableSkeleton = ({ rows = 16, extraColumn }) => {
    const shapes = extraColumn ? [...COLUMN_SHAPES, extraColumn] : COLUMN_SHAPES;
    return (index$2.h("div", { class: "dashboard-table-skeleton", "aria-busy": "true", "aria-hidden": "true", "data-extra-column": extraColumn }, index$2.h("div", { class: "dashboard-table-skeleton__head" }, shapes.map(shape => (index$2.h("div", { class: { 'dashboard-table-skeleton__cell': true, 'dashboard-table-skeleton__cell--center': shape === 'pill' } }, shape !== 'action' && index$2.h("wa-skeleton", { effect: "pulse", class: "dashboard-skeleton dashboard-skeleton--label" }))))), index$2.h("div", { class: "dashboard-table-skeleton__body" }, Array.from({ length: rows }, (_, row) => (index$2.h("div", { class: "dashboard-table-skeleton__row" }, shapes.map((shape, column) => (index$2.h(Cell, { shape: shape, row: row, column: column })))))))));
};

const irDashboardCss = () => `.sc-ir-dashboard-h{--ease-out:cubic-bezier(0.23, 1, 0.32, 1);display:block}.dashboard-layout.sc-ir-dashboard{display:flex;flex-direction:column;gap:var(--wa-space-l)}.dashboard-aside.sc-ir-dashboard{display:flex;flex-direction:column;gap:var(--wa-space-m)}.dashboard-main.sc-ir-dashboard{display:flex;flex-direction:column;flex:1 1 auto;min-inline-size:0}@media (min-width: 992px){.sc-ir-dashboard-h{--dashboard-table-min-block-size:20rem}ir-page.sc-ir-dashboard{block-size:100dvh}ir-page.sc-ir-dashboard::part(body){flex:1 1 auto;min-block-size:0}.dashboard-layout.sc-ir-dashboard{flex:1 1 auto;flex-direction:row;min-block-size:0}.dashboard-aside.sc-ir-dashboard{flex:0 0 17rem}ir-dashboard-stats.sc-ir-dashboard{flex:1 1 auto}.dashboard-main.sc-ir-dashboard{min-block-size:0}.dashboard-tabs.sc-ir-dashboard{flex:1 1 auto;min-block-size:0}.dashboard-tabs.sc-ir-dashboard::part(base){block-size:100%}.dashboard-tabs.sc-ir-dashboard::part(body),.dashboard-tab-panel[active].sc-ir-dashboard,.dashboard-tab-panel.sc-ir-dashboard::part(base){display:flex;flex:1 1 auto;flex-direction:column;min-block-size:0}.dashboard-tab-panel.sc-ir-dashboard>*.sc-ir-dashboard{flex:1 1 auto;min-block-size:var(--dashboard-table-min-block-size)}}.dashboard-tabs.sc-ir-dashboard{--indicator-color:transparent;--track-color:transparent;--track-width:0}.dashboard-tabs.sc-ir-dashboard::part(tabs),.dashboard-tabs.sc-ir-dashboard [part~="tabs"]{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:var(--wa-space-s);border:0}.dashboard-tab.sc-ir-dashboard:last-of-type{grid-column:1 / -1}@media (min-width: 768px){.dashboard-tabs.sc-ir-dashboard::part(tabs){grid-template-columns:repeat(5, minmax(0, 1fr))}.dashboard-tab.sc-ir-dashboard:last-of-type{grid-column:auto}}.dashboard-tab.sc-ir-dashboard{display:block;color:var(--wa-color-text-normal)}.dashboard-tab[active].sc-ir-dashboard{border-block-end:0;margin-block-end:0}.dashboard-tab.sc-ir-dashboard::part(base),.dashboard-tab.sc-ir-dashboard [part~="base"]{display:grid;grid-template-rows:auto 1fr minmax(1.25rem, auto);align-items:start;gap:var(--wa-space-2xs);block-size:100%;min-block-size:6.25rem;padding:var(--wa-space-m);border-radius:var(--wa-border-radius-l);background-color:var(--wa-color-surface-default);white-space:normal;transition:border-color 150ms ease,     box-shadow 150ms ease,     transform 160ms var(--ease-out)}.dashboard-tab.sc-ir-dashboard:not([disabled]):active::part(base),.dashboard-tab.sc-ir-dashboard:not([disabled]):active [part~="base"]{transform:scale(0.98)}.dashboard-tab[active].sc-ir-dashboard::part(base),.dashboard-tab[active].sc-ir-dashboard [part~="base"]{border-color:var(--wa-color-brand-fill-loud);box-shadow:inset 0 0 0 1px var(--wa-color-brand-fill-loud)}@media (hover: hover) and (pointer: fine){.dashboard-tab.sc-ir-dashboard:not([active],[disabled]).sc-ir-dashboard:hover::part(base){border-color:var(--wa-color-brand-border-normal)}}.dashboard-tab__label.sc-ir-dashboard{overflow:hidden;font-size:var(--wa-font-size-s);font-weight:var(--wa-font-weight-semibold);color:var(--wa-color-text-quiet);text-overflow:ellipsis;white-space:nowrap;transition:color 150ms ease}.dashboard-tab[active].sc-ir-dashboard .dashboard-tab__label.sc-ir-dashboard,.dashboard-tab[active].sc-ir-dashboard .dashboard-tab__count.sc-ir-dashboard{color:var(--wa-color-brand-on-quiet)}.dashboard-tab__count.sc-ir-dashboard{font-size:var(--wa-font-size-2xl);font-weight:var(--wa-font-weight-bold);line-height:1.1;font-variant-numeric:tabular-nums;transition:color 150ms ease}.dashboard-tab__count-row.sc-ir-dashboard{display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-2xs);min-inline-size:0}.dashboard-tab__notes.sc-ir-dashboard{display:flex;justify-content:flex-end;min-inline-size:0}.dashboard-tab__note.sc-ir-dashboard{padding:0 var(--wa-space-xs);border:var(--wa-border-width-s) var(--wa-border-style) var(--wa-color-warning-border-normal);border-radius:var(--wa-border-radius-pill);color:var(--wa-color-warning-on-quiet);font-size:var(--wa-font-size-xs);font-weight:var(--wa-font-weight-semibold);line-height:1.25rem;white-space:nowrap;max-inline-size:100%;overflow:hidden;text-overflow:ellipsis}.dashboard-tab__note--overdue.sc-ir-dashboard{border-color:var(--wa-color-danger-border-normal);color:var(--wa-color-danger-on-quiet)}.dashboard-tab__note--unassigned.sc-ir-dashboard{border-color:var(--wa-color-brand-fill-loud);background-color:var(--wa-color-brand-fill-loud);color:var(--wa-color-brand-on-loud)}.dashboard-tab-panel.sc-ir-dashboard{--padding:var(--wa-space-m) 0 0}.dashboard-skeleton.sc-ir-dashboard{--color:color-mix(in oklab, var(--wa-color-neutral-fill-normal) 65%, var(--wa-color-surface-default));block-size:0.75rem;min-block-size:0}.dashboard-skeleton.sc-ir-dashboard::part(indicator),.dashboard-skeleton.sc-ir-dashboard [part~="indicator"]{border-radius:var(--wa-border-radius-s)}.dashboard-skeleton--count.sc-ir-dashboard{inline-size:1.75em;block-size:0.8em;margin-block:0.15em}.dashboard-skeleton--label.sc-ir-dashboard{inline-size:3.5rem;block-size:0.625rem}.dashboard-skeleton--meta.sc-ir-dashboard{--color:color-mix(in oklab, var(--wa-color-neutral-fill-normal) 40%, var(--wa-color-surface-default));block-size:0.5rem}.dashboard-skeleton--pill.sc-ir-dashboard{inline-size:4.5rem;block-size:1.25rem}.dashboard-skeleton--action.sc-ir-dashboard{inline-size:7.5rem;block-size:2rem}.dashboard-skeleton--action.sc-ir-dashboard::part(indicator),.dashboard-skeleton--action.sc-ir-dashboard [part~="indicator"]{border-radius:var(--wa-border-radius-m)}.dashboard-table-skeleton.sc-ir-dashboard{display:flex;flex-direction:column;min-block-size:var(--dashboard-table-min-block-size, 60vh);overflow:hidden;background-color:var(--wa-color-surface-default)}.dashboard-table-skeleton__head.sc-ir-dashboard,.dashboard-table-skeleton__row.sc-ir-dashboard{display:grid;grid-template-columns:minmax(0, 1.1fr) minmax(0, 1.2fr) minmax(0, 2fr) minmax(0, 1fr) minmax(0, 0.9fr);align-items:center;column-gap:var(--wa-space-l);min-inline-size:40rem;padding-inline:1rem}.dashboard-table-skeleton[data-extra-column].sc-ir-dashboard .dashboard-table-skeleton__head.sc-ir-dashboard,.dashboard-table-skeleton[data-extra-column].sc-ir-dashboard .dashboard-table-skeleton__row.sc-ir-dashboard{grid-template-columns:minmax(0, 1.1fr) minmax(0, 1.2fr) minmax(0, 2fr) minmax(0, 1fr) minmax(0, 0.9fr) minmax(0, 1fr)}.dashboard-table-skeleton__head.sc-ir-dashboard{flex:none;min-block-size:3.625rem;border-block-end:var(--wa-border-width-s) var(--wa-border-style) var(--wa-color-neutral-border-normal)}.dashboard-table-skeleton__body.sc-ir-dashboard{flex:1 1 auto;min-block-size:0;overflow:hidden;mask-image:linear-gradient(to bottom, #000 35%, transparent)}.dashboard-table-skeleton__row.sc-ir-dashboard{min-block-size:3.3rem;border-block-end:var(--wa-border-width-s) var(--wa-border-style) var(--wa-color-neutral-border-quiet)}.dashboard-table-skeleton__cell.sc-ir-dashboard{display:flex;flex-direction:column;align-items:flex-start;gap:0.375rem;min-inline-size:0}.dashboard-table-skeleton__cell--center.sc-ir-dashboard{align-items:center}.dashboard-table-skeleton__cell--end.sc-ir-dashboard{align-items:flex-end}@media (prefers-reduced-motion: reduce){.dashboard-tab.sc-ir-dashboard::part(base){transition:none}.dashboard-skeleton.sc-ir-dashboard::part(indicator){animation:none}.dashboard-tab.sc-ir-dashboard:active::part(base){transform:none}}`;

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
const IrDashboard = class {
    constructor(hostRef) {
        index$2.registerInstance(this, hostRef);
    }
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
    selectedDate = calendarDates.todayISO();
    activeTab = 'arrivals';
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
    apiClientService = new ApiClient.ApiClient();
    roomService = new room_service.RoomService();
    bookingService = new booking_service.BookingService();
    bookingListingService = new index.BookingListingService();
    setupService = new index$3.SetupService();
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
    dayChange$ = new index$4.cjsExports.Subject();
    dayChangeSubscription = null;
    /** Set while a day change's debounced load is waiting; clearing it drops that load. */
    isDayLoadPending = false;
    /** Collects realtime notifications so a burst triggers one refresh, at most every 3s. */
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.dashboard, () => this.init());
    realtimeQueue = new batchQueue.BatchingQueue(messages => this.processRealtimeBatch(messages), {
        batchSize: 1000,
        flushInterval: 3000,
        onError: e => console.error('Dashboard realtime refresh error:', e),
    });
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
            .pipe(index$4.cjsExports.debounceTime(dashboard_helpers.DATE_CHANGE_DEBOUNCE_MS), 
        // A direct `loadDay` while the debounce was running already loaded the day.
        index$4.cjsExports.filter(() => this.isDayLoadPending))
            .subscribe(() => this.loadDay());
    }
    componentWillLoad() {
        if (this.baseurl) {
            this.apiClientService.setBaseUrl(this.baseurl);
        }
        arrivals_store.setArrivalsPageSize(dashboard_helpers.DASHBOARD_PAGE_SIZE);
        departures_store.setDeparturesPageSize(dashboard_helpers.DASHBOARD_PAGE_SIZE);
        if (this.ticket) {
            this.apiClientService.setApiClient(this.ticket);
            this.init();
        }
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
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
    get propertyId() {
        return calendarData.calendar_data.property?.id ?? this.propertyid;
    }
    async init() {
        try {
            this.isPageLoading = true;
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.dashboard });
            if (!this.propertyid && !this.p) {
                throw new Error('Missing credentials');
            }
            ++this.loadSeq;
            const propertyReady = calendarData.calendar_data?.property
                ? Promise.resolve(null)
                : this.roomService.getExposedProperty({ id: this.propertyid || 0, aname: this.p, language: locale_controller.LocaleController.language, is_backend: true });
            this.propertyReady = propertyReady;
            // With a known id these go out alongside the property; with only an alias they need its id first.
            const withPropertyId = (fn) => (this.propertyId ? fn() : propertyReady.then(fn));
            const [, , criteria, countries, paymentEntries] = await Promise.all([
                propertyReady,
                localeReady,
                withPropertyId(() => this.bookingListingService.getExposedBookingsCriteria({ property_id: this.propertyId, language: locale_controller.LocaleController.language })),
                this.bookingService.getCountries(locale_controller.LocaleController.language),
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
        this.unsubscribeRealtime = realtime_service.realtimeService.subscribe(this.propertyId, msg => {
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
            this.asOf = moment.hooks().format('HH:mm');
        }
    }
    /** The tab a room's status change belongs to: the one already listing the room, else the one its new status points to. */
    tabForRoomStatus({ room_identifier, status }) {
        const listsRoom = (bookings) => bookings?.some(b => b.rooms?.some(r => r.identifier === room_identifier));
        if (listsRoom(departures_store.departuresStore.bookings)) {
            return 'departures';
        }
        if (listsRoom(arrivals_store.arrivalsStore.bookings)) {
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
        this.asOf = moment.hooks().format('HH:mm');
        await Promise.all(TABS.map(tab => this.loadTab(tab)));
    }
    loadStats() {
        const params = { property_id: this.propertyId, date: this.selectedDate, language: locale_controller.LocaleController.language };
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
        const params = { property_id: this.propertyId, date, language: locale_controller.LocaleController.language };
        switch (tab) {
            case 'arrivals':
                return dashboard_helpers.loadArrivals(this.propertyId, date, this.propertyReady);
            case 'departures':
                return dashboard_helpers.loadDepartures(this.propertyId, date, this.propertyReady);
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
        const pools = [arrivals_store.arrivalsStore.bookings, departures_store.departuresStore.bookings, this.inHouse, this.newBookings, this.cancellations];
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
        const today = calendarDates.todayISO();
        return {
            // The API's total spans every page; the loaded page is the fallback when it omits it.
            arrivals: arrivals_store.arrivalsStore.pagination.total || arrivals_store.arrivalsStore.bookings.length,
            unassignedArrivals: dashboard_helpers.countUnassignedArrivals(arrivals_store.arrivalsStore.bookings, this.selectedDate),
            overdueArrivals: dashboard_helpers.countOverdueArrivals(arrivals_store.arrivalsStore.bookings, today),
            departures: dashboard_helpers.countDepartingUnits(departures_store.departuresStore.bookings, this.selectedDate),
            overdueDepartures: dashboard_helpers.countOverdueDepartures(departures_store.departuresStore.bookings, today),
            inHouse: dashboard_helpers.countRooms(this.inHouse),
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
        return (index$2.h("wa-tab", { slot: "nav", panel: tab, class: "dashboard-tab", "data-tab": tab, disabled: disabled }, index$2.h("span", { class: "dashboard-tab__label" }, label), index$2.h("span", { class: "dashboard-tab__count-row" }, index$2.h("span", { class: "dashboard-tab__count" }, loaded ? number.formatCount(count) : index$2.h(CountSkeleton, null)), loaded && unassigned > 0 && (index$2.h("span", { class: "dashboard-tab__note dashboard-tab__note--unassigned" }, t.t('Lcz_UnassignedCount', { fallback: '%1 unassigned', params: [number.formatCount(unassigned)] })))), index$2.h("span", { class: "dashboard-tab__notes" }, loaded && overdueNote && index$2.h("span", { class: "dashboard-tab__note dashboard-tab__note--overdue" }, overdueNote))));
    }
    renderPanel(tab) {
        // Only the visible panel is mounted, so hidden panels don't keep their dialogs and tables alive.
        if (tab !== this.activeTab) {
            return null;
        }
        // Skeleton only while the tab has no data for this day yet; same-day refreshes keep the panel (and its open dialogs) mounted.
        if (!this.isTabLoaded(tab)) {
            return index$2.h(TableSkeleton, { extraColumn: SKELETON_EXTRA_COLUMN[tab] });
        }
        switch (tab) {
            case 'arrivals':
                return index$2.h("ir-dashboard-arrivals", { language: this.language, countries: this.countries });
            case 'departures':
                return (index$2.h("ir-dashboard-departures", { propertyId: this.propertyId, date: this.selectedDate, onCheckoutRedirect: e => this.handleCheckoutRedirect(e) }));
            case 'inHouse':
                return (index$2.h("ir-dashboard-bookings-table", { variant: "inHouse", bookings: this.inHouse, emptyMessage: t.t('Lcz_NoGuestsInHouse', { fallback: 'No guests in-house.' }) }));
            case 'bookings':
                return (index$2.h("ir-dashboard-bookings-table", { variant: "newBookings", bookings: this.newBookings, emptyMessage: t.t('Lcz_NoBookingsMadeOnThisDay', { fallback: 'No bookings made on this day.' }) }));
            case 'cancellations':
                return (index$2.h("ir-dashboard-bookings-table", { variant: "cancellations", bookings: this.cancellations, emptyMessage: t.t('Lcz_NoCancellationsOnThisDay', { fallback: 'No cancellations on this day.' }) }));
        }
    }
    render() {
        const counts = this.counts;
        return (index$2.h(index$2.Host, { key: '18a96f8617a91c616bd2d4bd838f3f0955f43eb8' }, index$2.h("ir-page", { key: '7c12b55e5e1a86db2ad2a2f8b6d476f1f0c42d22', label: t.t('Lcz_Dashboard', { fallback: 'Dashboard' }), handledEndpoints: OVERLAY_ENDPOINTS }, index$2.h("div", { key: '86f710d0c107770f5f7a45670f0d815c5a932b60', class: "dashboard-layout" }, index$2.h("aside", { key: '647092ab5895376db46c723b442d1e9dc59a7b7c', class: "dashboard-aside" }, index$2.h("ir-dashboard-date-navigator", { key: '4b1b8f10d0421a8e81696540c2148757928ed4d9', date: this.selectedDate, onDateChange: e => this.handleDateChange(e) }), index$2.h("ir-dashboard-stats", { key: '20deaed29b8fd7a574bc332c24f2dea48a4827bd', performance: this.performance, units: this.units, pendingUnits: this.pendingUnits, currencySymbol: calendarData.calendar_data.currency?.symbol, performanceLoading: this.isPerformanceLoading, unitsLoading: this.isUnitsLoading, pendingLoading: this.isPendingLoading })), index$2.h("section", { key: '1a2866346a51683b4dc87b412469f10712faac87', class: "dashboard-main", "aria-busy": this.isPageLoading ? 'true' : null }, index$2.h("wa-tab-group", { key: 'bcbfc3aeca97ccca5f456b92f2b10f17810ed3ab', class: "dashboard-tabs", ref: el => (this.tabGroupRef = el), activation: "manual", active: this.activeTab, withoutScrollControls: true, "onwa-tab-show": e => this.handleTabShow(e) }, this.renderTab('arrivals', t.t('Lcz_Arrivals', { fallback: 'Arrivals' }), counts.arrivals, {
            overdueNote: counts.overdueArrivals > 0 ? t.t('Lcz_OverdueCheckInsCount', { fallback: '%1 overdue check-ins', params: [number.formatCount(counts.overdueArrivals)] }) : undefined,
            unassigned: counts.unassignedArrivals,
        }), this.renderTab('departures', t.t('Lcz_Departures', { fallback: 'Departures' }), counts.departures, {
            overdueNote: counts.overdueDepartures > 0
                ? t.t('Lcz_OverdueCheckOutsCount', { fallback: '%1 overdue check-outs', params: [number.formatCount(counts.overdueDepartures)] })
                : undefined,
        }), this.renderTab('inHouse', t.t('Lcz_InHouse', { fallback: 'In-house' }), counts.inHouse), this.renderTab('bookings', t.t('Lcz_Bookings', { fallback: 'Bookings' }), counts.bookings), this.renderTab('cancellations', t.t('Lcz_Cancellations', { fallback: 'Cancellations' }), counts.cancellations), TABS.map(tab => (index$2.h("wa-tab-panel", { key: tab, name: tab, class: "dashboard-tab-panel" }, this.renderPanel(tab)))))))), !this.isPageLoading && [
            index$2.h("ir-booking-details-drawer", { key: '90dae5cba3e843b26d816a7f71d90b0c8b06a73a', open: !!this.bookingNumber, propertyId: this.propertyId, bookingNumber: this.bookingNumber?.toString(), checkoutRoomIdentifier: this.checkoutRoomIdentifier, ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => {
                    this.bookingNumber = null;
                    this.checkoutRoomIdentifier = null;
                    this.loadDay();
                } }),
            index$2.h("ir-payment-folio", { key: '00023e87695545d2476f466d29769644fc963ee8', style: { height: 'auto' }, booking: this.booking, bookingNumber: this.booking?.booking_nbr, paymentEntries: this.paymentEntries, payment: this.payment, mode: 'payment-action', ref: el => (this.paymentFolioRef = el), onCloseModal: () => {
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

exports.ir_dashboard = IrDashboard;
