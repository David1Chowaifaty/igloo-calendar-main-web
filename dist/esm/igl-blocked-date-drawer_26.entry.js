import { r as registerInstance, c as createEvent, h, a as getElement, F as Fragment, H as Host, f as forceUpdate } from './index-CeHdrJeH.js';
import { B as BookingService, b as booking_store, r as resetBookingStore } from './booking.service-CMmse-Np.js';
import { g as getReleaseHoursString, i as isBlockUnit, h as showToast, w as checkMealPlan, x as isWeekend, d as dateToFormattedString, o as getDaysArray } from './utils-BtgW0txG.js';
import { t } from './t-Bk78Wumj.js';
import { i as buildSplitIndex, j as getSplitRole, c as calculateDaysBetweenDates, t as transformNewBooking, e as calendar_dates, a as compareTime, b as createDateWithOffsetAndHour } from './booking-DuWdYels.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { E as EventsService } from './events.service-CQ0RDmmU.js';
import { l as locales } from './locales.store-CXJn6ls-.js';
import { c as calendar_data } from './calendar-data-BZeaTRgj.js';
import { C as CELL_WIDTH, E as EVENT_HEIGHT, g as getEventTopWithinRow, c as computeEventHorizontalGeometry, t as toPhysicalLeft, R as ROOM_HEADER_WIDTH, s as snapEventLeft, a as getTotalGridWidth, h as handleUnAssignedDatesChange, b as getUnassignedDates } from './calendar-grid-ClupdXwR.js';
import { a as formatBookingNumber, f as formatAmount, c as formatNumber, b as formatCount, d as formatPercent } from './number-DegV2dS7.js';
import { L as LocaleController } from './locale.controller-DKzzcKD9.js';
import { c as isRtlDirection } from './direction-h66wLQy4.js';
import { _ as _formatTime } from './functions-D_076Gzf.js';
import { f as formatDate } from './ir-date-DFR8GVLZ.js';
import { T as ToBeAssignedService } from './toBeAssigned.service-GBkyIvtH.js';
import { H as HouseKeepingService } from './housekeeping.service-X6dZ6dBt.js';
import { P as PropertyService, E as ExposedRectifierParamsSchema } from './index-rQF32beg.js';
import { n as numberType, o as objectType, c as coerce, Z as ZodError } from './types-BG9uwIsj.js';
import { i as isRequestPending } from './ir-interceptor.store-302gZvQv.js';
import { v as v4 } from './v4-CK3_k8jD.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './IBooking-B-QQODPH.js';
import './commonSchemas-DZl_Ygcg.js';
import './booking.dto-FOZcMojD.js';
import './type-DUaIPoJQ.js';
import './language-observer-CHgzsZkY.js';

const iglBlockedDateDrawerCss = () => `.sc-igl-blocked-date-drawer-h{display:block;text-align:start}`;

const IglBlockedDateDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.blockedDateDrawerClosed = createEvent(this, "blockedDateDrawerClosed");
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
        return (h("ir-drawer", { key: '272efb2dbb063965b1d74604a329af907862d575', label: this.label, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDrawer();
            }, open: this.open }, this.open && (h("igl-block-dates-view", { key: '5ec2a99acdf7f573664da3709a08af0811ea756a', onDataUpdateEvent: e => (this.blockDatesData = { ...e.detail.data }), fromDate: this.fromDate, toDate: this.toDate })), h("div", { key: 'b61654cd2183a03568f213ca595e1072b4abdd76', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '666b358e80bc536957bf982f89171862cb0edbe6', "data-drawer": "close", size: "m", appearance: "filled", variant: "neutral" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '6d74d5bbb5a04a1895eb836f2f974ed5dedaaa47', loading: this.isLoading, onClickHandler: () => {
                this.handleBlockDate();
            }, size: "m", appearance: "accent", variant: "brand" }, t('Lcz_Save', { fallback: 'Save' })))));
    }
};
IglBlockedDateDrawer.style = iglBlockedDateDrawerCss();

/**
 * Edge auto-scroll for pointer drags inside a scrollable container.
 *
 * While a drag is in progress the owning component feeds pointer coordinates in through
 * `update()`. Whenever the pointer sits inside a "hot zone" measured inward from one of the
 * container's edges, an animation-frame loop scrolls the container in that direction, ramping
 * from a standstill at the far side of the zone up to `maxSpeed` at the very edge.
 *
 * The scroller does **not** move the dragged element itself. It only reports, through
 * `offset`, how far the container has actually scrolled since `start()`. Callers that position
 * their dragged element from viewport-space pointer deltas (`clientX - initialX`) must add that
 * offset back in, otherwise the element stays glued to the scrolling content and slides out from
 * under the cursor. `onScroll` fires on every frame that moved so the caller can re-apply the
 * position even while the pointer is stationary and no `mousemove` is being dispatched.
 *
 * ## Direction
 *
 * Everything here is in *physical* pixels and needs no LTR/RTL branch:
 *
 * - `scrollLeft` increases toward the physical right in both directions. RTL simply uses a
 *   non-positive range (`-(scrollWidth - clientWidth) .. 0`) in modern engines — the convention
 *   `igloo-calendar`'s `scrollToElement()` already assumes — so a `scrollLeft` *delta* is
 *   physical either way, and so is `offset.x`.
 * - `getBoundingClientRect()` only ever reports physical edges, so the hot-zone tests are
 *   physical too.
 *
 * The one direction-aware input is `inlineStartInset`: a sticky column pinned with
 * `inset-inline-start: 0` overlays the container's physical *left* edge in LTR and its physical
 * *right* edge in RTL. Callers pass the column's width plus which physical edge it currently
 * covers, so the hot zone can start at the real edge of the scrollable content rather than
 * underneath the sticky overlay.
 */
/** Hot-zone depth in px, measured inward from each edge of the container. */
const DEFAULT_EDGE_SIZE = 60;
/** Peak scroll speed in px per animation frame (~840px/s at 60fps). */
const DEFAULT_MAX_SPEED = 14;
class DragAutoScroller {
    container;
    scrollX;
    scrollY;
    edgeSize;
    maxSpeed;
    inlineStartInset;
    inlineStartEdge;
    getBounds;
    onScroll;
    /** Container scroll position captured by `start()`, the baseline `offset` is measured against. */
    origin = { x: 0, y: 0 };
    /** Last pointer position handed to `update()`, in viewport coordinates. */
    pointer = null;
    frameId = null;
    constructor(options) {
        this.container = options.container;
        this.scrollX = options.axes?.x ?? false;
        this.scrollY = options.axes?.y ?? false;
        this.edgeSize = options.edgeSize ?? DEFAULT_EDGE_SIZE;
        this.maxSpeed = options.maxSpeed ?? DEFAULT_MAX_SPEED;
        this.inlineStartInset = options.inlineStartInset ?? 0;
        this.inlineStartEdge = options.inlineStartEdge ?? 'left';
        this.getBounds = options.getBounds;
        this.onScroll = options.onScroll;
    }
    /** Snapshots the container's current scroll position as the zero point for `offset`. */
    start() {
        this.origin = { x: this.container.scrollLeft, y: this.container.scrollTop };
        this.pointer = null;
    }
    /**
     * How far the container has scrolled since `start()`, in physical px.
     *
     * Read live rather than accumulated per frame, so scrolling from any other source during the
     * drag — a mouse wheel, a trackpad swipe, the calendar jumping to a date — is included too.
     */
    get offset() {
        return {
            x: this.container.scrollLeft - this.origin.x,
            y: this.container.scrollTop - this.origin.y,
        };
    }
    /** Records the pointer position and starts or stops the scroll loop to match. */
    update(clientX, clientY) {
        this.pointer = { x: clientX, y: clientY };
        const { x, y } = this.computeVelocity();
        if (x === 0 && y === 0) {
            this.cancelFrame();
            return;
        }
        if (this.frameId === null) {
            this.frameId = requestAnimationFrame(this.tick);
        }
    }
    /** Stops the scroll loop. Safe to call repeatedly, and when no drag is in progress. */
    stop() {
        this.cancelFrame();
        this.pointer = null;
    }
    cancelFrame() {
        if (this.frameId !== null) {
            cancelAnimationFrame(this.frameId);
            this.frameId = null;
        }
    }
    tick = () => {
        this.frameId = null;
        const velocity = this.computeVelocity();
        if (velocity.x === 0 && velocity.y === 0) {
            return;
        }
        // Assign then read back: the browser clamps at the scroll extents, so the applied delta is
        // the real one and `offset` never runs past the end of the content.
        const bounds = this.getBounds?.() ?? {};
        const before = { x: this.container.scrollLeft, y: this.container.scrollTop };
        if (velocity.x !== 0) {
            this.container.scrollLeft = clampToRange(before.x + velocity.x, bounds.x);
        }
        if (velocity.y !== 0) {
            this.container.scrollTop = clampToRange(before.y + velocity.y, bounds.y);
        }
        const moved = this.container.scrollLeft !== before.x || this.container.scrollTop !== before.y;
        if (moved) {
            this.onScroll?.(this.offset);
        }
        // Keep going even on a frame that didn't move: the pointer is still in the hot zone, and the
        // axis that hit its limit may free up again if the content grows (lazy-loaded days).
        this.frameId = requestAnimationFrame(this.tick);
    };
    /** Scroll speed for this frame, in px, derived from the pointer's distance to each edge. */
    computeVelocity() {
        if (!this.pointer) {
            return { x: 0, y: 0 };
        }
        const rect = this.container.getBoundingClientRect();
        const startInset = this.inlineStartEdge === 'left' ? this.inlineStartInset : 0;
        const endInset = this.inlineStartEdge === 'right' ? this.inlineStartInset : 0;
        return {
            x: this.scrollX ? this.axisVelocity(this.pointer.x, rect.left + startInset, rect.right - endInset) : 0,
            y: this.scrollY ? this.axisVelocity(this.pointer.y, rect.top, rect.bottom) : 0,
        };
    }
    /**
     * Signed speed along one axis: negative near `min`, positive near `max`, zero in between.
     * A pointer dragged past an edge entirely keeps the full `maxSpeed` rather than falling off.
     */
    axisVelocity(position, min, max) {
        // A zone deeper than half the axis would make the two overlap, with no neutral middle.
        const zone = Math.min(this.edgeSize, Math.max((max - min) / 2, 0));
        if (zone <= 0) {
            return 0;
        }
        if (position < min + zone) {
            const intensity = Math.min((min + zone - position) / zone, 1);
            return -this.maxSpeed * intensity;
        }
        if (position > max - zone) {
            const intensity = Math.min((position - (max - zone)) / zone, 1);
            return this.maxSpeed * intensity;
        }
        return 0;
    }
}
/** Clamps to an optional `[min, max]`; a range whose min exceeds its max collapses to its min. */
function clampToRange(value, range) {
    if (!range) {
        return value;
    }
    const [min, max] = range;
    return Math.min(Math.max(value, min), Math.max(min, max));
}

const iglBookingEventCss = () => `.sc-igl-booking-event-h{display:block;position:absolute;--ota-bar-width:2px;--stripe-period:20px;--split-border-width:5px;--split-border-color:var(--wa-color-text-normal)}.bookingEventBase.sc-igl-booking-event{position:absolute;width:100%;height:100%;border-radius:4px;background-color:rgb(49, 190, 241);transform:skewX(-22deg);cursor:pointer}.bookingEventBase.leftSplit.sc-igl-booking-event{border-inline-start:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.rightSplit.sc-igl-booking-event{border-inline-end:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.fullSplit.sc-igl-booking-event{border-inline-end:var(--split-border-width) solid var(--split-border-color);border-inline-start:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.fullSplit.skewedLeft.sc-igl-booking-event,.bookingEventBase.leftSplit.skewedLeft.sc-igl-booking-event{border-inline-start:0}.bookingEventBase.fullSplit.skewedRight.sc-igl-booking-event,.bookingEventBase.leftSplit.skewedRight.sc-igl-booking-event{border-inline-end:0}.bookingEventBase.pending.sc-igl-booking-event{border-width:2px;border-style:dashed;border-color:var(--wa-color-success-fill-loud)}.bookingEvent.sc-igl-booking-event{cursor:pointer}.ota-booking-event.sc-igl-booking-event{border-width:var(--ota-bar-width) !important}.bookingEventHiddenBase.sc-igl-booking-event{position:absolute;top:0;inset-inline-start:-4px;width:calc(100% + 8px)}.bookingEventBase.skewedLeft.sc-igl-booking-event::before,.bookingEventBase.skewedRight.sc-igl-booking-event::before{content:'';position:absolute;top:0;bottom:0;width:50%;height:100%;inset-inline-start:-4px;background-color:var(--ir-event-bg);border-radius:4px}.bookingEventBase.skewedLeft.sc-igl-booking-event::before{transform-origin:right;transform:skewX(22deg);border-start-start-radius:0;border-end-start-radius:0}.bookingEventBase.fullSplit.skewedLeft.sc-igl-booking-event::before,.bookingEventBase.leftSplit.skewedLeft.sc-igl-booking-event::before{border-inline-start:var(--split-border-width) solid var(--split-border-color) !important;z-index:2;background-color:transparent}.bookingEventBase.fullSplit.skewedRight.sc-igl-booking-event::before,.bookingEventBase.leftRight.skewedRight.sc-igl-booking-event::before{border-inline-end:var(--split-border-width) solid var(--split-border-color) !important;z-index:2;background-color:transparent}.bookingEventBase.skewedRight.sc-igl-booking-event::before{transform-origin:left;transform:skewX(22deg 0deg);border-start-end-radius:0;border-end-end-radius:0}.bookingEventBase.border.skewedLeft.sc-igl-booking-event::before{border:var(--ota-bar-width) solid #424242;border-inline-end:0;border-inline-start:0;border-start-end-radius:0;border-end-end-radius:0;top:calc(var(--ota-bar-width) * -1);height:20px;inset-inline-start:-4px}.bookingEventBase.border.skewedRight.sc-igl-booking-event::before{border:var(--ota-bar-width) solid #424242;border-inline-start:0;border-inline-end:0;border-start-start-radius:0;border-end-start-radius:0;top:calc(var(--ota-bar-width) * -1);height:20px;inset-inline-end:-4px}.bookingEventBase.striped-bar.fullSplit.skewedLeft.vertical.sc-igl-booking-event::after,.bookingEventBase.striped-bar.leftSplit.skewedLeft.vertical.sc-igl-booking-event::after{z-index:1;border-inline-start:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.striped-bar.fullSplit.skewedRight.vertical.sc-igl-booking-event::after,.bookingEventBase.striped-bar.rightSplit.skewedRight.vertical.sc-igl-booking-event::after{z-index:1;border-inline-end:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.striped-bar.vertical.sc-igl-booking-event::after{--stripe-angle:360deg}.bookingEventBase.striped-bar.sc-igl-booking-event::after{content:'';position:absolute;inset:0;border-radius:4px;background:repeating-linear-gradient(     var(--stripe-angle, 45deg),     var(--ir-event-bg) 0,     var(--ir-event-bg) calc(var(--stripe-period) / 2),     var(--ir-event-bg-stripe-color) calc(var(--stripe-period) / 2),     var(--ir-event-bg-stripe-color) var(--stripe-period)   );backface-visibility:hidden}.bookingEventBase.skewedRight.striped-bar.sc-igl-booking-event::after,.bookingEventBase.border.skewedRight.sc-igl-booking-event::after{inset-inline-end:-8px}.bookingEventBase.skewedLeft.striped-bar.sc-igl-booking-event::after,.bookingEventBase.border.skewedLeft.sc-igl-booking-event::after{inset-inline-start:-8px}.bookingEventBase.striped-bar.animated.sc-igl-booking-event::after{background-size:28.28px 28.28px;backface-visibility:hidden;animation:stripes 0.8s linear infinite;will-change:background-position}@keyframes stripes{0%{background-position:0 0}100%{background-position:28.28px 0}}.bookingEventDragHandle.sc-igl-booking-event{position:absolute;top:0;width:15px;height:100%;opacity:0.1;background-color:rgba(0, 0, 0, 0.15);transform:skewX(-22deg);border-radius:4px;cursor:pointer}.sc-igl-booking-event-h:hover .bookingEventDragHandle.sc-igl-booking-event{display:block;opacity:1}.newEvent.sc-igl-booking-event-h:hover .bookingEventDragHandle.sc-igl-booking-event{display:none;opacity:1}.leftSide.sc-igl-booking-event{left:0}.rightSide.sc-igl-booking-event{right:0}.leftSide.skewedLeft.sc-igl-booking-event{transform:skewX(0)}.rightSide.skewedRight.sc-igl-booking-event{transform:skewX(0)}.bookingEventTitle.sc-igl-booking-event{position:relative;top:2px;inset-inline-start:5px;max-width:calc(100% - 10px);color:#fff;font-size:0.8em;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;cursor:pointer}.legend_circle.sc-igl-booking-event{width:10px;height:10px;margin-block:3px;margin-inline:2px 3px;border:1px solid #fff;border-radius:100%}.noteIcon.sc-igl-booking-event{position:absolute;bottom:-8px;inset-inline-start:2px}.balanceIcon.sc-igl-booking-event{position:absolute;top:-8px;inset-inline-end:2px}.splitBooking.sc-igl-booking-event{border-inline-end:2px solid #000000}.bookingEventTitle.pending.sc-igl-booking-event{color:var(--wa-color-success-on-quiet) !important}[dir='rtl'].sc-igl-booking-event-h .bookingEventBase.sc-igl-booking-event{transform:skewX(22deg)}[dir='rtl'].sc-igl-booking-event-h .bookingEventDragHandle.sc-igl-booking-event{transform:skewX(22deg)}[dir='rtl'].sc-igl-booking-event-h .leftSide.skewedLeft.sc-igl-booking-event,[dir='rtl'].sc-igl-booking-event-h .rightSide.skewedRight.sc-igl-booking-event{transform:skewX(0)}[dir='rtl'].sc-igl-booking-event-h .bookingEventBase.skewedLeft.sc-igl-booking-event::before{transform-origin:left;transform:skewX(-22deg)}[dir='rtl'].sc-igl-booking-event-h .bookingEventBase.skewedRight.sc-igl-booking-event::before{transform-origin:right;transform:skewX(-22deg)}`;

const IglBookingEvent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hideBubbleInfo = createEvent(this, "hideBubbleInfo");
        this.updateEventData = createEvent(this, "updateEventData");
        this.dragOverEventData = createEvent(this, "dragOverEventData");
        this.showRoomNightsDialog = createEvent(this, "showRoomNightsDialog");
        this.showDialog = createEvent(this, "showDialog");
        this.resetStretchedBooking = createEvent(this, "resetStretchedBooking");
        this.updateBookingEvent = createEvent(this, "updateBookingEvent");
    }
    get element() { return getElement(this); }
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
                        this.reset(t('Lcz_OverlappingDates', { fallback: 'Overlapping Dates' }));
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
                                //     this.reset(t('Lcz_ThisUnitIsNotAvailable'));
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
            const data = await this.bookingService.getExposedBooking({ booking_nbr: this.bookingEvent.BOOKING_NUMBER, language: LocaleController.language });
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
                    description: t('Lcz_OTA_Modification_Alter'),
                    status: '200',
                };
                // return {
                //   description: `${t('Lcz_YouWillLoseFutureUpdates')}.`,
                //   status: '200',
                // };
            }
            else {
                if (hooks(from_date, 'YYYY-MM-DD').isSame(hooks(this.bookingEvent.FROM_DATE, 'YYYY-MM-DD')) &&
                    hooks(to_date, 'YYYY-MM-DD').isSame(hooks(this.bookingEvent.TO_DATE, 'YYYY-MM-DD'))) {
                    const initialRT = this.findRoomType(this.bookingEvent.PR_ID);
                    const targetRT = this.findRoomType(toRoomId);
                    if (initialRT === targetRT) {
                        return { description: `${t('Lcz_AreYouSureWantToMoveAnotherUnit')}?`, status: '200' };
                    }
                    else {
                        const mealPlans = checkMealPlan({
                            rateplan_id: this.bookingEvent.RATE_PLAN_ID,
                            roomTypeId: targetRT,
                            roomTypes: calendar_data?.property?.roomtypes,
                        });
                        return {
                            description: t('Lcz_OTA_Modification_Alter'),
                            status: '200',
                            newRatePlans: Array.isArray(mealPlans) ? mealPlans : undefined,
                            matchedRatePlan: Array.isArray(mealPlans) ? null : mealPlans,
                        };
                        // return {
                        //   description: `${t('Lcz_YouWillLoseFutureUpdates')} ${this.bookingEvent.origin ? this.bookingEvent.origin.Label : ''}. ${
                        //     t('Lcz_SameRatesWillBeKept') + '.'
                        //   }`,
                        //   status: '200',
                        // };
                    }
                }
                return { description: t('Lcz_CannotChangeCHBookings') + '.', status: '400' };
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
                        return { description: t('Lcz_ConfrmModiication') + '.', status: '200' };
                    }
                    return { description: `${t('Lcz_AreYouSureWantToMoveAnotherUnit')}?`, status: '200' };
                }
                else {
                    const mealPlans = checkMealPlan({
                        rateplan_id: this.bookingEvent.RATE_PLAN_ID,
                        roomTypeId: targetRT,
                        roomTypes: calendar_data?.property?.roomtypes,
                    });
                    return {
                        description: t('Lcz_SameRatesWillBeKept'),
                        status: '200',
                        newRatePlans: Array.isArray(mealPlans) ? mealPlans : undefined,
                        matchedRatePlan: Array.isArray(mealPlans) ? null : mealPlans,
                    };
                }
            }
            return { description: t('Lcz_ConfrmModiication') + '.', status: '200' };
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
        return !this.isNewEvent() && !!this.bookingEvent.defaultDates && hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE));
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
                            width: this.element.offsetWidth,
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
            foreground: ''};
        const isDepartureAfterHotelCheckout = this.isDepartureAfterHotelCheckout();
        backgroundColor = this.bookingEvent.STATUS === 'CHECKED-OUT' ? legend.color : backgroundColor;
        const splitRole = this.computeSplitRole();
        const pending = this.bookingEvent.STATUS === 'PENDING-CONFIRMATION' && this.bookingEvent.ID !== 'NEW_TEMP_EVENT';
        const startsAfterWindowOpen = this.startsAfterWindowOpen();
        const endsBeforeWindowClose = !this.isNewEvent() && !!this.bookingEvent.defaultDates && hooks(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE));
        return (h(Host, { key: '135b282592cee29a65292cbb79ae577a0365fdf6', class: `bookingEvent  ${this.isNewEvent() || this.isHighlightEventType() ? 'newEvent' : ''} ${legend.clsName} `, style: this.getPosition(), id: bar, dir: isRtlDirection(locales.direction) ? 'rtl' : 'ltr' }, h("div", { key: 'fdb5f7f32a60ca926e9427a69e70f9eb5602bf10', "data-identifier": this.bookingEvent?.IDENTIFIER, "data-status": this.bookingEvent.STATUS, class: {
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
            }, onTouchStart: event => this.startDragging(event, 'move'), onMouseDown: event => this.startDragging(event, 'move') }), isDepartureAfterHotelCheckout && (h("wa-tooltip", { key: '1e7eef60f522a56a91d26bbc187c92a9fd1006a4', for: lateCheckout }, t('Lcz_DepartureTime', { fallback: 'Departure time:' }), " ", this.bookingEvent.DEPARTURE_TIME?.description)), balanceNode && (h("wa-tooltip", { key: '4fea2c80105ce284c87db8e49f50d5156e605442', for: balance }, t('Lcz_Balance', { fallback: 'Balance' }) + ":", " ", formatAmount(calendar_data.property.currency.symbol, this.bookingEvent.BALANCE))), noteNode ? h("div", { class: "legend_circle noteIcon", style: { backgroundColor: noteNode.color } }) : null, (balanceNode || isDepartureAfterHotelCheckout) && (h("div", { key: '3b4518db2e9963e154aed740ed92e6b3c529fca3', class: "balanceIcon d-flex" }, isDepartureAfterHotelCheckout && h("div", { key: '8bd152fa65d2ff5f8f4cc8d5c3673f3604419b4f', id: lateCheckout, class: "legend_circle", style: { backgroundColor: '#999999' } }), balanceNode ? h("div", { id: balance, class: "legend_circle", style: { backgroundColor: '#f34752' } }) : null)), h("div", { key: 'acd4dc86c3cdd16c0b07ca6393f333b26597cbe9', class: `bookingEventTitle ${pending ? 'pending' : ''}`, style: !pending && { color: foreground }, onTouchStart: event => this.startDragging(event, 'move'), onMouseDown: event => this.startDragging(event, 'move') }, this.getBookedBy(), this.renderEventBookingNumber()), h(Fragment, { key: 'a4c05ba4c73f79d8b8368a560545bcfebf79b685' }, h("div", { key: '70a7a15764fdf2db8b1c1ab80cb5e54c516934c0', class: `bookingEventDragHandle leftSide ${startsAfterWindowOpen ? 'skewedLeft' : ''} ${endsBeforeWindowClose ? 'skewedRight' : ''}`, onTouchStart: event => this.startDragging(event, 'leftSide'), onMouseDown: event => this.startDragging(event, 'leftSide') }), h("div", { key: '6c1c9dd0171b8f8793fcd96b4953945583ff7fe8', class: `bookingEventDragHandle rightSide ${startsAfterWindowOpen ? 'skewedLeft' : ''} ${endsBeforeWindowClose ? 'skewedRight' : ''}`, onTouchStart: event => this.startDragging(event, 'rightSide'), onMouseDown: event => this.startDragging(event, 'rightSide') })), this.showInfoPopup ? (h("igl-booking-event-hover", { is_vacation_rental: this.is_vacation_rental, countries: this.countries, class: "top", bookingEvent: this.bookingEvent, bubbleInfoTop: this.bubbleInfoTopSide, style: this.calculateHoverPosition() })) : null));
    }
};
IglBookingEvent.style = iglBookingEventCss();

