import { FunctionalComponent } from '../../stencil-public-runtime';
/** Stand-in for a summary card's count. */
export declare const CountSkeleton: FunctionalComponent;
/** How a column's cells are drawn: one or two text lines, a balance pill, or an action button. */
export type CellShape = 'text' | 'stacked' | 'pill' | 'action';
/**
 * Stand-in for a panel's booking table, laid out like the real one: a header row of short labels over
 * rows whose cells match the real columns' shapes. Renders more rows than fit; they fade out towards the bottom instead of ending on a hard edge.
 */
export declare const TableSkeleton: FunctionalComponent<{
    rows?: number;
    extraColumn?: CellShape;
}>;
