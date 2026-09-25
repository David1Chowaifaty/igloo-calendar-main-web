'use strict';

var index = require('./index-CQkpA5n3.js');
var room_service = require('./room.service-SRdCt12B.js');
var booking_store = require('./booking.store-B88WoWhD.js');
var index$1 = require('./index-BVhX2bVZ.js');
var utils = require('./utils-Du7akmn_.js');
var t = require('./t-C54QV4_c.js');
var irDate = require('./ir-date-BLb2Vxrk.js');
var moment = require('./moment-CdViwxPQ.js');
var realtime_service = require('./realtime.service-BMgF8Zdb.js');
var events_service = require('./events.service-u8FgmKg9.js');
var index$3 = require('./index-CZjROLQn.js');
var booking = require('./booking-Db0fqeWi.js');
var locales_store = require('./locales.store-BMTss6fG.js');
var calendarData = require('./calendar-data-HgC39-BR.js');
var calendarGrid = require('./calendar-grid-DKz-VO3M.js');
var ApiClient = require('./ApiClient-u7fuhiXA.js');
var v4 = require('./v4-_2BfiRUa.js');
var index$4 = require('./index-m9Y7cDOF.js');
var index$2 = require('./index-D50pWXLb.js');
var locale_controller = require('./locale.controller-C4TH5Eq_.js');
var languageSync = require('./language-sync-CcxSJ9ci.js');
var direction = require('./direction-Cb_BHcnU.js');
var agents_service = require('./agents.service-ZwZ3mX3j.js');
var utils$1 = require('./utils-CQGL0l4_.js');
var arrivals_store = require('./arrivals.store-D8lhhYFT.js');
var axios = require('./axios-EresIryl.js');
var index$5 = require('./index-CjFAaO_j.js');
var channel_service = require('./channel.service-C2kSdef5.js');
var system_service = require('./system.service-q3G6_5Tb.js');
var departures_store = require('./departures.store-B6mz6ov5.js');
var svcCategory_utils = require('./svc-category.utils-DN3UMP17.js');
var enums = require('./enums-BSCnMYlE.js');
var types = require('./types-BlCoz3jZ.js');
var hkTasks_store = require('./hk-tasks.store-Dzn1X32f.js');
var number = require('./number-BmMUYhE5.js');
var paymentOption_store = require('./payment-option.store-CGVaTA9W.js');
var index$6 = require('./index-Cpu6aeBh.js');
var uninvoiced_bookings_store = require('./uninvoiced_bookings.store-B2X9eepI.js');
var user_service = require('./user.service-q8OigpUB.js');
require('./IBooking-C1lok6Tq.js');
require('./commonSchemas-BFzTbV-r.js');
require('./booking.dto-DxxzsxJC.js');
require('./type-BRhg-bzd.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./functions-B3fUkdt1.js');
require('./types-BzBUVSnE.js');
require('./types-DMInPw7h.js');

class BatchingQueue {
    queue = [];
    isProcessing = false;
    flushTimer = null;
    options;
    processor;
    constructor(processor, options) {
        this.processor = processor;
        this.options = {
            maxQueueSize: 10000,
            onError: error => console.error('Queue processing error:', error),
            onBatchProcessed: () => { },
            ...options,
        };
    }
    /**
     * Add a single item to the queue
     */
    offer(data) {
        if (this.queue.length >= this.options.maxQueueSize) {
            return false; // Queue is full
        }
        const item = {
            data,
            timestamp: Date.now(),
            id: this.generateId(),
        };
        this.queue.push(item);
        this.scheduleFlush();
        return true;
    }
    /**
     * Add multiple items to the queue
     */
    offerAll(items) {
        let added = 0;
        for (const item of items) {
            if (this.offer(item)) {
                added++;
            }
            else {
                break; // Queue is full
            }
        }
        return added;
    }
    /**
     * Get current queue size
     */
    size() {
        return this.queue.length;
    }
    /**
     * Check if queue is empty
     */
    isEmpty() {
        return this.queue.length === 0;
    }
    /**
     * Force flush the current queue
     */
    async flush() {
        if (this.flushTimer) {
            clearTimeout(this.flushTimer);
            this.flushTimer = null;
        }
        await this.processBatch();
    }
    /**
     * Clear all items from the queue
     */
    clear() {
        this.queue = [];
        if (this.flushTimer) {
            clearTimeout(this.flushTimer);
            this.flushTimer = null;
        }
    }
    /**
     * Shutdown the queue and process remaining items
     */
    async shutdown() {
        await this.flush();
    }
    scheduleFlush() {
        // If we've reached batch size, process immediately
        if (this.queue.length >= this.options.batchSize) {
            this.processBatch();
            return;
        }
        // If no timer is set, schedule one
        if (!this.flushTimer) {
            this.flushTimer = setTimeout(() => {
                this.processBatch();
            }, this.options.flushInterval);
        }
    }
    async processBatch() {
        if (this.isProcessing || this.queue.length === 0) {
            return;
        }
        this.isProcessing = true;
        try {
            // Extract batch to process
            const batchSize = Math.min(this.options.batchSize, this.queue.length);
            const batch = this.queue.splice(0, batchSize);
            const data = batch.map(item => item.data);
            const startTime = Date.now();
            // Process the batch
            await this.processor(data);
            const processingTime = Date.now() - startTime;
            this.options.onBatchProcessed(batchSize, processingTime);
            // Clear the timer since we've processed
            if (this.flushTimer) {
                clearTimeout(this.flushTimer);
                this.flushTimer = null;
            }
            // If there are more items, schedule next batch
            if (this.queue.length > 0) {
                this.scheduleFlush();
            }
        }
        catch (error) {
            this.options.onError(error);
        }
        finally {
            this.isProcessing = false;
        }
    }
    generateId() {
        return v4.v4();
    }
}

const iglooCalendarCss = () => `.sc-igloo-calendar-h{display:block;position:relative;background:var(--wa-color-surface-default, white);height:100%;text-align:center}.igl-calendar.sc-igloo-calendar{display:grid;grid-template-columns:1fr;height:100%}.calendarScrollContainer.sc-igloo-calendar{width:100%;height:100%;overflow:auto;position:relative;white-space:nowrap}.showToBeAssigned.sc-igloo-calendar,.showLegend.sc-igloo-calendar,.showDayUseBookings.sc-igloo-calendar{grid-template-columns:350px 1fr}.showLegend.sc-igloo-calendar{grid-template-columns:auto 1fr}#calendarContainer.sc-igloo-calendar{position:absolute}.legendContainer.sc-igloo-calendar,.tobeAssignedContainer.sc-igloo-calendar,.dayUseBookingsContainer.sc-igloo-calendar{display:none;height:100%;overflow-y:auto;padding-inline-start:0.5em !important;padding-inline-end:0.5em !important}.tobeAssignedContainer.sc-igloo-calendar,.legendContainer.sc-igloo-calendar,.dayUseBookingsContainer.sc-igloo-calendar{padding-inline-start:0em !important;padding-inline-end:0em !important}.showToBeAssigned.sc-igloo-calendar .tobeAssignedContainer.sc-igloo-calendar{display:block}.showLegend.sc-igloo-calendar .legendContainer.sc-igloo-calendar{display:block}.showDayUseBookings.sc-igloo-calendar .dayUseBookingsContainer.sc-igloo-calendar{display:block}.tobeBooked.sc-igloo-calendar{padding-top:8px;padding-bottom:8px;text-align:start}`;

/** `YYYY-MM-DD` from anything moment can read as a date (plain ISO, ISO with a time, …); `''` if it can't. */
function toIsoDate(value) {
    const parsed = moment.hooks(typeof value === 'string' ? value.trim() : value, moment.hooks.ISO_8601);
    return parsed.isValid() ? parsed.format('YYYY-MM-DD') : '';
}
/** A burst is considered over once no notification has arrived for this long. */
const UNASSIGNED_DATES_QUIET_MS = 500;
/** Ceiling on how long a sustained stream can hold a flush back. */
const UNASSIGNED_DATES_MAX_WAIT_MS = 3000;
/**
 * What one extra round trip is worth, expressed in days of scanning. A request costs the server the
 * query setup regardless of width, so bridging a gap narrower than this is cheaper than asking twice
 * — and, just as importantly, spans further apart than this are left alone rather than fused into
 * one enormous period.
 */
const UNASSIGNED_DATES_ROUND_TRIP_DAYS = 14;
/** Hard ceiling on requests per flush, whatever the batch looks like. */
const UNASSIGNED_DATES_MAX_FETCHES = 3;
/** Whole days between the end of one span and the start of the next. */
function daysBetween(earlierTo, laterFrom) {
    return moment.hooks(laterFrom, 'YYYY-MM-DD').diff(moment.hooks(earlierTo, 'YYYY-MM-DD'), 'days');
}
/**
 * Collapses a batch of notification periods into the spans actually worth fetching.
 *
 * Adjacent periods are fused whenever the gap between them is narrower than
 * {@link UNASSIGNED_DATES_ROUND_TRIP_DAYS} — overlapping and touching periods, the common case for a
 * multi-room booking, always qualify. Distant clusters stay separate on purpose: widening one fetch
 * across months of calendar to save a round trip is the trade that made these bursts expensive.
 * Only if that still leaves more than {@link UNASSIGNED_DATES_MAX_FETCHES} spans are the *narrowest*
 * remaining gaps bridged, one at a time, until the batch fits the budget — so the cap is paid for
 * with the fewest possible extra days.
 */
