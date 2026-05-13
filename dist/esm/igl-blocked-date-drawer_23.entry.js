import { r as registerInstance, c as createEvent, h, g as getElement, F as Fragment, H as Host } from './index-7e96440e.js';
import { B as BookingService, r as resetBookingStore, b as booking_store } from './booking.service-5a37b024.js';
import { p as getReleaseHoursString, i as isBlockUnit, w as checkMealPlan, f as formatAmount, x as isWeekend, d as dateToFormattedString, y as getDaysArray, z as convertDatePrice, A as formatDate } from './utils-dd5327f2.js';
import { l as buildSplitIndex, m as getSplitRole, c as calculateDaysBetweenDates, t as transformNewBooking, a as calendar_dates, n as compareTime, o as createDateWithOffsetAndHour } from './booking-41933335.js';
import { h as hooks } from './moment-ab846cee.js';
import { E as EventsService } from './events.service-0a1fa3f0.js';
import { l as locales } from './locales.store-cb784e95.js';
import { c as calendar_data } from './calendar-data-b1f645da.js';
import { T as ToBeAssignedService } from './toBeAssigned.service-22e7c39d.js';
import { h as handleUnAssignedDatesChange, g as getUnassignedDates } from './unassigned_dates.store-6de7154f.js';
import { H as HouseKeepingService } from './housekeeping.service-0e645d86.js';
import { P as PropertyService, E as ExposedRectifierParamsSchema } from './property.service-8ddb7528.js';
import { a as isRequestPending } from './ir-interceptor.store-b1961d27.js';
import { z, Z as ZodError } from './index-87419685.js';
import { I as IMask } from './index-e2caf943.js';
import { v as v4 } from './v4-964634d6.js';
import './axios-aa1335b8.js';
import './index-f100e9d2.js';
import './type-e34653d3.js';

const iglBlockedDateDrawerCss = ".sc-igl-blocked-date-drawer-h{display:block;text-align:start}";
const IglBlockedDateDrawerStyle0 = iglBlockedDateDrawerCss;

const IglBlockedDateDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.blockedDateDrawerClosed = createEvent(this, "blockedDateDrawerClosed", 7);
    }
    /**
     * Controls whether the blocked date drawer is open or closed.
     * Reflected to the DOM so it can be styled or toggled externally.
     */
    open;
    /**
     * Label text displayed at the top of the drawer.
     * Typically used as the drawer title.
     */
    label;
    /**
     * Start date of the blocked date range.
     * Expected to be an ISO date string (YYYY-MM-DD).
     */
    fromDate;
    /**
     * End date of the blocked date range.
     * Expected to be an ISO date string (YYYY-MM-DD).
     */
    toDate;
    /**
     * Identifier of the unit being blocked.
     * Used when sending block requests to the booking service.
     */
    unitId;
    isLoading = false;
    blockDatesData = {
        from_date: '',
        to_date: '',
        NOTES: '',
        pr_id: null,
        STAY_STATUS_CODE: null,
        DESCRIPTION: null,
        BLOCKED_TILL_DATE: null,
        BLOCKED_TILL_HOUR: null,
        BLOCKED_TILL_MINUTE: null,
    };
    blockedDateDrawerClosed;
    bookingService = new BookingService();
    async handleBlockDate() {
        try {
            this.isLoading = true;
            const props = (() => {
                const releaseData = getReleaseHoursString(this.blockDatesData.RELEASE_AFTER_HOURS !== null ? Number(this.blockDatesData.RELEASE_AFTER_HOURS) : null);
                return {
                    from_date: this.fromDate,
                    to_date: this.toDate,
                    NOTES: this.blockDatesData.OPTIONAL_REASON || '',
                    pr_id: this.unitId.toString(),
                    STAY_STATUS_CODE: this.blockDatesData.OUT_OF_SERVICE ? '004' : this.blockDatesData.RELEASE_AFTER_HOURS === 0 ? '002' : '003',
                    DESCRIPTION: this.blockDatesData.RELEASE_AFTER_HOURS || '',
                    ...releaseData,
                };
            })();
            await this.bookingService.blockUnit(props);
            this.closeDrawer();
        }
        catch (error) {
        }
        finally {
            this.isLoading = false;
        }
    }
    closeDrawer() {
        this.blockedDateDrawerClosed.emit();
        this.blockDatesData = {
            from_date: '',
            to_date: '',
            NOTES: '',
            pr_id: null,
            STAY_STATUS_CODE: null,
            DESCRIPTION: null,
            BLOCKED_TILL_DATE: null,
            BLOCKED_TILL_HOUR: null,
            BLOCKED_TILL_MINUTE: null,
        };
    }
    render() {
        return (h("ir-drawer", { key: '9c82d19109249c04604dead8911bafbaf2c57cc4', label: this.label, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDrawer();
            }, open: this.open }, this.open && (h("igl-block-dates-view", { key: 'a4d4ec4ff4c8145d5fe2d1ab178113a7326b93e3', onDataUpdateEvent: e => (this.blockDatesData = { ...e.detail.data }), fromDate: this.fromDate, toDate: this.toDate })), h("div", { key: 'e4def737f666998f0396b632d873bb3465ad431b', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'b6170f9d47c1492d9108149a111d017b44130e51', "data-drawer": "close", size: "medium", appearance: "filled", variant: "neutral" }, "Cancel"), h("ir-custom-button", { key: 'c46f1508d99e7db69c2d941c2089a4ba6dc89c98', loading: this.isLoading, onClickHandler: () => {
                this.handleBlockDate();
            }, size: "medium", appearance: "accent", variant: "brand" }, "Save"))));
    }
};
IglBlockedDateDrawer.style = IglBlockedDateDrawerStyle0;

const iglBookingEventCss = ".sc-igl-booking-event-h{display:block;position:absolute;--ota-bar-width:2px;--stripe-period:20px;--split-border-width:5px;--split-border-color:var(--wa-color-text-normal)}.bookingEventBase.sc-igl-booking-event{position:absolute;width:100%;height:100%;border-radius:4px;background-color:rgb(49, 190, 241);transform:skewX(-22deg);cursor:pointer}.bookingEventBase.leftSplit.sc-igl-booking-event{border-left:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.rightSplit.sc-igl-booking-event{border-right:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.fullSplit.sc-igl-booking-event{border-right:var(--split-border-width) solid var(--split-border-color);border-left:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.fullSplit.skewedLeft.sc-igl-booking-event,.bookingEventBase.leftSplit.skewedLeft.sc-igl-booking-event{border-left:0}.bookingEventBase.fullSplit.skewedRight.sc-igl-booking-event,.bookingEventBase.leftSplit.skewedRight.sc-igl-booking-event{border-right:0}.bookingEventBase.pending.sc-igl-booking-event{border-width:2px;border-style:dashed;border-color:var(--wa-color-success-fill-loud)}.bookingEvent.sc-igl-booking-event{cursor:pointer}.ota-booking-event.sc-igl-booking-event{border-width:var(--ota-bar-width) !important}.bookingEventHiddenBase.sc-igl-booking-event{position:absolute;top:0;left:-4px;width:calc(100% + 8px)}.bookingEventBase.skewedLeft.sc-igl-booking-event::before,.bookingEventBase.skewedRight.sc-igl-booking-event::before{content:'';position:absolute;top:0;bottom:0;width:50%;height:100%;left:-4px;background-color:var(--ir-event-bg);border-radius:4px}.bookingEventBase.skewedLeft.sc-igl-booking-event::before{transform-origin:right;transform:skewX(22deg);border-top-left-radius:0;border-bottom-left-radius:0}.bookingEventBase.fullSplit.skewedLeft.sc-igl-booking-event::before,.bookingEventBase.leftSplit.skewedLeft.sc-igl-booking-event::before{border-left:var(--split-border-width) solid var(--split-border-color) !important;z-index:2;background-color:transparent}.bookingEventBase.fullSplit.skewedRight.sc-igl-booking-event::before,.bookingEventBase.leftRight.skewedRight.sc-igl-booking-event::before{border-right:var(--split-border-width) solid var(--split-border-color) !important;z-index:2;background-color:transparent}.bookingEventBase.skewedRight.sc-igl-booking-event::before{transform-origin:left;transform:skewX(22deg 0deg);border-top-right-radius:0;border-bottom-right-radius:0}.bookingEventBase.border.skewedLeft.sc-igl-booking-event::before{border:var(--ota-bar-width) solid #424242;border-right:0;border-left:0;border-top-right-radius:0;border-bottom-right-radius:0;top:calc(var(--ota-bar-width) * -1);height:20px;left:-4px}.bookingEventBase.border.skewedRight.sc-igl-booking-event::before{border:var(--ota-bar-width) solid #424242;border-left:0;border-right:0;border-top-left-radius:0;border-bottom-left-radius:0;top:calc(var(--ota-bar-width) * -1);height:20px;right:-4px}.bookingEventBase.striped-bar.fullSplit.skewedLeft.vertical.sc-igl-booking-event::after,.bookingEventBase.striped-bar.leftSplit.skewedLeft.vertical.sc-igl-booking-event::after{z-index:1;border-left:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.striped-bar.fullSplit.skewedRight.vertical.sc-igl-booking-event::after,.bookingEventBase.striped-bar.rightSplit.skewedRight.vertical.sc-igl-booking-event::after{z-index:1;border-right:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.striped-bar.vertical.sc-igl-booking-event::after{--stripe-angle:360deg}.bookingEventBase.striped-bar.sc-igl-booking-event::after{content:'';position:absolute;inset:0;border-radius:4px;background:repeating-linear-gradient(\n    var(--stripe-angle, 45deg),\n    var(--ir-event-bg) 0,\n    var(--ir-event-bg) calc(var(--stripe-period) / 2),\n    var(--ir-event-bg-stripe-color) calc(var(--stripe-period) / 2),\n    var(--ir-event-bg-stripe-color) var(--stripe-period)\n  );backface-visibility:hidden}.bookingEventBase.skewedRight.striped-bar.sc-igl-booking-event::after,.bookingEventBase.border.skewedRight.sc-igl-booking-event::after{right:-8px}.bookingEventBase.skewedLeft.striped-bar.sc-igl-booking-event::after,.bookingEventBase.border.skewedLeft.sc-igl-booking-event::after{left:-8px}.bookingEventBase.striped-bar.animated.sc-igl-booking-event::after{background-size:28.28px 28.28px;backface-visibility:hidden;animation:stripes 0.8s linear infinite;will-change:background-position}@keyframes stripes{0%{background-position:0 0}100%{background-position:28.28px 0}}.bookingEventDragHandle.sc-igl-booking-event{position:absolute;top:0;width:15px;height:100%;opacity:0.1;background-color:rgba(0, 0, 0, 0.15);transform:skewX(-22deg);border-radius:4px;cursor:pointer}.sc-igl-booking-event-h:hover .bookingEventDragHandle.sc-igl-booking-event{display:block;opacity:1}.newEvent.sc-igl-booking-event-h:hover .bookingEventDragHandle.sc-igl-booking-event{display:none;opacity:1}.leftSide.sc-igl-booking-event{left:0}.rightSide.sc-igl-booking-event{right:0}.leftSide.skewedLeft.sc-igl-booking-event{transform:skewX(0)}.rightSide.skewedRight.sc-igl-booking-event{transform:skewX(0)}.bookingEventTitle.sc-igl-booking-event{position:relative;top:2px;left:5px;max-width:calc(100% - 10px);color:#fff;font-size:0.8em;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;cursor:pointer}.legend_circle.sc-igl-booking-event{width:10px;height:10px;margin:3px 3px 3px 2px;border:1px solid #fff;border-radius:100%}.noteIcon.sc-igl-booking-event{position:absolute;bottom:-8px;left:2px}.balanceIcon.sc-igl-booking-event{position:absolute;top:-8px;right:2px}.splitBooking.sc-igl-booking-event{border-right:2px solid #000000}.bookingEventTitle.pending.sc-igl-booking-event{color:var(--wa-color-success-on-quiet) !important}";
const IglBookingEventStyle0 = iglBookingEventCss;

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
    }
    get element() { return getElement(this); }
    currency;
    is_vacation_rental = false;
    language;
    bookingEvent;
    allBookingEvents = [];
    countries;
    hideBubbleInfo;
    updateEventData;
    dragOverEventData;
    showRoomNightsDialog;
    showDialog;
    resetStretchedBooking;
    toast;
    updateBookingEvent;
    renderElement = false;
    position;
    isShrinking = null;
    dayWidth = 0;
    eventSpace = 8;
    vertSpace = 10;
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
    handleMouseMoveBind = this.handleMouseMove.bind(this);
    handleMouseUpBind = this.handleMouseUp.bind(this);
    handleClickOutsideBind = this.handleClickOutside.bind(this);
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
            this.toast.emit({
                position: 'top-right',
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
            const data = await this.bookingService.getExposedBooking(this.bookingEvent.BOOKING_NUMBER, 'en');
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
        const fromTime = hooks(from_date, 'YYYY-MM-DD');
        const toTime = hooks(to_date, 'YYYY-MM-DD');
        const isOccupied = this.allBookingEvents
            .filter(event => event.ID !== 'NEW_TEMP_EVENT')
            .some(event => {
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
            this.dragEndPos = { ...this.dragInitPos };
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
                    data: {
                        ...this.dragEndPos,
                        pool: this.bookingEvent.POOL,
                        nbOfDays: this.bookingEvent.NO_OF_DAYS,
                    },
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
        const t1 = hooks(calendar_data.property.time_constraints.check_out_till, 'HH:mm');
        const t2 = hooks(departureTime.description, 'HH:mm');
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
        return (h(Host, { key: 'c8820c6df11abb9c674f594055477b122320aa56', class: `bookingEvent  ${this.isNewEvent() || this.isHighlightEventType() ? 'newEvent' : ''} ${legend.clsName} `, style: this.getPosition(), id: bar }, h("div", { key: 'a319aa3aa33f05a5542c03828679227aea2cc28b', "data-identifier": this.bookingEvent?.IDENTIFIER, "data-status": this.bookingEvent.STATUS, class: {
                'bookingEventBase': true,
                'pending': pending,
                'skewedLeft': !this.isNewEvent() && hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)),
                'skewedRight': !this.isNewEvent() && hooks(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)),
                // 'striped-bar vertical': this.bookingEvent.STATUS === 'IN-HOUSE',
                'striped-bar animated': isBlockUnit(this.bookingEvent.STATUS_CODE) && this.bookingEvent.STATUS_CODE === '003',
                'border border-dark ota-booking-event': !this.bookingEvent.is_direct && !isBlockUnit(this.bookingEvent.STATUS_CODE) && this.bookingEvent.STATUS !== 'TEMP-EVENT' && this.bookingEvent.ID !== 'NEW_TEMP_EVENT',
                [splitRole]: true,
            }, style: {
                'backgroundColor': backgroundColor,
                '--ir-event-bg': backgroundColor,
                '--ir-event-bg-stripe-color': stripe,
            }, onTouchStart: event => this.startDragging(event, 'move'), onMouseDown: event => this.startDragging(event, 'move') }), isDepartureAfterHotelCheckout && h("wa-tooltip", { key: '71295c8eb2f48c53dc4e1a18d8a8fca549e9e2bd', for: lateCheckout }, "Departure time: ", this.bookingEvent.DEPARTURE_TIME?.description), balanceNode && h("wa-tooltip", { key: '46f4c5fe896288656bd1bbea761714989ef12e63', for: balance }, "Balance: ", formatAmount(calendar_data.property.currency.symbol, this.bookingEvent.BALANCE)), noteNode ? h("div", { class: "legend_circle noteIcon", style: { backgroundColor: noteNode.color } }) : null, (balanceNode || isDepartureAfterHotelCheckout) && (h("div", { key: '52e653c68784065351f5aee726b297688740f8bf', class: "balanceIcon d-flex" }, isDepartureAfterHotelCheckout && h("div", { key: 'b63c6fc41d0c4f5a353fed958ca89c240dfc22eb', id: lateCheckout, class: "legend_circle", style: { backgroundColor: '#999999' } }), balanceNode ? h("div", { id: balance, class: "legend_circle", style: { backgroundColor: '#f34752' } }) : null)), h("div", { key: '4a4e3d21776b34917557a3d897ca486f6555038e', class: `bookingEventTitle ${pending ? 'pending' : ''}`, style: !pending && { color: foreground }, onTouchStart: event => this.startDragging(event, 'move'), onMouseDown: event => this.startDragging(event, 'move') }, this.getBookedBy(), this.renderEventBookingNumber()), h(Fragment, { key: '10b9d2de42d04d906a76236aae02107b690fd200' }, h("div", { key: '65d5b0516e2c90e5a7dbcca4fe78fc1ea9c6719c', class: `bookingEventDragHandle leftSide ${!this.isNewEvent() && hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 'skewedLeft' : ''}
            ${!this.isNewEvent() && hooks(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)) ? 'skewedRight' : ''}`, onTouchStart: event => this.startDragging(event, 'leftSide'), onMouseDown: event => this.startDragging(event, 'leftSide') }), h("div", { key: '81330c65ee15adafe4e2919f184f86054e007890', class: `bookingEventDragHandle rightSide ${!this.isNewEvent() && hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 'skewedLeft' : ''}
              ${!this.isNewEvent() && hooks(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)) ? 'skewedRight' : ''}`, onTouchStart: event => this.startDragging(event, 'rightSide'), onMouseDown: event => this.startDragging(event, 'rightSide') })), this.showInfoPopup ? (h("igl-booking-event-hover", { is_vacation_rental: this.is_vacation_rental, countries: this.countries, currency: this.currency, class: "top", bookingEvent: this.bookingEvent, bubbleInfoTop: this.bubbleInfoTopSide, style: this.calculateHoverPosition() })) : null));
    }
};
IglBookingEvent.style = IglBookingEventStyle0;

const iglBulkOperationsDrawerCss = ".sc-igl-bulk-operations-drawer-h{display:block}.bulk-operations__drawer.sc-igl-bulk-operations-drawer::part(body){padding:0;padding-inline:0.1rem}.bulk-operations__tab-group.sc-igl-bulk-operations-drawer::part(nav){position:sticky;top:0;z-index:10;background-color:var(--wa-color-surface-default)}";
const IglBulkOperationsDrawerStyle0 = iglBulkOperationsDrawerCss;

const IglBulkOperationsDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeDrawer = createEvent(this, "closeDrawer", 7);
        this.toast = createEvent(this, "toast", 7);
    }
    open;
    maxDatesLength = 8;
    property_id;
    closeDrawer;
    toast;
    selectedTab = 'stop-sale';
    isLoading;
    formId = `bulk-operations-form`;
    tabs = [
        {
            id: 'stop-sale',
            label: 'Stop/Open Sale',
        },
        {
            id: 'block',
            label: 'Block Unit',
        },
        {
            id: 'rectifier',
            label: 'Rectify Availability',
        },
    ];
    handleLoadingChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.isLoading = e.detail;
    }
    handleDrawerClose(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.closeDrawer.emit();
    }
    render() {
        const formId = `${this.formId}-${this.selectedTab}`;
        return (h(Host, { key: '2094cd0c10921f8e1b5656d59d9e3e8d6e2e6015' }, h("ir-drawer", { key: '1115236366a1250ce1e7e19287fa4cba2334da5c', onDrawerHide: this.handleDrawerClose.bind(this), label: "Bulk Availability Operations", open: this.open, class: "bulk-operations__drawer" }, this.open && (h("wa-tab-group", { key: '736ebc216597f8de982e50dd2b24df249cf9d71f', class: "bulk-operations__tab-group", active: this.selectedTab, activation: "manual", "onwa-tab-show": e => (this.selectedTab = e.detail.name?.toString()) }, this.tabs.map(tab => (h("wa-tab", { panel: tab.id }, tab.label))), h("wa-tab-panel", { key: 'c902f72a3a74c0f31d9ff5647597ae8c06ad4c6b', name: "stop-sale" }, this.selectedTab === 'stop-sale' && (h("igl-bulk-stop-sale", { key: 'eb42a725631042aa0c03832320567a522fa92ca9', onCloseDrawer: this.handleDrawerClose.bind(this), maxDatesLength: this.maxDatesLength, formId: formId, property_id: this.property_id }))), h("wa-tab-panel", { key: 'abf8168e1a216cf9981a84428b0c310215ecb2b8', name: "block" }, this.selectedTab === 'block' && (h("igl-bulk-block", { key: '0d4e1c1bfb38da1932ffd6d7613e6dc1ac0b8bd1', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId, maxDatesLength: this.maxDatesLength, property_id: this.property_id }))), h("wa-tab-panel", { key: '481ae003179d574b955ab34fa31185f18b2731b4', name: "rectifier" }, this.selectedTab === 'rectifier' && h("ir-rectifier", { key: '5f316e40a23e6cfecd9b4d32f844a639819c3467', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId })))), h("div", { key: 'f8a5b009fa2fa3b70e2f8fade802d44eeec5fd64', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'a20c328096b47ffdf966acea40ab5dcb619a87bc', size: "medium", variant: "neutral", appearance: "filled", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: '51dfafda1a8d816cb0fbec040c6d3f61e9aab3df', loading: this.isLoading, type: "submit", form: formId, size: "medium", variant: "brand" }, "Confirm")))));
    }
};
IglBulkOperationsDrawer.style = IglBulkOperationsDrawerStyle0;

const iglCalBodyCss = ".sc-igl-cal-body-h{display:block;color:var(--wa-color-text-normal)}.bodyContainer.sc-igl-cal-body{position:relative}.roomRow.sc-igl-cal-body{width:max-content}.roomRow.sc-igl-cal-body:first-child{margin-top:80px}.categoryName.sc-igl-cal-body{font-weight:bold;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.hk_issue_btn.sc-igl-cal-body::part(base){height:auto;width:fit-content;padding:0.25rem}.cellData.sc-igl-cal-body{background-color:var(--wa-color-surface-default)}.cellData[data-dirty-room='true'].sc-igl-cal-body::after{content:'';position:absolute;bottom:0;height:100%;left:30%;right:30%;background-color:#d4d0be !important}.cellData.disabled.sc-igl-cal-body{background:var(--wa-color-neutral-fill-quiet);cursor:var(--cell-cursor, not-allowed);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body{cursor:pointer;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body:hover{background:var(--wa-color-neutral-fill-quiet)}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body:hover[data-hk-enabled='false']{background:var(--wa-color-surface-default);cursor:default}.cellData.sc-igl-cal-body{width:58px;height:30px;display:inline-grid;border-top:1px solid var(--wa-color-surface-border);border-left:1px solid var(--wa-color-surface-border);vertical-align:top}.triangle-button.sc-igl-cal-body{--size:10px;position:absolute;right:-6px;top:-1px;width:0;height:0;padding:0;border:none;background:transparent;cursor:pointer;width:0;height:0;border-left:var(--size) solid transparent;border-right:var(--size) solid transparent;border-bottom:var(--size) solid var(--wa-color-surface-border);transform:rotate(45deg)}.cellData.sc-igl-cal-body:nth-child(2){border-left:0px}.cellData.sc-igl-cal-body:last-child{border-right:1px solid var(--wa-color-surface-border)}.roomHeaderCell.sc-igl-cal-body{position:-webkit-sticky;position:sticky;left:0;background:var(--wa-color-surface-default);border-inline-end:1px solid var(--wa-color-surface-border);width:170px;z-index:1;border-inline-start:0px}.currentDay.sc-igl-cal-body{background-color:var(--wa-color-brand-fill-quiet)}.dragOverHighlight.sc-igl-cal-body{background-color:#f5f5dc !important}.selectedDay.sc-igl-cal-body{background-color:#f9f9c9 !important}.categoryTitle.sc-igl-cal-body{grid-template-columns:1fr 20px;padding-left:10px;cursor:pointer;height:40px;font-size:0.9em}.categoryTitle.sc-igl-cal-body>.sc-igl-cal-body:nth-child(1){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.roomTitle.sc-igl-cal-body{padding-left:20px;font-size:0.9em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.roomTitle.sc-igl-cal-body>.sc-igl-cal-body:nth-child(1){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.roomTitle.pl10.sc-igl-cal-body{padding-left:10px}.categoryPriceColumn.sc-igl-cal-body{align-items:center;height:40px;-webkit-user-select:none;user-select:none;position:relative}.bookingEventsContainer.sc-igl-cal-body{position:absolute;top:0;left:0}.roomTitle[data-room-has-today-checkin='true'].sc-igl-cal-body{--ir-interactive-hk-bg:var(--wa-color-brand-fill-quiet);color:var(--wa-color-brand-on-quiet);background-color:var(--wa-color-brand-fill-quiet) !important}";
const IglCalBodyStyle0 = iglCalBodyCss;

const IglCalBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.addBookingDatasEvent = createEvent(this, "addBookingDatasEvent", 7);
        this.showBookingPopup = createEvent(this, "showBookingPopup", 7);
        this.scrollPageToRoom = createEvent(this, "scrollPageToRoom", 7);
    }
    isScrollViewDragging;
    propertyId;
    calendarData;
    today;
    currency;
    language;
    countries;
    highlightedDate;
    dragOverElement = '';
    renderAgain = false;
    selectedRoom = null;
    selectedRooms = {};
    issues = null;
    addBookingDatasEvent;
    showBookingPopup;
    scrollPageToRoom;
    fromRoomId = -1;
    newEvent;
    currentDate = new Date();
    bookingMap = new Map();
    interactiveTitle = [];
    dayRateMap = new Map();
    roomsWithTodayCheckinStatus = new Set();
    categoriesWithTodayCheckinStatus = new Set();
    // private disabledCellsCache = new Map<string, boolean>();
    componentWillLoad() {
        this.currentDate.setHours(0, 0, 0, 0);
        this.bookingMap = this.getBookingMap(this.getBookingData());
        this.updateTodayCheckinStatus();
        calendar_dates.days.forEach(day => {
            this.dayRateMap.set(day.day, day.rate);
        });
        this.updateDisabledCellsCache();
    }
    handleCalendarDataChange() {
        this.bookingMap = this.getBookingMap(this.getBookingData());
        this.updateTodayCheckinStatus();
        this.updateDisabledCellsCache();
    }
    handleTodayChange() {
        this.updateTodayCheckinStatus();
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
            return this.getRoomtypeUnits(roomCategory).find(room => this.getRoomId(room) === roomId);
        });
    }
    getCategoryName(roomCategory) {
        return roomCategory.name;
    }
    getCategoryId(roomCategory) {
        return roomCategory.id;
    }
    getTotalPhysicalRooms(roomCategory) {
        return this.getRoomtypeUnits(roomCategory).length;
    }
    getRoomtypeUnits(roomCategory) {
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
        return this.calendarData.bookingEvents ?? [];
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
        const dateDifference = Math.round(Math.abs((endDate.getTime() - startDate.getTime()) / 86_400_000));
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
        let popupTitle = roomCategory.name + ' ' + this.getRoomName(this.getRoomById(this.getRoomtypeUnits(roomCategory), this.selectedRooms[keys[0]].roomId));
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
                this.selectedRooms[refKey] = { ...selectedDay, roomId };
                this.fromRoomId = roomId;
                this.renderElement();
            }
            else {
                // const keys = Object.keys(this.selectedRooms);
                // const startDate = moment(this.selectedRooms[keys[0]].value, 'YYYY-MM-DD');
                // const endDate = moment(selectedDay.value, 'YYYY-MM-DD');
                // let cursor = startDate.clone().add(1, 'days');
                // let disabledCount = 0;
                // while (cursor.isBefore(endDate, 'day')) {
                //   const dateKey = cursor.format('YYYY-MM-DD');
                //   if (this.isCellDisabled(roomId, dateKey)) {
                //     disabledCount++;
                //   }
                //   cursor.add(1, 'days');
                // }
                // if (disabledCount >= 1) {
                //   this.selectedRooms = {};
                //   this.fromRoomId = roomId;
                //   this.renderElement();
                //   return;
                // }
                this.selectedRooms[refKey] = { ...selectedDay, roomId };
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
                    if (compareTime(hooks().toDate(), createDateWithOffsetAndHour(calendar_data.checkin_checkout_hours?.offset, calendar_data.checkin_checkout_hours?.hour))) {
                        bookingMap.set(booking.PR_ID, booking.BOOKING_NUMBER);
                    }
                }
            }
        }
        return bookingMap;
    }
    getRoomtypeDayInventoryCells(addClass, isCategory = false, index) {
        return calendar_dates.days.map(dayInfo => {
            // const isActive = true;
            return (h("div", { class: `cellData  font-weight-bold categoryPriceColumn ${addClass + '_' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''}` }, isCategory ? (h(Fragment, null, h("span", { class: 'categoryName' }, dayInfo.rate[index].exposed_inventory.rts))) : ('')));
        });
    }
    getGeneralUnitsDayCells(roomId, roomCategory, roomName) {
        return this.calendarData.days.map(dayInfo => {
            const isCellDisabled = this.isCellDisabled(Number(roomId), dayInfo.value);
            const prevDate = hooks(dayInfo.value, 'YYYY-MM-DD').add(-1, 'days').format('YYYY-MM-DD');
            const isDisabled = (isCellDisabled && Object.keys(this.selectedRooms).length === 0) || (isCellDisabled && this.isCellDisabled(Number(roomId), prevDate));
            const isSelected = this.selectedRooms.hasOwnProperty(this.getSelectedCellRefName(roomId, dayInfo));
            const isCurrentDate = dayInfo.day === this.today || dayInfo.day === this.highlightedDate;
            const cleaningDates = calendar_dates.cleaningTasks.has(+roomId) ? calendar_dates.cleaningTasks.get(+roomId) : null;
            const shouldBeCleaned = ['001', '003'].includes(calendar_data.cleaning_frequency?.code) ? false : cleaningDates?.has(dayInfo.value);
            return (h("div", { class: `cellData position-relative roomCell ${isCellDisabled ? 'disabled' : ''} ${'room_' + roomId + '_' + dayInfo.day} ${isCurrentDate ? 'currentDay' : ''} ${this.dragOverElement === roomId + '_' + dayInfo.day ? 'dragOverHighlight' : ''} ${isSelected ? 'selectedDay' : ''}`,
                // style={!isDisabled && { '--cell-cursor': 'default' }}
                style: { '--cell-cursor': 'default' }, onClick: () => {
                    // if (isDisabled) {
                    //   return;
                    // }
                    this.clickCell(Number(roomId), dayInfo, roomCategory);
                }, "aria-label": roomName, role: "gridcell", "data-room-id": roomId, "data-date": dayInfo.value, "aria-current": isCurrentDate ? 'date' : undefined, "data-room-name": roomName, "data-dirty-room": String(shouldBeCleaned), "aria-disabled": String(isDisabled), "aria-selected": Boolean(isSelected) }));
        });
    }
    toggleCategory(roomCategory) {
        roomCategory.expanded = !roomCategory.expanded;
        this.renderElement();
    }
    getRoomtypeRow(roomType, index) {
        if (this.getTotalPhysicalRooms(roomType) <= 1 || !roomType.is_active) {
            return null;
        }
        const hasRoomWithTodayCheckin = this.categoryHasRoomWithTodayCheckin(roomType);
        return (h("div", { class: "roomRow", "data-has-today-checkin": String(hasRoomWithTodayCheckin) }, h("div", { class: `cellData text-left align-items-center roomHeaderCell categoryTitle ${'category_' + this.getCategoryId(roomType)}`, onClick: () => this.toggleCategory(roomType), "data-has-today-checkin": String(hasRoomWithTodayCheckin) }, h("div", { class: 'categoryName' }, h("ir-interactive-title", { popoverTitle: this.getCategoryName(roomType) })), roomType.expanded ? h("wa-icon", { name: "angle-down" }) : h("wa-icon", { name: "angle-right" })), this.getRoomtypeDayInventoryCells('category_' + this.getCategoryId(roomType), true, index)));
    }
    /**
     * Renders a list of active rooms for an expanded room category. Returns an array of JSX elements, including headers and day columns, or an empty array if the category is collapsed or contains no active rooms.
     *
     * @param {RoomCategory} roomType - The category containing room details.
     */
    getUnitsByRoomtype(roomType) {
        const hasRoomWithTodayCheckin = this.categoryHasRoomWithTodayCheckin(roomType);
        // Check accordion is expanded.
        if (!roomType.expanded) {
            return null;
        }
        return this.getRoomtypeUnits(roomType)?.map(room => {
            if (!room.is_active) {
                return null;
            }
            const haveSingleRooms = this.getTotalPhysicalRooms(roomType) <= 1;
            const name = haveSingleRooms ? this.getCategoryName(roomType) : this.getRoomName(room);
            const roomId = this.getRoomId(room);
            const roomHasTodayCheckin = this.roomHasTodayCheckin(roomId);
            // const hasHousekeepingOrIssue = room.hk_status !== '001' || calendar_data.unitIssues.has(Number(room.id));
            return (h("div", { class: "roomRow", "data-room-has-today-checkin": String(roomHasTodayCheckin) }, h("div", { class: `cellData room text-left align-items-center roomHeaderCell  roomTitle ${this.getTotalPhysicalRooms(roomType) <= 1 ? 'pl10' : ''} ${'room_' + roomId}`, "data-room-name": name, "data-hk-enabled": String(calendar_data.housekeeping_enabled), "data-room": roomId, "data-room-has-today-checkin": String(roomHasTodayCheckin), "data-category-has-today-checkin": String(hasRoomWithTodayCheckin), onClick: () => {
                    if (!calendar_data.housekeeping_enabled) {
                        return;
                    }
                    this.selectedRoom = room;
                }, onMouseEnter: () => {
                    this.interactiveTitle[room.id]?.style?.setProperty('--ir-interactive-hk-bg', roomHasTodayCheckin ? 'var(--wa-color-brand-fill-quiet)' : 'var(--wa-color-neutral-fill-quiet)');
                }, onMouseLeave: () => {
                    this.interactiveTitle[room.id]?.style?.removeProperty('--ir-interactive-hk-bg');
                } }, h("ir-interactive-title", { ref: el => {
                    if (el)
                        this.interactiveTitle[room.id] = el;
                }, style: room.hk_status === '003' && { '--dot-color': 'var(--wa-color-neutral-fill-quiet)' }, hkStatus: calendar_data.housekeeping_enabled && (room.hk_status !== '001' || calendar_data.unitIssues?.has(room.id)), popoverTitle: name }, (room.hk_status !== '001' || calendar_data.unitIssues.has(Number(room.id))) && (h("div", { slot: "end", class: "d-flex align-items-center", style: { gap: '0.5rem' } }, calendar_data.unitIssues.has(room.id) && (h("wa-button", { appearance: "plain", variant: "danger", class: "hk_issue_btn", onClick: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.issues = calendar_data.unitIssues.get(Number(room.id));
                } }, h("wa-animation", { name: "heartBeat", easing: "ease-in-out", duration: 1400, play: true }, h("wa-icon", { name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1.1rem' } })))), h("div", { style: { visibility: room.hk_status !== '001' ? 'visible' : 'hidden' } }, room.hk_status !== '003' && h("wa-tooltip", { for: `${room.id}_hk_status_icon` }, room.hk_status === '002' ? 'This unit is dirty' : 'Inspected'), h("wa-icon", { id: `${room.id}_hk_status_icon`, name: room.hk_status === '004' ? 'check' : 'broom', style: room.hk_status === '004' && { color: 'var(--wa-color-success-fill-loud)' } })))))), this.getGeneralUnitsDayCells(this.getRoomId(room), roomType, name)));
        });
    }
    getRoomRows() {
        return this.calendarData.roomsInfo?.map((roomCategory, index) => {
            if (roomCategory.is_active) {
                return (h(Fragment, null, this.getRoomtypeRow(roomCategory, index), roomCategory.expanded && this.getUnitsByRoomtype(roomCategory)));
            }
            else {
                return null;
            }
        });
    }
    getTodayCheckinRoomsAndCategories() {
        // const todayISO = this.getTodayISODate();
        const today = hooks();
        const rooms = new Set();
        const categories = new Set();
        this.getBookingData().forEach(booking => {
            const roomInfo = booking?.ROOM_INFO;
            // Must be a check-in
            if (roomInfo?.in_out?.code !== '001') {
                return;
            }
            // Must match today (from OR to)
            if (hooks(booking.FROM_DATE, 'YYYY-MM-DD').isAfter(today, 'dates') && hooks(booking.TO_DATE, 'YYYY-MM-DD').isBefore(today, 'dates')) {
                return;
            }
            const roomId = Number(booking.PR_ID);
            if (!Number.isNaN(roomId)) {
                rooms.add(roomId);
            }
            const categoryId = Number(booking.RATE_TYPE);
            if (!Number.isNaN(categoryId)) {
                categories.add(categoryId);
            }
        });
        return { rooms, categories };
    }
    updateTodayCheckinStatus() {
        const { categories, rooms } = this.getTodayCheckinRoomsAndCategories();
        this.roomsWithTodayCheckinStatus = rooms;
        this.categoriesWithTodayCheckinStatus = categories;
    }
    roomHasTodayCheckin(roomId) {
        // console.log(this.roomsWithTodayCheckinStatus);
        return this.roomsWithTodayCheckinStatus?.has(roomId);
    }
    categoryHasRoomWithTodayCheckin(roomCategory) {
        return this.categoriesWithTodayCheckinStatus.has(this.getCategoryId(roomCategory));
    }
    updateDisabledCellsCache() {
        calendar_dates.disabled_cells.clear();
        this.calendarData.roomsInfo?.forEach((roomCategory, categoryIndex) => {
            if (roomCategory.is_active) {
                this.getRoomtypeUnits(roomCategory)?.forEach(room => {
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
    render() {
        return (h(Host, { key: '35e3cdbd20054629f34791f4f7d2e58330ec30c4' }, h("div", { key: '03c692894308922c2f8fc75bf84bb78eb0db2b66', class: "bodyContainer" }, this.getRoomRows(), h("div", { key: 'eb5dcdc321aa765c65ab26bd0ee8f214f9de1332', class: "bookingEventsContainer preventPageScroll" }, this.getBookingData()?.map(bookingEvent => {
            return (h("igl-booking-event", { "data-testid": `booking_${bookingEvent.BOOKING_NUMBER}`, "data-room-name": bookingEvent.roomsInfo?.find(r => r.id === bookingEvent.RATE_TYPE)?.physicalrooms.find(r => r.id === bookingEvent.PR_ID)?.name, language: this.language, is_vacation_rental: this.calendarData.is_vacation_rental, countries: this.countries, currency: this.currency, "data-component-id": bookingEvent.ID, bookingEvent: bookingEvent, allBookingEvents: this.getBookingData() }));
        }))), h("igl-housekeeping-dialog", { key: 'ff5402c089cda8ee2b2fff43c97ffc5d9b29befd', onIrAfterClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedRoom = null;
            }, bookingNumber: this.selectedRoom ? this.bookingMap.get(this.selectedRoom?.id) : undefined, selectedRoom: this.selectedRoom, open: this.selectedRoom !== null }), h("igl-hk-issues-dialog", { key: '3e949f84fffed7f2aa091a3b7cdd3b0b974b837e', open: this.issues !== null, issues: this.issues, unitName: this.issues?.length > 0 ? this.issues[0]?.unit?.name : '', propertyId: this.propertyId, onIrAfterClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.issues = null;
            } })));
    }
    static get watchers() { return {
        "calendarData": ["handleCalendarDataChange"],
        "today": ["handleTodayChange"]
    }; }
};
IglCalBody.style = IglCalBodyStyle0;

const iglCalFooterCss = ".sc-igl-cal-footer-h{display:block;position:sticky;bottom:0;width:max-content;z-index:3;color:var(--wa-color-text-quiet)}.footerCell.sc-igl-cal-footer{display:-moz-inline-grid;display:-ms-inline-grid;display:inline-grid;position:-webkit-sticky;position:sticky;bottom:0;width:58px;height:40px;background:var(--wa-color-surface-default);vertical-align:top;border-top:1px solid var(--wa-color-surface-border)}.bottomLeftCell.sc-igl-cal-footer{left:-1px;z-index:2;width:170px;text-align:left;padding-left:15px}.footerCell.sc-igl-cal-footer i.sc-igl-cal-footer{margin-right:5px}.legendBtn.sc-igl-cal-footer{color:#41bff3;color:var(--wa-color-text-link);cursor:pointer}.legendBtn.sc-igl-cal-footer:hover{color:color-mix(in oklab, var(--wa-color-text-link), var(--wa-color-mix-hover))}.isOnline.sc-igl-cal-footer i.sc-igl-cal-footer{color:#2f9c3f;font-weight:bold}.isOffline.sc-igl-cal-footer i.sc-igl-cal-footer{font-weight:bold}.isOffline.sc-igl-cal-footer{color:#a40000}.dayTitle.sc-igl-cal-footer{font-size:0.8em;font-weight:600;display:grid;user-select:none}.currentDay.sc-igl-cal-footer .dayTitle.sc-igl-cal-footer{font-weight:bold}.currentDay.sc-igl-cal-footer{background-color:var(--wa-color-brand-fill-quiet)}.dayCapacityPercent.sc-igl-cal-footer{font-size:0.75em}.badge-pill.sc-igl-cal-footer{padding-left:1em;padding-right:1em;font-size:0.7em;margin-bottom:2px}.weekend.sc-igl-cal-footer{font-weight:bold;color:var(--wa-color-text-normal)}";
const IglCalFooterStyle0 = iglCalFooterCss;

const IglCalFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.optionEvent = createEvent(this, "optionEvent", 7);
    }
    optionEvent;
    calendarData;
    isLegendOpen = false;
    today;
    highlightedDate;
    _today = hooks().format('YYYY-MM-DD');
    // private isOnline:boolean = false;
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: '8c0cb603327f6190ac9770beb437a244528591ea', class: "footerContainer" }, h("div", { key: 'a22f068b64b076db384ebb1d6a65ef441449051d', class: "footerCell bottomLeftCell align-items-center preventPageScroll", style: { paddingLeft: '10px' } }, h("button", { key: '7babe06a18c8e204b5366dba48a8daeca94c418a', class: "m-0 p-0 btn btn-sm  legendBtn d-flex align-items-center", style: { gap: '0.25rem' }, onClick: () => this.handleOptionEvent('showLegend') }, this.isLegendOpen ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", height: 16, width: 16 }, h("path", { fill: "currentColor", d: "M105.4 297.4C92.9 309.9 92.9 330.2 105.4 342.7L265.4 502.7C277.9 515.2 298.2 515.2 310.7 502.7C323.2 490.2 323.2 469.9 310.7 457.4L173.3 320L310.6 182.6C323.1 170.1 323.1 149.8 310.6 137.3C298.1 124.8 277.8 124.8 265.3 137.3L105.3 297.3zM457.4 137.4L297.4 297.4C284.9 309.9 284.9 330.2 297.4 342.7L457.4 502.7C469.9 515.2 490.2 515.2 502.7 502.7C515.2 490.2 515.2 469.9 502.7 457.4L365.3 320L502.6 182.6C515.1 170.1 515.1 149.8 502.6 137.3C490.1 124.8 469.8 124.8 457.3 137.3z" }))) : (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", height: 16, width: 16 }, h("path", { fill: "currentColor", d: "M535.1 342.6C547.6 330.1 547.6 309.8 535.1 297.3L375.1 137.3C362.6 124.8 342.3 124.8 329.8 137.3C317.3 149.8 317.3 170.1 329.8 182.6L467.2 320L329.9 457.4C317.4 469.9 317.4 490.2 329.9 502.7C342.4 515.2 362.7 515.2 375.2 502.7L535.2 342.7zM183.1 502.6L343.1 342.6C355.6 330.1 355.6 309.8 343.1 297.3L183.1 137.3C170.6 124.8 150.3 124.8 137.8 137.3C125.3 149.8 125.3 170.1 137.8 182.6L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7z" }))), h("span", { key: '27b8933777bda5db1dd6b26d9bd09539cc4c0cf4' }, locales.entries.Lcz_Legend), h("span", { key: '59a5072938b9dda83f80c57c771afb141f9a57ca' }, "v1.4"), h("ir-new-badge", { key: 'f2e430ea5f21c69c5ce47288b7f8cc06eba0df0a', style: { marginLeft: '0.25rem' } }))), this.calendarData.days.map(dayInfo => (h("div", { class: "footerCell align-items-center" }, h("div", { class: {
                'dayTitle full-height align-items-center': true,
                'weekend': isWeekend(dayInfo.value),
                'currentDay': dayInfo.value === this._today || this.highlightedDate === dayInfo.day,
            } }, dayInfo.dayDisplayName))))));
    }
};
IglCalFooter.style = IglCalFooterStyle0;

const iglCalHeaderCss = ".sc-igl-cal-header-h{display:block;position:absolute;top:0;height:100%;color:var(--wa-color-text-quiet)}.svg-icon.sc-igl-cal-header{height:20px;width:20px}.darkGrey.sc-igl-cal-header{background:#ececec}.topLeftCell.sc-igl-cal-header{border-inline-end:1px solid var(--wa-color-surface-border)}.btn.sc-igl-cal-header{pointer-events:auto}.dayTitle.weekend.sc-igl-cal-header{font-weight:bold;color:var(--wa-color-text-normal)}.cellData.sc-igl-cal-header{background-color:var(--wa-color-surface-default)}.stickyCell.sc-igl-cal-header{display:-ms-inline-grid;display:-moz-inline-grid;display:inline-grid;position:-webkit-sticky;position:sticky;top:0px;height:82px;display:inline-block;vertical-align:top;z-index:2}.headersContainer.sc-igl-cal-header{background-color:var(--wa-color-surface-default)}.headerCell.sc-igl-cal-header{display:inline-grid;width:58px;height:58px;vertical-align:top;background-color:var(--wa-color-surface-default);border-bottom:1px solid var(--wa-color-surface-border)}.monthsContainer.sc-igl-cal-header{height:20px;background-color:var(--wa-color-surface-default);margin-bottom:0.2em}.monthCell.sc-igl-cal-header{display:inline-grid;height:20px;background-color:var(--wa-color-overlay-inline);border-right:1px solid var(--wa-color-surface-border);color:var(--wa-color-neutral-on-quiet);vertical-align:top}.monthCell.sc-igl-cal-header:nth-child(odd){background:var(--wa-color-neutral-fill-normal);color:var(--wa-color-neutral-on-normal)}.monthTitle.sc-igl-cal-header{overflow:hidden;text-overflow:ellipsis;font-size:0.9em;text-transform:uppercase;font-weight:bold;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.topLeftCell.sc-igl-cal-header{left:0px;z-index:3;width:170px;background-color:var(--wa-color-surface-default);display:-ms-inline-grid;display:-moz-inline-grid;display:inline-grid}.datePickerHidden.sc-igl-cal-header{position:absolute;height:100%;width:100%;opacity:0;cursor:pointer;z-index:1}.date_btn.sc-igl-cal-header{cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative}.date_btn.sc-igl-cal-header:hover{background:#f6f6f6;border-radius:0.3rem}.caledarBtns.sc-igl-cal-header{position:relative;cursor:pointer;padding:0.4rem}.caledarBtns.sc-igl-cal-header:hover{background-color:#f6f6f6}.dayTitle.sc-igl-cal-header{font-size:0.8em;font-weight:600;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.currentDay.sc-igl-cal-header .dayTitle.sc-igl-cal-header{font-weight:bold}.currentDay.sc-igl-cal-header{background-color:var(--wa-color-brand-fill-quiet)}.dayCapacityPercent.sc-igl-cal-header{font-size:0.75em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.badge-pill.sc-igl-cal-header{padding:3px 1em;font-size:0.8em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.pointer.sc-igl-cal-header{cursor:pointer}.searchContiner.sc-igl-cal-header{padding-left:10px;padding-right:10px}.searchListContainer.sc-igl-cal-header{background:var(--wa-color-surface-default);border:1px solid var(--wa-color-surface-border);border-bottom:none}.fd-header__badge-btn.sc-igl-cal-header{all:unset;cursor:pointer}.fd-header__badge-btn.sc-igl-cal-header:hover .fd-header__badge.sc-igl-cal-header{background-color:color-mix(in oklab, var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)), var(--wa-color-mix-hover))}.searchListItem.sc-igl-cal-header{background:var(--wa-color-surface-default);border-bottom:1px solid var(--wa-color-surface-border);padding-left:8px}.header__fd-actions.sc-igl-cal-header{color:var(--wa-color-text-normal);border-inline-end:1px solid var(--wa-color-surface-border)}.badge-light.sc-igl-cal-header{background-color:#999999;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.min-width-full.sc-igl-cal-header{min-width:100%}.header__fd-actions.sc-igl-cal-header{display:flex;width:170px;box-sizing:border-box;gap:0.875rem;color:var(--wa-color-text-normal);flex-direction:column}";
const IglCalHeaderStyle0 = iglCalHeaderCss;

const IglCalHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.optionEvent = createEvent(this, "optionEvent", 7);
        this.gotoRoomEvent = createEvent(this, "gotoRoomEvent", 7);
        this.gotoToBeAssignedDate = createEvent(this, "gotoToBeAssignedDate", 7);
    }
    optionEvent;
    gotoRoomEvent;
    gotoToBeAssignedDate;
    calendarData;
    today;
    propertyid;
    unassignedDates;
    to_date;
    highlightedDate;
    renderAgain = false;
    unassignedRoomsNumber = {};
    // private searchValue: string = '';
    // private searchList: { [key: string]: any }[] = [];
    roomsList = [];
    toBeAssignedService = new ToBeAssignedService();
    dateRef;
    dateSelectRef;
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
        return (h(Host, { key: 'f91843fcc3b32ce0780f02602105681a9a50fe78' }, h("div", { key: '21fd232385c34f16afd8c85d90e1d5cd9d931949', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, h("div", { key: 'bc8087bac2461308f7a559c4dc2846351f3c1f50', class: "header__fd-actions" }, h("div", { key: '235b0d5b4e5efec38bfd5f175b4aaad0d19b2148', class: "row justify-content-around no-gutters", style: { gap: '0' } }, !this.calendarData.is_vacation_rental && (h(Fragment, { key: 'eaacb7c8da450d91298246fdfe51ef7b610385b6' }, h("wa-tooltip", { key: 'f5d8eca7672cba321fd743b9007d2c4320959378', for: "fd-unassigned-dates_btn" }, locales.entries.Lcz_UnassignedUnitsTooltip), h("ir-custom-button", { key: 'dc376a0a69160030535134a83556319ca001e040', id: "fd-unassigned-dates_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('showAssigned') }, h("wa-icon", { key: '69cddba054c3027c7bfc097585b1360ea2a591cc', style: { fontSize: '1.5rem' }, name: "server", label: locales.entries.Lcz_UnassignedUnitsTooltip, "aria-label": locales.entries.Lcz_UnassignedUnitsTooltip })))), h("wa-tooltip", { key: '9f447edcb2d528c2d76b86667e347571dd1bc1dd', for: "fd-dates-navigation_btn" }, locales.entries.Lcz_Navigate), h("ir-date-select", { key: 'a1a0f12300c20aa76be23def61628f4275068d37', minDate: hooks().add(-2, 'months').startOf('month').format('YYYY-MM-DD'), onDateChanged: evt => {
                console.log('evt', evt);
                this.handleDateSelect(evt);
            }, ref: el => (this.dateSelectRef = el) }, h("ir-custom-button", { key: '0a4f568b40dc3c0daa7aa06cb803d65becd38ec2', slot: "trigger", id: "fd-dates-navigation_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('calendar') }, h("wa-icon", { key: '5f3f35c8c744119799c75697c37a886da1ca29a1', style: { fontSize: '1.5rem' }, name: "calendar", variant: "regular", label: locales.entries.Lcz_Navigate, "aria-label": locales.entries.Lcz_Navigate })), h("div", { key: 'd16245a882dd9a3f142f977533e6c1ce857ad481', class: "fd-dates__actions" }, h("wa-divider", { key: '5d16362baac042acafc600d8b78c5fbfecadfd9b' }), h("ir-custom-button", { key: 'e33eaa26c190036ea9b2fab85d46fe796e6e7407', variant: "neutral", appearance: "outlined", onClickHandler: () => {
                this.handleOptionEvent('gotoToday');
                this.dateSelectRef.closeDatePicker();
            } }, "Today"))), h(Fragment, { key: 'd5d11372357b492d015c4b01a18faa7eeff8bb7d' }, h("wa-tooltip", { key: 'e161d11467669d305328ba544fba07439eb50ac3', for: "fd-new-booking_btn" }, locales.entries.Lcz_CreateNewBooking), h("ir-custom-button", { key: '4a41c3f894651ae3c93d259c6c7cd4a8bf555100', slot: "trigger", id: "fd-new-booking_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('add', this.getNewBookingModel()) }, h("wa-icon", { key: 'cc4abdb1130b631e42733b1aba21af23e6d1469a', style: { fontSize: '1.5rem' }, name: "plus", label: locales.entries.Lcz_CreateNewBooking, "aria-label": locales.entries.Lcz_CreateNewBooking }))), h(Fragment, { key: '7e78032b8a5355096d8d66bdc45302f482c1c473' }, h("wa-tooltip", { key: 'c6b8ae194cb97d9494cff82d8cd5b138df69ee2c', for: "fd-stop-open-sale_btn" }, locales.entries.Lcz_StopOpenSale), h("ir-custom-button", { key: '78b6f38b4c4a9d1d060fab6f45bfd9036e18e3f1', slot: "trigger", id: "fd-stop-open-sale_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('bulk', this.getNewBookingModel()) }, h("wa-icon", { key: 'eb09e26022f32226a03b1e44c9d7423a464329bb', variant: "regular", style: { fontSize: '1.5rem' }, name: "calendar-xmark", label: locales.entries.Lcz_StopOpenSale, "aria-label": locales.entries.Lcz_StopOpenSale })))), h("div", { key: '82041a84f2418ffabcc4ed3294e6d4b836cc6c0a', class: "searchContiner" }, h("ir-picker", { key: 'b6c0702d538067b0426c8b13dbbda5ba4ec7192f', size: "small", "onCombobox-select": e => {
                this.handleScrollToRoom(Number(e.detail.item.value));
            } }, this.roomsList.map(room => (h("ir-picker-item", { label: room.name, value: room.id }, room.name))))))), h("div", { key: '3c016c0c74c5c29bf49bbb586374e102156d6400', class: "stickyCell headersContainer" }, h("div", { key: '1744d062eb5f5f8d8953d9623e8b540ca559df25', class: "monthsContainer" }, this.calendarData.monthsInfo.map(monthInfo => (h("div", { class: "monthCell", style: { width: monthInfo.daysCount * 58 + 'px' } }, h("div", { class: "monthTitle" }, monthInfo.monthName))))), this.calendarData.days.map(dayInfo => {
            return (h("div", { class: `headerCell align-items-center ${'day-' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''}`, "data-day": dayInfo.day }, !this.calendarData.is_vacation_rental && (h("div", { class: "preventPageScroll", onClick: () => this.showToBeAssigned(dayInfo) }, this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr !== 0 ? (h("button", { class: 'fd-header__badge-btn' }, h("wa-badge", { class: "fd-header__badge", variant: 'brand', appearance: 'accent', pill: true }, this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr))) : (h("wa-badge", { variant: 'neutral', appearance: 'filled', pill: true }, ' ', this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr)))), h("div", { class: { dayTitle: true, weekend: isWeekend(dayInfo.value) } }, dayInfo.dayDisplayName), h("div", { class: "dayCapacityPercent" }, dayInfo.occupancy, "%")));
        }))));
    }
    static get watchers() { return {
        "unassignedDates": ["handleCalendarDataChanged"]
    }; }
};
IglCalHeader.style = IglCalHeaderStyle0;

const iglHkIssuesDialogCss = ".sc-igl-hk-issues-dialog-h{display:block;text-align:start}.dialog-body.sc-igl-hk-issues-dialog{display:flex;flex-direction:column;gap:0.75rem}.tickets-list.sc-igl-hk-issues-dialog{display:flex;flex-direction:column;gap:0.625rem;overflow-y:auto;padding-right:2px}.ticket.sc-igl-hk-issues-dialog{display:flex;flex-direction:column;gap:0.5rem;padding:0.875rem 1rem;border-radius:8px;background:var(--wa-color-neutral-surface);box-shadow:var(--wa-shadow-s);border-radius:var(--wa-panel-border-radius);border-style:var(--wa-panel-border-style);box-shadow:var(--wa-shadow-s);border-width:var(--wa-panel-border-width);transition:border-color 0.15s ease,\n    background 0.15s ease,\n    box-shadow 0.15s ease;cursor:pointer}.tickets-list.sc-igl-hk-issues-dialog:has(.ticket+.ticket).sc-igl-hk-issues-dialog .ticket.sc-igl-hk-issues-dialog{cursor:pointer}.ticket--selected.sc-igl-hk-issues-dialog{border-color:var(--wa-form-control-activated-color);background-color:var(--wa-color-brand-fill-quiet)}.ticket-top.sc-igl-hk-issues-dialog{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.ticket-top-left.sc-igl-hk-issues-dialog{display:flex;align-items:center;gap:0.5rem}.ticket-id.sc-igl-hk-issues-dialog{font-size:0.7rem;font-weight:700;font-family:ui-monospace, 'Cascadia Code', 'Source Code Pro', monospace;letter-spacing:0.04em;color:var(--wa-color-neutral-on-quiet);background:color-mix(in srgb, var(--wa-color-neutral-fill-loud) 10%, transparent);padding:0.125rem 0.375rem;border-radius:4px}.ticket-badge.sc-igl-hk-issues-dialog{display:inline-flex;align-items:center;gap:0.3rem;padding:0.175rem 0.5rem;border-radius:100px;font-size:0.65rem;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;background:color-mix(in srgb, var(--wa-color-warning-fill-loud, #e6a700) 12%, transparent);color:color-mix(in srgb, var(--wa-color-warning-fill-loud, #b07a00) 100%, transparent);border:1px solid color-mix(in srgb, var(--wa-color-warning-fill-loud, #e6a700) 35%, transparent)}.ticket-badge.sc-igl-hk-issues-dialog::before{content:'';display:inline-block;width:5px;height:5px;border-radius:50%;background:currentColor;flex-shrink:0}.ticket-date.sc-igl-hk-issues-dialog{display:inline-flex;align-items:center;gap:0.3rem;font-size:0.72rem;color:var(--wa-color-neutral-on-quiet);white-space:nowrap}.ticket-time.sc-igl-hk-issues-dialog{padding-inline-start:0.25rem}.ticket-date.sc-igl-hk-issues-dialog wa-icon.sc-igl-hk-issues-dialog{font-size:0.65rem}.ticket-description.sc-igl-hk-issues-dialog{margin:0;font-size:0.875rem;line-height:1.55;color:var(--wa-color-neutral-on-surface);white-space:pre-wrap;word-break:break-word}.ticket-footer-row.sc-igl-hk-issues-dialog{display:flex;align-items:center;justify-content:space-between;padding-top:0.5rem;margin-top:0.125rem;border-top:1px solid var(--wa-color-neutral-stroke-quiet)}.ticket-meta.sc-igl-hk-issues-dialog{display:flex;align-items:center;gap:0.5rem}.ticket-reporter.sc-igl-hk-issues-dialog{display:flex;align-items:center;gap:0.5rem}.ticket-avatar.sc-igl-hk-issues-dialog{display:inline-flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem;border-radius:50%;background:color-mix(in srgb, var(--wa-color-brand-fill-loud) 15%, transparent);color:var(--wa-color-brand-fill-loud);font-size:0.6rem;font-weight:700;letter-spacing:0.02em;flex-shrink:0}.ticket-reporter-name.sc-igl-hk-issues-dialog{font-size:0.78rem;font-weight:500;color:var(--wa-color-neutral-on-quiet)}.error-banner.sc-igl-hk-issues-dialog{display:flex;align-items:center;gap:0.5rem;background:color-mix(in srgb, var(--wa-color-danger-fill-loud) 8%, transparent);border:1px solid color-mix(in srgb, var(--wa-color-danger-fill-loud) 25%, transparent);border-radius:6px;padding:0.5rem 0.75rem;font-size:0.85rem;color:var(--wa-color-danger-fill-loud)}.dialog-footer.sc-igl-hk-issues-dialog{display:flex;align-items:center;justify-content:flex-end;gap:0.5rem}.selected-hint.sc-igl-hk-issues-dialog{margin-right:auto;font-size:0.78rem;font-weight:500;color:var(--wa-color-neutral-on-quiet)}";
const IglHkIssuesDialogStyle0 = iglHkIssuesDialogCss;

const IglHkIssuesDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.irAfterClose = createEvent(this, "irAfterClose", 7);
    }
    open = false;
    unitId;
    unitName;
    propertyId;
    issues;
    irAfterClose;
    error = null;
    isResolving = false;
    selectedIds = new Set();
    dialogRef;
    houseKeepingService = new HouseKeepingService();
    async handleOpenChange(isOpen) {
        if (isOpen) {
            this.error = null;
            this.dialogRef?.openModal();
        }
        else {
            this.dialogRef?.closeModal();
        }
    }
    handleIssuesChange(newIssues) {
        this.selectedIds = new Set();
        if (newIssues?.length === 1) {
            this.selectedIds = new Set([newIssues[0].id]);
        }
    }
    toggleIssue(id) {
        const next = new Set(this.selectedIds);
        if (next.has(id)) {
            next.delete(id);
        }
        else {
            next.add(id);
        }
        this.selectedIds = next;
    }
    handleResolve = async () => {
        if (!this.selectedIds.size || this.isResolving)
            return;
        this.isResolving = true;
        this.error = null;
        try {
            const payload = Array.from(this.selectedIds);
            await this.houseKeepingService.resolveHKIssue({ issue_ids: payload });
            this.dialogRef?.closeModal();
        }
        catch (e) {
            this.error = e instanceof Error ? e.message : 'Failed to resolve issue. Please try again.';
        }
        finally {
            this.isResolving = false;
        }
    };
    // private getInitials(name: string): string {
    //   return (name ?? '')
    //     .split(' ')
    //     .map(n => n[0])
    //     .join('')
    //     .toUpperCase()
    //     .slice(0, 2);
    // }
    renderTicket(issue) {
        const isMultiple = this.issues.length > 1;
        const isSelected = this.selectedIds.has(issue.id);
        // const initials = this.getInitials(issue.housekeeper_name);
        return (h("div", { class: `ticket ${isSelected ? 'ticket--selected' : ''}`, key: issue.id, onClick: () => isMultiple && this.toggleIssue(issue.id) }, h("p", { class: "ticket-description" }, issue.description || 'No description provided.'), h("div", { class: "ticket-footer-row" }, h("div", { class: "ticket-reporter" }, h("span", { class: "ticket-reporter-name" }, issue.housekeeper_name)), h("div", { class: 'ticket-meta' }, h("span", { class: "ticket-date" }, hooks(issue.date).format('MMM D, YYYY'), issue.hour != null && issue.minute != null && (h("span", { class: "ticket-time" }, String(issue.hour).padStart(2, '0'), ":", String(issue.minute).padStart(2, '0')))), isMultiple && (h("wa-checkbox", { checked: isSelected, defaultChecked: isSelected, onchange: (e) => {
                e.stopPropagation();
                this.toggleIssue(issue.id);
            } }))))));
    }
    renderContent() {
        if (!this.issues?.length || !this.open)
            return null;
        return (h("div", { class: "dialog-body" }, h("div", { class: "tickets-list" }, this.issues.map(issue => this.renderTicket(issue))), this.error && (h("div", { class: "error-banner", role: "alert" }, h("wa-icon", { name: "circle-exclamation" }), this.error))));
    }
    render() {
        const count = this.issues?.length ?? 0;
        const selectedCount = this.selectedIds.size;
        return (h("ir-dialog", { key: '184311c49442843d5baedb41d13c9e9c10519cd3', ref: el => (this.dialogRef = el), label: `Reported ${count > 1 ? 'Issues' : 'Issue'}: ${this.unitName}`, onIrDialogAfterHide: () => this.irAfterClose.emit() }, this.renderContent(), h("div", { key: '289c2b9176ca258a2c4cb40a18572b5367f5d27c', slot: "footer", class: "dialog-footer" }, h("ir-custom-button", { key: '6f370d08401a78a022f01b6247ceb6cb104fbd3f', variant: "neutral", size: "medium", appearance: "filled", onClickHandler: () => this.dialogRef?.closeModal(), disabled: this.isResolving }, "Close"), h("ir-custom-button", { key: '03d6342d2f8ce6ba93ad30d3c889fc8c9c6c4b84', variant: "brand", size: "medium", appearance: "accent", onClickHandler: this.handleResolve, disabled: selectedCount === 0, loading: this.isResolving }, "Mark as Resolved"))));
    }
    static get watchers() { return {
        "open": ["handleOpenChange"],
        "issues": ["handleIssuesChange"]
    }; }
};
IglHkIssuesDialog.style = IglHkIssuesDialogStyle0;

