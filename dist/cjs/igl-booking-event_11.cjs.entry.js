'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const booking_service = require('./booking.service-77ca334d.js');
const utils = require('./utils-4927b5d1.js');
const moment = require('./moment-1780b03a.js');
const events_service = require('./events.service-af18b286.js');
const locales_store = require('./locales.store-0cac7e5d.js');
const calendarData = require('./calendar-data-99f4dccd.js');
const index$1 = require('./index-db8b30d9.js');
const housekeeping_service = require('./housekeeping.service-c883b967.js');
const toBeAssigned_service = require('./toBeAssigned.service-30542f4f.js');
const unassigned_dates_store = require('./unassigned_dates.store-5daabf69.js');
const icons = require('./icons-c507b6f0.js');
require('./axios-6e678d52.js');
require('./index-467172e1.js');

const iglBookingEventCss = ".sc-igl-booking-event-h{display:block;position:absolute;--ota-bar-width:2px}.bookingEventBase.sc-igl-booking-event{position:absolute;background-color:rgb(49, 190, 241);width:100%;height:100%;border-radius:4px;transform:skewX(-22deg)}.bookingEventBase.skewedLeft.sc-igl-booking-event::before{content:'';position:absolute;top:0px;bottom:0;left:-4px;width:50%;height:100%;background-color:var(--ir-event-bg);transform-origin:right;transform:skewX(22deg);border-radius:4px;border-top-left-radius:0;border-bottom-left-radius:0}.bookingEventBase.skewedRight.sc-igl-booking-event::before{content:'';position:absolute;top:0;bottom:0;right:-4px;width:50%;height:100%;background-color:var(--ir-event-bg);transform-origin:left;transform:skewX(22deg);border-radius:4px;border-top-right-radius:0;border-bottom-right-radius:0}.bookingEventBase.border.skewedLeft.sc-igl-booking-event::before{border:var(--ota-bar-width) solid #424242;border-right:0;border-left:0;border-top-right-radius:0;border-bottom-right-radius:0;top:calc(var(--ota-bar-width) * -1);height:20px;left:-4px}.ota-booking-event.sc-igl-booking-event{border-width:var(--ota-bar-width) !important}.bookingEventBase.border.skewedRight.sc-igl-booking-event::before{border:var(--ota-bar-width) solid #424242;border-left:0;border-right:0;border-top-left-radius:0;border-bottom-left-radius:0;top:calc(var(--ota-bar-width) * -1);height:20px;right:-4px}.bookingEvent.sc-igl-booking-event{cursor:pointer}.bookingEventBase.sc-igl-booking-event{cursor:pointer}.bookingEventHiddenBase.sc-igl-booking-event{position:absolute;top:0;left:-4px;width:calc(100% + 8)}.bookingEventDragHandle.sc-igl-booking-event{position:absolute;top:0;width:15px;height:100%;opacity:0.1;background-color:rgba(0, 0, 0, 0.15);transform:skewX(-22deg);border-radius:4px;cursor:pointer}.splitBooking.sc-igl-booking-event{border-right:2px solid #000000}.sc-igl-booking-event-h:hover .bookingEventDragHandle.sc-igl-booking-event{display:block;opacity:1}.newEvent.sc-igl-booking-event-h:hover .bookingEventDragHandle.sc-igl-booking-event{display:none;opacity:1}.leftSide.sc-igl-booking-event{left:0}.leftSide.skewedLeft.sc-igl-booking-event{transform:skewX(0)}.rightSide.skewedRight.sc-igl-booking-event{transform:skewX(0)}.rightSide.sc-igl-booking-event{right:0}.bookingEventTitle.sc-igl-booking-event{color:#fff;font-size:0.8em;position:relative;max-width:calc(100% - 10px);overflow:hidden;text-overflow:ellipsis;top:2px;left:5px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;cursor:pointer}.legend_circle.sc-igl-booking-event{border-radius:100%;width:10px;height:10px;margin:3px 3px 3px 2px;border:1px solid #fff}.noteIcon.sc-igl-booking-event{position:absolute;bottom:-8px;left:2px}.balanceIcon.sc-igl-booking-event{position:absolute;top:-8px;right:2px}";
const IglBookingEventStyle0 = iglBookingEventCss;

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const IglBookingEvent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.hideBubbleInfo = index.createEvent(this, "hideBubbleInfo", 7);
        this.updateEventData = index.createEvent(this, "updateEventData", 7);
        this.dragOverEventData = index.createEvent(this, "dragOverEventData", 7);
        this.showRoomNightsDialog = index.createEvent(this, "showRoomNightsDialog", 7);
        this.showDialog = index.createEvent(this, "showDialog", 7);
        this.resetStreachedBooking = index.createEvent(this, "resetStreachedBooking", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.updateBookingEvent = index.createEvent(this, "updateBookingEvent", 7);
        this.is_vacation_rental = false;
        this.allBookingEvents = [];
        this.renderElement = false;
        this.isShrinking = null;
        this.dayWidth = 0;
        this.eventSpace = 8;
        this.vertSpace = 10;
        /* show bubble */
        this.showInfoPopup = false;
        this.bubbleInfoTopSide = false;
        this.isStretch = false;
        /*Services */
        this.eventsService = new events_service.EventsService();
        this.bookingService = new booking_service.BookingService();
        /* Resize props */
        this.resizeSide = '';
        this.isDragging = false;
        this.animationFrameId = null;
        this.handleMouseMoveBind = this.handleMouseMove.bind(this);
        this.handleMouseUpBind = this.handleMouseUp.bind(this);
        this.handleClickOutsideBind = this.handleClickOutside.bind(this);
        this.findRoomType = (roomId) => {
            let roomType = this.bookingEvent.roomsInfo.filter(room => room.physicalrooms.some(r => r.id === +roomId));
            if (roomType.length) {
                return roomType[0].id;
            }
            return null;
        };
    }
    componentWillLoad() {
        window.addEventListener('click', this.handleClickOutsideBind);
    }
    async fetchAndAssignBookingData() {
        try {
            console.log('clicked on book#', this.bookingEvent.BOOKING_NUMBER);
            const validStatuses = ['IN-HOUSE', 'CONFIRMED', 'PENDING-CONFIRMATION', 'CHECKED-OUT'];
            if (!validStatuses.includes(this.bookingEvent.STATUS)) {
                return;
            }
            const data = await this.bookingService.getExposedBooking(this.bookingEvent.BOOKING_NUMBER, 'en');
            const filteredRooms = data.rooms.filter(room => room['assigned_units_pool'] === this.bookingEvent.ID);
            if (filteredRooms.length === 0) {
                throw new Error(`booking#${this.bookingEvent.BOOKING_NUMBER} has an empty array`);
            }
            if (filteredRooms.some(room => room['assigned_units_pool'] === null)) {
                throw new Error(`booking#${this.bookingEvent.BOOKING_NUMBER} has an empty pool`);
            }
            data.rooms = filteredRooms;
            const transformedBooking = utils.transformNewBooking(data)[0];
            const { ID, TO_DATE, FROM_DATE, NO_OF_DAYS, STATUS, NAME, IDENTIFIER, PR_ID, POOL, BOOKING_NUMBER, NOTES, is_direct, BALANCE, channel_booking_nbr } = transformedBooking, otherBookingData = __rest(transformedBooking, ["ID", "TO_DATE", "FROM_DATE", "NO_OF_DAYS", "STATUS", "NAME", "IDENTIFIER", "PR_ID", "POOL", "BOOKING_NUMBER", "NOTES", "is_direct", "BALANCE", "channel_booking_nbr"]);
            this.bookingEvent = Object.assign(Object.assign(Object.assign({}, otherBookingData), this.bookingEvent), { channel_booking_nbr, booking: data, PHONE: otherBookingData.PHONE, PHONE_PREFIX: otherBookingData.PHONE_PREFIX, PRIVATE_NOTE: otherBookingData.PRIVATE_NOTE });
            this.updateBookingEvent.emit(this.bookingEvent);
            this.showEventInfo(true);
        }
        catch (error) {
            console.error(error.message);
        }
    }
    componentDidLoad() {
        if (this.isNewEvent()) {
            if (!this.bookingEvent.hideBubble) {
                /* auto matically open the popup, calling the method shows bubble either top or bottom based on available space. */
                setTimeout(async () => {
                    if (['003', '002', '004'].includes(this.bookingEvent.STATUS_CODE)) {
                        this.showEventInfo(true);
                    }
                    else if (['IN-HOUSE', 'CONFIRMED', 'PENDING-CONFIRMATION', 'CHECKED-OUT'].includes(this.bookingEvent.STATUS)) {
                        await this.fetchAndAssignBookingData();
                    }
                    else {
                        this.showEventInfo(true);
                    }
                    this.renderAgain();
                }, 1);
            }
        }
    }
    disconnectedCallback() {
        window.removeEventListener('click', this.handleClickOutsideBind);
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }
    handleClickOutside(event) {
        const clickedElement = event.target;
        // Check if the clicked element is not within the target div
        if (!this.element.contains(clickedElement)) {
            // The click occurred outside the target div
            this.showEventInfo(false);
        }
    }
    hideBubbleInfoPopup(event) {
        if (event.detail.currentInfoBubbleId != this.getBookingId() || (event.detail.key === 'hidebubble' && event.detail.currentInfoBubbleId === this.getBookingId())) {
            this.showInfoPopup = false;
            this.renderAgain();
        }
    }
    async moveBookingToHandler(event) {
        var _a, _b, _c;
        try {
            if (event.detail.bookingId !== this.getBookingId()) {
                this.showEventInfo(false);
                return;
            }
            if (event.detail.moveToDay === 'revert' || event.detail.toRoomId === 'revert') {
                event.detail.moveToDay = this.bookingEvent.FROM_DATE;
                event.detail.toRoomId = event.detail.fromRoomId;
                if (this.isTouchStart && this.moveDifferenceX <= 5 && this.moveDifferenceY <= 5 && !this.isStretch) {
                    if (utils.isBlockUnit(this.bookingEvent.STATUS_CODE)) {
                        this.showEventInfo(true);
                    }
                    else if (['IN-HOUSE', 'CONFIRMED', 'PENDING-CONFIRMATION', 'CHECKED-OUT'].includes(this.bookingEvent.STATUS)) {
                        await this.fetchAndAssignBookingData();
                    }
                }
                else {
                    this.animationFrameId = requestAnimationFrame(() => {
                        this.resetBookingToInitialPosition();
                    });
                    return;
                }
            }
            else {
                if (this.isTouchStart && this.moveDifferenceX <= 5 && this.moveDifferenceY <= 5 && !this.isStretch) {
                    if (utils.isBlockUnit(this.bookingEvent.STATUS_CODE)) {
                        this.showEventInfo(true);
                    }
                    else if (['IN-HOUSE', 'CONFIRMED', 'PENDING-CONFIRMATION', 'CHECKED-OUT'].includes(this.bookingEvent.STATUS)) {
                        await this.fetchAndAssignBookingData();
                    }
                }
                else {
                    const { pool, to_date, from_date, toRoomId } = event.detail;
                    const previousToDate = moment.hooks(to_date, 'YYYY-MM-DD').add(-1, 'days').format('YYYY-MM-DD');
                    console.log(this.findRoomType(Number(this.bookingEvent.PR_ID)), this.findRoomType(Number(toRoomId)));
                    if ((!moment.hooks(this.bookingEvent.TO_DATE, 'YYYY-MM-DD').isSame(moment.hooks(to_date, 'YYYY-MM-DD'), 'dates') ||
                        this.findRoomType(Number(this.bookingEvent.PR_ID)) !== this.findRoomType(Number(toRoomId))) &&
                        (((_a = utils.calendar_dates.disabled_cells.get(`${toRoomId}_${from_date}`)) === null || _a === void 0 ? void 0 : _a.disabled) ||
                            (((_b = utils.calendar_dates.disabled_cells.get(`${toRoomId}_${to_date}`)) === null || _b === void 0 ? void 0 : _b.disabled) && ((_c = utils.calendar_dates.disabled_cells.get(`${toRoomId}_${previousToDate}`)) === null || _c === void 0 ? void 0 : _c.disabled))) &&
                        !this.isStretch) {
                        this.reset('This room isn’t available for the entire selected period. Please choose different dates or a different room.');
                    }
                    if (this.checkIfSlotOccupied(toRoomId, from_date, to_date)) {
                        this.reset('Overlapping Dates');
                    }
                    if (pool) {
                        if (utils.isBlockUnit(this.bookingEvent.STATUS_CODE)) {
                            // let fromDate = moment(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(moment(new Date(from_date)))
                            //   ? this.bookingEvent.defaultDates.from_date
                            //   : from_date;
                            // console.log('room', fromDate, this.bookingEvent.defaultDates.from_date, from_date);
                            await this.eventsService.reallocateEvent(pool, toRoomId, from_date, to_date).catch(() => {
                                this.resetBookingToInitialPosition();
                            });
                        }
                        else {
                            if (this.isShrinking || !this.isStretch) {
                                // try {
                                //   if (this.bookingEvent.PR_ID.toString() === toRoomId.toString()) {
                                //     await this.eventsService.reallocateEvent(pool, toRoomId, from_date, to_date);
                                //     return;
                                //   }
                                // } catch (error) {
                                //   this.resetBookingToInitialPosition();
                                //   return;
                                // }
                                const { description, status } = this.getModalDescription(toRoomId, from_date, to_date);
                                let hideConfirmButton = false;
                                if (status === '400') {
                                    hideConfirmButton = true;
                                }
                                const oldFromDate = this.bookingEvent.defaultDates.from_date;
                                const oldToDate = this.bookingEvent.defaultDates.to_date;
                                const diffDays = utils.calculateDaysBetweenDates(oldFromDate, oldToDate);
                                let shrinkingDirection = null;
                                let fromDate = oldFromDate;
                                let toDate = oldToDate;
                                if (this.isShrinking) {
                                    if (moment.hooks(from_date, 'YYYY-MM-DD').isAfter(moment.hooks(oldFromDate, 'YYYY-MM-DD')) && moment.hooks(to_date, 'YYYY-MM-DD').isBefore(moment.hooks(oldToDate, 'YYYY-MM-DD'))) {
                                        fromDate = oldFromDate;
                                        toDate = to_date;
                                    }
                                    else {
                                        shrinkingDirection = moment.hooks(from_date, 'YYYY-MM-DD').isAfter(moment.hooks(oldFromDate, 'YYYY-MM-DD'))
                                            ? 'left'
                                            : moment.hooks(to_date, 'YYYY-MM-DD').isBefore(moment.hooks(oldToDate, 'YYYY-MM-DD'))
                                                ? 'right'
                                                : null;
                                        if (shrinkingDirection === 'left') {
                                            fromDate = from_date;
                                        }
                                        if (shrinkingDirection === 'right') {
                                            toDate = to_date;
                                        }
                                    }
                                }
                                else {
                                    console.log('stretching');
                                    if (moment.hooks(from_date, 'YYYY-MM-DD').isBefore(moment.hooks(oldFromDate, 'YYYY-MM-DD'))) {
                                        fromDate = from_date;
                                        const newToDate = moment.hooks(from_date, 'YYYY-MM-DD').add(diffDays, 'days');
                                        toDate = newToDate.isBefore(moment.hooks(to_date, 'YYYY-MM-DD'), 'days') ? to_date : newToDate.format('YYYY-MM-DD');
                                    }
                                    else if (moment.hooks(to_date, 'YYYY-MM-DD').isAfter(moment.hooks(oldToDate, 'YYYY-MM-DD'))) {
                                        toDate = to_date;
                                        fromDate = moment.hooks(to_date, 'YYYY-MM-DD').subtract(diffDays, 'days').format('YYYY-MM-DD');
                                    }
                                }
                                console.warn({ fromDate, toDate });
                                this.showDialog.emit(Object.assign(Object.assign({ reason: 'reallocate' }, event.detail), { description, title: '', hideConfirmButton, from_date: fromDate, to_date: toDate }));
                            }
                            else {
                                // if (this.checkIfSlotOccupied(toRoomId, from_date, to_date)) {
                                //   this.animationFrameId = requestAnimationFrame(() => {
                                //     this.resetBookingToInitialPosition();
                                //   });
                                //   throw new Error('Overlapping Dates');
                                // } else {
                                // let stretchDirection: "left" | "right"
                                const oldFromDate = this.bookingEvent.defaultDates.from_date;
                                const oldToDate = this.bookingEvent.defaultDates.to_date;
                                // const diffDays = calculateDaysBetweenDates(oldFromDate, oldToDate);
                                // let fromDate = oldFromDate;
                                // if (moment(from_date, 'YYYY-MM-DD').isBefore(moment(oldFromDate, 'YYYY-MM-DD'))) {
                                //   fromDate = from_date;
                                //   const newToDate = moment(from_date, 'YYYY-MM-DD').add(diffDays, 'days');
                                //   toDate = newToDate.isBefore(moment(to_date, 'YYYY-MM-DD'), 'days') ? to_date : newToDate.format('YYYY-MM-DD');
                                // } else if (moment(to_date, 'YYYY-MM-DD').isAfter(moment(oldToDate, 'YYYY-MM-DD'))) {
                                //   toDate = to_date;
                                //   fromDate = moment(to_date, 'YYYY-MM-DD').subtract(diffDays, 'days').format('YYYY-MM-DD');
                                // }
                                const validateDates = (base_date, to_date) => {
                                    var _a;
                                    let cursor = base_date;
                                    let counter = 0;
                                    while (cursor !== to_date) {
                                        if ((_a = utils.calendar_dates.disabled_cells.get(`${toRoomId}_${cursor}`)) === null || _a === void 0 ? void 0 : _a.disabled) {
                                            counter++;
                                        }
                                        cursor = moment.hooks(cursor, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD');
                                    }
                                    if (counter >= 1) {
                                        this.reset(locales_store.locales.entries.Lcz_ThisUnitIsNotAvailable);
                                    }
                                };
                                if (moment.hooks(oldToDate, 'YYYY-MM-DD').isBefore(moment.hooks(to_date), 'dates')) {
                                    validateDates(oldToDate, to_date);
                                }
                                else if (moment.hooks(oldFromDate, 'YYYY-MM-DD').isAfter(moment.hooks(from_date, 'YYYY-MM-DD'), 'dates')) {
                                    validateDates(from_date, oldFromDate);
                                }
                                this.showRoomNightsDialog.emit({
                                    bookingNumber: this.bookingEvent.BOOKING_NUMBER,
                                    identifier: this.bookingEvent.IDENTIFIER,
                                    to_date,
                                    pool,
                                    from_date,
                                    defaultDates: this.bookingEvent.defaultDates,
                                });
                                // }
                            }
                        }
                        this.isShrinking = null;
                    }
                }
            }
        }
        catch (error) {
            this.toast.emit({
                position: 'top-right',
                title: error.message,
                description: '',
                type: 'error',
            });
            console.log('something went wrong');
        }
    }
    reset(message) {
        this.animationFrameId = requestAnimationFrame(() => {
            this.resetBookingToInitialPosition();
        });
        throw new Error(message);
    }
    getModalDescription(toRoomId, from_date, to_date) {
        if (!this.bookingEvent.is_direct) {
            if (this.isShrinking) {
                return {
                    description: `${locales_store.locales.entries.Lcz_YouWillLoseFutureUpdates}.`,
                    status: '200',
                };
            }
            else {
                if (moment.hooks(from_date, 'YYYY-MM-DD').isSame(moment.hooks(this.bookingEvent.FROM_DATE, 'YYYY-MM-DD')) &&
                    moment.hooks(to_date, 'YYYY-MM-DD').isSame(moment.hooks(this.bookingEvent.TO_DATE, 'YYYY-MM-DD'))) {
                    const initialRT = this.findRoomType(this.bookingEvent.PR_ID);
                    const targetRT = this.findRoomType(toRoomId);
                    if (initialRT === targetRT) {
                        return { description: `${locales_store.locales.entries.Lcz_AreYouSureWantToMoveAnotherUnit}?`, status: '200' };
                    }
                    else {
                        return {
                            description: `${locales_store.locales.entries.Lcz_YouWillLoseFutureUpdates} ${this.bookingEvent.origin ? this.bookingEvent.origin.Label : ''}. ${locales_store.locales.entries.Lcz_SameRatesWillBeKept + '.'}`,
                            status: '200',
                        };
                    }
                }
                return { description: locales_store.locales.entries.Lcz_CannotChangeCHBookings + '.', status: '400' };
            }
        }
        else {
            if (!this.isShrinking) {
                const initialRT = this.findRoomType(Number(this.bookingEvent.PR_ID));
                const targetRT = this.findRoomType(Number(toRoomId));
                if (initialRT === targetRT) {
                    console.log('same rt');
                    if (this.bookingEvent.PR_ID.toString() === toRoomId.toString()) {
                        //TODO add the description
                        return { description: locales_store.locales.entries.Lcz_ConfrmModiication + '.', status: '200' };
                    }
                    return { description: `${locales_store.locales.entries.Lcz_AreYouSureWantToMoveAnotherUnit}?`, status: '200' };
                }
                else {
                    return {
                        description: locales_store.locales.entries.Lcz_SameRatesWillBeKept + '.',
                        status: '200',
                    };
                }
            }
            return { description: locales_store.locales.entries.Lcz_ConfrmModiication + '.', status: '200' };
        }
    }
    resetBookingToInitialPosition() {
        if (this.isStretch) {
            this.element.style.left = `${this.initialLeft}px`;
            this.element.style.width = `${this.initialWidth}px`;
            this.isStretch = false;
            this.finalWidth = this.initialWidth;
            this.isShrinking = null;
        }
        else {
            this.element.style.top = `${this.dragInitPos.top}px`;
            this.element.style.left = `${this.dragInitPos.left}px`;
        }
    }
    handleRevertBooking(event) {
        if (this.bookingEvent.POOL === event.detail) {
            this.resetBookingToInitialPosition();
        }
    }
    checkIfSlotOccupied(toRoomId, from_date, to_date) {
        const fromTime = moment.hooks(from_date, 'YYYY-MM-DD');
        const toTime = moment.hooks(to_date, 'YYYY-MM-DD');
        const isOccupied = this.allBookingEvents.some(event => {
            if (event.POOL === this.bookingEvent.POOL) {
                return false;
            }
            const eventFromTime = moment.hooks(event.FROM_DATE, 'YYYY-MM-DD').add(1, 'days');
            const eventToTime = moment.hooks(event.TO_DATE, 'YYYY-MM-DD');
            return event.PR_ID === +toRoomId && toTime.isSameOrAfter(eventFromTime) && fromTime.isBefore(eventToTime);
        });
        return isOccupied;
    }
    renderAgain() {
        this.renderElement = !this.renderElement;
    }
    getUniqueId() {
        return new Date().getTime();
    }
    isSplitBooking() {
        return !!this.bookingEvent.SPLIT_BOOKING;
    }
    isNewEvent() {
        return this.getBookingId() === 'NEW_TEMP_EVENT';
    }
    isHighlightEventType() {
        return this.getEventType() === 'HIGH_LIGHT';
    }
    getBookingId() {
        return this.bookingEvent.ID;
    }
    getBookingStatus() {
        return this.bookingEvent.STATUS;
    }
    getBookedBy() {
        return this.bookingEvent.NAME;
    }
    getBookedRoomId() {
        return this.bookingEvent.PR_ID;
    }
    getEventStartingDate() {
        return new Date(this.bookingEvent.FROM_DATE);
    }
    getEventEndingDate() {
        return new Date(this.bookingEvent.TO_DATE);
    }
    getEventType() {
        return this.bookingEvent.event_type;
    }
    getEventLegend() {
        var _a, _b;
        // console.log(this.getBookingStatus());
        let status = (_a = this.bookingEvent) === null || _a === void 0 ? void 0 : _a.legendData.statusId[this.getBookingStatus()];
        let orderRide = this.isNewEvent() ? { color: '#f9f9c9' } : {};
        return Object.assign(Object.assign(Object.assign({}, (_b = this.bookingEvent) === null || _b === void 0 ? void 0 : _b.legendData[status.id]), status), orderRide);
    }
    getLegendOfStatus(aStatusId) {
        var _a;
        // console.log(aStatusId);
        let status = (_a = this.bookingEvent) === null || _a === void 0 ? void 0 : _a.legendData.statusId[aStatusId];
        return Object.assign(Object.assign({}, this.bookingEvent.legendData[status.id]), status);
    }
    getNoteNode() {
        if (this.bookingEvent.NOTES || this.bookingEvent.INTERNAL_NOTE || this.bookingEvent.PRIVATE_NOTE) {
            return this.getLegendOfStatus('NOTES');
        }
        return null;
    }
    getBalanceNode() {
        if (this.bookingEvent.BALANCE !== null && this.bookingEvent.BALANCE >= 1) {
            return this.getLegendOfStatus('OUTSTANDING-BALANCE');
        }
        return null;
    }
    setStayDays(aStayDays) {
        this.bookingEvent.NO_OF_DAYS = aStayDays;
        this.renderAgain();
        // this.updateData({id: this.getBookedRoomId(), data: { NO_OF_DAYS: aStayDays }});
    }
    getStayDays() {
        return this.bookingEvent.NO_OF_DAYS;
    }
    getPosition() {
        let startingDate = this.getEventStartingDate();
        let startingCellClass = '.room_' + this.getBookedRoomId() + '_' + startingDate.getDate() + '_' + (startingDate.getMonth() + 1) + '_' + startingDate.getFullYear();
        let bodyContainer = document.querySelector('.bodyContainer');
        let startingCell = document.querySelector(startingCellClass);
        let pos = { top: '0', left: '0', width: '0', height: '20px' };
        if (startingCell && bodyContainer && startingCell.getBoundingClientRect() && bodyContainer.getBoundingClientRect()) {
            let bodyContainerRect = bodyContainer.getBoundingClientRect();
            let boundingRect = startingCell.getBoundingClientRect();
            this.dayWidth = this.dayWidth || boundingRect.width;
            pos.top = boundingRect.top + boundingRect.height / 2 - this.vertSpace - bodyContainerRect.top + 'px';
            // pos.left = boundingRect.left + this.dayWidth / 2 + this.eventSpace / 2 - bodyContainerRect.left + 'px';
            // pos.width = this.getStayDays() * this.dayWidth - this.eventSpace + 'px';
            pos.left =
                boundingRect.left +
                    (!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 0 : this.dayWidth / 2) +
                    this.eventSpace / 2 -
                    bodyContainerRect.left +
                    'px';
            pos.width =
                (this.getStayDays() + (!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 0.5 : 0)) *
                    this.dayWidth -
                    this.eventSpace +
                    'px';
        }
        else {
            console.log(this.bookingEvent);
            console.log('Locating event cell failed ', startingCellClass);
        }
        //console.log(pos);
        return pos;
    }
    getNumber(aData) {
        return aData ? parseFloat(aData) : 0;
    }
    startDragging(event, side) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        if (this.isNewEvent() || this.isHighlightEventType()) {
            return null;
        }
        this.resizeSide = side;
        this.isDragging = true;
        this.showEventInfo(false);
        this.isStretch = side !== 'move';
        if (side === 'move') {
            this.initialX = event.clientX || event.touches[0].clientX;
            this.initialY = event.clientY || event.touches[0].clientY;
            this.elementRect = this.element.getBoundingClientRect();
            const offsetX = 0;
            const offsetY = 0;
            this.dragInitPos = {
                id: this.getBookingId(),
                fromRoomId: this.getBookedRoomId(),
                top: this.getNumber(this.element.style.top) + offsetY,
                left: this.getNumber(this.element.style.left) + offsetX,
            };
            this.dragInitPos.x = this.dragInitPos.left;
            this.dragInitPos.y = this.dragInitPos.top;
            this.dragEndPos = Object.assign({}, this.dragInitPos);
            this.element.style.top = `${this.dragInitPos.top}px`;
            this.element.style.left = `${this.dragInitPos.left}px`;
            this.isTouchStart = true; // !!(event.touches && event.touches.length);
            this.dragOverEventData.emit({
                id: 'CALCULATE_DRAG_OVER_BOUNDS',
                data: this.dragInitPos,
            });
        }
        else {
            this.initialWidth = this.element.offsetWidth;
            this.initialLeft = this.element.offsetLeft;
            this.initialX = event.clientX || event.touches[0].clientX;
            this.dragOverEventData.emit({
                id: 'CALCULATE_DRAG_OVER_BOUNDS',
                data: {
                    id: this.getBookingId(),
                    fromRoomId: this.getBookedRoomId(),
                    top: this.getNumber(this.element.style.top),
                    left: this.initialLeft,
                    x: this.initialX,
                    y: event.clientY || event.touches[0].clientY,
                },
            });
        }
        document.addEventListener('mousemove', this.handleMouseMoveBind);
        document.addEventListener('touchmove', this.handleMouseMoveBind);
        document.addEventListener('pointermove', this.handleMouseMoveBind);
        document.addEventListener('mouseup', this.handleMouseUpBind);
        document.addEventListener('touchup', this.handleMouseUpBind);
        document.addEventListener('pointerup', this.handleMouseUpBind);
    }
    handleMouseMove(event) {
        if (this.isDragging) {
            this.currentX = event.clientX || event.touches[0].clientX;
            let distanceX = this.currentX - this.initialX;
            if (this.resizeSide === 'move') {
                this.currentY = event.clientY || event.touches[0].clientY;
                let distanceY = this.currentY - this.initialY;
                this.element.style.top = `${this.dragInitPos.top + distanceY}px`;
                this.element.style.left = `${this.dragInitPos.left + distanceX}px`;
                this.dragEndPos = {
                    id: this.getBookingId(),
                    fromRoomId: this.getBookedRoomId(),
                    top: this.dragInitPos.top + distanceY,
                    left: this.dragInitPos.left + distanceX,
                };
                this.dragEndPos.x = this.dragEndPos.left; // + 18;
                this.dragEndPos.y = this.dragEndPos.top; // + (this.elementRect.height/2);
                this.dragOverEventData.emit({ id: 'DRAG_OVER', data: this.dragEndPos });
            }
            else {
                if (!this.bookingEvent.is_direct && !utils.isBlockUnit(this.bookingEvent.STATUS_CODE)) {
                    return;
                }
                let newWidth = this.initialWidth;
                if (this.resizeSide == 'rightSide') {
                    newWidth = this.initialWidth + distanceX;
                    newWidth = Math.min(newWidth, this.initialX + this.element.offsetWidth);
                    newWidth = Math.max(this.dayWidth - this.eventSpace, newWidth);
                    this.element.style.width = `${newWidth}px`;
                    this.isShrinking = distanceX < 0;
                }
                else if (this.resizeSide == 'leftSide') {
                    this.isShrinking = distanceX > 0;
                    newWidth = Math.max(this.dayWidth - this.eventSpace, this.initialWidth - distanceX);
                    let newLeft = this.initialLeft + (this.initialWidth - newWidth);
                    this.element.style.left = `${newLeft}px`;
                    this.element.style.width = `${newWidth}px`;
                }
                this.finalWidth = newWidth;
            }
        }
        else {
            console.log('still mouse move listening...');
        }
    }
    handleMouseUp() {
        if (this.isDragging) {
            if (this.resizeSide === 'move') {
                // console.log("Initial X::"+this.dragInitPos.x);
                // console.log("Initial Y::"+this.dragInitPos.y);
                // console.log("End X::"+this.dragEndPos.x);
                // console.log("End Y::"+this.dragEndPos.y);
                if (this.isTouchStart) {
                    this.moveDifferenceX = Math.abs(this.dragEndPos.x - this.dragInitPos.x);
                    this.moveDifferenceY = Math.abs(this.dragEndPos.y - this.dragInitPos.y);
                }
                this.dragOverEventData.emit({
                    id: 'DRAG_OVER_END',
                    data: Object.assign(Object.assign({}, this.dragEndPos), { pool: this.bookingEvent.POOL, nbOfDays: this.bookingEvent.NO_OF_DAYS }),
                });
            }
            else {
                const finalWidth = this.finalWidth -
                    (!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? this.dayWidth / 2 : 0);
                const numberOfDays = Math.round(finalWidth / this.dayWidth);
                console.log(finalWidth, this.dayWidth, numberOfDays);
                let initialStayDays = this.getStayDays();
                if (initialStayDays != numberOfDays && !isNaN(numberOfDays)) {
                    //this.setStayDays(numberOfDays);
                    if (this.resizeSide == 'leftSide') {
                        this.element.style.left = `${this.initialLeft + (initialStayDays - numberOfDays) * this.dayWidth}px`;
                        // set FROM_DATE = TO_DATE - numberOfDays
                    }
                    else {
                        if (numberOfDays < initialStayDays) {
                            this.isShrinking = true;
                        }
                        // set TO_DATE = FROM_DATE + numberOfDays
                    }
                    // const nbrOfDays =
                    // !this.isNewEvent() && moment(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? numberOfDays - 1 : numberOfDays;
                    this.dragOverEventData.emit({
                        id: 'STRETCH_OVER_END',
                        data: {
                            id: this.getBookingId(),
                            fromRoomId: +this.getBookedRoomId(),
                            x: +this.element.style.left.replace('px', ''),
                            y: +this.element.style.top.replace('px', ''),
                            pool: this.bookingEvent.POOL,
                            nbOfDays: numberOfDays,
                        },
                    });
                    const offset = !this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? +this.dayWidth / 2 : 0;
                    this.element.style.width = `${numberOfDays * this.dayWidth - this.eventSpace + offset}px`;
                }
                else {
                    this.element.style.left = `${this.initialLeft}px`;
                    this.element.style.width = `${numberOfDays * this.dayWidth - this.eventSpace}px`;
                }
            }
        }
        else {
            console.log('still mouse up listening...');
        }
        this.isDragging = false;
        document.removeEventListener('mousemove', this.handleMouseMoveBind);
        document.removeEventListener('touchmove', this.handleMouseMoveBind);
        document.removeEventListener('pointermove', this.handleMouseMoveBind);
        document.removeEventListener('mouseup', this.handleMouseUpBind);
        document.removeEventListener('touchup', this.handleMouseUpBind);
        document.removeEventListener('pointerup', this.handleMouseUpBind);
    }
    updateData(data) {
        this.updateEventData.emit(data);
    }
    calculateHoverPosition() {
        const barRect = this.element.getBoundingClientRect();
        const barWidth = barRect.width;
        const barLeft = barRect.left;
        const screenWidth = window.innerWidth;
        let hoverLeft;
        if (barWidth <= screenWidth) {
            hoverLeft = barWidth / 2;
        }
        else {
            hoverLeft = screenWidth / 2 - barLeft;
        }
        return {
            position: 'absolute',
            left: `${hoverLeft}px`,
            transform: 'translateX(-50%)',
        };
    }
    renderEventBookingNumber() {
        if (this.bookingEvent.STATUS === 'TEMP-EVENT' || this.bookingEvent.ID === 'NEW_TEMP_EVENT') {
            return '';
        }
        if (utils.isBlockUnit(this.bookingEvent.STATUS_CODE)) {
            return '';
        }
        if (!this.bookingEvent.is_direct) {
            return ` - ${this.bookingEvent.channel_booking_nbr}`;
        }
        return ` - ${this.bookingEvent.BOOKING_NUMBER}`;
    }
    showEventInfo(showInfo) {
        // if (this.isHighlightEventType() || this.bookingEvent.hideBubble) {
        //   return null;
        // }
        // if (showInfo) {
        //   // Calculate which side we need to show the bubble, top side or bottom.
        //   let bodyContainer = document.querySelector('.calendarScrollContainer');
        //   let bodyContainerRect: { [key: string]: any } = bodyContainer.getBoundingClientRect();
        //   let elementRect: { [key: string]: any } = this.element.getBoundingClientRect();
        //   let midPoint = bodyContainerRect.height / 2 + bodyContainerRect.top + 50;
        //   // let topDifference = elementRect.top - bodyContainerRect.top;
        //   // let bottomDifference = bodyContainerRect.bottom - elementRect.bottom;
        //   if (elementRect.top < midPoint) {
        //     this.bubbleInfoTopSide = false;
        //   } else {
        //     this.bubbleInfoTopSide = true;
        //   }
        // }
        // // showInfo = true;
        // if (showInfo) {
        //   this.hideBubbleInfo.emit({
        //     key: 'hidePopup',
        //     currentInfoBubbleId: this.getBookingId(),
        //   });
        // }
        // this.showInfoPopup = showInfo;
        // this.renderAgain();
        if (this.isHighlightEventType() || this.bookingEvent.hideBubble) {
            return null;
        }
        if (showInfo) {
            // Calculate which side we need to show the bubble, top side or bottom.
            let bodyContainer = document.querySelector('.calendarScrollContainer');
            let bodyContainerRect = bodyContainer.getBoundingClientRect();
            let elementRect = this.element.getBoundingClientRect();
            let midPoint = bodyContainerRect.height / 2 + bodyContainerRect.top + 50;
            if (elementRect.top < midPoint) {
                this.bubbleInfoTopSide = false;
            }
            else {
                this.bubbleInfoTopSide = true;
            }
        }
        if (showInfo) {
            this.hideBubbleInfo.emit({
                key: 'hidePopup',
                currentInfoBubbleId: this.getBookingId(),
            });
        }
        this.showInfoPopup = showInfo;
        this.renderAgain();
    }
    render() {
        // onMouseLeave={()=>this.showEventInfo(false)}
        let legend = this.getEventLegend();
        let noteNode = this.getNoteNode();
        let balanceNode = this.getBalanceNode();
        // console.log(this.bookingEvent.BOOKING_NUMBER === '46231881' ? this.bookingEvent : '');
        return (index.h(index.Host, { key: '8c4ab92dd013c5b75f2bfd8b5aa7f31eece4702c', class: `bookingEvent  ${this.isNewEvent() || this.isHighlightEventType() ? 'newEvent' : ''} ${legend.clsName} `, style: this.getPosition(), id: 'event_' + this.getBookingId() }, index.h("div", { key: '8271041cf92d9b8366ae0aaefdfdba3cb235a644', class: `bookingEventBase  ${!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 'skewedLeft' : ''}
          ${!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)) ? 'skewedRight' : ''}
          ${!this.bookingEvent.is_direct &&
                !utils.isBlockUnit(this.bookingEvent.STATUS_CODE) &&
                this.bookingEvent.STATUS !== 'TEMP-EVENT' &&
                this.bookingEvent.ID !== 'NEW_TEMP_EVENT' &&
                'border border-dark ota-booking-event'}  ${this.isSplitBooking() ? 'splitBooking' : ''}`, style: { 'backgroundColor': legend.color, '--ir-event-bg': legend.color }, onTouchStart: event => this.startDragging(event, 'move'), onMouseDown: event => this.startDragging(event, 'move') }), noteNode ? index.h("div", { class: "legend_circle noteIcon", style: { backgroundColor: noteNode.color } }) : null, balanceNode ? index.h("div", { class: "legend_circle balanceIcon", style: { backgroundColor: balanceNode.color } }) : null, index.h("div", { key: '60b2361762ffbcd7bc48fccd046e43030cff9af9', class: "bookingEventTitle", onTouchStart: event => this.startDragging(event, 'move'), onMouseDown: event => this.startDragging(event, 'move') }, this.getBookedBy(), this.renderEventBookingNumber()), (this.bookingEvent.is_direct || utils.isBlockUnit(this.bookingEvent.STATUS_CODE)) && (index.h(index.Fragment, { key: 'a8d1efe99b173bddf5e1bff67cdb2ac188e958e7' }, index.h("div", { key: 'f1fc2366440d9f0802a586a1c6fa9b2bec0d296a', class: `bookingEventDragHandle leftSide ${!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 'skewedLeft' : ''}
            ${!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)) ? 'skewedRight' : ''}`, onTouchStart: event => this.startDragging(event, 'leftSide'), onMouseDown: event => this.startDragging(event, 'leftSide') }), index.h("div", { key: '8b005472509e4054c362ae94b79b740cd09fcc97', class: `bookingEventDragHandle rightSide ${!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 'skewedLeft' : ''}
              ${!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)) ? 'skewedRight' : ''}`, onTouchStart: event => this.startDragging(event, 'rightSide'), onMouseDown: event => this.startDragging(event, 'rightSide') }))), this.showInfoPopup ? (index.h("igl-booking-event-hover", { is_vacation_rental: this.is_vacation_rental, countries: this.countries, currency: this.currency, class: "top", bookingEvent: this.bookingEvent, bubbleInfoTop: this.bubbleInfoTopSide, style: this.calculateHoverPosition() })) : null));
    }
    get element() { return index.getElement(this); }
};
IglBookingEvent.style = IglBookingEventStyle0;