const iglBulkOperationsDrawerCss = () => `.sc-igl-bulk-operations-drawer-h{text-align:start;display:block}.bulk-operations__drawer.sc-igl-bulk-operations-drawer::part(body),.bulk-operations__drawer.sc-igl-bulk-operations-drawer [part~="body"]{padding:0;padding-inline:0.1rem}.bulk-operations__tab-group.sc-igl-bulk-operations-drawer::part(nav),.bulk-operations__tab-group.sc-igl-bulk-operations-drawer [part~="nav"]{position:sticky;top:0;z-index:10;background-color:var(--wa-color-surface-default)}`;

const IglBulkOperationsDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeDrawer = createEvent(this, "closeDrawer");
        this.toast = createEvent(this, "toast");
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
            label: t('Lcz_StopOpenSale', { fallback: 'Stop/Open Sale' }),
        },
        {
            id: 'block',
            label: t('Lcz_BlockUnit', { fallback: 'Block Unit' }),
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
        return (h(Host, { key: '3f806b274dcb242d108a08182622d2e73b1a2b7d' }, h("ir-drawer", { key: '6fcfe47fed00fab6f538127447b4ee31bc0af84c', onDrawerHide: this.handleDrawerClose.bind(this), label: t('Lcz_BulkAvailabilityOperations', { fallback: 'Bulk Availability Operations' }), open: this.open, class: "bulk-operations__drawer" }, this.open && (h("wa-tab-group", { key: '60cc1847a58eb24f43f8e997a258d641d38a92fc', class: "bulk-operations__tab-group", active: this.selectedTab, activation: "manual", "onwa-tab-show": e => (this.selectedTab = e.detail.name?.toString()) }, this.tabs.map(tab => (h("wa-tab", { panel: tab.id }, tab.label))), h("wa-tab-panel", { key: 'ec71ebbf951714731c66c604627b55e444d07928', name: "stop-sale" }, this.selectedTab === 'stop-sale' && (h("igl-bulk-stop-sale", { key: '67120a5ea33a9c55e6ea5d1681bd405a4ad4e9d5', onCloseDrawer: this.handleDrawerClose.bind(this), maxDatesLength: this.maxDatesLength, formId: formId, property_id: this.property_id }))), h("wa-tab-panel", { key: 'cd7799822e4558af5595b0f2aa25aa0f2f992f83', name: "block" }, this.selectedTab === 'block' && (h("igl-bulk-block", { key: '7f5020268babde3d449944f10b4d8c9e5e3e01be', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId, maxDatesLength: this.maxDatesLength, property_id: this.property_id }))))), h("div", { key: 'de66bb300347a941a8ccd1c363ce6db8bd1d94a9', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '6a45b909775639582e9aed43953449d658c6efae', size: "m", variant: "neutral", appearance: "filled", "data-drawer": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '66faa3483e2943f6cafde9558148648e955f4093', loading: this.isLoading, type: "submit", form: formId, size: "m", variant: "brand" }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
    }
};
IglBulkOperationsDrawer.style = iglBulkOperationsDrawerCss();

const iglCalBodyCss = () => `.sc-igl-cal-body-h{display:block;color:var(--wa-color-text-normal);--day-use-badge-dot-size:15px;--day-use-badge-hit-size:19px;--day-use-badge-border-width:1.5px;--day-use-badge-ring-width:1.5px;--day-use-color-future:var(--wa-color-success-fill-loud, #2e7d32);--day-use-color-staying:var(--wa-color-brand-fill-loud, #1976d2);--day-use-color-past:rgb(160, 160, 160)}.bodyContainer.sc-igl-cal-body{position:relative}.roomRow.sc-igl-cal-body{width:max-content}.roomRow.sc-igl-cal-body:first-child{margin-top:80px}.categoryName.sc-igl-cal-body{font-weight:bold;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.categoryTitle.sc-igl-cal-body{text-align:start !important}.hk_issue_btn.sc-igl-cal-body::part(base),.hk_issue_btn.sc-igl-cal-body [part~="base"]{height:auto;width:fit-content;padding:0.25rem}.cellData.sc-igl-cal-body{background-color:var(--wa-color-surface-default)}.cellData[data-dirty-room='true'].sc-igl-cal-body::after{content:'';position:absolute;bottom:0;height:100%;inset-inline-start:30%;inset-inline-end:30%;background-color:#d4d0be !important}.cellData.disabled.sc-igl-cal-body{background:var(--wa-color-neutral-fill-quiet);cursor:var(--cell-cursor, not-allowed);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body{cursor:pointer;text-align:start !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body:hover{background:var(--wa-color-neutral-fill-quiet)}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body:hover[data-hk-enabled='false']{background:var(--wa-color-surface-default);cursor:default}.cellData.sc-igl-cal-body{width:58px;height:30px;display:inline-grid;border-top:1px solid var(--wa-color-surface-border);border-inline-start:1px solid var(--wa-color-surface-border);vertical-align:top}.triangle-button.sc-igl-cal-body{--size:10px;position:absolute;inset-inline-end:-6px;top:-1px;width:0;height:0;padding:0;border:none;background:transparent;cursor:pointer;width:0;height:0;border-left:var(--size) solid transparent;border-right:var(--size) solid transparent;border-bottom:var(--size) solid var(--wa-color-surface-border);transform:rotate(45deg)}.triangle-button.sc-igl-cal-body:dir(rtl){transform:rotate(-45deg)}.cellData.sc-igl-cal-body:nth-child(2){border-inline-start:0px}.cellData.sc-igl-cal-body:last-child{border-inline-end:1px solid var(--wa-color-surface-border)}.roomHeaderCell.sc-igl-cal-body{position:-webkit-sticky;position:sticky;inset-inline-start:0;background:var(--wa-color-surface-default);border-inline-end:1px solid var(--wa-color-surface-border);width:170px;z-index:1;border-inline-start:0px}.currentDay.sc-igl-cal-body{background-color:var(--wa-color-brand-fill-quiet)}.dragOverHighlight.sc-igl-cal-body{background-color:#f5f5dc !important}.selectedDay.sc-igl-cal-body{background-color:#f9f9c9 !important}.dayUseBooked.sc-igl-cal-body{background-color:var(--day-use-color, var(--day-use-color-past)) !important;background-color:color-mix(in srgb, var(--day-use-color, var(--day-use-color-past)) 60%, transparent) !important}.dayUseBooked.sc-igl-cal-body:hover{background-color:var(--day-use-color, var(--day-use-color-past)) !important;background-color:color-mix(in srgb, var(--day-use-color, var(--day-use-color-past)) 80%, transparent) !important}.dayUseBooked--future.sc-igl-cal-body{--day-use-color:var(--day-use-color-future)}.dayUseBooked--staying.sc-igl-cal-body{--day-use-color:var(--day-use-color-staying)}.dayUseBooked--past.sc-igl-cal-body{--day-use-color:var(--day-use-color-past)}.dayUseBadge.sc-igl-cal-body{position:absolute;inset-block-start:calc(var(--day-use-badge-hit-size) / -2);inset-inline-end:calc(var(--day-use-badge-hit-size) / -2);width:var(--day-use-badge-hit-size);height:var(--day-use-badge-hit-size);display:flex;align-items:center;justify-content:center;padding:0;z-index:100;border:none;background:transparent;cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent;opacity:0;pointer-events:none;transition:opacity var(--wa-transition-fast, 150ms) ease-out}.roomCell.sc-igl-cal-body:hover .dayUseBadge.sc-igl-cal-body,.roomCell.sc-igl-cal-body:focus-within .dayUseBadge.sc-igl-cal-body{opacity:1;pointer-events:auto}@media (hover: none){.dayUseBadge.sc-igl-cal-body{opacity:1;pointer-events:auto}}.dayUseBadge__dot.sc-igl-cal-body{flex-shrink:0;width:var(--day-use-badge-dot-size);height:var(--day-use-badge-dot-size);border-radius:50%;z-index:100;background:var(--day-use-color, var(--day-use-color-past));box-shadow:0 0 0 var(--day-use-badge-ring-width) var(--wa-color-surface-default, #fff),     0 1px 3px rgba(0, 0, 0, 0.5);transition:transform var(--wa-transition-fast, 150ms) ease-out,     box-shadow var(--wa-transition-fast, 150ms) ease-out}.dayUseBadge.sc-igl-cal-body:hover .dayUseBadge__dot.sc-igl-cal-body,.dayUseBadge.sc-igl-cal-body:focus-visible .dayUseBadge__dot.sc-igl-cal-body{transform:scale(1.2);box-shadow:0 0 0 var(--day-use-badge-ring-width) var(--wa-color-surface-default, #fff),     0 2px 5px rgba(0, 0, 0, 0.6)}.dayUseBadge.sc-igl-cal-body:focus-visible{outline:var(--wa-focus-ring, 2px solid var(--wa-color-danger-fill-loud));outline-offset:1px;border-radius:50%}@media (prefers-reduced-motion: reduce){.dayUseBadge__dot.sc-igl-cal-body{transition:none}}.dayUseTooltip__main.sc-igl-cal-body{display:flex;align-items:center;gap:0.5rem;min-width:0}.dayUseTooltip__meta.sc-igl-cal-body{display:flex;align-items:center;gap:0.5rem;justify-content:space-between}.dayUseTooltip__time.sc-igl-cal-body{font-variant-numeric:tabular-nums;font-size:var(--wa-font-size-2xs, 0.75rem)}.dayUseTooltip__price.sc-igl-cal-body{flex-shrink:0;margin-inline-start:auto;font-weight:var(--wa-font-weight-action, 600);font-variant-numeric:tabular-nums;font-size:var(--wa-font-size-2xs, 0.75rem)}.dayUseTooltip__number.sc-igl-cal-body{flex-shrink:0;font-variant-numeric:tabular-nums;font-size:var(--wa-font-size-2xs, 0.75rem)}.dayUseTooltip__guest.sc-igl-cal-body{flex:1 1 auto;text-align:end;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.categoryTitle.sc-igl-cal-body{grid-template-columns:1fr 20px;padding-inline-start:10px;cursor:pointer;height:40px;font-size:0.9em}.categoryTitle.sc-igl-cal-body>.sc-igl-cal-body:nth-child(1){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.roomTitle.sc-igl-cal-body{padding-inline-start:20px;font-size:0.9em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.roomTitle.sc-igl-cal-body>.sc-igl-cal-body:nth-child(1){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.roomTitle.pl10.sc-igl-cal-body{padding-inline-start:10px}.categoryPriceColumn.sc-igl-cal-body{align-items:center;height:40px;-webkit-user-select:none;user-select:none;position:relative}.bookingEventsContainer.sc-igl-cal-body{position:absolute;top:0;left:0}.roomTitle[data-room-has-today-checkin='true'].sc-igl-cal-body{--ir-interactive-hk-bg:var(--wa-color-brand-fill-quiet);color:var(--wa-color-brand-on-quiet);background-color:var(--wa-color-brand-fill-quiet) !important}.ir-text-start.sc-igl-cal-body{text-align:start}.ir-flip-rtl.sc-igl-cal-body:dir(rtl){scale:-1 1}`;

const IglCalBody = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.addBookingDatasEvent = createEvent(this, "addBookingDatasEvent");
        this.showBookingPopup = createEvent(this, "showBookingPopup");
        this.scrollPageToRoom = createEvent(this, "scrollPageToRoom");
    }
    isScrollViewDragging;
    propertyId;
    calendarData;
    today;
    currency;
    language;
    countries;
    highlightedDate;
    /** Day-use bookings for the currently loaded date window (from `getDayUseBookingsForCalendar`) — booked units get a red 2px cell border. */
    dayUseBookings = [];
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
    roomEventsIndex = new Map();
    interactiveTitle = [];
    dayRateMap = new Map();
    roomsWithTodayCheckinStatus = new Set();
    categoriesWithTodayCheckinStatus = new Set();
    lastRenderedRoomTops = new Map();
    roomTitleClickTimer = null;
    dayUseBookingsByKey = new Map();
    // private disabledCellsCache = new Map<string, boolean>();
    componentDidRender() {
        // Room row offsets are read from the previously-committed DOM at the top of render(), so
        // they're always one commit stale: on first mount that DOM doesn't exist yet, and after any
        // row-structure change (category expand/collapse, calendarData updates adding/removing
        // rooms) the offsets used for this pass were measured *before* the change took effect. Once
        // the DOM actually commits here, re-measure and force one corrective re-render whenever the
        // fresh offsets disagree with what was used, so booking bars settle on the real (current) row
        // positions instead of stale ones — this is a vertical measurement (offsetTop), so it applies
        // identically regardless of RTL/LTR.
        const currentRoomTops = this.getRoomTopOffsets();
        if (!this.roomTopsEqual(this.lastRenderedRoomTops, currentRoomTops)) {
            forceUpdate(this);
        }
    }
    roomTopsEqual(a, b) {
        if (a.size !== b.size) {
            return false;
        }
        for (const [roomId, top] of a) {
            if (b.get(roomId) !== top) {
                return false;
            }
        }
        return true;
    }
    componentWillLoad() {
        this.currentDate.setHours(0, 0, 0, 0);
        this.bookingMap = this.getBookingMap(this.getBookingData());
        this.updateRoomEventsIndex();
        this.updateTodayCheckinStatus();
        calendar_dates.days.forEach(day => {
            this.dayRateMap.set(day.day, day.rate);
        });
        this.updateDisabledCellsCache();
        this.updateDayUseBookingKeys();
    }
    disconnectedCallback() {
        if (this.roomTitleClickTimer) {
            clearTimeout(this.roomTitleClickTimer);
            this.roomTitleClickTimer = null;
        }
    }
    handleCalendarDataChange() {
        this.bookingMap = this.getBookingMap(this.getBookingData());
        this.updateRoomEventsIndex();
        this.updateTodayCheckinStatus();
        this.updateDisabledCellsCache();
    }
    handleTodayChange() {
        this.updateTodayCheckinStatus();
    }
    handleDayUseBookingsChange() {
        this.updateDayUseBookingKeys();
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
    /**
     * Single batched DOM read (one querySelectorAll) shared by every booking bar, instead of
     * each igl-booking-event independently measuring its own room row. Room row top offsets
     * can't be derived from a fixed formula alone since rows are conditionally rendered based
     * on category expand/collapse state owned by this component.
     */
    getRoomTopOffsets() {
        const offsets = new Map();
        document.querySelectorAll('.bodyContainer .roomRow .roomTitle[data-room]').forEach(element => {
            const roomId = Number(element.getAttribute('data-room'));
            offsets.set(roomId, element.offsetTop);
        });
        return offsets;
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
            TITLE: t('Lcz_NewBookingFor'),
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
                message: t('Lcz_IncludingCityTaxExcludingVatMock', { fallback: 'Including 5.00% City Tax - Excluding 11.00% VAT' }),
            },
        };
        let popupTitle = roomCategory.name + ' ' + this.getRoomName(this.getRoomById(this.getRoomtypeUnits(roomCategory), this.selectedRooms[keys[0]].roomId));
        this.newEvent.BLOCK_DATES_TITLE = `${t('Lcz_BlockDatesFor')} ${popupTitle}`;
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
    getDateStr(date) {
        return formatDate(date, 'DD MMM YYYY');
    }
    removeNewEvent() {
        this.calendarData.bookingEvents = this.calendarData.bookingEvents.filter(events => events.ID !== 'NEW_TEMP_EVENT');
        this.newEvent = null;
    }
    /** Cancels the in-progress range selection and surfaces why, shared by every conflict check in `clickCell`. */
    cancelSelectionWithConflictToast(title) {
        this.removeNewEvent();
        this.selectedRooms = {};
        this.renderElement();
        showToast({ type: 'error', title });
    }
    clickCell(roomId, selectedDay, roomCategory) {
        const earliestSelectableDate = this.currentDate.getTime() - 86_400_000; // allow starting the selection from yesterday
        if (!this.isScrollViewDragging && selectedDay.currentDate >= earliestSelectableDate) {
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
                const startValue = this.selectedRooms[Object.keys(this.selectedRooms)[0]].value;
                const endValue = selectedDay.value;
                // Cheapest checks first (indexed O(bookings-in-room)), day-loop checks last — each short-circuits the selection.
                if (this.hasBookingConflictBetween(roomId, startValue, endValue)) {
                    this.cancelSelectionWithConflictToast(t('Lcz_BookingBetweenSelectedDates', { fallback: 'Selection cancelled. A booking already exists within the selected dates.' }));
                    return;
                }
                if (this.hasBlockedConflictBetween(roomId, startValue, endValue)) {
                    this.cancelSelectionWithConflictToast(t('Lcz_BlockedDatesBetweenSelectedDates', { fallback: 'Selection cancelled. These dates are blocked.' }));
                    return;
                }
                if (this.hasUnavailableCellBetween(roomId, startValue, endValue)) {
                    this.cancelSelectionWithConflictToast(t('Lcz_UnavailableDatesBetweenSelectedDates', { fallback: 'Selection cancelled. These dates are not available.' }));
                    return;
                }
                if (this.hasDayUseBookingBetween(roomId, startValue, endValue)) {
                    this.cancelSelectionWithConflictToast(t('Lcz_DayUseBookingBetweenSelectedDates', { fallback: 'Selection cancelled. A day-use booking already exists within the selected dates.' }));
                    return;
                }
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
    /**
     * Indexes every booking/block event in `calendarData.bookingEvents` by physical room id, with
     * FROM_DATE/TO_DATE pre-parsed to day-level timestamps and block-vs-booking pre-classified via
     * `isBlockUnit`. Rebuilt whenever `calendarData` changes so the range-conflict checks used during
     * cell selection (`hasBookingConflictBetween`/`hasBlockedConflictBetween`) are O(events-in-that-room)
     * numeric comparisons instead of scanning/parsing the full bookings array on every click.
     */
    updateRoomEventsIndex() {
        const index = new Map();
        for (const event of this.getBookingData()) {
            const roomId = Number(event.PR_ID);
            if (Number.isNaN(roomId) || !event.FROM_DATE || !event.TO_DATE) {
                continue;
            }
            const entry = {
                start: hooks(event.FROM_DATE, 'YYYY-MM-DD').startOf('day').valueOf(),
                end: hooks(event.TO_DATE, 'YYYY-MM-DD').startOf('day').valueOf(),
                isBlock: isBlockUnit(event.STATUS_CODE),
            };
            const bucket = index.get(roomId);
            if (bucket) {
                bucket.push(entry);
            }
            else {
                index.set(roomId, [entry]);
            }
        }
        this.roomEventsIndex = index;
    }
    getRoomtypeDayInventoryCells(addClass, isCategory = false, index) {
        return calendar_dates.days.map(dayInfo => {
            // const isActive = true;
            return (h("div", { class: `cellData  font-weight-bold categoryPriceColumn ${addClass + '_' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''}` }, isCategory ? (h(Fragment, null, h("span", { class: 'categoryName' }, formatNumber(dayInfo.rate[index].exposed_inventory.rts)))) : ('')));
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
            const dayUseBooking = this.getDayUseBooking(Number(roomId), dayInfo.value);
            const dayUseStatus = dayUseBooking ? this.getDayUseStatus(dayUseBooking) : null;
            const dayUseCellClass = dayUseBooking ? `dayUseBooked dayUseBooked--${dayUseStatus}` : '';
            return (h("div", { class: `cellData position-relative roomCell ${isCellDisabled ? 'disabled' : ''} ${'room_' + roomId + '_' + dayInfo.day} ${isCurrentDate ? 'currentDay' : ''} ${this.dragOverElement === roomId + '_' + dayInfo.day ? 'dragOverHighlight' : ''} ${isSelected ? 'selectedDay' : ''} ${dayUseCellClass}`,
                // style={!isDisabled && { '--cell-cursor': 'default' }}
                style: { '--cell-cursor': 'default' }, onClick: () => {
                    // if (isDisabled) {
                    //   return;
                    // }
                    this.clickCell(Number(roomId), dayInfo, roomCategory);
                }, "aria-label": roomName, role: "gridcell", "data-room-id": roomId, "data-date": dayInfo.value, "aria-current": isCurrentDate ? 'date' : undefined, "data-room-name": roomName, "data-dirty-room": String(shouldBeCleaned), "data-day-use-booked": String(!!dayUseBooking), "aria-disabled": String(isDisabled), "aria-selected": Boolean(isSelected) }, dayUseBooking && (h(Fragment, null, h("wa-tooltip", { style: { '--max-width': 'auto' }, for: `day-use-badge_${roomId}_${dayInfo.value}`, trigger: "hover" }, h("div", { class: "dayUseTooltip__main" }, h("span", { class: "dayUseTooltip__time" }, t('Lcz_DayUse', { fallback: 'Day use' }), " ", this.formatDayUseTime(dayUseBooking.from_time), " \u2013 ", this.formatDayUseTime(dayUseBooking.to_time)), h("span", { class: "dayUseTooltip__price" }, this.getDayUsePrice(dayUseBooking.gross_amount))), h("div", { class: "dayUseTooltip__meta" }, h("span", { class: "dayUseTooltip__number" }, "#", dayUseBooking.book_nbr), this.getDayUseGuestName(dayUseBooking) && h("span", { class: "dayUseTooltip__guest" }, this.getDayUseGuestName(dayUseBooking)))), h("button", { id: `day-use-badge_${roomId}_${dayInfo.value}`, type: "button", class: "dayUseBadge", "aria-label": t('Lcz_OpenDayUseBookingDetails', { fallback: 'Open day-use booking details' }), onClick: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.openDayUseBookingDetails(dayUseBooking);
                } }, h("span", { class: "dayUseBadge__dot" }))))));
        });
    }
    /**
     * Opens the existing day-use reservation's details drawer — same `showBookingPopup`/`EDIT_BOOKING`
     * path `igl-booking-event-hover`'s "Edit booking" action uses, so `igloo-calendar.tsx`'s existing
     * `editBookingItem` wiring picks it up without any new plumbing.
     */
    formatDayUseTime(time) {
        const [hour, minute] = time.split(':');
        return _formatTime(hour, minute);
    }
    getDayUseGuestName(booking) {
        return [booking.guest_first_name, booking.guest_last_name].filter(Boolean).join(' ').trim();
    }
    getDayUsePrice(amount) {
        return formatAmount(this.currency?.symbol ?? '', Number(amount ?? 0));
    }
    getDayUseStatus(booking) {
        const now = hooks();
        const from = hooks(`${booking.target_date} ${booking.from_time}`, 'YYYY-MM-DD HH:mm');
        const to = hooks(`${booking.target_date} ${booking.to_time}`, 'YYYY-MM-DD HH:mm');
        if (now.isBefore(from)) {
            return 'future';
        }
        if (now.isAfter(to)) {
            return 'past';
        }
        return 'staying';
    }
    openDayUseBookingDetails(dayUseBooking) {
        this.showBookingPopup.emit({
            key: 'add',
            data: {
                BOOKING_NUMBER: dayUseBooking.book_nbr,
                event_type: 'EDIT_BOOKING',
                TITLE: `${t('Lcz_EditBookingFor', { fallback: 'Edit Booking For' })} ${''}`,
            },
        });
    }
    /**
     * Opens the booking editor drawer in day-use mode with the double-clicked unit preselected
     * (room type scoped via `roomsInfo`, today as the default day-use date).
     */
    openDayUseBooking(room, roomCategory) {
        const today = hooks().format('YYYY-MM-DD');
        this.showBookingPopup.emit({
            key: 'add',
            data: {
                event_type: 'BAR_BOOKING',
                PR_ID: room.id.toString(),
                FROM_DATE: today,
                TO_DATE: hooks().add(1, 'day').format('YYYY-MM-DD'),
                TITLE: `${t('Lcz_DayUseBookingFor', { fallback: 'Day-Use Booking For' })} ${roomCategory.name} ${room.name}`,
                roomsInfo: [{ id: roomCategory.id }],
                dayUse: true,
            },
        });
    }
    /**
     * Disambiguates a single click (toggle housekeeping) from a double click (open day-use booking)
     * on the room name cell. A native `dblclick` listener doesn't work here: the single-click handler
     * opens a modal housekeeping dialog, which captures the second click before the browser can pair
     * it with the first to synthesize `dblclick`. Instead we delay the single-click action briefly so a
     * fast second click can cancel it and fire the double-click action instead.
     */
    handleRoomTitleClick(room, roomCategory) {
        if (this.roomTitleClickTimer) {
            clearTimeout(this.roomTitleClickTimer);
            this.roomTitleClickTimer = null;
            this.openDayUseBooking(room, roomCategory);
            return;
        }
        this.roomTitleClickTimer = setTimeout(() => {
            this.roomTitleClickTimer = null;
            if (calendar_data.housekeeping_enabled) {
                this.selectedRoom = room;
            }
        }, 250);
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
        return (h("div", { class: "roomRow", "data-has-today-checkin": String(hasRoomWithTodayCheckin) }, h("div", { class: `cellData ir-text-start align-items-center roomHeaderCell categoryTitle ${'category_' + this.getCategoryId(roomType)}`, onClick: () => this.toggleCategory(roomType), "data-has-today-checkin": String(hasRoomWithTodayCheckin) }, h("div", { class: 'categoryName' }, h("ir-interactive-title", { popoverTitle: this.getCategoryName(roomType) })), roomType.expanded ? h("wa-icon", { name: "angle-down" }) : h("wa-icon", { class: "ir-flip-rtl", name: "angle-right" })), this.getRoomtypeDayInventoryCells('category_' + this.getCategoryId(roomType), true, index)));
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
            return (h("div", { class: "roomRow", "data-room-has-today-checkin": String(roomHasTodayCheckin) }, h("div", { class: `cellData room  align-items-center roomHeaderCell  roomTitle ${this.getTotalPhysicalRooms(roomType) <= 1 ? 'pl10' : ''} ${'room_' + roomId}`, "data-room-name": name, "data-hk-enabled": String(calendar_data.housekeeping_enabled), "data-room": roomId, "data-room-has-today-checkin": String(roomHasTodayCheckin), "data-category-has-today-checkin": String(hasRoomWithTodayCheckin), onClick: () => {
                    this.handleRoomTitleClick(room, roomType);
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
                } }, h("wa-animation", { name: "heartBeat", easing: "ease-in-out", duration: 1400, play: true }, h("wa-icon", { name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1.1rem' } })))), h("div", { style: { visibility: room.hk_status !== '001' ? 'visible' : 'hidden' } }, room.hk_status !== '003' && (h("wa-tooltip", { for: `${room.id}_hk_status_icon` }, room.hk_status === '002' ? t('Lcz_ThisUnitIsDirty', { fallback: 'This unit is dirty' }) : t('Lcz_Inspected', { fallback: 'Inspected' }))), h("wa-icon", { id: `${room.id}_hk_status_icon`, name: room.hk_status === '004' ? 'check' : 'broom', style: room.hk_status === '004' && { color: 'var(--wa-color-success-fill-loud)' } })))))), this.getGeneralUnitsDayCells(this.getRoomId(room), roomType, name)));
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
    updateDayUseBookingKeys() {
        this.dayUseBookingsByKey = new Map((this.dayUseBookings ?? []).map(booking => [this.getCellKey(booking.unit_id, booking.target_date), booking]));
    }
    getDayUseBooking(roomId, day) {
        return this.dayUseBookingsByKey.get(this.getCellKey(roomId, day));
    }
    /**
     * True if a day-use booking for `roomId` falls strictly between `startValue` and `endValue`
     * (both `'YYYY-MM-DD'`, either order). Endpoint-exclusive — a day-use booking on either clicked
     * date itself doesn't block the selection.
     */
    hasDayUseBookingBetween(roomId, startValue, endValue) {
        const start = hooks(startValue, 'YYYY-MM-DD');
        const end = hooks(endValue, 'YYYY-MM-DD');
        const [rangeStart, rangeEnd] = start.isBefore(end) ? [start, end] : [end, start];
        const cursor = rangeStart.clone().add(1, 'days');
        while (cursor.isBefore(rangeEnd, 'day')) {
            if (this.getDayUseBooking(roomId, cursor.format('YYYY-MM-DD'))) {
                return true;
            }
            cursor.add(1, 'days');
        }
        return false;
    }
    /**
     * Shared O(events-in-room) endpoint-exclusive range-overlap test behind `hasBookingConflictBetween`
     * and `hasBlockedConflictBetween`. Two ranges overlap (endpoints excluded) when
     * `eventStart < rangeEnd && eventEnd > rangeStart` — a single numeric comparison per event, no
     * per-day iteration, using the pre-parsed timestamps cached in `roomEventsIndex`.
     */
    hasRoomEventConflictBetween(roomId, startValue, endValue, isBlock) {
        const events = this.roomEventsIndex.get(roomId);
        if (!events || events.length === 0) {
            return false;
        }
        const a = hooks(startValue, 'YYYY-MM-DD').startOf('day').valueOf();
        const b = hooks(endValue, 'YYYY-MM-DD').startOf('day').valueOf();
        const rangeStart = Math.min(a, b);
        const rangeEnd = Math.max(a, b);
        for (const event of events) {
            if (event.isBlock === isBlock && event.start < rangeEnd && event.end > rangeStart) {
                return true;
            }
        }
        return false;
    }
    /**
     * True if an existing (non-block) booking for `roomId` overlaps the open interval between
     * `startValue` and `endValue` — i.e. a real booking's stay exists strictly between the two
     * clicked dates. Endpoint-exclusive: a booking checking out or in exactly on a clicked date
     * does not count (standard checkout-day/checkin-day overlap semantics).
     */
    hasBookingConflictBetween(roomId, startValue, endValue) {
        return this.hasRoomEventConflictBetween(roomId, startValue, endValue, false);
    }
    /**
     * True if a blocked-dates entry for `roomId` overlaps the open interval between `startValue`
     * and `endValue`. Same endpoint-exclusive semantics and cached-index lookup as
     * `hasBookingConflictBetween`, filtered to block entries instead of real bookings.
     */
    hasBlockedConflictBetween(roomId, startValue, endValue) {
        return this.hasRoomEventConflictBetween(roomId, startValue, endValue, true);
    }
    /**
     * True if any date strictly between `startValue` and `endValue` is disabled for `roomId` in
     * `calendar_dates.disabled_cells` (stop-sale / zero availability). Endpoint-exclusive, same loop
     * shape as `hasDayUseBookingBetween`; reuses the existing `isCellDisabled` cache so no new
     * per-day data structure is needed.
     */
    hasUnavailableCellBetween(roomId, startValue, endValue) {
        const start = hooks(startValue, 'YYYY-MM-DD');
        const end = hooks(endValue, 'YYYY-MM-DD');
        const [rangeStart, rangeEnd] = start.isBefore(end) ? [start, end] : [end, start];
        const cursor = rangeStart.clone().add(1, 'days');
        while (cursor.isBefore(rangeEnd, 'day')) {
            if (this.isCellDisabled(roomId, cursor.format('YYYY-MM-DD'))) {
                return true;
            }
            cursor.add(1, 'days');
        }
        return false;
    }
    render() {
        const roomTopOffsets = this.getRoomTopOffsets();
        this.lastRenderedRoomTops = roomTopOffsets;
        return (h(Host, { key: '9d84c1ed4729cafbf3d0998bee249b52a6a24580', dir: isRtlDirection(locales.direction) ? 'rtl' : 'ltr' }, h("div", { key: '78b1f0e079d0b340e2097cfdd8ff247298bb28bf', class: "bodyContainer" }, this.getRoomRows(), h("div", { key: 'b22d128aaa082d860ea533ce8bdaa44f884872a3', class: "bookingEventsContainer preventPageScroll" }, this.getBookingData()?.map(bookingEvent => {
            return (h("igl-booking-event", { "data-testid": `booking_${bookingEvent.BOOKING_NUMBER}`, "data-room-name": bookingEvent.roomsInfo?.find(r => r.id === bookingEvent.RATE_TYPE)?.physicalrooms.find(r => r.id === bookingEvent.PR_ID)?.name, language: this.language, is_vacation_rental: this.calendarData.is_vacation_rental, countries: this.countries, currency: this.currency, "data-component-id": bookingEvent.ID, bookingEvent: bookingEvent, allBookingEvents: this.getBookingData(), roomTop: roomTopOffsets.get(Number(bookingEvent.PR_ID)) }));
        }))), h("igl-housekeeping-dialog", { key: '81190ab8a8c6279fddbb2bfae65204b216591c6a', onIrAfterClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedRoom = null;
            }, bookingNumber: this.selectedRoom ? this.bookingMap.get(this.selectedRoom?.id) : undefined, selectedRoom: this.selectedRoom, open: this.selectedRoom !== null }), h("igl-hk-issues-dialog", { key: 'b7b49bb3ac463b66b72287e12e336a6b84f9af4b', open: this.issues !== null, issues: this.issues, unitName: this.issues?.length > 0 ? this.issues[0]?.unit?.name : '', propertyId: this.propertyId, onIrAfterClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.issues = null;
            } })));
    }
    static get watchers() { return {
        "calendarData": [{
                "handleCalendarDataChange": 0
            }],
        "today": [{
                "handleTodayChange": 0
            }],
        "dayUseBookings": [{
                "handleDayUseBookingsChange": 0
            }]
    }; }
};
IglCalBody.style = iglCalBodyCss();

const iglCalFooterCss = () => `.sc-igl-cal-footer-h{display:block;position:sticky;bottom:0;width:max-content;z-index:3;color:var(--wa-color-text-quiet)}.footerCell.sc-igl-cal-footer{display:-moz-inline-grid;display:-ms-inline-grid;display:inline-grid;position:-webkit-sticky;position:sticky;bottom:0;width:58px;height:40px;background:var(--wa-color-surface-default);vertical-align:top;border-top:1px solid var(--wa-color-surface-border)}.bottomLeftCell.sc-igl-cal-footer{z-index:2;width:170px}.bottomLeftCell.sc-igl-cal-footer{inset-inline-start:-1px;padding-inline-start:15px}.footerCell.sc-igl-cal-footer i.sc-igl-cal-footer{margin-inline-end:5px}.legendBtn.sc-igl-cal-footer{color:#41bff3;color:var(--wa-color-text-link);cursor:pointer}.legendBtn.sc-igl-cal-footer:hover{color:color-mix(in oklab, var(--wa-color-text-link), var(--wa-color-mix-hover))}.isOnline.sc-igl-cal-footer i.sc-igl-cal-footer{color:#2f9c3f;font-weight:bold}.isOffline.sc-igl-cal-footer i.sc-igl-cal-footer{font-weight:bold}.isOffline.sc-igl-cal-footer{color:#a40000}.dayTitle.sc-igl-cal-footer{font-size:0.8em;font-weight:600;display:grid;user-select:none}.currentDay.sc-igl-cal-footer .dayTitle.sc-igl-cal-footer{font-weight:bold}.currentDay.sc-igl-cal-footer{background-color:var(--wa-color-brand-fill-quiet)}.dayCapacityPercent.sc-igl-cal-footer{font-size:0.75em}.badge-pill.sc-igl-cal-footer{padding-inline-start:1em;padding-inline-end:1em;font-size:0.7em;margin-bottom:2px}.weekend.sc-igl-cal-footer{font-weight:bold;color:var(--wa-color-text-normal)}`;

const IglCalFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.optionEvent = createEvent(this, "optionEvent");
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
        return (h(Host, { key: 'a9285b80a1fc2a166e13264c31dbc238e523b47c', class: "footerContainer" }, h("div", { key: 'ec9d886ac3ad67aa839c9629887420f3cbe44a45', class: "footerCell bottomLeftCell align-items-center preventPageScroll", style: { paddingInlineStart: '10px' } }, h("button", { key: 'a656d36f0011bf359d990bc0f241544a4251fce2', class: "m-0 p-0 btn btn-sm  legendBtn d-flex align-items-center", style: { gap: '0.25rem' }, onClick: () => this.handleOptionEvent('showLegend') }, this.isLegendOpen ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", height: 16, width: 16 }, h("path", { fill: "currentColor", d: "M105.4 297.4C92.9 309.9 92.9 330.2 105.4 342.7L265.4 502.7C277.9 515.2 298.2 515.2 310.7 502.7C323.2 490.2 323.2 469.9 310.7 457.4L173.3 320L310.6 182.6C323.1 170.1 323.1 149.8 310.6 137.3C298.1 124.8 277.8 124.8 265.3 137.3L105.3 297.3zM457.4 137.4L297.4 297.4C284.9 309.9 284.9 330.2 297.4 342.7L457.4 502.7C469.9 515.2 490.2 515.2 502.7 502.7C515.2 490.2 515.2 469.9 502.7 457.4L365.3 320L502.6 182.6C515.1 170.1 515.1 149.8 502.6 137.3C490.1 124.8 469.8 124.8 457.3 137.3z" }))) : (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", height: 16, width: 16 }, h("path", { fill: "currentColor", d: "M535.1 342.6C547.6 330.1 547.6 309.8 535.1 297.3L375.1 137.3C362.6 124.8 342.3 124.8 329.8 137.3C317.3 149.8 317.3 170.1 329.8 182.6L467.2 320L329.9 457.4C317.4 469.9 317.4 490.2 329.9 502.7C342.4 515.2 362.7 515.2 375.2 502.7L535.2 342.7zM183.1 502.6L343.1 342.6C355.6 330.1 355.6 309.8 343.1 297.3L183.1 137.3C170.6 124.8 150.3 124.8 137.8 137.3C125.3 149.8 125.3 170.1 137.8 182.6L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7z" }))), h("span", { key: 'ba3fc3e15dbf6b5d6e67bdda2ab1e60185d35d29' }, t('Lcz_Legend')), h("span", { key: 'e4d5bf644896e3fd4f8fab1627ae55e9b04c3e0b' }, "v1.65"))), this.calendarData.days.map(dayInfo => (h("div", { class: "footerCell align-items-center" }, h("div", { class: {
                'dayTitle full-height align-items-center': true,
                'weekend': isWeekend(dayInfo.value),
                'currentDay': dayInfo.value === this._today || this.highlightedDate === dayInfo.day,
            } }, formatDate(dayInfo.value, 'ddd D')))))));
    }
};
IglCalFooter.style = iglCalFooterCss();

const iglCalHeaderCss = () => `.sc-igl-cal-header-h{display:block;position:absolute;top:0;height:100%;color:var(--wa-color-text-quiet)}`;

const IglCalHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.optionEvent = createEvent(this, "optionEvent");
        this.gotoRoomEvent = createEvent(this, "gotoRoomEvent");
        this.gotoToBeAssignedDate = createEvent(this, "gotoToBeAssignedDate");
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
    dayUseBookings = [];
    renderAgain = false;
    unassignedRoomsNumber = {};
    roomsList = [];
    toBeAssignedService = new ToBeAssignedService();
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
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
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
            TITLE: t('Lcz_NewBooking', { fallback: 'New Booking' }),
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
    handleToolbarAction = (e) => {
        const { key, data } = e.detail;
        if (key === 'bulk') {
            this.handleOptionEvent('bulk', this.getNewBookingModel());
        }
        else {
            this.handleOptionEvent(key, data);
        }
    };
    handleRoomSelected = (e) => {
        this.gotoRoomEvent.emit({ key: 'gotoRoom', roomId: e.detail.roomId });
    };
    handleDayBadgeClicked = (e) => {
        this.handleOptionEvent('showAssigned');
        setTimeout(() => {
            this.gotoToBeAssignedDate.emit({
                key: 'gotoToBeAssignedDate',
                data: e.detail.currentDate,
            });
        }, 100);
    };
    render() {
        return (h(Host, { key: 'afa8a4c44fcd4ac830c9591e86b412371b3dbc0e', dir: isRtlDirection(locales.direction) ? 'rtl' : 'ltr' }, h("igl-cal-header-toolbar", { key: '045ed6cf4286ecb893a01d896abd5faca02a29cf', isVacationRental: this.calendarData.is_vacation_rental, showDayUseButton: !this.calendarData.is_vacation_rental && this.dayUseBookings?.length > 0, minDate: hooks().add(-2, 'months').startOf('month').format('YYYY-MM-DD'), roomsList: this.roomsList, onActionSelected: this.handleToolbarAction, onRoomSelected: this.handleRoomSelected }), h("igl-cal-header-days", { key: 'b23e4430dc6a70f3cf211be6fd27071ce72a1e78', isVacationRental: this.calendarData.is_vacation_rental, today: this.today, highlightedDate: this.highlightedDate, monthsInfo: this.calendarData.monthsInfo, days: this.calendarData.days, unassignedRoomsNumber: { ...this.unassignedRoomsNumber }, onDayBadgeClicked: this.handleDayBadgeClicked })));
    }
    static get watchers() { return {
        "unassignedDates": [{
                "handleCalendarDataChanged": 0
            }]
    }; }
};
IglCalHeader.style = iglCalHeaderCss();

const iglCalHeaderDaysCss = () => `.stickyCell.sc-igl-cal-header-days{display:-ms-inline-grid;display:-moz-inline-grid;display:inline-grid;position:-webkit-sticky;position:sticky;top:0px;height:82px;display:inline-block;vertical-align:top;z-index:2}.headersContainer.sc-igl-cal-header-days{background-color:var(--wa-color-surface-default)}.headerCell.sc-igl-cal-header-days{display:inline-grid;width:58px;height:58px;vertical-align:top;background-color:var(--wa-color-surface-default);border-bottom:1px solid var(--wa-color-surface-border)}.monthsContainer.sc-igl-cal-header-days{height:20px;background-color:var(--wa-color-surface-default);margin-bottom:0.2em}.monthCell.sc-igl-cal-header-days{display:inline-grid;height:20px;background-color:var(--wa-color-overlay-inline);border-inline-end:1px solid var(--wa-color-surface-border);color:var(--wa-color-neutral-on-quiet);vertical-align:top}.monthCell.sc-igl-cal-header-days:nth-child(odd){background:var(--wa-color-neutral-fill-normal);color:var(--wa-color-neutral-on-normal)}.monthTitle.sc-igl-cal-header-days{overflow:hidden;text-overflow:ellipsis;font-size:0.9em;text-transform:uppercase;font-weight:bold;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.dayTitle.sc-igl-cal-header-days{font-size:0.8em;font-weight:600;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.dayTitle.weekend.sc-igl-cal-header-days{font-weight:bold;color:var(--wa-color-text-normal)}.currentDay.sc-igl-cal-header-days .dayTitle.sc-igl-cal-header-days{font-weight:bold}.currentDay.sc-igl-cal-header-days{background-color:var(--wa-color-brand-fill-quiet)}.dayCapacityPercent.sc-igl-cal-header-days{font-size:0.75em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.fd-header__badge-btn.sc-igl-cal-header-days{all:unset;cursor:pointer}.fd-header__badge-btn.sc-igl-cal-header-days:hover .fd-header__badge.sc-igl-cal-header-days{background-color:color-mix(in oklab, var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)), var(--wa-color-mix-hover))}`;

const IglCalHeaderDays = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dayBadgeClicked = createEvent(this, "dayBadgeClicked");
    }
    isVacationRental;
    today;
    highlightedDate;
    monthsInfo = [];
    days = [];
    /** Unassigned-unit counts keyed by `dayInfo.day`, falling back to `dayInfo.unassigned_units_nbr` per cell. */
    unassignedRoomsNumber = {};
    /** Emitted only when a badge with a non-zero count is clicked — a zero-count badge is inert. */
    dayBadgeClicked;
    handleBadgeClick(dayInfo) {
        if (this.unassignedRoomsNumber[dayInfo.day] || 0) {
            this.dayBadgeClicked.emit({ day: dayInfo.day, currentDate: dayInfo.currentDate });
        }
    }
    render() {
        return (h(Host, { key: '950d892c04c08560e5511946f263229b04795bc8' }, h("div", { key: '1f4eee79a11aeaecd6226f4c97ffbd02cd3ba9c8', class: "stickyCell headersContainer" }, h("div", { key: '03ceb8c17a292a5b9f8aff92f9220ecf82875921', class: "monthsContainer" }, this.monthsInfo.map(monthInfo => {
            return (h("div", { class: "monthCell", style: { width: monthInfo.daysCount * 58 + 'px' } }, h("div", { class: "monthTitle" }, formatDate(monthInfo.firstDayValue, 'MMM YYYY'))));
        })), this.days.map(dayInfo => {
            return (h("div", { class: `headerCell align-items-center ${'day-' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''}`, "data-day": dayInfo.day }, !this.isVacationRental && (h("div", { class: "preventPageScroll", onClick: () => this.handleBadgeClick(dayInfo) }, this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr !== 0 ? (h("button", { class: 'fd-header__badge-btn' }, h("wa-badge", { class: "fd-header__badge", variant: 'brand', appearance: 'accent', pill: true }, formatCount(this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr)))) : (h("wa-badge", { variant: 'neutral', appearance: 'filled', pill: true }, ' ', formatCount(this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr))))), h("div", { class: { dayTitle: true, weekend: isWeekend(dayInfo.value) } }, formatDate(dayInfo.value, 'ddd D')), h("div", { class: "dayCapacityPercent" }, formatPercent(dayInfo.occupancy))));
        }))));
    }
};
IglCalHeaderDays.style = iglCalHeaderDaysCss();

