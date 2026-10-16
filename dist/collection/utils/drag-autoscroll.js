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
export const DEFAULT_EDGE_SIZE = 60;
/** Peak scroll speed in px per animation frame (~840px/s at 60fps). */
export const DEFAULT_MAX_SPEED = 14;
export class DragAutoScroller {
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
