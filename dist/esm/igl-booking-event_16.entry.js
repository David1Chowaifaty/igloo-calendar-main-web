import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from './index-60982d00.js';
import { B as BookingService, r as resetBookingStore } from './booking.service-0e9d5525.js';
import { E as buildSplitIndex, F as getSplitRole, v as isBlockUnit, j as calendar_dates, a as calculateDaysBetweenDates, t as transformNewBooking, G as checkMealPlan, H as compareTime, I as createDateWithOffsetAndHour, h as dateToFormattedString, J as getDaysArray, K as convertDatePrice, L as formatDate } from './utils-763db862.js';
import { h as hooks } from './moment-ab846cee.js';
import { E as EventsService, P as PropertyService } from './property.service-a0db35c1.js';
import { l as locales } from './locales.store-629477c2.js';
import { c as calendar_data } from './calendar-data-462ba979.js';
import { z, Z as ZodError } from './index-6ecc32cd.js';
import { H as HouseKeepingService } from './housekeeping.service-e63a6d61.js';
import { T as ToBeAssignedService } from './toBeAssigned.service-471b54c5.js';
import { h as handleUnAssignedDatesChange, g as getUnassignedDates } from './unassigned_dates.store-5083e678.js';
import { c as colorVariants } from './icons-5bea2cc2.js';
import { i as isRequestPending } from './ir-interceptor.store-e5fac1de.js';
import './axios-aa1335b8.js';
import './index-c4cf83be.js';