const iglCalHeaderToolbarCss = () => `.stickyCell.sc-igl-cal-header-toolbar{display:-ms-inline-grid;display:-moz-inline-grid;display:inline-grid;position:-webkit-sticky;position:sticky;top:0px;height:82px;display:inline-block;vertical-align:top;z-index:2}.topLeftCell.sc-igl-cal-header-toolbar{border-inline-end:1px solid var(--wa-color-surface-border)}.topLeftCell.sc-igl-cal-header-toolbar{inset-inline-start:0px;z-index:3;width:170px;background-color:var(--wa-color-surface-default);display:-ms-inline-grid;display:-moz-inline-grid;display:inline-grid}.btn.sc-igl-cal-header-toolbar{pointer-events:auto}.header__fd-actions.sc-igl-cal-header-toolbar{color:var(--wa-color-text-normal);border-inline-end:1px solid var(--wa-color-surface-border)}.header__fd-actions.sc-igl-cal-header-toolbar{display:flex;width:170px;box-sizing:border-box;gap:0.875rem;color:var(--wa-color-text-normal);flex-direction:column}.searchContiner.sc-igl-cal-header-toolbar{padding-inline-start:10px;padding-inline-end:10px}`;

const IglCalHeaderToolbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.actionSelected = createEvent(this, "actionSelected");
        this.roomSelected = createEvent(this, "roomSelected");
    }
    isVacationRental;
    showDayUseButton;
    minDate;
    roomsList = [];
    /** All toolbar-button actions, keyed the same way the existing `optionEvent` payload's `key` already is. */
    actionSelected;
    roomSelected;
    dateSelectRef;
    handleAction(key, data = '') {
        this.actionSelected.emit({ key, data });
    }
    handleDateSelect(event) {
        if (Object.keys(event.detail).length > 0) {
            this.handleAction('calendar', event.detail);
        }
    }
    handleScrollToRoom(roomId) {
        this.roomSelected.emit({ roomId });
    }
    render() {
        return (h(Host, { key: 'cb8e185186fbe626c8d79129b47052315ddea2fb' }, h("div", { key: 'b575a748d88477f5737714077df1af540f50057a', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, h("div", { key: '22328d1641ebe081a3ef89afff50ad287c11b145', class: "header__fd-actions" }, h("div", { key: '0041b6ef4f695695b593876168aeb24f99616bf1', class: "row justify-content-around no-gutters", style: { gap: '0' } }, !this.isVacationRental && (h(Fragment, { key: 'f781878f7baf74904bd9bc69e65e2126b920556c' }, h("wa-tooltip", { key: 'f74a72db3126eb2998863e3d41f466933a5d9f78', trigger: "hover", for: "fd-unassigned-dates_btn" }, t('Lcz_UnassignedUnitsTooltip')), h("ir-custom-button", { key: '6f566193ed573a0e481ac31b12ff14305b5d25e9', id: "fd-unassigned-dates_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('showAssigned') }, h("wa-icon", { key: '3617168033912e19f09d7ff049d39315907561bc', style: { fontSize: '1.3rem' }, name: "list-ol", label: t('Lcz_UnassignedUnitsTooltip'), "aria-label": t('Lcz_UnassignedUnitsTooltip') })))), this.showDayUseButton && (h(Fragment, { key: '99125d0c4def3f0ac5ca95ef2936a285e4ad4abe' }, h("wa-tooltip", { key: 'f25d24abbc507fcc3b3d4f8da67e2c0b76336f84', trigger: "hover", for: "fd-day-use-bookings_btn" }, t('Lcz_DayUseBookings', { fallback: 'Day Use Bookings' })), h("ir-custom-button", { key: '1cc66b738b606aa13508c47ac6fb6abcd01b2b39', id: "fd-day-use-bookings_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('showDayUseBookings') }, h("wa-icon", { key: '61c3be97f7c93a1b5636069a2db79f7125582c3f', style: { fontSize: '1.3rem' }, name: "sun", label: t('Lcz_DayUse', { fallback: 'Day use' }), "aria-label": t('Lcz_DayUse', { fallback: 'Day use' }) })))), h("wa-tooltip", { key: 'fd4acedc50244e03af7b094a537ccdd9dfc3f86a', trigger: "hover", for: "fd-dates-navigation_btn" }, t('Lcz_Navigate')), h("ir-date-select", { key: 'e358f53c797534fee7c1b4fd8ac9dd2f9804f97c', minDate: this.minDate, onDateChanged: evt => this.handleDateSelect(evt), ref: el => (this.dateSelectRef = el) }, h("ir-custom-button", { key: 'f08631c9846fdf7e18cd54ac09d0f06e959fc2b3', slot: "trigger", id: "fd-dates-navigation_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('calendar') }, h("wa-icon", { key: '27fe417d6d7e4257c8d9f2c6773cdbdc1dfed4ff', style: { fontSize: '1.3rem' }, name: "calendar-days", variant: "regular", label: t('Lcz_Navigate'), "aria-label": t('Lcz_Navigate') })), h("div", { key: 'f1742e375f26c5d267f5264064e792fe1cb02e9b', class: "fd-dates__actions" }, h("wa-divider", { key: '4f99c883fa1526f16e454d9db9fc0f0e4216b822' }), h("ir-custom-button", { key: '3143c92a4d49186475cd8264e048b26f1d016a02', variant: "neutral", appearance: "outlined", onClickHandler: () => {
                this.handleAction('gotoToday');
                this.dateSelectRef.hide();
            } }, t('Lcz_Today', { fallback: 'Today' })))), h("wa-tooltip", { key: 'a3956cab0a2fe41cfea2b2b31193c54bc1895e3c', trigger: "hover", for: "fd-rectifier" }, t('Lcz_RectifyOrOpenAvailability', { fallback: 'Rectify or open availability' })), h("ir-custom-button", { key: 'e6831e836c896d0a63edf6866400eff25203fb62', id: "fd-rectifier", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('rectify') }, h("wa-icon", { key: 'fe43c6f25c575a02266097e7a17e1ae0b3286245', style: { fontSize: '1.3rem' }, name: "circle-check", variant: "regular", label: t('Lcz_RectifyOrOpenAvailability', { fallback: 'Rectify or open availability' }), "aria-label": t('Lcz_RectifyOrOpenAvailability', { fallback: 'Rectify or open availability' }) })), h(Fragment, { key: 'ec15395b2fcd7fd2b79f3d1d2e54555659c6cc81' }, h("wa-tooltip", { key: '77f471b03d5f22c60cd380affa488e1d40885d35', trigger: "hover", for: "fd-stop-open-sale_btn" }, t('Lcz_StopOpenSale')), h("ir-custom-button", { key: 'b63ee717b9b219b36ebf91201f26667ff7519a9a', id: "fd-stop-open-sale_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('bulk') }, h("wa-icon", { key: 'b5bc5e95829c8a8da00a92208f1282f659dfafee', style: { fontSize: '1.3rem' }, name: "xmarks-lines", label: t('Lcz_StopOpenSale'), "aria-label": t('Lcz_StopOpenSale') })))), this.roomsList.length >= 20 && (h("div", { key: '0e89d799bf22b920fdca29981b817915821afe32', class: "searchContiner" }, h("ir-picker", { key: 'dc086a2a181034089e0d6354c7e43ca69a3bb18c', size: "s", "onCombobox-select": e => {
                this.handleScrollToRoom(Number(e.detail.item.value));
            } }, this.roomsList.map(room => (h("ir-picker-item", { label: room.name, value: String(room.id) }, room.name))))))))));
    }
};
IglCalHeaderToolbar.style = iglCalHeaderToolbarCss();

