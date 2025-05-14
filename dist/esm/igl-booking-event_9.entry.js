import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from './index-0a4a209a.js';
import { B as BookingService } from './booking.service-1764aa69.js';
import { t as transformNewBooking, r as isBlockUnit, j as calculateDaysBetweenDates, l as calendar_dates, C as compareTime, D as createDateWithOffsetAndHour, d as dateToFormattedString, E as getDaysArray, F as convertDatePrice, G as formatDate } from './utils-f1b7543f.js';
import { h as hooks } from './moment-ab846cee.js';
import { E as EventsService } from './events.service-c5393479.js';
import { l as locales } from './locales.store-53ec3957.js';
import { H as HouseKeepingService } from './housekeeping.service-64b661f9.js';
import { c as calendar_data } from './calendar-data-26906e0c.js';
import { T as ToBeAssignedService } from './toBeAssigned.service-be661573.js';
import { h as handleUnAssignedDatesChange, g as getUnassignedDates } from './unassigned_dates.store-bb218d3e.js';
import { c as colorVariants } from './icons-457fd9f9.js';
import './axios-aa1335b8.js';
import './index-c1c77241.js';

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
        registerInstance(this, hostRef);
        this.hideBubbleInfo = createEvent(this, "hideBubbleInfo", 7);
        this.updateEventData = createEvent(this, "updateEventData", 7);
        this.dragOverEventData = createEvent(this, "dragOverEventData", 7);
        this.showRoomNightsDialog = createEvent(this, "showRoomNightsDialog", 7);
        this.showDialog = createEvent(this, "showDialog", 7);
        this.resetStreachedBooking = createEvent(this, "resetStreachedBooking", 7);
        this.toast = createEvent(this, "toast", 7);
        this.updateBookingEvent = createEvent(this, "updateBookingEvent", 7);
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
        this.eventsService = new EventsService();
        this.bookingService = new BookingService();
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
            const transformedBooking = transformNewBooking(data)[0];
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
                    if (isBlockUnit(this.bookingEvent.STATUS_CODE)) {
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
                    if (isBlockUnit(this.bookingEvent.STATUS_CODE)) {
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
                        if (isBlockUnit(this.bookingEvent.STATUS_CODE)) {
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
                                const diffDays = calculateDaysBetweenDates(oldFromDate, oldToDate);
                                let shrinkingDirection = null;
                                let fromDate = oldFromDate;
                                let toDate = oldToDate;
                                if (this.isShrinking) {
                                    if (hooks(from_date, 'YYYY-MM-DD').isAfter(hooks(oldFromDate, 'YYYY-MM-DD')) && hooks(to_date, 'YYYY-MM-DD').isBefore(hooks(oldToDate, 'YYYY-MM-DD'))) {
                                        fromDate = oldFromDate;
                                        toDate = to_date;
                                    }
                                    else {
                                        shrinkingDirection = hooks(from_date, 'YYYY-MM-DD').isAfter(hooks(oldFromDate, 'YYYY-MM-DD'))
                                            ? 'left'
                                            : hooks(to_date, 'YYYY-MM-DD').isBefore(hooks(oldToDate, 'YYYY-MM-DD'))
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
                                    if (hooks(from_date, 'YYYY-MM-DD').isBefore(hooks(oldFromDate, 'YYYY-MM-DD'))) {
                                        fromDate = from_date;
                                        const newToDate = hooks(from_date, 'YYYY-MM-DD').add(diffDays, 'days');
                                        toDate = newToDate.isBefore(hooks(to_date, 'YYYY-MM-DD'), 'days') ? to_date : newToDate.format('YYYY-MM-DD');
                                    }
                                    else if (hooks(to_date, 'YYYY-MM-DD').isAfter(hooks(oldToDate, 'YYYY-MM-DD'))) {
                                        toDate = to_date;
                                        fromDate = hooks(to_date, 'YYYY-MM-DD').subtract(diffDays, 'days').format('YYYY-MM-DD');
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
                    description: `${locales.entries.Lcz_YouWillLoseFutureUpdates}.`,
                    status: '200',
                };
            }
            else {
                if (hooks(from_date, 'YYYY-MM-DD').isSame(hooks(this.bookingEvent.FROM_DATE, 'YYYY-MM-DD')) &&
                    hooks(to_date, 'YYYY-MM-DD').isSame(hooks(this.bookingEvent.TO_DATE, 'YYYY-MM-DD'))) {
                    const initialRT = findRoomType(this.bookingEvent.PR_ID);
                    const targetRT = findRoomType(toRoomId);
                    if (initialRT === targetRT) {
                        return { description: `${locales.entries.Lcz_AreYouSureWantToMoveAnotherUnit}?`, status: '200' };
                    }
                    else {
                        return {
                            description: `${locales.entries.Lcz_YouWillLoseFutureUpdates} ${this.bookingEvent.origin ? this.bookingEvent.origin.Label : ''}. ${locales.entries.Lcz_SameRatesWillBeKept + '.'}`,
                            status: '200',
                        };
                    }
                }
                return { description: locales.entries.Lcz_CannotChangeCHBookings + '.', status: '400' };
            }
        }
        else {
            if (!this.isShrinking) {
                const initialRT = findRoomType(Number(this.bookingEvent.PR_ID));
                const targetRT = findRoomType(Number(toRoomId));
                if (initialRT === targetRT) {
                    console.log('same rt');
                    if (this.bookingEvent.PR_ID.toString() === toRoomId.toString()) {
                        //TODO add the description
                        return { description: locales.entries.Lcz_ConfrmModiication + '.', status: '200' };
                    }
                    return { description: `${locales.entries.Lcz_AreYouSureWantToMoveAnotherUnit}?`, status: '200' };
                }
                else {
                    return {
                        description: locales.entries.Lcz_SameRatesWillBeKept + '.',
                        status: '200',
                    };
                }
            }
            return { description: locales.entries.Lcz_ConfrmModiication + '.', status: '200' };
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
        const fromTime = hooks(from_date, 'YYYY-MM-DD');
        const toTime = hooks(to_date, 'YYYY-MM-DD');
        const isOccupied = this.allBookingEvents.some(event => {
            if (event.POOL === this.bookingEvent.POOL) {
                return false;
            }
            const eventFromTime = hooks(event.FROM_DATE, 'YYYY-MM-DD').add(1, 'days');
            const eventToTime = hooks(event.TO_DATE, 'YYYY-MM-DD');
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
                    (!this.isNewEvent() && hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 0 : this.dayWidth / 2) +
                    this.eventSpace / 2 -
                    bodyContainerRect.left +
                    'px';
            pos.width =
                (this.getStayDays() + (!this.isNewEvent() && hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 0.5 : 0)) *
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
                if (!this.bookingEvent.is_direct && !isBlockUnit(this.bookingEvent.STATUS_CODE)) {
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
                    (!this.isNewEvent() && hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? this.dayWidth / 2 : 0);
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
                    const offset = !this.isNewEvent() && hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? +this.dayWidth / 2 : 0;
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
        if (isBlockUnit(this.bookingEvent.STATUS_CODE)) {
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
        return (h(Host, { key: 'b07326f64b0696af60464d3696b33fe2ceafc44f', class: `bookingEvent  ${this.isNewEvent() || this.isHighlightEventType() ? 'newEvent' : ''} ${legend.clsName} `, style: this.getPosition(), id: 'event_' + this.getBookingId() }, h("div", { key: '82a7b9de962a9edea34ebc5f5faedf837eb76086', class: `bookingEventBase  ${!this.isNewEvent() && hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 'skewedLeft' : ''}
          ${!this.isNewEvent() && hooks(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)) ? 'skewedRight' : ''}
          ${!this.bookingEvent.is_direct &&
                !isBlockUnit(this.bookingEvent.STATUS_CODE) &&
                this.bookingEvent.STATUS !== 'TEMP-EVENT' &&
                this.bookingEvent.ID !== 'NEW_TEMP_EVENT' &&
                'border border-dark ota-booking-event'}  ${this.isSplitBooking() ? 'splitBooking' : ''}`, style: { 'backgroundColor': legend.color, '--ir-event-bg': legend.color }, onTouchStart: event => this.startDragging(event, 'move'), onMouseDown: event => this.startDragging(event, 'move') }), noteNode ? h("div", { class: "legend_circle noteIcon", style: { backgroundColor: noteNode.color } }) : null, balanceNode ? h("div", { class: "legend_circle balanceIcon", style: { backgroundColor: balanceNode.color } }) : null, h("div", { key: 'be200b5caabd210ebdd60ba1ff63c6f571fb00b2', class: "bookingEventTitle", onTouchStart: event => this.startDragging(event, 'move'), onMouseDown: event => this.startDragging(event, 'move') }, this.getBookedBy(), this.renderEventBookingNumber()), (this.bookingEvent.is_direct || isBlockUnit(this.bookingEvent.STATUS_CODE)) && (h(Fragment, { key: '2632cec30c6af959cf5c71120b72645ea98b206d' }, h("div", { key: 'f8afd13fb5ce211f7e15558fbeea1eb17d982332', class: `bookingEventDragHandle leftSide ${!this.isNewEvent() && hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 'skewedLeft' : ''}
            ${!this.isNewEvent() && hooks(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)) ? 'skewedRight' : ''}`, onTouchStart: event => this.startDragging(event, 'leftSide'), onMouseDown: event => this.startDragging(event, 'leftSide') }), h("div", { key: '79e120d38b2c66b402a1ec503702d09f82576530', class: `bookingEventDragHandle rightSide ${!this.isNewEvent() && hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 'skewedLeft' : ''}
              ${!this.isNewEvent() && hooks(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)) ? 'skewedRight' : ''}`, onTouchStart: event => this.startDragging(event, 'rightSide'), onMouseDown: event => this.startDragging(event, 'rightSide') }))), this.showInfoPopup ? (h("igl-booking-event-hover", { is_vacation_rental: this.is_vacation_rental, countries: this.countries, currency: this.currency, class: "top", bookingEvent: this.bookingEvent, bubbleInfoTop: this.bubbleInfoTopSide, style: this.calculateHoverPosition() })) : null));
    }
    get element() { return getElement(this); }
};
IglBookingEvent.style = IglBookingEventStyle0;

const iglCalBodyCss = ".sc-igl-cal-body-h{display:block}.bodyContainer.sc-igl-cal-body{position:relative}.roomRow.sc-igl-cal-body{width:max-content}.roomRow.sc-igl-cal-body:first-child{margin-top:80px}.categoryName.sc-igl-cal-body{font-weight:bold;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.cellData.disabled.sc-igl-cal-body{background:rgba(153, 153, 153, 10%);cursor:not-allowed}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body{cursor:pointer;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body:hover{background:#e0e0e0}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body:hover[data-hk-enabled='false']{background:white;cursor:default}.cellData.sc-igl-cal-body{width:58px;height:30px;display:inline-grid;border-top:1px solid #e0e0e0;border-left:1px solid #e0e0e0;vertical-align:top}.cellData.sc-igl-cal-body:nth-child(2){border-left:0px}.cellData.sc-igl-cal-body:last-child{border-right:1px solid rgba(186, 191, 199, 0.5)}.roomHeaderCell.sc-igl-cal-body{position:-webkit-sticky;position:sticky;left:0;background:#fff;border-right:1px solid #ccc;width:170px;z-index:1}.currentDay.sc-igl-cal-body{background-color:#e3f3fa}.dragOverHighlight.sc-igl-cal-body{background-color:#f5f5dc !important}.selectedDay.sc-igl-cal-body{background-color:#f9f9c9 !important}.categoryTitle.sc-igl-cal-body{grid-template-columns:1fr 20px;padding-left:10px;cursor:pointer;height:40px;font-size:0.9em}.categoryTitle.sc-igl-cal-body>.sc-igl-cal-body:nth-child(1){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.roomTitle.sc-igl-cal-body{padding-left:20px;font-size:0.9em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.roomTitle.sc-igl-cal-body>.sc-igl-cal-body:nth-child(1){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.roomTitle.pl10.sc-igl-cal-body{padding-left:10px}.categoryPriceColumn.sc-igl-cal-body{align-items:center;height:40px;-webkit-user-select:none;user-select:none}.bookingEventsContainer.sc-igl-cal-body{position:absolute;top:0;left:0}";
const IglCalBodyStyle0 = iglCalBodyCss;

const IglCalBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.addBookingDatasEvent = createEvent(this, "addBookingDatasEvent", 7);
        this.showBookingPopup = createEvent(this, "showBookingPopup", 7);
        this.scrollPageToRoom = createEvent(this, "scrollPageToRoom", 7);
        this.dragOverElement = '';
        this.renderAgain = false;
        this.selectedRooms = {};
        this.fromRoomId = -1;
        this.currentDate = new Date();
        this.housekeepingService = new HouseKeepingService();
        this.bookingMap = new Map();
        this.interactiveTitle = [];
        this.dayRateMap = new Map();
    }
    componentWillLoad() {
        this.currentDate.setHours(0, 0, 0, 0);
        this.bookingMap = this.getBookingMap(this.getBookingData());
        console.log(this.bookingMap);
        calendar_dates.days.forEach(day => {
            this.dayRateMap.set(day.day, day.rate);
        });
    }
    handleCalendarDataChange() {
        this.bookingMap = this.getBookingMap(this.getBookingData());
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
            NAME: h("span", null, "\u00A0"),
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
            TITLE: locales.entries.Lcz_NewBookingFor,
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
        this.newEvent.BLOCK_DATES_TITLE = `${locales.entries.Lcz_BlockDatesFor} ${popupTitle}`;
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
                // create bar;
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
        const today = hooks().startOf('day');
        for (const booking of bookings) {
            const fromDate = hooks(booking.FROM_DATE, 'YYYY-MM-DD').startOf('day');
            const toDate = hooks(booking.TO_DATE, 'YYYY-MM-DD').startOf('day');
            // Check if today is between fromDate and toDate, inclusive.
            if (today.isSameOrAfter(fromDate) && today.isSameOrBefore(toDate)) {
                if (!bookingMap.has(booking.PR_ID)) {
                    bookingMap.set(booking.PR_ID, booking.BOOKING_NUMBER);
                }
                else {
                    if (compareTime(hooks().toDate(), createDateWithOffsetAndHour((_a = calendar_data.checkin_checkout_hours) === null || _a === void 0 ? void 0 : _a.offset, (_b = calendar_data.checkin_checkout_hours) === null || _b === void 0 ? void 0 : _b.hour))) {
                        bookingMap.set(booking.PR_ID, booking.BOOKING_NUMBER);
                    }
                }
            }
        }
        return bookingMap;
    }
    getGeneralCategoryDayColumns(addClass, isCategory = false, index) {
        return calendar_dates.days.map(dayInfo => {
            return (h("div", { class: `cellData  font-weight-bold categoryPriceColumn ${addClass + '_' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''}` }, isCategory ? (h("span", { class: 'categoryName' }, dayInfo.rate[index].exposed_inventory.rts)) : ('')));
        });
    }
    getGeneralRoomDayColumns(roomId, roomCategory, roomName, index) {
        // onDragOver={event => this.handleDragOver(event)} onDrop={event => this.handleDrop(event, addClass+"_"+dayInfo.day)}
        return this.calendarData.days.map(dayInfo => {
            var _a;
            const formattedDate = hooks(dayInfo.currentDate).format('YYYY-MM-DD');
            const isDisabled = (_a = calendar_dates.days.find(e => e.day === formattedDate)) === null || _a === void 0 ? void 0 : _a.rate[index].exposed_inventory.rts;
            return (h("div", { class: `cellData ${isDisabled ? 'disabled' : ''} ${'room_' + roomId + '_' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''} ${this.dragOverElement === roomId + '_' + dayInfo.day ? 'dragOverHighlight' : ''} ${this.selectedRooms.hasOwnProperty(this.getSelectedCellRefName(roomId, dayInfo)) ? 'selectedDay' : ''}`, onClick: () => {
                    if (isDisabled) {
                        return;
                    }
                    this.clickCell(roomId, dayInfo, roomCategory);
                }, "data-date": formattedDate, "data-room-name": roomName }));
        });
    }
    toggleCategory(roomCategory) {
        roomCategory.expanded = !roomCategory.expanded;
        this.renderElement();
    }
    getRoomCategoryRow(roomCategory, index) {
        if (this.getTotalPhysicalRooms(roomCategory) <= 1 || !roomCategory.is_active) {
            return null;
        }
        return (h("div", { class: "roomRow" }, h("div", { class: `cellData text-left align-items-center roomHeaderCell categoryTitle ${'category_' + this.getCategoryId(roomCategory)}`, onClick: () => this.toggleCategory(roomCategory) }, h("div", { class: 'categoryName' }, h("ir-interactive-title", { popoverTitle: this.getCategoryName(roomCategory) })), roomCategory.expanded ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 14, width: 14 }, h("path", { fill: "#6b6f82", d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))) : (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", height: 14, width: 14 }, h("path", { fill: "#6b6f82", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))), this.getGeneralCategoryDayColumns('category_' + this.getCategoryId(roomCategory), true, index)));
    }
    /**
     * Renders a list of active rooms for an expanded room category. Returns an array of JSX elements, including headers and day columns, or an empty array if the category is collapsed or contains no active rooms.
     *
     * @param {RoomCategory} roomCategory - The category containing room details.
     * @returns {JSX.Element[]} - JSX elements for the active rooms or an empty array.
     */
    getRoomsByCategory(roomCategory, index) {
        var _a;
        // Check accordion is expanded.
        if (!roomCategory.expanded) {
            return [];
        }
        return (_a = this.getCategoryRooms(roomCategory)) === null || _a === void 0 ? void 0 : _a.map(room => {
            if (!room.is_active) {
                return null;
            }
            return (h("div", { class: "roomRow" }, h("div", { class: `cellData room text-left align-items-center roomHeaderCell  roomTitle ${this.getTotalPhysicalRooms(roomCategory) <= 1 ? 'pl10' : ''} ${'room_' + this.getRoomId(room)}`, "data-hk-enabled": String(calendar_data.housekeeping_enabled), "data-room": this.getRoomId(room), onClick: () => {
                    if (!calendar_data.housekeeping_enabled) {
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
                } }, h("ir-interactive-title", { ref: el => {
                    if (el)
                        this.interactiveTitle[room.id] = el;
                }, style: room.hk_status === '003' && { '--dot-color': '#999999' }, hkStatus: calendar_data.housekeeping_enabled && room.hk_status !== '001', popoverTitle: this.getTotalPhysicalRooms(roomCategory) <= 1 ? this.getCategoryName(roomCategory) : this.getRoomName(room) })), this.getGeneralRoomDayColumns(this.getRoomId(room), roomCategory, room.name, index)));
        });
    }
    getRoomRows() {
        var _a;
        return (_a = this.calendarData.roomsInfo) === null || _a === void 0 ? void 0 : _a.map((roomCategory, index) => {
            if (roomCategory.is_active) {
                return [this.getRoomCategoryRow(roomCategory, index), this.getRoomsByCategory(roomCategory, index)];
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
        // onDragStart={event => this.handleDragStart(event)} draggable={true}
        return (h(Host, { key: 'ea7308be208c0d9052624a120785a9ba0cd223eb' }, h("div", { key: 'f5adbfe17b25b8a7d58c1be752394d58f519b293', class: "bodyContainer" }, this.getRoomRows(), h("div", { key: '1dcd66088c958bf154cac92d65ff4e7d3fd12d1c', class: "bookingEventsContainer preventPageScroll" }, (_a = this.getBookingData()) === null || _a === void 0 ? void 0 : _a.map(bookingEvent => {
            var _a, _b, _c;
            return (h("igl-booking-event", { "data-testid": `booking_${bookingEvent.BOOKING_NUMBER}`, "data-room-name": (_c = (_b = (_a = bookingEvent.roomsInfo) === null || _a === void 0 ? void 0 : _a.find(r => r.id === bookingEvent.RATE_TYPE)) === null || _b === void 0 ? void 0 : _b.physicalrooms.find(r => r.id === bookingEvent.PR_ID)) === null || _c === void 0 ? void 0 : _c.name, language: this.language, is_vacation_rental: this.calendarData.is_vacation_rental, countries: this.countries, currency: this.currency, "data-component-id": bookingEvent.ID, bookingEvent: bookingEvent, allBookingEvents: this.getBookingData() }));
        }))), h("ir-modal", { key: '81b72c7f4e4b96773a3c05569ab8860cba46f404', ref: el => (this.hkModal = el), leftBtnText: (_b = locales === null || locales === void 0 ? void 0 : locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_Cancel, rightBtnText: (_c = locales === null || locales === void 0 ? void 0 : locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_Update, modalBody: this.renderModalBody(), onConfirmModal: this.confirmHousekeepingUpdate.bind(this), autoClose: false, isLoading: this.isLoading, onCancelModal: e => {
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
        return (h("p", null, "Update unit ", (_a = this.selectedRoom) === null || _a === void 0 ? void 0 :
            _a.name, " to ", h("b", null, ((_b = this.selectedRoom) === null || _b === void 0 ? void 0 : _b.hk_status) === '001' ? 'Dirty' : 'Clean', "?"))
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
    static get watchers() { return {
        "calendarData": ["handleCalendarDataChange"]
    }; }
};
IglCalBody.style = IglCalBodyStyle0;

const iglCalFooterCss = ".sc-igl-cal-footer-h{display:block;position:sticky;bottom:0;width:max-content;z-index:3}.footerCell.sc-igl-cal-footer{display:-moz-inline-grid;display:-ms-inline-grid;display:inline-grid;position:-webkit-sticky;position:sticky;bottom:0;width:58px;height:40px;background:#fff;vertical-align:top;border-top:1px solid #e0e0e0}.bottomLeftCell.sc-igl-cal-footer{left:-1px;z-index:2;width:170px;text-align:left;padding-left:15px;color:#000000}.footerCell.sc-igl-cal-footer i.sc-igl-cal-footer{margin-right:5px}.legendBtn.sc-igl-cal-footer{color:#41bff3;cursor:pointer}.isOnline.sc-igl-cal-footer i.sc-igl-cal-footer{color:#2f9c3f;font-weight:bold}.isOffline.sc-igl-cal-footer i.sc-igl-cal-footer{font-weight:bold}.isOffline.sc-igl-cal-footer{color:#a40000}.dayTitle.sc-igl-cal-footer{font-size:0.8em;font-weight:600;display:grid;user-select:none}.currentDay.sc-igl-cal-footer .dayTitle.sc-igl-cal-footer{font-weight:bold}.currentDay.sc-igl-cal-footer{background-color:#e3f3fa}.dayCapacityPercent.sc-igl-cal-footer{font-size:0.75em}.badge-pill.sc-igl-cal-footer{padding-left:1em;padding-right:1em;font-size:0.7em;margin-bottom:2px}";
const IglCalFooterStyle0 = iglCalFooterCss;

const IglCalFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.optionEvent = createEvent(this, "optionEvent", 7);
    }
    // private isOnline:boolean = false;
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: 'a70d2ea01fe58addea82776d1337e070feae64b1', class: "footerContainer" }, h("div", { key: 'f8a949d0c6fc4a16fbbe35676798098a76d9644c', class: "footerCell bottomLeftCell align-items-center preventPageScroll" }, h("div", { key: '2d6442f7f93e7b00a09a934173c2a06daf2e9ef1', class: "legendBtn", onClick: () => this.handleOptionEvent('showLegend') }, h("i", { key: '15b6a30b99337eae35d10fcc58af5d35dfcd1cda', class: "la la-square" }), h("u", { key: 'a8ab156218827da88324e1cd033455818b422438' }, locales.entries.Lcz_Legend), h("span", { key: '37055cd9b0d6a826da4f727fe405da1cd9f22903' }, " - v1.007"))), this.calendarData.days.map(dayInfo => (h("div", { class: "footerCell align-items-center" }, h("div", { class: `dayTitle full-height align-items-center ${dayInfo.day === this.today || this.highlightedDate === dayInfo.day ? 'currentDay' : ''}` }, dayInfo.dayDisplayName))))));
    }
};
IglCalFooter.style = IglCalFooterStyle0;

const iglCalHeaderCss = ".sc-igl-cal-header-h{display:block;position:absolute;top:0;height:100%}.svg-icon.sc-igl-cal-header{height:20px;width:20px}.darkGrey.sc-igl-cal-header{background:#ececec}.btn.sc-igl-cal-header{pointer-events:auto}.stickyCell.sc-igl-cal-header{display:-ms-inline-grid;display:-moz-inline-grid;display:inline-grid;position:-webkit-sticky;position:sticky;top:0px;height:82px;display:inline-block;vertical-align:top;z-index:2}.headersContainer.sc-igl-cal-header{background-color:#ffffff}.headerCell.sc-igl-cal-header{display:inline-grid;width:58px;height:58px;vertical-align:top;background-color:#ffffff;border-bottom:1px solid #e0e0e0}.monthsContainer.sc-igl-cal-header{height:20px;background-color:#ffffff;margin-bottom:0.2em}.monthCell.sc-igl-cal-header{display:inline-grid;height:20px;background-color:#ececec;border-right:1px solid #c7c7c7;vertical-align:top}.monthCell.sc-igl-cal-header:nth-child(odd){background-color:#dddddd}.monthTitle.sc-igl-cal-header{overflow:hidden;text-overflow:ellipsis;font-size:0.9em;text-transform:uppercase;font-weight:bold;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.topLeftCell.sc-igl-cal-header{left:0px;z-index:3;width:170px;background-color:#ffffff;display:-ms-inline-grid;display:-moz-inline-grid;display:inline-grid}.datePickerHidden.sc-igl-cal-header{position:absolute;height:100%;width:100%;opacity:0;cursor:pointer;z-index:1}.date_btn.sc-igl-cal-header{cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative}.date_btn.sc-igl-cal-header:hover{background:#f6f6f6;border-radius:0.3rem}.caledarBtns.sc-igl-cal-header{position:relative;cursor:pointer;padding:0.4rem}.caledarBtns.sc-igl-cal-header:hover{background-color:#f6f6f6}.dayTitle.sc-igl-cal-header{font-size:0.8em;font-weight:600;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.currentDay.sc-igl-cal-header .dayTitle.sc-igl-cal-header{font-weight:bold}.currentDay.sc-igl-cal-header{background-color:#e3f3fa}.dayCapacityPercent.sc-igl-cal-header{font-size:0.75em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.badge-pill.sc-igl-cal-header{padding:3px 1em;font-size:0.8em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.pointer.sc-igl-cal-header{cursor:pointer}.searchContiner.sc-igl-cal-header{padding-left:10px;padding-right:10px}.searchListContainer.sc-igl-cal-header{background:#fff;border:1px solid #ccc;border-bottom:none}.searchListItem.sc-igl-cal-header{background:white;border-bottom:1px solid #ccc;padding-left:8px}.badge-light.sc-igl-cal-header{background-color:#999999;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.min-width-full.sc-igl-cal-header{min-width:100%}";
const IglCalHeaderStyle0 = iglCalHeaderCss;

const IglCalHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.optionEvent = createEvent(this, "optionEvent", 7);
        this.gotoRoomEvent = createEvent(this, "gotoRoomEvent", 7);
        this.gotoToBeAssignedDate = createEvent(this, "gotoToBeAssignedDate", 7);
        this.renderAgain = false;
        this.unassignedRoomsNumber = {};
        this.searchValue = '';
        this.searchList = [];
        this.roomsList = [];
        this.toBeAssignedService = new ToBeAssignedService();
    }
    componentWillLoad() {
        try {
            this.initializeRoomsList();
            if (!this.calendarData.is_vacation_rental) {
                handleUnAssignedDatesChange('unassigned_dates', newValue => {
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
                const selectedDate = hooks(endDate).format('D_M_YYYY');
                if (data[endDate]) {
                    const result = await this.toBeAssignedService.getUnassignedRooms({ from_date: this.calendarData.from_date, to_date: this.calendarData.to_date }, this.propertyid, dateToFormattedString(new Date(endDate)), this.calendarData.roomsInfo, this.calendarData.formattedLegendData);
                    this.unassignedRoomsNumber[selectedDate] = result.length;
                }
                else if (this.unassignedRoomsNumber[selectedDate]) {
                    const res = this.unassignedRoomsNumber[selectedDate] - 1;
                    this.unassignedRoomsNumber[selectedDate] = res < 0 ? 0 : res;
                }
                const newEndDate = hooks(endDate).add(1, 'days').toDate();
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
            const selectedDate = hooks(endDate).format('D_M_YYYY');
            this.unassignedRoomsNumber[selectedDate] = this.unassignedRoomsNumber[selectedDate] - 1;
            endDate = hooks(endDate).add(1, 'days').toDate().getTime();
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
            TITLE: locales.entries.Lcz_NewBooking,
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
        return (h(Host, { key: 'fc3034f2e83052637f61d0e22ae561eb661f0ad7' }, h("div", { key: '7979477335a8cb09afa36510e5b27effa6e943a5', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, h("div", { key: '30e0c5b5a31a7029fca3afce2286aaf2a3b6c110', class: "row justify-content-around no-gutters" }, !this.calendarData.is_vacation_rental && (h("ir-button", { key: '23d1c1dd135629f4dff16cf26ddc8ff6d588b3ef', variant: "icon", icon_name: "server", style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.5rem' }), "data-toggle": "tooltip", "data-placement": "bottom", title: locales.entries.Lcz_UnassignedUnitsTooltip, onClickHandler: () => this.handleOptionEvent('showAssigned'), btn_styles: "caledarBtns", visibleBackgroundOnHover: true })), h("ir-date-picker", { key: 'a60efe681db9bc3eb599b544e8fd7082c51ce23d', minDate: hooks().add(-2, 'months').startOf('month').format('YYYY-MM-DD'),
            // autoApply
            // singleDatePicker
            onDateChanged: evt => {
                console.log('evt', evt);
                this.handleDateSelect(evt);
            },
            // class="datePickerHidden"
            class: 'date_btn', title: locales.entries.Lcz_Navigate, "data-toggle": "tooltip", "data-placement": "bottom" }, h("ir-button", { key: '78a6f9cbef10adcb72e5ed36c2f768c60ee87060', slot: "trigger", btn_styles: "caledarBtns", variant: "icon", icon_name: "calendar", style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.5rem' }), onClickHandler: () => this.handleOptionEvent('calendar'), visibleBackgroundOnHover: true, ref: el => (this.dateRef = el) })), h("ir-button", { key: '411b58d7e6849bf2baf16131f1f2d736a69ce1d9', variant: "icon", btn_styles: "caledarBtns", class: 'pointer', icon_name: "clock", visibleBackgroundOnHover: true, style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.5rem' }), "data-toggle": "tooltip", "data-placement": "bottom", title: locales.entries.Lcz_Today, onClickHandler: () => this.handleOptionEvent('gotoToday') }), h("ir-button", { key: 'b6b8d67e537472d2a8b9aaf3ecc07a52b3ad959a', variant: "icon", btn_styles: "caledarBtns", icon_name: "plus", "data-toggle": "tooltip", "data-placement": "bottom", "data-testid": "new_booking_btn", title: locales.entries.Lcz_CreateNewBooking, visibleBackgroundOnHover: true, style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.5rem' }), onClickHandler: () => this.handleOptionEvent('add', this.getNewBookingModel()) })), h("div", { key: '10b1cb7604665b5bf307f7b445998a51a308d0ac', class: "row justify-content-around no-gutters searchContiner" }, h("fieldset", { key: 'c3e7fd03cae70cc19c9f1c9fe1260563715240e0', class: `form-group position-relative ${this.searchValue != '' ? 'show' : ''}` }, h("input", { key: '3eb97dea0e823582c70a906e2a6988bdda54b01a', type: "text", class: "form-control form-control-sm input-sm", id: "iconLeft7", value: this.searchValue, placeholder: locales.entries.Lcz_FindUnit, onInput: event => this.handleFilterRooms(event) }), this.searchValue !== '' ? (h("div", { class: "form-control-position pointer", onClick: () => this.handleClearSearch(), "data-toggle": "tooltip", "data-placement": "top", "data-original-title": "Clear Selection" }, h("i", { class: "la la-close font-small-4" }))) : null, this.searchList.length ? (h("div", { class: "position-absolute searchListContainer dropdown-menu dropdown-menu-left min-width-full" }, this.searchList.map(room => (h("div", { class: "searchListItem1 dropdown-item px-1 text-left pointer", onClick: () => this.handleScrollToRoom(room.id) }, room.name))))) : null))), h("div", { key: 'f199f2966a2e597a1c85355fb6c4f06746a79120', class: "stickyCell headersContainer" }, h("div", { key: '86b3ca54d1d7c0c309240dadefc6b24927b8061a', class: "monthsContainer" }, this.calendarData.monthsInfo.map(monthInfo => (h("div", { class: "monthCell", style: { width: monthInfo.daysCount * 58 + 'px' } }, h("div", { class: "monthTitle" }, monthInfo.monthName))))), this.calendarData.days.map(dayInfo => (h("div", { class: `headerCell align-items-center ${'day-' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''}`, "data-day": dayInfo.day }, !this.calendarData.is_vacation_rental && (h("div", { class: "preventPageScroll" }, h("span", { class: `badge badge-${this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr !== 0 ? 'info pointer' : 'light'} badge-pill`, onClick: () => this.showToBeAssigned(dayInfo) }, this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr))), h("div", { class: "dayTitle" }, dayInfo.dayDisplayName), h("div", { class: "dayCapacityPercent" }, dayInfo.occupancy, "%")))))));
    }
    static get watchers() { return {
        "unassignedDates": ["handleCalendarDataChanged"]
    }; }
};
IglCalHeader.style = IglCalHeaderStyle0;

const iglLegendsCss = ".sc-igl-legends-h{display:block}.legendHeader.sc-igl-legends{font-weight:500;letter-spacing:0.05rem;font-size:1.12rem;padding-top:5px;margin-bottom:1rem}.legendCloseBtn.sc-igl-legends{position:absolute;top:50%;right:0;cursor:pointer;font-size:1.75em;line-height:1em;padding:0.4rem;display:flex;align-items:center;justify-content:center;border-radius:3px;transform:translateY(-50%)}.legendCloseBtn.sc-igl-legends:hover{background-color:#f6f6f6}.stickyHeader.sc-igl-legends{position:-webkit-sticky;position:sticky;top:0;background-color:#ffffff;z-index:1}.legendRow.sc-igl-legends{position:relative;vertical-align:middle;margin-bottom:0.3rem}.legendRow.sc-igl-legends div.sc-igl-legends{display:inline-block;vertical-align:middle}.legend_skew.sc-igl-legends,.legend_skew-bordered.sc-igl-legends,.legend_skewsplit.sc-igl-legends{transform:skew(-30deg);width:15px;height:16px}.legend_skew-bordered.sc-igl-legends{border:1px solid black}.legend_circle.sc-igl-legends{border-radius:100%;width:10px;height:10px;margin:3px 3px 3px 2px}.legend_skewsplit.sc-igl-legends{border-right:2px solid #000000}.headerCell.sc-igl-legends .blueColor.sc-igl-legends{background-color:#31bef1}.greenColor.sc-igl-legends{background-color:#45b16d}.yellowColor.sc-igl-legends{background-color:#f4d552}.greyColor.sc-igl-legends{background-color:#a0a0a0}.redColor.sc-igl-legends{background-color:#f34752}.pinkColor.sc-igl-legends{background-color:#f9b4b7}.legendCalendar.sc-igl-legends .legendRow.sc-igl-legends{margin-bottom:0}.legendCalendar.sc-igl-legends .legendRow.sc-igl-legends:first-child .legendCal.sc-igl-legends{background-color:#ececec}.legendCalendar.sc-igl-legends .legendRow.sc-igl-legends div.sc-igl-legends{display:inline-block;vertical-align:middle;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.total-availability.sc-igl-legends{font-size:1em !important}.legendCalendar.sc-igl-legends .legendCal.sc-igl-legends{width:80px;height:25px;text-align:center;display:inline-grid !important;align-content:center;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendCalendar.sc-igl-legends .legendCal.sc-igl-legends .badge.sc-igl-legends{margin-top:0.2rem;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendCalendar.sc-igl-legends .legendCal.legendCal-h2.sc-igl-legends{height:40px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.br-t.sc-igl-legends{border-top:1px solid #a0a0a0}.br-s.sc-igl-legends{border-left:1px solid #a0a0a0;border-right:1px solid #a0a0a0}.br-bt.sc-igl-legends{border-bottom:1px solid #a0a0a0}.highphenLegend.sc-igl-legends{font-size:0.9em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.highphenLegend.sc-igl-legends::before{width:12px;height:0.5px;content:' ';background-color:#000000;vertical-align:middle;display:inline-block;margin-left:5px;margin-right:5px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.badge-pill.sc-igl-legends{padding:3px 1em;font-size:0.8em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.headerCell.sc-igl-legends{width:70px;display:flex;align-items:center;justify-content:center}.dayTitle.sc-igl-legends{font-size:0.8em;font-weight:600;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.dayCapacityPercent.sc-igl-legends{font-size:0.75em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}";
const IglLegendsStyle0 = iglLegendsCss;

const IglLegends = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.optionEvent = createEvent(this, "optionEvent", 7);
    }
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: 'e1ce041cc1ac885d5026b2a35194635e9422d978', class: "legendContainer pr-1 text-left" }, h("div", { key: '882ea80551f18e16d9bc59bc7e9d50427470abcc', class: 'w-full' }, h("div", { key: '61dd618de8398c57ad8aa8e82a4e41098c7dd1d9', class: 'w-full' }, h("div", { key: '6cc098cddbe15f6b863fd6c892528dfca5698936', class: "stickyHeader pt-1 " }, h("p", { key: 'c687057ae10b151fb4786dc88e4d6c4a698d91f0', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: '72f12670c7c003b24462ab170a3d3fe0694649aa', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: 'ffc01566f2a9d7560e654d36730a039253f3b609', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'bd527ef8faa77a53d00c72b880190fb1a0d3b553', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '14489453ee412d3dd02a96e9a3f7663d8b2aa27c' })), h("div", { key: '13d98b348b6fbf999a10a7e6f8edfb30a0a23206', class: "mt-2 pl-1" }, this.legendData.map(legendInfo => (h("div", { class: "legendRow " }, h("div", { class: `legend_${legendInfo.design} mr-1`, style: { backgroundColor: legendInfo.color } }), h("span", { class: "font-small-3" }, legendInfo.name))))), h("hr", { key: '7468164ce23e2ded9a244b9586abd0ec459665c5' }), h("div", { key: 'e8aa9295136b48efb9583a201508fcd9ea5bbd01', class: "mt-2" }, h("div", { key: '71e4b6e834c4bd6ff9642af29339096d235b9ea7', class: "legendCalendar" }, h("div", { key: 'a15dc9818cb1e2b37085a138dedb269db9a961f6', class: "legendRow align-items-center" }, h("div", { key: '9f17821980bb6d3831e84a480ba0fc74c5db0839', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '61d9c0216f25054e1648f89ef6bb0f00bb4eb05e' }, "MAR 2022")), h("div", { key: '8c9d56564d23958ffcd182a70f6e7bc4866a392f', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '9ac744560e8cc95bc7fb04a0b761dbabecc71a9d', class: "legendRow" }, h("div", { key: 'f9a75578773b34015e00a1525de844d7d0ef6fb7', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: 'a7e455b4c1d49237a8cf58a70666930cf128b604', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: '8c4536beea66e132b249214c7030ce5ee63d7665', class: "highphenLegend" }, h("div", { key: 'f9e04e681c83785492a3530b5725092b6ae43d6e' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '5bfdda7fc83d6e6480a44e28752c03d18eaf44bf', class: "legendRow" }, h("div", { key: 'f858845fbabcad79e026955e319b2161c0325979', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'a8ab4b381e766bd9383ce739325313a27c03f304', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '9e595fbc5b2e827ad96358e9511f466259fb3d77', class: "legendRow" }, h("div", { key: '3032cb2ba50f6d20424836b054c7d81d2104f6ac', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '84e8f6b5ef374d2be4ab4655a9f39224bb354e20', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'c181700514d2b75654760105babd3803a4b90dab', class: "legendRow" }, h("div", { key: '2a3435485a7f356df8465c3b01eee9dff955449e', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '06063900c9a14fe104cf988a912c6236bac3309b', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
    }
};
IglLegends.style = IglLegendsStyle0;

const iglTbaCategoryViewCss = ".sc-igl-tba-category-view-h{display:block}";
const IglTbaCategoryViewStyle0 = iglTbaCategoryViewCss;

const IglTbaCategoryView = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.assignUnitEvent = createEvent(this, "assignUnitEvent", 7);
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
        return eventDatas.map((eventData, ind) => (h("igl-tba-booking-view", { calendarData: this.calendarData, selectedDate: this.selectedDate, eventData: eventData, categoriesData: this.categoriesData, categoryId: categoryId, categoryIndex: this.categoryIndex, eventIndex: ind, onAssignRoomEvent: evt => this.handleAssignRoomEvent(evt) })));
    }
    renderView() {
        this.renderAgain = !this.renderAgain;
    }
    render() {
        var _a;
        return (h(Host, { key: 'c8fd9064750bc634eb188e19581c29084a962f91' }, h("div", { key: '5eddc517a57efac801e01681c44d1e27b2784974', class: "sectionContainer" }, h("div", { key: '78686ae6ef5b5946b26cbcff146aa8099d0460fc', class: "font-weight-bold mt-1 font-small-3" }, (_a = this.categoriesData[this.categoryId]) === null || _a === void 0 ? void 0 : _a.name), this.getEventView(this.categoryId, this.eventDatas))));
    }
};
IglTbaCategoryView.style = IglTbaCategoryViewStyle0;

const iglToBeAssignedCss = ".sc-igl-to-be-assigned-h{display:block}.custom-dropdown.sc-igl-to-be-assigned{cursor:pointer;padding:5px 10px;width:min-content;margin-left:auto;margin-right:auto}.dropdown-toggle.sc-igl-to-be-assigned{all:unset;display:flex;width:max-content;align-items:center;gap:10px}.close_btn_style.sc-igl-to-be-assigned{padding:0.4rem}.close_btn_style.sc-igl-to-be-assigned:hover{background-color:#f6f6f6}.dropdown-menu.sc-igl-to-be-assigned{max-height:250px;overflow-y:auto}.tobeAssignedHeader.sc-igl-to-be-assigned{font-weight:500;letter-spacing:0.05rem;font-size:1.12rem;padding:0;margin:0}.assignment_header.sc-igl-to-be-assigned{display:flex;align-items:center;justify-content:space-between;padding-top:5px;margin-bottom:1rem}.dropdown-toggle.sc-igl-to-be-assigned::after{content:none;display:none}.dropdown-toggle.sc-igl-to-be-assigned .caret-icon.sc-igl-to-be-assigned{transition:transform 0.2s ease}.show.sc-igl-to-be-assigned .caret-icon.sc-igl-to-be-assigned{transform:rotate(-180deg)}.stickyHeader.sc-igl-to-be-assigned{position:-webkit-sticky;position:sticky;top:0;background-color:#ffffff;z-index:1}.pointer.sc-igl-to-be-assigned{cursor:pointer}.dots.sc-igl-to-be-assigned{display:flex;align-items:center;justify-content:center;margin:0 3px;padding:0}.dot.sc-igl-to-be-assigned{width:5px;height:5px;margin:5px 4px 0;background-color:#6b6f82;border-radius:50%;animation:dotFlashing 1s infinite linear alternate}.dot.sc-igl-to-be-assigned:nth-child(2){animation-delay:0.2s}.dot.sc-igl-to-be-assigned:nth-child(3){animation-delay:0.4s}@keyframes dotFlashing{0%{opacity:0}50%,100%{opacity:1}}";
const IglToBeAssignedStyle0 = iglToBeAssignedCss;

const IglToBeAssigned = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.optionEvent = createEvent(this, "optionEvent", 7);
        this.reduceAvailableUnitEvent = createEvent(this, "reduceAvailableUnitEvent", 7);
        this.showBookingPopup = createEvent(this, "showBookingPopup", 7);
        this.addToBeAssignedEvent = createEvent(this, "addToBeAssignedEvent", 7);
        this.highlightToBeAssignedBookingEvent = createEvent(this, "highlightToBeAssignedBookingEvent", 7);
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
        this.toBeAssignedService = new ToBeAssignedService();
    }
    componentWillLoad() {
        this.reArrangeData();
        this.loadingMessage = locales.entries.Lcz_FetchingUnAssignedUnits;
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
            endDate = hooks(endDate).add(1, 'days').toDate().getTime();
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
            const result = await this.toBeAssignedService.getUnassignedRooms({ from_date: calendarData.from_date, to_date: calendarData.to_date }, this.propertyid, dateToFormattedString(new Date(+key)), calendarData.roomsInfo, calendarData.formattedLegendData);
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
            this.unassignedDates = getUnassignedDates();
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
            return Object.entries(this.data[this.selectedDate].categories).map(([id, eventDatas], ind) => (h("igl-tba-category-view", { calendarData: this.calendarData, selectedDate: this.selectedDate, categoryId: id, categoryIndex: ind, categoriesData: this.categoriesData, eventDatas: eventDatas, onAssignUnitEvent: evt => this.handleAssignUnit(evt) })));
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
        return (h(Host, { key: '3d92b2ef12045c4d5792bf9a702d0acab37077fc', class: "tobeAssignedContainer pr-1 text-left" }, h("div", { key: 'f4bf8998fcb31788ec99fe84f5429b011c8e34cd' }, h("div", { key: '65500238a3e01855b531eb7bc86ca75b972d9f1a' }, h("div", { key: '0418be40c7a67820c8ed769ebc570a40860aa388', class: "stickyHeader pt-1" }, h("div", { key: '52465f291b42d77158004c9dac62529dfae4d2e1', class: 'assignment_header' }, h("p", { key: 'd0b360a29c827d08fe94b71e16ad97870fcae1a9', class: "tobeAssignedHeader " }, locales.entries.Lcz_Assignments), h("ir-button", { key: '0efdf7a7c75e2ce43fc12344ed628e49b45d8df3', class: "close_btn", variant: "icon", btn_styles: "close_btn_style", icon_name: "double_caret_left", style: colorVariants.secondary, onClickHandler: () => this.handleOptionEvent('closeSideMenu'), visibleBackgroundOnHover: true })), h("hr", { key: 'c6b9280211c5590dc5aa605619eff15cadb28aff' }), Object.keys(this.data).length === 0 ? (h("p", null, locales.entries.Lcz_AllBookingsAreAssigned)) : this.isLoading ? (h("p", { class: "d-flex align-items-center" }, h("span", { class: "p-0" }, this.loadingMessage), h("div", { class: "dots" }, h("div", { class: "dot" }), h("div", { class: "dot" }), h("div", { class: "dot" })))) : (h(Fragment, null, this.orderedDatesList.length ? (h("div", { class: `custom-dropdown border border-light rounded text-center ` + (this.showDatesList ? 'show' : ''), id: "dropdownMenuButton", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, h("div", { class: 'dropdown-toggle' }, h("span", { class: "font-weight-bold" }, this.data[this.selectedDate].dateStr), h("svg", { class: 'caret-icon', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 14, width: 14 }, h("path", { fill: "#6b6f82", d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), h("div", { class: "dropdown-menu dropdown-menu-right full-width", "aria-labelledby": "dropdownMenuButton" }, (_a = this.orderedDatesList) === null || _a === void 0 ? void 0 : _a.map(ordDate => (h("div", { class: "dropdown-item pointer", onClick: () => this.showForDate(ordDate) }, this.data[ordDate].dateStr)))))) : (locales.entries.Lcz_AllBookingsAreAssigned)))), !this.isLoading && (h("div", { key: '1cc65a4857e251f45e22423fe9d2bed288e57bee', class: "scrollabledArea" }, this.orderedDatesList.length ? (Object.keys(this.data[this.selectedDate].categories).length ? (this.getCategoryView()) : (h("div", { class: "mt-1" }, locales.entries.Lcz_AllAssignForThisDay))) : null))))));
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
        registerInstance(this, hostRef);
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
    // initializePopover() {
    //   const titleElement = this.el.querySelector('.popover-title') as HTMLElement;
    //   if (titleElement) {
    //     const isOverflowing = titleElement.scrollWidth > titleElement.offsetWidth;
    //     if (isOverflowing) {
    //       this.croppedTitle = this.popoverTitle.slice(0, this.cropSize) + '...';
    //       this.croppedTitleEl.innerHTML = this.croppedTitle;
    //       $(titleElement).popover({
    //         trigger: 'hover',
    //         content: this.popoverTitle,
    //         placement: 'top',
    //       });
    //     } else {
    //       $(titleElement).popover('dispose');
    //     }
    //   }
    // }
    initializePopover() {
        const titleElement = this.el.querySelector('.popover-title');
        const iconElement = this.el.querySelector('.hk-dot');
        if (!titleElement || !this.croppedTitleEl) {
            return;
        }
        const containerWidth = titleElement.offsetWidth;
        const textWidth = this.croppedTitleEl.scrollWidth;
        const iconWidth = iconElement ? iconElement.offsetWidth : 0;
        const isOverflowing = textWidth + iconWidth > containerWidth;
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
    render() {
        return (h(Host, { key: '11480bf719e3788c1087e25dbea38b4019f0c4dc', style: { '--ir-popover-left': this.irPopoverLeft } }, h("p", { key: '180fc625cf2fb95d690eb41a0d8553d3f02ffdac', class: "popover-title", style: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            } }, h("span", { key: 'adf8f0da0f71b111af2786b6bf8cbbddad8e11a6', ref: el => (this.croppedTitleEl = el), class: "croppedTitle" }, this.croppedTitle), this.hkStatus && (h("div", { key: '81fbfcb21b6b7ae367cfbddbaaccd69302aaa7b5', title: "This unit is dirty", class: `hk-dot` }, h("svg", { key: '094a5c09d9907740dd7a7177c3cafc57576e00f5', xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512" }, h("path", { key: '0312c756642cf432a4f83aab03019521157566dc', fill: "currentColor", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" })))))));
    }
    get el() { return getElement(this); }
};
IrInteractiveTitle.style = IrInteractiveTitleStyle0;

const irRoomNightsCss = ".sc-ir-room-nights-h{display:block;box-sizing:border-box;margin:0;position:relative}.loading-container.sc-ir-room-nights{position:relative;height:100%;width:100%;display:flex;align-items:center;justify-content:center}.close-icon.sc-ir-room-nights{position:absolute;top:18px;right:33px;outline:none}.close.sc-ir-room-nights{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:0.5;padding:0;background-color:transparent;border:0;appearance:none}.card.sc-ir-room-nights{top:0;z-index:1000}.card-title.sc-ir-room-nights{border-bottom:1px solid #e4e5ec;width:100%}.irfontgreen.sc-ir-room-nights{color:#0e930e}.currency.sc-ir-room-nights{display:block;position:absolute;margin:0;padding:0;height:auto;left:10px}.rate-input.sc-ir-room-nights{font-size:14px;line-height:0;padding:0;height:0;border-left:0;border-radius:0.25rem !important}.rate-input-container.sc-ir-room-nights{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1}.new-currency.sc-ir-room-nights{color:#3b4781;border:1px solid #cacfe7;font-size:0.975rem;height:2rem;background:rgb(255, 255, 255);padding-right:0 !important;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.input-group-prepend.sc-ir-room-nights span[data-state='focus'].sc-ir-room-nights{border-color:var(--blue)}.input-group-prepend.sc-ir-room-nights span[data-disabled].sc-ir-room-nights{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.rateInputBorder.sc-ir-room-nights{padding-left:5px !important;padding-right:5px !important;border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}";
const IrRoomNightsStyle0 = irRoomNightsCss;

const sheetCss = ".sc-ir-room-nights-h{height:100%}.sheet-container.sc-ir-room-nights{display:flex !important;flex-direction:column !important;background:white;height:100% !important;gap:1rem}.sheet-footer.sc-ir-room-nights{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-room-nights{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-room-nights{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-room-nights{flex-direction:row;align-items:center}}";
const IrRoomNightsStyle1 = sheetCss;

const IrRoomNights = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeRoomNightsDialog = createEvent(this, "closeRoomNightsDialog", 7);
        this.rates = [];
        this.isLoading = false;
        this.initialLoading = false;
        this.inventory = null;
        this.isEndDateBeforeFromDate = false;
        this.defaultTotalNights = 0;
        this.isInputFocused = -1;
        this.dates = { from_date: new Date(), to_date: new Date() };
        this.bookingService = new BookingService();
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
            if (hooks(from_date, 'YYYY-MM-DD').isBefore(hooks(this.fromDate, 'YYYY-MM-DD'))) {
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
                if (hooks(this.toDate).add(-1, 'days').isSame(hooks(lastDay.date))) {
                    console.log('here1');
                    const amount = await this.fetchBookingAvailability(this.fromDate, this.selectedRoom.days[0].date, this.selectedRoom.rateplan.id);
                    const newDatesArr = getDaysArray(this.selectedRoom.days[0].date, this.fromDate);
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
                    const amount = await this.fetchBookingAvailability(this.bookingEvent.to_date, hooks(this.toDate, 'YYYY-MM-DD').format('YYYY-MM-DD'), this.selectedRoom.rateplan.id);
                    const newDatesArr = getDaysArray(lastDay.date, this.toDate);
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
    renderInputField(index, currency_symbol, day) {
        return (h("div", { class: "col-3 ml-1 position-relative  m-0 p-0 rate-input-container" }, h("ir-price-input", { value: day.amount > 0 ? day.amount.toString() : '', disabled: this.inventory === 0 || this.inventory === null, currency: currency_symbol, "aria-label": "rate", "aria-describedby": "rate cost", onTextChange: e => this.handleInput(e.detail, index) })));
    }
    renderReadOnlyField(currency_symbol, day) {
        return h("p", { class: "col-9 ml-1 m-0 p-0" }, `${currency_symbol}${Number(day.amount).toFixed(2)}`);
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
        return (h("div", { class: 'mt-2 m-0' }, (_a = this.rates) === null || _a === void 0 ? void 0 : _a.map((day, index) => (h("div", { class: 'row m-0 mt-1 align-items-center' }, h("p", { class: 'col-2 m-0 p-0' }, convertDatePrice(day.date)), this.renderRateFields(index, currency_symbol, day))))));
    }
    async handleRoomConfirmation() {
        try {
            this.isLoading = true;
            let oldRooms = [...this.bookingEvent.rooms];
            let selectedRoomIndex = oldRooms.findIndex(room => room.identifier === this.identifier);
            if (selectedRoomIndex === -1) {
                throw new Error('Invalid Pool');
            }
            oldRooms[selectedRoomIndex] = Object.assign(Object.assign({}, oldRooms[selectedRoomIndex]), { days: this.rates, to_date: hooks(this.dates.to_date).format('YYYY-MM-DD'), from_date: hooks(this.dates.from_date).format('YYYY-MM-DD') });
            const body = {
                assign_units: true,
                check_in: true,
                is_pms: true,
                is_direct: true,
                pickup_info: this.bookingEvent.pickup_info,
                extra_services: this.bookingEvent.extra_services,
                booking: {
                    booking_nbr: this.bookingNumber,
                    from_date: hooks(this.dates.from_date).format('YYYY-MM-DD'),
                    to_date: hooks(this.dates.to_date).format('YYYY-MM-DD'),
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
            return (h("div", { class: "loading-container" }, h("ir-loading-screen", null)));
        }
        return (h("div", { class: "sheet-container" }, h("ir-title", { class: "p-1 sheet-header", onCloseSideBar: () => this.closeRoomNightsDialog.emit({ type: 'cancel', pool: this.pool }), label: `${locales.entries.Lcz_AddingRoomNightsTo} ${(_b = (_a = this.selectedRoom) === null || _a === void 0 ? void 0 : _a.roomtype) === null || _b === void 0 ? void 0 : _b.name} ${((_c = this.selectedRoom) === null || _c === void 0 ? void 0 : _c.unit).name}`, displayContext: "sidebar" }), h("section", { class: 'text-left px-1 pt-0 sheet-body' }, h("p", { class: 'font-medium-1' }, `${locales.entries.Lcz_Booking}#`, " ", this.bookingNumber), this.initialLoading ? (h("p", { class: 'mt-2 text-secondary' }, locales.entries['Lcz_CheckingRoomAvailability '])) : (h(Fragment, null, h("p", { class: 'font-weight-bold font-medium-1' }, `${formatDate(hooks(this.dates.from_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')} - ${formatDate(hooks(this.dates.to_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')}`), h("p", { class: 'font-medium-1 mb-0' }, `${this.selectedRoom.rateplan.name}`, " ", this.selectedRoom.rateplan.is_non_refundable && h("span", { class: 'irfontgreen' }, locales.entries.Lcz_NonRefundable)), (this.inventory === 0 || this.inventory === null) && h("p", { class: "font-medium-1 text danger" }, locales.entries.Lcz_NoAvailabilityForAdditionalNights), this.selectedRoom.rateplan.custom_text && h("p", { class: 'text-secondary mt-0' }, this.selectedRoom.rateplan.custom_text), this.renderDates()))), h("section", { class: 'sheet-footer' }, h("ir-button", { btn_color: "secondary", btn_disabled: this.isLoading, text: locales === null || locales === void 0 ? void 0 : locales.entries.Lcz_Cancel, class: "full-width", btn_styles: "justify-content-center", onClickHandler: () => this.closeRoomNightsDialog.emit({ type: 'cancel', pool: this.pool }) }), this.inventory > 0 && this.inventory !== null && (h("ir-button", { isLoading: this.isLoading, text: locales === null || locales === void 0 ? void 0 : locales.entries.Lcz_Confirm, btn_disabled: this.isButtonDisabled(), class: "full-width", btn_styles: "justify-content-center", onClickHandler: this.handleRoomConfirmation.bind(this) })))));
    }
};
IrRoomNights.style = IrRoomNightsStyle0 + IrRoomNightsStyle1;

export { IglBookingEvent as igl_booking_event, IglCalBody as igl_cal_body, IglCalFooter as igl_cal_footer, IglCalHeader as igl_cal_header, IglLegends as igl_legends, IglTbaCategoryView as igl_tba_category_view, IglToBeAssigned as igl_to_be_assigned, IrInteractiveTitle as ir_interactive_title, IrRoomNights as ir_room_nights };

//# sourceMappingURL=igl-booking-event_9.entry.js.map