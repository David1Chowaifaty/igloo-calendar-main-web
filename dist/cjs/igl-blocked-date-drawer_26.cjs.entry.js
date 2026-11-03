'use strict';

var index = require('./index-IDeZZwEK.js');
var booking_service = require('./booking.service-yJ7oXj56.js');
var utils = require('./utils-DC_1UV-i.js');
var t = require('./t-CqJPQrfm.js');
var booking = require('./booking-Bp-n-MGf.js');
var moment = require('./moment-CdViwxPQ.js');
var index$1 = require('./index-Dssn3hdS.js');
var calendarDates = require('./calendar-dates-BxDGM1ix.js');
var events_service = require('./events.service-jyxkNgE2.js');
var localeScope = require('./locale-scope-Cch-vf1R.js');
var calendarData = require('./calendar-data-ShS6b-Ns.js');
var calendarGrid = require('./calendar-grid-DAmH4dWB.js');
var number = require('./number-xBpNWk3H.js');
var locale_controller = require('./locale.controller-BE9t6L_N.js');
var direction = require('./direction-CuBM8Z-h.js');
var functions = require('./functions-CaNAUyCw.js');
var irDate = require('./ir-date-CbkOKs2C.js');
var index$2 = require('./index-9D7XLiv8.js');
var index$3 = require('./index-D2SNh8m6.js');
var types = require('./types-BVJQZ50e.js');
var irInterceptor_store = require('./ir-interceptor.store-GIfc0Pi9.js');
var v4 = require('./v4-_2BfiRUa.js');
var index$4 = require('./index-BVF3dYtT.js');
var utils$1 = require('./utils-CDiJIXbw.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./IBooking-hDE_y33g.js');
require('./commonSchemas-kIlurDum.js');
require('./booking.dto-CMx8s-oW.js');
require('./type-DxODN41W.js');
require('./language-observer-DKp37LIu.js');

const iglBlockedDateDrawerCss = () => `.sc-igl-blocked-date-drawer-h{display:block;text-align:start}`;

const IglBlockedDateDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.blockedDateDrawerClosed = index.createEvent(this, "blockedDateDrawerClosed");
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
        return (index.h("ir-drawer", { key: 'cff8a5ecfdfe4fb8f872e65466d1671cf5e434b3', label: this.label, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDrawer();
            }, open: this.open }, this.open && (index.h("igl-block-dates-view", { key: '4e6e2fa2a16d6f429f5b65199a13a5044749dc5b', onDataUpdateEvent: e => (this.blockDatesData = { ...e.detail.data }), fromDate: this.fromDate, toDate: this.toDate })), index.h("div", { key: 'b52afa93735f707028e686ca59ff6dae30132ae0', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: 'ad7919e198d45722ab3d5318ae59ad4f852eb9d8', "data-drawer": "close", size: "m", appearance: "filled", variant: "neutral" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '5de1d18af1ec198bbd43f54f387a877763f2001f', loading: this.isLoading, onClickHandler: () => {
                this.handleBlockDate();
            }, size: "m", appearance: "accent", variant: "brand" }, t.t('Lcz_Save', { fallback: 'Save' })))));
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

/**
 * Pure geometry for dragging and stretching a booking bar. No DOM, no component state: every
 * input is a number in the same physical `.bodyContainer` pixel space the bar is positioned in.
 */
/**
 * Number of nights a stretched bar covers once released.
 *
 * An N-night bar is `N * CELL_WIDTH - EVENT_SPACE` wide, so the gap is added back before dividing:
 * that puts the rounding boundary at the true midpoint between two neighbouring snapped widths.
 * A bar that continues in from before the loaded window carries an extra half cell on its start
 * edge (see `computeEventHorizontalGeometry`), which is not a night and is discounted first.
 */
function nightsFromWidth(width, startsAfterWindowOpen) {
    return Math.round((width + calendarGrid.EVENT_SPACE - (startsAfterWindowOpen ? calendarGrid.CELL_WIDTH / 2 : 0)) / calendarGrid.CELL_WIDTH);
}
/** Narrowest a stretch can make a bar: one night. */
const MIN_BAR_WIDTH = calendarGrid.CELL_WIDTH - calendarGrid.EVENT_SPACE;
/**
 * Where a stretch leaves the bar, or `null` when this handle may not move at all.
 *
 * Handles are physical, but split-stay locks are chronological: a segment joined to an earlier one
 * (`leftSplit`) can't move its check-in edge, one joined to a later one (`rightSplit`) can't move its
 * check-out edge. Check-in is the physical left in LTR and the physical right in RTL.
 */
function resolveResize({ side, initialLeft, initialWidth, deltaX, isRtl, canGrow, splitRole }) {
    const edge = (side === 'leftSide') !== isRtl ? 'checkIn' : 'checkOut';
    if (splitRole === 'fullSplit' || (splitRole === 'leftSplit' && edge === 'checkIn') || (splitRole === 'rightSplit' && edge === 'checkOut')) {
        return null;
    }
    // Pulling the right handle right, or the left handle left, lengthens the stay.
    const growth = side === 'rightSide' ? deltaX : -deltaX;
    const shrinking = growth < 0;
    if (!shrinking && !canGrow) {
        return null;
    }
    const width = Math.max(MIN_BAR_WIDTH, initialWidth + growth);
    const left = side === 'rightSide' ? initialLeft : initialLeft + (initialWidth - width);
    return { left, width, shrinking };
}

/**
 * Keeping a booking bar's label in the part of the bar the user can see.
 *
 * A long stay (50 nights is ~2,900px) is usually wider than the viewport, so a label centred in the
 * bar sits off screen. The label is instead centred in the bar's *visible* part, recomputed as the
 * calendar scrolls.
 */
/** Gap kept between the label and each visible edge of the bar. */
const LABEL_INSET = 5;
/**
 * Where to centre a bar's label, or `null` when the default (centred in the whole bar) is already
 * right: the bar is entirely visible, or entirely out of view. All inputs are physical px in the
 * bars' container; the view is the scroll viewport minus the sticky room-name column.
 *
 * The label is centred in the bar's visible part. When the name is wider than that part, it is
 * kept inside the bar instead - resting against the bar's visible end, with the viewport edge
 * cutting the rest - because pure positioning costs no layout, where narrowing the label to the
 * visible width would cost one per clipped bar per scroll frame.
 */
function visibleLabelSpan({ barLeft, barWidth, viewStart, viewEnd, labelWidth, }) {
    const barRight = barLeft + barWidth;
    const start = Math.max(barLeft, viewStart);
    const end = Math.min(barRight, viewEnd);
    if (end <= start || (start === barLeft && end === barRight)) {
        return null;
    }
    // The label never grows past the bar (CSS truncates it there), so half its rendered width:
    const half = Math.min(labelWidth, barWidth - 2 * LABEL_INSET) / 2;
    const center = (start + end) / 2 - barLeft;
    return { center: Math.min(Math.max(center, LABEL_INSET + half), barWidth - LABEL_INSET - half) };
}
/** Rows this far beyond the top/bottom of the view are still kept up to date, so they arrive centred. */
const VERTICAL_MARGIN = 100;
/**
 * One per calendar scroll container: a passive scroll listener and a resize observer feed a single
 * animation frame. It reads two rects, does arithmetic over the bars' cached positions, and then
 * writes one transform offset to each bar the viewport edge clips (rows out of view are skipped).
 * Fully visible bars carry no inline label style and fall back to plain centring in CSS.
 * Measured at 1,000 bookings: no extra layout, ~0.8ms of style per horizontally scrolled frame.
 */
class LabelTracker {
    scroller;
    stickyColumnWidth;
    isRtl;
    bars = new Set();
    applied = new WeakMap();
    naturalWidth = new WeakMap();
    frame = 0;
    resizeObserver = null;
    constructor(scroller, stickyColumnWidth, isRtl) {
        this.scroller = scroller;
        this.stickyColumnWidth = stickyColumnWidth;
        this.isRtl = isRtl;
        scroller.addEventListener('scroll', this.schedule, { passive: true });
        if (typeof ResizeObserver !== 'undefined') {
            this.resizeObserver = new ResizeObserver(this.schedule);
            this.resizeObserver.observe(scroller);
        }
    }
    get isEmpty() {
        return this.bars.size === 0;
    }
    add(bar) {
        this.bars.add(bar);
        this.schedule();
    }
    remove(bar) {
        this.bars.delete(bar);
        if (this.bars.size === 0) {
            this.scroller.removeEventListener('scroll', this.schedule);
            this.resizeObserver?.disconnect();
            if (this.frame) {
                cancelAnimationFrame(this.frame);
                this.frame = 0;
            }
        }
    }
    /** Shifts a label from its default centre (`null` = back to default), if that changed. */
    write(bar, label, shift) {
        if (this.applied.get(bar) === shift) {
            return;
        }
        this.applied.set(bar, shift);
        if (shift === null) {
            label.style.removeProperty('--ir-label-shift');
        }
        else {
            label.style.setProperty('--ir-label-shift', `${shift}px`);
        }
    }
    schedule = () => {
        if (!this.frame) {
            this.frame = requestAnimationFrame(this.update);
        }
    };
    update = () => {
        this.frame = 0;
        const origin = this.bars.values().next().value?.element.parentElement;
        if (!origin) {
            return;
        }
        // Reads first, all together: the view, in the bars' own physical coordinate space.
        const view = this.scroller.getBoundingClientRect();
        const originRect = origin.getBoundingClientRect();
        const originLeft = originRect.left;
        const { clientLeft, clientWidth } = this.scroller;
        // Bars on rows scrolled out of view are skipped; scrolling them back in schedules another frame.
        const viewTop = view.top - originRect.top - VERTICAL_MARGIN;
        const viewBottom = view.bottom - originRect.top + VERTICAL_MARGIN;
        let viewStart;
        let viewEnd;
        if (this.isRtl()) {
            // The sticky room column pins to the inline start edge, which is the physical right in RTL.
            viewEnd = view.right - clientLeft - this.stickyColumnWidth - originLeft;
            viewStart = view.right - clientLeft - clientWidth - originLeft;
        }
        else {
            viewStart = view.left + clientLeft + this.stickyColumnWidth - originLeft;
            viewEnd = view.left + clientLeft + clientWidth - originLeft;
        }
        // Pass 1, arithmetic only: which bars the viewport clips. Every other bar goes back to default.
        const clipped = [];
        for (const bar of this.bars) {
            const geometry = bar.displayedGeometry();
            if (!geometry || geometry.top > viewBottom || geometry.top < viewTop) {
                continue;
            }
            const label = bar.labelElement();
            if (!label) {
                continue;
            }
            const isClipped = visibleLabelSpan({ barLeft: geometry.left, barWidth: geometry.width, viewStart, viewEnd, labelWidth: 0 }) !== null;
            if (isClipped) {
                clipped.push({ bar, label, geometry });
            }
            else {
                this.write(bar, label, null);
            }
        }
        // Pass 2, reads: a label's natural width, measured once per text, all before any write.
        for (const { bar, label } of clipped) {
            const text = label.textContent;
            if (this.naturalWidth.get(bar)?.text !== text) {
                this.naturalWidth.set(bar, { text, width: label.scrollWidth });
            }
        }
        // Pass 3, writes: a transform shift only - no layout.
        for (const { bar, label, geometry } of clipped) {
            const span = visibleLabelSpan({ barLeft: geometry.left, barWidth: geometry.width, viewStart, viewEnd, labelWidth: this.naturalWidth.get(bar).width });
            this.write(bar, label, Math.round(span.center - geometry.width / 2));
        }
    };
}
const trackers = new WeakMap();
const trackerOf = new WeakMap();
/** Starts keeping `bar`'s label in view, if it sits inside a calendar scroll container. */
function trackLabel(bar, stickyColumnWidth, isRtl) {
    const scroller = bar.element.closest('.calendarScrollContainer');
    if (!scroller) {
        return;
    }
    let tracker = trackers.get(scroller);
    if (!tracker) {
        tracker = new LabelTracker(scroller, stickyColumnWidth, isRtl);
        trackers.set(scroller, tracker);
    }
    tracker.add(bar);
    trackerOf.set(bar, tracker);
}
function untrackLabel(bar) {
    const tracker = trackerOf.get(bar);
    if (!tracker) {
        return;
    }
    tracker.remove(bar);
    trackerOf.delete(bar);
    // Called from disconnectedCallback, when the bar can no longer find its scroller - the tracker can.
    if (tracker.isEmpty && trackers.get(tracker.scroller) === tracker) {
        trackers.delete(tracker.scroller);
    }
}
/** The bar moved or resized: recompute labels on the next frame. */
function refreshLabel(bar) {
    trackerOf.get(bar)?.schedule();
}

/**
 * Anchoring a booking bar's info popup (`wa-popup`) to the part of the bar the user can see.
 *
 * The popup is anchored to a virtual element whose rect is the bar's *visible* part: the bar
 * clipped to the calendar grid, minus the sticky day header, footer and room-name column. Centring
 * on that keeps the popup over what is on screen for a 50-night stay, and keeps its arrow between
 * the visible edges of the bar. When the visible part is empty the bar has left the view and the
 * popup closes.
 */
/** The part of `bar` inside `view` (both in viewport px), or `null` when none of it is. */
function visibleBarRect(bar, view) {
    const left = Math.max(bar.left, view.left);
    const right = Math.min(bar.right, view.right);
    const top = Math.max(bar.top, view.top);
    const bottom = Math.min(bar.bottom, view.bottom);
    if (right <= left || bottom <= top) {
        return null;
    }
    return { x: left, y: top, left, top, right, bottom, width: right - left, height: bottom - top };
}
/**
 * Per-side distance from each edge of `outer` in to the matching edge of `inner`, plus `gap`. Used as
 * Floating UI padding, so a popup bounded by the scroll container stays inside its visible grid.
 */
function insetsWithin(outer, inner, gap) {
    return {
        left: inner.left - outer.left + gap,
        top: inner.top - outer.top + gap,
        right: outer.right - inner.right + gap,
        bottom: outer.bottom - inner.bottom + gap,
    };
}
/** The scroll container's client box (inside borders and scrollbars), in viewport px. */
function clientBox(scroller) {
    const rect = scroller.getBoundingClientRect();
    const left = rect.left + scroller.clientLeft;
    const top = rect.top + scroller.clientTop;
    return { left, top, right: left + scroller.clientWidth, bottom: top + scroller.clientHeight };
}
/**
 * The part of the calendar grid the user can see, in viewport px: the scroll container's client
 * area minus the sticky day header (top), footer (bottom) and room-name column (inline start -
 * physical right in RTL). `clientLeft` covers a vertical scrollbar on the left in RTL.
 */
function measureGridView(scroller, stickyColumnWidth, isRtl) {
    const { left, right } = clientBox(scroller);
    let { top, bottom } = clientBox(scroller);
    // Every header cell sticks at the same height, so one is enough.
    const header = scroller.querySelector('.stickyCell');
    if (header) {
        top = Math.max(top, header.getBoundingClientRect().bottom);
    }
    const footer = scroller.querySelector('igl-cal-footer');
    if (footer) {
        bottom = Math.min(bottom, footer.getBoundingClientRect().top);
    }
    return isRtl ? { left, right: right - stickyColumnWidth, top, bottom } : { left: left + stickyColumnWidth, right, top, bottom };
}
/**
 * The bar, as a popup anchor whose rect is the bar's visible part. `isVisible()` measures afresh
 * every time: a cached answer from an earlier frame (say, from when the bar had scrolled away) is
 * exactly what made a reopened popup close itself again.
 */
function createBarAnchor(bar, getView) {
    const visiblePart = () => {
        const view = getView();
        return view ? visibleBarRect(bar.getBoundingClientRect(), view) : null;
    };
    const anchor = {
        getBoundingClientRect() {
            const part = visiblePart();
            // Out of view: the whole bar, so the last frame before the popup closes stays on it.
            return part ? new DOMRect(part.x, part.y, part.width, part.height) : bar.getBoundingClientRect();
        },
    };
    return { anchor, isVisible: () => !getView() || visiblePart() !== null };
}

class BarRegistry {
    win;
    bars = new Set();
    openBar = null;
    constructor(win) {
        this.win = win;
    }
    get isEmpty() {
        return this.bars.size === 0;
    }
    add(bar) {
        if (this.bars.size === 0) {
            this.win.addEventListener('moveBookingTo', this.onMoveBookingTo);
            this.win.addEventListener('revertBooking', this.onRevertBooking);
        }
        this.bars.add(bar);
    }
    remove(bar) {
        this.release(bar);
        this.bars.delete(bar);
        if (this.bars.size === 0) {
            this.win.removeEventListener('moveBookingTo', this.onMoveBookingTo);
            this.win.removeEventListener('revertBooking', this.onRevertBooking);
        }
    }
    /** Makes `bar` the one bar with an open bubble, closing whichever bar had it before. */
    claim(bar) {
        if (this.openBar === bar) {
            return;
        }
        const previous = this.openBar;
        this.openBar = bar;
        if (previous) {
            previous.closeInfo();
        }
        else {
            this.win.addEventListener('click', this.onClick);
        }
    }
    /** `bar`'s bubble closed; stop watching for outside clicks if it was the open one. */
    release(bar) {
        if (this.openBar !== bar) {
            return;
        }
        this.openBar = null;
        this.win.removeEventListener('click', this.onClick);
    }
    /** Closes whichever bubble is open, if any. */
    closeOpen() {
        this.openBar?.closeInfo();
    }
    onClick = (event) => {
        if (this.openBar && !this.openBar.element.contains(event.target)) {
            this.openBar.closeInfo();
        }
    };
    onMoveBookingTo = (event) => {
        const bookingId = event.detail?.bookingId;
        for (const bar of this.bars) {
            if (bar.bookingId() === bookingId) {
                bar.onMoveBookingTo(event);
            }
        }
    };
    onRevertBooking = (event) => {
        for (const bar of this.bars) {
            if (bar.pool() === event.detail) {
                bar.onRevertBooking();
            }
        }
    };
}
const registries = new WeakMap();
function windowOf(bar) {
    return bar.element.ownerDocument?.defaultView ?? null;
}
function registerBar(bar) {
    const win = windowOf(bar);
    if (!win) {
        return;
    }
    let registry = registries.get(win);
    if (!registry) {
        registry = new BarRegistry(win);
        registries.set(win, registry);
    }
    registry.add(bar);
}
function unregisterBar(bar) {
    const win = windowOf(bar);
    const registry = win && registries.get(win);
    if (!registry) {
        return;
    }
    registry.remove(bar);
    if (registry.isEmpty) {
        registries.delete(win);
    }
}
function claimInfoBubble(bar) {
    const win = windowOf(bar);
    win && registries.get(win)?.claim(bar);
}
function releaseInfoBubble(bar) {
    const win = windowOf(bar);
    win && registries.get(win)?.release(bar);
}
/** Closes any open bubble in `bar`'s calendar - a drag starting anywhere should not leave one up. */
function closeOpenInfoBubble(bar) {
    const win = windowOf(bar);
    win && registries.get(win)?.closeOpen();
}

const iglBookingEventCss = () => `.sc-igl-booking-event-h{--ir-event-skew:-22deg;--ir-event-counter-skew:22deg;--ota-bar-width:2px;--ota-bar-color:#343a40;--stripe-period:20px;--split-border-width:5px;--split-border-color:var(--wa-color-text-normal);--handle-width:15px;display:block;position:absolute;cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;outline:none}[dir='rtl'].sc-igl-booking-event-h{--ir-event-skew:22deg;--ir-event-counter-skew:-22deg}.sc-igl-booking-event-h:focus-visible{outline:2px solid var(--wa-color-focus, #0071ec);outline-offset:2px;border-radius:4px}.is-dragging.sc-igl-booking-event-h{z-index:2;cursor:grabbing;will-change:transform}.is-dragging.sc-igl-booking-event-h .bookingEventBase.sc-igl-booking-event{box-shadow:0 6px 16px rgb(0 0 0 / 0.25)}.newEvent.sc-igl-booking-event-h{cursor:default}.bookingEventBase.sc-igl-booking-event{position:absolute;inset:0;border-radius:4px;background-color:var(--ir-event-bg, rgb(49, 190, 241));transform:skewX(var(--ir-event-skew))}.bookingEventBase.ota-booking-event.sc-igl-booking-event{border:var(--ota-bar-width) solid var(--ota-bar-color)}.bookingEventBase.pending.sc-igl-booking-event{border:2px dashed var(--wa-color-success-fill-loud)}.bookingEventBase.leftSplit.sc-igl-booking-event,.bookingEventBase.fullSplit.sc-igl-booking-event{border-inline-start:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.rightSplit.sc-igl-booking-event,.bookingEventBase.fullSplit.sc-igl-booking-event{border-inline-end:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.striped-bar.sc-igl-booking-event{background-image:repeating-linear-gradient(     45deg,     var(--ir-event-bg) 0,     var(--ir-event-bg) calc(var(--stripe-period) / 2),     var(--ir-event-bg-stripe-color) calc(var(--stripe-period) / 2),     var(--ir-event-bg-stripe-color) var(--stripe-period)   )}.bookingEventBase.striped-bar.animated.sc-igl-booking-event{background-size:28.28px 28.28px;animation:ir-event-stripes 0.8s linear infinite}@keyframes ir-event-stripes{to{background-position:28.28px 0}}@media (prefers-reduced-motion: reduce){.bookingEventBase.striped-bar.animated.sc-igl-booking-event{animation:none}}.bookingEventBase.skewedLeft.sc-igl-booking-event::before,.bookingEventBase.skewedRight.sc-igl-booking-event::after{content:'';position:absolute;top:0;bottom:0;width:50%;background:inherit;background-clip:padding-box;transform:skewX(var(--ir-event-counter-skew))}.bookingEventBase.skewedLeft.sc-igl-booking-event::before{inset-inline-start:-4px;border-start-start-radius:0;border-end-start-radius:0}.bookingEventBase.skewedRight.sc-igl-booking-event::after{inset-inline-end:-4px}[dir='ltr'].sc-igl-booking-event-h .bookingEventBase.skewedLeft.sc-igl-booking-event::before,[dir='rtl'].sc-igl-booking-event-h .bookingEventBase.skewedRight.sc-igl-booking-event::after{transform-origin:right center}[dir='rtl'].sc-igl-booking-event-h .bookingEventBase.skewedLeft.sc-igl-booking-event::before,[dir='ltr'].sc-igl-booking-event-h .bookingEventBase.skewedRight.sc-igl-booking-event::after{transform-origin:left center}.bookingEventBase.ota-booking-event.skewedLeft.sc-igl-booking-event::before,.bookingEventBase.ota-booking-event.skewedRight.sc-igl-booking-event::after{top:calc(var(--ota-bar-width) * -1);bottom:calc(var(--ota-bar-width) * -1);border-block:var(--ota-bar-width) solid var(--ota-bar-color)}.bookingEventBase.ota-booking-event.skewedLeft.sc-igl-booking-event::before{inset-inline-start:calc(-4px - var(--ota-bar-width))}.bookingEventBase.ota-booking-event.skewedRight.sc-igl-booking-event::after{inset-inline-end:calc(-4px - var(--ota-bar-width))}.bookingEventBase.leftSplit.skewedLeft.sc-igl-booking-event,.bookingEventBase.fullSplit.skewedLeft.sc-igl-booking-event{border-inline-start:0}.bookingEventBase.rightSplit.skewedRight.sc-igl-booking-event,.bookingEventBase.fullSplit.skewedRight.sc-igl-booking-event{border-inline-end:0}.bookingEventBase.leftSplit.skewedLeft.sc-igl-booking-event::before,.bookingEventBase.fullSplit.skewedLeft.sc-igl-booking-event::before{border-inline-start:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.rightSplit.skewedRight.sc-igl-booking-event::after,.bookingEventBase.fullSplit.skewedRight.sc-igl-booking-event::after{border-inline-end:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.skewedLeft.skewedRight.sc-igl-booking-event{inset-inline:-4px;border-radius:0;transform:none}.bookingEventBase.skewedLeft.skewedRight.sc-igl-booking-event::before,.bookingEventBase.skewedLeft.skewedRight.sc-igl-booking-event::after{content:none}.bookingEventBase.ota-booking-event.skewedLeft.skewedRight.sc-igl-booking-event{border-inline:0}.bookingEventBase.skewedLeft.skewedRight.leftSplit.sc-igl-booking-event,.bookingEventBase.skewedLeft.skewedRight.fullSplit.sc-igl-booking-event{border-inline-start:var(--split-border-width) solid var(--split-border-color)}.bookingEventBase.skewedLeft.skewedRight.rightSplit.sc-igl-booking-event,.bookingEventBase.skewedLeft.skewedRight.fullSplit.sc-igl-booking-event{border-inline-end:var(--split-border-width) solid var(--split-border-color)}.bookingEventDragHandle.sc-igl-booking-event{position:absolute;top:0;width:var(--handle-width);height:100%;border-radius:4px;background-color:rgb(0 0 0 / 0.15);opacity:0.1;transform:skewX(var(--ir-event-skew));cursor:ew-resize}.leftSide.sc-igl-booking-event{left:0}.rightSide.sc-igl-booking-event{right:0}[dir='ltr'].sc-igl-booking-event-h .leftSide.skewedLeft.sc-igl-booking-event,[dir='ltr'].sc-igl-booking-event-h .rightSide.skewedRight.sc-igl-booking-event,[dir='rtl'].sc-igl-booking-event-h .rightSide.skewedLeft.sc-igl-booking-event,[dir='rtl'].sc-igl-booking-event-h .leftSide.skewedRight.sc-igl-booking-event{transform:none}@media (hover: hover){.sc-igl-booking-event-h:hover .bookingEventDragHandle.sc-igl-booking-event{opacity:1}}@media (pointer: coarse){.sc-igl-booking-event-h{--handle-width:18px}}.newEvent.sc-igl-booking-event-h .bookingEventDragHandle.sc-igl-booking-event,.is-dragging.sc-igl-booking-event-h .bookingEventDragHandle.sc-igl-booking-event{display:none}.bookingEventTitle.sc-igl-booking-event{position:absolute;top:2px;left:50%;transform:translateX(calc(-50% + var(--ir-label-shift, 0px)));width:max-content;max-width:calc(100% - 10px);color:#fff;font-size:0.8em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-drag:none}.bookingEventTitle.pending.sc-igl-booking-event{color:var(--wa-color-success-on-quiet)}.legend_circle.sc-igl-booking-event{width:10px;height:10px;margin-block:3px;margin-inline:2px 3px;border:1px solid #fff;border-radius:100%}.noteIcon.sc-igl-booking-event{position:absolute;bottom:-8px;inset-inline-start:2px}.balanceIcon.sc-igl-booking-event{position:absolute;top:-8px;inset-inline-end:2px;display:flex}.lateCheckoutDot.sc-igl-booking-event{background-color:#999999}.balanceDot.sc-igl-booking-event{background-color:#f34752}.bookingEventPopup.sc-igl-booking-event{--arrow-color:var(--wa-color-surface-default, #fff);--arrow-size:8px;--popup-border-width:var(--wa-panel-border-width, 1px)}.bookingEventPopup.sc-igl-booking-event::part(arrow),.bookingEventPopup.sc-igl-booking-event [part~="arrow"]{border-bottom:var(--wa-panel-border-width, 1px) solid var(--wa-color-neutral-border-normal, #cbd5e1);border-right:var(--wa-panel-border-width, 1px) solid var(--wa-color-neutral-border-normal, #cbd5e1)}`;

