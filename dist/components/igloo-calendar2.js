import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { R as RoomService } from './room.service.js';
import { B as BookingService } from './booking.service.js';
import { q as formatLegendColors, k as calendar_dates, r as formatName, s as getRoomStatus, t as transformNewBooking, u as transformNewBLockedRooms, d as dateToFormattedString, w as bookingStatus, x as getPrivateNote, j as isBlockUnit, b as calculateDaysBetweenDates, y as getNextDay, z as addTwoMonthToDate, A as convertDMYToISO, B as computeEndDate } from './utils.js';
import { l as lookup } from './index4.js';
import { E as EventsService, d as defineCustomElement$_ } from './igl-booking-event-hover2.js';
import { h as hooks } from './moment.js';
import { T as ToBeAssignedService } from './toBeAssigned.service.js';
import { l as locales } from './locales.store.js';
import { c as calendar_data } from './calendar-data.js';
import { h as handleUnAssignedDatesChange, a as addUnassignedDates, r as removeUnassignedDates } from './unassigned_dates.store.js';
import { T as Token } from './Token.js';
import { v as v4 } from './v4.js';
import { d as defineCustomElement$14 } from './igl-application-info2.js';
import { d as defineCustomElement$13 } from './igl-block-dates-view2.js';
import { d as defineCustomElement$12 } from './igl-book-property2.js';
import { d as defineCustomElement$11 } from './igl-book-property-footer2.js';
import { d as defineCustomElement$10 } from './igl-book-property-header2.js';
import { d as defineCustomElement$$ } from './igl-booking-event2.js';
import { d as defineCustomElement$Z } from './igl-booking-form2.js';
import { d as defineCustomElement$Y } from './igl-booking-overview-page2.js';
import { d as defineCustomElement$X } from './igl-bulk-stop-sale2.js';
import { d as defineCustomElement$W } from './igl-cal-body2.js';
import { d as defineCustomElement$V } from './igl-cal-footer2.js';
import { d as defineCustomElement$U } from './igl-cal-header2.js';
import { d as defineCustomElement$T } from './igl-date-range2.js';
import { d as defineCustomElement$S } from './igl-legends2.js';
import { d as defineCustomElement$R } from './igl-property-booked-by2.js';
import { d as defineCustomElement$Q } from './igl-rate-plan2.js';
import { d as defineCustomElement$P } from './igl-room-type2.js';
import { d as defineCustomElement$O } from './igl-tba-booking-view2.js';
import { d as defineCustomElement$N } from './igl-tba-category-view2.js';
import { d as defineCustomElement$M } from './igl-to-be-assigned2.js';
import { d as defineCustomElement$L } from './ir-autocomplete2.js';
import { d as defineCustomElement$K } from './ir-booking-details2.js';
import { d as defineCustomElement$J } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$I } from './ir-booking-header2.js';
import { d as defineCustomElement$H } from './ir-button2.js';
import { d as defineCustomElement$G } from './ir-checkbox2.js';
import { d as defineCustomElement$F } from './ir-combobox2.js';
import { d as defineCustomElement$E } from './ir-country-picker2.js';
import { d as defineCustomElement$D } from './ir-date-picker2.js';
import { d as defineCustomElement$C } from './ir-date-range2.js';
import { d as defineCustomElement$B } from './ir-date-view2.js';
import { d as defineCustomElement$A } from './ir-dialog2.js';
import { d as defineCustomElement$z } from './ir-events-log2.js';
import { d as defineCustomElement$y } from './ir-extra-service2.js';
import { d as defineCustomElement$x } from './ir-extra-service-config2.js';
import { d as defineCustomElement$w } from './ir-extra-services2.js';
import { d as defineCustomElement$v } from './ir-guest-info2.js';
import { d as defineCustomElement$u } from './ir-icon2.js';
import { d as defineCustomElement$t } from './ir-icons2.js';
import { d as defineCustomElement$s } from './ir-input-text2.js';
import { d as defineCustomElement$r } from './ir-interactive-title2.js';
import { d as defineCustomElement$q } from './ir-interceptor2.js';
import { d as defineCustomElement$p } from './ir-label2.js';
import { d as defineCustomElement$o } from './ir-loading-screen2.js';
import { d as defineCustomElement$n } from './ir-modal2.js';
import { d as defineCustomElement$m } from './ir-otp2.js';
import { d as defineCustomElement$l } from './ir-otp-modal2.js';
import { d as defineCustomElement$k } from './ir-payment-actions2.js';
import { d as defineCustomElement$j } from './ir-payment-details2.js';
import { d as defineCustomElement$i } from './ir-phone-input2.js';
import { d as defineCustomElement$h } from './ir-pickup2.js';
import { d as defineCustomElement$g } from './ir-pickup-view2.js';
import { d as defineCustomElement$f } from './ir-pms-logs2.js';
import { d as defineCustomElement$e } from './ir-price-input2.js';
import { d as defineCustomElement$d } from './ir-reservation-information2.js';
import { d as defineCustomElement$c } from './ir-room2.js';
import { d as defineCustomElement$b } from './ir-room-guests2.js';
import { d as defineCustomElement$a } from './ir-room-nights2.js';
import { d as defineCustomElement$9 } from './ir-select2.js';
import { d as defineCustomElement$8 } from './ir-sidebar2.js';
import { d as defineCustomElement$7 } from './ir-spinner2.js';
import { d as defineCustomElement$6 } from './ir-textarea2.js';
import { d as defineCustomElement$5 } from './ir-title2.js';
import { d as defineCustomElement$4 } from './ir-toast2.js';
import { d as defineCustomElement$3 } from './ir-tooltip2.js';
import { d as defineCustomElement$2 } from './ir-weekday-selector2.js';
import { d as defineCustomElement$1 } from './ota-label2.js';

