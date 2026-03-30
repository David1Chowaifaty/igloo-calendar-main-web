'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const room_service = require('./room.service-f9117e70.js');
const booking_service = require('./booking.service-56109c03.js');
const utils = require('./utils-7364dac0.js');
const index$1 = require('./index-84e84862.js');
const events_service = require('./events.service-fd791f1d.js');
const moment = require('./moment-1780b03a.js');
const toBeAssigned_service = require('./toBeAssigned.service-94775917.js');
const booking = require('./booking-9b5a7f1e.js');
const locales_store = require('./locales.store-32782582.js');
const calendarData = require('./calendar-data-70bc3b4b.js');
const unassigned_dates_store = require('./unassigned_dates.store-4a879984.js');
const Token = require('./Token-8fd11984.js');
const v4 = require('./v4-9b297151.js');
const housekeeping_service = require('./housekeeping.service-edfa9983.js');
const agents_service = require('./agents.service-0d65fa76.js');
const property_service = require('./property.service-89d8059b.js');
const arrivals_store = require('./arrivals.store-18526bc8.js');
const axios = require('./axios-6e678d52.js');
const booking_listing_service = require('./booking_listing.service-c8edd9e1.js');
const departures_store = require('./departures.store-fd391b3f.js');
const hkTasks_store = require('./hk-tasks.store-3e893ff1.js');
const user_service = require('./user.service-b02a9652.js');
require('./index-8bb117a0.js');
require('./index-fbf1fe1d.js');
require('./type-393ac773.js');

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

const iglooCalendarCss = ".sc-igloo-calendar-h{display:block;position:relative;background-color:#ffffff;height:100%;text-align:center}.igl-calendar.sc-igloo-calendar{display:grid;grid-template-columns:1fr;height:100%}.calendarScrollContainer.sc-igloo-calendar{width:100%;height:100%;overflow:auto;position:relative;white-space:nowrap}.showToBeAssigned.sc-igloo-calendar,.showLegend.sc-igloo-calendar{grid-template-columns:350px 1fr}.showLegend.sc-igloo-calendar{grid-template-columns:auto 1fr}#calendarContainer.sc-igloo-calendar{position:absolute}.legendContainer.sc-igloo-calendar,.tobeAssignedContainer.sc-igloo-calendar{display:none;height:100%;overflow-y:auto;padding-left:0.5em !important;padding-right:0.5em !important}.tobeAssignedContainer.sc-igloo-calendar,.legendContainer.sc-igloo-calendar{padding-left:0em !important;padding-right:0em !important}.showToBeAssigned.sc-igloo-calendar .tobeAssignedContainer.sc-igloo-calendar{display:block}.showLegend.sc-igloo-calendar .legendContainer.sc-igloo-calendar{display:block}.tobeBooked.sc-igloo-calendar{padding-top:8px;padding-bottom:8px;text-align:left}";
const IglooCalendarStyle0 = iglooCalendarCss;