/**
 * Taps on the bar closer together than this count once: a double-click, or an impatient re-click,
 * must not toggle the bubble twice.
 */
const TAP_BURST_MS = 300;
/** Statuses whose info bubble needs the full booking fetched before it can open. */
const FETCHED_STATUSES = ['IN-HOUSE', 'CONFIRMED', 'PENDING-CONFIRMATION', 'CHECKED-OUT'];
const IglBookingEvent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dragOverEventData = index.createEvent(this, "dragOverEventData");
        this.showRoomNightsDialog = index.createEvent(this, "showRoomNightsDialog");
        this.showDialog = index.createEvent(this, "showDialog");
        this.updateBookingEvent = index.createEvent(this, "updateBookingEvent");
    }
    get element() { return index.getElement(this); }
    currency;
    is_vacation_rental = false;
    language;
    bookingEvent;
    /**
     * Every booking on the calendar, read only when a drop has to be checked for overlaps.
     * A getter rather than the array itself, so that updating one booking does not hand every bar a
     * new prop value and re-render them all.
     */
    getAllBookingEvents;
    countries;
    roomTop;
    dragOverEventData;
    showRoomNightsDialog;
    showDialog;
    updateBookingEvent;
    showInfoPopup = false;
    eventSpace = calendarGrid.EVENT_SPACE;
    eventsService = new events_service.EventsService();
    bookingService = new booking_service.BookingService();
    gesture = null;
    /** Taps and Enter/Space presses asking to toggle the info bubble; see `connectedCallback`. */
    tapToggles$ = new index$1.cjsExports.Subject();
    keyToggles$ = new index$1.cjsExports.Subject();
    toggleSubscription = null;
    /** The drag that produced the drop the calendar is about to answer with `moveBookingTo`. */
    lastGesture = null;
    autoOpenTimer = null;
    /* Auto-scroll: keeps the calendar moving while a drag or stretch is held near its edge. */
    autoScroller = null;
    scrollHost = null;
    /**
     * Room row extents captured when a move drag starts, in the same `.bodyContainer` grid space the
     * bar positions itself in, and used to settle it on release.
     */
    dragRowBands = [];
    /** When the stay itself changes, put the bar where the new data says it belongs. */
    handleBookingEventChange(newValue, oldValue) {
        if (!oldValue || this.isNewEvent() || this.gesture) {
            return;
        }
        const geometryChanged = ['FROM_DATE', 'TO_DATE', 'NO_OF_DAYS', 'PR_ID'].some(key => newValue[key] !== oldValue[key]);
        if (geometryChanged) {
            this.lastGesture = null;
            this.resetToDataPosition();
        }
    }
    /** How the shared registry reaches this bar; see bar-registry.ts. */
    registration = {
        element: null,
        bookingId: () => this.getBookingId(),
        pool: () => this.bookingEvent?.POOL,
        closeInfo: () => this.showEventInfo(false),
        onMoveBookingTo: event => this.handleMoveBookingTo(event),
        onRevertBooking: () => {
            this.lastGesture = null;
            this.resetToDataPosition();
        },
    };
    /** How the label tracker reads where this bar is drawn; see bar-label.ts. */
    titleElement = null;
    /**
     * Where the bar is currently drawn, cached so the label tracker can read 1,000 bars per scroll
     * frame without touching the DOM. Refreshed whenever the bar's position is written.
     */
    displayed = { top: 0, left: 0, width: 0 };
    syncDisplayed() {
        const style = this.element.style;
        this.displayed = { top: parseFloat(style.top) || 0, left: parseFloat(style.left) || 0, width: parseFloat(style.width) || 0 };
        refreshLabel(this.label);
    }
    label = {
        element: null,
        labelElement: () => this.titleElement,
        displayedGeometry: () => (this.gesture ? null : this.displayed),
    };
    /**
     * The info popup's anchor: this bar, measured as its visible part (see bar-popup.ts). Created
     * once, so the popup never re-anchors on a re-render.
     */
    popupAnchor = null;
    getScroller() {
        return this.element.closest('.calendarScrollContainer');
    }
    popupElement = null;
    /** The scroll container the open popup is following; see `BarAnchor` for why the bar does this. */
    followedScroller = null;
    repositionPopup = () => this.popupElement?.reposition?.();
    /**
     * How far the popup must keep from each edge of the scroll container: the sticky header, footer and
     * room-name column, so it stays over the visible grid. Measured when it opens (they don't move).
     */
    popupPadding = 8;
    measureGridView(scroller) {
        return measureGridView(scroller, calendarGrid.ROOM_HEADER_WIDTH, direction.isRtlDirection(localeScope.locales.direction));
    }
    followScroll(follow) {
        this.followedScroller?.removeEventListener('scroll', this.repositionPopup);
        this.followedScroller = follow ? this.getScroller() : null;
        this.followedScroller?.addEventListener('scroll', this.repositionPopup, { passive: true });
    }
    /** The popup moved (the calendar scrolled or resized): once its bar is entirely out of view, close it. */
    handlePopupReposition = (event) => {
        // wa-reposition bubbles and is composed, so the selects, dropdowns and tooltips inside the bubble
        // (each built on its own wa-popup) report here too. Only this popup's own moves count.
        if (event.target !== event.currentTarget) {
            return;
        }
        if (this.showInfoPopup && this.popupAnchor && !this.popupAnchor.isVisible()) {
            this.showEventInfo(false);
        }
    };
    connectedCallback() {
        // One pipeline for every request to toggle the bubble:
        //  - throttleTime: the first tap of a burst acts at once; the rest of the burst is ignored.
        //    (Keys skip it - their auto-repeat is filtered at the source.)
        //  - exhaustMap: while a toggle is still opening (fetching the booking), further toggles are
        //    dropped, so a bar never has more than one getExposedBooking request in flight.
        this.toggleSubscription?.unsubscribe();
        this.toggleSubscription = index$1.cjsExports.merge(this.tapToggles$.pipe(index$1.cjsExports.throttleTime(TAP_BURST_MS)), this.keyToggles$)
            .pipe(index$1.cjsExports.exhaustMap(() => this.toggleInfo()))
            .subscribe();
        this.registration.element = this.element;
        this.label.element = this.element;
        this.popupAnchor ??= createBarAnchor(this.element, () => {
            const scroller = this.getScroller();
            return scroller ? this.measureGridView(scroller) : null;
        });
        registerBar(this.registration);
        trackLabel(this.label, calendarGrid.ROOM_HEADER_WIDTH, () => direction.isRtlDirection(localeScope.locales.direction));
    }
    componentDidRender() {
        this.syncDisplayed();
    }
    componentDidLoad() {
        if (this.isNewEvent() && !this.bookingEvent.hideBubble) {
            // Opened on the next task, so the click that created the bar has finished propagating first.
            this.autoOpenTimer = setTimeout(() => {
                this.autoOpenTimer = null;
                this.openInfo();
            }, 1);
        }
    }
    disconnectedCallback() {
        if (this.autoOpenTimer) {
            clearTimeout(this.autoOpenTimer);
            this.autoOpenTimer = null;
        }
        this.endGesture();
        this.toggleSubscription?.unsubscribe();
        this.toggleSubscription = null;
        this.followScroll(false);
        unregisterBar(this.registration);
        untrackLabel(this.label);
    }
    /** The bubble inside this bar asked to be closed (it bubbles up from igl-booking-event-hover). */
    handleHideBubbleInfo(event) {
        if (event.detail?.key === 'hidebubble') {
            this.showEventInfo(false);
        }
    }
    /** The calendar has resolved where this bar's drop landed; confirm it, or put the bar back. */
    async handleMoveBookingTo(event) {
        const detail = event.detail;
        const gesture = this.lastGesture;
        this.lastGesture = null;
        try {
            if (!gesture || detail.moveToDay === 'revert' || detail.toRoomId === 'revert') {
                this.resetToDataPosition();
                return;
            }
            const { pool, to_date, from_date, toRoomId } = detail;
            if (gesture.kind === 'move' && String(toRoomId) === String(this.bookingEvent.PR_ID) && from_date === this.bookingEvent.FROM_DATE) {
                // Released back on its own cell: nothing changed, so there is nothing to confirm.
                this.resetToDataPosition();
                return;
            }
            if (this.checkIfSlotOccupied(toRoomId, from_date, to_date)) {
                this.resetToDataPosition();
                throw new Error(t.t('Lcz_OverlappingDates', { fallback: 'Overlapping Dates' }));
            }
            if (!pool) {
                return;
            }
            if (utils.isBlockUnit(this.bookingEvent.STATUS_CODE)) {
                await this.eventsService.reallocateEvent(pool, toRoomId, from_date, to_date).catch(() => this.resetToDataPosition());
                return;
            }
            if (gesture.kind === 'move' || gesture.shrinking) {
                this.showDialog.emit({ reason: 'reallocate', ...detail, ...this.getReallocationDialog(toRoomId, from_date, to_date, gesture.shrinking) });
                return;
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
                this.showDialog.emit({ reason: 'stretch', ...payload });
            }
            else {
                this.showRoomNightsDialog.emit(payload);
            }
        }
        catch (error) {
            utils.showToast({ title: error.message, description: '', type: 'error' });
        }
    }
    /** Dialog fields for a move, or a shrink, that the user has to confirm. */
    getReallocationDialog(toRoomId, from_date, to_date, shrinking) {
        const { description, status, newRatePlans, matchedRatePlan } = this.getModalDescription(toRoomId, from_date, to_date, shrinking);
        const oldFromDate = this.bookingEvent.defaultDates.from_date;
        const oldToDate = this.bookingEvent.defaultDates.to_date;
        const diffDays = booking.calculateDaysBetweenDates(oldFromDate, oldToDate);
        let fromDate = oldFromDate;
        let toDate = oldToDate;
        if (shrinking) {
            if (from_date > oldFromDate && to_date < oldToDate) {
                toDate = to_date;
            }
            else if (from_date > oldFromDate) {
                fromDate = from_date;
            }
            else if (to_date < oldToDate) {
                toDate = to_date;
            }
        }
        else if (from_date < oldFromDate) {
            fromDate = from_date;
            const newToDate = calendarDates.addDaysISO(from_date, diffDays);
            toDate = newToDate < to_date ? to_date : newToDate;
        }
        else if (to_date > oldToDate) {
            toDate = to_date;
            fromDate = calendarDates.addDaysISO(to_date, -diffDays);
        }
        return {
            description,
            title: '',
            rateplans: newRatePlans,
            matchedRatePlan,
            hideConfirmButton: status === '400',
            from_date: fromDate,
            to_date: toDate,
        };
    }
    async fetchAndAssignBookingData() {
        try {
            if (!FETCHED_STATUSES.includes(this.bookingEvent.STATUS)) {
                return;
            }
            const data = await this.bookingService.getExposedBooking({ booking_nbr: this.bookingEvent.BOOKING_NUMBER, language: locale_controller.LocaleController.language });
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
    findRoomType(roomId) {
        return this.bookingEvent.roomsInfo?.find(room => room.physicalrooms.some(r => r.id === +roomId))?.id ?? null;
    }
    getModalDescription(toRoomId, from_date, to_date, shrinking) {
        const ratePlansFor = (targetRT) => {
            const mealPlans = utils.checkMealPlan({
                rateplan_id: this.bookingEvent.RATE_PLAN_ID,
                roomTypeId: targetRT,
                roomTypes: calendarData.calendar_data?.property?.roomtypes,
            });
            return { newRatePlans: Array.isArray(mealPlans) ? mealPlans : undefined, matchedRatePlan: Array.isArray(mealPlans) ? null : mealPlans };
        };
        if (!this.bookingEvent.is_direct) {
            if (shrinking) {
                return { description: t.t('Lcz_OTA_Modification_Alter'), status: '200' };
            }
            if (from_date === this.bookingEvent.FROM_DATE && to_date === this.bookingEvent.TO_DATE) {
                const targetRT = this.findRoomType(toRoomId);
                if (this.findRoomType(this.bookingEvent.PR_ID) === targetRT) {
                    return { description: `${t.t('Lcz_AreYouSureWantToMoveAnotherUnit')}?`, status: '200' };
                }
                return { description: t.t('Lcz_OTA_Modification_Alter'), status: '200', ...ratePlansFor(targetRT) };
            }
            return { description: t.t('Lcz_CannotChangeCHBookings') + '.', status: '400' };
        }
        if (shrinking) {
            return { description: t.t('Lcz_ConfrmModiication') + '.', status: '200' };
        }
        const targetRT = this.findRoomType(Number(toRoomId));
        if (this.findRoomType(Number(this.bookingEvent.PR_ID)) !== targetRT) {
            return { description: t.t('Lcz_SameRatesWillBeKept'), status: '200', ...ratePlansFor(targetRT) };
        }
        if (this.bookingEvent.PR_ID.toString() === toRoomId.toString()) {
            return { description: t.t('Lcz_ConfrmModiication') + '.', status: '200' };
        }
        return { description: `${t.t('Lcz_AreYouSureWantToMoveAnotherUnit')}?`, status: '200' };
    }
    /** Puts the bar back exactly where its booking data says it belongs. */
    resetToDataPosition() {
        const { top, left, width } = this.getPosition();
        const style = this.element.style;
        style.transform = '';
        style.top = top;
        style.left = left;
        style.width = width;
        this.syncDisplayed();
    }
    checkIfSlotOccupied(toRoomId, from_date, to_date) {
        const all = this.getAllBookingEvents?.() ?? [];
        return all.some(event => event.ID !== 'NEW_TEMP_EVENT' &&
            event.POOL !== this.bookingEvent.POOL &&
            event.PR_ID === +toRoomId &&
            to_date >= calendarDates.addDaysISO(event.FROM_DATE, 1) &&
            from_date < event.TO_DATE);
    }
    isNewEvent() {
        return this.getBookingId() === 'NEW_TEMP_EVENT';
    }
    isHighlightEventType() {
        return this.bookingEvent.event_type === 'HIGH_LIGHT';
    }
    getBookingId() {
        return this.bookingEvent.ID;
    }
    getBookedRoomId() {
        return this.bookingEvent.PR_ID;
    }
    /**
     * The bar continues in from before the loaded window: its stay began before FROM_DATE (clamped to the window).
     * Drives both the skewed/continuation visual and the half-cell position adjustment.
     * Dates are `YYYY-MM-DD`, so string order is date order.
     */
    isSkewedStart() {
        return !this.isNewEvent() && !!this.bookingEvent.defaultDates && this.bookingEvent.defaultDates.from_date < this.bookingEvent.FROM_DATE;
    }
    /** The bar continues past the loaded window: its stay ends after TO_DATE (clamped to the window). */
    isSkewedEnd() {
        return !this.isNewEvent() && !!this.bookingEvent.defaultDates && this.bookingEvent.defaultDates.to_date > this.bookingEvent.TO_DATE;
    }
    getLegendOfStatus(statusKey) {
        const legendData = this.bookingEvent?.legendData;
        const status = legendData?.statusId?.[statusKey];
        if (!status) {
            return { color: undefined, clsName: '' };
        }
        return { ...legendData[status.id], ...status };
    }
    getEventLegend() {
        const legend = this.getLegendOfStatus(this.bookingEvent.STATUS);
        return this.isNewEvent() ? { ...legend, color: '#f9f9c9' } : legend;
    }
    getPosition() {
        const pos = { top: '0px', left: '0px', width: '0px', height: `${calendarGrid.EVENT_HEIGHT}px` };
        if (typeof this.roomTop !== 'number') {
            return pos;
        }
        pos.top = `${this.roomTop + calendarGrid.getEventTopWithinRow()}px`;
        const days = booking.calendar_dates.days;
        const { left: logicalLeft, width } = calendarGrid.computeEventHorizontalGeometry({
            days,
            fromDate: this.bookingEvent.FROM_DATE,
            stayDays: this.bookingEvent.NO_OF_DAYS,
            startsAfterWindowOpen: this.isSkewedStart(),
            eventSpace: this.eventSpace,
        });
        const totalGridWidth = calendarGrid.getTotalGridWidth(days.length);
        pos.left = `${calendarGrid.toPhysicalLeft(logicalLeft, width, direction.isRtlDirection(localeScope.locales.direction), totalGridWidth)}px`;
        pos.width = `${width}px`;
        return pos;
    }
    /** Physical geometry the booking's data puts the bar at, in `.bodyContainer` grid pixels. */
    getGeometry() {
        const pos = this.getPosition();
        return { top: parseFloat(pos.top), left: parseFloat(pos.left), width: parseFloat(pos.width) };
    }
    /**
     * Pointer travel, in px, before a press becomes a drag. Below it the press is a tap - which also
     * absorbs the few pixels a finger or a trackpad click wobbles by.
     */
    static DRAG_THRESHOLD = 5;
    onPointerDown = (event) => {
        if (this.gesture || this.isNewEvent() || this.isHighlightEventType()) {
            return;
        }
        // Only the primary button drags. Ctrl+click is the macOS secondary click, so it opens a context menu too.
        if (event.button !== 0 || (event.pointerType === 'mouse' && event.ctrlKey)) {
            return;
        }
        // The info bubble renders inside the bar; presses in it belong to its own inputs and buttons.
        if (event.target?.closest?.('igl-booking-event-hover')) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        const handle = event.target?.closest?.('[data-handle]');
        const side = handle?.getAttribute('data-handle');
        this.gesture = {
            kind: side ? 'stretch' : 'move',
            side,
            pointerId: event.pointerId,
            startX: event.clientX,
            startY: event.clientY,
            lastX: event.clientX,
            lastY: event.clientY,
            started: false,
            origin: this.getGeometry(),
            current: this.getGeometry(),
            shrinking: false,
            applied: null,
        };
        window.addEventListener('pointermove', this.onPointerMove);
        window.addEventListener('pointerup', this.onPointerUp);
        window.addEventListener('pointercancel', this.onPointerCancel);
        window.addEventListener('keydown', this.onGestureKeyDown, true);
    };
    /** Escape abandons a drag wherever focus happens to be. */
    onGestureKeyDown = (event) => {
        if (event.key === 'Escape' && this.gesture) {
            event.preventDefault();
            event.stopPropagation();
            this.cancelGesture();
        }
    };
    /** The browser took the pointer away (a system gesture, the window losing focus): undo, don't drop. */
    onPointerCancel = (event) => {
        if (this.gesture && event.pointerId === this.gesture.pointerId) {
            this.cancelGesture();
        }
    };
    /** Abandons the current gesture: the bar goes back to where its data puts it and nothing is dropped. */
    cancelGesture() {
        const wasDragging = this.gesture?.started;
        this.endGesture();
        if (wasDragging) {
            this.resetToDataPosition();
            this.dragOverEventData.emit({ id: 'DRAG_CANCEL', data: null });
        }
    }
    onPointerMove = (event) => {
        const g = this.gesture;
        if (!g || event.pointerId !== g.pointerId) {
            return;
        }
        g.lastX = event.clientX;
        g.lastY = event.clientY;
        if (!g.started) {
            if (Math.abs(g.lastX - g.startX) <= IglBookingEvent.DRAG_THRESHOLD && Math.abs(g.lastY - g.startY) <= IglBookingEvent.DRAG_THRESHOLD) {
                return;
            }
            this.beginDrag();
        }
        this.autoScroller?.update(g.lastX, g.lastY);
        this.applyDragPosition();
    };
    onPointerUp = (event) => {
        const g = this.gesture;
        if (!g || event.pointerId !== g.pointerId) {
            return;
        }
        const isTap = !g.started;
        if (g.started) {
            g.kind === 'move' ? this.dropMove() : this.dropStretch();
        }
        this.endGesture();
        if (isTap) {
            this.tapToggles$.next();
        }
    };
    /**
     * Closes the bubble if it is open - no request - otherwise opens it. Returns what is still pending,
     * which is what `exhaustMap` waits on before it lets another toggle through.
     */
    toggleInfo() {
        if (this.showInfoPopup) {
            this.showEventInfo(false);
            return index$1.cjsExports.EMPTY;
        }
        return index$1.cjsExports.from(this.openInfo());
    }
    /** Enter/Space opens the bubble, the way a tap does; Escape closes it from anywhere inside the bar. */
    onKeyDown = (event) => {
        if (event.key === 'Escape') {
            if (this.showInfoPopup) {
                event.stopPropagation();
                this.showEventInfo(false);
                this.element.focus?.();
            }
            return;
        }
        // Only the bar itself: Enter on a button inside the open bubble belongs to that button.
        if ((event.key === 'Enter' || event.key === ' ') && event.target === this.element && !this.isHighlightEventType()) {
            event.preventDefault();
            if (!event.repeat) {
                this.keyToggles$.next();
            }
        }
    };
    /** Opens the info bubble, fetching the full booking first when its status needs it. Settles once open (or failed). */
    async openInfo() {
        if (!utils.isBlockUnit(this.bookingEvent.STATUS_CODE) && FETCHED_STATUSES.includes(this.bookingEvent.STATUS)) {
            await this.fetchAndAssignBookingData();
        }
        else {
            this.showEventInfo(true);
        }
    }
    /** The press has travelled far enough to be a drag: lift the bar and tell the calendar. */
    beginDrag() {
        const g = this.gesture;
        g.started = true;
        // Keeps the pointer's events coming to this bar even over an iframe or outside the window, so the
        // release is never lost. Taken only once dragging, so a tap's click still lands where it was aimed.
        try {
            this.element.setPointerCapture?.(g.pointerId);
        }
        catch {
            // The pointer is already gone; pointercancel/pointerup will end the gesture.
        }
        closeOpenInfoBubble(this.registration);
        this.element.classList.add('is-dragging');
        if (g.kind === 'move') {
            this.captureRowBands();
        }
        const { top, left, width } = g.origin;
        this.dragOverEventData.emit({
            id: 'CALCULATE_DRAG_OVER_BOUNDS',
            data: { id: this.getBookingId(), fromRoomId: this.getBookedRoomId(), top, left, x: left, y: top, width },
        });
        this.beginAutoScroll(g.kind, g.startX, g.startY);
    }
    /** Releases everything a gesture holds. Safe to call when no gesture is active. */
    endGesture() {
        if (this.gesture && this.element.hasPointerCapture?.(this.gesture.pointerId)) {
            this.element.releasePointerCapture(this.gesture.pointerId);
        }
        window.removeEventListener('pointermove', this.onPointerMove);
        window.removeEventListener('pointerup', this.onPointerUp);
        window.removeEventListener('pointercancel', this.onPointerCancel);
        window.removeEventListener('keydown', this.onGestureKeyDown, true);
        this.endAutoScroll();
        this.element.classList.remove('is-dragging');
        this.gesture = null;
        this.syncDisplayed();
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
    beginAutoScroll(kind, clientX, clientY) {
        this.scrollHost = this.element.closest('.calendarScrollContainer');
        if (!this.scrollHost) {
            return;
        }
        this.autoScroller = new DragAutoScroller({
            container: this.scrollHost,
            axes: { x: true, y: kind === 'move' },
            // The room-name column is sticky against the inline start edge, which bidi-mirrors to the
            // physical right in RTL. Skip it, so the hot zone starts at the edge of the scrollable grid
            // rather than underneath a column that never moves.
            inlineStartInset: calendarGrid.ROOM_HEADER_WIDTH,
            inlineStartEdge: direction.isRtlDirection(localeScope.locales.direction) ? 'right' : 'left',
            getBounds: () => this.getGridScrollBounds(),
            onScroll: () => this.applyDragPosition(),
        });
        this.autoScroller.start();
        this.autoScroller.update(clientX, clientY);
        this.scrollHost.addEventListener('scroll', this.handleHostScroll, { passive: true });
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
     * the drop resolves to.
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
        const barMiddle = rawTop + calendarGrid.EVENT_HEIGHT / 2;
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
        return closest.top + calendarGrid.getEventTopWithinRow(closest.height);
    }
    /** Snaps a dropped bar's physical left onto the day a booking released there would start on. */
    snapLeftToDay(rawLeft, width) {
        return calendarGrid.snapEventLeft({
            physicalLeft: rawLeft,
            width,
            isRtl: direction.isRtlDirection(localeScope.locales.direction),
            totalGridWidth: calendarGrid.getTotalGridWidth(booking.calendar_dates.days.length),
            startsAfterWindowOpen: this.isSkewedStart(),
            eventSpace: this.eventSpace,
        });
    }
    /** Disarms auto-scrolling. Safe to call when no drag is in progress. */
    endAutoScroll() {
        this.autoScroller?.stop();
        this.autoScroller = null;
        this.scrollHost?.removeEventListener('scroll', this.handleHostScroll);
        this.scrollHost = null;
    }
    handleHostScroll = () => {
        if (this.gesture?.started) {
            this.applyDragPosition();
        }
    };
    /**
     * Positions the bar (and, for a move, reports the drop target) from the last known pointer
     * position. Called both on pointer movement and on every frame the calendar auto-scrolls, since
     * a pointer parked in the edge hot zone keeps the grid moving without firing another move event.
     *
     * A move rides on `transform` so following the pointer never triggers layout; only the drop
     * commits a real `top`/`left`.
     */
    applyDragPosition() {
        const g = this.gesture;
        if (!g?.started) {
            return;
        }
        // `top`/`left` are grid-space (relative to `.bodyContainer`) while pointer deltas are
        // viewport-space; folding the container's scroll travel back in keeps the two in step.
        const scrollOffset = this.autoScroller?.offset ?? { x: 0, y: 0 };
        const dx = g.lastX - g.startX + scrollOffset.x;
        const dy = g.lastY - g.startY + scrollOffset.y;
        // An auto-scrolled frame arrives twice - from the scroller and from the container's `scroll`.
        if (g.applied?.x === dx && g.applied?.y === dy) {
            return;
        }
        g.applied = { x: dx, y: dy };
        if (g.kind === 'move') {
            g.current = { ...g.origin, top: g.origin.top + dy, left: g.origin.left + dx };
            this.element.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
            const { top, left, width } = g.current;
            this.dragOverEventData.emit({ id: 'DRAG_OVER', data: { id: this.getBookingId(), fromRoomId: this.getBookedRoomId(), top, left, x: left, y: top, width } });
            return;
        }
        const resized = resolveResize({
            side: g.side,
            initialLeft: g.origin.left,
            initialWidth: g.origin.width,
            deltaX: dx,
            isRtl: direction.isRtlDirection(localeScope.locales.direction),
            // An OTA reservation's dates belong to the channel: it can be shortened here, never lengthened.
            canGrow: this.bookingEvent.is_direct || utils.isBlockUnit(this.bookingEvent.STATUS_CODE),
            splitRole: this.computeSplitRole(),
        });
        if (!resized) {
            return;
        }
        g.current = { ...g.origin, left: resized.left, width: resized.width };
        g.shrinking = resized.shrinking;
        this.element.style.left = `${resized.left}px`;
        this.element.style.width = `${resized.width}px`;
    }
    /** Settles a stretched bar on whole nights and reports the new length, or springs it back if unchanged. */
    dropStretch() {
        const g = this.gesture;
        const startsAfterWindowOpen = this.isSkewedStart();
        const nights = nightsFromWidth(g.current.width, startsAfterWindowOpen);
        if (nights === this.bookingEvent.NO_OF_DAYS) {
            this.resetToDataPosition();
            return;
        }
        const width = nights * calendarGrid.CELL_WIDTH - this.eventSpace + (startsAfterWindowOpen ? calendarGrid.CELL_WIDTH / 2 : 0);
        // The handle that was not pulled stays put.
        const left = g.side === 'leftSide' ? g.origin.left + g.origin.width - width : g.origin.left;
        this.element.style.left = `${left}px`;
        this.element.style.width = `${width}px`;
        // Recorded before the emit: igloo-calendar answers with `moveBookingTo` inside this same call.
        this.lastGesture = { kind: 'stretch', shrinking: nights < this.bookingEvent.NO_OF_DAYS };
        this.dragOverEventData.emit({
            id: 'STRETCH_OVER_END',
            data: { id: this.getBookingId(), fromRoomId: +this.getBookedRoomId(), x: left, y: g.origin.top, width, pool: this.bookingEvent.POOL, nbOfDays: nights },
        });
    }
    /** Settles a moved bar onto the grid cell it was released over and reports the drop. */
    dropMove() {
        const g = this.gesture;
        const top = this.snapTopToRow(g.current.top);
        const left = this.snapLeftToDay(g.current.left, g.origin.width);
        this.element.style.transform = '';
        this.element.style.top = `${top}px`;
        this.element.style.left = `${left}px`;
        // Recorded before the emit: igloo-calendar answers with `moveBookingTo` inside this same call.
        this.lastGesture = { kind: 'move', shrinking: false };
        this.dragOverEventData.emit({
            id: 'DRAG_OVER_END',
            data: {
                id: this.getBookingId(),
                fromRoomId: this.getBookedRoomId(),
                top,
                left,
                x: left,
                y: top,
                width: g.origin.width,
                pool: this.bookingEvent.POOL,
                nbOfDays: this.bookingEvent.NO_OF_DAYS,
            },
        });
    }
    renderEventBookingNumber() {
        if (this.bookingEvent.STATUS === 'TEMP-EVENT' || this.isNewEvent() || utils.isBlockUnit(this.bookingEvent.STATUS_CODE)) {
            return '';
        }
        return ` - ${number.formatBookingNumber(this.bookingEvent.is_direct ? this.bookingEvent.BOOKING_NUMBER : this.bookingEvent.channel_booking_nbr)}`;
    }
    /** What a screen reader announces for the bar: who, which booking, and the stay. */
    getAccessibleName() {
        const { NAME, defaultDates, FROM_DATE, TO_DATE } = this.bookingEvent;
        return `${NAME ?? ''}${this.renderEventBookingNumber()}, ${defaultDates?.from_date ?? FROM_DATE} – ${defaultDates?.to_date ?? TO_DATE}`;
    }
    showEventInfo(showInfo) {
        if (this.isHighlightEventType() || this.bookingEvent.hideBubble) {
            return;
        }
        if (showInfo) {
            const scroller = this.getScroller();
            this.popupPadding = scroller ? insetsWithin(clientBox(scroller), this.measureGridView(scroller), 8) : 8;
            claimInfoBubble(this.registration);
        }
        else {
            releaseInfoBubble(this.registration);
        }
        this.followScroll(showInfo);
        this.showInfoPopup = showInfo;
    }
    /** True when the guest leaves later than the property's configured check-out time. */
    isDepartureAfterHotelCheckout() {
        if (calendarData.calendar_data.property?.is_automatic_check_in_out) {
            return false;
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
        const splitIndex = booking.buildSplitIndex(this.bookingEvent.ROOMS);
        return splitIndex ? (booking.getSplitRole(splitIndex, this.bookingEvent.IDENTIFIER) ?? '') : '';
    }
    render() {
        const legend = this.getEventLegend();
        const noteNode = this.bookingEvent.NOTES || this.bookingEvent.INTERNAL_NOTE || this.bookingEvent.PRIVATE_NOTE ? this.getLegendOfStatus('NOTES') : null;
        const hasBalance = this.bookingEvent.BALANCE !== null && this.bookingEvent.BALANCE >= 1;
        const bookingId = this.getBookingId();
        const barId = `event_${bookingId}`;
        const lateCheckoutId = `event_late_checkout_${bookingId}`;
        const balanceId = `event_balance_${bookingId}`;
        let backgroundColor = this.bookingEvent.ROOM_INFO?.calendar_extra?.booking_color?.color ?? legend.color;
        const { foreground, stripe } = calendarData.calendar_data.colorsForegrounds?.[backgroundColor] ?? { foreground: '', stripe: '' };
        if (this.bookingEvent.STATUS === 'CHECKED-OUT') {
            backgroundColor = legend.color;
        }
        const isDepartureAfterHotelCheckout = this.isDepartureAfterHotelCheckout();
        const splitRole = this.computeSplitRole();
        const pending = this.bookingEvent.STATUS === 'PENDING-CONFIRMATION' && !this.isNewEvent();
        const startsAfterWindowOpen = this.isSkewedStart();
        const endsBeforeWindowClose = this.isSkewedEnd();
        const isBlock = utils.isBlockUnit(this.bookingEvent.STATUS_CODE);
        const skewClasses = { skewedLeft: startsAfterWindowOpen, skewedRight: endsBeforeWindowClose };
        return (index.h(index.Host, { key: '604347dbf0ccd1734ee9f13e860b5e37893029ad', class: { bookingEvent: true, newEvent: this.isNewEvent() || this.isHighlightEventType(), [legend.clsName]: !!legend.clsName }, style: this.getPosition(), id: barId, dir: direction.isRtlDirection(localeScope.locales.direction) ? 'rtl' : 'ltr', tabindex: this.isHighlightEventType() ? undefined : '0', role: "button", "aria-label": this.getAccessibleName(), "aria-haspopup": "dialog", "aria-expanded": this.showInfoPopup ? 'true' : 'false', onPointerDown: this.onPointerDown, onKeyDown: this.onKeyDown }, index.h("div", { key: '630402922fec79e9ffd1e6b9076dc676efea8286', "data-identifier": this.bookingEvent.IDENTIFIER, "data-status": this.bookingEvent.STATUS, class: {
                'bookingEventBase': true,
                pending,
                ...skewClasses,
                'striped-bar animated': isBlock && this.bookingEvent.STATUS_CODE === '003',
                'ota-booking-event': !this.bookingEvent.is_direct && !isBlock && this.bookingEvent.STATUS !== 'TEMP-EVENT' && !this.isNewEvent(),
                [splitRole]: !!splitRole,
            }, style: { 'backgroundColor': backgroundColor, '--ir-event-bg': backgroundColor, '--ir-event-bg-stripe-color': stripe } }), isDepartureAfterHotelCheckout && (index.h("wa-tooltip", { key: '2803b5af3c7848dad99b1d0ec47139865c529189', for: lateCheckoutId }, t.t('Lcz_DepartureTime', { fallback: 'Departure time:' }), " ", this.bookingEvent.DEPARTURE_TIME?.description)), hasBalance && (index.h("wa-tooltip", { key: '64f331869707488027d46b1832ae25ecdd6151a5', for: balanceId }, t.t('Lcz_Balance', { fallback: 'Balance' }) + ':', " ", number.formatAmount(calendarData.calendar_data.property.currency.symbol, this.bookingEvent.BALANCE))), noteNode && index.h("div", { key: '686eca2f455d714d086782309ebe7f6072f2f0cd', class: "legend_circle noteIcon", style: { backgroundColor: noteNode.color } }), (hasBalance || isDepartureAfterHotelCheckout) && (index.h("div", { key: 'dc4e56b07e0c903b1461011b78c40598fd91e141', class: "balanceIcon" }, isDepartureAfterHotelCheckout && index.h("div", { key: 'ee88093191d035d00851f5e7784be6e63c36497b', id: lateCheckoutId, class: "legend_circle lateCheckoutDot" }), hasBalance && index.h("div", { key: 'cd7f583f2083ba3095d5c25f7362f469122ed8a7', id: balanceId, class: "legend_circle balanceDot" }))), index.h("div", { key: 'daa0e55e823757e0fe615d4c7aaae59a26777b8f', class: { bookingEventTitle: true, pending }, style: pending ? undefined : { color: foreground }, ref: el => (this.titleElement = el) }, this.bookingEvent.NAME, this.renderEventBookingNumber()), index.h("div", { key: '6988c3c810cd44f43b38978c412512cf89ec9daf', "data-handle": "leftSide", class: { bookingEventDragHandle: true, leftSide: true, ...skewClasses } }), index.h("div", { key: '19c3f32c337ffc013bd1f48ca384e0c054d7857d', "data-handle": "rightSide", class: { bookingEventDragHandle: true, rightSide: true, ...skewClasses } }), this.showInfoPopup && (
        // Rendered in the top layer by wa-popup, but still a DOM child of the bar: outside-click
        // detection and the "presses in the bubble are not drags" guard keep working as before.
        index.h("wa-popup", { key: '8fc6e929f840be2e4f28777dc39da0aa38e5c333', class: "bookingEventPopup", active: true, anchor: this.popupAnchor?.anchor, placement: "bottom", distance: 10, flip: true,
            // wa-popup types these as numbers, but hands them to Floating UI, which takes per-side padding.
            flipPadding: this.popupPadding, flipBoundary: this.getScroller() ?? undefined, shift: true, shiftPadding: this.popupPadding, shiftBoundary: this.getScroller() ?? undefined, arrow: true, arrowPadding: 14, "onwa-reposition": this.handlePopupReposition, ref: el => (this.popupElement = el) }, index.h("igl-booking-event-hover", { key: '0767a6fb68793278e5dcd7525cd898689850d63e', is_vacation_rental: this.is_vacation_rental, countries: this.countries, bookingEvent: this.bookingEvent })))));
    }
    static get watchers() { return {
        "bookingEvent": [{
                "handleBookingEventChange": 0
            }]
    }; }
};
IglBookingEvent.style = iglBookingEventCss();

const iglBulkOperationsDrawerCss = () => `.sc-igl-bulk-operations-drawer-h{text-align:start;display:block}.bulk-operations__drawer.sc-igl-bulk-operations-drawer::part(body),.bulk-operations__drawer.sc-igl-bulk-operations-drawer [part~="body"]{padding:0;padding-inline:0.1rem}.bulk-operations__tab-group.sc-igl-bulk-operations-drawer::part(nav),.bulk-operations__tab-group.sc-igl-bulk-operations-drawer [part~="nav"]{position:sticky;top:0;z-index:10;background-color:var(--wa-color-surface-default)}`;

const IglBulkOperationsDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeDrawer = index.createEvent(this, "closeDrawer");
        this.toast = index.createEvent(this, "toast");
    }
    open;
    maxDatesLength = 8;
    property_id;
    closeDrawer;
    toast;
    selectedTab = 'stop-sale';
    isLoading;
    formId = `bulk-operations-form`;
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
        return (index.h(index.Host, { key: 'a2ce12ab50401b3ee6bcfbd1f5ad846ad151b1c4' }, index.h("ir-drawer", { key: 'a3911c22af2d455e6415b15ca3b01864d70c27ed', onDrawerHide: this.handleDrawerClose.bind(this), label: t.t('Lcz_BulkAvailabilityOperations', { fallback: 'Bulk Availability Operations' }), open: this.open, class: "bulk-operations__drawer" }, this.open && (index.h("wa-tab-group", { key: '3881dcdb0e35133956aa07d96555cf33e7ff70b2', class: "bulk-operations__tab-group", active: this.selectedTab, activation: "manual", "onwa-tab-show": e => (this.selectedTab = e.detail.name?.toString()) }, index.h("wa-tab", { key: '2efbea440da3ed76c952341551085b3eed395fac', panel: "stop-sale" }, t.t('Lcz_StopOpenSale', { fallback: 'Stop/Open Sale' })), index.h("wa-tab", { key: '47b7181d84e21cd070d5ec5cc0cf9740d83daeed', panel: "block" }, t.t('Lcz_BlockUnit', { fallback: 'Block Unit' })), index.h("wa-tab-panel", { key: 'd2de43ff225ff418b686cc7508033c76c5496d83', name: "stop-sale" }, this.selectedTab === 'stop-sale' && (index.h("igl-bulk-stop-sale", { key: '0bb43341208f2d8d71d7a6aee936395870b4ade5', onCloseDrawer: this.handleDrawerClose.bind(this), maxDatesLength: this.maxDatesLength, formId: formId, property_id: this.property_id }))), index.h("wa-tab-panel", { key: 'c2ebd33a6fdbe139ae288a603945ec55542497f6', name: "block" }, this.selectedTab === 'block' && (index.h("igl-bulk-block", { key: '7cde578e7ac770cb1b2f4949e0d1f39a617e024f', onCloseDrawer: this.handleDrawerClose.bind(this), formId: formId, maxDatesLength: this.maxDatesLength, property_id: this.property_id }))))), index.h("div", { key: '938dc48c653b8936eced51c2210d1cc5bf2aaa4b', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: 'ac622a93ca4d94fb42ed3ed2ef5908e349a12c76', size: "m", variant: "neutral", appearance: "filled", "data-drawer": "close" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '8935cadb94baa30a674ad1f119df9f9db1cabce9', loading: this.isLoading, type: "submit", form: formId, size: "m", variant: "brand" }, t.t('Lcz_Confirm', { fallback: 'Confirm' }))))));
    }
};
IglBulkOperationsDrawer.style = iglBulkOperationsDrawerCss();