class BatchingQueue {
    constructor(processor, options) {
        this.queue = [];
        this.isProcessing = false;
        this.flushTimer = null;
        this.processor = processor;
        this.options = Object.assign({ maxQueueSize: 10000, onError: error => console.error('Queue processing error:', error), onBatchProcessed: () => { } }, options);
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
        this.ticket = '';
        this.calendarData = new Object();
        this.days = new Array();
        this.scrollViewDragging = false;
        this.dialogData = null;
        this.bookingItem = null;
        this.editBookingItem = null;
        this.showLegend = false;
        this.showPaymentDetails = false;
        this.showToBeAssigned = false;
        this.unassignedDates = {};
        this.roomNightsData = null;
        this.renderAgain = false;
        this.showBookProperty = false;
        this.totalAvailabilityQueue = [];
        this.isAuthenticated = false;
        this.bookingService = new BookingService();
        this.roomService = new RoomService();
        this.eventsService = new EventsService();
        this.toBeAssignedService = new ToBeAssignedService();
        // private auth = new Auth();
        this.countries = [];
        this.visibleCalendarCells = { x: [], y: [] };
        this.today = '';
        this.reachedEndOfCalendar = false;
        this.token = new Token();
        this.salesQueue = new BatchingQueue(this.processSalesBatch.bind(this), {
            batchSize: 50,
            flushInterval: 1000,
            maxQueueSize: 5000,
            onError: e => console.error('Batch Sales Update Error:', e),
        });
        this.roomTypeIdsCache = new Map();
        this.scrollViewDragPos = { top: 0, left: 0, x: 0, y: 0 };
        this.onScrollContentMoveHandler = (event) => {
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
        this.onScrollContentMoveEndHandler = () => {
            document.removeEventListener('mousemove', this.onScrollContentMoveHandler);
            document.removeEventListener('mouseup', this.onScrollContentMoveEndHandler);
        };
    }
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
        var _a;
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.dialogData = event.detail;
        (_a = this.calendarModalEl) === null || _a === void 0 ? void 0 : _a.openModal();
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
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: bookings });
    }
    handleUpdateBookingEvent(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const newBookingEvent = e.detail;
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: this.calendarData.bookingEvents.map(event => {
                if (newBookingEvent.ID === event.ID) {
                    return newBookingEvent;
                }
                return event;
            }) });
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
        var _a, _b;
        switch ((_a = this.dialogData) === null || _a === void 0 ? void 0 : _a.reason) {
            case 'checkin': {
                return `Are you sure you want to Check In this unit?`;
            }
            case 'checkout': {
                return 'Are you sure you want to Check Out this unit?';
            }
            case 'reallocate':
                return ((_b = this.dialogData) === null || _b === void 0 ? void 0 : _b.description) || '';
            default:
                return 'Unknown modal content';
        }
    }
    setUpCalendarData(roomResp, bookingResp) {
        console.log(roomResp);
        this.calendarData.currency = roomResp['My_Result'].currency;
        this.calendarData.allowedBookingSources = roomResp['My_Result'].allowed_booking_sources;
        this.calendarData.adultChildConstraints = roomResp['My_Result'].adult_child_constraints;
        console.log(this.calendarData.allowedBookingSources);
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
                });
                roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [
                this.bookingService.getCalendarData(propertyId, this.from_date, this.to_date),
                this.bookingService.getCountries(this.language),
                this.roomService.fetchLanguage(this.language),
            ];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            const results = await Promise.all(requests);
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
                this.unassignedDates = { fromDate: this.from_date, toDate: this.to_date, data: Object.assign(Object.assign({}, this.unassignedDates), data) };
                this.calendarData = Object.assign(Object.assign({}, this.calendarData), { unassignedDates: data });
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
            UPDATE_CALENDAR_AVAILABILITY: this.handleUpdateCalendarAvailability,
            CHANGE_IN_DUE_AMOUNT: this.handleChangeInDueAmount,
            CHANGE_IN_BOOK_STATUS: this.handleChangeInBookStatus,
            NON_TECHNICAL_CHANGE_IN_BOOKING: this.handleNonTechnicalChangeInBooking,
            ROOM_STATUS_CHANGED: this.handleRoomStatusChanged,
            UNIT_HK_STATUS_CHANGED: this.handleUnitHKStatusChanged,
            SHARING_PERSONS_UPDATED: this.handleSharingPersonsUpdated,
            ROOM_TYPE_CLOSE: r => this.salesQueue.offer(Object.assign(Object.assign({}, r), { is_available_to_book: false })),
            ROOM_TYPE_OPEN: r => this.salesQueue.offer(Object.assign(Object.assign({}, r), { is_available_to_book: true })),
        };
        const handler = reasonHandlers[REASON];
        if (handler) {
            await handler.call(this, result);
        }
        else {
            console.warn(`Unhandled REASON: ${REASON}`);
        }
    }
    handleSharingPersonsUpdated(result) {
        console.log('sharing persons updated', result);
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: [
                ...this.calendarData.bookingEvents.map(e => {
                    var _a;
                    if (e.IDENTIFIER === result.identifier) {
                        const mainGuest = (_a = result.guests) === null || _a === void 0 ? void 0 : _a.find(p => p.is_main);
                        return Object.assign(Object.assign({}, e), { NAME: formatName(mainGuest.first_name, mainGuest.last_name), ROOM_INFO: Object.assign(Object.assign({}, e.ROOM_INFO), { sharing_persons: result.guests }) });
                    }
                    return e;
                }),
            ] });
    }
    handleRoomStatusChanged(result) {
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: [
                ...this.calendarData.bookingEvents.map(e => {
                    if (e.IDENTIFIER === result.room_identifier) {
                        const STATUS = getRoomStatus({
                            from_date: e.FROM_DATE,
                            to_date: e.TO_DATE,
                            in_out: Object.assign(Object.assign({}, e.ROOM_INFO.in_out), { code: result.status }),
                            status_code: e.BASE_STATUS_CODE,
                        });
                        return Object.assign(Object.assign({}, e), { CHECKIN: result.status === '001', CHECKOUT: result.status === '002', STATUS });
                    }
                    return e;
                }),
            ] });
    }
    handleUnitHKStatusChanged(result) {
        console.log('hk unit change', result);
        const updatedRooms = [...this.calendarData.roomsInfo];
        const changedRoomTypeIdx = updatedRooms.findIndex((roomType) => roomType.id === result.ROOM_CATEGORY_ID);
        if (changedRoomTypeIdx !== -1) {
            const changedRoomType = Object.assign({}, updatedRooms[changedRoomTypeIdx]);
            const changedPhysicalRoomIdx = changedRoomType.physicalrooms.findIndex(room => room.id === result.PR_ID);
            if (changedPhysicalRoomIdx !== -1) {
                const updatedPhysicalRooms = [...changedRoomType.physicalrooms];
                const targetPhysicalRoom = Object.assign({}, updatedPhysicalRooms[changedPhysicalRoomIdx]);
                targetPhysicalRoom.hk_status = result.HKS_CODE;
                updatedPhysicalRooms[changedPhysicalRoomIdx] = targetPhysicalRoom;
                changedRoomType.physicalrooms = updatedPhysicalRooms;
                updatedRooms[changedRoomTypeIdx] = changedRoomType;
                this.calendarData = Object.assign(Object.assign({}, this.calendarData), { roomsInfo: updatedRooms });
            }
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
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: this.calendarData.bookingEvents.filter(e => e.POOL !== result) });
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
    handleUpdateCalendarAvailability(result) {
        this.totalAvailabilityQueue.push(result);
        if (this.totalAvailabilityQueue.length > 0) {
            clearTimeout(this.availabilityTimeout);
        }
        this.availabilityTimeout = setTimeout(() => {
            this.updateTotalAvailability();
        }, 1000);
    }
    handleChangeInDueAmount(result) {
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: this.calendarData.bookingEvents.map(event => {
                if (result.pools.includes(event.ID)) {
                    return Object.assign(Object.assign({}, event), { BALANCE: result.due_amount });
                }
                return event;
            }) });
    }
    handleChangeInBookStatus(result) {
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: this.calendarData.bookingEvents.map(event => {
                if (result.pools.includes(event.ID)) {
                    return Object.assign(Object.assign({}, event), { STATUS: event.STATUS !== 'IN-HOUSE' ? bookingStatus[result.status_code] : result.status_code === '001' ? bookingStatus[result.status_code] : 'IN-HOUSE' });
                }
                return event;
            }) });
    }
    handleNonTechnicalChangeInBooking(result) {
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: this.calendarData.bookingEvents.map(event => {
                if (event.BOOKING_NUMBER === result.booking_nbr) {
                    return Object.assign(Object.assign({}, event), { PRIVATE_NOTE: getPrivateNote(result.extras) });
                }
                return event;
            }) });
    }
    checkBookingAvailability(data) {
        return this.calendarData.bookingEvents.some(booking => booking.ID === data.ID || (booking.FROM_DATE === data.FROM_DATE && booking.TO_DATE === data.TO_DATE && booking.PR_ID === data.PR_ID));
    }
    updateBookingEventsDateRange(eventData) {
        eventData.forEach(bookingEvent => {
            var _a;
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
                    in_out: (_a = bookingEvent.ROOM_INFO) === null || _a === void 0 ? void 0 : _a.in_out,
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
            const updatedRateplans = roomType.rateplans.map((rp, i) => (i === ratePlanIdx ? Object.assign(Object.assign({}, rp), { is_available_to_book: sale.is_available_to_book }) : rp));
            const is_available_to_book = updatedRateplans.some(rp => rp.is_available_to_book);
            days[dayIdx].rate[roomTypeIdx] = Object.assign(Object.assign({}, roomType), { rateplans: updatedRateplans,
                // overall room availability = true if any rateplan is bookable
                is_available_to_book });
            disabled_cells.set(days[dayIdx].value, { disabled: is_available_to_book, reason: 'stop_sale' });
        }
        // 6) write back to the store
        calendar_dates['disabled_cells'] = new Map(disabled_cells);
        calendar_dates.days = days;
    }
    updateTotalAvailability() {
        let days = [...calendar_dates.days];
        this.totalAvailabilityQueue.forEach(queue => {
            let selectedDate = new Date(queue.date);
            selectedDate.setMilliseconds(0);
            selectedDate.setSeconds(0);
            selectedDate.setMinutes(0);
            selectedDate.setHours(0);
            //find the selected day
            const index = days.findIndex(day => day.currentDate === selectedDate.getTime());
            if (index != -1) {
                //find room_type_id
                const room_type_index = days[index].rate.findIndex(room => room.id === queue.room_type_id);
                if (room_type_index != -1) {
                    days[index].rate[room_type_index].exposed_inventory.rts = queue.availability;
                }
            }
        });
        calendar_dates.days = [...days];
    }
    setRoomsData(roomServiceResp) {
        var _a, _b;
        let roomsData = new Array();
        if ((_b = (_a = roomServiceResp.My_Result) === null || _a === void 0 ? void 0 : _a.roomtypes) === null || _b === void 0 ? void 0 : _b.length) {
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
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: bookings });
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
                this.showLegend = true;
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
                    if (!(opt === null || opt === void 0 ? void 0 : opt.noScroll)) {
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
        const results = await this.bookingService.getCalendarData(this.property_id, fromDate, toDate);
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
            this.calendarData = Object.assign(Object.assign({}, this.calendarData), { days: this.days, monthsInfo: [...newMonths, ...this.calendarData.monthsInfo], bookingEvents: [...this.calendarData.bookingEvents, ...bookings] });
            if (Math.abs(hooks().diff(hooks(fromDate, 'YYYY-MM-DD'), 'days')) <= 10) {
                const data = await this.toBeAssignedService.getUnassignedDates(this.property_id, fromDate, toDate);
                this.calendarData.unassignedDates = Object.assign(Object.assign({}, this.calendarData.unassignedDates), data);
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
            this.calendarData = Object.assign(Object.assign({}, this.calendarData), { days: this.days, monthsInfo: [...this.calendarData.monthsInfo, ...newMonths], bookingEvents: [...this.calendarData.bookingEvents, ...bookings] });
            const data = await this.toBeAssignedService.getUnassignedDates(this.property_id, fromDate, toDate);
            this.calendarData.unassignedDates = Object.assign(Object.assign({}, this.calendarData.unassignedDates), data);
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
            this.calDates = Object.assign(Object.assign({}, this.calDates), { from: dates.start.add(-1, 'days').format('YYYY-MM-DD') });
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
        var _a;
        // Helper to reset modal state
        const resetModalState = () => {
            this.dialogData = null;
        };
        try {
            switch ((_a = this.dialogData) === null || _a === void 0 ? void 0 : _a.reason) {
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
        var _a;
        if (((_a = this.dialogData) === null || _a === void 0 ? void 0 : _a.reason) === 'reallocate') {
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
        var _a;
        if (e.detail) {
            this.calendarSidebarState = null;
            if (this.editBookingItem) {
                this.editBookingItem = null;
            }
            if (this.roomNightsData) {
                this.revertBooking.emit(this.roomNightsData.pool);
                this.roomNightsData = null;
            }
            if (((_a = this.dialogData) === null || _a === void 0 ? void 0 : _a.reason) === 'reallocate') {
                this.revertBooking.emit(this.dialogData.pool);
                this.dialogData = null;
            }
        }
    }
    handleCloseBookingWindow() {
        this.bookingItem = null;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        // if (!this.isAuthenticated) {
        //   return <ir-login onAuthFinish={() => this.auth.setIsAuthenticated(true)}></ir-login>;
        // }
        return (h(Host, { key: '61224694a809ed7b41c9277ee220250255152896' }, h("ir-toast", { key: '4c96c6e24e3758401bf2d166c8ff43f0941dc302' }), h("ir-interceptor", { key: '113c82087ce2a43e879f0cf8d7929a7d7b700714' }), h("div", { key: '7a945a121d939370806d0988e88493b9d22de751', id: "iglooCalendar", class: { 'igl-calendar': true, 'showToBeAssigned': this.showToBeAssigned, 'showLegend': this.showLegend } }, this.shouldRenderCalendarView() ? (h(Fragment, { "data-testid": "ir-calendar" }, this.showToBeAssigned && (h("igl-to-be-assigned", { unassignedDatesProp: this.unassignedDates, to_date: this.to_date, from_date: this.from_date, propertyid: this.property_id, class: "tobeAssignedContainer", calendarData: this.calendarData, onOptionEvent: evt => this.onOptionSelect(evt) })), this.showLegend && h("igl-legends", { class: "legendContainer", legendData: this.calendarData.legendData, onOptionEvent: evt => this.onOptionSelect(evt) }), h("div", { class: "calendarScrollContainer", onMouseDown: event => this.dragScrollContent(event), onScroll: () => this.calendarScrolling() }, h("div", { id: "calendarContainer" }, h("igl-cal-header", { unassignedDates: this.unassignedDates, to_date: this.to_date, propertyid: this.property_id, today: this.today, calendarData: this.calendarData, highlightedDate: this.highlightedDate, onOptionEvent: evt => this.onOptionSelect(evt) }), h("igl-cal-body", { propertyId: this.property_id, language: this.language, countries: this.countries, currency: this.calendarData.currency, today: this.today, highlightedDate: this.highlightedDate, isScrollViewDragging: this.scrollViewDragging, calendarData: this.calendarData }), h("igl-cal-footer", { highlightedDate: this.highlightedDate, today: this.today, calendarData: this.calendarData, onOptionEvent: evt => this.onOptionSelect(evt) }))))) : (h("ir-loading-screen", { message: "Preparing Calendar Data" }))), this.bookingItem && (h("igl-book-property", { key: '9189e7fe14d9dc7a2cbbbc14aa51d0b97e1f97b3', allowedBookingSources: this.calendarData.allowedBookingSources, adultChildConstraints: this.calendarData.adultChildConstraints, showPaymentDetails: this.showPaymentDetails, countries: this.countries, currency: this.calendarData.currency, language: this.language, propertyid: this.property_id, bookingData: this.bookingItem, onCloseBookingWindow: () => this.handleCloseBookingWindow() })), h("ir-sidebar", { key: '195cf7d8d9fef8342c998ed34d48e95298d5fd40', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.calendarSidebarState || this.roomNightsData !== null || (this.editBookingItem && this.editBookingItem.event_type === 'EDIT_BOOKING'), showCloseButton: false, sidebarStyles: {
                width: ((_a = this.calendarSidebarState) === null || _a === void 0 ? void 0 : _a.type) === 'room-guests' ? '60rem' : this.editBookingItem ? '80rem' : 'var(--sidebar-width,40rem)',
                background: this.editBookingItem ? '#F2F3F8' : 'white',
            } }, this.roomNightsData && (h("ir-room-nights", { key: 'dfedf10cc914995b0a2494999ac10080d26b2f1a', slot: "sidebar-body", pool: this.roomNightsData.pool, onCloseRoomNightsDialog: this.handleRoomNightsDialogClose.bind(this), language: this.language, bookingNumber: this.roomNightsData.bookingNumber, identifier: this.roomNightsData.identifier, toDate: this.roomNightsData.to_date, fromDate: this.roomNightsData.from_date, defaultDates: this.roomNightsData.defaultDates, ticket: this.ticket, propertyId: this.property_id })), this.editBookingItem && this.editBookingItem.event_type === 'EDIT_BOOKING' && (h("ir-booking-details", { key: '67060fb636c20ef73d8e1e3db508ed6715c34732', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.editBookingItem = null), is_from_front_desk: true, propertyid: this.property_id, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.editBookingItem.BOOKING_NUMBER, ticket: this.ticket, language: this.language, hasRoomAdd: true })), ((_b = this.calendarSidebarState) === null || _b === void 0 ? void 0 : _b.type) === 'room-guests' && (h("ir-room-guests", { key: '4ad05e37a3bfb302f7ae4de7372aaffb5e598216', countries: this.countries, language: this.language, identifier: (_d = (_c = this.calendarSidebarState) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.identifier, bookingNumber: (_e = this.calendarSidebarState) === null || _e === void 0 ? void 0 : _e.payload.bookingNumber, roomName: (_g = (_f = this.calendarSidebarState) === null || _f === void 0 ? void 0 : _f.payload) === null || _g === void 0 ? void 0 : _g.roomName, totalGuests: (_j = (_h = this.calendarSidebarState) === null || _h === void 0 ? void 0 : _h.payload) === null || _j === void 0 ? void 0 : _j.totalGuests, sharedPersons: (_l = (_k = this.calendarSidebarState) === null || _k === void 0 ? void 0 : _k.payload) === null || _l === void 0 ? void 0 : _l.sharing_persons, slot: "sidebar-body", checkIn: (_o = (_m = this.calendarSidebarState) === null || _m === void 0 ? void 0 : _m.payload) === null || _o === void 0 ? void 0 : _o.checkin, onCloseModal: () => (this.calendarSidebarState = null) })), ((_p = this.calendarSidebarState) === null || _p === void 0 ? void 0 : _p.type) === 'bulk-blocks' && (h("igl-bulk-stop-sale", { key: 'e6d337a3086ca8d39b5221e5b484ad24a69feda5', slot: "sidebar-body", onCloseModal: () => (this.calendarSidebarState = null) }))), h("ir-modal", { key: 'bf40e56dfe489c874b594569c828fee8f652fba2', ref: el => (this.calendarModalEl = el), modalTitle: '', rightBtnActive: ((_q = this.dialogData) === null || _q === void 0 ? void 0 : _q.reason) === 'reallocate' ? !this.dialogData.hideConfirmButton : true, leftBtnText: (_r = locales === null || locales === void 0 ? void 0 : locales.entries) === null || _r === void 0 ? void 0 : _r.Lcz_Cancel, rightBtnText: (_s = locales === null || locales === void 0 ? void 0 : locales.entries) === null || _s === void 0 ? void 0 : _s.Lcz_Confirm, modalBody: this.renderModalBody(), onConfirmModal: this.handleModalConfirm.bind(this), onCancelModal: this.handleModalCancel.bind(this) })));
    }
    get element() { return this; }
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
        "totalAvailabilityQueue": [32],
        "highlightedDate": [32],
        "calDates": [32],
        "isAuthenticated": [32],
        "calendarSidebarState": [32]
    }, [[0, "deleteButton", "handleDeleteEvent"], [8, "openCalendarSidebar", "handleCalendarSidebarEvents"], [8, "scrollPageToRoom", "scrollPageToRoom"], [0, "showDialog", "handleShowDialog"], [0, "showRoomNightsDialog", "handleShowRoomNightsDialog"], [0, "addBookingDatasEvent", "handleBookingDatasChange"], [0, "updateBookingEvent", "handleUpdateBookingEvent"], [8, "showBookingPopup", "showBookingPopupEventDataHandler"], [0, "updateEventData", "updateEventDataHandler"], [0, "dragOverEventData", "dragOverEventDataHandler"]], {
        "ticket": ["ticketChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igloo-calendar", "igl-application-info", "igl-block-dates-view", "igl-book-property", "igl-book-property-footer", "igl-book-property-header", "igl-booking-event", "igl-booking-event-hover", "igl-booking-form", "igl-booking-overview-page", "igl-bulk-stop-sale", "igl-cal-body", "igl-cal-footer", "igl-cal-header", "igl-date-range", "igl-legends", "igl-property-booked-by", "igl-rate-plan", "igl-room-type", "igl-tba-booking-view", "igl-tba-category-view", "igl-to-be-assigned", "ir-autocomplete", "ir-booking-details", "ir-booking-extra-note", "ir-booking-header", "ir-button", "ir-checkbox", "ir-combobox", "ir-country-picker", "ir-date-picker", "ir-date-range", "ir-date-view", "ir-dialog", "ir-events-log", "ir-extra-service", "ir-extra-service-config", "ir-extra-services", "ir-guest-info", "ir-icon", "ir-icons", "ir-input-text", "ir-interactive-title", "ir-interceptor", "ir-label", "ir-loading-screen", "ir-modal", "ir-otp", "ir-otp-modal", "ir-payment-actions", "ir-payment-details", "ir-phone-input", "ir-pickup", "ir-pickup-view", "ir-pms-logs", "ir-price-input", "ir-reservation-information", "ir-room", "ir-room-guests", "ir-room-nights", "ir-select", "ir-sidebar", "ir-spinner", "ir-textarea", "ir-title", "ir-toast", "ir-tooltip", "ir-weekday-selector", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "igloo-calendar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglooCalendar);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$14();
            }
            break;
        case "igl-block-dates-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$13();
            }
            break;
        case "igl-book-property":
            if (!customElements.get(tagName)) {
                defineCustomElement$12();
            }
            break;
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$11();
            }
            break;
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$10();
            }
            break;
        case "igl-booking-event":
            if (!customElements.get(tagName)) {
                defineCustomElement$$();
            }
            break;
        case "igl-booking-event-hover":
            if (!customElements.get(tagName)) {
                defineCustomElement$_();
            }
            break;
        case "igl-booking-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$Z();
            }
            break;
        case "igl-booking-overview-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$Y();
            }
            break;
        case "igl-bulk-stop-sale":
            if (!customElements.get(tagName)) {
                defineCustomElement$X();
            }
            break;
        case "igl-cal-body":
            if (!customElements.get(tagName)) {
                defineCustomElement$W();
            }
            break;
        case "igl-cal-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$V();
            }
            break;
        case "igl-cal-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$U();
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$T();
            }
            break;
        case "igl-legends":
            if (!customElements.get(tagName)) {
                defineCustomElement$S();
            }
            break;
        case "igl-property-booked-by":
            if (!customElements.get(tagName)) {
                defineCustomElement$R();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$Q();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$P();
            }
            break;
        case "igl-tba-booking-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$O();
            }
            break;
        case "igl-tba-category-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$N();
            }
            break;
        case "igl-to-be-assigned":
            if (!customElements.get(tagName)) {
                defineCustomElement$M();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$L();
            }
            break;
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$K();
            }
            break;
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$J();
            }
            break;
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$I();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$H();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$G();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$F();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-extra-service-config":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-guest-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-interactive-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-payment-actions":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-payment-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-pickup-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-price-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-room-guests":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-room-nights":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-sidebar":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-textarea":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-tooltip":
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