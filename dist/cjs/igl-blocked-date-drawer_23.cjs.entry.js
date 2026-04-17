'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const booking_service = require('./booking.service-dab68001.js');
const utils = require('./utils-592483b3.js');
const booking = require('./booking-b7d0d9cb.js');
const moment = require('./moment-1780b03a.js');
const events_service = require('./events.service-9b4c407f.js');
const locales_store = require('./locales.store-32782582.js');
const calendarData = require('./calendar-data-70bc3b4b.js');
const toBeAssigned_service = require('./toBeAssigned.service-a194ee12.js');
const unassigned_dates_store = require('./unassigned_dates.store-4a879984.js');
const housekeeping_service = require('./housekeeping.service-8d06557d.js');
const property_service = require('./property.service-dfa42519.js');
const irInterceptor_store = require('./ir-interceptor.store-d60f5a34.js');
const index$1 = require('./index-8bb117a0.js');
const index$2 = require('./index-e9a28e3e.js');
const v4 = require('./v4-9b297151.js');
require('./axios-6e678d52.js');
require('./index-fbf1fe1d.js');
require('./type-976db45d.js');

const iglBlockedDateDrawerCss = ".sc-igl-blocked-date-drawer-h{display:block;text-align:start}";
const IglBlockedDateDrawerStyle0 = iglBlockedDateDrawerCss;

const IglBlockedDateDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.blockedDateDrawerClosed = index.createEvent(this, "blockedDateDrawerClosed", 7);
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
    bookingService = new booking_service.BookingService();
    async handleBlockDate() {
        try {
            this.isLoading = true;
            const props = (() => {
                const releaseData = utils.getReleaseHoursString(this.blockDatesData.RELEASE_AFTER_HOURS !== null ? Number(this.blockDatesData.RELEASE_AFTER_HOURS) : null);
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
        return (index.h("ir-drawer", { key: '0ab28f352f7bee5617954f33fe7ca5d2c3b69c3f', label: this.label, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDrawer();
            }, open: this.open }, this.open && (index.h("igl-block-dates-view", { key: '42b44501f2c063814326bedbd21b967661e02c37', onDataUpdateEvent: e => (this.blockDatesData = { ...e.detail.data }), fromDate: this.fromDate, toDate: this.toDate })), index.h("div", { key: '775899a0247f17199d0c17e644581e7e9756ecd2', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: '8a60c6fa11cd4dc853ac2a72d1aaf58202616a86', "data-drawer": "close", size: "medium", appearance: "filled", variant: "neutral" }, "Cancel"), index.h("ir-custom-button", { key: 'bd2ba17e17c8ab8f3b6f75cd0e94708e83be2f6b', loading: this.isLoading, onClickHandler: () => {
                this.handleBlockDate();
            }, size: "medium", appearance: "accent", variant: "brand" }, "Save"))));
    }
};
IglBlockedDateDrawer.style = IglBlockedDateDrawerStyle0;

const iglBookingEventCss = ".sc-igl-booking-event-h{display:block;position:absolute;--ota-bar-width:2px;--stripe-period:20px;--split-border-width:5px;--split-border-color:var(--wa-color-text-normal)}.bookingEventBase.sc-igl-booking-event{position:absolute;width:100%;height:100%;border-radius:4px;background-color:rgb(49, 190, 241);transform:skewX(-22deg);cursor:pointer}.bookingEventBase.leftSplit.sc-igl-booking-event{border-left:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.rightSplit.sc-igl-booking-event{border-right:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.fullSplit.sc-igl-booking-event{border-right:var(--split-border-width) solid var(--split-border-color);border-left:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.fullSplit.skewedLeft.sc-igl-booking-event,.bookingEventBase.leftSplit.skewedLeft.sc-igl-booking-event{border-left:0}.bookingEventBase.fullSplit.skewedRight.sc-igl-booking-event,.bookingEventBase.leftSplit.skewedRight.sc-igl-booking-event{border-right:0}.bookingEventBase.pending.sc-igl-booking-event{border-width:2px;border-style:dashed;border-color:var(--wa-color-success-fill-loud)}.bookingEvent.sc-igl-booking-event{cursor:pointer}.ota-booking-event.sc-igl-booking-event{border-width:var(--ota-bar-width) !important}.bookingEventHiddenBase.sc-igl-booking-event{position:absolute;top:0;left:-4px;width:calc(100% + 8px)}.bookingEventBase.skewedLeft.sc-igl-booking-event::before,.bookingEventBase.skewedRight.sc-igl-booking-event::before{content:'';position:absolute;top:0;bottom:0;width:50%;height:100%;left:-4px;background-color:var(--ir-event-bg);border-radius:4px}.bookingEventBase.skewedLeft.sc-igl-booking-event::before{transform-origin:right;transform:skewX(22deg);border-top-left-radius:0;border-bottom-left-radius:0}.bookingEventBase.fullSplit.skewedLeft.sc-igl-booking-event::before,.bookingEventBase.leftSplit.skewedLeft.sc-igl-booking-event::before{border-left:var(--split-border-width) solid var(--split-border-color) !important;z-index:2;background-color:transparent}.bookingEventBase.fullSplit.skewedRight.sc-igl-booking-event::before,.bookingEventBase.leftRight.skewedRight.sc-igl-booking-event::before{border-right:var(--split-border-width) solid var(--split-border-color) !important;z-index:2;background-color:transparent}.bookingEventBase.skewedRight.sc-igl-booking-event::before{transform-origin:left;transform:skewX(22deg 0deg);border-top-right-radius:0;border-bottom-right-radius:0}.bookingEventBase.border.skewedLeft.sc-igl-booking-event::before{border:var(--ota-bar-width) solid #424242;border-right:0;border-left:0;border-top-right-radius:0;border-bottom-right-radius:0;top:calc(var(--ota-bar-width) * -1);height:20px;left:-4px}.bookingEventBase.border.skewedRight.sc-igl-booking-event::before{border:var(--ota-bar-width) solid #424242;border-left:0;border-right:0;border-top-left-radius:0;border-bottom-left-radius:0;top:calc(var(--ota-bar-width) * -1);height:20px;right:-4px}.bookingEventBase.striped-bar.fullSplit.skewedLeft.vertical.sc-igl-booking-event::after,.bookingEventBase.striped-bar.leftSplit.skewedLeft.vertical.sc-igl-booking-event::after{z-index:1;border-left:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.striped-bar.fullSplit.skewedRight.vertical.sc-igl-booking-event::after,.bookingEventBase.striped-bar.rightSplit.skewedRight.vertical.sc-igl-booking-event::after{z-index:1;border-right:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.striped-bar.vertical.sc-igl-booking-event::after{--stripe-angle:360deg}.bookingEventBase.striped-bar.sc-igl-booking-event::after{content:'';position:absolute;inset:0;border-radius:4px;background:repeating-linear-gradient(\n    var(--stripe-angle, 45deg),\n    var(--ir-event-bg) 0,\n    var(--ir-event-bg) calc(var(--stripe-period) / 2),\n    var(--ir-event-bg-stripe-color) calc(var(--stripe-period) / 2),\n    var(--ir-event-bg-stripe-color) var(--stripe-period)\n  );backface-visibility:hidden}.bookingEventBase.skewedRight.striped-bar.sc-igl-booking-event::after,.bookingEventBase.border.skewedRight.sc-igl-booking-event::after{right:-8px}.bookingEventBase.skewedLeft.striped-bar.sc-igl-booking-event::after,.bookingEventBase.border.skewedLeft.sc-igl-booking-event::after{left:-8px}.bookingEventBase.striped-bar.animated.sc-igl-booking-event::after{background-size:28.28px 28.28px;backface-visibility:hidden;animation:stripes 0.8s linear infinite;will-change:background-position}@keyframes stripes{0%{background-position:0 0}100%{background-position:28.28px 0}}.bookingEventDragHandle.sc-igl-booking-event{position:absolute;top:0;width:15px;height:100%;opacity:0.1;background-color:rgba(0, 0, 0, 0.15);transform:skewX(-22deg);border-radius:4px;cursor:pointer}.sc-igl-booking-event-h:hover .bookingEventDragHandle.sc-igl-booking-event{display:block;opacity:1}.newEvent.sc-igl-booking-event-h:hover .bookingEventDragHandle.sc-igl-booking-event{display:none;opacity:1}.leftSide.sc-igl-booking-event{left:0}.rightSide.sc-igl-booking-event{right:0}.leftSide.skewedLeft.sc-igl-booking-event{transform:skewX(0)}.rightSide.skewedRight.sc-igl-booking-event{transform:skewX(0)}.bookingEventTitle.sc-igl-booking-event{position:relative;top:2px;left:5px;max-width:calc(100% - 10px);color:#fff;font-size:0.8em;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;cursor:pointer}.legend_circle.sc-igl-booking-event{width:10px;height:10px;margin:3px 3px 3px 2px;border:1px solid #fff;border-radius:100%}.noteIcon.sc-igl-booking-event{position:absolute;bottom:-8px;left:2px}.balanceIcon.sc-igl-booking-event{position:absolute;top:-8px;right:2px}.splitBooking.sc-igl-booking-event{border-right:2px solid #000000}.bookingEventTitle.pending.sc-igl-booking-event{color:var(--wa-color-success-on-quiet) !important}";
const IglBookingEventStyle0 = iglBookingEventCss;

const IglBookingEvent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.hideBubbleInfo = index.createEvent(this, "hideBubbleInfo", 7);
        this.updateEventData = index.createEvent(this, "updateEventData", 7);
        this.dragOverEventData = index.createEvent(this, "dragOverEventData", 7);
        this.showRoomNightsDialog = index.createEvent(this, "showRoomNightsDialog", 7);
        this.showDialog = index.createEvent(this, "showDialog", 7);
        this.resetStretchedBooking = index.createEvent(this, "resetStretchedBooking", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.updateBookingEvent = index.createEvent(this, "updateBookingEvent", 7);
    }
    get element() { return index.getElement(this); }
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
    eventsService = new events_service.EventsService();
    bookingService = new booking_service.BookingService();
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
        this.bookingEvent.SPLIT_INDEX = booking.buildSplitIndex(this.bookingEvent.ROOMS);
        if (this.bookingEvent.SPLIT_INDEX) {
            this.role = booking.getSplitRole(this.bookingEvent.SPLIT_INDEX, this.bookingEvent.IDENTIFIER) ?? '';
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
                                const { description, status, newRatePlans, matchedRatePlan } = this.getModalDescription(toRoomId, from_date, to_date);
                                let hideConfirmButton = false;
                                if (status === '400') {
                                    hideConfirmButton = true;
                                }
                                const oldFromDate = this.bookingEvent.defaultDates.from_date;
                                const oldToDate = this.bookingEvent.defaultDates.to_date;
                                const diffDays = booking.calculateDaysBetweenDates(oldFromDate, oldToDate);
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
            const transformedBooking = booking.transformNewBooking(data)[0];
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
                    description: locales_store.locales.entries.Lcz_OTA_Modification_Alter,
                    status: '200',
                };
                // return {
                //   description: `${locales.entries.Lcz_YouWillLoseFutureUpdates}.`,
                //   status: '200',
                // };
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
                        const mealPlans = utils.checkMealPlan({
                            rateplan_id: this.bookingEvent.RATE_PLAN_ID,
                            roomTypeId: targetRT,
                            roomTypes: calendarData.calendar_data?.property?.roomtypes,
                        });
                        return {
                            description: locales_store.locales.entries.Lcz_OTA_Modification_Alter,
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
                    const mealPlans = utils.checkMealPlan({
                        rateplan_id: this.bookingEvent.RATE_PLAN_ID,
                        roomTypeId: targetRT,
                        roomTypes: calendarData.calendar_data?.property?.roomtypes,
                    });
                    return {
                        description: locales_store.locales.entries.Lcz_SameRatesWillBeKept,
                        status: '200',
                        newRatePlans: Array.isArray(mealPlans) ? mealPlans : undefined,
                        matchedRatePlan: Array.isArray(mealPlans) ? null : mealPlans,
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
        const isOccupied = this.allBookingEvents
            .filter(event => event.ID !== 'NEW_TEMP_EVENT')
            .some(event => {
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
                const baseCondition = !this.bookingEvent.is_direct && !utils.isBlockUnit(this.bookingEvent.STATUS_CODE);
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
    //   /**
    //    * Checks if the booking's departure time is later than the hotel's configured check-out time.
    //    *
    //    * @returns {boolean} `true` if departure is after `check_out_till`, otherwise `false`.
    //    */
    isDepartureAfterHotelCheckout() {
        if (calendarData.calendar_data.property.is_automatic_check_in_out) {
            return;
        }
        const departureTime = this.bookingEvent.DEPARTURE_TIME;
        if (!departureTime?.code) {
            return false;
        }
        const t1 = moment.hooks(calendarData.calendar_data.property.time_constraints.check_out_till, 'HH:mm');
        const t2 = moment.hooks(departureTime.description, 'HH:mm');
        return t1.isBefore(t2);
    }
    computeSplitRole() {
        const SPLIT_INDEX = booking.buildSplitIndex(this.bookingEvent.ROOMS);
        let splitRole = null;
        if (SPLIT_INDEX) {
            splitRole = booking.getSplitRole(SPLIT_INDEX, this.bookingEvent.IDENTIFIER) ?? '';
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
        const { foreground, stripe } = calendarData.calendar_data.colorsForegrounds?.[backgroundColor] ?? {
            foreground: '',
            checkout: '',
        };
        const isDepartureAfterHotelCheckout = this.isDepartureAfterHotelCheckout();
        backgroundColor = this.bookingEvent.STATUS === 'CHECKED-OUT' ? legend.color : backgroundColor;
        const splitRole = this.computeSplitRole();
        const pending = this.bookingEvent.STATUS === 'PENDING-CONFIRMATION' && this.bookingEvent.ID !== 'NEW_TEMP_EVENT';
        return (index.h(index.Host, { key: 'ba7a3923409980322c78b0d25cb9b118ff49ae5f', class: `bookingEvent  ${this.isNewEvent() || this.isHighlightEventType() ? 'newEvent' : ''} ${legend.clsName} `, style: this.getPosition(), id: bar }, index.h("div", { key: '26678dfa3896da541ed8e4281a76a152b19299d6', "data-identifier": this.bookingEvent?.IDENTIFIER, "data-status": this.bookingEvent.STATUS, class: {
                'bookingEventBase': true,
                'pending': pending,
                'skewedLeft': !this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)),
                'skewedRight': !this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)),
                // 'striped-bar vertical': this.bookingEvent.STATUS === 'IN-HOUSE',
                'striped-bar animated': utils.isBlockUnit(this.bookingEvent.STATUS_CODE) && this.bookingEvent.STATUS_CODE === '003',
                'border border-dark ota-booking-event': !this.bookingEvent.is_direct && !utils.isBlockUnit(this.bookingEvent.STATUS_CODE) && this.bookingEvent.STATUS !== 'TEMP-EVENT' && this.bookingEvent.ID !== 'NEW_TEMP_EVENT',
                [splitRole]: true,
            }, style: {
                'backgroundColor': backgroundColor,
                '--ir-event-bg': backgroundColor,
                '--ir-event-bg-stripe-color': stripe,
            }, onTouchStart: event => this.startDragging(event, 'move'), onMouseDown: event => this.startDragging(event, 'move') }), isDepartureAfterHotelCheckout && index.h("wa-tooltip", { key: 'd3e073e5dd758e7eef8025c5fbf944069e95e0ce', for: lateCheckout }, "Departure time: ", this.bookingEvent.DEPARTURE_TIME?.description), balanceNode && index.h("wa-tooltip", { key: '746d3694ae4f5c89a46f434d30e4a3909fd0bc9e', for: balance }, "Balance: ", utils.formatAmount(calendarData.calendar_data.property.currency.symbol, this.bookingEvent.BALANCE)), noteNode ? index.h("div", { class: "legend_circle noteIcon", style: { backgroundColor: noteNode.color } }) : null, (balanceNode || isDepartureAfterHotelCheckout) && (index.h("div", { key: '88719c03d0cd65d938f49f624ad47401b55a0b31', class: "balanceIcon d-flex" }, isDepartureAfterHotelCheckout && index.h("div", { key: 'e5358e66eddf5c481dd86b5c71d29bb389e0f3d2', id: lateCheckout, class: "legend_circle", style: { backgroundColor: '#999999' } }), balanceNode ? index.h("div", { id: balance, class: "legend_circle", style: { backgroundColor: '#f34752' } }) : null)), index.h("div", { key: '51174aba5acff1c038a50f3bb8c564c64a27b5c4', class: `bookingEventTitle ${pending ? 'pending' : ''}`, style: !pending && { color: foreground }, onTouchStart: event => this.startDragging(event, 'move'), onMouseDown: event => this.startDragging(event, 'move') }, this.getBookedBy(), this.renderEventBookingNumber()), index.h(index.Fragment, { key: 'a57297bb6c408d65bc73d9fea7cc963b3e2cca28' }, index.h("div", { key: '59a1d1e7cea734d57d250a48bce233c8237686b3', class: `bookingEventDragHandle leftSide ${!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 'skewedLeft' : ''}
            ${!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)) ? 'skewedRight' : ''}`, onTouchStart: event => this.startDragging(event, 'leftSide'), onMouseDown: event => this.startDragging(event, 'leftSide') }), index.h("div", { key: '805690c1db3256042cba99c8addbf13dbdb5ebc2', class: `bookingEventDragHandle rightSide ${!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 'skewedLeft' : ''}
              ${!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)) ? 'skewedRight' : ''}`, onTouchStart: event => this.startDragging(event, 'rightSide'), onMouseDown: event => this.startDragging(event, 'rightSide') })), this.showInfoPopup ? (index.h("igl-booking-event-hover", { is_vacation_rental: this.is_vacation_rental, countries: this.countries, currency: this.currency, class: "top", bookingEvent: this.bookingEvent, bubbleInfoTop: this.bubbleInfoTopSide, style: this.calculateHoverPosition() })) : null));
    }
};
IglBookingEvent.style = IglBookingEventStyle0;

