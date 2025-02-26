'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aeea0adf.js');
const booking_service = require('./booking.service-279a0ea1.js');
const booking = require('./booking-cd01c1ff.js');
const utils = require('./utils-b07b7e84.js');
const moment = require('./moment-1780b03a.js');
const events_service = require('./events.service-0868cdfa.js');
const locales_store = require('./locales.store-7abd65bc.js');
const calendarData = require('./calendar-data-cd8e8374.js');
require('./axios-6e678d52.js');
require('./index-3cfd4bf8.js');

const iglBookingEventCss = ".sc-igl-booking-event-h{display:block;position:absolute}.bookingEventBase.sc-igl-booking-event{position:absolute;background-color:rgb(49, 190, 241);width:100%;height:100%;border-radius:4px;transform:skewX(-22deg)}.bookingEventBase.skewedLeft.sc-igl-booking-event::before{content:'';position:absolute;top:0px;bottom:0;left:-4px;width:50%;height:100%;background-color:var(--ir-event-bg);transform-origin:right;transform:skewX(22deg);border-radius:4px;border-top-left-radius:0;border-bottom-left-radius:0}.bookingEventBase.skewedRight.sc-igl-booking-event::before{content:'';position:absolute;top:0;bottom:0;right:-4px;width:50%;height:100%;background-color:var(--ir-event-bg);transform-origin:left;transform:skewX(22deg);border-radius:4px;border-top-right-radius:0;border-bottom-right-radius:0}.bookingEventBase.border.skewedLeft.sc-igl-booking-event::before{border:2px solid #424242;border-right:0;border-left:0;border-top-right-radius:0;border-bottom-right-radius:0;top:-1px;height:20px;left:-4px}.ota-booking-event.sc-igl-booking-event{border-width:2px !important}.bookingEventBase.border.skewedRight.sc-igl-booking-event::before{border:2px solid #424242;border-left:0;border-right:0;border-top-left-radius:0;border-bottom-left-radius:0;top:-1px;height:20px;right:-4px}.bookingEvent.sc-igl-booking-event{cursor:pointer}.bookingEventBase.sc-igl-booking-event{cursor:pointer}.bookingEventHiddenBase.sc-igl-booking-event{position:absolute;top:0;left:-4px;width:calc(100% + 8)}.bookingEventDragHandle.sc-igl-booking-event{position:absolute;top:0;width:15px;height:100%;opacity:0.1;background-color:rgba(0, 0, 0, 0.15);transform:skewX(-22deg);border-radius:4px;cursor:pointer}.splitBooking.sc-igl-booking-event{border-right:2px solid #000000}.sc-igl-booking-event-h:hover .bookingEventDragHandle.sc-igl-booking-event{display:block;opacity:1}.newEvent.sc-igl-booking-event-h:hover .bookingEventDragHandle.sc-igl-booking-event{display:none;opacity:1}.leftSide.sc-igl-booking-event{left:0}.leftSide.skewedLeft.sc-igl-booking-event{transform:skewX(0)}.rightSide.skewedRight.sc-igl-booking-event{transform:skewX(0)}.rightSide.sc-igl-booking-event{right:0}.bookingEventTitle.sc-igl-booking-event{color:#fff;font-size:0.8em;position:relative;max-width:calc(100% - 10px);overflow:hidden;text-overflow:ellipsis;top:2px;left:5px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;cursor:pointer}.legend_circle.sc-igl-booking-event{border-radius:100%;width:10px;height:10px;margin:3px 3px 3px 2px;border:1px solid #fff}.noteIcon.sc-igl-booking-event{position:absolute;bottom:-8px;left:2px}.balanceIcon.sc-igl-booking-event{position:absolute;top:-8px;right:2px}";
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
        this.isStreatch = false;
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
            const transformedBooking = booking.transformNewBooking(data)[0];
            const otherBookingData = __rest(transformedBooking, ["ID", "TO_DATE", "FROM_DATE", "NO_OF_DAYS", "STATUS", "NAME", "IDENTIFIER", "PR_ID", "POOL", "BOOKING_NUMBER", "NOTES", "is_direct", "BALANCE"]);
            this.bookingEvent = Object.assign(Object.assign(Object.assign({}, otherBookingData), this.bookingEvent), { booking: data, PHONE: otherBookingData.PHONE, PHONE_PREFIX: otherBookingData.PHONE_PREFIX, PRIVATE_NOTE: otherBookingData.PRIVATE_NOTE });
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
        try {
            if (event.detail.bookingId !== this.getBookingId()) {
                this.showEventInfo(false);
                return;
            }
            if (event.detail.moveToDay === 'revert' || event.detail.toRoomId === 'revert') {
                event.detail.moveToDay = this.bookingEvent.FROM_DATE;
                event.detail.toRoomId = event.detail.fromRoomId;
                if (this.isTouchStart && this.moveDiffereneX <= 5 && this.moveDiffereneY <= 5 && !this.isStreatch) {
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
                if (this.isTouchStart && this.moveDiffereneX <= 5 && this.moveDiffereneY <= 5 && !this.isStreatch) {
                    if (utils.isBlockUnit(this.bookingEvent.STATUS_CODE)) {
                        this.showEventInfo(true);
                    }
                    else if (['IN-HOUSE', 'CONFIRMED', 'PENDING-CONFIRMATION', 'CHECKED-OUT'].includes(this.bookingEvent.STATUS)) {
                        await this.fetchAndAssignBookingData();
                    }
                }
                else {
                    const { pool, to_date, from_date, toRoomId } = event.detail;
                    if (this.checkIfSlotOccupied(toRoomId, from_date, to_date)) {
                        this.animationFrameId = requestAnimationFrame(() => {
                            this.resetBookingToInitialPosition();
                        });
                        throw new Error('Overlapping Dates');
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
                            if (this.isShrinking || !this.isStreatch) {
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
                                const defaultDiffDays = moment.hooks(oldToDate, 'YYYY-MM-DD').diff(moment.hooks(oldFromDate, 'YYYY-MM-DD'), 'days');
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
                                    if (moment.hooks(from_date, 'YYYY-MM-DD').isBefore(moment.hooks(oldFromDate, 'YYYY-MM-DD'))) {
                                        fromDate = from_date;
                                        toDate = moment.hooks(from_date, 'YYYY-MM-DD').add(defaultDiffDays, 'days').format('YYYY-MM-DD');
                                    }
                                    else if (moment.hooks(to_date, 'YYYY-MM-DD').isAfter(moment.hooks(oldToDate, 'YYYY-MM-DD'))) {
                                        toDate = to_date;
                                        fromDate = moment.hooks(to_date, 'YYYY-MM-DD').subtract(defaultDiffDays, 'days').format('YYYY-MM-DD');
                                    }
                                }
                                this.showDialog.emit(Object.assign(Object.assign({ reason: 'reallocate' }, event.detail), { description, title: '', hideConfirmButton, from_date: fromDate, to_date: toDate }));
                            }
                            else {
                                // if (this.checkIfSlotOccupied(toRoomId, from_date, to_date)) {
                                //   this.animationFrameId = requestAnimationFrame(() => {
                                //     this.resetBookingToInitialPosition();
                                //   });
                                //   throw new Error('Overlapping Dates');
                                // } else {
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
    getModalDescription(toRoomId, from_date, to_date) {
        const findRoomType = (roomId) => {
            let roomType = this.bookingEvent.roomsInfo.filter(room => room.physicalrooms.some(r => r.id === +roomId));
            if (roomType.length) {
                return roomType[0].id;
            }
            return null;
        };
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
                    const initialRT = findRoomType(this.bookingEvent.PR_ID);
                    const targetRT = findRoomType(toRoomId);
                    if (initialRT === targetRT) {
                        return { description: `${locales_store.locales.entries.Lcz_AreYouSureWantToMoveAnotherUnit}?`, status: '200' };
                    }
                    else {
                        return {
                            description: `${locales_store.locales.entries.Lcz_YouWillLoseFutureUpdates} ${this.bookingEvent.origin ? this.bookingEvent.origin.Label : ''}. ${locales_store.locales.entries.Lcz_SameRatesWillBeKept}`,
                            status: '200',
                        };
                    }
                }
                return { description: locales_store.locales.entries.Lcz_CannotChangeCHBookings, status: '400' };
            }
        }
        else {
            if (!this.isShrinking) {
                const initialRT = findRoomType(this.bookingEvent.PR_ID);
                const targetRT = findRoomType(toRoomId);
                if (initialRT === targetRT) {
                    console.log('same rt');
                    return { description: `${locales_store.locales.entries.Lcz_AreYouSureWantToMoveAnotherUnit}?`, status: '200' };
                }
                else {
                    return {
                        description: locales_store.locales.entries.Lcz_SameRatesWillBeKept,
                        status: '200',
                    };
                }
            }
            return { description: locales_store.locales.entries.Lcz_ConfrmModiication, status: '200' };
        }
    }
    resetBookingToInitialPosition() {
        if (this.isStreatch) {
            this.element.style.left = `${this.initialLeft}px`;
            this.element.style.width = `${this.initialWidth}px`;
            this.isStreatch = false;
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
        this.isStreatch = side !== 'move';
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
                    this.moveDiffereneX = Math.abs(this.dragEndPos.x - this.dragInitPos.x);
                    this.moveDiffereneY = Math.abs(this.dragEndPos.y - this.dragInitPos.y);
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
        return (index.h(index.Host, { key: '3a7a5ce5cd933a6e7e063291275b597acd0dc862', class: `bookingEvent  ${this.isNewEvent() || this.isHighlightEventType() ? 'newEvent' : ''} ${legend.clsName} `, style: this.getPosition(), id: 'event_' + this.getBookingId() }, index.h("div", { key: '2719259cc94ddf8c2f454bf8ab1afdd4dd938213', class: `bookingEventBase  ${!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 'skewedLeft' : ''}
          ${!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)) ? 'skewedRight' : ''}
          ${!this.bookingEvent.is_direct &&
                !utils.isBlockUnit(this.bookingEvent.STATUS_CODE) &&
                this.bookingEvent.STATUS !== 'TEMP-EVENT' &&
                this.bookingEvent.ID !== 'NEW_TEMP_EVENT' &&
                'border border-dark ota-booking-event'}  ${this.isSplitBooking() ? 'splitBooking' : ''}`, style: { 'backgroundColor': legend.color, '--ir-event-bg': legend.color }, onTouchStart: event => this.startDragging(event, 'move'), onMouseDown: event => this.startDragging(event, 'move') }), noteNode ? index.h("div", { class: "legend_circle noteIcon", style: { backgroundColor: noteNode.color } }) : null, balanceNode ? index.h("div", { class: "legend_circle balanceIcon", style: { backgroundColor: balanceNode.color } }) : null, index.h("div", { key: '8099d3cb5612c10c3b7fb106141cf5a8b5feab62', class: "bookingEventTitle", onTouchStart: event => this.startDragging(event, 'move'), onMouseDown: event => this.startDragging(event, 'move') }, this.getBookedBy(), this.renderEventBookingNumber()), (this.bookingEvent.is_direct || utils.isBlockUnit(this.bookingEvent.STATUS_CODE)) && (index.h(index.Fragment, { key: 'd2259c68dd97460c13a6e36312e93d7088fa61c4' }, index.h("div", { key: '1d9be04c791e0e209959810c2bee24792342485b', class: `bookingEventDragHandle leftSide ${!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 'skewedLeft' : ''}
            ${!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)) ? 'skewedRight' : ''}`, onTouchStart: event => this.startDragging(event, 'leftSide'), onMouseDown: event => this.startDragging(event, 'leftSide') }), index.h("div", { key: '6b332ea601389a12b38093538113a0f172207e72', class: `bookingEventDragHandle rightSide ${!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 'skewedLeft' : ''}
              ${!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)) ? 'skewedRight' : ''}`, onTouchStart: event => this.startDragging(event, 'rightSide'), onMouseDown: event => this.startDragging(event, 'rightSide') }))), this.showInfoPopup ? (index.h("igl-booking-event-hover", { is_vacation_rental: this.is_vacation_rental, countries: this.countries, currency: this.currency, class: "top", bookingEvent: this.bookingEvent, bubbleInfoTop: this.bubbleInfoTopSide, style: this.calculateHoverPosition() })) : null));
    }
    get element() { return index.getElement(this); }
};
IglBookingEvent.style = IglBookingEventStyle0;

const iglBookingEventHoverCss = ".sc-igl-booking-event-hover-h{display:block;position:relative;z-index:100}.btn.sc-igl-booking-event-hover{padding-left:4px !important;padding-right:4px !important}.balance_amount.sc-igl-booking-event-hover{color:#ff4961;font-size:0.75rem}.user-notes.sc-igl-booking-event-hover{margin-left:4px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5;line-clamp:5;overflow:hidden;max-width:100%;height:auto}.events_btns.sc-igl-booking-event-hover{display:inline-flex;align-items:center;justify-content:center;gap:0.5rem}.mx-01.sc-igl-booking-event-hover{--m:5px;margin-left:var(--m) !important;margin-right:var(--m) !important}.pointerContainerTop.sc-igl-booking-event-hover{top:-26px}.pointerContainer.sc-igl-booking-event-hover{position:absolute;height:10px;width:350px;left:var(--el-left, 50%);transform:translateX(-50%)}.iglPopOver.sc-igl-booking-event-hover{position:absolute;background-color:#fff;padding:10px;border:1px solid #656ee7;border-radius:6px;left:var(--el-left, 50%);transform:translateX(-50%) translateY(10px);box-shadow:1px 0px 20px rgba(0, 0, 0, 0.2)}.iglPopOver.infoBubble.sc-igl-booking-event-hover{min-width:350px}.iglPopOver.blockedView.sc-igl-booking-event-hover{max-width:400px;width:400px}.iglPopOver.newBookingOptions.sc-igl-booking-event-hover{overflow-wrap:break-word !important;min-width:230px;width:fit-content}.bubblePointer.sc-igl-booking-event-hover{position:absolute;width:0;height:0;left:50%;border-left:10px solid transparent;border-right:10px solid transparent;transform:translate(-50%, 0px)}.bubblePointTop.sc-igl-booking-event-hover{border-top:10px solid #656ee7}.bubblePointBottom.sc-igl-booking-event-hover{border-bottom:10px solid #656ee7}.bubbleInfoAbove.sc-igl-booking-event-hover{bottom:35px}.updateBtnIcon.sc-igl-booking-event-hover{margin-right:4px}.icon-image.sc-igl-booking-event-hover{height:1.5rem;width:1.5rem;margin-right:5px}";
const IglBookingEventHoverStyle0 = iglBookingEventHoverCss;

const IglBookingEventHover = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.showBookingPopup = index.createEvent(this, "showBookingPopup", 7);
        this.hideBubbleInfo = index.createEvent(this, "hideBubbleInfo", 7);
        this.deleteButton = index.createEvent(this, "deleteButton", 7);
        this.bookingCreated = index.createEvent(this, "bookingCreated", 7);
        this.showDialog = index.createEvent(this, "showDialog", 7);
        this.bubbleInfoTop = false;
        this.is_vacation_rental = false;
        this.shouldHideUnassignUnit = false;
        this.eventService = new events_service.EventsService();
        this.hideButtons = false;
    }
    componentWillLoad() {
        let selectedRt = this.bookingEvent.roomsInfo.find(r => r.id === this.bookingEvent.RATE_TYPE);
        if (selectedRt) {
            this.shouldHideUnassignUnit = selectedRt.physicalrooms.length === 1;
        }
        if (moment.hooks(this.bookingEvent.TO_DATE, 'YYYY-MM-DD').isBefore(moment.hooks())) {
            this.hideButtons = true;
        }
        this.canCheckInOrCheckout =
            moment.hooks(new Date()).isSameOrAfter(new Date(this.bookingEvent.FROM_DATE), 'days') && moment.hooks(new Date()).isBefore(new Date(this.bookingEvent.TO_DATE), 'days');
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidLoad() {
        document.addEventListener('keydown', this.handleKeyDown);
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    handleBookingEventChange(newValue, oldValue) {
        if (newValue !== oldValue)
            this.canCheckInOrCheckout =
                moment.hooks(new Date()).isSameOrAfter(new Date(this.bookingEvent.FROM_DATE), 'days') && moment.hooks(new Date()).isBefore(new Date(this.bookingEvent.TO_DATE), 'days');
    }
    getBookingId() {
        return this.bookingEvent.ID;
    }
    hideBubble() {
        this.hideBubbleInfo.emit({
            key: 'hidebubble',
            currentInfoBubbleId: this.getBookingId(),
        });
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown(event) {
        if (event.key === 'Escape') {
            this.hideBubble();
        }
        else
            return;
    }
    getTotalOccupants() {
        var _a, _b, _c;
        const { CHILDREN_COUNT, ADULTS_COUNT } = this.bookingEvent;
        if (CHILDREN_COUNT === 0) {
            return `${ADULTS_COUNT} ${ADULTS_COUNT > 1 ? locales_store.locales.entries.Lcz_AdultsCaption.toLowerCase() : (_a = locales_store.locales.entries.Lcz_Single_Adult) === null || _a === void 0 ? void 0 : _a.toLowerCase()}`;
        }
        return `${ADULTS_COUNT} ${ADULTS_COUNT > 1 ? locales_store.locales.entries.Lcz_AdultsCaption.toLowerCase() : (_b = locales_store.locales.entries.Lcz_Single_Adult) === null || _b === void 0 ? void 0 : _b.toLowerCase()}, ${CHILDREN_COUNT} ${CHILDREN_COUNT > 1 ? locales_store.locales.entries.Lcz_ChildCaption.toLowerCase() : (_c = locales_store.locales.entries.Lcz_Single_Child) === null || _c === void 0 ? void 0 : _c.toLowerCase()}`;
    }
    getPhoneNumber() {
        return this.bookingEvent.PHONE;
    }
    getCountry() {
        return utils.findCountry(this.bookingEvent.COUNTRY, this.countries).name;
    }
    getPhoneCode() {
        if (this.bookingEvent.PHONE_PREFIX) {
            return this.bookingEvent.PHONE_PREFIX;
        }
        return utils.findCountry(this.bookingEvent.COUNTRY, this.countries).phone_prefix;
    }
    renderPhone() {
        return this.bookingEvent.COUNTRY ? `${this.bookingEvent.is_direct ? this.getPhoneCode() + '-' : ''}${this.getPhoneNumber()} - ${this.getCountry()}` : this.getPhoneNumber();
    }
    // private getGuestNote() {
    //   return this.bookingEvent.NOTES && <p class={'user-notes p-0 my-0'}>{this.bookingEvent.NOTES}</p>;
    // }
    getInternalNote() {
        return this.bookingEvent.INTERNAL_NOTE;
    }
    getTotalPrice() {
        return this.bookingEvent.TOTAL_PRICE;
    }
    getArrivalTime() {
        return this.bookingEvent.ARRIVAL_TIME;
    }
    getRatePlan() {
        return this.bookingEvent.RATE_PLAN;
    }
    getEntryDate() {
        return this.bookingEvent.ENTRY_DATE;
    }
    isNewBooking() {
        return this.getBookingId() === 'NEW_TEMP_EVENT';
    }
    isCheckedIn() {
        return this.bookingEvent.STATUS === 'IN-HOUSE';
    }
    isBlockedDateEvent() {
        return this.bookingEvent.STATUS === 'BLOCKED' || this.bookingEvent.STATUS === 'BLOCKED-WITH-DATES';
    }
    hasSplitBooking() {
        return this.bookingEvent.hasOwnProperty('splitBookingEvents') && this.bookingEvent.splitBookingEvents;
    }
    canCheckIn() {
        if (!calendarData.calendar_data.checkin_enabled || calendarData.calendar_data.is_automatic_check_in_out) {
            return false;
        }
        if (this.isCheckedIn()) {
            return false;
        }
        if (this.canCheckInOrCheckout) {
            return true;
        }
        return false;
    }
    canCheckOut() {
        if (!calendarData.calendar_data.checkin_enabled || calendarData.calendar_data.is_automatic_check_in_out) {
            return false;
        }
        if (this.isCheckedIn() && this.canCheckInOrCheckout) {
            return true;
        }
        else {
            return false;
        }
    }
    handleBlockDateUpdate(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const opt = event.detail;
        this.bookingEvent = Object.assign(Object.assign({}, this.bookingEvent), opt.data);
        //console.log("blocked date booking event", this.bookingEvent);
    }
    handleEditBooking() {
        // console.log("Edit booking");
        this.bookingEvent.TITLE = locales_store.locales.entries.Lcz_EditBookingFor;
        this.handleBookingOption('EDIT_BOOKING');
    }
    getStringDateFormat(dt) {
        return dt.getFullYear() + '-' + (dt.getMonth() < 9 ? '0' : '') + (dt.getMonth() + 1) + '-' + (dt.getDate() <= 9 ? '0' : '') + dt.getDate();
    }
    handleAddRoom() {
        var _a;
        let fromDate = new Date(this.bookingEvent.FROM_DATE);
        fromDate.setHours(0, 0, 0, 0);
        let from_date_str = this.getStringDateFormat(fromDate);
        let toDate = new Date(this.bookingEvent.TO_DATE);
        //toDate.setDate(toDate.getDate() + 1);
        toDate.setHours(0, 0, 0, 0);
        let to_date_str = this.getStringDateFormat(toDate);
        // console.log(this.bookingEvent);
        let eventData = {
            ID: '',
            NAME: '',
            BOOKING_NUMBER: this.bookingEvent.BOOKING_NUMBER,
            FROM_DATE: from_date_str, // "2023-07-09",
            TO_DATE: to_date_str, // "2023-07-11",
            roomsInfo: this.bookingEvent.roomsInfo,
            ARRIVAL: this.bookingEvent.ARRIVAL,
            ADD_ROOM_TO_BOOKING: this.bookingEvent.ID,
            TITLE: 'Add Room to #' + this.bookingEvent.BOOKING_NUMBER,
            event_type: 'ADD_ROOM',
            ROOMS: this.bookingEvent.ROOMS,
            GUEST: this.bookingEvent.GUEST,
            message: this.bookingEvent.NOTES,
            SOURCE: this.bookingEvent.SOURCE,
            booking: (_a = this.bookingEvent) === null || _a === void 0 ? void 0 : _a.booking,
            defaultDateRange: {
                fromDate: fromDate,
                fromDateStr: '',
                toDate: toDate,
                toDateStr: '',
                dateDifference: 0,
                editabled: true,
                message: 'Including 5.00% City Tax - Excluding 11.00% VAT',
            },
        };
        this.handleBookingOption('ADD_ROOM', eventData);
    }
    handleCustomerCheckIn() {
        var _a, _b;
        const { adult_nbr, children_nbr, infant_nbr } = this.bookingEvent.ROOM_INFO.occupancy;
        this.showDialog.emit({
            reason: 'checkin',
            bookingNumber: this.bookingEvent.BOOKING_NUMBER,
            roomIdentifier: this.bookingEvent.IDENTIFIER,
            roomName: '',
            roomUnit: '',
            sidebarPayload: {
                identifier: this.bookingEvent.IDENTIFIER,
                bookingNumber: this.bookingEvent.BOOKING_NUMBER,
                checkin: false,
                roomName: (_b = (_a = this.bookingEvent.ROOM_INFO.unit) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '',
                sharing_persons: this.bookingEvent.ROOM_INFO.sharing_persons,
                totalGuests: adult_nbr + children_nbr + infant_nbr,
            },
        });
    }
    handleCustomerCheckOut() {
        this.showDialog.emit({ reason: 'checkout', bookingNumber: this.bookingEvent.BOOKING_NUMBER, roomIdentifier: this.bookingEvent.IDENTIFIER, roomName: '', roomUnit: '' });
    }
    handleDeleteEvent() {
        this.hideBubble();
        this.deleteButton.emit(this.bookingEvent.POOL);
        console.log('Delete Event');
    }
    async handleUpdateBlockedDates() {
        try {
            this.isLoading = 'update';
            setTimeout(() => {
                this.hideBubble();
            }, 50);
            await this.eventService.updateBlockedEvent(this.bookingEvent);
            this.isLoading = '';
        }
        catch (error) {
            //   toastr.error(error);
        }
    }
    handleConvertBlockedDateToBooking() {
        this.handleBookingOption('BAR_BOOKING');
    }
    getRoomInfo() {
        const roomIdToFind = +this.bookingEvent.PR_ID;
        let selectedRoom = {};
        for (const room of this.bookingEvent.roomsInfo) {
            for (const physicalRoom of room.physicalrooms) {
                if (roomIdToFind === physicalRoom.id) {
                    selectedRoom.CATEGORY = room.name;
                    selectedRoom.ROOM_NAME = physicalRoom.name;
                    selectedRoom.ROOMS_INFO = room;
                    return selectedRoom;
                }
            }
        }
        return selectedRoom;
    }
    renderTitle(eventType, roomInfo) {
        switch (eventType) {
            case 'EDIT_BOOKING':
                return `${locales_store.locales.entries.Lcz_EditBookingFor} ${roomInfo.CATEGORY} ${roomInfo.ROOM_NAME}`;
            case 'ADD_ROOM':
                return `${locales_store.locales.entries.Lcz_AddingUnitToBooking}# ${this.bookingEvent.BOOKING_NUMBER}`;
            case 'SPLIT_BOOKING':
                return locales_store.locales.entries.Lcz_Adding + ` ${roomInfo.CATEGORY} ${roomInfo.ROOM_NAME}`;
            default:
                return `${locales_store.locales.entries.Lcz_NewBookingFor} ${roomInfo.CATEGORY} ${roomInfo.ROOM_NAME}`;
        }
    }
    handleBookingOption(eventType, roomData = null) {
        const roomInfo = this.getRoomInfo();
        let data = roomData ? roomData : this.bookingEvent;
        data.event_type = eventType;
        data.TITLE = this.renderTitle(eventType, roomInfo);
        if (['003', '002', '004'].includes(this.bookingEvent.STATUS_CODE)) {
            data.roomsInfo = [roomInfo.ROOMS_INFO];
        }
        if (eventType === 'BAR_BOOKING' && this.bookingEvent.STATUS !== 'TEMP-EVENT') {
            const { FROM_DATE, TO_DATE, PR_ID, RELEASE_AFTER_HOURS, ENTRY_DATE, OPTIONAL_REASON, ENTRY_MINUTE, ENTRY_HOUR, STATUS_CODE } = this.bookingEvent;
            data.block_exposed_unit_props = {
                from_date: FROM_DATE,
                to_date: TO_DATE,
                NOTES: OPTIONAL_REASON,
                pr_id: PR_ID,
                STAY_STATUS_CODE: STATUS_CODE,
                DESCRIPTION: RELEASE_AFTER_HOURS,
                BLOCKED_TILL_DATE: ENTRY_DATE,
                BLOCKED_TILL_HOUR: ENTRY_HOUR,
                BLOCKED_TILL_MINUTE: ENTRY_MINUTE,
            };
            this.handleDeleteEvent();
        }
        this.showBookingPopup.emit({
            key: 'add',
            data: Object.assign({}, data),
        });
        this.hideBubbleInfo.emit({
            key: 'hidebubble',
            currentInfoBubbleId: this.getBookingId(),
        });
    }
    // private renderNote() {
    //   const { is_direct, ota_notes } = this.bookingEvent;
    //   const guestNote = this.getGuestNote();
    //   const noteLabel = locales.entries.Lcz_Note + ':';
    //   if (!is_direct && ota_notes) {
    //     return (
    //       <div class="row p-0 m-0">
    //         <div class="col-12 px-0 text-wrap d-flex">
    //           <ota-label label={noteLabel} remarks={ota_notes}></ota-label>
    //         </div>
    //       </div>
    //     );
    //   } else if (is_direct && guestNote) {
    //     return (
    //       <div class="row p-0 m-0">
    //         <div class="col-12 px-0 text-wrap d-flex">
    //           <Fragment>
    //             <span class="font-weight-bold">{noteLabel} </span>
    //             {guestNote}
    //           </Fragment>
    //         </div>
    //       </div>
    //     );
    //   }
    //   return null;
    // }
    getInfoElement() {
        var _a, _b, _c, _d, _e;
        return (index.h("div", { class: `iglPopOver infoBubble ${this.bubbleInfoTop ? 'bubbleInfoAbove' : ''} text-left` }, index.h("div", { class: `row p-0 m-0  ${this.bookingEvent.BALANCE > 1 ? 'pb-0' : 'pb-1'}` }, index.h("div", { class: "px-0  col-8 font-weight-bold font-medium-1 d-flex align-items-center" }, index.h("img", { src: (_b = (_a = this.bookingEvent) === null || _a === void 0 ? void 0 : _a.origin) === null || _b === void 0 ? void 0 : _b.Icon, alt: (_d = (_c = this.bookingEvent) === null || _c === void 0 ? void 0 : _c.origin) === null || _d === void 0 ? void 0 : _d.Label, class: 'icon-image' }), index.h("p", { class: 'p-0 m-0' }, !this.bookingEvent.is_direct ? this.bookingEvent.channel_booking_nbr : this.bookingEvent.BOOKING_NUMBER)), index.h("div", { class: "pr-0 col-4 text-right" }, utils.formatAmount(this.currency.symbol, this.getTotalPrice()))), this.bookingEvent.BALANCE > 1 && (index.h("p", { class: "pr-0 m-0 p-0 text-right balance_amount" }, locales_store.locales.entries.Lcz_Balance, ": ", utils.formatAmount(this.currency.symbol, this.bookingEvent.BALANCE))), index.h("div", { class: "row p-0 m-0" }, index.h("div", { class: "px-0 pr-0 col-12" }, index.h("ir-date-view", { from_date: this.bookingEvent.defaultDates.from_date, to_date: this.bookingEvent.defaultDates.to_date, showDateDifference: false }))), this.getArrivalTime() && (
        // <div class="row p-0 m-0">
        //   <div class="px-0 col-12">
        //     <span class="font-weight-bold">{locales.entries.Lcz_ArrivalTime}: </span>
        //     {this.getArrivalTime()}
        //   </div>
        // </div>
        index.h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales_store.locales.entries.Lcz_ArrivalTime}:`, content: this.getArrivalTime() })), this.getTotalOccupants() && (
        // <div class="row p-0 m-0">
        //   <div class="px-0  col-12">
        //     <span class="font-weight-bold">{locales.entries.Lcz_Occupancy}: </span>
        //     {this.getTotalOccupants()}
        //   </div>
        // </div>
        index.h("ir-label", { class: "m-0 p-0", containerStyle: { padding: '0', margin: '0' }, labelText: `${locales_store.locales.entries.Lcz_Occupancy}:`, content: this.getTotalOccupants() })), this.getPhoneNumber() && (
        // <div class="row p-0 m-0">
        //   <div class="px-0  col-12 text-wrap">
        //     <span class="font-weight-bold">{locales.entries.Lcz_Phone}: </span>
        //     {this.renderPhone()}
        //   </div>
        // </div>
        index.h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales_store.locales.entries.Lcz_Phone}:`, content: this.renderPhone() })), this.getRatePlan() && (
        // <div class="row p-0 m-0">
        //   <div class="px-0  col-12">
        //     <span class="font-weight-bold">{locales.entries.Lcz_RatePlan}: </span>
        //     {this.getRatePlan()}
        //   </div>
        // </div>
        index.h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales_store.locales.entries.Lcz_RatePlan}:`, content: this.getRatePlan() })), this.bookingEvent.PRIVATE_NOTE && (
        // <div class="row p-0 m-0">
        //   <div class="px-0  col-12 text-wrap">
        //     <span class="font-weight-bold">{locales.entries.Lcz_PrivateNote}: </span>
        //     {this.bookingEvent.PRIVATE_NOTE}
        //   </div>
        // </div>
        index.h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales_store.locales.entries.Lcz_BookingPrivateNote}:`, display: "inline", content: this.bookingEvent.PRIVATE_NOTE })), this.bookingEvent.is_direct ? (index.h("ir-label", { containerStyle: { padding: '0', margin: '0' }, labelText: `${locales_store.locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.bookingEvent.NOTES })) : (index.h("ota-label", { class: 'm-0 p-0', label: `${locales_store.locales.entries.Lcz_ChannelNotes || 'Channel notes'}:`, remarks: this.bookingEvent.ota_notes, maxVisibleItems: (_e = this.bookingEvent.ota_notes) === null || _e === void 0 ? void 0 : _e.length })), this.getInternalNote() && index.h("ir-label", { labelText: `${locales_store.locales.entries.Lcz_InternalRemark}:`, content: this.getInternalNote() }), index.h("div", { class: "row p-0 m-0 mt-2" }, index.h("div", { class: "full-width d-flex align-items-center", style: { gap: '0.25rem' }, role: "group" }, index.h("ir-button", { style: { '--icon-size': '0.875rem' }, onClickHandler: () => this.handleEditBooking(), class: 'w-100', btn_block: true, text: locales_store.locales.entries.Lcz_Edit, icon_name: "edit", btn_styles: "h-100", size: "sm" }), this.bookingEvent.is_direct && this.bookingEvent.IS_EDITABLE && !this.hideButtons && (index.h("ir-button", { style: { '--icon-size': '0.875rem' }, text: locales_store.locales.entries.Lcz_AddRoom, icon_name: "square_plus", size: "sm", btn_styles: "h-100", onClickHandler: () => this.handleAddRoom() })), this.canCheckIn() && (index.h("ir-button", { style: { '--icon-size': '0.875rem' }, text: locales_store.locales.entries.Lcz_CheckIn, onClickHandler: () => this.handleCustomerCheckIn(), icon_name: "edit", btn_styles: "h-100", size: "sm" })), this.canCheckOut() && (index.h("ir-button", { btn_styles: "h-100", style: { '--icon-size': '0.875rem' }, text: locales_store.locales.entries.Lcz_CheckOut, icon_name: "edit", onClickHandler: () => this.handleCustomerCheckOut(), size: "sm" })), this.hideButtons
            ? null
            : !this.shouldHideUnassignUnit && (index.h("ir-button", { btn_styles: "h-100", style: { '--icon-size': '0.875rem' }, size: "sm", text: locales_store.locales.entries.Lcz_Unassign, icon_name: "xmark", onClickHandler: _ => {
                    this.handleDeleteEvent();
                } }))))));
    }
    getNewBookingOptions() {
        const shouldDisplayButtons = this.bookingEvent.roomsInfo[0].rateplans.some(rate => rate.is_active);
        return (index.h("div", { class: `iglPopOver d-flex flex-column newBookingOptions ${this.bubbleInfoTop ? 'bubbleInfoAbove' : ''} text-left`, style: { gap: '0.5rem' } }, shouldDisplayButtons ? (index.h(index.Fragment, null, index.h("ir-button", { size: "sm", btn_block: true, text: locales_store.locales.entries.Lcz_CreateNewBooking, onClickHandler: _ => {
                this.handleBookingOption('BAR_BOOKING');
            } }), this.hasSplitBooking() && (
        // <div class="mb-1">
        index.h("ir-button", { size: "sm", btn_block: true, text: locales_store.locales.entries.Lcz_AssignUnitToExistingBooking, onClickHandler: _ => {
                this.handleBookingOption('SPLIT_BOOKING');
            } })
        // </div>
        ))) : (index.h("p", { class: 'text-danger' }, locales_store.locales.entries.Lcz_NoRatePlanDefined)), index.h("ir-button", { size: "sm", text: locales_store.locales.entries.Lcz_Blockdates, btn_block: true, onClickHandler: _ => {
                this.handleBookingOption('BLOCK_DATES');
            } })));
    }
    getBlockedView() {
        console.log('booking event', this.bookingEvent);
        // let defaultData = {RELEASE_AFTER_HOURS: 0, OPTIONAL_REASON: "", OUT_OF_SERVICE: false};
        return (index.h("div", { class: `iglPopOver blockedView ${this.bubbleInfoTop ? 'bubbleInfoAbove' : ''} text-left` }, index.h("igl-block-dates-view", { isEventHover: true, entryHour: this.bookingEvent.ENTRY_HOUR, entryMinute: this.bookingEvent.ENTRY_MINUTE, defaultData: this.bookingEvent, fromDate: this.bookingEvent.defaultDates.from_date, toDate: this.bookingEvent.defaultDates.to_date, entryDate: this.getEntryDate(), onDataUpdateEvent: event => this.handleBlockDateUpdate(event) }), index.h("div", { class: "row p-0 m-0 mt-2" }, index.h("div", { class: "full-width d-flex align-items-center", style: { gap: '0.25rem' }, role: "group" }, index.h("ir-button", { btn_disabled: this.isLoading === 'update', text: locales_store.locales.entries.Lcz_Update, onClickHandler: _ => {
                this.handleUpdateBlockedDates();
            }, icon_name: "edit", size: "sm", btn_styles: "h-100", isLoading: this.isLoading === 'update', style: { '--icon-size': '0.875rem' }, btn_block: true, class: 'w-100' }), index.h("ir-button", { class: 'w-100 h-100 my-0', btn_block: true, btn_styles: "h-100", size: "sm", text: locales_store.locales.entries.Lcz_ConvertToBooking, onClickHandler: () => {
                this.handleConvertBlockedDateToBooking();
            } }), index.h("ir-button", { class: 'w-100', btn_styles: "h-100", btn_block: true, size: "sm", style: { '--icon-size': '0.875rem' }, icon_name: "trash", btn_color: "danger", onClickHandler: _ => {
                this.handleDeleteEvent();
            }, text: locales_store.locales.entries.Lcz_Delete })))));
    }
    render() {
        return (index.h(index.Host, { key: 'e57ab82259ceb728efae9dfc87c8e7d464a8fdb7' }, index.h("div", { key: '700bdb0433faf9acedf950529b8033abc2150499', class: `pointerContainer ${this.bubbleInfoTop ? 'pointerContainerTop' : ''}` }, index.h("div", { key: '2c1c6b4fd3d3564ee18d216152605bd7601d8798', class: `bubblePointer ${this.bubbleInfoTop ? 'bubblePointTop' : 'bubblePointBottom'}` })), this.isBlockedDateEvent() ? this.getBlockedView() : null, this.isNewBooking() ? this.getNewBookingOptions() : null, !this.isBlockedDateEvent() && !this.isNewBooking() ? this.getInfoElement() : null));
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "bookingEvent": ["handleBookingEventChange"]
    }; }
};
IglBookingEventHover.style = IglBookingEventHoverStyle0;

const irInteractiveTitleCss = ".sc-ir-interactive-title-h{display:block;width:100%;--hk-green:green}*.sc-ir-interactive-title{box-sizing:border-box}.popover-title.sc-ir-interactive-title{position:relative;width:100%;height:100%;margin:0;padding:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;z-index:10;left:0;display:flex;align-items:center}.popover-container.sc-ir-interactive-title{position:absolute;bottom:0px;left:var(--ir-popover-left, 10px);background:rgb(0, 0, 0);color:white;min-width:100%;box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 10px;z-index:9999;padding:3.5px 7px;border-radius:5px;pointer-events:none;opacity:0;transition:all 100ms ease;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;font-style:normal;font-weight:400;line-height:1.45;text-decoration:none;text-shadow:none;font-size:0.875rem}.popover-container[data-state='show'].sc-ir-interactive-title{opacity:1}.hk-dot.sc-ir-interactive-title{inset:0;position:absolute;display:flex;align-items:center;justify-content:center;width:fit-content;padding:4px;left:auto;padding-inline:var(--ir-popover-left);color:var(--dot-color, #ffffff)}";
const IrInteractiveTitleStyle0 = irInteractiveTitleCss;

const IrInteractiveTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irPopoverLeft = '10px';
        this.cropSize = 15;
    }
    // private hkStatusColors = {
    //   green: '#57f707',
    //   red: 'rgb(199, 139, 36)',
    //   orange: '#ff9149',
    //   black: '#ff4961',
    // };
    componentWillLoad() {
        this.croppedTitle = this.popoverTitle;
    }
    componentDidLoad() {
        this.initializePopover();
    }
    initializePopover() {
        const titleElement = this.el.querySelector('.popover-title');
        if (titleElement) {
            const isOverflowing = titleElement.scrollWidth > titleElement.offsetWidth;
            if (isOverflowing) {
                this.croppedTitle = this.popoverTitle.slice(0, this.cropSize) + '...';
                this.croppedTitleEl.innerHTML = this.croppedTitle;
                $(titleElement).popover({
                    trigger: 'hover',
                    content: this.popoverTitle,
                    placement: 'top',
                });
            }
            else {
                $(titleElement).popover('dispose');
            }
        }
    }
    render() {
        return (index.h(index.Host, { key: '125b91777a3a6f1f0415bb837509c02399189135', style: { '--ir-popover-left': this.irPopoverLeft } }, index.h("p", { key: '562d638fb5136e12319b2fa8d7cc224bd408759e', class: "popover-title", style: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            } }, index.h("span", { key: 'a80125af4fa31b2a3a84cb23c1e08fd99e1ccc88', ref: el => (this.croppedTitleEl = el), class: "croppedTitle" }, this.croppedTitle), this.hkStatus && (index.h("div", { key: 'bf7d102ed0a44bc87d032888516069f6dbfe89b6', title: "This unit is dirty", class: `hk-dot` }, index.h("svg", { key: 'ada3a3c2e78453833ffaedd0f1903faa11a331b6', xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512" }, index.h("path", { key: 'b52d3adb635416610970aeaefcc7d43f4a910090',
            // fill="currentColor"
            d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" })))))));
    }
    get el() { return index.getElement(this); }
};
IrInteractiveTitle.style = IrInteractiveTitleStyle0;

exports.igl_booking_event = IglBookingEvent;
exports.igl_booking_event_hover = IglBookingEventHover;
exports.ir_interactive_title = IrInteractiveTitle;

//# sourceMappingURL=igl-booking-event_3.cjs.entry.js.map