const iglDayUseBookingsCss = () => `.sc-igl-day-use-bookings-h{--spacing:var(--wa-space-l);display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-s);text-align:start;background-color:var(--wa-color-surface-default);border-inline-end:2px solid var(--wa-color-surface-border)}.dub-panel.sc-igl-day-use-bookings{display:flex;flex-direction:column;min-height:100%}.dub-panel__head.sc-igl-day-use-bookings{position:sticky;top:0;z-index:1;font-family:var(--wa-font-family-heading);background-color:var(--wa-color-surface-default)}.dub-panel__header.sc-igl-day-use-bookings{display:flex;align-items:center;justify-content:space-between;gap:0.5rem;box-sizing:border-box;padding-inline:var(--spacing);padding-block:calc(var(--spacing) / 2);border-bottom:1px solid var(--wa-color-surface-border)}.dub-panel__title.sc-igl-day-use-bookings{flex:1 1 auto;margin:0;font-size:var(--wa-font-size-l);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);font-family:var(--wa-font-family-heading);color:var(--wa-color-text-normal)}.dub-panel__toolbar.sc-igl-day-use-bookings{padding:var(--spacing);padding-block-end:0}.dub-panel__body.sc-igl-day-use-bookings{display:flex;flex:1 1 auto;flex-direction:column;gap:1.25rem;padding:var(--spacing)}.dub-category.sc-igl-day-use-bookings{display:flex;flex-direction:column;gap:0.5rem}.dub-category__title.sc-igl-day-use-bookings{margin:0;color:var(--wa-color-text-normal);font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);font-size:var(--wa-font-size-m);text-wrap:balance}.dub-category__list.sc-igl-day-use-bookings{display:flex;flex-direction:column;gap:0.5rem}.dub-booking.sc-igl-day-use-bookings{display:flex;flex-direction:column;gap:0.35rem;width:100%;padding:0.65rem 0.75rem;border:1px solid var(--wa-color-surface-border);border-radius:var(--wa-border-radius-m, 6px);background:var(--wa-color-surface-default);font:inherit;color:inherit;text-align:start;cursor:pointer;transition:background-color var(--wa-transition-fast, 150ms) ease-out,     border-color var(--wa-transition-fast, 150ms) ease-out}.dub-booking.sc-igl-day-use-bookings:hover{background:var(--wa-color-neutral-fill-quiet);border-color:var(--wa-color-neutral-border-loud)}.dub-booking.sc-igl-day-use-bookings:focus-visible{outline:var(--wa-focus-ring, 2px solid var(--wa-color-brand-fill-loud));outline-offset:2px}.dub-booking__main.sc-igl-day-use-bookings{display:flex;align-items:center;gap:0.5rem;min-width:0}.dub-booking__price.sc-igl-day-use-bookings{flex-shrink:0;margin-inline-start:auto;color:var(--wa-color-text-normal);font-weight:var(--wa-font-weight-action, 600);font-variant-numeric:tabular-nums;font-size:var(--wa-font-size-2xs, 0.75rem)}.dub-booking__number.sc-igl-day-use-bookings{flex-shrink:0;color:var(--wa-color-text-quiet);font-variant-numeric:tabular-nums;font-size:var(--wa-font-size-2xs, 0.75rem)}.dub-booking__guest.sc-igl-day-use-bookings{flex:1 1 auto;min-width:0;color:var(--wa-color-text-quiet);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.dub-booking__meta.sc-igl-day-use-bookings{display:flex;align-items:center;gap:0.5rem}.dub-booking__time.sc-igl-day-use-bookings{font-variant-numeric:tabular-nums;color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-2xs, 0.75rem)}.dub-status.sc-igl-day-use-bookings{flex-shrink:0;padding:0.1rem 0.5rem;border-radius:999px;font-size:var(--wa-font-size-2xs, 0.7rem);font-weight:var(--wa-font-weight-action, 600);white-space:nowrap}.dub-status--scheduled.sc-igl-day-use-bookings{background:var(--wa-color-neutral-fill-quiet);color:var(--wa-color-neutral-on-quiet)}.dub-status--upcoming.sc-igl-day-use-bookings{background:var(--wa-color-brand-fill-quiet);color:var(--wa-color-brand-on-quiet)}.dub-status--in-progress.sc-igl-day-use-bookings{background:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet)}.dub-booking__movements.sc-igl-day-use-bookings{display:flex;flex-wrap:wrap;align-items:center;gap:0.35rem;padding-block-start:0.35rem;border-top:1px dashed var(--wa-color-surface-border)}.dub-movement.sc-igl-day-use-bookings{display:inline-flex;align-items:center;gap:0.3rem;padding:0.1rem 0.45rem;border-radius:999px;font-size:var(--wa-font-size-2xs, 0.7rem);font-weight:var(--wa-font-weight-action, 600);white-space:nowrap}.dub-movement__icon.sc-igl-day-use-bookings{font-size:0.75rem}.dub-movement__time.sc-igl-day-use-bookings{font-weight:var(--wa-font-weight-normal, 400);font-variant-numeric:tabular-nums}.dub-movement--departure.sc-igl-day-use-bookings{background:var(--wa-color-warning-fill-quiet);color:var(--wa-color-warning-on-quiet)}.dub-movement--arrival.sc-igl-day-use-bookings{background:var(--wa-color-brand-fill-quiet);color:var(--wa-color-brand-on-quiet)}.dub-movement--turnover.sc-igl-day-use-bookings{background:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet)}.dub-movement-tip.sc-igl-day-use-bookings{display:flex;flex-direction:column;gap:0.25rem;text-align:start}.dub-movement-tip__line.sc-igl-day-use-bookings{display:flex;align-items:center;gap:0.35rem;white-space:nowrap}.dub-movement-tip__label.sc-igl-day-use-bookings{font-weight:var(--wa-font-weight-action, 600)}.dub-movement-tip__time.sc-igl-day-use-bookings{font-variant-numeric:tabular-nums}`;