const iglBulkOperationsDrawerCss = ".sc-igl-bulk-operations-drawer-h{display:block}.bulk-operations__drawer.sc-igl-bulk-operations-drawer::part(body){padding:0;padding-inline:0.1rem}.bulk-operations__tab-group.sc-igl-bulk-operations-drawer::part(nav){position:sticky;top:0;z-index:10;background-color:var(--wa-color-surface-default)}";
const IglBulkOperationsDrawerStyle0 = iglBulkOperationsDrawerCss;

const IglBulkOperationsDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeDrawer = index.createEvent(this, "closeDrawer", 7);
        this.toast = index.createEvent(this, "toast", 7);
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
        return (index.h(index.Host, { key: 'b291192e13d323106eda0f8ddd3f3e7f3afe448f' }, index.h("ir-drawer", { key: 'b4461a51e38ec56bb21f1c076b34aded709b5ce9', onDrawerHide: this.handleDrawerClose.bind(this), label: "Bulk Availability Operations", open: this.open, class: "bulk-operations__drawer" }, this.open && (index.h("wa-tab-group", { key: '93c88da1ae4bfc25da5b8c1fdf1049791c9c837a', class: "bulk-operations__tab-group", active: this.selectedTab, activation: "manual", "onwa-tab-show": e => (this.selectedTab = e.detail.name?.toString()) }, this.tabs.map(tab => (index.h("wa-tab", { panel: tab.id }, tab.label))), index.h("wa-tab-panel", { key: '64633ba51aa867be9f4df9d490a4c3cb7b4129b4', name: "stop-sale" }, this.selectedTab === 'stop-sale' && (index.h("igl-bulk-stop-sale", { key: '6aaafd7efa43ef39c93f9d41ed44f1e4a16fb5fe', onCloseDrawer: this.handleDrawerClose.bind(this), maxDatesLength: this.maxDatesLength, formId: formId, property_id: this.property_id }))), index.h("wa-tab-panel", { key: '998175f400becb7dc32b694ff6395467fb94b765', name: "block" }, this.selectedTab === 'block' && (index.h("igl-bulk-block", { key: '95a090a3419580f2bb4e28f5d949d1fd63cf8750', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId, maxDatesLength: this.maxDatesLength, property_id: this.property_id }))), index.h("wa-tab-panel", { key: '73bfca77200decfc321fa8b8a4238bd743bddc12', name: "rectifier" }, this.selectedTab === 'rectifier' && index.h("ir-rectifier", { key: 'b1208c56e64fa5c10142b3e0b30d9bc420e7a5dc', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId })))), index.h("div", { key: '813696dc2960567a50a950451547e58619804172', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: '98fc30ffd3635bc410a2f06cd09871363685f6a1', size: "medium", variant: "neutral", appearance: "filled", "data-drawer": "close" }, "Cancel"), index.h("ir-custom-button", { key: '3d4bd2656b07e416c9458704b5d7944b079ebbc3', loading: this.isLoading, type: "submit", form: formId, size: "medium", variant: "brand" }, "Confirm")))));
    }
};
IglBulkOperationsDrawer.style = IglBulkOperationsDrawerStyle0;

const iglCalBodyCss = ".sc-igl-cal-body-h{display:block;color:var(--wa-color-text-normal)}.bodyContainer.sc-igl-cal-body{position:relative}.roomRow.sc-igl-cal-body{width:max-content}.roomRow.sc-igl-cal-body:first-child{margin-top:80px}.categoryName.sc-igl-cal-body{font-weight:bold;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.hk_issue_btn.sc-igl-cal-body::part(base){height:auto;width:fit-content;padding:0.25rem}.cellData.sc-igl-cal-body{background-color:var(--wa-color-surface-default)}.cellData[data-dirty-room='true'].sc-igl-cal-body::after{content:'';position:absolute;bottom:0;height:100%;left:30%;right:30%;background-color:#d4d0be !important}.cellData.disabled.sc-igl-cal-body{background:var(--wa-color-neutral-fill-quiet);cursor:var(--cell-cursor, not-allowed);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body{cursor:pointer;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body:hover{background:var(--wa-color-neutral-fill-quiet)}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body:hover[data-hk-enabled='false']{background:var(--wa-color-surface-default);cursor:default}.cellData.sc-igl-cal-body{width:58px;height:30px;display:inline-grid;border-top:1px solid var(--wa-color-surface-border);border-left:1px solid var(--wa-color-surface-border);vertical-align:top}.triangle-button.sc-igl-cal-body{--size:10px;position:absolute;right:-6px;top:-1px;width:0;height:0;padding:0;border:none;background:transparent;cursor:pointer;width:0;height:0;border-left:var(--size) solid transparent;border-right:var(--size) solid transparent;border-bottom:var(--size) solid var(--wa-color-surface-border);transform:rotate(45deg)}.cellData.sc-igl-cal-body:nth-child(2){border-left:0px}.cellData.sc-igl-cal-body:last-child{border-right:1px solid var(--wa-color-surface-border)}.roomHeaderCell.sc-igl-cal-body{position:-webkit-sticky;position:sticky;left:0;background:var(--wa-color-surface-default);border-inline-end:1px solid var(--wa-color-surface-border);width:170px;z-index:1;border-inline-start:0px}.currentDay.sc-igl-cal-body{background-color:var(--wa-color-brand-fill-quiet)}.dragOverHighlight.sc-igl-cal-body{background-color:#f5f5dc !important}.selectedDay.sc-igl-cal-body{background-color:#f9f9c9 !important}.categoryTitle.sc-igl-cal-body{grid-template-columns:1fr 20px;padding-left:10px;cursor:pointer;height:40px;font-size:0.9em}.categoryTitle.sc-igl-cal-body>.sc-igl-cal-body:nth-child(1){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.roomTitle.sc-igl-cal-body{padding-left:20px;font-size:0.9em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.roomTitle.sc-igl-cal-body>.sc-igl-cal-body:nth-child(1){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.roomTitle.pl10.sc-igl-cal-body{padding-left:10px}.categoryPriceColumn.sc-igl-cal-body{align-items:center;height:40px;-webkit-user-select:none;user-select:none;position:relative}.bookingEventsContainer.sc-igl-cal-body{position:absolute;top:0;left:0}.roomTitle[data-room-has-today-checkin='true'].sc-igl-cal-body{--ir-interactive-hk-bg:var(--wa-color-brand-fill-quiet);color:var(--wa-color-brand-on-quiet);background-color:var(--wa-color-brand-fill-quiet) !important}";
const IglCalBodyStyle0 = iglCalBodyCss;

const IglCalBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.addBookingDatasEvent = index.createEvent(this, "addBookingDatasEvent", 7);
        this.showBookingPopup = index.createEvent(this, "showBookingPopup", 7);
        this.scrollPageToRoom = index.createEvent(this, "scrollPageToRoom", 7);
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
        booking.calendar_dates.days.forEach(day => {
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
        let popupTitle = roomCategory.name + ' ' + this.getRoomName(this.getRoomById(this.getRoomtypeUnits(roomCategory), this.selectedRooms[keys[0]].roomId));
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
        const today = moment.hooks().startOf('day');
        for (const booking$1 of bookings) {
            const fromDate = moment.hooks(booking$1.FROM_DATE, 'YYYY-MM-DD').startOf('day');
            const toDate = moment.hooks(booking$1.TO_DATE, 'YYYY-MM-DD').startOf('day');
            // Check if today is between fromDate and toDate, inclusive.
            if (today.isSameOrAfter(fromDate) && today.isSameOrBefore(toDate)) {
                if (!bookingMap.has(booking$1.PR_ID)) {
                    bookingMap.set(booking$1.PR_ID, booking$1.BOOKING_NUMBER);
                }
                else {
                    if (booking.compareTime(moment.hooks().toDate(), booking.createDateWithOffsetAndHour(calendarData.calendar_data.checkin_checkout_hours?.offset, calendarData.calendar_data.checkin_checkout_hours?.hour))) {
                        bookingMap.set(booking$1.PR_ID, booking$1.BOOKING_NUMBER);
                    }
                }
            }
        }
        return bookingMap;
    }
    getRoomtypeDayInventoryCells(addClass, isCategory = false, index$1) {
        return booking.calendar_dates.days.map(dayInfo => {
            // const isActive = true;
            return (index.h("div", { class: `cellData  font-weight-bold categoryPriceColumn ${addClass + '_' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''}` }, isCategory ? (index.h(index.Fragment, null, index.h("span", { class: 'categoryName' }, dayInfo.rate[index$1].exposed_inventory.rts))) : ('')));
        });
    }
    getGeneralUnitsDayCells(roomId, roomCategory, roomName) {
        return this.calendarData.days.map(dayInfo => {
            const isCellDisabled = this.isCellDisabled(Number(roomId), dayInfo.value);
            const prevDate = moment.hooks(dayInfo.value, 'YYYY-MM-DD').add(-1, 'days').format('YYYY-MM-DD');
            const isDisabled = (isCellDisabled && Object.keys(this.selectedRooms).length === 0) || (isCellDisabled && this.isCellDisabled(Number(roomId), prevDate));
            const isSelected = this.selectedRooms.hasOwnProperty(this.getSelectedCellRefName(roomId, dayInfo));
            const isCurrentDate = dayInfo.day === this.today || dayInfo.day === this.highlightedDate;
            const cleaningDates = booking.calendar_dates.cleaningTasks.has(+roomId) ? booking.calendar_dates.cleaningTasks.get(+roomId) : null;
            const shouldBeCleaned = ['001', '003'].includes(calendarData.calendar_data.cleaning_frequency?.code) ? false : cleaningDates?.has(dayInfo.value);
            return (index.h("div", { class: `cellData position-relative roomCell ${isCellDisabled ? 'disabled' : ''} ${'room_' + roomId + '_' + dayInfo.day} ${isCurrentDate ? 'currentDay' : ''} ${this.dragOverElement === roomId + '_' + dayInfo.day ? 'dragOverHighlight' : ''} ${isSelected ? 'selectedDay' : ''}`,
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
    getRoomtypeRow(roomType, index$1) {
        if (this.getTotalPhysicalRooms(roomType) <= 1 || !roomType.is_active) {
            return null;
        }
        const hasRoomWithTodayCheckin = this.categoryHasRoomWithTodayCheckin(roomType);
        return (index.h("div", { class: "roomRow", "data-has-today-checkin": String(hasRoomWithTodayCheckin) }, index.h("div", { class: `cellData text-left align-items-center roomHeaderCell categoryTitle ${'category_' + this.getCategoryId(roomType)}`, onClick: () => this.toggleCategory(roomType), "data-has-today-checkin": String(hasRoomWithTodayCheckin) }, index.h("div", { class: 'categoryName' }, index.h("ir-interactive-title", { popoverTitle: this.getCategoryName(roomType) })), roomType.expanded ? index.h("wa-icon", { name: "angle-down" }) : index.h("wa-icon", { name: "angle-right" })), this.getRoomtypeDayInventoryCells('category_' + this.getCategoryId(roomType), true, index$1)));
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
            return (index.h("div", { class: "roomRow", "data-room-has-today-checkin": String(roomHasTodayCheckin) }, index.h("div", { class: `cellData room text-left align-items-center roomHeaderCell  roomTitle ${this.getTotalPhysicalRooms(roomType) <= 1 ? 'pl10' : ''} ${'room_' + roomId}`, "data-room-name": name, "data-hk-enabled": String(calendarData.calendar_data.housekeeping_enabled), "data-room": roomId, "data-room-has-today-checkin": String(roomHasTodayCheckin), "data-category-has-today-checkin": String(hasRoomWithTodayCheckin), onClick: () => {
                    if (!calendarData.calendar_data.housekeeping_enabled) {
                        return;
                    }
                    this.selectedRoom = room;
                }, onMouseEnter: () => {
                    this.interactiveTitle[room.id]?.style?.setProperty('--ir-interactive-hk-bg', roomHasTodayCheckin ? 'var(--wa-color-brand-fill-quiet)' : 'var(--wa-color-neutral-fill-quiet)');
                }, onMouseLeave: () => {
                    this.interactiveTitle[room.id]?.style?.removeProperty('--ir-interactive-hk-bg');
                } }, index.h("ir-interactive-title", { ref: el => {
                    if (el)
                        this.interactiveTitle[room.id] = el;
                }, style: room.hk_status === '003' && { '--dot-color': 'var(--wa-color-neutral-fill-quiet)' }, hkStatus: calendarData.calendar_data.housekeeping_enabled && (room.hk_status !== '001' || calendarData.calendar_data.unitIssues?.has(room.id)), popoverTitle: name }, (room.hk_status !== '001' || calendarData.calendar_data.unitIssues.has(Number(room.id))) && (index.h("div", { slot: "end", class: "d-flex align-items-center", style: { gap: '0.5rem' } }, calendarData.calendar_data.unitIssues.has(room.id) && (index.h("wa-button", { appearance: "plain", variant: "danger", class: "hk_issue_btn", onClick: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.issues = calendarData.calendar_data.unitIssues.get(Number(room.id));
                } }, index.h("wa-animation", { name: "heartBeat", easing: "ease-in-out", duration: 1400, play: true }, index.h("wa-icon", { name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1.1rem' } })))), index.h("div", { style: { visibility: room.hk_status !== '001' ? 'visible' : 'hidden' } }, room.hk_status !== '003' && index.h("wa-tooltip", { for: `${room.id}_hk_status_icon` }, room.hk_status === '002' ? 'This unit is dirty' : 'Inspected'), index.h("wa-icon", { id: `${room.id}_hk_status_icon`, name: room.hk_status === '004' ? 'check' : 'broom', style: room.hk_status === '004' && { color: 'var(--wa-color-success-fill-loud)' } })))))), this.getGeneralUnitsDayCells(this.getRoomId(room), roomType, name)));
        });
    }
    getRoomRows() {
        return this.calendarData.roomsInfo?.map((roomCategory, index$1) => {
            if (roomCategory.is_active) {
                return (index.h(index.Fragment, null, this.getRoomtypeRow(roomCategory, index$1), roomCategory.expanded && this.getUnitsByRoomtype(roomCategory)));
            }
            else {
                return null;
            }
        });
    }
    getTodayCheckinRoomsAndCategories() {
        // const todayISO = this.getTodayISODate();
        const today = moment.hooks();
        const rooms = new Set();
        const categories = new Set();
        this.getBookingData().forEach(booking => {
            const roomInfo = booking?.ROOM_INFO;
            // Must be a check-in
            if (roomInfo?.in_out?.code !== '001') {
                return;
            }
            // Must match today (from OR to)
            if (moment.hooks(booking.FROM_DATE, 'YYYY-MM-DD').isAfter(today, 'dates') && moment.hooks(booking.TO_DATE, 'YYYY-MM-DD').isBefore(today, 'dates')) {
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
        booking.calendar_dates.disabled_cells.clear();
        this.calendarData.roomsInfo?.forEach((roomCategory, categoryIndex) => {
            if (roomCategory.is_active) {
                this.getRoomtypeUnits(roomCategory)?.forEach(room => {
                    if (room.is_active) {
                        this.calendarData.days.forEach(dayInfo => {
                            const cellKey = this.getCellKey(room.id, dayInfo.value);
                            booking.calendar_dates.disabled_cells.set(cellKey, {
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
        if (!booking.calendar_dates.disabled_cells.has(key)) {
            return false;
        }
        const { disabled } = booking.calendar_dates.disabled_cells.get(key);
        return disabled;
    }
    render() {
        return (index.h(index.Host, { key: '5c3744dad92136c5f331b62ba27730a9ecbde1bd' }, index.h("div", { key: 'faee392daccc03f82e73a0dc312f061f72c18ad7', class: "bodyContainer" }, this.getRoomRows(), index.h("div", { key: '6785bb61b7651a3be63f23c117462b88506c76c5', class: "bookingEventsContainer preventPageScroll" }, this.getBookingData()?.map(bookingEvent => {
            return (index.h("igl-booking-event", { "data-testid": `booking_${bookingEvent.BOOKING_NUMBER}`, "data-room-name": bookingEvent.roomsInfo?.find(r => r.id === bookingEvent.RATE_TYPE)?.physicalrooms.find(r => r.id === bookingEvent.PR_ID)?.name, language: this.language, is_vacation_rental: this.calendarData.is_vacation_rental, countries: this.countries, currency: this.currency, "data-component-id": bookingEvent.ID, bookingEvent: bookingEvent, allBookingEvents: this.getBookingData() }));
        }))), index.h("igl-housekeeping-dialog", { key: '8e813c930eaf2fc5de2f8cce7f4d6b0f264a5b0f', onIrAfterClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedRoom = null;
            }, bookingNumber: this.selectedRoom ? this.bookingMap.get(this.selectedRoom?.id) : undefined, selectedRoom: this.selectedRoom, open: this.selectedRoom !== null }), index.h("igl-hk-issues-dialog", { key: 'c81a5251d15698d0f1a5d0ba3f22c5d891a35beb', open: this.issues !== null, issues: this.issues, unitName: this.issues?.length > 0 ? this.issues[0]?.unit?.name : '', propertyId: this.propertyId, onIrAfterClose: e => {
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
        index.registerInstance(this, hostRef);
        this.optionEvent = index.createEvent(this, "optionEvent", 7);
    }
    optionEvent;
    calendarData;
    isLegendOpen = false;
    today;
    highlightedDate;
    _today = moment.hooks().format('YYYY-MM-DD');
    // private isOnline:boolean = false;
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (index.h(index.Host, { key: '34d35a9c5e47018310f9412fda78c77f7147bc6b', class: "footerContainer" }, index.h("div", { key: '1b0a80e9d05f424519c4bebab2fb5552e19bdcd1', class: "footerCell bottomLeftCell align-items-center preventPageScroll", style: { paddingLeft: '10px' } }, index.h("button", { key: '4e2f1d04aba43f1979495195e288bd7b229aa818', class: "m-0 p-0 btn btn-sm  legendBtn d-flex align-items-center", style: { gap: '0.25rem' }, onClick: () => this.handleOptionEvent('showLegend') }, this.isLegendOpen ? (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", height: 16, width: 16 }, index.h("path", { fill: "currentColor", d: "M105.4 297.4C92.9 309.9 92.9 330.2 105.4 342.7L265.4 502.7C277.9 515.2 298.2 515.2 310.7 502.7C323.2 490.2 323.2 469.9 310.7 457.4L173.3 320L310.6 182.6C323.1 170.1 323.1 149.8 310.6 137.3C298.1 124.8 277.8 124.8 265.3 137.3L105.3 297.3zM457.4 137.4L297.4 297.4C284.9 309.9 284.9 330.2 297.4 342.7L457.4 502.7C469.9 515.2 490.2 515.2 502.7 502.7C515.2 490.2 515.2 469.9 502.7 457.4L365.3 320L502.6 182.6C515.1 170.1 515.1 149.8 502.6 137.3C490.1 124.8 469.8 124.8 457.3 137.3z" }))) : (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", height: 16, width: 16 }, index.h("path", { fill: "currentColor", d: "M535.1 342.6C547.6 330.1 547.6 309.8 535.1 297.3L375.1 137.3C362.6 124.8 342.3 124.8 329.8 137.3C317.3 149.8 317.3 170.1 329.8 182.6L467.2 320L329.9 457.4C317.4 469.9 317.4 490.2 329.9 502.7C342.4 515.2 362.7 515.2 375.2 502.7L535.2 342.7zM183.1 502.6L343.1 342.6C355.6 330.1 355.6 309.8 343.1 297.3L183.1 137.3C170.6 124.8 150.3 124.8 137.8 137.3C125.3 149.8 125.3 170.1 137.8 182.6L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7z" }))), index.h("span", { key: '232f412d8a5ad8f850e7ec257c4011c990a67b72' }, locales_store.locales.entries.Lcz_Legend), index.h("span", { key: '07778b7d2e35c3bd4d5fafec437d79f0a1a0cafa' }, "v1.4"), index.h("ir-new-badge", { key: 'dcd8d9d568f45c8176cab5091d8029cd8d9f8391', style: { marginLeft: '0.25rem' } }))), this.calendarData.days.map(dayInfo => (index.h("div", { class: "footerCell align-items-center" }, index.h("div", { class: {
                'dayTitle full-height align-items-center': true,
                'weekend': utils.isWeekend(dayInfo.value),
                'currentDay': dayInfo.value === this._today || this.highlightedDate === dayInfo.day,
            } }, dayInfo.dayDisplayName))))));
    }
};
IglCalFooter.style = IglCalFooterStyle0;

const iglCalHeaderCss = ".sc-igl-cal-header-h{display:block;position:absolute;top:0;height:100%;color:var(--wa-color-text-quiet)}.svg-icon.sc-igl-cal-header{height:20px;width:20px}.darkGrey.sc-igl-cal-header{background:#ececec}.topLeftCell.sc-igl-cal-header{border-inline-end:1px solid var(--wa-color-surface-border)}.btn.sc-igl-cal-header{pointer-events:auto}.dayTitle.weekend.sc-igl-cal-header{font-weight:bold;color:var(--wa-color-text-normal)}.cellData.sc-igl-cal-header{background-color:var(--wa-color-surface-default)}.stickyCell.sc-igl-cal-header{display:-ms-inline-grid;display:-moz-inline-grid;display:inline-grid;position:-webkit-sticky;position:sticky;top:0px;height:82px;display:inline-block;vertical-align:top;z-index:2}.headersContainer.sc-igl-cal-header{background-color:var(--wa-color-surface-default)}.headerCell.sc-igl-cal-header{display:inline-grid;width:58px;height:58px;vertical-align:top;background-color:var(--wa-color-surface-default);border-bottom:1px solid var(--wa-color-surface-border)}.monthsContainer.sc-igl-cal-header{height:20px;background-color:var(--wa-color-surface-default);margin-bottom:0.2em}.monthCell.sc-igl-cal-header{display:inline-grid;height:20px;background-color:var(--wa-color-overlay-inline);border-right:1px solid var(--wa-color-surface-border);color:var(--wa-color-neutral-on-quiet);vertical-align:top}.monthCell.sc-igl-cal-header:nth-child(odd){background:var(--wa-color-neutral-fill-normal);color:var(--wa-color-neutral-on-normal)}.monthTitle.sc-igl-cal-header{overflow:hidden;text-overflow:ellipsis;font-size:0.9em;text-transform:uppercase;font-weight:bold;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.topLeftCell.sc-igl-cal-header{left:0px;z-index:3;width:170px;background-color:var(--wa-color-surface-default);display:-ms-inline-grid;display:-moz-inline-grid;display:inline-grid}.datePickerHidden.sc-igl-cal-header{position:absolute;height:100%;width:100%;opacity:0;cursor:pointer;z-index:1}.date_btn.sc-igl-cal-header{cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative}.date_btn.sc-igl-cal-header:hover{background:#f6f6f6;border-radius:0.3rem}.caledarBtns.sc-igl-cal-header{position:relative;cursor:pointer;padding:0.4rem}.caledarBtns.sc-igl-cal-header:hover{background-color:#f6f6f6}.dayTitle.sc-igl-cal-header{font-size:0.8em;font-weight:600;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.currentDay.sc-igl-cal-header .dayTitle.sc-igl-cal-header{font-weight:bold}.currentDay.sc-igl-cal-header{background-color:var(--wa-color-brand-fill-quiet)}.dayCapacityPercent.sc-igl-cal-header{font-size:0.75em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.badge-pill.sc-igl-cal-header{padding:3px 1em;font-size:0.8em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.pointer.sc-igl-cal-header{cursor:pointer}.searchContiner.sc-igl-cal-header{padding-left:10px;padding-right:10px}.searchListContainer.sc-igl-cal-header{background:var(--wa-color-surface-default);border:1px solid var(--wa-color-surface-border);border-bottom:none}.fd-header__badge-btn.sc-igl-cal-header{all:unset;cursor:pointer}.fd-header__badge-btn.sc-igl-cal-header:hover .fd-header__badge.sc-igl-cal-header{background-color:color-mix(in oklab, var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)), var(--wa-color-mix-hover))}.searchListItem.sc-igl-cal-header{background:var(--wa-color-surface-default);border-bottom:1px solid var(--wa-color-surface-border);padding-left:8px}.header__fd-actions.sc-igl-cal-header{color:var(--wa-color-text-normal);border-inline-end:1px solid var(--wa-color-surface-border)}.badge-light.sc-igl-cal-header{background-color:#999999;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.min-width-full.sc-igl-cal-header{min-width:100%}.header__fd-actions.sc-igl-cal-header{display:flex;width:170px;box-sizing:border-box;gap:0.875rem;color:var(--wa-color-text-normal);flex-direction:column}";
const IglCalHeaderStyle0 = iglCalHeaderCss;

const IglCalHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.optionEvent = index.createEvent(this, "optionEvent", 7);
        this.gotoRoomEvent = index.createEvent(this, "gotoRoomEvent", 7);
        this.gotoToBeAssignedDate = index.createEvent(this, "gotoToBeAssignedDate", 7);
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
    toBeAssignedService = new toBeAssigned_service.ToBeAssignedService();
    dateRef;
    dateSelectRef;
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
        return (index.h(index.Host, { key: '612d05bb3eecda67432e7474041ea79776ff2d94' }, index.h("div", { key: '440141fc8ac44c13334bc815203017b3a59bbb71', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, index.h("div", { key: '5738afde5e5a0b29fb0c6391cd25460603934997', class: "header__fd-actions" }, index.h("div", { key: 'eb0b62760c2885e5252a88535dc894f189f841cc', class: "row justify-content-around no-gutters", style: { gap: '0' } }, !this.calendarData.is_vacation_rental && (index.h(index.Fragment, { key: '03c79c851be29d1be5481b56a627adf31ac0943b' }, index.h("wa-tooltip", { key: 'c872a2d395ff026c7e2ca4804396b73829a45be4', for: "fd-unassigned-dates_btn" }, locales_store.locales.entries.Lcz_UnassignedUnitsTooltip), index.h("ir-custom-button", { key: 'cf663f2b0c1694e442c11eda2927b0eb8bf7dba7', id: "fd-unassigned-dates_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('showAssigned') }, index.h("wa-icon", { key: '087d80d198af8b427fa8ccdd1f3fbc78713af61a', style: { fontSize: '1.5rem' }, name: "server", label: locales_store.locales.entries.Lcz_UnassignedUnitsTooltip, "aria-label": locales_store.locales.entries.Lcz_UnassignedUnitsTooltip })))), index.h("wa-tooltip", { key: 'a5d2fb89bc025ca06173732305e6a21495fa4d18', for: "fd-dates-navigation_btn" }, locales_store.locales.entries.Lcz_Navigate), index.h("ir-date-select", { key: '4c57994fbd8cc1a04873a3f0d1054cdefc467a9b', minDate: moment.hooks().add(-2, 'months').startOf('month').format('YYYY-MM-DD'), onDateChanged: evt => {
                console.log('evt', evt);
                this.handleDateSelect(evt);
            }, ref: el => (this.dateSelectRef = el) }, index.h("ir-custom-button", { key: '5aca1bc13382627f79434ca6fa2e5c7a203f3992', slot: "trigger", id: "fd-dates-navigation_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('calendar') }, index.h("wa-icon", { key: '21b9d843605466dca3d5ddb879f5c782d7666830', style: { fontSize: '1.5rem' }, name: "calendar", variant: "regular", label: locales_store.locales.entries.Lcz_Navigate, "aria-label": locales_store.locales.entries.Lcz_Navigate })), index.h("div", { key: '14cea72424afffaaf2a2d9f5f29779681a8e880c', class: "fd-dates__actions" }, index.h("wa-divider", { key: 'ea73d98ef7fb1b53610ef0daf79235a6655bbdb6' }), index.h("ir-custom-button", { key: 'cdda3fa762069bd7014ca813c0d4f6990f149ede', variant: "neutral", appearance: "outlined", onClickHandler: () => {
                this.handleOptionEvent('gotoToday');
                this.dateSelectRef.closeDatePicker();
            } }, "Today"))), index.h(index.Fragment, { key: '7fd79319f3bc81f8dadde9621e28ed7e8c088180' }, index.h("wa-tooltip", { key: '1cd6fbaa808336bf029e1595a7918e711eca3650', for: "fd-new-booking_btn" }, locales_store.locales.entries.Lcz_CreateNewBooking), index.h("ir-custom-button", { key: '8908e0d3f29080c50f299d29e57f09ddfcf156fa', slot: "trigger", id: "fd-new-booking_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('add', this.getNewBookingModel()) }, index.h("wa-icon", { key: '9fdc44bd6220e11b7375474831c5aed094176913', style: { fontSize: '1.5rem' }, name: "plus", label: locales_store.locales.entries.Lcz_CreateNewBooking, "aria-label": locales_store.locales.entries.Lcz_CreateNewBooking }))), index.h(index.Fragment, { key: '409ec2277888ddf187e202ecfd9ff140bf2bef7e' }, index.h("wa-tooltip", { key: '66c9dd64ef0e3bce1c0751605af5457349097af7', for: "fd-stop-open-sale_btn" }, locales_store.locales.entries.Lcz_StopOpenSale), index.h("ir-custom-button", { key: 'ea3fc7764c39c9ca8d9eb70ac70a7894f25ec69b', slot: "trigger", id: "fd-stop-open-sale_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('bulk', this.getNewBookingModel()) }, index.h("wa-icon", { key: '16d3cb19d73158e32258b448de3a77e7560e8d3f', variant: "regular", style: { fontSize: '1.5rem' }, name: "calendar-xmark", label: locales_store.locales.entries.Lcz_StopOpenSale, "aria-label": locales_store.locales.entries.Lcz_StopOpenSale })))), index.h("div", { key: 'f3894b73ac64f712907d4e71ba13daa919f1e93b', class: "searchContiner" }, index.h("ir-picker", { key: '17a48a3dcd25b732448acada8488afad4a7fee50', size: "small", "onCombobox-select": e => {
                this.handleScrollToRoom(Number(e.detail.item.value));
            } }, this.roomsList.map(room => (index.h("ir-picker-item", { label: room.name, value: room.id }, room.name))))))), index.h("div", { key: '2ad48e8745ebb9070ac525cc793cb60e60d188e9', class: "stickyCell headersContainer" }, index.h("div", { key: '845d603ba260e04f92a47ba5c648462c5d5b559c', class: "monthsContainer" }, this.calendarData.monthsInfo.map(monthInfo => (index.h("div", { class: "monthCell", style: { width: monthInfo.daysCount * 58 + 'px' } }, index.h("div", { class: "monthTitle" }, monthInfo.monthName))))), this.calendarData.days.map(dayInfo => {
            return (index.h("div", { class: `headerCell align-items-center ${'day-' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''}`, "data-day": dayInfo.day }, !this.calendarData.is_vacation_rental && (index.h("div", { class: "preventPageScroll", onClick: () => this.showToBeAssigned(dayInfo) }, this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr !== 0 ? (index.h("button", { class: 'fd-header__badge-btn' }, index.h("wa-badge", { class: "fd-header__badge", variant: 'brand', appearance: 'accent', pill: true }, this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr))) : (index.h("wa-badge", { variant: 'neutral', appearance: 'filled', pill: true }, ' ', this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr)))), index.h("div", { class: { dayTitle: true, weekend: utils.isWeekend(dayInfo.value) } }, dayInfo.dayDisplayName), index.h("div", { class: "dayCapacityPercent" }, dayInfo.occupancy, "%")));
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
        index.registerInstance(this, hostRef);
        this.irAfterClose = index.createEvent(this, "irAfterClose", 7);
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
    houseKeepingService = new housekeeping_service.HouseKeepingService();
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
        return (index.h("div", { class: `ticket ${isSelected ? 'ticket--selected' : ''}`, key: issue.id, onClick: () => isMultiple && this.toggleIssue(issue.id) }, index.h("p", { class: "ticket-description" }, issue.description || 'No description provided.'), index.h("div", { class: "ticket-footer-row" }, index.h("div", { class: "ticket-reporter" }, index.h("span", { class: "ticket-reporter-name" }, issue.housekeeper_name)), index.h("div", { class: 'ticket-meta' }, index.h("span", { class: "ticket-date" }, moment.hooks(issue.date).format('MMM D, YYYY'), issue.hour != null && issue.minute != null && (index.h("span", { class: "ticket-time" }, String(issue.hour).padStart(2, '0'), ":", String(issue.minute).padStart(2, '0')))), isMultiple && (index.h("wa-checkbox", { checked: isSelected, defaultChecked: isSelected, onchange: (e) => {
                e.stopPropagation();
                this.toggleIssue(issue.id);
            } }))))));
    }
    renderContent() {
        if (!this.issues?.length || !this.open)
            return null;
        return (index.h("div", { class: "dialog-body" }, index.h("div", { class: "tickets-list" }, this.issues.map(issue => this.renderTicket(issue))), this.error && (index.h("div", { class: "error-banner", role: "alert" }, index.h("wa-icon", { name: "circle-exclamation" }), this.error))));
    }
    render() {
        const count = this.issues?.length ?? 0;
        const selectedCount = this.selectedIds.size;
        return (index.h("ir-dialog", { key: '2bfa3fa3d24b141c53660b218402be377dd7a601', ref: el => (this.dialogRef = el), label: `Reported ${count > 1 ? 'Issues' : 'Issue'}: ${this.unitName}`, onIrDialogAfterHide: () => this.irAfterClose.emit() }, this.renderContent(), index.h("div", { key: '9857e0e70b581cf0dd3e3980d073fc2cada4f62b', slot: "footer", class: "dialog-footer" }, index.h("ir-custom-button", { key: 'c4f843d7d6f9b965e82ed2ef22937feb612b2935', variant: "neutral", size: "medium", appearance: "filled", onClickHandler: () => this.dialogRef?.closeModal(), disabled: this.isResolving }, "Close"), index.h("ir-custom-button", { key: 'f6ccbfad51d76bf96935f29c54dc60b7effc5257', variant: "brand", size: "medium", appearance: "accent", onClickHandler: this.handleResolve, disabled: selectedCount === 0, loading: this.isResolving }, "Mark as Resolved"))));
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
        index.registerInstance(this, hostRef);
        this.irAfterClose = index.createEvent(this, "irAfterClose", 7);
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
    housekeepingService = new housekeeping_service.HouseKeepingService();
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
                property_id: calendarData.calendar_data.property.id,
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
        return (index.h("ir-dialog", { key: 'abc5abd102c2bd13cae4b1e85dfe4ce8211fb15c', ref: el => (this.dialogRef = el), open: this.open, label: "Housekeeping Update", onIrDialogAfterHide: () => this.irAfterClose.emit() }, index.h("p", { key: '904283b4a9a985e66390ba863484ab28e10875f9', style: { margin: '0' } }, `${this.selectedRoom?.name} is currently marked as ${this.getStatusLabel()}.`), index.h("div", { key: '5d1d59f556b4038b843eb36d992095079fd68951', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '1bfa6d5f7121f2f8fad7e8f37556dfda2ea85831', "data-dialog": "close", size: "medium", variant: "neutral", appearance: "filled" }, "Cancel"), index.h("ir-custom-button", { key: '0decf61d8d2c761410a8d20485e43b0676c9c983', value: "hk-toggle-clean-dirty", size: "medium", variant: "brand", appearance: "outlined", loading: this.isLoading === 'hk-toggle-clean-dirty', onClickHandler: e => this.updateHousekeeping(e, this.selectedRoom.hk_status === '002' ? '001' : '002') }, this.middleButtonLabel()), index.h("ir-custom-button", { key: '5ba1ccbbd2182b1255cb122e0a4bdff461bde1a3', value: "hk-clean-inspect", size: "medium", variant: "brand", appearance: "accent", loading: this.isLoading === 'hk-clean-inspect', onClickHandler: e => this.updateHousekeeping(e, this.selectedRoom.hk_status === '004' ? '001' : '004') }, this.rightButtonLabel()))));
    }
};
IglHousekeepingDialog.style = IglHousekeepingDialogStyle0;

const iglLegendCss = ".sc-igl-legend-h{--spacing:var(--wa-space-l);display:block;width:max-content;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-s);background-color:var(--wa-color-surface-default);border-inline-end:2px solid var(--wa-color-surface-border)}.legend_skew.pending.sc-igl-legend{border-width:1px;border-style:dashed;border-color:var(--wa-color-success-fill-loud);background-color:var(--wa-color-surface-default) !important}.legend_skew.in-house.sc-igl-legend{background-color:var(--wa-color-brand-fill-quiet) !important;color:var(--wa-color-brand-on-quiet) !important;width:30px;transform:skew(0);border-radius:0;vertical-align:middle;font-size:12px;text-align:center}.legendRow.sc-igl-legend{position:relative;vertical-align:middle;margin-bottom:0.3rem}.legendRow.sc-igl-legend div.sc-igl-legend{display:inline-block;vertical-align:middle}.legend_skew.sc-igl-legend,.legend_skew-bordered.sc-igl-legend,.legend_skewsplit.sc-igl-legend{transform:skew(-22deg);width:15px;height:16px;border-radius:4px;background-color:var(--ir-skew-background)}.legend_skew.striped.vertical.sc-igl-legend{--stripe-period:17px;--stripe-angle:360deg}.legend_skew.striped.sc-igl-legend{--stripe-period:6px}.legend_skew.split.sc-igl-legend{border-right:4px solid var(--wa-color-text-normal, black)}.legend_skew-bordered.sc-igl-legend{border:1px solid var(--wa-color-text-normal, black)}.legend_dirty-unit.sc-igl-legend{background-color:white !important;border:1px solid #e0e0e0;height:12px;width:20px;position:relative}.fd-legend__section-title.sc-igl-legend{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;margin:0;padding:0;margin-bottom:1rem;font-size:var(--wa-font-size-m);color:var(--wa-color-text-normal, black)}.legend_dirty-unit.sc-igl-legend::after{content:'';position:absolute;bottom:0;height:100%;left:30%;right:30%;background-color:#d4d0be !important}.legend_circle.sc-igl-legend{border-radius:100%;width:10px;height:10px;margin:3px 3px 3px 2px}.legend_skewsplit.sc-igl-legend{border-right:2px solid var(--wa-color-text-normal, black)}.legendCalendar.sc-igl-legend .legendRow.sc-igl-legend{margin-bottom:0}.legendCalendar.sc-igl-legend .legendRow.sc-igl-legend:first-child .legendCal.sc-igl-legend{background-color:var(--wa-color-neutral-fill-normal);color:var(--wa-color-neutral-on-normal)}.legendCalendar.sc-igl-legend .legendRow.sc-igl-legend div.sc-igl-legend{display:inline-block;vertical-align:middle;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.total-availability.sc-igl-legend{font-size:1em !important}.legendCalendar.sc-igl-legend .legendCal.sc-igl-legend{width:80px;height:25px;text-align:center;display:inline-grid !important;align-content:center;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendCalendar.sc-igl-legend .legendCal.sc-igl-legend .badge.sc-igl-legend{margin-top:0.2rem;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendCalendar.sc-igl-legend .legendCal.legendCal-h2.sc-igl-legend{height:40px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.br-t.sc-igl-legend{border-top:1px solid var(--wa-color-surface-border)}.br-s.sc-igl-legend{border-left:1px solid var(--wa-color-surface-border);border-right:1px solid var(--wa-color-surface-border)}.br-bt.sc-igl-legend{border-bottom:1px solid var(--wa-color-surface-border)}.hyphenLegend.sc-igl-legend{-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.hyphenLegend.sc-igl-legend::before{width:12px;height:0.5px;content:' ';background-color:var(--wa-color-text-normal, black);vertical-align:middle;display:inline-block;margin-left:5px;margin-right:5px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.fd-legend__title.sc-igl-legend{align-self:center;flex:1 1 auto;font-style:inherit;font-variant:inherit;font-stretch:inherit;font-family:inherit;font-optical-sizing:inherit;font-size-adjust:inherit;font-kerning:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-language-override:inherit;font-size:var(--wa-font-size-l);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);margin:0px;padding:0;color:var(--wa-color-text-normal, black)}.fd-legend__header.sc-igl-legend{display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;background-color:var(--wa-color-surface-default);z-index:1;padding-inline-start:var(--spacing);padding-block-end:0;padding-inline-end:calc(var(--spacing) - var(--wa-form-control-padding-block));padding-block-start:calc(var(--spacing) - var(--wa-form-control-padding-block));border-bottom:1px solid var(--wa-color-surface-border);padding-bottom:calc(var(--spacing) / 2);box-sizing:border-box;background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default))}.fd-legend__shape.sc-igl-legend{display:flex;align-items:center;justify-content:center}.fd-legend__row.sc-igl-legend{display:grid;grid-template-columns:40px 1fr;gap:1rem;margin-bottom:0.5rem}.fd-legend__row-title.sc-igl-legend{padding:0;margin:0;width:fit-content}.legendContainer.sc-igl-legend{padding:0 !important}.fd-legend__body.sc-igl-legend{padding:var(--spacing)}.headerCell.sc-igl-legend{width:70px;display:flex;align-items:center;justify-content:center}.dayTitle.sc-igl-legend{font-size:0.8em;font-weight:600;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.dayCapacityPercent.sc-igl-legend{font-size:0.75em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legend_rectangle.sc-igl-legend{height:12px;width:20px}";
const IglLegendStyle0 = iglLegendCss;

const IglLegend = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.optionEvent = index.createEvent(this, "optionEvent", 7);
    }
    legendData;
    bookingColors = [];
    saveState = 'idle';
    saveError;
    loadingIndex = [];
    optionEvent;
    propertyService = new property_service.PropertyService();
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
        const calendarExtra = calendarData.calendar_data.property.calendar_extra ?? {};
        calendarData.calendar_data.property.calendar_extra = {
            ...calendarExtra,
            booking_colors: colors.map(color => ({ ...color })),
        };
    }
    get propertyId() {
        return calendarData.calendar_data.property?.id ?? calendarData.calendar_data.property.id ?? null;
    }
    updateBookingColor(index, patch) {
        const bookingColors = calendarData.calendar_data.property.calendar_extra?.booking_colors.map((color, idx) => (idx === index ? { ...color, ...patch } : color));
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
                value: JSON.stringify(calendarData.calendar_data.property.calendar_extra),
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
        let newLegendArray = [...calendarData.calendar_data.property.calendar_legends];
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
        return (index.h(index.Host, { key: 'bcffb2dd969769f13c5fc82c7823dc1b910abc38', class: "legendContainer text-left" }, index.h("div", { key: '55f684aacda6d68e16fb8d466a5c67ac9edb4cdd', class: "fd-legend__header" }, index.h("h2", { key: '6f5aef16f841badc9d7422db7404a5d56fdbe2fa', class: "fd-legend__title", id: "legend-title" }, locales_store.locales.entries.Lcz_Legend), index.h("ir-custom-button", { key: '571a8335fb097e556fef71cdc973a093b7e56340', size: "medium", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, index.h("wa-icon", { key: '3d3f8608a9bb4c869522f894f321cbda7cc54aa5', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), index.h("section", { key: 'a2f3a18341d94b2f642dfb548b7abc3daa743d0a', class: "fd-legend__body" }, index.h("div", { key: '5fb531bbdb50cdda99445f27334142c0d967db98' }, legend.map(legendInfo => {
            const stripeColor = calendarData.calendar_data.colorsForegrounds[legendInfo?.color];
            return (index.h("div", { class: "fd-legend__row" }, index.h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, index.h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (index.h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, index.h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (index.h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), index.h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), index.h("div", { key: '7a5564d65ef1762ee2ceb3a0f95428c32a0b60f1', class: "fd-legend__row" }, index.h("div", { key: '5f85d879d1d5a35bfce782e6ddc230377a8bbb0b', class: 'fd-legend__shape' }, index.h("wa-icon", { key: '4c963216c433e09ec71c2ace21bd2e1dfb3d8b4a', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), index.h("p", { key: '3505c10ef8709474e1a8ad317806e40adc850544', class: "fd-legend__row-title" }, "Housekeeping reported issue")), index.h("wa-divider", { key: '4c707bffe203c78607667cd03c38be3336e3ea85' }), index.h("h5", { key: 'bfb47585626f14c1696aef01ce7e6ad276964f97', class: "fd-legend__section-title" }, "Use custom colors"), calendarData.calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index$1) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (index.h("div", { key: `legend_${index$1}`, class: "fd-legend__row" }, index.h("div", { class: 'fd-legend__shape' }, index.h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), index.h("wa-input", { autocomplete: "off", class: "legendTextarea border-0 m-0 p-0", value: legendInfo.name, size: "small", placeholder: "Reason for this color", onchange: event => {
                    this.handleNameInput(index$1, event.target.value);
                    this.handleBlur(index$1);
                } }, this.loadingIndex.includes(index$1) && (this.saveState === 'saving' || this.saveState === 'saved') ? (index.h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index$1) })) : null)));
        })), index.h("wa-divider", { key: '20245de92527c567a2f3e6166348eb28777ccd0d' }), index.h("div", { key: '61fcdd8c935ea2effbfaa30c712dd4be893abeb3' }, index.h("div", { key: '45ec18cefb4b49af980482806c43d47f4041aa36', class: "legendCalendar" }, index.h("div", { key: '38a13a8f310fbc42ca727c9eb45672c01056b8b8', class: "legendRow align-items-center" }, index.h("div", { key: '3501a0e52a6d7ec7ee17cbea7dcebf81334895b4', class: "legendCal br-t br-s br-bt" }, index.h("strong", { key: 'ff3f1dc62e8712854a559729e8670a77f927efb0' }, "MAR 2022")), index.h("div", { key: '207e62133cdbcd1e4e5cf9e294cf08aa5f6cd68c', class: "hyphenLegend" }, locales_store.locales.entries.Lcz_MonthAndYear)), index.h("div", { key: '92d6973e9810a7cc0162c00dfe2cb1d555935778', class: "legendRow" }, index.h("div", { key: '653bc4e9b49b22c0cfa165d9dd75b4125ac23fe2', class: "legendCal headerCell align-items-center br-s" }, index.h("wa-badge", { key: '1932979744b9c7fc6feb5462d207db04427952ca', pill: true }, "3")), index.h("div", { key: 'd3269d710d23b1f3fc2c7734be351b2424d54f04', class: "hyphenLegend" }, index.h("div", { key: '3796a9ffba86663e89673f962a98c4483f05e22a' }, locales_store.locales.entries.Lcz_UnassignedUnits))), index.h("div", { key: '6bad5e49dd0e5e65a55af4c9514866c1de6c8ecc', class: "legendRow" }, index.h("div", { key: 'cc2140e0742c7819147f55500b21afffcf6f5c6c', class: "legendCal dayTitle br-s" }, "Fri 18"), index.h("div", { key: 'b2407f8e7fc7fd430f5904683cd2124fb5066bc3', class: "hyphenLegend" }, locales_store.locales.entries.Lcz_Date)), index.h("div", { key: 'dff8255450685b255b3396ca8c9b06401e615989', class: "legendRow" }, index.h("div", { key: '52675271b20addb319f2a315bd8855b488719511', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), index.h("div", { key: 'd61ac51c020a7931f362b075ba6103448a10257d', class: "hyphenLegend" }, locales_store.locales.entries.Lcz_Occupancy)), index.h("div", { key: '220fbcdd5da893251e3d5a1b86b76007ba283b5b', class: "legendRow" }, index.h("div", { key: '273efd7d38a0b8a1c6c751ce8dfe906568c55001', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), index.h("div", { key: 'fe3debc4bbe93f494964107d9eb73acf1a80d08c', class: "hyphenLegend" }, locales_store.locales.entries.Lcz_TotalAvailability)))))));
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
        index.registerInstance(this, hostRef);
        this.dialogClose = index.createEvent(this, "dialogClose", 7);
        this.revertBooking = index.createEvent(this, "revertBooking", 7);
        this.resetModalState = index.createEvent(this, "resetModalState", 7);
    }
    get hostEl() { return index.getElement(this); }
    data;
    selectedRateplan;
    showRateplanError = false;
    dialogClose;
    revertBooking;
    resetModalState;
    dialogEl;
    rateplanSelectEl;
    eventsService = new events_service.EventsService();
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
        return (index.h("ir-dialog", { key: '94e56501869736a223d07a4531191d84b5477cf8', label: 'Alert', ref: el => (this.dialogEl = el), onIrDialogHide: this.handleDialogVisibilityChange }, this.data && (index.h(index.Fragment, { key: 'a04c3c9e8a886316096a175a07ad175090d24025' }, index.h("div", { key: 'ae55067177968db62eaaa9c407c4438b623f5637', class: "dialog-body" }, index.h("p", { key: '79cab0f39d1a063d476c0bd75d3c23e5625ecb0d', class: "text-left dialog-body__description m-0 p-0" }, this.data.description), hasRateplans && (
        // <ir-select
        //   ref={el => (this.rateplanSelectEl = el)}
        //   required
        //   firstOption="Select rate plan..."
        //   data={this.rateplanOptions.map(option => ({ text: option.text, value: option.value }))}
        //   error={this.showRateplanError}
        //   onSelectChange={this.handleRateplanChange}
        // ></ir-select>
        index.h("wa-select", { key: '209e8850c51d4bd03a8462c29a38bd0601aa5bf2', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, defaultValue: '', "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, size: "small", "aria-invalid": String(this.showRateplanError), onchange: e => this.handleRateplanChange(e.target.value) }, index.h("wa-option", { key: '9b9bbfae890f20ca41a06a300aa5645f1a76ddde', value: "" }, "Select rate plan..."), this.rateplanOptions.map(option => (index.h("wa-option", { key: option.value, value: option.value }, option.text)))))), index.h("div", { key: 'dbe60b1dac4a1c3cf45b29d3bae7b7734dddbd44', class: "dialog-footer", slot: "footer" }, index.h("ir-custom-button", { key: '29a2348593f95caa54aed181bbf75fc187280987', appearance: "filled", variant: "neutral", onClickHandler: this.handleCancelClick, size: "medium" }, "Cancel"), index.h("ir-custom-button", { key: 'c91cd2ed4bf6156e18916584a21f728203fe3b65', variant: "brand", onClickHandler: () => this.reallocateUnit(), size: "medium", loading: irInterceptor_store.isRequestPending('/ReAllocate_Exposed_Room') }, "Confirm"))))));
    }
    static get watchers() { return {
        "data": ["handleDataChange"]
    }; }
};
IglReallocationDialog.style = IglReallocationDialogStyle0;

const SelectedUnitSchema = index$1.z.object({
    roomtype_id: index$1.z.coerce.number(),
    unit_id: index$1.z.coerce.number(),
    rateplan_id: index$1.z.coerce.number(),
});

const iglSplitBookingCss = ".sc-igl-split-booking-h{display:block}.sc-igl-split-booking-h{display:flex;flex-direction:column;flex:1 1 0%;height:100%}.bulk-sheet-container.sc-igl-split-booking{display:flex;flex-direction:column;flex:1;min-height:0;gap:1rem}.animated-container.sc-igl-split-booking{transition:all 0.5s ease}.physical-room.sc-igl-split-booking{margin-left:1rem !important}.physical-room.sc-igl-split-booking>td.sc-igl-split-booking:last-child{padding-left:1rem}.room-type-list.sc-igl-split-booking{padding:0;margin:0}.room-type-list.sc-igl-split-booking>li.sc-igl-split-booking,.physical-room.sc-igl-split-booking,.room-type-row.sc-igl-split-booking{list-style:none}";
const IglSplitBookingStyle0 = iglSplitBookingCss;

const sheetCss$1 = ".sc-igl-split-booking-h{height:100%}.sheet-container.sc-igl-split-booking{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-igl-split-booking{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-igl-split-booking{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-igl-split-booking{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-igl-split-booking{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-igl-split-booking{flex-direction:row;align-items:center}}";
const IglSplitBookingStyle1 = sheetCss$1;

const IglSplitBooking = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
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
    bookingService = new booking_service.BookingService();
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
        let MFromDate = moment.hooks(room.from_date, 'YYYY-MM-DD');
        const MToDate = moment.hooks(room.to_date, 'YYYY-MM-DD').add(-1, 'days');
        const today = moment.hooks();
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
        booking_service.resetBookingStore(false);
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
            const canCheckIn = this.room.in_out?.code === '001' ? (moment.hooks().isBefore(this.selectedDates.from_date) ? false : true) : false;
            let rooms = [...this.booking.rooms];
            let currIndex = rooms.findIndex(room => room.identifier === this.room.identifier);
            if (currIndex === -1) {
                throw new Error(`Didn't find room identifier ${this.room.identifier}`);
            }
            rooms[currIndex] = {
                ...this.room,
                from_date: this.room.from_date,
                to_date: this.selectedDates.from_date.format('YYYY-MM-DD'),
                days: this.room.days.filter(r => moment.hooks(r.date, 'YYYY-MM-DD').isBefore(this.selectedDates.from_date, 'dates')),
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
                days: this.room.days.filter(r => moment.hooks(r.date, 'YYYY-MM-DD').isSameOrAfter(this.selectedDates.from_date, 'dates')),
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
            if (error instanceof index$1.ZodError) {
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
        const roomTypesSource = calendarData.calendar_data?.property?.roomtypes;
        const mealPlanResult = utils.checkMealPlan({
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
        return (index.h("form", { key: 'aa80201682575a52227e7687c6c0d7f311e8c11b', onSubmit: e => {
                e.preventDefault();
                this.doReservation();
            }, class: "sheet-container" }, index.h("ir-title", { key: '6a3aa4191af6791400cc43c8e5a03fd142d146a2', class: "px-1 sheet-header mb-0", displayContext: "sidebar", onCloseSideBar: () => this.closeModal.emit(), label: `Split unit ${this.room?.unit['name']}` }), index.h("section", { key: 'e61326171ee2acacd6b22b81edc30a2fb4af3dbc', class: "px-1 sheet-body" }, index.h("div", { key: '4eb74923f050dd0287249dd9bac92a5709e2b1dc', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: 'ea0eaf27b1ea9aba2e5f0fe76b61ed921f5cd731' }, index.h("ir-date-view", { key: '187f8acff2c9cd6bb2061bb9b823e3177aeb66b2', from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false })), index.h("p", { key: '5ec527373b6c721e0e57373e5756d2f99fd78756', class: "m-0 p-0" }, this.room.rateplan.short_name, " ", this.room.rateplan.is_non_refundable ? locales_store.locales.entries.Lcz_NonRefundable : '')), index.h("div", { key: 'eaf81cff5443b69f9ff7019573dc06f7372b2146', class: 'd-flex align-items-center mt-1', style: { gap: '0.5rem' } }, index.h("span", { key: '12811a36258c0895d46c6c3d76ca97ac1b22bb2d' }, "From:"), index.h("ir-date-picker", { key: 'ef899989420d7fa3b6a4dc4742fa11b1c149853e', "data-testid": "pickup_arrival_date", date: this.selectedDates?.from_date?.format('YYYY-MM-DD'), maxDate: this.defaultDates?.to_date.format('YYYY-MM-DD'), minDate: this.defaultDates?.from_date.format('YYYY-MM-DD'), emitEmptyDate: true,
            // aria-invalid={this.errors?.arrival_date && !this.pickupData.arrival_date ? 'true' : 'false'}
            onDateChanged: evt => {
                this.selectedDates = {
                    ...this.selectedDates,
                    from_date: evt.detail.start,
                };
            } }, index.h("input", { key: '85147d382626fdeeae5c4da4f35ae7e1896b0797', type: "text", slot: "trigger", value: this.selectedDates.from_date ? this.selectedDates.from_date.format('MMM DD, YYYY') : null, class: `form-control input-sm  text-center`, style: { width: '120px' } })), index.h("ir-button", { key: 'f51c5c23976c862b35102c776e608be405cca760', isLoading: irInterceptor_store.isRequestPending('/Check_Availability'), text: "Check available units", size: "sm", onClick: () => this.checkBookingAvailability() })), this.errors?.roomtype_id && index.h("p", { key: 'd42aa605ccb0423b01333c8752a56edd8c52872d', class: "text-danger text-left mt-2" }, "Please select a room"), index.h("ul", { key: '7d0f51d0da3b19e25de390889a5d00b26f79ef7b', class: "room-type-list mt-2" }, this.roomTypes?.map(roomType => {
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
            return (index.h(index.Fragment, null, index.h("li", { key: `roomTypeRow-${roomType.id}`, class: `room-type-row` }, index.h("div", { class: 'd-flex choice-row' }, index.h("span", { class: "text-left room-type-name" }, roomType.name))), units.map((room, j) => {
                const row_style = j === roomType.physicalrooms.length - 1 ? 'pb-1' : '';
                const showMealPlanSelect = this.selectedUnit?.unit_id === room.id && Array.isArray(this.mealPlanOptions) && this.mealPlanOptions.length > 0;
                return (index.h("li", { key: `physicalRoom-${room.id}-${j}`, class: `physical-room ${row_style}` }, index.h("div", { class: 'd-flex choice-row align-items-center', style: { gap: '0.5rem' } }, index.h("ir-radio", { class: "pl-1", name: "unit", checked: this.selectedUnit?.unit_id === room.id, onCheckChange: () => this.updateSelectedUnit({
                        roomtype_id: roomType.id,
                        unit_id: room.id,
                    }), label: room.name }), showMealPlanSelect && (index.h("ir-select", { firstOption: "Select a new rateplan...", error: this.errors?.rateplan_id && !this.selectedUnit?.rateplan_id, onSelectChange: e => {
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
        }))), index.h("div", { key: '116cc8687949a4c04ae519e946e4d03d98a83faf', class: 'sheet-footer' }, index.h("ir-button", { key: '2282c9fc41a4af02441c36fbb9d746c5f1c19fc0', text: locales_store.locales.entries.Lcz_Cancel, btn_color: "secondary", class: 'flex-fill', onClickHandler: () => this.closeModal.emit(null) }), index.h("ir-button", { key: '9ff611e62db165e3599f594ec2c87761197ccdb8', isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Confirm, btn_type: "submit", class: "flex-fill" }))));
    }
};
IglSplitBooking.style = IglSplitBookingStyle0 + IglSplitBookingStyle1;

const iglTbaCategoryViewCss = ".sc-igl-tba-category-view-h{display:block}";
const IglTbaCategoryViewStyle0 = iglTbaCategoryViewCss;

const IglTbaCategoryView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.assignUnitEvent = index.createEvent(this, "assignUnitEvent", 7);
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
        return eventDatas.map((eventData, ind) => (index.h("igl-tba-booking-view", { calendarData: this.calendarData, selectedDate: this.selectedDate, eventData: eventData, categoriesData: this.categoriesData, categoryId: categoryId, categoryIndex: this.categoryIndex, eventIndex: ind, onAssignRoomEvent: evt => this.handleAssignRoomEvent(evt) })));
    }
    renderView() {
        this.renderAgain = !this.renderAgain;
    }
    render() {
        return (index.h(index.Host, { key: '42d0a35d50bacb73f5b430d27922b0c28d9d8e14' }, index.h("div", { key: 'ce90ed696ed76777e537689538a3ef706f04a833', class: "sectionContainer" }, index.h("div", { key: '536fe6bf30bbbbb883422095737dec47f2fc5c0e', class: "font-weight-bold font-small-3" }, this.categoriesData[this.categoryId]?.name), this.getEventView(this.categoryId, this.eventDatas))));
    }
};
IglTbaCategoryView.style = IglTbaCategoryViewStyle0;

const iglToBeAssignedCss = ".sc-igl-to-be-assigned-h{--spacing:var(--wa-space-l);display:block;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-s);background-color:var(--wa-color-surface-default);border-inline-end:2px solid var(--wa-color-surface-border)}.fd-to-be-assigned__title.sc-igl-to-be-assigned{align-self:center;flex:1 1 auto;font-style:inherit;font-variant:inherit;font-stretch:inherit;font-family:inherit;font-optical-sizing:inherit;font-size-adjust:inherit;font-kerning:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-language-override:inherit;font-size:var(--wa-font-size-l);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);margin:0px;padding:0;color:var(--wa-color-text-normal, black)}.fd-to-be-assigned__header.sc-igl-to-be-assigned{display:flex;align-items:center;justify-content:space-between;padding-inline-start:var(--spacing);padding-block-end:0;padding-inline-end:calc(var(--spacing) - var(--wa-form-control-padding-block));padding-block-start:calc(var(--spacing) - var(--wa-form-control-padding-block));border-bottom:1px solid var(--wa-color-surface-border);padding-bottom:calc(var(--spacing) / 2);box-sizing:border-box;background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default))}.fd-to-be-assigned__header-container.sc-igl-to-be-assigned{position:sticky;top:0;background-color:var(--wa-color-surface-default);z-index:1}.to-be-assigned__body.sc-igl-to-be-assigned{padding:var(--spacing)}.to-be-assigned__body.sc-igl-to-be-assigned .scrollabledArea.sc-igl-to-be-assigned{display:flex;flex-direction:column;gap:1rem}.custom-dropdown.sc-igl-to-be-assigned{cursor:pointer;padding:5px 10px;width:min-content;margin-left:auto;margin-right:auto}.dropdown-toggle.sc-igl-to-be-assigned{all:unset;display:flex;width:max-content;align-items:center;gap:10px}.close_btn_style.sc-igl-to-be-assigned{padding:0.4rem}.close_btn_style.sc-igl-to-be-assigned:hover{background-color:#f6f6f6}.dropdown-menu.sc-igl-to-be-assigned{max-height:250px;overflow-y:auto}.tobeAssignedHeader.sc-igl-to-be-assigned{font-weight:500;letter-spacing:0.05rem;font-size:1.12rem;padding:0;margin:0}.assignment_header.sc-igl-to-be-assigned{display:flex;align-items:center;justify-content:space-between;padding-top:5px;margin-bottom:1rem}.dropdown-toggle.sc-igl-to-be-assigned::after{content:none;display:none}.dropdown-toggle.sc-igl-to-be-assigned .caret-icon.sc-igl-to-be-assigned{transition:transform 0.2s ease}.show.sc-igl-to-be-assigned .caret-icon.sc-igl-to-be-assigned{transform:rotate(-180deg)}.stickyHeader.sc-igl-to-be-assigned{position:-webkit-sticky;position:sticky;top:0;background-color:#ffffff;z-index:1}.pointer.sc-igl-to-be-assigned{cursor:pointer}.dots.sc-igl-to-be-assigned{display:flex;align-items:center;justify-content:center;margin:0 3px;padding:0}.dot.sc-igl-to-be-assigned{width:5px;height:5px;margin:5px 4px 0;background-color:#6b6f82;border-radius:50%;animation:dotFlashing 1s infinite linear alternate}.dot.sc-igl-to-be-assigned:nth-child(2){animation-delay:0.2s}.dot.sc-igl-to-be-assigned:nth-child(3){animation-delay:0.4s}@keyframes dotFlashing{0%{opacity:0}50%,100%{opacity:1}}";
const IglToBeAssignedStyle0 = iglToBeAssignedCss;

const IglToBeAssigned = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.optionEvent = index.createEvent(this, "optionEvent", 7);
        this.reduceAvailableUnitEvent = index.createEvent(this, "reduceAvailableUnitEvent", 7);
        this.showBookingPopup = index.createEvent(this, "showBookingPopup", 7);
        this.addToBeAssignedEvent = index.createEvent(this, "addToBeAssignedEvent", 7);
        this.highlightToBeAssignedBookingEvent = index.createEvent(this, "highlightToBeAssignedBookingEvent", 7);
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
    toBeAssignedService = new toBeAssigned_service.ToBeAssignedService();
    unassignedDates;
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
        const selectedDateData = this.selectedDate ? this.data[this.selectedDate] : null;
        return (index.h(index.Host, { key: '85b090907e866272d995882a24cc08e25a0f627a', class: "tobeAssignedContainer pr-1 text-left" }, index.h("div", { key: 'd8822d277e1f0fc593ca18f92c38791c07ba4f8b', class: 'fd-to-be-assigned__header-container' }, index.h("div", { key: 'e9ba27a985f88100dbe22e9edbe293fd2566f53f', class: "fd-to-be-assigned__header" }, index.h("h2", { key: 'f7e2d1317f55bca7b588bd8eb8bb96082b2b1fb4', class: "fd-to-be-assigned__title", id: "to-be-assigned-title" }, locales_store.locales.entries.Lcz_Assignments), index.h("ir-custom-button", { key: '859f5b4a6c3f2213cd0e2349d9280bc5d17985cb', size: "medium", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, index.h("wa-icon", { key: '93edd0e3ffd966229f92b3d1b8c7fb0c31ad470b', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), Object.keys(this.data).length === 0 ? (index.h("p", { style: { padding: '1.5rem' } }, locales_store.locales.entries.Lcz_AllBookingsAreAssigned)) : this.isLoading ? (index.h("p", { class: "d-flex align-items-center", style: { padding: '1.5rem' } }, index.h("span", { class: "p-0" }, this.loadingMessage), index.h("div", { class: "dots" }, index.h("div", { class: "dot" }), index.h("div", { class: "dot" }), index.h("div", { class: "dot" })))) : (index.h("div", { style: { padding: '0.5rem' } }, this.orderedDatesList.length ? (index.h("div", { class: `custom-dropdown border border-light rounded text-center ` + (this.showDatesList ? 'show' : ''), id: "dropdownMenuButton", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, index.h("div", { class: 'dropdown-toggle' }, index.h("span", { class: "font-weight-bold" }, selectedDateData?.dateStr || this.selectedDateDisplay), index.h("svg", { class: 'caret-icon', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 14, width: 14 }, index.h("path", { fill: "#6b6f82", d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), index.h("div", { class: "dropdown-menu dropdown-menu-right full-width", "aria-labelledby": "dropdownMenuButton" }, this.orderedDatesList?.map(ordDate => (index.h("div", { class: "dropdown-item pointer", onClick: () => this.showForDate(ordDate) }, this.data[ordDate].dateStr)))))) : (index.h("span", { style: { padding: '1.5rem' } }, locales_store.locales.entries.Lcz_AllBookingsAreAssigned))))), index.h("div", { key: 'c4b336f5ec6c77299394cf332c08c966f0969297', class: "to-be-assigned__body" }, !this.isLoading && (index.h("div", { key: '07273b615b38357af2c4e02ddbb904c7e4f0a85c', class: "scrollabledArea" }, this.selectedDate ? (selectedDateData && Object.keys(selectedDateData.categories).length ? (this.getCategoryView()) : (index.h("div", null, locales_store.locales.entries.Lcz_AllAssignForThisDay))) : null)))));
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
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '4326af1aacdfbb73b0a7d10a8c401123f4950577', style: { '--ir-popover-left': this.irPopoverLeft } }, index.h("p", { key: '6789fb856b27168960399f1a7591d34f7f6cf7d4', class: "popover-title" }, title.length > this.cropSize && (index.h("wa-tooltip", { key: '87bf4901b7785a349120277011a52152c1438afa', for: this.titleId, placement: "top" }, title)), index.h("span", { key: '9cee3c724d8c7ddc60247b20d90828d44547730a', id: this.titleId, class: "cropped-title" }, title), this.hkStatus && (index.h("div", { key: 'e7f0b7aa4687959f1760d1f170539f2687df04cd', class: "hk-dot" }, index.h("slot", { key: '36eb057ccf5308b5f80dbaaadc036bb78752d869', name: "end" }))))));
    }
};
IrInteractiveTitle.style = IrInteractiveTitleStyle0;

const irModalCss = ".backdropModal.sc-ir-modal{background-color:rgba(0, 0, 0, 0.5);z-index:1000;position:fixed;top:0;left:0;height:100vh;width:100%;opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.backdropModal.active.sc-ir-modal{cursor:pointer;opacity:1 !important;pointer-events:all}.ir-modal[data-state='opened'].sc-ir-modal{opacity:1;visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-alert-content.sc-ir-modal{padding:1rem;background:white;border-radius:5px}.ir-alert-header.sc-ir-modal{display:flex;font-size:1rem;font-weight:700}.modal.sc-ir-modal{z-index:1001 !important}.modal-dialog.sc-ir-modal{height:100vh;display:flex;align-items:center}.ir-alert-footer.sc-ir-modal{gap:10px}.ir-modal.sc-ir-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;width:90%;max-width:32rem;overflow:hidden;outline:0;opacity:0;transition:transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;visibility:hidden;pointer-events:none}.ir-modal.active.sc-ir-modal{opacity:1;transform:translate(-50%, 0);visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}";
const IrModalStyle0 = irModalCss;

const IrModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.confirmModal = index.createEvent(this, "confirmModal", 7);
        this.cancelModal = index.createEvent(this, "cancelModal", 7);
        this.middleModal = index.createEvent(this, "middleModal", 7);
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
            index.h("div", { key: 'e0c6798dd88f04c58a319d1ac2266eebfb94775a', class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    this.cancelModal.emit();
                    if (this.autoClose && !this.isLoading) {
                        this.closeModal();
                    }
                } }),
            index.h("div", { key: '2db4f94a2cef07041e6a381cf753038410a15b72', "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, index.h("div", { key: 'b11e5c17859f67ca327f1dbfb790b0ccd9ed6a29', class: `ir-alert-content p-2` }, this.showTitle && (index.h("div", { key: '5bdf04f8ae8dcab5dcbfe17690b116a00294e580', class: `ir-alert-header` }, index.h("p", { key: '362f68a02ded7e3d57b1262926993febb46b83f5' }, this.modalTitle))), index.h("div", { key: '7291acb2b69363557ecd3720402cdde53a559115', class: "modal-body text-left p-0 mb-2" }, index.h("div", { key: 'ecb738aee1ccd32c0765c88ba8e6b9ce7970171f' }, this.modalBody)), index.h("div", { key: '999f65d2988e83e1e533b4206d8e357188f4fabb', class: `ir-alert-footer border-0  d-flex justify-content-${this.btnPosition === 'center' ? 'center' : this.btnPosition === 'left' ? 'start' : 'end'}` }, this.leftBtnActive && index.h("ir-button", { key: 'c040fa11643092ac134f2f8a1c8a3e90329aff89', btn_disabled: this.isLoading, btn_color: this.leftBtnColor, btn_block: true, text: this.leftBtnText, name: this.leftBtnText }), this.middleBtnActive && (index.h("ir-button", { key: 'e62480edf276daa9bdfcc2c7d5d53caca7290814', btn_disabled: this.isMiddleButtonLoading, btn_color: this.middleBtnColor, btn_block: true, text: this.middleBtnText, isLoading: this.isMiddleButtonLoading, name: this.middleBtnText })), this.rightBtnActive && (index.h("ir-button", { key: 'ae5520e6b30b40dbe329a347b7f981d25283d400', btn_color: this.rightBtnColor, btn_disabled: this.isLoading, isLoading: this.isLoading, btn_block: true, text: this.rightBtnText, name: this.rightBtnText }))))),
        ];
    }
};
IrModal.style = IrModalStyle0;

const irNewBadgeCss = ":host{display:inline-flex}.new-badge{font-weight:400;text-align:center;vertical-align:middle !important;text-transform:uppercase;letter-spacing:0.02em;line-height:1;display:inline-flex;align-items:center;justify-content:center;width:fit-content;white-space:nowrap;background:#ff4961;color:white;padding:0.2rem 0.3rem;font-size:0.75rem !important;border-radius:4px}";
const IrNewBadgeStyle0 = irNewBadgeCss;

const IrNewBadge = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'd76e911f386ebcbb8c1af1488e9361e388bce4c3' }, index.h("span", { key: 'b4ee4a63a29c4bf0e6d5f18cfc8b141928d8acac', class: "new-badge" }, "new")));
    }
};
IrNewBadge.style = IrNewBadgeStyle0;

const irPriceInputCss = ".sc-ir-price-input-h{display:block;--ir-input-border-color:#cacfe7;flex:1 1 0%}.sc-ir-price-input-h .input-group-text.sc-ir-price-input{border-color:var(--ir-input-border-color)}.sc-ir-price-input-h .form-control.sc-ir-price-input,.currency-label.sc-ir-price-input{font-size:14px !important}.ir-bl-lbl-none.sc-ir-price-input,.ir-bl-input-none.sc-ir-price-input{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.rate-input.sc-ir-price-input:read-only{background:white !important}.ir-br-lbl-none.sc-ir-price-input,.ir-br-input-none.sc-ir-price-input{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}.ir-br-none.sc-ir-price-input{border-right:none}.ir-bl-none.sc-ir-price-input{border-left:none}.rate-input-container.sc-ir-price-input{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1;padding:0 !important}[class='special-style'].sc-ir-price-input-h .rate-input.sc-ir-price-input{background:black !important}.rate-input.sc-ir-price-input{font-size:0.875rem;line-height:0;padding:0;height:0;box-sizing:border-box;border-left:0;padding-left:0px !important;border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.currency-label.with-label.sc-ir-price-input{border-radius:0}.currency-label.sc-ir-price-input{box-sizing:border-box;color:#3b4781;border:1px solid #cacfe7;font-size:0.875rem;height:2rem;background:white;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;pointer-events:none;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.currency-label.disabled.sc-ir-price-input,.rate-input.sc-ir-price-input:disabled{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.price-input-group.sc-ir-price-input:focus-within .currency-label.sc-ir-price-input{border-top:1px solid #1e9ff2;border-bottom:1px solid #1e9ff2;border-left:1px solid #1e9ff2}[data-state='error'].sc-ir-price-input-h .currency-label.sc-ir-price-input,[data-state='error'].sc-ir-price-input-h .rate-input.sc-ir-price-input,.error.sc-ir-price-input{border-color:var(--red, #ff4961) !important}.price-input.sc-ir-price-input:focus{border-right-width:1px !important}.is-invalid.sc-ir-price-input{background-image:none !important}";
const IrPriceInputStyle0 = irPriceInputCss;

const IrPriceInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "textChange", 7);
        this.inputBlur = index.createEvent(this, "inputBlur", 7);
        this.inputFocus = index.createEvent(this, "inputFocus", 7);
    }
    get el() { return index.getElement(this); }
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
            this.id = v4.v4();
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
        this.mask = index$2.IMask(this.inputRef, maskOpts);
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
        return (index.h("fieldset", { key: 'b6c03080fbad9d60181e6687179f93b56d1d7a64', class: `${this.containerClassname} input-group price-input-group m-0 p-0 ` }, this.label && (index.h("div", { key: 'eedc77b13500cb7469542a96e02eb1625f623ace', class: `input-group-prepend ${this.labelContainerClassname}` }, index.h("span", { key: 'b2661b6ccee5940e785d95b6825f5552b762ca48', class: `input-group-text 
                ${this.labelStyle}
              ${this.hasSpecialClass('ir-bl-lbl-none') ? 'ir-bl-lbl-none' : ''}
              ${this.hasSpecialClass('ir-br-lbl-none') ? 'ir-br-lbl-none' : ''}
              ${this.hasSpecialClass('ir-br-none') ? 'ir-br-none' : ''} 
              ${this.hasSpecialClass('ir-bl-none') ? 'ir-bl-none' : ''} 
              ` }, index.h("label", { key: 'b684e9c6f244e059b704745e8611ff4c7bdcd3e9', class: 'p-0 m-0 ', htmlFor: this.id }, this.label)))), index.h("div", { key: '7c780da561b78dbefb1eb3dfe2d4205675112f02', class: "position-relative has-icon-left rate-input-container" }, this.currency && (index.h("div", { key: '87ab8327d928e549c822ab5a88f5e0b7a9723db2' }, index.h("span", { key: 'f3ebf7f0ab350afca3919ca143a09c0d2bacbfd9', class: `input-group-text ${this.disabled ? 'disabled' : ''} currency-label ${this.error ? 'error' : ''} ${this.label ? 'with-label' : ''}` }, this.currency))), index.h("input", { key: '484e5bcf2edc20f3b16dfbbd95b684b29d648995', ref: el => (this.inputRef = el), "data-testid": this.testId, disabled: this.disabled, id: this.id, class: `form-control input-sm rate-input 
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
        index.registerInstance(this, hostRef);
        this.checkChange = index.createEvent(this, "checkChange", 7);
    }
    get el() { return index.getElement(this); }
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
    radioBoxId = v4.v4();
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
        return (index.h("div", { key: '0c94a7ed0db3a6a06756449411c4384b4da9f440', class: "input-group" }, index.h("label", { key: 'd086ca6bd75bc11fad2b267af782d7c599880150', class: "check-container radio-container align-items-center m-0 py-0" }, index.h("span", { key: '875387bad42ce4126cb45e3f4e58fe962b3e5ce7' }, this.label), index.h("input", { key: '8f0e5e75196eefe106903ee02df943a45493fffc', class: "p-0 m-0", type: "radio", value: "000", name: this.el.name, title: "", onChange: () => {
                this.handleCheckChange();
            }, checked: this.currentChecked, ref: el => (this.radioRef = el) }), index.h("span", { key: '97435456d435e49b711cb37e66b9248756fb4a8f', class: "checkmark" }))));
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
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
    }
    open;
    booking;
    roomIdentifier;
    pool;
    closeModal;
    _id = `reallocation-form_${v4.v4()}`;
    render() {
        return (index.h("ir-drawer", { key: '540e7e31e48ad4c7a8f224bcd081a5a63b864ed1', label: "Reassign Unit", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && index.h("ir-reallocation-form", { key: 'ff579ae4c4299a3d551df53f308ae5bac1f2a506', pool: this.pool, formId: this._id, booking: this.booking, identifier: this.roomIdentifier }), index.h("div", { key: '47ceb5c2ddac7460aaeaed1842149b740224ffd8', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: '40dab849bf3cf38d7ee02699175b814813cb5da7', size: "medium", "data-drawer": "close", variant: "neutral", appearance: "filled" }, "Cancel"), index.h("ir-custom-button", { key: '21b72fa7c36a3b9f0affd281c9b177a0468066d2', form: this._id, size: "medium", loading: irInterceptor_store.isRequestPending('/ReAllocate_Exposed_Room'), type: "submit", variant: "brand" }, "Confirm"))));
    }
};
IrReallocationDrawer.style = IrReallocationDrawerStyle0;

const irReallocationFormCss = ".sc-ir-reallocation-form-h{display:block;height:100%;color:var(--ir-text-color, #1f2a37);font-family:var(--ir-font-family, 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif)}.reallocation-form.sc-ir-reallocation-form{display:flex;flex-direction:column;gap:0.75rem}.booking-summary.sc-ir-reallocation-form{display:flex;flex-direction:column;gap:0.5rem}.rateplan-details.sc-ir-reallocation-form{margin:0;font-weight:500;color:var(--wa-color-text-quiet, #4b5563)}.rateplan-details-unit.sc-ir-reallocation-form{font-weight:700;color:var(--wa-color-text-normal)}.date-picker-row.sc-ir-reallocation-form{display:flex;flex-wrap:wrap;gap:0.5rem;align-items:flex-end}.date-picker-row.sc-ir-reallocation-form .ir-custom-date-picker.sc-ir-reallocation-form{flex:1 1 220px}.error-message.sc-ir-reallocation-form{margin:0;margin-top:0.75rem;color:var(--ir-error-color, #c0392b);font-size:0.95rem}.room-type-list.sc-ir-reallocation-form{display:flex;flex-direction:column;gap:0.75rem}.arrow-container.sc-ir-reallocation-form{width:100%;display:flex;justify-content:center}.choice-row.sc-ir-reallocation-form{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.room-type-name.sc-ir-reallocation-form{font-weight:600;color:var(--ir-heading-color, #111827)}.physical-room.sc-ir-reallocation-form{display:flex;align-items:center;font-size:0.95rem;padding-inline-start:1rem}.physical-room.sc-ir-reallocation-form::part(label){display:flex;align-items:center}.physical-room.sc-ir-reallocation-form+.physical-room.sc-ir-reallocation-form{margin-top:0.5rem}.physical-room--last.sc-ir-reallocation-form{margin-bottom:0.25rem}.physical-room.sc-ir-reallocation-form wa-select.sc-ir-reallocation-form{margin-left:1rem;min-width:220px}.custom-date-picker.sc-ir-reallocation-form{max-width:200px}.room-type-row.sc-ir-reallocation-form{margin-bottom:0.5rem}";
const IrReallocationFormStyle0 = irReallocationFormCss;

const IrReallocationForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
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
    bookingService = new booking_service.BookingService();
    eventsService = new events_service.EventsService();
    componentWillLoad() {
        this.room = this.getRoom();
        this.date = moment.hooks(this.room.from_date, 'YYYY-MM-DD');
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
        booking_service.resetBookingStore(false);
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
            to_date: this.date.clone().add(booking.calculateDaysBetweenDates(this.room.from_date, this.room.to_date), 'days').format('YYYY-MM-DD'),
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
            if (error instanceof index$1.ZodError) {
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
        const roomTypesSource = calendarData.calendar_data?.property?.roomtypes;
        const mealPlanResult = utils.checkMealPlan({
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
            return (index.h("div", { class: "drawer__loader-container" }, index.h("ir-spinner", null)));
        }
        return (index.h("form", { id: this.formId, class: "reallocation-form", onSubmit: e => {
                e.preventDefault();
                this.reallocateUnit();
            } }, index.h("div", { class: "booking-summary" }, index.h("ir-date-view", { from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false })), index.h("div", null, index.h("wa-callout", { size: "small", appearance: "filled", variant: "neutral" }, index.h("p", { style: { padding: '0', margin: '0' } }, index.h("span", { class: "rateplan-details" }, this.room.roomtype.name, " ", this.room.rateplan.short_name, " ", this.room.rateplan.is_non_refundable ? locales_store.locales.entries.Lcz_NonRefundable : '', ' ', index.h("span", { class: "rateplan-details-unit" }, this.room.unit.name)))), this.errors?.roomtype_id && index.h("p", { class: "error-message" }, "Please select a room"), this.roomTypes.length === 0 ? (index.h("ir-empty-state", { style: { marginTop: '20vh' } })) : (index.h(index.Fragment, null, index.h("div", { class: "arrow-container" }, index.h("svg", { height: 30, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, index.h("path", { d: "M297.4 566.6C309.9 579.1 330.2 579.1 342.7 566.6L502.7 406.6C515.2 394.1 515.2 373.8 502.7 361.3C490.2 348.8 469.9 348.8 457.4 361.3L352 466.7L352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 466.7L182.6 361.3C170.1 348.8 149.8 348.8 137.3 361.3C124.8 373.8 124.8 394.1 137.3 406.6L297.3 566.6z" }))), index.h("wa-callout", { size: "small", appearance: "filled", variant: "neutral" }, index.h("wa-radio-group", { onchange: e => {
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
            return (index.h(index.Fragment, null, index.h("div", { key: `roomTypeRow-${roomType.id}`, class: `room-type-row` }, index.h("div", { class: 'choice-row' }, index.h("span", { class: "room-type-name" }, roomType.name))), units.map((room, j) => {
                const isLastUnit = j === units.length - 1;
                const showMealPlanSelect = this.selectedUnit?.unit_id === room.id && Array.isArray(this.mealPlanOptions) && this.mealPlanOptions.length > 0;
                return (index.h("wa-radio", { value: `${roomType.id}_${room.id}`, checked: this.selectedUnit?.unit_id === room.id, key: `physicalRoom-${room.id}-${j}`, class: `physical-room${isLastUnit ? ' physical-room--last' : ''}` }, index.h("span", null, room.name), showMealPlanSelect && (index.h("ir-validator", { value: this.selectedUnit?.rateplan_id, schema: SelectedUnitSchema.shape.rateplan_id }, index.h("wa-select", { size: "small", placeholder: "Select a new rateplan...", value: this.selectedUnit?.rateplan_id?.toString(), onchange: e => {
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                        this.updateSelectedUnit({
                            rateplan_id: Number(e.target.value),
                        });
                    } }, this.mealPlanOptions.map(option => {
                    return index.h("wa-option", { value: option.value?.toString() }, option.text + `${option.custom_text ? ' | ' : ''}${option.custom_text}`);
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
        index.registerInstance(this, hostRef);
        this.loadingChanged = index.createEvent(this, "loadingChanged", 7);
        this.closeDrawer = index.createEvent(this, "closeDrawer", 7);
        this.toast = index.createEvent(this, "toast", 7);
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
    propertyService = new property_service.PropertyService();
    toDateRef;
    componentWillLoad() {
        this.form = {
            ...this.form,
            property_id: calendarData.calendar_data.property?.id ?? calendarData.calendar_data.id ?? null,
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
        if (from && to && moment.hooks(from).isAfter(to, 'day')) {
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
            const propertyId = this.form.property_id ?? calendarData.calendar_data.property?.id ?? calendarData.calendar_data.id ?? undefined;
            const result = property_service.ExposedRectifierParamsSchema.safeParse({
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
        const roomTypes = calendarData.calendar_data.property?.roomtypes ?? [];
        return (index.h(index.Host, { key: '3005e1d833dd29ccbd14a52672de8ca179e65dad' }, index.h("form", { key: '5faac7b23062267110715547ea7b73ddda004653', onSubmit: e => {
                e.preventDefault();
                this.handleSubmit();
            }, class: "ir-rectifier__form", id: this.formId }, index.h("wa-callout", { key: 'a9bb416096193aad48b50d02eb2064945969faa5', size: "small", appearance: "filled", variant: "warning" }, index.h("wa-icon", { key: '56fd99d0367ab6be78fd6ee4c42e8da3a1ea09e8', slot: "icon", name: "triangle-exclamation" }), "This will update the total availability of the select room types by calculating: No. of physical rooms - Booked - Blocked - Pending"), index.h("div", { key: '97b32613fe3a970adf4a84029ea6004f69579ff5', class: "ir-rectifier__roomtypes" }, roomTypes.map(roomtype => {
            const roomTypeId = Number(roomtype?.id);
            if (!Number.isFinite(roomTypeId)) {
                return null;
            }
            const isSelected = this.form.room_type_ids.includes(roomTypeId);
            return (index.h("wa-checkbox", { class: "ir-rectifier__roomtype-checkbox", checked: isSelected, onchange: e => {
                    const checked = e.target.checked;
                    this.updateRoomTypeSelection(roomTypeId, checked);
                } }, roomtype.name));
        })), this.showRoomTypeError && index.h("p", { key: '54264c4ea290b7e9573795a3aff5cb08fb31ff15', class: "text-danger m-0" }, "Please select at least one room type."), index.h("div", { key: 'c51f558c39c766a53917d2ea96ad881c81e52a64', class: "ir-rectifier__date-range" }, index.h("ir-validator", { key: 'af9ffc5b20b3302ae9979d61f6dbf7a1ffb46053', value: this.form.from ?? null, schema: property_service.ExposedRectifierParamsSchema.shape.from, autovalidate: this.autoValidate }, index.h("ir-custom-date-picker", { key: '202567ae31ceda6c048c63169d28eb30df08ea4d', class: "ir-rectifier__date-picker ir-rectifier__date-picker--from", label: "Date from", emitEmptyDate: true, date: this.form.from, onDateChanged: e => {
                const from = e.detail.start?.format('YYYY-MM-DD') ?? null;
                this.updateForm(this.normalizeDateRange({ from }));
                requestAnimationFrame(() => this.toDateRef?.openDatePicker());
            } })), index.h("ir-validator", { key: '28499ed70d55d8074915b80c2ac8da8d3a44fa73', value: this.form.to ?? null, schema: property_service.ExposedRectifierParamsSchema.shape.to, autovalidate: this.autoValidate }, index.h("ir-custom-date-picker", { key: '4b07ecc505fc9f1b4cf2add83e44472867fbbe76', class: "ir-rectifier__date-picker ir-rectifier__date-picker--to", label: "To (inclusive)", emitEmptyDate: true, disabled: !this.form.from, ref: el => (this.toDateRef = el), date: this.form.to, minDate: this.form.from, onDateChanged: e => {
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
        index.registerInstance(this, hostRef);
        this.closeRoomNightsDialog = index.createEvent(this, "closeRoomNightsDialog", 7);
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
    bookingService = new booking_service.BookingService();
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
                const lastDay = this.selectedRoom?.days[this.selectedRoom.days.length - 1];
                if (!moment.hooks(this.selectedRoom.to_date, 'YYYY-MM-DD').isBefore(moment.hooks(this.toDate, 'YYYY-MM-DD'))) {
                    const variation = await this.fetchBookingAvailability(this.fromDate, this.selectedRoom.days[0].date, this.selectedRoom.rateplan.id);
                    const newDatesArr = utils.getDaysArray(this.selectedRoom.days[0].date, this.fromDate);
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
                    const variation = await this.fetchBookingAvailability(this.selectedRoom.to_date, moment.hooks(this.toDate, 'YYYY-MM-DD').format('YYYY-MM-DD'), this.selectedRoom.rateplan.id);
                    const newDatesArr = utils.getDaysArray(lastDay.date, this.toDate);
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
        const currency_symbol = this.bookingEvent.currency.symbol;
        // const currency_symbol = getCurrencySymbol(this.bookingEvent.currency.code);
        return (index.h("div", { class: 'mt-2 m-0' }, this.rates?.map((day, index$1) => (index.h("div", { class: 'row m-0 mt-1 align-items-center' }, index.h("p", { class: 'col-2 m-0 p-0' }, utils.convertDatePrice(day.date)), this.renderRateFields(index$1, currency_symbol, day))))));
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
                to_date: moment.hooks(this.dates.to_date).format('YYYY-MM-DD'),
                from_date: moment.hooks(this.dates.from_date).format('YYYY-MM-DD'),
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
        if (!this.bookingEvent) {
            return (index.h("div", { class: "loading-container" }, index.h("ir-loading-screen", null)));
        }
        return (index.h("div", { class: "sheet-container" }, index.h("ir-title", { class: "p-1 sheet-header", onCloseSideBar: () => this.closeRoomNightsDialog.emit({ type: 'cancel', pool: this.pool }), label: `${locales_store.locales.entries.Lcz_AddingRoomNightsTo} ${this.selectedRoom?.roomtype?.name} ${(this.selectedRoom?.unit).name}`, displayContext: "sidebar" }), index.h("section", { class: 'text-left px-1 pt-0 sheet-body' }, index.h("p", { class: 'font-medium-1' }, `${locales_store.locales.entries.Lcz_Booking}#`, " ", this.bookingNumber), this.initialLoading ? (index.h("p", { class: 'mt-2 text-secondary' }, locales_store.locales.entries['Lcz_CheckingRoomAvailability '])) : (index.h(index.Fragment, null, index.h("p", { class: 'font-weight-bold font-medium-1' }, `${utils.formatDate(moment.hooks(this.dates.from_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')} - ${utils.formatDate(moment.hooks(this.dates.to_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')}`), index.h("p", { class: 'font-medium-1 mb-0' }, `${this.selectedRoom.rateplan.name}`, " ", this.selectedRoom.rateplan.is_non_refundable && index.h("span", { class: 'irfontgreen' }, locales_store.locales.entries.Lcz_NonRefundable)), (this.inventory === 0 || this.inventory === null) && index.h("p", { class: "font-medium-1 text danger" }, locales_store.locales.entries.Lcz_NoAvailabilityForAdditionalNights), this.selectedRoom.rateplan.custom_text && index.h("p", { class: 'text-secondary mt-0' }, this.selectedRoom.rateplan.custom_text), booking_service.booking_store.roomTypes?.length > 0 && (index.h("wa-callout", { size: "small", variant: "neutral", appearance: "filled", class: "mt-1 booking-editor-header__tax_statement" }, calendarData.calendar_data.tax_statement)), this.renderDates()))), index.h("section", { class: 'sheet-footer' }, index.h("ir-button", { btn_color: "secondary", btn_disabled: this.isLoading, text: locales_store.locales?.entries.Lcz_Cancel, class: "full-width", btn_styles: "justify-content-center", onClickHandler: () => this.closeRoomNightsDialog.emit({ type: 'cancel', pool: this.pool }) }), this.inventory > 0 && this.inventory !== null && (index.h("ir-button", { isLoading: this.isLoading, text: locales_store.locales?.entries.Lcz_Confirm, btn_disabled: this.isButtonDisabled(), class: "full-width", btn_styles: "justify-content-center", onClickHandler: this.handleRoomConfirmation.bind(this) })))));
    }
};
IrRoomNights.style = IrRoomNightsStyle0 + IrRoomNightsStyle1;

const irSuccessLoaderCss = ":host{display:block}.spinner{transform-origin:center;animation:spinner_svv2 0.75s infinite linear}@keyframes spinner_svv2{100%{transform:rotate(360deg)}}";
const IrSuccessLoaderStyle0 = irSuccessLoaderCss;

const IrSuccessLoader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.loaderComplete = index.createEvent(this, "loaderComplete", 7);
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
        return (index.h(index.Host, { key: 'a099620c21cec2e74bf3ebc349555aed0e646395' }, this.phase === 'spinner' ? index.h("wa-spinner", null) : index.h("wa-icon", { part: "check", name: "check", style: { color: 'var(--wa-color-success-fill-loud,#45b16d)' } })));
    }
    static get watchers() { return {
        "active": ["onActiveChange"],
        "spinnerDuration": ["onDurationChange"],
        "successDuration": ["onDurationChange"]
    }; }
};
IrSuccessLoader.style = IrSuccessLoaderStyle0;

exports.igl_blocked_date_drawer = IglBlockedDateDrawer;
exports.igl_booking_event = IglBookingEvent;
exports.igl_bulk_operations_drawer = IglBulkOperationsDrawer;
exports.igl_cal_body = IglCalBody;
exports.igl_cal_footer = IglCalFooter;
exports.igl_cal_header = IglCalHeader;
exports.igl_hk_issues_dialog = IglHkIssuesDialog;
exports.igl_housekeeping_dialog = IglHousekeepingDialog;
exports.igl_legend = IglLegend;
exports.igl_reallocation_dialog = IglReallocationDialog;
exports.igl_split_booking = IglSplitBooking;
exports.igl_tba_category_view = IglTbaCategoryView;
exports.igl_to_be_assigned = IglToBeAssigned;
exports.ir_interactive_title = IrInteractiveTitle;
exports.ir_modal = IrModal;
exports.ir_new_badge = IrNewBadge;
exports.ir_price_input = IrPriceInput;
exports.ir_radio = IrRadio;
exports.ir_reallocation_drawer = IrReallocationDrawer;
exports.ir_reallocation_form = IrReallocationForm;
exports.ir_rectifier = IrRectifier;
exports.ir_room_nights = IrRoomNights;
exports.ir_success_loader = IrSuccessLoader;

//# sourceMappingURL=igl-blocked-date-drawer_23.cjs.entry.js.map