const iglCalBodyCss = () => `.sc-igl-cal-body-h{display:block;color:var(--wa-color-text-normal);--day-use-badge-dot-size:15px;--day-use-badge-hit-size:19px;--day-use-badge-border-width:1.5px;--day-use-badge-ring-width:1.5px;--day-use-color-future:var(--wa-color-success-fill-loud, #2e7d32);--day-use-color-staying:var(--wa-color-brand-fill-loud, #1976d2);--day-use-color-past:rgb(160, 160, 160)}.bodyContainer.sc-igl-cal-body{position:relative}.roomRow.sc-igl-cal-body{width:max-content}.roomRow.sc-igl-cal-body:first-child{margin-top:80px}.categoryName.sc-igl-cal-body{font-weight:bold;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.categoryTitle.sc-igl-cal-body{text-align:start !important}.hk_issue_btn.sc-igl-cal-body::part(base),.hk_issue_btn.sc-igl-cal-body [part~="base"]{height:auto;width:fit-content;padding:0.25rem}.cellData.sc-igl-cal-body{background-color:var(--wa-color-surface-default)}.cellData[data-dirty-room='true'].sc-igl-cal-body::after{content:'';position:absolute;bottom:0;height:100%;inset-inline-start:30%;inset-inline-end:30%;background-color:#d4d0be !important}.cellData.disabled.sc-igl-cal-body{background:var(--wa-color-neutral-fill-quiet);cursor:var(--cell-cursor, not-allowed);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body{cursor:pointer;text-align:start !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body:hover{background:var(--wa-color-neutral-fill-quiet)}.roomRow.sc-igl-cal-body .room.sc-igl-cal-body:hover[data-hk-enabled='false']{background:var(--wa-color-surface-default);cursor:default}.cellData.sc-igl-cal-body{width:58px;height:30px;display:inline-grid;border-top:1px solid var(--wa-color-surface-border);border-inline-start:1px solid var(--wa-color-surface-border);vertical-align:top}.triangle-button.sc-igl-cal-body{--size:10px;position:absolute;inset-inline-end:-6px;top:-1px;width:0;height:0;padding:0;border:none;background:transparent;cursor:pointer;width:0;height:0;border-left:var(--size) solid transparent;border-right:var(--size) solid transparent;border-bottom:var(--size) solid var(--wa-color-surface-border);transform:rotate(45deg)}.triangle-button.sc-igl-cal-body:dir(rtl){transform:rotate(-45deg)}.cellData.sc-igl-cal-body:nth-child(2){border-inline-start:0px}.cellData.sc-igl-cal-body:last-child{border-inline-end:1px solid var(--wa-color-surface-border)}.roomHeaderCell.sc-igl-cal-body{position:-webkit-sticky;position:sticky;inset-inline-start:0;background:var(--wa-color-surface-default);border-inline-end:1px solid var(--wa-color-surface-border);width:170px;z-index:1;border-inline-start:0px}.currentDay.sc-igl-cal-body{background-color:var(--wa-color-brand-fill-quiet)}.dragOverHighlight.sc-igl-cal-body{background-color:#f5f5dc !important}.selectedDay.sc-igl-cal-body{background-color:#f9f9c9 !important}.dayUseBooked.sc-igl-cal-body{background-color:var(--day-use-color, var(--day-use-color-past)) !important;background-color:color-mix(in srgb, var(--day-use-color, var(--day-use-color-past)) 60%, transparent) !important}.dayUseBooked.sc-igl-cal-body:hover{background-color:var(--day-use-color, var(--day-use-color-past)) !important;background-color:color-mix(in srgb, var(--day-use-color, var(--day-use-color-past)) 80%, transparent) !important}.dayUseBooked--future.sc-igl-cal-body{--day-use-color:var(--day-use-color-future)}.dayUseBooked--staying.sc-igl-cal-body{--day-use-color:var(--day-use-color-staying)}.dayUseBooked--past.sc-igl-cal-body{--day-use-color:var(--day-use-color-past)}.dayUseBadge.sc-igl-cal-body{position:absolute;inset-block-start:calc(var(--day-use-badge-hit-size) / -2);inset-inline-end:calc(var(--day-use-badge-hit-size) / -2);width:var(--day-use-badge-hit-size);height:var(--day-use-badge-hit-size);display:flex;align-items:center;justify-content:center;padding:0;z-index:100;border:none;background:transparent;cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent;opacity:0;pointer-events:none;transition:opacity var(--wa-transition-fast, 150ms) ease-out}.roomCell.sc-igl-cal-body:hover .dayUseBadge.sc-igl-cal-body,.roomCell.sc-igl-cal-body:focus-within .dayUseBadge.sc-igl-cal-body{opacity:1;pointer-events:auto}@media (hover: none){.dayUseBadge.sc-igl-cal-body{opacity:1;pointer-events:auto}}.dayUseBadge__dot.sc-igl-cal-body{flex-shrink:0;width:var(--day-use-badge-dot-size);height:var(--day-use-badge-dot-size);border-radius:50%;z-index:100;background:var(--day-use-color, var(--day-use-color-past));box-shadow:0 0 0 var(--day-use-badge-ring-width) var(--wa-color-surface-default, #fff),     0 1px 3px rgba(0, 0, 0, 0.5);transition:transform var(--wa-transition-fast, 150ms) ease-out,     box-shadow var(--wa-transition-fast, 150ms) ease-out}.dayUseBadge.sc-igl-cal-body:hover .dayUseBadge__dot.sc-igl-cal-body,.dayUseBadge.sc-igl-cal-body:focus-visible .dayUseBadge__dot.sc-igl-cal-body{transform:scale(1.2);box-shadow:0 0 0 var(--day-use-badge-ring-width) var(--wa-color-surface-default, #fff),     0 2px 5px rgba(0, 0, 0, 0.6)}.dayUseBadge.sc-igl-cal-body:focus-visible{outline:var(--wa-focus-ring, 2px solid var(--wa-color-danger-fill-loud));outline-offset:1px;border-radius:50%}@media (prefers-reduced-motion: reduce){.dayUseBadge__dot.sc-igl-cal-body{transition:none}}.dayUseTooltip__main.sc-igl-cal-body{display:flex;align-items:center;gap:0.5rem;min-width:0}.dayUseTooltip__meta.sc-igl-cal-body{display:flex;align-items:center;gap:0.5rem;justify-content:space-between}.dayUseTooltip__time.sc-igl-cal-body{font-variant-numeric:tabular-nums;font-size:var(--wa-font-size-2xs, 0.75rem)}.dayUseTooltip__price.sc-igl-cal-body{flex-shrink:0;margin-inline-start:auto;font-weight:var(--wa-font-weight-action, 600);font-variant-numeric:tabular-nums;font-size:var(--wa-font-size-2xs, 0.75rem)}.dayUseTooltip__number.sc-igl-cal-body{flex-shrink:0;font-variant-numeric:tabular-nums;font-size:var(--wa-font-size-2xs, 0.75rem)}.dayUseTooltip__guest.sc-igl-cal-body{flex:1 1 auto;text-align:end;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.categoryTitle.sc-igl-cal-body{grid-template-columns:1fr 20px;padding-inline-start:10px;cursor:pointer;height:40px;font-size:0.9em}.categoryTitle.sc-igl-cal-body>.sc-igl-cal-body:nth-child(1){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.roomTitle.sc-igl-cal-body{padding-inline-start:20px;font-size:0.9em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.roomTitle.sc-igl-cal-body>.sc-igl-cal-body:nth-child(1){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.roomTitle.pl10.sc-igl-cal-body{padding-inline-start:10px}.categoryPriceColumn.sc-igl-cal-body{align-items:center;height:40px;-webkit-user-select:none;user-select:none;position:relative}.bookingEventsContainer.sc-igl-cal-body{position:absolute;top:0;left:0}.roomTitle[data-room-has-today-checkin='true'].sc-igl-cal-body{--ir-interactive-hk-bg:var(--wa-color-brand-fill-quiet);color:var(--wa-color-brand-on-quiet);background-color:var(--wa-color-brand-fill-quiet) !important}.ir-text-start.sc-igl-cal-body{text-align:start}.ir-flip-rtl.sc-igl-cal-body:dir(rtl){scale:-1 1}`;

const IglCalBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.addBookingDatasEvent = index.createEvent(this, "addBookingDatasEvent");
        this.showBookingPopup = index.createEvent(this, "showBookingPopup");
        this.scrollPageToRoom = index.createEvent(this, "scrollPageToRoom");
    }
    isScrollViewDragging;
    propertyId;
    calendarData;
    /** `YYYY-MM-DD` */
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
            index.forceUpdate(this);
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
        this.bookingMap = this.getBookingMap(this.getBookingData());
        this.updateRoomEventsIndex();
        this.updateTodayCheckinStatus();
        booking.calendar_dates.days.forEach(day => {
            this.dayRateMap.set(day.value, day.rate);
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
        let category = this.getRoomTypeById(roomId);
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
    getRoomTypeById(roomId) {
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
    getRoomtypeUnits(roomtype) {
        return (roomtype && roomtype.physicalrooms) || [];
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
     * Handed to every booking bar as a stable function reference, so a change to one booking does not
     * give every bar a new prop value (and a re-render) - bars only need the full list when a drop lands.
     */
    getAllBookingEvents = () => this.getBookingData();
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
        return 'room_' + roomId + '_' + selectedDay.value;
    }
    // getSplitBookingEvents(newEvent) {
    //   return this.getBookingData().some(bookingEvent => !['003', '002', '004'].includes(bookingEvent.STATUS_CODE) && newEvent.FROM_DATE === bookingEvent.FROM_DATE);
    // }
    getSplitBookingEvents(newEvent) {
        console.log(newEvent.FROM_DATE);
        return this.getBookingData().some(bookingEvent => {
            if (!['003', '002', '004'].includes(bookingEvent.STATUS_CODE)) {
                if (newEvent.FROM_DATE >= bookingEvent.FROM_DATE && newEvent.FROM_DATE <= bookingEvent.TO_DATE) {
                    return bookingEvent;
                }
            }
        });
    }
    addNewEvent(roomCategory) {
        let keys = Object.keys(this.selectedRooms);
        const first = this.selectedRooms[keys[0]].value;
        const second = this.selectedRooms[keys[1]].value;
        const [startDate, endDate] = first < second ? [first, second] : [second, first];
        const dateDifference = calendarDates.nightsBetween(startDate, endDate);
        this.newEvent = {
            ID: 'NEW_TEMP_EVENT',
            NAME: index.h("span", null, "\u00A0"),
            EMAIL: '',
            PHONE: '',
            convertBooking: false,
            REFERENCE_TYPE: 'PHONE',
            FROM_DATE: startDate,
            TO_DATE: endDate,
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
            TITLE: t.t('Lcz_NewBookingFor'),
            roomsInfo: [roomCategory],
            CATEGORY: roomCategory.name,
            event_type: 'BAR_BOOKING',
            STATUS: 'TEMP-EVENT',
            defaultDateRange: {
                fromDate: startDate,
                toDate: endDate,
                dateDifference,
                editable: false,
                message: t.t('Lcz_IncludingCityTaxExcludingVatMock', { fallback: 'Including 5.00% City Tax - Excluding 11.00% VAT' }),
            },
        };
        let popupTitle = roomCategory.name + ' ' + this.getRoomName(this.getRoomById(this.getRoomtypeUnits(roomCategory), this.selectedRooms[keys[0]].roomId));
        this.newEvent.BLOCK_DATES_TITLE = `${t.t('Lcz_BlockDatesFor')} ${popupTitle}`;
        this.newEvent.TITLE += popupTitle;
        this.newEvent.ENTRY_DATE = new Date().toISOString();
        this.newEvent.legendData = this.calendarData.formattedLegendData;
        let splitBookingEvents = this.getSplitBookingEvents(this.newEvent);
        if (splitBookingEvents) {
            this.newEvent.splitBookingEvents = splitBookingEvents;
        }
        this.getBookingData().push(this.newEvent);
        return this.newEvent;
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
        utils.showToast({ type: 'error', title });
    }
    clickCell(roomId, selectedDay, roomCategory) {
        const earliestSelectableDate = calendarDates.addDaysISO(calendarDates.todayISO(), -1); // allow starting the selection from yesterday
        if (!this.isScrollViewDragging && selectedDay.value >= earliestSelectableDate) {
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
                    this.cancelSelectionWithConflictToast(t.t('Lcz_BookingBetweenSelectedDates', { fallback: 'Selection cancelled. A booking already exists within the selected dates.' }));
                    return;
                }
                if (this.hasBlockedConflictBetween(roomId, startValue, endValue)) {
                    this.cancelSelectionWithConflictToast(t.t('Lcz_BlockedDatesBetweenSelectedDates', { fallback: 'Selection cancelled. These dates are blocked.' }));
                    return;
                }
                if (this.hasUnavailableCellBetween(roomId, startValue, endValue)) {
                    this.cancelSelectionWithConflictToast(t.t('Lcz_UnavailableDatesBetweenSelectedDates', { fallback: 'Selection cancelled. These dates are not available.' }));
                    return;
                }
                if (this.hasDayUseBookingBetween(roomId, startValue, endValue)) {
                    this.cancelSelectionWithConflictToast(t.t('Lcz_DayUseBookingBetweenSelectedDates', { fallback: 'Selection cancelled. A day-use booking already exists within the selected dates.' }));
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
                start: moment.hooks(event.FROM_DATE, 'YYYY-MM-DD').startOf('day').valueOf(),
                end: moment.hooks(event.TO_DATE, 'YYYY-MM-DD').startOf('day').valueOf(),
                isBlock: utils.isBlockUnit(event.STATUS_CODE),
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
    getRoomtypeDayInventoryCells(addClass, isCategory = false, index$1) {
        return booking.calendar_dates.days.map(dayInfo => {
            // const isActive = true;
            return (index.h("div", { class: `cellData  font-weight-bold categoryPriceColumn ${addClass + '_' + dayInfo.value} ${dayInfo.value === this.today || dayInfo.value === this.highlightedDate ? 'currentDay' : ''}` }, isCategory ? (index.h(index.Fragment, null, index.h("span", { class: 'categoryName' }, number.formatNumber(dayInfo.rate[index$1].exposed_inventory.rts)))) : ('')));
        });
    }
    getGeneralUnitsDayCells(roomId, roomCategory, roomName) {
        return this.calendarData.days.map(dayInfo => {
            const isCellDisabled = this.isCellDisabled(Number(roomId), dayInfo.value);
            const prevDate = moment.hooks(dayInfo.value, 'YYYY-MM-DD').add(-1, 'days').format('YYYY-MM-DD');
            const isDisabled = (isCellDisabled && Object.keys(this.selectedRooms).length === 0) || (isCellDisabled && this.isCellDisabled(Number(roomId), prevDate));
            const isSelected = this.selectedRooms.hasOwnProperty(this.getSelectedCellRefName(roomId, dayInfo));
            const isCurrentDate = dayInfo.value === this.today || dayInfo.value === this.highlightedDate;
            const cleaningDates = booking.calendar_dates.cleaningTasks.has(+roomId) ? booking.calendar_dates.cleaningTasks.get(+roomId) : null;
            const shouldBeCleaned = ['001', '003'].includes(calendarData.calendar_data.cleaning_frequency?.code) ? false : cleaningDates?.has(dayInfo.value);
            const dayUseBooking = this.getDayUseBooking(Number(roomId), dayInfo.value);
            const dayUseStatus = dayUseBooking ? this.getDayUseStatus(dayUseBooking) : null;
            const dayUseCellClass = dayUseBooking ? `dayUseBooked dayUseBooked--${dayUseStatus}` : '';
            return (index.h("div", { class: `cellData position-relative roomCell ${isCellDisabled ? 'disabled' : ''} ${isCurrentDate ? 'currentDay' : ''} ${this.dragOverElement === roomId + '_' + dayInfo.value ? 'dragOverHighlight' : ''} ${isSelected ? 'selectedDay' : ''} ${dayUseCellClass}`,
                // style={!isDisabled && { '--cell-cursor': 'default' }}
                style: { '--cell-cursor': 'default' }, onClick: () => {
                    // if (isDisabled) {
                    //   return;
                    // }
                    this.clickCell(Number(roomId), dayInfo, roomCategory);
                }, "aria-label": roomName, role: "gridcell", "data-room-id": roomId, "data-date": dayInfo.value, "aria-current": isCurrentDate ? 'date' : undefined, "data-room-name": roomName, "data-dirty-room": String(shouldBeCleaned), "data-day-use-booked": String(!!dayUseBooking), "aria-disabled": String(isDisabled), "aria-selected": Boolean(isSelected) }, dayUseBooking && (index.h(index.Fragment, null, index.h("wa-tooltip", { style: { '--max-width': 'auto' }, for: `day-use-badge_${roomId}_${dayInfo.value}`, trigger: "hover" }, index.h("div", { class: "dayUseTooltip__main" }, index.h("span", { class: "dayUseTooltip__time" }, t.t('Lcz_DayUse', { fallback: 'Day use' }), " ", this.formatDayUseTime(dayUseBooking.from_time), " \u2013 ", this.formatDayUseTime(dayUseBooking.to_time)), index.h("span", { class: "dayUseTooltip__price" }, this.getDayUsePrice(dayUseBooking.gross_amount))), index.h("div", { class: "dayUseTooltip__meta" }, index.h("span", { class: "dayUseTooltip__number" }, "#", dayUseBooking.book_nbr), this.getDayUseGuestName(dayUseBooking) && index.h("span", { class: "dayUseTooltip__guest" }, this.getDayUseGuestName(dayUseBooking)))), index.h("button", { id: `day-use-badge_${roomId}_${dayInfo.value}`, type: "button", class: "dayUseBadge", "aria-label": t.t('Lcz_OpenDayUseBookingDetails', { fallback: 'Open day-use booking details' }), onClick: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.openDayUseBookingDetails(dayUseBooking);
                } }, index.h("span", { class: "dayUseBadge__dot" }))))));
        });
    }
    /**
     * Opens the existing day-use reservation's details drawer — same `showBookingPopup`/`EDIT_BOOKING`
     * path `igl-booking-event-hover`'s "Edit booking" action uses, so `igloo-calendar.tsx`'s existing
     * `editBookingItem` wiring picks it up without any new plumbing.
     */
    formatDayUseTime(time) {
        const [hour, minute] = time.split(':');
        return functions._formatTime(hour, minute);
    }
    getDayUseGuestName(booking) {
        return [booking.guest_first_name, booking.guest_last_name].filter(Boolean).join(' ').trim();
    }
    getDayUsePrice(amount) {
        return number.formatAmount(this.currency?.symbol ?? '', Number(amount ?? 0));
    }
    getDayUseStatus(booking) {
        const now = moment.hooks();
        const from = moment.hooks(`${booking.target_date} ${booking.from_time}`, 'YYYY-MM-DD HH:mm');
        const to = moment.hooks(`${booking.target_date} ${booking.to_time}`, 'YYYY-MM-DD HH:mm');
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
                TITLE: `${t.t('Lcz_EditBookingFor', { fallback: 'Edit Booking For' })} ${''}`,
            },
        });
    }
    /**
     * Opens the booking editor drawer in day-use mode with the double-clicked unit preselected
     * (room type scoped via `roomsInfo`, today as the default day-use date).
     */
    openDayUseBooking(room, roomCategory) {
        const today = moment.hooks().format('YYYY-MM-DD');
        this.showBookingPopup.emit({
            key: 'add',
            data: {
                event_type: 'BAR_BOOKING',
                PR_ID: room.id.toString(),
                FROM_DATE: today,
                TO_DATE: moment.hooks().add(1, 'day').format('YYYY-MM-DD'),
                TITLE: `${t.t('Lcz_DayUseBookingFor', { fallback: 'Day-Use Booking For' })} ${roomCategory.name} ${room.name}`,
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
            if (calendarData.calendar_data.housekeeping_enabled) {
                this.selectedRoom = room;
            }
        }, 250);
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
        return (index.h("div", { class: "roomRow", "data-has-today-checkin": String(hasRoomWithTodayCheckin) }, index.h("div", { class: `cellData ir-text-start align-items-center roomHeaderCell categoryTitle ${'category_' + this.getCategoryId(roomType)}`, onClick: () => this.toggleCategory(roomType), "data-has-today-checkin": String(hasRoomWithTodayCheckin) }, index.h("div", { class: 'categoryName' }, index.h("ir-interactive-title", { popoverTitle: this.getCategoryName(roomType) })), roomType.expanded ? index.h("wa-icon", { name: "angle-down" }) : index.h("wa-icon", { class: "ir-flip-rtl", name: "angle-right" })), this.getRoomtypeDayInventoryCells('category_' + this.getCategoryId(roomType), true, index$1)));
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
            return (index.h("div", { class: "roomRow", "data-room-has-today-checkin": String(roomHasTodayCheckin) }, index.h("div", { class: `cellData room  align-items-center roomHeaderCell  roomTitle ${this.getTotalPhysicalRooms(roomType) <= 1 ? 'pl10' : ''} ${'room_' + roomId}`, "data-room-name": name, "data-hk-enabled": String(calendarData.calendar_data.housekeeping_enabled), "data-room": roomId, "data-room-has-today-checkin": String(roomHasTodayCheckin), "data-category-has-today-checkin": String(hasRoomWithTodayCheckin), onClick: () => {
                    this.handleRoomTitleClick(room, roomType);
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
                } }, index.h("wa-animation", { name: "heartBeat", easing: "ease-in-out", duration: 1400, play: true }, index.h("wa-icon", { name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1.1rem' } })))), index.h("div", { style: { visibility: room.hk_status !== '001' ? 'visible' : 'hidden' } }, room.hk_status !== '003' && (index.h("wa-tooltip", { for: `${room.id}_hk_status_icon` }, room.hk_status === '002' ? t.t('Lcz_ThisUnitIsDirty', { fallback: 'This unit is dirty' }) : t.t('Lcz_Inspected', { fallback: 'Inspected' }))), index.h("wa-icon", { id: `${room.id}_hk_status_icon`, name: room.hk_status === '004' ? 'check' : 'broom', style: room.hk_status === '004' && { color: 'var(--wa-color-success-fill-loud)' } })))))), this.getGeneralUnitsDayCells(this.getRoomId(room), roomType, name)));
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
        const start = moment.hooks(startValue, 'YYYY-MM-DD');
        const end = moment.hooks(endValue, 'YYYY-MM-DD');
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
        const a = moment.hooks(startValue, 'YYYY-MM-DD').startOf('day').valueOf();
        const b = moment.hooks(endValue, 'YYYY-MM-DD').startOf('day').valueOf();
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
        const start = moment.hooks(startValue, 'YYYY-MM-DD');
        const end = moment.hooks(endValue, 'YYYY-MM-DD');
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
        return (index.h(index.Host, { key: '72849b9d8af9ed31484e5e0827dfb60cef3f6d2c', dir: direction.isRtlDirection(localeScope.locales.direction) ? 'rtl' : 'ltr' }, index.h("div", { key: 'fb38e6e8226bec25906e22f04624bee77e683e86', class: "bodyContainer" }, this.getRoomRows(), index.h("div", { key: '180c5a561af5a18ccc7b6f7195fa23e792116d47', class: "bookingEventsContainer preventPageScroll" }, this.getBookingData()?.map(bookingEvent => {
            return (index.h("igl-booking-event", { key: bookingEvent.ID, "data-testid": `booking_${bookingEvent.BOOKING_NUMBER}`, "data-room-name": bookingEvent.roomsInfo?.find(r => r.id === bookingEvent.RATE_TYPE)?.physicalrooms.find(r => r.id === bookingEvent.PR_ID)?.name, language: this.language, is_vacation_rental: this.calendarData.is_vacation_rental, countries: this.countries, currency: this.currency, "data-component-id": bookingEvent.ID, bookingEvent: bookingEvent, getAllBookingEvents: this.getAllBookingEvents, roomTop: roomTopOffsets.get(Number(bookingEvent.PR_ID)) }));
        }))), index.h("igl-housekeeping-dialog", { key: '27940cb443126aa7754f1095d2b693bbae75d883', onIrAfterClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedRoom = null;
            }, bookingNumber: this.selectedRoom ? this.bookingMap.get(this.selectedRoom?.id) : undefined, selectedRoom: this.selectedRoom, open: this.selectedRoom !== null }), index.h("igl-hk-issues-dialog", { key: 'f177c2bd5b1706141a161fb0ded51d23bf3c64a9', open: this.issues !== null, issues: this.issues, unitName: this.issues?.length > 0 ? this.issues[0]?.unit?.name : '', propertyId: this.propertyId, onIrAfterClose: e => {
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
        index.registerInstance(this, hostRef);
        this.optionEvent = index.createEvent(this, "optionEvent");
    }
    optionEvent;
    calendarData;
    isLegendOpen = false;
    /** `YYYY-MM-DD` */
    today;
    highlightedDate;
    _today = moment.hooks().format('YYYY-MM-DD');
    // private isOnline:boolean = false;
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (index.h(index.Host, { key: 'fa2352027a21f01c2b5e09ab6538dd7ead1d0e08', class: "footerContainer" }, index.h("div", { key: '6137fe16758e8cd4ba5004b8b390a4079d02280a', class: "footerCell bottomLeftCell align-items-center preventPageScroll", style: { paddingInlineStart: '10px' } }, index.h("button", { key: 'cbc74d7888ff0497f9aeab4a597c0f9bf4dd5bc3', class: "m-0 p-0 btn btn-sm  legendBtn d-flex align-items-center", style: { gap: '0.25rem' }, onClick: () => this.handleOptionEvent('showLegend') }, this.isLegendOpen ? (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", height: 16, width: 16 }, index.h("path", { fill: "currentColor", d: "M105.4 297.4C92.9 309.9 92.9 330.2 105.4 342.7L265.4 502.7C277.9 515.2 298.2 515.2 310.7 502.7C323.2 490.2 323.2 469.9 310.7 457.4L173.3 320L310.6 182.6C323.1 170.1 323.1 149.8 310.6 137.3C298.1 124.8 277.8 124.8 265.3 137.3L105.3 297.3zM457.4 137.4L297.4 297.4C284.9 309.9 284.9 330.2 297.4 342.7L457.4 502.7C469.9 515.2 490.2 515.2 502.7 502.7C515.2 490.2 515.2 469.9 502.7 457.4L365.3 320L502.6 182.6C515.1 170.1 515.1 149.8 502.6 137.3C490.1 124.8 469.8 124.8 457.3 137.3z" }))) : (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", height: 16, width: 16 }, index.h("path", { fill: "currentColor", d: "M535.1 342.6C547.6 330.1 547.6 309.8 535.1 297.3L375.1 137.3C362.6 124.8 342.3 124.8 329.8 137.3C317.3 149.8 317.3 170.1 329.8 182.6L467.2 320L329.9 457.4C317.4 469.9 317.4 490.2 329.9 502.7C342.4 515.2 362.7 515.2 375.2 502.7L535.2 342.7zM183.1 502.6L343.1 342.6C355.6 330.1 355.6 309.8 343.1 297.3L183.1 137.3C170.6 124.8 150.3 124.8 137.8 137.3C125.3 149.8 125.3 170.1 137.8 182.6L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7z" }))), index.h("span", { key: 'd19192ed228d4c9401a43054f06ae731ba36acfc' }, t.t('Lcz_Legend')), index.h("span", { key: '350a700513a7c54d6316329d12587958d2357e2d' }, "v1.69"))), this.calendarData.days.map(dayInfo => (index.h("div", { class: "footerCell align-items-center" }, index.h("div", { class: {
                'dayTitle full-height align-items-center': true,
                'weekend': utils.isWeekend(dayInfo.value),
                'currentDay': dayInfo.value === this._today || this.highlightedDate === dayInfo.value,
            } }, irDate.formatDate(dayInfo.value, 'ddd D')))))));
    }
};
IglCalFooter.style = iglCalFooterCss();

const iglCalHeaderCss = () => `.sc-igl-cal-header-h{display:block;position:absolute;top:0;height:100%;color:var(--wa-color-text-quiet)}`;

const IglCalHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.optionEvent = index.createEvent(this, "optionEvent");
        this.gotoRoomEvent = index.createEvent(this, "gotoRoomEvent");
        this.gotoToBeAssignedDate = index.createEvent(this, "gotoToBeAssignedDate");
    }
    optionEvent;
    gotoRoomEvent;
    gotoToBeAssignedDate;
    calendarData;
    /** `YYYY-MM-DD` */
    today;
    propertyid;
    to_date;
    highlightedDate;
    dayUseBookings = [];
    renderAgain = false;
    roomsList = [];
    componentWillLoad() {
        try {
            this.initializeRoomsList();
        }
        catch (error) {
            console.error('Error in componentWillLoad:', error);
        }
    }
    initializeRoomsList() {
        this.roomsList = [];
        this.calendarData.roomsInfo.forEach(category => {
            this.roomsList = this.roomsList.concat(...category.physicalrooms);
        });
    }
    /** Reads the unassigned-units store live (auto-subscribes on render), keyed by `dayInfo.value` (`YYYY-MM-DD`). */
    getUnassignedRoomsNumberMap() {
        const map = {};
        (this.calendarData.days ?? []).forEach((dayInfo) => {
            const count = calendarGrid.getUnassignedUnitsCountForDate(dayInfo.value);
            if (count > 0) {
                map[dayInfo.value] = count;
            }
        });
        return map;
    }
    /** Days (`YYYY-MM-DD`) whose unassigned-units fetch is still in flight — same store subscription as the count map. */
    getUnassignedLoadingDaysMap() {
        const map = {};
        (this.calendarData.days ?? []).forEach((dayInfo) => {
            if (calendarGrid.isUnassignedUnitsDateLoading(dayInfo.value)) {
                map[dayInfo.value] = true;
            }
        });
        return map;
    }
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    getNewBookingModel() {
        const from_date = calendarDates.todayISO();
        const to_date = calendarDates.addDaysISO(from_date, 1);
        return {
            ID: '',
            NAME: '',
            EMAIL: '',
            PHONE: '',
            REFERENCE_TYPE: 'PHONE',
            FROM_DATE: from_date,
            TO_DATE: to_date,
            roomsInfo: this.calendarData.roomsInfo,
            TITLE: t.t('Lcz_NewBooking', { fallback: 'New Booking' }),
            event_type: 'PLUS_BOOKING',
            legendData: this.calendarData.formattedLegendData,
            defaultDateRange: {
                fromDate: from_date,
                toDate: to_date,
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
                data: e.detail.date,
            });
        }, 100);
    };
    render() {
        return (index.h(index.Host, { key: '81489c35fef786dc2d25dfb2c319d7be076d3594', dir: direction.isRtlDirection(localeScope.locales.direction) ? 'rtl' : 'ltr' }, index.h("igl-cal-header-toolbar", { key: '6ec240f9788033ce02040dad82a56d6c806eb626', isVacationRental: this.calendarData.is_vacation_rental, showDayUseButton: !this.calendarData.is_vacation_rental && this.dayUseBookings?.length > 0, minDate: moment.hooks().add(-2, 'months').startOf('month').format('YYYY-MM-DD'), roomsList: this.roomsList, onActionSelected: this.handleToolbarAction, onRoomSelected: this.handleRoomSelected }), index.h("igl-cal-header-days", { key: 'f9a90240abe9b09f49fbac0b7b34ad971432848d', isVacationRental: this.calendarData.is_vacation_rental, today: this.today, highlightedDate: this.highlightedDate, monthsInfo: this.calendarData.monthsInfo, days: this.calendarData.days, unassignedRoomsNumber: this.getUnassignedRoomsNumberMap(), loadingDays: this.getUnassignedLoadingDaysMap(), onDayBadgeClicked: this.handleDayBadgeClicked })));
    }
};
IglCalHeader.style = iglCalHeaderCss();

const iglCalHeaderDaysCss = () => `.stickyCell.sc-igl-cal-header-days{display:-ms-inline-grid;display:-moz-inline-grid;display:inline-grid;position:-webkit-sticky;position:sticky;top:0px;height:82px;display:inline-block;vertical-align:top;z-index:2}.headersContainer.sc-igl-cal-header-days{background-color:var(--wa-color-surface-default)}.headerCell.sc-igl-cal-header-days{display:inline-grid;width:58px;height:58px;vertical-align:top;background-color:var(--wa-color-surface-default);border-bottom:1px solid var(--wa-color-surface-border)}.monthsContainer.sc-igl-cal-header-days{height:20px;background-color:var(--wa-color-surface-default);margin-bottom:0.2em}.monthCell.sc-igl-cal-header-days{display:inline-grid;height:20px;background-color:var(--wa-color-overlay-inline);border-inline-end:1px solid var(--wa-color-surface-border);color:var(--wa-color-neutral-on-quiet);vertical-align:top}.monthCell.sc-igl-cal-header-days:nth-child(odd){background:var(--wa-color-neutral-fill-normal);color:var(--wa-color-neutral-on-normal)}.monthTitle.sc-igl-cal-header-days{overflow:hidden;text-overflow:ellipsis;font-size:0.9em;text-transform:uppercase;font-weight:bold;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.dayTitle.sc-igl-cal-header-days{font-size:0.8em;font-weight:600;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.dayTitle.weekend.sc-igl-cal-header-days{font-weight:bold;color:var(--wa-color-text-normal)}.currentDay.sc-igl-cal-header-days .dayTitle.sc-igl-cal-header-days{font-weight:bold}.currentDay.sc-igl-cal-header-days{background-color:var(--wa-color-brand-fill-quiet)}.dayCapacityPercent.sc-igl-cal-header-days{font-size:0.75em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.fd-header__badge-btn.sc-igl-cal-header-days{all:unset;display:inline-block;cursor:pointer}.fd-header__badge-btn.sc-igl-cal-header-days:hover .fd-header__badge.sc-igl-cal-header-days{background-color:color-mix(in oklab, var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)), var(--wa-color-mix-hover))}.headersContainer.is-revealing.sc-igl-cal-header-days .fd-header__badge-btn.sc-igl-cal-header-days{animation:fd-header-badge-in 220ms cubic-bezier(0.23, 1, 0.32, 1) both}@keyframes fd-header-badge-in{from{opacity:0;transform:translateY(-3px) scale(0.92)}to{opacity:1;transform:none}}@property --fd-count{syntax:'<integer>';inherits:false;initial-value:0}.headersContainer.is-revealing.sc-igl-cal-header-days .fd-header__badge-count.sc-igl-cal-header-days::before{content:counter(fd-count);counter-reset:fd-count var(--fd-count);animation:fd-header-count-up 320ms cubic-bezier(0.23, 1, 0.32, 1) both;animation-delay:inherit}@keyframes fd-header-count-up{from{--fd-count:0}to{--fd-count:var(--fd-count-target)}}.preventPageScroll.is-loading.sc-igl-cal-header-days wa-badge.sc-igl-cal-header-days{animation:fd-header-badge-breathe 1200ms ease-in-out infinite}@keyframes fd-header-badge-breathe{0%,100%{opacity:1}50%{opacity:0.45}}@media (prefers-reduced-motion: reduce){.headersContainer.is-revealing.sc-igl-cal-header-days .fd-header__badge-btn.sc-igl-cal-header-days{animation:fd-header-badge-fade 200ms ease-out both}.headersContainer.is-revealing.sc-igl-cal-header-days .fd-header__badge-count.sc-igl-cal-header-days::before{animation:none;--fd-count:var(--fd-count-target)}.preventPageScroll.is-loading.sc-igl-cal-header-days wa-badge.sc-igl-cal-header-days{animation:none;opacity:0.6}}@keyframes fd-header-badge-fade{from{opacity:0}to{opacity:1}}`;

/** Entrance stagger: 30ms per cell of distance from today, capped so the far tail lands within ~450ms. */
const REVEAL_STEP_MS = 30;
const REVEAL_MAX_STEPS = 15;
const REVEAL_DURATION_MS = 220;
/** The count-up starts once the pill has mostly landed and ticks 0 → N. */
const REVEAL_COUNT_DELAY_MS = 120;
const REVEAL_COUNT_DURATION_MS = 320;
/** How long the reveal gate stays open once the badges are settled: longest delay + pill + count-up + slack. */
const REVEAL_TOTAL_MS = REVEAL_STEP_MS * REVEAL_MAX_STEPS + Math.max(REVEAL_DURATION_MS, REVEAL_COUNT_DELAY_MS + REVEAL_COUNT_DURATION_MS) + 130;
const IglCalHeaderDays = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dayBadgeClicked = index.createEvent(this, "dayBadgeClicked");
    }
    isVacationRental;
    /** `YYYY-MM-DD` */
    today;
    highlightedDate;
    monthsInfo = [];
    days = [];
    /** Unassigned-unit counts keyed by `dayInfo.value` (`YYYY-MM-DD`), falling back to `dayInfo.unassigned_units_nbr` per cell. */
    unassignedRoomsNumber = {};
    /** Days (keyed by `dayInfo.value`) whose unassigned-units fetch is still in flight; their badges breathe. */
    loadingDays = {};
    /**
     * Gates the badge entrance cascade so it plays once per screen open. Stays open from mount until
     * `REVEAL_TOTAL_MS` after the initial unassigned-units fetch settles — the calendar snapshot often
     * has no counts, so most badges only mount when that fetch lands, well after the first paint.
     */
    revealing = true;
    /** Emitted only when a badge with a non-zero count is clicked — a zero-count badge is inert. */
    dayBadgeClicked;
    revealTimer;
    componentDidLoad() {
        // A fetch may already be in flight on the first render; then the idle transition starts the countdown.
        if (!this.hasLoadingDays(this.loadingDays)) {
            this.scheduleRevealEnd();
        }
    }
    disconnectedCallback() {
        clearTimeout(this.revealTimer);
    }
    /**
     * A fetch in flight keeps the gate open; the countdown restarts when it goes idle. The parent
     * builds a fresh map every render, so only busy/idle transitions count — not reference changes.
     */
    handleLoadingDaysChange(loadingDays, previous = {}) {
        const busy = this.hasLoadingDays(loadingDays);
        const wasBusy = this.hasLoadingDays(previous);
        if (!this.revealing || busy === wasBusy) {
            return;
        }
        if (busy) {
            clearTimeout(this.revealTimer);
            this.revealTimer = undefined;
        }
        else {
            this.scheduleRevealEnd();
        }
    }
    hasLoadingDays(loadingDays) {
        return Object.keys(loadingDays).length > 0;
    }
    scheduleRevealEnd() {
        clearTimeout(this.revealTimer);
        this.revealTimer = setTimeout(() => {
            this.revealing = false;
        }, REVEAL_TOTAL_MS);
    }
    handleBadgeClick(dayInfo) {
        if (this.unassignedRoomsNumber[dayInfo.value] || 0) {
            this.dayBadgeClicked.emit({ date: dayInfo.value });
        }
    }
    /** Stagger radiates outward from today's cell, where the user is looking after the initial scroll. */
    getRevealDelay(index, todayIndex) {
        return Math.min(Math.abs(index - todayIndex), REVEAL_MAX_STEPS) * REVEAL_STEP_MS;
    }
    render() {
        const todayIndex = Math.max(this.days.findIndex(dayInfo => dayInfo.value === this.today), 0);
        return (index.h(index.Host, { key: '1d6d1ef237f432dc60177ffff6207454443e5c2a' }, index.h("div", { key: '18e41d22f550262850bdebdaab10a46b09c818dc', class: { 'stickyCell': true, 'headersContainer': true, 'is-revealing': this.revealing } }, index.h("div", { key: '703703d34e75ee566fca03914e193be8acb372de', class: "monthsContainer" }, this.monthsInfo.map(monthInfo => {
            return (index.h("div", { class: "monthCell", style: { width: monthInfo.daysCount * 58 + 'px' } }, index.h("div", { class: "monthTitle" }, irDate.formatDate(monthInfo.firstDayValue, 'MMM YYYY'))));
        })), this.days.map((dayInfo, index$1) => {
            const count = this.unassignedRoomsNumber[dayInfo.value] || dayInfo.unassigned_units_nbr;
            const revealDelay = this.getRevealDelay(index$1, todayIndex);
            return (index.h("div", { class: `headerCell align-items-center ${dayInfo.value === this.today || dayInfo.value === this.highlightedDate ? 'currentDay' : ''}`, "data-date": dayInfo.value }, !this.isVacationRental && (index.h("div", { class: { 'preventPageScroll': true, 'is-loading': !!this.loadingDays[dayInfo.value] }, onClick: () => this.handleBadgeClick(dayInfo) }, this.unassignedRoomsNumber[dayInfo.value] || dayInfo.unassigned_units_nbr !== 0 ? (index.h("button", { class: 'fd-header__badge-btn', style: this.revealing ? { animationDelay: `${revealDelay}ms` } : undefined }, index.h("wa-badge", { class: "fd-header__badge", variant: 'brand', appearance: 'accent', pill: true }, this.revealing ? (
            /* Digits are drawn by CSS (`counter()` over the animated `--fd-count`) until the gate closes. */
            index.h("span", { class: "fd-header__badge-count", style: { '--fd-count-target': String(count), 'animationDelay': `${revealDelay + REVEAL_COUNT_DELAY_MS}ms` } })) : (number.formatCount(count))))) : (index.h("wa-badge", { variant: 'neutral', appearance: 'filled', pill: true }, ' ', number.formatCount(this.unassignedRoomsNumber[dayInfo.value] || dayInfo.unassigned_units_nbr))))), index.h("div", { class: { dayTitle: true, weekend: utils.isWeekend(dayInfo.value) } }, irDate.formatDate(dayInfo.value, 'ddd D')), index.h("div", { class: "dayCapacityPercent" }, number.formatPercent(dayInfo.occupancy))));
        }))));
    }
    static get watchers() { return {
        "loadingDays": [{
                "handleLoadingDaysChange": 0
            }]
    }; }
};
IglCalHeaderDays.style = iglCalHeaderDaysCss();

const iglCalHeaderToolbarCss = () => `.stickyCell.sc-igl-cal-header-toolbar{display:-ms-inline-grid;display:-moz-inline-grid;display:inline-grid;position:-webkit-sticky;position:sticky;top:0px;height:82px;display:inline-block;vertical-align:top;z-index:2}.topLeftCell.sc-igl-cal-header-toolbar{border-inline-end:1px solid var(--wa-color-surface-border)}.topLeftCell.sc-igl-cal-header-toolbar{inset-inline-start:0px;z-index:3;width:170px;background-color:var(--wa-color-surface-default);display:-ms-inline-grid;display:-moz-inline-grid;display:inline-grid}.btn.sc-igl-cal-header-toolbar{pointer-events:auto}.header__fd-actions.sc-igl-cal-header-toolbar{color:var(--wa-color-text-normal);border-inline-end:1px solid var(--wa-color-surface-border)}.header__fd-actions.sc-igl-cal-header-toolbar{display:flex;width:170px;box-sizing:border-box;gap:0.875rem;color:var(--wa-color-text-normal);flex-direction:column}.searchContiner.sc-igl-cal-header-toolbar{padding-inline-start:10px;padding-inline-end:10px}`;

const IglCalHeaderToolbar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.actionSelected = index.createEvent(this, "actionSelected");
        this.roomSelected = index.createEvent(this, "roomSelected");
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
        return (index.h(index.Host, { key: 'e058f2f1900eb8a3791bec1937bf9f6865aadc15' }, index.h("div", { key: '77c42013cfaa1df338470052cb62438ddd87bf63', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, index.h("div", { key: '3bfc22ceebebe8743d92d5bb0cc28bba52be5f00', class: "header__fd-actions" }, index.h("div", { key: '27d51a2840a5fcf66aa3f73f75ceb331bdc275b9', class: "row justify-content-around no-gutters", style: { gap: '0' } }, !this.isVacationRental && (index.h(index.Fragment, { key: 'e8e91381811e21e0179214180fb62a04a8d72265' }, index.h("wa-tooltip", { key: '0bb003c4604609a9975694f68c89bf6eeb4eaf18', trigger: "hover", for: "fd-unassigned-dates_btn" }, t.t('Lcz_UnassignedUnitsTooltip')), index.h("ir-custom-button", { key: 'd2d863848d3eabafdef214407c6a4dfe01a9fd7d', id: "fd-unassigned-dates_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('showAssigned') }, index.h("wa-icon", { key: 'ea7817796c60eca46f9204de40d99519278ab72d', style: { fontSize: '1.3rem' }, name: "list-ol", label: t.t('Lcz_UnassignedUnitsTooltip'), "aria-label": t.t('Lcz_UnassignedUnitsTooltip') })))), this.showDayUseButton && (index.h(index.Fragment, { key: 'c52469b041e2b7d264e52c2c8e8c855278b76c7e' }, index.h("wa-tooltip", { key: '321872ef194956a1a76e9eec4ec229190ab5a458', trigger: "hover", for: "fd-day-use-bookings_btn" }, t.t('Lcz_DayUseBookings', { fallback: 'Day Use Bookings' })), index.h("ir-custom-button", { key: '11b31cb40f0bb85e3e6fabc3437da1c44f405e90', id: "fd-day-use-bookings_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('showDayUseBookings') }, index.h("wa-icon", { key: 'eb07f07954b5ef621838d06ce3d16a9a3a2739e1', style: { fontSize: '1.3rem' }, name: "sun", label: t.t('Lcz_DayUse', { fallback: 'Day use' }), "aria-label": t.t('Lcz_DayUse', { fallback: 'Day use' }) })))), index.h("wa-tooltip", { key: '81556193dd7ed24ad1ade099f319f9efd69200d0', trigger: "hover", for: "fd-dates-navigation_btn" }, t.t('Lcz_Navigate')), index.h("ir-date-select", { key: 'e7143a0eee5f7f9da797b8528875b27fb16e8de5', minDate: this.minDate, onDateChanged: evt => this.handleDateSelect(evt), ref: el => (this.dateSelectRef = el) }, index.h("ir-custom-button", { key: '96258f7a1e9d82f75da151e4d3bde560820e63da', slot: "trigger", id: "fd-dates-navigation_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('calendar') }, index.h("wa-icon", { key: 'd896625b5decd244cb8c5b490b4c6749cae8b678', style: { fontSize: '1.3rem' }, name: "calendar-days", variant: "regular", label: t.t('Lcz_Navigate'), "aria-label": t.t('Lcz_Navigate') })), index.h("div", { key: '71b1b3429dcd726b86565f5b7c88a1b496ef5cd6', class: "fd-dates__actions" }, index.h("wa-divider", { key: 'a1e6044bfc61c7501a963bd0db29cf5e3e1a09e3' }), index.h("ir-custom-button", { key: 'd4727f0a53cecbc500f30a4e1aa003fb86e1d4d3', variant: "neutral", appearance: "outlined", onClickHandler: () => {
                this.handleAction('gotoToday');
                this.dateSelectRef.hide();
            } }, t.t('Lcz_Today', { fallback: 'Today' })))), index.h("wa-tooltip", { key: 'f6c57a1da54c348dcfeb9174fb716c042a02ccfb', trigger: "hover", for: "fd-rectifier" }, t.t('Lcz_RectifyOrOpenAvailability', { fallback: 'Rectify or open availability' })), index.h("ir-custom-button", { key: '90c5d314d2b3ae69130b24451c048e576d375001', id: "fd-rectifier", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('rectify') }, index.h("wa-icon", { key: '9809f77778c5199f577647688d4f826f8b58a515', style: { fontSize: '1.3rem' }, name: "circle-check", variant: "regular", label: t.t('Lcz_RectifyOrOpenAvailability', { fallback: 'Rectify or open availability' }), "aria-label": t.t('Lcz_RectifyOrOpenAvailability', { fallback: 'Rectify or open availability' }) })), index.h(index.Fragment, { key: '2bcbdbeb7a2517d85734e0d3166c9c488c549bc9' }, index.h("wa-tooltip", { key: '81db6e66ba0af6d99ca338c75234c5890015e474', trigger: "hover", for: "fd-stop-open-sale_btn" }, t.t('Lcz_StopOpenSale')), index.h("ir-custom-button", { key: '48381f5b54c74e385a03f0ae991a0cb9699f65dc', id: "fd-stop-open-sale_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleAction('bulk') }, index.h("wa-icon", { key: '25f69f3e4c7a3167631a1ff7a2d5ab2e8df5b60a', style: { fontSize: '1.3rem' }, name: "xmarks-lines", label: t.t('Lcz_StopOpenSale'), "aria-label": t.t('Lcz_StopOpenSale') })))), this.roomsList.length >= 20 && (index.h("div", { key: 'b4c5c0c6c3f65d82f55dd3d87454c9731c8b1d31', class: "searchContiner" }, index.h("ir-picker", { key: '949e8683f2e7896b19f8a34f2a1a09e1397a36d5', size: "s", "onCombobox-select": e => {
                this.handleScrollToRoom(Number(e.detail.item.value));
            } }, this.roomsList.map(room => (index.h("ir-picker-item", { label: room.name, value: String(room.id) }, room.name))))))))));
    }
};
IglCalHeaderToolbar.style = iglCalHeaderToolbarCss();

