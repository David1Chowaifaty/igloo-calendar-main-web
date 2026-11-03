/**
 * Anchoring a booking bar's info popup (`wa-popup`) to the part of the bar the user can see.
 *
 * The popup is anchored to a virtual element whose rect is the bar's *visible* part: the bar
 * clipped to the calendar grid, minus the sticky day header, footer and room-name column. Centring
 * on that keeps the popup over what is on screen for a 50-night stay, and keeps its arrow between
 * the visible edges of the bar. When the visible part is empty the bar has left the view and the
 * popup closes.
 */
export interface Edges {
    left: number;
    top: number;
    right: number;
    bottom: number;
}
export interface Rect extends Edges {
    x: number;
    y: number;
    width: number;
    height: number;
}
/** The part of `bar` inside `view` (both in viewport px), or `null` when none of it is. */
export declare function visibleBarRect(bar: Edges, view: Edges): Rect | null;
/**
 * Per-side distance from each edge of `outer` in to the matching edge of `inner`, plus `gap`. Used as
 * Floating UI padding, so a popup bounded by the scroll container stays inside its visible grid.
 */
export declare function insetsWithin(outer: Edges, inner: Edges, gap: number): Edges;
/** The scroll container's client box (inside borders and scrollbars), in viewport px. */
export declare function clientBox(scroller: HTMLElement): Edges;
/**
 * The part of the calendar grid the user can see, in viewport px: the scroll container's client
 * area minus the sticky day header (top), footer (bottom) and room-name column (inline start -
 * physical right in RTL). `clientLeft` covers a vertical scrollbar on the left in RTL.
 */
export declare function measureGridView(scroller: HTMLElement, stickyColumnWidth: number, isRtl: boolean): Edges;
/**
 * A Floating UI virtual element: what `wa-popup` accepts as an anchor besides a real element.
 *
 * Deliberately without `contextElement`: Web Awesome 3.8.0's `isVirtualElement` tests
 * `e instanceof Element` where it means `e.contextElement instanceof Element`, so any virtual anchor
 * carrying one is rejected and the popup never shows. Without it the popup no longer hears the
 * calendar's scroll container, so the bar calls `reposition()` on scroll itself while it is open.
 */
export interface BarAnchor {
    getBoundingClientRect(): DOMRect;
}
/**
 * The bar, as a popup anchor whose rect is the bar's visible part. `isVisible()` measures afresh
 * every time: a cached answer from an earlier frame (say, from when the bar had scrolled away) is
 * exactly what made a reopened popup close itself again.
 */
export declare function createBarAnchor(bar: HTMLElement, getView: () => Edges | null): {
    anchor: BarAnchor;
    isVisible: () => boolean;
};