function getStatusLabel(status) {
    switch (status) {
        case 'scheduled':
            return t('Lcz_Scheduled', { fallback: 'Scheduled' });
        case 'upcoming':
            return t('Lcz_Upcoming', { fallback: 'Upcoming' });
        case 'in-progress':
            return t('Lcz_InProgress', { fallback: 'In Progress' });
    }
}
const GUEST_NAME_CROP_SIZE = 16;
const MOVEMENT_ICON = {
    departure: 'plane-departure',
    arrival: 'plane-arrival',
};
function getMovementLabel(kind) {
    return kind === 'departure' ? t('Lcz_Departure', { fallback: 'Departure' }) : t('Lcz_Arrival', { fallback: 'Arrival' });
}
/** `_DEPARTURE_TIME` code meaning the guest never picked one — the property's standard check-out applies. */
const UNSET_DEPARTURE_TIME_CODE = '000';
/** `_ARRIVAL_TIME` code for "Not sure yet" — same idea, the property's standard check-in applies. */
const UNSET_ARRIVAL_TIME_CODE = '001';
const IglDayUseBookings = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.optionEvent = createEvent(this, "optionEvent");
        this.showBookingPopup = createEvent(this, "showBookingPopup");
    }
    /** Day-use bookings for whatever calendar window has been loaded (from `getDayUseBookingsForCalendar`) — same source `igl-cal-body` uses for its cell markers. */
    dayUseBookings = [];
    calendarData;
    selectedDate = '';
    optionEvent;
    showBookingPopup;
    componentWillLoad() {
        this.selectDefaultDate();
    }
    handleDayUseBookingsChange() {
        if (!this.orderedDates.includes(this.selectedDate)) {
            this.selectDefaultDate();
        }
    }
    selectDefaultDate() {
        const today = hooks().format('YYYY-MM-DD');
        const dates = this.orderedDates;
        this.selectedDate = dates.includes(today) ? today : (dates[0] ?? today);
    }
    get orderedDates() {
        const today = hooks().format('YYYY-MM-DD');
        return Array.from(new Set(this.dayUseBookings.map(booking => booking.target_date)))
            .filter(date => date >= today)
            .sort();
    }
    get bookingsForSelectedDate() {
        return this.dayUseBookings.filter(booking => booking.target_date === this.selectedDate);
    }
    getUnitName(unitId) {
        for (const roomType of this.calendarData?.roomsInfo ?? []) {
            const unit = roomType.physicalrooms?.find(room => room.id === unitId);
            if (unit) {
                return unit.name;
            }
        }
        return '';
    }
    getRoomTypeName(roomTypeId) {
        return this.calendarData?.roomsInfo?.find(roomType => roomType.id === roomTypeId)?.name ?? '';
    }
    getGuestName(booking) {
        const name = [booking.guest_first_name, booking.guest_last_name].filter(Boolean).join(' ').trim();
        if (name) {
            return name;
        }
        const bookingEvent = (this.calendarData?.bookingEvents ?? []).find(event => event.BOOKING_NUMBER?.toString() === booking.book_nbr?.toString());
        return bookingEvent?.NAME ?? '';
    }
    getPrice(amount) {
        return formatAmount(this.calendarData?.currency?.symbol ?? '', Number(amount ?? 0));
    }
    getStatus(booking) {
        if (booking.target_date !== hooks().format('YYYY-MM-DD')) {
            return 'scheduled';
        }
        const from = hooks(`${booking.target_date} ${booking.from_time}`, 'YYYY-MM-DD HH:mm');
        return hooks().isBefore(from) ? 'upcoming' : 'in-progress';
    }
    formatTime(time) {
        const [hour, minute] = time.split(':');
        return _formatTime(hour, minute);
    }
    groupByRoomType(bookings) {
        const grouped = new Map();
        bookings.forEach(booking => {
            const list = grouped.get(booking.room_type_id) ?? [];
            list.push(booking);
            grouped.set(booking.room_type_id, list);
        });
        return grouped;
    }
    openBookingDetails(booking) {
        this.showBookingPopup.emit({
            key: 'add',
            data: {
                BOOKING_NUMBER: booking.book_nbr,
                event_type: 'EDIT_BOOKING',
                TITLE: `${t('Lcz_EditBookingFor', { fallback: 'Edit Booking For' })} ${this.getGuestName(booking)}`,
            },
        });
    }
    handleOptionEvent(key) {
        this.optionEvent.emit({ key, data: '' });
    }
    /**
     * Stays sitting on the same unit — day-use rows are extra services and never appear in `bookingEvents`,
     * and blocks are filtered out since they carry no booking number.
     */
    getStayEvents(unitId) {
        return (this.calendarData?.bookingEvents ?? []).filter((event) => event.PR_ID === unitId && !!event.BOOKING_NUMBER);
    }
    /** `FROM_DATE`/`TO_DATE` are clamped to the loaded window, so the untouched `defaultDates` win when present. */
    getStayDates(event) {
        return {
            from: event.defaultDates?.from_date ?? event.FROM_DATE,
            to: event.defaultDates?.to_date ?? event.TO_DATE,
        };
    }
    getStayRoom(event) {
        return (event.ROOMS ?? []).find(room => room.identifier === event.IDENTIFIER);
    }
    /** Accepts both `HH:mm` values (formatted to `hh:mm A`) and plain setup labels such as "Not sure yet". */
    formatClockTime(value) {
        if (!value) {
            return null;
        }
        const match = value.match(/^(\d{1,2}):(\d{2})/);
        return match ? _formatTime(match[1], match[2]) : value.trim() || null;
    }
    getDepartureTime(event) {
        const departure = event.DEPARTURE_TIME ?? this.getStayRoom(event)?.departure_time;
        const requested = departure?.code && departure.code !== UNSET_DEPARTURE_TIME_CODE ? departure.description : null;
        return requested
            ? { time: this.formatClockTime(requested), isStandard: false }
            : { time: this.formatClockTime(calendar_data.property?.time_constraints?.check_out_till), isStandard: true };
    }
    getArrivalTime(event) {
        const arrival = this.getStayRoom(event)?.arrival_time;
        const requested = arrival?.code && arrival.code !== UNSET_ARRIVAL_TIME_CODE ? arrival.description : null;
        return requested
            ? { time: this.formatClockTime(requested), isStandard: false }
            : { time: this.formatClockTime(calendar_data.property?.time_constraints?.check_in_from), isStandard: true };
    }
    toStayMovement(kind, event) {
        const { time, isStandard } = kind === 'departure' ? this.getDepartureTime(event) : this.getArrivalTime(event);
        return { kind, bookingNumber: event.BOOKING_NUMBER, guestName: event.NAME ?? '', time, isStandard };
    }
    /**
     * The same-day movements the day use has to fit around: the stay leaving that morning, the stay
     * arriving that evening, or — when both exist — the turnover between the two.
     */
    getStayMovements(booking) {
        const events = this.getStayEvents(booking.unit_id);
        const movements = [];
        const departing = events.find(event => this.getStayDates(event).to === booking.target_date);
        if (departing) {
            movements.push(this.toStayMovement('departure', departing));
        }
        const arriving = events.find(event => this.getStayDates(event).from === booking.target_date);
        if (arriving) {
            movements.push(this.toStayMovement('arrival', arriving));
        }
        return movements;
    }
    /** Movement chips plus the tooltip spelling out the stay(s) behind them — both bookings when it's a turnover. */
    renderStayMovements(booking, movements) {
        const movementsId = `dub-movements-${booking.bh_id}`;
        const isTurnover = movements.length > 1;
        return (h(Fragment, null, h("div", { class: "dub-booking__movements", id: movementsId }, isTurnover && (h("span", { class: "dub-movement dub-movement--turnover" }, h("wa-icon", { name: "rotate", class: "dub-movement__icon" }), t('Lcz_Turnover', { fallback: 'Turnover' }))), movements.map(movement => (h("span", { class: `dub-movement dub-movement--${movement.kind}`, key: `${movementsId}-${movement.kind}` }, h("wa-icon", { name: MOVEMENT_ICON[movement.kind], class: "dub-movement__icon" }), getMovementLabel(movement.kind), movement.time && h("span", { class: "dub-movement__time" }, movement.time))))), h("wa-tooltip", { for: movementsId, placement: "top" }, h("span", { class: "dub-movement-tip" }, movements.map(movement => (h("span", { class: "dub-movement-tip__line", key: `${movementsId}-tip-${movement.kind}` }, h("span", { class: "dub-movement-tip__label" }, getMovementLabel(movement.kind)), h("span", null, "#", formatBookingNumber(movement.bookingNumber), movement.guestName ? ` \u00b7 ${movement.guestName}` : ''), movement.time && (h("span", { class: "dub-movement-tip__time" }, movement.time, movement.isStandard ? ` ${t('Lcz_StandardSuffix', { fallback: '(standard)' })}` : '')))))))));
    }
    renderBooking(booking) {
        const guestName = this.getGuestName(booking);
        const guestNameId = `dub-guest-${booking.bh_id}`;
        const status = this.getStatus(booking);
        const movements = this.getStayMovements(booking);
        return (h("button", { type: "button", class: "dub-booking", key: `booking-${booking.bh_id}`, onClick: () => this.openBookingDetails(booking) }, h("div", { class: "dub-booking__main" }, h("ir-unit-tag", { unit: this.getUnitName(booking.unit_id) }), h("span", { class: "dub-booking__time" }, this.formatTime(booking.from_time), " \u2013 ", this.formatTime(booking.to_time)), h("span", { class: "dub-booking__price" }, this.getPrice(booking.gross_amount))), h("div", { class: "dub-booking__meta" }, h("span", { class: "dub-booking__number" }, "#", booking.book_nbr), guestName && (h("span", { class: "dub-booking__guest", id: guestNameId }, guestName)), guestName && guestName.length > GUEST_NAME_CROP_SIZE && (h("wa-tooltip", { for: guestNameId, placement: "top" }, guestName)), h("span", { class: `dub-status dub-status--${status}` }, getStatusLabel(status))), movements.length > 0 && this.renderStayMovements(booking, movements)));
    }
    renderCategory(roomTypeId, bookings) {
        return (h("div", { class: "dub-category", key: `category-${roomTypeId}` }, h("h5", { class: "dub-category__title" }, this.getRoomTypeName(roomTypeId)), h("div", { class: "dub-category__list" }, bookings.sort((a, b) => a.from_time.localeCompare(b.from_time)).map(booking => this.renderBooking(booking)))));
    }
    render() {
        const bookings = this.bookingsForSelectedDate;
        const grouped = this.groupByRoomType(bookings);
        const hasDates = this.orderedDates.length > 0;
        const isEmpty = bookings.length === 0;
        return (h(Host, { key: '843cc9833cfd1e5f2e6c6b9b2cf2af9c4395cc15' }, h("div", { key: 'c6e9677a50df62cd6dacb1528589802c0e3fb708', class: "dub-panel" }, h("div", { key: 'b47dffb7a8b4317d84988cb2b1776bd7678474fc', class: "dub-panel__head" }, h("header", { key: '571dcbf4c090e0f43bf50c76480f57617337854d', class: "dub-panel__header" }, h("h2", { key: 'd2ad9db8d7af3109470c5c615e3761cad840b288', class: "dub-panel__title", id: "day-use-bookings-title" }, t('Lcz_DayUseBookings', { fallback: 'Day Use Bookings' })), h("ir-custom-button", { key: '17eb8fc2b15ccbc62177baa3f2c570b6c0183af5', size: "m", appearance: "plain", variant: "neutral", onClickHandler: () => this.handleOptionEvent('closeSideMenu') }, h("wa-icon", { key: 'b703dab61ab056ec47c72b4a4f6b944930692b5a', name: "xmark", variant: "solid", label: t('Lcz_Close', { fallback: 'Close' }), "aria-label": t('Lcz_Close', { fallback: 'Close' }), role: "img" }))), hasDates && (h("div", { key: '3596c13f67716c42b9d081091bb5ee0956788804', class: "dub-panel__toolbar" }, h("wa-select", { key: '067da5d8c7300de9deaafaa9b0fa7e4d0b93f67c', size: "s", "aria-label": t('Lcz_DateLabel', { fallback: 'Date' }), value: this.selectedDate, defaultValue: this.selectedDate, onchange: evt => (this.selectedDate = evt.target.value) }, this.orderedDates.map(date => (h("wa-option", { value: date }, formatDate(date, 'ddd, DD MMM YYYY')))))))), h("div", { key: '0d1eb9acc3af8f0ce0fa186442d35e522cead39a', class: "dub-panel__body" }, isEmpty ? (h("ir-empty-state", { message: t('Lcz_NoDayUseBookingsForDate', { fallback: 'No day-use bookings for this date.' }) })) : (Array.from(grouped.entries()).map(([roomTypeId, roomTypeBookings]) => this.renderCategory(roomTypeId, roomTypeBookings)))))));
    }
    static get watchers() { return {
        "dayUseBookings": [{
                "handleDayUseBookingsChange": 0
            }]
    }; }
};
IglDayUseBookings.style = iglDayUseBookingsCss();

const iglHkIssuesDialogCss = () => `.sc-igl-hk-issues-dialog-h{display:block;text-align:start;--issue-ease:cubic-bezier(0.23, 1, 0.32, 1)}.issues.sc-igl-hk-issues-dialog{display:flex;flex-direction:column;gap:0.75rem}.issues__toolbar.sc-igl-hk-issues-dialog{display:flex;align-items:center;justify-content:space-between;gap:0.75rem}.issues__count.sc-igl-hk-issues-dialog{font-size:0.8125rem;font-weight:600;color:var(--wa-color-neutral-on-quiet)}.issues__select-all.sc-igl-hk-issues-dialog{appearance:none;border:none;background:none;font:inherit;font-size:0.8125rem;font-weight:600;color:var(--wa-color-brand-fill-loud);padding:0.25rem 0.375rem;margin-inline-end:-0.375rem;border-radius:0.375rem;cursor:pointer;transition:background-color 150ms var(--issue-ease),     transform 120ms ease-out}.issues__select-all.sc-igl-hk-issues-dialog:active{transform:scale(0.96)}.issues__select-all.sc-igl-hk-issues-dialog:focus-visible{outline:var(--wa-focus-ring, 2px solid var(--wa-color-brand-fill-loud));outline-offset:var(--wa-focus-ring-offset, 2px)}@media (hover: hover) and (pointer: fine){.issues__select-all.sc-igl-hk-issues-dialog:hover{background-color:var(--wa-color-brand-fill-quiet)}}.issues__list.sc-igl-hk-issues-dialog{display:flex;flex-direction:column;gap:0.5rem;max-height:min(52vh, 26rem);overflow-y:auto;overscroll-behavior:contain;padding-inline-end:0.125rem}.issue.sc-igl-hk-issues-dialog{display:flex;gap:0.75rem;padding:0.75rem 0.875rem;border-radius:var(--wa-panel-border-radius, 0.5rem);border:var(--wa-panel-border-width, 1px) var(--wa-panel-border-style, solid) var(--wa-color-neutral-stroke-quiet);background:var(--wa-color-neutral-surface);transition:background-color 150ms var(--issue-ease),     border-color 150ms var(--issue-ease),     box-shadow 150ms var(--issue-ease);animation:issue-in var(--wa-transition-normal, 220ms) var(--issue-ease) both}.issue.sc-igl-hk-issues-dialog:nth-child(1){animation-delay:0ms}.issue.sc-igl-hk-issues-dialog:nth-child(2){animation-delay:40ms}.issue.sc-igl-hk-issues-dialog:nth-child(3){animation-delay:80ms}.issue.sc-igl-hk-issues-dialog:nth-child(4){animation-delay:120ms}.issue.sc-igl-hk-issues-dialog:nth-child(5){animation-delay:160ms}.issue.sc-igl-hk-issues-dialog:nth-child(6){animation-delay:200ms}.issue.sc-igl-hk-issues-dialog:nth-child(n+7){animation-delay:240ms}@keyframes issue-in{from{opacity:0;transform:translateY(6px)}to{opacity:1}}.issue--selectable.sc-igl-hk-issues-dialog{cursor:pointer}.issue--selectable.sc-igl-hk-issues-dialog:active{transform:scale(0.99)}.issue--selectable.sc-igl-hk-issues-dialog:focus-visible{outline:var(--wa-focus-ring, 2px solid var(--wa-color-brand-fill-loud));outline-offset:var(--wa-focus-ring-offset, 2px)}.issue--selected.sc-igl-hk-issues-dialog{border-color:var(--wa-color-brand-fill-loud);background:var(--wa-color-brand-fill-quiet)}@media (hover: hover) and (pointer: fine){.issue--selectable.sc-igl-hk-issues-dialog:not(.issue--selected):hover{border-color:var(--wa-color-brand-fill-loud)}}.issue__check.sc-igl-hk-issues-dialog{flex-shrink:0;margin-block-start:0.0625rem;pointer-events:none}.issue__body.sc-igl-hk-issues-dialog{display:flex;flex-direction:column;gap:0.25rem;min-width:0}.issue__description.sc-igl-hk-issues-dialog{margin:0;font-size:0.875rem;line-height:1.5;color:var(--wa-color-neutral-on-surface);white-space:pre-wrap;word-break:break-word}.issue__description--empty.sc-igl-hk-issues-dialog{font-style:italic;color:var(--wa-color-neutral-on-quiet)}.issue__meta.sc-igl-hk-issues-dialog{margin:0;display:flex;align-items:center;flex-wrap:wrap;gap:0.375rem;font-size:0.75rem;color:var(--wa-color-neutral-on-quiet)}.issue__reporter.sc-igl-hk-issues-dialog{font-weight:600;color:var(--wa-color-neutral-on-surface)}.issue__sep.sc-igl-hk-issues-dialog{opacity:0.6}.issues__error.sc-igl-hk-issues-dialog{animation:issue-error-in 200ms ease-out both}@keyframes issue-error-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1}}@keyframes issue-fade{from{opacity:0}to{opacity:1}}.footer.sc-igl-hk-issues-dialog{display:flex;align-items:center;justify-content:flex-end;gap:0.5rem}.footer__hint.sc-igl-hk-issues-dialog{margin-inline-end:auto;font-size:0.8125rem;font-weight:600;color:var(--wa-color-neutral-on-quiet)}@media (prefers-reduced-motion: reduce){.issue.sc-igl-hk-issues-dialog,.issues__error.sc-igl-hk-issues-dialog{animation-name:issue-fade}.issue--selectable.sc-igl-hk-issues-dialog:active,.issues__select-all.sc-igl-hk-issues-dialog:active{transform:none}}`;

const IglHkIssuesDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.irAfterClose = createEvent(this, "irAfterClose");
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
    handleOpenChange(isOpen) {
        this.error = null;
        if (isOpen) {
            this.dialogRef?.openModal();
        }
        else {
            this.dialogRef?.closeModal();
        }
    }
    handleIssuesChange(newIssues) {
        // A single issue is the only thing to act on — pre-select it.
        this.selectedIds = newIssues?.length === 1 ? new Set([newIssues[0].id]) : new Set();
    }
    get isMultiple() {
        return (this.issues?.length ?? 0) > 1;
    }
    get allSelected() {
        return !!this.issues?.length && this.selectedIds.size === this.issues.length;
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
    toggleSelectAll = () => {
        this.selectedIds = this.allSelected ? new Set() : new Set(this.issues.map(issue => issue.id));
    };
    handleRowKeyDown = (event, id) => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            this.toggleIssue(id);
        }
    };
    handleResolve = async () => {
        if (!this.selectedIds.size || this.isResolving) {
            return;
        }
        this.isResolving = true;
        this.error = null;
        try {
            await this.houseKeepingService.resolveHKIssue({ issue_ids: Array.from(this.selectedIds) });
            this.dialogRef?.closeModal();
        }
        catch (e) {
            this.error = e instanceof Error ? e.message : t('Lcz_FailedToResolveGeneric', { fallback: 'Failed to resolve. Please try again.' });
        }
        finally {
            this.isResolving = false;
        }
    };
    formatReportedAt(issue) {
        const date = formatDate(issue.date, 'MMM D, YYYY');
        if (issue.hour == null || issue.minute == null) {
            return date;
        }
        const pad = { minimumIntegerDigits: 2, useGrouping: false };
        const time = `${formatNumber(issue.hour, pad)}:${formatNumber(issue.minute, pad)}`;
        return `${date} · ${time}`;
    }
    renderIssue(issue) {
        const selectable = this.isMultiple;
        const isSelected = this.selectedIds.has(issue.id);
        const description = issue.description?.trim();
        return (h("div", { key: issue.id, class: { 'issue': true, 'issue--selectable': selectable, 'issue--selected': isSelected }, role: selectable ? 'checkbox' : undefined, "aria-checked": selectable ? String(isSelected) : undefined, tabindex: selectable ? 0 : undefined, onClick: selectable ? () => this.toggleIssue(issue.id) : undefined, onKeyDown: selectable ? (event) => this.handleRowKeyDown(event, issue.id) : undefined }, selectable && h("wa-checkbox", { class: "issue__check", checked: isSelected, tabIndex: -1 }), h("div", { class: "issue__body" }, h("p", { class: { 'issue__description': true, 'issue__description--empty': !description } }, description || 'No description provided'), h("p", { class: "issue__meta" }, h("span", { class: "issue__reporter" }, issue.housekeeper_name || t('Lcz_UnknownHousekeeper', { fallback: 'Unknown housekeeper' })), h("span", { class: "issue__sep", "aria-hidden": "true" }, "\u00B7"), h("span", { class: "issue__date" }, this.formatReportedAt(issue))))));
    }
    renderBody() {
        if (!this.open) {
            return null;
        }
        if (!this.issues?.length) {
            return h("ir-empty-state", { message: t('Lcz_NoIssuesReportedForUnit', { fallback: 'No issues reported for this unit.' }) });
        }
        return (h("div", { class: "issues" }, this.isMultiple && (h("div", { class: "issues__toolbar" }, h("span", { class: "issues__count" }, t('Lcz_IssuesReportedCount', { params: [formatCount(this.issues.length)], fallback: `${this.issues.length} issues reported` })), h("button", { type: "button", class: "issues__select-all", onClick: this.toggleSelectAll }, this.allSelected ? t('Lcz_Clear', { fallback: 'Clear' }) : t('Lcz_SelectAll', { fallback: 'Select all' })))), h("div", { class: "issues__list", role: this.isMultiple ? 'group' : undefined, "aria-label": this.isMultiple ? 'Reported issues' : undefined }, this.issues.map(issue => this.renderIssue(issue))), this.error && (h("div", { class: "issues__error", role: "alert" }, h("wa-callout", { variant: "danger" }, h("wa-icon", { slot: "icon", name: "circle-exclamation" }), this.error)))));
    }
    render() {
        const multiple = (this.issues?.length ?? 0) > 1;
        const selectedCount = this.selectedIds.size;
        const unitSuffix = this.unitName ? ` · ${this.unitName}` : '';
        return (h("ir-dialog", { key: 'decac3958524e53338c076d884b649ae5a5b06f1', ref: el => (this.dialogRef = el), label: `${multiple ? t('Lcz_ReportedIssues', { fallback: 'Reported Issues' }) : t('Lcz_ReportedIssue', { fallback: 'Reported Issue' })}${unitSuffix}`, onIrDialogAfterHide: () => this.irAfterClose.emit() }, this.renderBody(), h("div", { key: 'aac15118c53750ffe09ff888b508cfe45b79bd35', slot: "footer", class: "footer" }, multiple && selectedCount > 0 && h("span", { key: 'c840e5435c2f11b7e30dafc5a8dc1f2756e14158', class: "footer__hint" }, t('Lcz_SelectedItemsCount', { params: [selectedCount], fallback: `${selectedCount} selected` })), h("ir-custom-button", { key: '9bec0660942d6180c4fe15e998ac9c28519a07b9', variant: "neutral", size: "m", appearance: "filled", onClickHandler: () => this.dialogRef?.closeModal(), disabled: this.isResolving }, t('Lcz_Close', { fallback: 'Close' })), h("ir-custom-button", { key: '938569232d22e3b218df840540d91fa005d5741c', variant: "brand", size: "m", appearance: "accent", onClickHandler: this.handleResolve, disabled: selectedCount === 0, loading: this.isResolving }, multiple
            ? selectedCount
                ? t('Lcz_ResolveCount', { params: [selectedCount], fallback: `Resolve ${selectedCount}` })
                : t('Lcz_Resolve', { fallback: 'Resolve' })
            : t('Lcz_MarkAsResolved', { fallback: 'Mark as Resolved' })))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }],
        "issues": [{
                "handleIssuesChange": 0
            }]
    }; }
};
IglHkIssuesDialog.style = iglHkIssuesDialogCss();

const iglHousekeepingDialogCss = () => `.sc-igl-housekeeping-dialog-h{display:block;text-align:start}`;

const IglHousekeepingDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.irAfterClose = createEvent(this, "irAfterClose");
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
                return t('Lcz_Dirty', { fallback: 'dirty' });
            case '004':
                return t('Lcz_Inspected', { fallback: 'inspected' });
            default:
                return 'clean';
        }
    }
    middleButtonLabel() {
        return this.selectedRoom?.hk_status === '002' ? t('Lcz_Clean', { fallback: 'Clean' }) : 'Dirty';
    }
    rightButtonLabel() {
        return this.selectedRoom?.hk_status !== '004' ? t('Lcz_CleanAndInspect', { fallback: 'Clean & Inspect' }) : t('Lcz_Clean', { fallback: 'Clean' });
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
                            description: t('Lcz_Cleaned', { fallback: 'Cleaned' }),
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
        return (h("ir-dialog", { key: '97901a085be391b50704e365a2b5294df9650700', ref: el => (this.dialogRef = el), open: this.open, label: t('Lcz_HousekeepingUpdate', { fallback: 'Housekeeping Update' }), onIrDialogAfterHide: () => this.irAfterClose.emit() }, h("p", { key: '47a2ac19a93ee0ad70c3d719f483f3fe3d4fee4d', style: { margin: '0' } }, this.selectedRoom?.name, " ", t('Lcz_UnitCurrentlyMarkedAs', { fallback: 'is currently marked as' }), " ", this.getStatusLabel(), "."), h("div", { key: 'cc8b3f2ff6a024c2d44c9c848ab0eded7927ff50', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '10b60bb697a72914841e9ffa06da1da5a3a06cbf', "data-dialog": "close", size: "m", variant: "neutral", appearance: "filled" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '33e22b966cb1fa0bedf5ecfcdd3d701e5594b343', value: "hk-toggle-clean-dirty", size: "m", variant: "brand", appearance: "outlined", loading: this.isLoading === 'hk-toggle-clean-dirty', onClickHandler: e => this.updateHousekeeping(e, this.selectedRoom.hk_status === '002' ? '001' : '002') }, this.middleButtonLabel()), h("ir-custom-button", { key: '4cb5fb3d99ca5f9ddfb9e7580aae1f17163aa3dd', value: "hk-clean-inspect", size: "m", variant: "brand", appearance: "accent", loading: this.isLoading === 'hk-clean-inspect', onClickHandler: e => this.updateHousekeeping(e, this.selectedRoom.hk_status === '004' ? '001' : '004') }, this.rightButtonLabel()))));
    }
};
IglHousekeepingDialog.style = iglHousekeepingDialogCss();