const iglDayUseBookingsCss = () => `.sc-igl-day-use-bookings-h{--spacing:var(--wa-space-l);display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-s);text-align:start;background-color:var(--wa-color-surface-default);border-inline-end:2px solid var(--wa-color-surface-border)}.dub-panel.sc-igl-day-use-bookings{display:flex;flex-direction:column;min-height:100%}.dub-panel__head.sc-igl-day-use-bookings{position:sticky;top:0;z-index:1;font-family:var(--wa-font-family-heading);background-color:var(--wa-color-surface-default)}.dub-panel__header.sc-igl-day-use-bookings{display:flex;align-items:center;justify-content:space-between;gap:0.5rem;box-sizing:border-box;padding-inline:var(--spacing);padding-block:calc(var(--spacing) / 2);border-bottom:1px solid var(--wa-color-surface-border)}.dub-panel__title.sc-igl-day-use-bookings{flex:1 1 auto;margin:0;font-size:var(--wa-font-size-l);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);font-family:var(--wa-font-family-heading);color:var(--wa-color-text-normal)}.dub-panel__toolbar.sc-igl-day-use-bookings{padding:var(--spacing);padding-block-end:0}.dub-panel__body.sc-igl-day-use-bookings{display:flex;flex:1 1 auto;flex-direction:column;gap:1.25rem;padding:var(--spacing)}.dub-category.sc-igl-day-use-bookings{display:flex;flex-direction:column;gap:0.5rem}.dub-category__title.sc-igl-day-use-bookings{margin:0;color:var(--wa-color-text-normal);font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);font-size:var(--wa-font-size-m);text-wrap:balance}.dub-category__list.sc-igl-day-use-bookings{display:flex;flex-direction:column;gap:0.5rem}.dub-booking.sc-igl-day-use-bookings{display:flex;flex-direction:column;gap:0.35rem;width:100%;padding:0.65rem 0.75rem;border:1px solid var(--wa-color-surface-border);border-radius:var(--wa-border-radius-m, 6px);background:var(--wa-color-surface-default);font:inherit;color:inherit;text-align:start;cursor:pointer;transition:background-color var(--wa-transition-fast, 150ms) ease-out,     border-color var(--wa-transition-fast, 150ms) ease-out}.dub-booking.sc-igl-day-use-bookings:hover{background:var(--wa-color-neutral-fill-quiet);border-color:var(--wa-color-neutral-border-loud)}.dub-booking.sc-igl-day-use-bookings:focus-visible{outline:var(--wa-focus-ring, 2px solid var(--wa-color-brand-fill-loud));outline-offset:2px}.dub-booking__main.sc-igl-day-use-bookings{display:flex;align-items:center;gap:0.5rem;min-width:0}.dub-booking__price.sc-igl-day-use-bookings{flex-shrink:0;margin-inline-start:auto;color:var(--wa-color-text-normal);font-weight:var(--wa-font-weight-action, 600);font-variant-numeric:tabular-nums;font-size:var(--wa-font-size-2xs, 0.75rem)}.dub-booking__number.sc-igl-day-use-bookings{flex-shrink:0;color:var(--wa-color-text-quiet);font-variant-numeric:tabular-nums;font-size:var(--wa-font-size-2xs, 0.75rem)}.dub-booking__guest.sc-igl-day-use-bookings{flex:1 1 auto;min-width:0;color:var(--wa-color-text-quiet);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.dub-booking__meta.sc-igl-day-use-bookings{display:flex;align-items:center;gap:0.5rem}.dub-booking__time.sc-igl-day-use-bookings{font-variant-numeric:tabular-nums;color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-2xs, 0.75rem)}.dub-status.sc-igl-day-use-bookings{flex-shrink:0;padding:0.1rem 0.5rem;border-radius:999px;font-size:var(--wa-font-size-2xs, 0.7rem);font-weight:var(--wa-font-weight-action, 600);white-space:nowrap}.dub-status--scheduled.sc-igl-day-use-bookings{background:var(--wa-color-neutral-fill-quiet);color:var(--wa-color-neutral-on-quiet)}.dub-status--upcoming.sc-igl-day-use-bookings{background:var(--wa-color-brand-fill-quiet);color:var(--wa-color-brand-on-quiet)}.dub-status--in-progress.sc-igl-day-use-bookings{background:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet)}.dub-booking__movements.sc-igl-day-use-bookings{display:flex;flex-wrap:wrap;align-items:center;gap:0.35rem;padding-block-start:0.35rem;border-top:1px dashed var(--wa-color-surface-border)}.dub-movement.sc-igl-day-use-bookings{display:inline-flex;align-items:center;gap:0.3rem;padding:0.1rem 0.45rem;border-radius:999px;font-size:var(--wa-font-size-2xs, 0.7rem);font-weight:var(--wa-font-weight-action, 600);white-space:nowrap}.dub-movement__icon.sc-igl-day-use-bookings{font-size:0.75rem}.dub-movement__time.sc-igl-day-use-bookings{font-weight:var(--wa-font-weight-normal, 400);font-variant-numeric:tabular-nums}.dub-movement--departure.sc-igl-day-use-bookings{background:var(--wa-color-warning-fill-quiet);color:var(--wa-color-warning-on-quiet)}.dub-movement--arrival.sc-igl-day-use-bookings{background:var(--wa-color-brand-fill-quiet);color:var(--wa-color-brand-on-quiet)}.dub-movement--turnover.sc-igl-day-use-bookings{background:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet)}.dub-movement-tip.sc-igl-day-use-bookings{display:flex;flex-direction:column;gap:0.25rem;text-align:start}.dub-movement-tip__line.sc-igl-day-use-bookings{display:flex;align-items:center;gap:0.35rem;white-space:nowrap}.dub-movement-tip__label.sc-igl-day-use-bookings{font-weight:var(--wa-font-weight-action, 600)}.dub-movement-tip__time.sc-igl-day-use-bookings{font-variant-numeric:tabular-nums}`;

function getStatusLabel(status) {
    switch (status) {
        case 'scheduled':
            return t.t('Lcz_Scheduled', { fallback: 'Scheduled' });
        case 'upcoming':
            return t.t('Lcz_Upcoming', { fallback: 'Upcoming' });
        case 'in-progress':
            return t.t('Lcz_InProgress', { fallback: 'In Progress' });
    }
}
const GUEST_NAME_CROP_SIZE = 16;
const MOVEMENT_ICON = {
    departure: 'plane-departure',
    arrival: 'plane-arrival',
};
function getMovementLabel(kind) {
    return kind === 'departure' ? t.t('Lcz_Departure', { fallback: 'Departure' }) : t.t('Lcz_Arrival', { fallback: 'Arrival' });
}
/** `_DEPARTURE_TIME` code meaning the guest never picked one — the property's standard check-out applies. */
const UNSET_DEPARTURE_TIME_CODE = '000';
/** `_ARRIVAL_TIME` code for "Not sure yet" — same idea, the property's standard check-in applies. */
const UNSET_ARRIVAL_TIME_CODE = '001';
const IglDayUseBookings = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.optionEvent = index.createEvent(this, "optionEvent");
        this.showBookingPopup = index.createEvent(this, "showBookingPopup");
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
        const today = moment.hooks().format('YYYY-MM-DD');
        const dates = this.orderedDates;
        this.selectedDate = dates.includes(today) ? today : (dates[0] ?? today);
    }
    get orderedDates() {
        const today = moment.hooks().format('YYYY-MM-DD');
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
        return number.formatAmount(this.calendarData?.currency?.symbol ?? '', Number(amount ?? 0));
    }
    getStatus(booking) {
        if (booking.target_date !== moment.hooks().format('YYYY-MM-DD')) {
            return 'scheduled';
        }
        const from = moment.hooks(`${booking.target_date} ${booking.from_time}`, 'YYYY-MM-DD HH:mm');
        return moment.hooks().isBefore(from) ? 'upcoming' : 'in-progress';
    }
    formatTime(time) {
        const [hour, minute] = time.split(':');
        return functions._formatTime(hour, minute);
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
                TITLE: `${t.t('Lcz_EditBookingFor', { fallback: 'Edit Booking For' })} ${this.getGuestName(booking)}`,
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
        return match ? functions._formatTime(match[1], match[2]) : value.trim() || null;
    }
    getDepartureTime(event) {
        const departure = event.DEPARTURE_TIME ?? this.getStayRoom(event)?.departure_time;
        const requested = departure?.code && departure.code !== UNSET_DEPARTURE_TIME_CODE ? departure.description : null;
        return requested
            ? { time: this.formatClockTime(requested), isStandard: false }
            : { time: this.formatClockTime(calendarData.calendar_data.property?.time_constraints?.check_out_till), isStandard: true };
    }
    getArrivalTime(event) {
        const arrival = this.getStayRoom(event)?.arrival_time;
        const requested = arrival?.code && arrival.code !== UNSET_ARRIVAL_TIME_CODE ? arrival.description : null;
        return requested
            ? { time: this.formatClockTime(requested), isStandard: false }
            : { time: this.formatClockTime(calendarData.calendar_data.property?.time_constraints?.check_in_from), isStandard: true };
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
        return (index.h(index.Fragment, null, index.h("div", { class: "dub-booking__movements", id: movementsId }, isTurnover && (index.h("span", { class: "dub-movement dub-movement--turnover" }, index.h("wa-icon", { name: "rotate", class: "dub-movement__icon" }), t.t('Lcz_Turnover', { fallback: 'Turnover' }))), movements.map(movement => (index.h("span", { class: `dub-movement dub-movement--${movement.kind}`, key: `${movementsId}-${movement.kind}` }, index.h("wa-icon", { name: MOVEMENT_ICON[movement.kind], class: "dub-movement__icon" }), getMovementLabel(movement.kind), movement.time && index.h("span", { class: "dub-movement__time" }, movement.time))))), index.h("wa-tooltip", { for: movementsId, placement: "top" }, index.h("span", { class: "dub-movement-tip" }, movements.map(movement => (index.h("span", { class: "dub-movement-tip__line", key: `${movementsId}-tip-${movement.kind}` }, index.h("span", { class: "dub-movement-tip__label" }, getMovementLabel(movement.kind)), index.h("span", null, "#", number.formatBookingNumber(movement.bookingNumber), movement.guestName ? ` \u00b7 ${movement.guestName}` : ''), movement.time && (index.h("span", { class: "dub-movement-tip__time" }, movement.time, movement.isStandard ? ` ${t.t('Lcz_StandardSuffix', { fallback: '(standard)' })}` : '')))))))));
    }
    renderBooking(booking) {
        const guestName = this.getGuestName(booking);
        const guestNameId = `dub-guest-${booking.bh_id}`;
        const status = this.getStatus(booking);
        const movements = this.getStayMovements(booking);
        return (index.h("button", { type: "button", class: "dub-booking", key: `booking-${booking.bh_id}`, onClick: () => this.openBookingDetails(booking) }, index.h("div", { class: "dub-booking__main" }, index.h("ir-unit-tag", { unit: this.getUnitName(booking.unit_id) }), index.h("span", { class: "dub-booking__time" }, this.formatTime(booking.from_time), " \u2013 ", this.formatTime(booking.to_time)), index.h("span", { class: "dub-booking__price" }, this.getPrice(booking.gross_amount))), index.h("div", { class: "dub-booking__meta" }, index.h("span", { class: "dub-booking__number" }, "#", booking.book_nbr), guestName && (index.h("span", { class: "dub-booking__guest", id: guestNameId }, guestName)), guestName && guestName.length > GUEST_NAME_CROP_SIZE && (index.h("wa-tooltip", { for: guestNameId, placement: "top" }, guestName)), index.h("span", { class: `dub-status dub-status--${status}` }, getStatusLabel(status))), movements.length > 0 && this.renderStayMovements(booking, movements)));
    }
    renderCategory(roomTypeId, bookings) {
        return (index.h("div", { class: "dub-category", key: `category-${roomTypeId}` }, index.h("h5", { class: "dub-category__title" }, this.getRoomTypeName(roomTypeId)), index.h("div", { class: "dub-category__list" }, bookings.sort((a, b) => a.from_time.localeCompare(b.from_time)).map(booking => this.renderBooking(booking)))));
    }
    render() {
        const bookings = this.bookingsForSelectedDate;
        const grouped = this.groupByRoomType(bookings);
        const hasDates = this.orderedDates.length > 0;
        const isEmpty = bookings.length === 0;
        return (index.h(index.Host, { key: 'dc81cd10be9041a3a71ca122a41ed65abf87cdac' }, index.h("div", { key: '965d52e29ec88b7ac9fb64464c74123638de3389', class: "dub-panel" }, index.h("div", { key: '4fabfdcf217b8f69535f1f4e115d5d1e894dc5fd', class: "dub-panel__head" }, index.h("header", { key: 'fc6fecd8dd58366f3c239ef7300cc40c38dbd932', class: "dub-panel__header" }, index.h("h2", { key: 'f8e19a2c4825da43358016dc19a530ec51f6cfab', class: "dub-panel__title", id: "day-use-bookings-title" }, t.t('Lcz_DayUseBookings', { fallback: 'Day Use Bookings' })), index.h("ir-custom-button", { key: 'a747f3681f9367ceebc23cf1bc45c089fd392b37', size: "m", appearance: "plain", variant: "neutral", onClickHandler: () => this.handleOptionEvent('closeSideMenu') }, index.h("wa-icon", { key: '9299c05001ba14929d38e211e8ff73916a11d463', name: "xmark", variant: "solid", label: t.t('Lcz_Close', { fallback: 'Close' }), "aria-label": t.t('Lcz_Close', { fallback: 'Close' }), role: "img" }))), hasDates && (index.h("div", { key: 'c6ab430fe4088c88ef8aefcdd5a5e09b01f4e7da', class: "dub-panel__toolbar" }, index.h("wa-select", { key: '29eb926fb5c36d7f78e3c63756e42752df016dae', size: "s", "aria-label": t.t('Lcz_DateLabel', { fallback: 'Date' }), value: this.selectedDate, defaultValue: this.selectedDate, onchange: evt => (this.selectedDate = evt.target.value) }, this.orderedDates.map(date => (index.h("wa-option", { value: date }, irDate.formatDate(date, 'ddd, DD MMM YYYY')))))))), index.h("div", { key: '2dae2930d0b083738788bedb81209833f2e9994c', class: "dub-panel__body" }, isEmpty ? (index.h("ir-empty-state", { message: t.t('Lcz_NoDayUseBookingsForDate', { fallback: 'No day-use bookings for this date.' }) })) : (Array.from(grouped.entries()).map(([roomTypeId, roomTypeBookings]) => this.renderCategory(roomTypeId, roomTypeBookings)))))));
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
        index.registerInstance(this, hostRef);
        this.irAfterClose = index.createEvent(this, "irAfterClose");
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
    houseKeepingService = new index$2.HouseKeepingService();
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
            this.error = e instanceof Error ? e.message : t.t('Lcz_FailedToResolveGeneric', { fallback: 'Failed to resolve. Please try again.' });
        }
        finally {
            this.isResolving = false;
        }
    };
    formatReportedAt(issue) {
        const date = irDate.formatDate(issue.date, 'MMM D, YYYY');
        if (issue.hour == null || issue.minute == null) {
            return date;
        }
        const pad = { minimumIntegerDigits: 2, useGrouping: false };
        const time = `${number.formatNumber(issue.hour, pad)}:${number.formatNumber(issue.minute, pad)}`;
        return `${date} · ${time}`;
    }
    renderIssue(issue) {
        const selectable = this.isMultiple;
        const isSelected = this.selectedIds.has(issue.id);
        const description = issue.description?.trim();
        return (index.h("div", { key: issue.id, class: { 'issue': true, 'issue--selectable': selectable, 'issue--selected': isSelected }, role: selectable ? 'checkbox' : undefined, "aria-checked": selectable ? String(isSelected) : undefined, tabindex: selectable ? 0 : undefined, onClick: selectable ? () => this.toggleIssue(issue.id) : undefined, onKeyDown: selectable ? (event) => this.handleRowKeyDown(event, issue.id) : undefined }, selectable && index.h("wa-checkbox", { class: "issue__check", checked: isSelected, tabIndex: -1 }), index.h("div", { class: "issue__body" }, index.h("p", { class: { 'issue__description': true, 'issue__description--empty': !description } }, description || t.t('Lcz_NoDescriptionProvided', { fallback: 'No description provided.' })), index.h("p", { class: "issue__meta" }, index.h("span", { class: "issue__reporter" }, issue.housekeeper_name || t.t('Lcz_UnknownHousekeeper', { fallback: 'Unknown housekeeper' })), index.h("span", { class: "issue__sep", "aria-hidden": "true" }, "\u00B7"), index.h("span", { class: "issue__date" }, this.formatReportedAt(issue))))));
    }
    renderBody() {
        if (!this.open) {
            return null;
        }
        if (!this.issues?.length) {
            return index.h("ir-empty-state", { message: t.t('Lcz_NoIssuesReportedForUnit', { fallback: 'No issues reported for this unit.' }) });
        }
        return (index.h("div", { class: "issues" }, this.isMultiple && (index.h("div", { class: "issues__toolbar" }, index.h("span", { class: "issues__count" }, t.t('Lcz_IssuesReportedCount', { params: [number.formatCount(this.issues.length)], fallback: `${this.issues.length} issues reported` })), index.h("button", { type: "button", class: "issues__select-all", onClick: this.toggleSelectAll }, this.allSelected ? t.t('Lcz_Clear', { fallback: 'Clear' }) : t.t('Lcz_SelectAll', { fallback: 'Select all' })))), index.h("div", { class: "issues__list", role: this.isMultiple ? 'group' : undefined, "aria-label": this.isMultiple ? t.t('Lcz_ReportedIssues', { fallback: 'Reported Issues' }) : undefined }, this.issues.map(issue => this.renderIssue(issue))), this.error && (index.h("div", { class: "issues__error", role: "alert" }, index.h("wa-callout", { variant: "danger" }, index.h("wa-icon", { slot: "icon", name: "circle-exclamation" }), this.error)))));
    }
    render() {
        const multiple = (this.issues?.length ?? 0) > 1;
        const selectedCount = this.selectedIds.size;
        const unitSuffix = this.unitName ? ` · ${this.unitName}` : '';
        return (index.h("ir-dialog", { key: 'cc91dd5c9d0feb74f19998ef3ce8fbb46140884c', ref: el => (this.dialogRef = el), label: `${multiple ? t.t('Lcz_ReportedIssues', { fallback: 'Reported Issues' }) : t.t('Lcz_ReportedIssue', { fallback: 'Reported Issue' })}${unitSuffix}`, onIrDialogAfterHide: () => this.irAfterClose.emit() }, this.renderBody(), index.h("div", { key: '8fac91f12cc167322cfe32d7801d7db8072f381b', slot: "footer", class: "footer" }, multiple && selectedCount > 0 && index.h("span", { key: 'cfc78a6d54ad2f2ceaaef8c1a5d871d65336a25b', class: "footer__hint" }, t.t('Lcz_SelectedItemsCount', { params: [selectedCount], fallback: `${selectedCount} selected` })), index.h("ir-custom-button", { key: '0f15d0559abac5ec2e1230c1e7d9b5664b8c3e94', variant: "neutral", size: "m", appearance: "filled", onClickHandler: () => this.dialogRef?.closeModal(), disabled: this.isResolving }, t.t('Lcz_Close', { fallback: 'Close' })), index.h("ir-custom-button", { key: '0af634e2f217263a75df386c6e8ad935de0b2291', variant: "brand", size: "m", appearance: "accent", onClickHandler: this.handleResolve, disabled: selectedCount === 0, loading: this.isResolving }, multiple
            ? selectedCount
                ? t.t('Lcz_ResolveCount', { params: [selectedCount], fallback: `Resolve ${selectedCount}` })
                : t.t('Lcz_Resolve', { fallback: 'Resolve' })
            : t.t('Lcz_MarkAsResolved', { fallback: 'Mark as Resolved' })))));
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
        index.registerInstance(this, hostRef);
        this.irAfterClose = index.createEvent(this, "irAfterClose");
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
    housekeepingService = new index$2.HouseKeepingService();
    getStatusLabel() {
        switch (this.selectedRoom?.hk_status) {
            case '002':
                return t.t('Lcz_Dirty', { fallback: 'dirty' });
            case '004':
                return t.t('Lcz_Inspected', { fallback: 'inspected' });
            default:
                return t.t('Lcz_CleanLowercase', { fallback: 'clean' });
        }
    }
    middleButtonLabel() {
        return this.selectedRoom?.hk_status === '002' ? t.t('Lcz_Clean', { fallback: 'Clean' }) : t.t('Lcz_DirtyLabel', { fallback: 'Dirty' });
    }
    rightButtonLabel() {
        return this.selectedRoom?.hk_status !== '004' ? t.t('Lcz_CleanAndInspect', { fallback: 'Clean & Inspect' }) : t.t('Lcz_Clean', { fallback: 'Clean' });
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
                            description: t.t('Lcz_Cleaned', { fallback: 'Cleaned' }),
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
        return (index.h("ir-dialog", { key: '9be11d3135a9c9b7a9922113077758a85f728986', ref: el => (this.dialogRef = el), open: this.open, label: t.t('Lcz_HousekeepingUpdate', { fallback: 'Housekeeping Update' }), onIrDialogAfterHide: () => this.irAfterClose.emit() }, index.h("p", { key: '210380aed8cd0c93fd0b46f6a52167792c3c1762', style: { margin: '0' } }, this.selectedRoom?.name, " ", t.t('Lcz_UnitCurrentlyMarkedAs', { fallback: 'is currently marked as' }), " ", this.getStatusLabel(), "."), index.h("div", { key: '5087d87359ce1c4c75484a6c240b36d443f8a2fe', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '0abddacce70b063f5c53746e23c27c4714d138ef', "data-dialog": "close", size: "m", variant: "neutral", appearance: "filled" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '1893ecb9e295bb2fa14cbc4be173391cae071712', value: "hk-toggle-clean-dirty", size: "m", variant: "brand", appearance: "outlined", loading: this.isLoading === 'hk-toggle-clean-dirty', onClickHandler: e => this.updateHousekeeping(e, this.selectedRoom.hk_status === '002' ? '001' : '002') }, this.middleButtonLabel()), index.h("ir-custom-button", { key: '8f653f3ac8ae2fe8653298124431d39b2fa25ce2', value: "hk-clean-inspect", size: "m", variant: "brand", appearance: "accent", loading: this.isLoading === 'hk-clean-inspect', onClickHandler: e => this.updateHousekeeping(e, this.selectedRoom.hk_status === '004' ? '001' : '004') }, this.rightButtonLabel()))));
    }
};
IglHousekeepingDialog.style = iglHousekeepingDialogCss();

