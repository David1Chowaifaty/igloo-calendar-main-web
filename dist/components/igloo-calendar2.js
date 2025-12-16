import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { R as RoomService } from './room.service.js';
import { B as BookingService } from './booking.service.js';
import { x as formatLegendColors, k as calendar_dates, y as addCleaningTasks, z as formatName, A as getRoomStatus, B as cleanRoom, C as addRoomForCleaning, t as transformNewBooking, D as transformNewBLockedRooms, d as dateToFormattedString, E as bookingStatus, F as getPrivateNote, j as isBlockUnit, b as calculateDaysBetweenDates, G as getNextDay, H as addTwoMonthToDate, I as convertDMYToISO, J as computeEndDate } from './utils.js';
import { l as lookup } from './index5.js';
import { E as EventsService } from './events.service.js';
import { h as hooks } from './moment.js';
import { T as ToBeAssignedService } from './toBeAssigned.service.js';
import { l as locales } from './locales.store.js';
import { c as calendar_data } from './calendar-data.js';
import { h as handleUnAssignedDatesChange, a as addUnassignedDates, r as removeUnassignedDates } from './unassigned_dates.store.js';
import { T as Token } from './Token.js';
import { v as v4 } from './v4.js';
import { H as HouseKeepingService } from './housekeeping.service.js';
import { h as housekeeping_store } from './housekeeping.store.js';
import { d as defineCustomElement$1I } from './igl-application-info2.js';
import { d as defineCustomElement$1H } from './igl-block-dates-view2.js';
import { d as defineCustomElement$1G } from './igl-book-property2.js';
import { d as defineCustomElement$1F } from './igl-book-property-footer2.js';
import { d as defineCustomElement$1E } from './igl-book-property-header2.js';
import { d as defineCustomElement$1D } from './igl-booking-event2.js';
import { d as defineCustomElement$1C } from './igl-booking-event-hover2.js';
import { d as defineCustomElement$1B } from './igl-booking-form2.js';
import { d as defineCustomElement$1A } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$1z } from './igl-bulk-block2.js';
import { d as defineCustomElement$1y } from './igl-bulk-operations2.js';
import { d as defineCustomElement$1x } from './igl-bulk-stop-sale2.js';
import { d as defineCustomElement$1w } from './igl-cal-body2.js';
import { d as defineCustomElement$1v } from './igl-cal-footer2.js';
import { d as defineCustomElement$1u } from './igl-cal-header2.js';
import { d as defineCustomElement$1t } from './igl-date-range2.js';
import { d as defineCustomElement$1s } from './igl-legends2.js';
import { d as defineCustomElement$1r } from './igl-property-booked-by2.js';
import { d as defineCustomElement$1q } from './igl-rate-plan2.js';
import { d as defineCustomElement$1p } from './igl-reallocation-dialog2.js';
import { d as defineCustomElement$1o } from './igl-room-type2.js';
import { d as defineCustomElement$1n } from './igl-split-booking2.js';
import { d as defineCustomElement$1m } from './igl-tba-booking-view2.js';
import { d as defineCustomElement$1l } from './igl-tba-category-view2.js';
import { d as defineCustomElement$1k } from './igl-to-be-assigned2.js';
import { d as defineCustomElement$1j } from './ir-applicable-policies2.js';
import { d as defineCustomElement$1i } from './ir-billing2.js';
import { d as defineCustomElement$1h } from './ir-billing-drawer2.js';
import { d as defineCustomElement$1g } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$1f } from './ir-booking-company-dialog2.js';
import { d as defineCustomElement$1e } from './ir-booking-company-form2.js';
import { d as defineCustomElement$1d } from './ir-booking-details2.js';
import { d as defineCustomElement$1c } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$1b } from './ir-booking-guarantee2.js';
import { d as defineCustomElement$1a } from './ir-booking-header2.js';
import { d as defineCustomElement$19 } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$18 } from './ir-button2.js';
import { d as defineCustomElement$17 } from './ir-checkbox2.js';
import { d as defineCustomElement$16 } from './ir-checkout-dialog2.js';
import { d as defineCustomElement$15 } from './ir-country-picker2.js';
import { d as defineCustomElement$14 } from './ir-custom-button2.js';
import { d as defineCustomElement$13 } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$12 } from './ir-date-picker2.js';
import { d as defineCustomElement$11 } from './ir-date-view2.js';
import { d as defineCustomElement$10 } from './ir-dialog2.js';
import { d as defineCustomElement$$ } from './ir-drawer2.js';
import { d as defineCustomElement$_ } from './ir-dropdown2.js';
import { d as defineCustomElement$Z } from './ir-dropdown-item2.js';
import { d as defineCustomElement$Y } from './ir-empty-state2.js';
import { d as defineCustomElement$X } from './ir-events-log2.js';
import { d as defineCustomElement$W } from './ir-extra-service2.js';
import { d as defineCustomElement$V } from './ir-extra-service-config2.js';
import { d as defineCustomElement$U } from './ir-extra-service-config-form2.js';
import { d as defineCustomElement$T } from './ir-extra-services2.js';
import { d as defineCustomElement$S } from './ir-guest-info-drawer2.js';
import { d as defineCustomElement$R } from './ir-guest-info-form2.js';
import { d as defineCustomElement$Q } from './ir-icon2.js';
import { d as defineCustomElement$P } from './ir-icons2.js';
import { d as defineCustomElement$O } from './ir-input2.js';
import { d as defineCustomElement$N } from './ir-input-text2.js';
import { d as defineCustomElement$M } from './ir-interactive-title2.js';
import { d as defineCustomElement$L } from './ir-interceptor2.js';
import { d as defineCustomElement$K } from './ir-invoice2.js';
import { d as defineCustomElement$J } from './ir-invoice-form2.js';
import { d as defineCustomElement$I } from './ir-label2.js';
import { d as defineCustomElement$H } from './ir-loading-screen2.js';
import { d as defineCustomElement$G } from './ir-mobile-input2.js';
import { d as defineCustomElement$F } from './ir-modal2.js';
import { d as defineCustomElement$E } from './ir-new-badge2.js';
import { d as defineCustomElement$D } from './ir-otp2.js';
import { d as defineCustomElement$C } from './ir-otp-modal2.js';
import { d as defineCustomElement$B } from './ir-payment-details2.js';
import { d as defineCustomElement$A } from './ir-payment-folio2.js';
import { d as defineCustomElement$z } from './ir-payment-folio-form2.js';
import { d as defineCustomElement$y } from './ir-payment-item2.js';
import { d as defineCustomElement$x } from './ir-payment-summary2.js';
import { d as defineCustomElement$w } from './ir-payments-folio2.js';
import { d as defineCustomElement$v } from './ir-picker2.js';
import { d as defineCustomElement$u } from './ir-picker-item2.js';
import { d as defineCustomElement$t } from './ir-pickup2.js';
import { d as defineCustomElement$s } from './ir-pickup-form2.js';
import { d as defineCustomElement$r } from './ir-pickup-view2.js';
import { d as defineCustomElement$q } from './ir-pms-logs2.js';
import { d as defineCustomElement$p } from './ir-popover2.js';
import { d as defineCustomElement$o } from './ir-preview-screen-dialog2.js';
import { d as defineCustomElement$n } from './ir-price-input2.js';
import { d as defineCustomElement$m } from './ir-print-room2.js';
import { d as defineCustomElement$l } from './ir-printing-extra-service2.js';
import { d as defineCustomElement$k } from './ir-printing-label2.js';
import { d as defineCustomElement$j } from './ir-printing-pickup2.js';
import { d as defineCustomElement$i } from './ir-proforma-invoice-preview2.js';
import { d as defineCustomElement$h } from './ir-radio2.js';
import { d as defineCustomElement$g } from './ir-reservation-information2.js';
import { d as defineCustomElement$f } from './ir-room2.js';
import { d as defineCustomElement$e } from './ir-room-guests2.js';
import { d as defineCustomElement$d } from './ir-room-guests-form2.js';
import { d as defineCustomElement$c } from './ir-room-nights2.js';
import { d as defineCustomElement$b } from './ir-select2.js';
import { d as defineCustomElement$a } from './ir-sidebar2.js';
import { d as defineCustomElement$9 } from './ir-spinner2.js';
import { d as defineCustomElement$8 } from './ir-success-loader2.js';
import { d as defineCustomElement$7 } from './ir-tabs2.js';
import { d as defineCustomElement$6 } from './ir-title2.js';
import { d as defineCustomElement$5 } from './ir-toast2.js';
import { d as defineCustomElement$4 } from './ir-unit-tag2.js';
import { d as defineCustomElement$3 } from './ir-validator2.js';
import { d as defineCustomElement$2 } from './ir-weekday-selector2.js';
import { d as defineCustomElement$1 } from './ota-label2.js';

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
        return v4();
    }
}

