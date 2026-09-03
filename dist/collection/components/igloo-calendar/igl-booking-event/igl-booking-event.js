import { Fragment, Host, h } from "@stencil/core";
import { BookingService } from "../../../services/booking-service/booking.service";
import { buildSplitIndex, calculateDaysBetweenDates, getSplitRole, transformNewBooking } from "../../../utils/booking";
import { checkMealPlan, formatAmount, isBlockUnit, showToast } from "../../../utils/utils";
import moment from "moment";
import { EventsService } from "../../../services/events.service";
import locales from "../../../stores/locales.store";
import calendar_dates from "../../../stores/calendar-dates.store";
import calendar_data from "../../../stores/calendar-data";
import { CELL_WIDTH, computeEventHorizontalGeometry, EVENT_HEIGHT, getEventTopWithinRow, getTotalGridWidth, isRtlDirection, ROOM_HEADER_WIDTH, snapEventLeft, toPhysicalLeft, } from "../../../utils/calendar-grid";
import { DragAutoScroller } from "../../../utils/drag-autoscroll";
import { formatBookingNumber } from "../../../utils/number";
export class IglBookingEvent {
    element;
    currency;
    is_vacation_rental = false;
    language;
    bookingEvent;
    allBookingEvents = [];
    countries;
    roomTop;
    hideBubbleInfo;
    updateEventData;
    dragOverEventData;
    showRoomNightsDialog;
    showDialog;
    resetStretchedBooking;
    updateBookingEvent;
    renderElement = false;
    position;
    isShrinking = null;
    dayWidth = CELL_WIDTH;
    eventSpace = 8;
    /* show bubble */
    showInfoPopup = false;
    bubbleInfoTopSide = false;
    isStretch = false;
    /*Services */
    eventsService = new EventsService();
    bookingService = new BookingService();
    /* Resize props */
    resizeSide = '';
    isDragging = false;
    initialX;
    initialY;
    currentX;
    currentY;
    initialWidth;
    initialLeft;
    finalWidth;
    dragInitPos;
    dragEndPos;
    elementRect;
    isTouchStart;
    moveDifferenceX;
    moveDifferenceY;
    animationFrameId = null;
    minResizeDays = 1;
    /* Auto-scroll: keeps the calendar moving while a drag or stretch is held near its edge. */
    autoScroller = null;
    scrollHost = null;
    /** Last drag offsets written to the DOM, so a repeated apply for the same state is skipped. */
    appliedDistance = null;
    /**
     * Room row extents captured when a move drag starts, in the same `.bodyContainer` grid space the
     * bar positions itself in, and used to settle it on release. Captured up front rather than read
     * at drop time so the measurement can't be disturbed by the drag itself, and because the same
     * pass is what excludes category headers (taller than a room row, and not droppable).
     */
    dragRowBands = [];
    handleMouseMoveBind = this.handleMouseMove.bind(this);
    handleMouseUpBind = this.handleMouseUp.bind(this);
    handleClickOutsideBind = this.handleClickOutside.bind(this);
    handleHostScrollBind = this.handleHostScroll.bind(this);
    role = '';
    componentWillLoad() {
        window.addEventListener('click', this.handleClickOutsideBind);
        this.bookingEvent.SPLIT_INDEX = buildSplitIndex(this.bookingEvent.ROOMS);
        if (this.bookingEvent.SPLIT_INDEX) {
            this.role = getSplitRole(this.bookingEvent.SPLIT_INDEX, this.bookingEvent.IDENTIFIER) ?? '';
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
        this.endAutoScroll();
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
                    // const previousToDate = moment(to_date, 'YYYY-MM-DD').add(-1, 'days').format('YYYY-MM-DD');
                    // if (
                    //   (!moment(this.bookingEvent.TO_DATE, 'YYYY-MM-DD').isSame(moment(to_date, 'YYYY-MM-DD'), 'dates') ||
                    //     this.findRoomType(Number(this.bookingEvent.PR_ID)) !== this.findRoomType(Number(toRoomId))) &&
                    //   // &&(calendar_dates.disabled_cells.get(`${toRoomId}_${from_date}`)?.disabled ||
                    //   //   (calendar_dates.disabled_cells.get(`${toRoomId}_${to_date}`)?.disabled && calendar_dates.disabled_cells.get(`${toRoomId}_${previousToDate}`)?.disabled))
                    //   !this.isStretch
                    // ) {
                    //   this.reset('This room isn’t available for the entire selected period. Please choose different dates or a different room.');
                    // }
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
                                const { description, status, newRatePlans, matchedRatePlan } = this.getModalDescription(toRoomId, from_date, to_date);
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
                                this.showDialog.emit({
                                    reason: 'reallocate',
                                    ...event.detail,
                                    description,
                                    title: '',
                                    rateplans: newRatePlans,
                                    matchedRatePlan,
                                    hideConfirmButton,
                                    from_date: fromDate,
                                    to_date: toDate,
                                });
                            }
                            else {
                                // if (this.checkIfSlotOccupied(toRoomId, from_date, to_date)) {
                                //   this.animationFrameId = requestAnimationFrame(() => {
                                //     this.resetBookingToInitialPosition();
                                //   });
                                //   throw new Error('Overlapping Dates');
                                // } else {
                                // let stretchDirection: "left" | "right"
                                // const oldFromDate = this.bookingEvent.defaultDates.from_date;
                                // const oldToDate = this.bookingEvent.defaultDates.to_date;
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
                                // TODO: validate dates
                                // const validateDates = (base_date: string, to_date: string) => {
                                //   let cursor = base_date;
                                //   let counter = 0;
                                //   while (cursor !== to_date) {
                                //     if (calendar_dates.disabled_cells.get(`${toRoomId}_${cursor}`)?.disabled) {
                                //       counter++;
                                //     }
                                //     cursor = moment(cursor, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD');
                                //   }
                                //   if (counter >= 1) {
                                //     this.reset(locales.entries.Lcz_ThisUnitIsNotAvailable);
                                //   }
                                // };
                                // if (moment(oldToDate, 'YYYY-MM-DD').isBefore(moment(to_date), 'dates')) {
                                //   validateDates(oldToDate, to_date);
                                // } else if (moment(oldFromDate, 'YYYY-MM-DD').isAfter(moment(from_date, 'YYYY-MM-DD'), 'dates')) {
                                //   validateDates(from_date, oldFromDate);
                                // }
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
                                    this.showDialog.emit({ reason: 'stretch', ...payload });
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
            showToast({
                title: error.message,
                description: '',
                type: 'error',
            });
            console.log('something went wrong');
        }
    }
    buildBarIds() {
        const bookingId = this.getBookingId();
        return {
            bar: `event_${bookingId}`,
            lateCheckout: `event_late_checkout_${bookingId}`,
            balance: `event_balance_${bookingId}`,
        };
    }
    async fetchAndAssignBookingData() {
        try {
            console.log('clicked on book#', this.bookingEvent.BOOKING_NUMBER);
            const validStatuses = ['IN-HOUSE', 'CONFIRMED', 'PENDING-CONFIRMATION', 'CHECKED-OUT'];
            if (!validStatuses.includes(this.bookingEvent.STATUS)) {
                return;
            }
            const data = await this.bookingService.getExposedBooking({ booking_nbr: this.bookingEvent.BOOKING_NUMBER, language: 'en' });
            const base_booking = { ...data };
            const filteredRooms = data.rooms.filter(room => room['assigned_units_pool'] === this.bookingEvent.ID);
            if (filteredRooms.length === 0) {
                throw new Error(`booking#${this.bookingEvent.BOOKING_NUMBER} has an empty array`);
            }
            if (filteredRooms.some(room => room['assigned_units_pool'] === null)) {
                throw new Error(`booking#${this.bookingEvent.BOOKING_NUMBER} has an empty pool`);
            }
            data.rooms = filteredRooms;
            const transformedBooking = transformNewBooking(data)[0];
            const { ID, TO_DATE, FROM_DATE, NO_OF_DAYS, STATUS, NAME, IDENTIFIER, origin, TOTAL_PRICE, PR_ID, POOL, BOOKING_NUMBER, NOTES, is_direct, BALANCE, channel_booking_nbr, ...otherBookingData } = transformedBooking;
            this.bookingEvent = {
                ...otherBookingData,
                ...this.bookingEvent,
                channel_booking_nbr,
                booking: data,
                base_booking,
                DEPARTURE_TIME: otherBookingData.DEPARTURE_TIME,
                PHONE: otherBookingData.PHONE,
                PHONE_PREFIX: otherBookingData.PHONE_PREFIX,
                PRIVATE_NOTE: otherBookingData.PRIVATE_NOTE,
                origin,
                BALANCE,
                TOTAL_PRICE,
                ROOM_INFO: { ...this.bookingEvent.ROOM_INFO, sharing_persons: otherBookingData.ROOM_INFO.sharing_persons },
            };
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
    findRoomType = (roomId) => {
        let roomType = this.bookingEvent.roomsInfo.filter(room => room.physicalrooms.some(r => r.id === +roomId));
        if (roomType.length) {
            return roomType[0].id;
        }
        return null;
    };
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
                        const mealPlans = checkMealPlan({
                            rateplan_id: this.bookingEvent.RATE_PLAN_ID,
                            roomTypeId: targetRT,
                            roomTypes: calendar_data?.property?.roomtypes,
                        });
                        return {
                            description: locales.entries.Lcz_OTA_Modification_Alter,
                            status: '200',
                            newRatePlans: Array.isArray(mealPlans) ? mealPlans : undefined,
                            matchedRatePlan: Array.isArray(mealPlans) ? null : mealPlans,
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
                        roomTypes: calendar_data?.property?.roomtypes,
                    });
                    return {
                        description: locales.entries.Lcz_SameRatesWillBeKept,
                        status: '200',
                        newRatePlans: Array.isArray(mealPlans) ? mealPlans : undefined,
                        matchedRatePlan: Array.isArray(mealPlans) ? null : mealPlans,
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
        const isOccupied = this.allBookingEvents
            .filter(event => event.ID !== 'NEW_TEMP_EVENT')
            .some(event => {
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
    getEventType() {
        return this.bookingEvent.event_type;
    }
    getEventLegend() {
        // console.log(this.getBookingStatus());
        let status = this.bookingEvent?.legendData.statusId[this.getBookingStatus()];
        let orderRide = this.isNewEvent() ? { color: '#f9f9c9' } : {};
        return {
            ...this.bookingEvent?.legendData[status.id],
            ...status,
            ...orderRide,
        };
    }
    getLegendOfStatus(aStatusId) {
        // console.log(aStatusId);
        let status = this.bookingEvent?.legendData.statusId[aStatusId];
        return { ...this.bookingEvent.legendData[status.id], ...status };
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
    /**
     * True once the booking's actual FROM_DATE lands after the loaded calendar window's nominal
     * start date - i.e. this is a "normal" booking, not one that continues in from before the
     * visible range. Drives both the skewed/continuation visual (render()) and the half-cell
     * position adjustment (getPosition()), computed once so both stay in sync.
     */
    startsAfterWindowOpen() {
        return !this.isNewEvent() && !!this.bookingEvent.defaultDates && moment(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE));
    }
    getPosition() {
        const pos = { top: '0px', left: '0px', width: '0px', height: `${EVENT_HEIGHT}px` };
        if (typeof this.roomTop !== 'number') {
            return pos;
        }
        pos.top = `${this.roomTop + getEventTopWithinRow()}px`;
        const days = calendar_dates.days;
        const { left: logicalLeft, width } = computeEventHorizontalGeometry({
            days,
            fromDate: this.bookingEvent.FROM_DATE,
            stayDays: this.getStayDays(),
            startsAfterWindowOpen: this.startsAfterWindowOpen(),
            eventSpace: this.eventSpace,
        });
        const totalGridWidth = getTotalGridWidth(days.length);
        pos.left = `${toPhysicalLeft(logicalLeft, width, isRtlDirection(locales.direction), totalGridWidth)}px`;
        pos.width = `${width}px`;
        return pos;
    }
    getNumber(aData) {
        return aData ? parseFloat(aData) : 0;
    }
    /**
     * Pointer coordinates for a mouse, pointer or touch event, in viewport space.
     * Touch events carry no `clientX`/`clientY` of their own - they live on the first touch point.
     */
    getPointerPosition(event) {
        const touch = event.touches?.[0] ?? event.changedTouches?.[0];
        return {
            clientX: event.clientX ?? touch?.clientX ?? 0,
            clientY: event.clientY ?? touch?.clientY ?? 0,
        };
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
        const { clientX, clientY } = this.getPointerPosition(event);
        if (side === 'move') {
            this.initialX = clientX;
            this.initialY = clientY;
            this.elementRect = this.element.getBoundingClientRect();
            const offsetX = 0;
            const offsetY = 0;
            this.dragInitPos = {
                id: this.getBookingId(),
                fromRoomId: this.getBookedRoomId(),
                top: this.getNumber(this.element.style.top) + offsetY,
                left: this.getNumber(this.element.style.left) + offsetX,
                // Carried so the very first highlight resolves off the same edge every later one does: in
                // RTL the bar is mirrored and its check-in edge is the physical right, which needs `width`
                // to locate. Without it the drag opens by highlighting the checkout day for one frame.
                width: this.element.offsetWidth,
            };
            this.dragInitPos.x = this.dragInitPos.left;
            this.dragInitPos.y = this.dragInitPos.top;
            this.dragEndPos = { ...this.dragInitPos };
            this.element.style.top = `${this.dragInitPos.top}px`;
            this.element.style.left = `${this.dragInitPos.left}px`;
            this.isTouchStart = true; // !!(event.touches && event.touches.length);
            this.captureRowBands();
            this.dragOverEventData.emit({
                id: 'CALCULATE_DRAG_OVER_BOUNDS',
                data: this.dragInitPos,
            });
        }
        else {
            this.initialWidth = this.element.offsetWidth;
            this.initialLeft = this.element.offsetLeft;
            this.initialX = clientX;
            // A stretch never moves the bar vertically, but the origin still has to be recorded so the
            // shared position pass isn't left comparing against whatever a previous drag left behind.
            this.initialY = clientY;
            const top = this.getNumber(this.element.style.top);
            this.dragOverEventData.emit({
                id: 'CALCULATE_DRAG_OVER_BOUNDS',
                data: {
                    id: this.getBookingId(),
                    fromRoomId: this.getBookedRoomId(),
                    top,
                    left: this.initialLeft,
                    // Grid-space, like the `move` branch above: the bounds this seeds the first highlight
                    // against are measured relative to `.bodyContainer`, not the viewport.
                    x: this.initialLeft,
                    y: top,
                    width: this.initialWidth,
                },
            });
        }
        this.beginAutoScroll(side, clientX, clientY);
        document.addEventListener('mousemove', this.handleMouseMoveBind);
        document.addEventListener('touchmove', this.handleMouseMoveBind);
        document.addEventListener('pointermove', this.handleMouseMoveBind);
        document.addEventListener('mouseup', this.handleMouseUpBind);
        document.addEventListener('touchup', this.handleMouseUpBind);
        document.addEventListener('pointerup', this.handleMouseUpBind);
    }
    /**
     * Arms edge auto-scrolling for the drag that just started.
     *
     * A `move` drag can travel on both axes, so it scrolls on both. A stretch only ever changes the
     * bar's width, so vertical scrolling there would move the grid for no reason - horizontal only.
     *
     * The `scroll` listener covers scrolling this component didn't cause (a mouse wheel, a trackpad
     * swipe): the bar's position is derived from viewport-space pointer deltas, so it has to be
     * re-applied whenever the content underneath it moves, not only when the pointer moves.
     */
    beginAutoScroll(side, clientX, clientY) {
        this.scrollHost = this.element.closest('.calendarScrollContainer');
        if (!this.scrollHost) {
            return;
        }
        this.autoScroller = new DragAutoScroller({
            container: this.scrollHost,
            axes: { x: true, y: side === 'move' },
            // The room-name column is sticky against the inline start edge, which bidi-mirrors to the
            // physical right in RTL. Skip it, so the hot zone starts at the edge of the scrollable grid
            // rather than underneath a column that never moves.
            inlineStartInset: ROOM_HEADER_WIDTH,
            inlineStartEdge: isRtlDirection(locales.direction) ? 'right' : 'left',
            getBounds: () => this.getGridScrollBounds(),
            onScroll: () => this.applyDragPosition(),
        });
        this.appliedDistance = null;
        this.autoScroller.start();
        this.autoScroller.update(clientX, clientY);
        this.scrollHost.addEventListener('scroll', this.handleHostScrollBind, { passive: true });
    }
    /**
     * How far auto-scroll may travel, in the scroll container's own coordinates.
     *
     * Deliberately *not* the container's own `scrollHeight`/`scrollWidth`: this bar is an absolutely
     * positioned descendant of that container, so following the pointer past the last room row
     * extends the container's scrollable overflow by exactly as much as it just scrolled, and the
     * drag would chase its own tail off the end of the grid. The room rows are the real limit - they
     * are also the only thing a booking can be dropped on - and they don't move mid-drag.
     *
     * Positions are expressed as `elementEdge - containerEdge + scrollPosition`, which is invariant
     * under scrolling and therefore direction-agnostic: it yields the usual `0 .. max` range in LTR
     * and the mirrored `-max .. 0` range RTL containers report.
     */
    getGridScrollBounds() {
        const rows = this.scrollHost?.querySelectorAll('.bodyContainer .roomRow');
        if (!rows?.length) {
            return {};
        }
        const containerRect = this.scrollHost.getBoundingClientRect();
        const { scrollLeft, scrollTop, clientWidth, clientHeight } = this.scrollHost;
        // Every row spans the full grid width (`.roomRow { width: max-content }`), so the first one
        // gives the horizontal extent; the last one gives the vertical extent.
        const firstRow = rows[0].getBoundingClientRect();
        const lastRow = rows[rows.length - 1].getBoundingClientRect();
        return {
            x: [firstRow.left - containerRect.left + scrollLeft, firstRow.right - containerRect.left + scrollLeft - clientWidth],
            y: [0, lastRow.bottom - containerRect.top + scrollTop - clientHeight],
        };
    }
    /**
     * Records where every room row starts and ends, so a move drag can snap onto one.
     *
     * Same selector and same coordinate space as the drop-target bounds `igloo-calendar` measures
     * (`offsetTop` inside `.bodyContainer`), so the row the bar snaps to is by construction the row
     * the drop resolves to - the bar can never come to rest looking like it is over one row while
     * releasing into another.
     */
    captureRowBands() {
        const rows = document.querySelectorAll('.bodyContainer .roomRow .roomTitle[data-room]');
        this.dragRowBands = Array.from(rows).map(row => ({ top: row.offsetTop, height: row.offsetHeight }));
    }
    /**
     * Snaps a dropped bar's top onto the centre of the room row it came to rest over.
     *
     * The bar's own middle picks the row, so it belongs to whichever row it is more than half way
     * into - and the nearest row wins outright when that middle is over a category header or past
     * the end of the list, which keeps the bar on a droppable row instead of between two.
     */
    snapTopToRow(rawTop) {
        if (!this.dragRowBands.length) {
            return rawTop;
        }
        const barMiddle = rawTop + EVENT_HEIGHT / 2;
        let closest = this.dragRowBands[0];
        let closestDistance = Infinity;
        for (const band of this.dragRowBands) {
            const distance = Math.max(band.top - barMiddle, barMiddle - (band.top + band.height), 0);
            if (distance < closestDistance) {
                closestDistance = distance;
                closest = band;
            }
            if (distance === 0) {
                break;
            }
        }
        return closest.top + getEventTopWithinRow(closest.height);
    }
    /**
     * Settles a just-dropped bar onto the grid: centred in the room row it was released over, and
     * half a day cell in from that day's column edge, which is where a booking starting there rests.
     *
     * The settled position is written back to `dragEndPos` as well as to the element, so the drop
     * resolves to the cell the bar visibly landed on rather than to the raw pointer position - the
     * two disagree within a few pixels either side of a day boundary.
     */
    settleToGrid() {
        const top = this.snapTopToRow(this.dragEndPos.top);
        const left = this.snapLeftToDay(this.dragEndPos.left);
        this.element.style.top = `${top}px`;
        this.element.style.left = `${left}px`;
        this.dragEndPos = { ...this.dragEndPos, top, left, x: left, y: top };
    }
    /** Snaps a dropped bar's physical left onto the day a booking released there would start on. */
    snapLeftToDay(rawLeft) {
        return snapEventLeft({
            physicalLeft: rawLeft,
            width: this.element.offsetWidth,
            isRtl: isRtlDirection(locales.direction),
            totalGridWidth: getTotalGridWidth(calendar_dates.days.length),
            startsAfterWindowOpen: this.startsAfterWindowOpen(),
            eventSpace: this.eventSpace,
        });
    }
    /** Disarms auto-scrolling. Safe to call when no drag is in progress. */
    endAutoScroll() {
        this.autoScroller?.stop();
        this.autoScroller = null;
        this.scrollHost?.removeEventListener('scroll', this.handleHostScrollBind);
        this.scrollHost = null;
    }
    handleHostScroll() {
        if (this.isDragging) {
            this.applyDragPosition();
        }
    }
    handleMouseMove(event) {
        if (this.isDragging) {
            const { clientX, clientY } = this.getPointerPosition(event);
            this.currentX = clientX;
            this.currentY = clientY;
            this.autoScroller?.update(clientX, clientY);
            this.applyDragPosition();
        }
        else {
            console.log('still mouse move listening...');
        }
    }
    /**
     * Positions the bar (and, for a move, reports the drop target) from the last known pointer
     * position. Called both on pointer movement and on every frame the calendar auto-scrolls, since
     * a pointer parked in the edge hot zone keeps the grid moving without firing another `mousemove`.
     */
    applyDragPosition() {
        if (this.isDragging) {
            // `element.style.top/left` are grid-space (relative to `.bodyContainer`) while the pointer
            // deltas below are viewport-space. Folding the container's scroll travel back in is what
            // keeps the two in step - without it the bar rides the scrolling content away from the
            // cursor, and the drop resolves to whatever cell that stale position happens to land on.
            const scrollOffset = this.autoScroller?.offset ?? { x: 0, y: 0 };
            let distanceX = this.currentX - this.initialX + scrollOffset.x;
            let distanceY = this.currentY - this.initialY + scrollOffset.y;
            // An auto-scrolled frame reaches here twice - once from the scroller's own callback, once
            // from the container's `scroll` event - and both describe the same position.
            if (this.appliedDistance?.x === distanceX && this.appliedDistance?.y === distanceY) {
                return;
            }
            this.appliedDistance = { x: distanceX, y: distanceY };
            if (this.resizeSide === 'move') {
                // Follows the pointer pixel for pixel; the grid snap happens once, on release, in
                // `settleToGrid()`.
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
                this.dragEndPos.width = this.element.offsetWidth;
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
                    newWidth = Math.max(this.minResizeDays * this.dayWidth - this.eventSpace, newWidth);
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
                    newWidth = Math.max(this.minResizeDays * this.dayWidth - this.eventSpace, this.initialWidth - distanceX);
                    let newLeft = this.initialLeft + (this.initialWidth - newWidth);
                    this.element.style.left = `${newLeft}px`;
                    this.element.style.width = `${newWidth}px`;
                }
                this.finalWidth = newWidth;
            }
        }
    }
    handleMouseUp() {
        if (this.isDragging) {
            if (this.resizeSide === 'move') {
                // console.log("Initial X::"+this.dragInitPos.x);
                // console.log("Initial Y::"+this.dragInitPos.y);
                // console.log("End X::"+this.dragEndPos.x);
                // console.log("End Y::"+this.dragEndPos.y);
                // Measured before settling, so the click-vs-drag test still reads raw pointer travel
                // rather than how far the bar happened to snap.
                if (this.isTouchStart) {
                    this.moveDifferenceX = Math.abs(this.dragEndPos.x - this.dragInitPos.x);
                    this.moveDifferenceY = Math.abs(this.dragEndPos.y - this.dragInitPos.y);
                }
                this.settleToGrid();
                this.dragOverEventData.emit({
                    id: 'DRAG_OVER_END',
                    data: {
                        ...this.dragEndPos,
                        pool: this.bookingEvent.POOL,
                        nbOfDays: this.bookingEvent.NO_OF_DAYS,
                    },
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
                            width: this.element.offsetWidth,
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
        // Safe to release only now: the emits above read the `element.style.*` values that auto-scroll
        // had been keeping up to date.
        this.endAutoScroll();
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
            return ` - ${formatBookingNumber(this.bookingEvent.channel_booking_nbr)}`;
        }
        return ` - ${formatBookingNumber(this.bookingEvent.BOOKING_NUMBER)}`;
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
    //   /**
    //    * Checks if the booking's departure time is later than the hotel's configured check-out time.
    //    *
    //    * @returns {boolean} `true` if departure is after `check_out_till`, otherwise `false`.
    //    */
    isDepartureAfterHotelCheckout() {
        if (calendar_data.property.is_automatic_check_in_out) {
            return;
        }
        const departureTime = this.bookingEvent.DEPARTURE_TIME;
        if (!departureTime?.code) {
            return false;
        }
        const t1 = moment(calendar_data.property.time_constraints.check_out_till, 'HH:mm');
        const t2 = moment(departureTime.description, 'HH:mm');
        return t1.isBefore(t2);
    }
    computeSplitRole() {
        const SPLIT_INDEX = buildSplitIndex(this.bookingEvent.ROOMS);
        let splitRole = null;
        if (SPLIT_INDEX) {
            splitRole = getSplitRole(SPLIT_INDEX, this.bookingEvent.IDENTIFIER) ?? '';
        }
        return splitRole;
    }
    render() {
        // onMouseLeave={()=>this.showEventInfo(false)}
        let legend = this.getEventLegend();
        let noteNode = this.getNoteNode();
        let balanceNode = this.getBalanceNode();
        const { balance, bar, lateCheckout } = this.buildBarIds();
        let backgroundColor = this.bookingEvent.ROOM_INFO?.calendar_extra ? (this.bookingEvent.ROOM_INFO.calendar_extra?.booking_color?.color ?? legend.color) : legend.color;
        const { foreground, stripe } = calendar_data.colorsForegrounds?.[backgroundColor] ?? {
            foreground: '',
            checkout: '',
        };
        const isDepartureAfterHotelCheckout = this.isDepartureAfterHotelCheckout();
        backgroundColor = this.bookingEvent.STATUS === 'CHECKED-OUT' ? legend.color : backgroundColor;
        const splitRole = this.computeSplitRole();
        const pending = this.bookingEvent.STATUS === 'PENDING-CONFIRMATION' && this.bookingEvent.ID !== 'NEW_TEMP_EVENT';
        const startsAfterWindowOpen = this.startsAfterWindowOpen();
        const endsBeforeWindowClose = !this.isNewEvent() && !!this.bookingEvent.defaultDates && moment(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE));
        return (h(Host, { key: 'ca14836bdfccadbc04eed5bec02e9fbb46daec18', class: `bookingEvent  ${this.isNewEvent() || this.isHighlightEventType() ? 'newEvent' : ''} ${legend.clsName} `, style: this.getPosition(), id: bar, dir: isRtlDirection(locales.direction) ? 'rtl' : 'ltr' }, h("div", { key: 'f10a5a4e22266265360e74b7afcc333a3b99cb6e', "data-identifier": this.bookingEvent?.IDENTIFIER, "data-status": this.bookingEvent.STATUS, class: {
                'bookingEventBase': true,
                'pending': pending,
                'skewedLeft': startsAfterWindowOpen,
                'skewedRight': endsBeforeWindowClose,
                // 'striped-bar vertical': this.bookingEvent.STATUS === 'IN-HOUSE',
                'striped-bar animated': isBlockUnit(this.bookingEvent.STATUS_CODE) && this.bookingEvent.STATUS_CODE === '003',
                'border border-dark ota-booking-event': !this.bookingEvent.is_direct && !isBlockUnit(this.bookingEvent.STATUS_CODE) && this.bookingEvent.STATUS !== 'TEMP-EVENT' && this.bookingEvent.ID !== 'NEW_TEMP_EVENT',
                [splitRole]: true,
            }, style: {
                'backgroundColor': backgroundColor,
                '--ir-event-bg': backgroundColor,
                '--ir-event-bg-stripe-color': stripe,
            }, onTouchStart: event => this.startDragging(event, 'move'), onMouseDown: event => this.startDragging(event, 'move') }), isDepartureAfterHotelCheckout && h("wa-tooltip", { key: 'c9fe0098a5f178d52a395830090d731cb09d9b7f', for: lateCheckout }, "Departure time: ", this.bookingEvent.DEPARTURE_TIME?.description), balanceNode && h("wa-tooltip", { key: '8622e954505cdd46d1bdc45c13cf2668f2ea19fa', for: balance }, "Balance: ", formatAmount(calendar_data.property.currency.symbol, this.bookingEvent.BALANCE)), noteNode ? h("div", { class: "legend_circle noteIcon", style: { backgroundColor: noteNode.color } }) : null, (balanceNode || isDepartureAfterHotelCheckout) && (h("div", { key: '8a36092abaa1eff1169cdee9220b359812c81cd7', class: "balanceIcon d-flex" }, isDepartureAfterHotelCheckout && h("div", { key: 'ac1bea38f4bad027f98d7a6e06c78cf08df61fae', id: lateCheckout, class: "legend_circle", style: { backgroundColor: '#999999' } }), balanceNode ? h("div", { id: balance, class: "legend_circle", style: { backgroundColor: '#f34752' } }) : null)), h("div", { key: '6dbe5648027e8cdc53fd775a657c3a8fc59e927e', class: `bookingEventTitle ${pending ? 'pending' : ''}`, style: !pending && { color: foreground }, onTouchStart: event => this.startDragging(event, 'move'), onMouseDown: event => this.startDragging(event, 'move') }, this.getBookedBy(), this.renderEventBookingNumber()), h(Fragment, { key: 'd5dbfbb524e26ecebeff1a93c0ae7cb73692e436' }, h("div", { key: '642cd2369cade2da76805d63e5edd6e83a8891e1', class: `bookingEventDragHandle leftSide ${startsAfterWindowOpen ? 'skewedLeft' : ''} ${endsBeforeWindowClose ? 'skewedRight' : ''}`, onTouchStart: event => this.startDragging(event, 'leftSide'), onMouseDown: event => this.startDragging(event, 'leftSide') }), h("div", { key: '91d087fea2b8df266f900f0d95bab4f545e5afa3', class: `bookingEventDragHandle rightSide ${startsAfterWindowOpen ? 'skewedLeft' : ''} ${endsBeforeWindowClose ? 'skewedRight' : ''}`, onTouchStart: event => this.startDragging(event, 'rightSide'), onMouseDown: event => this.startDragging(event, 'rightSide') })), this.showInfoPopup ? (h("igl-booking-event-hover", { is_vacation_rental: this.is_vacation_rental, countries: this.countries, class: "top", bookingEvent: this.bookingEvent, bubbleInfoTop: this.bubbleInfoTopSide, style: this.calculateHoverPosition() })) : null));
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
                "reflect": false,
                "attribute": "currency"
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
                "reflect": false,
                "attribute": "is_vacation_rental",
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
                "reflect": false,
                "attribute": "language"
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
                            "id": "src/models/IBooking.ts::ICountry",
                            "referenceLocation": "ICountry"
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
            },
            "roomTop": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "room-top"
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
                            "id": "src/models/property-types.ts::IRoomNightsData",
                            "referenceLocation": "IRoomNightsData"
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
                    "resolved": "{ reason: \"checkin\"; bookingNumber: string; roomIdentifier: string; roomUnit: string; roomName: string; sidebarPayload: RoomGuestsPayload & { bookingNumber: string; }; } | { reason: \"checkout\"; bookingNumber: string; roomIdentifier: string; roomUnit: string; roomName: string; booking: Booking; } | { reason: \"reallocate\"; } & IReallocationPayload | { reason: \"stretch\"; } & IRoomNightsData",
                    "references": {
                        "CalendarModalEvent": {
                            "location": "import",
                            "path": "@/models/property-types",
                            "id": "src/models/property-types.ts::CalendarModalEvent",
                            "referenceLocation": "CalendarModalEvent"
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