const IglooCalendar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dragOverHighlightElement = index.createEvent(this, "dragOverHighlightElement", 7);
        this.moveBookingTo = index.createEvent(this, "moveBookingTo", 7);
        this.calculateUnassignedDates = index.createEvent(this, "calculateUnassignedDates", 7);
        this.reduceAvailableUnitEvent = index.createEvent(this, "reduceAvailableUnitEvent", 7);
        this.revertBooking = index.createEvent(this, "revertBooking", 7);
        this.openCalendarSidebar = index.createEvent(this, "openCalendarSidebar", 7);
        this.showRoomNightsDialog = index.createEvent(this, "showRoomNightsDialog", 7);
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
    bookingService = new booking_service.BookingService();
    roomService = new room_service.RoomService();
    eventsService = new events_service.EventsService();
    toBeAssignedService = new toBeAssigned_service.ToBeAssignedService();
    housekeepingService = new housekeeping_service.HouseKeepingService();
    // private auth = new Auth();
    countries = [];
    visibleCalendarCells = { x: [], y: [] };
    scrollContainer;
    today = '';
    reachedEndOfCalendar = false;
    socket;
    token = new Token.Token();
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
    departureTimes;
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
        unassigned_dates_store.handleUnAssignedDatesChange('unassigned_dates', newValue => {
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
                this.getHkIssues(propertyId),
                this.housekeepingService.getExposedHKSetup(this.property_id),
                //this.housekeepingService.getHkIssues({ property_id: propertyId }),
            ];
            this.fetchSetupEntries();
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
            setTimeout(() => {
                this.scrollToElement(this.today);
            }, 200);
            if (!this.calendarData.is_vacation_rental) {
                const data = await this.toBeAssignedService.getUnassignedDates(this.property_id, this.from_date, this.to_date);
                this.unassignedDates = { fromDate: this.from_date, toDate: this.to_date, data: { ...this.unassignedDates, ...data } };
                this.calendarData = { ...this.calendarData, unassignedDates: data };
                unassigned_dates_store.addUnassignedDates(data);
            }
            this.socket = index$1.lookup('https://realtime.igloorooms.com/');
            this.socket.on('MSG', async (msg) => {
                await this.handleSocketMessage(msg);
            });
        }
        catch (error) {
            console.error('Initializing Calendar Error', error);
        }
    }
    async getHkIssues(property_id) {
        const issues = await this.housekeepingService.getHkIssues({ property_id });
        let _issues = new Map();
        for (const issue of issues ?? []) {
            if (!_issues.has(issue.unit.id)) {
                _issues.set(issue.unit.id, issue);
            }
        }
        calendarData.calendar_data.unitIssues = new Map(_issues);
    }
    async fetchSetupEntries() {
        const d = await this.bookingService.getSetupEntriesByTableName('_DEPARTURE_TIME');
        this.departureTimes = d;
    }
    async getHousekeepingTasks({ from_date, to_date }) {
        const { tasks } = await this.housekeepingService.getHkTasks({
            property_id: this.property_id,
            from_date,
            to_date,
            housekeepers: [],
            cleaning_frequency: (calendarData.calendar_data.cleaning_frequency ?? housekeeping_service.housekeeping_store?.hk_criteria?.cleaning_frequencies[0])?.code,
            dusty_window: housekeeping_service.housekeeping_store?.hk_criteria?.dusty_periods[0]?.code,
            highlight_window: housekeeping_service.housekeeping_store?.hk_criteria?.highlight_checkin_options[0]?.code,
        });
        booking.addCleaningTasks(tasks);
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
            UPDATE_CALENDAR_RATE: this.handleUpdateCalendarRate,
            SET_DEPARTURE_TIME: this.handleSetDepartureTime,
            HK_ISSUE_FOUND: this.handleHKIssue,
        };
        const handler = reasonHandlers[REASON];
        if (handler) {
            await handler.call(this, result);
        }
        else {
            console.warn(`Unhandled REASON: ${REASON}`);
        }
    }
    handleUpdateCalendarRate(result) {
        this.salesQueue.offer({ ...result, night: result.date, is_available_to_book: !result.is_closed });
    }
    handleHKIssue(result) {
        this.salesQueue.offer({ ...result, night: result.date, is_available_to_book: !result.is_closed });
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
    async handleGetUnassignedDates(result) {
        const parsedResult = this.parseDateRange(result);
        if (!this.calendarData.is_vacation_rental &&
            new Date(parsedResult.FROM_DATE).getTime() >= this.calendarData.startingDate &&
            new Date(parsedResult.TO_DATE).getTime() <= this.calendarData.endingDate) {
            const data = await this.toBeAssignedService.getUnassignedDates(this.property_id, utils.dateToFormattedString(new Date(parsedResult.FROM_DATE)), utils.dateToFormattedString(new Date(parsedResult.TO_DATE)));
            unassigned_dates_store.addUnassignedDates(data);
            this.unassignedDates = {
                fromDate: utils.dateToFormattedString(new Date(parsedResult.FROM_DATE)),
                toDate: utils.dateToFormattedString(new Date(parsedResult.TO_DATE)),
                data,
            };
            if (Object.keys(data).length === 0) {
                unassigned_dates_store.removeUnassignedDates(utils.dateToFormattedString(new Date(parsedResult.FROM_DATE)), utils.dateToFormattedString(new Date(parsedResult.TO_DATE)));
                this.reduceAvailableUnitEvent.emit({
                    fromDate: utils.dateToFormattedString(new Date(parsedResult.FROM_DATE)),
                    toDate: utils.dateToFormattedString(new Date(parsedResult.TO_DATE)),
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
                const data = await this.toBeAssignedService.getUnassignedDates(this.property_id, fromDate, toDate);
                this.calendarData.unassignedDates = { ...this.calendarData.unassignedDates, ...data };
                this.unassignedDates = {
                    fromDate,
                    toDate,
                    data,
                };
                unassigned_dates_store.addUnassignedDates(data);
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
            const data = await this.toBeAssignedService.getUnassignedDates(this.property_id, fromDate, toDate);
            this.calendarData.unassignedDates = { ...this.calendarData.unassignedDates, ...data };
            this.unassignedDates = {
                fromDate,
                toDate,
                data,
            };
            unassigned_dates_store.addUnassignedDates(data);
        }
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
                            const nextTwoMonths = utils.addTwoMonthToDate(new Date(this.calendarData.endingDate));
                            const nextDay = utils.getNextDay(new Date(this.calendarData.endingDate));
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
            return false;
        }
        // 2) Open when room nights dialog is showing in the sidebar
        if (this.roomNightsData) {
            return true;
        }
        // 3) Open for sidebar-based flows (but not room-guests, which uses <ir-room-guests>)
        if (this.calendarSidebarState) {
            const type = this.calendarSidebarState.type;
            // return type === 'split' || type === 'bulk-blocks';
            return type === 'split';
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
        // console.log(this.bookingItem);
        return (index.h(index.Host, { key: '674ee9a10df43977f2079d32a490c7edfe0e1ec5' }, index.h("ir-toast", { key: 'b213b24365893bc9239960db5f46a9c7d1cce34b' }), index.h("ir-interceptor", { key: '67db99e8131ee9cc321c8709a0d08498481937ea' }), index.h("div", { key: '886f554a775ac0e4a0a449288fb33d7503bac74d', id: "iglooCalendar", class: { 'igl-calendar': true, 'showToBeAssigned': this.showToBeAssigned, 'showLegend': this.showLegend } }, this.shouldRenderCalendarView() ? (index.h(index.Fragment, { "data-testid": "ir-calendar" }, this.showToBeAssigned && (index.h("igl-to-be-assigned", { unassignedDatesProp: this.unassignedDates, to_date: this.to_date, from_date: this.from_date, propertyid: this.property_id, class: "tobeAssignedContainer", calendarData: this.calendarData, onOptionEvent: evt => this.onOptionSelect(evt) })), this.showLegend && index.h("igl-legend", { class: "legendContainer", legendData: this.calendarData.legendData, onOptionEvent: evt => this.onOptionSelect(evt) }), index.h("div", { class: "calendarScrollContainer", onMouseDown: event => this.dragScrollContent(event), onScroll: () => this.calendarScrolling() }, index.h("div", { id: "calendarContainer" }, index.h("igl-cal-header", { unassignedDates: this.unassignedDates, to_date: this.to_date, propertyid: this.property_id, today: this.today, calendarData: this.calendarData, highlightedDate: this.highlightedDate, onOptionEvent: evt => this.onOptionSelect(evt) }), index.h("igl-cal-body", { propertyId: this.property_id, language: this.language, countries: this.countries, currency: this.calendarData.currency, today: this.today, highlightedDate: this.highlightedDate, isScrollViewDragging: this.scrollViewDragging, calendarData: this.calendarData }), index.h("igl-cal-footer", { isLegendOpen: this.showLegend, highlightedDate: this.highlightedDate, today: this.today, calendarData: this.calendarData, onOptionEvent: evt => this.onOptionSelect(evt) }))))) : (index.h("ir-loading-screen", { message: "Preparing Calendar Data" }))), index.h("ir-sidebar", { key: '64f1e4f2a0622717848086e005c62125b4634c22', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: this.isSidebarOpen, showCloseButton: false, sidebarStyles: {
                width: this.calendarSidebarState?.type === 'room-guests' ? '60rem' : this.editBookingItem ? '80rem' : 'var(--sidebar-width,40rem)',
                background: this.editBookingItem ? '#F2F3F8' : 'white',
            } }, this.roomNightsData && (index.h("ir-room-nights", { key: 'd2ff6848cf94f9bbde46d1f002cf236f342759d6', slot: "sidebar-body", pool: this.roomNightsData.pool, onCloseRoomNightsDialog: this.handleRoomNightsDialogClose.bind(this), language: this.language, bookingNumber: this.roomNightsData.bookingNumber, identifier: this.roomNightsData.identifier, toDate: this.roomNightsData.to_date, fromDate: this.roomNightsData.from_date, defaultDates: this.roomNightsData.defaultDates, ticket: this.ticket, propertyId: this.property_id })), this.calendarSidebarState?.type === 'split' && (index.h("igl-split-booking", { key: '47a5f9a4dbf6f53895e8b8315297b80e577cc7ab', slot: "sidebar-body", booking: this.calendarSidebarState?.payload?.booking, identifier: this.calendarSidebarState?.payload?.identifier, onCloseModal: () => (this.calendarSidebarState = null) }))), index.h("ir-booking-details-drawer", { key: '8de2b43b91afa474dcd944052d0c0dffb0f9a6c9', open: this.editBookingItem?.event_type === 'EDIT_BOOKING', propertyId: this.property_id, bookingNumber: this.editBookingItem && this.editBookingItem?.event_type === 'EDIT_BOOKING' ? this.editBookingItem.BOOKING_NUMBER : null, ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.editBookingItem = null) }), index.h("ir-room-guests", { key: 'b1455220ea5d2407dedd8976082c1d56d95e83dd', open: this.calendarSidebarState?.type === 'room-guests', countries: this.countries, language: this.language, identifier: this.calendarSidebarState?.payload?.identifier, bookingNumber: this.calendarSidebarState?.payload?.bookingNumber, roomName: this.calendarSidebarState?.payload?.roomName, totalGuests: this.calendarSidebarState?.payload?.totalGuests, sharedPersons: this.calendarSidebarState?.payload?.sharing_persons, checkIn: true, onCloseModal: () => (this.calendarSidebarState = null) }), index.h("ir-reallocation-drawer", { key: 'e0ffb94af81716c9330ebd737d8296268dbb13f5', open: this.calendarSidebarState?.type === 'reallocate-drawer', booking: this.calendarSidebarState?.payload?.booking, pool: this.calendarSidebarState?.payload?.pool, roomIdentifier: this.calendarSidebarState?.payload?.identifier, onCloseModal: () => (this.calendarSidebarState = null) }), index.h("igl-reallocation-dialog", { key: '3e0facb22f68c8483e9787ec4e9906ee4958bea7', onResetModalState: () => (this.dialogData = null), onDialogClose: () => this.handleModalCancel(), data: this.dialogData?.reason === 'reallocate' ? this.dialogData : undefined }), index.h("ir-modal", { key: 'c7f87787cd0b4e543d2141614e0a57fe72cbe526', ref: el => (this.calendarModalEl = el), modalTitle: 'lol', rightBtnActive: this.dialogData?.reason === 'reallocate' ? !this.dialogData.hideConfirmButton : true, leftBtnText: locales_store.locales?.entries?.Lcz_Cancel, rightBtnText: locales_store.locales?.entries?.Lcz_Confirm, modalBody: this.renderModalBody(), onConfirmModal: this.handleModalConfirm.bind(this), onCancelModal: this.handleModalCancel.bind(this) }), index.h("ir-checkout-dialog", { key: 'a500bdb0a83cfd7541114a0fe3eacbad5116b1ef', style: { textAlign: 'start' }, booking: this.dialogData?.reason === 'checkout' ? this.dialogData?.booking : null, identifier: this.dialogData?.reason === 'checkout' ? this.dialogData?.roomIdentifier : null, open: this.dialogData?.reason === 'checkout', onCheckoutDialogClosed: event => this.handleCheckoutDialogClosed(event) }), index.h("ir-invoice", { key: '540103ef63fdf810cbbd45a9b159f90716c76c74', style: { textAlign: 'start' }, onInvoiceClose: event => this.handleInvoiceClose(event), booking: this.invoiceState?.booking, roomIdentifier: this.invoiceState?.identifier, open: this.invoiceState !== null }), index.h("ir-booking-editor-drawer", { key: '6513dfea8383d000266dd4e543d96a7fc4375cd6', roomTypeIds: this.bookingItem?.roomsInfo?.map(r => r.id), onBookingEditorClosed: this.handleCloseBookingWindow.bind(this), unitId: this.bookingItem?.PR_ID, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, roomIdentifier: this.bookingItem?.IDENTIFIER, open: this.bookingItem !== null && this.bookingItem.event_type !== 'BLOCK_DATES', language: this.language, booking: this.bookingItem?.booking, propertyid: this.propertyid, checkIn: this.bookingItem?.FROM_DATE, blockedUnit: {
                ENTRY_DATE: this.bookingItem?.ENTRY_DATE,
                ENTRY_HOUR: this.bookingItem?.ENTRY_HOUR,
                ENTRY_MINUTE: this.bookingItem?.ENTRY_MINUTE,
                OPTIONAL_REASON: this.bookingItem?.OPTIONAL_REASON,
                OUT_OF_SERVICE: this.bookingItem?.OUT_OF_SERVICE,
                RELEASE_AFTER_HOURS: this.bookingItem?.RELEASE_AFTER_HOURS,
                STATUS_CODE: this.bookingItem?.STATUS_CODE,
            }, checkOut: this.bookingItem?.TO_DATE }), index.h("igl-bulk-operations-drawer", { key: '8d80bfd8e3cf4c43081d747517ac1a260ac93c62', property_id: this.property_id, onCloseDrawer: () => (this.calendarSidebarState = null), open: this.calendarSidebarState?.type === 'bulk-blocks' }), index.h("igl-blocked-date-drawer", { key: 'd2a182f7afa954c7ce5ceedb03c0e5934d1b459f', onBlockedDateDrawerClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, unitId: this.bookingItem?.PR_ID, fromDate: this.bookingItem?.FROM_DATE, toDate: this.bookingItem?.TO_DATE, label: this.bookingItem?.BLOCK_DATES_TITLE?.trim(), open: this.bookingItem?.event_type === 'BLOCK_DATES' })));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IglooCalendar.style = IglooCalendarStyle0;

const irAgentsCss = ".sc-ir-agents-h{display:block}.page-header__container.sc-ir-agents{display:flex;align-items:center;justify-content:space-between}";
const IrAgentsStyle0 = irAgentsCss;

const IrAgents = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toast = index.createEvent(this, "toast", 7);
    }
    /**
     * Authentication token issued by the PMS backend.
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
    toast;
    agentsService = new agents_service.AgentsService();
    propertyService = new property_service.PropertyService();
    bookingService = new booking_service.BookingService();
    tokenService = new Token.Token();
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange() {
        this.tokenService.setToken(this.ticket);
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
            if (!this.propertyid && !this.p) {
                throw new Error('Missing credentials');
            }
            let propertyId = this.propertyid;
            if (!propertyId) {
                await this.propertyService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                });
            }
            const [countries, setupEntries] = await Promise.all([
                this.bookingService.getCountries(this.language),
                this.bookingService.getSetupEntriesByTableNameMulti(['_AGENT_RATE_TYPE', '_AGENT_TYPE', '_TA_PAYMENT_METHOD', '_CL_POST_TIMING']),
                calendarData.calendar_data?.property
                    ? Promise.resolve(null)
                    : this.propertyService.getExposedProperty({
                        id: this.propertyid || 0,
                        language: this.language,
                        aname: this.p,
                    }),
                this.fetchAgents(),
            ]);
            const { agent_rate_type, agent_type, ta_payment_method, cl_post_timing } = this.bookingService.groupEntryTablesResult(setupEntries);
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
            this.toast.emit({
                type: 'success',
                description: '',
                title: 'Saved Successfully',
                position: 'top-right',
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
        return (index.h(index.Host, { "data-testid": "ir-agents" }, index.h("ir-toast", null), index.h("ir-interceptor", { handledEndpoints: ['/Get_Rooms_To_Check_in'] }), index.h("div", { class: "ir-page__container" }, index.h("div", { class: "page-header__container" }, index.h("h3", { class: "page-title" }, "Agents/Companies")), index.h("ir-agents-table", { countries: this.countries, setupEntries: this.setupEntries, onToggleAgentActive: event => this.handleToggleAgentStatus(event.detail), agents: this.agents, onUpsertAgent: event => this.handleUpsertAgent(event.detail), onDeleteAgent: event => this.handleDeleteAgent(event.detail) })), index.h("ir-agent-editor-drawer", { setupEntries: this.setupEntries, countries: this.countries, open: this.isDrawerOpen, agent: this.selectedAgent ?? undefined, onAgentEditorClose: () => this.handleDrawerClose() }), index.h("ir-dialog", { label: "Delete Agent", open: this.isDeleteDialogOpen, lightDismiss: false, onIrDialogHide: () => this.handleDeleteDialogClose() }, index.h("span", null, this.selectedAgent
            ? `Are you sure you want to delete ${this.selectedAgent.name}? This action permanently removes the agent and cannot be undone.`
            : 'Are you sure you want to delete this agent? This action permanently removes the agent and cannot be undone.'), index.h("div", { slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, "Cancel"), index.h("ir-custom-button", { size: "medium", appearance: "accent", variant: "danger", onClickHandler: () => this.confirmDeleteAgent() }, "Delete")))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrAgents.style = IrAgentsStyle0;

const irArrivalsCss = ".page-title.sc-ir-arrivals{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.sc-ir-arrivals-h{height:100% !important;overflow-y:auto !important}";
const IrArrivalsStyle0 = irArrivalsCss;

const IrArrivals = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Authentication token issued by the PMS backend.
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
    tokenService = new Token.Token();
    roomService = new room_service.RoomService();
    bookingService = new booking_service.BookingService();
    paymentFolioRef;
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
        arrivals_store.setArrivalsPageSize(this.pageSize);
        arrivals_store.onArrivalsStoreChange('today', _ => {
            this.getBookings();
        });
    }
    handlePageSizeChange(newValue, oldValue) {
        if (newValue !== oldValue)
            arrivals_store.setArrivalsPageSize(newValue);
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue && newValue) {
            this.tokenService.setToken(this.ticket);
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
            if (!this.propertyid && !this.p) {
                throw new Error('Missing credentials');
            }
            let propertyId = this.propertyid;
            if (!propertyId) {
                await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                });
            }
            const [_, __, countries, setupEntries] = await Promise.all([
                calendarData.calendar_data?.property ? Promise.resolve(null) : this.roomService.getExposedProperty({ id: this.propertyid || 0, language: this.language, aname: this.p }),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getCountries(this.language),
                this.bookingService.getSetupEntriesByTableNameMulti(['_BED_PREFERENCE_TYPE', '_DEPARTURE_TIME', '_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD']),
                this.getBookings(),
            ]);
            this.countries = countries;
            const { pay_type, pay_type_group, pay_method } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.paymentEntries = { types: pay_type, groups: pay_type_group, methods: pay_method };
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
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", { handledEndpoints: ['/Get_Rooms_To_Check_in'] }), index.h("div", { class: "ir-page__container" }, index.h("h3", { class: "page-title" }, "Check-ins"), index.h("ir-arrivals-table", { onCheckInRoom: event => this.handleCheckingRoom(event), onRequestPageChange: event => this.handlePaginationChange(event), onRequestPageSizeChange: event => this.handlePaginationPageSizeChange(event) }), index.h("ir-booking-details-drawer", { open: !!this.bookingNumber, propertyId: this.propertyid, bookingNumber: this.bookingNumber?.toString(), ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.bookingNumber = null) }), index.h("ir-payment-folio", { booking: this.booking, style: { height: 'auto' }, bookingNumber: this.booking?.booking_nbr, paymentEntries: this.paymentEntries, payment: this.payment, mode: 'payment-action', ref: el => (this.paymentFolioRef = el), onCloseModal: () => {
                this.booking = null;
                this.payment = null;
            } }), index.h("ir-room-guests", { open: this.roomGuestState !== null, countries: this.countries, language: this.language, identifier: this.roomGuestState?.identifier, bookingNumber: this.roomGuestState?.booking_nbr?.toString(), roomName: this.roomGuestState?.roomName, totalGuests: this.roomGuestState?.totalGuests, sharedPersons: this.roomGuestState?.sharing_persons, checkIn: this.roomGuestState?.checkin, onCloseModal: () => (this.roomGuestState = null) }))));
    }
    static get watchers() { return {
        "pageSize": ["handlePageSizeChange"],
        "ticket": ["handleTicketChange"]
    }; }
};
IrArrivals.style = IrArrivalsStyle0;

const irBookingEmailLogsCss = ".sc-ir-booking-email-logs-h{display:block}";
const IrBookingEmailLogsStyle0 = irBookingEmailLogsCss;

const IrBookingEmailLogs = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    ticket;
    data;
    bookingNumber;
    token = new Token.Token();
    componentWillLoad() {
        if (this.ticket) {
            this.token.setToken(this.ticket);
        }
    }
    handleTicketChange() {
        if (this.ticket) {
            this.token.setToken(this.ticket);
        }
    }
    render() {
        return (index.h(index.Host, { key: '23b41ba252c7ccffcdca2b4c8879de7d4f0c4d1d', class: "p-1" }, index.h("ir-interceptor", { key: 'a89d10f1b7512098de21a5e3880b64f2516f87f1', handledEndpoints: ['/Get_Email_log_By_BOOK_NBR'] }), index.h("ir-toast", { key: 'd55ef6384b8f81ca1470e5b61c45dcff134b0168' }), index.h("div", { key: '9f3be0a4fd04382a8b0ba41947abbbd53b3604a1', class: "d-flex align-items-center mb-1", style: { gap: '0.5rem' } }, index.h("ir-input-text", { key: '48705b161b78302ec739ce7127315f1315e24b11', class: "m-0", inputContainerStyle: { margin: '0' }, value: this.bookingNumber, onTextChange: e => (this.bookingNumber = e.detail), placeholder: "booking number" }), index.h("ir-button", { key: '3e6bbdba16ac8f664781418d3d295d3c4f17a643', size: "sm", text: "search", onClickHandler: async () => {
                const { data } = await axios.axios.post('/Get_Email_log_By_BOOK_NBR', {
                    BOOK_NBR: this.bookingNumber,
                });
                if (data.ExceptionMsg) {
                    return;
                }
                this.data = data.My_Result;
            } })), index.h("p", { key: '4bbebece501d61ae3ae189b23940f2f5df90a91e' }, JSON.stringify(this.data, null, 2))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrBookingEmailLogs.style = IrBookingEmailLogsStyle0;

// src/utils/browserHistory.ts
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

const irBookingListingCss = ".sc-ir-booking-listing-h{display:block;padding:var(--wa-space-l);position:relative;height:100% !important;overflow-y:auto !important}";
const IrBookingListingStyle0 = irBookingListingCss;

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
    bookingListingService = new booking_listing_service.BookingListingService();
    bookingService = new booking_service.BookingService();
    roomService = new room_service.RoomService();
    propertyService = new property_service.PropertyService();
    token = new Token.Token();
    listingModal;
    listingModalTimeout;
    allowedProperties;
    havePrivilege;
    paymentFolioRef;
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
        booking_listing_service.updateUserSelection('end_row', this.rowCount);
        booking_listing_service.booking_listing.rowCount = this.rowCount;
        booking_listing_service.setPaginationPageSize(this.rowCount);
        if (this.ticket !== '') {
            booking_listing_service.booking_listing.token = this.ticket;
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
        booking_listing_service.onBookingListingChange('userSelection', newValue => {
            booking_listing_service.updatePaginationFromSelection(newValue);
        });
        booking_listing_service.onBookingListingChange('bookings', newValue => {
            this.showCost = newValue.some(booking => booking.financial.gross_cost !== null && booking.financial.gross_cost > 0);
        });
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        booking_listing_service.booking_listing.token = this.ticket;
        this.initializeApp();
    }
    async fetchBookings() {
        await this.bookingListingService.getExposedBookings({
            ...booking_listing_service.booking_listing.userSelection,
            is_to_export: false,
        });
    }
    async initializeApp() {
        try {
            this.isLoading = true;
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
                        language: this.language,
                        is_backend: true,
                    });
                    propertyId = propertyData.My_Result.id;
                }
            }
            const parallelRequests = [
                this.bookingService.getSetupEntriesByTableNameMulti(['_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD']),
                this.bookingListingService.getExposedBookingsCriteria(this.havePrivilege ? null : propertyId),
                this.roomService.fetchLanguage(this.language, ['_BOOKING_LIST_FRONT', '_PMS_FRONT']),
            ];
            // let propertyDataIndex: number | null = null;
            let allowedPropertiesIndex = null;
            if (this.propertyid && !this.havePrivilege) {
                // propertyDataIndex = parallelRequests.length;
                parallelRequests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                }));
            }
            if (this.havePrivilege) {
                allowedPropertiesIndex = parallelRequests.length;
                parallelRequests.push(this.propertyService.getExposedAllowedProperties());
            }
            const results = await Promise.all(parallelRequests);
            const [setupEntries] = results;
            const { pay_type, pay_type_group, pay_method } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.paymentEntries = {
                groups: pay_type_group,
                methods: pay_method,
                types: pay_type,
            };
            this.allowedProperties = allowedPropertiesIndex !== null ? results[allowedPropertiesIndex]?.map(p => p.id) : null;
            booking_listing_service.updateUserSelection('property_id', propertyId);
            booking_listing_service.updateUserSelections({
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
            booking_listing_service.updateUserSelections(obj);
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
    }
    async handlePaginationChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (!event.detail) {
            return;
        }
        booking_listing_service.setPaginationPage(event.detail.currentPage);
        await this.fetchBookings();
    }
    async handlePaginationPageSizeChange(event) {
        if (!event.detail || !event.detail.pageSize) {
            return;
        }
        event.stopImmediatePropagation();
        event.stopPropagation();
        booking_listing_service.setPaginationPageSize(event.detail.pageSize);
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
        booking_listing_service.booking_listing.bookings = [
            ...booking_listing_service.booking_listing.bookings.map(b => {
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
        booking_listing_service.booking_listing.bookings = booking_listing_service.booking_listing.bookings.map(b => {
            const guest = { ...b.guest };
            const newGuest = e.detail;
            if (guest.id === newGuest.id) {
                return { ...b, guest: { ...guest, ...newGuest } };
            }
            return b;
        });
    }
    findBooking(bookingNumber) {
        return booking_listing_service.booking_listing.bookings.find(b => b.booking_nbr === bookingNumber);
    }
    render() {
        if (this.isLoading || this.ticket === '') {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-interceptor", null), index.h("ir-toast", null), index.h("div", { class: "main-container" }, index.h("ir-listing-header", { propertyId: this.propertyid, p: this.p, language: this.language }), index.h("section", { class: "mt-2" }, index.h("ir-booking-listing-table", null))), index.h("ir-booking-details-drawer", { open: this.editBookingItem?.cause === 'edit', propertyId: this.editBookingItem?.booking?.property?.id, bookingNumber: this.editBookingItem?.booking?.booking_nbr.toString(), ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.editBookingItem = null) }), index.h("ir-guest-info-drawer", { onGuestInfoDrawerClosed: () => {
                this.editBookingItem = null;
            }, booking_nbr: this.editBookingItem?.booking?.booking_nbr, email: this.editBookingItem?.booking?.guest.email, language: this.language, open: this.editBookingItem?.cause === 'guest' }), index.h("ir-payment-folio", { style: { height: 'auto' }, booking: this.booking, bookingNumber: this.booking?.booking_nbr, paymentEntries: this.paymentEntries, payment: this.payment, mode: 'payment-action', ref: el => (this.paymentFolioRef = el), onCloseModal: () => {
                this.booking = null;
                this.payment = null;
            } })));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrBookingListing.style = IrBookingListingStyle0;

const irDailyRevenueCss = ".sc-ir-daily-revenue-h{display:block}.daily-revenue__meta.sc-ir-daily-revenue{display:flex;flex-direction:column;gap:1rem}.daily-revenue__table.sc-ir-daily-revenue{flex:1 1 0%}@media (min-width: 768px){.daily-revenue__meta.sc-ir-daily-revenue{flex-direction:row}}";
const IrDailyRevenueStyle0 = irDailyRevenueCss;

const IrDailyRevenue = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.preventPageLoad = index.createEvent(this, "preventPageLoad", 7);
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
    filters = { date: moment.hooks().format('YYYY-MM-DD'), users: null };
    sideBarEvent;
    tokenService = new Token.Token();
    roomService = new room_service.RoomService();
    propertyService = new property_service.PropertyService();
    bookingService = new booking_service.BookingService();
    paymentEntries;
    preventPageLoad;
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.initializeApp();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.tokenService.setToken(this.ticket);
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
    renderSidebarBody() {
        if (!this.sideBarEvent) {
            return;
        }
        switch (this.sideBarEvent.type) {
            case 'booking':
                return (index.h("ir-booking-details", { slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: this.handleSidebarClose, is_from_front_desk: true, propertyid: this.property_id, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.sideBarEvent.payload.bookingNumber.toString(), ticket: this.ticket, language: this.language, hasRoomAdd: true }));
            default:
                return null;
        }
    }
    async initializeApp() {
        this.isPageLoading = true;
        try {
            let propertyId = this.propertyid;
            if (!propertyId && !this.p) {
                throw new Error('Property ID or username is required');
            }
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [
                this.bookingService.getSetupEntriesByTableNameMulti(['_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD']),
                this.getPaymentReports(),
                this.roomService.fetchLanguage(this.language),
            ];
            if (propertyId) {
                requests.push(this.roomService.getExposedProperty({
                    id: propertyId,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            const [setupEntries] = await Promise.all(requests);
            const { pay_type, pay_type_group, pay_method } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.paymentEntries = {
                groups: pay_type_group,
                methods: pay_method,
                types: pay_type,
            };
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
                    date: this.filters.date,
                    property_id: this.property_id?.toString(),
                    is_export_to_excel: isExportToExcel,
                }),
            ];
            if (!isExportToExcel && !excludeYesterday) {
                requests.push(this.propertyService.getDailyRevenueReport({
                    date: moment.hooks(this.filters.date, 'YYYY-MM-DD').add(-1, 'days').format('YYYY-MM-DD'),
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
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("div", { class: "d-flex align-items-center justify-content-between" }, index.h("h3", { class: "mb-1 mb-md-0" }, "Daily Revenue"), index.h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: locales_store.locales.entries?.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getPaymentReports(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), index.h("ir-revenue-summary", { previousDateGroupedPayments: this.previousDateGroupedPayments, groupedPayments: this.groupedPayment, paymentEntries: this.paymentEntries }), index.h("div", { class: "daily-revenue__meta" }, index.h("ir-daily-revenue-filters", { isLoading: this.isLoading === 'filter', payments: this.groupedPayment }), index.h("ir-revenue-table", { filters: this.filters, class: 'daily-revenue__table', paymentEntries: this.paymentEntries, payments: this.groupedPayment }))), index.h("ir-sidebar", { sidebarStyles: {
                width: this.sideBarEvent?.type === 'booking' ? '80rem' : 'var(--sidebar-width,40rem)',
                background: this.sideBarEvent?.type === 'booking' ? '#F2F3F8' : 'white',
            }, open: Boolean(this.sideBarEvent), showCloseButton: false, onIrSidebarToggle: this.handleSidebarClose }, this.renderSidebarBody())));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrDailyRevenue.style = IrDailyRevenueStyle0;

const irDeparturesCss = ".page-title.sc-ir-departures{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.sc-ir-departures-h{height:100% !important;overflow-y:auto !important}";
const IrDeparturesStyle0 = irDeparturesCss;

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
    tokenService = new Token.Token();
    roomService = new room_service.RoomService();
    bookingService = new booking_service.BookingService();
    paymentFolioRef;
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
        departures_store.onDeparturesStoreChange('today', _ => {
            this.getBookings();
        });
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.tokenService.setToken(this.ticket);
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
            if (!this.propertyid && !this.p) {
                throw new Error('Missing credentials');
            }
            let propertyId = this.propertyid;
            if (!propertyId) {
                await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                });
            }
            const [_, __, setupEntries] = await Promise.all([
                calendarData.calendar_data?.property ? Promise.resolve(null) : this.roomService.getExposedProperty({ id: this.propertyid || 0, language: this.language, aname: this.p }),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getSetupEntriesByTableNameMulti(['_BED_PREFERENCE_TYPE', '_DEPARTURE_TIME', '_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD']),
                this.getBookings(),
            ]);
            const { pay_type, pay_type_group, pay_method } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.paymentEntries = { types: pay_type, groups: pay_type_group, methods: pay_method };
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
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", { handledEndpoints: ['/Get_Rooms_To_Check_Out'] }), index.h("div", { class: 'ir-page__container' }, index.h("h3", { class: "page-title" }, "Check-outs"), index.h("ir-departures-table", { onCheckoutRoom: event => this.handleCheckoutRoom(event), onRequestPageChange: event => this.handlePaginationChange(event), onRequestPageSizeChange: event => this.handlePaginationPageSizeChange(event) })), index.h("ir-booking-details-drawer", { open: !!this.bookingNumber, propertyId: this.propertyid, bookingNumber: this.bookingNumber?.toString(), ticket: this.ticket, language: this.language, onBookingDetailsDrawerClosed: () => (this.bookingNumber = null) }), index.h("ir-payment-folio", { style: { height: 'auto' }, booking: this.booking, bookingNumber: this.booking?.booking_nbr, paymentEntries: this.paymentEntries, payment: this.payment, mode: 'payment-action', ref: el => (this.paymentFolioRef = el), onCloseModal: () => {
                this.booking = null;
                this.payment = null;
            } }), index.h("ir-checkout-dialog", { booking: this.checkoutState?.booking, identifier: this.checkoutState?.identifier, open: this.checkoutState !== null, onCheckoutDialogClosed: event => this.handleCheckoutDialogClosed(event) }), index.h("ir-invoice", { onInvoiceClose: event => this.handleInvoiceClose(event), booking: this.invoiceState?.booking, roomIdentifier: this.invoiceState?.identifier, open: this.invoiceState !== null })));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrDepartures.style = IrDeparturesStyle0;

const irHkTasksCss = ".sc-ir-hk-tasks-h{display:block;box-sizing:border-box}.sc-ir-hk-tasks-h *.sc-ir-hk-tasks{box-sizing:border-box}.tasks-view.sc-ir-hk-tasks{display:flex;flex-direction:column;gap:1rem;min-width:0}.tasks-table-wrapper.sc-ir-hk-tasks{display:flex;flex-direction:column;flex:1;min-width:0;width:100%}@media (min-width: 1024px){.tasks-view.sc-ir-hk-tasks{flex-direction:row;align-items:flex-start}.tasks-table-wrapper.sc-ir-hk-tasks{flex:3;min-width:0}}";
const IrHkTasksStyle0 = irHkTasksCss;

const IrHkTasks = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clearSelectedHkTasks = index.createEvent(this, "clearSelectedHkTasks", 7);
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
    houseKeepingService = new housekeeping_service.HouseKeepingService();
    token = new Token.Token();
    table_sorting = new Map();
    modal;
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.init();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
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
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.houseKeepingService.getExposedHKSetup(this.property_id), this.roomService.fetchLanguage(this.language)];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
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
                cleaning_frequency: (calendarData.calendar_data.cleaning_frequency ?? housekeeping_service.housekeeping_store?.hk_criteria?.cleaning_frequencies[0])?.code,
                dusty_window: housekeeping_service.housekeeping_store?.hk_criteria?.dusty_periods[0]?.code,
                highlight_window: housekeeping_service.housekeeping_store?.hk_criteria?.highlight_checkin_options[0]?.code,
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
        housekeeping_service.housekeeping_store.hk_criteria?.housekeepers?.forEach(hk => {
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
                const hkName = housekeeping_service.housekeeping_store.hk_criteria?.housekeepers?.find(hk => hk.id === t.hkm_id)?.name;
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
                        .map(t => ({
                        description: 'Cleaned',
                        hkm_id: t.hkm_id === 0 ? null : t.hkm_id,
                        unit_id: t.unit.id,
                        booking_nbr: t.booking_nbr,
                        status: this.modalCauses?.status ?? '001',
                        hk_task_type_code: t.task_type.code,
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
        return (index.h(index.Host, { "data-testid": "hk_tasks_base" }, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("section", { class: "ir-page__container " }, index.h("h3", { class: "page-title" }, "Housekeeping Tasks"), index.h("div", { class: "tasks-view" }, index.h("ir-tasks-filters", { isLoading: this.isApplyFiltersLoading, onApplyFilters: e => {
                this.applyFilters(e);
            } }), index.h("div", { class: "tasks-table-wrapper" }, index.h("ir-tasks-table", { onRowSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                hkTasks_store.updateSelectedTasks(e.detail);
            } })))), index.h("ir-dialog", { ref: el => (this.modal = el), label: locales_store.locales.entries.Lcz_Confirmation, lightDismiss: false }, index.h("span", null, this.modalCauses
            ? this.modalCauses?.cause === 'clean'
                ? this.modalCauses.task
                    ? `Update ${this.modalCauses?.task?.unit?.name} to Clean`
                    : 'Update selected unit(s) to Clean'
                : 'Skip cleaning and reschedule for tomorrow.'
            : 'Update selected unit(s) to Clean'), index.h("div", { slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => {
                if (this.modalCauses) {
                    hkTasks_store.clearSelectedTasks();
                    this.modalCauses = null;
                }
                this.modal.closeModal();
            } }, locales_store.locales.entries.Lcz_Cancel), index.h("ir-custom-button", { size: "medium", appearance: "accent", variant: "brand", loading: this.isCleaningLoading, onClickHandler: this.handleModalConfirmation.bind(this) }, locales_store.locales.entries.Lcz_Confirm))), index.h("ir-sidebar", { open: this.isSidebarOpen, id: "editGuestInfo", onIrSidebarToggle: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isSidebarOpen = false;
            },
            // sidebarStyles={{
            //   width: '80vw',
            // }}
            showCloseButton: false }, this.isSidebarOpen && index.h("ir-hk-archive", { ticket: this.token.getToken(), propertyId: this.property_id, slot: "sidebar-body" }))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrHkTasks.style = IrHkTasksStyle0;

const irHousekeepingCss = ".sc-ir-housekeeping-h{display:block}";
const IrHousekeepingStyle0 = irHousekeepingCss;

const IrHousekeeping = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toast = index.createEvent(this, "toast", 7);
    }
    language = '';
    ticket = '';
    propertyid;
    p;
    baseUrl;
    isLoading = false;
    frequencies = [];
    toast;
    roomService = new room_service.RoomService();
    houseKeepingService = new housekeeping_service.HouseKeepingService();
    bookingService = new booking_service.BookingService();
    token = new Token.Token();
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.houseKeepingService.getExposedHKSetup(this.propertyid);
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            let propertyId = this.propertyid;
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_sales_rate_plans: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            housekeeping_service.updateHKStore('default_properties', { token: this.ticket, property_id: propertyId, language: this.language });
            const [frequencies] = await Promise.all([
                this.bookingService.getSetupEntriesByTableName('_HK_FREQUENCY'),
                this.roomService.fetchLanguage(this.language, ['_HK_FRONT', '_PMS_FRONT']),
                this.propertyid &&
                    this.roomService.getExposedProperty({
                        id: propertyId,
                        language: this.language,
                        is_backend: true,
                        include_sales_rate_plans: true,
                    }),
                calendarData.calendar_data.housekeeping_enabled && this.houseKeepingService.getExposedHKSetup(propertyId),
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
        return (index.h(index.Host, null, index.h("ir-interceptor", null), index.h("ir-toast", null), index.h("section", { class: "ir-page__container" }, index.h("h3", { class: "page-title" }, locales_store.locales.entries.Lcz_HouseKeepingAndCheckInSetup), index.h("ir-hk-operations-card", { frequencies: this.frequencies }), calendarData.calendar_data.housekeeping_enabled && index.h("ir-hk-team", null))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrHousekeeping.style = IrHousekeepingStyle0;

const irMonthlyBookingsReportCss = ".sc-ir-monthly-bookings-report-h{display:block}";
const IrMonthlyBookingsReportStyle0 = irMonthlyBookingsReportCss;

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
    tokenService = new Token.Token();
    roomService = new room_service.RoomService();
    propertyService = new property_service.PropertyService();
    componentWillLoad() {
        this.baseFilters = {
            date: {
                description: moment.hooks().format('MMMM YYYY'),
                firstOfMonth: moment.hooks().startOf('month').format('YYYY-MM-DD'),
                lastOfMonth: moment.hooks().endOf('month').format('YYYY-MM-DD'),
            },
            include_previous_year: false,
        };
        this.filters = this.baseFilters;
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.tokenService.setToken(this.ticket);
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
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.roomService.fetchLanguage(this.language), this.getReports()];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
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
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("div", { class: "d-flex align-items-center justify-content-between" }, index.h("h3", { class: "mb-1 mb-md-0" }, "Daily Occupancy"), index.h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: locales_store.locales.entries?.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getReports(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), index.h("section", null, index.h("div", { class: "d-flex flex-column flex-md-row w-100", style: { gap: '1rem', alignItems: 'stretch' } }, index.h("ir-stats-card", { icon: this.stats?.Occupancy_Difference_From_Previous_Month < 0 ? 'arrow-trend-down' : 'arrow-trend-up', cardTitle: "Average Occupancy", value: this.stats.AverageOccupancy ? this.stats?.AverageOccupancy.toFixed(2) + '%' : null, subtitle: `${this.stats?.Occupancy_Difference_From_Previous_Month < 0 ? '' : '+'}${this.stats?.Occupancy_Difference_From_Previous_Month.toFixed(2)}% from last month` }), index.h("ir-stats-card", { icon: "hotel", cardTitle: "Total Units", value: this.stats?.TotalUnitsBooked ? this.stats?.TotalUnitsBooked.toString() : null, subtitle: "Booked" }), index.h("ir-stats-card", { icon: "user_group", cardTitle: "Total Guests", value: this.stats?.Total_Guests ? this.stats?.Total_Guests?.toString() : null, subtitle: "Stayed" }), index.h("ir-stats-card", { icon: "calendar", cardTitle: "Peak Days", value: this.stats?.PeakDays.length === 0 ? null : this.stats?.PeakDays?.map(pd => moment.hooks(pd.Date, 'YYYY-MM-DD').format('D').concat('th')).join(' - '), subtitle: `${Math.max(...(this.stats.PeakDays?.map(pd => pd.OccupancyPercent) || []))}% occupancy` })), index.h("div", { class: "d-flex flex-column flex-lg-row mt-1 ", style: { gap: '1rem' } }, index.h("ir-monthly-bookings-report-filter", { isLoading: this.isLoading === 'filter', class: "filters-card", baseFilters: this.baseFilters }), index.h("ir-monthly-bookings-report-table", { reports: this.reports }))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrMonthlyBookingsReport.style = IrMonthlyBookingsReportStyle0;

const irSalesByChannelCss = ".sc-ir-sales-by-channel-h{display:block}";
const IrSalesByChannelStyle0 = irSalesByChannelCss;

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
    token = new Token.Token();
    roomService = new room_service.RoomService();
    propertyService = new property_service.PropertyService();
    baseFilters = {
        FROM_DATE: moment.hooks().add(-7, 'days').format('YYYY-MM-DD'),
        TO_DATE: moment.hooks().format('YYYY-MM-DD'),
        BOOK_CASE: '001',
        WINDOW: 7,
        include_previous_year: false,
        is_export_to_excel: false,
    };
    componentWillLoad() {
        this.channelSalesFilters = this.baseFilters;
        if (this.ticket) {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    async initializeApp() {
        try {
            this.isPageLoading = true;
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
                    language: this.language,
                    is_backend: true,
                });
                this.propertyID = property.My_Result.id;
            }
            const requests = [, this.roomService.fetchLanguage(this.language)];
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
                is_export_to_excel: isExportToExcel,
                ...filterParams,
                AC_ID: this.propertyID ? this.propertyID.toString() : undefined,
                ...filterParams,
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
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("div", { class: "d-flex align-items-center justify-content-between" }, index.h("h3", { class: "mb-1 mb-md-0" }, "Sales by Channel"), index.h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: locales_store.locales.entries.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getChannelSales(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), index.h("div", { class: "d-flex flex-column flex-lg-row mt-1 ", style: { gap: '1rem' } }, index.h("ir-sales-by-channel-filters", { isLoading: this.isLoading === 'filter', onApplyFilters: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.channelSalesFilters = { ...e.detail };
                this.getChannelSales();
            }, allowedProperties: this.allowedProperties, baseFilters: this.baseFilters }), index.h("ir-sales-by-channel-table", { mode: this.mode, allowedProperties: this.allowedProperties, class: "card mb-0", records: this.salesData })))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrSalesByChannel.style = IrSalesByChannelStyle0;

const irSalesByCountryCss = ".sc-ir-sales-by-country-h{display:block}";
const IrSalesByCountryStyle0 = irSalesByCountryCss;

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
    token = new Token.Token();
    roomService = new room_service.RoomService();
    propertyService = new property_service.PropertyService();
    bookingService = new booking_service.BookingService();
    baseFilters = {
        FROM_DATE: moment.hooks().add(-7, 'days').format('YYYY-MM-DD'),
        TO_DATE: moment.hooks().format('YYYY-MM-DD'),
        BOOK_CASE: '001',
        WINDOW: 7,
        include_previous_year: false,
    };
    componentWillLoad() {
        this.salesFilters = this.baseFilters;
        if (this.ticket) {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    async initializeApp() {
        try {
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
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.bookingService.getCountries(this.language), this.roomService.fetchLanguage(this.language), this.getCountrySales()];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
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
            // this.salesData = enrichedSales.sort((a, b) => {
            //   if (a.country_id === 0) return -1;
            //   if (b.country_id === 0) return 1;
            //   return 0;
            // });
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
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("div", { class: "d-flex align-items-center justify-content-between" }, index.h("h3", { class: "mb-1 mb-md-0" }, "Sales by Country"), index.h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: locales_store.locales.entries.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getCountrySales(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), index.h("ir-sales-by-country-summary", { salesReports: this.salesData }), index.h("div", { class: "d-flex flex-column flex-lg-row mt-1 ", style: { gap: '1rem' } }, index.h("ir-sales-filters", { isLoading: this.isLoading === 'filter', onApplyFilters: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.salesFilters = e.detail;
                this.getCountrySales();
            }, class: "filters-card", baseFilters: this.baseFilters }), index.h("ir-sales-table", { mappedCountries: this.countries, class: "card mb-0", records: this.salesData })))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrSalesByCountry.style = IrSalesByCountryStyle0;

const irUserManagementCss = ".sc-ir-user-management-h{display:block;height:100%}";
const IrUserManagementStyle0 = irUserManagementCss;

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
    token = new Token.Token();
    roomService = new room_service.RoomService();
    userService = new user_service.UserService();
    bookingService = new booking_service.BookingService();
    userTypes = new Map();
    socket;
    superAdminId = '5';
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
        if (this.ticket) {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
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
                this.token.setBaseUrl(this.baseUrl);
            }
            this.isLoading = true;
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
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.fetchUserTypes(), this.fetchUsers(), this.roomService.fetchLanguage(this.language, ['_USER_MGT'])];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            await Promise.all(requests);
            this.socket = index$1.lookup('https://realtime.igloorooms.com/');
            this.socket.on('MSG', async (msg) => {
                await this.handleSocketMessage(msg);
            });
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
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
        let result = JSON.parse(PAYLOAD);
        console.log(KEY, result);
        // const reasonHandlers: Partial<Record<bookingReasons, Function>> = {
        //   DORESERVATION: this.updateUserVerificationStatus,
        // };
        const reasonHandlers = {
            EMAIL_VERIFIED: this.updateUserVerificationStatus,
        };
        const handler = reasonHandlers[REASON];
        if (handler) {
            await handler.call(this, result);
        }
        else {
            console.warn(`Unhandled REASON: ${REASON}`);
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
        const res = await Promise.all([this.bookingService.getSetupEntriesByTableName('_USER_TYPE'), this.bookingService.getLov()]);
        const allowedUsers = res[1]?.My_Result?.allowed_user_types;
        for (const e of res[0]) {
            const value = utils.getEntryValue({ entry: e, language: this.language });
            if (allowedUsers.find(f => f.code === e.CODE_NAME)) {
                this.allowedUsersTypes.push({ code: e.CODE_NAME, value });
            }
            this.userTypes.set(e.CODE_NAME.toString(), value);
        }
    }
    disconnectedCallback() {
        this.socket.disconnect();
    }
    render() {
        if (this.isLoading) {
            return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("ir-loading-screen", null)));
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", { suppressToastEndpoints: ['/Change_User_Pwd', '/Handle_Exposed_User'] }), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("h3", { class: "page-title" }, locales_store.locales.entries.Lcz_ExtranetUsers), index.h("div", { class: "", style: { gap: '1rem' } }, index.h("ir-user-management-table", { property_id: this.property_id, baseUserTypeCode: this.baseUserTypeCode, allowedUsersTypes: this.allowedUsersTypes, userTypeCode: this.userTypeCode, haveAdminPrivileges: [this.superAdminId, '17'].includes(this.userTypeCode?.toString()), userTypes: this.userTypes, isSuperAdmin: this.userTypeCode?.toString() === this.superAdminId, users: this.users })))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrUserManagement.style = IrUserManagementStyle0;

exports.igloo_calendar = IglooCalendar;
exports.ir_agents = IrAgents;
exports.ir_arrivals = IrArrivals;
exports.ir_booking_email_logs = IrBookingEmailLogs;
exports.ir_booking_listing = IrBookingListing;
exports.ir_daily_revenue = IrDailyRevenue;
exports.ir_departures = IrDepartures;
exports.ir_hk_tasks = IrHkTasks;
exports.ir_housekeeping = IrHousekeeping;
exports.ir_monthly_bookings_report = IrMonthlyBookingsReport;
exports.ir_sales_by_channel = IrSalesByChannel;
exports.ir_sales_by_country = IrSalesByCountry;
exports.ir_user_management = IrUserManagement;

//# sourceMappingURL=igloo-calendar_13.cjs.entry.js.map