class ReloadInterceptor {
    /**
     * @param onIntercept
     *   Called whenever a reload is intercepted (F5/Ctrl+R or beforeunload).
     * @param autoActivate
     *   If true, will immediately attach listeners.
     */
    constructor(options) {
        var _a;
        this.isActive = false;
        /** Native “Are you sure you want to leave?” dialog */
        this.handleBeforeUnload = (e) => {
            this.onIntercept();
            e.preventDefault();
            e.returnValue = '';
        };
        this.onIntercept = (_a = options.onIntercept) !== null && _a !== void 0 ? _a : (() => { });
        if (options.autoActivate) {
            this.activate();
        }
    }
    /** Begin intercepting reloads & navigations */
    activate() {
        if (this.isActive)
            return;
        window.addEventListener('beforeunload', this.handleBeforeUnload, { capture: true });
        this.isActive = true;
    }
    /** Stop intercepting reloads & navigations */
    deactivate() {
        if (!this.isActive)
            return;
        window.removeEventListener('beforeunload', this.handleBeforeUnload, { capture: true });
        this.isActive = false;
    }
}

const iglBulkStopSaleCss = ".bulk-sheet-container.sc-igl-bulk-stop-sale{display:flex;flex-direction:column;height:auto !important;min-height:100vh;background:white !important;gap:1rem}.animated-container.sc-igl-bulk-stop-sale{transition:all 0.5s ease}.days-checkbox.sc-igl-bulk-stop-sale{gap:0.5rem}";
const IglBulkStopSaleStyle0 = iglBulkStopSaleCss;

