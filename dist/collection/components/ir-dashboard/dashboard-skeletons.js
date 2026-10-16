import { h } from "@stencil/core";
/*
 * Placeholders for the dashboard parts that load after first paint. They render inside
 * ir-dashboard's scope, so their styles live in `ir-dashboard.css`.
 */
/** Stand-in for a summary card's count. */
export const CountSkeleton = () => h("wa-skeleton", { effect: "pulse", class: "dashboard-skeleton dashboard-skeleton--count", "aria-hidden": "true" });
/** Mirrors the booking tables' shared columns: Booking#, Booked by / Guest, Unit, Dates, Balance. */
const COLUMN_SHAPES = ['stacked', 'stacked', 'text', 'stacked', 'pill'];
/** Bar widths (%) cycled across cells so the rows read as text, not as a grid of identical blocks. */
const WIDTHS = [72, 54, 88, 63, 80, 47, 69, 92, 58];
const width = (row, column, line = 0) => `${WIDTHS[(row * 3 + column * 2 + line) % WIDTHS.length]}%`;
const Cell = ({ shape, row, column }) => {
    switch (shape) {
        case 'stacked':
            return (h("div", { class: "dashboard-table-skeleton__cell" }, h("wa-skeleton", { effect: "pulse", class: "dashboard-skeleton", style: { inlineSize: width(row, column) } }), h("wa-skeleton", { effect: "pulse", class: "dashboard-skeleton dashboard-skeleton--meta", style: { inlineSize: width(row, column, 1) } })));
        case 'pill':
            return (h("div", { class: "dashboard-table-skeleton__cell dashboard-table-skeleton__cell--center" }, h("wa-skeleton", { effect: "pulse", class: "dashboard-skeleton dashboard-skeleton--pill" })));
        case 'action':
            return (h("div", { class: "dashboard-table-skeleton__cell dashboard-table-skeleton__cell--end" }, h("wa-skeleton", { effect: "pulse", class: "dashboard-skeleton dashboard-skeleton--action" })));
        default:
            return (h("div", { class: "dashboard-table-skeleton__cell" }, h("wa-skeleton", { effect: "pulse", class: "dashboard-skeleton", style: { inlineSize: width(row, column) } })));
    }
};
/**
 * Stand-in for a panel's booking table, laid out like the real one: a header row of short labels over
 * rows whose cells match the real columns' shapes. Renders more rows than fit; they fade out towards the bottom instead of ending on a hard edge.
 */
export const TableSkeleton = ({ rows = 16, extraColumn }) => {
    const shapes = extraColumn ? [...COLUMN_SHAPES, extraColumn] : COLUMN_SHAPES;
    return (h("div", { class: "dashboard-table-skeleton", "aria-busy": "true", "aria-hidden": "true", "data-extra-column": extraColumn }, h("div", { class: "dashboard-table-skeleton__head" }, shapes.map(shape => (h("div", { class: { 'dashboard-table-skeleton__cell': true, 'dashboard-table-skeleton__cell--center': shape === 'pill' } }, shape !== 'action' && h("wa-skeleton", { effect: "pulse", class: "dashboard-skeleton dashboard-skeleton--label" }))))), h("div", { class: "dashboard-table-skeleton__body" }, Array.from({ length: rows }, (_, row) => (h("div", { class: "dashboard-table-skeleton__row" }, shapes.map((shape, column) => (h(Cell, { shape: shape, row: row, column: column })))))))));
};