function mergeUnassignedDatesRanges(ranges) {
    const sorted = [...ranges].sort((a, b) => a.fromDate.localeCompare(b.fromDate) || a.toDate.localeCompare(b.toDate));
    const merged = [];
    for (const range of sorted) {
        const current = merged[merged.length - 1];
        if (current && daysBetween(current.toDate, range.fromDate) <= UNASSIGNED_DATES_ROUND_TRIP_DAYS) {
            absorbInto(current, range.toDate, range);
            continue;
        }
        merged.push({ fromDate: range.fromDate, toDate: range.toDate, sources: [range] });
    }
    while (merged.length > UNASSIGNED_DATES_MAX_FETCHES) {
        let cheapest = 1;
        for (let i = 2; i < merged.length; i++) {
            if (daysBetween(merged[i - 1].toDate, merged[i].fromDate) < daysBetween(merged[cheapest - 1].toDate, merged[cheapest].fromDate)) {
                cheapest = i;
            }
        }
        const [absorbed] = merged.splice(cheapest, 1);
        absorbInto(merged[cheapest - 1], absorbed.toDate, ...absorbed.sources);
    }
    return merged;
}
function absorbInto(span, toDate, ...sources) {
    span.toDate = toDate > span.toDate ? toDate : span.toDate;
    span.sources.push(...sources);
}
const IglooCalendar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dragOverHighlightElement = index.createEvent(this, "dragOverHighlightElement");
        this.moveBookingTo = index.createEvent(this, "moveBookingTo");
        this.calculateUnassignedDates = index.createEvent(this, "calculateUnassignedDates");
        this.revertBooking = index.createEvent(this, "revertBooking");
        this.openCalendarSidebar = index.createEvent(this, "openCalendarSidebar");
        this.showRoomNightsDialog = index.createEvent(this, "showRoomNightsDialog");
    }
    propertyid;
    from_date;
    to_date;
    language;
    loadingMessage;
    currencyName;
    ticket = '';
    p;
    baseUrl;
    get element() { return index.getElement(this); }
    calendarData = new Object();
    property_id;
    days = new Array();
    scrollViewDragging = false;
    dialogData = null;
    bookingItem = null;
    editBookingItem = null;
    showLegend = false;
    showPaymentDetails = false;
    showToBeAssigned = false;
    showDayUseBookings = false;
    roomNightsData = null;
    renderAgain = false;
    showBookProperty = false;
    highlightedDate;
    calDates;
    isAuthenticated = false;
    calendarSidebarState;
    invoiceState = null;
    /** Early check-out redirected from a calendar event popover into the full booking-details drawer. */
    checkoutRedirect = null;
    dayUseBookings = [];
    dragOverHighlightElement;
    moveBookingTo;
    calculateUnassignedDates;
    revertBooking;
    openCalendarSidebar;
    showRoomNightsDialog;
    bookingService = new booking_store.BookingService();
    setupService = new index$1.SetupService();
    roomService = new room_service.RoomService();
    propertyService = new index$2.PropertyService();
    eventsService = new events_service.EventsService();
    unassignedUnitsService = new index$3.UnassignedUnitsService();
    housekeepingService = new index$4.HouseKeepingService();
    // private auth = new Auth();
    countries = [];
    visibleCalendarCells = { x: [], y: [] };
    /**
     * Set whenever `addDatesToCalendar()` appends day cells, so an in-flight drag knows its cached
     * drop-target bounds are short a few days and re-measures on the next `DRAG_OVER`.
     */
    dragOverBoundsStale = false;
    scrollContainer;
    today = '';
    reachedEndOfCalendar = false;
    unsubscribeRealtime = null;
    ApiClient = new ApiClient.ApiClient();
    calendarModalEl;
    salesQueue = new BatchingQueue(this.processSalesBatch.bind(this), {
        batchSize: 50,
        flushInterval: 1000,
        maxQueueSize: 5000,
        onError: e => console.error('Batch Sales Update Error:', e),
    });
    availabilityQueue = new BatchingQueue(this.processAvailabilityBatch.bind(this), {
        batchSize: 50,
        flushInterval: 1000,
        maxQueueSize: 5000,
        onError: e => console.error('Batch Availability Update Error:', e),
    });
    /** Periods from `GET_UNASSIGNED_DATES` notifications waiting to be fetched as one batch. */
    pendingUnassignedRanges = [];
    unassignedDatesQuietTimer = null;
    unassignedDatesMaxWaitTimer = null;
    isFlushingUnassignedDates = false;
    roomTypeIdsCache = new Map();
    tasksEndDate;
    dialogEl;
    departureTimes;
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.calendar, () => this.initializeApp());
    componentWillLoad() {
        if (this.baseUrl) {
            this.ApiClient.setBaseUrl(this.baseUrl);
        }
        this.init();
    }
    componentDidLoad() {
        this.scrollToElement(this.today);
        this.languageSync.connect();
    }
    disconnectedCallback() {
        this.unsubscribeRealtime?.();
        this.unsubscribeRealtime = null;
        this.languageSync.disconnect();
        this.clearUnassignedDatesTimers();
        this.pendingUnassignedRanges = [];
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    async handleDeleteEvent(ev) {
        try {
            ev.stopImmediatePropagation();
            ev.preventDefault();
            await this.eventsService.deleteEvent(ev.detail);
        }
        catch (error) {
            //toastr.error(error);
        }
    }
    async handleCalendarSidebarEvents(ev) {
        console.log('hit 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥');
        ev.stopImmediatePropagation();
        ev.stopPropagation();
        this.calendarSidebarState = ev.detail;
    }
    scrollPageToRoom(event) {
        let targetScrollClass = event.detail.refClass;
        this.scrollContainer = this.scrollContainer || this.element.querySelector('.calendarScrollContainer');
        const topLeftCell = this.element.querySelector('.topLeftCell');
        const gotoRoom = this.element.querySelector('.' + targetScrollClass);
        if (gotoRoom) {
            this.scrollContainer.scrollTo({ top: 0 });
            const gotoRect = gotoRoom.getBoundingClientRect();
            const containerRect = this.scrollContainer.getBoundingClientRect();
            const topLeftCellRect = topLeftCell.getBoundingClientRect();
            this.scrollContainer.scrollTo({
                top: gotoRect.top - containerRect.top - topLeftCellRect.height - gotoRect.height,
            });
        }
    }
    handleShowDialog(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.dialogData = event.detail;
        // Early check-outs carry penalty / invoicing implications — redirect them into the full
        // booking-details drawer (where ir-checkout-dialog runs with complete context) rather
        // than opening the bare inline dialog.
        if (this.dialogData.reason === 'checkout') {
            const { booking: booking$1, bookingNumber, roomIdentifier } = this.dialogData;
            const room = booking$1?.rooms?.find(r => r.identifier === roomIdentifier);
            if (booking.isEarlyCheckout(room)) {
                this.checkoutRedirect = { bookingNumber, identifier: roomIdentifier };
                this.dialogData = null;
                return;
            }
        }
        if (!['checkin', 'reallocate', 'checkout'].includes(this.dialogData.reason)) {
            this.calendarModalEl?.openModal();
        }
        if (this.dialogData.reason === 'checkin') {
            this.openCalendarSidebar.emit({ type: 'room-guests', payload: this.dialogData.sidebarPayload });
        }
    }
    handleShowRoomNightsDialog(event) {
        this.roomNightsData = event.detail;
    }
    handleBookingDatasChange(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        let bookings = [...this.calendarData.bookingEvents];
        bookings = bookings.filter(bookingEvent => bookingEvent.ID !== 'NEW_TEMP_EVENT');
        bookings.push(...event.detail.filter(ev => ev.STATUS === 'PENDING-CONFIRMATION'));
        this.updateBookingEventsDateRange(event.detail);
        this.calendarData = {
            ...this.calendarData,
            bookingEvents: bookings,
        };
    }
    handleUpdateBookingEvent(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const newBookingEvent = e.detail;
        this.calendarData = {
            ...this.calendarData,
            bookingEvents: this.calendarData.bookingEvents.map(event => {
                if (newBookingEvent.ID === event.ID) {
                    return newBookingEvent;
                }
                return event;
            }),
        };
    }
    showBookingPopupEventDataHandler(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.onOptionSelect(event);
        //console.log("show booking event", event);
    }
    updateEventDataHandler(event) {
        let bookedData = this.calendarData.bookingEvents.find(bookedEvent => bookedEvent.id === event.detail.id);
        if (bookedData && event.detail && event.detail.data) {
            Object.entries(event.detail.data).forEach(([key, value]) => {
                bookedData[key] = value;
            });
        }
    }
    dragOverEventDataHandler(event) {
        const { id, data } = event.detail;
        // Auto-scrolling to the end of the loaded range makes `calendarScrolling()` lazy-load two more
        // months mid-drag. Those day cells aren't in the bounds measured when the drag started, so a
        // drop onto one would resolve to no day at all and revert. Re-measure before the next
        // hit-test, whichever one that is - a stretch reports nothing at all until it ends, so waiting
        // for a DRAG_OVER would miss it.
        if (id === 'CALCULATE_DRAG_OVER_BOUNDS' || this.dragOverBoundsStale) {
            this.measureDragOverBounds();
        }
        if (id === 'CALCULATE_DRAG_OVER_BOUNDS' || id === 'DRAG_OVER') {
            this.highlightDragOver(true, data);
        }
        else if (id === 'DRAG_OVER_END' || id === 'STRETCH_OVER_END') {
            this.highlightDragOver(false, data);
        }
    }
    /**
     * Caches every day column's and room row's extent, in `.bodyContainer` grid space - the same
     * space `igl-booking-event` writes its `style.top`/`style.left` in, so a dragged bar's position
     * can be hit-tested against it directly. Measured once per drag; the values are scroll-invariant
     * (the day header is sticky vertically only, `offsetTop` ignores `scrollTop`), so only a change
     * to the set of rendered cells invalidates them.
     */
    measureDragOverBounds() {
        const bodyContainer = document.querySelector('.bodyContainer');
        const bodyContainerRect = bodyContainer.getBoundingClientRect();
        let containerDays = document.querySelectorAll('.headersContainer .headerCell');
        let containerRooms = document.querySelectorAll('.bodyContainer .roomRow .roomTitle');
        this.visibleCalendarCells = { x: [], y: [] };
        // Measure the header day cells' true rendered position relative to .bodyContainer
        // (getBoundingClientRect), rather than reconstructing it from offsetLeft. igl-cal-header's
        // .topLeftCell and .headersContainer are separate sibling boxes that bidi-mirror
        // independently of each other in RTL, while igl-booking-event's own coordinate system
        // (element.style.left, which this array is hit-tested against) treats the room-header
        // column and day cells as one combined mirrored box - the two reconstructions only happen
        // to agree in LTR. Reading the actual rendered rect sidesteps that mismatch entirely.
        containerDays.forEach(element => {
            const htmlElement = element;
            const rect = htmlElement.getBoundingClientRect();
            this.visibleCalendarCells.x.push({
                left: rect.left - bodyContainerRect.left,
                width: rect.width,
                id: htmlElement.getAttribute('data-day'),
            });
        });
        containerRooms.forEach(element => {
            const htmlElement = element;
            this.visibleCalendarCells.y.push({
                top: htmlElement.offsetTop,
                height: htmlElement.offsetHeight,
                id: htmlElement.getAttribute('data-room'),
            });
        });
        this.dragOverBoundsStale = false;
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.ApiClient.setApiClient(this.ticket);
        this.initializeApp();
    }
    init() {
        this.calDates = {
            from: this.from_date,
            to: this.to_date,
        };
        if (this.ticket !== '') {
            this.ApiClient.setApiClient(this.ticket);
            this.initializeApp();
        }
        this.calDates = {
            from: this.from_date,
            to: this.to_date,
        };
        calendarGrid.onUnassignedUnitsChange('byDate', newMap => {
            if (newMap.size === 0 && this.highlightedDate !== '') {
                this.highlightedDate = '';
            }
        });
    }
    renderModalBody() {
        switch (this.dialogData?.reason) {
            case 'checkin': {
                const unitName = this.dialogData.roomName;
                if (unitName) {
                    return `${t.t('Lcz_ConfirmCheckInUnit', { fallback: 'Are you sure you want to check in unit' })} ${unitName}?`;
                }
                return t.t('Lcz_ConfirmCheckIn', { fallback: 'Are you sure you want to Check In this unit?' });
            }
            case 'checkout': {
                return t.t('Lcz_ConfirmCheckOut', { fallback: 'Are you sure you want to Check Out this unit?' });
            }
            case 'reallocate':
                return this.dialogData?.description || '';
            case 'stretch':
                return t.t('Lcz_Warning', { fallback: 'Warning ' });
            default:
                return t.t('Lcz_UnknownModalContent', { fallback: 'Unknown modal content' });
        }
    }
    setUpCalendarData(roomResp, bookingResp) {
        this.calendarData.currency = roomResp['My_Result'].currency;
        this.calendarData.allowedBookingSources = roomResp['My_Result'].allowed_booking_sources;
        this.calendarData.adultChildConstraints = roomResp['My_Result'].adult_child_constraints;
        this.calendarData.legendData = this.getLegendData(roomResp);
        this.calendarData.is_vacation_rental = roomResp['My_Result'].is_vacation_rental;
        // The server echoes the range back; pin it to YYYY-MM-DD so range math and API calls can rely on the format.
        this.calendarData.from_date = toIsoDate(bookingResp.My_Params_Get_Rooming_Data.FROM);
        this.calendarData.to_date = toIsoDate(bookingResp.My_Params_Get_Rooming_Data.TO);
        this.calendarData.startingDate = moment.hooks(this.calendarData.from_date, 'YYYY-MM-DD').valueOf();
        this.calendarData.endingDate = moment.hooks(this.calendarData.to_date, 'YYYY-MM-DD').valueOf();
        this.calendarData.formattedLegendData = utils.formatLegendColors(this.calendarData.legendData);
        let bookings = bookingResp.myBookings || [];
        bookings = bookings.filter(bookingEvent => {
            const toDate = moment.hooks(bookingEvent.TO_DATE, 'YYYY-MM-DD');
            const fromDate = moment.hooks(bookingEvent.FROM_DATE, 'YYYY-MM-DD');
            return !toDate.isSame(fromDate);
        });
        this.calendarData.bookingEvents = bookings;
        this.calendarData.toBeAssignedEvents = [];
    }
    async initializeApp() {
        try {
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.calendar });
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                    include_units_hk_status: true,
                    include_sales_rate_plans: true,
                });
                roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [
                this.bookingService.getCalendarData(propertyId, this.from_date, this.to_date),
                this.bookingService.getCountries(locale_controller.LocaleController.language),
                localeReady,
                this.getHkIssues(propertyId),
                this.housekeepingService.getExposedHKSetup({ property_id: this.property_id }),
                //this.housekeepingService.getHkIssues({ property_id: propertyId }),
            ];
            this.fetchSetupEntries();
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                    include_units_hk_status: true,
                    include_sales_rate_plans: true,
                }));
            }
            const results = await Promise.all(requests);
            // this.tasksEndDate=housekeeping_store?.hk_criteria?.cleaning_periods[housekeeping_store?.hk_criteria?.cleaning_periods.length - 1].code
            this.tasksEndDate = moment.hooks().add(30, 'days').format('YYYY-MM-DD');
            this.getHousekeepingTasks({
                from_date: moment.hooks().format('YYYY-MM-DD'),
                to_date: this.tasksEndDate,
            });
            if (!roomResp) {
                roomResp = results[results.length - 1];
            }
            const [bookingResp, countries] = results;
            booking.calendar_dates.days = bookingResp.days;
            booking.calendar_dates.months = bookingResp.months;
            this.setRoomsData(roomResp);
            this.countries = countries;
            this.setUpCalendarData(roomResp, bookingResp);
            let paymentMethods = roomResp['My_Result']['allowed_payment_methods'];
            this.showPaymentDetails = paymentMethods.some(item => item.code === '001' || item.code === '004');
            this.updateBookingEventsDateRange(this.calendarData.bookingEvents);
            this.updateBookingEventsDateRange(this.calendarData.toBeAssignedEvents);
            this.today = this.transformDateForScroll(new Date());
            let startingDay = new Date(this.calendarData.startingDate);
            startingDay.setHours(0, 0, 0, 0);
            this.days = bookingResp.days;
            this.calendarData.days = this.days;
            this.calendarData.monthsInfo = bookingResp.months;
            booking.calendar_dates.fromDate = this.calendarData.from_date;
            booking.calendar_dates.toDate = this.calendarData.to_date;
            this.fetchDayUseBookings(this.property_id, this.calendarData.from_date, this.calendarData.to_date);
            setTimeout(() => {
                this.scrollToElement(this.today);
            }, 200);
            if (!this.calendarData.is_vacation_rental) {
                await this.fetchUnassignedUnitsRange(this.from_date, this.to_date);
            }
            this.unsubscribeRealtime = realtime_service.realtimeService.subscribe(this.property_id, async (msg) => {
                await this.handleSocketMessage(msg.reason, msg.payload);
            });
        }
        catch (error) {
            console.error('Initializing Calendar Error', error);
        }
    }
    /**
     * Fetches day-use bookings for the given window and merges them into `dayUseBookings`
     * (passed down to `<igl-cal-body>` to mark booked units with a red 2px cell border).
     */
    async fetchDayUseBookings(propertyId, fromDate, toDate) {
        try {
            const bookings = await this.propertyService.getDayUseBookingsForCalendar({
                property_id: Number(propertyId),
                from_date: fromDate,
                to_date: toDate,
            });
            this.dayUseBookings = [...this.dayUseBookings, ...bookings];
        }
        catch (error) {
            console.error('Error fetching day-use bookings for calendar', error);
        }
    }
    /**
     * Broadcast after a `Do_Day_Use` call succeeds elsewhere (e.g. another agent/tab).
     * The socket payload doesn't carry `unit_id`/`bh_id`, so we can't build a
     * `DayUseBookings` entry from it directly — refetch the affected window instead.
     */
    async handleDayUseCreated(result) {
        const fromDate = result?.extra_service?.start_date ?? result?.booking?.from_date;
        const toDate = result?.extra_service?.end_date ?? result?.booking?.to_date;
        if (!fromDate || !toDate) {
            return;
        }
        await this.fetchDayUseBookings(this.property_id, fromDate, toDate);
    }
    /**
     * Broadcast when a day-use extra service is added, edited, or removed (e.g. from
     * another agent/tab). Unlike `DAY_USE_CREATED`, this refetches the target date and
     * *replaces* whatever we currently hold for it, so removed/edited bookings correctly
     * disappear from units that no longer have one instead of leaving a stale entry behind.
     */
    async handleDayUseModified(payload) {
        const date = payload?.start_date;
        if (!date) {
            return;
        }
        try {
            const bookings = await this.propertyService.getDayUseBookingsForCalendar({
                property_id: Number(this.property_id),
                from_date: date,
                to_date: date,
            });
            this.dayUseBookings = [...this.dayUseBookings.filter(b => b.target_date !== date), ...bookings];
        }
        catch (error) {
            console.error('Error refetching day-use bookings after DAY_USE_MODIFIED', error);
        }
    }
    /**
     * Broadcast when a day-use extra service is removed. Unlike `DAY_USE_MODIFIED`, the payload
     * carries enough to identify the exact entry (unit + date), so it's dropped locally without a refetch.
     */
    handleDayUseRemoved(payload) {
        const date = payload?.START_DATE;
        const unitId = payload?.PR_ID;
        if (!date || unitId == null) {
            return;
        }
        this.dayUseBookings = this.dayUseBookings.filter(b => !(b.target_date === date && b.unit_id === unitId));
    }
    async getHkIssues(property_id) {
        const issues = await this.housekeepingService.getHkIssues({ property_id });
        let _issues = new Map();
        for (const issue of issues ?? []) {
            const id = issue.unit.id;
            _issues.set(id, [...(_issues.get(id) ?? []), issue]);
        }
        calendarData.calendar_data.unitIssues = new Map(_issues);
    }
    async fetchSetupEntries() {
        const d = await this.setupService.getSetupEntriesByTableName('_DEPARTURE_TIME');
        this.departureTimes = d;
    }
    async getHousekeepingTasks({ from_date, to_date }) {
        const { tasks } = await this.housekeepingService.getHkTasks({
            property_id: this.property_id,
            from_date,
            to_date,
            housekeepers: [],
            language: locale_controller.LocaleController.language,
            cleaning_frequency: (calendarData.calendar_data.cleaning_frequency ?? index$4.housekeeping_store?.hk_criteria?.cleaning_frequencies[0])?.code,
            dusty_window: index$4.housekeeping_store?.hk_criteria?.dusty_periods[0]?.code,
            highlight_window: index$4.housekeeping_store?.hk_criteria?.highlight_checkin_options[0]?.code,
        });
        booking.addCleaningTasks(tasks);
    }
    async handleSocketMessage(reason, result) {
        const reasonHandlers = {
            DORESERVATION: this.handleDoReservation,
            BLOCK_EXPOSED_UNIT: this.handleBlockExposedUnit,
            ASSIGN_EXPOSED_ROOM: this.handleAssignExposedRoom,
            REALLOCATE_EXPOSED_ROOM_BLOCK: this.handleReallocateExposedRoomBlock,
            DELETE_CALENDAR_POOL: this.handleDeleteCalendarPool,
            GET_UNASSIGNED_DATES: this.handleGetUnassignedDates,
            UPDATE_CALENDAR_AVAILABILITY: r => this.availabilityQueue.offer(r),
            CHANGE_IN_DUE_AMOUNT: this.handleChangeInDueAmount,
            CHANGE_IN_BOOK_STATUS: this.handleChangeInBookStatus,
            NON_TECHNICAL_CHANGE_IN_BOOKING: this.handleNonTechnicalChangeInBooking,
            ROOM_STATUS_CHANGED: this.handleRoomStatusChanged,
            UNIT_HK_STATUS_CHANGED: this.handleUnitHKStatusChanged,
            SHARING_PERSONS_UPDATED: this.handleSharingPersonsUpdated,
            ROOM_TYPE_CLOSE: r => this.salesQueue.offer({ ...r, is_available_to_book: false }),
            ROOM_TYPE_OPEN: r => this.salesQueue.offer({ ...r, is_available_to_book: true }),
            HK_SKIP: this.handleHkSkip,
            SET_ROOM_CALENDAR_EXTRA: this.handleRoomCalendarExtra,
            UPDATE_CALENDAR_RATE: this.handleUpdateCalendarRate,
            SET_DEPARTURE_TIME: this.handleSetDepartureTime,
            HK_ISSUE_FOUND: this.handleHKIssueFound,
            HK_ISSUE_FIXED: this.handleHKIssueFixed,
            DAY_USE_CREATED: this.handleDayUseCreated,
            DAY_USE_MODIFIED: this.handleDayUseModified,
            DAY_USE_REMOVED: this.handleDayUseRemoved,
        };
        const handler = reasonHandlers[reason];
        if (handler) {
            await handler.call(this, result);
        }
        else {
            console.warn(`Unhandled REASON: ${reason}`);
        }
    }
    handleUpdateCalendarRate(result) {
        this.salesQueue.offer({ ...result, night: result.date, is_available_to_book: !result.is_closed });
    }
    handleHKIssueFound(result) {
        const issues = new Map(calendarData.calendar_data.unitIssues);
        const issue = result.My_Hka;
        issues.set(issue.PR_ID, [
            ...(issues.get(issue.PR_ID) ?? []),
            {
                date: issue.ENTRY_DATE,
                description: issue.COMMENT,
                hka_id: issue.HKA_ID,
                housekeeper_name: issue?.My_Hkm?.NAME,
                id: result.HK_ISSUE_ID,
                hour: issue.HOUR,
                minute: issue.MINUTE,
                unit: {
                    id: issue.PR_ID,
                    name: issue?.My_Pr?.NAME,
                },
            },
        ]);
        calendarData.calendar_data.unitIssues = new Map(issues);
    }
    handleHKIssueFixed(result) {
        const issues = new Map(calendarData.calendar_data.unitIssues);
        const issue = result.My_Hka;
        const prevIssues = issues.get(issue.PR_ID);
        if (!prevIssues) {
            return;
        }
        const filteredIssues = prevIssues.filter(i => i.id !== result.HK_ISSUE_ID);
        if (filteredIssues.length === 0) {
            issues.delete(issue.PR_ID);
        }
        else {
            issues.set(issue.PR_ID, filteredIssues);
        }
        calendarData.calendar_data.unitIssues = issues;
    }
    handleSetDepartureTime(result) {
        this.calendarData = {
            ...this.calendarData,
            bookingEvents: [
                ...this.calendarData.bookingEvents.map(e => {
                    if (e.IDENTIFIER === result.room_identifier) {
                        const departure_time = this.departureTimes.find(d => d.CODE_NAME === result.code);
                        return {
                            ...e,
                            DEPARTURE_TIME: {
                                code: result.code,
                                description: departure_time.CODE_VALUE_EN,
                            },
                        };
                    }
                    return e;
                }),
            ],
        };
    }
    handleRoomCalendarExtra(result) {
        this.calendarData = {
            ...this.calendarData,
            bookingEvents: [
                ...this.calendarData.bookingEvents.map(e => {
                    if (e.IDENTIFIER === result.room_identifier) {
                        const newValue = result.value ? JSON.parse(result.value) : null;
                        const calendar_extra = newValue ? (e.ROOM_INFO.calendar ? { ...e.ROOM_INFO.calendar, ...newValue } : newValue) : null;
                        return {
                            ...e,
                            ROOM_INFO: {
                                ...e.ROOM_INFO,
                                calendar_extra,
                            },
                        };
                    }
                    return e;
                }),
            ],
        };
    }
    handleSharingPersonsUpdated(result) {
        console.log('sharing persons updated', result);
        this.calendarData = {
            ...this.calendarData,
            bookingEvents: [
                ...this.calendarData.bookingEvents.map(e => {
                    if (e.IDENTIFIER === result.identifier) {
                        const mainGuest = result.guests?.find(p => p.is_main);
                        return { ...e, NAME: booking.formatName(mainGuest.first_name, mainGuest.last_name), ROOM_INFO: { ...e.ROOM_INFO, sharing_persons: result.guests } };
                    }
                    return e;
                }),
            ],
        };
    }
    handleRoomStatusChanged(result) {
        this.calendarData = {
            ...this.calendarData,
            bookingEvents: [
                ...this.calendarData.bookingEvents.map(e => {
                    if (e.IDENTIFIER === result.room_identifier) {
                        const STATUS = booking.getRoomStatus({
                            from_date: e.FROM_DATE,
                            to_date: e.TO_DATE,
                            in_out: { ...e.ROOM_INFO.in_out, code: result.status },
                            status_code: e.BASE_STATUS_CODE,
                        });
                        return {
                            ...e,
                            ROOM_INFO: { ...e.ROOM_INFO, in_out: { ...e.ROOM_INFO.in_out, code: result.status } },
                            CHECKIN: result.status === '001',
                            CHECKOUT: result.status === '002',
                            STATUS,
                        };
                    }
                    return e;
                }),
            ],
        };
    }
    handleHkSkip(result) {
        booking.cleanRoom({ date: result.DATE, unitId: result.PR_ID });
    }
    handleUnitHKStatusChanged(result) {
        console.log('hk unit change', result);
        const updatedRooms = [...this.calendarData.roomsInfo];
        const changedRoomTypeIdx = updatedRooms.findIndex((roomType) => roomType.id === result.ROOM_CATEGORY_ID);
        if (changedRoomTypeIdx !== -1) {
            const changedRoomType = { ...updatedRooms[changedRoomTypeIdx] };
            const changedPhysicalRoomIdx = changedRoomType.physicalrooms.findIndex(room => room.id === result.PR_ID);
            if (changedPhysicalRoomIdx !== -1) {
                const updatedPhysicalRooms = [...changedRoomType.physicalrooms];
                const targetPhysicalRoom = { ...updatedPhysicalRooms[changedPhysicalRoomIdx] };
                targetPhysicalRoom.hk_status = result.HKS_CODE;
                updatedPhysicalRooms[changedPhysicalRoomIdx] = targetPhysicalRoom;
                changedRoomType.physicalrooms = updatedPhysicalRooms;
                updatedRooms[changedRoomTypeIdx] = changedRoomType;
                this.calendarData = {
                    ...this.calendarData,
                    roomsInfo: updatedRooms,
                };
            }
        }
        const roomPayload = { date: moment.hooks().format('YYYY-MM-DD'), unitId: result.PR_ID };
        if (result.HKS_CODE === '002') {
            booking.addRoomForCleaning(roomPayload);
        }
        else {
            booking.cleanRoom(roomPayload);
        }
    }
    async handleDoReservation(result) {
        const transformedBooking = booking.transformNewBooking(result);
        this.AddOrUpdateRoomBookings(transformedBooking);
    }
    async handleBlockExposedUnit(result) {
        const transformedBooking = [await booking.transformNewBLockedRooms(result)];
        this.AddOrUpdateRoomBookings(transformedBooking);
    }
    async handleAssignExposedRoom(result) {
        console.log(result);
        const transformedBooking = booking.transformNewBooking(result);
        this.AddOrUpdateRoomBookings(transformedBooking);
    }
    async handleReallocateExposedRoomBlock(result) {
        await this.handleBlockExposedUnit(result);
    }
    async handleDeleteCalendarPool(result) {
        console.log('delete calendar pool');
        this.calendarData = {
            ...this.calendarData,
            bookingEvents: this.calendarData.bookingEvents.filter(e => e.POOL !== result),
        };
    }
    /**
     * Assigning a multi-room booking fires one `GET_UNASSIGNED_DATES` per unit, all within a second or
     * two and all for overlapping periods. Answering each one with its own request is what made these
     * bursts expensive, so notifications are collected rather than followed:
     *
     * - the quiet timer restarts on every notification, so a burst is fetched once it settles;
     * - the max-wait timer does not restart, so a sustained stream still flushes on a fixed cadence
     *   instead of being starved by the quiet timer;
     * - {@link isFlushingUnassignedDates} keeps exactly one request in flight; notifications arriving
     *   meanwhile stay in `pendingUnassignedRanges` and are picked up by the trailing run, so a busy
     *   period adds items to the next batch rather than adding requests.
     */
    scheduleUnassignedDatesFlush() {
        clearTimeout(this.unassignedDatesQuietTimer);
        this.unassignedDatesQuietTimer = setTimeout(() => this.runUnassignedDatesFlush(), UNASSIGNED_DATES_QUIET_MS);
        this.unassignedDatesMaxWaitTimer ??= setTimeout(() => this.runUnassignedDatesFlush(), UNASSIGNED_DATES_MAX_WAIT_MS);
    }
    async runUnassignedDatesFlush() {
        this.clearUnassignedDatesTimers();
        if (this.isFlushingUnassignedDates) {
            return;
        }
        this.isFlushingUnassignedDates = true;
        try {
            await this.flushUnassignedDates();
        }
        catch (error) {
            // A failed fetch must not stop later notifications from being served.
            console.error('Unassigned dates refresh failed:', error);
        }
        finally {
            this.isFlushingUnassignedDates = false;
        }
        if (this.pendingUnassignedRanges.length > 0) {
            this.scheduleUnassignedDatesFlush();
        }
    }
    clearUnassignedDatesTimers() {
        clearTimeout(this.unassignedDatesQuietTimer);
        clearTimeout(this.unassignedDatesMaxWaitTimer);
        this.unassignedDatesQuietTimer = null;
        this.unassignedDatesMaxWaitTimer = null;
    }
    handleGetUnassignedDates(result) {
        if (this.calendarData.is_vacation_rental) {
            return;
        }
        const { from_date: loadedFrom, to_date: loadedTo } = this.calendarData;
        if (!loadedFrom || !loadedTo) {
            return;
        }
        const parsedResult = this.parseDateRange(result);
        const notifiedFrom = toIsoDate(parsedResult.FROM_DATE);
        const notifiedTo = toIsoDate(parsedResult.TO_DATE);
        if (!notifiedFrom || !notifiedTo) {
            console.warn('GET_UNASSIGNED_DATES payload has no usable range:', result);
            return;
        }
        // YYYY-MM-DD strings compare correctly as-is, and staying on strings avoids the day shift that
        // `Date` parsing causes west of UTC. A stay may start before or end after the loaded range;
        // only the part that overlaps it needs re-reading.
        const fromDate = notifiedFrom > loadedFrom ? notifiedFrom : loadedFrom;
        const toDate = notifiedTo < loadedTo ? notifiedTo : loadedTo;
        if (fromDate > toDate) {
            return;
        }
        this.pendingUnassignedRanges.push({ fromDate, toDate });
        this.scheduleUnassignedDatesFlush();
    }
    /** Every unassigned-units read goes through here so the header can show the range as in flight. */
    async fetchUnassignedUnitsRange(fromDate, toDate) {
        const release = calendarGrid.beginUnassignedUnitsFetch(fromDate, toDate);
        try {
            const entries = await this.unassignedUnitsService.getAggregatedUnAssignedRoomsByDateRange({
                propertyid: this.property_id,
                from_date: fromDate,
                to_date: toDate,
            });
            calendarGrid.replaceUnassignedUnitsRange(fromDate, toDate, entries);
        }
        finally {
            release();
        }
    }
    async flushUnassignedDates() {
        const batch = this.pendingUnassignedRanges;
        this.pendingUnassignedRanges = [];
        if (batch.length === 0) {
            return;
        }
        for (const span of mergeUnassignedDatesRanges(batch)) {
            // Authoritative and sparse: replacing the whole span handles both new/changed dates and dates
            // that just emptied out, in one call — no per-source diff-check needed.
            await this.fetchUnassignedUnitsRange(span.fromDate, span.toDate);
        }
    }
    parseDateRange(str) {
        const result = {};
        const pairs = str.split('|');
        pairs.forEach(pair => {
            // Split on the first colon only: a value with a time part ("2026-09-10 00:00:00") has colons of its own.
            const separator = pair.indexOf(':');
            if (separator === -1) {
                return;
            }
            result[pair.slice(0, separator).trim()] = pair.slice(separator + 1).trim();
        });
        return result;
    }
    handleChangeInDueAmount(result) {
        this.calendarData = {
            ...this.calendarData,
            bookingEvents: this.calendarData.bookingEvents.map(event => {
                if (result.pools.includes(event.ID)) {
                    return { ...event, BALANCE: result.due_amount };
                }
                return event;
            }),
        };
    }
    handleChangeInBookStatus(result) {
        this.calendarData = {
            ...this.calendarData,
            bookingEvents: this.calendarData.bookingEvents.map(event => {
                if (result.pools.includes(event.ID)) {
                    return {
                        ...event,
                        STATUS: event.STATUS !== 'IN-HOUSE' ? booking.bookingStatus[result.status_code] : result.status_code === '001' ? booking.bookingStatus[result.status_code] : 'IN-HOUSE',
                    };
                }
                return event;
            }),
        };
    }
    handleNonTechnicalChangeInBooking(result) {
        this.calendarData = {
            ...this.calendarData,
            bookingEvents: this.calendarData.bookingEvents.map(event => {
                if (event.BOOKING_NUMBER === result.booking_nbr) {
                    return { ...event, PRIVATE_NOTE: booking.getPrivateNote(result.extras) };
                }
                return event;
            }),
        };
    }
    updateBookingEventsDateRange(eventData) {
        eventData.forEach(bookingEvent => {
            bookingEvent.legendData = this.calendarData.formattedLegendData;
            bookingEvent.defaultDateRange = {};
            bookingEvent.defaultDateRange.fromDate = new Date(bookingEvent.FROM_DATE + 'T00:00:00');
            bookingEvent.defaultDateRange.fromDateStr = this.getDateStr(bookingEvent.defaultDateRange.fromDate);
            bookingEvent.defaultDateRange.fromDateTimeStamp = bookingEvent.defaultDateRange.fromDate.getTime();
            bookingEvent.defaultDateRange.toDate = new Date(bookingEvent.TO_DATE + 'T00:00:00');
            bookingEvent.defaultDateRange.toDateStr = this.getDateStr(bookingEvent.defaultDateRange.toDate);
            bookingEvent.defaultDateRange.toDateTimeStamp = bookingEvent.defaultDateRange.toDate.getTime();
            bookingEvent.defaultDateRange.dateDifference = bookingEvent.NO_OF_DAYS;
            bookingEvent.roomsInfo = [...this.calendarData.roomsInfo];
            if (!utils.isBlockUnit(bookingEvent.STATUS_CODE)) {
                // if (calendar_data.checkin_enabled) {
                bookingEvent.STATUS = booking.getRoomStatus({
                    in_out: bookingEvent.ROOM_INFO?.in_out,
                    from_date: bookingEvent.FROM_DATE,
                    to_date: bookingEvent.TO_DATE,
                    status_code: bookingEvent.BASE_STATUS_CODE,
                });
                // } else {
                //   const toDate = moment(bookingEvent.TO_DATE, 'YYYY-MM-DD');
                //   const fromDate = moment(bookingEvent.FROM_DATE, 'YYYY-MM-DD');
                //   if (bookingEvent.STATUS !== 'PENDING') {
                //     if (fromDate.isSame(now, 'day') && now.hour() >= 12) {
                //       bookingEvent.STATUS = bookingStatus['000'];
                //     } else if (now.isAfter(fromDate, 'day') && now.isBefore(toDate, 'day')) {
                //       bookingEvent.STATUS = bookingStatus['000'];
                //     } else if (toDate.isSame(now, 'day') && now.hour() < 12) {
                //       bookingEvent.STATUS = bookingStatus['000'];
                //     } else if ((toDate.isSame(now, 'day') && now.hour() >= 12) || toDate.isBefore(now, 'day')) {
                //       bookingEvent.STATUS = bookingStatus['003'];
                //     }
                //   }
                // }
            }
        });
    }
    /**
     *
     *private updateBookingEventsDateRange(eventData) {
      const now = moment();
      eventData.forEach(bookingEvent => {
        bookingEvent.legendData = this.calendarData.formattedLegendData;
        bookingEvent.defaultDateRange = {};
        bookingEvent.defaultDateRange.fromDate = new Date(bookingEvent.FROM_DATE + 'T00:00:00');
        bookingEvent.defaultDateRange.fromDateStr = this.getDateStr(bookingEvent.defaultDateRange.fromDate);
        bookingEvent.defaultDateRange.fromDateTimeStamp = bookingEvent.defaultDateRange.fromDate.getTime();
  
        bookingEvent.defaultDateRange.toDate = new Date(bookingEvent.TO_DATE + 'T00:00:00');
        bookingEvent.defaultDateRange.toDateStr = this.getDateStr(bookingEvent.defaultDateRange.toDate);
        bookingEvent.defaultDateRange.toDateTimeStamp = bookingEvent.defaultDateRange.toDate.getTime();
  
        bookingEvent.defaultDateRange.dateDifference = bookingEvent.NO_OF_DAYS;
        bookingEvent.roomsInfo = [...this.calendarData.roomsInfo];
        if (!isBlockUnit(bookingEvent.STATUS_CODE)) {
          const toDate = moment(bookingEvent.TO_DATE, 'YYYY-MM-DD');
          const fromDate = moment(bookingEvent.FROM_DATE, 'YYYY-MM-DD');
          if (bookingEvent.STATUS !== 'PENDING') {
            if (fromDate.isSame(now, 'day') && now.hour() >= 12) {
              bookingEvent.STATUS = bookingStatus['000'];
            } else if (now.isAfter(fromDate, 'day') && now.isBefore(toDate, 'day')) {
              bookingEvent.STATUS = bookingStatus['000'];
            } else if (toDate.isSame(now, 'day') && now.hour() < 12) {
              bookingEvent.STATUS = bookingStatus['000'];
            } else if ((toDate.isSame(now, 'day') && now.hour() >= 12) || toDate.isBefore(now, 'day')) {
              bookingEvent.STATUS = bookingStatus['003'];
            }
          }
        }
      });
    }
     */
    processSalesBatch(batch) {
        const days = [...booking.calendar_dates.days];
        const disabled_cells = new Map(booking.calendar_dates.disabled_cells);
        for (const sale of batch) {
            // 1) find the day index
            const dayIdx = days.findIndex(d => d.value === sale.night);
            if (dayIdx === -1) {
                console.warn(`Couldn't find day ${sale.night}`);
                continue;
            }
            // 2) check cache entry
            let entry = this.roomTypeIdsCache.get(sale.rate_plan_id);
            if (entry === 'skip') {
                // previously determined no matching room type for this rate_plan_id
                continue;
            }
            // 3) if not cached, look it up and cache it
            if (!entry) {
                const rtIdx = days[dayIdx].rate.findIndex(rt => rt.rateplans.some(rp => rp.id === sale.rate_plan_id));
                if (rtIdx === -1) {
                    this.roomTypeIdsCache.set(sale.rate_plan_id, 'skip');
                    console.warn(`Couldn't find room type for rate plan ${sale.rate_plan_id}`);
                    continue;
                }
                const roomType = days[dayIdx].rate[rtIdx];
                const rpIdx = roomType.rateplans.findIndex(rp => rp.id === sale.rate_plan_id);
                entry = { id: rtIdx, index: rpIdx };
                this.roomTypeIdsCache.set(sale.rate_plan_id, entry);
            }
            // 4) apply cached indices
            const { id: roomTypeIdx, index: ratePlanIdx } = entry;
            const roomType = days[dayIdx].rate[roomTypeIdx];
            // 5) update that specific rateplan
            const updatedRateplans = roomType.rateplans.map((rp, i) => (i === ratePlanIdx ? { ...rp, is_available_to_book: sale.is_available_to_book } : rp));
            const is_available_to_book = updatedRateplans.some(rp => rp.is_available_to_book);
            days[dayIdx].rate[roomTypeIdx] = {
                ...roomType,
                rateplans: updatedRateplans,
                // overall room availability = true if any rateplan is bookable
                is_available_to_book,
            };
            //update the disabled cells
            for (const room of roomType.physicalrooms) {
                const key = `${room.id}_${days[dayIdx].value}`;
                disabled_cells.set(key, { disabled: !is_available_to_book, reason: 'stop_sale' });
            }
        }
        // 6) write back to the store
        booking.calendar_dates['disabled_cells'] = new Map(disabled_cells);
        booking.calendar_dates.days = days;
    }
    processAvailabilityBatch(batch) {
        let days = [...booking.calendar_dates.days];
        const disabled_cells = new Map(booking.calendar_dates.disabled_cells);
        for (const queue of batch) {
            //find the selected day
            const index = days.findIndex(day => day.value === queue.date);
            if (index === -1) {
                console.warn(`Couldn't find day ${queue.date}`);
                return;
            }
            //find room_type_id
            const room_type_index = days[index].rate.findIndex(room => room.id === queue.room_type_id);
            if (room_type_index === -1) {
                console.warn(`Couldn't find room type ${queue.room_type_id}`);
                return;
            }
            const room_type = days[index].rate[room_type_index];
            //update the availability
            room_type.exposed_inventory.rts = queue.availability;
            // if (queue.availability === 0) {
            const isClosed = room_type.rateplans.every(rp => !rp.is_available_to_book);
            for (const room of room_type.physicalrooms) {
                const key = `${room.id}_${queue.date}`;
                disabled_cells.set(key, { disabled: queue.availability === 0, reason: isClosed ? 'stop_sale' : 'inventory' });
            }
            // }
        }
        booking.calendar_dates['disabled_cells'] = new Map(disabled_cells);
        booking.calendar_dates.days = [...days];
    }
    setRoomsData(roomServiceResp) {
        let roomsData = new Array();
        if (roomServiceResp.My_Result?.roomtypes?.length) {
            roomsData = roomServiceResp.My_Result.roomtypes;
            roomServiceResp.My_Result.roomtypes.forEach(roomCategory => {
                roomCategory.expanded = true;
            });
        }
        calendarData.calendar_data.roomsInfo = roomsData;
        this.calendarData.roomsInfo = roomsData;
    }
    getLegendData(aData) {
        return aData['My_Result'].calendar_legends;
    }
    getDateStr(date) {
        return irDate.formatDate(date, 'DD MMM YYYY');
    }
    scrollToElement(goToDate) {
        this.scrollContainer = this.scrollContainer || this.element.querySelector('.calendarScrollContainer');
        const topLeftCell = this.element.querySelector('.topLeftCell');
        const gotoDay = this.element.querySelector('.day-' + goToDate);
        if (gotoDay) {
            const isRtl = direction.isRtlDirection(locales_store.locales.direction);
            // scrollLeft:0 lands on the start edge regardless of direction (per the CSSOM View spec,
            // modern browsers report scrollLeft as 0-or-negative in RTL containers). From there we
            // measure the target day's offset from the same edge the sticky room-header column is
            // pinned to, which flips from the container's left to its right edge in RTL.
            this.scrollContainer.scrollTo({ left: 0 });
            const gotoRect = gotoDay.getBoundingClientRect();
            const containerRect = this.scrollContainer.getBoundingClientRect();
            const topLeftCellRect = topLeftCell.getBoundingClientRect();
            const offset = isRtl
                ? containerRect.right - gotoRect.right - topLeftCellRect.width - gotoRect.width
                : gotoRect.left - containerRect.left - topLeftCellRect.width - gotoRect.width;
            this.scrollContainer.scrollTo({
                left: isRtl ? -offset : offset,
            });
        }
    }
    AddOrUpdateRoomBookings(data, pool = undefined) {
        let bookings = [...this.calendarData.bookingEvents];
        this.updateBookingEventsDateRange(data);
        if (pool) {
            bookings = bookings.filter(booking => booking.POOL === pool);
        }
        data.forEach(d => {
            const idx = bookings.findIndex(booking => booking.ID === d.ID);
            if (idx === -1) {
                bookings.push(d);
            }
            else {
                bookings[idx] = d;
            }
        });
        this.calendarData = {
            ...this.calendarData,
            bookingEvents: bookings,
        };
        const isDateInBetweenTheLastPeriodDate = (d) => {
            const endDate = moment.hooks(this.tasksEndDate, 'YYYY-MM-DD');
            // return moment(d.FROM_DATE, 'YYYY-MM-DD').isBetween(moment(), endDate) || moment(d.TO_DATE, 'YYYY-MM-DD').isBetween(moment(), endDate);
            return moment.hooks(d.FROM_DATE, 'YYYY-MM-DD').isSameOrBefore(endDate, 'date') || moment.hooks(d.TO_DATE, 'YYYY-MM-DD').isSameOrBefore(endDate, 'date');
        };
        if (data.some(isDateInBetweenTheLastPeriodDate)) {
            this.getHousekeepingTasks({
                from_date: moment.hooks().format('YYYY-MM-DD'),
                to_date: this.tasksEndDate,
            });
        }
    }
    transformDateForScroll(date) {
        return moment.hooks(date).format('D_M_YYYY');
    }
    shouldRenderCalendarView() {
        // console.log("rendering...")
        return this.calendarData && this.calendarData.days && this.calendarData.days.length;
    }
    onOptionSelect(event) {
        const opt = event.detail;
        const calendarElement = this.element.querySelector('#iglooCalendar');
        switch (opt.key) {
            case 'showAssigned':
                calendarElement.classList.remove('showLegend');
                calendarElement.classList.remove('showToBeAssigned');
                calendarElement.classList.remove('showDayUseBookings');
                calendarElement.classList.toggle('showToBeAssigned');
                this.showLegend = false;
                this.showToBeAssigned = true;
                this.showDayUseBookings = false;
                break;
            case 'showLegend':
                calendarElement.classList.remove('showToBeAssigned');
                calendarElement.classList.remove('showLegend');
                calendarElement.classList.remove('showDayUseBookings');
                calendarElement.classList.toggle('showLegend');
                this.showLegend = !this.showLegend;
                this.showToBeAssigned = false;
                this.showDayUseBookings = false;
                break;
            case 'showDayUseBookings':
                calendarElement.classList.remove('showLegend');
                calendarElement.classList.remove('showToBeAssigned');
                calendarElement.classList.remove('showDayUseBookings');
                calendarElement.classList.toggle('showDayUseBookings');
                this.showLegend = false;
                this.showToBeAssigned = false;
                this.showDayUseBookings = true;
                break;
            case 'calendar':
                let dt = new Date();
                if (opt.data.start !== undefined && opt.data.end !== undefined) {
                    dt = opt.data.start.toDate();
                    this.handleDateSearch(opt.data);
                }
                else {
                    //scroll to unassigned dates
                    dt = new Date(opt.data);
                    dt.setDate(dt.getDate() + 1);
                    if (!opt?.noScroll) {
                        this.scrollToElement(dt.getDate() + '_' + (dt.getMonth() + 1) + '_' + dt.getFullYear());
                    }
                }
                this.highlightedDate = this.transformDateForScroll(dt);
                break;
            case 'search':
                break;
            case 'bulk':
                this.calendarSidebarState = {
                    type: 'bulk-blocks',
                    payload: null,
                };
                break;
            case 'rectify':
                this.calendarSidebarState = {
                    type: 'rectifier',
                    payload: null,
                };
                break;
            case 'add':
                //console.log('data:', opt.data);
                if (opt.data.event_type !== 'EDIT_BOOKING') {
                    this.bookingItem = opt.data;
                }
                else {
                    this.editBookingItem = opt.data;
                }
                break;
            case 'gotoToday':
                this.scrollToElement(this.today);
                break;
            case 'closeSideMenu':
                this.closeSideMenu();
                this.highlightedDate = '';
                this.showBookProperty = false;
                break;
        }
    }
    async addDatesToCalendar(fromDate, toDate) {
        const [results] = await Promise.all([this.bookingService.getCalendarData(this.property_id, fromDate, toDate)]);
        this.fetchDayUseBookings(this.property_id, fromDate, toDate);
        const newBookings = results.myBookings || [];
        this.updateBookingEventsDateRange(newBookings);
        if (new Date(fromDate).getTime() < new Date(this.calendarData.startingDate).getTime()) {
            this.calendarData.startingDate = new Date(fromDate).getTime();
            this.calendarData.from_date = fromDate;
            booking.calendar_dates.fromDate = this.calendarData.from_date;
            this.days = [...results.days, ...this.days];
            let newMonths = [...results.months];
            if (this.calendarData.monthsInfo[0].monthName === results.months[results.months.length - 1].monthName) {
                this.calendarData.monthsInfo[0].daysCount = this.calendarData.monthsInfo[0].daysCount + results.months[results.months.length - 1].daysCount;
                newMonths.pop();
            }
            let bookings = JSON.parse(JSON.stringify(newBookings));
            bookings = bookings.filter(newBooking => {
                const existingBookingIndex = this.calendarData.bookingEvents.findIndex(event => event.ID === newBooking.ID);
                if (existingBookingIndex !== -1) {
                    this.calendarData.bookingEvents[existingBookingIndex].FROM_DATE = newBooking.FROM_DATE;
                    this.calendarData.bookingEvents[existingBookingIndex].NO_OF_DAYS = booking.calculateDaysBetweenDates(newBooking.FROM_DATE, this.calendarData.bookingEvents[existingBookingIndex].TO_DATE);
                    return false;
                }
                return true;
            });
            booking.calendar_dates.days = this.days;
            this.calendarData = {
                ...this.calendarData,
                days: this.days,
                monthsInfo: [...newMonths, ...this.calendarData.monthsInfo],
                bookingEvents: [...this.calendarData.bookingEvents, ...bookings],
            };
            if (Math.abs(moment.hooks().diff(moment.hooks(fromDate, 'YYYY-MM-DD'), 'days')) <= 10) {
                await this.fetchUnassignedUnitsRange(fromDate, toDate);
            }
        }
        else {
            this.calendarData.endingDate = new Date(toDate).getTime();
            this.calendarData.to_date = toDate;
            booking.calendar_dates.toDate = this.calendarData.to_date;
            let newMonths = [...results.months];
            this.days = [...this.days, ...results.days];
            if (this.calendarData.monthsInfo[this.calendarData.monthsInfo.length - 1].monthName === results.months[0].monthName) {
                this.calendarData.monthsInfo[this.calendarData.monthsInfo.length - 1].daysCount =
                    this.calendarData.monthsInfo[this.calendarData.monthsInfo.length - 1].daysCount + results.months[0].daysCount;
                newMonths.shift();
            }
            let bookings = JSON.parse(JSON.stringify(newBookings));
            bookings = bookings.filter(newBooking => {
                const existingBookingIndex = this.calendarData.bookingEvents.findIndex(event => event.ID === newBooking.ID);
                if (existingBookingIndex !== -1) {
                    this.calendarData.bookingEvents[existingBookingIndex].TO_DATE = newBooking.TO_DATE;
                    this.calendarData.bookingEvents[existingBookingIndex].NO_OF_DAYS = booking.calculateDaysBetweenDates(this.calendarData.bookingEvents[existingBookingIndex].FROM_DATE, newBooking.TO_DATE);
                    return false;
                }
                return true;
            });
            booking.calendar_dates.days = this.days;
            //calendar_dates.months = bookingResp.months;
            this.calendarData = {
                ...this.calendarData,
                days: this.days,
                monthsInfo: [...this.calendarData.monthsInfo, ...newMonths],
                bookingEvents: [...this.calendarData.bookingEvents, ...bookings],
            };
            await this.fetchUnassignedUnitsRange(fromDate, toDate);
        }
        this.dragOverBoundsStale = true;
    }
    async handleDateSearch(dates) {
        const startDate = moment.hooks(dates.start).toDate();
        const defaultFromDate = moment.hooks(this.calDates.from).toDate();
        const endDate = dates.end.toDate();
        const defaultToDate = this.calendarData.endingDate;
        if (startDate.getTime() < new Date(this.calDates.from).getTime()) {
            await this.addDatesToCalendar(moment.hooks(startDate).add(-1, 'days').format('YYYY-MM-DD'), moment.hooks(defaultFromDate).add(-1, 'days').format('YYYY-MM-DD'));
            this.calDates = { ...this.calDates, from: dates.start.add(-1, 'days').format('YYYY-MM-DD') };
            this.scrollToElement(this.transformDateForScroll(startDate));
        }
        else if (startDate.getTime() > defaultFromDate.getTime() && startDate.getTime() < defaultToDate && endDate.getTime() < defaultToDate) {
            this.scrollToElement(this.transformDateForScroll(startDate));
        }
        else if (startDate.getTime() > defaultToDate) {
            const nextDay = utils.getNextDay(new Date(this.calendarData.endingDate));
            await this.addDatesToCalendar(nextDay, moment.hooks(endDate).add(2, 'months').format('YYYY-MM-DD'));
            this.scrollToElement(this.transformDateForScroll(startDate));
        }
    }
    closeSideMenu() {
        // const calendarElement = this.element.querySelector('#iglooCalendar');
        // calendarElement.classList.remove('showToBeAssigned');
        // calendarElement.classList.remove('showLegend');
        this.showLegend = false;
        this.showToBeAssigned = false;
        this.showDayUseBookings = false;
    }
    scrollViewDragPos = { top: 0, left: 0, x: 0, y: 0 };
    dragScrollContent(event) {
        this.scrollViewDragging = false;
        let isPreventPageScroll = event && event.target ? this.hasAncestorWithClass(event.target, 'preventPageScroll') : false;
        if (!isPreventPageScroll && event.buttons === 1) {
            this.scrollViewDragPos = {
                left: this.scrollContainer.scrollLeft,
                top: this.scrollContainer.scrollTop,
                x: event.clientX,
                y: event.clientY,
            };
            document.addEventListener('mousemove', this.onScrollContentMoveHandler);
            document.addEventListener('mouseup', this.onScrollContentMoveEndHandler);
        }
    }
    onScrollContentMoveHandler = (event) => {
        if (event.buttons !== 1) {
            return;
        }
        const dx = event.clientX - this.scrollViewDragPos.x;
        const dy = event.clientY - this.scrollViewDragPos.y;
        this.scrollContainer.scrollTop = this.scrollViewDragPos.top - dy;
        this.scrollContainer.scrollLeft = this.scrollViewDragPos.left - dx;
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
            this.scrollViewDragging = true;
        }
    };
    onScrollContentMoveEndHandler = () => {
        document.removeEventListener('mousemove', this.onScrollContentMoveHandler);
        document.removeEventListener('mouseup', this.onScrollContentMoveEndHandler);
    };
    calendarScrolling() {
        if (this.scrollContainer) {
            if (this.highlightedDate) {
                const highlightedElement = document.querySelector(`.day-${this.highlightedDate}`);
                if (highlightedElement) {
                    const { left, right } = highlightedElement.getBoundingClientRect();
                    const isVisible = left >= 0 && right <= window.innerWidth;
                    if (!isVisible) {
                        this.highlightedDate = '';
                    }
                }
            }
            const isRtl = direction.isRtlDirection(locales_store.locales.direction);
            const containerRect = this.scrollContainer.getBoundingClientRect();
            let leftSideMenuSize = calendarGrid.ROOM_HEADER_WIDTH;
            let maxWidth = containerRect.width - leftSideMenuSize;
            // The sticky room-header column is pinned to the physical left in LTR but to the physical
            // right in RTL (inset-inline-start: 0), so the usable/scrollable grid bounds mirror too.
            let leftX = isRtl ? containerRect.x : containerRect.x + leftSideMenuSize;
            let rightX = isRtl ? containerRect.x + containerRect.width - leftSideMenuSize : containerRect.x + containerRect.width;
            let cells = Array.from(this.element.querySelectorAll('.monthCell'));
            if (cells.length) {
                cells.map(async (monthContainer) => {
                    let monthRect = monthContainer.getBoundingClientRect();
                    if (cells.indexOf(monthContainer) === cells.length - 1) {
                        // The chronologically-last month is the rightmost cell in LTR but the leftmost cell
                        // in RTL (mirrored grid), so "has it scrolled fully into view" checks the opposite edge.
                        const reachedEnd = isRtl ? monthRect.x >= leftX : monthRect.x + monthRect.width <= rightX;
                        if (reachedEnd && !this.reachedEndOfCalendar) {
                            this.reachedEndOfCalendar = true;
                            //await this.addNextTwoMonthsToCalendar();
                            const nextTwoMonths = utils.addTwoMonthToDate(new Date(this.calendarData.endingDate));
                            const nextDay = utils.getNextDay(new Date(this.calendarData.endingDate));
                            await this.addDatesToCalendar(nextDay, nextTwoMonths);
                            this.reachedEndOfCalendar = false;
                        }
                    }
                    if (monthRect.x + monthRect.width < leftX) ;
                    else if (monthRect.x > rightX) ;
                    else if (isRtl) {
                        // Mirror of the LTR branch below: the sticky room-header column sits at the physical
                        // end edge (right) in RTL instead of the start edge (left), so the month currently
                        // scrolling underneath it is pinned/clipped from the right instead of the left.
                        let titleElement = monthContainer.querySelector('.monthTitle');
                        let marginStart = 0;
                        let monthWidth = monthRect.width;
                        if (monthRect.x + monthRect.width > rightX) {
                            marginStart = monthRect.x + monthRect.width - rightX;
                            monthWidth = monthRect.x < leftX ? maxWidth : rightX - monthRect.x;
                        }
                        else {
                            monthWidth = maxWidth - monthWidth > monthWidth ? monthWidth : monthRect.x + monthRect.width - leftX;
                        }
                        titleElement.style.marginInlineStart = marginStart + 'px';
                        titleElement.style.width = monthWidth + 'px';
                    }
                    else {
                        let titleElement = monthContainer.querySelector('.monthTitle');
                        let marginLeft = 0;
                        let monthWidth = monthRect.width;
                        if (monthRect.x < leftX) {
                            marginLeft = Math.abs(monthRect.x) - leftX;
                            marginLeft = monthRect.x < 0 ? Math.abs(monthRect.x) + leftX : Math.abs(marginLeft);
                            monthWidth = monthRect.x + monthRect.width > rightX ? maxWidth : monthRect.x + monthRect.width - leftX;
                        }
                        else {
                            monthWidth = maxWidth - monthWidth > monthWidth ? monthWidth : maxWidth - monthRect.x + leftX;
                        }
                        titleElement.style.marginInlineStart = marginLeft + 'px';
                        titleElement.style.width = monthWidth + 'px';
                    }
                });
            }
        }
    }
    hasAncestorWithClass(element, className) {
        let currentElement = element;
        while (currentElement !== null) {
            if (currentElement.matches(`.${className}`)) {
                return true;
            }
            currentElement = currentElement.parentElement;
        }
        return false;
    }
    async highlightDragOver(hightLightElement, currentPosition) {
        let xElement, yElement;
        if (currentPosition) {
            // The booking bar's physical-left edge is the later (checkout) date and its physical-right
            // edge is the earlier (check-in) date in RTL - the mirror of LTR, since the whole bar is
            // reflected (see toPhysicalLeft in calendar-grid.ts) - so which edge identifies the
            // check-in day flips too. Falls back to the left edge when width wasn't provided.
            const checkInX = direction.isRtlDirection(locales_store.locales.direction) && typeof currentPosition.width === 'number' ? currentPosition.x + currentPosition.width : currentPosition.x;
            xElement = this.visibleCalendarCells.x.find(pos => pos.left < checkInX && checkInX <= pos.left + pos.width);
            yElement = this.visibleCalendarCells.y.find(pos => pos.top < currentPosition.y && currentPosition.y <= pos.top + pos.height);
        }
        // console.log(hightLightElement+":::"+yElement.id+"_"+xElement.id);
        if (hightLightElement && xElement && yElement) {
            this.dragOverHighlightElement.emit({
                dragOverElement: yElement.id + '_' + xElement.id,
            });
        }
        else {
            this.dragOverHighlightElement.emit({ dragOverElement: '' });
        }
        if (!hightLightElement) {
            this.moveBookingTo.emit({
                bookingId: currentPosition.id,
                fromRoomId: currentPosition.fromRoomId,
                toRoomId: (yElement && yElement.id) || 'revert',
                moveToDay: (xElement && xElement.id) || 'revert',
                pool: currentPosition.pool,
                from_date: utils.convertDMYToISO(xElement && xElement.id),
                to_date: utils.computeEndDate(xElement && xElement.id, currentPosition.nbOfDays),
            });
        }
    }
    handleModalConfirm() {
        // Helper to reset modal state
        const resetModalState = () => {
            this.dialogData = null;
        };
        try {
            switch (this.dialogData?.reason) {
                case 'checkin':
                case 'checkout': {
                    const { bookingNumber, roomIdentifier } = this.dialogData;
                    const status = this.dialogData.reason === 'checkin' ? '001' : '002';
                    this.bookingService.handleExposedRoomInOut({ booking_nbr: bookingNumber, room_identifier: roomIdentifier, status }).finally(resetModalState);
                    if (this.dialogData.reason === 'checkin') {
                        this.openCalendarSidebar.emit({ type: 'room-guests', payload: this.dialogData.sidebarPayload });
                    }
                    break;
                }
                case 'stretch':
                    const { reason, ...rest } = this.dialogData;
                    this.showRoomNightsDialog.emit(rest);
                    break;
                case 'reallocate': {
                    if (!this.dialogData) {
                        console.warn('No dialog data available for reallocation.');
                        return;
                    }
                    const { pool, toRoomId, from_date, to_date } = this.dialogData;
                    // Handle room reallocation
                    this.eventsService
                        .reallocateEvent(pool, toRoomId, from_date, to_date)
                        .then(resetModalState)
                        .catch(() => {
                        console.error('Reallocation failed. Reverting booking.');
                        this.revertBooking.emit(pool);
                    })
                        .finally(resetModalState);
                    break;
                }
                default:
                    resetModalState();
                    break;
            }
        }
        catch (error) {
            console.error('Error handling modal confirm:', error);
            resetModalState();
        }
    }
    handleModalCancel() {
        if (this.dialogData?.reason === 'reallocate' || this.dialogData?.reason === 'stretch') {
            this.revertBooking.emit(this.dialogData.pool);
        }
        this.dialogData = null;
    }
    handleRoomNightsDialogClose(e) {
        if (e.detail.type === 'cancel') {
            this.revertBooking.emit(this.roomNightsData?.pool);
        }
        this.roomNightsData = null;
    }
    handleCloseBookingWindow() {
        this.bookingItem = null;
    }
    handleInvoiceClose(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.invoiceState = null;
    }
    handleCheckoutDialogClosed(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (this.dialogData?.reason !== 'checkout') {
            return;
        }
        const { reason } = event.detail;
        if (reason === 'openInvoice') {
            this.invoiceState = {
                booking: this.dialogData.booking,
                identifier: this.dialogData.roomIdentifier,
            };
        }
        this.dialogData = null;
    }
    render() {
        // if (!this.isAuthenticated) {
        //   return <ir-login onAuthFinish={() => this.auth.setIsAuthenticated(true)}></ir-login>;
        // }
        // console.log(this.bookingItem);
        return (index.h(index.Host, { key: '58afc9a2a0ca00e5b8632c0ace04bf74046775d4' }, index.h("ir-toast", { key: '1acaa4ed13d234101276ab2624a15b89c0692df3' }), index.h("ir-interceptor", { key: '07c68fbcccef1b1f97385fc9dc6ce2854e6f6c69' }), index.h("div", { key: '57206afa8737d973d801bf6a3759b3141e88232b', id: "iglooCalendar", class: { 'igl-calendar': true, 'showToBeAssigned': this.showToBeAssigned, 'showLegend': this.showLegend, 'showDayUseBookings': this.showDayUseBookings } }, this.shouldRenderCalendarView() ? (index.h(index.Fragment, { "data-testid": "ir-calendar" }, this.showToBeAssigned && (index.h("igl-to-be-assigned", { propertyid: this.property_id, class: "tobeAssignedContainer", calendarData: this.calendarData, onOptionEvent: evt => this.onOptionSelect(evt) })), this.showLegend && index.h("igl-legend", { class: "legendContainer", legendData: this.calendarData.legendData, onOptionEvent: evt => this.onOptionSelect(evt) }), this.showDayUseBookings && (index.h("igl-day-use-bookings", { class: "dayUseBookingsContainer", calendarData: this.calendarData, dayUseBookings: this.dayUseBookings, onOptionEvent: evt => this.onOptionSelect(evt) })), index.h("div", { class: "calendarScrollContainer", dir: direction.isRtlDirection(locales_store.locales.direction) ? 'rtl' : 'ltr', onMouseDown: event => this.dragScrollContent(event), onScroll: () => this.calendarScrolling() }, index.h("div", { id: "calendarContainer" }, index.h("igl-cal-header", { to_date: this.to_date, propertyid: this.property_id, today: this.today, calendarData: this.calendarData, highlightedDate: this.highlightedDate, onOptionEvent: evt => this.onOptionSelect(evt), dayUseBookings: this.dayUseBookings }), index.h("igl-cal-body", { propertyId: this.property_id, language: this.language, countries: this.countries, currency: this.calendarData.currency, today: this.today, highlightedDate: this.highlightedDate, isScrollViewDragging: this.scrollViewDragging, calendarData: this.calendarData, dayUseBookings: this.dayUseBookings }), index.h("igl-cal-footer", { isLegendOpen: this.showLegend, highlightedDate: this.highlightedDate, today: this.today, calendarData: this.calendarData, onOptionEvent: evt => this.onOptionSelect(evt) }))))) : (index.h("ir-loading-screen", { message: t.t('Lcz_PreparingCalendarData', { fallback: 'Preparing Calendar Data' }) }))), index.h("igl-split-booking-drawer", { key: '8fa4a5b7c3820c0991ff454216021f3e5fef3f92', open: this.calendarSidebarState?.type === 'split', booking: this.calendarSidebarState?.payload?.booking, identifier: this.calendarSidebarState?.payload?.identifier, onCloseModal: () => (this.calendarSidebarState = null) }), index.h("igl-rate-extender-drawer", { key: '3c2de6dfc1a18437383b26010721d726589464c4', open: !!this.roomNightsData, bookingNumber: this.roomNightsData?.bookingNumber, identifier: this.roomNightsData?.identifier, toDate: this.roomNightsData?.to_date, fromDate: this.roomNightsData?.from_date, defaultDates: this.roomNightsData?.defaultDates, pool: this.roomNightsData?.pool, ticket: this.ticket, propertyId: this.property_id, language: this.language, onCloseRoomNightsDialog: this.handleRoomNightsDialogClose.bind(this) }), index.h("ir-booking-details-drawer", { key: '3e480eace8fc0d976c96ff0e06d33675cdd20fab', open: this.editBookingItem?.event_type === 'EDIT_BOOKING' || !!this.checkoutRedirect, propertyId: this.property_id, bookingNumber: this.checkoutRedirect?.bookingNumber ?? (this.editBookingItem && this.editBookingItem?.event_type === 'EDIT_BOOKING' ? this.editBookingItem.BOOKING_NUMBER : null), checkoutRoomIdentifier: this.checkoutRedirect?.identifier, ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => {
                this.editBookingItem = null;
                this.checkoutRedirect = null;
            } }), index.h("ir-room-guests", { key: 'b3341244c4728380aa85f9e21559d1bb63685e3c', open: this.calendarSidebarState?.type === 'room-guests', countries: this.countries, language: this.language, identifier: this.calendarSidebarState?.payload?.identifier, bookingNumber: this.calendarSidebarState?.payload?.bookingNumber, roomName: this.calendarSidebarState?.payload?.roomName, totalGuests: this.calendarSidebarState?.payload?.totalGuests, sharedPersons: this.calendarSidebarState?.payload?.sharing_persons, checkIn: true, onCloseModal: () => (this.calendarSidebarState = null) }), index.h("ir-reallocation-drawer", { key: '909c1074adbb0bb66096d619c6ac6bb0c7ed7ce6', open: this.calendarSidebarState?.type === 'reallocate-drawer', booking: this.calendarSidebarState?.payload?.booking, pool: this.calendarSidebarState?.payload?.pool, roomIdentifier: this.calendarSidebarState?.payload?.identifier, onCloseModal: () => (this.calendarSidebarState = null) }), index.h("igl-reallocation-dialog", { key: '65028cfe74e7d88fb0fb65a91ad846b33705c12e', onResetModalState: () => (this.dialogData = null), onDialogClose: () => this.handleModalCancel(), data: this.dialogData?.reason === 'reallocate' ? this.dialogData : undefined }), index.h("ir-modal", { key: '93af1691e9d432e5983ae2652894054b4676e36f', ref: el => (this.calendarModalEl = el), modalTitle: t.t('Lcz_ModalTitlePlaceholder', { fallback: 'lol' }), rightBtnActive: this.dialogData?.reason === 'reallocate' ? !this.dialogData.hideConfirmButton : true, leftBtnText: t.t('Lcz_Cancel', { fallback: 'Cancel' }), rightBtnText: t.t('Lcz_Confirm', { fallback: 'Confirm' }), modalBody: this.renderModalBody(), onConfirmModal: this.handleModalConfirm.bind(this), onCancelModal: this.handleModalCancel.bind(this) }), index.h("ir-checkout-dialog", { key: '99be491e19f014890694478a392bec605d1619b0', style: { textAlign: 'start' }, booking: this.dialogData?.reason === 'checkout' ? this.dialogData?.booking : null, identifier: this.dialogData?.reason === 'checkout' ? this.dialogData?.roomIdentifier : null, open: this.dialogData?.reason === 'checkout', onCheckoutDialogClosed: event => this.handleCheckoutDialogClosed(event) }), index.h("ir-invoice", { key: 'a8085cdcac4fc3105eecc7108a1173f0e5a04b15', style: { textAlign: 'start' }, onInvoiceClose: event => this.handleInvoiceClose(event), booking: this.invoiceState?.booking, roomIdentifier: this.invoiceState?.identifier, open: this.invoiceState !== null }), index.h("ir-booking-editor-drawer", { key: '0dc790a047f31ae6c3638a9ae1a1bfc23ce68b0d', roomTypeIds: this.bookingItem?.roomsInfo?.map(r => r.id), onBookingEditorClosed: this.handleCloseBookingWindow.bind(this), unitId: this.bookingItem?.PR_ID, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, roomIdentifier: this.bookingItem?.IDENTIFIER, open: this.bookingItem !== null && this.bookingItem.event_type !== 'BLOCK_DATES', language: this.language, booking: this.bookingItem?.booking, propertyid: this.propertyid, checkIn: this.bookingItem?.FROM_DATE, blockedUnit: {
                ENTRY_DATE: this.bookingItem?.ENTRY_DATE,
                ENTRY_HOUR: this.bookingItem?.ENTRY_HOUR,
                ENTRY_MINUTE: this.bookingItem?.ENTRY_MINUTE,
                OPTIONAL_REASON: this.bookingItem?.OPTIONAL_REASON,
                OUT_OF_SERVICE: this.bookingItem?.OUT_OF_SERVICE,
                RELEASE_AFTER_HOURS: this.bookingItem?.RELEASE_AFTER_HOURS,
                STATUS_CODE: this.bookingItem?.STATUS_CODE,
            }, checkOut: this.bookingItem?.TO_DATE, dayUse: this.bookingItem?.dayUse === true }), index.h("igl-bulk-operations-drawer", { key: 'c393aac81a59c7f3ffbcb22bef5632f0afe13df8', property_id: this.property_id, onCloseDrawer: () => (this.calendarSidebarState = null), open: this.calendarSidebarState?.type === 'bulk-blocks' }), index.h("ir-rectifier-drawer", { key: 'd222eb2b25d6bfc722a72ae9b0e8810cbfbbeda2', onCloseDrawer: () => (this.calendarSidebarState = null), open: this.calendarSidebarState?.type === 'rectifier' }), index.h("igl-blocked-date-drawer", { key: '354fa1085af7dafb262b0c972e587a5e4a859708', onBlockedDateDrawerClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, unitId: this.bookingItem?.PR_ID, fromDate: this.bookingItem?.FROM_DATE, toDate: this.bookingItem?.TO_DATE, label: this.bookingItem?.BLOCK_DATES_TITLE?.trim(), open: this.bookingItem?.event_type === 'BLOCK_DATES' })));
    }
    static get watchers() { return {
        "language": [{
                "languageChanged": 0
            }],
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IglooCalendar.style = iglooCalendarCss();

const irAgentsCss = () => `.sc-ir-agents-h{display:block}.page-header__container.sc-ir-agents{display:flex;align-items:center;justify-content:space-between}`;

const IrAgents = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Authentication ApiClient issued by the PMS backend.
     * Required for initializing the component and making API calls.
     */
    ticket;
    /**
     * ID of the property (hotel) for which arrivals should be displayed.
     * Used in API calls related to rooms, bookings, and check-ins.
     */
    propertyid;
    /**
     * Two-letter language code (ISO) used for translations and API locale.
     * Defaults to `'en'`.
     */
    language = 'en';
    /**
     * Property alias or short identifier used by backend endpoints (aname).
     * Passed to `getExposedProperty` when initializing the component.
     */
    p;
    agents = [];
    selectedAgent = null;
    isDrawerOpen = false;
    isDeleteDialogOpen = false;
    isLoading = true;
    countries;
    setupEntries;
    agentsService = new agents_service.AgentsService();
    propertyService = new index$2.PropertyService();
    bookingService = new booking_store.BookingService();
    setupService = new index$1.SetupService();
    apiClientService = new ApiClient.ApiClient();
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.agents, () => this.init());
    componentWillLoad() {
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
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    handleTicketChange() {
        this.apiClientService.setApiClient(this.ticket);
        this.init();
    }
    handleUpsertAgentListener(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.upsertAgent();
    }
    async init() {
        try {
            this.isLoading = true;
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.agents });
            if (!this.propertyid && !this.p) {
                throw new Error('Missing credentials');
            }
            let propertyId = this.propertyid;
            if (!propertyId) {
                await this.propertyService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                });
            }
            const [countries, setupEntries] = await Promise.all([
                this.bookingService.getCountries(locale_controller.LocaleController.language),
                this.setupService.getSetupEntriesByTableNameMulti(['_AGENT_RATE_TYPE', '_AGENT_TYPE', '_TA_PAYMENT_METHOD', '_CL_POST_TIMING']),
                localeReady,
                calendarData.calendar_data?.property
                    ? Promise.resolve(null)
                    : this.propertyService.getExposedProperty({
                        id: this.propertyid || 0,
                        language: locale_controller.LocaleController.language,
                        aname: this.p,
                    }),
                this.fetchAgents(),
            ]);
            const { agent_rate_type, agent_type, ta_payment_method, cl_post_timing } = utils$1.groupEntryTablesResult(setupEntries);
            this.setupEntries = {
                agent_rate_type,
                agent_type,
                ta_payment_method,
                cl_post_timing,
            };
            this.countries = countries;
            this.isLoading = false;
        }
        catch (error) {
            console.error(error);
        }
    }
    upsertAgent() {
        this.fetchAgents();
    }
    async fetchAgents() {
        const agents = await this.agentsService.getExposedAgents({ property_id: calendarData.calendar_data?.property ? calendarData.calendar_data?.property.id : this.propertyid });
        this.agents = agents.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
    }
    handleUpsertAgent(agent) {
        this.selectedAgent = agent;
        this.isDrawerOpen = true;
    }
    handleDeleteAgent(agent) {
        this.selectedAgent = agent;
        this.isDeleteDialogOpen = true;
    }
    handleDrawerClose() {
        this.isDrawerOpen = false;
        this.selectedAgent = null;
    }
    handleDeleteDialogClose() {
        this.isDeleteDialogOpen = false;
        this.selectedAgent = null;
    }
    confirmDeleteAgent() {
        if (!this.selectedAgent) {
            return;
        }
        this.agents = this.agents.filter(agent => agent.id !== this.selectedAgent?.id);
        this.handleDeleteDialogClose();
    }
    async handleToggleAgentStatus(agent) {
        try {
            await this.agentsService.handleExposedAgent({ agent });
            this.upsertAgent();
            utils.showToast({
                type: 'success',
                description: '',
                title: t.t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }),
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, { "data-testid": "ir-agents" }, index.h("ir-toast", null), index.h("ir-interceptor", { handledEndpoints: ['/Get_Rooms_To_Check_in'] }), index.h("div", { class: "ir-page__container" }, index.h("div", { class: "page-header__container" }, index.h("h3", { class: "page-title" }, t.t('Lcz_AgentsCompanies', { fallback: 'Agents/Companies' }))), index.h("ir-agents-table", { countries: this.countries, setupEntries: this.setupEntries, onToggleAgentActive: event => this.handleToggleAgentStatus(event.detail), agents: this.agents, onUpsertAgent: event => this.handleUpsertAgent(event.detail), onDeleteAgent: event => this.handleDeleteAgent(event.detail) })), index.h("ir-agent-editor-drawer", { setupEntries: this.setupEntries, countries: this.countries, open: this.isDrawerOpen, agent: this.selectedAgent ?? undefined, onAgentEditorClose: () => this.handleDrawerClose() }), index.h("ir-dialog", { label: t.t('Lcz_DeleteAgent', { fallback: 'Delete Agent' }), open: this.isDeleteDialogOpen, lightDismiss: false, onIrDialogHide: () => this.handleDeleteDialogClose() }, index.h("span", null, this.selectedAgent
            ? t.t('Lcz_ConfirmDeleteAgentNamed', {
                fallback: `Are you sure you want to delete ${this.selectedAgent.name}? This action permanently removes the agent and cannot be undone.`,
                params: [this.selectedAgent.name],
            })
            : t.t('Lcz_ConfirmDeleteAgent', { fallback: 'Are you sure you want to delete this agent? This action permanently removes the agent and cannot be undone.' })), index.h("div", { slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { "data-dialog": "close", size: "m", appearance: "filled", variant: "neutral" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { size: "m", appearance: "accent", variant: "danger", onClickHandler: () => this.confirmDeleteAgent() }, t.t('Lcz_Delete', { fallback: 'Delete' }))))));
    }
    static get watchers() { return {
        "language": [{
                "languageChanged": 0
            }],
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrAgents.style = irAgentsCss();

const irArrivalsCss = () => `.page-title.sc-ir-arrivals{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.sc-ir-arrivals-h{height:100% !important;overflow-y:auto !important}`;

const IrArrivals = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Authentication ApiClient issued by the PMS backend.
     * Required for initializing the component and making API calls.
     */
    ticket;
    /**
     * ID of the property (hotel) for which arrivals should be displayed.
     * Used in API calls related to rooms, bookings, and check-ins.
     */
    propertyid;
    /**
     * Two-letter language code (ISO) used for translations and API locale.
     * Defaults to `'en'`.
     */
    language = 'en';
    /**
     * Property alias or short identifier used by backend endpoints (aname).
     * Passed to `getExposedProperty` when initializing the component.
     */
    p;
    /**
     * Number of arrivals to load per page in the arrivals table.
     * Used to configure pagination via Arrivals Store.
     * Defaults to `20`.
     */
    pageSize = 20;
    bookingNumber;
    booking;
    paymentEntries;
    isPageLoading;
    payment;
    roomGuestState = null;
    countries;
    apiClientService = new ApiClient.ApiClient();
    roomService = new room_service.RoomService();
    bookingService = new booking_store.BookingService();
    setupService = new index$1.SetupService();
    paymentFolioRef;
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.arrivals, () => this.init());
    componentWillLoad() {
        if (this.ticket) {
            this.apiClientService.setApiClient(this.ticket);
            this.init();
        }
        arrivals_store.setArrivalsPageSize(this.pageSize);
        arrivals_store.onArrivalsStoreChange('today', _ => {
            this.getBookings();
        });
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    handlePageSizeChange(newValue, oldValue) {
        if (newValue !== oldValue)
            arrivals_store.setArrivalsPageSize(newValue);
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue && newValue) {
            this.apiClientService.setApiClient(this.ticket);
            this.init();
        }
    }
    handleBookingPayment(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { booking_nbr, payment } = e.detail;
        this.booking = arrivals_store.arrivalsStore.bookings.find(b => b.booking_nbr === booking_nbr);
        const paymentType = this.paymentEntries.types.find(p => p.CODE_NAME === payment.payment_type.code);
        this.payment = {
            ...payment,
            payment_type: {
                code: paymentType.CODE_NAME,
                description: paymentType.CODE_VALUE_EN,
                operation: paymentType.NOTES,
            },
        };
        this.paymentFolioRef.openFolio();
    }
    handleOpen(e) {
        this.bookingNumber = e.detail;
    }
    async handleResetExposedCancellationDueAmount(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.getBookings();
    }
    async init() {
        try {
            this.isPageLoading = true;
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.arrivals });
            if (!this.propertyid && !this.p) {
                throw new Error('Missing credentials');
            }
            let propertyId = this.propertyid;
            if (!propertyId) {
                await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                });
            }
            const [_, __, countries, paymentEntries] = await Promise.all([
                calendarData.calendar_data?.property ? Promise.resolve(null) : this.roomService.getExposedProperty({ id: this.propertyid || 0, language: locale_controller.LocaleController.language, aname: this.p }),
                localeReady,
                this.bookingService.getCountries(locale_controller.LocaleController.language),
                this.setupService.getPaymentEntries(),
                this.getBookings(),
            ]);
            this.countries = countries;
            this.paymentEntries = paymentEntries;
            this.countries = countries;
            // Fetch bookings only after the property/calendar data is loaded — the arrivals
            // pipeline (canCheckIn) reads `calendar_data.property`, which is null until the
            // getExposedProperty calls above resolve.
            await this.getBookings();
        }
        catch (error) {
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async getBookings() {
        const { bookings, total_count } = await this.bookingService.getRoomsToCheckIn({
            property_id: calendarData.calendar_data.property?.id?.toString() || this.propertyid?.toString(),
            check_in_date: arrivals_store.arrivalsStore.today,
            page_index: arrivals_store.arrivalsStore.pagination.currentPage,
            page_size: arrivals_store.arrivalsStore.pagination.pageSize,
        });
        arrivals_store.setArrivalsTotal(total_count ?? 0);
        arrivals_store.initializeArrivalsStore(bookings);
    }
    async handlePaginationChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const nextPage = event.detail?.currentPage ?? 1;
        if (nextPage === arrivals_store.arrivalsStore.pagination.currentPage) {
            return;
        }
        arrivals_store.setArrivalsPage(nextPage);
        await this.getBookings();
    }
    async handlePaginationPageSizeChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const nextPageSize = event.detail?.pageSize;
        if (!Number.isFinite(nextPageSize)) {
            return;
        }
        const normalizedPageSize = Math.floor(Number(nextPageSize));
        if (normalizedPageSize === arrivals_store.arrivalsStore.pagination.pageSize) {
            return;
        }
        arrivals_store.setArrivalsPageSize(normalizedPageSize);
        await this.getBookings();
    }
    handleCheckingRoom(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.roomGuestState = event.detail;
    }
    handleResetBooking(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.getBookings();
    }
    // @Listen("resetBookingEvt")
    // handleResetBookings(e:CustomEvent){
    //   e.stopImmediatePropagation();
    //   e.stopPropagation();
    //   this.
    // }
    render() {
        if (this.isPageLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", { handledEndpoints: ['/Get_Rooms_To_Check_in'] }), index.h("div", { class: "ir-page__container" }, index.h("h3", { class: "page-title" }, t.t('Lcz_CheckIns', { fallback: 'Check-ins' })), index.h("ir-arrivals-table", { onCheckInRoom: event => this.handleCheckingRoom(event), onRequestPageChange: event => this.handlePaginationChange(event), onRequestPageSizeChange: event => this.handlePaginationPageSizeChange(event) }), index.h("ir-booking-details-drawer", { open: !!this.bookingNumber, propertyId: this.propertyid, bookingNumber: this.bookingNumber?.toString(), ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.bookingNumber = null) }), index.h("ir-payment-folio", { booking: this.booking, style: { height: 'auto' }, bookingNumber: this.booking?.booking_nbr, paymentEntries: this.paymentEntries, payment: this.payment, mode: 'payment-action', ref: el => (this.paymentFolioRef = el), onCloseModal: () => {
                this.booking = null;
                this.payment = null;
            } }), index.h("ir-room-guests", { open: this.roomGuestState !== null, countries: this.countries, language: this.language, identifier: this.roomGuestState?.identifier, bookingNumber: this.roomGuestState?.booking_nbr?.toString(), roomName: this.roomGuestState?.roomName, totalGuests: this.roomGuestState?.totalGuests, sharedPersons: this.roomGuestState?.sharing_persons, checkIn: this.roomGuestState?.checkin, onCloseModal: () => (this.roomGuestState = null) }))));
    }
    static get watchers() { return {
        "language": [{
                "languageChanged": 0
            }],
        "pageSize": [{
                "handlePageSizeChange": 0
            }],
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrArrivals.style = irArrivalsCss();

const irBookingEmailLogsCss = () => `.sc-ir-booking-email-logs-h{display:block}`;

const IrBookingEmailLogs = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    ticket;
    data;
    bookingNumber;
    ApiClient = new ApiClient.ApiClient();
    componentWillLoad() {
        if (this.ticket) {
            this.ApiClient.setApiClient(this.ticket);
        }
    }
    handleTicketChange() {
        if (this.ticket) {
            this.ApiClient.setApiClient(this.ticket);
        }
    }
    render() {
        return (index.h(index.Host, { key: '5fe5e6a83bff88e8b5c4eadc15c2e698b1b3c0d4', class: "p-1" }, index.h("ir-interceptor", { key: '72915883cd9361d235a0f14df616b64b95033401', handledEndpoints: ['/Get_Email_log_By_BOOK_NBR'] }), index.h("ir-toast", { key: 'c6d5d0064a00e6c55364f89bc53980325b3c8083' }), index.h("div", { key: '413e32b6213f315cdaad99b371f4ea3e66a41f4a', class: "d-flex align-items-center mb-1", style: { gap: '0.5rem' } }, index.h("ir-input-text", { key: 'b00dae139e862f50a6467af51e1e34fbd20d2532', class: "m-0", inputContainerStyle: { margin: '0' }, value: this.bookingNumber, onTextChange: e => (this.bookingNumber = e.detail), placeholder: "booking number" }), index.h("ir-button", { key: '76e3879baf1d6e1b401e98dbdb0e4a218a45a4a4', size: "sm", text: "search", onClickHandler: async () => {
                const { data } = await axios.axios.post('/Get_Email_log_By_BOOK_NBR', {
                    BOOK_NBR: this.bookingNumber,
                });
                if (data.ExceptionMsg) {
                    return;
                }
                this.data = data.My_Result;
            } })), index.h("p", { key: '78554e04e6a120e5efb39f15f360c61c62580ba5' }, JSON.stringify(this.data, null, 2))));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrBookingEmailLogs.style = irBookingEmailLogsCss();

// src/utils/browserHistory.ts
// Common parsers/serializers
/**
 * Read all current search params into a Record<string, string>
 */
function getAllParams() {
    const params = new URLSearchParams(window.location.search);
    const out = {};
    for (const [key, value] of params.entries()) {
        out[key] = value;
    }
    return out;
}

const irBookingListingCss = () => `.sc-ir-booking-listing-h{display:block;height:100% !important;overflow-y:auto !important}`;

const IrBookingListing = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    language = '';
    ticket = '';
    propertyid;
    rowCount = 20;
    p;
    baseUrl;
    userType;
    isLoading = false;
    editBookingItem = null;
    showCost = false;
    paymentEntries;
    payment;
    booking;
    bookingListingService = new index$5.BookingListingService();
    setupService = new index$1.SetupService();
    roomService = new room_service.RoomService();
    propertyService = new index$2.PropertyService();
    ApiClient = new ApiClient.ApiClient();
    listingModal;
    listingModalTimeout;
    allowedProperties;
    havePrivilege;
    paymentFolioRef;
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.bookingListing, () => this.initializeApp());
    componentWillLoad() {
        if (this.baseUrl) {
            this.ApiClient.setBaseUrl(this.baseUrl);
        }
        index$5.updateUserSelection('end_row', this.rowCount);
        index$5.booking_listing.rowCount = this.rowCount;
        index$5.setPaginationPageSize(this.rowCount);
        if (this.ticket !== '') {
            index$5.booking_listing.ApiClient = this.ticket;
            this.ApiClient.setApiClient(this.ticket);
            this.initializeApp();
        }
        index$5.onBookingListingChange('userSelection', newValue => {
            index$5.updatePaginationFromSelection(newValue);
        });
        index$5.onBookingListingChange('bookings', newValue => {
            this.showCost = newValue.some(booking => booking.financial.gross_cost !== null && booking.financial.gross_cost > 0);
        });
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.ApiClient.setApiClient(this.ticket);
        index$5.booking_listing.ApiClient = this.ticket;
        this.initializeApp();
    }
    async fetchBookings() {
        await this.bookingListingService.getExposedBookings({
            ...index$5.booking_listing.userSelection,
            is_to_export: false,
            language: locale_controller.LocaleController.language,
        });
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.bookingListing });
            this.havePrivilege = utils.isPrivilegedUser(this.userType);
            let propertyId = this.propertyid;
            if (!this.havePrivilege) {
                if (!this.propertyid && !this.p) {
                    throw new Error('Property ID or username is required');
                }
                if (!propertyId) {
                    const propertyData = await this.roomService.getExposedProperty({
                        id: 0,
                        aname: this.p,
                        language: locale_controller.LocaleController.language,
                        is_backend: true,
                    });
                    propertyId = propertyData.My_Result.id;
                }
            }
            const parallelRequests = [
                this.setupService.getPaymentEntries(),
                this.bookingListingService.getExposedBookingsCriteria({ property_id: this.havePrivilege ? null : propertyId, language: locale_controller.LocaleController.language }),
                localeReady,
            ];
            // let propertyDataIndex: number | null = null;
            let allowedPropertiesIndex = null;
            if (this.propertyid && !this.havePrivilege) {
                // propertyDataIndex = parallelRequests.length;
                parallelRequests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                }));
            }
            if (this.havePrivilege) {
                allowedPropertiesIndex = parallelRequests.length;
                parallelRequests.push(this.propertyService.getExposedAllowedProperties());
            }
            const results = await Promise.all(parallelRequests);
            const [paymentEntries] = results;
            this.paymentEntries = paymentEntries;
            this.allowedProperties = allowedPropertiesIndex !== null ? results[allowedPropertiesIndex]?.map(p => p.id) : null;
            index$5.updateUserSelection('property_id', propertyId);
            index$5.updateUserSelections({
                property_ids: this.allowedProperties,
                userTypeCode: this.userType,
            });
            await this.fetchBookings();
        }
        catch (error) {
            console.error('Error initializing app:', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    handleSideBarToggle(e) {
        if (e.detail) {
            this.editBookingItem = null;
        }
    }
    geSearchFiltersFromParams() {
        //e=10&status=002&from=2025-04-15&to=2025-04-22&filter=2&c=Alitalia+Cabin+Crew
        const params = getAllParams();
        if (params) {
            console.log('update params');
            let obj = {};
            if (params.e) {
                obj['end_row'] = Number(params.e);
            }
            if (params.s) {
                obj['start_row'] = Number(params.s);
            }
            if (params.status) {
                obj['booking_status'] = params.status;
            }
            if (params.filter) {
                obj['filter_type'] = params.filter;
            }
            if (params.from) {
                obj['from'] = params.from;
            }
            if (params.to) {
                obj['to'] = params.to;
            }
            index$5.updateUserSelections(obj);
        }
        console.log('params=>', params);
    }
    openModal() {
        this.listingModalTimeout = setTimeout(() => {
            this.listingModal = this.el.querySelector('ir-listing-modal');
            this.listingModal.editBooking = this.editBookingItem;
            this.listingModal.openModal();
        }, 100);
    }
    disconnectedCallback() {
        clearTimeout(this.listingModalTimeout);
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    async handlePaginationChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (!event.detail) {
            return;
        }
        index$5.setPaginationPage(event.detail.currentPage);
        await this.fetchBookings();
    }
    async handlePaginationPageSizeChange(event) {
        if (!event.detail || !event.detail.pageSize) {
            return;
        }
        event.stopImmediatePropagation();
        event.stopPropagation();
        index$5.setPaginationPageSize(event.detail.pageSize);
        await this.fetchBookings();
    }
    async handleResetStoreData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.fetchBookings();
    }
    handleBookingChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        index$5.booking_listing.bookings = [
            ...index$5.booking_listing.bookings.map(b => {
                if (b.booking_nbr === e.detail.booking_nbr) {
                    return e.detail;
                }
                return b;
            }),
        ];
    }
    handleBookingPayment(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { booking_nbr, payment } = e.detail;
        this.booking = this.findBooking(booking_nbr);
        const paymentType = this.paymentEntries.types.find(p => p.CODE_NAME === payment.payment_type.code);
        this.payment = {
            ...payment,
            payment_type: {
                code: paymentType.CODE_NAME,
                description: paymentType.CODE_VALUE_EN,
                operation: paymentType.NOTES,
            },
        };
        this.paymentFolioRef.openFolio();
    }
    handleSelectGuestEvent(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const booking = this.findBooking(e.detail);
        if (!booking) {
            return;
        }
        this.editBookingItem = {
            booking,
            cause: 'guest',
        };
    }
    handleOpen(e) {
        e.stopImmediatePropagation();
        const booking = this.findBooking(e.detail);
        if (!booking) {
            return;
        }
        this.editBookingItem = {
            booking,
            cause: 'edit',
        };
    }
    async handleResetExposedCancellationDueAmount(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.fetchBookings();
    }
    handleGuestChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        index$5.booking_listing.bookings = index$5.booking_listing.bookings.map(b => {
            const guest = { ...b.guest };
            const newGuest = e.detail;
            if (guest.id === newGuest.id) {
                return { ...b, guest: { ...guest, ...newGuest } };
            }
            return b;
        });
    }
    findBooking(bookingNumber) {
        return index$5.booking_listing.bookings.find(b => b.booking_nbr === bookingNumber);
    }
    render() {
        if (this.isLoading || this.ticket === '') {
            return index.h("ir-loading-screen", null);
        }
        return (index.h("ir-page", { label: t.t('Lcz_Bookings', { fallback: 'Bookings' }) }, index.h("div", { class: "main-container" }, index.h("ir-listing-header", { propertyId: this.propertyid, p: this.p, language: this.language }), index.h("section", { class: "mt-2" }, index.h("ir-booking-listing-table", null))), index.h("ir-booking-details-drawer", { open: this.editBookingItem?.cause === 'edit', propertyId: this.editBookingItem?.booking?.property?.id, bookingNumber: this.editBookingItem?.booking?.booking_nbr.toString(), ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.editBookingItem = null) }), index.h("ir-guest-info-drawer", { onGuestInfoDrawerClosed: () => {
                this.editBookingItem = null;
            }, booking_nbr: this.editBookingItem?.booking?.booking_nbr, email: this.editBookingItem?.booking?.guest.email, language: this.language, open: this.editBookingItem?.cause === 'guest' }), index.h("ir-payment-folio", { style: { height: 'auto' }, booking: this.booking, bookingNumber: this.booking?.booking_nbr, paymentEntries: this.paymentEntries, payment: this.payment, mode: 'payment-action', ref: el => (this.paymentFolioRef = el), onCloseModal: () => {
                this.booking = null;
                this.payment = null;
            } })));
    }
    static get watchers() { return {
        "ticket": [{
                "ticketChanged": 0
            }],
        "language": [{
                "languageChanged": 0
            }]
    }; }
};
IrBookingListing.style = irBookingListingCss();