const iglLegendCss = () => `.sc-igl-legend-h{--spacing:var(--wa-space-l);display:block;width:max-content;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-s);background-color:var(--wa-color-surface-default);border-inline-end:2px solid var(--wa-color-surface-border);text-align:start}.legend_skew.pending.sc-igl-legend{border-width:1px;border-style:dashed;border-color:var(--wa-color-success-fill-loud);background-color:var(--wa-color-surface-default) !important}.legend_skew.in-house.sc-igl-legend{background-color:var(--wa-color-brand-fill-quiet) !important;color:var(--wa-color-brand-on-quiet) !important;width:30px;transform:skew(0);border-radius:0;vertical-align:middle;font-size:12px;text-align:center}.legendRow.sc-igl-legend{position:relative;vertical-align:middle;margin-bottom:0.3rem}.legendRow.sc-igl-legend div.sc-igl-legend{display:inline-block;vertical-align:middle}.legend_skew.sc-igl-legend,.legend_skew-bordered.sc-igl-legend,.legend_skewsplit.sc-igl-legend{transform:skew(-22deg);width:15px;height:16px;border-radius:4px;background-color:var(--ir-skew-background)}.legend_skew.striped.vertical.sc-igl-legend{--stripe-period:17px;--stripe-angle:360deg}.legend_skew.striped.sc-igl-legend{--stripe-period:6px}.legend_skew.split.sc-igl-legend{border-inline-end:4px solid var(--wa-color-text-normal, black)}.legend_skew-bordered.sc-igl-legend{border:1px solid var(--wa-color-text-normal, black)}[dir='rtl'].sc-igl-legend-h .legend_skew.sc-igl-legend:not(.in-house),[dir='rtl'].sc-igl-legend-h .legend_skew-bordered.sc-igl-legend,[dir='rtl'].sc-igl-legend-h .legend_skewsplit.sc-igl-legend{transform:skew(22deg)}.legend_dirty-unit.sc-igl-legend{background-color:white !important;border:1px solid #e0e0e0;height:12px;width:20px;position:relative}.fd-legend__section-title.sc-igl-legend{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;margin:0;padding:0;margin-bottom:1rem;font-size:var(--wa-font-size-m);color:var(--wa-color-text-normal, black)}.legend_dirty-unit.sc-igl-legend::after{content:'';position:absolute;bottom:0;height:100%;inset-inline-start:30%;inset-inline-end:30%;background-color:#d4d0be !important}.legend_circle.sc-igl-legend{border-radius:100%;width:10px;height:10px;margin-block:3px;margin-inline:2px 3px}.legend_skewsplit.sc-igl-legend{border-inline-end:2px solid var(--wa-color-text-normal, black)}.legendCalendar.sc-igl-legend .legendRow.sc-igl-legend{margin-bottom:0}.legendCalendar.sc-igl-legend .legendRow.sc-igl-legend:first-child .legendCal.sc-igl-legend{background-color:var(--wa-color-neutral-fill-normal);color:var(--wa-color-neutral-on-normal)}.legendCalendar.sc-igl-legend .legendRow.sc-igl-legend div.sc-igl-legend{display:inline-block;vertical-align:middle;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.total-availability.sc-igl-legend{font-size:1em !important;font-weight:700}.legendTextarea.sc-igl-legend{border:0;margin:0;padding:0}.legendCalendar.sc-igl-legend .legendCal.sc-igl-legend{width:80px;height:25px;text-align:center;display:inline-grid !important;align-content:center;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendCalendar.sc-igl-legend .legendCal.sc-igl-legend .badge.sc-igl-legend{margin-top:0.2rem;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendCalendar.sc-igl-legend .legendCal.legendCal-h2.sc-igl-legend{height:40px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.br-t.sc-igl-legend{border-top:1px solid var(--wa-color-surface-border)}.br-s.sc-igl-legend{border-inline:1px solid var(--wa-color-surface-border)}.br-bt.sc-igl-legend{border-bottom:1px solid var(--wa-color-surface-border)}.hyphenLegend.sc-igl-legend{-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.hyphenLegend.sc-igl-legend::before{width:12px;height:0.5px;content:' ';background-color:var(--wa-color-text-normal, black);vertical-align:middle;display:inline-block;margin-inline:5px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.fd-legend__title.sc-igl-legend{align-self:center;flex:1 1 auto;font-style:inherit;font-variant:inherit;font-stretch:inherit;font-family:inherit;font-optical-sizing:inherit;font-size-adjust:inherit;font-kerning:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-language-override:inherit;font-size:var(--wa-font-size-l);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);margin:0px;padding:0;color:var(--wa-color-text-normal, black)}.fd-legend__header.sc-igl-legend{display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;background-color:var(--wa-color-surface-default);z-index:1;padding-inline-start:var(--spacing);padding-inline-end:calc(var(--spacing) - var(--wa-form-control-padding-block));padding-block-start:calc(var(--spacing) - var(--wa-form-control-padding-block));padding-block-end:calc(var(--spacing) / 2);border-bottom:1px solid var(--wa-color-surface-border);box-sizing:border-box;background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default))}.fd-legend__shape.sc-igl-legend{display:flex;align-items:center;justify-content:center}.fd-legend__row.sc-igl-legend{display:grid;grid-template-columns:40px 1fr;gap:1rem;margin-bottom:0.5rem}.fd-legend__row-title.sc-igl-legend{padding:0;margin:0;width:fit-content;display:flex;align-items:center;gap:0.5rem}.legendContainer.sc-igl-legend{padding:0 !important}.fd-legend__body.sc-igl-legend{padding:var(--spacing)}.headerCell.sc-igl-legend{width:70px;display:flex;align-items:center;justify-content:center}.dayTitle.sc-igl-legend{font-size:0.8em;font-weight:600;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.dayCapacityPercent.sc-igl-legend{font-size:0.75em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legend_rectangle.sc-igl-legend{height:15px;width:22px}`;

const IglLegend = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.optionEvent = index.createEvent(this, "optionEvent");
    }
    legendData;
    bookingColors = [];
    saveState = 'idle';
    saveError;
    loadingIndex = [];
    optionEvent;
    propertyService = new index$3.PropertyService();
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
        return (index.h(index.Host, { key: '78d3e83c90ca6cd52c63043b61f38594fb493622', class: "legendContainer", dir: direction.isRtlDirection(localeScope.locales.direction) ? 'rtl' : 'ltr' }, index.h("div", { key: 'd6e3183954164e4ec8bc149823e45e80c335d393', class: "fd-legend__header" }, index.h("h2", { key: '3d1e41b21ceeb53ec90b2a0024bfff13a2ae8f62', class: "fd-legend__title", id: "legend-title" }, t.t('Lcz_Legend')), index.h("ir-custom-button", { key: '0fac686d1138b7624b950289fcdf828e5a227f1e', size: "m", onClickHandler: () => this.handleOptionEvent('closeSideMenu'), appearance: "plain", variant: "neutral" }, index.h("wa-icon", { key: 'a9e81216a79148a022927f6527cf531a96cc9aa1', name: "xmark", variant: "solid", label: t.t('Lcz_Close', { fallback: 'Close' }), "aria-label": t.t('Lcz_Close', { fallback: 'Close' }), role: "img" }))), index.h("section", { key: '88962d4924bc93dae34d442faf9a2aec617ab337', class: "fd-legend__body" }, index.h("div", { key: '887644048ccab4e587a037f97aa26ac363f7b78c' }, legend.map(legendInfo => {
            const stripeColor = calendarData.calendar_data.colorsForegrounds[legendInfo?.color];
            return (index.h("div", { class: "fd-legend__row" }, index.h("div", { class: 'fd-legend__shape' }, legendInfo.design === 'broom' ? (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, index.h("path", { fill: "var(--wa-color-text-normal,black)", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (index.h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, index.h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (index.h("div", { class: `legend_${legendInfo.design}  ${legendInfo.id === '3' ? 'pending' : ''} ${legendInfo.id === '1' ? 'in-house' : ''} ${['1', '7'].includes(legendInfo.id.toString()) ? `striped ${legendInfo.id.toString() === '1' ? 'vertical' : ''}` : ''}`, style: { '--ir-skew-background': legendInfo.color, '--ir-event-bg-stripe-color': stripeColor?.stripe, 'backgroundColor': legendInfo.color } }, legendInfo.id === '1' && '5'))), index.h("p", { class: "fd-legend__row-title" }, legendInfo.name)));
        }), index.h("div", { key: '4c715945052856842d37d96d2b556ca3f37c318d', class: "fd-legend__row" }, index.h("div", { key: '73f59998270f7765599c3dfb10eca80015bb7745', class: 'fd-legend__shape' }, index.h("wa-icon", { key: 'dbb31e4aeac7aa55e93e61a4945c07f3323e170b', name: "triangle-exclamation", style: { color: 'var(--wa-color-danger-fill-loud)', fontSize: '1rem' } })), index.h("p", { key: '5e03b38fb3c3f96d27696048043de92bdea619a4', class: "fd-legend__row-title" }, t.t('Lcz_HousekeepingReportedIssue', { fallback: 'Housekeeping reported issue' }))), index.h("div", { key: '9aec9e8b0a67d73a4696c255b7b2ea8f3fece37d', class: "fd-legend__row" }, index.h("div", { key: 'a674e214b5790862a82fc0ca10b248e78a0aa129', class: 'fd-legend__shape' }, index.h("div", { key: '087392d6e2fc686324b50235c0dad35cb1e1681f', class: 'legend_rectangle', style: { background: 'var(--wa-color-success-fill-loud)', opacity: '0.6' } })), index.h("p", { key: 'abf024d49f819c15467ec421d2bac2b96978d1a5', class: "fd-legend__row-title --day-use" }, index.h("span", { key: '1538b3545b83447f3bfe0a023f246a4c01c77e94' }, t.t('Lcz_DayUse', { fallback: 'Day use' })), index.h("div", { key: 'a909ef0f8e32979d9eac3d4ddc31209d60df85b0', class: 'legend_rectangle', style: { background: 'var(--wa-color-brand-fill-loud)', opacity: '0.6' } }), index.h("div", { key: 'c852ade10fdf2be58805a2a4257869d0355c72a7', class: 'legend_rectangle', style: { background: 'rgb(160, 160, 160)', opacity: '0.6' } }))), index.h("wa-divider", { key: '972c2cdd38e3705caa95a64f44f5ad4bf4a8c184' }), index.h("h5", { key: '7a3a88cd4be22373d31578bb863ff51d03cc8656', class: "fd-legend__section-title" }, t.t('Lcz_UseCustomColors', { fallback: 'Use custom colors' })), calendarData.calendar_data.property.calendar_extra?.booking_colors.map((legendInfo, index$1) => {
            const previewClass = `legend_${legendInfo.design}`;
            return (index.h("div", { key: `legend_${index$1}`, class: "fd-legend__row" }, index.h("div", { class: 'fd-legend__shape' }, index.h("div", { class: previewClass, style: { backgroundColor: legendInfo.color } })), index.h("wa-input", { autocomplete: "off", class: "legendTextarea", value: legendInfo.name, size: "s", placeholder: t.t('Lcz_ReasonForThisColor', { fallback: 'Reason for this color' }), onchange: event => {
                    this.handleNameInput(index$1, event.target.value);
                    this.handleBlur(index$1);
                } }, this.loadingIndex.includes(index$1) && (this.saveState === 'saving' || this.saveState === 'saved') ? (index.h("ir-success-loader", { slot: "end", onLoaderComplete: () => this.handleLoaderComplete(index$1) })) : null)));
        })), index.h("wa-divider", { key: 'e5390e03beee50207f28cb5349f94822ec21a5fc' }), index.h("div", { key: '6401dc8669ebba031b4b768a1a1876839411075a' }, index.h("div", { key: '43bf00add11bc50e31a01bc7c6f04cf96f8fb09a', class: "legendCalendar" }, index.h("div", { key: '8b6fef55769749813e4168f77db3a4b4e139161a', class: "legendRow" }, index.h("div", { key: '8abb2321fa4ae8cfd251b84f151136d92cf28765', class: "legendCal br-t br-s br-bt" }, index.h("strong", { key: 'ad44e9d85072cfd2b45f74e63e616fc2ba471a9e' }, t.t('Lcz_ExampleMonthYearLabel', { fallback: 'MAR 2022' }))), index.h("div", { key: '8c95f245f24fc77ee0fedaa49bad67484b84f749', class: "hyphenLegend" }, t.t('Lcz_MonthAndYear'))), index.h("div", { key: '0eb0120a994ea20261da80585889b5a04c7026b2', class: "legendRow" }, index.h("div", { key: '4fac99f6164e6c3f813020ab40eeecbdaa220996', class: "legendCal headerCell br-s" }, index.h("wa-badge", { key: '0a2471ca692a0a2f03fed0cf88dd65caabc41ddf', pill: true }, "3")), index.h("div", { key: 'a0254fe0bbdba3145eaaab73b3691312e21c95c2', class: "hyphenLegend" }, index.h("div", { key: 'd0e89a8ef725c1a1adbbc8bad9ace11a2de0639c' }, t.t('Lcz_UnassignedUnits')))), index.h("div", { key: '10f02849c57f4e05a3e0cb132641e4bf68200dfd', class: "legendRow" }, index.h("div", { key: '7f92f39e59a628d4136021fe5a20a34cffb75dbf', class: "legendCal dayTitle br-s" }, t.t('Lcz_ExampleDayLabel', { fallback: 'Fri 18' })), index.h("div", { key: '6697488e7a80a88eb9719c71bfffb6d00dd9f7b4', class: "hyphenLegend" }, t.t('Lcz_DateLabel', { fallback: 'Date' }))), index.h("div", { key: '05da8d5916abe115b8b96848d151e4e8de62c1bb', class: "legendRow" }, index.h("div", { key: '131aadeab6efeb8396947ce3117c2651a6b3ab8b', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), index.h("div", { key: 'd7f2143fd0483743739f489cf074a63142bab9b9', class: "hyphenLegend" }, t.t('Lcz_Occupancy'))), index.h("div", { key: 'd6bb859d88c84c73eced77eb46721aa30e10ba3b', class: "legendRow" }, index.h("div", { key: '2ff3a3290d6926242e43bfa941fffb3b157377e4', class: "legendCal br-s br-bt total-availability" }, "20"), index.h("div", { key: '83f82087f09cdce8a2591631c2081bc0d90a1581', class: "hyphenLegend" }, t.t('Lcz_TotalAvailability'))))))));
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
        index.registerInstance(this, hostRef);
        this.closeRoomNightsDialog = index.createEvent(this, "closeRoomNightsDialog");
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
        return t.t('Lcz_AddingRoomNights', { fallback: 'Adding Room Nights' });
    }
    handleDrawerHide = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.hasInventory = false;
        this.closeRoomNightsDialog.emit({ type: 'cancel', pool: this.pool });
    };
    render() {
        return (index.h("ir-drawer", { key: '9fa7fd970aa51ac83d3f8f3453feb20a9affc708', open: this.open, label: this.label, onDrawerHide: this.handleDrawerHide }, this.open && (index.h("igl-rate-extender-form", { key: '57ee84f1d0076e416b816274db16a26bd8e22922', bookingNumber: this.bookingNumber, propertyId: this.propertyId, language: this.language, identifier: this.identifier, toDate: this.toDate, fromDate: this.fromDate, pool: this.pool, defaultDates: this.defaultDates, onLoadingChanged: e => {
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
            } })), index.h("div", { key: 'df06147954310a2f218a3e53a03eb3151178e9d0', slot: "footer", class: 'ir__drawer-footer' }, index.h("ir-custom-button", { key: '227d03b364504ae857dffef2568d2f35fab74412', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '898c74d7956c20b0ad6bcd6c618dc0cc93acef64', loading: this.isLoading, disabled: !this.hasInventory, size: "m", type: "submit", form: "rate-extender-form", appearance: "accent", variant: "brand" }, t.t('Lcz_Confirm', { fallback: 'Confirm' })))));
    }
};
IglRateExtenderDrawer.style = iglRateExtenderDrawerCss();

const iglRateExtenderFormCss = () => `.sc-igl-rate-extender-form-h{display:block;height:100%;padding-bottom:1rem}.rate-form__body.sc-igl-rate-extender-form{text-align:start;padding-inline:0.25rem;padding-top:0;display:grid}.rate-extender-form.sc-igl-rate-extender-form{display:grid;gap:1rem}.rate-form__booking-number.sc-igl-rate-extender-form{font-size:var(--wa-font-size-m);color:var(--wa-color-text-quiet);margin:0}.rate-form__checking-availability.sc-igl-rate-extender-form{margin-top:0.5rem;font-size:0.875rem;color:var(--wa-color-text-quiet)}.rate-form__date-range.sc-igl-rate-extender-form{font-size:var(--wa-font-size-m);font-weight:600;line-height:1.3;color:#111827;margin:0;margin-top:0.5rem}.rate-form__rate-plan.sc-igl-rate-extender-form{font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet);margin:0;margin-top:0.375rem}.rate-form__availability-callout.sc-igl-rate-extender-form{margin-top:1rem}.rate-form__custom-text.sc-igl-rate-extender-form{font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet);line-height:1.4;margin:0;margin-top:0.625rem}.rate-form__tax-callout.sc-igl-rate-extender-form{margin-top:1.25rem}.rate-form__dates.sc-igl-rate-extender-form{margin:0;margin-top:1.5rem;display:grid;gap:1rem}.rate-form__date-row.sc-igl-rate-extender-form{display:flex;align-items:center;margin:0;margin-top:0.25rem}.rate-form__date-label.sc-igl-rate-extender-form{flex:0 0 16.666%;margin:0;padding:0;font-size:0.8125rem;color:#6b7280}.rate-form__input-wrapper.sc-igl-rate-extender-form{flex:0 0 25%;margin-inline-start:0.25rem;position:relative;margin-top:0;margin-bottom:0;padding:0}.rate-form__readonly-value.sc-igl-rate-extender-form{flex:0 0 75%;margin-inline-start:0.25rem;margin-top:0;margin-bottom:0;padding:0}.rate-extender-input.sc-igl-rate-extender-form{display:grid;grid-template-columns:auto 1fr;gap:var(--wa-space-l);align-items:center}.rate-extender-input.sc-igl-rate-extender-form::part(label),.rate-extender-input.sc-igl-rate-extender-form [part~="label"]{width:80px;margin:0}.rate-extender-input.sc-igl-rate-extender-form:disabled::part(label),.rate-extender-input.sc-igl-rate-extender-form:disabled [part~="label"]{opacity:0.5}.rate-extender-input.sc-igl-rate-extender-form::part(wa-input),.rate-extender-input.sc-igl-rate-extender-form [part~="wa-input"]{grid-column:1 / -1;grid-row-end:span 2;display:grid;grid-template-columns:subgrid;gap:0 var(--wa-space-s);align-items:center}.rate-extender-arrow.sc-igl-rate-extender-form{display:block;margin-inline-start:calc(40px + var(--wa-space-l));width:calc(100% - 40px - var(--wa-space-l));text-align:center}@media (min-width: 640px){.rate-extender-input.sc-igl-rate-extender-form::part(base){max-width:180px}.rate-extender-arrow.sc-igl-rate-extender-form{width:180px}}.ir-flip-rtl.sc-igl-rate-extender-form:dir(rtl){scale:-1 1}`;

const IglRateExtenderForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeRoomNightsDialog = index.createEvent(this, "closeRoomNightsDialog");
        this.loadingChanged = index.createEvent(this, "loadingChanged");
        this.availabilityChanged = index.createEvent(this, "availabilityChanged");
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
    /** `YYYY-MM-DD` */
    dates = { from_date: '', to_date: '' };
    closeRoomNightsDialog;
    loadingChanged;
    /** Emits whether inventory is available for the additional nights (false when there is none). */
    availabilityChanged;
    bookingService = new booking_service.BookingService();
    inputRefs = [];
    shouldScrollToFirstEnabled = false;
    componentWillLoad() {
        this.dates = { from_date: this.fromDate, to_date: this.toDate };
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
            this.dates = { from_date: from_date < this.fromDate ? from_date : this.fromDate, to_date: this.toDate };
            this.booking = await this.bookingService.getExposedBooking({ booking_nbr: this.bookingNumber, language: locale_controller.LocaleController.language });
            if (this.booking) {
                const filteredRooms = this.booking.rooms.filter(room => room.identifier === this.identifier);
                this.selectedRoom = filteredRooms[0];
                const lastDay = this.selectedRoom?.days[this.selectedRoom.days.length - 1];
                if (!moment.hooks(this.selectedRoom.to_date, 'YYYY-MM-DD').isBefore(moment.hooks(this.toDate, 'YYYY-MM-DD'))) {
                    const variation = await this.fetchBookingAvailability(this.fromDate, this.selectedRoom.days[0].date, this.selectedRoom.rateplan.id);
                    const newDatesArr = utils.getDaysArray(this.selectedRoom.days[0].date, this.fromDate);
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
                    const variation = await this.fetchBookingAvailability(this.selectedRoom.to_date, moment.hooks(this.toDate, 'YYYY-MM-DD').format('YYYY-MM-DD'), this.selectedRoom.rateplan.id);
                    const newDatesArr = utils.getDaysArray(lastDay.date, this.toDate);
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
                language: locale_controller.LocaleController.language,
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
                to_date: this.dates.to_date,
                from_date: this.dates.from_date,
            };
            const body = {
                assign_units: true,
                check_in: true,
                is_pms: true,
                is_direct: true,
                pickup_info: this.booking.pickup_info,
                extra_services: this.booking.extra_services,
                agent: this.booking.agent,
                target_room_identifier: this.identifier,
                booking: {
                    booking_nbr: this.bookingNumber,
                    from_date: this.dates.from_date,
                    to_date: this.dates.to_date,
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
            return (index.h("div", { class: 'drawer__loader-container' }, index.h("ir-spinner", null)));
        }
        const currency_symbol = this.booking.currency.symbol;
        return (index.h("form", { id: "rate-extender-form", class: "rate-extender-form", onSubmit: e => {
                e.preventDefault();
                this.handleRoomConfirmation();
            } }, index.h("section", { class: "rate-form__body" }, index.h("p", { class: "rate-form__booking-number" }, `${t.t('Lcz_Booking', { fallback: 'Booking' })}#`, " ", number.formatBookingNumber(this.bookingNumber)), index.h("p", { class: "rate-form__rate-plan" }, this.selectedRoom.roomtype.name, " ", `${this.selectedRoom?.rateplan?.short_name}`, " ", this.selectedRoom?.rateplan?.custom_text, ' ', index.h("ir-unit-tag", { unit: (this.selectedRoom?.unit).name }), this.selectedRoom?.rateplan?.is_non_refundable && index.h("span", { class: 'irfontgreen' }, t.t('Lcz_NonRefundable', { fallback: 'Non-refundable' }))), this.inventory !== 0 && this.inventory !== null && booking_service.booking_store.roomTypes?.length > 0 && (index.h("wa-callout", { size: "s", variant: "neutral", appearance: "filled", class: "rate-form__tax-callout booking-editor-header__tax_statement" }, calendarData.calendar_data.tax_statement))), index.h("p", { class: "rate-form__date-range" }, irDate.formatDate(this.dates.from_date, 'ddd, DD MMM YYYY'), " ", index.h("wa-icon", { class: "ir-flip-rtl", name: "arrow-right" }), " ", irDate.formatDate(this.dates.to_date, 'ddd, DD MMM YYYY')), (this.inventory === 0 || this.inventory === null) && (index.h("wa-callout", { size: "s", variant: "danger", class: "rate-form__availability-callout" }, index.h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), t.t('Lcz_NoAvailabilityForAdditionalNights'))), this.rates?.map((day, index$1) => {
            return [
                index.h("ir-validator", { key: day.date, value: day.amount, schema: types.numberType().min(0) }, index.h("ir-input", { ref: el => (this.inputRefs[index$1] = el), disabled: this.disabled(index$1), class: "rate-extender-input", "aria-describedby": "rate cost", "aria-label": "rate", "onText-change": e => this.handleInput(e.detail, index$1), value: day.amount.toString(), defaultValue: day.amount.toString(), mask: 'price', label: irDate.formatDate(day.date, 'ddd, MMM D') }, index.h("span", { slot: "start" }, currency_symbol))),
                this.showArrow(index$1) && index.h("wa-icon", { class: "rate-extender-arrow", name: this.isEndDateBeforeFromDate ? 'arrow-up' : 'arrow-down' }),
            ];
        }), index.h("div", null)));
    }
};
IglRateExtenderForm.style = iglRateExtenderFormCss();

const iglReallocationDialogCss = () => `.sc-igl-reallocation-dialog-h{display:block;text-align:start}.dialog-body.sc-igl-reallocation-dialog{display:grid;gap:1.5rem}.dialog-body__description.sc-igl-reallocation-dialog{margin:0}.dialog-footer.sc-igl-reallocation-dialog{display:flex;justify-content:flex-end;gap:0.75rem}.ir-text-start.sc-igl-reallocation-dialog{text-align:start}`;

const IglReallocationDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dialogClose = index.createEvent(this, "dialogClose");
        this.revertBooking = index.createEvent(this, "revertBooking");
        this.resetModalState = index.createEvent(this, "resetModalState");
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
        return (index.h("ir-dialog", { key: '667766988b685adeae9182fc3f999cae870c068b', label: t.t('Lcz_Alert', { fallback: 'Alert' }), ref: el => (this.dialogEl = el), onIrDialogHide: this.handleDialogVisibilityChange }, this.data && (index.h(index.Fragment, { key: 'ebfd42c064031ee6263f1bd9ed7bca6befd52f9e' }, index.h("div", { key: '04b5eb0c6f9ea41eac6c3a1e137d0da8720fd3b7', class: "dialog-body" }, index.h("p", { key: 'd629650b31e5620949a264756970503f61589b77', class: "ir-text-start dialog-body__description m-0 p-0" }, this.data.description), hasRateplans && (
        // <ir-select
        //   ref={el => (this.rateplanSelectEl = el)}
        //   required
        //   firstOption="Select rate plan..."
        //   data={this.rateplanOptions.map(option => ({ text: option.text, value: option.value }))}
        //   error={this.showRateplanError}
        //   onSelectChange={this.handleRateplanChange}
        // ></ir-select>
        index.h("wa-select", { key: '2f9b17afd1c082a837b613d894abac23a2622b97', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, defaultValue: '', "onwa-show": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, size: "s", "aria-invalid": String(this.showRateplanError), onchange: e => this.handleRateplanChange(e.target.value) }, index.h("wa-option", { key: '7213f700121edabf8f44144a76e824625c9e2ef6', value: "" }, t.t('Lcz_SelectRatePlan', { fallback: 'Select rate plan...' })), this.rateplanOptions.map(option => (index.h("wa-option", { key: option.value, value: option.value }, option.text)))))), index.h("div", { key: '979a7b2cccb25a2d5891f98fd7ee7cf603038800', class: "dialog-footer", slot: "footer" }, index.h("ir-custom-button", { key: 'a4810ef5a27684f190f8dec297db4f7f2a5af885', appearance: "filled", variant: "neutral", onClickHandler: this.handleCancelClick, size: "m" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: 'c8e903c0c867c44881ecb933222e0c37e303e0d1', variant: "brand", onClickHandler: () => this.reallocateUnit(), size: "m", loading: irInterceptor_store.isRequestPending('/ReAllocate_Exposed_Room') }, t.t('Lcz_Confirm', { fallback: 'Confirm' })))))));
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
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal");
    }
    booking;
    identifier;
    open;
    closeModal;
    _id = `split-booking-form_${v4.v4()}`;
    get room() {
        return this.booking?.rooms?.find(r => r.identifier === this.identifier);
    }
    render() {
        return (index.h("ir-drawer", { key: 'd9b973ef6fdaf9421331b611b92f33cfdaa3dc47', open: this.open, class: 'split-booking__drawer', label: `${t.t('Lcz_SplitUnit', { fallback: 'Split unit' })} ${this.room?.unit?.['name'] ?? ''}`, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit(null);
            } }, this.open && index.h("igl-split-booking-form", { key: '2e0718edfe9bda1ed8e670aba1666df68337ebff', booking: this.booking, identifier: this.identifier, formId: this._id }), index.h("div", { key: 'b53d4ee74bae5bc5cb24b3930048f88d2ebda0c7', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: '2ca9a018f688b6eb5a3ee25a297450bbec0e7e50', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '204e85eede7f28321c2e72a492e5486686092812', form: this._id, type: "submit", size: "m", appearance: "accent", variant: "brand", loading: irInterceptor_store.isRequestPending('/DoReservation') }, t.t('Lcz_Confirm', { fallback: 'Confirm' })))));
    }
};
IglSplitBookingDrawer.style = iglSplitBookingDrawerCss();