const iglLegendCss = () => `.sc-igl-legend-h{--spacing:var(--wa-space-l);display:block;width:max-content;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-s);background-color:var(--wa-color-surface-default);border-inline-end:2px solid var(--wa-color-surface-border);text-align:start}.legend_skew.pending.sc-igl-legend{border-width:1px;border-style:dashed;border-color:var(--wa-color-success-fill-loud);background-color:var(--wa-color-surface-default) !important}.legend_skew.in-house.sc-igl-legend{background-color:var(--wa-color-brand-fill-quiet) !important;color:var(--wa-color-brand-on-quiet) !important;width:30px;transform:skew(0);border-radius:0;vertical-align:middle;font-size:12px;text-align:center}.legendRow.sc-igl-legend{position:relative;vertical-align:middle;margin-bottom:0.3rem}.legendRow.sc-igl-legend div.sc-igl-legend{display:inline-block;vertical-align:middle}.legend_skew.sc-igl-legend,.legend_skew-bordered.sc-igl-legend,.legend_skewsplit.sc-igl-legend{transform:skew(-22deg);width:15px;height:16px;border-radius:4px;background-color:var(--ir-skew-background)}.legend_skew.striped.vertical.sc-igl-legend{--stripe-period:17px;--stripe-angle:360deg}.legend_skew.striped.sc-igl-legend{--stripe-period:6px}.legend_skew.split.sc-igl-legend{border-inline-end:4px solid var(--wa-color-text-normal, black)}.legend_skew-bordered.sc-igl-legend{border:1px solid var(--wa-color-text-normal, black)}[dir='rtl'].sc-igl-legend-h .legend_skew.sc-igl-legend:not(.in-house),[dir='rtl'].sc-igl-legend-h .legend_skew-bordered.sc-igl-legend,[dir='rtl'].sc-igl-legend-h .legend_skewsplit.sc-igl-legend{transform:skew(22deg)}.legend_dirty-unit.sc-igl-legend{background-color:white !important;border:1px solid #e0e0e0;height:12px;width:20px;position:relative}.fd-legend__section-title.sc-igl-legend{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;margin:0;padding:0;margin-bottom:1rem;font-size:var(--wa-font-size-m);color:var(--wa-color-text-normal, black)}.legend_dirty-unit.sc-igl-legend::after{content:'';position:absolute;bottom:0;height:100%;inset-inline-start:30%;inset-inline-end:30%;background-color:#d4d0be !important}.legend_circle.sc-igl-legend{border-radius:100%;width:10px;height:10px;margin-block:3px;margin-inline:2px 3px}.legend_skewsplit.sc-igl-legend{border-inline-end:2px solid var(--wa-color-text-normal, black)}.legendCalendar.sc-igl-legend .legendRow.sc-igl-legend{margin-bottom:0}.legendCalendar.sc-igl-legend .legendRow.sc-igl-legend:first-child .legendCal.sc-igl-legend{background-color:var(--wa-color-neutral-fill-normal);color:var(--wa-color-neutral-on-normal)}.legendCalendar.sc-igl-legend .legendRow.sc-igl-legend div.sc-igl-legend{display:inline-block;vertical-align:middle;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.total-availability.sc-igl-legend{font-size:1em !important;font-weight:700}.legendTextarea.sc-igl-legend{border:0;margin:0;padding:0}.legendCalendar.sc-igl-legend .legendCal.sc-igl-legend{width:80px;height:25px;text-align:center;display:inline-grid !important;align-content:center;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendCalendar.sc-igl-legend .legendCal.sc-igl-legend .badge.sc-igl-legend{margin-top:0.2rem;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendCalendar.sc-igl-legend .legendCal.legendCal-h2.sc-igl-legend{height:40px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.br-t.sc-igl-legend{border-top:1px solid var(--wa-color-surface-border)}.br-s.sc-igl-legend{border-inline:1px solid var(--wa-color-surface-border)}.br-bt.sc-igl-legend{border-bottom:1px solid var(--wa-color-surface-border)}.hyphenLegend.sc-igl-legend{-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.hyphenLegend.sc-igl-legend::before{width:12px;height:0.5px;content:' ';background-color:var(--wa-color-text-normal, black);vertical-align:middle;display:inline-block;margin-inline:5px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.fd-legend__title.sc-igl-legend{align-self:center;flex:1 1 auto;font-style:inherit;font-variant:inherit;font-stretch:inherit;font-family:inherit;font-optical-sizing:inherit;font-size-adjust:inherit;font-kerning:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-language-override:inherit;font-size:var(--wa-font-size-l);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);margin:0px;padding:0;color:var(--wa-color-text-normal, black)}.fd-legend__header.sc-igl-legend{display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;background-color:var(--wa-color-surface-default);z-index:1;padding-inline-start:var(--spacing);padding-inline-end:calc(var(--spacing) - var(--wa-form-control-padding-block));padding-block-start:calc(var(--spacing) - var(--wa-form-control-padding-block));padding-block-end:calc(var(--spacing) / 2);border-bottom:1px solid var(--wa-color-surface-border);box-sizing:border-box;background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default))}.fd-legend__shape.sc-igl-legend{display:flex;align-items:center;justify-content:center}.fd-legend__row.sc-igl-legend{display:grid;grid-template-columns:40px 1fr;gap:1rem;margin-bottom:0.5rem}.fd-legend__row-title.sc-igl-legend{padding:0;margin:0;width:fit-content;display:flex;align-items:center;gap:0.5rem}.legendContainer.sc-igl-legend{padding:0 !important}.fd-legend__body.sc-igl-legend{padding:var(--spacing)}.headerCell.sc-igl-legend{width:70px;display:flex;align-items:center;justify-content:center}.dayTitle.sc-igl-legend{font-size:0.8em;font-weight:600;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.dayCapacityPercent.sc-igl-legend{font-size:0.75em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legend_rectangle.sc-igl-legend{height:15px;width:22px}`;

const IglLegend = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.optionEvent = createEvent(this, "optionEvent");
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
        return (h(Host, { key: 'ec81508c3a45c0f7fab1ea75ba607aa3daf0c794', class: "legendContainer", dir: isRtlDirection(locales.direction) ? 'rtl' : 'ltr' }, h("div", { key: '731f80fde485f6e77b295760b5617d207fb5612b', class: "fd-legend__header" }, h("h2", { key: 'c62d0a94614ae57eee766691f975b62a59f03b66', class: "fd-legend__title", id: "legend-title" }, t('Lcz_Legend')), h("ir-custom-button", { key: '0c655eb40df0f2098d6e1f3c51c789a9175d9680', size: "m", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, h("wa-icon", { key: 'e9468a8ffe3068d542b74e9e5227379a76eb068c', name: "xmark", variant: "solid", label: t('Lcz_Close', { fallback: 'Close' }), "aria-label": t('Lcz_Close', { fallback: 'Close' }), role: "img" }))), h("section", { key: '042f6ee97cc99ca798af7a57a7366bb56d7a9898', class: "fd-legend__body" }, h("div", { key: '6edfd85d2cb5eec06a68f7ccad7e9f32ab0d6f5f' }, legend.map(legendInfo => {
            const stripeColor = calendar_data.colorsForegrounds[legendInfo?.color];
            return (h("div", { class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), h("div", { key: 'efc40c3b19dc1b0f6e2013021da25b533386ff90', class: "fd-legend__row" }, h("div", { key: '0f6cd00a336defc7755ab6d6011c6ca03295bf8b', class: 'fd-legend__shape' }, h("wa-icon", { key: '803c47aaf9cf0d1a10a49f75511223150314dcad', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), h("p", { key: 'e49b9d452b6e97fa41c0111ad9029b75c1ab3b5f', class: "fd-legend__row-title" }, t('Lcz_HousekeepingReportedIssue', { fallback: 'Housekeeping reported issue' }))), h("div", { key: '2dc3468c2e2434bbb8ab10cd6bedc059df3101e9', class: "fd-legend__row" }, h("div", { key: '5eea7b69d72787cac8c3efc8dc5d49c5eefe53f3', class: 'fd-legend__shape' }, h("div", { key: '319ba286b57afd7237e9df41a7f5d4dcd9ffbe74', class: 'legend_rectangle', style: { background: 'var(--wa-color-success-fill-loud)', opacity: '0.6' } })), h("p", { key: 'f122cca7755f000bd57f602433c9c2ec3de53c2e', class: "fd-legend__row-title --day-use" }, h("span", { key: '5373997442cb9df350b89e984ec746a0245b6424' }, t('Lcz_DayUse', { fallback: 'Day use' })), h("div", { key: 'b134079549a960ce5754279405f68a665111a287', class: 'legend_rectangle', style: { background: 'var(--wa-color-brand-fill-loud)', opacity: '0.6' } }), h("div", { key: '0d3097aea410554514bd9bd19d8a7979c73639a2', class: 'legend_rectangle', style: { background: 'rgb(160, 160, 160)', opacity: '0.6' } }))), h("wa-divider", { key: 'c79cd87af351688e8c62bcafca4253231ff6da07' }), h("h5", { key: 'cf5419a722e8848dc144303ffda7bdb84dd4d9cf', class: "fd-legend__section-title" }, t('Lcz_UseCustomColors', { fallback: 'Use custom colors' })), calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (h("div", { key: `legend_${index}`, class: "fd-legend__row" }, h("div", { class: 'fd-legend__shape' }, h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), h("wa-input", { autocomplete: "off", class: "legendTextarea", value: legendInfo.name, size: "s", placeholder: t('Lcz_ReasonForThisColor', { fallback: 'Reason for this color' }), onchange: event => {
                    this.handleNameInput(index, event.target.value);
                    this.handleBlur(index);
                } }, this.loadingIndex.includes(index) && (this.saveState === 'saving' || this.saveState === 'saved') ? (h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index) })) : null)));
        })), h("wa-divider", { key: '2fffe2088548c6536ba037b452c4a388ad0bbf90' }), h("div", { key: '622789382d3dd842635807617d1142aa49285042' }, h("div", { key: 'd003e719aa9953c16a9fda559f5b001c3e79cf8f', class: "legendCalendar" }, h("div", { key: '25f3bfe9ba57e5cbc011830b010c3f06aa4797a0', class: "legendRow" }, h("div", { key: '49eddfcb81a1a904c9fee5c8ee76e9aabdfdd5c7', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '4ea5c5732507f942feffdc2628c21f347921c8f2' }, t('Lcz_ExampleMonthYearLabel', { fallback: 'MAR 2022' }))), h("div", { key: 'fc731ed5c3336c4d9d467e17d4b9ff3b48053c7c', class: "hyphenLegend" }, t('Lcz_MonthAndYear'))), h("div", { key: 'c1caf3f18a10048c1f1e04a5e21c760485787187', class: "legendRow" }, h("div", { key: 'ca681ad975a1afe0a231221241145ea45ebbdb64', class: "legendCal headerCell br-s" }, h("wa-badge", { key: '5a1b9cda218f44045843263135506cf9604ab6b9', pill: true }, "3")), h("div", { key: 'c343e6b04b6c2f2527d8bda57b88b855072d9fa5', class: "hyphenLegend" }, h("div", { key: '08503aee4817f65ab8fd7f9a4993b0d5a9561442' }, t('Lcz_UnassignedUnits')))), h("div", { key: '70f67c9b243491cd5de6e88ba971763fd0c646a5', class: "legendRow" }, h("div", { key: 'be11005bbb89dcb5a836776cba8dfd6dbe17aba7', class: "legendCal dayTitle br-s" }, t('Lcz_ExampleDayLabel', { fallback: 'Fri 18' })), h("div", { key: '45f244335468444ade0e3d917dfd6e6a3250c750', class: "hyphenLegend" }, t('Lcz_Date'))), h("div", { key: '8ae65156a83a2d7f364a020437fad1fb50526d7b', class: "legendRow" }, h("div", { key: 'd3cd73f1ee5dec2d0c2c42a8966c0dd3dd034c1a', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '26811223dc51e5ef3771316ad8fdd8b515aa9311', class: "hyphenLegend" }, t('Lcz_Occupancy'))), h("div", { key: '65a1a5cb36428bcae12b6a1fdfaba2ebd42df0c4', class: "legendRow" }, h("div", { key: '82e362414e72d4d45c6e67bbdae244d435d728af', class: "legendCal br-s br-bt total-availability" }, "20"), h("div", { key: '2ca3211eda0e2fe1c65d76baee6e6045ce037256', class: "hyphenLegend" }, t('Lcz_TotalAvailability'))))))));
    }
    static get watchers() { return {
        "saveState": [{
                "handleSaveStateChange": 0
            }]
    }; }
};
IglLegend.style = iglLegendCss();

const iglRateExtenderDrawerCss = () => `.sc-igl-rate-extender-drawer-h{display:block}`;

const IglRateExtenderDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeRoomNightsDialog = createEvent(this, "closeRoomNightsDialog");
    }
    open = false;
    bookingNumber;
    propertyId;
    language;
    identifier;
    toDate;
    fromDate;
    pool;
    ticket;
    defaultDates;
    isLoading = false;
    hasInventory = false;
    closeRoomNightsDialog;
    get label() {
        return t('Lcz_AddingRoomNights', { fallback: 'Adding Room Nights' });
    }
    handleDrawerHide = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.hasInventory = false;
        this.closeRoomNightsDialog.emit({ type: 'cancel', pool: this.pool });
    };
    render() {
        return (h("ir-drawer", { key: '660fa8b8f86c5b5625c2c5a63e91bea95da5387d', open: this.open, label: this.label, onDrawerHide: this.handleDrawerHide }, this.open && (h("igl-rate-extender-form", { key: '08ea4be96828576fa90695a29e6495ef7a6a24e6', bookingNumber: this.bookingNumber, propertyId: this.propertyId, language: this.language, identifier: this.identifier, toDate: this.toDate, fromDate: this.fromDate, pool: this.pool, defaultDates: this.defaultDates, onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail;
            }, onAvailabilityChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.hasInventory = e.detail;
            }, onCloseRoomNightsDialog: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeRoomNightsDialog.emit(e.detail);
            } })), h("div", { key: '8309d70e606d068b005a2ea8887985640e8da9d4', slot: "footer", class: 'ir__drawer-footer' }, h("ir-custom-button", { key: 'd3f497b1a19c0dc31bcb0683ac8a145dfcae9573', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '5157c3e8e788498f00af976348169ee24433bc33', loading: this.isLoading, disabled: !this.hasInventory, size: "m", type: "submit", form: "rate-extender-form", appearance: "accent", variant: "brand" }, t('Lcz_Confirm', { fallback: 'Confirm' })))));
    }
};
IglRateExtenderDrawer.style = iglRateExtenderDrawerCss();

const iglRateExtenderFormCss = () => `.sc-igl-rate-extender-form-h{display:block;height:100%;padding-bottom:1rem}.rate-form__body.sc-igl-rate-extender-form{text-align:start;padding-inline:0.25rem;padding-top:0;display:grid}.rate-extender-form.sc-igl-rate-extender-form{display:grid;gap:1rem}.rate-form__booking-number.sc-igl-rate-extender-form{font-size:var(--wa-font-size-m);color:var(--wa-color-text-quiet);margin:0}.rate-form__checking-availability.sc-igl-rate-extender-form{margin-top:0.5rem;font-size:0.875rem;color:var(--wa-color-text-quiet)}.rate-form__date-range.sc-igl-rate-extender-form{font-size:var(--wa-font-size-m);font-weight:600;line-height:1.3;color:#111827;margin:0;margin-top:0.5rem}.rate-form__rate-plan.sc-igl-rate-extender-form{font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet);margin:0;margin-top:0.375rem}.rate-form__availability-callout.sc-igl-rate-extender-form{margin-top:1rem}.rate-form__custom-text.sc-igl-rate-extender-form{font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet);line-height:1.4;margin:0;margin-top:0.625rem}.rate-form__tax-callout.sc-igl-rate-extender-form{margin-top:1.25rem}.rate-form__dates.sc-igl-rate-extender-form{margin:0;margin-top:1.5rem;display:grid;gap:1rem}.rate-form__date-row.sc-igl-rate-extender-form{display:flex;align-items:center;margin:0;margin-top:0.25rem}.rate-form__date-label.sc-igl-rate-extender-form{flex:0 0 16.666%;margin:0;padding:0;font-size:0.8125rem;color:#6b7280}.rate-form__input-wrapper.sc-igl-rate-extender-form{flex:0 0 25%;margin-inline-start:0.25rem;position:relative;margin-top:0;margin-bottom:0;padding:0}.rate-form__readonly-value.sc-igl-rate-extender-form{flex:0 0 75%;margin-inline-start:0.25rem;margin-top:0;margin-bottom:0;padding:0}.rate-extender-input.sc-igl-rate-extender-form{display:grid;grid-template-columns:auto 1fr;gap:var(--wa-space-l);align-items:center}.rate-extender-input.sc-igl-rate-extender-form::part(label),.rate-extender-input.sc-igl-rate-extender-form [part~="label"]{width:80px;margin:0}.rate-extender-input.sc-igl-rate-extender-form:disabled::part(label),.rate-extender-input.sc-igl-rate-extender-form:disabled [part~="label"]{opacity:0.5}.rate-extender-input.sc-igl-rate-extender-form::part(wa-input),.rate-extender-input.sc-igl-rate-extender-form [part~="wa-input"]{grid-column:1 / -1;grid-row-end:span 2;display:grid;grid-template-columns:subgrid;gap:0 var(--wa-space-s);align-items:center}.rate-extender-arrow.sc-igl-rate-extender-form{display:block;margin-inline-start:calc(40px + var(--wa-space-l));width:calc(100% - 40px - var(--wa-space-l));text-align:center}@media (min-width: 640px){.rate-extender-input.sc-igl-rate-extender-form::part(base){max-width:180px}.rate-extender-arrow.sc-igl-rate-extender-form{width:180px}}.ir-flip-rtl.sc-igl-rate-extender-form:dir(rtl){scale:-1 1}`;

const IglRateExtenderForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeRoomNightsDialog = createEvent(this, "closeRoomNightsDialog");
        this.loadingChanged = createEvent(this, "loadingChanged");
        this.availabilityChanged = createEvent(this, "availabilityChanged");
    }
    bookingNumber;
    propertyId;
    language;
    identifier;
    toDate;
    fromDate;
    pool;
    defaultDates;
    booking;
    selectedRoom;
    rates = [];
    isLoading = false;
    initialLoading = true;
    inventory = null;
    isEndDateBeforeFromDate = false;
    defaultTotalNights = 0;
    dates = { from_date: new Date(), to_date: new Date() };
    closeRoomNightsDialog;
    loadingChanged;
    /** Emits whether inventory is available for the additional nights (false when there is none). */
    availabilityChanged;
    bookingService = new BookingService();
    inputRefs = [];
    shouldScrollToFirstEnabled = false;
    componentWillLoad() {
        this.dates = { from_date: new Date(this.fromDate), to_date: new Date(this.toDate) };
        this.init();
    }
    componentDidRender() {
        if (!this.shouldScrollToFirstEnabled) {
            return;
        }
        const target = this.firstEnabledIndex >= 0 ? this.inputRefs[this.firstEnabledIndex] : undefined;
        if (target) {
            this.shouldScrollToFirstEnabled = false;
            requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth', block: 'center' }));
        }
    }
    /** Index of the first editable (non-disabled) night input, or -1 when none. */
    get firstEnabledIndex() {
        if (!this.hasInventory) {
            return -1;
        }
        // Prepending: the newly added nights sit at the start; appending: they follow the existing days.
        return this.isEndDateBeforeFromDate ? 0 : (this.selectedRoom?.days.length ?? -1);
    }
    async init() {
        try {
            this.initialLoading = true;
            this.inputRefs = [];
            const { from_date } = this.defaultDates;
            if (hooks(from_date, 'YYYY-MM-DD').isBefore(hooks(this.fromDate, 'YYYY-MM-DD'))) {
                this.dates.from_date = new Date(from_date);
            }
            else {
                this.dates.from_date = new Date(this.fromDate);
            }
            this.dates.to_date = new Date(this.toDate);
            this.booking = await this.bookingService.getExposedBooking({ booking_nbr: this.bookingNumber, language: LocaleController.language });
            if (this.booking) {
                const filteredRooms = this.booking.rooms.filter(room => room.identifier === this.identifier);
                this.selectedRoom = filteredRooms[0];
                const lastDay = this.selectedRoom?.days[this.selectedRoom.days.length - 1];
                if (!hooks(this.selectedRoom.to_date, 'YYYY-MM-DD').isBefore(hooks(this.toDate, 'YYYY-MM-DD'))) {
                    const variation = await this.fetchBookingAvailability(this.fromDate, this.selectedRoom.days[0].date, this.selectedRoom.rateplan.id);
                    const newDatesArr = getDaysArray(this.selectedRoom.days[0].date, this.fromDate);
                    this.isEndDateBeforeFromDate = true;
                    let dates = {};
                    variation?.nights.forEach(n => (dates[n.night] = n));
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
                    variation?.nights.forEach(n => (dates[n.night] = n));
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
        finally {
            this.initialLoading = false;
            this.availabilityChanged.emit(this.hasInventory);
            this.shouldScrollToFirstEnabled = this.hasInventory;
        }
    }
    get hasInventory() {
        return this.inventory !== 0 && this.inventory !== null;
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
            const bookingAvailability = await this.bookingService.getBookingAvailability({
                from_date,
                to_date,
                propertyid: this.propertyId,
                adultChildCount: {
                    adult: this.selectedRoom.rateplan.selected_variation.adult_nbr,
                    child: this.selectedRoom.rateplan.selected_variation.child_nbr,
                },
                language: LocaleController.language,
                currency: this.booking.currency,
                room_type_ids: [this.selectedRoom.roomtype.id],
                rate_plan_ids: [rate_plan_id],
            });
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
    }
    disabled(index) {
        if (this.inventory === 0 || this.inventory === null) {
            return true;
        }
        if (this.isEndDateBeforeFromDate) {
            return !(index < this.defaultTotalNights);
        }
        return index < this.selectedRoom.days.length;
    }
    showArrow(index) {
        // Prepending (adding from the start date): arrow goes under the last new date.
        if (this.isEndDateBeforeFromDate) {
            return index === this.defaultTotalNights - 1;
        }
        // Appending (adding more dates to it): arrow goes under the previous to_date.
        return index === this.selectedRoom.days.length - 1;
    }
    async handleRoomConfirmation() {
        try {
            this.isLoading = true;
            this.loadingChanged.emit(true);
            let oldRooms = [...this.booking.rooms];
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
                pickup_info: this.booking.pickup_info,
                extra_services: this.booking.extra_services,
                agent: this.booking.agent,
                booking: {
                    booking_nbr: this.bookingNumber,
                    from_date: hooks(this.dates.from_date).format('YYYY-MM-DD'),
                    to_date: hooks(this.dates.to_date).format('YYYY-MM-DD'),
                    remark: this.booking.remark,
                    property: this.booking.property,
                    source: this.booking.source,
                    currency: this.booking.currency,
                    arrival: this.booking.arrival,
                    guest: this.booking.guest,
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
            this.loadingChanged.emit(false);
        }
    }
    render() {
        if (this.initialLoading) {
            return (h("div", { class: 'drawer__loader-container' }, h("ir-spinner", null)));
        }
        const currency_symbol = this.booking.currency.symbol;
        return (h("form", { id: "rate-extender-form", class: "rate-extender-form", onSubmit: e => {
                e.preventDefault();
                this.handleRoomConfirmation();
            } }, h("section", { class: "rate-form__body" }, h("p", { class: "rate-form__booking-number" }, `${t('Lcz_Booking', { fallback: 'Booking' })}#`, " ", formatBookingNumber(this.bookingNumber)), h("p", { class: "rate-form__rate-plan" }, this.selectedRoom.roomtype.name, " ", `${this.selectedRoom?.rateplan?.short_name}`, " ", this.selectedRoom?.rateplan?.custom_text, ' ', h("ir-unit-tag", { unit: (this.selectedRoom?.unit).name }), this.selectedRoom?.rateplan?.is_non_refundable && h("span", { class: 'irfontgreen' }, t('Lcz_NonRefundable', { fallback: 'Non-refundable' }))), this.inventory !== 0 && this.inventory !== null && booking_store.roomTypes?.length > 0 && (h("wa-callout", { size: "s", variant: "neutral", appearance: "filled", class: "rate-form__tax-callout booking-editor-header__tax_statement" }, calendar_data.tax_statement))), h("p", { class: "rate-form__date-range" }, formatDate(this.dates.from_date, 'ddd, DD MMM YYYY'), " ", h("wa-icon", { class: "ir-flip-rtl", name: "arrow-right" }), " ", formatDate(this.dates.to_date, 'ddd, DD MMM YYYY')), (this.inventory === 0 || this.inventory === null) && (h("wa-callout", { size: "s", variant: "danger", class: "rate-form__availability-callout" }, h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), t('Lcz_NoAvailabilityForAdditionalNights'))), this.rates?.map((day, index) => {
            return [
                h("ir-validator", { key: day.date, value: day.amount, schema: numberType().min(0) }, h("ir-input", { ref: el => (this.inputRefs[index] = el), disabled: this.disabled(index), class: "rate-extender-input", "aria-describedby": "rate cost", "aria-label": "rate", "onText-change": e => this.handleInput(e.detail, index), value: day.amount.toString(), defaultValue: day.amount.toString(), mask: 'price', label: formatDate(day.date, 'ddd, MMM D') }, h("span", { slot: "start" }, currency_symbol))),
                this.showArrow(index) && h("wa-icon", { class: "rate-extender-arrow", name: this.isEndDateBeforeFromDate ? 'arrow-up' : 'arrow-down' }),
            ];
        }), h("div", null)));
    }
};
IglRateExtenderForm.style = iglRateExtenderFormCss();

const iglReallocationDialogCss = () => `.sc-igl-reallocation-dialog-h{display:block;text-align:start}.dialog-body.sc-igl-reallocation-dialog{display:grid;gap:1.5rem}.dialog-body__description.sc-igl-reallocation-dialog{margin:0}.dialog-footer.sc-igl-reallocation-dialog{display:flex;justify-content:flex-end;gap:0.75rem}.ir-text-start.sc-igl-reallocation-dialog{text-align:start}`;

const IglReallocationDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dialogClose = createEvent(this, "dialogClose");
        this.revertBooking = createEvent(this, "revertBooking");
        this.resetModalState = createEvent(this, "resetModalState");
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
        return (h("ir-dialog", { key: 'ae66e0f81b999541999adddb6bc9c5d0b95a131c', label: t('Lcz_Alert', { fallback: 'Alert' }), ref: el => (this.dialogEl = el), onIrDialogHide: this.handleDialogVisibilityChange }, this.data && (h(Fragment, { key: '33d54424d34f6c1ea94f815d9be60c9eb8d58507' }, h("div", { key: 'f3beb0df5a20998e66ce7156cc6b0ccc931a2ff2', class: "dialog-body" }, h("p", { key: '4782dc2d49f37d6662681ebf19f33153ec72237e', class: "ir-text-start dialog-body__description m-0 p-0" }, this.data.description), hasRateplans && (
        // <ir-select
        //   ref={el => (this.rateplanSelectEl = el)}
        //   required
        //   firstOption="Select rate plan..."
        //   data={this.rateplanOptions.map(option => ({ text: option.text, value: option.value }))}
        //   error={this.showRateplanError}
        //   onSelectChange={this.handleRateplanChange}
        // ></ir-select>
        h("wa-select", { key: '364e60dc79f919ce553f56270d40aed56c44d320', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, defaultValue: '', "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, size: "s", "aria-invalid": String(this.showRateplanError), onchange: e => this.handleRateplanChange(e.target.value) }, h("wa-option", { key: 'dbc5e782ef5e2af8a5a5bf7c273d4d55a9e96455', value: "" }, t('Lcz_SelectRatePlan', { fallback: 'Select rate plan...' })), this.rateplanOptions.map(option => (h("wa-option", { key: option.value, value: option.value }, option.text)))))), h("div", { key: '3c001f246a8a628523ff61804f7f577b95e737dc', class: "dialog-footer", slot: "footer" }, h("ir-custom-button", { key: '60a08f9534690553fd3a8954fdc3b60b16fd4f40', appearance: "filled", variant: "neutral", onClickHandler: this.handleCancelClick, size: "m" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'e0502420f51e16bf05b6cb005134c8adf9dc7b35', variant: "brand", onClickHandler: () => this.reallocateUnit(), size: "m", loading: isRequestPending('/ReAllocate_Exposed_Room') }, t('Lcz_Confirm', { fallback: 'Confirm' })))))));
    }
    static get watchers() { return {
        "data": [{
                "handleDataChange": 0
            }]
    }; }
};
IglReallocationDialog.style = iglReallocationDialogCss();

const iglSplitBookingDrawerCss = () => `.sc-igl-split-booking-drawer-h{display:block}.split-booking__drawer.sc-igl-split-booking-drawer::part(body),.split-booking__drawer.sc-igl-split-booking-drawer [part~="body"]{padding:0}`;

const IglSplitBookingDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal");
    }
    booking;
    identifier;
    open;
    closeModal;
    _id = `split-booking-form_${v4()}`;
    get room() {
        return this.booking?.rooms?.find(r => r.identifier === this.identifier);
    }
    render() {
        return (h("ir-drawer", { key: 'c7e29fe0f831ac8da4062c844f869d14a566b9bf', open: this.open, class: 'split-booking__drawer', label: `${t('Lcz_SplitUnit', { fallback: 'Split unit' })} ${this.room?.unit?.['name'] ?? ''}`, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit(null);
            } }, this.open && h("igl-split-booking-form", { key: '3a43f6abd902e40dbe4b4cb3f7c234a24d22c991', booking: this.booking, identifier: this.identifier, formId: this._id }), h("div", { key: '70e3a58d61939658a9d07b4d626ec4e2163ce88f', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '005ab1cf9f63b20f51e6a2064cd3fd71a084f30d', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'db9cfdbb6f821b436ccc9f24371d0b046bc1d36f', form: this._id, type: "submit", size: "m", appearance: "accent", variant: "brand", loading: isRequestPending('/DoReservation') }, t('Lcz_Confirm', { fallback: 'Confirm' })))));
    }
};
IglSplitBookingDrawer.style = iglSplitBookingDrawerCss();

const SelectedUnitSchema = objectType({
    roomtype_id: coerce.number(),
    unit_id: coerce.number(),
    rateplan_id: coerce.number(),
});

const iglSplitBookingFormCss = () => `.sc-igl-split-booking-form-h{display:flex;flex-direction:column;gap:var(--wa-space-s);text-align:start}form.sc-igl-split-booking-form{display:flex;flex-direction:column;gap:var(--wa-space-m)}.split-header.sc-igl-split-booking-form{display:flex;flex-direction:column;gap:var(--wa-space-xs);border-block-end:1px solid var(--wa-color-surface-border);padding:var(--spacing)}.split-header__summary.sc-igl-split-booking-form{display:flex;align-items:center;flex-wrap:wrap;gap:var(--wa-space-2xs) var(--wa-space-xs)}.split-header__room.sc-igl-split-booking-form{font-weight:600;font-size:var(--wa-font-size-m);color:var(--wa-color-text-normal)}.split-header__rateplan.sc-igl-split-booking-form{display:flex;align-items:center;gap:var(--wa-space-2xs);color:var(--wa-color-text-quiet, #4b5563);font-size:var(--wa-font-size-s)}.split-search-row.sc-igl-split-booking-form{display:flex;align-items:center;gap:var(--wa-space-xs)}.split-search__date.sc-igl-split-booking-form{cursor:pointer !important;width:200px;min-width:0}.split-date-trigger.sc-igl-split-booking-form{display:flex;align-items:center;gap:var(--wa-space-2xs);width:100%;height:2.5rem;padding-inline:var(--wa-space-s);border:1px solid var(--wa-color-surface-border);border-radius:var(--wa-border-radius-m, 0.375rem);background:var(--wa-color-surface-default);color:var(--wa-color-text-normal);font:inherit;font-size:var(--wa-font-size-s);font-weight:400;text-align:start;cursor:pointer;transition:border-color 160ms ease-out}.split-date-trigger.sc-igl-split-booking-form:hover{border-color:var(--wa-color-neutral-border-loud, var(--wa-color-surface-border))}.split-date-trigger.sc-igl-split-booking-form:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.split-date-trigger.sc-igl-split-booking-form wa-icon.sc-igl-split-booking-form{flex:0 0 auto;color:var(--wa-color-text-quiet)}.split-date-trigger.sc-igl-split-booking-form span.sc-igl-split-booking-form{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.split-date-trigger--empty.sc-igl-split-booking-form span.sc-igl-split-booking-form{color:var(--wa-color-text-quiet)}.split-search__submit.sc-igl-split-booking-form{flex:0 0 auto}.split-empty.sc-igl-split-booking-form{display:flex;flex-direction:column;align-items:center;gap:var(--wa-space-m);width:100%;padding-block:var(--wa-space-2xl) var(--wa-space-xl)}.split-empty.sc-igl-split-booking-form ir-empty-state.sc-igl-split-booking-form{width:100%}.split-empty__action.sc-igl-split-booking-form{width:fit-content}.error-message.sc-igl-split-booking-form{display:flex;align-items:center;gap:var(--wa-space-2xs);margin:0;color:var(--wa-color-danger-fill-loud, #c0392b);font-size:var(--wa-font-size-s)}.split-loading.sc-igl-split-booking-form{display:flex;align-items:center;justify-content:center;gap:var(--wa-space-xs);padding-block:var(--wa-space-l);color:var(--wa-color-text-quiet, #4b5563);font-size:var(--wa-font-size-s)}@keyframes split-results-in{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.room-type-list.sc-igl-split-booking-form{display:flex;flex-direction:column;gap:var(--wa-space-2xs);padding-inline:var(--spacing);padding-bottom:2rem;animation:split-results-in 180ms cubic-bezier(0.23, 1, 0.32, 1)}@media (prefers-reduced-motion: reduce){.room-type-list.sc-igl-split-booking-form{animation:none}}.room-type-row.sc-igl-split-booking-form{margin-block:var(--wa-space-xs) var(--wa-space-3xs)}.room-type-row.sc-igl-split-booking-form:first-child{margin-block-start:0}.room-type-name.sc-igl-split-booking-form{font-weight:600;font-size:var(--wa-font-size-s);color:var(--wa-color-text-normal);text-align:start}.physical-room.sc-igl-split-booking-form{display:flex;align-items:center;padding:var(--wa-space-2xs) var(--wa-space-xs);padding-inline-start:var(--wa-space-m);border-radius:var(--wa-border-radius-m, 0.375rem);transition:background-color 160ms ease-out}.physical-room.sc-igl-split-booking-form::part(label),.physical-room.sc-igl-split-booking-form [part~="label"]{display:flex;align-items:center}.physical-room.sc-igl-split-booking-form wa-select.sc-igl-split-booking-form{margin-inline-start:var(--wa-space-m);min-width:220px}`;

const IglSplitBookingForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal");
    }
    booking;
    identifier;
    formId;
    selectedDates;
    room;
    roomTypes = [];
    hasSearched = false;
    isSearching = false;
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
        this.isSearching = true;
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
                language: LocaleController.language,
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
        finally {
            this.hasSearched = true;
            this.isSearching = false;
        }
    }
    async doReservation() {
        try {
            this.isLoading = true;
            this.errors = null;
            const selectedUnit = SelectedUnitSchema.parse(this.selectedUnit);
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
                days: this.room.days.filter(r => hooks(r.date, 'YYYY-MM-DD').isSameOrAfter(this.selectedDates.from_date, 'dates')),
            });
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
    /** Bookable room types, each reduced to its de-duplicated set of fully-available physical units. */
    get eligibleRoomTypes() {
        return (this.roomTypes ?? [])
            .filter(roomType => roomType.is_available_to_book)
            .map(roomType => {
            const unitMap = new Map();
            for (const rateplan of roomType.rateplans ?? []) {
                for (const unit of rateplan.assignable_units ?? []) {
                    if (unit.Is_Fully_Available) {
                        unitMap.set(unit.pr_id, unit.name);
                    }
                }
            }
            return { roomType, units: Array.from(unitMap, ([id, name]) => ({ id, name })) };
        })
            .filter(entry => entry.units.length > 0);
    }
    render() {
        const eligibleRoomTypes = this.eligibleRoomTypes;
        return (h("form", { key: 'f4e2d89087b84f1ce325889109870268be6c551a', id: this.formId, onSubmit: e => {
                e.preventDefault();
                this.doReservation();
            } }, h("div", { key: 'bf8ba57598c00811dc0caece5eb540b9c0538165', class: "split-header" }, h("div", { key: 'a63f6c4bd8af8a27b4d84623048f06f39b0b8027', class: "split-header__summary" }, h("span", { key: '569912d29eef1fcde6336ea0399c8bd4c2b49488', class: "split-header__room" }, this.room.unit?.['name'] ?? this.room.roomtype?.name), h("span", { key: 'a57be758e36c740add1026a971f1e7ea6ae082ee', class: "split-header__rateplan" }, this.room.rateplan.short_name, this.room.rateplan.is_non_refundable && (h("wa-tag", { key: '1b2f3d40a93ad0e15af6170477b28f58ad1687f2', size: "s", variant: "warning" }, t('Lcz_NonRefundable', { fallback: 'Non-refundable' }))))), h("div", { key: '1c8f999c0f9a0190203442683b00e576f007bf36', class: "split-search-row" }, h("ir-date-select", { key: '1ac3de751ec819f5af91be1a8726f74a69415335',
            // customPicker
            class: "split-search__date", "data-testid": "pickup_arrival_date", date: this.selectedDates?.from_date?.format('YYYY-MM-DD'), maxDate: this.defaultDates?.to_date.format('YYYY-MM-DD'), minDate: this.defaultDates?.from_date.format('YYYY-MM-DD'), emitEmptyDate: true, onDateChanged: evt => {
                this.selectedDates = { ...this.selectedDates, from_date: evt.detail.start };
            } }, h("wa-icon", { key: 'c0846f76d59ad2de54055ee5b5f189d428bfe4b2', slot: "start", name: "calendar" })), h("ir-custom-button", { key: '4b13fc0e103b197126d9b467338eda0268122b2e', class: "split-search__submit", appearance: "accent", variant: "brand", size: "s", loading: this.isSearching, onClickHandler: () => this.checkBookingAvailability() }, t('Lcz_CheckAvailability', { fallback: 'Check availability' })))), this.errors?.roomtype_id && (h("p", { key: '7281db7b1f36898fb2d078b549f3728713ca6c69', class: "error-message" }, h("wa-icon", { key: 'c113d0a36cc463341a098f51383d7ede650d99a3', name: "circle-exclamation" }), t('Lcz_PleaseSelectARoom', { fallback: 'Please select a room' }))), this.isSearching ? (h("div", { class: "split-loading" })) : !this.hasSearched ? (h("div", { class: "split-empty" }, h("ir-empty-state", { message: t('Lcz_PickDateAndSearchForAvailableUnits', { fallback: 'Pick a date and search to see available units' }) }), h("ir-custom-button", { class: "split-empty__action", loading: this.isSearching, onClickHandler: () => this.checkBookingAvailability(), variant: "brand", size: "s" }, t('Lcz_CheckAvailability', { fallback: 'Check availability' })))) : eligibleRoomTypes.length === 0 ? (h("div", { class: "split-empty" }, h("ir-empty-state", { message: t('Lcz_NoAvailableUnitsForTheseDates', { fallback: 'No available units for these dates' }) }))) : (h("wa-radio-group", { class: "room-type-list", name: "unit", onchange: e => {
                const [roomtype_id, unit_id] = e.target.value.split('_');
                this.updateSelectedUnit({
                    roomtype_id: Number(roomtype_id),
                    unit_id: Number(unit_id),
                });
            } }, eligibleRoomTypes.map(({ roomType, units }) => (h(Fragment, null, h("div", { key: `roomTypeRow-${roomType.id}`, class: "room-type-row" }, h("span", { class: "room-type-name" }, roomType.name)), units.map((unit, j) => {
            const isSelected = this.selectedUnit?.unit_id === unit.id;
            const showMealPlanSelect = isSelected && Array.isArray(this.mealPlanOptions) && this.mealPlanOptions.length > 0;
            return (h("wa-radio", { value: `${roomType.id}_${unit.id}`, checked: isSelected, key: `physicalRoom-${unit.id}-${j}`, class: `physical-room${isSelected ? ' physical-room--selected' : ''}` }, h("span", null, unit.name), showMealPlanSelect && (h("ir-validator", { value: this.selectedUnit?.rateplan_id, schema: SelectedUnitSchema.shape.rateplan_id }, h("wa-select", { size: "s", placeholder: t('Lcz_SelectANewRateplan', { fallback: 'Select a new rateplan...' }), value: this.selectedUnit?.rateplan_id?.toString(), onchange: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.updateSelectedUnit({
                        rateplan_id: Number(e.target.value),
                    });
                } }, this.mealPlanOptions.map(option => (h("wa-option", { value: option.value?.toString() }, option.text + `${option.custom_text ? ' | ' : ''}${option.custom_text}`))))))));
        }))))))));
    }
};
IglSplitBookingForm.style = iglSplitBookingFormCss();

const iglTbaCategoryViewCss = () => `.sc-igl-tba-category-view-h{display:block}.tba-category.sc-igl-tba-category-view{display:flex;flex-direction:column}.tba-category__title.sc-igl-tba-category-view{margin:0;color:var(--wa-color-default-normal);font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);font-size:var(--wa-font-size-m);text-wrap:balance}`;

const IglTbaCategoryView = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.assignUnitEvent = createEvent(this, "assignUnitEvent");
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
        return (h(Host, { key: '484522b6ee7f6c586346f05787eef789106abbbf' }, h("div", { key: 'e672c36c5c3fd7e82919fef5e3f838b543956161', class: "tba-category" }, h("h5", { key: '046b8be972fe47e6b8f5961e3ad989faaaeebbe2', class: "tba-category__title" }, this.categoriesData[this.categoryId]?.name), this.getEventView(this.categoryId, this.eventDatas))));
    }
};
IglTbaCategoryView.style = iglTbaCategoryViewCss();

const iglToBeAssignedCss = () => `.sc-igl-to-be-assigned-h{--spacing:var(--wa-space-l);display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-s);text-align:start;background-color:var(--wa-color-surface-default);border-inline-end:2px solid var(--wa-color-surface-border)}.tba-panel.sc-igl-to-be-assigned{display:flex;flex-direction:column;min-height:100%}.tba-panel__head.sc-igl-to-be-assigned{position:sticky;top:0;z-index:1;font-family:var(--wa-font-family-heading);background-color:var(--wa-color-surface-default)}.tba-panel__header.sc-igl-to-be-assigned{display:flex;align-items:center;justify-content:space-between;gap:0.5rem;box-sizing:border-box;padding-inline:var(--spacing);padding-block:calc(var(--spacing) / 2);border-bottom:1px solid var(--wa-color-surface-border);background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default))}.tba-panel__title.sc-igl-to-be-assigned{flex:1 1 auto;margin:0;font-size:var(--wa-font-size-l);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);font-family:var(--wa-font-family-heading);color:var(--wa-color-text-normal)}.tba-panel__toolbar.sc-igl-to-be-assigned{padding:var(--spacing);padding-block-end:0}.tba-panel__body.sc-igl-to-be-assigned{display:flex;flex:1 1 auto;flex-direction:column;gap:1rem;padding:var(--spacing)}.tba-panel__loading.sc-igl-to-be-assigned{display:flex;flex:1 1 auto;align-items:center;justify-content:center}.tba-panel__empty.sc-igl-to-be-assigned{margin:0}`;

const IglToBeAssigned = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.optionEvent = createEvent(this, "optionEvent");
        this.reduceAvailableUnitEvent = createEvent(this, "reduceAvailableUnitEvent");
        this.showBookingPopup = createEvent(this, "showBookingPopup");
        this.addToBeAssignedEvent = createEvent(this, "addToBeAssignedEvent");
        this.highlightToBeAssignedBookingEvent = createEvent(this, "highlightToBeAssignedBookingEvent");
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
        this.loadingMessage = t('Lcz_FetchingUnAssignedUnits');
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
                // Reflect the picked date immediately and flush a render so the spinner
                // is visible while updateCategories() is fetching.
                this.selectedDate = dateStamp;
                this.renderView();
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
        const isEmpty = Object.keys(this.data).length === 0;
        const hasDates = this.orderedDatesList.length > 0;
        return (h(Host, { key: '0c76d9abbf88bd859bdba8ad647931977524983c' }, h("div", { key: '049d332959ced500be320bb72933c28530d4baf2', class: "tba-panel" }, h("div", { key: 'f5ddcd5062d978f32fbdf0dc70c261a4418d278e', class: "tba-panel__head" }, h("header", { key: 'fa60f29340605cb7b4cf3cf292da7c8967013f45', class: "tba-panel__header" }, h("h2", { key: 'b1a868ebfe3fdb1fc93b3e86ded1eab1a722c407', class: "tba-panel__title", id: "to-be-assigned-title" }, t('Lcz_Assignments')), h("ir-custom-button", { key: '39e76ac75feff3fe9c96d7f222b2193f02b2fc5a', size: "m", appearance: "plain", variant: "neutral", onClickHandler: () => this.handleOptionEvent('closeSideMenu') }, h("wa-icon", { key: '0761e3e6175c015be6669a0b8b9bbc8fdf9c11f3', name: "xmark", variant: "solid", label: t('Lcz_Close', { fallback: 'Close' }), "aria-label": t('Lcz_Close', { fallback: 'Close' }), role: "img" }))), hasDates && (h("div", { key: '7d3d652631fdfbf7ad4ded13386d93d3814fdb41', class: "tba-panel__toolbar" }, h("wa-select", { key: 'dae3317659162d89626314f36fca21dc37fda1ea', size: "s", "aria-label": t('Lcz_Assignments'), value: this.selectedDate ? this.selectedDate.toString() : '', defaultValue: this.selectedDate ? this.selectedDate.toString() : '', onchange: evt => this.showForDate(evt.target.value) }, this.orderedDatesList.map(ordDate => (h("wa-option", { value: ordDate.toString() }, this.data[ordDate].dateStr))))))), h("div", { key: 'd2cac4b25b22cd43cb9f85d410dd5d91aeb58f22', class: "tba-panel__body" }, isEmpty ? (h("p", { class: "tba-panel__empty" }, t('Lcz_AllBookingsAreAssigned'))) : this.isLoading ? (h("div", { class: "tba-panel__loading" }, h("ir-spinner", null))) : selectedDateData && Object.keys(selectedDateData.categories).length ? (this.getCategoryView()) : (h("p", { class: "tba-panel__empty" }, t('Lcz_AllAssignForThisDay')))))));
    }
    static get watchers() { return {
        "unassignedDatesProp": [{
                "handleUnassignedDatesToBeAssignedChange": 0
            }]
    }; }
};
IglToBeAssigned.style = iglToBeAssignedCss();