const actions = () => [
    {
        id: 'edit',
        name: t.t('Lcz_Edit', { fallback: 'Edit' }),
        icon: () => (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, index.h("path", { d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" }))),
        action: (params) => {
            const selectedProperty = params.map.find(m => m.type === 'property');
            channel_service.setChannelIdAndActiveState(params.id, params.is_active);
            channel_service.updateChannelSettings('hotel_id', selectedProperty.channel_id);
            channel_service.updateChannelSettings('hotel_title', params.title);
            channel_service.selectChannel(params.channel.id.toString());
            channel_service.testConnection();
        },
    },
    // {
    //   id: 'view_logs',
    //   name: entries?.Lcz_ViewLogs,
    //   icon: () => (
    //     <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512">
    //       <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
    //     </svg>
    //   ),
    //   action: () => {
    //     return {
    //       cause: 'view_logs',
    //       action: () => {
    //         alert('view logs clicked');
    //       },
    //       title: 'ok',
    //       message: 'ok',
    //       main_color: 'primary',
    //     };
    //   },
    // },
    // {
    //   id: 'full_sync',
    //   name: entries?.Lcz_FullSync,
    //   icon: () => (
    //     <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512">
    //       <path d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z" />
    //     </svg>
    //   ),
    //   action: () => {
    //     return {
    //       cause: 'full_sync',
    //       action: () => {
    //         alert('full sync');
    //       },
    //       title: '',
    //       message: entries?.Lcz_ScheduleFullSync,
    //       main_color: 'primary',
    //     };
    //   },
    // },
    // {
    //   id: 'pull_future_reservation',
    //   name: entries?.Lcz_PullFutureReservations,
    //   icon: () => null,
    //   action: () => {
    //     return {
    //       cause: 'pull_future_reservation',
    //       action: () => {
    //         alert('pull_future_reservation');
    //       },
    //       title: '',
    //       message: entries?.Lcz_ScheduleFullSync,
    //       main_color: 'primary',
    //     };
    //   },
    // },
    {
        id: 'remove',
        name: t.t('Lcz_Delete', { fallback: 'Delete' }),
        icon: () => (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" }))),
        action: (params) => {
            return {
                cause: 'remove',
                action: async () => {
                    const channel_service$1 = new channel_service.ChannelService();
                    await channel_service$1.saveConnectedChannel(params.id, true);
                },
                title: '',
                message: t.t('Lcz_ThisActionWillDelete'),
                main_color: 'danger',
            };
        },
    },
];

const irChannelCss = () => `.sc-ir-channel-h{display:block;--ir-sidebar-padding-block:0;--ir-sidebar-padding-inline:0}.dropdown-toggle.sc-ir-channel{color:var(--blue)}.dropdown-toggle.sc-ir-channel::after{content:none;display:none}.dropdown-toggle.sc-ir-channel .caret-icon.sc-ir-channel{transition:transform 0.15s ease-in-out,     color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out,     -webkit-box-shadow 0.15s ease-in-out}.btn.sc-ir-channel:hover .caret-icon.sc-ir-channel path.sc-ir-channel{fill:#6b6f82}.show.sc-ir-channel .caret-icon.sc-ir-channel{transform:rotate(-180deg)}.dropdown-divider.sc-ir-channel{border-color:#e4e5ec}.dropdown-item.sc-ir-channel{padding:10px;display:flex;align-items:center;gap:10px;color:#6b6f82}.dropdown-item.sc-ir-channel svg.sc-ir-channel path.sc-ir-channel{fill:#6b6f82}.danger.sc-ir-channel{color:var(--red)}.danger.sc-ir-channel svg.sc-ir-channel path.sc-ir-channel{fill:var(--red)}.table.sc-ir-channel thead.sc-ir-channel tr.sc-ir-channel{height:50px !important}.table-container.sc-ir-channel{border-radius:30px}.table.sc-ir-channel thead.sc-ir-channel{background:#fafafa;border-top-width:0}.actions-theader.sc-ir-channel{width:35% !important;text-align:end}.dots.sc-ir-channel{display:flex;align-items:center;justify-content:center;margin:0 3px;padding:0}.dot.sc-ir-channel{width:8px;height:8px;margin:0px 4px;background-color:#6b6f82;border-radius:50%;animation:dotFlashing 1s infinite linear alternate}.dot.sc-ir-channel:nth-child(2){animation-delay:0.2s}.h-screen.sc-ir-channel{height:100vh !important}.dot.sc-ir-channel:nth-child(3){animation-delay:0.4s}@keyframes dotFlashing{0%{opacity:0}50%,100%{opacity:1}}@media (min-width: 1024px){.sc-ir-channel-h{--sidebar-width:820px}}.ir-me-1.sc-ir-channel{margin-inline-end:0.25rem}.ir-text-start.sc-ir-channel{text-align:start}`;

const IrChannel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    ticket = '';
    propertyid;
    language;
    baseurl;
    p;
    channel_status = null;
    modal_cause = null;
    isLoading = false;
    roomService = new room_service.RoomService();
    channelService = new channel_service.ChannelService();
    ApiClient = new ApiClient.ApiClient();
    irModalRef;
    propertyId;
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.channel, () => this.initializeApp());
    componentWillLoad() {
        this.isLoading = true;
        if (this.ticket !== '') {
            this.ApiClient.setApiClient(this.ticket);
            this.initializeApp();
        }
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    async handleConfirmClicked(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!this.modal_cause) {
            return;
        }
        await this.modal_cause.action();
        if (this.modal_cause.cause === 'remove') {
            channel_service.resetStore();
            await this.refreshChannels();
        }
        this.modal_cause = null;
    }
    openModal() {
        this.irModalRef.openModal();
    }
    async refreshChannels() {
        await Promise.all([this.channelService.getExposedChannels(this.propertyId), this.channelService.getExposedConnectedChannels(this.propertyid)]);
    }
    async initializeApp() {
        if (!this.propertyid && !this.p) {
            throw new Error('Property ID or username is required');
        }
        try {
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.channel });
            let propertyId = this.propertyid;
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            const requests = [this.channelService.getExposedChannels(propertyId), this.channelService.getExposedConnectedChannels(propertyId), localeReady];
            if (this.propertyid) {
                requests.unshift(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                }));
            }
            this.propertyId = propertyId;
            await Promise.all(requests);
            channel_service.channels_data.property_id = this.propertyid;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.ApiClient.setApiClient(this.ticket);
        this.initializeApp();
    }
    handleCancelModal(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.modal_cause = null;
    }
    handleSidebarClose(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (channel_service.channels_data.selectedChannel) {
            this.modal_cause = {
                action: () => {
                    return new Promise(reselove => {
                        this.resetSideBar();
                        reselove('');
                    });
                },
                cause: 'channel',
                main_color: 'primary',
                message: t.t('Lcz_UnSavedChangesWillBeLost'),
                title: '',
            };
            this.openModal();
        }
        else {
            this.resetSideBar();
        }
    }
    resetSideBar() {
        this.channel_status = null;
        channel_service.resetStore();
    }
    async handleSaveChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.refreshChannels();
        this.resetSideBar();
    }
    async handleCheckChange(check, params) {
        const selectedProperty = params.map.find(m => m.type === 'property');
        channel_service.setChannelIdAndActiveState(params.id, check);
        channel_service.updateChannelSettings('hotel_id', selectedProperty.channel_id);
        channel_service.updateChannelSettings('hotel_title', params.title);
        channel_service.selectChannel(params.channel.id.toString());
        channel_service.testConnection();
        await this.channelService.saveConnectedChannel(null, false);
        channel_service.resetStore();
        this.refreshChannels();
    }
    render() {
        if (this.isLoading) {
            return (index.h("div", { class: "h-screen bg-white d-flex flex-column align-items-center justify-content-center" }, index.h("ir-loading-screen", null)));
        }
        return (index.h(index.Host, { class: "h-100 " }, index.h("ir-toast", null), index.h("section", { class: "p-2 px-lg-5 py-0 h-100 d-flex flex-column" }, index.h("div", { class: "d-flex w-100 justify-content-between mb-2 align-items-center" }, index.h("h3", { class: "font-weight-bold m-0 p-0" }, t.t('Lcz_iSWITCH')), index.h("ir-button", { iconPosition: "left", icon_name: "circle_plus", text: t.t('Lcz_CreateChannel'), size: "sm", onClickHandler: () => (this.channel_status = 'create') })), index.h("div", { class: "card p-1 flex-fill m-0" }, index.h("table", { class: "table table-striped table-bordered no-footer dataTable" }, index.h("thead", null, index.h("tr", null, index.h("th", { scope: "col", class: "ir-text-start" }, t.t('Lcz_Channel')), index.h("th", { scope: "col" }, t.t('Lcz_Status', { fallback: 'Status' })), index.h("th", { scope: "col", class: "actions-theader" }, t.t('Lcz_Actions', { fallback: 'Actions' })))), index.h("tbody", { class: "" }, channel_service.channels_data.connected_channels?.map(channel => (index.h("tr", { key: channel.channel.id }, index.h("td", { class: "ir-text-start" }, channel.channel.name, " ", channel.title ? `(${channel.title})` : ''), index.h("td", null, index.h("ir-switch", { checked: channel.is_active, onCheckChange: e => this.handleCheckChange(e.detail, channel) })), index.h("th", null, index.h("div", { class: "d-flex justify-content-end" }, index.h("div", { class: "btn-group" }, index.h("button", { type: "button", class: "btn  dropdown-toggle px-0", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, index.h("span", { class: "ir-me-1" }, " ", t.t('Lcz_Actions', { fallback: 'Actions' })), index.h("svg", { class: 'caret-icon', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 14, width: 14 }, index.h("path", { fill: "var(--blue)", d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), index.h("div", { class: "dropdown-menu dropdown-menu-right" }, actions().map((a, index$1) => (index.h(index.Fragment, null, index.h("button", { onClick: () => {
                if (a.id === 'pull_future_reservation' || a.id === 'view_logs') {
                    return;
                }
                a.action(channel);
                if (a.id === 'edit') {
                    setTimeout(() => {
                        this.channel_status = 'edit';
                    }, 300);
                }
                else {
                    this.modal_cause = a.action(channel);
                    this.openModal();
                }
            }, key: a.id + '_item', class: `dropdown-item my-0 ${a.id === 'remove' ? 'danger' : ''}`, type: "button" }, a.icon(), a.name), index$1 < actions().length - 1 && index.h("div", { key: a.id + '_divider', class: "dropdown-divider my-0" }))))))))))))), channel_service.channels_data.connected_channels.length === 0 && index.h("p", { class: "text-center" }, t.t('Lcz_NoChannelsAreConnected')))), index.h("ir-sidebar", { sidebarStyles: {
                // width: '60rem',
                padding: '0',
            }, showCloseButton: false, onIrSidebarToggle: this.handleSidebarClose.bind(this), open: this.channel_status !== null }, this.channel_status && (index.h("ir-channel-editor", { slot: "sidebar-body", ticket: this.ticket, channel_status: this.channel_status, onCloseSideBar: this.handleSidebarClose.bind(this) }))), index.h("ir-modal", { modalTitle: this.modal_cause?.title, modalBody: this.modal_cause?.message, ref: el => (this.irModalRef = el), rightBtnText: t.t('Lcz_Confirm', { fallback: 'Confirm' }), leftBtnText: t.t('Lcz_Cancel', { fallback: 'Cancel' }), onCancelModal: this.handleCancelModal.bind(this), rightBtnColor: this.modal_cause?.main_color ?? 'primary', onConfirmModal: this.handleConfirmClicked.bind(this) })));
    }
    static get watchers() { return {
        "language": [{
                "languageChanged": 0
            }],
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrChannel.style = irChannelCss();

const irCityLedgerCss = () => `.sc-ir-city-ledger-h{display:block;height:100%}.city-ledger__agents-autocomplete.sc-ir-city-ledger{width:100%}@media (min-width: 768px){.city-ledger__agents-autocomplete.sc-ir-city-ledger{max-width:400px}}.city-ledger__content.sc-ir-city-ledger{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}.city-ledger__no-agent.sc-ir-city-ledger{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.625rem;padding:5rem 2rem;height:100%;text-align:center;color:var(--wa-color-text-quiet, #6b7280)}.city-ledger__no-agent-icon-container.sc-ir-city-ledger{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.city-ledger__no-agent-title.sc-ir-city-ledger{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.city-ledger__no-agent-sub.sc-ir-city-ledger{margin:0;font-size:0.875rem;max-width:400px;line-height:1.6}.statement-tab-panel.sc-ir-city-ledger{min-height:400px}.statement__empty-state.sc-ir-city-ledger{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;padding:4rem 2rem;color:var(--wa-color-text-quiet, #6b7280);text-align:center}.statement__empty-title.sc-ir-city-ledger{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.statement__empty-subtitle.sc-ir-city-ledger{margin:0;font-size:0.875rem;max-width:360px}.statement__content.sc-ir-city-ledger{display:flex;flex-direction:column;gap:1.25rem}.statement__controls.sc-ir-city-ledger{display:flex;align-items:flex-end;flex-wrap:wrap;gap:1rem}.statement__period-group.sc-ir-city-ledger{display:flex;flex-direction:column;gap:0.375rem}.statement__label.sc-ir-city-ledger{font-size:0.8125rem;font-weight:500;color:var(--wa-color-text-quiet, #6b7280)}.statement__dates.sc-ir-city-ledger{display:flex;align-items:center;gap:0.5rem}.statement__date-picker.sc-ir-city-ledger{width:160px}.statement__dates-sep.sc-ir-city-ledger{color:var(--wa-color-text-quiet, #9ca3af);font-weight:500}.statement__action-bar.sc-ir-city-ledger{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;padding:0.75rem 1rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);border:1px solid var(--wa-color-brand-border-quiet, #bfdbfe);border-radius:0.625rem 0.625rem 0 0;font-size:0.875rem}.statement__action-bar-label.sc-ir-city-ledger{display:flex;align-items:center;font-weight:500;color:var(--wa-color-brand-on-quiet)}.statement__action-bar-buttons.sc-ir-city-ledger{display:flex;gap:0.5rem;flex-wrap:wrap}.statement__preview-wrapper.sc-ir-city-ledger{display:flex;flex-direction:column}.statement-doc.sc-ir-city-ledger{background:#fff;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-top:0;border-radius:0 0 0.75rem 0.75rem;padding:2rem;display:flex;flex-direction:column;gap:1.5rem;box-shadow:0 1px 3px 0 rgb(0 0 0 / 0.04)}.statement-doc__header.sc-ir-city-ledger{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem}.statement-doc__hotel.sc-ir-city-ledger{display:flex;align-items:center;gap:0.875rem}.statement-doc__hotel-logo.sc-ir-city-ledger{display:flex;align-items:center;justify-content:center;width:3rem;height:3rem;background:var(--wa-color-neutral-fill-quiet, #f3f4f6);border-radius:0.5rem;color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__title.sc-ir-city-ledger{margin:0;font-size:1.375rem;font-weight:700;color:var(--wa-color-text-normal, #111827)}.statement-doc__subtitle.sc-ir-city-ledger{margin:0;font-size:0.8125rem;color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__meta.sc-ir-city-ledger{display:flex;flex-direction:column;gap:0.25rem;text-align:end}.statement-doc__meta-row.sc-ir-city-ledger{display:flex;justify-content:flex-end;gap:0.5rem;font-size:0.8125rem}.statement-doc__meta-label.sc-ir-city-ledger{color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__meta-value.sc-ir-city-ledger{font-weight:500;color:var(--wa-color-text-normal, #111827)}.statement-doc__statement-number.sc-ir-city-ledger{font-family:ui-monospace, 'Cascadia Code', monospace;font-size:0.8125rem}.statement-doc__divider.sc-ir-city-ledger{border:0;border-top:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);margin:0}.statement-doc__parties.sc-ir-city-ledger{display:grid;grid-template-columns:1fr 1fr;gap:1rem}.statement-doc__party-label.sc-ir-city-ledger{margin:0 0 0.375rem;font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__party-name.sc-ir-city-ledger{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.statement-doc__party-detail.sc-ir-city-ledger{margin:0.125rem 0 0;font-size:0.8125rem;color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__summary.sc-ir-city-ledger{display:grid;grid-template-columns:repeat(2, 1fr);gap:0.75rem}@media (min-width: 768px){.statement-doc__summary.sc-ir-city-ledger{grid-template-columns:repeat(4, 1fr)}}.statement-doc__summary-card.sc-ir-city-ledger{padding:1rem;border-radius:0.5rem;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);display:flex;flex-direction:column;gap:0.25rem}.statement-doc__summary-card--opening.sc-ir-city-ledger{border-color:var(--wa-color-neutral-border-quiet, #e5e7eb)}.statement-doc__summary-card--charges.sc-ir-city-ledger{border-color:#fecaca;background:#fef2f2}.statement-doc__summary-card--payments.sc-ir-city-ledger{border-color:#bbf7d0;background:#f0fdf4}.statement-doc__summary-card--due.sc-ir-city-ledger{border-color:var(--wa-color-brand-border-quiet, #bfdbfe);background:var(--wa-color-brand-fill-quiet, #eff6ff)}.statement-doc__summary-card-label.sc-ir-city-ledger{font-size:0.75rem;font-weight:500;color:var(--wa-color-text-quiet, #6b7280);text-transform:uppercase;letter-spacing:0.03em}.statement-doc__summary-card-value.sc-ir-city-ledger{font-size:1.125rem;font-weight:700;color:var(--wa-color-text-normal, #111827);font-variant-numeric:tabular-nums}.statement-doc__balance-due.sc-ir-city-ledger{color:var(--wa-color-brand-fill-loud, #2563eb)}.statement-doc__table-wrapper.sc-ir-city-ledger{overflow-x:auto;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-radius:0.5rem}.statement-doc__table.sc-ir-city-ledger{width:100%;border-collapse:collapse;font-size:0.875rem}.statement-doc__table.sc-ir-city-ledger thead.sc-ir-city-ledger th.sc-ir-city-ledger{padding:0.625rem 0.875rem;background:var(--wa-color-neutral-fill-quiet, #f9fafb);font-weight:600;font-size:0.8125rem;color:var(--wa-color-text-quiet, #6b7280);text-align:start;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);white-space:nowrap}.statement-doc__table.sc-ir-city-ledger tbody.sc-ir-city-ledger td.sc-ir-city-ledger{padding:0.625rem 0.875rem;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #f3f4f6);color:var(--wa-color-text-normal, #111827)}.statement-doc__table.sc-ir-city-ledger tfoot.sc-ir-city-ledger td.sc-ir-city-ledger{padding:0.75rem 0.875rem;background:var(--wa-color-neutral-fill-quiet, #f9fafb);border-top:2px solid var(--wa-color-neutral-border-quiet, #e5e7eb);font-weight:700}.statement-doc__col--right.sc-ir-city-ledger{text-align:end}.statement-doc__opening-row.sc-ir-city-ledger td.sc-ir-city-ledger{font-weight:500;background:var(--wa-color-neutral-fill-quiet, #fafafa);color:var(--wa-color-text-quiet, #6b7280);font-size:0.8125rem}.statement-doc__totals-row.sc-ir-city-ledger td.sc-ir-city-ledger{font-weight:700}.statement-doc__table-note.sc-ir-city-ledger{text-align:center;color:var(--wa-color-text-quiet, #9ca3af);font-size:0.8125rem;padding:1.5rem !important}.statement-doc__footer.sc-ir-city-ledger{background:var(--wa-color-neutral-fill-quiet, #f9fafb);border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-radius:0.5rem;padding:0.875rem 1rem}.statement-doc__payment-notice.sc-ir-city-ledger{display:flex;align-items:flex-start;gap:0.5rem;font-size:0.8125rem;color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__payment-notice.sc-ir-city-ledger p.sc-ir-city-ledger{margin:0;line-height:1.5}`;

const IrCityLedger = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    ticket;
    p;
    baseurl;
    language = 'en';
    propertyid;
    agentId = null;
    resolvedPropertyId = null;
    currentTab = 'folio';
    isLoading = true;
    agents = [];
    selectedAgent = null;
    taxOptions = [];
    svcCategories = [];
    // Statement tab state
    statementFrom = null;
    statementTo = null;
    showStatementPreview = false;
    folioSummary = null;
    agentSearch = '';
    fiscalFilters = { fromDate: undefined, toDate: undefined, docNumber: '', taxableOnly: false, type: 'all', proformaOnly: false };
    stmtFilters = { fromDate: null, toDate: null };
    apiClientService = new ApiClient.ApiClient();
    agentsService = new agents_service.AgentsService();
    propertyService = new index$2.PropertyService();
    setupService = new index$1.SetupService();
    systemService = new system_service.SystemService();
    toolbarRef;
    createInvoiceDialogRef;
    currencies = [];
    get filteredAgents() {
        const q = this.agentSearch.trim().toLowerCase();
        if (!q)
            return this.agents;
        return this.agents.filter(a => a.name.toLowerCase().includes(q));
    }
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.cityLedger, () => this.init());
    componentWillLoad() {
        const agentId = this.getAgentIdFromSearchParams();
        if (agentId && !this.agentId) {
            this.agentId = agentId;
        }
        if (this.ticket) {
            if (this.baseurl) {
                this.apiClientService.setBaseUrl(this.baseurl);
            }
            this.apiClientService.setApiClient(this.ticket);
            this.init();
        }
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        if (this.baseurl)
            this.apiClientService.setBaseUrl(this.baseurl);
        this.apiClientService.setApiClient(this.ticket);
        this.init();
    }
    handlePropertyIdChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        if (this.ticket)
            this.init();
    }
    handleAgentIdChange(newId, oldId) {
        if (newId === oldId || this.isLoading)
            return;
        this.applyAgentIdProp();
    }
    getAgentIdFromSearchParams() {
        const agentId = new URLSearchParams(window.location.search).get('agentId');
        return agentId ? Number(agentId) : null;
    }
    applyAgentIdProp() {
        if (this.agentId == null)
            return;
        const agent = this.agents.find(a => a.id === this.agentId);
        if (!agent)
            return;
        this.selectedAgent = agent;
        this.showStatementPreview = false;
        this.folioSummary = null;
        requestAnimationFrame(() => {
            const autocomplete = this.el.querySelector('ir-autocomplete');
            if (autocomplete)
                autocomplete.value = agent.name;
        });
    }
    async init() {
        try {
            this.isLoading = true;
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.cityLedger });
            // If a property name was supplied but no numeric id, resolve the id first.
            let propertyId = this.propertyid;
            if (!propertyId && this.p) {
                await this.propertyService.getExposedProperty({ id: null, language: locale_controller.LocaleController.language, aname: this.p });
                propertyId = calendarData.calendar_data.id;
            }
            this.resolvedPropertyId = propertyId;
            const resolvedByName = !this.propertyid && !!this.p;
            const [, setupEntries, agents, currencies] = await Promise.all([
                resolvedByName ? Promise.resolve() : this.propertyService.getExposedProperty({ id: propertyId, language: locale_controller.LocaleController.language }),
                this.setupService.getSetupEntriesByTableNameMulti(['_SVC_CATEGORY']),
                this.agentsService.getExposedAgents({ property_id: propertyId }),
                this.systemService.getExposedCurrencies(),
                localeReady,
            ]);
            this.currencies = currencies;
            this.agents = agents ?? [];
            this.applyAgentIdProp();
            const { svc_category } = utils$1.groupEntryTablesResult(setupEntries);
            this.svcCategories = svc_category ?? [];
        }
        catch (error) {
            console.error('Failed to initialize city ledger', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    get serviceCategoryOptions() {
        return this.svcCategories.map(entry => ({ id: entry.CODE_NAME, label: utils$1.getSetupEntryLabel(entry) }));
    }
    render() {
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-page", { label: t.t('Lcz_CityLedgerPageLabel', { fallback: 'City Ledger' }), description: this.selectedAgent?.name }, index.h("i", { slot: "page-description", style: { marginInlineStart: '0.5rem' } }, this.selectedAgent?.code), index.h("ir-autocomplete", { slot: "page-header",
            // size="m"
            placeholder: t.t('Lcz_SelectAgentPlaceholder', { fallback: 'Select agent' }), class: "city-ledger__agents-autocomplete", "onText-change": (e) => {
                this.agentSearch = e.detail ?? '';
            }, "onCombobox-change": (e) => {
                this.agentSearch = '';
                const value = e.detail;
                if (!value) {
                    // Cleared — keep the previously selected agent and don't fetch anything.
                    requestAnimationFrame(() => {
                        const autocomplete = this.el.querySelector('ir-autocomplete');
                        if (autocomplete && this.selectedAgent)
                            autocomplete.value = this.selectedAgent.name;
                    });
                    return;
                }
                const newAgent = this.agents?.find(agent => agent.id === Number(value));
                if (newAgent?.id === this.selectedAgent?.id)
                    return;
                this.selectedAgent = newAgent ?? null;
                this.showStatementPreview = false;
                this.folioSummary = null;
                // Update URL search param
                if (this.selectedAgent) {
                    const url = new URL(window.location.href);
                    url.searchParams.set('agentId', this.selectedAgent.id.toString());
                    window.history.replaceState({}, '', url);
                }
            } }, this.filteredAgents.map(agent => (index.h("ir-autocomplete-option", { key: agent.id, label: agent.name, value: String(agent.id) }, agent.name)))), !this.selectedAgent ? (index.h("ir-empty-state", { message: t.t('Lcz_SelectAgentToGetStarted', { fallback: 'Select an agent to get started' }), class: "city-ledger__no-agent" }, index.h("div", { slot: "icon", class: 'city-ledger__no-agent-icon-container' }, index.h("wa-icon", { name: "building", class: "city-ledger__no-agent-icon" })), index.h("p", { class: "city-ledger__no-agent-sub" }, t.t('Lcz_SelectAgentSubtext', { fallback: 'Choose an agent from the selector above to view their city ledger folio, fiscal documents, and statements.' })))) : (index.h("div", { class: "city-ledger__content" }, index.h("ir-city-ledger-toolbar", { ref: el => (this.toolbarRef = el), agentId: this.selectedAgent?.id, onCreateInvoice: () => this.createInvoiceDialogRef.openModal() }), index.h("wa-tab-group", { activation: "manual", "onwa-tab-show": e => {
                this.currentTab = e.detail.name.toString();
            }, active: this.currentTab }, index.h("wa-tab", { panel: 'folio' }, t.t('Lcz_Folio', { fallback: 'Folio' })), index.h("wa-tab", { panel: 'fiscal-documents' }, t.t('Lcz_FiscalDocuments', { fallback: 'Fiscal Documents' })), index.h("wa-tab", { panel: 'create-statement' }, t.t('Lcz_CreateStatement', { fallback: 'Create Statement' })), index.h("wa-tab-panel", { name: "folio" }, index.h("ir-city-ledger-folio", { agent: this.selectedAgent, propertyId: this.resolvedPropertyId, ticket: this.ticket, language: this.language, serviceCategoryOptions: this.serviceCategoryOptions, currencies: this.currencies, onFolioSummaryUpdate: e => (this.folioSummary = e.detail) })), index.h("wa-tab-panel", { name: "fiscal-documents" }, index.h("ir-city-ledger-fiscal-documents", { agentId: this.selectedAgent?.id, currencySymbol: calendarData.calendar_data.property?.currency?.symbol, currencies: this.currencies, ticket: this.ticket, propertyId: this.resolvedPropertyId, initialFilters: this.fiscalFilters, onClFiscalFiltersChange: e => (this.fiscalFilters = e.detail) })), index.h("wa-tab-panel", { name: "create-statement", class: "statement-tab-panel" }, index.h("ir-city-ledger-statements", { agentId: this.selectedAgent?.id, agentName: this.selectedAgent?.name ?? '', currencySymbol: calendarData.calendar_data.property?.currency?.symbol, currencies: this.currencies, ticket: this.ticket, propertyId: this.resolvedPropertyId, initialFilters: this.stmtFilters, onClStmtFiltersChange: e => (this.stmtFilters = e.detail) })))))), index.h("ir-cl-invoice-dialog", { ref: el => (this.createInvoiceDialogRef = el), agentId: this.selectedAgent?.id, onInvoiceIssued: async () => {
                await this.toolbarRef?.refresh();
            } }), index.h("ir-cl-fiscal-document-preview", { ticket: this.ticket, propertyId: calendarData.calendar_data?.property?.id, onDocumentConverted: () => this.toolbarRef?.refresh() })));
    }
    static get watchers() { return {
        "language": [{
                "languageChanged": 0
            }],
        "ticket": [{
                "handleTicketChange": 0
            }],
        "propertyid": [{
                "handlePropertyIdChange": 0
            }],
        "agentId": [{
                "handleAgentIdChange": 0
            }]
    }; }
};
IrCityLedger.style = irCityLedgerCss();