const sheetCss$1 = ".sc-igl-bulk-stop-sale-h{height:100%}.sheet-container.sc-igl-bulk-stop-sale{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-igl-bulk-stop-sale{height:-webkit-fill-available;height:100vh}@supports (height: 100svh){.sheet-container.sc-igl-bulk-stop-sale{height:100svh}}.sheet-footer.sc-igl-bulk-stop-sale{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-igl-bulk-stop-sale{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-igl-bulk-stop-sale{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-igl-bulk-stop-sale{flex-direction:row;align-items:center}}";
const IglBulkStopSaleStyle1 = sheetCss$1;

const IglBulkStopSale = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.maxDatesLength = 8;
        this.selectedRoomTypes = [];
        this.dates = [{ from: null, to: null }];
        this.selectedWeekdays = new Set(Array(7)
            .fill(null)
            .map((_, i) => i));
        this.dateRefs = [];
        this.minDate = moment.hooks().format('YYYY-MM-DD');
        this.bookingService = new booking_service.BookingService();
        this.datesSchema = index$1.z.array(index$1.z.object({
            from: index$1.z
                .any()
                .refine((val) => moment.hooks.isMoment(val), {
                message: "Invalid 'from' date; expected a Moment object.",
            })
                .transform((val) => val.format('YYYY-MM-DD')),
            to: index$1.z
                .any()
                .refine((val) => moment.hooks.isMoment(val), {
                message: "Invalid 'to' date; expected a Moment object.",
            })
                .transform((val) => val.format('YYYY-MM-DD')),
        }));
    }
    getDayIndex(dateStr) {
        return moment.hooks(dateStr, 'YYYY-MM-DD').day();
    }
    componentDidLoad() {
        this.reloadInterceptor = new ReloadInterceptor({ autoActivate: false });
        this.sidebar = document.querySelector('ir-sidebar');
    }
    disconnectedCallback() {
        this.reloadInterceptor.deactivate();
    }
    // @Listen('beforeSidebarClose', { target: 'body' })
    // handleBeforeSidebarClose(e: CustomEvent) {
    //   e.stopImmediatePropagation();
    //   e.stopPropagation();
    //   if (window.confirm('Do you really want to proceed?')) {
    //     this.deactivate();
    //     this.sidebar.toggleSidebar();
    //   }
    // }
    async addBlockDates() {
        const generatePeriodsToModify = periods => {
            const p = [];
            for (const period of periods) {
                let current = period.from;
                const lastDay = moment.hooks(period.to, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD');
                while (current !== lastDay) {
                    const nextDay = moment.hooks(current, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD');
                    if (!this.selectedWeekdays.has(this.getDayIndex(current))) {
                        current = nextDay;
                        continue;
                    }
                    for (const selectedRoom of this.selectedRoomTypes) {
                        p.push({
                            room_type_id: selectedRoom.id,
                            night: current,
                        });
                    }
                    current = nextDay;
                }
            }
            return p;
        };
        const updateCalendarCells = (payloads) => {
            const prevDisabledCells = new Map(utils.calendar_dates.disabled_cells);
            // Caches
            const roomsInfoById = new Map(calendarData.calendar_data.roomsInfo.map((rt, i) => [rt.id, { roomType: rt, index: i }]));
            const dayIndexByValue = new Map(utils.calendar_dates.days.map((day, i) => [day.value, i]));
            const rateByRoomTypeAndDate = new Map();
            for (const payload of payloads) {
                for (const restriction of payload.restrictions) {
                    const { night, room_type_id } = restriction;
                    const { roomType } = roomsInfoById.get(room_type_id);
                    if (!roomType)
                        continue;
                    const dayIndex = dayIndexByValue.get(night);
                    if (dayIndex === undefined) {
                        console.warn(`Couldn't find date ${night}`);
                        continue;
                    }
                    const day = utils.calendar_dates.days[dayIndex];
                    const rateKey = `${room_type_id}_${night}`;
                    let rp = rateByRoomTypeAndDate.get(rateKey);
                    if (!rp) {
                        rp = day.rate.find(r => r.id === room_type_id);
                        if (!rp) {
                            console.warn(`Couldn't find room type ${room_type_id}`);
                            continue;
                        }
                        rateByRoomTypeAndDate.set(rateKey, rp);
                    }
                    const haveAvailability = rp.exposed_inventory.rts === 0;
                    for (const room of roomType.physicalrooms) {
                        const key = `${room.id}_${night}`;
                        prevDisabledCells.set(key, {
                            disabled: payload.is_closed ? true : haveAvailability,
                            reason: payload.is_closed ? 'stop_sale' : haveAvailability ? 'inventory' : 'stop_sale',
                        });
                    }
                }
            }
            utils.calendar_dates['disabled_cells'] = new Map(prevDisabledCells);
        };
        try {
            this.errors = null;
            this.isLoading = true;
            const periods = this.datesSchema.parse(this.dates);
            if (this.selectedRoomTypes.length === 0) {
                this.unitSections.scrollIntoView({ behavior: 'smooth', block: 'center' });
                this.errors = 'rooms';
                return;
            }
            if (this.selectedWeekdays.size === 0) {
                this.weekdaysSections.scrollIntoView({ behavior: 'smooth', block: 'center' });
                this.errors = 'weekdays';
                return;
            }
            this.activate();
            const periods_to_modify = generatePeriodsToModify(periods);
            const isAllOpen = this.selectedRoomTypes.every(e => e.result === 'open');
            const isAllClosed = this.selectedRoomTypes.every(e => e.result === 'closed');
            if (isAllClosed || isAllOpen) {
                const payload = {
                    is_closed: isAllClosed,
                    restrictions: periods_to_modify,
                    property_id: this.property_id,
                };
                await this.bookingService.setExposedRestrictionPerRoomType(payload);
                updateCalendarCells([payload]);
            }
            else {
                const payloads = [];
                for (const room of this.selectedRoomTypes) {
                    const periods = periods_to_modify.filter(f => f.room_type_id === room.id);
                    payloads.push({
                        is_closed: room.result === 'closed',
                        restrictions: periods,
                        property_id: this.property_id,
                    });
                }
                await Promise.all(payloads.map(p => this.bookingService.setExposedRestrictionPerRoomType(p)));
                updateCalendarCells(payloads);
            }
            this.deactivate();
            this.toast.emit({
                type: 'success',
                title: locales_store.locales.entries.Lcz_RequestSubmittedSuccessfully,
                description: '',
            });
            this.isLoading = false;
            this.closeModal.emit();
        }
        catch (error) {
            console.log(error);
            if (error instanceof index$1.ZodError) {
                this.datesSections.scrollIntoView({ behavior: 'smooth', block: 'end' });
                this.errors = 'dates';
            }
        }
        finally {
            this.isLoading = false;
        }
    }
    activate() {
        this.reloadInterceptor.activate();
        if (this.sidebar)
            this.sidebar.preventClose = true;
    }
    deactivate() {
        this.reloadInterceptor.deactivate();
        if (this.sidebar)
            this.sidebar.preventClose = false;
    }
    handleDateChange({ index, date, key }) {
        var _a, _b;
        // 1) clone and set the new date
        const dates = [...this.dates];
        dates[index] = Object.assign(Object.assign({}, dates[index]), { [key]: date });
        // 1a) if they just changed the “from”, always clear that row’s “to”
        if (key === 'from' && ((_a = dates[index].to) === null || _a === void 0 ? void 0 : _a.isBefore(date, 'dates'))) {
            dates[index].to = null;
        }
        // 2) clear any subsequent rows whose “from” is on or before the changed date
        for (let i = index + 1; i < dates.length; i++) {
            const rowFrom = (_b = dates[i]) === null || _b === void 0 ? void 0 : _b.from;
            if (rowFrom && rowFrom.isSameOrBefore(date, 'day')) {
                dates[i] = { from: null, to: null };
            }
        }
        // 3) commit
        this.dates = dates;
        // 4) open the appropriate picker
        setTimeout(() => {
            var _a, _b;
            if (key === 'from') {
                (_a = this.dateRefs[index]) === null || _a === void 0 ? void 0 : _a.to.openDatePicker();
            }
            else {
                const nextFrom = dates.findIndex(d => d.from === null);
                if (nextFrom > -1) {
                    (_b = this.dateRefs[nextFrom]) === null || _b === void 0 ? void 0 : _b.from.openDatePicker();
                }
            }
        }, 100);
    }
    addDateRow() {
        const last_dates = this.dates[this.dates.length - 1];
        if (!last_dates.from || !last_dates.to) {
            this.errors = 'dates';
            return;
        }
        this.errors = null;
        this.dates = [...this.dates, { from: null, to: null }];
        setTimeout(() => {
            var _a;
            (_a = this.dateRefs[this.dates.length - 1].to) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
    render() {
        return (index.h("form", { key: '51fd007c64996c9c91c346abcc23cd92fcb59591', class: 'bulk-sheet-container', onSubmit: e => {
                e.preventDefault();
                this.addBlockDates();
            } }, index.h("div", { key: '596cb02c68f833ea02459ca58a8d397800e90cc4', class: "sheet-header d-flex align-items-center" }, index.h("ir-title", { key: 'a1177e6662cff67bed1f890c9a138e4cc0f69b72', onCloseSideBar: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (this.isLoading) {
                    return;
                }
                this.closeModal.emit(null);
            }, class: "px-1 mb-0", label: locales_store.locales.entries.Lcz_BulkStopOpenSale, displayContext: "sidebar" })), index.h("div", { key: 'b314507b24a389068be1d85194a1afe2d1286f3c', class: "sheet-body px-1" }, index.h("div", { key: '1e72308d7665143964ff43a0d011cb4fad95a07e', class: "text-muted text-left py-0 my-0" }, index.h("p", { key: '7416e973c1a2a77a7884e68fd7e30521f8cc9b54' }, locales_store.locales.entries.Lcz_SelectAffectedUnits)), index.h("div", { key: '16b03b548e6b6c2887da08878f482843e637658b' }, this.errors === 'rooms' && (index.h("p", { key: '153f462ca9d7d054adfe5c1bbaac7112f9ef8b2a', class: 'text-danger text-left smaller p-0 ', style: { 'margin-bottom': '0.5rem' } }, calendarData.calendar_data.is_vacation_rental ? locales_store.locales.entries.Lcz_PlzSelectOneListing : locales_store.locales.entries.Lcz_PlzSelectOneUnit)), index.h("table", { key: 'dfe934096462ca07f460150740227760ac675b7f', ref: el => (this.unitSections = el) }, index.h("thead", { key: '0add5fb58edd79a4dab39f748594b1e0dda39056' }, index.h("tr", { key: '3521861d7c228bffb617c82a70c5a6e1c07c9fde' }, index.h("th", { key: '8510b0dcc38ff9f1ec2aa629a8b7b0b709f287dc', class: "sr-only" }, "choice"), index.h("th", { key: 'd2bb93782e50325210791d70b020b2bcdcc6bf1d', class: "sr-only" }, "room type"))), index.h("tbody", { key: 'db2121831d74165ff83646797c2e25affd91b6eb' }, calendarData.calendar_data.roomsInfo.map((roomType, i) => {
            const row_style = i === calendarData.calendar_data.roomsInfo.length - 1 ? '' : 'pb-1';
            return (index.h("tr", { key: roomType.id }, index.h("td", { class: `choice-row ${row_style}` }, index.h("div", { class: 'd-flex justify-content-end' }, index.h("ir-select", { LabelAvailable: false, firstOption: `${locales_store.locales.entries.Lcz_Select}...`, data: [
                    { value: 'open', text: locales_store.locales.entries.Lcz_Open },
                    { value: 'closed', text: locales_store.locales.entries.Lcz_StopSale },
                ], onSelectChange: e => {
                    const choice = e.detail;
                    // drop any existing entry for this roomType
                    const rest = this.selectedRoomTypes.filter(entry => entry.id !== roomType.id);
                    // if they actually picked something, append it
                    if (choice) {
                        rest.push({ id: roomType.id, result: choice });
                    }
                    this.selectedRoomTypes = rest;
                } }))), index.h("td", { class: `pl-1 text-left ${row_style}` }, roomType.name)));
        })))), index.h("p", { key: '8ea8c39dd80d4961a42288b1c4688a3f5aab7aca', class: "text-left mt-2 text-muted" }, "Included days"), this.errors === 'weekdays' && index.h("p", { key: 'c089d7045acc44a00267b891d472b7b6db4d8229', class: 'text-danger text-left smaller m-0 p-0' }, "Please select at least one day"), index.h("ir-weekday-selector", { key: '4848ce22bba32c065b5d0dd864de17203cfefe3f', ref: el => (this.weekdaysSections = el), weekdays: Array.from(this.selectedWeekdays), onWeekdayChange: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.selectedWeekdays = new Set(e.detail);
            } }), index.h("table", { key: '815e35ada27ffb2db7771415e122a3d13617ed79', class: "mt-1", ref: el => (this.datesSections = el) }, index.h("thead", { key: '6fd115e7ff1c5140698fac187e8df8f860fb9e00' }, index.h("tr", { key: '26b42dc065e23f9d6422414315a1868fcd598b30' }, index.h("th", { key: '820a28f9803fed2c381c0a1688436b6f43f12b58', class: "text-left" }, locales_store.locales.entries.Lcz_From), index.h("th", { key: 'e563460156a8dc18648d727ae63ae72d8d08bba2', class: "text-left" }, locales_store.locales.entries.Lcz_ToExclusive), index.h("td", { key: 'd7ab874a6f8da79fe7c7ef4f9eae065053c9fbb7' }, this.dates.length !== this.maxDatesLength && (index.h("ir-button", { key: '85fa8e5e5e77dd0cfacbed198e32676bc93e561d', variant: "icon", icon_name: "plus", onClickHandler: () => {
                this.addDateRow();
            } }))))), index.h("tbody", { key: 'f2ae54173b2b932e7751605c53ae2b1af603856b' }, this.dates.map((d, i) => {
            var _a, _b, _c, _d, _e, _f, _g;
            if (!this.dateRefs[i]) {
                this.dateRefs[i] = {};
            }
            const fromDateMinDate = i > 0 ? (_c = (_b = (_a = this.dates[i - 1]) === null || _a === void 0 ? void 0 : _a.to.clone().add(1, 'days')) === null || _b === void 0 ? void 0 : _b.format('YYYY-MM-DD')) !== null && _c !== void 0 ? _c : this.minDate : this.minDate;
            const toDateMinDate = this.dates[i].from ? (_e = (_d = this.dates[i]) === null || _d === void 0 ? void 0 : _d.from.clone().add(1, 'days')) === null || _e === void 0 ? void 0 : _e.format('YYYY-MM-DD') : this.minDate;
            return (index.h("tr", { key: `date_${i}` }, index.h("td", { class: "pr-1 pb-1" }, index.h("ir-date-picker", { ref: el => {
                    this.dateRefs[i].from = el;
                }, forceDestroyOnUpdate: true, minDate: fromDateMinDate, "data-testid": "pickup_arrival_date", date: (_f = d.from) === null || _f === void 0 ? void 0 : _f.format('YYYY-MM-DD'), emitEmptyDate: true, "aria-invalid": String(this.errors === 'dates' && !d.from), onDateChanged: evt => {
                    evt.stopImmediatePropagation();
                    evt.stopPropagation();
                    this.handleDateChange({ index: i, date: evt.detail.start, key: 'from' });
                }, onDatePickerFocus: e => {
                    var _a, _b, _c;
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    if (i === 0) {
                        return;
                    }
                    const index = this.dates.findIndex(d => !d.from || !d.to);
                    if (!((_a = this.dates[index]) === null || _a === void 0 ? void 0 : _a.from)) {
                        (_b = this.dateRefs[index]) === null || _b === void 0 ? void 0 : _b.from.openDatePicker();
                        return;
                    }
                    if (!((_c = this.dates[index]) === null || _c === void 0 ? void 0 : _c.to)) {
                        this.dateRefs[index].to.openDatePicker();
                    }
                } }, index.h("input", { type: "text", slot: "trigger", value: d.from ? d.from.format('MMM DD, YYYY') : null, class: `form-control input-sm ${this.errors === 'dates' && !d.to ? 'border-danger' : ''} text-center`, style: { width: '100%' } }))), index.h("td", { class: "pr-1 pb-1" }, index.h("ir-date-picker", { forceDestroyOnUpdate: true, ref: el => {
                    this.dateRefs[i].to = el;
                }, "data-testid": "pickup_arrival_date", date: (_g = d.to) === null || _g === void 0 ? void 0 : _g.format('YYYY-MM-DD'), emitEmptyDate: true, minDate: toDateMinDate, "aria-invalid": String(this.errors === 'dates' && !d.to), onDateChanged: evt => {
                    evt.stopImmediatePropagation();
                    evt.stopPropagation();
                    this.handleDateChange({ index: i, date: evt.detail.start, key: 'to' });
                }, onDatePickerFocus: e => {
                    var _a, _b, _c, _d;
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    const index = this.dates.findIndex(d => !d.from || !d.to);
                    if (!((_a = this.dates[index]) === null || _a === void 0 ? void 0 : _a.from)) {
                        (_c = (_b = this.dateRefs[index]) === null || _b === void 0 ? void 0 : _b.from) === null || _c === void 0 ? void 0 : _c.openDatePicker();
                        return;
                    }
                    if (!((_d = this.dates[index]) === null || _d === void 0 ? void 0 : _d.to)) {
                        this.dateRefs[index].to.openDatePicker();
                    }
                } }, index.h("input", { type: "text", slot: "trigger", value: d.to ? d.to.format('MMM DD, YYYY') : null, class: `form-control input-sm 
                          ${this.errors === 'dates' && !d.to ? 'border-danger' : ''}
                          text-center`, style: { width: '100%' } }))), i > 0 && (index.h("td", { class: "pb-1" }, index.h("ir-button", { variant: "icon", icon_name: "minus", onClickHandler: () => {
                    this.dates = this.dates.filter((_, j) => j !== i);
                } })))));
        })))), index.h("div", { key: '7c87f1fae101045c0c7b342a1dbf44bf772a5cdb', class: 'sheet-footer' }, index.h("ir-button", { key: 'a5ceefe0053f13e0a30c0c39d89c910b14824fa1', text: locales_store.locales.entries.Lcz_Cancel, btn_color: "secondary", class: 'flex-fill', onClickHandler: () => this.closeModal.emit(null) }), index.h("ir-button", { key: '13e193d057cc56d1615d7bcd4d29dd249c4bbcda', isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Save, btn_type: "submit", class: "flex-fill" }))));
    }
};
IglBulkStopSale.style = IglBulkStopSaleStyle0 + IglBulkStopSaleStyle1;

const iglCalBodyCss = ".sc-igl-cal-body-h{display:block}.bodyContainer.sc-igl-cal-body{position:relative}.roomRow.sc-igl-cal-body{width:max-content}.roomRow.sc-igl-cal-body:first-child{margin-top:80px}.categoryName.sc-igl-cal-body{font-weight:bold;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.cellData.disabled.sc-igl-cal-body{background:rgba(153, 153, 153, 15%);cursor:var(--cell-cursor, not-allowed);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body{cursor:pointer;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body:hover{background:#e0e0e0}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body:hover[data-hk-enabled='false']{background:white;cursor:default}.cellData.sc-igl-cal-body{width:58px;height:30px;display:inline-grid;border-top:1px solid #e0e0e0;border-left:1px solid #e0e0e0;vertical-align:top}.triangle-button.sc-igl-cal-body{--size:10px;position:absolute;right:-6px;top:-1px;width:0;height:0;padding:0;border:none;background:transparent;cursor:pointer;width:0;height:0;border-left:var(--size) solid transparent;border-right:var(--size) solid transparent;border-bottom:var(--size) solid var(--in-toggle-color);transform:rotate(45deg)}.cellData.sc-igl-cal-body:nth-child(2){border-left:0px}.cellData.sc-igl-cal-body:last-child{border-right:1px solid rgba(186, 191, 199, 0.5)}.roomHeaderCell.sc-igl-cal-body{position:-webkit-sticky;position:sticky;left:0;background:#fff;border-right:1px solid #ccc;width:170px;z-index:1}.currentDay.sc-igl-cal-body{background-color:#e3f3fa}.dragOverHighlight.sc-igl-cal-body{background-color:#f5f5dc !important}.selectedDay.sc-igl-cal-body{background-color:#f9f9c9 !important}.categoryTitle.sc-igl-cal-body{grid-template-columns:1fr 20px;padding-left:10px;cursor:pointer;height:40px;font-size:0.9em}.categoryTitle.sc-igl-cal-body>.sc-igl-cal-body:nth-child(1){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.roomTitle.sc-igl-cal-body{padding-left:20px;font-size:0.9em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.roomTitle.sc-igl-cal-body>.sc-igl-cal-body:nth-child(1){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.roomTitle.pl10.sc-igl-cal-body{padding-left:10px}.categoryPriceColumn.sc-igl-cal-body{align-items:center;height:40px;-webkit-user-select:none;user-select:none;position:relative}.bookingEventsContainer.sc-igl-cal-body{position:absolute;top:0;left:0}";
const IglCalBodyStyle0 = iglCalBodyCss;

const IglCalBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.addBookingDatasEvent = index.createEvent(this, "addBookingDatasEvent", 7);
        this.showBookingPopup = index.createEvent(this, "showBookingPopup", 7);
        this.scrollPageToRoom = index.createEvent(this, "scrollPageToRoom", 7);
        this.dragOverElement = '';
        this.renderAgain = false;
        this.selectedRooms = {};
        this.fromRoomId = -1;
        this.currentDate = new Date();
        this.housekeepingService = new housekeeping_service.HouseKeepingService();
        this.bookingMap = new Map();
        this.interactiveTitle = [];
        this.dayRateMap = new Map();
    }
    // private disabledCellsCache = new Map<string, boolean>();
    componentWillLoad() {
        this.currentDate.setHours(0, 0, 0, 0);
        this.bookingMap = this.getBookingMap(this.getBookingData());
        utils.calendar_dates.days.forEach(day => {
            this.dayRateMap.set(day.day, day.rate);
        });
        this.updateDisabledCellsCache();
    }
    handleCalendarDataChange() {
        this.bookingMap = this.getBookingMap(this.getBookingData());
        this.updateDisabledCellsCache();
    }
    dragOverHighlightElementHandler(event) {
        this.dragOverElement = event.detail.dragOverElement;
    }
    gotoRoom(event) {
        let roomId = event.detail.roomId;
        let category = this.getRoomCategoryByRoomId(roomId);
        if (!category.expanded) {
            this.toggleCategory(category);
            setTimeout(() => {
                this.scrollToRoom(roomId);
            }, 10);
        }
        else {
            this.scrollToRoom(roomId);
        }
    }
    addToBeAssignedEvents(event) {
        // let roomId = event.detail.roomId;
        this.addBookingDatas(event.detail.data);
        this.renderElement();
    }
    closeWindow() {
        let ind = this.getBookingData().findIndex(ev => ev.ID === 'NEW_TEMP_EVENT');
        if (ind !== -1) {
            this.getBookingData().splice(ind, 1);
            console.log('removed item..');
            this.renderElement();
        }
    }
    scrollToRoom(roomId) {
        this.scrollPageToRoom.emit({
            key: 'scrollPageToRoom',
            id: roomId,
            refClass: 'room_' + roomId,
        });
    }
    getRoomCategoryByRoomId(roomId) {
        return this.calendarData.roomsInfo.find(roomCategory => {
            return this.getCategoryRooms(roomCategory).find(room => this.getRoomId(room) === roomId);
        });
    }
    getCategoryName(roomCategory) {
        return roomCategory.name;
    }
    getCategoryId(roomCategory) {
        return roomCategory.id;
    }
    getTotalPhysicalRooms(roomCategory) {
        return this.getCategoryRooms(roomCategory).length;
    }
    getCategoryRooms(roomCategory) {
        return (roomCategory && roomCategory.physicalrooms) || [];
    }
    getRoomName(roomInfo) {
        return roomInfo.name;
    }
    getRoomId(roomInfo) {
        return roomInfo.id;
    }
    getRoomById(physicalRooms, roomId) {
        return physicalRooms.find(physical_room => this.getRoomId(physical_room) === roomId);
    }
    getBookingData() {
        return this.calendarData.bookingEvents;
    }
    addBookingDatas(aData) {
        this.addBookingDatasEvent.emit(aData);
    }
    getSelectedCellRefName(roomId, selectedDay) {
        return 'room_' + roomId + '_' + selectedDay.currentDate;
    }
    // getSplitBookingEvents(newEvent) {
    //   return this.getBookingData().some(bookingEvent => !['003', '002', '004'].includes(bookingEvent.STATUS_CODE) && newEvent.FROM_DATE === bookingEvent.FROM_DATE);
    // }
    getSplitBookingEvents(newEvent) {
        console.log(newEvent.FROM_DATE);
        return this.getBookingData().some(bookingEvent => {
            if (!['003', '002', '004'].includes(bookingEvent.STATUS_CODE)) {
                if (new Date(newEvent.FROM_DATE).getTime() >= new Date(bookingEvent.FROM_DATE).getTime() &&
                    new Date(newEvent.FROM_DATE).getTime() <= new Date(bookingEvent.TO_DATE).getTime()) {
                    return bookingEvent;
                }
            }
        });
    }
    addNewEvent(roomCategory) {
        let keys = Object.keys(this.selectedRooms);
        let startDate, endDate;
        if (this.selectedRooms[keys[0]].currentDate < this.selectedRooms[keys[1]].currentDate) {
            startDate = new Date(this.selectedRooms[keys[0]].currentDate);
            endDate = new Date(this.selectedRooms[keys[1]].currentDate);
        }
        else {
            startDate = new Date(this.selectedRooms[keys[1]].currentDate);
            endDate = new Date(this.selectedRooms[keys[0]].currentDate);
        }
        const dateDifference = Math.round(Math.abs((endDate.getTime() - startDate.getTime()) / 86400000));
        this.newEvent = {
            ID: 'NEW_TEMP_EVENT',
            NAME: index.h("span", null, "\u00A0"),
            EMAIL: '',
            PHONE: '',
            convertBooking: false,
            REFERENCE_TYPE: 'PHONE',
            FROM_DATE: startDate.getFullYear() + '-' + this.getTwoDigitNumStr(startDate.getMonth() + 1) + '-' + this.getTwoDigitNumStr(startDate.getDate()),
            TO_DATE: endDate.getFullYear() + '-' + this.getTwoDigitNumStr(endDate.getMonth() + 1) + '-' + this.getTwoDigitNumStr(endDate.getDate()),
            BALANCE: '',
            NOTES: '',
            RELEASE_AFTER_HOURS: 0,
            PR_ID: this.selectedRooms[keys[0]].roomId,
            ENTRY_DATE: '',
            NO_OF_DAYS: dateDifference,
            ADULTS_COUNT: 1,
            COUNTRY: '',
            INTERNAL_NOTE: '',
            RATE: '',
            TOTAL_PRICE: '',
            RATE_PLAN: '',
            ARRIVAL_TIME: '',
            TITLE: locales_store.locales.entries.Lcz_NewBookingFor,
            roomsInfo: [roomCategory],
            CATEGORY: roomCategory.name,
            event_type: 'BAR_BOOKING',
            STATUS: 'TEMP-EVENT',
            defaultDateRange: {
                fromDate: null,
                fromDateStr: '',
                toDate: null,
                toDateStr: '',
                dateDifference,
                editable: false,
                message: 'Including 5.00% City Tax - Excluding 11.00% VAT',
            },
        };
        let popupTitle = roomCategory.name + ' ' + this.getRoomName(this.getRoomById(this.getCategoryRooms(roomCategory), this.selectedRooms[keys[0]].roomId));
        this.newEvent.BLOCK_DATES_TITLE = `${locales_store.locales.entries.Lcz_BlockDatesFor} ${popupTitle}`;
        this.newEvent.TITLE += popupTitle;
        this.newEvent.defaultDateRange.toDate = new Date(this.newEvent.TO_DATE + 'T00:00:00');
        this.newEvent.defaultDateRange.fromDate = new Date(this.newEvent.FROM_DATE + 'T00:00:00');
        this.newEvent.defaultDateRange.fromDateStr = this.getDateStr(this.newEvent.defaultDateRange.fromDate);
        this.newEvent.defaultDateRange.toDateStr = this.getDateStr(this.newEvent.defaultDateRange.toDate);
        this.newEvent.ENTRY_DATE = new Date().toISOString();
        this.newEvent.legendData = this.calendarData.formattedLegendData;
        let splitBookingEvents = this.getSplitBookingEvents(this.newEvent);
        if (splitBookingEvents) {
            this.newEvent.splitBookingEvents = splitBookingEvents;
        }
        this.getBookingData().push(this.newEvent);
        return this.newEvent;
    }
    getTwoDigitNumStr(num) {
        return num <= 9 ? '0' + num : num;
    }
    getDateStr(date, locale = 'default') {
        return date.getDate() + ' ' + date.toLocaleString(locale, { month: 'short' }) + ' ' + date.getFullYear();
    }
    removeNewEvent() {
        this.calendarData.bookingEvents = this.calendarData.bookingEvents.filter(events => events.ID !== 'NEW_TEMP_EVENT');
        this.newEvent = null;
    }
    // private clickCell(roomId, selectedDay, roomCategory) {
    //   if (!this.isScrollViewDragging && selectedDay.currentDate >= this.currentDate.getTime()) {
    //     let refKey = this.getSelectedCellRefName(roomId, selectedDay);
    //     if (this.selectedRooms.hasOwnProperty(refKey)) {
    //       this.removeNewEvent();
    //       delete this.selectedRooms[refKey];
    //       this.renderElement();
    //       return;
    //     } else if (Object.keys(this.selectedRooms).length != 1 || this.fromRoomId != roomId) {
    //       this.removeNewEvent();
    //       this.selectedRooms = {};
    //       this.selectedRooms[refKey] = { ...selectedDay, roomId };
    //       this.fromRoomId = roomId;
    //       this.renderElement();
    //     } else {
    //       // create bar;
    //       this.selectedRooms[refKey] = { ...selectedDay, roomId };
    //       this.addNewEvent(roomCategory);
    //       this.selectedRooms = {};
    //       this.renderElement();
    //       this.showNewBookingPopup(this.newEvent);
    //     }
    //   }
    // }
    clickCell(roomId, selectedDay, roomCategory) {
        if (!this.isScrollViewDragging && selectedDay.currentDate >= this.currentDate.getTime()) {
            let refKey = this.getSelectedCellRefName(roomId, selectedDay);
            if (this.selectedRooms.hasOwnProperty(refKey)) {
                this.removeNewEvent();
                delete this.selectedRooms[refKey];
                this.renderElement();
                return;
            }
            else if (Object.keys(this.selectedRooms).length != 1 || this.fromRoomId != roomId) {
                this.removeNewEvent();
                this.selectedRooms = {};
                this.selectedRooms[refKey] = Object.assign(Object.assign({}, selectedDay), { roomId });
                this.fromRoomId = roomId;
                this.renderElement();
            }
            else {
                const keys = Object.keys(this.selectedRooms);
                const startDate = moment.hooks(this.selectedRooms[keys[0]].value, 'YYYY-MM-DD');
                const endDate = moment.hooks(selectedDay.value, 'YYYY-MM-DD');
                let cursor = startDate.clone().add(1, 'days');
                let disabledCount = 0;
                while (cursor.isBefore(endDate, 'day')) {
                    const dateKey = cursor.format('YYYY-MM-DD');
                    if (this.isCellDisabled(roomId, dateKey)) {
                        disabledCount++;
                    }
                    cursor.add(1, 'days');
                }
                if (disabledCount >= 1) {
                    this.selectedRooms = {};
                    this.fromRoomId = roomId;
                    this.renderElement();
                    return;
                }
                this.selectedRooms[refKey] = Object.assign(Object.assign({}, selectedDay), { roomId });
                this.addNewEvent(roomCategory);
                this.selectedRooms = {};
                this.renderElement();
                this.showNewBookingPopup(this.newEvent);
            }
        }
    }
    showNewBookingPopup(data) {
        console.log(data);
        // this.showBookingPopup.emit({key: "add", data});
    }
    renderElement() {
        this.renderAgain = !this.renderAgain;
    }
    getBookingMap(bookings) {
        var _a, _b;
        const bookingMap = new Map();
        const today = moment.hooks().startOf('day');
        for (const booking of bookings) {
            const fromDate = moment.hooks(booking.FROM_DATE, 'YYYY-MM-DD').startOf('day');
            const toDate = moment.hooks(booking.TO_DATE, 'YYYY-MM-DD').startOf('day');
            // Check if today is between fromDate and toDate, inclusive.
            if (today.isSameOrAfter(fromDate) && today.isSameOrBefore(toDate)) {
                if (!bookingMap.has(booking.PR_ID)) {
                    bookingMap.set(booking.PR_ID, booking.BOOKING_NUMBER);
                }
                else {
                    if (utils.compareTime(moment.hooks().toDate(), utils.createDateWithOffsetAndHour((_a = calendarData.calendar_data.checkin_checkout_hours) === null || _a === void 0 ? void 0 : _a.offset, (_b = calendarData.calendar_data.checkin_checkout_hours) === null || _b === void 0 ? void 0 : _b.hour))) {
                        bookingMap.set(booking.PR_ID, booking.BOOKING_NUMBER);
                    }
                }
            }
        }
        return bookingMap;
    }
    getGeneralCategoryDayColumns(addClass, isCategory = false, index$1) {
        return utils.calendar_dates.days.map(dayInfo => {
            // const isActive = true;
            return (index.h("div", { class: `cellData  font-weight-bold categoryPriceColumn ${addClass + '_' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''}` }, isCategory ? (index.h(index.Fragment, null, index.h("span", { class: 'categoryName' }, dayInfo.rate[index$1].exposed_inventory.rts))) : ('')));
        });
    }
    getGeneralRoomDayColumns(roomId, roomCategory, roomName) {
        return this.calendarData.days.map(dayInfo => {
            const isCellDisabled = this.isCellDisabled(Number(roomId), dayInfo.value);
            const prevDate = moment.hooks(dayInfo.value, 'YYYY-MM-DD').add(-1, 'days').format('YYYY-MM-DD');
            const isDisabled = (isCellDisabled && Object.keys(this.selectedRooms).length === 0) || (isCellDisabled && this.isCellDisabled(Number(roomId), prevDate));
            const isSelected = this.selectedRooms.hasOwnProperty(this.getSelectedCellRefName(roomId, dayInfo));
            const isCurrentDate = dayInfo.day === this.today || dayInfo.day === this.highlightedDate;
            return (index.h("div", { class: `cellData position-relative roomCell ${isCellDisabled ? 'disabled' : ''} ${'room_' + roomId + '_' + dayInfo.day} ${isCurrentDate ? 'currentDay' : ''} ${this.dragOverElement === roomId + '_' + dayInfo.day ? 'dragOverHighlight' : ''} ${isSelected ? 'selectedDay' : ''}`, style: !isDisabled && { '--cell-cursor': 'default' }, onClick: () => {
                    if (isDisabled) {
                        return;
                    }
                    this.clickCell(Number(roomId), dayInfo, roomCategory);
                }, "aria-label": roomName, role: "gridcell", "data-room-id": roomId, "data-date": dayInfo.value, "aria-current": isCurrentDate ? 'date' : undefined, "data-room-name": roomName, "aria-disabled": String(isDisabled), "aria-selected": Boolean(isSelected) }));
        });
    }
    toggleCategory(roomCategory) {
        roomCategory.expanded = !roomCategory.expanded;
        this.renderElement();
    }
    getRoomCategoryRow(roomCategory, index$1) {
        if (this.getTotalPhysicalRooms(roomCategory) <= 1 || !roomCategory.is_active) {
            return null;
        }
        return (index.h("div", { class: "roomRow" }, index.h("div", { class: `cellData text-left align-items-center roomHeaderCell categoryTitle ${'category_' + this.getCategoryId(roomCategory)}`, onClick: () => this.toggleCategory(roomCategory) }, index.h("div", { class: 'categoryName' }, index.h("ir-interactive-title", { popoverTitle: this.getCategoryName(roomCategory) })), roomCategory.expanded ? (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 14, width: 14 }, index.h("path", { fill: "#6b6f82", d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))) : (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", height: 14, width: 14 }, index.h("path", { fill: "#6b6f82", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))), this.getGeneralCategoryDayColumns('category_' + this.getCategoryId(roomCategory), true, index$1)));
    }
    /**
     * Renders a list of active rooms for an expanded room category. Returns an array of JSX elements, including headers and day columns, or an empty array if the category is collapsed or contains no active rooms.
     *
     * @param {RoomCategory} roomCategory - The category containing room details.
     */
    getRoomsByCategory(roomCategory) {
        var _a;
        // Check accordion is expanded.
        if (!roomCategory.expanded) {
            return null;
        }
        return (_a = this.getCategoryRooms(roomCategory)) === null || _a === void 0 ? void 0 : _a.map(room => {
            if (!room.is_active) {
                return null;
            }
            const haveSingleRooms = this.getTotalPhysicalRooms(roomCategory) <= 1;
            const name = haveSingleRooms ? this.getCategoryName(roomCategory) : this.getRoomName(room);
            return (index.h("div", { class: "roomRow" }, index.h("div", { class: `cellData room text-left align-items-center roomHeaderCell  roomTitle ${this.getTotalPhysicalRooms(roomCategory) <= 1 ? 'pl10' : ''} ${'room_' + this.getRoomId(room)}`, "data-room-name": name, "data-hk-enabled": String(calendarData.calendar_data.housekeeping_enabled), "data-room": this.getRoomId(room), onClick: () => {
                    if (!calendarData.calendar_data.housekeeping_enabled) {
                        return;
                    }
                    this.selectedRoom = room;
                    this.hkModal.openModal();
                }, onMouseEnter: () => {
                    var _a, _b;
                    (_b = (_a = this.interactiveTitle[room.id]) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.setProperty('--ir-interactive-hk-bg', '#e0e0e0');
                }, onMouseLeave: () => {
                    var _a, _b;
                    (_b = (_a = this.interactiveTitle[room.id]) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.removeProperty('--ir-interactive-hk-bg');
                } }, index.h("ir-interactive-title", { ref: el => {
                    if (el)
                        this.interactiveTitle[room.id] = el;
                }, style: room.hk_status === '003' && { '--dot-color': '#999999' }, hkStatus: calendarData.calendar_data.housekeeping_enabled && room.hk_status !== '001', popoverTitle: name })), this.getGeneralRoomDayColumns(this.getRoomId(room), roomCategory, name)));
        });
    }
    getRoomRows() {
        var _a;
        return (_a = this.calendarData.roomsInfo) === null || _a === void 0 ? void 0 : _a.map((roomCategory, index$1) => {
            if (roomCategory.is_active) {
                return (index.h(index.Fragment, null, this.getRoomCategoryRow(roomCategory, index$1), roomCategory.expanded && this.getRoomsByCategory(roomCategory)));
            }
            else {
                return null;
            }
        });
    }
    async confirmHousekeepingUpdate(e) {
        var _a, _b, _c, _d, _e, _f;
        e.stopImmediatePropagation();
        e.stopPropagation();
        try {
            this.isLoading = true;
            const newStatusCode = ((_a = this.selectedRoom) === null || _a === void 0 ? void 0 : _a.hk_status) === '001' ? '002' : '001';
            await this.housekeepingService.setExposedUnitHKStatus({
                property_id: this.propertyId,
                // housekeeper: this.selectedRoom?.housekeeper ? { id: this.selectedRoom?.housekeeper?.id } : null,
                status: {
                    code: newStatusCode,
                },
                unit: {
                    id: (_b = this.selectedRoom) === null || _b === void 0 ? void 0 : _b.id,
                },
            });
            if (newStatusCode === '001') {
                await this.housekeepingService.executeHKAction({
                    actions: [
                        {
                            description: 'Cleaned',
                            hkm_id: ((_c = this.selectedRoom) === null || _c === void 0 ? void 0 : _c.housekeeper.id) || null,
                            unit_id: (_d = this.selectedRoom) === null || _d === void 0 ? void 0 : _d.id,
                            booking_nbr: (_f = this.bookingMap.get((_e = this.selectedRoom) === null || _e === void 0 ? void 0 : _e.id)) !== null && _f !== void 0 ? _f : null,
                        },
                    ],
                });
            }
        }
        finally {
            this.isLoading = false;
            this.selectedRoom = null;
            this.hkModal.closeModal();
        }
    }
    render() {
        var _a, _b, _c;
        return (index.h(index.Host, { key: '9bbde77353a132d3ca35daf8b3ac2c69c43eb775' }, index.h("div", { key: '382207bc194eb16b076b84f2f50762e165d49e92', class: "bodyContainer" }, this.getRoomRows(), index.h("div", { key: '6ab04eddae9b825fbc1bc5fb7078dfbb12001e84', class: "bookingEventsContainer preventPageScroll" }, (_a = this.getBookingData()) === null || _a === void 0 ? void 0 : _a.map(bookingEvent => {
            var _a, _b, _c;
            return (index.h("igl-booking-event", { "data-testid": `booking_${bookingEvent.BOOKING_NUMBER}`, "data-room-name": (_c = (_b = (_a = bookingEvent.roomsInfo) === null || _a === void 0 ? void 0 : _a.find(r => r.id === bookingEvent.RATE_TYPE)) === null || _b === void 0 ? void 0 : _b.physicalrooms.find(r => r.id === bookingEvent.PR_ID)) === null || _c === void 0 ? void 0 : _c.name, language: this.language, is_vacation_rental: this.calendarData.is_vacation_rental, countries: this.countries, currency: this.currency, "data-component-id": bookingEvent.ID, bookingEvent: bookingEvent, allBookingEvents: this.getBookingData() }));
        }))), index.h("ir-modal", { key: '657221c6ed93add70af9e07cb0fd94b633bb5c5b', ref: el => (this.hkModal = el), leftBtnText: (_b = locales_store.locales === null || locales_store.locales === void 0 ? void 0 : locales_store.locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_Cancel, rightBtnText: (_c = locales_store.locales === null || locales_store.locales === void 0 ? void 0 : locales_store.locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_Update, modalBody: this.renderModalBody(), onConfirmModal: this.confirmHousekeepingUpdate.bind(this), autoClose: false, isLoading: this.isLoading, onCancelModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedRoom = null;
                this.hkModal.closeModal();
            } })));
    }
    renderModalBody() {
        var _a, _b;
        if (!this.selectedRoom) {
            return null;
        }
        return (index.h("p", null, "Update unit ", (_a = this.selectedRoom) === null || _a === void 0 ? void 0 :
            _a.name, " to ", index.h("b", null, ((_b = this.selectedRoom) === null || _b === void 0 ? void 0 : _b.hk_status) === '001' ? 'Dirty' : 'Clean', "?"))
        // <ir-select
        //   LabelAvailable={false}
        //   showFirstOption={false}
        //   selectedValue={this.selectedRoom?.hk_status === '001' ? '001' : '002'}
        //   data={[
        //     { text: 'Clean', value: '001' },
        //     { text: 'Dirty', value: '002' },
        //   ]}
        //   onSelectChange={e => (this.selectedHKStatus = e.detail)}
        // ></ir-select>
        );
    }
    updateDisabledCellsCache() {
        var _a;
        utils.calendar_dates.disabled_cells.clear();
        (_a = this.calendarData.roomsInfo) === null || _a === void 0 ? void 0 : _a.forEach((roomCategory, categoryIndex) => {
            var _a;
            if (roomCategory.is_active) {
                (_a = this.getCategoryRooms(roomCategory)) === null || _a === void 0 ? void 0 : _a.forEach(room => {
                    if (room.is_active) {
                        this.calendarData.days.forEach(dayInfo => {
                            const cellKey = this.getCellKey(room.id, dayInfo.value);
                            utils.calendar_dates.disabled_cells.set(cellKey, {
                                disabled: !dayInfo.rate[categoryIndex].is_available_to_book,
                                reason: 'stop_sale',
                            });
                        });
                    }
                });
            }
        });
    }
    getCellKey(roomId, day) {
        return `${roomId}_${day}`;
    }
    isCellDisabled(roomId, day) {
        const key = this.getCellKey(roomId, day);
        if (!utils.calendar_dates.disabled_cells.has(key)) {
            return false;
        }
        const { disabled } = utils.calendar_dates.disabled_cells.get(key);
        return disabled;
    }
    static get watchers() { return {
        "calendarData": ["handleCalendarDataChange"]
    }; }
};
IglCalBody.style = IglCalBodyStyle0;

const iglCalFooterCss = ".sc-igl-cal-footer-h{display:block;position:sticky;bottom:0;width:max-content;z-index:3}.footerCell.sc-igl-cal-footer{display:-moz-inline-grid;display:-ms-inline-grid;display:inline-grid;position:-webkit-sticky;position:sticky;bottom:0;width:58px;height:40px;background:#fff;vertical-align:top;border-top:1px solid #e0e0e0}.bottomLeftCell.sc-igl-cal-footer{left:-1px;z-index:2;width:170px;text-align:left;padding-left:15px;color:#000000}.footerCell.sc-igl-cal-footer i.sc-igl-cal-footer{margin-right:5px}.legendBtn.sc-igl-cal-footer{color:#41bff3;cursor:pointer}.isOnline.sc-igl-cal-footer i.sc-igl-cal-footer{color:#2f9c3f;font-weight:bold}.isOffline.sc-igl-cal-footer i.sc-igl-cal-footer{font-weight:bold}.isOffline.sc-igl-cal-footer{color:#a40000}.dayTitle.sc-igl-cal-footer{font-size:0.8em;font-weight:600;display:grid;user-select:none}.currentDay.sc-igl-cal-footer .dayTitle.sc-igl-cal-footer{font-weight:bold}.currentDay.sc-igl-cal-footer{background-color:#e3f3fa}.dayCapacityPercent.sc-igl-cal-footer{font-size:0.75em}.badge-pill.sc-igl-cal-footer{padding-left:1em;padding-right:1em;font-size:0.7em;margin-bottom:2px}";
const IglCalFooterStyle0 = iglCalFooterCss;

const IglCalFooter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.optionEvent = index.createEvent(this, "optionEvent", 7);
    }
    // private isOnline:boolean = false;
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (index.h(index.Host, { key: '41752cf5ddc120859ad0fb162a59b81eb0da6b65', class: "footerContainer" }, index.h("div", { key: '3b635c5353483c4e5eb58db1840a2350069703b7', class: "footerCell bottomLeftCell align-items-center preventPageScroll" }, index.h("div", { key: '160b337b37dbe69d20e7d087069486e3d4763b14', class: "legendBtn", onClick: () => this.handleOptionEvent('showLegend') }, index.h("i", { key: '6d4458becaf5ff3a8dbcd2f809e1922402ccacb3', class: "la la-square" }), index.h("u", { key: 'e5e2624fb4133323ee8a6a9f886b3fb4581b01cd' }, locales_store.locales.entries.Lcz_Legend), index.h("span", { key: '2baf8bfe782c5889c1eb87948c9bf78a8850b346' }, " - v1.0114"))), this.calendarData.days.map(dayInfo => (index.h("div", { class: "footerCell align-items-center" }, index.h("div", { class: `dayTitle full-height align-items-center ${dayInfo.day === this.today || this.highlightedDate === dayInfo.day ? 'currentDay' : ''}` }, dayInfo.dayDisplayName))))));
    }
};
IglCalFooter.style = IglCalFooterStyle0;

const iglCalHeaderCss = ".sc-igl-cal-header-h{display:block;position:absolute;top:0;height:100%}.svg-icon.sc-igl-cal-header{height:20px;width:20px}.darkGrey.sc-igl-cal-header{background:#ececec}.btn.sc-igl-cal-header{pointer-events:auto}.stickyCell.sc-igl-cal-header{display:-ms-inline-grid;display:-moz-inline-grid;display:inline-grid;position:-webkit-sticky;position:sticky;top:0px;height:82px;display:inline-block;vertical-align:top;z-index:2}.headersContainer.sc-igl-cal-header{background-color:#ffffff}.headerCell.sc-igl-cal-header{display:inline-grid;width:58px;height:58px;vertical-align:top;background-color:#ffffff;border-bottom:1px solid #e0e0e0}.monthsContainer.sc-igl-cal-header{height:20px;background-color:#ffffff;margin-bottom:0.2em}.monthCell.sc-igl-cal-header{display:inline-grid;height:20px;background-color:#ececec;border-right:1px solid #c7c7c7;vertical-align:top}.monthCell.sc-igl-cal-header:nth-child(odd){background-color:#dddddd}.monthTitle.sc-igl-cal-header{overflow:hidden;text-overflow:ellipsis;font-size:0.9em;text-transform:uppercase;font-weight:bold;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.topLeftCell.sc-igl-cal-header{left:0px;z-index:3;width:170px;background-color:#ffffff;display:-ms-inline-grid;display:-moz-inline-grid;display:inline-grid}.datePickerHidden.sc-igl-cal-header{position:absolute;height:100%;width:100%;opacity:0;cursor:pointer;z-index:1}.date_btn.sc-igl-cal-header{cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative}.date_btn.sc-igl-cal-header:hover{background:#f6f6f6;border-radius:0.3rem}.caledarBtns.sc-igl-cal-header{position:relative;cursor:pointer;padding:0.4rem}.caledarBtns.sc-igl-cal-header:hover{background-color:#f6f6f6}.dayTitle.sc-igl-cal-header{font-size:0.8em;font-weight:600;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.currentDay.sc-igl-cal-header .dayTitle.sc-igl-cal-header{font-weight:bold}.currentDay.sc-igl-cal-header{background-color:#e3f3fa}.dayCapacityPercent.sc-igl-cal-header{font-size:0.75em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.badge-pill.sc-igl-cal-header{padding:3px 1em;font-size:0.8em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.pointer.sc-igl-cal-header{cursor:pointer}.searchContiner.sc-igl-cal-header{padding-left:10px;padding-right:10px}.searchListContainer.sc-igl-cal-header{background:#fff;border:1px solid #ccc;border-bottom:none}.searchListItem.sc-igl-cal-header{background:white;border-bottom:1px solid #ccc;padding-left:8px}.badge-light.sc-igl-cal-header{background-color:#999999;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.min-width-full.sc-igl-cal-header{min-width:100%}";
const IglCalHeaderStyle0 = iglCalHeaderCss;

const IglCalHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.optionEvent = index.createEvent(this, "optionEvent", 7);
        this.gotoRoomEvent = index.createEvent(this, "gotoRoomEvent", 7);
        this.gotoToBeAssignedDate = index.createEvent(this, "gotoToBeAssignedDate", 7);
        this.renderAgain = false;
        this.unassignedRoomsNumber = {};
        this.searchValue = '';
        this.searchList = [];
        this.roomsList = [];
        this.toBeAssignedService = new toBeAssigned_service.ToBeAssignedService();
    }
    componentWillLoad() {
        try {
            this.initializeRoomsList();
            if (!this.calendarData.is_vacation_rental) {
                unassigned_dates_store.handleUnAssignedDatesChange('unassigned_dates', newValue => {
                    if (Object.keys(newValue).length > 0) {
                        this.fetchAndAssignUnassignedRooms();
                    }
                });
            }
        }
        catch (error) {
            console.error('Error in componentWillLoad:', error);
        }
    }
    handleCalendarDataChanged() {
        this.fetchAndAssignUnassignedRooms();
    }
    initializeRoomsList() {
        this.roomsList = [];
        this.calendarData.roomsInfo.forEach(category => {
            this.roomsList = this.roomsList.concat(...category.physicalrooms);
        });
    }
    async fetchAndAssignUnassignedRooms() {
        await this.assignRoomsToDate();
    }
    async assignRoomsToDate() {
        try {
            const { fromDate, toDate, data } = this.unassignedDates;
            let dt = new Date(fromDate);
            dt.setHours(0, 0, 0, 0);
            let endDate = dt.getTime();
            while (endDate <= new Date(toDate).getTime()) {
                const selectedDate = moment.hooks(endDate).format('D_M_YYYY');
                if (data[endDate]) {
                    const result = await this.toBeAssignedService.getUnassignedRooms({ from_date: this.calendarData.from_date, to_date: this.calendarData.to_date }, this.propertyid, utils.dateToFormattedString(new Date(endDate)), this.calendarData.roomsInfo, this.calendarData.formattedLegendData);
                    this.unassignedRoomsNumber[selectedDate] = result.length;
                }
                else if (this.unassignedRoomsNumber[selectedDate]) {
                    const res = this.unassignedRoomsNumber[selectedDate] - 1;
                    this.unassignedRoomsNumber[selectedDate] = res < 0 ? 0 : res;
                }
                const newEndDate = moment.hooks(endDate).add(1, 'days').toDate();
                newEndDate.setHours(0, 0, 0, 0);
                endDate = newEndDate.getTime();
                this.renderView();
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    handleReduceAvailableUnitEvent(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const { fromDate, toDate } = event.detail;
        let endDate = new Date(fromDate).getTime();
        while (endDate < new Date(toDate).getTime()) {
            const selectedDate = moment.hooks(endDate).format('D_M_YYYY');
            this.unassignedRoomsNumber[selectedDate] = this.unassignedRoomsNumber[selectedDate] - 1;
            endDate = moment.hooks(endDate).add(1, 'days').toDate().getTime();
        }
        this.renderView();
    }
    showToBeAssigned(dayInfo) {
        if (this.unassignedRoomsNumber[dayInfo.day] || 0) {
            this.handleOptionEvent('showAssigned');
            setTimeout(() => {
                this.gotoToBeAssignedDate.emit({
                    key: 'gotoToBeAssignedDate',
                    data: dayInfo.currentDate,
                });
            }, 100);
        }
    }
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    handleDateSelect(event) {
        if (Object.keys(event.detail).length > 0) {
            this.handleOptionEvent('calendar', event.detail);
        }
    }
    handleClearSearch() {
        this.searchValue = '';
        this.searchList = [];
        this.renderView();
    }
    handleFilterRooms(event) {
        const inputElement = event.target;
        let value = inputElement.value.trim();
        this.searchValue = value;
        value = value.toLowerCase();
        if (value === '') {
            this.handleClearSearch();
        }
        else {
            this.searchList = this.roomsList.filter(room => room.name.toLocaleLowerCase().indexOf(value) != -1);
        }
        this.renderView();
    }
    handleScrollToRoom(roomId) {
        this.handleClearSearch();
        this.gotoRoomEvent.emit({ key: 'gotoRoom', roomId });
    }
    getStringDateFormat(dt) {
        return dt.getFullYear() + '-' + (dt.getMonth() < 9 ? '0' : '') + (dt.getMonth() + 1) + '-' + (dt.getDate() <= 9 ? '0' : '') + dt.getDate();
    }
    getNewBookingModel() {
        let today = new Date();
        today.setHours(0, 0, 0, 0);
        let from_date = this.getStringDateFormat(today);
        today.setDate(today.getDate() + 1);
        today.setHours(0, 0, 0, 0);
        let to_date = this.getStringDateFormat(today);
        return {
            ID: '',
            NAME: '',
            EMAIL: '',
            PHONE: '',
            REFERENCE_TYPE: 'PHONE',
            FROM_DATE: from_date, // "2023-07-09",
            TO_DATE: to_date, // "2023-07-11",
            roomsInfo: this.calendarData.roomsInfo,
            TITLE: locales_store.locales.entries.Lcz_NewBooking,
            event_type: 'PLUS_BOOKING',
            legendData: this.calendarData.formattedLegendData,
            defaultDateRange: {
                fromDate: new Date(from_date), //new Date("2023-09-10"),
                fromDateStr: '', //"10 Sep 2023",
                toDate: new Date(to_date), //new Date("2023-09-15"),
                toDateStr: '', // "15 Sep 2023",
                dateDifference: 0,
                editabled: true,
                message: '',
            },
        };
    }
    renderView() {
        this.renderAgain = !this.renderAgain;
    }
    render() {
        return (index.h(index.Host, { key: 'af09bac90217149f2f877f1998ba45fd7b821fe0' }, index.h("div", { key: '3c5e8d024d2bcfb666299eb96c7ab4d25803f7df', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, index.h("div", { key: '2c21bd4ff3785ba95281956f6ffb95f861fe160b', class: "row justify-content-around no-gutters" }, !this.calendarData.is_vacation_rental && (index.h("ir-button", { key: '2dcb590cc1bc2d026c173d17d90fcea6a2807dca', variant: "icon", icon_name: "server", style: Object.assign(Object.assign({}, icons.colorVariants.secondary), { '--icon-size': '1.5rem' }), "data-toggle": "tooltip", "data-placement": "bottom", title: locales_store.locales.entries.Lcz_UnassignedUnitsTooltip, onClickHandler: () => this.handleOptionEvent('showAssigned'), btn_styles: "caledarBtns", visibleBackgroundOnHover: true })), index.h("ir-date-picker", { key: 'ebcb574cd0fd0e927edbe5774b648bce1c3f34b7', minDate: moment.hooks().add(-2, 'months').startOf('month').format('YYYY-MM-DD'),
            // autoApply
            // singleDatePicker
            onDateChanged: evt => {
                console.log('evt', evt);
                this.handleDateSelect(evt);
            },
            // class="datePickerHidden"
            class: 'date_btn', title: locales_store.locales.entries.Lcz_Navigate, "data-toggle": "tooltip", "data-placement": "bottom" }, index.h("ir-button", { key: '17e01721712e0bc17c483fe4bd99841c4290810e', slot: "trigger", btn_styles: "caledarBtns", variant: "icon", icon_name: "calendar", style: Object.assign(Object.assign({}, icons.colorVariants.secondary), { '--icon-size': '1.5rem' }), onClickHandler: () => this.handleOptionEvent('calendar'), visibleBackgroundOnHover: true, ref: el => (this.dateRef = el) })), index.h("ir-button", { key: '78f792da1651ca8773178ffcf302d0583eb3c045', variant: "icon", btn_styles: "caledarBtns", class: 'pointer', icon_name: "clock", visibleBackgroundOnHover: true, style: Object.assign(Object.assign({}, icons.colorVariants.secondary), { '--icon-size': '1.5rem' }), "data-toggle": "tooltip", "data-placement": "bottom", title: locales_store.locales.entries.Lcz_Today, onClickHandler: () => this.handleOptionEvent('gotoToday') }), index.h("ir-button", { key: '62ac19ac02d674a1351397b48d505dca58cc7ba8', variant: "icon", btn_styles: "caledarBtns", icon_name: "plus", "data-toggle": "tooltip", "data-placement": "bottom", "data-testid": "new_booking_btn", title: locales_store.locales.entries.Lcz_CreateNewBooking, visibleBackgroundOnHover: true, style: Object.assign(Object.assign({}, icons.colorVariants.secondary), { '--icon-size': '1.5rem' }), onClickHandler: () => this.handleOptionEvent('add', this.getNewBookingModel()) }), index.h("ir-button", { key: '8bb5316ce9e58324c6aaa1c28b7ce7b5489d0aa4', variant: "icon", btn_styles: "caledarBtns", icon_name: "calendar-xmark", "data-toggle": "tooltip", "data-placement": "bottom", "data-testid": "new_bulk_btn", title: locales_store.locales.entries.Lcz_StopOpenSale, visibleBackgroundOnHover: true, style: Object.assign(Object.assign({}, icons.colorVariants.secondary), { '--icon-size': '1.5rem' }), onClickHandler: () => this.handleOptionEvent('bulk', this.getNewBookingModel()) })), index.h("div", { key: '973aa5533748e5df75c67813341c385fb11bcd6f', class: "row justify-content-around no-gutters searchContiner" }, index.h("fieldset", { key: '2c7eeb83b38829f1c415e296ee37b2410011317a', class: `form-group position-relative ${this.searchValue != '' ? 'show' : ''}` }, index.h("input", { key: 'a6e039a5bdadaf153ef6791b4ddd2582892a7cfe', type: "text", class: "form-control form-control-sm input-sm", id: "iconLeft7", value: this.searchValue, placeholder: locales_store.locales.entries.Lcz_FindUnit, onInput: event => this.handleFilterRooms(event) }), this.searchValue !== '' ? (index.h("div", { class: "form-control-position pointer", onClick: () => this.handleClearSearch(), "data-toggle": "tooltip", "data-placement": "top", "data-original-title": "Clear Selection" }, index.h("i", { class: "la la-close font-small-4" }))) : null, this.searchList.length ? (index.h("div", { class: "position-absolute searchListContainer dropdown-menu dropdown-menu-left min-width-full" }, this.searchList.map(room => (index.h("div", { class: "searchListItem1 dropdown-item px-1 text-left pointer", onClick: () => this.handleScrollToRoom(room.id) }, room.name))))) : null))), index.h("div", { key: 'ef8a50933f8eeb5362592ada5068a27118bc4f05', class: "stickyCell headersContainer" }, index.h("div", { key: 'e67a1ca163eac056bf6d3ca6a539ec553e819fe1', class: "monthsContainer" }, this.calendarData.monthsInfo.map(monthInfo => (index.h("div", { class: "monthCell", style: { width: monthInfo.daysCount * 58 + 'px' } }, index.h("div", { class: "monthTitle" }, monthInfo.monthName))))), this.calendarData.days.map(dayInfo => (index.h("div", { class: `headerCell align-items-center ${'day-' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''}`, "data-day": dayInfo.day }, !this.calendarData.is_vacation_rental && (index.h("div", { class: "preventPageScroll" }, index.h("span", { class: `badge badge-${this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr !== 0 ? 'info pointer' : 'light'} badge-pill`, onClick: () => this.showToBeAssigned(dayInfo) }, this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr))), index.h("div", { class: "dayTitle" }, dayInfo.dayDisplayName), index.h("div", { class: "dayCapacityPercent" }, dayInfo.occupancy, "%")))))));
    }
    static get watchers() { return {
        "unassignedDates": ["handleCalendarDataChanged"]
    }; }
};
IglCalHeader.style = IglCalHeaderStyle0;

const iglLegendsCss = ".sc-igl-legends-h{display:block}.legendHeader.sc-igl-legends{font-weight:500;letter-spacing:0.05rem;font-size:1.12rem;padding-top:5px;margin-bottom:1rem}.legendCloseBtn.sc-igl-legends{position:absolute;top:50%;right:0;cursor:pointer;font-size:1.75em;line-height:1em;padding:0.4rem;display:flex;align-items:center;justify-content:center;border-radius:3px;transform:translateY(-50%)}.legendCloseBtn.sc-igl-legends:hover{background-color:#f6f6f6}.stickyHeader.sc-igl-legends{position:-webkit-sticky;position:sticky;top:0;background-color:#ffffff;z-index:1}.legendRow.sc-igl-legends{position:relative;vertical-align:middle;margin-bottom:0.3rem}.legendRow.sc-igl-legends div.sc-igl-legends{display:inline-block;vertical-align:middle}.legend_skew.sc-igl-legends,.legend_skew-bordered.sc-igl-legends,.legend_skewsplit.sc-igl-legends{transform:skew(-30deg);width:15px;height:16px}.legend_skew-bordered.sc-igl-legends{border:1px solid black}.legend_circle.sc-igl-legends{border-radius:100%;width:10px;height:10px;margin:3px 3px 3px 2px}.legend_skewsplit.sc-igl-legends{border-right:2px solid #000000}.headerCell.sc-igl-legends .blueColor.sc-igl-legends{background-color:#31bef1}.greenColor.sc-igl-legends{background-color:#45b16d}.yellowColor.sc-igl-legends{background-color:#f4d552}.greyColor.sc-igl-legends{background-color:#a0a0a0}.redColor.sc-igl-legends{background-color:#f34752}.pinkColor.sc-igl-legends{background-color:#f9b4b7}.legendCalendar.sc-igl-legends .legendRow.sc-igl-legends{margin-bottom:0}.legendCalendar.sc-igl-legends .legendRow.sc-igl-legends:first-child .legendCal.sc-igl-legends{background-color:#ececec}.legendCalendar.sc-igl-legends .legendRow.sc-igl-legends div.sc-igl-legends{display:inline-block;vertical-align:middle;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.total-availability.sc-igl-legends{font-size:1em !important}.legendCalendar.sc-igl-legends .legendCal.sc-igl-legends{width:80px;height:25px;text-align:center;display:inline-grid !important;align-content:center;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendCalendar.sc-igl-legends .legendCal.sc-igl-legends .badge.sc-igl-legends{margin-top:0.2rem;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendCalendar.sc-igl-legends .legendCal.legendCal-h2.sc-igl-legends{height:40px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.br-t.sc-igl-legends{border-top:1px solid #a0a0a0}.br-s.sc-igl-legends{border-left:1px solid #a0a0a0;border-right:1px solid #a0a0a0}.br-bt.sc-igl-legends{border-bottom:1px solid #a0a0a0}.highphenLegend.sc-igl-legends{font-size:0.9em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.highphenLegend.sc-igl-legends::before{width:12px;height:0.5px;content:' ';background-color:#000000;vertical-align:middle;display:inline-block;margin-left:5px;margin-right:5px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.badge-pill.sc-igl-legends{padding:3px 1em;font-size:0.8em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.headerCell.sc-igl-legends{width:70px;display:flex;align-items:center;justify-content:center}.dayTitle.sc-igl-legends{font-size:0.8em;font-weight:600;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.dayCapacityPercent.sc-igl-legends{font-size:0.75em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legend_rectangle.sc-igl-legends{height:12px;width:20px;margin-right:1rem}";
const IglLegendsStyle0 = iglLegendsCss;

const IglLegends = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.optionEvent = index.createEvent(this, "optionEvent", 7);
    }
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (index.h(index.Host, { key: '96c79d8051f61106da3da8a8c101d497a7899f49', class: "legendContainer pr-1 text-left" }, index.h("div", { key: '0d525247cf46f0873454a5700712170a9c24de67', class: 'w-full' }, index.h("div", { key: '5bb234cd871afcd689149f5e72dd1fbb8c5bce5b', class: 'w-full' }, index.h("div", { key: '4ebbf92d46c85e1e0072df34c6de7aa8d4409fd8', class: "stickyHeader pt-1 " }, index.h("p", { key: '448fdc60f91d5f9870cd5d7a194b34bdea8f3bf9', class: "legendHeader" }, locales_store.locales.entries.Lcz_Legend), index.h("div", { key: 'b0c551f75ec3f3a462fb546a4038df99585fa23c', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, index.h("svg", { key: '3d751b38fb8a0bb742a9c0a4d301b7163d3fb07f', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'fc40ed39b1f0434367487099f6440831021ecfc4', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), index.h("hr", { key: '944b6d5c297d0123d3084377392cc8c8a5ff8c0d' })), index.h("div", { key: '0bdf3b642a4ec3e5d8489a0a3bc61a762a8fbd62', class: "mt-2 pl-1" }, index.h("table", { key: '3bad2be7b8679a1f0ace5119e9a42376420d98a1' }, this.legendData.map(legendInfo => {
            console.log(legendInfo);
            return (index.h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, index.h("td", null, index.h("div", { class: `legend_${legendInfo.design}`, style: { backgroundColor: legendInfo.color } })), index.h("td", null, index.h("span", { class: "font-small-3" }, legendInfo.name))));
        }))), index.h("hr", { key: 'f71300d3e09a319c93304475b90dfbe35b007e1f' }), index.h("div", { key: '2ad920983fdddded2c8721552f214e22d4ce7542', class: "mt-2" }, index.h("div", { key: 'cccae5e6462a47593270c2d53952e6dea07c5b9f', class: "legendCalendar" }, index.h("div", { key: '9252eded99ae486b100730097fdb22113b824406', class: "legendRow align-items-center" }, index.h("div", { key: '38a3eec788e3b5b7aeb03520c194a9c977b9ffaa', class: "legendCal br-t br-s br-bt" }, index.h("strong", { key: '0fdca1e54b98725722f329010976e4952cf88e63' }, "MAR 2022")), index.h("div", { key: '383149fae67cd91309e6fc53ec5fbbad42e8287a', class: "highphenLegend" }, locales_store.locales.entries.Lcz_MonthAndYear)), index.h("div", { key: 'ccbd578512a2dba03ffc76758aed646342b2155d', class: "legendRow" }, index.h("div", { key: '28d5517eae0ad830c55e98bcdbcb1c03548fa503', class: "legendCal headerCell align-items-center br-s" }, index.h("span", { key: '256a907c10503ce23a29cea0faf43ff0e6df9f58', class: "badge badge-info  badge-pill" }, "3")), index.h("div", { key: '643a86bfc555de555284459c05eb41ffe85519a0', class: "highphenLegend" }, index.h("div", { key: '469c87b066275e845295ef686a0c51e96ccb296a' }, locales_store.locales.entries.Lcz_UnassignedUnits))), index.h("div", { key: '47f2474d21f5ac14b13b5b9445543974901b0a3c', class: "legendRow" }, index.h("div", { key: 'f667b78b8ed3d72b2ff3f4def933fe68a17f7b00', class: "legendCal dayTitle br-s" }, "Fri 18"), index.h("div", { key: '5cb8a232424518fc0d4520349c1168b58a8af5bc', class: "highphenLegend" }, locales_store.locales.entries.Lcz_Date)), index.h("div", { key: '2e4b1058bc2ee1a63d129fd3e33712e40c437299', class: "legendRow" }, index.h("div", { key: 'd985f067ff72e096d6fbe5a6bddc0a26346f8ff7', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), index.h("div", { key: '89f6a7428f8a3c435b52587af6c3db53a1a3164f', class: "highphenLegend" }, locales_store.locales.entries.Lcz_Occupancy)), index.h("div", { key: 'fbe6f89480e5fbd5f54f6d839a85bac43129f08f', class: "legendRow" }, index.h("div", { key: 'f26a411e42bee2247f097566cbb966a3b3b0087d', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), index.h("div", { key: 'cdb2d30c8b45d396224766b85629fb0669843eff', class: "highphenLegend" }, locales_store.locales.entries.Lcz_TotalAvailability))))))));
    }
};
IglLegends.style = IglLegendsStyle0;

const iglTbaCategoryViewCss = ".sc-igl-tba-category-view-h{display:block}";
const IglTbaCategoryViewStyle0 = iglTbaCategoryViewCss;

const IglTbaCategoryView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.assignUnitEvent = index.createEvent(this, "assignUnitEvent", 7);
        this.categoriesData = {};
        this.renderAgain = false;
    }
    handleAssignRoomEvent(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const opt = event.detail;
        this.eventDatas = this.eventDatas.filter(eventData => eventData.ID != opt.data.ID);
        this.calendarData.bookingEvents.push(opt.data);
        this.assignUnitEvent.emit({
            key: 'assignUnit',
            data: {
                RT_ID: this.categoryId,
                selectedDate: this.selectedDate,
                assignEvent: opt.data,
                calendarData: this.calendarData,
            },
        });
        // if(this.localEventDatas.length){
        this.renderView();
        // }
    }
    getEventView(categoryId, eventDatas) {
        return eventDatas.map((eventData, ind) => (index.h("igl-tba-booking-view", { calendarData: this.calendarData, selectedDate: this.selectedDate, eventData: eventData, categoriesData: this.categoriesData, categoryId: categoryId, categoryIndex: this.categoryIndex, eventIndex: ind, onAssignRoomEvent: evt => this.handleAssignRoomEvent(evt) })));
    }
    renderView() {
        this.renderAgain = !this.renderAgain;
    }
    render() {
        var _a;
        return (index.h(index.Host, { key: '2dc49483a1c9982fb56c41ae4c5329199f63b109' }, index.h("div", { key: '311599573ad23f02b8ad53ea68523e94b4be276b', class: "sectionContainer" }, index.h("div", { key: 'a4b0cf30835a3b68d52c41be2e747ce50e3d1f05', class: "font-weight-bold mt-1 font-small-3" }, (_a = this.categoriesData[this.categoryId]) === null || _a === void 0 ? void 0 : _a.name), this.getEventView(this.categoryId, this.eventDatas))));
    }
};
IglTbaCategoryView.style = IglTbaCategoryViewStyle0;

const iglToBeAssignedCss = ".sc-igl-to-be-assigned-h{display:block}.custom-dropdown.sc-igl-to-be-assigned{cursor:pointer;padding:5px 10px;width:min-content;margin-left:auto;margin-right:auto}.dropdown-toggle.sc-igl-to-be-assigned{all:unset;display:flex;width:max-content;align-items:center;gap:10px}.close_btn_style.sc-igl-to-be-assigned{padding:0.4rem}.close_btn_style.sc-igl-to-be-assigned:hover{background-color:#f6f6f6}.dropdown-menu.sc-igl-to-be-assigned{max-height:250px;overflow-y:auto}.tobeAssignedHeader.sc-igl-to-be-assigned{font-weight:500;letter-spacing:0.05rem;font-size:1.12rem;padding:0;margin:0}.assignment_header.sc-igl-to-be-assigned{display:flex;align-items:center;justify-content:space-between;padding-top:5px;margin-bottom:1rem}.dropdown-toggle.sc-igl-to-be-assigned::after{content:none;display:none}.dropdown-toggle.sc-igl-to-be-assigned .caret-icon.sc-igl-to-be-assigned{transition:transform 0.2s ease}.show.sc-igl-to-be-assigned .caret-icon.sc-igl-to-be-assigned{transform:rotate(-180deg)}.stickyHeader.sc-igl-to-be-assigned{position:-webkit-sticky;position:sticky;top:0;background-color:#ffffff;z-index:1}.pointer.sc-igl-to-be-assigned{cursor:pointer}.dots.sc-igl-to-be-assigned{display:flex;align-items:center;justify-content:center;margin:0 3px;padding:0}.dot.sc-igl-to-be-assigned{width:5px;height:5px;margin:5px 4px 0;background-color:#6b6f82;border-radius:50%;animation:dotFlashing 1s infinite linear alternate}.dot.sc-igl-to-be-assigned:nth-child(2){animation-delay:0.2s}.dot.sc-igl-to-be-assigned:nth-child(3){animation-delay:0.4s}@keyframes dotFlashing{0%{opacity:0}50%,100%{opacity:1}}";
const IglToBeAssignedStyle0 = iglToBeAssignedCss;

const IglToBeAssigned = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.optionEvent = index.createEvent(this, "optionEvent", 7);
        this.reduceAvailableUnitEvent = index.createEvent(this, "reduceAvailableUnitEvent", 7);
        this.showBookingPopup = index.createEvent(this, "showBookingPopup", 7);
        this.addToBeAssignedEvent = index.createEvent(this, "addToBeAssignedEvent", 7);
        this.highlightToBeAssignedBookingEvent = index.createEvent(this, "highlightToBeAssignedBookingEvent", 7);
        this.showDatesList = false;
        this.renderAgain = false;
        this.orderedDatesList = [];
        this.noScroll = false;
        this.isGotoToBeAssignedDate = false;
        this.isLoading = true;
        this.selectedDate = null;
        this.data = {};
        this.today = new Date();
        this.categoriesData = {};
        this.toBeAssignedService = new toBeAssigned_service.ToBeAssignedService();
    }
    componentWillLoad() {
        this.reArrangeData();
        this.loadingMessage = locales_store.locales.entries.Lcz_FetchingUnAssignedUnits;
    }
    handleUnassignedDatesToBeAssignedChange(newValue) {
        const { fromDate, toDate, data } = newValue;
        let dt = new Date(fromDate);
        dt.setHours(0);
        dt.setMinutes(0);
        dt.setSeconds(0);
        let endDate = dt.getTime();
        while (endDate <= new Date(toDate).getTime()) {
            if (data && !data[endDate] && this.unassignedDates.hasOwnProperty(endDate)) {
                delete this.unassignedDates[endDate];
            }
            else if (data && data[endDate]) {
                this.unassignedDates[endDate] = data[endDate];
            }
            endDate = moment.hooks(endDate).add(1, 'days').toDate().getTime();
        }
        this.data = Object.assign({}, this.unassignedDates);
        this.orderedDatesList = Object.keys(this.data).sort((a, b) => parseInt(a) - parseInt(b));
        if (this.orderedDatesList.length) {
            if (!this.data.hasOwnProperty(this.selectedDate)) {
                this.selectedDate = this.orderedDatesList.length ? this.orderedDatesList[0] : null;
            }
            this.showForDate(this.selectedDate, false);
            this.renderView();
        }
        else {
            this.selectedDate = null;
        }
    }
    handleAssignUnit(event) {
        var _a, _b, _c, _d, _e;
        const opt = event.detail;
        const data = opt.data;
        event.stopImmediatePropagation();
        event.stopPropagation();
        if ((opt === null || opt === void 0 ? void 0 : opt.key) === 'assignUnit' && this.data) {
            // Verify data.selectedDate exists in this.data
            if ((data === null || data === void 0 ? void 0 : data.selectedDate) && this.data[data.selectedDate]) {
                // Check if categories exist and there's only one category
                if (((_a = this.data[data.selectedDate]) === null || _a === void 0 ? void 0 : _a.categories) && ((_c = Object.keys(((_b = this.data[data.selectedDate]) === null || _b === void 0 ? void 0 : _b.categories) || {})) === null || _c === void 0 ? void 0 : _c.length) === 1) {
                    this.isLoading = true;
                    this.noScroll = true;
                }
                // Make sure all required properties exist before filtering
                if ((data === null || data === void 0 ? void 0 : data.RT_ID) &&
                    ((_d = this.data[data.selectedDate]) === null || _d === void 0 ? void 0 : _d.categories) &&
                    this.data[data.selectedDate].categories[data.RT_ID] &&
                    Array.isArray(this.data[data.selectedDate].categories[data.RT_ID]) &&
                    ((_e = data === null || data === void 0 ? void 0 : data.assignEvent) === null || _e === void 0 ? void 0 : _e.ID)) {
                    this.data[data.selectedDate].categories[data.RT_ID] = this.data[data.selectedDate].categories[data.RT_ID].filter(eventData => eventData && eventData.ID !== data.assignEvent.ID);
                }
                // Only update calendarData if it exists in the data
                if (data === null || data === void 0 ? void 0 : data.calendarData) {
                    this.calendarData = data.calendarData;
                }
                this.renderView();
            }
        }
    }
    async updateCategories(key, calendarData) {
        try {
            //console.log("called")
            let categorisedRooms = {};
            const result = await this.toBeAssignedService.getUnassignedRooms({ from_date: calendarData.from_date, to_date: calendarData.to_date }, this.propertyid, utils.dateToFormattedString(new Date(+key)), calendarData.roomsInfo, calendarData.formattedLegendData);
            result.forEach(room => {
                if (!categorisedRooms.hasOwnProperty(room.RT_ID)) {
                    categorisedRooms[room.RT_ID] = [room];
                }
                else {
                    categorisedRooms[room.RT_ID].push(room);
                }
            });
            this.unassignedDates[key].categories = categorisedRooms;
        }
        catch (error) {
            //  toastr.error(error);
        }
    }
    async reArrangeData() {
        try {
            this.today.setHours(0, 0, 0, 0);
            this.calendarData.roomsInfo.forEach(category => {
                this.categoriesData[category.id] = {
                    name: category.name,
                    roomsList: category.physicalrooms,
                    roomIds: category.physicalrooms.map(room => {
                        return room.id;
                    }),
                };
            });
            this.selectedDate = null;
            //this.unassignedDates = await this.toBeAssignedService.getUnassignedDates(this.propertyid, dateToFormattedString(new Date()), this.to_date);
            this.unassignedDates = unassigned_dates_store.getUnassignedDates();
            console.log(this.unassignedDates);
            this.data = this.unassignedDates;
            this.orderedDatesList = Object.keys(this.data).sort((a, b) => parseInt(a) - parseInt(b));
            if (!this.selectedDate && this.orderedDatesList.length) {
                this.selectedDate = this.orderedDatesList[0];
            }
        }
        catch (error) {
            console.error('Error fetching unassigned dates:', error);
            //  toastr.error(error);
        }
    }
    async componentDidLoad() {
        setTimeout(() => {
            if (!this.isGotoToBeAssignedDate && Object.keys(this.unassignedDates).length > 0) {
                //console.log(this.isGotoToBeAssignedDate);
                const firstKey = Object.keys(this.unassignedDates)[0];
                this.showForDate(firstKey);
            }
        }, 100);
    }
    async gotoDate(event) {
        this.isGotoToBeAssignedDate = true;
        this.showForDate(event.detail.data);
        this.showDatesList = false;
        this.renderView();
    }
    handleToBeAssignedDate(e) {
        this.showBookingPopup.emit({
            key: 'calendar',
            data: new Date(e.detail.data.fromDate).getTime() - 86400000,
            noScroll: false,
        });
    }
    async showForDate(dateStamp, withLoading = true) {
        try {
            if (withLoading) {
                this.isLoading = true;
            }
            if (this.showDatesList) {
                this.showUnassignedDate();
            }
            await this.updateCategories(dateStamp, this.calendarData);
            this.addToBeAssignedEvent.emit({ key: 'tobeAssignedEvents', data: [] });
            this.showBookingPopup.emit({
                key: 'calendar',
                data: parseInt(dateStamp) - 86400000,
                noScroll: this.noScroll,
            });
            if (this.isGotoToBeAssignedDate) {
                this.isGotoToBeAssignedDate = false;
            }
            this.isLoading = false;
            this.selectedDate = dateStamp;
            this.renderView();
        }
        catch (error) {
            // toastr.error(error);
        }
    }
    getDay(dt) {
        const currentDate = new Date(dt);
        const locale = 'default'; //'en-US';
        const dayOfWeek = this.getLocalizedDayOfWeek(currentDate, locale);
        // const monthName = currentDate.toLocaleString("default", { month: 'short' })
        return dayOfWeek + ' ' + currentDate.getDate() + ', ' + currentDate.getFullYear();
    }
    getLocalizedDayOfWeek(date, locale) {
        const options = { weekday: 'short' };
        return date.toLocaleDateString(locale, options);
    }
    handleOptionEvent(key, data = '') {
        this.highlightToBeAssignedBookingEvent.emit({
            key: 'highlightBookingId',
            data: { bookingId: '----' },
        });
        this.addToBeAssignedEvent.emit({ key: 'tobeAssignedEvents', data: [] });
        this.optionEvent.emit({ key, data });
    }
    showUnassignedDate() {
        this.showDatesList = !this.showDatesList;
    }
    getToBeAssignedEntities() {
        // toBeAssignedEvents
    }
    getCategoryView() {
        if (this.orderedDatesList.length && this.selectedDate && this.data[this.selectedDate]) {
            return Object.entries(this.data[this.selectedDate].categories).map(([id, eventDatas], ind) => (index.h("igl-tba-category-view", { calendarData: this.calendarData, selectedDate: this.selectedDate, categoryId: id, categoryIndex: ind, categoriesData: this.categoriesData, eventDatas: eventDatas, onAssignUnitEvent: evt => this.handleAssignUnit(evt) })));
        }
        else {
            return null;
        }
    }
    renderView() {
        this.renderAgain = !this.renderAgain;
    }
    render() {
        var _a;
        return (index.h(index.Host, { key: '121e27fe274e5c5cae91e9006a8e88a1477b78a7', class: "tobeAssignedContainer pr-1 text-left" }, index.h("div", { key: '6d7b0954d559687965b3d790439c2e006355d0a1' }, index.h("div", { key: 'f42d9156db091440c0b48785f4cf7b2806b03b74' }, index.h("div", { key: 'ba620c00a7dc5dc437c41bb3e3951e4103bfcad4', class: "stickyHeader pt-1" }, index.h("div", { key: 'c0504fa0be0f8c4e2d3885281639af068bc697a0', class: 'assignment_header' }, index.h("p", { key: 'a90c4dcedb725101ce07662135f4a891d7bb8507', class: "tobeAssignedHeader " }, locales_store.locales.entries.Lcz_Assignments), index.h("ir-button", { key: '3082a892c2a51905fccf5b58b7dfbacec5573ce6', class: "close_btn", variant: "icon", btn_styles: "close_btn_style", icon_name: "double_caret_left", style: icons.colorVariants.secondary, onClickHandler: () => this.handleOptionEvent('closeSideMenu'), visibleBackgroundOnHover: true })), index.h("hr", { key: '108b7abd4e41180f39fb376419c2706cd710c5d1' }), Object.keys(this.data).length === 0 ? (index.h("p", null, locales_store.locales.entries.Lcz_AllBookingsAreAssigned)) : this.isLoading ? (index.h("p", { class: "d-flex align-items-center" }, index.h("span", { class: "p-0" }, this.loadingMessage), index.h("div", { class: "dots" }, index.h("div", { class: "dot" }), index.h("div", { class: "dot" }), index.h("div", { class: "dot" })))) : (index.h(index.Fragment, null, this.orderedDatesList.length ? (index.h("div", { class: `custom-dropdown border border-light rounded text-center ` + (this.showDatesList ? 'show' : ''), id: "dropdownMenuButton", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, index.h("div", { class: 'dropdown-toggle' }, index.h("span", { class: "font-weight-bold" }, this.data[this.selectedDate].dateStr), index.h("svg", { class: 'caret-icon', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 14, width: 14 }, index.h("path", { fill: "#6b6f82", d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), index.h("div", { class: "dropdown-menu dropdown-menu-right full-width", "aria-labelledby": "dropdownMenuButton" }, (_a = this.orderedDatesList) === null || _a === void 0 ? void 0 : _a.map(ordDate => (index.h("div", { class: "dropdown-item pointer", onClick: () => this.showForDate(ordDate) }, this.data[ordDate].dateStr)))))) : (locales_store.locales.entries.Lcz_AllBookingsAreAssigned)))), !this.isLoading && (index.h("div", { key: '5737ba2403416d339be4c348804d7fbd6112adcd', class: "scrollabledArea" }, this.orderedDatesList.length ? (Object.keys(this.data[this.selectedDate].categories).length ? (this.getCategoryView()) : (index.h("div", { class: "mt-1" }, locales_store.locales.entries.Lcz_AllAssignForThisDay))) : null))))));
    }
    static get watchers() { return {
        "unassignedDatesProp": ["handleUnassignedDatesToBeAssignedChange"]
    }; }
};
IglToBeAssigned.style = IglToBeAssignedStyle0;

const irInteractiveTitleCss = ".sc-ir-interactive-title-h{display:block;width:100%;--hk-green:green}*.sc-ir-interactive-title{box-sizing:border-box}.popover-title.sc-ir-interactive-title{position:relative;width:100%;height:100%;margin:0;padding:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;z-index:10;left:0;display:flex;align-items:center}.popover-container.sc-ir-interactive-title{position:absolute;bottom:0px;left:var(--ir-popover-left, 10px);background:rgb(0, 0, 0);color:white;min-width:100%;box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 10px;z-index:9999;padding:3.5px 7px;border-radius:5px;pointer-events:none;opacity:0;transition:all 100ms ease;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;font-style:normal;font-weight:400;line-height:1.45;text-decoration:none;text-shadow:none;font-size:0.875rem}.popover-container[data-state='show'].sc-ir-interactive-title{opacity:1}.hk-dot.sc-ir-interactive-title{inset:0;position:absolute;display:flex;align-items:center;justify-content:center;width:fit-content;padding:4px;left:auto;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;padding-inline:var(--ir-popover-left);background:var(--ir-interactive-hk-bg, white);color:var(--dot-color, black)}";
const IrInteractiveTitleStyle0 = irInteractiveTitleCss;

const IrInteractiveTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * The full title string that may be cropped in the UI.
         */
        this.popoverTitle = '';
        /**
         * CSS offset for the left position of the popover.
         * Used as a CSS variable `--ir-popover-left`.
         */
        this.irPopoverLeft = '10px';
        /**
         * Whether to show the housekeeping (HK) status dot.
         */
        this.hkStatus = false;
        /**
         * The number of characters to display before cropping the title with ellipsis.
         */
        this.cropSize = 15;
        /**
         * Reference to track if we've initialized popover for current render
         */
        this.lastRenderedTitle = '';
    }
    /**
     * Initialize popover with overflow detection
     */
    initializePopoverIfNeeded(titleContainer, title) {
        // Only initialize if title changed or first time
        if (this.lastRenderedTitle === title && this.popoverInstance) {
            return;
        }
        this.disposePopover();
        const tempSpan = document.createElement('span');
        tempSpan.style.visibility = 'hidden';
        tempSpan.style.position = 'absolute';
        tempSpan.style.whiteSpace = 'nowrap';
        tempSpan.textContent = title;
        document.body.appendChild(tempSpan);
        const textWidth = tempSpan.offsetWidth;
        document.body.removeChild(tempSpan);
        const containerWidth = titleContainer.clientWidth;
        const iconWidth = this.hkStatus ? 20 : 0;
        const willOverflow = textWidth + iconWidth > containerWidth;
        if (willOverflow && typeof $ !== 'undefined') {
            try {
                this.popoverInstance = $(titleContainer).popover({
                    trigger: 'hover',
                    content: title,
                    placement: 'top',
                    html: false,
                    sanitize: true,
                    delay: { show: 300, hide: 100 },
                });
            }
            catch (error) {
                console.error('Failed to initialize popover:', error);
            }
        }
        this.lastRenderedTitle = title;
    }
    disposePopover() {
        if (this.popoverInstance && typeof $ !== 'undefined') {
            try {
                $(this.titleContainerRef).popover('dispose');
                this.popoverInstance = null;
            }
            catch (error) {
                console.error('Failed to dispose popover:', error);
            }
        }
    }
    disconnectedCallback() {
        this.disposePopover();
    }
    render() {
        const title = this.popoverTitle || '';
        const shouldCrop = title.length > this.cropSize;
        const displayTitle = shouldCrop ? title.slice(0, this.cropSize) + '...' : title;
        return (index.h(index.Host, { key: '9b697adbfef7a0fb8583b1b3ff4c7db259e07af0', style: { '--ir-popover-left': this.irPopoverLeft } }, index.h("p", { key: 'd1ee716d7665dbde84ab1e9fbc3ea464c1d38fc7', ref: el => {
                this.titleContainerRef = el;
                if (el && title) {
                    setTimeout(() => this.initializePopoverIfNeeded(el, title), 0);
                }
            }, class: "popover-title", style: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
            } }, index.h("span", { key: '5ec3dafac9879251e02b362aee576871ab627bc1', class: "cropped-title", style: {
                flexShrink: '1',
                minWidth: '0',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            } }, displayTitle), this.hkStatus && (index.h("div", { key: 'f4b43c728a98182eccae3e301face4f0f9ccd34b', title: "This unit is dirty", class: "hk-dot", style: { flexShrink: '0' } }, index.h("svg", { key: '89daa6bf04e1fbab30a2061abef352b95f731757', xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, index.h("path", { key: '6e58d37d69c6ec6493ec886aaf669020658af4b9', fill: "currentColor", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" })))))));
    }
    get el() { return index.getElement(this); }
};
IrInteractiveTitle.style = IrInteractiveTitleStyle0;

const irRoomNightsCss = ".sc-ir-room-nights-h{display:block;box-sizing:border-box;margin:0;position:relative}.loading-container.sc-ir-room-nights{position:relative;height:100%;width:100%;display:flex;align-items:center;justify-content:center}.close-icon.sc-ir-room-nights{position:absolute;top:18px;right:33px;outline:none}.close.sc-ir-room-nights{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:0.5;padding:0;background-color:transparent;border:0;appearance:none}.card.sc-ir-room-nights{top:0;z-index:1000}.card-title.sc-ir-room-nights{border-bottom:1px solid #e4e5ec;width:100%}.irfontgreen.sc-ir-room-nights{color:#0e930e}.currency.sc-ir-room-nights{display:block;position:absolute;margin:0;padding:0;height:auto;left:10px}.rate-input.sc-ir-room-nights{font-size:14px;line-height:0;padding:0;height:0;border-left:0;border-radius:0.25rem !important}.rate-input-container.sc-ir-room-nights{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1}.new-currency.sc-ir-room-nights{color:#3b4781;border:1px solid #cacfe7;font-size:0.975rem;height:2rem;background:rgb(255, 255, 255);padding-right:0 !important;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.input-group-prepend.sc-ir-room-nights span[data-state='focus'].sc-ir-room-nights{border-color:var(--blue)}.input-group-prepend.sc-ir-room-nights span[data-disabled].sc-ir-room-nights{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.rateInputBorder.sc-ir-room-nights{padding-left:5px !important;padding-right:5px !important;border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}";
const IrRoomNightsStyle0 = irRoomNightsCss;

const sheetCss = ".sc-ir-room-nights-h{height:100%}.sheet-container.sc-ir-room-nights{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-room-nights{height:-webkit-fill-available;height:100vh}@supports (height: 100svh){.sheet-container.sc-ir-room-nights{height:100svh}}.sheet-footer.sc-ir-room-nights{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-room-nights{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-room-nights{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-room-nights{flex-direction:row;align-items:center}}";
const IrRoomNightsStyle1 = sheetCss;

const IrRoomNights = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeRoomNightsDialog = index.createEvent(this, "closeRoomNightsDialog", 7);
        this.rates = [];
        this.isLoading = false;
        this.initialLoading = false;
        this.inventory = null;
        this.isEndDateBeforeFromDate = false;
        this.defaultTotalNights = 0;
        this.isInputFocused = -1;
        this.dates = { from_date: new Date(), to_date: new Date() };
        this.bookingService = new booking_service.BookingService();
    }
    componentWillLoad() {
        this.dates = { from_date: new Date(this.fromDate), to_date: new Date(this.toDate) };
        this.init();
    }
    isButtonDisabled() {
        return this.isLoading || this.rates.some(rate => rate.amount === -1) || this.inventory === 0 || this.inventory === null;
    }
    async init() {
        var _a;
        try {
            const { from_date } = this.defaultDates;
            if (moment.hooks(from_date, 'YYYY-MM-DD').isBefore(moment.hooks(this.fromDate, 'YYYY-MM-DD'))) {
                this.dates.from_date = new Date(from_date);
            }
            else {
                this.dates.from_date = new Date(this.fromDate);
            }
            this.dates.to_date = new Date(this.toDate);
            this.bookingEvent = await this.bookingService.getExposedBooking(this.bookingNumber, this.language);
            if (this.bookingEvent) {
                const filteredRooms = this.bookingEvent.rooms.filter(room => room.identifier === this.identifier);
                this.selectedRoom = filteredRooms[0];
                const lastDay = (_a = this.selectedRoom) === null || _a === void 0 ? void 0 : _a.days[this.selectedRoom.days.length - 1];
                //let first_rate = this.selectedRoom.days[0].amount;
                if (moment.hooks(this.toDate).add(-1, 'days').isSame(moment.hooks(lastDay.date))) {
                    console.log('here1');
                    const amount = await this.fetchBookingAvailability(this.fromDate, this.selectedRoom.days[0].date, this.selectedRoom.rateplan.id);
                    const newDatesArr = utils.getDaysArray(this.selectedRoom.days[0].date, this.fromDate);
                    this.isEndDateBeforeFromDate = true;
                    this.rates = [
                        ...newDatesArr.map(day => ({
                            amount: amount / newDatesArr.length,
                            date: day,
                            cost: null,
                        })),
                        ...this.selectedRoom.days,
                    ];
                    this.defaultTotalNights = this.rates.length - this.selectedRoom.days.length;
                }
                else {
                    console.log('here2');
                    console.log(lastDay);
                    const amount = await this.fetchBookingAvailability(this.bookingEvent.to_date, moment.hooks(this.toDate, 'YYYY-MM-DD').format('YYYY-MM-DD'), this.selectedRoom.rateplan.id);
                    const newDatesArr = utils.getDaysArray(lastDay.date, this.toDate);
                    this.rates = [
                        ...this.selectedRoom.days,
                        ...newDatesArr.map(day => ({
                            amount: amount / newDatesArr.length,
                            date: day,
                            cost: null,
                        })),
                    ];
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    handleInput(event, index) {
        let inputValue = event;
        let days = [...this.rates];
        inputValue = inputValue.replace(/[^0-9.]/g, '');
        if (inputValue === '') {
            days[index].amount = -1;
        }
        else {
            if (!isNaN(Number(inputValue))) {
                days[index].amount = Number(inputValue);
            }
        }
        this.rates = days;
    }
    async fetchBookingAvailability(from_date, to_date, rate_plan_id) {
        var _a;
        try {
            this.initialLoading = true;
            const bookingAvailability = await this.bookingService.getBookingAvailability({
                from_date,
                to_date,
                propertyid: this.propertyId,
                adultChildCount: {
                    adult: this.selectedRoom.rateplan.selected_variation.adult_nbr,
                    child: this.selectedRoom.rateplan.selected_variation.child_nbr,
                },
                language: this.language,
                currency: this.bookingEvent.currency,
                room_type_ids: [this.selectedRoom.roomtype.id],
                rate_plan_ids: [rate_plan_id],
            });
            console.log(bookingAvailability[0], rate_plan_id);
            this.inventory = bookingAvailability[0].inventory;
            const rate_plan = bookingAvailability[0].rateplans.find(rate => rate.id === rate_plan_id);
            if (!rate_plan || !rate_plan.variations) {
                this.inventory = null;
                return null;
            }
            const selected_variation = (_a = rate_plan.variations) === null || _a === void 0 ? void 0 : _a.find(variation => variation.adult_nbr === this.selectedRoom.rateplan.selected_variation.adult_nbr && variation.child_nbr === this.selectedRoom.rateplan.selected_variation.child_nbr);
            if (!selected_variation) {
                return null;
            }
            return selected_variation.discounted_gross_amount;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.initialLoading = false;
        }
    }
    renderInputField(index$1, currency_symbol, day) {
        return (index.h("div", { class: "col-3 ml-1 position-relative  m-0 p-0 rate-input-container" }, index.h("ir-price-input", { value: day.amount > 0 ? day.amount.toString() : '', disabled: this.inventory === 0 || this.inventory === null, currency: currency_symbol, "aria-label": "rate", "aria-describedby": "rate cost", onTextChange: e => this.handleInput(e.detail, index$1) })));
    }
    renderReadOnlyField(currency_symbol, day) {
        return index.h("p", { class: "col-9 ml-1 m-0 p-0" }, `${currency_symbol}${Number(day.amount).toFixed(2)}`);
    }
    renderRateFields(index, currency_symbol, day) {
        if (this.isEndDateBeforeFromDate) {
            if (index < this.defaultTotalNights) {
                return this.renderInputField(index, currency_symbol, day);
            }
            else {
                return this.renderReadOnlyField(currency_symbol, day);
            }
        }
        else {
            return index < this.selectedRoom.days.length ? this.renderReadOnlyField(currency_symbol, day) : this.renderInputField(index, currency_symbol, day);
        }
    }
    renderDates() {
        var _a;
        const currency_symbol = this.bookingEvent.currency.symbol;
        // const currency_symbol = getCurrencySymbol(this.bookingEvent.currency.code);
        return (index.h("div", { class: 'mt-2 m-0' }, (_a = this.rates) === null || _a === void 0 ? void 0 : _a.map((day, index$1) => (index.h("div", { class: 'row m-0 mt-1 align-items-center' }, index.h("p", { class: 'col-2 m-0 p-0' }, utils.convertDatePrice(day.date)), this.renderRateFields(index$1, currency_symbol, day))))));
    }
    async handleRoomConfirmation() {
        try {
            this.isLoading = true;
            let oldRooms = [...this.bookingEvent.rooms];
            let selectedRoomIndex = oldRooms.findIndex(room => room.identifier === this.identifier);
            if (selectedRoomIndex === -1) {
                throw new Error('Invalid Pool');
            }
            oldRooms[selectedRoomIndex] = Object.assign(Object.assign({}, oldRooms[selectedRoomIndex]), { days: this.rates, to_date: moment.hooks(this.dates.to_date).format('YYYY-MM-DD'), from_date: moment.hooks(this.dates.from_date).format('YYYY-MM-DD') });
            const body = {
                assign_units: true,
                check_in: true,
                is_pms: true,
                is_direct: true,
                pickup_info: this.bookingEvent.pickup_info,
                extra_services: this.bookingEvent.extra_services,
                booking: {
                    booking_nbr: this.bookingNumber,
                    from_date: moment.hooks(this.dates.from_date).format('YYYY-MM-DD'),
                    to_date: moment.hooks(this.dates.to_date).format('YYYY-MM-DD'),
                    remark: this.bookingEvent.remark,
                    property: this.bookingEvent.property,
                    source: this.bookingEvent.source,
                    currency: this.bookingEvent.currency,
                    arrival: this.bookingEvent.arrival,
                    guest: this.bookingEvent.guest,
                    rooms: oldRooms,
                },
            };
            await this.bookingService.doReservation(body);
            this.closeRoomNightsDialog.emit({ type: 'confirm', pool: this.pool });
        }
        catch (error) {
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        var _a, _b, _c;
        if (!this.bookingEvent) {
            return (index.h("div", { class: "loading-container" }, index.h("ir-loading-screen", null)));
        }
        return (index.h("div", { class: "sheet-container" }, index.h("ir-title", { class: "p-1 sheet-header", onCloseSideBar: () => this.closeRoomNightsDialog.emit({ type: 'cancel', pool: this.pool }), label: `${locales_store.locales.entries.Lcz_AddingRoomNightsTo} ${(_b = (_a = this.selectedRoom) === null || _a === void 0 ? void 0 : _a.roomtype) === null || _b === void 0 ? void 0 : _b.name} ${((_c = this.selectedRoom) === null || _c === void 0 ? void 0 : _c.unit).name}`, displayContext: "sidebar" }), index.h("section", { class: 'text-left px-1 pt-0 sheet-body' }, index.h("p", { class: 'font-medium-1' }, `${locales_store.locales.entries.Lcz_Booking}#`, " ", this.bookingNumber), this.initialLoading ? (index.h("p", { class: 'mt-2 text-secondary' }, locales_store.locales.entries['Lcz_CheckingRoomAvailability '])) : (index.h(index.Fragment, null, index.h("p", { class: 'font-weight-bold font-medium-1' }, `${utils.formatDate(moment.hooks(this.dates.from_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')} - ${utils.formatDate(moment.hooks(this.dates.to_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')}`), index.h("p", { class: 'font-medium-1 mb-0' }, `${this.selectedRoom.rateplan.name}`, " ", this.selectedRoom.rateplan.is_non_refundable && index.h("span", { class: 'irfontgreen' }, locales_store.locales.entries.Lcz_NonRefundable)), (this.inventory === 0 || this.inventory === null) && index.h("p", { class: "font-medium-1 text danger" }, locales_store.locales.entries.Lcz_NoAvailabilityForAdditionalNights), this.selectedRoom.rateplan.custom_text && index.h("p", { class: 'text-secondary mt-0' }, this.selectedRoom.rateplan.custom_text), this.renderDates()))), index.h("section", { class: 'sheet-footer' }, index.h("ir-button", { btn_color: "secondary", btn_disabled: this.isLoading, text: locales_store.locales === null || locales_store.locales === void 0 ? void 0 : locales_store.locales.entries.Lcz_Cancel, class: "full-width", btn_styles: "justify-content-center", onClickHandler: () => this.closeRoomNightsDialog.emit({ type: 'cancel', pool: this.pool }) }), this.inventory > 0 && this.inventory !== null && (index.h("ir-button", { isLoading: this.isLoading, text: locales_store.locales === null || locales_store.locales === void 0 ? void 0 : locales_store.locales.entries.Lcz_Confirm, btn_disabled: this.isButtonDisabled(), class: "full-width", btn_styles: "justify-content-center", onClickHandler: this.handleRoomConfirmation.bind(this) })))));
    }
};
IrRoomNights.style = IrRoomNightsStyle0 + IrRoomNightsStyle1;

const irWeekdaySelectorCss = ".sc-ir-weekday-selector-h{display:block}.days-checkbox.sc-ir-weekday-selector{gap:0.5rem}";
const IrWeekdaySelectorStyle0 = irWeekdaySelectorCss;

const IrWeekdaySelector = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.weekdayChange = index.createEvent(this, "weekdayChange", 7);
        /**
         * Initial list of selected weekdays (numeric values).
         */
        this.weekdays = [];
        /**
         * Internal state tracking currently selected weekdays.
         */
        this.selectedWeekdays = new Set(this.weekdays);
        this._weekdays = [
            { value: 1, label: 'M' },
            { value: 2, label: 'T' },
            { value: 3, label: 'W' },
            { value: 4, label: 'Th' },
            { value: 5, label: 'Fr' },
            { value: 6, label: 'Sa' },
            { value: 0, label: 'Su' },
        ];
    }
    handleWeekdayChange(newDays, oldDays) {
        if (newDays.length !== oldDays.length && newDays.length !== this.selectedWeekdays.size) {
            this.selectedWeekdays = new Set(newDays);
        }
    }
    /**
     * Toggles the selected state of a specific weekday.
     * Updates internal state and emits `weekdayChange` event.
     *
     * @param checked - Whether the checkbox is checked.
     * @param weekDay - The numeric value of the weekday.
     */
    toggleWeekDays({ checked, weekDay }) {
        const prev = new Set(this.selectedWeekdays);
        if (checked) {
            if (!this.selectedWeekdays.has(weekDay)) {
                prev.add(weekDay);
                this.selectedWeekdays = new Set(prev);
            }
        }
        else {
            prev.delete(weekDay);
            this.selectedWeekdays = new Set(prev);
        }
        this.weekdayChange.emit(Array.from(this.selectedWeekdays));
    }
    render() {
        return (index.h(index.Host, { key: '9e3d1336c6989d03b104f5a1858afe19938a5f10', class: "my-1 d-flex align-items-center", style: { gap: '1.1rem' } }, this._weekdays.map(w => (index.h("ir-checkbox", { checked: this.selectedWeekdays.has(w.value), onCheckChange: e => this.toggleWeekDays({ checked: e.detail, weekDay: w.value }), label: w.label, labelClass: "m-0 p-0", class: "days-checkbox" })))));
    }
    static get watchers() { return {
        "weekdays": ["handleWeekdayChange"]
    }; }
};
IrWeekdaySelector.style = IrWeekdaySelectorStyle0;

exports.igl_booking_event = IglBookingEvent;
exports.igl_bulk_stop_sale = IglBulkStopSale;
exports.igl_cal_body = IglCalBody;
exports.igl_cal_footer = IglCalFooter;
exports.igl_cal_header = IglCalHeader;
exports.igl_legends = IglLegends;
exports.igl_tba_category_view = IglTbaCategoryView;
exports.igl_to_be_assigned = IglToBeAssigned;
exports.ir_interactive_title = IrInteractiveTitle;
exports.ir_room_nights = IrRoomNights;
exports.ir_weekday_selector = IrWeekdaySelector;

//# sourceMappingURL=igl-booking-event_11.cjs.entry.js.map