const SelectedUnitSchema = types.objectType({
    roomtype_id: types.coerce.number(),
    unit_id: types.coerce.number(),
    rateplan_id: types.coerce.number(),
});

const iglSplitBookingFormCss = () => `.sc-igl-split-booking-form-h{display:flex;flex-direction:column;gap:var(--wa-space-s);text-align:start}form.sc-igl-split-booking-form{display:flex;flex-direction:column;gap:var(--wa-space-m)}.split-header.sc-igl-split-booking-form{display:flex;flex-direction:column;gap:var(--wa-space-xs);border-block-end:1px solid var(--wa-color-surface-border);padding:var(--spacing)}.split-header__summary.sc-igl-split-booking-form{display:flex;align-items:center;flex-wrap:wrap;gap:var(--wa-space-2xs) var(--wa-space-xs)}.split-header__room.sc-igl-split-booking-form{font-weight:600;font-size:var(--wa-font-size-m);color:var(--wa-color-text-normal)}.split-header__rateplan.sc-igl-split-booking-form{display:flex;align-items:center;gap:var(--wa-space-2xs);color:var(--wa-color-text-quiet, #4b5563);font-size:var(--wa-font-size-s)}.split-search-row.sc-igl-split-booking-form{display:flex;align-items:center;gap:var(--wa-space-xs)}.split-search__date.sc-igl-split-booking-form{cursor:pointer !important;width:200px;min-width:0}.split-date-trigger.sc-igl-split-booking-form{display:flex;align-items:center;gap:var(--wa-space-2xs);width:100%;height:2.5rem;padding-inline:var(--wa-space-s);border:1px solid var(--wa-color-surface-border);border-radius:var(--wa-border-radius-m, 0.375rem);background:var(--wa-color-surface-default);color:var(--wa-color-text-normal);font:inherit;font-size:var(--wa-font-size-s);font-weight:400;text-align:start;cursor:pointer;transition:border-color 160ms ease-out}.split-date-trigger.sc-igl-split-booking-form:hover{border-color:var(--wa-color-neutral-border-loud, var(--wa-color-surface-border))}.split-date-trigger.sc-igl-split-booking-form:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.split-date-trigger.sc-igl-split-booking-form wa-icon.sc-igl-split-booking-form{flex:0 0 auto;color:var(--wa-color-text-quiet)}.split-date-trigger.sc-igl-split-booking-form span.sc-igl-split-booking-form{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.split-date-trigger--empty.sc-igl-split-booking-form span.sc-igl-split-booking-form{color:var(--wa-color-text-quiet)}.split-search__submit.sc-igl-split-booking-form{flex:0 0 auto}.split-empty.sc-igl-split-booking-form{display:flex;flex-direction:column;align-items:center;gap:var(--wa-space-m);width:100%;padding-block:var(--wa-space-2xl) var(--wa-space-xl)}.split-empty.sc-igl-split-booking-form ir-empty-state.sc-igl-split-booking-form{width:100%}.split-empty__action.sc-igl-split-booking-form{width:fit-content}.error-message.sc-igl-split-booking-form{display:flex;align-items:center;gap:var(--wa-space-2xs);margin:0;color:var(--wa-color-danger-fill-loud, #c0392b);font-size:var(--wa-font-size-s)}.split-loading.sc-igl-split-booking-form{display:flex;align-items:center;justify-content:center;gap:var(--wa-space-xs);padding-block:var(--wa-space-l);color:var(--wa-color-text-quiet, #4b5563);font-size:var(--wa-font-size-s)}@keyframes split-results-in{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}.room-type-list.sc-igl-split-booking-form{display:flex;flex-direction:column;gap:var(--wa-space-2xs);padding-inline:var(--spacing);padding-bottom:2rem;animation:split-results-in 180ms cubic-bezier(0.23, 1, 0.32, 1)}@media (prefers-reduced-motion: reduce){.room-type-list.sc-igl-split-booking-form{animation:none}}.room-type-row.sc-igl-split-booking-form{margin-block:var(--wa-space-xs) var(--wa-space-3xs)}.room-type-row.sc-igl-split-booking-form:first-child{margin-block-start:0}.room-type-name.sc-igl-split-booking-form{font-weight:600;font-size:var(--wa-font-size-s);color:var(--wa-color-text-normal);text-align:start}.physical-room.sc-igl-split-booking-form{display:flex;align-items:center;padding:var(--wa-space-2xs) var(--wa-space-xs);padding-inline-start:var(--wa-space-m);border-radius:var(--wa-border-radius-m, 0.375rem);transition:background-color 160ms ease-out}.physical-room.sc-igl-split-booking-form::part(label),.physical-room.sc-igl-split-booking-form [part~="label"]{display:flex;align-items:center}.physical-room.sc-igl-split-booking-form wa-select.sc-igl-split-booking-form{margin-inline-start:var(--wa-space-m);min-width:220px}`;

const IglSplitBookingForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal");
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
    bookingService = new booking_service.BookingService();
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
        this.isSearching = true;
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
                language: locale_controller.LocaleController.language,
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
                days: this.room.days.filter(r => moment.hooks(r.date, 'YYYY-MM-DD').isSameOrAfter(this.selectedDates.from_date, 'dates')),
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
                // target_room_identifier: this.room.identifier,
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
            if (error instanceof types.ZodError) {
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
        return (index.h("form", { key: '339b8105390ff9effb8c3a554fe3c2bfec3ab43e', id: this.formId, onSubmit: e => {
                e.preventDefault();
                this.doReservation();
            } }, index.h("div", { key: '6ceda198295313fe5c569b199f49e3cf6ecd9ef7', class: "split-header" }, index.h("div", { key: 'e30061d5d23c4a8a9184b04b9cadc06175fffdec', class: "split-header__summary" }, index.h("span", { key: '07e11c260b2da2063e03a894237f1685c8e6b220', class: "split-header__room" }, this.room.unit?.['name'] ?? this.room.roomtype?.name), index.h("span", { key: 'b41edd2bfb51c5bea86d27089860c2c526d9d547', class: "split-header__rateplan" }, this.room.rateplan.short_name, this.room.rateplan.is_non_refundable && (index.h("wa-tag", { key: '4f6d079ea53876ff46e2bc02d69ede62db590f81', size: "s", variant: "warning" }, t.t('Lcz_NonRefundable', { fallback: 'Non-refundable' }))))), index.h("div", { key: 'df0a38782b6b750f6c0c938b585758f6ea00f02d', class: "split-search-row" }, index.h("ir-date-select", { key: 'c21a388c84c7f58c731d54d2faa9aa95a0300576',
            // customPicker
            class: "split-search__date", "data-testid": "pickup_arrival_date", date: this.selectedDates?.from_date?.format('YYYY-MM-DD'), maxDate: this.defaultDates?.to_date.format('YYYY-MM-DD'), minDate: this.defaultDates?.from_date.format('YYYY-MM-DD'), emitEmptyDate: true, onDateChanged: evt => {
                this.selectedDates = { ...this.selectedDates, from_date: evt.detail.start };
            } }, index.h("wa-icon", { key: '91ff22045b72b8e2da90e42f6799391c4707053b', slot: "start", name: "calendar" })), index.h("ir-custom-button", { key: 'b90f3d53c7346253d90cdadbde1fa11199b68f30', class: "split-search__submit", appearance: "accent", variant: "brand", size: "s", loading: this.isSearching, onClickHandler: () => this.checkBookingAvailability() }, t.t('Lcz_CheckAvailability', { fallback: 'Check availability' })))), this.errors?.roomtype_id && (index.h("p", { key: '4f1f1e5b253ece9a2583d3f13aad14f93024cdda', class: "error-message" }, index.h("wa-icon", { key: 'ccc9b5cdc8bf21cf77832933964ec8fa5ce21edd', name: "circle-exclamation" }), t.t('Lcz_PleaseSelectARoom', { fallback: 'Please select a room' }))), this.isSearching ? (index.h("div", { class: "split-loading" })) : !this.hasSearched ? (index.h("div", { class: "split-empty" }, index.h("ir-empty-state", { message: t.t('Lcz_PickDateAndSearchForAvailableUnits', { fallback: 'Pick a date and search to see available units' }) }), index.h("ir-custom-button", { class: "split-empty__action", loading: this.isSearching, onClickHandler: () => this.checkBookingAvailability(), variant: "brand", size: "s" }, t.t('Lcz_CheckAvailability', { fallback: 'Check availability' })))) : eligibleRoomTypes.length === 0 ? (index.h("div", { class: "split-empty" }, index.h("ir-empty-state", { message: t.t('Lcz_NoAvailableUnitsForTheseDates', { fallback: 'No available units for these dates' }) }))) : (index.h("wa-radio-group", { class: "room-type-list", name: "unit", onchange: e => {
                const [roomtype_id, unit_id] = e.target.value.split('_');
                this.updateSelectedUnit({
                    roomtype_id: Number(roomtype_id),
                    unit_id: Number(unit_id),
                });
            } }, eligibleRoomTypes.map(({ roomType, units }) => (index.h(index.Fragment, null, index.h("div", { key: `roomTypeRow-${roomType.id}`, class: "room-type-row" }, index.h("span", { class: "room-type-name" }, roomType.name)), units.map((unit, j) => {
            const isSelected = this.selectedUnit?.unit_id === unit.id;
            const showMealPlanSelect = isSelected && Array.isArray(this.mealPlanOptions) && this.mealPlanOptions.length > 0;
            return (index.h("wa-radio", { value: `${roomType.id}_${unit.id}`, checked: isSelected, key: `physicalRoom-${unit.id}-${j}`, class: `physical-room${isSelected ? ' physical-room--selected' : ''}` }, index.h("span", null, unit.name), showMealPlanSelect && (index.h("ir-validator", { value: this.selectedUnit?.rateplan_id, schema: SelectedUnitSchema.shape.rateplan_id }, index.h("wa-select", { size: "s", placeholder: t.t('Lcz_SelectANewRateplan', { fallback: 'Select a new rateplan...' }), value: this.selectedUnit?.rateplan_id?.toString(), onchange: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.updateSelectedUnit({
                        rateplan_id: Number(e.target.value),
                    });
                } }, this.mealPlanOptions.map(option => (index.h("wa-option", { value: option.value?.toString() }, option.text + `${option.custom_text ? ' | ' : ''}${option.custom_text}`))))))));
        }))))))));
    }
};
IglSplitBookingForm.style = iglSplitBookingFormCss();

const iglTbaCategoryViewCss = () => `.sc-igl-tba-category-view-h{display:block}.tba-category.sc-igl-tba-category-view{display:flex;flex-direction:column}.tba-category__title.sc-igl-tba-category-view{margin:0;color:var(--wa-color-default-normal);font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);font-size:var(--wa-font-size-m);text-wrap:balance}`;

const IglTbaCategoryView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.assignUnitEvent = index.createEvent(this, "assignUnitEvent");
    }
    calendarData;
    category;
    selectedDate;
    categoryIndex;
    assignUnitEvent;
    handleAssignRoom = (event) => {
        event.stopPropagation();
        this.calendarData.bookingEvents.push(event.detail);
        this.assignUnitEvent.emit({ identifier: event.detail.identifier });
    };
    render() {
        const { roomTypeId, roomTypeName, rooms } = this.category;
        return (index.h(index.Host, { key: '110e0026080b0e09b4e99ab1de839357c064c2a0' }, index.h("div", { key: '2d0b5c8efec9b0187cecae44521cc055fac7bdd2', class: "tba-category" }, index.h("h5", { key: '4bbafb4065e3bb771242d09ceae15047f049b8b0', class: "tba-category__title" }, roomTypeName), rooms.map((room, index$1) => (index.h("igl-tba-booking-view", { key: room.room_identifier, calendarData: this.calendarData, selectedDate: this.selectedDate, room: room, roomTypeId: roomTypeId, roomTypeName: roomTypeName, categoryIndex: this.categoryIndex, eventIndex: index$1, onAssignRoomEvent: this.handleAssignRoom }))))));
    }
};
IglTbaCategoryView.style = iglTbaCategoryViewCss();

const iglToBeAssignedCss = () => `.sc-igl-to-be-assigned-h{--spacing:var(--wa-space-l);display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-s);text-align:start;background-color:var(--wa-color-surface-default);border-inline-end:2px solid var(--wa-color-surface-border)}.tba-panel.sc-igl-to-be-assigned{display:flex;flex-direction:column;min-height:100%}.tba-panel__head.sc-igl-to-be-assigned{position:sticky;top:0;z-index:1;font-family:var(--wa-font-family-heading);background-color:var(--wa-color-surface-default)}.tba-panel__header.sc-igl-to-be-assigned{display:flex;align-items:center;justify-content:space-between;gap:0.5rem;box-sizing:border-box;padding-inline:var(--spacing);padding-block:calc(var(--spacing) / 2);border-bottom:1px solid var(--wa-color-surface-border);background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default))}.tba-panel__title.sc-igl-to-be-assigned{flex:1 1 auto;margin:0;font-size:var(--wa-font-size-l);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);font-family:var(--wa-font-family-heading);color:var(--wa-color-text-normal)}.tba-panel__toolbar.sc-igl-to-be-assigned{padding:var(--spacing);padding-block-end:0}.tba-panel__body.sc-igl-to-be-assigned{display:flex;flex:1 1 auto;flex-direction:column;gap:1rem;padding:var(--spacing)}.tba-panel__loading.sc-igl-to-be-assigned{display:flex;flex:1 1 auto;align-items:center;justify-content:center}.tba-panel__empty.sc-igl-to-be-assigned{display:flex;flex:1 1 auto;align-items:center;justify-content:center;text-align:center;padding-block:var(--spacing)}.tba-panel__empty.sc-igl-to-be-assigned ir-empty-state.sc-igl-to-be-assigned::part(message),.tba-panel__empty.sc-igl-to-be-assigned ir-empty-state.sc-igl-to-be-assigned [part~="message"]{font-size:var(--wa-font-size-m)}.tba-panel__empty-icon.sc-igl-to-be-assigned{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-fill-loud);font-size:1.5rem;margin-bottom:0.5rem}.tba-panel__empty-subtitle.sc-igl-to-be-assigned{font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet)}`;