const irDailyRevenueCss = () => `.sc-ir-daily-revenue-h{display:block}.revenue-content-row.sc-ir-daily-revenue{display:flex;flex-direction:column;gap:1rem}.revenue-table-card.sc-ir-daily-revenue{flex:1 1 0%}@media (min-width: 992px){.revenue-content-row.sc-ir-daily-revenue{flex-direction:row}}`;

const IrDailyRevenue = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.preventPageLoad = index.createEvent(this, "preventPageLoad");
    }
    language = '';
    ticket = '';
    propertyid;
    p;
    isPageLoading;
    property_id;
    groupedPayment;
    previousDateGroupedPayments;
    isLoading;
    filters = {
        date: moment.hooks().format('YYYY-MM-DD'),
        from_date: null,
        to_date: null,
        users: null,
    };
    sideBarEvent;
    apiClientService = new ApiClient.ApiClient();
    roomService = new room_service.RoomService();
    propertyService = new index$2.PropertyService();
    setupService = new index$1.SetupService();
    paymentEntries;
    preventPageLoad;
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.dailyRevenue, () => this.initializeApp());
    componentWillLoad() {
        if (this.ticket) {
            this.apiClientService.setApiClient(this.ticket);
            this.initializeApp();
        }
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.apiClientService.setApiClient(this.ticket);
        this.initializeApp();
    }
    handleOpenSidebar(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.sideBarEvent = e.detail;
    }
    handleFetchNewReports(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = { ...e.detail };
        this.getPaymentReports();
    }
    async handleResetBooking(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        this.getPaymentReports(false, true);
    }
    handleSidebarClose = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.sideBarEvent = null;
    };
    async initializeApp() {
        this.isPageLoading = true;
        try {
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.dailyRevenue });
            let propertyId = this.propertyid;
            if (!propertyId && !this.p) {
                throw new Error('Property ID or username is required');
            }
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.setupService.getPaymentEntries(), this.getPaymentReports(), localeReady];
            if (propertyId) {
                requests.push(this.roomService.getExposedProperty({
                    id: propertyId,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            const [paymentEntries] = await Promise.all(requests);
            this.paymentEntries = paymentEntries;
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    groupPaymentsByName(payments) {
        const groupedPayment = new Map();
        for (const payment of payments) {
            const key = `${payment.payTypeCode}_${payment.payMethodCode}`;
            const p = groupedPayment.get(key) ?? [];
            groupedPayment.set(key, [...p, payment]);
        }
        return new Map([...groupedPayment.entries()].sort(([a], [b]) => {
            const aNum = Number(a);
            const bNum = Number(b);
            if (!isNaN(aNum) && !isNaN(bNum)) {
                return aNum - bNum;
            }
            return a.localeCompare(b);
        }));
    }
    async getPaymentReports(isExportToExcel = false, excludeYesterday = false) {
        try {
            const getReportObj = (report) => {
                return {
                    method: report.METHOD,
                    payTypeCode: report.PAY_TYPE_CODE,
                    payMethodCode: report.PAY_METHOD_CODE,
                    amount: report.AMOUNT,
                    date: report.DATE,
                    hour: report.HOUR,
                    minute: report.MINUTE,
                    user: report.USER,
                    currency: report.CURRENCY,
                    bookingNbr: report.BOOKING_NBR,
                    id: v4.v4(),
                };
            };
            this.isLoading = isExportToExcel ? 'export' : 'filter';
            const requests = [
                this.propertyService.getDailyRevenueReport({
                    from_date: this.filters.date ? this.filters.date : this.filters.from_date,
                    to_date: this.filters.date ? this.filters.date : this.filters.to_date,
                    property_id: this.property_id?.toString(),
                    is_export_to_excel: isExportToExcel,
                }),
            ];
            if (!isExportToExcel && !excludeYesterday && this.filters.date) {
                requests.push(this.propertyService.getDailyRevenueReport({
                    from_date: moment.hooks(this.filters.date, 'YYYY-MM-DD').add(-1, 'days').format('YYYY-MM-DD'),
                    to_date: moment.hooks(this.filters.date, 'YYYY-MM-DD').add(-1, 'days').format('YYYY-MM-DD'),
                    property_id: this.property_id?.toString(),
                    is_export_to_excel: isExportToExcel,
                }));
            }
            const results = await Promise.all(requests);
            if (!isExportToExcel) {
                if (results[0]) {
                    this.groupedPayment = this.groupPaymentsByName(results[0]?.map(getReportObj));
                }
                else {
                    this.groupedPayment = new Map();
                }
                if (results[1])
                    this.previousDateGroupedPayments = this.groupPaymentsByName(results[1]?.map(getReportObj));
            }
        }
        catch (e) {
            console.log(e);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        if (this.isPageLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-page", { label: t.t('Lcz_DailyRevenue', { fallback: 'Daily Revenue' }) }, index.h("ir-custom-button", { slot: "page-header", variant: "neutral", appearance: "outlined", loading: this.isLoading === 'export', onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getPaymentReports(true);
            } }, index.h("wa-icon", { name: "download", slot: "start" }), t.t('Lcz_Export', { fallback: 'Export' })), index.h("ir-revenue-summary", { filters: this.filters, previousDateGroupedPayments: this.previousDateGroupedPayments, groupedPayments: this.groupedPayment, paymentEntries: this.paymentEntries }), index.h("div", { class: "revenue-content-row" }, index.h("ir-daily-revenue-filters", { isLoading: this.isLoading === 'filter', payments: this.groupedPayment }), index.h("ir-revenue-table", { filters: this.filters, class: "revenue-table-card", paymentEntries: this.paymentEntries, payments: this.groupedPayment }))), index.h("ir-booking-details-drawer", { open: Boolean(this.sideBarEvent), propertyId: this.property_id, bookingNumber: this.sideBarEvent?.payload?.bookingNumber?.toString(), ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: e => this.handleSidebarClose(e) })));
    }
    static get watchers() { return {
        "language": [{
                "languageChanged": 0
            }],
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrDailyRevenue.style = irDailyRevenueCss();

const irDeparturesCss = () => `.page-title.sc-ir-departures{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.sc-ir-departures-h{height:100% !important;overflow-y:auto !important}`;

const IrDepartures = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    ticket;
    propertyid;
    language = 'en';
    p;
    bookingNumber;
    booking;
    paymentEntries;
    isPageLoading;
    payment;
    checkoutState = null;
    invoiceState = null;
    /** Room identifier whose check-out dialog should auto-open inside the booking-details drawer (early check-out redirect). */
    checkoutRoomIdentifier = null;
    apiClientService = new ApiClient.ApiClient();
    roomService = new room_service.RoomService();
    bookingService = new booking_store.BookingService();
    setupService = new index$1.SetupService();
    paymentFolioRef;
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.departures, () => this.init());
    componentWillLoad() {
        if (this.ticket) {
            this.apiClientService.setApiClient(this.ticket);
            this.init();
        }
        departures_store.onDeparturesStoreChange('today', _ => {
            this.getBookings();
        });
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.apiClientService.setApiClient(this.ticket);
            this.init();
        }
    }
    handleOpen(e) {
        this.bookingNumber = e.detail;
    }
    handleBookingPayment(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { booking_nbr, payment } = e.detail;
        this.booking = departures_store.departuresStore.bookings.find(b => b.booking_nbr === booking_nbr);
        const paymentType = this.paymentEntries.types.find(p => p.CODE_NAME === payment.payment_type.code);
        this.payment = {
            ...payment,
            payment_type: {
                code: paymentType.CODE_NAME,
                description: paymentType.CODE_VALUE_EN,
                operation: paymentType.NOTES,
            },
        };
        this.paymentFolioRef.openFolio();
    }
    async handleResetExposedCancellationDueAmount(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.getBookings();
    }
    async init() {
        try {
            this.isPageLoading = true;
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.departures });
            if (!this.propertyid && !this.p) {
                throw new Error('Missing credentials');
            }
            let propertyId = this.propertyid;
            if (!propertyId) {
                await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                });
            }
            const [_, __, paymentEntries] = await Promise.all([
                calendarData.calendar_data?.property ? Promise.resolve(null) : this.roomService.getExposedProperty({ id: this.propertyid || 0, language: locale_controller.LocaleController.language, aname: this.p }),
                localeReady,
                this.setupService.getPaymentEntries(),
                this.getBookings(),
            ]);
            this.paymentEntries = paymentEntries;
            // Fetch bookings only after the property/calendar data is loaded — the departures
            // pipeline (canCheckout) reads the calendar data store, which is empty until the
            // getExposedProperty calls above resolve.
            await this.getBookings();
        }
        catch (error) {
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async getBookings() {
        const { bookings, total_count } = await this.bookingService.getRoomsToCheckout({
            property_id: calendarData.calendar_data.property?.id?.toString() || this.propertyid?.toString(),
            check_out_date: departures_store.departuresStore.today,
            page_index: departures_store.departuresStore.pagination.currentPage,
            page_size: departures_store.departuresStore.pagination.pageSize,
        });
        departures_store.setDepartureTotal(total_count ?? 0);
        departures_store.initializeDeparturesStore(bookings);
    }
    handleCheckoutRoom(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const { booking: booking$1, identifier } = event.detail;
        const room = booking$1?.rooms?.find(r => r.identifier === identifier);
        // Early check-outs carry penalty / invoicing implications — handle them inside the full
        // booking details rather than the bare inline dialog.
        if (booking.isEarlyCheckout(room)) {
            this.checkoutRoomIdentifier = identifier;
            this.bookingNumber = Number(booking$1.booking_nbr);
            return;
        }
        this.checkoutState = event.detail;
    }
    async handlePaginationChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const nextPage = event.detail?.currentPage ?? 1;
        if (nextPage === departures_store.departuresStore.pagination.currentPage) {
            return;
        }
        departures_store.setDeparturesPage(nextPage);
        await this.getBookings();
    }
    async handleCheckoutDialogClosed(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const state = { ...this.checkoutState };
        this.checkoutState = null;
        switch (event.detail.reason) {
            case 'checkout':
                await this.getBookings();
                break;
            case 'openInvoice':
                this.invoiceState = { ...state };
                await this.getBookings();
                break;
        }
    }
    async handlePaginationPageSizeChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const nextPageSize = event.detail?.pageSize;
        if (!Number.isFinite(nextPageSize)) {
            return;
        }
        const normalizedPageSize = Math.floor(Number(nextPageSize));
        if (normalizedPageSize === departures_store.departuresStore.pagination.pageSize) {
            return;
        }
        departures_store.setDeparturesPageSize(normalizedPageSize);
        await this.getBookings();
    }
    handleInvoiceClose(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.invoiceState = null;
    }
    render() {
        if (this.isPageLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", { handledEndpoints: ['/Get_Rooms_To_Check_Out'] }), index.h("div", { class: 'ir-page__container' }, index.h("h3", { class: "page-title" }, t.t('Lcz_CheckOuts', { fallback: 'Check-outs' })), index.h("ir-departures-table", { onCheckoutRoom: event => this.handleCheckoutRoom(event), onRequestPageChange: event => this.handlePaginationChange(event), onRequestPageSizeChange: event => this.handlePaginationPageSizeChange(event) })), index.h("ir-booking-details-drawer", { open: !!this.bookingNumber, propertyId: this.propertyid, bookingNumber: this.bookingNumber?.toString(), checkoutRoomIdentifier: this.checkoutRoomIdentifier, ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => {
                this.bookingNumber = null;
                this.checkoutRoomIdentifier = null;
                this.getBookings();
            } }), index.h("ir-payment-folio", { style: { height: 'auto' }, booking: this.booking, bookingNumber: this.booking?.booking_nbr, paymentEntries: this.paymentEntries, payment: this.payment, mode: 'payment-action', ref: el => (this.paymentFolioRef = el), onCloseModal: () => {
                this.booking = null;
                this.payment = null;
            } }), index.h("ir-checkout-dialog", { booking: this.checkoutState?.booking, identifier: this.checkoutState?.identifier, open: this.checkoutState !== null, onCheckoutDialogClosed: event => this.handleCheckoutDialogClosed(event) }), index.h("ir-invoice", { onInvoiceClose: event => this.handleInvoiceClose(event), booking: this.invoiceState?.booking, roomIdentifier: this.invoiceState?.identifier, open: this.invoiceState !== null })));
    }
    static get watchers() { return {
        "language": [{
                "languageChanged": 0
            }],
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrDepartures.style = irDeparturesCss();

const irExtraServicesSettingsCss = () => `.sc-ir-extra-services-settings-h{display:block}.extra-services-settings__groups.sc-ir-extra-services-settings{display:flex;flex-direction:column;gap:var(--wa-space-l)}.extra-services-settings__card.sc-ir-extra-services-settings{background-color:var(--wa-color-surface-default, white)}.extra-services-settings__header.sc-ir-extra-services-settings{display:flex;align-items:center;font-size:var(--wa-font-size-l);gap:var(--wa-space-s)}.extra-services-settings__tax-chip.sc-ir-extra-services-settings{display:flex;align-items:center;gap:var(--wa-space-3xs);font-size:var(--wa-font-size-s);font-weight:400;color:var(--wa-color-text-quiet);padding-top:0.25rem}.extra-services-settings__tax-chip-label.sc-ir-extra-services-settings{font-weight:600;color:var(--wa-color-text-normal)}.extra-services-grid__row.sc-ir-extra-services-settings{display:flex;flex-direction:column;gap:var(--wa-space-m);padding:var(--wa-space-m) 0}.extra-services-grid__name.sc-ir-extra-services-settings{display:flex;flex-direction:column;gap:var(--wa-space-3xs)}.extra-services-grid__title.sc-ir-extra-services-settings{font-size:var(--wa-font-size-m);margin:0;padding:0}.extra-services-grid__hint.sc-ir-extra-services-settings{margin:0;padding:0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}.extra-services-grid__controls.sc-ir-extra-services-settings{display:flex;align-items:flex-end;gap:var(--wa-space-m)}.extra-services-grid__cell.sc-ir-extra-services-settings:empty{display:none}ir-extra-service-price-input.sc-ir-extra-services-settings,.extra-services-grid__cell.sc-ir-extra-services-settings{width:100%}@media (min-width: 768px){.extra-services-grid.sc-ir-extra-services-settings{display:grid;grid-template-columns:max-content max-content 1fr;column-gap:var(--wa-space-xl);align-items:center}.extra-services-grid__row.sc-ir-extra-services-settings{display:contents}.extra-services-grid__controls.sc-ir-extra-services-settings{display:contents}.extra-services-grid__divider.sc-ir-extra-services-settings{grid-column:1 / -1}.extra-services-grid__name.sc-ir-extra-services-settings,.extra-services-grid__cell.sc-ir-extra-services-settings{align-self:center}.extra-services-grid__cell.sc-ir-extra-services-settings:empty{display:block}ir-extra-service-price-input.sc-ir-extra-services-settings,.extra-services-grid__cell.sc-ir-extra-services-settings{width:100%}}`;

/** Hidden `_SVC_CATEGORY` — only used for categories that doesn't require a default price. */
const HIDDEN_SUB_CATEGORIES = new Set([enums.SvcCategory.Minibar]);
/** Valid `BABY_COT_PRICING_MODEL` values — the baby cot's default price is either a flat per-stay charge or a per-night charge. */
const BABY_COT_PRICING_MODELS = ['Stay', 'Night'];
const IrExtraServicesSettings = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    ticket;
    p;
    language = 'en';
    propertyid;
    isLoading;
    isSaving;
    setupEntries;
    priceCategoryRules = new Map();
    autoValidate;
    dayUseBlockNight = false;
    babyCotPricingModel = 'Stay';
    apiClientService = new ApiClient.ApiClient();
    setupService = new index$1.SetupService();
    propertyService = new index$2.PropertyService();
    componentWillLoad() {
        if (this.ticket) {
            this.apiClientService.setApiClient(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue)
            this.reinit();
    }
    handlePChange(newValue, oldValue) {
        if (newValue !== oldValue && this.ticket)
            this.reinit();
    }
    handlePropertyIdChange(newValue, oldValue) {
        if (newValue !== oldValue && this.ticket)
            this.reinit();
    }
    reinit() {
        this.apiClientService.setApiClient(this.ticket);
        this.init();
    }
    async init() {
        this.isLoading = true;
        try {
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.extraServicesSettings });
            const [, tableEntries] = await Promise.all([
                this.propertyService.getExposedProperty({ id: this.propertyid, language: locale_controller.LocaleController.language }),
                this.setupService.getSetupEntriesByTableNameMulti(['_VAT_INCLUDED', '_SVC_CATEGORY']),
                localeReady,
            ]);
            this.setupEntries = utils$1.groupEntryTablesResult(tableEntries);
            this.priceCategoryRules = this.buildInitialRules();
            this.dayUseBlockNight = calendarData.getDayUseBlockState() === '1';
            this.babyCotPricingModel = this.resolveBabyCotPricingModel(calendarData.getBabyCotPricingModel());
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    /** `svc_category` entries grouped by their `NOTES`-referenced parent code. See `groupSvcCategoriesByParent`. */
    get serviceGroups() {
        return Array.from(svcCategory_utils.groupSvcCategoriesByParent(this.setupEntries?.svc_category ?? [], this.language).values());
    }
    /** All grouped categories flattened, for building the price-rules map and the save payload. */
    get categories() {
        return this.serviceGroups.flatMap(group => group.categories);
    }
    /**
     * The property's VAT setup. Every grouped extra service shares this one rate and is always
     * marked Inclusive — there's no per-category tax mode to configure anymore, so this single
     * value both drives the card-header summary and is what gets saved for every category.
     */
    get vatSummary() {
        return svcCategory_utils.toAccChargeRule(svcCategory_utils.findAccTax('vat'));
    }
    /** Formats a charge rule as e.g. "15% Inclusive" or "Not Applicable". */
    formatAccChargeRule(rule) {
        if (rule.mode === index$2.taxationModes.NOT_APPLICABLE)
            return t.t('Lcz_NotApplicable', { fallback: 'Not Applicable' });
        return `${rule.value ?? 0}% ${rule.mode === index$2.taxationModes.INCLUSIVE ? t.t('Lcz_Inclusive', { fallback: 'Inclusive' }) : t.t('Lcz_Exclusive', { fallback: 'Exclusive' })}`;
    }
    /** Builds the initial price rules map from `extra_info`'s `SVC_DEFAULT_PRICE_<code>` entries. Mode is always Inclusive — see `vatSummary`. */
    buildInitialRules() {
        const rules = new Map();
        this.categories.forEach(c => {
            const defaultPrice = calendarData.getExtraServiceDefaultPrice(c.CODE_NAME);
            rules.set(c.CODE_NAME, { mode: index$2.taxationModes.INCLUSIVE, value: defaultPrice !== undefined ? Number(defaultPrice) : null });
        });
        return rules;
    }
    /** Narrows the persisted `BABY_COT_PRICING_MODEL` string to a known option, defaulting to `'Stay'` if unset or unrecognized. */
    resolveBabyCotPricingModel(value) {
        return BABY_COT_PRICING_MODELS.includes(value ?? '') ? value : 'Stay';
    }
    handlePriceRuleChange(categoryCode, nextRule) {
        const next = new Map(this.priceCategoryRules);
        next.set(categoryCode, nextRule);
        this.priceCategoryRules = next;
    }
    /** Assembles the API payload from the current price rules state. Every category shares the property's VAT rate and is Inclusive. */
    buildPayload() {
        const vat = this.vatSummary;
        const inclusiveEntry = (this.setupEntries?.vat_included ?? []).find(v => v.CODE_NAME === index$2.taxationModes.INCLUSIVE);
        const tax_categories = this.categories.map(category => {
            const rule = this.priceCategoryRules.get(category.CODE_NAME);
            return {
                category: { code: category.CODE_NAME, description: category.CODE_VALUE_EN },
                taxation_mode: { code: index$2.taxationModes.INCLUSIVE, description: inclusiveEntry?.CODE_VALUE_EN ?? 'Inclusive' },
                pct: vat.mode === index$2.taxationModes.NOT_APPLICABLE ? 0 : (vat.value ?? 0),
                default_price: rule?.value ?? null,
            };
        });
        return {
            property_id: this.propertyid,
            ...svcCategory_utils.getAccTaxPayloadFields(),
            tax_categories,
            DAY_USE_BLOCK: this.dayUseBlockNight ? '1' : '0',
            BABY_COT_PRICING_MODEL: this.babyCotPricingModel,
        };
    }
    /** Validates and submits the extra-service price configuration to the API. */
    async handleSubmit(e) {
        e.preventDefault();
        this.autoValidate = true;
        try {
            this.isSaving = true;
            const payload = this.buildPayload();
            await this.propertyService.handleExposedPropertyTaxCategories(payload);
            utils.showToast({
                title: t.t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }),
                type: 'success',
            });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isSaving = false;
        }
    }
    render() {
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h("ir-page", { label: t.t('Lcz_ExtraServicesTitle', { fallback: 'Extra Services' }), description: t.t('Lcz_ExtraServicesSettingsDescription', { fallback: 'Define default pricing and options for the extra services offered on this property.' }), "data-testid": "ir-extra-services-settings" }, index.h("ir-custom-button", { slot: "page-header", loading: this.isSaving, type: "submit", form: "extra-services-settings__form", style: { width: '100px' }, variant: "brand" }, t.t('Lcz_Save', { fallback: 'Save' })), index.h("form", { id: "extra-services-settings__form", onSubmit: e => this.handleSubmit(e), class: "extra-services-settings__groups" }, this.serviceGroups.length === 0 && (index.h("ir-empty-state", { message: t.t('Lcz_NoExtraServiceGroupsSetUp', {
                fallback: "No extra-service groups are set up yet. Add a service category whose CODE_NAME is referenced by other categories' NOTES to group them here.",
            }) })), this.serviceGroups.map(group => (index.h("wa-card", { appearance: "plain", class: "extra-services-settings__card" }, index.h("div", { slot: "header", class: "extra-services-settings__header" }, index.h("span", null, group.label), index.h("span", { class: "extra-services-settings__tax-chip" }, index.h("span", { class: "extra-services-settings__tax-chip-label" }, t.t('Lcz_Vat', { fallback: 'VAT' })), index.h("span", null, this.formatAccChargeRule(this.vatSummary)))), index.h("div", { class: "extra-services-grid" }, group.categories
            .filter(c => !HIDDEN_SUB_CATEGORIES.has(c.CODE_NAME))
            .map((category, idx) => {
            const rule = this.priceCategoryRules.get(category.CODE_NAME);
            // const isDayUse = category.CODE_NAME === DAY_USE_CATEGORY_CODE;
            const isBabyCot = category.CODE_NAME === enums.SvcCategory.BabyCot;
            const isExtraBed = category.CODE_NAME === 'EXB';
            return [
                idx > 0 && (index.h("div", { class: "extra-services-grid__divider", key: category.CODE_NAME + 'divider' + idx }, index.h("wa-divider", null))),
                index.h("div", { class: "extra-services-grid__row", id: category.CODE_NAME, key: category.CODE_NAME + 'row' + idx }, index.h("div", { class: "extra-services-grid__name" }, index.h("p", { class: "extra-services-grid__title" }, utils$1.getEntryValue({ entry: category, language: locale_controller.LocaleController.language }))), index.h("div", { class: "extra-services-grid__controls" }, index.h("div", { class: "extra-services-grid__cell" }, isBabyCot ? (index.h("div", { class: 'ir__field-group' }, index.h("ir-extra-service-price-input", {
                    // class={'--grow'}
                    autoValidate: this.autoValidate, onPriceChange: e => this.handlePriceRuleChange(category.CODE_NAME, e.detail), chargeRule: rule
                }), index.h("wa-select", { value: this.babyCotPricingModel, defaultValue: this.babyCotPricingModel, size: "s", style: { width: 'min-content', minWidth: '100px' }, onchange: e => (this.babyCotPricingModel = e.target.value) }, index.h("wa-option", { value: t.t('Lcz_Stay', { fallback: 'Stay' }) }, "Stay"), index.h("wa-option", { value: "Night" }, "Night")))) : (index.h("ir-extra-service-price-input", { autoValidate: this.autoValidate, onPriceChange: e => this.handlePriceRuleChange(category.CODE_NAME, e.detail), chargeRule: rule }, isExtraBed && index.h("span", { slot: "end" }, t.t('Lcz_PerNightSuffix', { fallback: '/night' }))))))),
            ];
        }))))))));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }],
        "p": [{
                "handlePChange": 0
            }],
        "propertyid": [{
                "handlePropertyIdChange": 0
            }]
    }; }
};
IrExtraServicesSettings.style = irExtraServicesSettingsCss();