const iglooCalendarCss = ".sc-igloo-calendar-h{display:block;position:relative;background-color:#ffffff;height:100%;text-align:center}.igl-calendar.sc-igloo-calendar{display:grid;grid-template-columns:1fr;height:100%}.calendarScrollContainer.sc-igloo-calendar{width:100%;height:100%;overflow:auto;position:relative;white-space:nowrap;border-left:2px solid grey}.showToBeAssigned.sc-igloo-calendar,.showLegend.sc-igloo-calendar{grid-template-columns:330px 1fr}#calendarContainer.sc-igloo-calendar{position:absolute}.legendContainer.sc-igloo-calendar,.tobeAssignedContainer.sc-igloo-calendar{display:none;height:100%;overflow-y:auto;padding-left:0.5em !important;padding-right:0.5em !important}.showToBeAssigned.sc-igloo-calendar .tobeAssignedContainer.sc-igloo-calendar{display:block}.showLegend.sc-igloo-calendar .legendContainer.sc-igloo-calendar{display:block}.tobeBooked.sc-igloo-calendar{padding-top:8px;padding-bottom:8px;text-align:left}";
const IglooCalendarStyle0 = iglooCalendarCss;

const IglooCalendar = /*@__PURE__*/ proxyCustomElement(class IglooCalendar extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.dragOverHighlightElement = createEvent(this, "dragOverHighlightElement", 7);
        this.moveBookingTo = createEvent(this, "moveBookingTo", 7);
        this.calculateUnassignedDates = createEvent(this, "calculateUnassignedDates", 7);
        this.reduceAvailableUnitEvent = createEvent(this, "reduceAvailableUnitEvent", 7);
        this.revertBooking = createEvent(this, "revertBooking", 7);
        this.openCalendarSidebar = createEvent(this, "openCalendarSidebar", 7);
        this.showRoomNightsDialog = createEvent(this, "showRoomNightsDialog", 7);
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
    get element() { return this; }
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
    unassignedDates = {};
    roomNightsData = null;
    renderAgain = false;
    showBookProperty = false;
    highlightedDate;
    calDates;
    isAuthenticated = false;
    calendarSidebarState;
    invoiceState = null;
    dragOverHighlightElement;
    moveBookingTo;
    calculateUnassignedDates;
    reduceAvailableUnitEvent;
    revertBooking;
    openCalendarSidebar;
    showRoomNightsDialog;
    bookingService = new BookingService();
    roomService = new RoomService();
    eventsService = new EventsService();
    toBeAssignedService = new ToBeAssignedService();
    housekeepingService = new HouseKeepingService();
    // private auth = new Auth();
    countries = [];
    visibleCalendarCells = { x: [], y: [] };
    scrollContainer;
    today = '';
    reachedEndOfCalendar = false;
    socket;
    token = new Token();
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
    roomTypeIdsCache = new Map();
    tasksEndDate;
    dialogEl;
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
        this.init();
    }
    componentDidLoad() {
        this.scrollToElement(this.today);
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
        if (event.detail.id === 'CALCULATE_DRAG_OVER_BOUNDS') {
            let topLeftCell = document.querySelector('igl-cal-header .topLeftCell');
            let containerDays = document.querySelectorAll('.headersContainer .headerCell');
            let containerRooms = document.querySelectorAll('.bodyContainer .roomRow .roomTitle');
            this.visibleCalendarCells = { x: [], y: [] };
            containerDays.forEach(element => {
                const htmlElement = element;
                this.visibleCalendarCells.x.push({
                    left: htmlElement.offsetLeft + topLeftCell.offsetWidth,
                    width: htmlElement.offsetWidth,
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
            this.highlightDragOver(true, event.detail.data);
        }
        else if (event.detail.id === 'DRAG_OVER') {
            this.highlightDragOver(true, event.detail.data);
        }
        else if (event.detail.id === 'DRAG_OVER_END') {
            this.highlightDragOver(false, event.detail.data);
        }
        else if (event.detail.id === 'STRETCH_OVER_END') {
            this.highlightDragOver(false, event.detail.data);
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    init() {
        this.calDates = {
            from: this.from_date,
            to: this.to_date,
        };
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
        this.calDates = {
            from: this.from_date,
            to: this.to_date,
        };
        handleUnAssignedDatesChange('unassigned_dates', newValue => {
            if (Object.keys(newValue).length === 0 && this.highlightedDate !== '') {
                this.highlightedDate = '';
            }
        });
    }
    renderModalBody() {
        switch (this.dialogData?.reason) {
            case 'checkin': {
                const unitName = this.dialogData.roomName;
                if (unitName) {
                    return `Are you sure you want to check in unit ${unitName}?`;
                }
                return `Are you sure you want to check in this unit?`;
            }
            case 'checkout': {
                return 'Are you sure you want to Check Out this unit?';
            }
            case 'reallocate':
                return this.dialogData?.description || '';
            case 'stretch':
                return 'Warning ';
            default:
                return 'Unknown modal content';
        }
    }
    setUpCalendarData(roomResp, bookingResp) {
        this.calendarData.currency = roomResp['My_Result'].currency;
        this.calendarData.allowedBookingSources = roomResp['My_Result'].allowed_booking_sources;
        this.calendarData.adultChildConstraints = roomResp['My_Result'].adult_child_constraints;
        this.calendarData.legendData = this.getLegendData(roomResp);
        this.calendarData.is_vacation_rental = roomResp['My_Result'].is_vacation_rental;
        this.calendarData.from_date = bookingResp.My_Params_Get_Rooming_Data.FROM;
        this.calendarData.to_date = bookingResp.My_Params_Get_Rooming_Data.TO;
        this.calendarData.startingDate = new Date(bookingResp.My_Params_Get_Rooming_Data.FROM).getTime();
        this.calendarData.endingDate = new Date(bookingResp.My_Params_Get_Rooming_Data.TO).getTime();
        this.calendarData.formattedLegendData = formatLegendColors(this.calendarData.legendData);
        let bookings = bookingResp.myBookings || [];
        bookings = bookings.filter(bookingEvent => {
            const toDate = hooks(bookingEvent.TO_DATE, 'YYYY-MM-DD');
            const fromDate = hooks(bookingEvent.FROM_DATE, 'YYYY-MM-DD');
            return !toDate.isSame(fromDate);
        });
        this.calendarData.bookingEvents = bookings;
        this.calendarData.toBeAssignedEvents = [];
    }
    async initializeApp() {
        try {
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
                    language: this.language,
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
                this.bookingService.getCountries(this.language),
                this.roomService.fetchLanguage(this.language),
                this.housekeepingService.getExposedHKSetup(this.property_id),
            ];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                    include_sales_rate_plans: true,
                }));
            }
            const results = await Promise.all(requests);
            // this.tasksEndDate=housekeeping_store?.hk_criteria?.cleaning_periods[housekeeping_store?.hk_criteria?.cleaning_periods.length - 1].code
            this.tasksEndDate = hooks().add(30, 'days').format('YYYY-MM-DD');
            this.getHousekeepingTasks({
                from_date: hooks().format('YYYY-MM-DD'),
                to_date: this.tasksEndDate,
            });
            if (!roomResp) {
                roomResp = results[results.length - 1];
            }
            const [bookingResp, countries] = results;
            calendar_dates.days = bookingResp.days;
            calendar_dates.months = bookingResp.months;
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
            calendar_dates.fromDate = this.calendarData.from_date;
            calendar_dates.toDate = this.calendarData.to_date;
            setTimeout(() => {
                this.scrollToElement(this.today);
            }, 200);
            if (!this.calendarData.is_vacation_rental) {
                const data = await this.toBeAssignedService.getUnassignedDates(this.property_id, this.from_date, this.to_date);
                this.unassignedDates = { fromDate: this.from_date, toDate: this.to_date, data: { ...this.unassignedDates, ...data } };
                this.calendarData = { ...this.calendarData, unassignedDates: data };
                addUnassignedDates(data);
            }
            this.socket = lookup('https://realtime.igloorooms.com/');
            this.socket.on('MSG', async (msg) => {
                await this.handleSocketMessage(msg);
            });
        }
        catch (error) {
            console.error('Initializing Calendar Error', error);
        }
    }
    async getHousekeepingTasks({ from_date, to_date }) {
        const { tasks } = await this.housekeepingService.getHkTasks({
            property_id: this.property_id,
            from_date,
            to_date,
            housekeepers: [],
            cleaning_frequency: (calendar_data.cleaning_frequency ?? housekeeping_store?.hk_criteria?.cleaning_frequencies[0])?.code,
            dusty_window: housekeeping_store?.hk_criteria?.dusty_periods[0]?.code,
            highlight_window: housekeeping_store?.hk_criteria?.highlight_checkin_options[0]?.code,
        });
        addCleaningTasks(tasks);
    }
    async handleSocketMessage(msg) {
        const msgAsObject = JSON.parse(msg);
        if (!msgAsObject) {
            return;
        }
        const { REASON, KEY, PAYLOAD } = msgAsObject;
        if (KEY.toString() !== this.property_id.toString()) {
            return;
        }
        let result;
        if (['DELETE_CALENDAR_POOL', 'GET_UNASSIGNED_DATES'].includes(REASON)) {
            result = PAYLOAD;
        }
        else {
            result = JSON.parse(PAYLOAD);
        }
        console.log({ [REASON]: result });
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
        };
        const handler = reasonHandlers[REASON];
        if (handler) {
            await handler.call(this, result);
        }
        else {
            console.warn(`Unhandled REASON: ${REASON}`);
        }
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
                        return { ...e, NAME: formatName(mainGuest.first_name, mainGuest.last_name), ROOM_INFO: { ...e.ROOM_INFO, sharing_persons: result.guests } };
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
                        const STATUS = getRoomStatus({
                            from_date: e.FROM_DATE,
                            to_date: e.TO_DATE,
                            in_out: { ...e.ROOM_INFO.in_out, code: result.status },
                            status_code: e.BASE_STATUS_CODE,
                        });
                        return {
                            ...e,
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
        cleanRoom({ date: result.DATE, unitId: result.PR_ID });
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
        const roomPayload = { date: hooks().format('YYYY-MM-DD'), unitId: result.PR_ID };
        if (result.HKS_CODE === '002') {
            addRoomForCleaning(roomPayload);
        }
        else {
            cleanRoom(roomPayload);
        }
    }
    async handleDoReservation(result) {
        const transformedBooking = transformNewBooking(result);
        this.AddOrUpdateRoomBookings(transformedBooking);
    }
    async handleBlockExposedUnit(result) {
        const transformedBooking = [await transformNewBLockedRooms(result)];
        this.AddOrUpdateRoomBookings(transformedBooking);
    }
    async handleAssignExposedRoom(result) {
        console.log(result);
        const transformedBooking = transformNewBooking(result);
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
    async handleGetUnassignedDates(result) {
        const parsedResult = this.parseDateRange(result);
        if (!this.calendarData.is_vacation_rental &&
            new Date(parsedResult.FROM_DATE).getTime() >= this.calendarData.startingDate &&
            new Date(parsedResult.TO_DATE).getTime() <= this.calendarData.endingDate) {
            const data = await this.toBeAssignedService.getUnassignedDates(this.property_id, dateToFormattedString(new Date(parsedResult.FROM_DATE)), dateToFormattedString(new Date(parsedResult.TO_DATE)));
            addUnassignedDates(data);
            this.unassignedDates = {
                fromDate: dateToFormattedString(new Date(parsedResult.FROM_DATE)),
                toDate: dateToFormattedString(new Date(parsedResult.TO_DATE)),
                data,
            };
            if (Object.keys(data).length === 0) {
                removeUnassignedDates(dateToFormattedString(new Date(parsedResult.FROM_DATE)), dateToFormattedString(new Date(parsedResult.TO_DATE)));
                this.reduceAvailableUnitEvent.emit({
                    fromDate: dateToFormattedString(new Date(parsedResult.FROM_DATE)),
                    toDate: dateToFormattedString(new Date(parsedResult.TO_DATE)),
                });
            }
        }
    }
    parseDateRange(str) {
        const result = {};
        const pairs = str.split('|');
        pairs.forEach(pair => {
            const res = pair.split(':');
            result[res[0]] = res[1];
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
                        STATUS: event.STATUS !== 'IN-HOUSE' ? bookingStatus[result.status_code] : result.status_code === '001' ? bookingStatus[result.status_code] : 'IN-HOUSE',
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
                    return { ...event, PRIVATE_NOTE: getPrivateNote(result.extras) };
                }
                return event;
            }),
        };
    }
    checkBookingAvailability(data) {
        return this.calendarData.bookingEvents.some(booking => booking.ID === data.ID || (booking.FROM_DATE === data.FROM_DATE && booking.TO_DATE === data.TO_DATE && booking.PR_ID === data.PR_ID));
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
            if (!isBlockUnit(bookingEvent.STATUS_CODE)) {
                // if (calendar_data.checkin_enabled) {
                bookingEvent.STATUS = getRoomStatus({
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
        const days = [...calendar_dates.days];
        const disabled_cells = new Map(calendar_dates.disabled_cells);
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
        calendar_dates['disabled_cells'] = new Map(disabled_cells);
        calendar_dates.days = days;
    }
    processAvailabilityBatch(batch) {
        let days = [...calendar_dates.days];
        const disabled_cells = new Map(calendar_dates.disabled_cells);
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
        calendar_dates['disabled_cells'] = new Map(disabled_cells);
        calendar_dates.days = [...days];
    }
    setRoomsData(roomServiceResp) {
        let roomsData = new Array();
        if (roomServiceResp.My_Result?.roomtypes?.length) {
            roomsData = roomServiceResp.My_Result.roomtypes;
            roomServiceResp.My_Result.roomtypes.forEach(roomCategory => {
                roomCategory.expanded = true;
            });
        }
        calendar_data.roomsInfo = roomsData;
        this.calendarData.roomsInfo = roomsData;
    }
    getLegendData(aData) {
        return aData['My_Result'].calendar_legends;
    }
    getDateStr(date, locale = 'default') {
        return date.getDate() + ' ' + date.toLocaleString(locale, { month: 'short' }) + ' ' + date.getFullYear();
    }
    scrollToElement(goToDate) {
        this.scrollContainer = this.scrollContainer || this.element.querySelector('.calendarScrollContainer');
        const topLeftCell = this.element.querySelector('.topLeftCell');
        const gotoDay = this.element.querySelector('.day-' + goToDate);
        if (gotoDay) {
            this.scrollContainer.scrollTo({ left: 0 });
            const gotoRect = gotoDay.getBoundingClientRect();
            const containerRect = this.scrollContainer.getBoundingClientRect();
            const topLeftCellRect = topLeftCell.getBoundingClientRect();
            this.scrollContainer.scrollTo({
                left: gotoRect.left - containerRect.left - topLeftCellRect.width - gotoRect.width,
            });
        }
    }
    AddOrUpdateRoomBookings(data, pool = undefined) {
        let bookings = [...this.calendarData.bookingEvents];
        data.forEach(d => {
            if (!this.checkBookingAvailability(d)) {
                bookings = bookings.filter(booking => booking.ID !== d.ID);
            }
        });
        this.updateBookingEventsDateRange(data);
        if (pool) {
            bookings = bookings.filter(booking => booking.POOL === pool);
        }
        data.forEach(d => {
            if (!bookings.some(booking => booking.ID === d.ID)) {
                bookings.push(d);
            }
        });
        this.calendarData = {
            ...this.calendarData,
            bookingEvents: bookings,
        };
        const isDateInBetweenTheLastPeriodDate = (d) => {
            const endDate = hooks(this.tasksEndDate, 'YYYY-MM-DD');
            // return moment(d.FROM_DATE, 'YYYY-MM-DD').isBetween(moment(), endDate) || moment(d.TO_DATE, 'YYYY-MM-DD').isBetween(moment(), endDate);
            return hooks(d.FROM_DATE, 'YYYY-MM-DD').isSameOrBefore(endDate, 'date') || hooks(d.TO_DATE, 'YYYY-MM-DD').isSameOrBefore(endDate, 'date');
        };
        if (data.some(isDateInBetweenTheLastPeriodDate)) {
            this.getHousekeepingTasks({
                from_date: hooks().format('YYYY-MM-DD'),
                to_date: this.tasksEndDate,
            });
        }
    }
    transformDateForScroll(date) {
        return hooks(date).format('D_M_YYYY');
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
                calendarElement.classList.toggle('showToBeAssigned');
                this.showLegend = false;
                this.showToBeAssigned = true;
                break;
            case 'showLegend':
                calendarElement.classList.remove('showToBeAssigned');
                calendarElement.classList.remove('showLegend');
                calendarElement.classList.toggle('showLegend');
                this.showLegend = !this.showLegend;
                this.showToBeAssigned = false;
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
        const newBookings = results.myBookings || [];
        this.updateBookingEventsDateRange(newBookings);
        if (new Date(fromDate).getTime() < new Date(this.calendarData.startingDate).getTime()) {
            this.calendarData.startingDate = new Date(fromDate).getTime();
            this.calendarData.from_date = fromDate;
            calendar_dates.fromDate = this.calendarData.from_date;
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
                    this.calendarData.bookingEvents[existingBookingIndex].NO_OF_DAYS = calculateDaysBetweenDates(newBooking.FROM_DATE, this.calendarData.bookingEvents[existingBookingIndex].TO_DATE);
                    return false;
                }
                return true;
            });
            calendar_dates.days = this.days;
            this.calendarData = {
                ...this.calendarData,
                days: this.days,
                monthsInfo: [...newMonths, ...this.calendarData.monthsInfo],
                bookingEvents: [...this.calendarData.bookingEvents, ...bookings],
            };
            if (Math.abs(hooks().diff(hooks(fromDate, 'YYYY-MM-DD'), 'days')) <= 10) {
                const data = await this.toBeAssignedService.getUnassignedDates(this.property_id, fromDate, toDate);
                this.calendarData.unassignedDates = { ...this.calendarData.unassignedDates, ...data };
                this.unassignedDates = {
                    fromDate,
                    toDate,
                    data,
                };
                addUnassignedDates(data);
            }
        }
        else {
            this.calendarData.endingDate = new Date(toDate).getTime();
            this.calendarData.to_date = toDate;
            calendar_dates.toDate = this.calendarData.to_date;
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
                    this.calendarData.bookingEvents[existingBookingIndex].NO_OF_DAYS = calculateDaysBetweenDates(this.calendarData.bookingEvents[existingBookingIndex].FROM_DATE, newBooking.TO_DATE);
                    return false;
                }
                return true;
            });
            calendar_dates.days = this.days;
            //calendar_dates.months = bookingResp.months;
            this.calendarData = {
                ...this.calendarData,
                days: this.days,
                monthsInfo: [...this.calendarData.monthsInfo, ...newMonths],
                bookingEvents: [...this.calendarData.bookingEvents, ...bookings],
            };
            const data = await this.toBeAssignedService.getUnassignedDates(this.property_id, fromDate, toDate);
            this.calendarData.unassignedDates = { ...this.calendarData.unassignedDates, ...data };
            this.unassignedDates = {
                fromDate,
                toDate,
                data,
            };
            addUnassignedDates(data);
        }
    }
    async handleDateSearch(dates) {
        const startDate = hooks(dates.start).toDate();
        const defaultFromDate = hooks(this.calDates.from).toDate();
        const endDate = dates.end.toDate();
        const defaultToDate = this.calendarData.endingDate;
        if (startDate.getTime() < new Date(this.calDates.from).getTime()) {
            await this.addDatesToCalendar(hooks(startDate).add(-1, 'days').format('YYYY-MM-DD'), hooks(defaultFromDate).add(-1, 'days').format('YYYY-MM-DD'));
            this.calDates = { ...this.calDates, from: dates.start.add(-1, 'days').format('YYYY-MM-DD') };
            this.scrollToElement(this.transformDateForScroll(startDate));
        }
        else if (startDate.getTime() > defaultFromDate.getTime() && startDate.getTime() < defaultToDate && endDate.getTime() < defaultToDate) {
            this.scrollToElement(this.transformDateForScroll(startDate));
        }
        else if (startDate.getTime() > defaultToDate) {
            const nextDay = getNextDay(new Date(this.calendarData.endingDate));
            await this.addDatesToCalendar(nextDay, hooks(endDate).add(2, 'months').format('YYYY-MM-DD'));
            this.scrollToElement(this.transformDateForScroll(startDate));
        }
    }
    closeSideMenu() {
        // const calendarElement = this.element.querySelector('#iglooCalendar');
        // calendarElement.classList.remove('showToBeAssigned');
        // calendarElement.classList.remove('showLegend');
        this.showLegend = false;
        this.showToBeAssigned = false;
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
            const containerRect = this.scrollContainer.getBoundingClientRect();
            let leftSideMenuSize = 170;
            let maxWidth = containerRect.width - leftSideMenuSize;
            let leftX = containerRect.x + leftSideMenuSize;
            let rightX = containerRect.x + containerRect.width;
            let cells = Array.from(this.element.querySelectorAll('.monthCell'));
            if (cells.length) {
                cells.map(async (monthContainer) => {
                    let monthRect = monthContainer.getBoundingClientRect();
                    if (cells.indexOf(monthContainer) === cells.length - 1) {
                        if (monthRect.x + monthRect.width <= rightX && !this.reachedEndOfCalendar) {
                            this.reachedEndOfCalendar = true;
                            //await this.addNextTwoMonthsToCalendar();
                            const nextTwoMonths = addTwoMonthToDate(new Date(this.calendarData.endingDate));
                            const nextDay = getNextDay(new Date(this.calendarData.endingDate));
                            await this.addDatesToCalendar(nextDay, nextTwoMonths);
                            this.reachedEndOfCalendar = false;
                        }
                    }
                    if (monthRect.x + monthRect.width < leftX) ;
                    else if (monthRect.x > rightX) ;
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
                        titleElement.style.marginLeft = marginLeft + 'px';
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
            xElement = this.visibleCalendarCells.x.find(pos => pos.left < currentPosition.x && currentPosition.x <= pos.left + pos.width);
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
                from_date: convertDMYToISO(xElement && xElement.id),
                to_date: computeEndDate(xElement && xElement.id, currentPosition.nbOfDays),
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
            this.revertBooking.emit(this.roomNightsData.pool);
        }
        this.roomNightsData = null;
    }
    handleSideBarToggle(e) {
        if (e.detail) {
            this.calendarSidebarState = null;
            if (this.editBookingItem) {
                this.editBookingItem = null;
            }
            if (this.roomNightsData) {
                this.revertBooking.emit(this.roomNightsData.pool);
                this.roomNightsData = null;
            }
            if (this.dialogData?.reason === 'reallocate') {
                this.revertBooking.emit(this.dialogData.pool);
                this.dialogData = null;
            }
        }
    }
    handleCloseBookingWindow() {
        this.bookingItem = null;
    }
    get isSidebarOpen() {
        // 1) Always open when editing a booking
        if (this.editBookingItem && this.editBookingItem.event_type === 'EDIT_BOOKING') {
            return true;
        }
        // 2) Open when room nights dialog is showing in the sidebar
        if (this.roomNightsData) {
            return true;
        }
        // 3) Open for sidebar-based flows (but not room-guests, which uses <ir-room-guests>)
        if (this.calendarSidebarState) {
            const type = this.calendarSidebarState.type;
            return type === 'split' || type === 'bulk-blocks';
        }
        // 4) Default: closed
        return false;
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
        return (h(Host, { key: 'f4304aef13802aecf17629bb9d6b3f865153ff65' }, h("ir-toast", { key: '7247016929fd6226b9409ee9785edbedb70c212c' }), h("ir-interceptor", { key: 'c1122a559b4b4f511d88d5f8f4689619a4a068c6' }), h("div", { key: 'cf1f6f9ce978aae2df5eef5cc0b077a97220d637', id: "iglooCalendar", class: { 'igl-calendar': true, 'showToBeAssigned': this.showToBeAssigned, 'showLegend': this.showLegend } }, this.shouldRenderCalendarView() ? (h(Fragment, { "data-testid": "ir-calendar" }, this.showToBeAssigned && (h("igl-to-be-assigned", { unassignedDatesProp: this.unassignedDates, to_date: this.to_date, from_date: this.from_date, propertyid: this.property_id, class: "tobeAssignedContainer", calendarData: this.calendarData, onOptionEvent: evt => this.onOptionSelect(evt) })), this.showLegend && h("igl-legends", { class: "legendContainer", legendData: this.calendarData.legendData, onOptionEvent: evt => this.onOptionSelect(evt) }), h("div", { class: "calendarScrollContainer", onMouseDown: event => this.dragScrollContent(event), onScroll: () => this.calendarScrolling() }, h("div", { id: "calendarContainer" }, h("igl-cal-header", { unassignedDates: this.unassignedDates, to_date: this.to_date, propertyid: this.property_id, today: this.today, calendarData: this.calendarData, highlightedDate: this.highlightedDate, onOptionEvent: evt => this.onOptionSelect(evt) }), h("igl-cal-body", { propertyId: this.property_id, language: this.language, countries: this.countries, currency: this.calendarData.currency, today: this.today, highlightedDate: this.highlightedDate, isScrollViewDragging: this.scrollViewDragging, calendarData: this.calendarData }), h("igl-cal-footer", { isLegendOpen: this.showLegend, highlightedDate: this.highlightedDate, today: this.today, calendarData: this.calendarData, onOptionEvent: evt => this.onOptionSelect(evt) }))))) : (h("ir-loading-screen", { message: "Preparing Calendar Data" }))), this.bookingItem && (h("igl-book-property", { key: '9d134c0ee742739dfa5a11faa6f7085c4c3b0265', allowedBookingSources: this.calendarData.allowedBookingSources, adultChildConstraints: this.calendarData.adultChildConstraints, showPaymentDetails: this.showPaymentDetails, countries: this.countries, currency: this.calendarData.currency, language: this.language, propertyid: this.property_id, bookingData: this.bookingItem, onCloseBookingWindow: () => this.handleCloseBookingWindow() })), h("ir-sidebar", { key: '9121696461be3bd52f02feb64bfadbffd6925361', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: this.isSidebarOpen, showCloseButton: false, sidebarStyles: {
                width: this.calendarSidebarState?.type === 'room-guests' ? '60rem' : this.editBookingItem ? '80rem' : 'var(--sidebar-width,40rem)',
                background: this.editBookingItem ? '#F2F3F8' : 'white',
            } }, this.roomNightsData && (h("ir-room-nights", { key: '213e9606ee4f4523e125f3299fd33e34de24a9b5', slot: "sidebar-body", pool: this.roomNightsData.pool, onCloseRoomNightsDialog: this.handleRoomNightsDialogClose.bind(this), language: this.language, bookingNumber: this.roomNightsData.bookingNumber, identifier: this.roomNightsData.identifier, toDate: this.roomNightsData.to_date, fromDate: this.roomNightsData.from_date, defaultDates: this.roomNightsData.defaultDates, ticket: this.ticket, propertyId: this.property_id })), this.calendarSidebarState?.type === 'split' && (h("igl-split-booking", { key: '03ca2c74352591097559da676e3766b056f2b824', slot: "sidebar-body", booking: this.calendarSidebarState?.payload?.booking, identifier: this.calendarSidebarState?.payload?.identifier, onCloseModal: () => (this.calendarSidebarState = null) })), this.editBookingItem && this.editBookingItem.event_type === 'EDIT_BOOKING' && (h("ir-booking-details", { key: '492312b80afb6abdf79336fae7cde9b2b62cc25f', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.editBookingItem = null), is_from_front_desk: true, propertyid: this.property_id, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.editBookingItem.BOOKING_NUMBER, ticket: this.ticket, language: this.language, hasRoomAdd: true })), this.calendarSidebarState?.type === 'bulk-blocks' && (h("igl-bulk-operations", { key: 'c036ddbc8cfc4069e588fb9aadba763c2bf93bc8', slot: "sidebar-body", property_id: this.property_id, onCloseModal: () => (this.calendarSidebarState = null) })
        // <igl-bulk-stop-sale slot="sidebar-body" property_id={this.property_id} onCloseModal={() => (this.calendarSidebarState = null)}></igl-bulk-stop-sale>
        )), h("ir-room-guests", { key: 'e724ad4219b50d869ae12c2eb5301639be79d09d', open: this.calendarSidebarState?.type === 'room-guests', countries: this.countries, language: this.language, identifier: this.calendarSidebarState?.payload?.identifier, bookingNumber: this.calendarSidebarState?.payload?.bookingNumber, roomName: this.calendarSidebarState?.payload?.roomName, totalGuests: this.calendarSidebarState?.payload?.totalGuests, sharedPersons: this.calendarSidebarState?.payload?.sharing_persons, checkIn: true, onCloseModal: () => (this.calendarSidebarState = null) }), h("igl-reallocation-dialog", { key: '01f79bdd146a68b2816a5c60e5bdb689364251ab', onResetModalState: () => (this.dialogData = null), onDialogClose: () => this.handleModalCancel(), data: this.dialogData?.reason === 'reallocate' ? this.dialogData : undefined }), h("ir-modal", { key: '04a65dc7fc508b40a8108da79b5a596765bed12f', ref: el => (this.calendarModalEl = el), modalTitle: 'lol', rightBtnActive: this.dialogData?.reason === 'reallocate' ? !this.dialogData.hideConfirmButton : true, leftBtnText: locales?.entries?.Lcz_Cancel, rightBtnText: locales?.entries?.Lcz_Confirm, modalBody: this.renderModalBody(), onConfirmModal: this.handleModalConfirm.bind(this), onCancelModal: this.handleModalCancel.bind(this) }), h("ir-checkout-dialog", { key: 'c5d923cce97362eb9957883e572e40bad300822e', style: { textAlign: 'start' }, booking: this.dialogData?.reason === 'checkout' ? this.dialogData?.booking : null, identifier: this.dialogData?.reason === 'checkout' ? this.dialogData?.roomIdentifier : null, open: this.dialogData?.reason === 'checkout', onCheckoutDialogClosed: event => this.handleCheckoutDialogClosed(event) }), h("ir-invoice", { key: '6478c41de04486f5a6478c591f34c041ca1cc019', style: { textAlign: 'start' }, onInvoiceClose: event => this.handleInvoiceClose(event), booking: this.invoiceState?.booking, roomIdentifier: this.invoiceState?.identifier, open: this.invoiceState !== null })));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
    static get style() { return IglooCalendarStyle0; }
}, [2, "igloo-calendar", {
        "propertyid": [2],
        "from_date": [1025],
        "to_date": [1],
        "language": [1],
        "loadingMessage": [1, "loading-message"],
        "currencyName": [1, "currency-name"],
        "ticket": [1],
        "p": [1],
        "baseUrl": [1, "base-url"],
        "calendarData": [32],
        "property_id": [32],
        "days": [32],
        "scrollViewDragging": [32],
        "dialogData": [32],
        "bookingItem": [32],
        "editBookingItem": [32],
        "showLegend": [32],
        "showPaymentDetails": [32],
        "showToBeAssigned": [32],
        "unassignedDates": [32],
        "roomNightsData": [32],
        "renderAgain": [32],
        "showBookProperty": [32],
        "highlightedDate": [32],
        "calDates": [32],
        "isAuthenticated": [32],
        "calendarSidebarState": [32],
        "invoiceState": [32]
    }, [[0, "deleteButton", "handleDeleteEvent"], [8, "openCalendarSidebar", "handleCalendarSidebarEvents"], [8, "scrollPageToRoom", "scrollPageToRoom"], [0, "showDialog", "handleShowDialog"], [0, "showRoomNightsDialog", "handleShowRoomNightsDialog"], [0, "addBookingDatasEvent", "handleBookingDatasChange"], [0, "updateBookingEvent", "handleUpdateBookingEvent"], [8, "showBookingPopup", "showBookingPopupEventDataHandler"], [0, "updateEventData", "updateEventDataHandler"], [0, "dragOverEventData", "dragOverEventDataHandler"]], {
        "ticket": ["ticketChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igloo-calendar", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-footer", "igl-book-property-header", "igl-booking-event", "igl-booking-event-hover", "igl-booking-form", "igl-booking-overview-page", "igl-bulk-block", "igl-bulk-operations", "igl-bulk-stop-sale", "igl-cal-body", "igl-cal-footer", "igl-cal-header", "igl-date-range", "igl-legends", "igl-property-booked-by", "igl-rate-plan", "igl-reallocation-dialog", "igl-room-type", "igl-split-booking", "igl-tba-booking-view", "igl-tba-category-view", "igl-to-be-assigned", "ir-applicable-policies", "ir-billing", "ir-billing-drawer", "ir-booking-billing-recipient", "ir-booking-company-dialog", "ir-booking-company-form", "ir-booking-details", "ir-booking-extra-note", "ir-booking-guarantee", "ir-booking-header", "ir-booking-status-tag", "ir-button", "ir-checkbox", "ir-checkout-dialog", "ir-country-picker", "ir-custom-button", "ir-custom-date-picker", "ir-date-picker", "ir-date-view", "ir-dialog", "ir-drawer", "ir-dropdown", "ir-dropdown-item", "ir-empty-state", "ir-events-log", "ir-extra-service", "ir-extra-service-config", "ir-extra-service-config-form", "ir-extra-services", "ir-guest-info-drawer", "ir-guest-info-form", "ir-icon", "ir-icons", "ir-input", "ir-input-text", "ir-interactive-title", "ir-interceptor", "ir-invoice", "ir-invoice-form", "ir-label", "ir-loading-screen", "ir-mobile-input", "ir-modal", "ir-new-badge", "ir-otp", "ir-otp-modal", "ir-payment-details", "ir-payment-folio", "ir-payment-folio-form", "ir-payment-item", "ir-payment-summary", "ir-payments-folio", "ir-picker", "ir-picker-item", "ir-pickup", "ir-pickup-form", "ir-pickup-view", "ir-pms-logs", "ir-popover", "ir-preview-screen-dialog", "ir-price-input", "ir-print-room", "ir-printing-extra-service", "ir-printing-label", "ir-printing-pickup", "ir-proforma-invoice-preview", "ir-radio", "ir-reservation-information", "ir-room", "ir-room-guests", "ir-room-guests-form", "ir-room-nights", "ir-select", "ir-sidebar", "ir-spinner", "ir-success-loader", "ir-tabs", "ir-title", "ir-toast", "ir-unit-tag", "ir-validator", "ir-weekday-selector", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "igloo-calendar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglooCalendar);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$1I();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$1H();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$1G();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1F();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$1E();
            }
            break;
        case "igl-booking-event":
            if (!customElements.get(tagName)) {
                defineCustomElement$1D();
            }
            break;
        case "igl-booking-event-hover":
            if (!customElements.get(tagName)) {
                defineCustomElement$1C();
            }
            break;
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1B();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$1A();
            }
            break;
        case "igl-bulk-block":
            if (!customElements.get(tagName)) {
                defineCustomElement$1z();
            }
            break;
        case "igl-bulk-operations":
            if (!customElements.get(tagName)) {
                defineCustomElement$1y();
            }
            break;
        case "igl-bulk-stop-sale":
            if (!customElements.get(tagName)) {
                defineCustomElement$1x();
            }
            break;
        case "igl-cal-body":
            if (!customElements.get(tagName)) {
                defineCustomElement$1w();
            }
            break;
        case "igl-cal-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1v();
            }
            break;
        case "igl-cal-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$1u();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$1t();
            }
            break;
        case "igl-legends":
            if (!customElements.get(tagName)) {
                defineCustomElement$1s();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$1r();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$1q();
            }
            break;
        case "igl-reallocation-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1p();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$1o();
            }
            break;
        case "igl-split-booking":
            if (!customElements.get(tagName)) {
                defineCustomElement$1n();
            }
            break;
        case "igl-tba-booking-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$1m();
            }
            break;
        case "igl-tba-category-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$1l();
            }
            break;
        case "igl-to-be-assigned":
            if (!customElements.get(tagName)) {
                defineCustomElement$1k();
            }
            break;
        case "ir-applicable-policies":
            if (!customElements.get(tagName)) {
                defineCustomElement$1j();
            }
            break;
        case "ir-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$1i();
            }
            break;
        case "ir-billing-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1h();
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$1g();
            }
            break;
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1f();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1e();
            }
            break;
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$1d();
            }
            break;
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$1c();
            }
            break;
        case "ir-booking-guarantee":
            if (!customElements.get(tagName)) {
                defineCustomElement$1b();
            }
            break;
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$1a();
            }
            break;
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$19();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$18();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$17();
            }
            break;
        case "ir-checkout-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$16();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$15();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$14();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$13();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$12();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$11();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$10();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$$();
            }
            break;
        case "ir-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$_();
            }
            break;
        case "ir-dropdown-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$Z();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$Y();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$X();
            }
            break;
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$W();
            }
            break;
        case "ir-extra-service-config":
            if (!customElements.get(tagName)) {
                defineCustomElement$V();
            }
            break;
        case "ir-extra-service-config-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$U();
            }
            break;
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                defineCustomElement$T();
            }
            break;
        case "ir-guest-info-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$S();
            }
            break;
        case "ir-guest-info-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$R();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$Q();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$P();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$O();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$N();
            }
            break;
        case "ir-interactive-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$M();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$L();
            }
            break;
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                defineCustomElement$K();
            }
            break;
        case "ir-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$J();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$I();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$H();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$G();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$F();
            }
            break;
        case "ir-new-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-payment-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "ir-payment-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "ir-payment-folio-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-payment-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-payments-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-pickup-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-pickup-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-preview-screen-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-price-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-print-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-printing-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-printing-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-printing-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-proforma-invoice-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-radio":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-room-guests":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-room-guests-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-room-nights":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-sidebar":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-success-loader":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-tabs":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-unit-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-weekday-selector":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ota-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglooCalendar as I, defineCustomElement as d };

//# sourceMappingURL=igloo-calendar2.js.map