var __rest = (this && this.__rest) || function (s, e) {
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
import { Fragment, Host, h } from "@stencil/core";
import { BookingService } from "../../../services/booking.service";
import { calculateDaysBetweenDates, transformNewBooking } from "../../../utils/booking";
import { isBlockUnit } from "../../../utils/utils";
import moment from "moment";
import { EventsService } from "../../../services/events.service";
import locales from "../../../stores/locales.store";
import calendar_dates from "../../../stores/calendar-dates.store";
export class IglBookingEvent {
    constructor() {
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
        this.eventsService = new EventsService();
        this.bookingService = new BookingService();
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
            const transformedBooking = transformNewBooking(data)[0];
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
                if (this.isTouchStart && this.moveDifferenceX <= 5 && this.moveDifferenceY <= 5 && !this.isStretch) {
                    if (isBlockUnit(this.bookingEvent.STATUS_CODE)) {
                        this.showEventInfo(true);
                    }
                    else if (['IN-HOUSE', 'CONFIRMED', 'PENDING-CONFIRMATION', 'CHECKED-OUT'].includes(this.bookingEvent.STATUS)) {
                        await this.fetchAndAssignBookingData();
                    }
                }
                else {
                    const { pool, to_date, from_date, toRoomId } = event.detail;
                    const previousToDate = moment(to_date, 'YYYY-MM-DD').add(-1, 'days').format('YYYY-MM-DD');
                    console.log(this.findRoomType(Number(this.bookingEvent.PR_ID)), this.findRoomType(Number(toRoomId)));
                    if ((!moment(this.bookingEvent.TO_DATE, 'YYYY-MM-DD').isSame(moment(to_date, 'YYYY-MM-DD'), 'dates') ||
                        this.findRoomType(Number(this.bookingEvent.PR_ID)) !== this.findRoomType(Number(toRoomId))) &&
                        (((_a = calendar_dates.disabled_cells.get(`${toRoomId}_${from_date}`)) === null || _a === void 0 ? void 0 : _a.disabled) ||
                            (((_b = calendar_dates.disabled_cells.get(`${toRoomId}_${to_date}`)) === null || _b === void 0 ? void 0 : _b.disabled) && ((_c = calendar_dates.disabled_cells.get(`${toRoomId}_${previousToDate}`)) === null || _c === void 0 ? void 0 : _c.disabled))) &&
                        !this.isStretch) {
                        this.reset('This room isn’t available for the entire selected period. Please choose different dates or a different room.');
                    }
                    if (this.checkIfSlotOccupied(toRoomId, from_date, to_date)) {
                        this.reset('Overlapping Dates');
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
                                const diffDays = calculateDaysBetweenDates(oldFromDate, oldToDate);
                                let shrinkingDirection = null;
                                let fromDate = oldFromDate;
                                let toDate = oldToDate;
                                if (this.isShrinking) {
                                    if (moment(from_date, 'YYYY-MM-DD').isAfter(moment(oldFromDate, 'YYYY-MM-DD')) && moment(to_date, 'YYYY-MM-DD').isBefore(moment(oldToDate, 'YYYY-MM-DD'))) {
                                        fromDate = oldFromDate;
                                        toDate = to_date;
                                    }
                                    else {
                                        shrinkingDirection = moment(from_date, 'YYYY-MM-DD').isAfter(moment(oldFromDate, 'YYYY-MM-DD'))
                                            ? 'left'
                                            : moment(to_date, 'YYYY-MM-DD').isBefore(moment(oldToDate, 'YYYY-MM-DD'))
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
                                    if (moment(from_date, 'YYYY-MM-DD').isBefore(moment(oldFromDate, 'YYYY-MM-DD'))) {
                                        fromDate = from_date;
                                        const newToDate = moment(from_date, 'YYYY-MM-DD').add(diffDays, 'days');
                                        toDate = newToDate.isBefore(moment(to_date, 'YYYY-MM-DD'), 'days') ? to_date : newToDate.format('YYYY-MM-DD');
                                    }
                                    else if (moment(to_date, 'YYYY-MM-DD').isAfter(moment(oldToDate, 'YYYY-MM-DD'))) {
                                        toDate = to_date;
                                        fromDate = moment(to_date, 'YYYY-MM-DD').subtract(diffDays, 'days').format('YYYY-MM-DD');
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
                                        if ((_a = calendar_dates.disabled_cells.get(`${toRoomId}_${cursor}`)) === null || _a === void 0 ? void 0 : _a.disabled) {
                                            counter++;
                                        }
                                        cursor = moment(cursor, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD');
                                    }
                                    if (counter >= 1) {
                                        this.reset(locales.entries.Lcz_ThisUnitIsNotAvailable);
                                    }
                                };
                                if (moment(oldToDate, 'YYYY-MM-DD').isBefore(moment(to_date), 'dates')) {
                                    validateDates(oldToDate, to_date);
                                }
                                else if (moment(oldFromDate, 'YYYY-MM-DD').isAfter(moment(from_date, 'YYYY-MM-DD'), 'dates')) {
                                    validateDates(from_date, oldFromDate);
                                }
                                const payload = {
                                    booking: this.bookingEvent,
                                    bookingNumber: this.bookingEvent.BOOKING_NUMBER,
                                    identifier: this.bookingEvent.IDENTIFIER,
                                    to_date,
                                    pool,
                                    from_date,
                                    defaultDates: this.bookingEvent.defaultDates,
                                };
                                if (!this.bookingEvent.is_direct) {
                                    this.showDialog.emit(Object.assign({ reason: 'stretch' }, payload));
                                }
                                else {
                                    this.showRoomNightsDialog.emit(payload);
                                }
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
                    description: locales.entries.Lcz_OTA_Modification_Alter,
                    status: '200',
                };
                // return {
                //   description: `${locales.entries.Lcz_YouWillLoseFutureUpdates}.`,
                //   status: '200',
                // };
            }
            else {
                if (moment(from_date, 'YYYY-MM-DD').isSame(moment(this.bookingEvent.FROM_DATE, 'YYYY-MM-DD')) &&
                    moment(to_date, 'YYYY-MM-DD').isSame(moment(this.bookingEvent.TO_DATE, 'YYYY-MM-DD'))) {
                    const initialRT = this.findRoomType(this.bookingEvent.PR_ID);
                    const targetRT = this.findRoomType(toRoomId);
                    if (initialRT === targetRT) {
                        return { description: `${locales.entries.Lcz_AreYouSureWantToMoveAnotherUnit}?`, status: '200' };
                    }
                    else {
                        return {
                            description: locales.entries.Lcz_OTA_Modification_Alter,
                            status: '200',
                        };
                        // return {
                        //   description: `${locales.entries.Lcz_YouWillLoseFutureUpdates} ${this.bookingEvent.origin ? this.bookingEvent.origin.Label : ''}. ${
                        //     locales.entries.Lcz_SameRatesWillBeKept + '.'
                        //   }`,
                        //   status: '200',
                        // };
                    }
                }
                return { description: locales.entries.Lcz_CannotChangeCHBookings + '.', status: '400' };
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
        const fromTime = moment(from_date, 'YYYY-MM-DD');
        const toTime = moment(to_date, 'YYYY-MM-DD');
        const isOccupied = this.allBookingEvents.some(event => {
            if (event.POOL === this.bookingEvent.POOL) {
                return false;
            }
            const eventFromTime = moment(event.FROM_DATE, 'YYYY-MM-DD').add(1, 'days');
            const eventToTime = moment(event.TO_DATE, 'YYYY-MM-DD');
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
                    (!this.isNewEvent() && moment(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 0 : this.dayWidth / 2) +
                    this.eventSpace / 2 -
                    bodyContainerRect.left +
                    'px';
            pos.width =
                (this.getStayDays() + (!this.isNewEvent() && moment(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 0.5 : 0)) *
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
                // if (this.bookingEvent.is_direct && !isBlockUnit(this.bookingEvent.STATUS_CODE)) {
                //   return;
                // }
                const baseCondition = !this.bookingEvent.is_direct && !isBlockUnit(this.bookingEvent.STATUS_CODE);
                let newWidth = this.initialWidth;
                if (this.resizeSide == 'rightSide') {
                    newWidth = this.initialWidth + distanceX;
                    newWidth = Math.min(newWidth, this.initialX + this.element.offsetWidth);
                    newWidth = Math.max(this.dayWidth - this.eventSpace, newWidth);
                    this.isShrinking = distanceX < 0;
                    if (!this.isShrinking && baseCondition) {
                        return;
                    }
                    this.element.style.width = `${newWidth}px`;
                }
                else if (this.resizeSide == 'leftSide') {
                    this.isShrinking = distanceX > 0;
                    if (!this.isShrinking && baseCondition) {
                        return;
                    }
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
                    (!this.isNewEvent() && moment(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? this.dayWidth / 2 : 0);
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
                    const offset = !this.isNewEvent() && moment(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? +this.dayWidth / 2 : 0;
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
        return (h(Host, { key: '6a0950f218f9f83efd4b5dedac1619489a640ca4', class: `bookingEvent  ${this.isNewEvent() || this.isHighlightEventType() ? 'newEvent' : ''} ${legend.clsName} `, style: this.getPosition(), id: 'event_' + this.getBookingId() }, h("div", { key: 'e085e82799b362c92cb6e15b600fc7cf2b3e0a61', class: `bookingEventBase  ${!this.isNewEvent() && moment(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 'skewedLeft' : ''}
          ${!this.isNewEvent() && moment(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)) ? 'skewedRight' : ''}
          ${!this.bookingEvent.is_direct &&
                !isBlockUnit(this.bookingEvent.STATUS_CODE) &&
                this.bookingEvent.STATUS !== 'TEMP-EVENT' &&
                this.bookingEvent.ID !== 'NEW_TEMP_EVENT' &&
                'border border-dark ota-booking-event'}  ${this.isSplitBooking() ? 'splitBooking' : ''}`, style: { 'backgroundColor': legend.color, '--ir-event-bg': legend.color }, onTouchStart: event => this.startDragging(event, 'move'), onMouseDown: event => this.startDragging(event, 'move') }), noteNode ? h("div", { class: "legend_circle noteIcon", style: { backgroundColor: noteNode.color } }) : null, balanceNode ? h("div", { class: "legend_circle balanceIcon", style: { backgroundColor: balanceNode.color } }) : null, h("div", { key: 'b39be5d140f33521910d6d3d3e34fe9245536b47', class: "bookingEventTitle", onTouchStart: event => this.startDragging(event, 'move'), onMouseDown: event => this.startDragging(event, 'move') }, this.getBookedBy(), this.renderEventBookingNumber()), h(Fragment, { key: '99d327a5e3da89bb1617536d619e73dab0b7215f' }, h("div", { key: '35baeced42c9042c7f9f2b5382601999b03e618a', class: `bookingEventDragHandle leftSide ${!this.isNewEvent() && moment(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 'skewedLeft' : ''}
            ${!this.isNewEvent() && moment(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)) ? 'skewedRight' : ''}`, onTouchStart: event => this.startDragging(event, 'leftSide'), onMouseDown: event => this.startDragging(event, 'leftSide') }), h("div", { key: '2a77cc428cd454ebcb42d8f068cae654b5b6ff04', class: `bookingEventDragHandle rightSide ${!this.isNewEvent() && moment(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 'skewedLeft' : ''}
              ${!this.isNewEvent() && moment(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)) ? 'skewedRight' : ''}`, onTouchStart: event => this.startDragging(event, 'rightSide'), onMouseDown: event => this.startDragging(event, 'rightSide') })), this.showInfoPopup ? (h("igl-booking-event-hover", { is_vacation_rental: this.is_vacation_rental, countries: this.countries, currency: this.currency, class: "top", bookingEvent: this.bookingEvent, bubbleInfoTop: this.bubbleInfoTopSide, style: this.calculateHoverPosition() })) : null));
    }
    static get is() { return "igl-booking-event"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-booking-event.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-booking-event.css"]
        };
    }
    static get properties() {
        return {
            "currency": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
                "attribute": "currency",
                "reflect": false
            },
            "is_vacation_rental": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "is_vacation_rental",
                "reflect": false,
                "defaultValue": "false"
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "language",
                "reflect": false
            },
            "bookingEvent": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "allBookingEvents": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
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
                "defaultValue": "[]"
            },
            "countries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICountry[]",
                    "resolved": "ICountry[]",
                    "references": {
                        "ICountry": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::ICountry"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "renderElement": {},
            "position": {},
            "isShrinking": {}
        };
    }
    static get events() {
        return [{
                "method": "hideBubbleInfo",
                "name": "hideBubbleInfo",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "updateEventData",
                "name": "updateEventData",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "dragOverEventData",
                "name": "dragOverEventData",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "showRoomNightsDialog",
                "name": "showRoomNightsDialog",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IRoomNightsData",
                    "resolved": "IRoomNightsData",
                    "references": {
                        "IRoomNightsData": {
                            "location": "import",
                            "path": "@/models/property-types",
                            "id": "src/models/property-types.ts::IRoomNightsData"
                        }
                    }
                }
            }, {
                "method": "showDialog",
                "name": "showDialog",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "CalendarModalEvent",
                    "resolved": "{ reason: \"checkin\"; bookingNumber: string; roomIdentifier: string; roomUnit: string; roomName: string; sidebarPayload: RoomGuestsPayload & { bookingNumber: string; }; } | { reason: \"checkout\"; bookingNumber: string; roomIdentifier: string; roomUnit: string; roomName: string; } | { reason: \"reallocate\"; } & IReallocationPayload | { reason: \"stretch\"; } & IRoomNightsData",
                    "references": {
                        "CalendarModalEvent": {
                            "location": "import",
                            "path": "@/models/property-types",
                            "id": "src/models/property-types.ts::CalendarModalEvent"
                        }
                    }
                }
            }, {
                "method": "resetStretchedBooking",
                "name": "resetStretchedBooking",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "toast",
                "name": "toast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IToast",
                    "resolved": "ICustomToast & Partial<IToastWithButton> | IDefaultToast & Partial<IToastWithButton>",
                    "references": {
                        "IToast": {
                            "location": "import",
                            "path": "@components/ui/ir-toast/toast",
                            "id": "src/components/ui/ir-toast/toast.ts::IToast"
                        }
                    }
                }
            }, {
                "method": "updateBookingEvent",
                "name": "updateBookingEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "element"; }
    static get listeners() {
        return [{
                "name": "click",
                "method": "handleClickOutside",
                "target": "window",
                "capture": false,
                "passive": false
            }, {
                "name": "hideBubbleInfo",
                "method": "hideBubbleInfoPopup",
                "target": "window",
                "capture": false,
                "passive": false
            }, {
                "name": "moveBookingTo",
                "method": "moveBookingToHandler",
                "target": "window",
                "capture": false,
                "passive": false
            }, {
                "name": "revertBooking",
                "method": "handleRevertBooking",
                "target": "window",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=igl-booking-event.js.map
