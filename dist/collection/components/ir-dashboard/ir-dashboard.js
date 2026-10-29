import ApiClient from "../../models/ApiClient";
import { BookingService } from "../../services/booking-service/booking.service";
import { BookingListingService } from "../../services/booking-listing/index";
import { DashboardService } from "../../services/dashboard/index";
import { realtimeService } from "../../services/realtime/realtime.service";
import { LanguageSync } from "../../services/locale/language-sync";
import { LocaleController } from "../../services/locale/locale.controller";
import { SCREEN_TABLES } from "../../services/locale/screen-tables";
import { t } from "../../services/locale/t";
import { RoomService } from "../../services/room.service";
import { SetupService } from "../../services/setup/index";
import { arrivalsStore, setArrivalsPageSize, setArrivalsSortByTime } from "../../stores/arrivals.store";
import calendar_data from "../../stores/calendar-data";
import { departuresStore, setDeparturesPageSize, setDeparturesSortByTime } from "../../stores/departures.store";
import { BatchingQueue } from "../../utils/Queue/batch-queue";
import { todayISO } from "../../utils/calendar-dates";
import { formatCount } from "../../utils/number";
import { Host, h } from "@stencil/core";
import moment from "moment";
import { Subject, debounceTime, filter } from "rxjs";
import { DASHBOARD_PAGE_SIZE, loadArrivals, loadDepartures } from "./dashboard.data";
import { countArrivingUnits, countDepartingUnits, countOverdueArrivals, countOverdueDepartures, countRooms, countUnassignedArrivals, DATE_CHANGE_DEBOUNCE_MS, formatCardCount, isCancellationOn, sumOccupancy, } from "./dashboard.helpers";
import { CountSkeleton, TableSkeleton } from "./dashboard-skeletons";
const TABS = ['arrivals', 'departures', 'inHouse', 'bookings', 'cancellations'];
/** Shape of each tab's last table column in its skeleton: the check-in / check-out button or the status; in-house has none. */
const SKELETON_EXTRA_COLUMN = {
    arrivals: 'action',
    departures: 'action',
    bookings: 'pill',
    cancellations: 'pill',
};
/** Icon in each summary card's tile. */
const TAB_ICONS = {
    arrivals: 'plane-arrival',
    departures: 'plane-departure',
    inHouse: 'house',
    bookings: 'calendar-days',
    cancellations: 'ban',
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
/**
 * PMS landing dashboard: the day's stats in the left rail, topped by a day picker (today and the days after it), and a
 * wa-tab-group, styled as summary cards, that switches between arrivals, departures, in-house, new bookings and
 * cancellations. Properties without front desk (`is_frontdesk_enabled` false) get no in-house tab,
 * arrivals / departures without check-in / check-out, and a reduced stats rail.
 *
 * Loads in order of importance, each part showing a skeleton until its data lands:
 * 1. property, locale tables, bookings criteria, countries / payment entries and arrivals;
 * 2. the visible tab plus the day's stats (Get_Monthly_Stats, Get_Exposed_Calendar with the front desk only, and
 *    pending bookings when the property's criteria list the pending status);
 * 3. every remaining tab, in the background, so each card's count fills in.
 *
 * Realtime notifications are batched every 3s: UPDATE_CALENDAR_AVAILABILITY reloads the whole day, ROOM_STATUS_CHANGED
 * reloads the stats plus the affected arrivals / departures tab and in-house, and CHANGE_IN_BOOK_STATUS cancelling (003) a
 * booking whose stay covers the selected day reloads the stats plus cancellations.
 */
export class IrDashboard {
    el;
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
    baseUrl;
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
    dayChange$ = new Subject();
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
            .pipe(debounceTime(DATE_CHANGE_DEBOUNCE_MS), 
        // A direct `loadDay` while the debounce was running already loaded the day.
        filter(() => this.isDayLoadPending))
            .subscribe(() => this.loadDay());
    }
    componentWillLoad() {
        if (this.baseurl) {
            this.apiClientService.setBaseUrl(this.baseurl);
        }
        if (this.baseUrl) {
            this.apiClientService.setBaseUrl(this.baseUrl);
        }
        setArrivalsPageSize(DASHBOARD_PAGE_SIZE);
        setDeparturesPageSize(DASHBOARD_PAGE_SIZE);
        setArrivalsSortByTime(true);
        setDeparturesSortByTime(true);
        if (this.ticket) {
            this.apiClientService.setApiClient(this.ticket);
            this.init();
        }
    }
    componentDidLoad() {
        this.languageSync.connect();
        // The density is read from the laid-out rail, so it can't be set in componentWillLoad; measuring on the next frame
        // keeps the state change out of componentDidLoad (which Stencil warns about as an extra re-render).
        this.scheduleFitToPage();
        window.addEventListener('resize', this.scheduleFitToPage);
        this.pageResizeObserver = new ResizeObserver(this.scheduleFitToPage);
        this.pageResizeObserver.observe(document.body);
        this.pageResizeObserver.observe(this.asideRef);
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
    /** Whether the property uses the front desk (check-in / check-out). Until the property loads, assume it does. */
    get isPms() {
        return calendar_data.property ? !!calendar_data.property.is_frontdesk_enabled : true;
    }
    /** Tabs the property gets: no in-house without the front desk, since nobody is checked in. */
    get tabs() {
        return this.isPms ? TABS : TABS.filter(tab => tab !== 'inHouse');
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
            if (msg.reason === 'UPDATE_CALENDAR_AVAILABILITY' || msg.reason === 'ROOM_STATUS_CHANGED' || msg.reason === 'CHANGE_IN_BOOK_STATUS') {
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
        const tabs = new Set();
        for (const msg of messages) {
            if (msg.reason === 'ROOM_STATUS_CHANGED') {
                // Checking a guest in or out also changes who's in-house.
                if (this.isPms) {
                    tabs.add('inHouse');
                }
                tabs.add(this.tabForRoomStatus(msg.payload));
            }
            else if (msg.reason === 'CHANGE_IN_BOOK_STATUS' && isCancellationOn(msg.payload, this.selectedDate)) {
                tabs.add('cancellations');
            }
        }
        // The batch held only status changes outside the selected day.
        if (!tabs.size) {
            return;
        }
        const seq = this.loadSeq;
        await Promise.all([...this.loadStats(), ...[...tabs].map(tab => this.reloadTab(tab))]);
        if (seq === this.loadSeq) {
            this.asOf = moment().format('HH:mm');
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
        this.asOf = moment().format('HH:mm');
        await Promise.all(this.tabs.map(tab => this.loadTab(tab)));
    }
    loadStats() {
        const params = { property_id: this.propertyId, date: this.selectedDate, language: LocaleController.language };
        const loads = [
            this.loadStat(() => this.dashboardService.getDayPerformance(params), performance => (this.performance = performance), loading => (this.isPerformanceLoading = loading)),
        ];
        // The calendar only feeds the front-desk figures (available, out of service, blocked), which properties without it don't show.
        if (this.isPms) {
            loads.push(this.loadStat(() => this.dashboardService.getUnitsSummary(params), units => (this.units = units), loading => (this.isUnitsLoading = loading)));
        }
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
        this.isUnitsLoading = this.isPms;
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
        return {
            // Arrivals and departures count the rows their table renders (one per room), overdue ones included: the overdue
            // note only flags them. Without the front desk the tables list only the rooms arriving / departing that day.
            arrivals: this.isPms
                ? countRooms([...arrivalsStore.futureBookings, ...arrivalsStore.needsCheckInBookings, ...arrivalsStore.inHouseBookings])
                : countArrivingUnits(arrivalsStore.filteredBookings, this.selectedDate),
            unassignedArrivals: countUnassignedArrivals(arrivalsStore.bookings, this.selectedDate),
            overdueArrivals: countOverdueArrivals(arrivalsStore.bookings, this.selectedDate),
            departures: this.isPms
                ? countRooms([...departuresStore.futureRooms, ...departuresStore.needsCheckOutBookings, ...departuresStore.outBookings])
                : countDepartingUnits(departuresStore.filteredBookings, this.selectedDate),
            overdueDepartures: countOverdueDepartures(departuresStore.bookings, this.selectedDate),
            inHouse: countRooms(this.inHouse),
            inHouseGuests: sumOccupancy(this.inHouse),
            bookings: this.newBookings.length,
            cancellations: this.cancellations.length,
        };
    }
    renderTab(tab, label, count, { overdueNote, unassigned, guests } = {}) {
        // Counts come from the tab's own data, so they're unknown until the tab has been opened for this day.
        const loaded = this.isTabLoaded(tab);
        // Disabled only while its data is on the way (or the page itself is loading); a failed load stays clickable so showing it retries.
        // Same-day refreshes keep the loaded data on screen, so the tab stays enabled.
        const disabled = !loaded && (this.isPageLoading || !!this.loadingTabs[tab]);
        const fullCount = loaded ? formatCount(count) : '';
        const shownCount = loaded ? formatCardCount(count) : '';
        // A compact count ("1.2M") shows the exact figure on hover and reads it to screen readers.
        const isCompact = shownCount !== fullCount;
        return (h("wa-tab", { slot: "nav", panel: tab, class: "dashboard-tab", "data-tab": tab, disabled: disabled }, h("span", { class: "dashboard-tab__count", style: loaded ? { '--count-chars': String(shownCount.length) } : undefined, title: isCompact ? fullCount : undefined }, !loaded ? h(CountSkeleton, null) : isCompact ? [h("span", { "aria-hidden": "true" }, shownCount), h("span", { class: "dashboard-tab__sr-only" }, fullCount)] : shownCount), h("span", { class: "dashboard-tab__label" }, label), h("span", { class: "dashboard-tab__icon", "aria-hidden": "true" }, h("wa-icon", { name: TAB_ICONS[tab] })), h("span", { class: "dashboard-tab__notes" }, loaded && unassigned > 0 && (h("span", { class: "dashboard-tab__note dashboard-tab__note--unassigned" }, t('Lcz_UnassignedCount', { fallback: '%1 unassigned', params: [formatCount(unassigned)] }))), loaded && overdueNote && h("span", { class: "dashboard-tab__note dashboard-tab__note--overdue" }, overdueNote), loaded && guests && this.renderGuests(guests))));
    }
    /** In-house guests as three chips (adults, children, infants), each with its own icon and value. */
    renderGuests({ adults, children, infants }) {
        const kinds = [
            { icon: 'user', value: adults, label: t('Lcz_Adults', { fallback: 'Adults' }) },
            { icon: 'child', value: children, label: t('Lcz_Children', { fallback: 'Children' }) },
            { icon: 'baby', value: infants, label: t('Lcz_Infants', { fallback: 'Infants' }) },
        ];
        return (h("span", { class: "dashboard-tab__guests", role: "list", "aria-label": t('Lcz_GuestsInHouse', { fallback: 'Guests in-house' }) }, kinds.map(({ icon, value, label }) => (h("span", { class: { 'dashboard-tab__guest': true, 'dashboard-tab__guest--none': value === 0 }, role: "listitem", title: `${label}: ${formatCount(value)}` }, h("wa-icon", { class: "dashboard-tab__guest-icon", name: icon, "aria-hidden": "true" }), h("span", { class: "dashboard-tab__guest-value" }, formatCount(value)), h("span", { class: "dashboard-tab__guest-label" }, label))))));
    }
    renderPanel(tab) {
        // Only the visible panel is mounted, so hidden panels don't keep their dialogs and tables alive.
        if (tab !== this.activeTab) {
            return null;
        }
        // Skeleton only while the tab has no data for this day yet; same-day refreshes keep the panel (and its open dialogs) mounted.
        if (!this.isTabLoaded(tab)) {
            return h(TableSkeleton, { extraColumn: SKELETON_EXTRA_COLUMN[tab], withoutBalance: tab === 'inHouse' });
        }
        switch (tab) {
            case 'arrivals':
                return h("ir-dashboard-arrivals", { language: this.language, countries: this.countries, pmsDisabled: !this.isPms });
            case 'departures':
                return (h("ir-dashboard-departures", { propertyId: this.propertyId, date: this.selectedDate, pmsDisabled: !this.isPms, onCheckoutRedirect: e => this.handleCheckoutRedirect(e) }));
            case 'inHouse':
                return (h("ir-dashboard-bookings-table", { variant: "inHouse", bookings: this.inHouse, emptyMessage: t('Lcz_NoGuestsInHouse', { fallback: 'No guests in-house.' }) }));
            case 'bookings':
                return (h("ir-dashboard-bookings-table", { variant: "newBookings", date: this.selectedDate, bookings: this.newBookings, emptyMessage: t('Lcz_NoBookingsMadeOnThisDay', { fallback: 'No bookings made on this day.' }) }));
            case 'cancellations':
                return (h("ir-dashboard-bookings-table", { variant: "cancellations", date: this.selectedDate, bookings: this.cancellations, emptyMessage: t('Lcz_NoCancellationsOnThisDay', { fallback: 'No cancellations on this day.' }) }));
        }
    }
    render() {
        const counts = this.counts;
        const isPms = this.isPms;
        return (h(Host, { key: 'c9f54cd3d83c0a8b90a55af656d013bbc613afd2' }, h("ir-page", { key: 'de14a8e12e773e42938692bd30b647891a8da022', handledEndpoints: OVERLAY_ENDPOINTS }, h("div", { key: '15f24ca71d54d35c691dd78c97271248a7bdb2c8', class: `dashboard-layout dashboard-layout--${this.railDensity}` }, h("aside", { key: '652f94c19461646d5b9a8daef758f2d28ae852a3', class: "dashboard-aside", ref: el => (this.asideRef = el) }, h("ir-dashboard-stats", { key: 'bcf664a55480bf800f9adc63cf23cfe314530199', date: this.selectedDate, isPms: isPms, density: this.railDensity, performance: this.performance, units: this.units, pendingUnits: this.pendingUnits, currencySymbol: calendar_data.currency?.symbol, performanceLoading: this.isPerformanceLoading, unitsLoading: this.isUnitsLoading, pendingLoading: this.isPendingLoading, onDateChange: e => this.handleDateChange(e) })), h("section", { key: '6f7763b78c8dca698ecfb537831937df58dda752', class: "dashboard-main", "aria-busy": this.isPageLoading ? 'true' : null }, h("wa-tab-group", { key: '24ee9144e7fa691392ce7902142fd36ad7d63820', class: "dashboard-tabs", ref: el => (this.tabGroupRef = el), activation: "manual", active: this.activeTab, withoutScrollControls: true, "onwa-tab-show": e => this.handleTabShow(e) }, this.renderTab('arrivals', t('Lcz_Arrivals', { fallback: 'Arrivals' }), counts.arrivals, {
            // Without the front desk nothing is checked in, so nothing is overdue.
            overdueNote: isPms && counts.overdueArrivals > 0
                ? t('Lcz_OverdueCheckInsCount', { fallback: '%1 overdue check-ins', params: [formatCount(counts.overdueArrivals)] })
                : undefined,
            // Units are assigned at check-in, so without the front desk "unassigned" means nothing.
            unassigned: isPms ? counts.unassignedArrivals : undefined,
        }), this.renderTab('departures', t('Lcz_Departures', { fallback: 'Departures' }), counts.departures, {
            overdueNote: isPms && counts.overdueDepartures > 0
                ? t('Lcz_OverdueCheckOutsCount', { fallback: '%1 overdue check-outs', params: [formatCount(counts.overdueDepartures)] })
                : undefined,
        }), isPms && this.renderTab('inHouse', t('Lcz_InHouse', { fallback: 'In-house' }), counts.inHouse, { guests: counts.inHouseGuests }), this.renderTab('bookings', t('Lcz_Bookings', { fallback: 'Bookings' }), counts.bookings), this.renderTab('cancellations', t('Lcz_Cancellations', { fallback: 'Cancellations' }), counts.cancellations), this.tabs.map(tab => (h("wa-tab-panel", { key: tab, name: tab, class: "dashboard-tab-panel" }, this.renderPanel(tab)))))))), !this.isPageLoading && [
            h("ir-booking-details-drawer", { key: '757258c0b328c37e4b7e8ddd322ddd83a5ee0c4e', open: !!this.bookingNumber, propertyId: this.propertyId, bookingNumber: this.bookingNumber?.toString(), checkoutRoomIdentifier: this.checkoutRoomIdentifier, ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => {
                    this.bookingNumber = null;
                    this.checkoutRoomIdentifier = null;
                    this.loadDay();
                } }),
            h("ir-payment-folio", { key: '26564647b96c2c0e4aa5f8003e40a99177b5905f', style: { height: 'auto' }, booking: this.booking, bookingNumber: this.booking?.booking_nbr, paymentEntries: this.paymentEntries, payment: this.payment, mode: 'payment-action', ref: el => (this.paymentFolioRef = el), onCloseModal: () => {
                    this.booking = null;
                    this.payment = null;
                } }),
        ]));
    }
    static get is() { return "ir-dashboard"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-dashboard.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-dashboard.css"]
        };
    }
    static get properties() {
        return {
            "ticket": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Authentication token issued by the PMS backend."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "ticket"
            },
            "propertyid": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "ID of the property (hotel)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "propertyid"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Two-letter language code used for translations and API locale."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'en'"
            },
            "p": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Property alias (aname), used when `propertyid` is missing."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "p"
            },
            "baseurl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "API base URL override."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "baseurl"
            },
            "baseUrl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "base-url"
            }
        };
    }
    static get states() {
        return {
            "isPageLoading": {},
            "isPerformanceLoading": {},
            "isUnitsLoading": {},
            "isPendingLoading": {},
            "selectedDate": {},
            "activeTab": {},
            "railDensity": {},
            "asOf": {},
            "performance": {},
            "units": {},
            "pendingUnits": {},
            "hasPendingStatus": {},
            "inHouse": {},
            "newBookings": {},
            "cancellations": {},
            "tabDates": {},
            "loadingTabs": {},
            "countries": {},
            "paymentEntries": {},
            "bookingNumber": {},
            "checkoutRoomIdentifier": {},
            "booking": {},
            "payment": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }, {
                "propName": "language",
                "methodName": "languageChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "openBookingDetails",
                "method": "handleOpenBookingDetails",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "payBookingBalance",
                "method": "handlePayBookingBalance",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "resetExposedCancellationDueAmount",
                "method": "handleResetCancellationDueAmount",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "updateRoomGuests",
                "method": "handleUpdateRoomGuests",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
