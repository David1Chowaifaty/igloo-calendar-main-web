/**
 * Keeping a booking bar's label in the part of the bar the user can see.
 *
 * A long stay (50 nights is ~2,900px) is usually wider than the viewport, so a label centred in the
 * bar sits off screen. The label is instead centred in the bar's *visible* part, recomputed as the
 * calendar scrolls.
 */
/** Gap kept between the label and each visible edge of the bar. */
export declare const LABEL_INSET = 5;
export interface LabelSpan {
    /** Where the label's centre goes, in px from the bar's physical left edge. */
    center: number;
}
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
export declare function visibleLabelSpan({ barLeft, barWidth, viewStart, viewEnd, labelWidth, }: {
    barLeft: number;
    barWidth: number;
    viewStart: number;
    viewEnd: number;
    /** The label's natural (untruncated) width. */
    labelWidth: number;
}): LabelSpan | null;
/** A bar whose label the tracker keeps in view. */
export interface LabelledBar {
    readonly element: HTMLElement;
    /**
     * The label element itself. The position is written straight onto it, never onto the bar: custom
     * properties inherit, so setting them on the bar restyles everything inside it - tooltips and
     * their shadow trees included - and that cost ~20ms per scroll frame at 1,000 bookings.
     */
    labelElement(): HTMLElement | null;
    /** Physical position the bar is displayed at (cached by the bar, not read from the DOM), or `null` while a gesture owns it. */
    displayedGeometry(): {
        top: number;
        left: number;
        width: number;
    } | null;
}
/** Starts keeping `bar`'s label in view, if it sits inside a calendar scroll container. */
export declare function trackLabel(bar: LabelledBar, stickyColumnWidth: number, isRtl: () => boolean): void;
export declare function untrackLabel(bar: LabelledBar): void;
/** The bar moved or resized: recompute labels on the next frame. */
export declare function refreshLabel(bar: LabelledBar): void;