const irFiscalDocumentsCss = () => `.sc-ir-fiscal-documents-h{display:block}`;

/** Selectable page sizes for the fiscal-documents list. */
const PAGE_SIZES = [20, 50, 100];
const IrFiscalDocuments = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    ticket;
    baseurl;
    language = 'en';
    propertyid;
    /** Property username (aname). When provided without `propertyid`, the id is resolved from it. */
    p;
    filters = {
        fromDate: undefined,
        toDate: undefined,
        docNumber: '',
        taxableOnly: false,
        type: 'all',
        proformaOnly: false,
        folioType: 'all',
        agentId: null,
        guestId: null,
        searchBy: 'doc_nbr',
    };
    isPageLoading = true;
    property_id;
    /** `_FD_TYPE` setup entries — used to display the document type in the table. */
    fdTypes = [];
    rows = [];
    isLoading = null;
    hasFetched = false;
    // Server-side pagination state.
    pageSize = PAGE_SIZES[0];
    currentPage = 1;
    totalRows = 0;
    /** Booking number whose details drawer is currently open. */
    selectedBookingNumber = null;
    apiClientService = new ApiClient.ApiClient();
    propertyService = new index$2.PropertyService();
    roomService = new room_service.RoomService();
    setupService = new index$1.SetupService();
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.fiscalDocuments, () => this.init());
    componentWillLoad() {
        if (this.baseurl) {
            this.apiClientService.setBaseUrl(this.baseurl);
        }
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
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        if (this.baseurl) {
            this.apiClientService.setBaseUrl(this.baseurl);
        }
        this.apiClientService.setApiClient(this.ticket);
        this.init();
    }
    /**
     * Page bootstrap: resolves the property id (from `propertyid`, or from the
     * aname `p` when only that is provided), then fetches the remaining setup in
     * parallel — the `_FD_TYPE` entries and the exposed property.
     */
    async init() {
        this.isPageLoading = true;
        try {
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.fiscalDocuments });
            let propertyId = this.propertyid;
            if (!propertyId && !this.p) {
                throw new Error('Property ID or username (p) is required');
            }
            // The aname → id lookup must resolve first because every other request
            // needs a numeric property id. It also loads the property into the store.
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            // Remaining setup — all in parallel. The property is only fetched here
            // when we didn't already load it through the aname lookup above.
            const requests = [this.setupService.getSetupEntriesByTableName('_FD_TYPE'), localeReady];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: propertyId,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                }));
            }
            const [fdTypes] = await Promise.all(requests);
            this.fdTypes = fdTypes ?? [];
        }
        catch (error) {
            console.error('[ir-fiscal-documents] init error:', error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    targetTypeFromFolio(folioType) {
        if (folioType === 'agent')
            return 'AGENT';
        if (folioType === 'guest')
            return 'GUEST';
        return null;
    }
    resolveFdTypeCode(filters) {
        if (filters.proformaOnly)
            return enums.FdTypes.Proforma;
        if (filters.type && filters.type !== 'all')
            return filters.type;
        return null;
    }
    async fetchFiscalDocuments(filters) {
        if (!filters.fromDate && !filters.toDate)
            return;
        this.isLoading = this.filters?.export ? 'export' : 'search';
        const effectiveFrom = filters.fromDate ? filters.fromDate : moment.hooks(filters.toDate).subtract(5, 'years').format('YYYY-MM-DD');
        const effectiveTo = filters.toDate ? filters.toDate : moment.hooks(filters.fromDate).add(5, 'years').format('YYYY-MM-DD');
        try {
            const { rows, total } = await this.propertyService.getUnifiedFolio({
                property_id: this.property_id,
                from_date: this.filters?.searchBy === 'booking_nbr' ? null : effectiveFrom,
                to_date: this.filters?.searchBy === 'booking_nbr' ? null : effectiveTo,
                target_type: this.targetTypeFromFolio(filters.folioType),
                doc_type: null,
                fd_type_code: this.resolveFdTypeCode(filters),
                doc_number: this.filters?.searchBy === 'doc_nbr' ? filters.docNumber || null : null,
                agent_id: this.filters?.agentId?.toString(),
                guest_id: this.filters?.guestId?.toString(),
                booking_number: this.filters?.searchBy === 'booking_nbr' ? this.filters.docNumber : null,
                page_index: this.currentPage - 1,
                page_size: this.pageSize,
                o_Total_Rows: null,
                is_export_to_excel: this.filters.export || false,
                Link_excel: '',
            });
            this.rows = rows;
            this.totalRows = total;
        }
        catch (err) {
            console.error('[ir-fiscal-documents] getUnifiedFolio error:', err);
            this.rows = [];
            this.totalRows = 0;
        }
        finally {
            this.isLoading = null;
            this.hasFetched = true;
        }
    }
    handleApplyFilters(filters) {
        this.filters = filters;
        this.currentPage = 1;
        this.fetchFiscalDocuments(filters);
    }
    handlePageChange(page) {
        if (page === this.currentPage)
            return;
        this.currentPage = page;
        this.fetchFiscalDocuments(this.filters);
    }
    handlePageSizeChange(size) {
        if (size === this.pageSize)
            return;
        this.pageSize = size;
        this.currentPage = 1;
        this.fetchFiscalDocuments(this.filters);
    }
    render() {
        if (this.isPageLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h("ir-page", { label: t.t('Lcz_FiscalDocuments', { fallback: 'Fiscal Documents' }) }, index.h("ir-fiscal-documents-filters", { propertyId: this.property_id, loading: this.isLoading, filters: this.filters, onFilterChanged: e => (this.filters = { ...this.filters, ...e.detail }), onApplyFilters: e => this.handleApplyFilters(e.detail) }), index.h("ir-fiscal-documents-table", { rows: this.rows, taxableOnly: this.filters?.taxableOnly, isLoading: this.isLoading === 'search', hasFetched: this.hasFetched, hasDates: !!(this.filters.fromDate && this.filters.toDate), fromDate: this.filters.fromDate, toDate: this.filters.toDate, folioType: this.filters.folioType, agentId: this.filters.agentId, guestId: this.filters.guestId, ticket: this.ticket, propertyId: this.property_id, language: this.language, fdTypes: this.fdTypes, currentPage: this.currentPage, pageSize: this.pageSize, totalRecords: this.totalRows, pageSizes: PAGE_SIZES, onFetchRequested: () => this.fetchFiscalDocuments(this.filters), onRequestPageChange: (e) => this.handlePageChange(e.detail.currentPage), onRequestPageSizeChange: (e) => this.handlePageSizeChange(e.detail.pageSize), onOpenBookingDetails: (e) => (this.selectedBookingNumber = e.detail) }), index.h("ir-booking-details-drawer", { open: !!this.selectedBookingNumber, propertyId: this.property_id, bookingNumber: this.selectedBookingNumber, ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.selectedBookingNumber = null) }), index.h("ir-fiscal-document-preview", { mode: "all", ticket: this.ticket, propertyId: this.property_id, onDocumentConverted: () => this.fetchFiscalDocuments(this.filters) })));
    }
    static get watchers() { return {
        "language": [{
                "languageChanged": 0
            }],
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrFiscalDocuments.style = irFiscalDocumentsCss();

types.objectType({
    AC_ID: types.numberType(),
    NAME: types.stringType(),
    aname: types.stringType(),
    level2: types.stringType().nullable().optional(),
    COUNTRY_ID: types.numberType(),
});
const Params_Get_GHS_Candidate_Properties_Schema = types.objectType({
    COUNTRY_ID: types.numberType().nullable().optional(),
});
const Params_Generate_GHS_Listing_For_Selection_Schema = types.objectType({
    Selected_AC_IDs: types.arrayType(types.numberType()),
});
const Params_Update_GHS_Enablement_Schema = types.objectType({
    AC_ID: types.numberType(),
    IS_ENABLED: types.booleanType(),
});

class GHSService {
    async Get_GHS_Candidate_Properties(params) {
        const validatedParams = Params_Get_GHS_Candidate_Properties_Schema.parse(params);
        const { data } = await axios.axios.post(`/Get_GHS_Candidate_Properties`, validatedParams);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result || [];
    }
    async Generate_GHS_Listing_For_Selection(params) {
        const validatedParams = Params_Generate_GHS_Listing_For_Selection_Schema.parse(params);
        const { data } = await axios.axios.post(`/Generate_GHS_Listing_For_Selection`, validatedParams);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async Update_GHS_Enablement(params) {
        const validatedParams = Params_Update_GHS_Enablement_Schema.parse(params);
        const { data } = await axios.axios.post(`/Update_GHS_Enablement`, validatedParams);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
    }
}

const irGhsOnboardingCss = () => `.sc-ir-ghs-onboarding-h{display:block;box-sizing:border-box}*.sc-ir-ghs-onboarding,*.sc-ir-ghs-onboarding::before,*.sc-ir-ghs-onboarding::after{box-sizing:inherit}.ir-ghs-onboarding__container.sc-ir-ghs-onboarding{padding:var(--wa-space-m);display:flex;flex-direction:column;gap:var(--wa-space-m)}.ir-ghs-onboarding__header.sc-ir-ghs-onboarding{display:flex;align-items:center;justify-content:space-between}.ir-ghs-onboarding__title.sc-ir-ghs-onboarding{margin:0;font-size:var(--wa-font-size-large);margin-bottom:var(--wa-space-xs);color:var(--wa-color-neutral-900)}.ir-ghs-onboarding__content.sc-ir-ghs-onboarding{display:flex;flex-direction:column;gap:var(--wa-space-m);margin-top:var(--wa-space-m)}.ir-ghs-onboarding__main-row.sc-ir-ghs-onboarding{display:flex;flex-direction:column;gap:var(--wa-space-m);align-items:stretch}@media (min-width: 992px){.ir-ghs-onboarding__main-row.sc-ir-ghs-onboarding{flex-direction:row;align-items:flex-start}.ir-ghs-onboarding__candidate-table.sc-ir-ghs-onboarding{flex:0 0 calc(60% - var(--wa-space-m) / 2);min-width:0}.ir-ghs-onboarding__selection-bucket.sc-ir-ghs-onboarding{flex:0 0 calc(40% - var(--wa-space-m) / 2);min-width:0}}.ir-ghs-onboarding__dialog-body.sc-ir-ghs-onboarding{padding:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.ir-ghs-onboarding__dialog-footer.sc-ir-ghs-onboarding{display:flex;gap:var(--wa-space-s);justify-content:flex-end}`;

const IrGhsOnboarding = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    ticket;
    baseurl;
    language = 'en';
    properties = [];
    countries = [];
    selectedCountryId = null;
    selectedProperties = [];
    isPageLoading = false;
    isDataLoading = false;
    isGenerating = false;
    isActivating = false;
    propertyToActivate = null;
    ghsService = new GHSService();
    bookingService = new booking_store.BookingService();
    apiClientService = new ApiClient.ApiClient();
    removeAllModal;
    activateModal;
    ticketChanged(newValue) {
        if (newValue) {
            this.apiClientService.setApiClient(newValue);
            this.init();
        }
    }
    async componentWillLoad() {
        if (this.baseurl) {
            this.apiClientService.setBaseUrl(this.baseurl);
        }
        if (this.ticket) {
            this.apiClientService.setApiClient(this.ticket);
            await this.init();
        }
    }
    async init() {
        this.isPageLoading = true;
        try {
            const [allCountries, allProperties] = await Promise.all([
                this.bookingService.getCountries('EN'),
                this.ghsService.Get_GHS_Candidate_Properties({ COUNTRY_ID: null }),
                locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.ghsOnboarding }),
            ]);
            const validCountryIds = new Set(allProperties.map(p => p.COUNTRY_ID));
            this.countries = allCountries.filter(c => validCountryIds.has(c.id)).sort((a, b) => a.name.localeCompare(b.name));
            this.properties = allProperties;
        }
        catch (error) {
            this.showToast('error', t.t('Lcz_InitializationError', { fallback: 'Initialization Error' }), error.message || t.t('Lcz_FailedToLoadProperties', { fallback: 'Failed to load properties' }));
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async fetchProperties() {
        this.isDataLoading = true;
        this.properties = [];
        try {
            const props = await this.ghsService.Get_GHS_Candidate_Properties({
                COUNTRY_ID: this.selectedCountryId,
            });
            this.properties = props;
        }
        catch (error) {
            this.showToast('error', t.t('Lcz_Error', { fallback: 'Error' }), error.message || t.t('Lcz_FailedToFetchProperties', { fallback: 'Failed to fetch properties' }));
        }
        finally {
            this.isDataLoading = false;
        }
    }
    handleToggleAll(selectAll) {
        if (selectAll) {
            const currentSelectedIds = this.selectedProperties.map(p => p.AC_ID);
            const newSelections = this.properties.filter(p => !currentSelectedIds.includes(p.AC_ID));
            this.selectedProperties = [...this.selectedProperties, ...newSelections];
        }
        else {
            const candidateIds = this.properties.map(p => p.AC_ID);
            this.selectedProperties = this.selectedProperties.filter(p => !candidateIds.includes(p.AC_ID));
        }
    }
    togglePropertySelection(property) {
        const index = this.selectedProperties.findIndex(p => p.AC_ID === property.AC_ID);
        if (index !== -1) {
            this.selectedProperties = this.selectedProperties.filter(p => p.AC_ID !== property.AC_ID);
        }
        else {
            this.selectedProperties = [...this.selectedProperties, property];
        }
    }
    removePropertySelection(acId) {
        this.selectedProperties = this.selectedProperties.filter(p => p.AC_ID !== acId);
    }
    handleRemoveAll() {
        if (this.selectedProperties.length === 0)
            return;
        this.removeAllModal.openModal();
    }
    handleConfirmRemoveAll() {
        this.selectedProperties = [];
        this.removeAllModal.closeModal();
    }
    handleActivateProperty(property) {
        this.propertyToActivate = property;
        this.activateModal.openModal();
    }
    async handleConfirmActivate() {
        if (!this.propertyToActivate)
            return;
        this.isActivating = true;
        try {
            await this.ghsService.Update_GHS_Enablement({
                AC_ID: this.propertyToActivate.AC_ID,
                IS_ENABLED: true,
            });
            this.showToast('success', t.t('Lcz_Success', { fallback: 'Success' }), t.t('Lcz_GhsActivatedSuccessfully', { fallback: `${this.propertyToActivate.NAME} GHS has been activated.`, params: [this.propertyToActivate.NAME] }));
            const activatedId = this.propertyToActivate.AC_ID;
            this.properties = this.properties.filter(p => p.AC_ID !== activatedId);
            this.selectedProperties = this.selectedProperties.filter(p => p.AC_ID !== activatedId);
        }
        catch (error) {
            this.showToast('error', t.t('Lcz_ActivationError', { fallback: 'Activation Error' }), error.message || t.t('Lcz_FailedToActivateProperty', { fallback: 'Failed to activate property' }));
        }
        finally {
            this.isActivating = false;
            this.propertyToActivate = null;
            this.activateModal.closeModal();
        }
    }
    async handleGenerateRequest() {
        if (this.selectedProperties.length === 0) {
            this.showToast('error', t.t('Lcz_SelectionRequired', { fallback: 'Selection Required' }), t.t('Lcz_PleaseSelectAtLeastOneProperty', { fallback: 'Please select at least one property.' }));
            return;
        }
        this.isGenerating = true;
        try {
            const downloadUrl = await this.ghsService.Generate_GHS_Listing_For_Selection({
                Selected_AC_IDs: this.selectedProperties.map(p => p.AC_ID),
            });
            if (downloadUrl) {
                // Create a clean axios instance to bypass global interceptors (avoiding network errors)
                const cleanAxios = axios.axios.create();
                const response = await cleanAxios.get(downloadUrl, { responseType: 'blob' });
                // Create a local blob URL
                const blob = new Blob([response.data], { type: 'application/xml' });
                const localUrl = window.URL.createObjectURL(blob);
                // Trigger download of the local blob
                const a = document.createElement('a');
                a.href = localUrl;
                const filename = downloadUrl.split('/').pop() || 'ghs_onboarding.xml';
                a.setAttribute('download', filename);
                document.body.appendChild(a);
                a.click();
                // Clean up
                document.body.removeChild(a);
                window.URL.revokeObjectURL(localUrl);
                this.selectedProperties = [];
                await this.fetchProperties();
                this.showToast('success', t.t('Lcz_Success', { fallback: 'Success' }), t.t('Lcz_GhsOnboardingRequestDownloaded', { fallback: 'GHS onboarding request downloaded.' }));
            }
        }
        catch (error) {
            this.showToast('error', t.t('Lcz_GenerationError', { fallback: 'Generation Error' }), error.message || t.t('Lcz_ErrorOccurredGeneratingRequest', { fallback: 'An error occurred while generating the request.' }));
        }
        finally {
            this.isGenerating = false;
        }
    }
    showToast(type, title, description) {
        utils.showToast({
            type,
            title,
            description,
            position: 'top-right',
        });
    }
    render() {
        if (this.isPageLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("ir-dialog", { ref: el => (this.activateModal = el), label: t.t('Lcz_ActivationConfirmation', { fallback: 'Activation Confirmation' }), onIrDialogHide: () => {
                this.propertyToActivate = null;
                this.activateModal.closeModal();
            } }, index.h("div", { class: "ir-ghs-onboarding__dialog-body" }, index.h("p", { class: "m-0 text-center" }, t.t('Lcz_AreYouSureActivateGhs', {
            fallback: `Are you sure you want to activate GHS for ${this.propertyToActivate?.NAME}?`,
            params: [this.propertyToActivate?.NAME],
        })), index.h("p", { class: "small text-muted mt-2 mb-0" }, t.t('Lcz_EnableRealTimeSyncWithGoogle', { fallback: 'This will enable real-time synchronization with Google.' }))), index.h("div", { slot: "footer", class: "ir-ghs-onboarding__dialog-footer" }, index.h("ir-custom-button", { type: "button", variant: "neutral", appearance: "filled", size: "m", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.propertyToActivate = null;
                this.activateModal.closeModal();
            } }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { type: "button", variant: "success", appearance: "accent", size: "m", loading: this.isActivating, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.handleConfirmActivate();
            } }, t.t('Lcz_Activate', { fallback: 'Activate' })))), index.h("ir-dialog", { ref: el => (this.removeAllModal = el), label: t.t('Lcz_Confirmation', { fallback: 'Confirmation' }), onIrDialogHide: () => this.removeAllModal.closeModal() }, index.h("div", { class: "ir-ghs-onboarding__dialog-body" }, index.h("p", { class: "m-0 text-center" }, t.t('Lcz_AreYouSureRemoveAllSelectedProperties', { fallback: 'Are you sure you want to remove all selected properties from the list?' }))), index.h("div", { slot: "footer", class: "ir-ghs-onboarding__dialog-footer" }, index.h("ir-custom-button", { type: "button", variant: "neutral", appearance: "filled", size: "m", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.removeAllModal.closeModal();
            } }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { type: "button", variant: "danger", appearance: "accent", size: "m", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.handleConfirmRemoveAll();
            } }, t.t('Lcz_Confirm', { fallback: 'Confirm' })))), index.h("section", { class: "ir-ghs-onboarding__container" }, index.h("div", { class: "ir-ghs-onboarding__header" }, index.h("h3", { class: "ir-ghs-onboarding__title" }, t.t('Lcz_GoogleHotelsRequest', { fallback: 'Google hotels request' }))), index.h("div", { class: "ir-ghs-onboarding__content" }, index.h("div", { class: "ir-ghs-onboarding__main-row" }, index.h("ir-ghs-candidate-table", { class: "ir-ghs-onboarding__candidate-table", properties: this.properties, countries: this.countries, selectedCountryId: this.selectedCountryId, selectedProperties: this.selectedProperties, propertyToActivate: this.propertyToActivate, isLoading: this.isDataLoading, baseUrl: this.baseurl, onToggleSelection: e => this.togglePropertySelection(e.detail), onToggleAll: e => this.handleToggleAll(e.detail), onActivateProperty: e => this.handleActivateProperty(e.detail), onCountryChange: e => {
                this.selectedCountryId = e.detail;
                this.fetchProperties();
            } }), index.h("ir-ghs-selection-bucket", { class: "ir-ghs-onboarding__selection-bucket", selectedProperties: this.selectedProperties, isGenerating: this.isGenerating, onGenerateRequest: () => this.handleGenerateRequest(), onRemoveAll: () => this.handleRemoveAll(), onRemoveProperty: e => this.removePropertySelection(e.detail) }))))));
    }
    static get watchers() { return {
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrGhsOnboarding.style = irGhsOnboardingCss();

const irHkTasksCss = () => `.sc-ir-hk-tasks-h{display:block;box-sizing:border-box}.sc-ir-hk-tasks-h *.sc-ir-hk-tasks{box-sizing:border-box}.tasks-view.sc-ir-hk-tasks{display:flex;flex-direction:column;gap:1rem;min-width:0}.tasks-table-wrapper.sc-ir-hk-tasks{display:flex;flex-direction:column;flex:1;min-width:0;width:100%}@media (min-width: 1024px){.tasks-view.sc-ir-hk-tasks{flex-direction:row;align-items:flex-start}.tasks-table-wrapper.sc-ir-hk-tasks{flex:3;min-width:0}}`;

const IrHkTasks = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clearSelectedHkTasks = index.createEvent(this, "clearSelectedHkTasks");
    }
    get el() { return index.getElement(this); }
    language = '';
    ticket = '';
    propertyid;
    p;
    baseUrl;
    isLoading = false;
    isCleaningLoading = false;
    selectedDuration = '';
    selectedHouseKeeper = '0';
    selectedRoom = null;
    archiveOpened = false;
    property_id;
    isSidebarOpen;
    isApplyFiltersLoading;
    filters;
    modalCauses;
    clearSelectedHkTasks;
    hkNameCache = {};
    roomService = new room_service.RoomService();
    houseKeepingService = new index$4.HouseKeepingService();
    ApiClient = new ApiClient.ApiClient();
    table_sorting = new Map();
    modal;
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.hkTasks, () => this.init());
    componentWillLoad() {
        if (this.baseUrl) {
            this.ApiClient.setBaseUrl(this.baseUrl);
        }
        if (this.ticket !== '') {
            this.ApiClient.setApiClient(this.ticket);
            this.init();
        }
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.ApiClient.setApiClient(this.ticket);
        this.init();
    }
    handleCloseSidebar(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.isSidebarOpen = false;
    }
    handleSortingChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { field, direction } = e.detail;
        console.log(e.detail);
        if (field === 'date') {
            return;
        }
        this.table_sorting.set(field, direction);
    }
    handleSkipSelectedTask(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.modalCauses = { task: e.detail, cause: 'skip' };
        this.modal?.openModal();
    }
    async init() {
        try {
            this.isLoading = true;
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.hkTasks });
            hkTasks_store.setLoading(true);
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            // let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.houseKeepingService.getExposedHKSetup({ property_id: this.property_id, language: locale_controller.LocaleController.language }), localeReady];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            await Promise.all(requests);
            const tasksResult = await this.houseKeepingService.getHkTasks({
                property_id: this.property_id,
                from_date: moment.hooks().format('YYYY-MM-DD'),
                to_date: moment.hooks().format('YYYY-MM-DD'),
                housekeepers: [],
                cleaning_frequency: (calendarData.calendar_data.cleaning_frequency ?? index$4.housekeeping_store?.hk_criteria?.cleaning_frequencies[0])?.code,
                dusty_window: index$4.housekeeping_store?.hk_criteria?.dusty_periods[0]?.code,
                highlight_window: index$4.housekeeping_store?.hk_criteria?.highlight_checkin_options[0]?.code,
                language: locale_controller.LocaleController.language,
            });
            // updateTaskList();
            if (tasksResult?.tasks) {
                this.updateTasks(tasksResult.tasks);
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
            hkTasks_store.setLoading(false);
        }
    }
    buildHousekeeperNameCache() {
        this.hkNameCache = {};
        index$4.housekeeping_store.hk_criteria?.housekeepers?.forEach(hk => {
            if (hk.id != null && hk.name != null) {
                this.hkNameCache[hk.id] = hk.name;
            }
        });
    }
    groupTasks(tasks) {
        const groups = new Map();
        for (const task of tasks) {
            const key = `${task.date}__${task.unit.id}`;
            if (!groups.has(key)) {
                groups.set(key, []);
            }
            groups.get(key).push(task);
        }
        const result = [];
        for (const group of groups.values()) {
            const cln = group.find(t => t.task_type?.code === 'CLN');
            const t1 = group.find(t => t.task_type?.code === 'T1');
            const t2 = group.find(t => t.task_type?.code === 'T2');
            if (cln) {
                const extra = [];
                if (t1)
                    extra.push(t1);
                if (t2)
                    extra.push(t2);
                result.push({ ...cln, extra_task: extra.length > 0 ? extra : null });
            }
            else if (t1) {
                result.push({ ...t1, extra_task: t2 ? [t2] : null });
            }
            else if (t2) {
                result.push({ ...t2, extra_task: null });
            }
        }
        return result;
    }
    updateTasks(tasks) {
        this.buildHousekeeperNameCache();
        const mapped = tasks.map(t => ({
            ...t,
            id: v4.v4(),
            housekeeper: (() => {
                const name = this.hkNameCache[t.hkm_id];
                if (name) {
                    return name;
                }
                const hkName = index$4.housekeeping_store.hk_criteria?.housekeepers?.find(hk => hk.id === t.hkm_id)?.name;
                this.hkNameCache[t.hkm_id] = hkName;
                return hkName;
            })(),
        }));
        console.log(this.groupTasks(mapped));
        hkTasks_store.updateTasks([...this.groupTasks(mapped)]);
    }
    async handleHeaderButtonPress(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { name } = e.detail;
        switch (name) {
            case 'cleaned':
            case 'clean-inspect':
                this.modal?.openModal();
                this.modalCauses = {
                    task: null,
                    cause: 'clean',
                    status: name === 'clean-inspect' ? '004' : '001',
                };
                break;
            case 'export':
                const sortingArray = Array.from(this.table_sorting.entries()).map(([key, value]) => ({
                    key,
                    value,
                }));
                console.log(sortingArray);
                const { url } = await this.fetchTasksWithFilters(true);
                utils.downloadFile(url);
                break;
            case 'archive':
                this.isSidebarOpen = true;
                break;
        }
    }
    handleSelectedTaskCleaningEvent(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.modalCauses = { ...e.detail, cause: 'clean' };
        this.modal?.openModal();
    }
    async handleModalConfirmation() {
        try {
            if (hkTasks_store.hkTasksStore.selectedTasks.length === 0) {
                return;
            }
            this.isCleaningLoading = true;
            if (this.modalCauses?.cause === 'skip') {
                const { booking_nbr, date, unit, extra_task } = this.modalCauses.task;
                await this.houseKeepingService.skipHKTasks({
                    property_id: calendarData.calendar_data.property.id,
                    tasks_to_skip: [{ unit_id: unit.id, booking_nbr, date }, ...(extra_task ?? []).map(t => ({ unit_id: t.unit.id, booking_nbr: t.booking_nbr, date: t.date }))],
                });
            }
            else {
                await this.houseKeepingService.executeHKAction({
                    actions: hkTasks_store.hkTasksStore.selectedTasks
                        .flatMap(t => [t, ...(t.extra_task ?? [])])
                        .map(task => ({
                        description: t.t('Lcz_Cleaned', { fallback: 'Cleaned' }),
                        hkm_id: task.hkm_id === 0 ? null : task.hkm_id,
                        unit_id: task.unit.id,
                        booking_nbr: task.booking_nbr,
                        status: this.modalCauses?.status ?? '001',
                        hk_task_type_code: task.task_type.code,
                    })),
                });
            }
            await this.fetchTasksWithFilters();
        }
        finally {
            hkTasks_store.clearSelectedTasks();
            if (this.modalCauses) {
                this.modalCauses = null;
            }
            this.isCleaningLoading = false;
            // this.clearSelectedTasks.emit();
            this.modal.closeModal();
        }
    }
    async applyFilters(e) {
        try {
            this.isApplyFiltersLoading = true;
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.filters = { ...e.detail };
            await this.fetchTasksWithFilters();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isApplyFiltersLoading = false;
        }
    }
    async fetchTasksWithFilters(export_to_excel = false) {
        const { cleaning_periods, housekeepers, cleaning_frequencies, dusty_units, highlight_check_ins } = this.filters ?? {};
        const { tasks, url } = await this.houseKeepingService.getHkTasks({
            housekeepers,
            cleaning_frequency: cleaning_frequencies?.code,
            dusty_window: dusty_units?.code,
            highlight_window: highlight_check_ins?.code,
            property_id: this.property_id,
            from_date: moment.hooks().format('YYYY-MM-DD'),
            to_date: cleaning_periods?.code || moment.hooks().format('YYYY-MM-DD'),
            is_export_to_excel: export_to_excel,
            language: locale_controller.LocaleController.language,
        });
        console.log(tasks);
        if (tasks) {
            this.updateTasks(tasks);
        }
        return { tasks, url };
    }
    render() {
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, { "data-testid": "hk_tasks_base" }, index.h("ir-page", { label: t.t('Lcz_DailyHousekeepingSchedule', { fallback: 'Daily Housekeeping Schedule' }) }, index.h("div", { class: "tasks-view" }, index.h("ir-tasks-filters", { isLoading: this.isApplyFiltersLoading, onApplyFilters: e => {
                this.applyFilters(e);
            } }), index.h("div", { class: "tasks-table-wrapper" }, index.h("ir-tasks-table", { onRowSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                hkTasks_store.updateSelectedTasks(e.detail);
            } })))), index.h("ir-dialog", { ref: el => (this.modal = el), label: t.t('Lcz_Confirmation', { fallback: 'Confirmation' }), lightDismiss: false }, index.h("span", null, this.modalCauses
            ? this.modalCauses?.cause === 'clean'
                ? this.modalCauses.task
                    ? t.t('Lcz_UpdateUnitToCleanMessage', {
                        params: [this.modalCauses?.task?.unit?.name],
                        fallback: `Update ${this.modalCauses?.task?.unit?.name} to Clean`,
                    })
                    : t.t('Lcz_UpdateSelectedUnitsToClean', { fallback: 'Update selected unit(s) to Clean' })
                : t.t('Lcz_SkipCleaningRescheduleTomorrow', { fallback: 'Skip cleaning and reschedule for tomorrow.' })
            : t.t('Lcz_UpdateSelectedUnitsToClean', { fallback: 'Update selected unit(s) to Clean' })), index.h("div", { slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => {
                if (this.modalCauses) {
                    hkTasks_store.clearSelectedTasks();
                    this.modalCauses = null;
                }
                this.modal.closeModal();
            } }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { size: "m", appearance: "accent", variant: "brand", loading: this.isCleaningLoading, onClickHandler: this.handleModalConfirmation.bind(this) }, t.t('Lcz_Confirm', { fallback: 'Confirm' })))), index.h("ir-hk-archive-drawer", { open: this.isSidebarOpen, ticket: this.ApiClient.getToken(), propertyId: this.property_id, onDrawerClosed: () => (this.isSidebarOpen = false) })));
    }
    static get watchers() { return {
        "language": [{
                "languageChanged": 0
            }],
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrHkTasks.style = irHkTasksCss();

const irHousekeepingCss = () => `.sc-ir-housekeeping-h{display:block}`;

const IrHousekeeping = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    language = '';
    ticket = '';
    propertyid;
    p;
    baseUrl;
    isLoading = false;
    frequencies = [];
    roomService = new room_service.RoomService();
    houseKeepingService = new index$4.HouseKeepingService();
    setupService = new index$1.SetupService();
    ApiClient = new ApiClient.ApiClient();
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.housekeeping, () => this.initializeApp());
    componentWillLoad() {
        if (this.baseUrl) {
            this.ApiClient.setBaseUrl(this.baseUrl);
        }
        if (this.ticket !== '') {
            this.ApiClient.setApiClient(this.ticket);
            this.initializeApp();
        }
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.houseKeepingService.getExposedHKSetup({ property_id: this.propertyid });
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.ApiClient.setApiClient(this.ticket);
        this.initializeApp();
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.housekeeping });
            let propertyId = this.propertyid;
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                    include_sales_rate_plans: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            index$4.updateHKStore('default_properties', { ApiClient: this.ticket, property_id: propertyId, language: locale_controller.LocaleController.language });
            const [frequencies] = await Promise.all([
                this.setupService.getSetupEntriesByTableName('_HK_FREQUENCY'),
                localeReady,
                this.propertyid &&
                    this.roomService.getExposedProperty({
                        id: propertyId,
                        language: locale_controller.LocaleController.language,
                        is_backend: true,
                        include_sales_rate_plans: true,
                    }),
                calendarData.calendar_data.housekeeping_enabled && this.houseKeepingService.getExposedHKSetup({ property_id: propertyId }),
            ]);
            this.frequencies = frequencies;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h("ir-page", { label: t.t('Lcz_HouseKeepingAndCheckInSetup', { fallback: 'Housekeeping & Check-In Setup' }) }, index.h("ir-hk-operations-card", { frequencies: this.frequencies }), calendarData.calendar_data.housekeeping_enabled && index.h("ir-hk-team", null)));
    }
    static get watchers() { return {
        "language": [{
                "languageChanged": 0
            }],
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrHousekeeping.style = irHousekeepingCss();

const irLocaleSwitcherCss = () => `.sc-ir-locale-switcher-h{position:fixed;z-index:2147483000;font-size:0.75rem;line-height:1.4}.ls-host--bottom-end.sc-ir-locale-switcher-h{inset-block-end:1rem;inset-inline-end:1rem}.ls-host--bottom-start.sc-ir-locale-switcher-h{inset-block-end:1rem;inset-inline-start:1rem}.ls-host--top-end.sc-ir-locale-switcher-h{inset-block-start:1rem;inset-inline-end:1rem}.ls-host--top-start.sc-ir-locale-switcher-h{inset-block-start:1rem;inset-inline-start:1rem}.ls-fab.sc-ir-locale-switcher{display:flex;align-items:center;gap:0.375rem;padding:0.5rem 0.75rem;border:1px solid var(--wa-color-neutral-border-normal, #d4d4d8);border-radius:999px;background:var(--wa-color-surface-raised, #fff);color:inherit;cursor:pointer;box-shadow:0 2px 12px rgb(0 0 0 / 18%)}.ls-fab__label.sc-ir-locale-switcher{font-weight:600;letter-spacing:0.04em}.ls-panel.sc-ir-locale-switcher{display:flex;flex-direction:column;gap:0.625rem;inline-size:19rem;max-inline-size:calc(100vw - 2rem);max-block-size:calc(100vh - 2rem);overflow-y:auto;padding:0.75rem;border:1px solid var(--wa-color-neutral-border-normal, #d4d4d8);border-radius:0.625rem;background:var(--wa-color-surface-raised, #fff);box-shadow:0 8px 32px rgb(0 0 0 / 24%)}.ls-panel__header.sc-ir-locale-switcher{display:flex;align-items:center;justify-content:space-between}.ls-panel__title.sc-ir-locale-switcher{font-weight:700;text-transform:uppercase;letter-spacing:0.06em;opacity:0.7}.ls-panel__close.sc-ir-locale-switcher,.ls-panel__reset.sc-ir-locale-switcher{border:none;background:none;color:inherit;cursor:pointer;padding:0.125rem 0.25rem}.ls-panel__reset.sc-ir-locale-switcher{text-decoration:underline;opacity:0.75;white-space:nowrap}.ls-preview.sc-ir-locale-switcher{display:flex;flex-direction:column;gap:0.25rem;padding:0.5rem;border-radius:0.375rem;background:var(--wa-color-neutral-fill-quiet, rgb(0 0 0 / 5%))}.ls-preview__title.sc-ir-locale-switcher{font-weight:600;opacity:0.7;margin-block-end:0.125rem}.ls-preview__row.sc-ir-locale-switcher{display:flex;align-items:baseline;justify-content:space-between;gap:0.5rem}.ls-preview__row--muted.sc-ir-locale-switcher{opacity:0.7}.ls-preview__format.sc-ir-locale-switcher{flex:none;font-family:ui-monospace, SFMono-Regular, Menlo, monospace;font-size:0.6875rem;opacity:0.65}.ls-preview__value.sc-ir-locale-switcher{text-align:end;font-weight:600;unicode-bidi:isolate}.ls-preview__value.sc-ir-locale-switcher em.sc-ir-locale-switcher{font-weight:400;opacity:0.65}.ls-panel__footer.sc-ir-locale-switcher{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.375rem 0.5rem}.ls-panel__resolved.sc-ir-locale-switcher{font-family:ui-monospace, SFMono-Regular, Menlo, monospace;font-size:0.6875rem;opacity:0.6;unicode-bidi:isolate}`;

const STORAGE_KEY = 'ir-locale-switcher';
/**
 * The page's own `<html lang>`, captured before the switcher or
 * `LocaleController` overwrite it. Used as the fallback when nothing is saved.
 */
const INITIAL_HTML_LANG = typeof document !== 'undefined' ? document.documentElement.lang : '';
/**
 * The languages the app ships locale strings and moment locale data for,
 * plus every Arabic regional variant.
 */
const LANGUAGES = [
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية — Arabic (MSA)' },
    { code: 'ar-sa', label: 'العربية — Saudi Arabia' },
    { code: 'ar-ps', label: 'العربية — Palestine' },
    { code: 'ar-kw', label: 'العربية — Kuwait' },
    { code: 'ar-ly', label: 'العربية — Libya' },
    { code: 'ar-ma', label: 'العربية — Morocco' },
    { code: 'ar-dz', label: 'العربية — Algeria' },
    { code: 'ar-tn', label: 'العربية — Tunisia' },
    { code: 'de', label: 'Deutsch — German' },
    { code: 'el', label: 'Ελληνικά — Greek' },
    { code: 'fr', label: 'Français — French' },
    { code: 'he', label: 'עברית — Hebrew' },
    { code: 'pl', label: 'Polski — Polish' },
    { code: 'ru', label: 'Русский — Russian' },
    { code: 'ua', label: 'Українська — Ukrainian' },
];
/**
 * Digit scripts, with a sample so the effect is visible before selecting.
 */
const NUMBERING_SYSTEMS = [
    { value: 'latn', label: 'Latin — 0123456789' },
    { value: 'arab', label: 'Arabic-Indic — ٠١٢٣٤٥٦٧٨٩' },
    {
        value: 'arabext',
        label: 'Eastern Arabic-Indic — ۰۱۲۳۴۵۶۷۸۹',
    },
    {
        value: 'auto',
        label: "Auto — the locale's own digits",
    },
];
/**
 * Formats shown in the live preview.
 */
const PREVIEW_FORMATS = ['ddd, DD MMM YYYY', 'MMM DD, YYYY', 'MMMM YYYY', 'ddd D', 'DD/MM ddd', 'DD-MMM-YYYY'];
const IrLocaleSwitcher = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    /**
     * Corner to pin the panel to.
     */
    placement = 'bottom-end';
    /**
     * Start collapsed to a single button when no saved state exists.
     */
    collapsed = true;
    /**
     * Sample date for the preview, YYYY-MM-DD.
     * Defaults to today.
     */
    sampleDate;
    open;
    direction = 'auto';
    /**
     * Read persisted switcher state.
     */
    loadSettings() {
        if (typeof window === 'undefined') {
            return null;
        }
        try {
            const raw = window.localStorage.getItem(STORAGE_KEY);
            if (!raw) {
                return null;
            }
            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== 'object') {
                return null;
            }
            return parsed;
        }
        catch (error) {
            console.warn(`[ir-locale-switcher] Failed to read "${STORAGE_KEY}" from localStorage.`, error);
            return null;
        }
    }
    /**
     * Save the current switcher state.
     */
    saveSettings() {
        if (typeof window === 'undefined') {
            return;
        }
        try {
            const state = {
                language: locales_store.locales.language ?? 'en',
                calendar: irDate.calendarPreference.override ?? 'auto',
                numberingSystem: irDate.calendarPreference.numberingSystem,
                direction: this.direction,
                open: this.open,
            };
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        }
        catch (error) {
            console.warn(`[ir-locale-switcher] Failed to save "${STORAGE_KEY}" to localStorage.`, error);
        }
    }
    /**
     * Make sure a stored language is one that this switcher supports.
     */
    isValidLanguage(value) {
        return typeof value === 'string' && LANGUAGES.some(language => language.code === value);
    }
    /**
     * Map a raw language value onto a supported code: case-insensitive, falling
     * back to the base subtag (`en-US` → `en`). Returns null when unsupported.
     */
    normalizeLanguage(value) {
        if (typeof value !== 'string') {
            return null;
        }
        const normalized = value.trim().toLowerCase();
        /*
         * Derived before the check: `isValidLanguage` is a type guard, so its false
         * branch narrows `normalized` to `never`.
         */
        const base = normalized.split('-')[0];
        if (this.isValidLanguage(normalized)) {
            return normalized;
        }
        return this.isValidLanguage(base) ? base : null;
    }
    /**
     * Validate persisted calendar values before applying them.
     */
    isValidCalendar(value) {
        return value === 'auto' || value === 'gregory' || value === 'islamic-umalqura';
    }
    /**
     * Validate persisted numbering-system values.
     */
    isValidNumberingSystem(value) {
        return NUMBERING_SYSTEMS.some(system => system.value === value);
    }
    /**
     * Validate persisted direction values.
     */
    isValidDirection(value) {
        return value === 'auto' || value === 'ltr' || value === 'rtl';
    }
    componentWillLoad() {
        const stored = this.loadSettings();
        /*
         * Panel state.
         *
         * Saved state wins. If there is no saved state, fall back to the
         * component's `collapsed` prop.
         */
        if (typeof stored?.open === 'boolean') {
            this.open = stored.open;
        }
        else {
            this.open = !this.collapsed;
        }
        /*
         * Language.
         *
         * Priority:
         * 1. localStorage
         * 2. <html lang="...">
         * 3. English
         */
        const language = this.normalizeLanguage(stored?.language) ??
            this.normalizeLanguage(INITIAL_HTML_LANG) ??
            this.normalizeLanguage(document.documentElement.lang) ??
            'en';
        /*
         * The switcher mounts inside a screen root that has already started
         * `LocaleController.load` with its host `language` prop. Only telling the
         * controller makes our choice stick — otherwise that fetch's publish
         * overwrites the store and <html lang> with the host language.
         */
        if (language !== locale_controller.LocaleController.language) {
            locale_controller.LocaleController.setLanguage(language).catch(error => console.error('Failed to restore language', error));
        }
        else {
            locales_store.locales.language = language;
            document.documentElement.lang = language;
        }
        this.broadcastLanguage(language);
        /*
         * Direction.
         *
         * Saved direction wins. Without saved state, adopt an explicit
         * <html dir>, otherwise use "auto".
         */
        if (this.isValidDirection(stored?.direction)) {
            this.direction = stored.direction;
        }
        else {
            const htmlDirection = document.documentElement.getAttribute('dir');
            this.direction = htmlDirection === 'rtl' || htmlDirection === 'ltr' ? htmlDirection : 'auto';
        }
        /*
         * Calendar.
         */
        if (this.isValidCalendar(stored?.calendar)) {
            irDate.CalendarPreferenceController.setOverride(stored.calendar === 'auto' ? null : stored.calendar);
        }
        /*
         * Numbering system.
         */
        if (this.isValidNumberingSystem(stored?.numberingSystem)) {
            irDate.CalendarPreferenceController.setNumberingSystem(stored.numberingSystem);
        }
        /*
         * Apply direction only after language has been restored because
         * "auto" depends on the selected language.
         */
        this.applyDirection(this.direction, language, false);
        /*
         * Save once so older/incomplete localStorage data gets normalized.
         */
        this.saveSettings();
    }
    /**
     * Switches the app's language, then pushes it onto every mounted component
     * exposing a `language` prop so date pickers and `ir-hk-staff-tasks` — which
     * resolve their own locale rather than reading the store — follow along.
     *
     * `persist` doubles as "this was a user action": on the initial restore we
     * only publish the value, because page roots load their own tables on mount
     * and no ticket is set yet.
     */
    applyLanguage(language, persist = true) {
        if (!this.isValidLanguage(language)) {
            return;
        }
        if (persist) {
            /*
             * Re-fetches every table loaded so far, which is what actually swaps the
             * Lcz_* strings. Fire-and-forget: a failure here must not break the panel.
             */
            locale_controller.LocaleController.setLanguage(language).catch(error => console.error('Failed to switch language', error));
        }
        else {
            locales_store.locales.language = language;
            document.documentElement.lang = language;
        }
        /*
         * Re-resolve direction because "auto" depends on language.
         */
        this.applyDirection(this.direction, language, false);
        this.broadcastLanguage(language);
        if (persist) {
            this.saveSettings();
        }
    }
    /**
     * Pushes `language` onto every mounted component exposing a `language` prop.
     */
    broadcastLanguage(language) {
        document.querySelectorAll('*').forEach(node => {
            if (node.tagName.includes('-') && node !== this.el && 'language' in node && node.language !== language) {
                node.language = language;
            }
        });
    }
    /**
     * Apply calendar preference and persist it.
     */
    applyCalendar(value, persist = true) {
        if (!this.isValidCalendar(value)) {
            return;
        }
        /*
         * null clears the explicit override and returns to device auto-detect.
         */
        irDate.CalendarPreferenceController.setOverride(value === 'auto' ? null : value);
        if (persist) {
            this.saveSettings();
        }
    }
    /**
     * Apply numbering-system preference and persist it.
     */
    applyNumberingSystem(value, persist = true) {
        if (!this.isValidNumberingSystem(value)) {
            return;
        }
        irDate.CalendarPreferenceController.setNumberingSystem(value);
        if (persist) {
            this.saveSettings();
        }
    }
    /**
     * Apply text direction.
     *
     * `auto` resolves according to the current language.
     */
    applyDirection(mode, language = locales_store.locales.language ?? 'en', persist = true) {
        if (!this.isValidDirection(mode)) {
            return;
        }
        this.direction = mode;
        const resolved = mode === 'auto' ? (direction.isRtlLanguage(language) ? 'rtl' : 'ltr') : mode;
        document.documentElement.setAttribute('dir', resolved);
        locales_store.locales.direction = resolved;
        if (persist) {
            this.saveSettings();
        }
    }
    /**
     * Open/collapse panel and persist that UI state too.
     */
    setOpen(open) {
        this.open = open;
        this.saveSettings();
    }
    /**
     * Remove every locale-switcher preference and restore defaults.
     */
    resetSettings() {
        if (typeof window !== 'undefined') {
            try {
                window.localStorage.removeItem(STORAGE_KEY);
            }
            catch (error) {
                console.warn(`[ir-locale-switcher] Failed to clear "${STORAGE_KEY}".`, error);
            }
        }
        const language = this.normalizeLanguage(INITIAL_HTML_LANG) ?? 'en';
        locale_controller.LocaleController.setLanguage(language).catch(error => console.error('Failed to reset language', error));
        this.broadcastLanguage(language);
        irDate.CalendarPreferenceController.setOverride(null);
        irDate.CalendarPreferenceController.setNumberingSystem('auto');
        this.direction = 'auto';
        const resolvedDirection = direction.isRtlLanguage(language) ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('dir', resolvedDirection);
        locales_store.locales.direction = resolvedDirection;
        /*
         * Keep the component's original prop behavior after reset.
         */
        this.open = !this.collapsed;
    }
    get sample() {
        return this.sampleDate ?? irDate.toApiDate(new Date());
    }
    renderPreview() {
        return (index.h("div", { class: "ls-preview" }, index.h("div", { class: "ls-preview__title" }, "Preview \u2014 ", this.sample), PREVIEW_FORMATS.map(format => (index.h("div", { class: "ls-preview__row", key: format }, index.h("code", { class: "ls-preview__format" }, format), index.h("span", { class: "ls-preview__value" }, irDate.formatDate(this.sample, format))))), index.h("div", { class: "ls-preview__row" }, index.h("code", { class: "ls-preview__format" }, "price"), index.h("span", { class: "ls-preview__value" }, number.formatAmount('$', 1234.5))), index.h("div", { class: "ls-preview__row" }, index.h("code", { class: "ls-preview__format" }, "count \u00B7 percent"), index.h("span", { class: "ls-preview__value" }, number.formatCount(3), " \u00B7 ", number.formatPercent(87))), index.h("div", { class: "ls-preview__row ls-preview__row--muted" }, index.h("code", { class: "ls-preview__format" }, "weekdays"), index.h("span", { class: "ls-preview__value" }, irDate.getWeekdayLabels().join(' '))), index.h("div", { class: "ls-preview__row ls-preview__row--muted" }, index.h("code", { class: "ls-preview__format" }, "toApiDate"), index.h("span", { class: "ls-preview__value" }, irDate.toApiDate(this.sample), " ", index.h("em", null, "\u00B7 always Gregorian"))), index.h("div", { class: "ls-preview__row ls-preview__row--muted" }, index.h("code", { class: "ls-preview__format" }, "week starts"), index.h("span", { class: "ls-preview__value" }, irDate.getWeekdayLabels()[irDate.getFirstDayOfWeek()], " \u00B7 grid stays Sunday-first"))));
    }
    render() {
        const language = locales_store.locales.language ?? 'en';
        const calendar = irDate.calendarPreference.override ?? 'auto';
        return (index.h(index.Host, { key: '8b64413079dd804f53a9663ee2a199059cd6a7aa', class: `ls-host ls-host--${this.placement}` }, !this.open && (index.h("button", { key: 'd5067a361c6e38b4cc8d83b2318170db6e297210', class: "ls-fab", title: "Locale switcher", onClick: () => this.setOpen(true) }, index.h("wa-icon", { key: 'bce733bc4d5189da1f53b982759b7dbef320003a', name: "globe" }), index.h("span", { key: '29e0dd33847d4a7862a7b763a75951a0235375c4', class: "ls-fab__label" }, language.toUpperCase()))), this.open && (index.h("div", { key: 'd0db2750356dd19b1c9e161edd2dcebe867df206', class: "ls-panel" }, index.h("header", { key: 'c3af6e2604699b13b779387255cb82765c1f9e14', class: "ls-panel__header" }, index.h("span", { key: '4167fe8cd0e3e575d6e4c74e301824f4c0e1f02a', class: "ls-panel__title" }, "Locale switcher"), index.h("button", { key: '67be835ecce6f47487336989fc2d0d00930dc2cf', class: "ls-panel__close", title: "Collapse", onClick: () => this.setOpen(false) }, index.h("wa-icon", { key: '838ef4960f79807e43e540eccd80b9c0322d12bb', name: "xmark" }))), index.h("wa-select", { key: '2cbe23b93270055792635a197f8d9b71c4bfadd8', label: "Language", size: "s", value: language, onchange: (event) => {
                const value = event.target.value?.toString();
                if (value) {
                    this.applyLanguage(value);
                }
            } }, LANGUAGES.map(({ code, label }) => (index.h("wa-option", { key: code, value: code }, label)))), index.h("wa-select", { key: '2a59bfeaf59fbcf845d15c79b73ba0f50307b1ce', label: "Calendar", size: "s", value: calendar, onchange: (event) => {
                const value = event.target.value?.toString();
                this.applyCalendar(value);
            } }, index.h("wa-option", { key: '5a6c1b55dafe91f5c231659841bfc44c21c9f94b', value: "auto" }, "Auto \u2014 detect from device"), index.h("wa-option", { key: '45988dcfb77b89d6a0d5df98e553bf4987acdcc1', value: "gregory" }, "Gregorian"), index.h("wa-option", { key: '9ffd1864c008055af69ea17b15cdf9ccc8f31220', value: "islamic-umalqura" }, "Hijri \u2014 Umm al-Qura")), index.h("wa-select", { key: 'e15846c060a16ccabfb68ae58184a46829d20b24', label: "Numbers", size: "s", value: irDate.calendarPreference.numberingSystem, onchange: (event) => {
                const value = event.target.value?.toString();
                this.applyNumberingSystem(value);
            } }, NUMBERING_SYSTEMS.map(({ value, label }) => (index.h("wa-option", { key: value, value: value }, label)))), index.h("wa-select", { key: '6b6543a4ab852cc6207d13059ca532bd3aa0871a', label: "Direction", size: "s", value: this.direction, onchange: (event) => {
                const value = event.target.value?.toString();
                this.applyDirection(value);
            } }, index.h("wa-option", { key: '1f28d88533c498f2dcb99b38090c3de3eb0d399b', value: "auto" }, "Auto \u2014 from language"), index.h("wa-option", { key: '899e838726b7d943073de2b89ac6c87d1de4ef0a', value: "ltr" }, "LTR"), index.h("wa-option", { key: '39c9327bf7385466b97499c274b76f29c0ce52f5', value: "rtl" }, "RTL")), this.renderPreview(), index.h("footer", { key: '974604708e0cbee7ce7376bec8c287b402ccc17a', class: "ls-panel__footer" }, index.h("span", { key: '75bb4559aee1795d9428dfa9e923cb2cadeaac0c', class: "ls-panel__resolved" }, "resolved: ", language, " \u00B7 ", irDate.calendarPreference.resolved, " \u00B7 ", irDate.calendarPreference.numberingSystem, " \u00B7 ", document.documentElement.getAttribute('dir') ?? 'ltr'), index.h("button", { key: '34c28cb5c692b9b1194b827b5c20559937123b39', class: "ls-panel__reset", onClick: () => this.resetSettings() }, "Reset all"))))));
    }
};
IrLocaleSwitcher.style = irLocaleSwitcherCss();