const irInteractiveTitleCss = () => `.sc-ir-interactive-title-h{display:block;width:100%}*.sc-ir-interactive-title{box-sizing:border-box}.popover-title.sc-ir-interactive-title{width:100%;height:100%;margin:0;padding:0;overflow:hidden;display:flex;align-items:center;gap:4px;white-space:nowrap}.cropped-title.sc-ir-interactive-title{flex:1 !important;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.hk-dot.sc-ir-interactive-title{flex-shrink:0;align-self:stretch;display:flex;align-items:stretch;justify-content:center;padding-inline:var(--ir-popover-left, 10px);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out;background:var(--ir-interactive-hk-bg, var(--wa-color-surface-default));color:var(--dot-color, var(--wa-color-text-normal))}`;

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
        return (h(Host, { key: '70cc04c831c69e998ed8b34688b43551f89f51d5', style: { '--ir-popover-left': this.irPopoverLeft } }, h("p", { key: 'a1387f6574ff94274e7f66f5cc36264621b5faca', class: "popover-title" }, title.length > this.cropSize && (h("wa-tooltip", { key: '85bb9fdbce9a3a8a2beefbd54094db8bb7c3f57c', for: this.titleId, placement: "top" }, title)), h("span", { key: '890f2d00ec503338b3ceaf5d47f06685e0ab95c8', id: this.titleId, class: "cropped-title" }, title), this.hkStatus && (h("div", { key: '5910f4e0d273ad783376a7c313e3fce99607d052', class: "hk-dot" }, h("slot", { key: '155a3ce4fb63eb3a34a462595ce1e3dcab1de1b9', name: "end" }))))));
    }
};
IrInteractiveTitle.style = irInteractiveTitleCss();

const irModalCss = () => `.backdropModal.sc-ir-modal{background-color:rgba(0, 0, 0, 0.5);z-index:1000;position:fixed;top:0;inset-inline-start:0;height:100vh;width:100%;opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.backdropModal.active.sc-ir-modal{cursor:pointer;opacity:1 !important;pointer-events:all}.ir-modal[data-state='opened'].sc-ir-modal{opacity:1;visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-alert-content.sc-ir-modal{padding:1rem;background:white;border-radius:5px}.ir-alert-header.sc-ir-modal{display:flex;font-size:1rem;font-weight:700}.modal.sc-ir-modal{z-index:1001 !important}.modal-dialog.sc-ir-modal{height:100vh;display:flex;align-items:center}.ir-alert-footer.sc-ir-modal{gap:10px}.ir-modal.sc-ir-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;width:90%;max-width:32rem;overflow:hidden;outline:0;opacity:0;transition:transform 0.3s ease-in-out,     opacity 0.3s ease-in-out,     visibility 0.3s ease-in-out;visibility:hidden;pointer-events:none}.ir-modal.active.sc-ir-modal{opacity:1;transform:translate(-50%, 0);visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-me-1.sc-ir-modal{margin-inline-end:0.25rem}.ir-text-start.sc-ir-modal{text-align:start}`;

const IrModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.confirmModal = createEvent(this, "confirmModal");
        this.cancelModal = createEvent(this, "cancelModal");
        this.middleModal = createEvent(this, "middleModal");
    }
    /**
     * The title text displayed in the modal header.
     */
    modalTitle;
    /**
     * The main content text shown in the modal body.
     */
    modalBody;
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
    rightBtnText;
    /**
     * Text displayed on the left (cancel/close) button.
     */
    leftBtnText;
    /**Text displayed on the middle (tertiary) button. */
    middleBtnText;
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
    get resolvedModalTitle() {
        return this.modalTitle || t('Lcz_ModalTitle', { fallback: 'Modal Title' });
    }
    get resolvedModalBody() {
        return this.modalBody || t('Lcz_ModalBody', { fallback: 'Modal Body' });
    }
    get resolvedRightBtnText() {
        return this.rightBtnText || t('Lcz_Confirm', { fallback: 'Confirm' });
    }
    get resolvedLeftBtnText() {
        return this.leftBtnText || t('Lcz_Close', { fallback: 'Close' });
    }
    get resolvedMiddleBtnText() {
        return this.middleBtnText || t('Lcz_More', { fallback: 'More' });
    }
    btnClickHandler(event) {
        let target = event.target;
        let name = target.name;
        if (name === this.resolvedLeftBtnText) {
            this.cancelModal.emit();
            this.item = {};
            this.closeModal();
        }
        else if (name === this.resolvedMiddleBtnText) {
            this.middleModal.emit(this.item);
            this.item = {};
            if (this.autoClose)
                this.closeModal();
        }
        else if (name === this.resolvedRightBtnText) {
            this.confirmModal.emit(this.item);
            this.item = {};
            if (this.autoClose) {
                this.closeModal();
            }
        }
    }
    render() {
        return [
            h("div", { key: '5ed6bebaa4745b8379cf8bb1c1a2f79fd8617577', class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    this.cancelModal.emit();
                    if (this.autoClose && !this.isLoading) {
                        this.closeModal();
                    }
                } }),
            h("div", { key: 'de00672e8fb93e7fac4f347bae89479e976d5c86', "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, h("div", { key: '23b82277e24aae8b84de55ab2a9421550d9c8ee6', class: `ir-alert-content p-2` }, this.showTitle && (h("div", { key: '265380c4f5bf9c9537f8457607293c9a46c717e5', class: `ir-alert-header` }, h("p", { key: '95d9544c31710edbf3d994faf5d54a58eb5814cc' }, this.resolvedModalTitle))), h("div", { key: 'b133c66c554d96980d8f6acb1ffdfecf792d86e5', class: "modal-body ir-text-start p-0 mb-2" }, h("div", { key: '85fb4ee787d35f8be49eeb6053e3e7db7309f4f1' }, this.resolvedModalBody)), h("div", { key: '1a00ffad7f9523ad2364f711744f23cf11fa901b', class: `ir-alert-footer border-0  d-flex justify-content-${this.btnPosition === 'center' ? 'center' : this.btnPosition === 'left' ? 'start' : 'end'}` }, this.leftBtnActive && (h("ir-button", { key: '92fcf6c7e523f9f839ac01cac2c8a406c7b175a1', btn_disabled: this.isLoading, btn_color: this.leftBtnColor, btn_block: true, text: this.resolvedLeftBtnText, name: this.resolvedLeftBtnText })), this.middleBtnActive && (h("ir-button", { key: '518ac4b1e0457254c1522179f46c3602a085f711', btn_disabled: this.isMiddleButtonLoading, btn_color: this.middleBtnColor, btn_block: true, text: this.resolvedMiddleBtnText, isLoading: this.isMiddleButtonLoading, name: this.resolvedMiddleBtnText })), this.rightBtnActive && (h("ir-button", { key: '6491318ff7c7526c2951dd912f88c5c55d933c93', btn_color: this.rightBtnColor, btn_disabled: this.isLoading, isLoading: this.isLoading, btn_block: true, text: this.resolvedRightBtnText, name: this.resolvedRightBtnText }))))),
        ];
    }
};
IrModal.style = irModalCss();

const irReallocationDrawerCss = () => `.sc-ir-reallocation-drawer-h{display:block}`;

const IrReallocationDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal");
    }
    open;
    booking;
    roomIdentifier;
    pool;
    closeModal;
    _id = `reallocation-form_${v4()}`;
    render() {
        return (h("ir-drawer", { key: '4f7b26d2152ee3335507fa244a3e8019aa3e2887', label: t('Lcz_ReassignUnit', { fallback: 'Reassign Unit' }), open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && h("ir-reallocation-form", { key: '8ce4de82bd8e2c011fab60123ef6fb6c05f507f0', pool: this.pool, formId: this._id, booking: this.booking, identifier: this.roomIdentifier }), h("div", { key: '13647386e3fc1c20891518d21254426225f3d06d', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '40bb7fd6f65cd6024ad50ec7ac1c78bd028f6439', size: "m", "data-drawer": "close", variant: "neutral", appearance: "filled" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '500dc2c830e0f69ecd3cf5944f9d20f86ea7aac4', form: this._id, size: "m", loading: isRequestPending('/ReAllocate_Exposed_Room'), type: "submit", variant: "brand" }, t('Lcz_Confirm', { fallback: 'Confirm' })))));
    }
};
IrReallocationDrawer.style = irReallocationDrawerCss();

const irReallocationFormCss = () => `.sc-ir-reallocation-form-h{display:block;height:100%;color:var(--ir-text-color, #1f2a37);font-family:var(--ir-font-family, 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif)}.reallocation-form.sc-ir-reallocation-form{display:flex;flex-direction:column;gap:0.75rem}.booking-summary.sc-ir-reallocation-form{display:flex;flex-direction:column;gap:0.5rem}.rateplan-details.sc-ir-reallocation-form{margin:0;font-weight:500;color:var(--wa-color-text-quiet, #4b5563)}.rateplan-details-unit.sc-ir-reallocation-form{font-weight:700;color:var(--wa-color-text-normal)}.date-picker-row.sc-ir-reallocation-form{display:flex;flex-wrap:wrap;gap:0.5rem;align-items:flex-end}.date-picker-row.sc-ir-reallocation-form .ir-custom-date-picker.sc-ir-reallocation-form{flex:1 1 220px}.error-message.sc-ir-reallocation-form{margin:0;margin-top:0.75rem;color:var(--ir-error-color, #c0392b);font-size:0.95rem}.room-type-list.sc-ir-reallocation-form{display:flex;flex-direction:column;gap:0.75rem}.arrow-container.sc-ir-reallocation-form{width:100%;display:flex;justify-content:center}.choice-row.sc-ir-reallocation-form{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.room-type-name.sc-ir-reallocation-form{font-weight:600;color:var(--ir-heading-color, #111827)}.physical-room.sc-ir-reallocation-form{display:flex;align-items:center;font-size:0.95rem;padding-inline-start:1rem}.physical-room.sc-ir-reallocation-form::part(label),.physical-room.sc-ir-reallocation-form [part~="label"]{display:flex;align-items:center}.physical-room.sc-ir-reallocation-form+.physical-room.sc-ir-reallocation-form{margin-top:0.5rem}.physical-room--last.sc-ir-reallocation-form{margin-bottom:0.25rem}.physical-room.sc-ir-reallocation-form wa-select.sc-ir-reallocation-form{margin-inline-start:1rem;min-width:220px}.custom-date-picker.sc-ir-reallocation-form{max-width:200px}.room-type-row.sc-ir-reallocation-form{margin-bottom:0.5rem}`;

const IrReallocationForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal");
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
                language: LocaleController.language,
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
            } }, h("div", { class: "booking-summary" }, h("ir-date-view", { from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false })), h("div", null, h("wa-callout", { size: "s", appearance: "filled", variant: "neutral" }, h("p", { style: { padding: '0', margin: '0' } }, h("span", { class: "rateplan-details" }, this.room.roomtype.name, " ", this.room.rateplan.short_name, " ", this.room.rateplan.is_non_refundable ? t('Lcz_NonRefundable', { fallback: 'Non-refundable' }) : '', ' ', h("span", { class: "rateplan-details-unit" }, this.room.unit.name)))), this.errors?.roomtype_id && h("p", { class: "error-message" }, t('Lcz_PleaseSelectARoom', { fallback: 'Please select a room' })), this.roomTypes.length === 0 ? (h("ir-empty-state", { style: { marginTop: '20vh' } })) : (h(Fragment, null, h("div", { class: "arrow-container" }, h("svg", { height: 30, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { d: "M297.4 566.6C309.9 579.1 330.2 579.1 342.7 566.6L502.7 406.6C515.2 394.1 515.2 373.8 502.7 361.3C490.2 348.8 469.9 348.8 457.4 361.3L352 466.7L352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 466.7L182.6 361.3C170.1 348.8 149.8 348.8 137.3 361.3C124.8 373.8 124.8 394.1 137.3 406.6L297.3 566.6z" }))), h("wa-callout", { size: "s", appearance: "filled", variant: "neutral" }, h("wa-radio-group", { onchange: e => {
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
                return (h("wa-radio", { value: `${roomType.id}_${room.id}`, checked: this.selectedUnit?.unit_id === room.id, key: `physicalRoom-${room.id}-${j}`, class: `physical-room${isLastUnit ? ' physical-room--last' : ''}` }, h("span", null, room.name), showMealPlanSelect && (h("ir-validator", { value: this.selectedUnit?.rateplan_id, schema: SelectedUnitSchema.shape.rateplan_id }, h("wa-select", { size: "s", placeholder: t('Lcz_SelectANewRateplan', { fallback: 'Select a new rateplan...' }), value: this.selectedUnit?.rateplan_id?.toString(), onchange: e => {
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
IrReallocationForm.style = irReallocationFormCss();

const irRectifierCss = () => `.ir-rectifier__form.sc-ir-rectifier{display:flex;flex-direction:column;gap:1.5rem}.ir-rectifier__roomtypes.sc-ir-rectifier{display:flex;flex-direction:column;gap:1rem}.ir-rectifier__roomtype-checkbox--all.sc-ir-rectifier{padding-bottom:0.75rem;border-bottom:1px solid var(--wa-color-surface-border, #e0e0e0)}.ir-rectifier__date-range.sc-ir-rectifier{display:flex;align-items:center;gap:1rem}`;

const IrRectifier = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.loadingChanged = createEvent(this, "loadingChanged");
        this.closeDrawer = createEvent(this, "closeDrawer");
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
    getValidRoomTypeIds() {
        const roomTypes = calendar_data.property?.roomtypes ?? [];
        return roomTypes.map(roomtype => Number(roomtype?.id)).filter(id => Number.isFinite(id));
    }
    toggleSelectAllRoomTypes(checked) {
        this.showRoomTypeError = false;
        this.updateForm({ room_type_ids: checked ? this.getValidRoomTypeIds() : [] });
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
            showToast({
                type: 'success',
                title: t('Lcz_UpdateBeingProcessed', { fallback: 'The update is being processed.' }),
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
        const validRoomTypeIds = this.getValidRoomTypeIds();
        const allSelected = validRoomTypeIds.length > 0 && validRoomTypeIds.every(id => this.form.room_type_ids.includes(id));
        const someSelected = validRoomTypeIds.some(id => this.form.room_type_ids.includes(id));
        return (h(Host, { key: '551dabb845136e6aea01565e1d161b3190ad895e' }, h("form", { key: '5f62c75e1e04b3f7ce2432b0ac5f6e82e9c1fbf1', onSubmit: e => {
                e.preventDefault();
                this.handleSubmit();
            }, class: "ir-rectifier__form", id: this.formId }, h("wa-callout", { key: 'ccc31f05ba7b57908ef0d4493e91029accaf4cc6', size: "s", appearance: "filled", variant: "warning" }, h("wa-icon", { key: '4b7393e753505b09adc27e94e458a92c5652ec08', slot: "icon", name: "triangle-exclamation" }), t('Lcz_RectifierCalloutExplanation', {
            fallback: 'This will update the total availability of the selected room types by calculating: No. of physical rooms - Booked - Blocked - Pending',
        })), h("div", { key: '0abb41d68b3cafe43fac4ce401218c0261c0257d', class: "ir-rectifier__roomtypes" }, validRoomTypeIds.length > 0 && (h("wa-checkbox", { key: '3dfb4ac05949b6d206fc412dc7735acc8402a914', class: "ir-rectifier__roomtype-checkbox ir-rectifier__roomtype-checkbox--all", checked: allSelected, indeterminate: !allSelected && someSelected, onchange: e => {
                const checked = e.target.checked;
                this.toggleSelectAllRoomTypes(checked);
            } }, t('Lcz_SelectAll', { fallback: 'Select all' }))), roomTypes.map(roomtype => {
            const roomTypeId = Number(roomtype?.id);
            if (!Number.isFinite(roomTypeId)) {
                return null;
            }
            const isSelected = this.form.room_type_ids.includes(roomTypeId);
            return (h("wa-checkbox", { class: "ir-rectifier__roomtype-checkbox", checked: isSelected, onchange: e => {
                    const checked = e.target.checked;
                    this.updateRoomTypeSelection(roomTypeId, checked);
                } }, roomtype.name));
        })), this.showRoomTypeError && h("p", { key: '3423e579d9eb3d7efa9e6182df2dad550c9cb1a3', class: "text-danger m-0" }, t('Lcz_PleaseSelectAtLeastOneRoomType', { fallback: 'Please select at least one room type.' })), h("div", { key: 'c71cc045e9d74bed4ecebb69555d8b72fb4c72a4', class: "ir-rectifier__date-range" }, h("ir-validator", { key: '5148bffbeeb7fa5646e80f1523a4e77944f3eefe', value: this.form.from ?? null, schema: ExposedRectifierParamsSchema.shape.from, autovalidate: this.autoValidate }, h("ir-date-select", { key: '737ba468b9515caacd3e666f4f20953b55a844ed', class: "ir-rectifier__date-picker ir-rectifier__date-picker--from", label: t('Lcz_DateFrom', { fallback: 'Date from' }), emitEmptyDate: true, date: this.form.from, onDateChanged: e => {
                const from = e.detail.start?.format('YYYY-MM-DD') ?? null;
                this.updateForm(this.normalizeDateRange({ from }));
                requestAnimationFrame(() => this.toDateRef?.show());
            } })), h("ir-validator", { key: '80fc202878deed74148e7617ce479a880ec23c43', value: this.form.to ?? null, schema: ExposedRectifierParamsSchema.shape.to, autovalidate: this.autoValidate }, h("ir-date-select", { key: 'f526da319bd062c628ee2700200b0f74cd5aec84', class: "ir-rectifier__date-picker ir-rectifier__date-picker--to", label: t('Lcz_ToInclusive', { fallback: 'To (inclusive)' }), emitEmptyDate: true, disabled: !this.form.from, ref: el => (this.toDateRef = el), date: this.form.to, minDate: this.form.from, onDateChanged: e => {
                const to = e.detail.start?.format('YYYY-MM-DD') ?? null;
                this.updateForm(this.normalizeDateRange({ to }));
            } }))))));
    }
};
IrRectifier.style = irRectifierCss();

const irRectifierDrawerCss = () => `.sc-ir-rectifier-drawer-h{display:block}`;

const IrRectifierDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeDrawer = createEvent(this, "closeDrawer");
    }
    open;
    closeDrawer;
    isLoading;
    formId = `rectifier-form__id-${v4()}`;
    handleDrawerClose(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.closeDrawer.emit();
    }
    handleLoadingChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.isLoading = e.detail;
    }
    render() {
        return (h(Host, { key: '22c6c61075a8256a693f4820819e396f039ae7bc' }, h("ir-drawer", { key: '59d4b7400c5fd09d62f8dc9de97f6e9a5ba34ecd', onDrawerHide: this.handleDrawerClose.bind(this), label: t('Lcz_RectifyExtendAvailability', { fallback: 'Rectify/Extend Availability' }), open: this.open, class: "rectifier__drawer" }, this.open && h("ir-rectifier", { key: 'b543c07342ff1f4aa172bc73d4513743e3b10b3f', formId: this.formId, onCloseDrawer: this.handleDrawerClose.bind(this), onLoadingChanged: this.handleLoadingChange.bind(this) }), h("div", { key: '60a357fb77b10d4a68bd2dd8141211f713d2ab52', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '09f180ea29bb82b46c806fb1a55ac6098d8f7067', size: "m", variant: "neutral", appearance: "filled", "data-drawer": "close" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '93459078a6049572154d589f6433312e87e3a48c', loading: this.isLoading, type: "submit", form: this.formId, size: "m", variant: "brand" }, t('Lcz_Confirm', { fallback: 'Confirm' }))))));
    }
};
IrRectifierDrawer.style = irRectifierDrawerCss();

const irSuccessLoaderCss = () => `:host{display:block}.spinner{transform-origin:center;animation:spinner_svv2 0.75s infinite linear}@keyframes spinner_svv2{100%{transform:rotate(360deg)}}`;

const IrSuccessLoader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.loaderComplete = createEvent(this, "loaderComplete");
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
        return (h(Host, { key: '1b43a7b05111021fcaf850fad7bd31c82751406e' }, this.phase === 'spinner' ? h("wa-spinner", null) : h("wa-icon", { part: "check", name: "check", style: { color: 'var(--wa-color-success-fill-loud,#45b16d)' } })));
    }
    static get watchers() { return {
        "active": [{
                "onActiveChange": 0
            }],
        "spinnerDuration": [{
                "onDurationChange": 0
            }],
        "successDuration": [{
                "onDurationChange": 0
            }]
    }; }
};
IrSuccessLoader.style = irSuccessLoaderCss();

export { IglBlockedDateDrawer as igl_blocked_date_drawer, IglBookingEvent as igl_booking_event, IglBulkOperationsDrawer as igl_bulk_operations_drawer, IglCalBody as igl_cal_body, IglCalFooter as igl_cal_footer, IglCalHeader as igl_cal_header, IglCalHeaderDays as igl_cal_header_days, IglCalHeaderToolbar as igl_cal_header_toolbar, IglDayUseBookings as igl_day_use_bookings, IglHkIssuesDialog as igl_hk_issues_dialog, IglHousekeepingDialog as igl_housekeeping_dialog, IglLegend as igl_legend, IglRateExtenderDrawer as igl_rate_extender_drawer, IglRateExtenderForm as igl_rate_extender_form, IglReallocationDialog as igl_reallocation_dialog, IglSplitBookingDrawer as igl_split_booking_drawer, IglSplitBookingForm as igl_split_booking_form, IglTbaCategoryView as igl_tba_category_view, IglToBeAssigned as igl_to_be_assigned, IrInteractiveTitle as ir_interactive_title, IrModal as ir_modal, IrReallocationDrawer as ir_reallocation_drawer, IrReallocationForm as ir_reallocation_form, IrRectifier as ir_rectifier, IrRectifierDrawer as ir_rectifier_drawer, IrSuccessLoader as ir_success_loader };