const iglHousekeepingDialogCss = ".sc-igl-housekeeping-dialog-h{display:block;text-align:start}";
const IglHousekeepingDialogStyle0 = iglHousekeepingDialogCss;

const IglHousekeepingDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.irAfterClose = createEvent(this, "irAfterClose", 7);
    }
    /**
     * Controls whether the dialog is open.
     * The parent component is responsible for toggling this value.
     */
    open;
    /**
     * Currently selected room for housekeeping actions.
     * When null or undefined, the dialog will not render.
     */
    selectedRoom;
    /**
     * Booking number associated with the selected room (if any).
     * Used for housekeeping action tracking.
     */
    bookingNumber;
    /**
     * Current property identifier.
     * Required for housekeeping service requests.
     */
    propertyId;
    isLoading = null;
    /** Fired after dialog is fully closed */
    irAfterClose;
    dialogRef;
    housekeepingService = new HouseKeepingService();
    getStatusLabel() {
        switch (this.selectedRoom?.hk_status) {
            case '002':
                return 'dirty';
            case '004':
                return 'inspected';
            default:
                return 'clean';
        }
    }
    middleButtonLabel() {
        return this.selectedRoom?.hk_status === '002' ? 'Clean' : 'Dirty';
    }
    rightButtonLabel() {
        return this.selectedRoom?.hk_status !== '004' ? 'Clean & Inspect' : 'Clean';
    }
    // private renderModalBody() {
    //   if (!this.selectedRoom) {
    //     return null;
    //   }
    //   return <p style={{ padding: '0', margin: '0' }}>Update unit {this.selectedRoom?.name} to ...</p>;
    // }
    async updateHousekeeping(e, status) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        try {
            this.isLoading = e.target.value;
            await this.housekeepingService.setExposedUnitHKStatus({
                property_id: calendar_data.property.id,
                // housekeeper: this.selectedRoom?.housekeeper ? { id: this.selectedRoom?.housekeeper?.id } : null,
                status: {
                    code: status,
                },
                unit: {
                    id: this.selectedRoom?.id,
                },
            });
            if (['001', '004'].includes(status)) {
                await this.housekeepingService.executeHKAction({
                    actions: [
                        {
                            description: 'Cleaned',
                            hkm_id: this.selectedRoom?.housekeeper?.id || null,
                            unit_id: this.selectedRoom?.id,
                            booking_nbr: this.bookingNumber,
                            status: status,
                            hk_task_type_code: 'CLN',
                        },
                    ],
                });
            }
        }
        finally {
            this.isLoading = null;
            this.dialogRef.closeModal();
        }
    }
    render() {
        return (h("ir-dialog", { key: '05b58ae11de6b2849a8b5898d80f3d499d4593c3', ref: el => (this.dialogRef = el), open: this.open, label: "Housekeeping Update", onIrDialogAfterHide: () => this.irAfterClose.emit() }, h("p", { key: '3ca3fd04afcbea67e39d74c9d32563a5f7d36efa', style: { margin: '0' } }, `${this.selectedRoom?.name} is currently marked as ${this.getStatusLabel()}.`), h("div", { key: '33b87213e17d76a250e7fe83d5258c5c71763cd1', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '39c86dfcdce9e279f01210d37d6fed0bac6c1c80', "data-dialog": "close", size: "medium", variant: "neutral", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: '49a5bd1dff534d11e45aea083b1c0fff745cfa13', value: "hk-toggle-clean-dirty", size: "medium", variant: "brand", appearance: "outlined", loading: this.isLoading === 'hk-toggle-clean-dirty', onClickHandler: e => this.updateHousekeeping(e, this.selectedRoom.hk_status === '002' ? '001' : '002') }, this.middleButtonLabel()), h("ir-custom-button", { key: 'e50b206d29dce9570cd2933f7bb7279abe86e22a', value: "hk-clean-inspect", size: "medium", variant: "brand", appearance: "accent", loading: this.isLoading === 'hk-clean-inspect', onClickHandler: e => this.updateHousekeeping(e, this.selectedRoom.hk_status === '004' ? '001' : '004') }, this.rightButtonLabel()))));
    }
};
IglHousekeepingDialog.style = IglHousekeepingDialogStyle0;

const iglLegendCss = ".sc-igl-legend-h{--spacing:var(--wa-space-l);display:block;width:max-content;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-s);background-color:var(--wa-color-surface-default);border-inline-end:2px solid var(--wa-color-surface-border)}.legend_skew.pending.sc-igl-legend{border-width:1px;border-style:dashed;border-color:var(--wa-color-success-fill-loud);background-color:var(--wa-color-surface-default) !important}.legend_skew.in-house.sc-igl-legend{background-color:var(--wa-color-brand-fill-quiet) !important;color:var(--wa-color-brand-on-quiet) !important;width:30px;transform:skew(0);border-radius:0;vertical-align:middle;font-size:12px;text-align:center}.legendRow.sc-igl-legend{position:relative;vertical-align:middle;margin-bottom:0.3rem}.legendRow.sc-igl-legend div.sc-igl-legend{display:inline-block;vertical-align:middle}.legend_skew.sc-igl-legend,.legend_skew-bordered.sc-igl-legend,.legend_skewsplit.sc-igl-legend{transform:skew(-22deg);width:15px;height:16px;border-radius:4px;background-color:var(--ir-skew-background)}.legend_skew.striped.vertical.sc-igl-legend{--stripe-period:17px;--stripe-angle:360deg}.legend_skew.striped.sc-igl-legend{--stripe-period:6px}.legend_skew.split.sc-igl-legend{border-right:4px solid var(--wa-color-text-normal, black)}.legend_skew-bordered.sc-igl-legend{border:1px solid var(--wa-color-text-normal, black)}.legend_dirty-unit.sc-igl-legend{background-color:white !important;border:1px solid #e0e0e0;height:12px;width:20px;position:relative}.fd-legend__section-title.sc-igl-legend{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;margin:0;padding:0;margin-bottom:1rem;font-size:var(--wa-font-size-m);color:var(--wa-color-text-normal, black)}.legend_dirty-unit.sc-igl-legend::after{content:'';position:absolute;bottom:0;height:100%;left:30%;right:30%;background-color:#d4d0be !important}.legend_circle.sc-igl-legend{border-radius:100%;width:10px;height:10px;margin:3px 3px 3px 2px}.legend_skewsplit.sc-igl-legend{border-right:2px solid var(--wa-color-text-normal, black)}.legendCalendar.sc-igl-legend .legendRow.sc-igl-legend{margin-bottom:0}.legendCalendar.sc-igl-legend .legendRow.sc-igl-legend:first-child .legendCal.sc-igl-legend{background-color:var(--wa-color-neutral-fill-normal);color:var(--wa-color-neutral-on-normal)}.legendCalendar.sc-igl-legend .legendRow.sc-igl-legend div.sc-igl-legend{display:inline-block;vertical-align:middle;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.total-availability.sc-igl-legend{font-size:1em !important}.legendCalendar.sc-igl-legend .legendCal.sc-igl-legend{width:80px;height:25px;text-align:center;display:inline-grid !important;align-content:center;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendCalendar.sc-igl-legend .legendCal.sc-igl-legend .badge.sc-igl-legend{margin-top:0.2rem;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendCalendar.sc-igl-legend .legendCal.legendCal-h2.sc-igl-legend{height:40px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.br-t.sc-igl-legend{border-top:1px solid var(--wa-color-surface-border)}.br-s.sc-igl-legend{border-left:1px solid var(--wa-color-surface-border);border-right:1px solid var(--wa-color-surface-border)}.br-bt.sc-igl-legend{border-bottom:1px solid var(--wa-color-surface-border)}.hyphenLegend.sc-igl-legend{-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.hyphenLegend.sc-igl-legend::before{width:12px;height:0.5px;content:' ';background-color:var(--wa-color-text-normal, black);vertical-align:middle;display:inline-block;margin-left:5px;margin-right:5px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.fd-legend__title.sc-igl-legend{align-self:center;flex:1 1 auto;font-style:inherit;font-variant:inherit;font-stretch:inherit;font-family:inherit;font-optical-sizing:inherit;font-size-adjust:inherit;font-kerning:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-language-override:inherit;font-size:var(--wa-font-size-l);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);margin:0px;padding:0;color:var(--wa-color-text-normal, black)}.fd-legend__header.sc-igl-legend{display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;background-color:var(--wa-color-surface-default);z-index:1;padding-inline-start:var(--spacing);padding-block-end:0;padding-inline-end:calc(var(--spacing) - var(--wa-form-control-padding-block));padding-block-start:calc(var(--spacing) - var(--wa-form-control-padding-block));border-bottom:1px solid var(--wa-color-surface-border);padding-bottom:calc(var(--spacing) / 2);box-sizing:border-box;background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default))}.fd-legend__shape.sc-igl-legend{display:flex;align-items:center;justify-content:center}.fd-legend__row.sc-igl-legend{display:grid;grid-template-columns:40px 1fr;gap:1rem;margin-bottom:0.5rem}.fd-legend__row-title.sc-igl-legend{padding:0;margin:0;width:fit-content}.legendContainer.sc-igl-legend{padding:0 !important}.fd-legend__body.sc-igl-legend{padding:var(--spacing)}.headerCell.sc-igl-legend{width:70px;display:flex;align-items:center;justify-content:center}.dayTitle.sc-igl-legend{font-size:0.8em;font-weight:600;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.dayCapacityPercent.sc-igl-legend{font-size:0.75em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legend_rectangle.sc-igl-legend{height:12px;width:20px}";
const IglLegendStyle0 = iglLegendCss;