const ParamsGetMealReportSchema = types.objectType({
    property_id: types.numberType(),
    report_type: types.enumType(['GUEST_LIST', 'MEAL_COUNT']),
    from: types.stringType(),
    to: types.stringType(),
    meal_type_code: types.stringType().optional().nullable(),
    is_export_to_excel: types.booleanType().optional().default(false),
});
const ParamsSetHBPreferenceSchema = types.objectType({
    property_id: types.numberType(),
    room_identifier: types.stringType(),
    code: types.stringType(),
});

class MealReportService {
    async getMealReport(props) {
        const payload = ParamsGetMealReportSchema.parse(props);
        const { data } = await axios.axios.post(`/Get_Meal_Report`, payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async setHBPreference(props) {
        const payload = ParamsSetHBPreferenceSchema.parse(props);
        const { data } = await axios.axios.post(`/Set_HB_Preference`, payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
    }
}

const irMealReportCss = () => `.sc-ir-meal-report-h{display:block}.ir-meal-report__export-btn.sc-ir-meal-report{height:100%}.ir-meal-report__metrics.sc-ir-meal-report{display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:var(--wa-space-m);margin-bottom:var(--wa-space-m)}.ir-meal-report__layout.sc-ir-meal-report{display:flex;flex-direction:column;gap:var(--wa-space-m);margin-top:var(--wa-space-xs)}.ir-meal-report__results.sc-ir-meal-report{min-width:0;min-height:50vh}.ir-meal-report__results.sc-ir-meal-report::part(body),.ir-meal-report__results.sc-ir-meal-report [part~="body"]{padding:0.5rem}@media (min-width: 1024px){.ir-meal-report__layout.sc-ir-meal-report{flex-direction:row;align-items:flex-start}.ir-meal-report__layout.sc-ir-meal-report>.ir-meal-report__results.sc-ir-meal-report{flex:1 1 auto}}`;

const IrMealReport = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    ticket;
    propertyid;
    baseurl;
    language = 'en';
    isPageLoading = true;
    isExporting = false;
    isDataLoading = false;
    localReportType = 'GUEST_LIST';
    localFrom = moment.hooks().format('YYYY-MM-DD');
    localTo = moment.hooks().format('YYYY-MM-DD');
    localMealType = null;
    guestList = [];
    mealCountSummary = [];
    setupEntries = {
        meal_type: [],
        hb_preference: [],
    };
    mealReportService = new MealReportService();
    setupService = new index$1.SetupService();
    apiClientService = new ApiClient.ApiClient();
    ticketChanged(newValue) {
        if (newValue) {
            this.apiClientService.setApiClient(newValue);
            this.init();
        }
    }
    componentWillLoad() {
        if (this.baseurl) {
            this.apiClientService.setBaseUrl(this.baseurl);
        }
        if (this.ticket) {
            this.apiClientService.setApiClient(this.ticket);
            this.init();
        }
    }
    async handlePropertyChange() {
        await this.init();
    }
    async init() {
        try {
            this.isPageLoading = true;
            this.isDataLoading = true;
            const [setupEntries] = await Promise.all([
                this.setupService.getSetupEntriesByTableNameMulti(['_MEAL_TYPE', '_HB_PREFERENCE']),
                locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.mealReport }),
            ]);
            const grouped = utils$1.groupEntryTablesResult(setupEntries);
            const meal_type = grouped.meal_type || [];
            const hb_preference = grouped.hb_preference || [];
            this.setupEntries = {
                meal_type,
                hb_preference,
            };
            if (meal_type.length > 0) {
                if (!this.localMealType) {
                    this.localMealType = meal_type[0].CODE_NAME;
                }
            }
            await this.applyFilters();
        }
        catch (error) {
            // Handling handled via UI
        }
        finally {
            this.isPageLoading = false;
            this.isDataLoading = false;
        }
    }
    async applyFilters() {
        try {
            this.isDataLoading = true;
            const response = await this.mealReportService.getMealReport({
                property_id: this.propertyid,
                from: this.localFrom,
                to: this.localTo,
                report_type: this.localReportType,
                meal_type_code: this.localMealType,
                is_export_to_excel: false,
            });
            this.guestList = response.My_Result.Guest_List || [];
            this.mealCountSummary = response.My_Result.Meal_Count_Summary || [];
        }
        catch (error) {
            // Handling handled via UI
        }
        finally {
            this.isDataLoading = false;
        }
    }
    resetFilters() {
        this.localReportType = 'GUEST_LIST';
        this.localFrom = moment.hooks().format('YYYY-MM-DD');
        this.localTo = moment.hooks().format('YYYY-MM-DD');
        if (this.setupEntries.meal_type.length > 0) {
            this.localMealType = this.setupEntries.meal_type[0].CODE_NAME;
        }
        this.applyFilters();
    }
    async setPresetDate(type) {
        const date = type === 'today' ? moment.hooks() : moment.hooks().add(1, 'day');
        this.localFrom = date.format('YYYY-MM-DD');
        if (type === 'today' && this.localReportType === 'MEAL_COUNT') {
            this.localTo = moment.hooks().add(14, 'days').format('YYYY-MM-DD');
        }
        else {
            this.localTo = this.localFrom;
        }
    }
    async handleExport() {
        try {
            this.isExporting = true;
            const response = await this.mealReportService.getMealReport({
                property_id: this.propertyid,
                from: this.localFrom,
                to: this.localTo,
                report_type: this.localReportType,
                meal_type_code: this.localMealType,
                is_export_to_excel: true,
            });
            const link = response.My_Params_Get_Meal_Report?.Link_excel;
            if (link) {
                // Use clean axios to bypass interceptors (avoiding network errors)
                const cleanAxios = axios.axios.create();
                const responseBlob = await cleanAxios.get(link, { responseType: 'blob' });
                // Force download via local blob URL
                const blob = new Blob([responseBlob.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                const filename = link.split('/').pop() || 'meal_report.xlsx';
                a.setAttribute('download', filename);
                document.body.appendChild(a);
                a.click();
                // Cleanup
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }
        }
        catch (error) {
            // Export Error handled silently or via UI
        }
        finally {
            this.isExporting = false;
        }
    }
    render() {
        if (this.isPageLoading) {
            return index.h("ir-loading-screen", null);
        }
        // const summary = this.mealCountSummary || [];
        // const sum = (key: keyof MealCountDaySummary) => summary.reduce((acc, day) => acc + (Number(day[key]) || 0), 0);
        // const mealMetrics = [
        //   { label: 'Breakfast', icon: 'mug-saucer', intent: 'brand' as const, adults: sum('Breakfast_Ad'), children: sum('Breakfast_Ch') },
        //   { label: 'Lunch', icon: 'utensils', intent: 'success' as const, adults: sum('Lunch_Ad'), children: sum('Lunch_Ch') },
        //   { label: 'Dinner', icon: 'moon', intent: 'warning' as const, adults: sum('Dinner_Ad'), children: sum('Dinner_Ch') },
        // ];
        return (index.h("ir-page", { label: t.t('Lcz_MealReport', { fallback: 'Meal Report' }), description: this.localReportType === 'GUEST_LIST' ? t.t('Lcz_GuestList', { fallback: 'Guest list' }) : t.t('Lcz_MealCount', { fallback: 'Meal count' }), class: 'page' }, index.h("ir-custom-button", { slot: "page-header", type: "button", size: "s", appearance: "outlined", loading: this.isExporting, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.handleExport();
            }, class: "ir-meal-report__export-btn" }, index.h("wa-icon", { name: "download", slot: "start", style: { fontSize: '14px' } }), t.t('Lcz_Export', { fallback: 'Export' })), index.h("div", { class: "ir-meal-report__layout" }, index.h("ir-meal-report-filters", { reportType: this.localReportType, fromDate: this.localFrom, toDate: this.localTo, mealType: this.localMealType, setupEntries: this.setupEntries, isLoading: this.isDataLoading, onReportTypeChange: e => {
                this.localReportType = e.detail;
                this.applyFilters();
                if (e.detail === 'GUEST_LIST') {
                    this.localTo = this.localFrom;
                }
            }, onDateChange: e => {
                this.localFrom = e.detail.from;
                this.localTo = e.detail.to;
            }, onMealTypeChange: async (e) => {
                this.localMealType = e.detail;
            }, onFilterApply: () => this.applyFilters(), onFilterReset: () => this.resetFilters(), onPresetDate: e => this.setPresetDate(e.detail) }), index.h("wa-card", { class: "ir-meal-report__results" }, index.h("div", null, this.localReportType === 'GUEST_LIST' ? (index.h("ir-meal-guest-list", { guestList: this.guestList })) : (index.h("ir-meal-count-summary", { mealCountSummary: this.mealCountSummary })))))));
    }
    static get watchers() { return {
        "ticket": [{
                "ticketChanged": 0
            }],
        "propertyid": [{
                "handlePropertyChange": 0
            }]
    }; }
};
IrMealReport.style = irMealReportCss();

const irMonthlyBookingsReportCss = () => `.sc-ir-monthly-bookings-report-h{display:block}.report-layout.sc-ir-monthly-bookings-report{display:flex;flex-direction:column;gap:1rem}.report-stats-row.sc-ir-monthly-bookings-report{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.report-table-card.sc-ir-monthly-bookings-report{width:100%;flex:1 1 0%}@media (min-width: 768px){.report-stats-row.sc-ir-monthly-bookings-report{flex-direction:row}}.report-metric.sc-ir-monthly-bookings-report{flex:1}.report-content-row.sc-ir-monthly-bookings-report{display:flex;flex-direction:column;gap:1rem;margin-top:1rem}@media (min-width: 992px){.report-content-row.sc-ir-monthly-bookings-report{flex-direction:row}}.report-table-card.sc-ir-monthly-bookings-report{flex:1 1 0%}`;

const IrMonthlyBookingsReport = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    language = '';
    ticket = '';
    propertyid;
    p;
    isPageLoading = true;
    isLoading = null;
    reports = [];
    filters;
    property_id;
    stats;
    baseFilters;
    apiClientService = new ApiClient.ApiClient();
    roomService = new room_service.RoomService();
    propertyService = new index$2.PropertyService();
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.monthlyBookingsReport, () => this.init());
    componentWillLoad() {
        this.baseFilters = {
            date: {
                description: irDate.formatDate(moment.hooks(), 'MMMM YYYY'),
                firstOfMonth: moment.hooks().startOf('month').format('YYYY-MM-DD'),
                lastOfMonth: moment.hooks().endOf('month').format('YYYY-MM-DD'),
            },
            include_previous_year: false,
        };
        this.filters = this.baseFilters;
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
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.apiClientService.setApiClient(this.ticket);
            this.init();
        }
    }
    handleApplyFiltersChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = e.detail;
        this.getReports();
    }
    async init() {
        try {
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.monthlyBookingsReport });
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            // let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [localeReady, this.getReports()];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            await Promise.all(requests);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async getReports(isExportToExcel = false) {
        try {
            const getReportObj = (report) => {
                return {
                    adults: report.Adults,
                    children: report.Children,
                    day: report.Date,
                    units_booked: report.Units_booked,
                    occupancy_percent: report.Occupancy,
                    adr: report.ADR,
                    rooms_revenue: report.Rooms_Revenue,
                    total_guests: report?.Total_Guests,
                };
            };
            this.isLoading = isExportToExcel ? 'export' : 'filter';
            const { date, include_previous_year } = this.filters;
            const requests = [
                this.propertyService.getMonthlyStats({
                    from_date: date.firstOfMonth,
                    to_date: date.lastOfMonth,
                    property_id: this.property_id,
                    is_export_to_excel: isExportToExcel,
                }),
            ];
            if (include_previous_year) {
                requests.push(this.propertyService.getMonthlyStats({
                    from_date: moment.hooks(date.firstOfMonth, 'YYYY-MM-DD').add(-1, 'year').format('YYYY-MM-DD'),
                    to_date: moment.hooks(date.lastOfMonth, 'YYYY-MM-DD').add(-1, 'years').format('YYYY-MM-DD'),
                    property_id: this.property_id,
                }));
            }
            const results = await Promise.all(requests);
            const currentReports = results[0];
            let enrichedReports = [];
            const { DailyStats, ...rest } = currentReports;
            this.stats = { ...rest };
            if (include_previous_year && results[isExportToExcel ? 0 : 1]) {
                const previousYearReports = results[isExportToExcel ? 0 : 1];
                let formattedReports = previousYearReports.DailyStats.map(getReportObj);
                enrichedReports = DailyStats.map(getReportObj).map(current => {
                    const previous = formattedReports.find(prev => prev.day === moment.hooks(current.day, 'YYYY-MM-DD').add(-1, 'years').format('YYYY-MM-DD'));
                    return {
                        ...current,
                        last_year: previous ?? null,
                    };
                });
            }
            else {
                enrichedReports = DailyStats.map(getReportObj);
            }
            this.reports = [...enrichedReports];
        }
        catch (e) {
            console.log(e);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        if (this.isPageLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h("ir-page", { label: t.t('Lcz_DailyOccupancy', { fallback: 'Daily Occupancy' }) }, index.h("ir-custom-button", { variant: "neutral", onClickHandler: async (e) => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                await this.getReports(true);
            }, appearance: "outlined", slot: "page-header", loading: this.isLoading === 'export' }, index.h("wa-icon", { name: "download", slot: "start" }), t.t('Lcz_Export', { fallback: 'Export' })), index.h("section", { class: "report-layout" }, index.h("section", null, index.h("div", { class: "report-stats-row" }, index.h("ir-metric-card", { class: "report-metric", icon: this.stats?.Occupancy_Difference_From_Previous_Month < 0 ? 'arrow-trend-down' : 'arrow-trend-up', label: t.t('Lcz_AverageOccupancy', { fallback: 'Average Occupancy' }), value: this.stats.AverageOccupancy ? number.formatNumber(this.stats.AverageOccupancy, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : null, unit: "%", trend: this.stats?.Occupancy_Difference_From_Previous_Month, trendLabel: t.t('Lcz_FromLastMonth', { fallback: 'from last month' }), caption: this.stats?.Occupancy_Difference_From_Previous_Month != null && this.stats?.AverageOccupancy != null
                ? `${t.t('Lcz_LastMonth', { fallback: 'Last month:' })} ${number.formatPercent(this.stats.AverageOccupancy - this.stats.Occupancy_Difference_From_Previous_Month, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                : undefined }), index.h("ir-metric-card", { class: "report-metric", icon: "hotel", label: t.t('Lcz_TotalUnits', { fallback: 'Total Units' }), value: this.stats?.TotalUnitsBooked ? number.formatCount(this.stats.TotalUnitsBooked) : null, caption: t.t('Lcz_Booked', { fallback: 'Booked' }) }), index.h("ir-metric-card", { class: "report-metric", icon: "user-group", label: t.t('Lcz_TotalGuests', { fallback: 'Total Guests' }), value: this.stats?.Total_Guests ? number.formatCount(this.stats.Total_Guests) : null, caption: t.t('Lcz_Stayed', { fallback: 'Stayed' }) }), index.h("ir-metric-card", { class: "report-metric", icon: "calendar", label: t.t('Lcz_PeakDays', { fallback: 'Peak Days' }), value: this.stats?.PeakDays.length === 0 ? null : this.stats?.PeakDays?.map(pd => irDate.formatDate(pd.Date, 'Do')).join(' - '), caption: t.t('Lcz_PercentOccupancy', { fallback: '%1% occupancy', params: [number.formatNumber(Math.max(...(this.stats.PeakDays?.map(pd => pd.OccupancyPercent) || [])))] }) })), index.h("div", { class: "report-content-row" }, index.h("ir-monthly-bookings-report-filter", { isLoading: this.isLoading === 'filter', class: "filters-card", baseFilters: this.baseFilters }), index.h("ir-monthly-bookings-report-table", { reports: this.reports }))))));
    }
    static get watchers() { return {
        "language": [{
                "languageChanged": 0
            }],
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrMonthlyBookingsReport.style = irMonthlyBookingsReportCss();

const irPaymentOptionCss = () => `.sc-ir-payment-option-h{display:block}.payment-table-container.sc-ir-payment-option{display:flex;align-items:center;justify-content:center}.po-view.sc-ir-payment-option{padding:0;margin:0}.payment-img.sc-ir-payment-option{height:18px;display:none}.loading-container.sc-ir-payment-option{background:white;display:flex;align-items:center;flex-direction:column;align-items:center;justify-content:center;width:100%;height:40rem}.payment-option-loader.sc-ir-payment-option{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loading-container.default.sc-ir-payment-option{height:100vh;width:100%}@media (min-width: 768px){.po-view.sc-ir-payment-option{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.dataTable.sc-ir-payment-option{width:70%}.payment-img.sc-ir-payment-option{display:block}.actions-header.sc-ir-payment-option{width:max-content !important}.payment-table-container.sc-ir-payment-option{justify-content:flex-start}}@media (min-width: 1280px){.dataTable.sc-ir-payment-option{width:50%}}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.ir-me-1.sc-ir-payment-option{margin-inline-end:0.25rem}.ir-text-start.sc-ir-payment-option{text-align:start}`;

const IrPaymentOption = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    propertyid;
    ticket;
    p;
    language = 'en';
    defaultStyles = true;
    hideLogs = true;
    paymentOptions = [];
    isLoading = false;
    selectedOption = null;
    paymentOptionService = new paymentOption_store.PaymentOptionService();
    roomService = new room_service.RoomService();
    ApiClient = new ApiClient.ApiClient();
    propertyOptionsById;
    propertyOptionsByCode;
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.paymentOption, () => this.init());
    componentWillLoad() {
        if (!!this.ticket) {
            this.ApiClient.setApiClient(this.ticket);
            this.init();
        }
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.ApiClient.setApiClient(this.ticket);
        this.init();
    }
    init() {
        this.initServices();
        this.fetchData();
    }
    handleCloseModal(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        this.closeModal(e.detail);
    }
    closeModal(newOption) {
        if (newOption) {
            this.modifyPaymentList(newOption);
            if (newOption.is_payment_gateway) {
                this.propertyOptionsById.set(newOption.id, newOption);
            }
            else {
                this.propertyOptionsByCode.set(newOption.code, newOption);
            }
        }
        else {
            if (!this.propertyOptionsByCode.has(paymentOption_store.payment_option_store.selectedOption?.code) && !this.propertyOptionsById.has(paymentOption_store.payment_option_store.selectedOption?.id)) {
                this.modifyPaymentList({ ...paymentOption_store.payment_option_store.selectedOption, is_active: false });
            }
        }
        paymentOption_store.payment_option_store.selectedOption = null;
        paymentOption_store.payment_option_store.mode = null;
    }
    async fetchData() {
        try {
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.paymentOption });
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            this.isLoading = true;
            let propertyId = this.propertyid;
            if (!propertyId) {
                console.log('fetching property id');
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: locale_controller.LocaleController.language,
                });
                propertyId = propertyData.My_Result.id;
            }
            const [paymentOptions, propertyOptions] = await Promise.all([
                this.paymentOptionService.GetExposedPaymentMethods(),
                this.paymentOptionService.GetPropertyPaymentMethods(propertyId),
                localeReady,
            ]);
            this.propertyOptionsById = new Map(propertyOptions?.map(o => [o.id, o]));
            this.propertyOptionsByCode = new Map(propertyOptions?.map(o => [o.code, o]));
            this.paymentOptions = paymentOptions?.map(option => {
                if (option.is_payment_gateway) {
                    return this.propertyOptionsById.get(option.id) || option;
                }
                return this.propertyOptionsByCode.get(option.code) || option;
            });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    initServices() {
        this.ApiClient.setApiClient(this.ticket);
    }
    modifyPaymentList(paymentOption) {
        let prevPaymentOptions = [...this.paymentOptions];
        console.log(paymentOption);
        let index = prevPaymentOptions.findIndex(p => p.code === paymentOption.code);
        if (index === -1) {
            throw new Error('Invalid code');
        }
        prevPaymentOptions[index] = { ...paymentOption };
        this.paymentOptions = [...prevPaymentOptions];
    }
    async handleCheckChange(e, po) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const is_active = e.detail;
        const newOption = { ...po, is_active, property_id: this.propertyid };
        if (po.code !== '005' && !po.is_payment_gateway) {
            await this.changePaymentMethod(newOption);
            this.modifyPaymentList(newOption);
            if (po.code === '000' && is_active && this.paymentOptions.filter(p => p.code !== '000').every(p => p.is_active === false || p.is_active === null)) {
                utils.showToast({
                    type: 'success',
                    description: '',
                    title: t.tRaw('Lcz_YouNeedToSelect'),
                    position: 'top-right',
                });
            }
            return;
        }
        if (!this.showEditButton(po)) {
            this.modifyPaymentList(newOption);
            return;
        }
        if (is_active && po.data?.some(d => d.value === null)) {
            paymentOption_store.payment_option_store.mode = 'create';
            paymentOption_store.payment_option_store.selectedOption = newOption;
        }
        else {
            await this.changePaymentMethod(newOption);
        }
        this.modifyPaymentList(newOption);
    }
    async changePaymentMethod(newOption) {
        try {
            await this.paymentOptionService.HandlePaymentMethod(newOption);
            utils.showToast({
                position: 'top-right',
                title: t.t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }),
                description: '',
                type: 'success',
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    showEditButton(po) {
        if (!po.is_payment_gateway && po.code !== '005') {
            return false;
        }
        return po.code === '005' || (po.is_payment_gateway && po.data?.length > 0);
    }
    render() {
        if (this.isLoading === true || (this.paymentOptions && this.paymentOptions.length === 0)) {
            return (index.h(index.Host, { class: this.defaultStyles ? 'p-2' : '' }, index.h("div", { class: `loading-container ${this.defaultStyles ? 'default' : ''}` }, index.h("span", { class: "payment-option-loader" }))));
        }
        return (index.h(index.Host, { class: this.defaultStyles ? 'p-2' : '' }, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("div", { class: `${this.defaultStyles ? 'card ' : ''} p-1 flex-fill m-0` }, index.h("div", { class: "d-flex align-items-center mb-2" }, index.h("div", { class: "p-0 m-0 ir-me-1" }, index.h("ir-icons", { name: "credit_card" })), index.h("h3", { class: 'm-0 p-0' }, t.t('Lcz_PaymentOptions', { fallback: 'Payment Options' }))), index.h("div", { class: "payment-table-container" }, index.h("table", { class: "table table-striped table-bordered no-footer dataTable" }, index.h("thead", null, index.h("tr", null, index.h("th", { scope: "col", class: "ir-text-start" }, t.t('Lcz_PaymentMethod', { fallback: 'Payment Method' })), index.h("th", { scope: "col" }, t.t('Lcz_Status', { fallback: 'Status' })), index.h("th", { scope: "col", class: "actions-header" }, t.t('Lcz_Action', { fallback: 'Action' })))), index.h("tbody", { class: "" }, this.paymentOptions?.map(po => {
            if (po.code === '004') {
                return null;
            }
            return (index.h("tr", { key: po.id }, index.h("td", { class: 'ir-text-start po-description' }, index.h("div", { class: "po-view" }, index.h("span", { class: 'p-0 m-0' }, po?.description))), index.h("td", null, index.h("ir-switch", { checked: po.is_active, onCheckChange: e => this.handleCheckChange(e, po) })), index.h("td", { class: "payment-action" }, this.showEditButton(po) && (index.h("ir-button", { title: t.t('Lcz_Edit', { fallback: 'Edit' }), variant: "icon", icon_name: "edit", onClickHandler: () => {
                    paymentOption_store.payment_option_store.selectedOption = po;
                    paymentOption_store.payment_option_store.mode = 'edit';
                } })))));
        }))))), index.h("ir-sidebar", { onIrSidebarToggle: () => {
                this.closeModal(null);
            }, side: 'right', showCloseButton: false,
            // label={t('Lcz_Information', { params: [payment_option_store.selectedOption?.description] })}
            open: paymentOption_store.payment_option_store?.selectedOption !== null }, paymentOption_store.payment_option_store?.selectedOption && index.h("ir-option-details", { propertyId: this.propertyid, slot: "sidebar-body" }))));
    }
    static get watchers() { return {
        "language": [{
                "languageChanged": 0
            }],
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrPaymentOption.style = irPaymentOptionCss();

const irSalesByChannelCss = () => `.sc-ir-sales-by-channel-h{display:block}.channel-content-row.sc-ir-sales-by-channel{display:flex;flex-direction:column;gap:1rem}.channel-table-card.sc-ir-sales-by-channel{flex:1 1 0%}@media (min-width: 992px){.channel-content-row.sc-ir-sales-by-channel{flex-direction:row}}`;

const IrSalesByChannel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    language = '';
    ticket = '';
    propertyid;
    p;
    mode;
    isLoading = null;
    isPageLoading = true;
    salesData;
    channelSalesFilters;
    allowedProperties = [];
    propertyID;
    ApiClient = new ApiClient.ApiClient();
    propertyService = new index$2.PropertyService();
    baseFilters = {
        FROM_DATE: moment.hooks().add(-7, 'days').format('YYYY-MM-DD'),
        TO_DATE: moment.hooks().format('YYYY-MM-DD'),
        BOOK_CASE: '001',
        WINDOW: 7,
        include_previous_year: false,
        is_export_to_excel: false,
    };
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.salesByChannel, () => this.initializeApp());
    componentWillLoad() {
        this.channelSalesFilters = this.baseFilters;
        if (this.ticket) {
            this.ApiClient.setApiClient(this.ticket);
            this.initializeApp();
        }
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.ApiClient.setApiClient(this.ticket);
        this.initializeApp();
    }
    async initializeApp() {
        try {
            this.isPageLoading = true;
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.salesByChannel });
            if (!this.mode) {
                throw new Error("Missing required 'mode'. Please set it to either 'property' or 'mpo'.");
            }
            if (!this.propertyid && this.mode === 'property' && !this.p) {
                throw new Error('Missing Property ID or aname');
            }
            if (this.mode === 'property') {
                const property = await this.propertyService.getExposedProperty({
                    id: Number(this.propertyid ?? 0),
                    aname: this.p,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                });
                this.propertyID = property.My_Result.id;
            }
            const requests = [localeReady];
            if (this.mode === 'mpo') {
                requests.unshift(this.propertyService.getExposedAllowedProperties());
                const [properties] = await Promise.all(requests);
                this.allowedProperties = [...properties];
            }
            else {
                await Promise.all(requests);
            }
            this.baseFilters = { ...this.baseFilters, LIST_AC_ID: this.allowedProperties?.map(p => p.id) };
            this.channelSalesFilters = { ...this.baseFilters };
            await this.getChannelSales();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async getChannelSales(isExportToExcel = false) {
        try {
            const { include_previous_year, LIST_AC_ID, ...filterParams } = this.channelSalesFilters;
            this.isLoading = isExportToExcel ? 'export' : 'filter';
            const currentSales = await this.propertyService.getChannelSales({
                ...filterParams,
                AC_ID: this.propertyID ? this.propertyID.toString() : undefined,
                is_export_to_excel: isExportToExcel,
                LIST_AC_ID: this.propertyID ? null : LIST_AC_ID,
            });
            const shouldFetchPreviousYear = !isExportToExcel && include_previous_year;
            let enrichedSales = [];
            if (shouldFetchPreviousYear) {
                const previousYearSales = await this.propertyService.getChannelSales({
                    AC_ID: this.propertyID ? this.propertyID.toString() : undefined,
                    ...filterParams,
                    LIST_AC_ID: this.propertyID ? null : LIST_AC_ID,
                    FROM_DATE: moment.hooks(filterParams.FROM_DATE).subtract(1, 'year').format('YYYY-MM-DD'),
                    TO_DATE: moment.hooks(filterParams.TO_DATE).subtract(1, 'year').format('YYYY-MM-DD'),
                });
                enrichedSales = currentSales.map(current => {
                    const previous = previousYearSales.find(prev => prev.SOURCE.toLowerCase() === current.SOURCE.toLowerCase());
                    return {
                        ...current,
                        last_year: previous ? previous : null,
                    };
                });
            }
            else {
                enrichedSales = currentSales.map(record => ({
                    ...record,
                    last_year: null,
                }));
            }
            /**
             * Groups sales records by SOURCE and currency.id, summing numeric fields
             * and recalculating PCT based on the total REVENUE.
             */
            const groupSalesRecordsBySource = (records) => {
                if (!records || records.length === 0)
                    return records;
                // Helper to extract currency ID from various possible formats
                const getCurrencyId = (r) => {
                    return r?.currency ?? null;
                };
                // Create unique key for grouping
                const createKey = (r) => {
                    const source = r.SOURCE.toString().toLowerCase().trim();
                    const currencyId = getCurrencyId(r);
                    return `${source}__${currencyId ?? 'null'}`;
                };
                // Sum two values safely
                const sumValues = (a, b) => {
                    return (a ?? 0) + (b ?? 0);
                };
                // Merge numeric fields from last_year objects
                const mergeLastYear = (base, incoming) => {
                    if (!incoming)
                        return base;
                    if (!base)
                        return { ...incoming };
                    return {
                        NIGHTS: sumValues(base.NIGHTS, incoming.NIGHTS),
                        PCT: sumValues(base.PCT, incoming.PCT), // Will recalculate later
                        REVENUE: sumValues(base.REVENUE, incoming.REVENUE),
                        SOURCE: base.SOURCE,
                        PROPERTY_ID: base.PROPERTY_ID,
                        PROPERTY_NAME: base.PROPERTY_NAME,
                        currency: base.currency,
                    };
                };
                // Group records by key
                const grouped = new Map();
                for (const record of records) {
                    const key = createKey(record);
                    const existing = grouped.get(key);
                    if (!existing) {
                        // First record for this key - clone it
                        grouped.set(key, { ...record });
                    }
                    else {
                        // Merge with existing record
                        const merged = {
                            ...existing,
                            NIGHTS: sumValues(existing.NIGHTS, record.NIGHTS),
                            PCT: 0, // Will recalculate after summing all REVENUE
                            REVENUE: sumValues(existing.REVENUE, record.REVENUE),
                            last_year: mergeLastYear(existing.last_year, record.last_year),
                        };
                        grouped.set(key, merged);
                    }
                }
                // Convert to array
                const result = Array.from(grouped.values());
                // Recalculate PCT based on total REVENUE
                const totalRevenue = result.reduce((sum, r) => sum + (r.REVENUE ?? 0), 0);
                if (totalRevenue > 0) {
                    for (const record of result) {
                        record.PCT = (record.REVENUE / totalRevenue) * 100;
                        // Also recalculate last_year PCT if it exists
                        if (record.last_year) {
                            const lastYearTotal = result.reduce((sum, r) => sum + (r.last_year?.REVENUE ?? 0), 0);
                            if (lastYearTotal > 0) {
                                record.last_year.PCT = (record.last_year.REVENUE / lastYearTotal) * 100;
                            }
                        }
                    }
                }
                return result;
            };
            this.salesData = [...groupSalesRecordsBySource(enrichedSales)];
        }
        catch (error) {
            console.error('Failed to fetch sales data:', error);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        if (this.isPageLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-page", { label: t.t('Lcz_SalesBySource', { fallback: 'Sales by Source' }) }, index.h("ir-custom-button", { slot: "page-header", variant: "neutral", appearance: "outlined", loading: this.isLoading === 'export', onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getChannelSales(true);
            } }, index.h("wa-icon", { name: "download", slot: "start" }), t.t('Lcz_Export', { fallback: 'Export' })), index.h("ir-sales-by-channel-summary", { filters: this.channelSalesFilters, records: this.salesData }), index.h("div", { class: "channel-content-row" }, index.h("ir-sales-by-channel-filters", { isLoading: this.isLoading === 'filter', onApplyFilters: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.channelSalesFilters = { ...e.detail };
                this.getChannelSales();
            }, allowedProperties: this.allowedProperties, baseFilters: this.baseFilters }), index.h("ir-sales-by-channel-table", { mode: this.mode, allowedProperties: this.allowedProperties, class: "channel-table-card", records: this.salesData })))));
    }
    static get watchers() { return {
        "language": [{
                "languageChanged": 0
            }],
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrSalesByChannel.style = irSalesByChannelCss();

const irSalesByCountryCss = () => `.sc-ir-sales-by-country-h{display:block}.sales-content-row.sc-ir-sales-by-country{display:flex;flex-direction:column;gap:1rem}.sales-table-card.sc-ir-sales-by-country{flex:1 1 0%}@media (min-width: 992px){.sales-content-row.sc-ir-sales-by-country{flex-direction:row}}`;

const IrSalesByCountry = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    language = '';
    ticket = '';
    propertyid;
    p;
    isLoading = null;
    isPageLoading = true;
    property_id;
    salesData;
    salesFilters;
    countries = new Map();
    ApiClient = new ApiClient.ApiClient();
    roomService = new room_service.RoomService();
    propertyService = new index$2.PropertyService();
    bookingService = new booking_store.BookingService();
    baseFilters = {
        FROM_DATE: moment.hooks().add(-7, 'days').format('YYYY-MM-DD'),
        TO_DATE: moment.hooks().format('YYYY-MM-DD'),
        BOOK_CASE: '001',
        WINDOW: 7,
        include_previous_year: false,
    };
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.salesByCountry, () => this.initializeApp());
    componentWillLoad() {
        this.salesFilters = this.baseFilters;
        if (this.ticket) {
            this.ApiClient.setApiClient(this.ticket);
            this.initializeApp();
        }
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.ApiClient.setApiClient(this.ticket);
        this.initializeApp();
    }
    async initializeApp() {
        try {
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.salesByCountry });
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.bookingService.getCountries(locale_controller.LocaleController.language), localeReady, this.getCountrySales()];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            const [countries] = await Promise.all(requests);
            const mappedCountries = new Map();
            countries.map(country => {
                mappedCountries.set(country.id, {
                    flag: country.flag,
                    name: country.name,
                });
            });
            this.countries = mappedCountries;
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async getCountrySales(isExportToExcel = false) {
        const formatSalesData = (data) => {
            return {
                country: data.COUNTRY,
                country_id: data.COUNTRY_ID,
                nights: data.NIGHTS,
                percentage: data.PCT,
                revenue: data.REVENUE,
                number_of_guests: data.Total_Guests,
            };
        };
        try {
            const { include_previous_year, ...filterParams } = this.salesFilters;
            this.isLoading = isExportToExcel ? 'export' : 'filter';
            const currentSales = await this.propertyService.getCountrySales({
                AC_ID: this.property_id,
                is_export_to_excel: isExportToExcel,
                ...filterParams,
            });
            const shouldFetchPreviousYear = !isExportToExcel && include_previous_year;
            let enrichedSales = [];
            if (shouldFetchPreviousYear) {
                const previousYearSales = await this.propertyService.getCountrySales({
                    AC_ID: this.property_id,
                    is_export_to_excel: false,
                    ...filterParams,
                    FROM_DATE: moment.hooks(filterParams.FROM_DATE).subtract(1, 'year').format('YYYY-MM-DD'),
                    TO_DATE: moment.hooks(filterParams.TO_DATE).subtract(1, 'year').format('YYYY-MM-DD'),
                });
                enrichedSales = currentSales.map(current => {
                    const previous = previousYearSales.find(prev => prev.COUNTRY.toLowerCase() === current.COUNTRY.toLowerCase());
                    return {
                        id: v4.v4(),
                        ...formatSalesData(current),
                        last_year: previous ? formatSalesData(previous) : null,
                    };
                });
            }
            else {
                enrichedSales = currentSales.map(record => ({
                    id: v4.v4(),
                    ...formatSalesData(record),
                    last_year: null,
                }));
            }
            this.salesData = [...enrichedSales];
        }
        catch (error) {
            console.error('Failed to fetch sales data:', error);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        if (this.isPageLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-page", { label: t.t('Lcz_SalesByCountry', { fallback: 'Sales by Country' }) }, index.h("ir-custom-button", { slot: "page-header", variant: "neutral", appearance: "outlined", loading: this.isLoading === 'export', onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getCountrySales(true);
            } }, index.h("wa-icon", { name: "download", slot: "start" }), t.t('Lcz_Export', { fallback: 'Export' })), index.h("ir-sales-by-country-summary", { salesReports: this.salesData }), index.h("div", { class: "sales-content-row" }, index.h("ir-sales-filters", { isLoading: this.isLoading === 'filter', onApplyFilters: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.salesFilters = e.detail;
                this.getCountrySales();
            }, baseFilters: this.baseFilters }), index.h("ir-sales-table", { mappedCountries: this.countries, class: "sales-table-card", records: this.salesData })))));
    }
    static get watchers() { return {
        "language": [{
                "languageChanged": 0
            }],
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrSalesByCountry.style = irSalesByCountryCss();

var TaxationStrategy;
(function (TaxationStrategy) {
    TaxationStrategy["Normal"] = "000";
    TaxationStrategy["Cumulative"] = "001";
})(TaxationStrategy || (TaxationStrategy = {}));
/**
 * Charge rule (VAT, City Tax, Service Charge)
 */
const ChargeRuleSchema = types.objectType({
    value: types.numberType().nullable(),
    mode: types.stringType().min(1),
});
/**
 * Main setup schema
 */
types.objectType({
    vat: ChargeRuleSchema,
    cityTax: ChargeRuleSchema.nullable(),
    serviceCharge: ChargeRuleSchema.nullable(),
    taxationStrategy: types.nativeEnumType(TaxationStrategy).nullable(),
});

const irTaxServiceCategoriesCss = () => `.sc-ir-tax-service-categories-h{display:block}.tax-page.sc-ir-tax-service-categories{display:flex;flex-direction:column;gap:var(--wa-space-xl)}.tax-page__header.sc-ir-tax-service-categories{display:flex;align-items:center;justify-content:space-between;gap:var(--wa-space-m)}.tax-service-categories__card.sc-ir-tax-service-categories{background-color:var(--wa-color-surface-default, white)}.tax-page__heading.sc-ir-tax-service-categories{display:flex;flex-direction:column;gap:var(--wa-space-2xs)}.page-title.sc-ir-tax-service-categories{margin:0}.tax-page__subtitle.sc-ir-tax-service-categories{margin:0;color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-s)}.tax-grid__header.sc-ir-tax-service-categories{display:none}.tax-grid__col-label.sc-ir-tax-service-categories{font-size:var(--wa-font-size-xs);font-weight:600;color:var(--wa-color-text-quiet);text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap}.tax-grid__row.sc-ir-tax-service-categories{display:flex;flex-direction:column;gap:var(--wa-space-m);padding:var(--wa-space-m) 0}.tax-grid__name.sc-ir-tax-service-categories{display:flex;flex-direction:column;gap:var(--wa-space-3xs)}.tax-grid__title.sc-ir-tax-service-categories{font-size:var(--wa-font-size-m);margin:0;padding:0}.tax-grid__hint.sc-ir-tax-service-categories{margin:0;padding:0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}.tax-grid__cell[data-label].sc-ir-tax-service-categories::before{content:attr(data-label);display:block;font-size:var(--wa-font-size-xs);font-weight:600;color:var(--wa-color-text-quiet);margin-bottom:var(--wa-space-2xs)}.tax-grid__cell.sc-ir-tax-service-categories:empty{display:none}ir-tax-input.sc-ir-tax-service-categories::part(input),ir-tax-input.sc-ir-tax-service-categories [part~="input"]{width:8ch}@media (min-width: 768px){.tax-grid.sc-ir-tax-service-categories{display:grid;grid-template-columns:minmax(auto, 320px) repeat(3, auto) auto;column-gap:var(--wa-space-m);align-items:center}.tax-grid__header.sc-ir-tax-service-categories,.tax-grid__row.sc-ir-tax-service-categories{display:contents}.tax-grid__divider.sc-ir-tax-service-categories{grid-column:1 / -1}.tax-grid__col-label.sc-ir-tax-service-categories{padding-bottom:0}.tax-grid__name.sc-ir-tax-service-categories,.tax-grid__cell.sc-ir-tax-service-categories{padding-bottom:var(--wa-space-s);align-self:center}.tax-grid__cell.sc-ir-tax-service-categories:empty{display:block}.tax-grid__cell[data-label].sc-ir-tax-service-categories::before{display:none}.ir-tax-input.sc-ir-tax-service-categories,.tax-grid__cell.sc-ir-tax-service-categories{width:fit-content}}`;

const IrTaxServiceCategories = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    ticket;
    p;
    language = 'en';
    propertyid;
    isLoading;
    isSaving;
    chargeCategoryRules = new Map();
    setupEntries;
    autoValidate;
    apiClientService = new ApiClient.ApiClient();
    setupService = new index$1.SetupService();
    propertyService = new index$2.PropertyService();
    componentWillLoad() {
        if (this.ticket) {
            this.apiClientService.setApiClient(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue)
            this.reinit();
    }
    handlePChange(newValue, oldValue) {
        if (newValue !== oldValue && this.ticket)
            this.reinit();
    }
    handlePropertyIdChange(newValue, oldValue) {
        if (newValue !== oldValue && this.ticket)
            this.reinit();
    }
    /** Re-authenticates and re-fetches configuration when a watched prop changes. */
    reinit() {
        this.apiClientService.setApiClient(this.ticket);
        this.init();
    }
    /** Fetches setup entries and property data, then builds the initial charge rules map. */
    async init() {
        this.isLoading = true;
        try {
            const [, tableEntries] = await Promise.all([
                this.propertyService.getExposedProperty({ id: this.propertyid, language: locale_controller.LocaleController.language }),
                this.setupService.getSetupEntriesByTableNameMulti(['_VAT_INCLUDED', '_SVC_CATEGORY', '_CITY_TAX_INCLUDED', '_SERVICE_CHARGE_INCLUDED']),
            ]);
            this.setupEntries = utils$1.groupEntryTablesResult(tableEntries);
            this.chargeCategoryRules = this.buildInitialRules();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    /**
     * Builds the initial charge rules map from property taxes and saved tax categories.
     * ACC (Accommodation) is seeded from the property's taxes array; service categories
     * are seeded from saved `tax_categories` or default to Not Applicable when absent.
     */
    buildInitialRules() {
        const taxCategories = calendarData.calendar_data.property?.tax_categories ?? [];
        const savedStrategy = calendarData.calendar_data.property?.taxation_strategy?.code;
        const accSetup = {
            vat: svcCategory_utils.toAccChargeRule(svcCategory_utils.findAccTax('vat')),
            cityTax: svcCategory_utils.toAccChargeRule(svcCategory_utils.findAccTax('city')),
            serviceCharge: svcCategory_utils.toAccChargeRule(svcCategory_utils.findAccTax('service')),
            taxationStrategy: savedStrategy ?? TaxationStrategy.Normal,
        };
        const rules = new Map();
        rules.set('ACC', accSetup);
        this.categories.forEach(c => {
            const match = taxCategories.find(tc => tc.category.code === c.CODE_NAME);
            rules.set(c.CODE_NAME, match ? { vat: { mode: match.taxation_mode.code, value: match.pct }, cityTax: null, serviceCharge: null, taxationStrategy: null } : this.createEmptyCategorySetup());
        });
        return rules;
    }
    /** Returns a default setup for a service category with all fields set to Not Applicable. */
    createEmptyCategorySetup() {
        return {
            vat: { mode: '002', value: null },
            cityTax: null,
            serviceCharge: null,
            taxationStrategy: null,
        };
    }
    /** Returns true when a charge rule has no percentage value set. */
    isChargeRuleEmpty(rule) {
        return !rule || rule.value === null || rule.value === undefined;
    }
    /**
     * Resolves the effective numeric value of a charge rule for payload submission.
     * Mode '002' (Not Applicable) always resolves to 0.
     */
    resolveChargeValue(rule) {
        if (!rule)
            return null;
        return rule.mode === '002' ? 0 : rule.value;
    }
    /** Updates the taxation strategy (Normal / Cumulative) for the ACC category. */
    handleTaxationStrategyChange(value) {
        const next = new Map(this.chargeCategoryRules);
        next.set('ACC', { ...next.get('ACC'), taxationStrategy: value });
        this.chargeCategoryRules = next;
    }
    /**
     * Updates a single charge field on a category.
     * When the ACC VAT changes, the new percentage is propagated to any service category
     * that still has an empty (unset) VAT value.
     */
    handleChargeRuleChange(categoryCode, field, nextRule) {
        const next = new Map(this.chargeCategoryRules);
        next.set(categoryCode, { ...next.get(categoryCode), [field]: nextRule });
        if (categoryCode === 'ACC' && field === 'vat') {
            this.categories.forEach(category => {
                const categorySetup = next.get(category.CODE_NAME);
                if (this.isChargeRuleEmpty(categorySetup?.vat)) {
                    next.set(category.CODE_NAME, { ...categorySetup, vat: { ...categorySetup.vat, value: nextRule.value } });
                }
            });
        }
        this.chargeCategoryRules = next;
    }
    /**
     * Top-level service categories eligible for their own VAT row here. Sub-categories grouped under
     * a parent (e.g. Breakfast/Minibar under `Accommodation`) are excluded — they share the group's rate,
     * configured on the Extra Services page instead. Synthesized group placeholders (a parent code
     * with no `svc_category` row of its own, like `Accommodation`) are excluded too: `Accommodation`'s rate already
     * mirrors the Accommodation row above, and it isn't a real backend category to submit.
     */
    get categories() {
        const svcCategories = this.setupEntries?.svc_category ?? [];
        const realCodes = new Set(svcCategories.map(s => s.CODE_NAME));
        return svcCategory_utils.getTopLevelSvcCategories(svcCategories).filter(s => realCodes.has(s.CODE_NAME) && !index$6.extraServicesCategories.has(s.CODE_NAME));
    }
    /** Assembles the API payload from the current charge rules state. */
    buildPayload() {
        const accSetup = this.chargeCategoryRules.get('ACC');
        const tax_categories = this.categories.map(category => {
            const setup = this.chargeCategoryRules.get(category.CODE_NAME);
            const taxMode = (this.setupEntries?.vat_included ?? []).find(v => v.CODE_NAME === setup?.vat?.mode);
            return {
                category: { code: category.CODE_NAME, description: category.CODE_VALUE_EN },
                taxation_mode: { code: setup?.vat?.mode ?? '', description: taxMode?.CODE_VALUE_EN ?? '' },
                pct: this.resolveChargeValue(setup?.vat) ?? 0,
            };
        });
        return {
            property_id: this.propertyid,
            VAT_INCLUDED_CODE: accSetup?.vat?.mode ?? null,
            VAT_PC: this.resolveChargeValue(accSetup?.vat) ?? null,
            CITY_TAX_INCLUDED_CODE: accSetup?.cityTax?.mode ?? null,
            CITY_TAX_PCT: this.resolveChargeValue(accSetup?.cityTax) ?? null,
            SERVICE_CHARGE_INCLUDED_CODE: accSetup?.serviceCharge?.mode ?? null,
            SERVICE_CHARGE_PCT: this.resolveChargeValue(accSetup?.serviceCharge) ?? null,
            tax_categories,
            TAXATION_STRATEGY: this.chargeCategoryRules.get('ACC').taxationStrategy,
        };
    }
    /** Validates and submits the tax configuration to the API. */
    async handleSubmit(e) {
        e.preventDefault();
        this.autoValidate = true;
        try {
            this.isSaving = true;
            const payload = this.buildPayload();
            await this.propertyService.handleExposedPropertyTaxCategories(payload);
            utils.showToast({
                title: t.t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }),
                type: 'success',
            });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isSaving = false;
        }
    }
    render() {
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        const accSetup = this.chargeCategoryRules.get('ACC');
        const filteredVat = (this.setupEntries?.vat_included ?? []).filter(v => v.CODE_NAME !== '000');
        const categories = this.categories;
        return (index.h("ir-page", { label: t.t('Lcz_TaxAndServiceCategories', { fallback: 'Tax & Service Categories' }), description: t.t('Lcz_TaxServiceCategoriesDescription', { fallback: 'Define taxes and service charges for room rates, cancellations, and on-property services.' }), "data-testid": "ir-tax-service-categories" }, index.h("ir-custom-button", { slot: "page-header", loading: this.isSaving, type: "submit", form: "tax-service-categories__form", style: { width: '100px' }, variant: "brand" }, t.t('Lcz_Save', { fallback: 'Save' })), index.h("form", { id: "tax-service-categories__form", onSubmit: e => this.handleSubmit(e) }, index.h("wa-card", { appearance: "plain", class: "tax-service-categories__card" }, index.h("div", { class: "tax-grid" }, index.h("div", { class: "tax-grid__header", "aria-hidden": "true" }, index.h("div", null), index.h("div", { class: "tax-grid__col-label" }, "VAT"), index.h("div", { class: "tax-grid__col-label" }, "City Tax"), index.h("div", { class: "tax-grid__col-label" }, t.t('Lcz_ServiceCharge', { fallback: 'Service Charge' })), index.h("div", { class: "tax-grid__col-label" }, t.t('Lcz_TaxationStrategy', { fallback: 'Taxation Strategy' }))), index.h("div", { class: "tax-grid__row" }, index.h("div", { class: "tax-grid__name" }, index.h("p", { class: "tax-grid__title" }, t.t('Lcz_Accommodation', { fallback: 'Accommodation' })), index.h("p", { class: "tax-grid__hint" }, t.t('Lcz_RoomRelatedChargesHint', { fallback: 'Room-related charges applied to reservations and cancellations' }))), index.h("div", { class: "tax-grid__cell", "data-label": t.t('Lcz_Vat', { fallback: 'VAT' }) }, index.h("ir-tax-input", { autoValidate: this.autoValidate, language: this.language, onTaxChange: e => this.handleChargeRuleChange('ACC', 'vat', e.detail), chargeRule: accSetup?.vat, setupEntries: this.setupEntries?.vat_included ?? [] })), index.h("div", { class: "tax-grid__cell", "data-label": t.t('Lcz_CityTaxColumn', { fallback: 'City Tax' }) }, index.h("ir-tax-input", { autoValidate: this.autoValidate, language: this.language, onTaxChange: e => this.handleChargeRuleChange('ACC', 'cityTax', e.detail), chargeRule: accSetup?.cityTax, setupEntries: this.setupEntries?.city_tax_included ?? [] })), index.h("div", { class: "tax-grid__cell", "data-label": t.t('Lcz_ServiceCharge', { fallback: 'Service Charge' }) }, index.h("ir-tax-input", { autoValidate: this.autoValidate, language: this.language, onTaxChange: e => this.handleChargeRuleChange('ACC', 'serviceCharge', e.detail), chargeRule: accSetup?.serviceCharge, setupEntries: this.setupEntries?.service_charge_included ?? [] })), index.h("div", { class: "tax-grid__cell", "data-label": t.t('Lcz_TaxationStrategy', { fallback: 'Taxation Strategy' }) }, index.h("wa-radio-group", { size: "s", orientation: "horizontal", value: accSetup?.taxationStrategy ?? TaxationStrategy.Normal, "onwa-change": (e) => this.handleTaxationStrategyChange(e.detail.value) }, index.h("wa-radio", { appearance: "button", value: TaxationStrategy.Normal }, t.t('Lcz_Normal', { fallback: 'Normal' })), index.h("wa-radio", { appearance: "button", value: TaxationStrategy.Cumulative }, t.t('Lcz_Cumulative', { fallback: 'Cumulative' }))))), categories.map(category => {
            const categorySetup = this.chargeCategoryRules.get(category.CODE_NAME);
            return [
                index.h("div", { class: "tax-grid__divider" }, index.h("wa-divider", null)),
                index.h("div", { class: "tax-grid__row" }, index.h("div", { class: "tax-grid__name" }, index.h("p", { class: "tax-grid__title" }, utils$1.getSetupEntryLabel(category)), category.NOTES && index.h("p", { class: "tax-grid__hint" }, category.NOTES)), index.h("div", { class: "tax-grid__cell", "data-label": t.t('Lcz_Vat', { fallback: 'VAT' }) }, index.h("ir-tax-input", { autoValidate: this.autoValidate, language: this.language, onTaxChange: e => this.handleChargeRuleChange(category.CODE_NAME, 'vat', e.detail), chargeRule: categorySetup?.vat, setupEntries: filteredVat })), index.h("div", { class: "tax-grid__cell" }), index.h("div", { class: "tax-grid__cell" }), index.h("div", { class: "tax-grid__cell" })),
            ];
        }))))));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }],
        "p": [{
                "handlePChange": 0
            }],
        "propertyid": [{
                "handlePropertyIdChange": 0
            }]
    }; }
};
IrTaxServiceCategories.style = irTaxServiceCategoriesCss();

function calculateTotalPersons(booking) {
    const sumOfOccupancy = ({ adult_nbr, children_nbr, infant_nbr }) => {
        return (adult_nbr ?? 0) + (children_nbr ?? 0) + (infant_nbr ?? 0);
    };
    return booking.rooms.reduce((prev, cur) => {
        return sumOfOccupancy(cur.occupancy) + prev;
    }, 0);
}
function getBookedAt(booking) {
    const bookedOn = booking.booked_on;
    const date = bookedOn?.date ? new Date(`${bookedOn.date}T${String(bookedOn.hour ?? 0).padStart(2, '0')}:${String(bookedOn.minute ?? 0).padStart(2, '0')}:00`) : null;
    return date && !Number.isNaN(date.getTime()) ? date.getTime() : 0;
}
function getGuestTotal(booking) {
    return Number(booking.guest_financial?.gross_total ?? 0);
}
function calculateUnvoicedGuestAmount(invoiceInfo) {
    return invoiceInfo?.invoiceable_items.filter(item => item.is_invoiceable).reduce((sum, item) => sum + item.amount, 0) ?? 0;
}
function mapBookingToUninvoicedRow(booking) {
    const totalGuestAmount = getGuestTotal(booking);
    return {
        booking_nbr: booking.booking_nbr,
        bookedAt: getBookedAt(booking),
        currencySymbol: booking.currency?.symbol ?? '$',
        totalGuestAmount,
        uninvoicedGuestAmount: calculateUnvoicedGuestAmount(booking.invoice_info),
        totalGuests: calculateTotalPersons(booking),
        raw: booking,
    };
}

const irUninvoicedBookingsCss = () => `.sc-ir-uninvoiced-bookings-h{display:block;--max-screen-width:1200px}@media (min-width: 1024px){.uninvoiced-bookings__page.sc-ir-uninvoiced-bookings::part(header){width:var(--max-screen-width);margin-inline:auto}}`;

const IrUninvoicedBookings = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    language = '';
    ticket = '';
    propertyid;
    p;
    baseUrl;
    isPageLoading = true;
    activeBookingNbr = null;
    activeGuestBookingNbr = null;
    ApiClient = new ApiClient.ApiClient();
    roomService = new room_service.RoomService();
    propertyService = new index$2.PropertyService();
    bookingListingService = new index$5.BookingListingService();
    propertyId;
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.uninvoicedBookings, () => this.initializeApp());
    componentWillLoad() {
        if (this.baseUrl) {
            this.ApiClient.setBaseUrl(this.baseUrl);
        }
        if (this.ticket !== '') {
            this.ApiClient.setApiClient(this.ticket);
            this.initializeApp();
        }
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.ApiClient.setApiClient(this.ticket);
        this.initializeApp();
    }
    async handleFiltersChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        uninvoiced_bookings_store.uninvoiced_bookings.tablePagination = { ...uninvoiced_bookings_store.uninvoiced_bookings.tablePagination, currentPage: 1 };
        await this.fetchUninvoicedBookings();
    }
    async handlePageChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.fetchUninvoicedBookings();
    }
    handleOpenBookingDetails(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.activeBookingNbr = e.detail;
    }
    handleGuestSelected(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.activeGuestBookingNbr = e.detail;
    }
    async initializeApp() {
        this.isPageLoading = true;
        try {
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.uninvoicedBookings });
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            let propertyId = this.propertyid;
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            this.propertyId = propertyId;
            // Bookings don't depend on language/criteria, so fetch all three concurrently.
            const [, criteria] = await Promise.all([
                localeReady,
                this.bookingListingService.getExposedBookingsCriteria({ property_id: propertyId, language: locale_controller.LocaleController.language }),
                this.fetchUninvoicedBookings(),
            ]);
            uninvoiced_bookings_store.setUninvoicedBookingsCriteria(criteria);
        }
        catch (error) {
            console.error('Error initializing uninvoiced bookings:', error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async fetchUninvoicedBookings() {
        uninvoiced_bookings_store.uninvoiced_bookings.isLoading = true;
        try {
            const { currentPage, pageSize } = uninvoiced_bookings_store.uninvoiced_bookings.tablePagination;
            const start_row = (currentPage - 1) * pageSize;
            const { bookings, total_count } = await this.propertyService.getExposedBookingsByInvoicedStatus({
                property_id: this.propertyId,
                booking_nbr: '',
                from_date: uninvoiced_bookings_store.uninvoiced_bookings.filters.from,
                to_date: uninvoiced_bookings_store.uninvoiced_bookings.filters.to,
                source: uninvoiced_bookings_store.uninvoiced_bookings.filters.source,
                is_totally_invoiced: false,
                start_row,
                end_row: start_row + pageSize,
            });
            uninvoiced_bookings_store.uninvoiced_bookings.rows = bookings.map(mapBookingToUninvoicedRow);
            uninvoiced_bookings_store.uninvoiced_bookings.totalCount = total_count;
        }
        catch (error) {
            console.error('Error fetching uninvoiced bookings:', error);
        }
        finally {
            uninvoiced_bookings_store.uninvoiced_bookings.isLoading = false;
        }
    }
    findRow(bookingNbr) {
        if (!bookingNbr) {
            return undefined;
        }
        return uninvoiced_bookings_store.uninvoiced_bookings.rows.find(row => row.booking_nbr === bookingNbr);
    }
    render() {
        if (this.isPageLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h("ir-page", { description: t.t('Lcz_UninvoicedBookingsDescription', { fallback: 'List of ended bookings with some services that have not been invoiced yet.' }), label: t.t('Lcz_UninvoicedPastBookings', { fallback: 'Uninvoiced Past Bookings' }), class: "uninvoiced-bookings__page" }, index.h("ir-unvoiced-bookings-filters", null), index.h("ir-unvoiced-bookings-table", null), index.h("ir-booking-details-drawer", { open: !!this.activeBookingNbr, propertyId: this.propertyId, bookingNumber: this.activeBookingNbr, ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.activeBookingNbr = null) }), index.h("ir-guest-info-drawer", { open: !!this.activeGuestBookingNbr, booking_nbr: this.activeGuestBookingNbr, email: this.findRow(this.activeGuestBookingNbr)?.raw.guest.email, language: this.language, onGuestInfoDrawerClosed: () => (this.activeGuestBookingNbr = null) })));
    }
    static get watchers() { return {
        "language": [{
                "languageChanged": 0
            }],
        "ticket": [{
                "ticketChanged": 0
            }]
    }; }
};
IrUninvoicedBookings.style = irUninvoicedBookingsCss();

const irUserManagementCss = () => `.sc-ir-user-management-h{display:block;height:100%}`;

const IrUserManagement = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    language = '';
    baseUrl;
    ticket;
    propertyid;
    p;
    isSuperAdmin = true;
    userTypeCode;
    baseUserTypeCode;
    userId;
    currentTrigger = null;
    user = null;
    isLoading = true;
    users = [];
    property_id;
    allowedUsersTypes = [];
    ApiClient = new ApiClient.ApiClient();
    roomService = new room_service.RoomService();
    userService = new user_service.UserService();
    bookingService = new booking_store.BookingService();
    setupService = new index$1.SetupService();
    userTypes = new Map();
    unsubscribeRealtime = null;
    superAdminId = '5';
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.userManagement, () => this.initializeApp());
    componentWillLoad() {
        if (this.baseUrl) {
            this.ApiClient.setBaseUrl(this.baseUrl);
        }
        if (this.ticket) {
            this.ApiClient.setApiClient(this.ticket);
            this.initializeApp();
        }
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.ApiClient.setApiClient(this.ticket);
        this.initializeApp();
    }
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.fetchUsers();
    }
    async initializeApp() {
        try {
            if (this.baseUrl) {
                this.ApiClient.setBaseUrl(this.baseUrl);
            }
            this.isLoading = true;
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.userManagement });
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            // let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.fetchUserTypes(), this.fetchUsers(), localeReady];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            await Promise.all(requests);
            this.unsubscribeRealtime = realtime_service.realtimeService.subscribe(this.property_id, async (msg) => {
                await this.handleSocketMessage(msg.reason, msg.payload);
            });
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async handleSocketMessage(reason, result) {
        const reasonHandlers = {
            EMAIL_VERIFIED: this.updateUserVerificationStatus,
        };
        const handler = reasonHandlers[reason];
        if (handler) {
            await handler.call(this, result);
        }
    }
    updateUserVerificationStatus(result) {
        const users = [...this.users];
        const idx = users.findIndex(u => u.id === result.id);
        if (idx === -1) {
            console.warn(`User ${result.id} not found`);
            return;
        }
        users[idx] = {
            ...users[idx],
            is_email_verified: true,
        };
        this.users = users;
    }
    async fetchUsers() {
        const users = await this.userService.getExposedPropertyUsers({ property_id: this.propertyid });
        this.users = [...users].sort((u1, u2) => {
            const priority = (u) => {
                const t = u.type.toString();
                if (t === this.superAdminId)
                    return 0;
                if (t === '17')
                    return 1;
                return 2;
            };
            //sort by priority
            const p1 = priority(u1), p2 = priority(u2);
            if (p1 !== p2) {
                return p1 - p2;
            }
            // //sort by user id
            // if (p1 === 1) {
            //   const id1 = u1.id.toString(),
            //     id2 = u2.id.toString(),
            //     me = this.userId.toString();
            //   if (id1 === me) return -1; // u1 is me → goes before u2
            //   if (id2 === me) return 1; // u2 is me → u1 goes after
            // }
            // 3) sort by username
            return u1.username.localeCompare(u2.username);
        });
    }
    async fetchUserTypes() {
        const res = await Promise.all([this.setupService.getSetupEntriesByTableName('_USER_TYPE'), this.bookingService.getLov()]);
        const allowedUsers = res[1]?.My_Result?.allowed_user_types;
        for (const e of res[0]) {
            const value = utils$1.getEntryValue({ entry: e, language: locale_controller.LocaleController.language });
            if (allowedUsers.find(f => f.code === e.CODE_NAME)) {
                this.allowedUsersTypes.push({ code: e.CODE_NAME, value });
            }
            this.userTypes.set(e.CODE_NAME.toString(), value);
        }
    }
    disconnectedCallback() {
        this.unsubscribeRealtime?.();
        this.unsubscribeRealtime = null;
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    render() {
        if (this.isLoading) {
            return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("ir-loading-screen", null)));
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", { suppressToastEndpoints: ['/Change_User_Pwd', '/Handle_Exposed_User'] }), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("h3", { class: "page-title" }, t.t('Lcz_ExtranetUsers', { fallback: 'Extranet Users' })), index.h("div", { class: "", style: { gap: '1rem' } }, index.h("ir-user-management-table", { property_id: this.property_id, baseUserTypeCode: this.baseUserTypeCode, allowedUsersTypes: this.allowedUsersTypes, userTypeCode: this.userTypeCode, haveAdminPrivileges: [this.superAdminId, '17'].includes(this.userTypeCode?.toString()), userTypes: this.userTypes, isSuperAdmin: this.userTypeCode?.toString() === this.superAdminId, users: this.users })))));
    }
    static get watchers() { return {
        "ticket": [{
                "ticketChanged": 0
            }],
        "language": [{
                "languageChanged": 0
            }]
    }; }
};
IrUserManagement.style = irUserManagementCss();

exports.igloo_calendar = IglooCalendar;
exports.ir_agents = IrAgents;
exports.ir_arrivals = IrArrivals;
exports.ir_booking_email_logs = IrBookingEmailLogs;
exports.ir_booking_listing = IrBookingListing;
exports.ir_channel = IrChannel;
exports.ir_city_ledger = IrCityLedger;
exports.ir_daily_revenue = IrDailyRevenue;
exports.ir_departures = IrDepartures;
exports.ir_extra_services_settings = IrExtraServicesSettings;
exports.ir_fiscal_documents = IrFiscalDocuments;
exports.ir_ghs_onboarding = IrGhsOnboarding;
exports.ir_hk_tasks = IrHkTasks;
exports.ir_housekeeping = IrHousekeeping;
exports.ir_locale_switcher = IrLocaleSwitcher;
exports.ir_meal_report = IrMealReport;
exports.ir_monthly_bookings_report = IrMonthlyBookingsReport;
exports.ir_payment_option = IrPaymentOption;
exports.ir_sales_by_channel = IrSalesByChannel;
exports.ir_sales_by_country = IrSalesByCountry;
exports.ir_tax_service_categories = IrTaxServiceCategories;
exports.ir_uninvoiced_bookings = IrUninvoicedBookings;
exports.ir_user_management = IrUserManagement;