const iglBookingEventCss = ".sc-igl-booking-event-h{display:block;position:absolute;--ota-bar-width:2px;--stripe-period:20px;--split-border-width:5px;--split-border-color:black}.bookingEventBase.sc-igl-booking-event{position:absolute;width:100%;height:100%;border-radius:4px;background-color:rgb(49, 190, 241);transform:skewX(-22deg);cursor:pointer}.bookingEventBase.leftSplit.sc-igl-booking-event{border-left:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.rightSplit.sc-igl-booking-event{border-right:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.fullSplit.sc-igl-booking-event{border-right:var(--split-border-width) solid var(--split-border-color);border-left:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.fullSplit.skewedLeft.sc-igl-booking-event,.bookingEventBase.leftSplit.skewedLeft.sc-igl-booking-event{border-left:0}.bookingEventBase.fullSplit.skewedRight.sc-igl-booking-event,.bookingEventBase.leftSplit.skewedRight.sc-igl-booking-event{border-right:0}.bookingEvent.sc-igl-booking-event{cursor:pointer}.ota-booking-event.sc-igl-booking-event{border-width:var(--ota-bar-width) !important}.bookingEventHiddenBase.sc-igl-booking-event{position:absolute;top:0;left:-4px;width:calc(100% + 8px)}.bookingEventBase.skewedLeft.sc-igl-booking-event::before,.bookingEventBase.skewedRight.sc-igl-booking-event::before{content:'';position:absolute;top:0;bottom:0;width:50%;height:100%;left:-4px;background-color:var(--ir-event-bg);border-radius:4px}.bookingEventBase.skewedLeft.sc-igl-booking-event::before{transform-origin:right;transform:skewX(22deg);border-top-left-radius:0;border-bottom-left-radius:0}.bookingEventBase.fullSplit.skewedLeft.sc-igl-booking-event::before,.bookingEventBase.leftSplit.skewedLeft.sc-igl-booking-event::before{border-left:var(--split-border-width) solid var(--split-border-color) !important;z-index:2;background-color:transparent}.bookingEventBase.fullSplit.skewedRight.sc-igl-booking-event::before,.bookingEventBase.leftRight.skewedRight.sc-igl-booking-event::before{border-right:var(--split-border-width) solid var(--split-border-color) !important;z-index:2;background-color:transparent}.bookingEventBase.skewedRight.sc-igl-booking-event::before{transform-origin:left;transform:skewX(22deg 0deg);border-top-right-radius:0;border-bottom-right-radius:0}.bookingEventBase.border.skewedLeft.sc-igl-booking-event::before{border:var(--ota-bar-width) solid #424242;border-right:0;border-left:0;border-top-right-radius:0;border-bottom-right-radius:0;top:calc(var(--ota-bar-width) * -1);height:20px;left:-4px}.bookingEventBase.border.skewedRight.sc-igl-booking-event::before{border:var(--ota-bar-width) solid #424242;border-left:0;border-right:0;border-top-left-radius:0;border-bottom-left-radius:0;top:calc(var(--ota-bar-width) * -1);height:20px;right:-4px}.bookingEventBase.striped-bar.fullSplit.skewedLeft.vertical.sc-igl-booking-event::after,.bookingEventBase.striped-bar.leftSplit.skewedLeft.vertical.sc-igl-booking-event::after{z-index:1;border-left:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.striped-bar.fullSplit.skewedRight.vertical.sc-igl-booking-event::after,.bookingEventBase.striped-bar.rightSplit.skewedRight.vertical.sc-igl-booking-event::after{z-index:1;border-right:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.striped-bar.vertical.sc-igl-booking-event::after{--stripe-angle:360deg}.bookingEventBase.striped-bar.sc-igl-booking-event::after{content:'';position:absolute;inset:0;border-radius:4px;background:repeating-linear-gradient(\n    var(--stripe-angle, 45deg),\n    var(--ir-event-bg) 0,\n    var(--ir-event-bg) calc(var(--stripe-period) / 2),\n    var(--ir-event-bg-stripe-color) calc(var(--stripe-period) / 2),\n    var(--ir-event-bg-stripe-color) var(--stripe-period)\n  );backface-visibility:hidden}.bookingEventBase.skewedRight.striped-bar.sc-igl-booking-event::after,.bookingEventBase.border.skewedRight.sc-igl-booking-event::after{right:-8px}.bookingEventBase.skewedLeft.striped-bar.sc-igl-booking-event::after,.bookingEventBase.border.skewedLeft.sc-igl-booking-event::after{left:-8px}.bookingEventBase.striped-bar.animated.sc-igl-booking-event::after{background-size:28.28px 28.28px;backface-visibility:hidden;animation:stripes 0.8s linear infinite;will-change:background-position}@keyframes stripes{0%{background-position:0 0}100%{background-position:28.28px 0}}.bookingEventDragHandle.sc-igl-booking-event{position:absolute;top:0;width:15px;height:100%;opacity:0.1;background-color:rgba(0, 0, 0, 0.15);transform:skewX(-22deg);border-radius:4px;cursor:pointer}.sc-igl-booking-event-h:hover .bookingEventDragHandle.sc-igl-booking-event{display:block;opacity:1}.newEvent.sc-igl-booking-event-h:hover .bookingEventDragHandle.sc-igl-booking-event{display:none;opacity:1}.leftSide.sc-igl-booking-event{left:0}.rightSide.sc-igl-booking-event{right:0}.leftSide.skewedLeft.sc-igl-booking-event{transform:skewX(0)}.rightSide.skewedRight.sc-igl-booking-event{transform:skewX(0)}.bookingEventTitle.sc-igl-booking-event{position:relative;top:2px;left:5px;max-width:calc(100% - 10px);color:#fff;font-size:0.8em;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;cursor:pointer}.legend_circle.sc-igl-booking-event{width:10px;height:10px;margin:3px 3px 3px 2px;border:1px solid #fff;border-radius:100%}.noteIcon.sc-igl-booking-event{position:absolute;bottom:-8px;left:2px}.balanceIcon.sc-igl-booking-event{position:absolute;top:-8px;right:2px}.splitBooking.sc-igl-booking-event{border-right:2px solid #000000}";
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
        this.resetStretchedBooking = createEvent(this, "resetStretchedBooking", 7);
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
        this.role = '';
        this.findRoomType = (roomId) => {
            let roomType = this.bookingEvent.roomsInfo.filter(room => room.physicalrooms.some(r => r.id === +roomId));
            if (roomType.length) {
                return roomType[0].id;
            }
            return null;
        };
    }
    componentWillLoad() {
        var _a;
        window.addEventListener('click', this.handleClickOutsideBind);
        this.bookingEvent.SPLIT_INDEX = buildSplitIndex(this.bookingEvent.ROOMS);
        if (this.bookingEvent.SPLIT_INDEX) {
            this.role = (_a = getSplitRole(this.bookingEvent.SPLIT_INDEX, this.bookingEvent.IDENTIFIER)) !== null && _a !== void 0 ? _a : '';
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
                    const previousToDate = hooks(to_date, 'YYYY-MM-DD').add(-1, 'days').format('YYYY-MM-DD');
                    console.log(this.findRoomType(Number(this.bookingEvent.PR_ID)), this.findRoomType(Number(toRoomId)));
                    if ((!hooks(this.bookingEvent.TO_DATE, 'YYYY-MM-DD').isSame(hooks(to_date, 'YYYY-MM-DD'), 'dates') ||
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
                                const { description, status, newRatePlans } = this.getModalDescription(toRoomId, from_date, to_date);
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
                                    console.log('stretching');
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
                                this.showDialog.emit(Object.assign(Object.assign({ reason: 'reallocate' }, event.detail), { description, title: '', rateplans: newRatePlans, hideConfirmButton, from_date: fromDate, to_date: toDate }));
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
                                        cursor = hooks(cursor, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD');
                                    }
                                    if (counter >= 1) {
                                        this.reset(locales.entries.Lcz_ThisUnitIsNotAvailable);
                                    }
                                };
                                if (hooks(oldToDate, 'YYYY-MM-DD').isBefore(hooks(to_date), 'dates')) {
                                    validateDates(oldToDate, to_date);
                                }
                                else if (hooks(oldFromDate, 'YYYY-MM-DD').isAfter(hooks(from_date, 'YYYY-MM-DD'), 'dates')) {
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
    async fetchAndAssignBookingData() {
        try {
            console.log('clicked on book#', this.bookingEvent.BOOKING_NUMBER);
            const validStatuses = ['IN-HOUSE', 'CONFIRMED', 'PENDING-CONFIRMATION', 'CHECKED-OUT'];
            if (!validStatuses.includes(this.bookingEvent.STATUS)) {
                return;
            }
            const data = await this.bookingService.getExposedBooking(this.bookingEvent.BOOKING_NUMBER, 'en');
            const base_booking = Object.assign({}, data);
            const filteredRooms = data.rooms.filter(room => room['assigned_units_pool'] === this.bookingEvent.ID);
            if (filteredRooms.length === 0) {
                throw new Error(`booking#${this.bookingEvent.BOOKING_NUMBER} has an empty array`);
            }
            if (filteredRooms.some(room => room['assigned_units_pool'] === null)) {
                throw new Error(`booking#${this.bookingEvent.BOOKING_NUMBER} has an empty pool`);
            }
            data.rooms = filteredRooms;
            const transformedBooking = transformNewBooking(data)[0];
            const { ID, TO_DATE, FROM_DATE, NO_OF_DAYS, STATUS, NAME, IDENTIFIER, origin, TOTAL_PRICE, PR_ID, POOL, BOOKING_NUMBER, NOTES, is_direct, BALANCE, channel_booking_nbr } = transformedBooking, otherBookingData = __rest(transformedBooking, ["ID", "TO_DATE", "FROM_DATE", "NO_OF_DAYS", "STATUS", "NAME", "IDENTIFIER", "origin", "TOTAL_PRICE", "PR_ID", "POOL", "BOOKING_NUMBER", "NOTES", "is_direct", "BALANCE", "channel_booking_nbr"]);
            this.bookingEvent = Object.assign(Object.assign(Object.assign({}, otherBookingData), this.bookingEvent), { channel_booking_nbr, booking: data, base_booking, DEPARTURE_TIME: otherBookingData.DEPARTURE_TIME, PHONE: otherBookingData.PHONE, PHONE_PREFIX: otherBookingData.PHONE_PREFIX, PRIVATE_NOTE: otherBookingData.PRIVATE_NOTE, origin,
                BALANCE,
                TOTAL_PRICE, ROOM_INFO: Object.assign(Object.assign({}, this.bookingEvent.ROOM_INFO), { sharing_persons: otherBookingData.ROOM_INFO.sharing_persons }) });
            this.updateBookingEvent.emit(this.bookingEvent);
            this.showEventInfo(true);
        }
        catch (error) {
            console.error(error.message);
        }
    }
    reset(message) {
        this.animationFrameId = requestAnimationFrame(() => {
            this.resetBookingToInitialPosition();
        });
        throw new Error(message);
    }
    getModalDescription(toRoomId, from_date, to_date) {
        var _a, _b;
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
                if (hooks(from_date, 'YYYY-MM-DD').isSame(hooks(this.bookingEvent.FROM_DATE, 'YYYY-MM-DD')) &&
                    hooks(to_date, 'YYYY-MM-DD').isSame(hooks(this.bookingEvent.TO_DATE, 'YYYY-MM-DD'))) {
                    const initialRT = this.findRoomType(this.bookingEvent.PR_ID);
                    const targetRT = this.findRoomType(toRoomId);
                    if (initialRT === targetRT) {
                        return { description: `${locales.entries.Lcz_AreYouSureWantToMoveAnotherUnit}?`, status: '200' };
                    }
                    else {
                        const mealPlans = checkMealPlan({
                            rateplan_id: this.bookingEvent.RATE_PLAN_ID,
                            roomTypeId: targetRT,
                            roomTypes: (_a = calendar_data === null || calendar_data === void 0 ? void 0 : calendar_data.property) === null || _a === void 0 ? void 0 : _a.roomtypes,
                        });
                        return {
                            description: locales.entries.Lcz_OTA_Modification_Alter,
                            status: '200',
                            newRatePlans: Array.isArray(mealPlans) ? mealPlans : undefined,
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
                    const mealPlans = checkMealPlan({
                        rateplan_id: this.bookingEvent.RATE_PLAN_ID,
                        roomTypeId: targetRT,
                        roomTypes: (_b = calendar_data === null || calendar_data === void 0 ? void 0 : calendar_data.property) === null || _b === void 0 ? void 0 : _b.roomtypes,
                    });
                    return {
                        description: locales.entries.Lcz_SameRatesWillBeKept,
                        status: '200',
                        newRatePlans: Array.isArray(mealPlans) ? mealPlans : undefined,
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
                if (this.role === 'fullSplit') {
                    return;
                }
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
                    if (this.role === 'rightSplit') {
                        return;
                    }
                    this.element.style.width = `${newWidth}px`;
                }
                else if (this.resizeSide == 'leftSide') {
                    this.isShrinking = distanceX > 0;
                    if (!this.isShrinking && baseCondition) {
                        return;
                    }
                    if (this.role === 'leftSplit') {
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
        var _a, _b, _c, _d, _e, _f;
        // onMouseLeave={()=>this.showEventInfo(false)}
        let legend = this.getEventLegend();
        let noteNode = this.getNoteNode();
        let balanceNode = this.getBalanceNode();
        let backgroundColor = ((_a = this.bookingEvent.ROOM_INFO) === null || _a === void 0 ? void 0 : _a.calendar_extra) ? (_d = (_c = (_b = this.bookingEvent.ROOM_INFO.calendar_extra) === null || _b === void 0 ? void 0 : _b.booking_color) === null || _c === void 0 ? void 0 : _c.color) !== null && _d !== void 0 ? _d : legend.color : legend.color;
        const { foreground, stripe } = (_f = (_e = calendar_data.colorsForegrounds) === null || _e === void 0 ? void 0 : _e[backgroundColor]) !== null && _f !== void 0 ? _f : {
            foreground: '',
            checkout: '',
        };
        backgroundColor = this.bookingEvent.STATUS === 'CHECKED-OUT' ? legend.color : backgroundColor;
        // console.log(this.bookingEvent.BOOKING_NUMBER === '46231881' ? this.bookingEvent : '');
        return (h(Host, { key: '2ea25aafea0b6032326a7dcfe07ae80235c032b2', class: `bookingEvent  ${this.isNewEvent() || this.isHighlightEventType() ? 'newEvent' : ''} ${legend.clsName} `, style: this.getPosition(), id: 'event_' + this.getBookingId() }, h("div", { key: '03022647d917ac2246280df29168e3572daf3cb4',
            //     class={`bookingEventBase  ${
            //       !this.isNewEvent() && moment(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 'skewedLeft' : ''
            //     }
            //     ${!this.isNewEvent() && moment(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)) ? 'skewedRight' : ''}
            //  ${this.bookingEvent.STATUS === 'IN-HOUSE' ? 'striped-bar vertical' : ''}
            //  ${isBlockUnit(this.bookingEvent.STATUS_CODE) && this.bookingEvent.STATUS_CODE === '003' ? 'striped-bar animated' : ''}
            //  ${
            //    !this.bookingEvent.is_direct && !isBlockUnit(this.bookingEvent.STATUS_CODE) && this.bookingEvent.STATUS !== 'TEMP-EVENT' && this.bookingEvent.ID !== 'NEW_TEMP_EVENT'
            //      ? 'border border-dark ota-booking-event'
            //      : ''
            //  }  ${this.isSplitBooking() ? 'splitBooking' : ''}
            //       fullSplit
            //       `}
            class: {
                'bookingEventBase': true,
                'skewedLeft': !this.isNewEvent() && hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)),
                'skewedRight': !this.isNewEvent() && hooks(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)),
                'striped-bar vertical': this.bookingEvent.STATUS === 'IN-HOUSE',
                'striped-bar animated': isBlockUnit(this.bookingEvent.STATUS_CODE) && this.bookingEvent.STATUS_CODE === '003',
                'border border-dark ota-booking-event': !this.bookingEvent.is_direct && !isBlockUnit(this.bookingEvent.STATUS_CODE) && this.bookingEvent.STATUS !== 'TEMP-EVENT' && this.bookingEvent.ID !== 'NEW_TEMP_EVENT',
                [this.role]: true,
            }, style: {
                'backgroundColor': backgroundColor,
                '--ir-event-bg': backgroundColor,
                '--ir-event-bg-stripe-color': stripe,
            }, onTouchStart: event => this.startDragging(event, 'move'), onMouseDown: event => this.startDragging(event, 'move') }), noteNode ? h("div", { class: "legend_circle noteIcon", style: { backgroundColor: noteNode.color } }) : null, balanceNode ? h("div", { class: "legend_circle balanceIcon", style: { backgroundColor: balanceNode.color } }) : null, h("div", { key: 'a5987c2c73250cc1cf4dd7ef72557a1c08d25268', class: "bookingEventTitle", style: { color: foreground }, onTouchStart: event => this.startDragging(event, 'move'), onMouseDown: event => this.startDragging(event, 'move') }, this.getBookedBy(), this.renderEventBookingNumber()), h(Fragment, { key: '183c99af0db20ee8a7d7c1ba1740ec1bee4b2493' }, h("div", { key: '115694aa3c601950944a91d07c22c2cacc6cb141', class: `bookingEventDragHandle leftSide ${!this.isNewEvent() && hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 'skewedLeft' : ''}
            ${!this.isNewEvent() && hooks(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)) ? 'skewedRight' : ''}`, onTouchStart: event => this.startDragging(event, 'leftSide'), onMouseDown: event => this.startDragging(event, 'leftSide') }), h("div", { key: 'f26f4448f7d2eeff9018089a8e0c8cde2bbf84ed', class: `bookingEventDragHandle rightSide ${!this.isNewEvent() && hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 'skewedLeft' : ''}
              ${!this.isNewEvent() && hooks(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)) ? 'skewedRight' : ''}`, onTouchStart: event => this.startDragging(event, 'rightSide'), onMouseDown: event => this.startDragging(event, 'rightSide') })), this.showInfoPopup ? (h("igl-booking-event-hover", { is_vacation_rental: this.is_vacation_rental, countries: this.countries, currency: this.currency, class: "top", bookingEvent: this.bookingEvent, bubbleInfoTop: this.bubbleInfoTopSide, style: this.calculateHoverPosition() })) : null));
    }
    get element() { return getElement(this); }
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

const iglBulkBlockCss = ".sc-igl-bulk-block-h{display:flex;flex-direction:column;flex:1 1 0%;height:100%}.bulk-sheet-container.sc-igl-bulk-block{display:flex;flex-direction:column;flex:1;min-height:0;gap:1rem}.animated-container.sc-igl-bulk-block{transition:all 0.5s ease}.physical-room.sc-igl-bulk-block{margin-left:1rem !important;padding-top:0.5rem}.physical-room.sc-igl-bulk-block>td.sc-igl-bulk-block:last-child{padding-left:1rem}.room-type-list.sc-igl-bulk-block{padding:0;margin:0}.room-type-list.sc-igl-bulk-block>li.sc-igl-bulk-block,.physical-room.sc-igl-bulk-block,.room-type-row.sc-igl-bulk-block{list-style:none}";
const IglBulkBlockStyle0 = iglBulkBlockCss;

const sheetCss$4 = ".sc-igl-bulk-block-h{height:100%}.sheet-container.sc-igl-bulk-block{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-igl-bulk-block{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-igl-bulk-block{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-igl-bulk-block{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-igl-bulk-block{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-igl-bulk-block{flex-direction:row;align-items:center}}";
const IglBulkBlockStyle1 = sheetCss$4;

const IglBulkBlock = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal", 7);
        this.toast = createEvent(this, "toast", 7);
        this.maxDatesLength = 8;
        this.selectedRoomTypes = new Map();
        this.selectedUnit = null;
        this.blockState = 'block';
        this.dates = [{ from: null, to: null }];
        this.dateRefs = [];
        this.minDate = hooks().format('YYYY-MM-DD');
        this.bookingService = new BookingService();
        this.datesSchema = z.array(z.object({
            from: z
                .any()
                .refine((val) => hooks.isMoment(val), {
                message: "Invalid 'from' date; expected a Moment object.",
            })
                .transform((val) => val.format('YYYY-MM-DD')),
            to: z
                .any()
                .refine((val) => hooks.isMoment(val), {
                message: "Invalid 'to' date; expected a Moment object.",
            })
                .transform((val) => val.format('YYYY-MM-DD')),
        }));
    }
    componentDidLoad() {
        this.reloadInterceptor = new ReloadInterceptor({ autoActivate: false });
        this.sidebar = document.querySelector('ir-sidebar');
    }
    disconnectedCallback() {
        this.reloadInterceptor.deactivate();
    }
    async addBlockDates() {
        var _a, _b;
        try {
            this.errors = null;
            this.isLoading = true;
            const periods = this.datesSchema.parse(this.dates);
            if (!this.selectedUnit) {
                this.unitSections.scrollIntoView({ behavior: 'smooth', block: 'center' });
                this.errors = 'rooms';
                return;
            }
            if (this.blockState === 'block') {
                await this.bookingService.blockAvailabilityForBrackets({
                    unit_id: (_a = this.selectedUnit) === null || _a === void 0 ? void 0 : _a.unit_id,
                    description: '',
                    block_status_code: '002',
                    brackets: periods.map(p => ({
                        from_date: p.from,
                        to_date: p.to,
                    })),
                });
            }
            else {
                await this.bookingService.unBlockUnitByPeriod({
                    unit_id: (_b = this.selectedUnit) === null || _b === void 0 ? void 0 : _b.unit_id,
                    from_date: periods[0].from,
                    to_date: periods[0].to,
                });
            }
            this.activate();
            this.deactivate();
            this.toast.emit({
                type: 'success',
                title: locales.entries.Lcz_RequestSubmittedSuccessfully,
                description: '',
            });
            this.isLoading = false;
            this.closeModal.emit();
        }
        catch (error) {
            console.log(error);
            if (error instanceof ZodError) {
                this.datesSections.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
        // 1a) if they just changed the "from", always clear that row's "to"
        if (key === 'from' && ((_a = dates[index].to) === null || _a === void 0 ? void 0 : _a.isBefore(date, 'dates'))) {
            dates[index].to = null;
        }
        // 2) clear any subsequent rows whose "from" is on or before the changed date
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
        return (h("form", { key: '28897841a28871c89262b39941ca790668ecb079', class: 'bulk-sheet-container', onSubmit: e => {
                e.preventDefault();
                this.addBlockDates();
            } }, h("div", { key: '85c3a6b6c7ea90623368381d512cd78be43baf3f', class: "sheet-body px-1" }, h("div", { key: '0d0ca78feeda312ba5d7a5c310142060ea2f72dc', class: "text-muted text-left pt-0 my-0 d-flex align-items-center pb-1", style: { gap: '0.5rem' } }, h("p", { key: '87bf5c41226b0c463c6c4bf2e984aad7e287b4ea', class: "m-0 p-0" }, "Select the unit to"), h("ir-select", { key: '311875577ce0ba644c52bbe0a5521ee8edf98b2c', showFirstOption: false, selectedValue: this.blockState, data: [
                { text: 'Block', value: 'block' },
                { text: 'Unblock', value: 'unblock' },
            ], onSelectChange: e => {
                this.blockState = e.detail;
            } })), h("div", { key: 'a62e53437fb84bb18774d1100e7c247fec8efaad' }, this.errors === 'rooms' && (h("p", { key: '935efa72401becffa905e57658e6173a3851be45', class: 'text-danger text-left smaller p-0 ', style: { 'margin-bottom': '0.5rem' } }, calendar_data.is_vacation_rental ? locales.entries.Lcz_PlzSelectOneListing : locales.entries.Lcz_PlzSelectOneUnit)), h("ul", { key: 'a13da8da2647be9cec3641f3255e2a6c9b5af073', class: "room-type-list", ref: el => (this.unitSections = el) }, calendar_data.roomsInfo.map(roomType => {
            return (h(Fragment, null, h("li", { key: `roomTypeRow-${roomType.id}`, class: `room-type-row` }, h("div", { class: 'd-flex choice-row' }, h("span", { class: "pl-1 text-left room-type-name" }, roomType.name))), roomType.physicalrooms.map((room, j) => {
                var _a;
                const row_style = j === roomType.physicalrooms.length - 1 ? 'pb-1' : '';
                return (h("li", { key: `physicalRoom-${room.id}-${j}`, class: `physical-room ${row_style}` }, h("div", { class: 'd-flex choice-row' }, h("ir-radio", { class: "pl-1 ", name: "unit", checked: ((_a = this.selectedUnit) === null || _a === void 0 ? void 0 : _a.unit_id) === room.id, onCheckChange: () => (this.selectedUnit = {
                        roomtype_id: roomType.id,
                        unit_id: room.id,
                    }), label: room.name }))));
            })));
        }))), h("table", { key: '56d57817ea6b86a83d88095cd5f5bef6cf779492', class: "mt-1", ref: el => (this.datesSections = el) }, h("thead", { key: '8c038d4b0b4503a41151e320a2ae8250bbc59b9e' }, h("tr", { key: '9ede2a0c046b94cca8ae4850ea1d0a0a75e43289' }, h("th", { key: '6aa74d2f9938875fb89a72b0b22614bfc8445c8d', class: "text-left" }, locales.entries.Lcz_From), h("th", { key: '55932857fe3240065e9a1bf8a08ba36927230de6', class: "text-left" }, locales.entries.Lcz_ToExclusive), h("td", { key: 'e6eb25956fd3e51cc006e23cac9b5b522718f9ab' }, this.dates.length !== this.maxDatesLength && this.blockState === 'block' && (h("ir-button", { key: '1017f947716b17aa7bfb72e2d19158fcaa1adfd6', variant: "icon", icon_name: "plus", onClickHandler: () => {
                this.addDateRow();
            } }))))), h("tbody", { key: '63917917171a9f063687af44a9cdd0489f15459c' }, this.dates.map((d, i) => {
            var _a, _b, _c, _d, _e, _f, _g;
            if (!this.dateRefs[i]) {
                this.dateRefs[i] = {};
            }
            const fromDateMinDate = i > 0 ? (_c = (_b = (_a = this.dates[i - 1]) === null || _a === void 0 ? void 0 : _a.to.clone().add(1, 'days')) === null || _b === void 0 ? void 0 : _b.format('YYYY-MM-DD')) !== null && _c !== void 0 ? _c : this.minDate : this.minDate;
            const toDateMinDate = this.dates[i].from ? (_e = (_d = this.dates[i]) === null || _d === void 0 ? void 0 : _d.from.clone().add(1, 'days')) === null || _e === void 0 ? void 0 : _e.format('YYYY-MM-DD') : this.minDate;
            return (h("tr", { key: `date_${i}` }, h("td", { class: "pr-1 pb-1" }, h("ir-date-picker", { ref: el => {
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
                } }, h("input", { type: "text", slot: "trigger", value: d.from ? d.from.format('MMM DD, YYYY') : null, class: `form-control input-sm ${this.errors === 'dates' && !d.to ? 'border-danger' : ''} text-center`, style: { width: '100%' } }))), h("td", { class: "pr-1 pb-1" }, h("ir-date-picker", { forceDestroyOnUpdate: true, ref: el => {
                    this.dateRefs[i].to = el;
                }, "data-testid": "pickup_arrival_date", date: (_g = d.to) === null || _g === void 0 ? void 0 : _g.format('YYYY-MM-DD'), emitEmptyDate: true, minDate: toDateMinDate, "aria-invalid": String(this.errors === 'dates' && !d.to), onDateChanged: evt => {
                    evt.stopImmediatePropagation();
                    evt.stopPropagation();
                    this.handleDateChange({ index: i, date: evt.detail.start, key: 'to' });
                }, maxDate: d.from ? hooks(d.from).add(3, 'months').format('YYYY-MM-DD') : undefined, onDatePickerFocus: e => {
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
                } }, h("input", { type: "text", slot: "trigger", value: d.to ? d.to.format('MMM DD, YYYY') : null, class: `form-control input-sm 
                          ${this.errors === 'dates' && !d.to ? 'border-danger' : ''}
                          text-center`, style: { width: '100%' } }))), i > 0 && (h("td", { class: "pb-1" }, h("ir-button", { variant: "icon", icon_name: "minus", onClickHandler: () => {
                    this.dates = this.dates.filter((_, j) => j !== i);
                } })))));
        })))), h("div", { key: '9c8f79f1a255c190f2c9abb4b8b4b25f8d71be42', class: 'sheet-footer' }, h("ir-button", { key: '41d1a543395aca22f097b2c563b8538926491fdd', text: locales.entries.Lcz_Cancel, btn_color: "secondary", class: 'flex-fill', onClickHandler: () => this.closeModal.emit(null) }), h("ir-button", { key: 'b4c539f38a66e8260468d67c52cc8a8e256cbf27', isLoading: this.isLoading, text: locales.entries.Lcz_Confirm, btn_type: "submit", class: "flex-fill" }))));
    }
};
IglBulkBlock.style = IglBulkBlockStyle0 + IglBulkBlockStyle1;

const iglBulkOperationsCss = ".bulk-operations-sheet-container.sc-igl-bulk-operations{display:flex;flex-direction:column;height:auto !important;min-height:100vh;background:white !important}.animated-container.sc-igl-bulk-operations{transition:all 0.5s ease}.tabs.sc-igl-bulk-operations{position:sticky;top:var(--ir-tabs-top, 54px);background-color:white;z-index:9999999;padding-top:1rem;margin-bottom:1rem}";
const IglBulkOperationsStyle0 = iglBulkOperationsCss;

const sheetCss$3 = ".sc-igl-bulk-operations-h{height:100%}.sheet-container.sc-igl-bulk-operations{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-igl-bulk-operations{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-igl-bulk-operations{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-igl-bulk-operations{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-igl-bulk-operations{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-igl-bulk-operations{flex-direction:row;align-items:center}}";
const IglBulkOperationsStyle1 = sheetCss$3;

const IglBulkOperations = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal", 7);
        this.toast = createEvent(this, "toast", 7);
        this.maxDatesLength = 8;
        this.tabs = [
            {
                id: 'stop-sale',
                label: 'Stop/Open Sale',
            },
            {
                id: 'block',
                label: 'Block Unit',
            },
        ];
    }
    componentDidLoad() {
        var _a, _b, _c;
        this.tabsEl.style.setProperty('--ir-tabs-top', ((_c = (_b = (_a = this.titleEl) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.height) === null || _c === void 0 ? void 0 : _c.toString()) + 'px');
    }
    render() {
        var _a;
        return (h("div", { key: '3526742660fd026be06e9d87cc178aae76a2d318', class: 'bulk-operations-sheet-container' }, h("div", { key: 'b59377a6ad208bb5f844f61118166e7e1e058c2c', class: "sheet-header d-flex align-items-center" }, h("ir-title", { key: 'e7389c74c676a6a165bb4d4c2810e7bf1ef6575a', ref: el => (this.titleEl = el), onCloseSideBar: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                // if (this.isLoading) {
                //   return;
                // }
                this.closeModal.emit(null);
            }, class: "px-1 mb-0",
            // label={locales.entries.Lcz_BulkStopOpenSale}
            label: 'Bulk Operations', displayContext: "sidebar" })), h("ir-tabs", { key: '23f31233f5a12cd04d4a69011f719197b2343644', ref: el => (this.tabsEl = el), class: "tabs", tabs: this.tabs, onTabChanged: e => (this.selectedTab = e.detail) }), ((_a = this.selectedTab) === null || _a === void 0 ? void 0 : _a.id) === 'stop-sale' ? (h("igl-bulk-stop-sale", { maxDatesLength: this.maxDatesLength, property_id: this.property_id })) : (h("igl-bulk-block", { maxDatesLength: this.maxDatesLength, property_id: this.property_id }))));
    }
};
IglBulkOperations.style = IglBulkOperationsStyle0 + IglBulkOperationsStyle1;

const iglBulkStopSaleCss = ".sc-igl-bulk-stop-sale-h{display:flex;flex-direction:column;flex:1 1 0%;height:100%}.bulk-sheet-container.sc-igl-bulk-stop-sale{display:flex;flex-direction:column;flex:1;min-height:0;gap:1rem}.animated-container.sc-igl-bulk-stop-sale{transition:all 0.5s ease}.days-checkbox.sc-igl-bulk-stop-sale{gap:0.5rem}";
const IglBulkStopSaleStyle0 = iglBulkStopSaleCss;

const sheetCss$2 = ".sc-igl-bulk-stop-sale-h{height:100%}.sheet-container.sc-igl-bulk-stop-sale{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-igl-bulk-stop-sale{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-igl-bulk-stop-sale{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-igl-bulk-stop-sale{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-igl-bulk-stop-sale{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-igl-bulk-stop-sale{flex-direction:row;align-items:center}}";
const IglBulkStopSaleStyle1 = sheetCss$2;

const IglBulkStopSale = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal", 7);
        this.toast = createEvent(this, "toast", 7);
        this.maxDatesLength = 8;
        this.selectedRoomTypes = [];
        this.dates = [{ from: null, to: null }];
        this.selectedWeekdays = new Set(Array(7)
            .fill(null)
            .map((_, i) => i));
        this.dateRefs = [];
        this.minDate = hooks().format('YYYY-MM-DD');
        this.bookingService = new BookingService();
        this.datesSchema = z.array(z.object({
            from: z
                .any()
                .refine((val) => hooks.isMoment(val), {
                message: "Invalid 'from' date; expected a Moment object.",
            })
                .transform((val) => val.format('YYYY-MM-DD')),
            to: z
                .any()
                .refine((val) => hooks.isMoment(val), {
                message: "Invalid 'to' date; expected a Moment object.",
            })
                .transform((val) => val.format('YYYY-MM-DD')),
        }));
    }
    getDayIndex(dateStr) {
        return hooks(dateStr, 'YYYY-MM-DD').day();
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
                const lastDay = hooks(period.to, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD');
                while (current !== lastDay) {
                    const nextDay = hooks(current, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD');
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
            const prevDisabledCells = new Map(calendar_dates.disabled_cells);
            // Caches
            const roomsInfoById = new Map(calendar_data.roomsInfo.map((rt, i) => [rt.id, { roomType: rt, index: i }]));
            const dayIndexByValue = new Map(calendar_dates.days.map((day, i) => [day.value, i]));
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
                    const day = calendar_dates.days[dayIndex];
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
            calendar_dates['disabled_cells'] = new Map(prevDisabledCells);
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
                title: locales.entries.Lcz_RequestSubmittedSuccessfully,
                description: '',
            });
            this.isLoading = false;
            this.closeModal.emit();
        }
        catch (error) {
            console.log(error);
            if (error instanceof ZodError) {
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
        return (h("form", { key: 'd4bbba8aacb640191b1eed43688da9357a3d7d5f', class: 'bulk-sheet-container', onSubmit: e => {
                e.preventDefault();
                this.addBlockDates();
            } }, h("div", { key: '61c4f712621021418cf979bf4109bdaccd1a313d', class: "sheet-body px-1" }, h("div", { key: '0132c4a7e929056f7b1b68c88ceaf8df8df61038', class: "text-muted text-left py-0 my-0" }, h("p", { key: '9768f2980929585ccdc1b3e0c964f06c2f4ac3ee' }, "Select the types to stop or open sales for all related rate plans")), h("div", { key: '75a0aab79ae60fc907e837ba2cf8cd33a9242f60' }, this.errors === 'rooms' && (h("p", { key: 'f178eac6942c2a027ecddde715cad5d32a5e7681', class: 'text-danger text-left smaller p-0 ', style: { 'margin-bottom': '0.5rem' } }, calendar_data.is_vacation_rental ? locales.entries.Lcz_PlzSelectOneListing : locales.entries.Lcz_PlzSelectOneUnit)), h("table", { key: '0a611df7857163883b975bb2de9f7a897ba133d6', ref: el => (this.unitSections = el) }, h("thead", { key: '6ed448fc4837043a9cb01acd697f4db97b3f3c7f' }, h("tr", { key: '9bc7f496564d353b1bddb9ef4aae511493515473' }, h("th", { key: '4f6356b63263dd46afac1e01fc7ff3d591be2bc8', class: "sr-only" }, "choice"), h("th", { key: 'd5b6b6a267de7407c272da020ecf0f0924d8512c', class: "sr-only" }, "room type"))), h("tbody", { key: '71bd84d1280939a7a45c47a63d1dc86e67eeb921' }, calendar_data.roomsInfo.map((roomType, i) => {
            const row_style = i === calendar_data.roomsInfo.length - 1 ? '' : 'pb-1';
            return (h("tr", { key: roomType.id }, h("td", { class: `choice-row ${row_style}` }, h("div", { class: 'd-flex justify-content-end' }, h("ir-select", { firstOption: `${locales.entries.Lcz_Select}...`, data: [
                    { value: 'open', text: locales.entries.Lcz_Open },
                    { value: 'closed', text: locales.entries.Lcz_StopSale },
                ], onSelectChange: e => {
                    const choice = e.detail;
                    // drop any existing entry for this roomType
                    const rest = this.selectedRoomTypes.filter(entry => entry.id !== roomType.id);
                    // if they actually picked something, append it
                    if (choice) {
                        rest.push({ id: roomType.id, result: choice });
                    }
                    this.selectedRoomTypes = rest;
                } }))), h("td", { class: `pl-1 text-left ${row_style}` }, roomType.name)));
        })))), h("p", { key: '950c7cb81af339bd2f018c7258a8abd6c045b023', class: "text-left mt-2 text-muted" }, "Included days"), this.errors === 'weekdays' && h("p", { key: '56cb2e2ef86ec1090df55b423d84b458701af87a', class: 'text-danger text-left smaller m-0 p-0' }, "Please select at least one day"), h("ir-weekday-selector", { key: '91ead627aaf665bce0de34cd8da2178a86f52a8f', ref: el => (this.weekdaysSections = el), weekdays: Array.from(this.selectedWeekdays), onWeekdayChange: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.selectedWeekdays = new Set(e.detail);
            } }), h("table", { key: 'df57cf5b2f30444e722d6cc6fff264f38122afba', class: "mt-1", ref: el => (this.datesSections = el) }, h("thead", { key: '7cfdb23e6600611b44a87b912609dfbf5edb9913' }, h("tr", { key: '725f1aafc4052cff517032b79a96376ce4dd7cd6' }, h("th", { key: '893d5e2024397ee53683799ab7bbeab0ac70c041', class: "text-left" }, locales.entries.Lcz_From), h("th", { key: '679d429bd6493f1beefd5f4a144ed35118a575a7', class: "text-left" }, locales.entries.Lcz_ToExclusive), h("td", { key: '815bb3eef757a4073631ceabad36a4df326342c6' }, this.dates.length !== this.maxDatesLength && (h("ir-button", { key: '095424582a9b71e33baa53d76077ee568456103e', variant: "icon", icon_name: "plus", onClickHandler: () => {
                this.addDateRow();
            } }))))), h("tbody", { key: '1410c6b0995b016bb47e5c09267355789ecc17ff' }, this.dates.map((d, i) => {
            var _a, _b, _c, _d, _e, _f, _g;
            if (!this.dateRefs[i]) {
                this.dateRefs[i] = {};
            }
            const fromDateMinDate = i > 0 ? (_c = (_b = (_a = this.dates[i - 1]) === null || _a === void 0 ? void 0 : _a.to.clone().add(1, 'days')) === null || _b === void 0 ? void 0 : _b.format('YYYY-MM-DD')) !== null && _c !== void 0 ? _c : this.minDate : this.minDate;
            const toDateMinDate = this.dates[i].from ? (_e = (_d = this.dates[i]) === null || _d === void 0 ? void 0 : _d.from.clone()) === null || _e === void 0 ? void 0 : _e.format('YYYY-MM-DD') : this.minDate;
            return (h("tr", { key: `date_${i}` }, h("td", { class: "pr-1 pb-1" }, h("ir-date-picker", { ref: el => {
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
                } }, h("input", { type: "text", slot: "trigger", value: d.from ? d.from.format('MMM DD, YYYY') : null, class: `form-control input-sm ${this.errors === 'dates' && !d.to ? 'border-danger' : ''} text-center`, style: { width: '100%' } }))), h("td", { class: "pr-1 pb-1" }, h("ir-date-picker", { forceDestroyOnUpdate: true, ref: el => {
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
                } }, h("input", { type: "text", slot: "trigger", value: d.to ? d.to.format('MMM DD, YYYY') : null, class: `form-control input-sm 
                          ${this.errors === 'dates' && !d.to ? 'border-danger' : ''}
                          text-center`, style: { width: '100%' } }))), i > 0 && (h("td", { class: "pb-1" }, h("ir-button", { variant: "icon", icon_name: "minus", onClickHandler: () => {
                    this.dates = this.dates.filter((_, j) => j !== i);
                } })))));
        })))), h("div", { key: '721c15f47012d6125fa52d23a7fc312db652e7b2', class: 'sheet-footer' }, h("ir-button", { key: '68f44bd2e95fe53a73bd41eb43a44ae292d63aac', text: locales.entries.Lcz_Cancel, btn_color: "secondary", class: 'flex-fill', onClickHandler: () => this.closeModal.emit(null) }), h("ir-button", { key: '4728484d390d80b57b3e2f522de197e52765b45e', isLoading: this.isLoading, text: locales.entries.Lcz_Save, btn_type: "submit", class: "flex-fill" }))));
    }
};
IglBulkStopSale.style = IglBulkStopSaleStyle0 + IglBulkStopSaleStyle1;

const iglCalBodyCss = ".sc-igl-cal-body-h{display:block}.bodyContainer.sc-igl-cal-body{position:relative}.roomRow.sc-igl-cal-body{width:max-content}.roomRow.sc-igl-cal-body:first-child{margin-top:80px}.categoryName.sc-igl-cal-body{font-weight:bold;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.cellData[data-dirty-room='true'].sc-igl-cal-body::after{content:'';position:absolute;bottom:0;height:100%;left:30%;right:30%;background-color:#d4d0be !important}.cellData.disabled.sc-igl-cal-body{background:rgba(153, 153, 153, 15%);cursor:var(--cell-cursor, not-allowed);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body{cursor:pointer;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body:hover{background:#e0e0e0}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body:hover[data-hk-enabled='false']{background:white;cursor:default}.cellData.sc-igl-cal-body{width:58px;height:30px;display:inline-grid;border-top:1px solid #e0e0e0;border-left:1px solid #e0e0e0;vertical-align:top}.triangle-button.sc-igl-cal-body{--size:10px;position:absolute;right:-6px;top:-1px;width:0;height:0;padding:0;border:none;background:transparent;cursor:pointer;width:0;height:0;border-left:var(--size) solid transparent;border-right:var(--size) solid transparent;border-bottom:var(--size) solid var(--in-toggle-color);transform:rotate(45deg)}.cellData.sc-igl-cal-body:nth-child(2){border-left:0px}.cellData.sc-igl-cal-body:last-child{border-right:1px solid rgba(186, 191, 199, 0.5)}.roomHeaderCell.sc-igl-cal-body{position:-webkit-sticky;position:sticky;left:0;background:#fff;border-right:1px solid #ccc;width:170px;z-index:1}.currentDay.sc-igl-cal-body{background-color:#e3f3fa}.dragOverHighlight.sc-igl-cal-body{background-color:#f5f5dc !important}.selectedDay.sc-igl-cal-body{background-color:#f9f9c9 !important}.categoryTitle.sc-igl-cal-body{grid-template-columns:1fr 20px;padding-left:10px;cursor:pointer;height:40px;font-size:0.9em}.categoryTitle.sc-igl-cal-body>.sc-igl-cal-body:nth-child(1){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.roomTitle.sc-igl-cal-body{padding-left:20px;font-size:0.9em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.roomTitle.sc-igl-cal-body>.sc-igl-cal-body:nth-child(1){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.roomTitle.pl10.sc-igl-cal-body{padding-left:10px}.categoryPriceColumn.sc-igl-cal-body{align-items:center;height:40px;-webkit-user-select:none;user-select:none;position:relative}.bookingEventsContainer.sc-igl-cal-body{position:absolute;top:0;left:0}";
const IglCalBodyStyle0 = iglCalBodyCss;

const IglCalBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.addBookingDatasEvent = createEvent(this, "addBookingDatasEvent", 7);
        this.showBookingPopup = createEvent(this, "showBookingPopup", 7);
        this.scrollPageToRoom = createEvent(this, "scrollPageToRoom", 7);
        this.dragOverElement = '';
        this.renderAgain = false;
        this.isLoading = null;
        this.selectedRooms = {};
        this.fromRoomId = -1;
        this.currentDate = new Date();
        this.housekeepingService = new HouseKeepingService();
        this.bookingMap = new Map();
        this.interactiveTitle = [];
        this.dayRateMap = new Map();
    }
    // private disabledCellsCache = new Map<string, boolean>();
    componentWillLoad() {
        this.currentDate.setHours(0, 0, 0, 0);
        this.bookingMap = this.getBookingMap(this.getBookingData());
        calendar_dates.days.forEach(day => {
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
                const startDate = hooks(this.selectedRooms[keys[0]].value, 'YYYY-MM-DD');
                const endDate = hooks(selectedDay.value, 'YYYY-MM-DD');
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
            // const isActive = true;
            return (h("div", { class: `cellData  font-weight-bold categoryPriceColumn ${addClass + '_' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''}` }, isCategory ? (h(Fragment, null, h("span", { class: 'categoryName' }, dayInfo.rate[index].exposed_inventory.rts))) : ('')));
        });
    }
    getGeneralRoomDayColumns(roomId, roomCategory, roomName) {
        return this.calendarData.days.map(dayInfo => {
            var _a;
            const isCellDisabled = this.isCellDisabled(Number(roomId), dayInfo.value);
            const prevDate = hooks(dayInfo.value, 'YYYY-MM-DD').add(-1, 'days').format('YYYY-MM-DD');
            const isDisabled = (isCellDisabled && Object.keys(this.selectedRooms).length === 0) || (isCellDisabled && this.isCellDisabled(Number(roomId), prevDate));
            const isSelected = this.selectedRooms.hasOwnProperty(this.getSelectedCellRefName(roomId, dayInfo));
            const isCurrentDate = dayInfo.day === this.today || dayInfo.day === this.highlightedDate;
            const cleaningDates = calendar_dates.cleaningTasks.has(+roomId) ? calendar_dates.cleaningTasks.get(+roomId) : null;
            const shouldBeCleaned = ['001', '003'].includes((_a = calendar_data.cleaning_frequency) === null || _a === void 0 ? void 0 : _a.code) ? false : cleaningDates === null || cleaningDates === void 0 ? void 0 : cleaningDates.has(dayInfo.value);
            return (h("div", { class: `cellData position-relative roomCell ${isCellDisabled ? 'disabled' : ''} ${'room_' + roomId + '_' + dayInfo.day} ${isCurrentDate ? 'currentDay' : ''} ${this.dragOverElement === roomId + '_' + dayInfo.day ? 'dragOverHighlight' : ''} ${isSelected ? 'selectedDay' : ''}`, style: !isDisabled && { '--cell-cursor': 'default' }, onClick: () => {
                    if (isDisabled) {
                        return;
                    }
                    this.clickCell(Number(roomId), dayInfo, roomCategory);
                }, "aria-label": roomName, role: "gridcell", "data-room-id": roomId, "data-date": dayInfo.value, "aria-current": isCurrentDate ? 'date' : undefined, "data-room-name": roomName, "data-dirty-room": String(shouldBeCleaned), "aria-disabled": String(isDisabled), "aria-selected": Boolean(isSelected) }));
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
            return (h("div", { class: "roomRow" }, h("div", { class: `cellData room text-left align-items-center roomHeaderCell  roomTitle ${this.getTotalPhysicalRooms(roomCategory) <= 1 ? 'pl10' : ''} ${'room_' + this.getRoomId(room)}`, "data-room-name": name, "data-hk-enabled": String(calendar_data.housekeeping_enabled), "data-room": this.getRoomId(room), onClick: () => {
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
                }, style: room.hk_status === '003' && { '--dot-color': '#ededed' }, hkStatus: calendar_data.housekeeping_enabled && room.hk_status !== '001', popoverTitle: name }, room.hk_status !== '001' && (h("div", { slot: "end", class: "d-flex align-items-center", style: { gap: '0.5rem' } }, room.hk_status === '004' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("title", null, "Inspected"), h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, room.hk_status === '002' && h("title", null, "This unit is dirty"), h("path", { fill: "currentColor", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))))))), this.getGeneralRoomDayColumns(this.getRoomId(room), roomCategory, name)));
        });
    }
    getRoomRows() {
        var _a;
        return (_a = this.calendarData.roomsInfo) === null || _a === void 0 ? void 0 : _a.map((roomCategory, index) => {
            if (roomCategory.is_active) {
                return (h(Fragment, null, this.getRoomCategoryRow(roomCategory, index), roomCategory.expanded && this.getRoomsByCategory(roomCategory)));
            }
            else {
                return null;
            }
        });
    }
    async confirmHousekeepingUpdate(e, status) {
        var _a, _b, _c, _d, _e, _f;
        e.stopImmediatePropagation();
        e.stopPropagation();
        try {
            this.isLoading = status === '004' ? 'right' : 'middle';
            await this.housekeepingService.setExposedUnitHKStatus({
                property_id: this.propertyId,
                // housekeeper: this.selectedRoom?.housekeeper ? { id: this.selectedRoom?.housekeeper?.id } : null,
                status: {
                    code: status,
                },
                unit: {
                    id: (_a = this.selectedRoom) === null || _a === void 0 ? void 0 : _a.id,
                },
            });
            if (['001', '004'].includes(status)) {
                await this.housekeepingService.executeHKAction({
                    actions: [
                        {
                            description: 'Cleaned',
                            hkm_id: ((_c = (_b = this.selectedRoom) === null || _b === void 0 ? void 0 : _b.housekeeper) === null || _c === void 0 ? void 0 : _c.id) || null,
                            unit_id: (_d = this.selectedRoom) === null || _d === void 0 ? void 0 : _d.id,
                            booking_nbr: (_f = this.bookingMap.get((_e = this.selectedRoom) === null || _e === void 0 ? void 0 : _e.id)) !== null && _f !== void 0 ? _f : null,
                            status: status,
                        },
                    ],
                });
            }
        }
        finally {
            this.isLoading = null;
            this.selectedRoom = null;
            this.hkModal.closeModal();
        }
    }
    render() {
        var _a, _b;
        return (h(Host, { key: '15cd90798eb406a44a5966b10acfc58eb33a5800' }, h("div", { key: '5d0119280b4c06f69d364a106c8fba8537a1d7e2', class: "bodyContainer" }, this.getRoomRows(), h("div", { key: 'fb4230ddfa1429de8046e1dbe36e3e4e0c02d359', class: "bookingEventsContainer preventPageScroll" }, (_a = this.getBookingData()) === null || _a === void 0 ? void 0 : _a.map(bookingEvent => {
            var _a, _b, _c;
            return (h("igl-booking-event", { "data-testid": `booking_${bookingEvent.BOOKING_NUMBER}`, "data-room-name": (_c = (_b = (_a = bookingEvent.roomsInfo) === null || _a === void 0 ? void 0 : _a.find(r => r.id === bookingEvent.RATE_TYPE)) === null || _b === void 0 ? void 0 : _b.physicalrooms.find(r => r.id === bookingEvent.PR_ID)) === null || _c === void 0 ? void 0 : _c.name, language: this.language, is_vacation_rental: this.calendarData.is_vacation_rental, countries: this.countries, currency: this.currency, "data-component-id": bookingEvent.ID, bookingEvent: bookingEvent, allBookingEvents: this.getBookingData() }));
        }))), h("ir-modal", { key: '1efa57a1256c4d6702c72c76842687c4536908bf', ref: el => (this.hkModal = el), leftBtnText: (_b = locales === null || locales === void 0 ? void 0 : locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_Cancel, middleBtnText: this.renderModalMiddleButtonText(), middleBtnActive: true, rightBtnText: this.renderModalRightButtonText(), modalBody: this.renderModalBody(), onConfirmModal: e => this.confirmHousekeepingUpdate(e, '004'), onMiddleModal: e => { var _a; return this.confirmHousekeepingUpdate(e, ((_a = this.selectedRoom) === null || _a === void 0 ? void 0 : _a.hk_status) === '002' ? '001' : '002'); }, autoClose: false, isMiddleButtonLoading: this.isLoading === 'middle', isLoading: this.isLoading === 'right', onCancelModal: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedRoom = null;
                this.hkModal.closeModal();
            } })));
    }
    renderModalBody() {
        var _a;
        if (!this.selectedRoom) {
            return null;
        }
        return (h("p", null, "Update unit ", (_a = this.selectedRoom) === null || _a === void 0 ? void 0 :
            _a.name, " to ...")
        // <ir-select
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
    renderModalMiddleButtonText() {
        if (!this.selectedRoom) {
            return null;
        }
        return this.selectedRoom.hk_status === '002' ? 'Clean' : 'Dirty';
    }
    renderModalRightButtonText() {
        if (!this.selectedRoom) {
            return null;
        }
        return this.selectedRoom.hk_status !== '004' ? 'Clean & Inspected' : 'Clean';
    }
    updateDisabledCellsCache() {
        var _a;
        calendar_dates.disabled_cells.clear();
        (_a = this.calendarData.roomsInfo) === null || _a === void 0 ? void 0 : _a.forEach((roomCategory, categoryIndex) => {
            var _a;
            if (roomCategory.is_active) {
                (_a = this.getCategoryRooms(roomCategory)) === null || _a === void 0 ? void 0 : _a.forEach(room => {
                    if (room.is_active) {
                        this.calendarData.days.forEach(dayInfo => {
                            const cellKey = this.getCellKey(room.id, dayInfo.value);
                            calendar_dates.disabled_cells.set(cellKey, {
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
        if (!calendar_dates.disabled_cells.has(key)) {
            return false;
        }
        const { disabled } = calendar_dates.disabled_cells.get(key);
        return disabled;
    }
    static get watchers() { return {
        "calendarData": ["handleCalendarDataChange"]
    }; }
};
IglCalBody.style = IglCalBodyStyle0;

const iglCalFooterCss = ".sc-igl-cal-footer-h{display:block;position:sticky;bottom:0;width:max-content;z-index:3}.footerCell.sc-igl-cal-footer{display:-moz-inline-grid;display:-ms-inline-grid;display:inline-grid;position:-webkit-sticky;position:sticky;bottom:0;width:58px;height:40px;background:#fff;vertical-align:top;border-top:1px solid #e0e0e0}.bottomLeftCell.sc-igl-cal-footer{left:-1px;z-index:2;width:170px;text-align:left;padding-left:15px;color:#000000}.footerCell.sc-igl-cal-footer i.sc-igl-cal-footer{margin-right:5px}.legendBtn.sc-igl-cal-footer{color:#41bff3;cursor:pointer}.legendBtn.sc-igl-cal-footer:hover{color:#1e29ca}.isOnline.sc-igl-cal-footer i.sc-igl-cal-footer{color:#2f9c3f;font-weight:bold}.isOffline.sc-igl-cal-footer i.sc-igl-cal-footer{font-weight:bold}.isOffline.sc-igl-cal-footer{color:#a40000}.dayTitle.sc-igl-cal-footer{font-size:0.8em;font-weight:600;display:grid;user-select:none}.currentDay.sc-igl-cal-footer .dayTitle.sc-igl-cal-footer{font-weight:bold}.currentDay.sc-igl-cal-footer{background-color:#e3f3fa}.dayCapacityPercent.sc-igl-cal-footer{font-size:0.75em}.badge-pill.sc-igl-cal-footer{padding-left:1em;padding-right:1em;font-size:0.7em;margin-bottom:2px}";
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
        return (h(Host, { key: '287017b1f9c5646ce1332d88512058348725f20f', class: "footerContainer" }, h("div", { key: '10542a159d54738f508fdb8fa777baee7d76480c', class: "footerCell bottomLeftCell align-items-center preventPageScroll", style: { paddingLeft: '10px' } }, h("button", { key: 'bb9fec55a8a12c923d416b1fe907e19ccdb70a83', class: "m-0 p-0 btn btn-sm  legendBtn d-flex align-items-center", style: { gap: '0.25rem' }, onClick: () => this.handleOptionEvent('showLegend') }, h("svg", { key: '86f85793975db56e4801eb3544b0f0ebbbce31c7', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", height: 16, width: 16 }, h("path", { key: '59d696b7bd29780f2ab505ce7586bf9dc90be9b9', fill: "currentColor", d: "M535.1 342.6C547.6 330.1 547.6 309.8 535.1 297.3L375.1 137.3C362.6 124.8 342.3 124.8 329.8 137.3C317.3 149.8 317.3 170.1 329.8 182.6L467.2 320L329.9 457.4C317.4 469.9 317.4 490.2 329.9 502.7C342.4 515.2 362.7 515.2 375.2 502.7L535.2 342.7zM183.1 502.6L343.1 342.6C355.6 330.1 355.6 309.8 343.1 297.3L183.1 137.3C170.6 124.8 150.3 124.8 137.8 137.3C125.3 149.8 125.3 170.1 137.8 182.6L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7z" })), h("span", { key: 'c4e7855f1a802ef7946195a7a375ab0814dae115' }, locales.entries.Lcz_Legend), h("span", { key: '711ec1c3cedc5c1c1661029ee5612b20e53f4cc0' }, "v1.02"), h("ir-new-badge", { key: '6b6caa9aa4110de0f234f3f058af2ed6393ed9a0', style: { marginLeft: '0.25rem' } }))), this.calendarData.days.map(dayInfo => (h("div", { class: "footerCell align-items-center" }, h("div", { class: `dayTitle full-height align-items-center ${dayInfo.day === this.today || this.highlightedDate === dayInfo.day ? 'currentDay' : ''}` }, dayInfo.dayDisplayName))))));
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
        // private searchValue: string = '';
        // private searchList: { [key: string]: any }[] = [];
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
        // this.searchValue = '';
        // this.searchList = [];
        this.renderView();
    }
    handleFilterRooms(event) {
        const inputElement = event.target;
        let value = inputElement.value.trim();
        // this.searchValue = value;
        value = value.toLowerCase();
        if (value === '') {
            this.handleClearSearch();
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
        return (h(Host, { key: 'ce9127343ea0438b6afcfb16c0b0759ebb4fa8a1' }, h("div", { key: '1e1bc6fb8b4f6028791fb6b6482f14fd4b78c9fd', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, h("div", { key: '347ac0ee863b63563888862b1fe5c92287df48d5', class: "row justify-content-around no-gutters" }, !this.calendarData.is_vacation_rental && (h("ir-button", { key: '98a62425db000d20551c29d191bbde9dc37d1e1f', variant: "icon", icon_name: "server", style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.5rem' }), "data-toggle": "tooltip", "data-placement": "bottom", title: locales.entries.Lcz_UnassignedUnitsTooltip, onClickHandler: () => this.handleOptionEvent('showAssigned'), btn_styles: "caledarBtns", visibleBackgroundOnHover: true })), h("ir-date-picker", { key: '386f0e7a6123062c6c83e90980efe68175e880bd', minDate: hooks().add(-2, 'months').startOf('month').format('YYYY-MM-DD'),
            // autoApply
            // singleDatePicker
            onDateChanged: evt => {
                console.log('evt', evt);
                this.handleDateSelect(evt);
            },
            // class="datePickerHidden"
            class: 'date_btn', title: locales.entries.Lcz_Navigate, "data-toggle": "tooltip", "data-placement": "bottom" }, h("ir-button", { key: '605f53d1e57c166ba34698fe6cb6e9bda68a76a0', slot: "trigger", btn_styles: "caledarBtns", variant: "icon", icon_name: "calendar", style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.5rem' }), onClickHandler: () => this.handleOptionEvent('calendar'), visibleBackgroundOnHover: true, ref: el => (this.dateRef = el) })), h("ir-button", { key: '6004f82b8c2f605a2252b513e421315ccb748e86', variant: "icon", btn_styles: "caledarBtns", class: 'pointer', icon_name: "clock", visibleBackgroundOnHover: true, style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.5rem' }), "data-toggle": "tooltip", "data-placement": "bottom", title: locales.entries.Lcz_Today, onClickHandler: () => this.handleOptionEvent('gotoToday') }), h("ir-button", { key: 'ee810d38aa47cd268b6904c27560b2029a263913', variant: "icon", btn_styles: "caledarBtns", icon_name: "plus", "data-toggle": "tooltip", "data-placement": "bottom", "data-testid": "new_booking_btn", title: locales.entries.Lcz_CreateNewBooking, visibleBackgroundOnHover: true, style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.5rem' }), onClickHandler: () => this.handleOptionEvent('add', this.getNewBookingModel()) }), h("ir-button", { key: 'c12867f9a93b58a452a1acca2b377cbd36720e28', variant: "icon", btn_styles: "caledarBtns", icon_name: "calendar-xmark", "data-toggle": "tooltip", "data-placement": "bottom", "data-testid": "new_bulk_btn", title: locales.entries.Lcz_StopOpenSale, visibleBackgroundOnHover: true, style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.5rem' }), onClickHandler: () => this.handleOptionEvent('bulk', this.getNewBookingModel()) })), h("div", { key: 'a1752a5244e782d221c868bed63c5ef72cf0db64', class: "row justify-content-around no-gutters searchContiner" }, h("ir-m-combobox", { key: '67a35b4a388d3a605249f6ff25e0354765b739e5', placeholder: locales.entries.Lcz_FindUnit, options: this.roomsList.map(r => ({
                label: r.name,
                value: r.id,
            })), onOptionChange: e => {
                this.handleScrollToRoom(e.detail.value);
            } }))), h("div", { key: '8de1fb6e1e858a4b8ef31a22d7b14e9b2f8febaf', class: "stickyCell headersContainer" }, h("div", { key: 'ddd8b1872ae6b069330ce591742b5f39e646b4e4', class: "monthsContainer" }, this.calendarData.monthsInfo.map(monthInfo => (h("div", { class: "monthCell", style: { width: monthInfo.daysCount * 58 + 'px' } }, h("div", { class: "monthTitle" }, monthInfo.monthName))))), this.calendarData.days.map(dayInfo => (h("div", { class: `headerCell align-items-center ${'day-' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''}`, "data-day": dayInfo.day }, !this.calendarData.is_vacation_rental && (h("div", { class: "preventPageScroll" }, h("span", { class: `badge badge-${this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr !== 0 ? 'info pointer' : 'light'} badge-pill`, onClick: () => this.showToBeAssigned(dayInfo) }, this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr))), h("div", { class: "dayTitle" }, dayInfo.dayDisplayName), h("div", { class: "dayCapacityPercent" }, dayInfo.occupancy, "%")))))));
    }
    static get watchers() { return {
        "unassignedDates": ["handleCalendarDataChanged"]
    }; }
};
IglCalHeader.style = IglCalHeaderStyle0;

const iglLegendsCss = ".sc-igl-legends-h{display:block}.legendHeader.sc-igl-legends{font-weight:500;letter-spacing:0.05rem;font-size:1.12rem;padding-top:5px;margin-bottom:1rem}.legendCloseBtn.sc-igl-legends{position:absolute;top:50%;right:0;cursor:pointer;font-size:1.75em;line-height:1em;padding:0.4rem;display:flex;align-items:center;justify-content:center;border-radius:3px;transform:translateY(-50%)}.legendCloseBtn.sc-igl-legends:hover{background-color:#f6f6f6}.stickyHeader.sc-igl-legends{position:-webkit-sticky;position:sticky;top:0;background-color:#ffffff;z-index:1}.legendRow.sc-igl-legends{position:relative;vertical-align:middle;margin-bottom:0.3rem}.legendRow.sc-igl-legends div.sc-igl-legends{display:inline-block;vertical-align:middle}.legend_skew.sc-igl-legends,.legend_skew-bordered.sc-igl-legends,.legend_skewsplit.sc-igl-legends{transform:skew(-22deg);width:15px;height:16px;border-radius:4px;background-color:var(--ir-skew-background)}.legend_skew.striped.vertical.sc-igl-legends{--stripe-period:17px;--stripe-angle:360deg}.legend_skew.striped.sc-igl-legends{--stripe-period:6px;background:repeating-linear-gradient(\n    var(--stripe-angle, 45deg),\n    var(--ir-skew-background) 0,\n    var(--ir-skew-background) calc(var(--stripe-period) / 2),\n    var(--ir-event-bg-stripe-color) calc(var(--stripe-period) / 2),\n    var(--ir-event-bg-stripe-color) var(--stripe-period)\n  )}.legend_skew.split.sc-igl-legends{border-right:4px solid black}.legend_skew-bordered.sc-igl-legends{border:1px solid black}.legend_dirty-unit.sc-igl-legends{background-color:white !important;border:1px solid #e0e0e0;height:12px;width:20px;margin-right:1rem;position:relative}.legend_dirty-unit.sc-igl-legends::after{content:'';position:absolute;bottom:0;height:100%;left:30%;right:30%;background-color:#d4d0be !important}.legend_circle.sc-igl-legends{border-radius:100%;width:10px;height:10px;margin:3px 3px 3px 2px}.legend_skewsplit.sc-igl-legends{border-right:2px solid #000000}.headerCell.sc-igl-legends .blueColor.sc-igl-legends{background-color:#31bef1}.greenColor.sc-igl-legends{background-color:#45b16d}.yellowColor.sc-igl-legends{background-color:#f4d552}.greyColor.sc-igl-legends{background-color:#a0a0a0}.redColor.sc-igl-legends{background-color:#f34752}.pinkColor.sc-igl-legends{background-color:#f9b4b7}.legendCalendar.sc-igl-legends .legendRow.sc-igl-legends{margin-bottom:0}.legendCalendar.sc-igl-legends .legendRow.sc-igl-legends:first-child .legendCal.sc-igl-legends{background-color:#ececec}.legendCalendar.sc-igl-legends .legendRow.sc-igl-legends div.sc-igl-legends{display:inline-block;vertical-align:middle;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.total-availability.sc-igl-legends{font-size:1em !important}.legendCalendar.sc-igl-legends .legendCal.sc-igl-legends{width:80px;height:25px;text-align:center;display:inline-grid !important;align-content:center;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendCalendar.sc-igl-legends .legendCal.sc-igl-legends .badge.sc-igl-legends{margin-top:0.2rem;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendCalendar.sc-igl-legends .legendCal.legendCal-h2.sc-igl-legends{height:40px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.br-t.sc-igl-legends{border-top:1px solid #a0a0a0}.br-s.sc-igl-legends{border-left:1px solid #a0a0a0;border-right:1px solid #a0a0a0}.br-bt.sc-igl-legends{border-bottom:1px solid #a0a0a0}.highphenLegend.sc-igl-legends{font-size:0.9em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.highphenLegend.sc-igl-legends::before{width:12px;height:0.5px;content:' ';background-color:#000000;vertical-align:middle;display:inline-block;margin-left:5px;margin-right:5px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.badge-pill.sc-igl-legends{padding:3px 1em;font-size:0.8em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendRow-editor.sc-igl-legends{vertical-align:top}.legendColorCell.sc-igl-legends{display:flex;align-items:center;gap:0.5rem;padding-right:0.5rem}.legendColorPicker.sc-igl-legends{appearance:none;border:none;background:none;cursor:pointer;width:30px;height:30px;padding:0}.legendColorPicker.sc-igl-legends::-webkit-color-swatch{border:1px solid #e0e0e0;border-radius:4px}.legendColorPicker.sc-igl-legends::-moz-color-swatch{border:1px solid #e0e0e0;border-radius:4px}.legendDetailsCell.sc-igl-legends{min-width:220px}.legendInput.sc-igl-legends,.legendTextarea.sc-igl-legends{width:100%;border:1px solid #d8d8d8;border-radius:4px;padding:0.4rem 0.6rem;font-size:0.85rem;display:block}.legendInput.sc-igl-legends{margin-bottom:0.4rem}.legendTextarea.sc-igl-legends{resize:vertical}.legendActionsCell.sc-igl-legends{width:32px;text-align:right}.legendRemoveBtn.sc-igl-legends{border:none;background:none;cursor:pointer;font-size:1.2rem;line-height:1;color:#a0a0a0;padding:0}.legendRemoveBtn.sc-igl-legends:hover,.legendRemoveBtn.sc-igl-legends:focus{color:#5c5c5c}.legendEditorFooter.sc-igl-legends{margin-top:0.75rem;display:flex;align-items:center;gap:1rem}.legendAddBtn.sc-igl-legends{border:1px solid #d8d8d8;border-radius:4px;background-color:#ffffff;padding:0.35rem 0.75rem;font-size:0.85rem;cursor:pointer}.legendAddBtn.sc-igl-legends:hover,.legendAddBtn.sc-igl-legends:focus{border-color:#b3b3b3}.legendStatus.sc-igl-legends{font-size:0.75rem}.legendStatus.saving.sc-igl-legends{color:#6b6f82}.legendStatus.success.sc-igl-legends{color:#2e7d32}.legendStatus.error.sc-igl-legends{color:#d32f2f}.headerCell.sc-igl-legends{width:70px;display:flex;align-items:center;justify-content:center}.dayTitle.sc-igl-legends{font-size:0.8em;font-weight:600;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.dayCapacityPercent.sc-igl-legends{font-size:0.75em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legend_rectangle.sc-igl-legends{height:12px;width:20px;margin-right:1rem}";
const IglLegendsStyle0 = iglLegendsCss;

const IglLegends = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.optionEvent = createEvent(this, "optionEvent", 7);
        this.propertyService = new PropertyService();
        this.bookingColors = [];
        this.saveState = 'idle';
        this.loadingIndex = [];
    }
    disconnectedCallback() {
        if (this.saveTimeout) {
            clearTimeout(this.saveTimeout);
        }
    }
    handleSaveStateChange(newValue) {
        if (newValue === 'error' || newValue === 'idle') {
            this.loadingIndex = [];
        }
    }
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    syncCalendarExtra(colors) {
        var _a;
        const calendarExtra = (_a = calendar_data.property.calendar_extra) !== null && _a !== void 0 ? _a : {};
        calendar_data.property.calendar_extra = Object.assign(Object.assign({}, calendarExtra), { booking_colors: colors.map(color => (Object.assign({}, color))) });
    }
    get propertyId() {
        var _a, _b, _c;
        return (_c = (_b = (_a = calendar_data.property) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : calendar_data.property.id) !== null && _c !== void 0 ? _c : null;
    }
    updateBookingColor(index, patch) {
        var _a;
        const bookingColors = (_a = calendar_data.property.calendar_extra) === null || _a === void 0 ? void 0 : _a.booking_colors.map((color, idx) => (idx === index ? Object.assign(Object.assign({}, color), patch) : color));
        this.syncCalendarExtra(bookingColors);
        if (this.saveState === 'saved') {
            this.saveState = 'idle';
        }
    }
    async persistBookingColors() {
        const propertyId = this.propertyId;
        if (!propertyId) {
            return;
        }
        if (this.saveState === 'saving') {
            return;
        }
        this.saveState = 'saving';
        this.saveError = undefined;
        try {
            await this.propertyService.setPropertyCalendarExtra({
                property_id: propertyId,
                value: JSON.stringify(calendar_data.property.calendar_extra),
            });
            this.saveState = 'saved';
            if (this.saveTimeout) {
                clearTimeout(this.saveTimeout);
            }
            this.saveTimeout = window.setTimeout(() => {
                this.saveState = 'idle';
                this.saveTimeout = undefined;
            }, 2000);
        }
        catch (error) {
            this.saveState = 'error';
            this.saveError = error instanceof Error ? error.message : String(error);
        }
    }
    handleNameInput(index, value) {
        this.updateBookingColor(index, { name: value });
    }
    handleBlur(index) {
        this.persistBookingColors();
        if (!this.loadingIndex.includes(index)) {
            this.loadingIndex = [...this.loadingIndex, index];
        }
    }
    handleLoaderComplete(index) {
        this.loadingIndex = this.loadingIndex.filter(currentIndex => currentIndex !== index);
    }
    render() {
        var _a;
        return (h(Host, { key: '7993e5d784c6664e89051f3181acd63b5493df21', class: "legendContainer pr-1 text-left pb-4" }, h("div", { key: 'dc9348002b82a690f0a968eac5b1f15ae652a825', class: 'w-full' }, h("div", { key: '7cb6efdaaab206c60dd3c1a01b3f2243b2e0743b', class: 'w-full' }, h("div", { key: 'bdee4778906c952dbd88c140ca37f6e7dfacc7d1', class: "stickyHeader pt-1 " }, h("p", { key: '62f80f4bb330c4ab715b531209b05c5bd96e887b', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'c68b410aa1870d91638e2e24f436453273349f48', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '10a2e7ae45f96e165ea6053fdf6d515a11f1813a', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'cb79d15821c2bc329553fe47dc1754986e9e6d6e', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '6ca44508c19b4bb2b26313c049046121ac8aea41' })), h("div", { key: '43898db92b59861fa1d357a23610ec4c71988425', class: "mt-2 pl-1" }, h("table", { key: '0838e04ea6b02945b3724d5ee6e9bd44892f3acb' }, (() => {
            const legendInfo = this.legendData.find(l => l.id === '14');
            return (h("tr", null, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { '--ir-skew-background': legendInfo.color } })), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), h("ir-new-badge", null)))));
        })(), this.legendData.map(legendInfo => {
            if (['1', '2', '3', '14'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo === null || legendInfo === void 0 ? void 0 : legendInfo.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor === null || stripeColor === void 0 ? void 0 : stripeColor.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name)))));
        }), h("tr", { key: '8f2ba39b9f23ab730af89b73011200793c39fd77' }, h("td", { key: '068fed0ecb17ac6af8e34e64a00887e8e5496fa6', colSpan: 2 }, h("hr", { key: 'bd096b403817d5059fc26f074996281e9af3d02b', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '7905f0955b8aef8f70e3616b57ab4f27bfb4bd71' }, h("th", { key: '764693a7a034025ae0a3898fb6390180cec16b1e', colSpan: 2, class: "", style: { paddingBottom: '0.5rem' } }, h("div", { key: 'be846fdde2a31f10f8f1c7081ffd79cb5d3135f0', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '112714c9937ff62b8f8b648af49bae2e05599211' }, "Default colors")))), this.legendData.map(legendInfo => {
            if (!['1', '2', '3'].includes(legendInfo.id)) {
                return null;
            }
            const stripeColor = calendar_data.colorsForegrounds[legendInfo === null || legendInfo === void 0 ? void 0 : legendInfo.color];
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor === null || stripeColor === void 0 ? void 0 : stripeColor.stripe, 'backgroundColor': legendInfo.color } }))), h("td", null, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { class: "font-small-3" }, legendInfo.name), legendInfo.id === '14' && h("ir-new-badge", null)))));
        }), h("tr", { key: 'ac875c89b8d3ca23df67a6b6edd72ce18bba6ce8' }, h("td", { key: 'c4acef1c7990913425cfe38e756a2a23388633bc', colSpan: 2 }, h("hr", { key: '5b97a34c2e5e9bb51d2fde292a33fc5fb09032c5', style: { marginTop: '0.5rem', marginBottom: '0.5rem' } }))), h("tr", { key: '9d9f5a840fa44bbc1aec28cff346ca7454af7fd0' }, h("th", { key: 'ed037c0970708d11c0e4501e8b501ac5c8618288', colSpan: 2, style: { paddingBottom: '0.5rem' } }, h("div", { key: '2b6323ef8bc5660255d51d8af69558157090acaa', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("span", { key: '3496f90058d9dfd51d201e9e1db576b482a568a6' }, "Use your own colors"), h("ir-new-badge", { key: 'af54cee714c2f6ca30096585046f4d8b055712c5' })))), (_a = calendar_data.property.calendar_extra) === null || _a === void 0 ? void 0 :
            _a.booking_colors.map((legendInfo, index) => {
                const previewClass = `legend_${legendInfo.design}`;
                return (h("tr", { key: `legend_${index}`, class: "legendRow " }, h("td", null, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("td", { class: "legendDetailsCell" }, h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-input-text", { class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, inputContainerStyle: { margin: '0' }, placeholder: "Reason for this color", onTextChange: event => this.handleNameInput(index, event.detail), onInputBlur: () => this.handleBlur(index) }), this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { onLoaderComplete: () => this.handleLoaderComplete(index) })) : null))));
            }))), h("hr", { key: '1d2bb4f591b164daf6623ff45973cfd146dd0937', style: { marginTop: '1rem', marginBottom: '0.5rem' } }), h("div", { key: '73d07c5abc36ec73968ca8de14c30d80b14cb94f', class: "mt-1" }, h("div", { key: '7dad72b79320775db336612220ce39749017943d', class: "legendCalendar" }, h("div", { key: 'ca25780b726e77a63f3f8c1f61331b93e11da964', class: "legendRow align-items-center" }, h("div", { key: 'a1615e4c0b5d9d05aeaf60aafb393cb1ec7804eb', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '86b8a299745312c5e77f6ea8756714698cf3a863' }, "MAR 2022")), h("div", { key: '59ad10383106694737de87508b1153918ec56275', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'dc6a5f25377e6ecb30619ccee8d813f378582b11', class: "legendRow" }, h("div", { key: '9e8623cc9e360d0af8ca90b2e56163bfe7aa6fa8', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: '9a58b7616445d5de111f5c058056139142e26b02', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: '87e89a6b32f47d4300d15daa01a03ad56ee7f236', class: "highphenLegend" }, h("div", { key: '5f1073d707f27fedd3f9a0d06c7af23764982301' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '78d1ddb8f5ea545cccabca305dbf5cb03bb911af', class: "legendRow" }, h("div", { key: '0ffbdbd0da798912046d619328596a3eec746f53', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'a10d43f8505764e5feb8ba50e69ea19d177fba37', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'c9a943ddda3880c161447ad84bc79bd4bf5ccea2', class: "legendRow" }, h("div", { key: 'f95a02c1e34fb9ad98bf0ddd576922b8c9aaea9e', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '3b183c69dbbc5e800d3f0b804bd8c92d8f9d8793', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '5644122ab47fc06165cf3b025c85e2367867f14c', class: "legendRow" }, h("div", { key: '7af8ed1981f451885c4471f2cf902367f396566e', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '90ef267c25f9db50c347b71404a1f0a614d0122c', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
    }
    static get watchers() { return {
        "saveState": ["handleSaveStateChange"]
    }; }
};
IglLegends.style = IglLegendsStyle0;

const iglReallocationDialogCss = ".sc-igl-reallocation-dialog-h{display:block}.dialog-body.sc-igl-reallocation-dialog{display:grid;gap:1.5rem}.dialog-body__description.sc-igl-reallocation-dialog{margin:0}.dialog-footer.sc-igl-reallocation-dialog{display:flex;justify-content:flex-end;gap:0.75rem}";
const IglReallocationDialogStyle0 = iglReallocationDialogCss;

const IglReallocationDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dialogClose = createEvent(this, "dialogClose", 7);
        this.revertBooking = createEvent(this, "revertBooking", 7);
        this.resetModalState = createEvent(this, "resetModalState", 7);
        this.showRateplanError = false;
        this.eventsService = new EventsService();
        this.handleDialogVisibilityChange = (event) => {
            if (!event.detail) {
                this.dialogClose.emit(false);
            }
        };
        this.handleRateplanChange = (event) => {
            this.selectedRateplan = event.detail;
            this.showRateplanError = false;
        };
        this.handleCancelClick = () => {
            var _a;
            (_a = this.dialogEl) === null || _a === void 0 ? void 0 : _a.closeModal();
            this.dialogClose.emit(false);
        };
    }
    handleDataChange(newData) {
        var _a, _b;
        this.resetState(newData);
        if (newData) {
            (_a = this.dialogEl) === null || _a === void 0 ? void 0 : _a.openModal();
        }
        else {
            (_b = this.dialogEl) === null || _b === void 0 ? void 0 : _b.closeModal();
        }
    }
    async reallocateUnit() {
        var _a;
        if (!this.data) {
            return;
        }
        if (!this.validateRateplanSelection()) {
            return;
        }
        const { pool, toRoomId, from_date, to_date } = this.data;
        try {
            await this.eventsService.reallocateEvent(pool, toRoomId, from_date, to_date, this.data.rateplans ? Number(this.selectedRateplan) : undefined);
        }
        catch (error) {
            console.log(error);
            this.revertBooking.emit(pool);
        }
        finally {
            (_a = this.dialogEl) === null || _a === void 0 ? void 0 : _a.closeModal();
            this.resetModalState.emit();
        }
    }
    get rateplanOptions() {
        var _a;
        if (!Array.isArray((_a = this.data) === null || _a === void 0 ? void 0 : _a.rateplans)) {
            return [];
        }
        return this.data.rateplans.map(option => (Object.assign(Object.assign({}, option), { text: this.formatRateplanLabel(option) })));
    }
    formatRateplanLabel(option) {
        if (!option) {
            return '';
        }
        const suffix = option.custom_text ? ` | ${option.custom_text}` : '';
        return `${option.text}${suffix}`.trim();
    }
    hasRateplanRequirement() {
        return this.rateplanOptions.length > 0;
    }
    validateRateplanSelection() {
        if (!this.hasRateplanRequirement()) {
            return true;
        }
        if (!this.selectedRateplan) {
            this.showRateplanError = true;
            this.focusRateplanSelect();
            return false;
        }
        return true;
    }
    focusRateplanSelect() {
        var _a, _b, _c, _d;
        const selectEl = (_c = (_b = (_a = this.rateplanSelectEl) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('select')) !== null && _c !== void 0 ? _c : (_d = this.rateplanSelectEl) === null || _d === void 0 ? void 0 : _d.querySelector('select');
        if (selectEl) {
            selectEl.focus();
        }
    }
    resetState(data) {
        if (!data) {
            this.selectedRateplan = undefined;
            this.showRateplanError = false;
            return;
        }
        this.selectedRateplan = undefined;
        this.showRateplanError = false;
    }
    render() {
        const hasRateplans = this.hasRateplanRequirement();
        return (h("ir-dialog", { key: 'f8d05ecefbfa825c6960cc9e5c03bf492cd1c4a2', ref: el => (this.dialogEl = el), onOpenChange: this.handleDialogVisibilityChange }, this.data && (h(Fragment, { key: '3dc3978f5818ca0c41a86805f823daaac9437480' }, this.data.title && h("div", { key: '4728c2068d04f7393b2301502877cdf07d801e86', slot: "modal-title" }, this.data.title), h("div", { key: 'b2ddd9020373860b26e9a6904f89767a6993988d', slot: "modal-body", class: "dialog-body" }, h("p", { key: 'b9cfea3802ca93dc624877169f387d742a0a1bdf', class: "text-left dialog-body__description m-0 p-0" }, this.data.description), hasRateplans && (h("ir-select", { key: '9ca1947dbac2c5294d1a535bf99bd43d637dad66', ref: el => (this.rateplanSelectEl = el), required: true, firstOption: "Select rate plan...", data: this.rateplanOptions.map(option => ({ text: option.text, value: option.value })), error: this.showRateplanError, onSelectChange: this.handleRateplanChange }))), h("div", { key: 'ee7537c6b375fb2bd85b2150d3107c5f5fe88c3d', class: "dialog-footer", slot: "modal-footer" }, h("ir-button", { key: 'ebd80de6ec4512d73fae72e0302d01554fe68f9b', onClick: this.handleCancelClick, text: "Cancel", size: "md", btn_color: "secondary" }), h("ir-button", { key: 'a2f819e6227f20850e7f771d4998bbf23959bd97', text: "Confirm", onClick: () => this.reallocateUnit(), size: "md", isLoading: isRequestPending('/ReAllocate_Exposed_Room') }))))));
    }
    get hostEl() { return getElement(this); }
    static get watchers() { return {
        "data": ["handleDataChange"]
    }; }
};
IglReallocationDialog.style = IglReallocationDialogStyle0;

const SelectedUnitSchema = z.object({
    roomtype_id: z.coerce.number(),
    unit_id: z.coerce.number(),
    rateplan_id: z.coerce.number(),
});

const iglSplitBookingCss = ".sc-igl-split-booking-h{display:block}.sc-igl-split-booking-h{display:flex;flex-direction:column;flex:1 1 0%;height:100%}.bulk-sheet-container.sc-igl-split-booking{display:flex;flex-direction:column;flex:1;min-height:0;gap:1rem}.animated-container.sc-igl-split-booking{transition:all 0.5s ease}.physical-room.sc-igl-split-booking{margin-left:1rem !important}.physical-room.sc-igl-split-booking>td.sc-igl-split-booking:last-child{padding-left:1rem}.room-type-list.sc-igl-split-booking{padding:0;margin:0}.room-type-list.sc-igl-split-booking>li.sc-igl-split-booking,.physical-room.sc-igl-split-booking,.room-type-row.sc-igl-split-booking{list-style:none}";
const IglSplitBookingStyle0 = iglSplitBookingCss;

const sheetCss$1 = ".sc-igl-split-booking-h{height:100%}.sheet-container.sc-igl-split-booking{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-igl-split-booking{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-igl-split-booking{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-igl-split-booking{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-igl-split-booking{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-igl-split-booking{flex-direction:row;align-items:center}}";
const IglSplitBookingStyle1 = sheetCss$1;

const IglSplitBooking = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal", 7);
        this.roomTypes = [];
        this.selectedUnit = {};
        this.mealPlanOptions = null;
        this.bookingService = new BookingService();
    }
    componentWillLoad() {
        this.room = this.getRoom();
        this.defaultDates = Object.assign({}, this.generateDates(this.room));
        this.selectedDates = Object.assign({}, this.defaultDates);
        console.log(this.booking);
    }
    getRoom() {
        if (!this.booking) {
            throw new Error('Missing booking');
        }
        if (!this.identifier) {
            throw new Error('Missing Identifier');
        }
        const room = this.booking.rooms.find(r => r.identifier === this.identifier);
        if (!room) {
            throw new Error(`Couldn't find room with identifier ${this.identifier}`);
        }
        return room;
    }
    generateDates(room) {
        let MFromDate = hooks(room.from_date, 'YYYY-MM-DD');
        const MToDate = hooks(room.to_date, 'YYYY-MM-DD').add(-1, 'days');
        const today = hooks();
        if (MFromDate.isBefore(today)) {
            MFromDate = today.clone();
        }
        if (MFromDate.isSame(today)) {
            return { from_date: MFromDate, to_date: MToDate };
        }
        if (MFromDate.isSameOrAfter(today)) {
            return { from_date: MFromDate.clone().add(1, 'days'), to_date: MToDate };
        }
        return { from_date: today.clone().add(1, 'days'), to_date: MToDate };
    }
    async checkBookingAvailability() {
        resetBookingStore();
        const from_date = this.selectedDates.from_date.format('YYYY-MM-DD');
        const to_date = this.selectedDates.to_date.format('YYYY-MM-DD');
        const is_in_agent_mode = this.booking.agent !== null;
        try {
            const data = await this.bookingService.getBookingAvailability({
                from_date,
                to_date,
                propertyid: this.booking.property.id,
                adultChildCount: {
                    adult: 1,
                    child: 0,
                },
                language: 'en',
                room_type_ids: [],
                currency: this.booking.currency,
                agent_id: is_in_agent_mode ? this.booking.agent.id : null,
                is_in_agent_mode,
                room_type_ids_to_update: [],
            });
            this.roomTypes = data;
        }
        catch (error) {
            console.error('Error initializing booking availability:', error);
        }
    }
    async doReservation() {
        try {
            this.isLoading = true;
            this.errors = null;
            const selectedUnit = SelectedUnitSchema.parse(this.selectedUnit);
            const oldRooms = this.booking.rooms.filter(r => r.identifier !== this.identifier);
            let rooms = [
                ...oldRooms,
                Object.assign(Object.assign({}, this.room), { from_date: this.room.from_date, to_date: this.selectedDates.from_date.format('YYYY-MM-DD'), days: this.room.days.filter(r => hooks(r.date, 'YYYY-MM-DD').isBefore(this.selectedDates.from_date, 'dates')), departure_time: null }),
                Object.assign(Object.assign({}, this.room), { identifier: null, assigned_units_pool: null, parent_room_identifier: this.room.identifier, is_split: true, roomtype: {
                        id: selectedUnit.roomtype_id,
                    }, rateplan: {
                        id: selectedUnit.rateplan_id || this.room.rateplan.id,
                    }, departure_time: this.room.departure_time, unit: { id: selectedUnit.unit_id }, from_date: this.selectedDates.from_date.format('YYYY-MM-DD'),
                    // to_date: this.selectedDates.to_date.format('YYYY-MM-DD'),
                    days: this.room.days.filter(r => hooks(r.date, 'YYYY-MM-DD').isSameOrAfter(this.selectedDates.from_date, 'dates')) }),
            ];
            const booking = {
                assign_units: true,
                is_pms: true,
                is_direct: this.booking.is_direct,
                is_backend: true,
                is_in_loyalty_mode: this.booking.is_in_loyalty_mode,
                promo_key: this.booking.promo_key,
                extras: this.booking.extras,
                agent: this.booking.agent,
                booking: {
                    from_date: this.booking.from_date,
                    to_date: this.booking.to_date,
                    remark: this.booking.remark,
                    booking_nbr: this.booking.booking_nbr,
                    property: this.booking.property,
                    booked_on: this.booking.booked_on,
                    source: this.booking.source,
                    rooms,
                    currency: this.booking.currency,
                    arrival: this.booking.arrival,
                    guest: this.booking.guest,
                },
                pickup_info: this.booking.pickup_info,
            };
            await this.bookingService.doReservation(booking);
            this.closeModal.emit(null);
        }
        catch (error) {
            const err = {};
            if (error instanceof ZodError) {
                console.error(error);
                error.issues.forEach(i => {
                    err[i.path[0]] = true;
                });
                this.errors = Object.assign({}, err);
            }
        }
        finally {
            this.isLoading = false;
        }
    }
    updateSelectedUnit(params) {
        var _a;
        const merged = Object.assign(Object.assign({}, this.selectedUnit), params);
        const roomTypesSource = (_a = calendar_data === null || calendar_data === void 0 ? void 0 : calendar_data.property) === null || _a === void 0 ? void 0 : _a.roomtypes;
        const mealPlanResult = checkMealPlan({
            rateplan_id: this.room.rateplan.id.toString(),
            roomTypeId: merged === null || merged === void 0 ? void 0 : merged.roomtype_id,
            roomTypes: roomTypesSource,
        });
        const hasExplicitRateplanUpdate = Object.prototype.hasOwnProperty.call(params, 'rateplan_id');
        if (Array.isArray(mealPlanResult)) {
            this.mealPlanOptions = mealPlanResult;
            if (!hasExplicitRateplanUpdate) {
                delete merged.rateplan_id;
            }
        }
        else {
            this.mealPlanOptions = null;
            if (!hasExplicitRateplanUpdate) {
                if (mealPlanResult) {
                    merged.rateplan_id = Number(mealPlanResult.value);
                }
                else {
                    delete merged.rateplan_id;
                }
            }
        }
        this.selectedUnit = merged;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("form", { key: 'bd5e1dc2cfda4b97eaf69b781b7668520c233ff9', onSubmit: e => {
                e.preventDefault();
                this.doReservation();
            }, class: "sheet-container" }, h("ir-title", { key: '19c6b7a3614944709ef1a0c34f4704a4e6eaf397', class: "px-1 sheet-header mb-0", displayContext: "sidebar", onCloseSideBar: () => this.closeModal.emit(), label: `Split unit ${(_a = this.room) === null || _a === void 0 ? void 0 : _a.unit['name']}` }), h("section", { key: '06d86ae9845bf6e150de729c9fb0a156bf9256da', class: "px-1 sheet-body" }, h("div", { key: '3c616bf3cdd3d6d942c5bcb333a54d067a3e1519', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '3a213c7df5db1bd348860b1dee35ac45445b0e31' }, h("ir-date-view", { key: 'c2a3dd1fa6d042ce7f1687de2a6441081a805307', from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false })), h("p", { key: '9fae47841b6b58be624fb4d50abc3307295fa481', class: "m-0 p-0" }, this.room.rateplan.short_name, " ", this.room.rateplan.is_non_refundable ? locales.entries.Lcz_NonRefundable : '')), h("div", { key: '7ce35830363a43d70ccdc5876438e348d95670df', class: 'd-flex align-items-center mt-1', style: { gap: '0.5rem' } }, h("span", { key: 'e6b9eccfbfa84cf0b441dc51baf151c5eb383243' }, "From:"), h("ir-date-picker", { key: 'b92cbea1093568603c8d31f9f72caa9b3889698a', "data-testid": "pickup_arrival_date", date: (_c = (_b = this.selectedDates) === null || _b === void 0 ? void 0 : _b.from_date) === null || _c === void 0 ? void 0 : _c.format('YYYY-MM-DD'), maxDate: (_d = this.defaultDates) === null || _d === void 0 ? void 0 : _d.to_date.format('YYYY-MM-DD'), minDate: (_e = this.defaultDates) === null || _e === void 0 ? void 0 : _e.from_date.format('YYYY-MM-DD'), emitEmptyDate: true,
            // aria-invalid={this.errors?.arrival_date && !this.pickupData.arrival_date ? 'true' : 'false'}
            onDateChanged: evt => {
                this.selectedDates = Object.assign(Object.assign({}, this.selectedDates), { from_date: evt.detail.start });
            } }, h("input", { key: 'f86cdcec2491029f169b8050cf79c63bfd750b0e', type: "text", slot: "trigger", value: this.selectedDates.from_date ? this.selectedDates.from_date.format('MMM DD, YYYY') : null, class: `form-control input-sm  text-center`, style: { width: '120px' } })), h("ir-button", { key: '9b4ee505d797d617c5a690f73cca825c5454c687', isLoading: isRequestPending('/Check_Availability'), text: "Check available units", size: "sm", onClick: () => this.checkBookingAvailability() })), ((_f = this.errors) === null || _f === void 0 ? void 0 : _f.roomtype_id) && h("p", { key: 'ce1e9e4d3966121f91f86abe704f9946a0639174', class: "text-danger text-left mt-2" }, "Please select a room"), h("ul", { key: 'd7e484ea496c3487c7c99d5e1a66aa1be7c93a83', class: "room-type-list mt-2" }, (_g = this.roomTypes) === null || _g === void 0 ? void 0 : _g.map(roomType => {
            if (!roomType.is_available_to_book) {
                return null;
            }
            const units = (() => {
                const unitMap = new Map();
                for (const rateplan of roomType.rateplans) {
                    for (const unit of rateplan.assignable_units) {
                        if (unit.Is_Fully_Available) {
                            unitMap.set(unit.pr_id, unit.name);
                        }
                    }
                }
                return Array.from(unitMap, ([id, name]) => ({ id, name }));
            })();
            return (h(Fragment, null, h("li", { key: `roomTypeRow-${roomType.id}`, class: `room-type-row` }, h("div", { class: 'd-flex choice-row' }, h("span", { class: "text-left room-type-name" }, roomType.name))), units.map((room, j) => {
                var _a, _b, _c, _d;
                const row_style = j === roomType.physicalrooms.length - 1 ? 'pb-1' : '';
                const showMealPlanSelect = ((_a = this.selectedUnit) === null || _a === void 0 ? void 0 : _a.unit_id) === room.id && Array.isArray(this.mealPlanOptions) && this.mealPlanOptions.length > 0;
                return (h("li", { key: `physicalRoom-${room.id}-${j}`, class: `physical-room ${row_style}` }, h("div", { class: 'd-flex choice-row align-items-center', style: { gap: '0.5rem' } }, h("ir-radio", { class: "pl-1", name: "unit", checked: ((_b = this.selectedUnit) === null || _b === void 0 ? void 0 : _b.unit_id) === room.id, onCheckChange: () => this.updateSelectedUnit({
                        roomtype_id: roomType.id,
                        unit_id: room.id,
                    }), label: room.name }), showMealPlanSelect && (h("ir-select", { firstOption: "Select a new rateplan...", error: ((_c = this.errors) === null || _c === void 0 ? void 0 : _c.rateplan_id) && !((_d = this.selectedUnit) === null || _d === void 0 ? void 0 : _d.rateplan_id), onSelectChange: e => {
                        const value = e.detail === null || e.detail === undefined || e.detail === '' ? undefined : Number(e.detail);
                        this.updateSelectedUnit({
                            rateplan_id: value,
                        });
                    }, data: this.mealPlanOptions.map(e => (Object.assign(Object.assign({}, e), { text: e.text + `${e.custom_text ? ' | ' : ''}${e.custom_text}` }))) })
                // <ir-dropdown
                //   onOptionChange={e => {
                //     this.updateSelectedUnit({
                //       rateplan_id: Number(e.detail.toString()),
                //     });
                //   }}
                //   style={{ '--ir-dropdown-menu-min-width': 'max-content' }}
                // >
                //   <button type="button" class="btn btn-sm form-control pr-2 d-flex align-items-center" style={{ minWidth: '200px' }} slot="trigger">
                //     {this.selectedUnit?.rateplan_id ? this.mealPlanOptions.find(r => r.value === this.selectedUnit.rateplan_id.toString()).text : 'Choose a meal plan'}
                //   </button>
                //   {this.mealPlanOptions.map(o => (
                //     <ir-dropdown-item value={o.value}>
                //       <p class="m-0 p-0">
                //         {o.text} {o.custom_text && <span class="m-0 p-0">| {o.custom_text}</span>}
                //       </p>
                //     </ir-dropdown-item>
                //   ))}
                // </ir-dropdown>
                ))));
            })));
        }))), h("div", { key: '351a4b4f20eabd514008fb5eeec077224a07e388', class: 'sheet-footer' }, h("ir-button", { key: '514e1dc46774a5971413b02ef4889d776f8912e5', text: locales.entries.Lcz_Cancel, btn_color: "secondary", class: 'flex-fill', onClickHandler: () => this.closeModal.emit(null) }), h("ir-button", { key: '5de04d8e382927d2f44355cda992deb56d11c857', isLoading: this.isLoading, text: locales.entries.Lcz_Confirm, btn_type: "submit", class: "flex-fill" }))));
    }
};
IglSplitBooking.style = IglSplitBookingStyle0 + IglSplitBookingStyle1;

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
        return (h(Host, { key: 'cecb8a951ad656ecfec0d005505ca23785ef96fb' }, h("div", { key: '96976cc9b64f3a183446404404907c97e75ddb41', class: "sectionContainer" }, h("div", { key: 'f567c916f0812d2c0ff38d074aa1ff1da9d636a2', class: "font-weight-bold mt-1 font-small-3" }, (_a = this.categoriesData[this.categoryId]) === null || _a === void 0 ? void 0 : _a.name), this.getEventView(this.categoryId, this.eventDatas))));
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
        return (h(Host, { key: '0973d0b19154b4cb6e1e37ad7dbd79e62b4de0b7', class: "tobeAssignedContainer pr-1 text-left" }, h("div", { key: '7eae8a3bd675ebb3acc7521b829298a213de0cc3' }, h("div", { key: '5a3b26a35fab0ffa2a79efc29bac35338f12a7db' }, h("div", { key: '8de852a09ec52ed94db031f808e8c8daea3e9db0', class: "stickyHeader pt-1" }, h("div", { key: 'f7216bb1e80e78d4a59a379d1a2b20e5f5ab4e08', class: 'assignment_header' }, h("p", { key: '7f3eb8c5510a85cb08cf1a96d1522216fa18744c', class: "tobeAssignedHeader " }, locales.entries.Lcz_Assignments), h("ir-button", { key: '9cd8dd1b27ff617f2f6940fbe7f40928fd41bef1', class: "close_btn", variant: "icon", btn_styles: "close_btn_style", icon_name: "double_caret_left", style: colorVariants.secondary, onClickHandler: () => this.handleOptionEvent('closeSideMenu'), visibleBackgroundOnHover: true })), h("hr", { key: '447aa305992c52f803453d2838bde5b5cea5cc25' }), Object.keys(this.data).length === 0 ? (h("p", null, locales.entries.Lcz_AllBookingsAreAssigned)) : this.isLoading ? (h("p", { class: "d-flex align-items-center" }, h("span", { class: "p-0" }, this.loadingMessage), h("div", { class: "dots" }, h("div", { class: "dot" }), h("div", { class: "dot" }), h("div", { class: "dot" })))) : (h(Fragment, null, this.orderedDatesList.length ? (h("div", { class: `custom-dropdown border border-light rounded text-center ` + (this.showDatesList ? 'show' : ''), id: "dropdownMenuButton", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, h("div", { class: 'dropdown-toggle' }, h("span", { class: "font-weight-bold" }, this.data[this.selectedDate].dateStr), h("svg", { class: 'caret-icon', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 14, width: 14 }, h("path", { fill: "#6b6f82", d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), h("div", { class: "dropdown-menu dropdown-menu-right full-width", "aria-labelledby": "dropdownMenuButton" }, (_a = this.orderedDatesList) === null || _a === void 0 ? void 0 : _a.map(ordDate => (h("div", { class: "dropdown-item pointer", onClick: () => this.showForDate(ordDate) }, this.data[ordDate].dateStr)))))) : (locales.entries.Lcz_AllBookingsAreAssigned)))), !this.isLoading && (h("div", { key: '847d04ff658f1828953b1cfb93e5db2a9c7e864d', class: "scrollabledArea" }, this.orderedDatesList.length ? (Object.keys(this.data[this.selectedDate].categories).length ? (this.getCategoryView()) : (h("div", { class: "mt-1" }, locales.entries.Lcz_AllAssignForThisDay))) : null))))));
    }
    static get watchers() { return {
        "unassignedDatesProp": ["handleUnassignedDatesToBeAssignedChange"]
    }; }
};
IglToBeAssigned.style = IglToBeAssignedStyle0;

const irInteractiveTitleCss = ".sc-ir-interactive-title-h{display:block;width:100%;--hk-green:green}*.sc-ir-interactive-title{box-sizing:border-box}.popover-title.sc-ir-interactive-title{position:relative;width:100%;height:100%;margin:0;padding:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;z-index:10;left:0;display:flex;align-items:center}.popover-container.sc-ir-interactive-title{position:absolute;bottom:0px;left:var(--ir-popover-left, 10px);background:rgb(0, 0, 0);color:white;min-width:100%;box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 10px;z-index:9999;padding:3.5px 7px;border-radius:5px;pointer-events:none;opacity:0;transition:all 100ms ease;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;font-style:normal;font-weight:400;line-height:1.45;text-decoration:none;text-shadow:none;font-size:0.875rem}.popover-container[data-state='show'].sc-ir-interactive-title{opacity:1}.hk-dot.sc-ir-interactive-title{inset:0;position:absolute;display:flex;align-items:center;justify-content:center;width:fit-content;padding:4px;left:auto;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;padding-inline:var(--ir-popover-left);background:var(--ir-interactive-hk-bg, white);color:var(--dot-color, black)}.hk-dot.sc-ir-interactive-title-s>*[name='end']{height:12px}";
const IrInteractiveTitleStyle0 = irInteractiveTitleCss;

const IrInteractiveTitle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.cropSize = 20;
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
        return (h(Host, { key: '5e5d958cc28c179d36046216aa31840ec73222f3', style: { '--ir-popover-left': this.irPopoverLeft } }, h("p", { key: '443214bc0cae1c197931c9da74b711b18acae869', ref: el => {
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
            } }, h("span", { key: '10d45a69788a9159b106a7027fdcd8873fa01365', class: "cropped-title", style: {
                flexShrink: '1',
                minWidth: '0',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            } }, displayTitle), this.hkStatus && (h("div", { key: '61a887712b59033ed648755aa83fd5eed42341d3', title: this.broomTooltip, class: "hk-dot", style: { flexShrink: '0' } }, h("slot", { key: '34dc58fa219d7d6a39e2203108eeddf8b501bd7f', name: "end" }))))));
    }
    get el() { return getElement(this); }
};
IrInteractiveTitle.style = IrInteractiveTitleStyle0;

const irRoomNightsCss = ".sc-ir-room-nights-h{display:block;box-sizing:border-box;margin:0;position:relative}.loading-container.sc-ir-room-nights{position:relative;height:100%;width:100%;display:flex;align-items:center;justify-content:center}.close-icon.sc-ir-room-nights{position:absolute;top:18px;right:33px;outline:none}.close.sc-ir-room-nights{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:0.5;padding:0;background-color:transparent;border:0;appearance:none}.card.sc-ir-room-nights{top:0;z-index:1000}.card-title.sc-ir-room-nights{border-bottom:1px solid #e4e5ec;width:100%}.irfontgreen.sc-ir-room-nights{color:#0e930e}.currency.sc-ir-room-nights{display:block;position:absolute;margin:0;padding:0;height:auto;left:10px}.rate-input.sc-ir-room-nights{font-size:14px;line-height:0;padding:0;height:0;border-left:0;border-radius:0.25rem !important}.rate-input-container.sc-ir-room-nights{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1}.new-currency.sc-ir-room-nights{color:#3b4781;border:1px solid #cacfe7;font-size:0.975rem;height:2rem;background:rgb(255, 255, 255);padding-right:0 !important;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.input-group-prepend.sc-ir-room-nights span[data-state='focus'].sc-ir-room-nights{border-color:var(--blue)}.input-group-prepend.sc-ir-room-nights span[data-disabled].sc-ir-room-nights{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.rateInputBorder.sc-ir-room-nights{padding-left:5px !important;padding-right:5px !important;border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}";
const IrRoomNightsStyle0 = irRoomNightsCss;

const sheetCss = ".sc-ir-room-nights-h{height:100%}.sheet-container.sc-ir-room-nights{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-room-nights{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-room-nights{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-room-nights{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-room-nights{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-room-nights{flex-direction:row;align-items:center}}";
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

const irSuccessLoaderCss = ":host{display:block}.spinner{transform-origin:center;animation:spinner_svv2 0.75s infinite linear}@keyframes spinner_svv2{100%{transform:rotate(360deg)}}";
const IrSuccessLoaderStyle0 = irSuccessLoaderCss;

const IrSuccessLoader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.loaderComplete = createEvent(this, "loaderComplete", 7);
        /**
         * How long the spinner should be shown before transitioning to the success icon.
         * Value is expressed in milliseconds.
         */
        this.spinnerDuration = 1500;
        /**
         * How long the success icon should be shown before the loader dispatches the completion event.
         * Value is expressed in milliseconds.
         */
        this.successDuration = 1000;
        /**
         * Whether the loader should automatically start its cycle when it becomes active.
         */
        this.autoStart = true;
        /**
         * Controls the visibility of the loader. Setting this to `true` starts the spinner/success cycle.
         */
        this.active = true;
        this.phase = 'spinner';
    }
    componentWillLoad() {
        if (this.autoStart && this.active) {
            this.startCycle();
        }
    }
    disconnectedCallback() {
        this.clearTimers();
    }
    onActiveChange(isActive) {
        if (isActive) {
            if (this.autoStart) {
                this.startCycle();
            }
        }
        else {
            this.resetCycle();
        }
    }
    onDurationChange() {
        if (this.active && this.autoStart) {
            this.startCycle();
        }
    }
    startCycle() {
        this.clearTimers();
        this.phase = 'spinner';
        const spinnerDelay = Math.max(0, Number(this.spinnerDuration) || 0);
        if (spinnerDelay === 0) {
            this.showSuccess();
            return;
        }
        this.spinnerTimer = window.setTimeout(() => this.showSuccess(), spinnerDelay);
    }
    showSuccess() {
        this.phase = 'success';
        const successDelay = Math.max(0, Number(this.successDuration) || 0);
        if (successDelay === 0) {
            this.handleCompletion();
            return;
        }
        this.successTimer = window.setTimeout(() => this.handleCompletion(), successDelay);
    }
    handleCompletion() {
        this.loaderComplete.emit();
        this.active = false;
    }
    resetCycle() {
        this.clearTimers();
        this.phase = 'spinner';
    }
    clearTimers() {
        if (this.spinnerTimer) {
            clearTimeout(this.spinnerTimer);
            this.spinnerTimer = undefined;
        }
        if (this.successTimer) {
            clearTimeout(this.successTimer);
            this.successTimer = undefined;
        }
    }
    render() {
        return (h(Host, { key: '8d7d71a398ae473eaf194fc3f718d27de84fd3b5' }, this.phase === 'spinner' ? (h("svg", { part: "spinner", width: "18", height: "18", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z", class: "spinner" }))) : (h("ir-icons", { part: "check", name: "check", style: { color: '#45b16d' } }))));
    }
    static get watchers() { return {
        "active": ["onActiveChange"],
        "spinnerDuration": ["onDurationChange"],
        "successDuration": ["onDurationChange"]
    }; }
};
IrSuccessLoader.style = IrSuccessLoaderStyle0;

const irTabsCss = ".sc-ir-tabs-h{display:flex;align-items:center;position:relative;overflow-x:auto;gap:1rem;padding:0 1rem}.tab.sc-ir-tabs{font-size:0.95rem;font-weight:400;cursor:pointer;position:relative;margin:0;padding:0rem;padding-bottom:1rem;transition:color 0.3s ease;user-select:none;background-color:transparent;border:none;outline:none;flex:1 1 0%;text-align:center;white-space:nowrap}.tab[data-disabled].sc-ir-tabs{cursor:auto}.tab.sc-ir-tabs:hover{opacity:80%}.tab[data-state='selected'].sc-ir-tabs,.tab[data-state='selected'].sc-ir-tabs:hover{color:var(--blue, #1e9ff2);opacity:100%}.active-indicator.sc-ir-tabs{padding:0;bottom:0px;position:absolute;height:3px;border-radius:4px;transition:transform 0.3s ease, width 0.3s ease;background:var(--blue, #1e9ff2)}";
const IrTabsStyle0 = irTabsCss;

const IrTabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tabChanged = createEvent(this, "tabChanged", 7);
        /**
         * Array of tab objects containing id and label
         * @type {Tab[]}
         * @default []
         */
        this.tabs = [];
        /**
         * Whether the tabs are disabled
         * @type {boolean}
         * @default false
         */
        this.disabled = false;
        /**
         * Aria label for the tab list
         * @type {string}
         * @default 'Tabs'
         */
        this.ariaLabel = 'Tabs';
        this.remSize = (() => {
            const fontSize = getComputedStyle(document.documentElement).fontSize;
            return parseFloat(fontSize);
        })();
    }
    componentWillLoad() {
        var _a, _b;
        const tab = (_a = this.tabs) === null || _a === void 0 ? void 0 : _a.find(t => t.id === this.initialTab);
        if (tab) {
            this.selectTab(tab);
        }
        else if (((_b = this.tabs) === null || _b === void 0 ? void 0 : _b.length) > 0) {
            // Select first tab if no initial tab is specified
            this.selectTab(this.tabs[0]);
        }
    }
    // componentDidLoad() {
    //   this.updateActiveIndicator();
    // }
    disconnectedCallback() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }
    updateActiveIndicator() {
        // if (this.animationFrameId) {
        //   cancelAnimationFrame(this.animationFrameId);
        // }
        // this.animationFrameId = requestAnimationFrame(() => {
        //   const selectedTab = this.el.querySelector(`button.tab[data-state="selected"]`);
        //   if (selectedTab && this.activeIndicator) {
        //     const { left, width } = selectedTab.getBoundingClientRect();
        //     const parentLeft = this.el.getBoundingClientRect().left;
        //     const position = left - parentLeft;
        //     this.activeIndicator.style.width = `${width}px`;
        //     this.activeIndicator.style.transform = `translateX(${position}px)`;
        //   }
        // });
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        requestAnimationFrame(() => {
            const selectedTab = this.el.querySelector(`.tab[data-state="selected"]`);
            if (selectedTab) {
                const { left, width } = selectedTab.getBoundingClientRect();
                const parentLeft = this.el.getBoundingClientRect().left;
                const position = left - parentLeft - this.remSize;
                this.activeIndicator.style.width = `${width - this.remSize}px`;
                this.activeIndicator.style.transform = `translateX(${position}px)`;
            }
        });
    }
    selectTab(tab) {
        if (this.disabled)
            return;
        this._selectedTab = tab;
        this.updateActiveIndicator();
        this.tabChanged.emit(tab);
    }
    handleKeyDown(event, currentTab) {
        if (this.disabled)
            return;
        const currentIndex = this.tabs.findIndex(t => t.id === currentTab.id);
        let nextIndex = currentIndex;
        switch (event.key) {
            case 'ArrowRight':
                event.preventDefault();
                nextIndex = (currentIndex + 1) % this.tabs.length;
                break;
            case 'ArrowLeft':
                event.preventDefault();
                nextIndex = currentIndex === 0 ? this.tabs.length - 1 : currentIndex - 1;
                break;
            case 'Home':
                event.preventDefault();
                nextIndex = 0;
                break;
            case 'End':
                event.preventDefault();
                nextIndex = this.tabs.length - 1;
                break;
            case 'Enter':
            case ' ':
                event.preventDefault();
                this.selectTab(currentTab);
                return;
            default:
                return;
        }
        const nextTab = this.tabs[nextIndex];
        if (nextTab) {
            this.selectTab(nextTab);
            requestAnimationFrame(() => {
                const tabButton = this.el.querySelector(`button.tab[data-tab-id="${nextTab.id}"]`);
                if (tabButton) {
                    tabButton.focus();
                }
            });
        }
    }
    render() {
        return (h(Host, { key: '55878aae70d318b44526da6b192a252a3ea94a81', role: "tablist", "aria-label": this.ariaLabel, "aria-orientation": "horizontal" }, this.tabs.map(tab => {
            var _a, _b, _c;
            return (h("button", { class: "tab", key: tab.id, type: "button", "data-tab-id": tab.id, role: "tab", tabindex: ((_a = this._selectedTab) === null || _a === void 0 ? void 0 : _a.id) === tab.id ? 0 : -1, "aria-selected": ((_b = this._selectedTab) === null || _b === void 0 ? void 0 : _b.id) === tab.id ? 'true' : 'false', "aria-controls": `tabpanel-${tab.id}`, id: `tab-${tab.id}`, disabled: this.disabled, "data-state": ((_c = this._selectedTab) === null || _c === void 0 ? void 0 : _c.id) === tab.id ? 'selected' : undefined, onClick: () => this.selectTab(tab), onKeyDown: event => this.handleKeyDown(event, tab) }, tab.label));
        }), h("span", { key: '0107bde305b385610dc935d0d817a0504fc69a1f', class: "active-indicator", ref: el => (this.activeIndicator = el) })));
    }
    get el() { return getElement(this); }
};
IrTabs.style = IrTabsStyle0;

export { IglBookingEvent as igl_booking_event, IglBulkBlock as igl_bulk_block, IglBulkOperations as igl_bulk_operations, IglBulkStopSale as igl_bulk_stop_sale, IglCalBody as igl_cal_body, IglCalFooter as igl_cal_footer, IglCalHeader as igl_cal_header, IglLegends as igl_legends, IglReallocationDialog as igl_reallocation_dialog, IglSplitBooking as igl_split_booking, IglTbaCategoryView as igl_tba_category_view, IglToBeAssigned as igl_to_be_assigned, IrInteractiveTitle as ir_interactive_title, IrRoomNights as ir_room_nights, IrSuccessLoader as ir_success_loader, IrTabs as ir_tabs };

//# sourceMappingURL=igl-booking-event_16.entry.js.map