const IglToBeAssigned = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.optionEvent = index.createEvent(this, "optionEvent");
        this.showBookingPopup = index.createEvent(this, "showBookingPopup");
        this.addToBeAssignedEvent = index.createEvent(this, "addToBeAssignedEvent");
        this.highlightToBeAssignedBookingEvent = index.createEvent(this, "highlightToBeAssignedBookingEvent");
    }
    propertyid;
    calendarData;
    selectedDate = null;
    isLoading = true;
    optionEvent;
    /** `data` is the `YYYY-MM-DD` day to scroll to. */
    showBookingPopup;
    addToBeAssignedEvent;
    highlightToBeAssignedBookingEvent;
    unassignedUnitsService = new index$4.UnassignedUnitsService();
    categoriesCache = null;
    refreshToken = 0;
    componentWillLoad() {
        this.selectedDate = calendarGrid.getUnassignedUnitsDateKeys()[0] ?? null;
        this.verifySelectedDate();
    }
    handleGotoDate(event) {
        this.selectDate(event.detail.data);
    }
    /** A card was highlighted: scroll the calendar to that booking's first night. */
    handleBookingHighlight(event) {
        const fromDate = event.detail?.data?.fromDate;
        if (fromDate) {
            this.showBookingPopup.emit({ key: 'calendar', data: fromDate, noScroll: false });
        }
    }
    /** Re-reads one date from the API and makes the store match it, in case a realtime update was missed. Owns the panel's loader, so every caller shows one. */
    async refreshDate(date) {
        const token = ++this.refreshToken;
        this.isLoading = true;
        try {
            const entries = await this.unassignedUnitsService.getAggregatedUnAssignedRoomsByDateRange({
                propertyid: this.propertyid,
                from_date: date,
                to_date: date,
            });
            // A newer refresh started while this one was in flight — let it own the store and the loader.
            if (token !== this.refreshToken) {
                return;
            }
            calendarGrid.replaceUnassignedUnitsRange(date, date, entries);
        }
        catch (error) {
            console.error('Unassigned units refresh failed:', error);
        }
        finally {
            if (token === this.refreshToken) {
                this.isLoading = false;
            }
        }
    }
    /** One single-day refresh on open; every later date switch reads the store only. */
    async verifySelectedDate() {
        const date = this.selectedDate;
        if (!date) {
            this.isLoading = false;
            return;
        }
        await this.refreshDate(date);
        const dates = calendarGrid.getUnassignedUnitsDateKeys();
        this.selectDate(dates.includes(date) ? date : (dates[0] ?? null));
    }
    selectDate(date) {
        this.selectedDate = date;
        this.addToBeAssignedEvent.emit({ key: 'tobeAssignedEvents', data: [] });
        if (date) {
            this.showBookingPopup.emit({ key: 'calendar', data: date, noScroll: false });
        }
    }
    /** Memoized on the store entry's identity (and the property's, since names come from it): unrelated re-renders skip the grouping. */
    categoriesFor(date) {
        const source = calendarGrid.getUnassignedUnitsForDate(date);
        const { property } = calendarData.calendar_data;
        const cache = this.categoriesCache;
        if (cache && cache.source === source && cache.property === property) {
            return cache.value;
        }
        const value = utils$1.groupIntoCategories(source);
        this.categoriesCache = { source, property, value };
        return value;
    }
    handleDateChange = (event) => {
        this.selectDate(event.target.value || null);
    };
    /**
     * Fired by `igl-tba-category-view` only after `assignUnit` succeeded. The room is dropped right away so the
     * card disappears without waiting, then the day is re-read — behind the panel's loader — so the panel matches
     * the server even if the realtime update for this assignment never arrives.
     */
    handleAssignUnit = (event) => {
        event.stopPropagation();
        calendarGrid.removeUnassignedRoom(event.detail.identifier);
        if (this.selectedDate) {
            this.refreshDate(this.selectedDate);
        }
    };
    handleClose = () => {
        this.highlightToBeAssignedBookingEvent.emit({ key: 'highlightBookingId', data: { bookingId: '----' } });
        this.addToBeAssignedEvent.emit({ key: 'tobeAssignedEvents', data: [] });
        this.optionEvent.emit({ key: 'closeSideMenu' });
    };
    renderEmptyState(message, subtitle) {
        return (index.h("div", { class: "tba-panel__empty" }, index.h("ir-empty-state", { message: message }, index.h("span", { slot: "icon", class: "tba-panel__empty-icon" }, index.h("wa-icon", { name: "circle-check" })), subtitle && index.h("span", { class: "tba-panel__empty-subtitle" }, subtitle))));
    }
    renderBody(hasDates, categories) {
        if (this.isLoading) {
            return (index.h("div", { class: "tba-panel__loading" }, index.h("ir-spinner", null)));
        }
        if (!hasDates) {
            return this.renderEmptyState(t.t('Lcz_AllBookingsAreAssigned'));
        }
        if (categories.length === 0) {
            return this.renderEmptyState(t.t('Lcz_AllAssignForThisDay'), irDate.formatDate(this.selectedDate, 'ddd, DD MMM YYYY'));
        }
        return categories.map((category, index$1) => (index.h("igl-tba-category-view", { key: category.roomTypeId, calendarData: this.calendarData, selectedDate: this.selectedDate, category: category, categoryIndex: index$1, onAssignUnitEvent: this.handleAssignUnit })));
    }
    render() {
        const dates = calendarGrid.getUnassignedUnitsDateKeys();
        // Once its last room is assigned the selected date leaves the store; keep it listed so the
        // dropdown doesn't go blank under the user. It drops off as soon as another date is picked.
        const options = this.selectedDate && !dates.includes(this.selectedDate) ? [...dates, this.selectedDate].sort() : dates;
        const categories = this.selectedDate ? this.categoriesFor(this.selectedDate) : [];
        return (index.h(index.Host, { key: 'ffc89a3367b494184ac1e420369cf301275b15af' }, index.h("div", { key: '490afd77c9b7379caea191264cee2db98160f0ac', class: "tba-panel" }, index.h("div", { key: '1df6d202e74c55f8654ddbfae8d4df33e8d014fd', class: "tba-panel__head" }, index.h("header", { key: '8b1b426ab49516be4ed2c337f801fa648642a3e0', class: "tba-panel__header" }, index.h("h2", { key: '6a297f08bf035645940e4442dbbda73883552c76', class: "tba-panel__title", id: "to-be-assigned-title" }, t.t('Lcz_Assignments')), index.h("ir-custom-button", { key: 'f2be8e705938837ba79e44d29f91ecb63078b01d', size: "m", appearance: "plain", variant: "neutral", onClickHandler: this.handleClose }, index.h("wa-icon", { key: '73c49c4da0d7d745fc64a76b1ad8ffb94cc6ed37', name: "xmark", variant: "solid", label: t.t('Lcz_Close', { fallback: 'Close' }), "aria-label": t.t('Lcz_Close', { fallback: 'Close' }), role: "img" }))), options.length > 0 && (index.h("div", { key: 'ad7d92772a8031faa7cb0f14bc56f71234fce042', class: "tba-panel__toolbar" }, index.h("wa-select", { key: 'b36407148c24076e6e72369c5f6b49991a987c1b', size: "s", "aria-label": t.t('Lcz_Assignments'), value: this.selectedDate ?? '', defaultValue: this.selectedDate ?? '', onchange: this.handleDateChange }, options.map(date => (index.h("wa-option", { key: date, value: date }, irDate.formatDate(date, 'ddd, DD MMM YYYY')))))))), index.h("div", { key: '021f1c0a714898689887f46811affb31e9bc8b6d', class: "tba-panel__body" }, this.renderBody(dates.length > 0, categories)))));
    }
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
        return (index.h(index.Host, { key: '6b588c0c3e30156c072aaa09c1554350933770dd', style: { '--ir-popover-left': this.irPopoverLeft } }, index.h("p", { key: '1c7538a508ec17c0b6c22c48e25c264d2bac0edb', class: "popover-title" }, title.length > this.cropSize && (index.h("wa-tooltip", { key: '0329b3fcfb9b7ad4ab1e543c63217269f35a4e16', for: this.titleId, placement: "top" }, title)), index.h("span", { key: 'c792646810b48bd1e906e761f2b277aeef9eca4e', id: this.titleId, class: "cropped-title" }, title), this.hkStatus && (index.h("div", { key: 'a85f4a713671934eef8d75ffeee83ab8585fadd4', class: "hk-dot" }, index.h("slot", { key: 'aed472d93d1e71a9e1db7d4c24967f89dbf73a5d', name: "end" }))))));
    }
};
IrInteractiveTitle.style = irInteractiveTitleCss();

const irModalCss = () => `.backdropModal.sc-ir-modal{background-color:rgba(0, 0, 0, 0.5);z-index:1000;position:fixed;top:0;inset-inline-start:0;height:100vh;width:100%;opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.backdropModal.active.sc-ir-modal{cursor:pointer;opacity:1 !important;pointer-events:all}.ir-modal[data-state='opened'].sc-ir-modal{opacity:1;visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-alert-content.sc-ir-modal{padding:1rem;background:white;border-radius:5px}.ir-alert-header.sc-ir-modal{display:flex;font-size:1rem;font-weight:700}.modal.sc-ir-modal{z-index:1001 !important}.modal-dialog.sc-ir-modal{height:100vh;display:flex;align-items:center}.ir-alert-footer.sc-ir-modal{gap:10px}.ir-modal.sc-ir-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;width:90%;max-width:32rem;overflow:hidden;outline:0;opacity:0;transition:transform 0.3s ease-in-out,     opacity 0.3s ease-in-out,     visibility 0.3s ease-in-out;visibility:hidden;pointer-events:none}.ir-modal.active.sc-ir-modal{opacity:1;transform:translate(-50%, 0);visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-me-1.sc-ir-modal{margin-inline-end:0.25rem}.ir-text-start.sc-ir-modal{text-align:start}`;

const IrModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.confirmModal = index.createEvent(this, "confirmModal");
        this.cancelModal = index.createEvent(this, "cancelModal");
        this.middleModal = index.createEvent(this, "middleModal");
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
        return this.modalTitle || t.t('Lcz_ModalTitle', { fallback: 'Modal Title' });
    }
    get resolvedModalBody() {
        return this.modalBody || t.t('Lcz_ModalBody', { fallback: 'Modal Body' });
    }
    get resolvedRightBtnText() {
        return this.rightBtnText || t.t('Lcz_Confirm', { fallback: 'Confirm' });
    }
    get resolvedLeftBtnText() {
        return this.leftBtnText || t.t('Lcz_Close', { fallback: 'Close' });
    }
    get resolvedMiddleBtnText() {
        return this.middleBtnText || t.t('Lcz_More', { fallback: 'More' });
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
            index.h("div", { key: '2f1e9c81a00cca7d51dc0d1283c736b6050ec02a', class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    this.cancelModal.emit();
                    if (this.autoClose && !this.isLoading) {
                        this.closeModal();
                    }
                } }),
            index.h("div", { key: '26713931f88c0a7430a685f855451a56a5f6293c', "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, index.h("div", { key: '27fdde2ce0c5fa90046ea05af74181b627c38123', class: `ir-alert-content p-2` }, this.showTitle && (index.h("div", { key: '17f85ca6cac12f797fa4cdc40a0b29b23d4f3f5b', class: `ir-alert-header` }, index.h("p", { key: 'ec542414be215e5dbc67fcc0e08f84f8a0abf976' }, this.resolvedModalTitle))), index.h("div", { key: '8147cbaa534957d8cbeb0d157721fecafeb95dd8', class: "modal-body ir-text-start p-0 mb-2" }, index.h("div", { key: '640abe1ca5bce5434dac401405f5703e335e39ae' }, this.resolvedModalBody)), index.h("div", { key: '7a47ff8669c34a32fdb623b223bbee30c64a4801', class: `ir-alert-footer border-0  d-flex justify-content-${this.btnPosition === 'center' ? 'center' : this.btnPosition === 'left' ? 'start' : 'end'}` }, this.leftBtnActive && (index.h("ir-button", { key: '9e26af2ed20a401aa2641bc13f5c9860529c9811', btn_disabled: this.isLoading, btn_color: this.leftBtnColor, btn_block: true, text: this.resolvedLeftBtnText, name: this.resolvedLeftBtnText })), this.middleBtnActive && (index.h("ir-button", { key: 'dd2ce469076f0cdb737dedaa5ff139b977134c70', btn_disabled: this.isMiddleButtonLoading, btn_color: this.middleBtnColor, btn_block: true, text: this.resolvedMiddleBtnText, isLoading: this.isMiddleButtonLoading, name: this.resolvedMiddleBtnText })), this.rightBtnActive && (index.h("ir-button", { key: '6b9e6adc8ae3550623cf37beff2d7d40099c2f92', btn_color: this.rightBtnColor, btn_disabled: this.isLoading, isLoading: this.isLoading, btn_block: true, text: this.resolvedRightBtnText, name: this.resolvedRightBtnText }))))),
        ];
    }
};
IrModal.style = irModalCss();

const irReallocationDrawerCss = () => `.sc-ir-reallocation-drawer-h{display:block}`;

const IrReallocationDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal");
    }
    open;
    booking;
    roomIdentifier;
    pool;
    closeModal;
    _id = `reallocation-form_${v4.v4()}`;
    render() {
        return (index.h("ir-drawer", { key: 'a233a2c700ced8027501a7d8e3c8157fbf650f98', label: t.t('Lcz_ReassignUnit', { fallback: 'Reassign Unit' }), open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && index.h("ir-reallocation-form", { key: '9820d1a1d81049a13c76c5baeca4e0495febe40c', pool: this.pool, formId: this._id, booking: this.booking, identifier: this.roomIdentifier }), index.h("div", { key: '4d31370f88d6354c3578a09ce7e89e63363fde11', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: 'e0f9181b6bb735ca41a597369fe2fe89cb23f2f5', size: "m", "data-drawer": "close", variant: "neutral", appearance: "filled" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '4c119777a6a8c621e5711ade7a1bde09594f2664', form: this._id, size: "m", loading: irInterceptor_store.isRequestPending('/ReAllocate_Exposed_Room'), type: "submit", variant: "brand" }, t.t('Lcz_Confirm', { fallback: 'Confirm' })))));
    }
};
IrReallocationDrawer.style = irReallocationDrawerCss();

const irReallocationFormCss = () => `.sc-ir-reallocation-form-h{display:block;height:100%;color:var(--ir-text-color, #1f2a37);font-family:var(--ir-font-family, 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif)}.reallocation-form.sc-ir-reallocation-form{display:flex;flex-direction:column;gap:0.75rem}.booking-summary.sc-ir-reallocation-form{display:flex;flex-direction:column;gap:0.5rem}.rateplan-details.sc-ir-reallocation-form{margin:0;font-weight:500;color:var(--wa-color-text-quiet, #4b5563)}.rateplan-details-unit.sc-ir-reallocation-form{font-weight:700;color:var(--wa-color-text-normal)}.date-picker-row.sc-ir-reallocation-form{display:flex;flex-wrap:wrap;gap:0.5rem;align-items:flex-end}.date-picker-row.sc-ir-reallocation-form .ir-custom-date-picker.sc-ir-reallocation-form{flex:1 1 220px}.error-message.sc-ir-reallocation-form{margin:0;margin-top:0.75rem;color:var(--ir-error-color, #c0392b);font-size:0.95rem}.room-type-list.sc-ir-reallocation-form{display:flex;flex-direction:column;gap:0.75rem}.arrow-container.sc-ir-reallocation-form{width:100%;display:flex;justify-content:center}.choice-row.sc-ir-reallocation-form{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.room-type-name.sc-ir-reallocation-form{font-weight:600;color:var(--ir-heading-color, #111827)}.physical-room.sc-ir-reallocation-form{display:flex;align-items:center;font-size:0.95rem;padding-inline-start:1rem}.physical-room.sc-ir-reallocation-form::part(label),.physical-room.sc-ir-reallocation-form [part~="label"]{display:flex;align-items:center}.physical-room.sc-ir-reallocation-form+.physical-room.sc-ir-reallocation-form{margin-top:0.5rem}.physical-room--last.sc-ir-reallocation-form{margin-bottom:0.25rem}.physical-room.sc-ir-reallocation-form wa-select.sc-ir-reallocation-form{margin-inline-start:1rem;min-width:220px}.custom-date-picker.sc-ir-reallocation-form{max-width:200px}.room-type-row.sc-ir-reallocation-form{margin-bottom:0.5rem}`;

const IrReallocationForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal");
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
                language: locale_controller.LocaleController.language,
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
            if (error instanceof types.ZodError) {
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
            } }, index.h("div", { class: "booking-summary" }, index.h("ir-date-view", { from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false })), index.h("div", null, index.h("wa-callout", { size: "s", appearance: "filled", variant: "neutral" }, index.h("p", { style: { padding: '0', margin: '0' } }, index.h("span", { class: "rateplan-details" }, this.room.roomtype.name, " ", this.room.rateplan.short_name, " ", this.room.rateplan.is_non_refundable ? t.t('Lcz_NonRefundable', { fallback: 'Non-refundable' }) : '', ' ', index.h("span", { class: "rateplan-details-unit" }, this.room.unit.name)))), this.errors?.roomtype_id && index.h("p", { class: "error-message" }, t.t('Lcz_PleaseSelectARoom', { fallback: 'Please select a room' })), this.roomTypes.length === 0 ? (index.h("ir-empty-state", { style: { marginTop: '20vh' } })) : (index.h(index.Fragment, null, index.h("div", { class: "arrow-container" }, index.h("svg", { height: 30, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, index.h("path", { d: "M297.4 566.6C309.9 579.1 330.2 579.1 342.7 566.6L502.7 406.6C515.2 394.1 515.2 373.8 502.7 361.3C490.2 348.8 469.9 348.8 457.4 361.3L352 466.7L352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 466.7L182.6 361.3C170.1 348.8 149.8 348.8 137.3 361.3C124.8 373.8 124.8 394.1 137.3 406.6L297.3 566.6z" }))), index.h("wa-callout", { size: "s", appearance: "filled", variant: "neutral" }, index.h("wa-radio-group", { onchange: e => {
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
                return (index.h("wa-radio", { value: `${roomType.id}_${room.id}`, checked: this.selectedUnit?.unit_id === room.id, key: `physicalRoom-${room.id}-${j}`, class: `physical-room${isLastUnit ? ' physical-room--last' : ''}` }, index.h("span", null, room.name), showMealPlanSelect && (index.h("ir-validator", { value: this.selectedUnit?.rateplan_id, schema: SelectedUnitSchema.shape.rateplan_id }, index.h("wa-select", { size: "s", placeholder: t.t('Lcz_SelectANewRateplan', { fallback: 'Select a new rateplan...' }), value: this.selectedUnit?.rateplan_id?.toString(), onchange: e => {
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
IrReallocationForm.style = irReallocationFormCss();

const irRectifierCss = () => `.ir-rectifier__form.sc-ir-rectifier{display:flex;flex-direction:column;gap:1.5rem}.ir-rectifier__roomtypes.sc-ir-rectifier{display:flex;flex-direction:column;gap:1rem}.ir-rectifier__roomtype-checkbox--all.sc-ir-rectifier{padding-bottom:0.75rem;border-bottom:1px solid var(--wa-color-surface-border, #e0e0e0)}.ir-rectifier__date-range.sc-ir-rectifier{display:flex;align-items:center;gap:1rem}`;

const IrRectifier = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.loadingChanged = index.createEvent(this, "loadingChanged");
        this.closeDrawer = index.createEvent(this, "closeDrawer");
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
    propertyService = new index$3.PropertyService();
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
    getValidRoomTypeIds() {
        const roomTypes = calendarData.calendar_data.property?.roomtypes ?? [];
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
            const propertyId = this.form.property_id ?? calendarData.calendar_data.property?.id ?? calendarData.calendar_data.id ?? undefined;
            const result = index$3.ExposedRectifierParamsSchema.safeParse({
                ...this.form,
                property_id: propertyId,
            });
            if (!result.success) {
                this.showRoomTypeError = result.error.issues.some(issue => issue.path[0] === 'room_type_ids');
                return;
            }
            await this.propertyService.exposedRectifier(result.data);
            utils.showToast({
                type: 'success',
                title: t.t('Lcz_UpdateBeingProcessed', { fallback: 'The update is being processed.' }),
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
        const validRoomTypeIds = this.getValidRoomTypeIds();
        const allSelected = validRoomTypeIds.length > 0 && validRoomTypeIds.every(id => this.form.room_type_ids.includes(id));
        const someSelected = validRoomTypeIds.some(id => this.form.room_type_ids.includes(id));
        return (index.h(index.Host, { key: 'bb401dbaf413c3a0868504658e371ac30fc41849' }, index.h("form", { key: '59caae3039d8821bd63ab91cb850b051ce365186', onSubmit: e => {
                e.preventDefault();
                this.handleSubmit();
            }, class: "ir-rectifier__form", id: this.formId }, index.h("wa-callout", { key: 'ae060180a634762eaaab468e9d9fd651efc48e7a', size: "s", appearance: "filled", variant: "warning" }, index.h("wa-icon", { key: '19c1e80d1083142cff7f7d1157491c1586781c8a', slot: "icon", name: "triangle-exclamation" }), t.t('Lcz_RectifierCalloutExplanation', {
            fallback: 'This will update the total availability of the selected room types by calculating: No. of physical rooms - Booked - Blocked - Pending',
        })), index.h("div", { key: '2b3bcc12348f3a132a670805338f4d27c3bd8d44', class: "ir-rectifier__roomtypes" }, validRoomTypeIds.length > 0 && (index.h("wa-checkbox", { key: '14ccecb440647e7206d35a409756a1aadb6cd978', class: "ir-rectifier__roomtype-checkbox ir-rectifier__roomtype-checkbox--all", checked: allSelected, indeterminate: !allSelected && someSelected, onchange: e => {
                const checked = e.target.checked;
                this.toggleSelectAllRoomTypes(checked);
            } }, t.t('Lcz_SelectAll', { fallback: 'Select all' }))), roomTypes.map(roomtype => {
            const roomTypeId = Number(roomtype?.id);
            if (!Number.isFinite(roomTypeId)) {
                return null;
            }
            const isSelected = this.form.room_type_ids.includes(roomTypeId);
            return (index.h("wa-checkbox", { class: "ir-rectifier__roomtype-checkbox", checked: isSelected, onchange: e => {
                    const checked = e.target.checked;
                    this.updateRoomTypeSelection(roomTypeId, checked);
                } }, roomtype.name));
        })), this.showRoomTypeError && index.h("p", { key: 'd9e2dd7915102981d496d26918805b63a2a3f3bf', class: "text-danger m-0" }, t.t('Lcz_PleaseSelectAtLeastOneRoomType', { fallback: 'Please select at least one room type.' })), index.h("div", { key: '56f6ab0b53cd629b451398252719c57435ead18c', class: "ir-rectifier__date-range" }, index.h("ir-validator", { key: 'dc5e2f13a8b88e17bf589c0a58bd3e9994957635', value: this.form.from ?? null, schema: index$3.ExposedRectifierParamsSchema.shape.from, autovalidate: this.autoValidate }, index.h("ir-date-select", { key: 'c2dd2f0acd974d57c3f98383670ca6f57f95c88b', class: "ir-rectifier__date-picker ir-rectifier__date-picker--from", label: t.t('Lcz_DateFrom', { fallback: 'Date from' }), emitEmptyDate: true, date: this.form.from, onDateChanged: e => {
                const from = e.detail.start?.format('YYYY-MM-DD') ?? null;
                this.updateForm(this.normalizeDateRange({ from }));
                requestAnimationFrame(() => this.toDateRef?.show());
            } })), index.h("ir-validator", { key: 'e2b1fb76266fa4e0a7c5ba8cfaf3cae73516aaeb', value: this.form.to ?? null, schema: index$3.ExposedRectifierParamsSchema.shape.to, autovalidate: this.autoValidate }, index.h("ir-date-select", { key: 'ad1f13ea4bc9f73c99180ca475da20f96af8ce45', class: "ir-rectifier__date-picker ir-rectifier__date-picker--to", label: t.t('Lcz_ToInclusive', { fallback: 'To (inclusive)' }), emitEmptyDate: true, disabled: !this.form.from, ref: el => (this.toDateRef = el), date: this.form.to, minDate: this.form.from, onDateChanged: e => {
                const to = e.detail.start?.format('YYYY-MM-DD') ?? null;
                this.updateForm(this.normalizeDateRange({ to }));
            } }))))));
    }
};
IrRectifier.style = irRectifierCss();

const irRectifierDrawerCss = () => `.sc-ir-rectifier-drawer-h{display:block}`;

const IrRectifierDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeDrawer = index.createEvent(this, "closeDrawer");
    }
    open;
    closeDrawer;
    isLoading;
    formId = `rectifier-form__id-${v4.v4()}`;
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
        return (index.h(index.Host, { key: '79b81eb07f8b6b4e6b671f3df8f279fbc53ac77f' }, index.h("ir-drawer", { key: '0617125cd2ed392e37a55bfb658ce40ee9e1e66d', onDrawerHide: this.handleDrawerClose.bind(this), label: t.t('Lcz_RectifyExtendAvailability', { fallback: 'Rectify/Extend Availability' }), open: this.open, class: "rectifier__drawer" }, this.open && index.h("ir-rectifier", { key: '208e33f5afb9f3f18aaf64a1a34be38e0109e764', formId: this.formId, onCloseDrawer: this.handleDrawerClose.bind(this), onLoadingChanged: this.handleLoadingChange.bind(this) }), index.h("div", { key: 'dea78f65ffbe09e351386308baa20f00d28dc439', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: '366e465af63bebec106eafed3736fe32846b1ad3', size: "m", variant: "neutral", appearance: "filled", "data-drawer": "close" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '33c8e3eea46be071ebc2be81c3a266d7a97d7de5', loading: this.isLoading, type: "submit", form: this.formId, size: "m", variant: "brand" }, t.t('Lcz_Confirm', { fallback: 'Confirm' }))))));
    }
};
IrRectifierDrawer.style = irRectifierDrawerCss();

const irSuccessLoaderCss = () => `:host{display:block}.spinner{transform-origin:center;animation:spinner_svv2 0.75s infinite linear}@keyframes spinner_svv2{100%{transform:rotate(360deg)}}`;

const IrSuccessLoader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.loaderComplete = index.createEvent(this, "loaderComplete");
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
        return (index.h(index.Host, { key: 'fde006c4ab67e395fe75ec5726960da50dc70af2' }, this.phase === 'spinner' ? index.h("wa-spinner", null) : index.h("wa-icon", { part: "check", name: "check", style: { color: 'var(--wa-color-success-fill-loud,#45b16d)' } })));
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

exports.igl_blocked_date_drawer = IglBlockedDateDrawer;
exports.igl_booking_event = IglBookingEvent;
exports.igl_bulk_operations_drawer = IglBulkOperationsDrawer;
exports.igl_cal_body = IglCalBody;
exports.igl_cal_footer = IglCalFooter;
exports.igl_cal_header = IglCalHeader;
exports.igl_cal_header_days = IglCalHeaderDays;
exports.igl_cal_header_toolbar = IglCalHeaderToolbar;
exports.igl_day_use_bookings = IglDayUseBookings;
exports.igl_hk_issues_dialog = IglHkIssuesDialog;
exports.igl_housekeeping_dialog = IglHousekeepingDialog;
exports.igl_legend = IglLegend;
exports.igl_rate_extender_drawer = IglRateExtenderDrawer;
exports.igl_rate_extender_form = IglRateExtenderForm;
exports.igl_reallocation_dialog = IglReallocationDialog;
exports.igl_split_booking_drawer = IglSplitBookingDrawer;
exports.igl_split_booking_form = IglSplitBookingForm;
exports.igl_tba_category_view = IglTbaCategoryView;
exports.igl_to_be_assigned = IglToBeAssigned;
exports.ir_interactive_title = IrInteractiveTitle;
exports.ir_modal = IrModal;
exports.ir_reallocation_drawer = IrReallocationDrawer;
exports.ir_reallocation_form = IrReallocationForm;
exports.ir_rectifier = IrRectifier;
exports.ir_rectifier_drawer = IrRectifierDrawer;
exports.ir_success_loader = IrSuccessLoader;