const IglLegend = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.optionEvent = createEvent(this, "optionEvent", 7);
    }
    legendData;
    bookingColors = [];
    saveState = 'idle';
    saveError;
    loadingIndex = [];
    optionEvent;
    propertyService = new PropertyService();
    saveTimeout;
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
        const calendarExtra = calendar_data.property.calendar_extra ?? {};
        calendar_data.property.calendar_extra = {
            ...calendarExtra,
            booking_colors: colors.map(color => ({ ...color })),
        };
    }
    get propertyId() {
        return calendar_data.property?.id ?? calendar_data.property.id ?? null;
    }
    updateBookingColor(index, patch) {
        const bookingColors = calendar_data.property.calendar_extra?.booking_colors.map((color, idx) => (idx === index ? { ...color, ...patch } : color));
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
    updateLegend() {
        let newLegendArray = [...calendar_data.property.calendar_legends];
        //step 1: replace scheduled cleaning index 12 with dirty now index 11;
        let dirtyNow = newLegendArray[11];
        newLegendArray[11] = newLegendArray[12];
        newLegendArray[12] = dirtyNow;
        //step 2: move index 13 to index 7 and push the other 1 index lower;
        const splitBooking = newLegendArray[13];
        newLegendArray = newLegendArray.filter((_, i) => i !== 13);
        newLegendArray.splice(7, 0, splitBooking);
        return newLegendArray;
    }
    render() {
        const legend = this.updateLegend();
        return (h(Host, { key: '92ff8dfc5baffe6163ca0776f3ab0809565b35a0', class: "legendContainer text-left" }, h("div", { key: '4dbdddf63c31aaf9f00aa4ccdb8ddbf5eef2e6d2', class: "fd-legend__header" }, h("h2", { key: '1bf5ff096d5bd431dae5d3dcf410f628b6201a5f', class: "fd-legend__title", id: "legend-title" }, locales.entries.Lcz_Legend), h("ir-custom-button", { key: '9c1e7b186d44d8164e7b5c7edd7ead6882df407f', size: "medium", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: '225836bb53526f8d3a451573b06d5333729c07e9', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), h("section", { key: '3757b6c1bc5319610d24e659bfee10ec4bd42e09', class: "fd-legend__body" }, h("div", { key: '85071776c718cee00ec6d264b68cc017dacceceb' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: '08f16c6898c48c1be49122faa20c98c4a8dc3be1', class: "fd-legend__row" }, h("div", { key: 'eb9c2f95bfd95f3edd107d4a74f808e1eeba1d83', class: 'fd-legend__shape' }, h("wa-icon", { key: '4afaa8e17fa8aa4197df31428501098eae7dc7ef', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: 'c2d7ca8e94490bdc440cd7c907ef4cc6438a7943', class: "fd-legend__row-title" }, "Housekeeping reported issue")), h("wa-divider", { key: 'a757231b91f7dd574449a369018d1b1084b29290' }), h("h5", { key: 'e60b643de0a278209b5c1b7efd613958f96b71d4', class: "fd-legend__section-title" }, "Use custom colors"), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, size: "small", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: 'b2fcd5f8e4907217484a70dba559d68da2994d52' }), h("div", { key: '55e8787f4714e192dc554119027fd1e71e23848f' }, h("div", { key: 'b29ad0811d1a5d8d807b1a576cc95fc92c5d854f', class: "legendCalendar" }, h("div", { key: 'ae754e3b504c5513976af984b2645d1384e79ea4', class: "legendRow align-items-center" }, h("div", { key: 'c6bede690069fdc2ba0645f026ee30d47cd38283', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '71c5e556813bfaf812759e6b1e89c5d00c4a12f7' }, "MAR 2022")), h("div", { key: '798f8b55ef1da50f2d089aac2fe6ee40ab363e4b', class: "hyphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '5646e665c92a9a19c079f09c0329797e62c7129e', class: "legendRow" }, h("div", { key: '08edff0becc25fe6d10b9cb2c1f45e7e9b1bb549', class: "legendCal headerCell align-items-center br-s" }, h("wa-badge", { key: 'd32d3087ebb11fb7dcb809a4b0586558e5df06b6', pill: true }, "3")), h("div", { key: 'd97e5daaad2da624e93964351868ec06644fa72d', class: "hyphenLegend" }, h("div", { key: '5a8a44941eddbfe16b0861ef14e74669ef321e9a' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '6773c8b8f5b0870d8aa8d9d81aeac49c3459c56b', class: "legendRow" }, h("div", { key: 'b56b1dddcf7d653896e703597c4373ac3704ae63', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'f7809695f763791141696541ee35809def83d992', class: "hyphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'a9b0335a2d17fe19f1e34ae166f12e0c6c055a36', class: "legendRow" }, h("div", { key: '6d828b7e4e4bd72314429476efc84490c0edf5d5', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '853ee6d61ab47cd8c1207913d1c9d141c922e58a', class: "hyphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'ea4a8b2ee035972c86cf3201366cfc8dc8edbd14', class: "legendRow" }, h("div", { key: '16348d00b8fb958fe666a38ce630a561bad2c679', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '4a830328389c5eccb5b9b5e77ab9cdf77dd6f20d', class: "hyphenLegend" }, locales.entries.Lcz_TotalAvailability)))))));
    }
    static get watchers() { return {
        "saveState": ["handleSaveStateChange"]
    }; }
};
IglLegend.style = IglLegendStyle0;

const iglReallocationDialogCss = ".sc-igl-reallocation-dialog-h{display:block;text-align:start}.dialog-body.sc-igl-reallocation-dialog{display:grid;gap:1.5rem}.dialog-body__description.sc-igl-reallocation-dialog{margin:0}.dialog-footer.sc-igl-reallocation-dialog{display:flex;justify-content:flex-end;gap:0.75rem}";
const IglReallocationDialogStyle0 = iglReallocationDialogCss;

const IglReallocationDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dialogClose = createEvent(this, "dialogClose", 7);
        this.revertBooking = createEvent(this, "revertBooking", 7);
        this.resetModalState = createEvent(this, "resetModalState", 7);
    }
    get hostEl() { return getElement(this); }
    data;
    selectedRateplan;
    showRateplanError = false;
    dialogClose;
    revertBooking;
    resetModalState;
    dialogEl;
    rateplanSelectEl;
    eventsService = new EventsService();
    handleDataChange(newData) {
        this.resetState(newData);
        if (newData) {
            this.dialogEl?.openModal();
        }
        else {
            this.dialogEl?.closeModal();
        }
    }
    async reallocateUnit() {
        if (!this.data) {
            return;
        }
        if (!this.validateRateplanSelection()) {
            return;
        }
        const { pool, toRoomId, from_date, to_date, matchedRatePlan } = this.data;
        try {
            await this.eventsService.reallocateEvent(pool, toRoomId, from_date, to_date, this.data.rateplans ? Number(this.selectedRateplan) : matchedRatePlan ? Number(matchedRatePlan?.value) : undefined);
        }
        catch (error) {
            console.log(error);
            this.revertBooking.emit(pool);
        }
        finally {
            this.dialogEl?.closeModal();
            this.resetModalState.emit();
        }
    }
    get rateplanOptions() {
        if (!Array.isArray(this.data?.rateplans)) {
            return [];
        }
        return this.data.rateplans.map(option => ({
            ...option,
            text: this.formatRateplanLabel(option),
        }));
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
        const selectEl = this.rateplanSelectEl?.shadowRoot?.querySelector('select') ?? this.rateplanSelectEl?.querySelector('select');
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
    handleDialogVisibilityChange = (_) => {
        this.dialogClose.emit(false);
    };
    handleRateplanChange = (value) => {
        this.selectedRateplan = value;
        this.showRateplanError = false;
    };
    handleCancelClick = () => {
        this.dialogEl?.closeModal();
        this.dialogClose.emit(false);
    };
    render() {
        const hasRateplans = this.hasRateplanRequirement();
        return (h("ir-dialog", { key: 'e9c73c70460989bc2200f705487eafd6991c2745', label: 'Alert', ref: el => (this.dialogEl = el), onIrDialogHide: this.handleDialogVisibilityChange }, this.data && (h(Fragment, { key: 'bb93cc3cebfbe4dbbd7401d090a914fbf43a1189' }, h("div", { key: '88f09df72b59168e8c268028b8c2eb105b6cf508', class: "dialog-body" }, h("p", { key: '31ece3d5579f7b6b5596b79a17c4e670f29f98aa', class: "text-left dialog-body__description m-0 p-0" }, this.data.description), hasRateplans && (
        // <ir-select
        //   ref={el => (this.rateplanSelectEl = el)}
        //   required
        //   firstOption="Select rate plan..."
        //   data={this.rateplanOptions.map(option => ({ text: option.text, value: option.value }))}
        //   error={this.showRateplanError}
        //   onSelectChange={this.handleRateplanChange}
        // ></ir-select>
        h("wa-select", { key: '731126d74135bb5e6cd701d22f18656d646cf159', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, defaultValue: '', "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, size: "small", "aria-invalid": String(this.showRateplanError), onchange: e => this.handleRateplanChange(e.target.value) }, h("wa-option", { key: '06158a4659c87c8bdc9900b4bf5c81b001ae4785', value: "" }, "Select rate plan..."), this.rateplanOptions.map(option => (h("wa-option", { key: option.value, value: option.value }, option.text)))))), h("div", { key: '15416390a21d07c4d4be160e987f1857cf1f43a4', class: "dialog-footer", slot: "footer" }, h("ir-custom-button", { key: '5a878e1b173f914454b310aed3f1c3a740454826', appearance: "filled", variant: "neutral", onClickHandler: this.handleCancelClick, size: "medium" }, "Cancel"), h("ir-custom-button", { key: '583943e7b9e06d3b26538c080b3c9def05e3addd', variant: "brand", onClickHandler: () => this.reallocateUnit(), size: "medium", loading: isRequestPending('/ReAllocate_Exposed_Room') }, "Confirm"))))));
    }
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
    }
    booking;
    identifier;
    selectedDates;
    room;
    roomTypes = [];
    selectedUnit = {};
    isLoading;
    errors;
    mealPlanOptions = null;
    closeModal;
    defaultDates;
    bookingService = new BookingService();
    componentWillLoad() {
        this.room = this.getRoom();
        this.defaultDates = { ...this.generateDates(this.room) };
        this.selectedDates = { ...this.defaultDates };
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
        resetBookingStore(false);
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
            // const oldRooms = this.booking.rooms.filter(r => r.identifier !== this.identifier);
            const canCheckIn = this.room.in_out?.code === '001' ? (hooks().isBefore(this.selectedDates.from_date) ? false : true) : false;
            let rooms = [...this.booking.rooms];
            let currIndex = rooms.findIndex(room => room.identifier === this.room.identifier);
            if (currIndex === -1) {
                throw new Error(`Didn't find room identifier ${this.room.identifier}`);
            }
            rooms[currIndex] = {
                ...this.room,
                from_date: this.room.from_date,
                to_date: this.selectedDates.from_date.format('YYYY-MM-DD'),
                days: this.room.days.filter(r => hooks(r.date, 'YYYY-MM-DD').isBefore(this.selectedDates.from_date, 'dates')),
                departure_time: null,
            };
            rooms.push({
                ...this.room,
                identifier: null,
                in_out: canCheckIn
                    ? this.room.in_out
                    : {
                        code: '000',
                    },
                check_in: canCheckIn,
                assigned_units_pool: null,
                parent_room_identifier: this.room.identifier,
                is_split: true,
                roomtype: {
                    id: selectedUnit.roomtype_id,
                },
                rateplan: {
                    id: selectedUnit.rateplan_id || this.room.rateplan.id,
                },
                departure_time: this.room.departure_time,
                unit: { id: selectedUnit.unit_id },
                from_date: this.selectedDates.from_date.format('YYYY-MM-DD'),
                // to_date: this.selectedDates.to_date.format('YYYY-MM-DD'),
                days: this.room.days.filter(r => hooks(r.date, 'YYYY-MM-DD').isSameOrAfter(this.selectedDates.from_date, 'dates')),
            });
            // let rooms = [
            //   ...oldRooms,
            //   {
            //     ...this.room,
            //     from_date: this.room.from_date,
            //     to_date: this.selectedDates.from_date.format('YYYY-MM-DD'),
            //     days: this.room.days.filter(r => moment(r.date, 'YYYY-MM-DD').isBefore(this.selectedDates.from_date, 'dates')),
            //     departure_time: null,
            //   },
            //   {
            //     ...this.room,
            //     identifier: null,
            //     in_out: canCheckIn
            //       ? this.room.in_out
            //       : {
            //           code: '000',
            //         },
            //     check_in: canCheckIn,
            //     assigned_units_pool: null,
            //     parent_room_identifier: this.room.identifier,
            //     is_split: true,
            //     roomtype: {
            //       id: selectedUnit.roomtype_id,
            //     },
            //     rateplan: {
            //       id: selectedUnit.rateplan_id || this.room.rateplan.id,
            //     },
            //     departure_time: this.room.departure_time,
            //     unit: { id: selectedUnit.unit_id },
            //     from_date: this.selectedDates.from_date.format('YYYY-MM-DD'),
            //     // to_date: this.selectedDates.to_date.format('YYYY-MM-DD'),
            //     days: this.room.days.filter(r => moment(r.date, 'YYYY-MM-DD').isSameOrAfter(this.selectedDates.from_date, 'dates')),
            //   },
            // ];
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
            console.log(booking);
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
                this.errors = { ...err };
            }
        }
        finally {
            this.isLoading = false;
        }
    }
    updateSelectedUnit(params) {
        const merged = { ...this.selectedUnit, ...params };
        const roomTypesSource = calendar_data?.property?.roomtypes;
        const mealPlanResult = checkMealPlan({
            rateplan_id: this.room.rateplan.id.toString(),
            roomTypeId: merged?.roomtype_id,
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
        return (h("form", { key: '77d37fba0e1a81ab21e5f5cde60a275edc9a1105', onSubmit: e => {
                e.preventDefault();
                this.doReservation();
            }, class: "sheet-container" }, h("ir-title", { key: 'c03846f5f9b3b415b457aa76cad94990ed85819f', class: "px-1 sheet-header mb-0", displayContext: "sidebar", onCloseSideBar: () => this.closeModal.emit(), label: `Split unit ${this.room?.unit['name']}` }), h("section", { key: '10e1f8dd51e678e84a7b0fc58c3ebf3a9f7a23f3', class: "px-1 sheet-body" }, h("div", { key: '987dcf15674028aa711256e714b921b702d1c528', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '684fd31648d844e83b34fdccfc9919325a311828' }, h("ir-date-view", { key: 'e7bd8fd8c02ff01e0e8d92484e2b9d2b6aa2c105', from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false })), h("p", { key: '361d6cffb6b0baa07195e2d9b9601b4100494b2c', class: "m-0 p-0" }, this.room.rateplan.short_name, " ", this.room.rateplan.is_non_refundable ? locales.entries.Lcz_NonRefundable : '')), h("div", { key: '2d2e789375959339e2c801d06e28ef83c51a7797', class: 'd-flex align-items-center mt-1', style: { gap: '0.5rem' } }, h("span", { key: '6831615266ad4a76cf78703e4280aad891bdb68c' }, "From:"), h("ir-date-picker", { key: '083ee3e178f10d9d3308a1ded198b455eb5bbfce', "data-testid": "pickup_arrival_date", date: this.selectedDates?.from_date?.format('YYYY-MM-DD'), maxDate: this.defaultDates?.to_date.format('YYYY-MM-DD'), minDate: this.defaultDates?.from_date.format('YYYY-MM-DD'), emitEmptyDate: true,
            // aria-invalid={this.errors?.arrival_date && !this.pickupData.arrival_date ? 'true' : 'false'}
            onDateChanged: evt => {
                this.selectedDates = {
                    ...this.selectedDates,
                    from_date: evt.detail.start,
                };
            } }, h("input", { key: 'e6e492de133276e5c0c952de707bf8c63e9e08e7', type: "text", slot: "trigger", value: this.selectedDates.from_date ? this.selectedDates.from_date.format('MMM DD, YYYY') : null, class: `form-control input-sm  text-center`, style: { width: '120px' } })), h("ir-button", { key: '0f58939e21c095caa7c77adadab5b3e86fa077f7', isLoading: isRequestPending('/Check_Availability'), text: "Check available units", size: "sm", onClick: () => this.checkBookingAvailability() })), this.errors?.roomtype_id && h("p", { key: '8e3f163edbbf40c4cf7e317827a9b118b2821000', class: "text-danger text-left mt-2" }, "Please select a room"), h("ul", { key: 'c60dc2bface2d2987bbd0da527f0b72ea72a178f', class: "room-type-list mt-2" }, this.roomTypes?.map(roomType => {
            if (!roomType.is_available_to_book) {
                return null;
            }
            const units = (() => {
                const unitMap = new Map();
                for (const rateplan of roomType.rateplans ?? []) {
                    for (const unit of rateplan.assignable_units ?? []) {
                        if (unit.Is_Fully_Available) {
                            unitMap.set(unit.pr_id, unit.name);
                        }
                    }
                }
                return Array.from(unitMap, ([id, name]) => ({ id, name }));
            })();
            return (h(Fragment, null, h("li", { key: `roomTypeRow-${roomType.id}`, class: `room-type-row` }, h("div", { class: 'd-flex choice-row' }, h("span", { class: "text-left room-type-name" }, roomType.name))), units.map((room, j) => {
                const row_style = j === roomType.physicalrooms.length - 1 ? 'pb-1' : '';
                const showMealPlanSelect = this.selectedUnit?.unit_id === room.id && Array.isArray(this.mealPlanOptions) && this.mealPlanOptions.length > 0;
                return (h("li", { key: `physicalRoom-${room.id}-${j}`, class: `physical-room ${row_style}` }, h("div", { class: 'd-flex choice-row align-items-center', style: { gap: '0.5rem' } }, h("ir-radio", { class: "pl-1", name: "unit", checked: this.selectedUnit?.unit_id === room.id, onCheckChange: () => this.updateSelectedUnit({
                        roomtype_id: roomType.id,
                        unit_id: room.id,
                    }), label: room.name }), showMealPlanSelect && (h("ir-select", { firstOption: "Select a new rateplan...", error: this.errors?.rateplan_id && !this.selectedUnit?.rateplan_id, onSelectChange: e => {
                        const value = e.detail === null || e.detail === undefined || e.detail === '' ? undefined : Number(e.detail);
                        this.updateSelectedUnit({
                            rateplan_id: value,
                        });
                    }, data: this.mealPlanOptions.map(e => ({ ...e, text: e.text + `${e.custom_text ? ' | ' : ''}${e.custom_text}` })) })
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
        }))), h("div", { key: '6a8a68f13af3d4ac0bd77defa6d274fc28d328e4', class: 'sheet-footer' }, h("ir-button", { key: 'b0c7b1d0299ab0c0e1b988b5fc52a9461962b4e7', text: locales.entries.Lcz_Cancel, btn_color: "secondary", class: 'flex-fill', onClickHandler: () => this.closeModal.emit(null) }), h("ir-button", { key: '442f882b1ce4576d862cb93a5961d645fffab153', isLoading: this.isLoading, text: locales.entries.Lcz_Confirm, btn_type: "submit", class: "flex-fill" }))));
    }
};
IglSplitBooking.style = IglSplitBookingStyle0 + IglSplitBookingStyle1;

const iglTbaCategoryViewCss = ".sc-igl-tba-category-view-h{display:block}";
const IglTbaCategoryViewStyle0 = iglTbaCategoryViewCss;

const IglTbaCategoryView = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.assignUnitEvent = createEvent(this, "assignUnitEvent", 7);
    }
    calendarData;
    selectedDate;
    categoriesData = {};
    categoryId;
    eventDatas;
    categoryIndex;
    renderAgain = false;
    assignUnitEvent;
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
        return (h(Host, { key: '5c25faa56ed3dd90dc445f55fb5f7872e8801396' }, h("div", { key: '0bee8d67b83abefdff2974b7aab3e41569658a49', class: "sectionContainer" }, h("div", { key: '7c679d3d6a7a9b5af2d64271a5f51305dec58d03', class: "font-weight-bold font-small-3" }, this.categoriesData[this.categoryId]?.name), this.getEventView(this.categoryId, this.eventDatas))));
    }
};
IglTbaCategoryView.style = IglTbaCategoryViewStyle0;

const iglToBeAssignedCss = ".sc-igl-to-be-assigned-h{--spacing:var(--wa-space-l);display:block;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-s);background-color:var(--wa-color-surface-default);border-inline-end:2px solid var(--wa-color-surface-border)}.fd-to-be-assigned__title.sc-igl-to-be-assigned{align-self:center;flex:1 1 auto;font-style:inherit;font-variant:inherit;font-stretch:inherit;font-family:inherit;font-optical-sizing:inherit;font-size-adjust:inherit;font-kerning:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-language-override:inherit;font-size:var(--wa-font-size-l);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);margin:0px;padding:0;color:var(--wa-color-text-normal, black)}.fd-to-be-assigned__header.sc-igl-to-be-assigned{display:flex;align-items:center;justify-content:space-between;padding-inline-start:var(--spacing);padding-block-end:0;padding-inline-end:calc(var(--spacing) - var(--wa-form-control-padding-block));padding-block-start:calc(var(--spacing) - var(--wa-form-control-padding-block));border-bottom:1px solid var(--wa-color-surface-border);padding-bottom:calc(var(--spacing) / 2);box-sizing:border-box;background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default))}.fd-to-be-assigned__header-container.sc-igl-to-be-assigned{position:sticky;top:0;background-color:var(--wa-color-surface-default);z-index:1}.to-be-assigned__body.sc-igl-to-be-assigned{padding:var(--spacing)}.to-be-assigned__body.sc-igl-to-be-assigned .scrollabledArea.sc-igl-to-be-assigned{display:flex;flex-direction:column;gap:1rem}.custom-dropdown.sc-igl-to-be-assigned{cursor:pointer;padding:5px 10px;width:min-content;margin-left:auto;margin-right:auto}.dropdown-toggle.sc-igl-to-be-assigned{all:unset;display:flex;width:max-content;align-items:center;gap:10px}.close_btn_style.sc-igl-to-be-assigned{padding:0.4rem}.close_btn_style.sc-igl-to-be-assigned:hover{background-color:#f6f6f6}.dropdown-menu.sc-igl-to-be-assigned{max-height:250px;overflow-y:auto}.tobeAssignedHeader.sc-igl-to-be-assigned{font-weight:500;letter-spacing:0.05rem;font-size:1.12rem;padding:0;margin:0}.assignment_header.sc-igl-to-be-assigned{display:flex;align-items:center;justify-content:space-between;padding-top:5px;margin-bottom:1rem}.dropdown-toggle.sc-igl-to-be-assigned::after{content:none;display:none}.dropdown-toggle.sc-igl-to-be-assigned .caret-icon.sc-igl-to-be-assigned{transition:transform 0.2s ease}.show.sc-igl-to-be-assigned .caret-icon.sc-igl-to-be-assigned{transform:rotate(-180deg)}.stickyHeader.sc-igl-to-be-assigned{position:-webkit-sticky;position:sticky;top:0;background-color:#ffffff;z-index:1}.pointer.sc-igl-to-be-assigned{cursor:pointer}.dots.sc-igl-to-be-assigned{display:flex;align-items:center;justify-content:center;margin:0 3px;padding:0}.dot.sc-igl-to-be-assigned{width:5px;height:5px;margin:5px 4px 0;background-color:#6b6f82;border-radius:50%;animation:dotFlashing 1s infinite linear alternate}.dot.sc-igl-to-be-assigned:nth-child(2){animation-delay:0.2s}.dot.sc-igl-to-be-assigned:nth-child(3){animation-delay:0.4s}@keyframes dotFlashing{0%{opacity:0}50%,100%{opacity:1}}";
const IglToBeAssignedStyle0 = iglToBeAssignedCss;

const IglToBeAssigned = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.optionEvent = createEvent(this, "optionEvent", 7);
        this.reduceAvailableUnitEvent = createEvent(this, "reduceAvailableUnitEvent", 7);
        this.showBookingPopup = createEvent(this, "showBookingPopup", 7);
        this.addToBeAssignedEvent = createEvent(this, "addToBeAssignedEvent", 7);
        this.highlightToBeAssignedBookingEvent = createEvent(this, "highlightToBeAssignedBookingEvent", 7);
    }
    unassignedDatesProp;
    propertyid;
    from_date;
    to_date;
    calendarData;
    loadingMessage;
    showDatesList = false;
    renderAgain = false;
    orderedDatesList = [];
    noScroll = false;
    selectedDateDisplay = '';
    optionEvent;
    reduceAvailableUnitEvent;
    showBookingPopup;
    addToBeAssignedEvent;
    highlightToBeAssignedBookingEvent;
    isGotoToBeAssignedDate = false;
    isLoading = true;
    selectedDate = null;
    data = {};
    today = new Date();
    categoriesData = {};
    toBeAssignedService = new ToBeAssignedService();
    unassignedDates;
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
        this.data = { ...this.unassignedDates };
        this.orderedDatesList = Object.keys(this.data).sort((a, b) => parseInt(a) - parseInt(b));
        if (this.orderedDatesList.length) {
            if (this.selectedDate === null) {
                this.selectedDate = this.orderedDatesList[0];
            }
            if (this.selectedDate && this.data[this.selectedDate]) {
                this.selectedDateDisplay = this.data[this.selectedDate]?.dateStr || this.selectedDateDisplay;
                this.showForDate(this.selectedDate, false);
            }
            else {
                this.isLoading = false;
                this.renderView();
            }
        }
        else {
            this.selectedDate = null;
            this.selectedDateDisplay = '';
            this.isLoading = false;
            this.renderView();
        }
    }
    handleAssignUnit(event) {
        const opt = event.detail;
        const data = opt.data;
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (opt?.key === 'assignUnit' && this.data) {
            // Verify data.selectedDate exists in this.data
            if (data?.selectedDate && this.data[data.selectedDate]) {
                // Check if categories exist and there's only one category
                if (this.data[data.selectedDate]?.categories && Object.keys(this.data[data.selectedDate]?.categories || {})?.length === 1) {
                    this.isLoading = true;
                    this.noScroll = true;
                }
                // Make sure all required properties exist before filtering
                if (data?.RT_ID &&
                    this.data[data.selectedDate]?.categories &&
                    this.data[data.selectedDate].categories[data.RT_ID] &&
                    Array.isArray(this.data[data.selectedDate].categories[data.RT_ID]) &&
                    data?.assignEvent?.ID) {
                    this.data[data.selectedDate].categories[data.RT_ID] = this.data[data.selectedDate].categories[data.RT_ID].filter(eventData => eventData && eventData.ID !== data.assignEvent.ID);
                }
                // Only update calendarData if it exists in the data
                if (data?.calendarData) {
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
                this.selectedDateDisplay = this.data[this.selectedDate]?.dateStr || '';
            }
            else if (!this.orderedDatesList.length) {
                this.selectedDateDisplay = '';
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
            this.selectedDateDisplay = this.data[dateStamp]?.dateStr || this.selectedDateDisplay;
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
        const selectedDateData = this.selectedDate ? this.data[this.selectedDate] : null;
        return (h(Host, { key: 'a0e7e7315752c91a93a4c81bab2cf19da729d144', class: "tobeAssignedContainer pr-1 text-left" }, h("div", { key: 'f93e080154e848854767d752122f2dfce0c7db84', class: 'fd-to-be-assigned__header-container' }, h("div", { key: 'cbb74e25a56b96890de72c7ee49290e1d2137707', class: "fd-to-be-assigned__header" }, h("h2", { key: 'bd1c047316992b003733f7e50ebd43e715da6ed0', class: "fd-to-be-assigned__title", id: "to-be-assigned-title" }, locales.entries.Lcz_Assignments), h("ir-custom-button", { key: '5b3f9913184fbc1f660f5d3aba1bcdd1e7479de3', size: "medium", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: '74d90b0feb945ff4a22e4735fde2a8ab5442e13d', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), Object.keys(this.data).length === 0 ? (h("p", { style: { padding: '1.5rem' } }, locales.entries.Lcz_AllBookingsAreAssigned)) : this.isLoading ? (h("p", { class: "d-flex align-items-center", style: { padding: '1.5rem' } }, h("span", { class: "p-0" }, this.loadingMessage), h("div", { class: "dots" }, h("div", { class: "dot" }), h("div", { class: "dot" }), h("div", { class: "dot" })))) : (h("div", { style: { padding: '0.5rem' } }, this.orderedDatesList.length ? (h("div", { class: `custom-dropdown border border-light rounded text-center ` + (this.showDatesList ? 'show' : ''), id: "dropdownMenuButton", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, h("div", { class: 'dropdown-toggle' }, h("span", { class: "font-weight-bold" }, selectedDateData?.dateStr || this.selectedDateDisplay), h("svg", { class: 'caret-icon', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 14, width: 14 }, h("path", { fill: "#6b6f82", d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), h("div", { class: "dropdown-menu dropdown-menu-right full-width", "aria-labelledby": "dropdownMenuButton" }, this.orderedDatesList?.map(ordDate => (h("div", { class: "dropdown-item pointer", onClick: () => this.showForDate(ordDate) }, this.data[ordDate].dateStr)))))) : (h("span", { style: { padding: '1.5rem' } }, locales.entries.Lcz_AllBookingsAreAssigned))))), h("div", { key: 'febe1c97b1ae4afaee3ee9cfc4736de6e55a1ae2', class: "to-be-assigned__body" }, !this.isLoading && (h("div", { key: 'e170aeab5b75011c3f29c20e667782b0e8b18988', class: "scrollabledArea" }, this.selectedDate ? (selectedDateData && Object.keys(selectedDateData.categories).length ? (this.getCategoryView()) : (h("div", null, locales.entries.Lcz_AllAssignForThisDay))) : null)))));
    }
    static get watchers() { return {
        "unassignedDatesProp": ["handleUnassignedDatesToBeAssignedChange"]
    }; }
};
IglToBeAssigned.style = IglToBeAssignedStyle0;

const irInteractiveTitleCss = ".sc-ir-interactive-title-h{display:block;width:100%}*.sc-ir-interactive-title{box-sizing:border-box}.popover-title.sc-ir-interactive-title{width:100%;height:100%;margin:0;padding:0;overflow:hidden;display:flex;align-items:center;gap:4px;white-space:nowrap}.cropped-title.sc-ir-interactive-title{flex:1 !important;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.hk-dot.sc-ir-interactive-title{flex-shrink:0;align-self:stretch;display:flex;align-items:stretch;justify-content:center;padding-inline:var(--ir-popover-left, 10px);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out;background:var(--ir-interactive-hk-bg, var(--wa-color-surface-default));color:var(--dot-color, var(--wa-color-text-normal))}";
const IrInteractiveTitleStyle0 = irInteractiveTitleCss;

/**
 * Module-level counter — survives HMR but is reset on full page reload.
 * Guarantees each instance gets a stable, unique DOM id without needing
 * @Element or lifecycle hooks.
 */
let titleIdCounter = 0;
const IrInteractiveTitle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * The full title string. When its length exceeds `cropSize` the tooltip
     * is activated so the user can read the complete text on hover.
     */
    popoverTitle = '';
    /**
     * Horizontal padding of the `.hk-dot` slot container, forwarded as the
     * `--ir-popover-left` CSS custom property on the host element.
     * @default '10px'
     */
    irPopoverLeft = '10px';
    /**
     * When `true`, renders the `.hk-dot` container and the `slot[name="end"]`
     * inside it. Must be `true` whenever slot content is provided, otherwise
     * the slotted nodes are silently discarded by the browser.
     */
    hkStatus = false;
    /**
     * Character-count threshold above which the full-title tooltip is shown.
     * Acts as a fast approximation of visual overflow; the browser independently
     * applies `text-overflow: ellipsis` via CSS regardless of this value.
     * @default 20
     */
    cropSize = 20;
    /**
     * Unique DOM id assigned once at instantiation time to the inner `<span>`.
     * `<wa-tooltip for="…">` references this id to anchor the tooltip.
     * Declared `readonly` — must never be reassigned after construction.
     */
    titleId = `ir-title-${++titleIdCounter}`;
    render() {
        const title = this.popoverTitle || '';
        return (h(Host, { key: 'f940442262a40f89038186e8877a59dc0dfd6784', style: { '--ir-popover-left': this.irPopoverLeft } }, h("p", { key: 'cb70285000bb26a044b15454f235fcb2abd2063c', class: "popover-title" }, title.length > this.cropSize && (h("wa-tooltip", { key: '2d1cb56810d62c2bc2261c8c9501752094453c15', for: this.titleId, placement: "top" }, title)), h("span", { key: '4c0ce89e78227366ac89d86e8df8e901ed16aa5b', id: this.titleId, class: "cropped-title" }, title), this.hkStatus && (h("div", { key: 'bdb90b86d79b631c2f752203927cc016029b81d2', class: "hk-dot" }, h("slot", { key: '7df82d9dc0aae42caf35f782107d635643d79e49', name: "end" }))))));
    }
};
IrInteractiveTitle.style = IrInteractiveTitleStyle0;

const irModalCss = ".backdropModal.sc-ir-modal{background-color:rgba(0, 0, 0, 0.5);z-index:1000;position:fixed;top:0;left:0;height:100vh;width:100%;opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.backdropModal.active.sc-ir-modal{cursor:pointer;opacity:1 !important;pointer-events:all}.ir-modal[data-state='opened'].sc-ir-modal{opacity:1;visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-alert-content.sc-ir-modal{padding:1rem;background:white;border-radius:5px}.ir-alert-header.sc-ir-modal{display:flex;font-size:1rem;font-weight:700}.modal.sc-ir-modal{z-index:1001 !important}.modal-dialog.sc-ir-modal{height:100vh;display:flex;align-items:center}.ir-alert-footer.sc-ir-modal{gap:10px}.ir-modal.sc-ir-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;width:90%;max-width:32rem;overflow:hidden;outline:0;opacity:0;transition:transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;visibility:hidden;pointer-events:none}.ir-modal.active.sc-ir-modal{opacity:1;transform:translate(-50%, 0);visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}";
const IrModalStyle0 = irModalCss;

const IrModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.confirmModal = createEvent(this, "confirmModal", 7);
        this.cancelModal = createEvent(this, "cancelModal", 7);
        this.middleModal = createEvent(this, "middleModal", 7);
    }
    /**
     * The title text displayed in the modal header.
     */
    modalTitle = 'Modal Title';
    /**
     * The main content text shown in the modal body.
     */
    modalBody = 'Modal Body';
    /**
     * Controls whether the modal title is rendered.
     */
    showTitle;
    /**
     * Whether the right (confirm) button is visible.
     */
    rightBtnActive = true;
    /**
     * Whether the left (cancel/close) button is visible.
     */
    leftBtnActive = true;
    /** Whether the middle (tertiary) button is visible. */
    middleBtnActive = false;
    /**
     * Text displayed on the right (confirm) button.
     */
    rightBtnText = 'Confirm';
    /**
     * Text displayed on the left (cancel/close) button.
     */
    leftBtnText = 'Close';
    /**Text displayed on the middle (tertiary) button. */
    middleBtnText = 'More';
    /**
     * Whether the modal is in a loading state, disabling interaction.
     */
    isLoading = false;
    /**
     * Whether the modal middle button is in a loading state, disabling interaction.
     * @requires middleBtnActive to be true
     */
    isMiddleButtonLoading = false;
    /**
     * If true, the modal automatically closes after confirm/cancel actions.
     */
    autoClose = true;
    /**
     * Color theme of the right button.
     */
    rightBtnColor = 'primary';
    /**
     * Color theme of the left button.
     */
    leftBtnColor = 'secondary';
    /** Color theme of the middle (tertiary) button. */
    middleBtnColor = 'info';
    /**
     * Horizontal alignment of the footer buttons.
     */
    btnPosition = 'right';
    /**
     * Whether an icon should be displayed next to the title.
     */
    iconAvailable = false;
    /**
     * Icon name to render next to the title (if `iconAvailable` is true).
     */
    icon = '';
    /**
     * Controls visibility of the modal.
     */
    isOpen = false;
    /**
     * Payload object to pass along with confirm/cancel events.
     */
    item = {};
    /**
     * Opens the modal.
     *
     * Example:
     * ```ts
     * const modal = document.querySelector('ir-modal');
     * modal.openModal();
     * ```
     */
    async openModal() {
        this.isOpen = true;
    }
    /**
     * Closes the modal.
     */
    async closeModal() {
        this.isOpen = false;
    }
    /**
     * Fired when the confirm (right) button is clicked.
     * Emits the current `item` value.
     */
    confirmModal;
    /**
     * Fired when the cancel (left) button or backdrop is clicked.
     */
    cancelModal;
    /** Fired when the middle (tertiary) button is clicked. Emits the current `item` value. */
    middleModal;
    btnClickHandler(event) {
        let target = event.target;
        let name = target.name;
        if (name === this.leftBtnText) {
            this.cancelModal.emit();
            this.item = {};
            this.closeModal();
        }
        else if (name === this.middleBtnText) {
            this.middleModal.emit(this.item);
            this.item = {};
            if (this.autoClose)
                this.closeModal();
        }
        else if (name === this.rightBtnText) {
            this.confirmModal.emit(this.item);
            this.item = {};
            if (this.autoClose) {
                this.closeModal();
            }
        }
    }
    render() {
        return [
            h("div", { key: 'b4bed7949a3ce281a2586343e4f2cd41b30081c8', class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    this.cancelModal.emit();
                    if (this.autoClose && !this.isLoading) {
                        this.closeModal();
                    }
                } }),
            h("div", { key: '7d267001c22a980e3d259b12d6e2e20039a5d5bd', "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, h("div", { key: '43f407acf72e8ce8044b9ea935c6f37140d075a0', class: `ir-alert-content p-2` }, this.showTitle && (h("div", { key: '3cf2214caa76fcfe8a79c66a60f885499ad682db', class: `ir-alert-header` }, h("p", { key: '56ecb5f484ee9ac98d311ebc1bc71f79f7ef2646' }, this.modalTitle))), h("div", { key: '489a189cebf900323d363b55782537bcb1872523', class: "modal-body text-left p-0 mb-2" }, h("div", { key: 'fdd6448b9ba1ce4d1411f96861838510123f3f16' }, this.modalBody)), h("div", { key: 'd85296fa841f334f62d9de39a5a70274f32972ab', class: `ir-alert-footer border-0  d-flex justify-content-${this.btnPosition === 'center' ? 'center' : this.btnPosition === 'left' ? 'start' : 'end'}` }, this.leftBtnActive && h("ir-button", { key: 'cd725102562d044e53ed1ba813f61be92bd2853c', btn_disabled: this.isLoading, btn_color: this.leftBtnColor, btn_block: true, text: this.leftBtnText, name: this.leftBtnText }), this.middleBtnActive && (h("ir-button", { key: 'ee023a2422f66817d161b5aa74e2d4bca3e52fdd', btn_disabled: this.isMiddleButtonLoading, btn_color: this.middleBtnColor, btn_block: true, text: this.middleBtnText, isLoading: this.isMiddleButtonLoading, name: this.middleBtnText })), this.rightBtnActive && (h("ir-button", { key: '82949d56912b60437472ac7a6dec81574cc16984', btn_color: this.rightBtnColor, btn_disabled: this.isLoading, isLoading: this.isLoading, btn_block: true, text: this.rightBtnText, name: this.rightBtnText }))))),
        ];
    }
};
IrModal.style = IrModalStyle0;

const irNewBadgeCss = ":host{display:inline-flex}.new-badge{font-weight:400;text-align:center;vertical-align:middle !important;text-transform:uppercase;letter-spacing:0.02em;line-height:1;display:inline-flex;align-items:center;justify-content:center;width:fit-content;white-space:nowrap;background:#ff4961;color:white;padding:0.2rem 0.3rem;font-size:0.75rem !important;border-radius:4px}";
const IrNewBadgeStyle0 = irNewBadgeCss;

const IrNewBadge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '94037787ac3049b436e279471e3ca2e537593b5e' }, h("span", { key: 'd5d157528db97552920eb4a995ef467d2028bcf5', class: "new-badge" }, "new")));
    }
};
IrNewBadge.style = IrNewBadgeStyle0;

const irPriceInputCss = ".sc-ir-price-input-h{display:block;--ir-input-border-color:#cacfe7;flex:1 1 0%}.sc-ir-price-input-h .input-group-text.sc-ir-price-input{border-color:var(--ir-input-border-color)}.sc-ir-price-input-h .form-control.sc-ir-price-input,.currency-label.sc-ir-price-input{font-size:14px !important}.ir-bl-lbl-none.sc-ir-price-input,.ir-bl-input-none.sc-ir-price-input{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.rate-input.sc-ir-price-input:read-only{background:white !important}.ir-br-lbl-none.sc-ir-price-input,.ir-br-input-none.sc-ir-price-input{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}.ir-br-none.sc-ir-price-input{border-right:none}.ir-bl-none.sc-ir-price-input{border-left:none}.rate-input-container.sc-ir-price-input{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1;padding:0 !important}[class='special-style'].sc-ir-price-input-h .rate-input.sc-ir-price-input{background:black !important}.rate-input.sc-ir-price-input{font-size:0.875rem;line-height:0;padding:0;height:0;box-sizing:border-box;border-left:0;padding-left:0px !important;border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.currency-label.with-label.sc-ir-price-input{border-radius:0}.currency-label.sc-ir-price-input{box-sizing:border-box;color:#3b4781;border:1px solid #cacfe7;font-size:0.875rem;height:2rem;background:white;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;pointer-events:none;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.currency-label.disabled.sc-ir-price-input,.rate-input.sc-ir-price-input:disabled{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.price-input-group.sc-ir-price-input:focus-within .currency-label.sc-ir-price-input{border-top:1px solid #1e9ff2;border-bottom:1px solid #1e9ff2;border-left:1px solid #1e9ff2}[data-state='error'].sc-ir-price-input-h .currency-label.sc-ir-price-input,[data-state='error'].sc-ir-price-input-h .rate-input.sc-ir-price-input,.error.sc-ir-price-input{border-color:var(--red, #ff4961) !important}.price-input.sc-ir-price-input:focus{border-right-width:1px !important}.is-invalid.sc-ir-price-input{background-image:none !important}";
const IrPriceInputStyle0 = irPriceInputCss;

const IrPriceInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.textChange = createEvent(this, "textChange", 7);
        this.inputBlur = createEvent(this, "inputBlur", 7);
        this.inputFocus = createEvent(this, "inputFocus", 7);
    }
    get el() { return getElement(this); }
    /** The label for the input, optional */
    label;
    /** The readonly for the input, optional */
    readOnly;
    /** Extra classnames for the input, optional */
    inputStyle;
    /** Extra classnames for the label, optional */
    labelStyle;
    /** The disabled for the input, optional */
    disabled;
    /** The Currency for the input, optional */
    currency;
    /** The AutoValidate for the input, optional */
    autoValidate = true;
    /** Indicates the key to wrap the value (e.g., 'price' or 'cost') */
    wrapKey;
    /**
     * A Zod schema for validating the input
     * Example: z.coerce.number()
     */
    zod;
    /** Placeholder text for the input */
    placeholder = '';
    /** Initial value for the input */
    value = '';
    /** Whether the input is required */
    required = false;
    /** Minimum value for the price */
    minValue;
    /** Maximum value for the price */
    maxValue;
    /** Unique id for testing */
    testId;
    /** Error*/
    error;
    /**
     * Extra class names applied to the outer <fieldset> wrapper.
     * Useful for spacing (e.g., margins/padding), width/layout utilities,
     * or theming the whole input group from the outside.
     * Example: "w-100 mb-2 d-flex align-items-center"
     */
    containerClassname;
    /**
     * Extra class names applied to the label container (<div class="input-group-prepend">)
     * that wraps the <label>. Use this to control label width, alignment,
     * spacing, or visibility at different breakpoints.
     * Example: "min-w-120 text-nowrap pe-2"
     */
    labelContainerClassname;
    /** Emits the current value on change */
    textChange;
    /** Emits the current value on blur */
    inputBlur;
    /** Emits the current value on focus */
    inputFocus;
    id;
    opts = {
        mask: Number,
        scale: 2,
        radix: '.',
        mapToRadix: [','],
        normalizeZeros: true,
        padFractionalZeros: true,
        thousandsSeparator: ',',
    };
    mask;
    inputRef;
    componentWillLoad() {
        if (this.el.id) {
            this.id = this.el.id;
        }
        else {
            this.id = v4();
        }
    }
    componentDidLoad() {
        if (!this.mask) {
            this.initializeMask();
        }
    }
    initializeMask() {
        // Create options object with min/max if provided
        const maskOpts = {
            ...this.opts,
        };
        if (this.minValue !== undefined) {
            maskOpts['min'] = this.minValue;
        }
        if (this.maxValue !== undefined) {
            maskOpts['max'] = this.maxValue;
        }
        this.mask = IMask(this.inputRef, maskOpts);
        // Set initial value if provided
        if (this.value) {
            this.mask.value = this.value;
        }
        this.mask.on('accept', () => {
            const isEmpty = this.inputRef.value.trim() === '' || this.mask.unmaskedValue === '';
            if (isEmpty) {
                this.value = '';
                this.textChange.emit(null);
            }
            else {
                this.value = this.mask.unmaskedValue;
                this.textChange.emit(this.value);
            }
        });
    }
    hasSpecialClass(className) {
        return this.el.classList.contains(className);
    }
    validateInput(value) {
        if (!this.autoValidate) {
            return;
        }
        if (this.zod) {
            try {
                this.zod.parse(this.wrapKey ? { [this.wrapKey]: value } : value); // Validate the value using the Zod schema
                this.error = false; // Clear the error if valid
            }
            catch (error) {
                console.log(error);
                this.error = true; // Set the error message
            }
        }
    }
    handleInputChange = () => {
        // The value is already being updated by the mask's 'accept' event
        // Just validate here if needed
        this.validateInput(this.value);
    };
    handleBlur = () => {
        this.validateInput(this.value);
        // Format to 2 decimal places on blur
        if (this.value) {
            const numValue = parseFloat(this.value);
            this.value = numValue.toFixed(2);
            // Update the mask value to show the formatted value
            if (this.mask) {
                this.mask.value = this.value;
            }
        }
        // Emit the blur event
        this.inputBlur.emit(this.value);
    };
    handleFocus = () => {
        // Emit the focus event
        this.inputFocus.emit();
    };
    render() {
        return (h("fieldset", { key: 'e35de76d70490a9d3029215a3fce1d2217001b47', class: `${this.containerClassname} input-group price-input-group m-0 p-0 ` }, this.label && (h("div", { key: '56634595d139ba25221f08c8244a36fe8d3b6ca8', class: `input-group-prepend ${this.labelContainerClassname}` }, h("span", { key: 'dc0de5e6b507c87178f6007b2985209c83b014b3', class: `input-group-text 
                ${this.labelStyle}
              ${this.hasSpecialClass('ir-bl-lbl-none') ? 'ir-bl-lbl-none' : ''}
              ${this.hasSpecialClass('ir-br-lbl-none') ? 'ir-br-lbl-none' : ''}
              ${this.hasSpecialClass('ir-br-none') ? 'ir-br-none' : ''} 
              ${this.hasSpecialClass('ir-bl-none') ? 'ir-bl-none' : ''} 
              ` }, h("label", { key: 'c038e849a2b644bfb7cb525102b589efff70c578', class: 'p-0 m-0 ', htmlFor: this.id }, this.label)))), h("div", { key: 'ccecb81a05e1e993481a23ed59180d0e693f284c', class: "position-relative has-icon-left rate-input-container" }, this.currency && (h("div", { key: 'f561d53f1c3b30662f8be2868d870917f5c8e8ee' }, h("span", { key: '6f26358ddaefeaa1cefcf6bcc6cf9bbe98d0a753', class: `input-group-text ${this.disabled ? 'disabled' : ''} currency-label ${this.error ? 'error' : ''} ${this.label ? 'with-label' : ''}` }, this.currency))), h("input", { key: 'd92b9f4d3bd7ce29b0a16ce6ebf9c2d37315bd8b', ref: el => (this.inputRef = el), "data-testid": this.testId, disabled: this.disabled, id: this.id, class: `form-control input-sm rate-input 
              ${this.inputStyle}
              ${this.hasSpecialClass('ir-br-input-none') ? 'ir-br-input-none' : ''} 
              ${this.hasSpecialClass('ir-bl-input-none') ? 'ir-bl-input-none' : ''} 
              ${this.error ? 'error' : ''} py-0 m-0 ${this.currency ? 'ir-bl-none' : ''}`, onInput: this.handleInputChange, onBlur: this.handleBlur, onFocus: this.handleFocus, type: "text", placeholder: this.placeholder, readOnly: this.readOnly, "aria-label": this.el.ariaLabel ?? 'price-input', "aria-describedby": this.el.ariaDescription ?? 'price-input' }))));
    }
};
IrPriceInput.style = IrPriceInputStyle0;

const irRadioCss = ".sc-ir-radio-h{display:block}.checkmark.sc-ir-radio{top:50% !important;transform:translateY(-50%) !important}";
const IrRadioStyle0 = irRadioCss;

const IrRadio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.checkChange = createEvent(this, "checkChange", 7);
    }
    get el() { return getElement(this); }
    /**
     * Whether the checkbox is checked.
     */
    checked = false;
    /**
     * The label text associated with the checkbox.
     */
    label;
    /**
     * The unique ID of the checkbox element.
     */
    radioBoxId = v4();
    /**
     * The name attribute of the checkbox, used for form submission.
     */
    name;
    /**
     * Whether the checkbox is in an indeterminate state.
     */
    indeterminate;
    /**
     * Disables the checkbox when true.
     */
    disabled;
    /**
     * CSS class applied to the label element.
     */
    labelClass;
    /**
     * Internal state tracking whether the checkbox is currently checked.
     */
    currentChecked = false;
    /**
     * Emitted when the checkbox's checked state changes.
     */
    checkChange;
    radioRef;
    componentWillLoad() {
        this.currentChecked = this.checked;
    }
    componentDidLoad() {
        if (this.radioRef) {
            this.radioRef.setAttribute('aria-checked', JSON.stringify(this.checked));
        }
    }
    /**
     * Watcher for the `checked` property. Syncs internal state with external prop changes.
     */
    handleCheckedChange(newValue) {
        if (newValue === this.currentChecked) {
            return;
        }
        this.currentChecked = this.checked;
    }
    /**
     * Handles user interaction with the checkbox and updates its state.
     */
    handleCheckChange() {
        this.currentChecked = !this.currentChecked;
        if (this.radioRef) {
            this.radioRef.setAttribute('aria-checked', JSON.stringify(this.currentChecked));
        }
        this.checkChange.emit(this.currentChecked);
    }
    render() {
        return (h("div", { key: 'e391cc8d56470f587cbedcd119718e8ed885bd8c', class: "input-group" }, h("label", { key: 'fe6627ec6c84d9aa7a77ecffc7cb6cd75d960193', class: "check-container radio-container align-items-center m-0 py-0" }, h("span", { key: 'ea32c44a65281e03b714c0b3e992acf94a89cfa9' }, this.label), h("input", { key: 'bf6975f4e94c3fcdf5760fa912fb54f4ddbd5486', class: "p-0 m-0", type: "radio", value: "000", name: this.el.name, title: "", onChange: () => {
                this.handleCheckChange();
            }, checked: this.currentChecked, ref: el => (this.radioRef = el) }), h("span", { key: '998f7833e2ae07ffdb6cf2ed364964d064db4247', class: "checkmark" }))));
    }
    static get watchers() { return {
        "checked": ["handleCheckedChange"]
    }; }
};
IrRadio.style = IrRadioStyle0;

const irReallocationDrawerCss = ".sc-ir-reallocation-drawer-h{display:block}";
const IrReallocationDrawerStyle0 = irReallocationDrawerCss;

const IrReallocationDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal", 7);
    }
    open;
    booking;
    roomIdentifier;
    pool;
    closeModal;
    _id = `reallocation-form_${v4()}`;
    render() {
        return (h("ir-drawer", { key: '95aeefe21b28a0fa66d3a27e1137110422e65032', label: "Reassign Unit", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && h("ir-reallocation-form", { key: 'a3cf7c930d31372a2fc1a23b0b4041360283b743', pool: this.pool, formId: this._id, booking: this.booking, identifier: this.roomIdentifier }), h("div", { key: '5b5fe46ab87956ea984778ebefcbe9e7efb3366e', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '2ea6efbf5de991b0ead558216c800b7d6f5bacf8', size: "medium", "data-drawer": "close", variant: "neutral", appearance: "filled" }, "Cancel"), h("ir-custom-button", { key: '29105e48b7d627eb8ebbe0ced7be02e938150e5c', form: this._id, size: "medium", loading: isRequestPending('/ReAllocate_Exposed_Room'), type: "submit", variant: "brand" }, "Confirm"))));
    }
};
IrReallocationDrawer.style = IrReallocationDrawerStyle0;

const irReallocationFormCss = ".sc-ir-reallocation-form-h{display:block;height:100%;color:var(--ir-text-color, #1f2a37);font-family:var(--ir-font-family, 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif)}.reallocation-form.sc-ir-reallocation-form{display:flex;flex-direction:column;gap:0.75rem}.booking-summary.sc-ir-reallocation-form{display:flex;flex-direction:column;gap:0.5rem}.rateplan-details.sc-ir-reallocation-form{margin:0;font-weight:500;color:var(--wa-color-text-quiet, #4b5563)}.rateplan-details-unit.sc-ir-reallocation-form{font-weight:700;color:var(--wa-color-text-normal)}.date-picker-row.sc-ir-reallocation-form{display:flex;flex-wrap:wrap;gap:0.5rem;align-items:flex-end}.date-picker-row.sc-ir-reallocation-form .ir-custom-date-picker.sc-ir-reallocation-form{flex:1 1 220px}.error-message.sc-ir-reallocation-form{margin:0;margin-top:0.75rem;color:var(--ir-error-color, #c0392b);font-size:0.95rem}.room-type-list.sc-ir-reallocation-form{display:flex;flex-direction:column;gap:0.75rem}.arrow-container.sc-ir-reallocation-form{width:100%;display:flex;justify-content:center}.choice-row.sc-ir-reallocation-form{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.room-type-name.sc-ir-reallocation-form{font-weight:600;color:var(--ir-heading-color, #111827)}.physical-room.sc-ir-reallocation-form{display:flex;align-items:center;font-size:0.95rem;padding-inline-start:1rem}.physical-room.sc-ir-reallocation-form::part(label){display:flex;align-items:center}.physical-room.sc-ir-reallocation-form+.physical-room.sc-ir-reallocation-form{margin-top:0.5rem}.physical-room--last.sc-ir-reallocation-form{margin-bottom:0.25rem}.physical-room.sc-ir-reallocation-form wa-select.sc-ir-reallocation-form{margin-left:1rem;min-width:220px}.custom-date-picker.sc-ir-reallocation-form{max-width:200px}.room-type-row.sc-ir-reallocation-form{margin-bottom:0.5rem}";
const IrReallocationFormStyle0 = irReallocationFormCss;

const IrReallocationForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal", 7);
    }
    booking;
    identifier;
    pool;
    formId;
    date;
    isLoading;
    room;
    roomTypes = [];
    selectedUnit = {};
    errors;
    mealPlanOptions = null;
    closeModal;
    bookingService = new BookingService();
    eventsService = new EventsService();
    componentWillLoad() {
        this.room = this.getRoom();
        this.date = hooks(this.room.from_date, 'YYYY-MM-DD');
        this.checkBookingAvailability();
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
    async checkBookingAvailability() {
        this.isLoading = true;
        resetBookingStore(false);
        const is_in_agent_mode = this.booking.agent !== null;
        const { from_date, to_date } = this.getDates();
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
            this.roomTypes = data.filter(r => r.is_available_to_book);
            this.isLoading = false;
        }
        catch (error) {
            console.error('Error initializing booking availability:', error);
        }
    }
    getDates() {
        return {
            from_date: this.date.clone().format('YYYY-MM-DD'),
            to_date: this.date.clone().add(calculateDaysBetweenDates(this.room.from_date, this.room.to_date), 'days').format('YYYY-MM-DD'),
        };
    }
    async reallocateUnit() {
        try {
            this.errors = null;
            const selectedUnit = SelectedUnitSchema.parse(this.selectedUnit);
            const { from_date, to_date } = this.getDates();
            await this.eventsService.reallocateEvent(this.pool, selectedUnit.unit_id, from_date, to_date, selectedUnit.rateplan_id);
            this.closeModal.emit(null);
        }
        catch (error) {
            const err = {};
            if (error instanceof ZodError) {
                console.error(error);
                error.issues.forEach(i => {
                    err[i.path[0]] = true;
                });
                this.errors = { ...err };
            }
        }
    }
    updateSelectedUnit(params) {
        const merged = { ...this.selectedUnit, ...params };
        const roomTypesSource = calendar_data?.property?.roomtypes;
        const mealPlanResult = checkMealPlan({
            rateplan_id: this.room.rateplan.id.toString(),
            roomTypeId: merged?.roomtype_id,
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
    // private get minDate() {
    //   if (!this.booking.is_direct) {
    //     return this.booking.from_date;
    //   }
    //   const MFromDate = moment(this.room.from_date, 'YYYY-MM-DD');
    //   const today = moment();
    //   if (MFromDate.isBefore(today)) {
    //     return MFromDate.format('YYYY-MM-DD');
    //   }
    //   return today.format('YYYY-MM-DD');
    // }
    // private get maxDate() {
    //   if (this.booking.is_direct) {
    //     return;
    //   }
    //   return this.booking.from_date;
    // }
    render() {
        if (this.isLoading) {
            return (h("div", { class: "drawer__loader-container" }, h("ir-spinner", null)));
        }
        return (h("form", { id: this.formId, class: "reallocation-form", onSubmit: e => {
                e.preventDefault();
                this.reallocateUnit();
            } }, h("div", { class: "booking-summary" }, h("ir-date-view", { from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false })), h("div", null, h("wa-callout", { size: "small", appearance: "filled", variant: "neutral" }, h("p", { style: { padding: '0', margin: '0' } }, h("span", { class: "rateplan-details" }, this.room.roomtype.name, " ", this.room.rateplan.short_name, " ", this.room.rateplan.is_non_refundable ? locales.entries.Lcz_NonRefundable : '', ' ', h("span", { class: "rateplan-details-unit" }, this.room.unit.name)))), this.errors?.roomtype_id && h("p", { class: "error-message" }, "Please select a room"), this.roomTypes.length === 0 ? (h("ir-empty-state", { style: { marginTop: '20vh' } })) : (h(Fragment, null, h("div", { class: "arrow-container" }, h("svg", { height: 30, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { d: "M297.4 566.6C309.9 579.1 330.2 579.1 342.7 566.6L502.7 406.6C515.2 394.1 515.2 373.8 502.7 361.3C490.2 348.8 469.9 348.8 457.4 361.3L352 466.7L352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 466.7L182.6 361.3C170.1 348.8 149.8 348.8 137.3 361.3C124.8 373.8 124.8 394.1 137.3 406.6L297.3 566.6z" }))), h("wa-callout", { size: "small", appearance: "filled", variant: "neutral" }, h("wa-radio-group", { onchange: e => {
                const [roomtype_id, unit_id] = e.target.value.split('_');
                this.updateSelectedUnit({
                    roomtype_id: Number(roomtype_id),
                    unit_id: Number(unit_id),
                });
            }, name: "available-units", class: "room-type-list" }, this.roomTypes?.map(roomType => {
            const units = (() => {
                const unitMap = new Map();
                for (const rateplan of roomType.rateplans ?? []) {
                    for (const unit of rateplan.assignable_units ?? []) {
                        if (unit.Is_Fully_Available) {
                            unitMap.set(unit.pr_id, unit.name);
                        }
                    }
                }
                return Array.from(unitMap, ([id, name]) => ({ id, name }));
            })();
            return (h(Fragment, null, h("div", { key: `roomTypeRow-${roomType.id}`, class: `room-type-row` }, h("div", { class: 'choice-row' }, h("span", { class: "room-type-name" }, roomType.name))), units.map((room, j) => {
                const isLastUnit = j === units.length - 1;
                const showMealPlanSelect = this.selectedUnit?.unit_id === room.id && Array.isArray(this.mealPlanOptions) && this.mealPlanOptions.length > 0;
                return (h("wa-radio", { value: `${roomType.id}_${room.id}`, checked: this.selectedUnit?.unit_id === room.id, key: `physicalRoom-${room.id}-${j}`, class: `physical-room${isLastUnit ? ' physical-room--last' : ''}` }, h("span", null, room.name), showMealPlanSelect && (h("ir-validator", { value: this.selectedUnit?.rateplan_id, schema: SelectedUnitSchema.shape.rateplan_id }, h("wa-select", { size: "small", placeholder: "Select a new rateplan...", value: this.selectedUnit?.rateplan_id?.toString(), onchange: e => {
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                        this.updateSelectedUnit({
                            rateplan_id: Number(e.target.value),
                        });
                    } }, this.mealPlanOptions.map(option => {
                    return h("wa-option", { value: option.value?.toString() }, option.text + `${option.custom_text ? ' | ' : ''}${option.custom_text}`);
                }))))));
            })));
        }))))))));
    }
};
IrReallocationForm.style = IrReallocationFormStyle0;

const irRectifierCss = ".ir-rectifier__form.sc-ir-rectifier{padding:0 1.5rem;display:flex;flex-direction:column;gap:1.5rem}.ir-rectifier__roomtypes.sc-ir-rectifier{display:flex;flex-direction:column;gap:1rem}.ir-rectifier__date-range.sc-ir-rectifier{display:flex;align-items:center;gap:1rem}";
const IrRectifierStyle0 = irRectifierCss;

const IrRectifier = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.loadingChanged = createEvent(this, "loadingChanged", 7);
        this.closeDrawer = createEvent(this, "closeDrawer", 7);
        this.toast = createEvent(this, "toast", 7);
    }
    formId;
    form = {
        property_id: null,
        room_type_ids: [],
        from: null,
        to: null,
    };
    autoValidate = false;
    showRoomTypeError = false;
    loadingChanged;
    closeDrawer;
    toast;
    propertyService = new PropertyService();
    toDateRef;
    componentWillLoad() {
        this.form = {
            ...this.form,
            property_id: calendar_data.property?.id ?? calendar_data.id ?? null,
        };
    }
    updateForm(next) {
        this.form = {
            ...this.form,
            ...next,
        };
    }
    normalizeDateRange(next) {
        const from = next.from ?? this.form.from;
        const to = next.to ?? this.form.to;
        if (from && to && hooks(from).isAfter(to, 'day')) {
            if (next.from) {
                return { ...next, to: from };
            }
            if (next.to) {
                return { ...next, from: to };
            }
        }
        return next;
    }
    updateRoomTypeSelection(roomTypeId, checked) {
        const nextIds = new Set(this.form.room_type_ids);
        if (checked) {
            nextIds.add(roomTypeId);
        }
        else {
            nextIds.delete(roomTypeId);
        }
        this.showRoomTypeError = false;
        this.updateForm({ room_type_ids: Array.from(nextIds) });
    }
    async handleSubmit() {
        this.loadingChanged.emit(true);
        this.autoValidate = true;
        this.showRoomTypeError = false;
        try {
            const propertyId = this.form.property_id ?? calendar_data.property?.id ?? calendar_data.id ?? undefined;
            const result = ExposedRectifierParamsSchema.safeParse({
                ...this.form,
                property_id: propertyId,
            });
            if (!result.success) {
                this.showRoomTypeError = result.error.issues.some(issue => issue.path[0] === 'room_type_ids');
                return;
            }
            await this.propertyService.exposedRectifier(result.data);
            this.toast.emit({
                type: 'success',
                title: 'The update is being processed.',
                description: '',
            });
            this.closeDrawer.emit();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.loadingChanged.emit(false);
        }
    }
    render() {
        const roomTypes = calendar_data.property?.roomtypes ?? [];
        return (h(Host, { key: '848b8aac665d054471079d412fce23d0a180d7d5' }, h("form", { key: 'ae088212e35477fbafd44b13096f2153fe43761b', onSubmit: e => {
                e.preventDefault();
                this.handleSubmit();
            }, class: "ir-rectifier__form", id: this.formId }, h("wa-callout", { key: 'fe48b6a04f84715ada0d824b55c9158328a8c2de', size: "small", appearance: "filled", variant: "warning" }, h("wa-icon", { key: '22d541ded6eeb17dd413fe7b17fd085b9bcb6138', slot: "icon", name: "triangle-exclamation" }), "This will update the total availability of the select room types by calculating: No. of physical rooms - Booked - Blocked - Pending"), h("div", { key: 'ceebb55957fb5afdfc99a47d2621f5a702b7d7cd', class: "ir-rectifier__roomtypes" }, roomTypes.map(roomtype => {
            const roomTypeId = Number(roomtype?.id);
            if (!Number.isFinite(roomTypeId)) {
                return null;
            }
            const isSelected = this.form.room_type_ids.includes(roomTypeId);
            return (h("wa-checkbox", { class: "ir-rectifier__roomtype-checkbox", checked: isSelected, onchange: e => {
                    const checked = e.target.checked;
                    this.updateRoomTypeSelection(roomTypeId, checked);
                } }, roomtype.name));
        })), this.showRoomTypeError && h("p", { key: '8403913fa4fa286f2ea9d2e61a6b78dc753e9ddb', class: "text-danger m-0" }, "Please select at least one room type."), h("div", { key: '58be8c8571dcb6dc646ac25bb73cf3ef78aba52d', class: "ir-rectifier__date-range" }, h("ir-validator", { key: '04863ef70528786f37a5a48c03c1e41b3802b5e2', value: this.form.from ?? null, schema: ExposedRectifierParamsSchema.shape.from, autovalidate: this.autoValidate }, h("ir-custom-date-picker", { key: 'fb86a1d6222622afe477a582171a12ee2c170c24', class: "ir-rectifier__date-picker ir-rectifier__date-picker--from", label: "Date from", emitEmptyDate: true, date: this.form.from, onDateChanged: e => {
                const from = e.detail.start?.format('YYYY-MM-DD') ?? null;
                this.updateForm(this.normalizeDateRange({ from }));
                requestAnimationFrame(() => this.toDateRef?.openDatePicker());
            } })), h("ir-validator", { key: '578d58a8d64b0fae83ac00c9e06dcf7d9f7d1310', value: this.form.to ?? null, schema: ExposedRectifierParamsSchema.shape.to, autovalidate: this.autoValidate }, h("ir-custom-date-picker", { key: 'c2c9bbae90369c0b8a437199ca5d10c9b4fb4617', class: "ir-rectifier__date-picker ir-rectifier__date-picker--to", label: "To (inclusive)", emitEmptyDate: true, disabled: !this.form.from, ref: el => (this.toDateRef = el), date: this.form.to, minDate: this.form.from, onDateChanged: e => {
                const to = e.detail.start?.format('YYYY-MM-DD') ?? null;
                this.updateForm(this.normalizeDateRange({ to }));
            } }))))));
    }
};
IrRectifier.style = IrRectifierStyle0;

const irRoomNightsCss = ".sc-ir-room-nights-h{display:block;box-sizing:border-box;margin:0;position:relative}.loading-container.sc-ir-room-nights{position:relative;height:100%;width:100%;display:flex;align-items:center;justify-content:center}.close-icon.sc-ir-room-nights{position:absolute;top:18px;right:33px;outline:none}.close.sc-ir-room-nights{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:0.5;padding:0;background-color:transparent;border:0;appearance:none}.card.sc-ir-room-nights{top:0;z-index:1000}.card-title.sc-ir-room-nights{border-bottom:1px solid #e4e5ec;width:100%}.irfontgreen.sc-ir-room-nights{color:#0e930e}.currency.sc-ir-room-nights{display:block;position:absolute;margin:0;padding:0;height:auto;left:10px}.rate-input.sc-ir-room-nights{font-size:14px;line-height:0;padding:0;height:0;border-left:0;border-radius:0.25rem !important}.rate-input-container.sc-ir-room-nights{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1}.new-currency.sc-ir-room-nights{color:#3b4781;border:1px solid #cacfe7;font-size:0.975rem;height:2rem;background:rgb(255, 255, 255);padding-right:0 !important;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.input-group-prepend.sc-ir-room-nights span[data-state='focus'].sc-ir-room-nights{border-color:var(--blue)}.input-group-prepend.sc-ir-room-nights span[data-disabled].sc-ir-room-nights{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.rateInputBorder.sc-ir-room-nights{padding-left:5px !important;padding-right:5px !important;border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}";
const IrRoomNightsStyle0 = irRoomNightsCss;

const sheetCss = ".sc-ir-room-nights-h{height:100%}.sheet-container.sc-ir-room-nights{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-room-nights{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-room-nights{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-room-nights{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-room-nights{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-room-nights{flex-direction:row;align-items:center}}";
const IrRoomNightsStyle1 = sheetCss;

const IrRoomNights = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeRoomNightsDialog = createEvent(this, "closeRoomNightsDialog", 7);
    }
    bookingNumber;
    propertyId;
    language;
    identifier;
    toDate;
    fromDate;
    pool;
    ticket;
    defaultDates;
    bookingEvent;
    selectedRoom;
    rates = [];
    isLoading = false;
    initialLoading = false;
    inventory = null;
    isEndDateBeforeFromDate = false;
    defaultTotalNights = 0;
    isInputFocused = -1;
    dates = { from_date: new Date(), to_date: new Date() };
    closeRoomNightsDialog;
    bookingService = new BookingService();
    componentWillLoad() {
        this.dates = { from_date: new Date(this.fromDate), to_date: new Date(this.toDate) };
        this.init();
    }
    isButtonDisabled() {
        return this.isLoading || this.rates.some(rate => rate.amount === -1) || this.inventory === 0 || this.inventory === null;
    }
    async init() {
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
                const lastDay = this.selectedRoom?.days[this.selectedRoom.days.length - 1];
                if (!hooks(this.selectedRoom.to_date, 'YYYY-MM-DD').isBefore(hooks(this.toDate, 'YYYY-MM-DD'))) {
                    const variation = await this.fetchBookingAvailability(this.fromDate, this.selectedRoom.days[0].date, this.selectedRoom.rateplan.id);
                    const newDatesArr = getDaysArray(this.selectedRoom.days[0].date, this.fromDate);
                    this.isEndDateBeforeFromDate = true;
                    let dates = {};
                    variation.nights.forEach(n => (dates[n.night] = n));
                    this.rates = [
                        ...newDatesArr.map(day => ({
                            amount: dates[day].discounted_amount,
                            date: day,
                            cost: null,
                        })),
                        ...this.selectedRoom.days,
                    ];
                    this.defaultTotalNights = this.rates.length - this.selectedRoom.days.length;
                }
                else {
                    const variation = await this.fetchBookingAvailability(this.selectedRoom.to_date, hooks(this.toDate, 'YYYY-MM-DD').format('YYYY-MM-DD'), this.selectedRoom.rateplan.id);
                    const newDatesArr = getDaysArray(lastDay.date, this.toDate);
                    let dates = {};
                    variation.nights.forEach(n => (dates[n.night] = n));
                    this.rates = [
                        ...this.selectedRoom.days,
                        ...newDatesArr.map(day => ({
                            amount: dates[day].discounted_amount,
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
            const selected_variation = rate_plan.variations?.find(variation => variation.adult_nbr === this.selectedRoom.rateplan.selected_variation.adult_nbr && variation.child_nbr === this.selectedRoom.rateplan.selected_variation.child_nbr);
            if (!selected_variation) {
                return null;
            }
            return selected_variation;
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
        const currency_symbol = this.bookingEvent.currency.symbol;
        // const currency_symbol = getCurrencySymbol(this.bookingEvent.currency.code);
        return (h("div", { class: 'mt-2 m-0' }, this.rates?.map((day, index) => (h("div", { class: 'row m-0 mt-1 align-items-center' }, h("p", { class: 'col-2 m-0 p-0' }, convertDatePrice(day.date)), this.renderRateFields(index, currency_symbol, day))))));
    }
    async handleRoomConfirmation() {
        try {
            this.isLoading = true;
            let oldRooms = [...this.bookingEvent.rooms];
            let selectedRoomIndex = oldRooms.findIndex(room => room.identifier === this.identifier);
            if (selectedRoomIndex === -1) {
                throw new Error('Invalid Pool');
            }
            oldRooms[selectedRoomIndex] = {
                ...oldRooms[selectedRoomIndex],
                days: this.rates,
                to_date: hooks(this.dates.to_date).format('YYYY-MM-DD'),
                from_date: hooks(this.dates.from_date).format('YYYY-MM-DD'),
            };
            const body = {
                assign_units: true,
                check_in: true,
                is_pms: true,
                is_direct: true,
                pickup_info: this.bookingEvent.pickup_info,
                extra_services: this.bookingEvent.extra_services,
                agent: this.bookingEvent.agent,
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
        if (!this.bookingEvent) {
            return (h("div", { class: "loading-container" }, h("ir-loading-screen", null)));
        }
        return (h("div", { class: "sheet-container" }, h("ir-title", { class: "p-1 sheet-header", onCloseSideBar: () => this.closeRoomNightsDialog.emit({ type: 'cancel', pool: this.pool }), label: `${locales.entries.Lcz_AddingRoomNightsTo} ${this.selectedRoom?.roomtype?.name} ${(this.selectedRoom?.unit).name}`, displayContext: "sidebar" }), h("section", { class: 'text-left px-1 pt-0 sheet-body' }, h("p", { class: 'font-medium-1' }, `${locales.entries.Lcz_Booking}#`, " ", this.bookingNumber), this.initialLoading ? (h("p", { class: 'mt-2 text-secondary' }, locales.entries['Lcz_CheckingRoomAvailability '])) : (h(Fragment, null, h("p", { class: 'font-weight-bold font-medium-1' }, `${formatDate(hooks(this.dates.from_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')} - ${formatDate(hooks(this.dates.to_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')}`), h("p", { class: 'font-medium-1 mb-0' }, `${this.selectedRoom.rateplan.name}`, " ", this.selectedRoom.rateplan.is_non_refundable && h("span", { class: 'irfontgreen' }, locales.entries.Lcz_NonRefundable)), (this.inventory === 0 || this.inventory === null) && h("p", { class: "font-medium-1 text danger" }, locales.entries.Lcz_NoAvailabilityForAdditionalNights), this.selectedRoom.rateplan.custom_text && h("p", { class: 'text-secondary mt-0' }, this.selectedRoom.rateplan.custom_text), booking_store.roomTypes?.length > 0 && (h("wa-callout", { size: "small", variant: "neutral", appearance: "filled", class: "mt-1 booking-editor-header__tax_statement" }, calendar_data.tax_statement)), this.renderDates()))), h("section", { class: 'sheet-footer' }, h("ir-button", { btn_color: "secondary", btn_disabled: this.isLoading, text: locales?.entries.Lcz_Cancel, class: "full-width", btn_styles: "justify-content-center", onClickHandler: () => this.closeRoomNightsDialog.emit({ type: 'cancel', pool: this.pool }) }), this.inventory > 0 && this.inventory !== null && (h("ir-button", { isLoading: this.isLoading, text: locales?.entries.Lcz_Confirm, btn_disabled: this.isButtonDisabled(), class: "full-width", btn_styles: "justify-content-center", onClickHandler: this.handleRoomConfirmation.bind(this) })))));
    }
};
IrRoomNights.style = IrRoomNightsStyle0 + IrRoomNightsStyle1;

const irSuccessLoaderCss = ":host{display:block}.spinner{transform-origin:center;animation:spinner_svv2 0.75s infinite linear}@keyframes spinner_svv2{100%{transform:rotate(360deg)}}";
const IrSuccessLoaderStyle0 = irSuccessLoaderCss;

const IrSuccessLoader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.loaderComplete = createEvent(this, "loaderComplete", 7);
    }
    /**
     * How long the spinner should be shown before transitioning to the success icon.
     * Value is expressed in milliseconds.
     */
    spinnerDuration = 1500;
    /**
     * How long the success icon should be shown before the loader dispatches the completion event.
     * Value is expressed in milliseconds.
     */
    successDuration = 1000;
    /**
     * Whether the loader should automatically start its cycle when it becomes active.
     */
    autoStart = true;
    /**
     * Controls the visibility of the loader. Setting this to `true` starts the spinner/success cycle.
     */
    active = true;
    /**
     * Emit when the loader finishes the success state and should be hidden by the parent.
     */
    loaderComplete;
    phase = 'spinner';
    spinnerTimer;
    successTimer;
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
        return (h(Host, { key: '3dfcb74cd640a52eb022d88c910165490d10b400' }, this.phase === 'spinner' ? h("wa-spinner", null) : h("wa-icon", { part: "check", name: "check", style: { color: 'var(--wa-color-success-fill-loud,#45b16d)' } })));
    }
    static get watchers() { return {
        "active": ["onActiveChange"],
        "spinnerDuration": ["onDurationChange"],
        "successDuration": ["onDurationChange"]
    }; }
};
IrSuccessLoader.style = IrSuccessLoaderStyle0;

export { IglBlockedDateDrawer as igl_blocked_date_drawer, IglBookingEvent as igl_booking_event, IglBulkOperationsDrawer as igl_bulk_operations_drawer, IglCalBody as igl_cal_body, IglCalFooter as igl_cal_footer, IglCalHeader as igl_cal_header, IglHkIssuesDialog as igl_hk_issues_dialog, IglHousekeepingDialog as igl_housekeeping_dialog, IglLegend as igl_legend, IglReallocationDialog as igl_reallocation_dialog, IglSplitBooking as igl_split_booking, IglTbaCategoryView as igl_tba_category_view, IglToBeAssigned as igl_to_be_assigned, IrInteractiveTitle as ir_interactive_title, IrModal as ir_modal, IrNewBadge as ir_new_badge, IrPriceInput as ir_price_input, IrRadio as ir_radio, IrReallocationDrawer as ir_reallocation_drawer, IrReallocationForm as ir_reallocation_form, IrRectifier as ir_rectifier, IrRoomNights as ir_room_nights, IrSuccessLoader as ir_success_loader };

//# sourceMappingURL=igl-blocked-date-drawer_23.entry.js.map