'use strict';

var index = require('./index-DYQrLNin.js');
var useTable = require('./useTable-BN32DOaV.js');

const irCollapsableRowCss = () => `.sc-ir-collapsable-row-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-collapsable-row{overflow-x:auto}.table--container.sc-ir-collapsable-row,.data-table.sc-ir-collapsable-row{height:100%}.ir-table-row.sc-ir-collapsable-row td.sc-ir-collapsable-row{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-collapsable-row td.sc-ir-collapsable-row{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-collapsable-row tbody.sc-ir-collapsable-row tr.sc-ir-collapsable-row:last-child>td.sc-ir-collapsable-row{border-bottom:0 !important}.table.sc-ir-collapsable-row thead.sc-ir-collapsable-row th.sc-ir-collapsable-row{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-collapsable-row thead.sc-ir-collapsable-row th.sc-ir-collapsable-row{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-collapsable-row{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-collapsable-row,.ir-table-row.sc-ir-collapsable-row{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-collapsable-row{text-transform:capitalize;cursor:pointer}.table.sc-ir-collapsable-row thead.sc-ir-collapsable-row th.sortable.sc-ir-collapsable-row{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-collapsable-row thead.sc-ir-collapsable-row th.sortable.sc-ir-collapsable-row:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-collapsable-row thead.sc-ir-collapsable-row th.sortable.sc-ir-collapsable-row:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-collapsable-row:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-collapsable-row svg.sc-ir-collapsable-row{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-collapsable-row:hover td.sc-ir-collapsable-row{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-collapsable-row:hover td.sc-ir-collapsable-row{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-collapsable-row:active td.sc-ir-collapsable-row{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-collapsable-row td.sc-ir-collapsable-row{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-collapsable-row:hover td.sc-ir-collapsable-row{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-collapsable-row:active td.sc-ir-collapsable-row{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-collapsable-row .empty-row.sc-ir-collapsable-row{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-collapsable-row{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-collapsable-row{position:sticky !important;right:0;background-color:white}.sc-ir-collapsable-row-h{display:contents}td.sc-ir-collapsable-row{border-inline-end:1px solid var(--wa-color-neutral-border-quiet, #abaeb9)}td.sc-ir-collapsable-row:last-child{border-inline-end:0}`;

const IrCollapsableRow = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    row;
    isActive;
    renderCell = (cell) => {
        if (cell.getIsGrouped()) {
            return (index.h("wa-button", { appearance: "plain", size: "s", class: "group-expander", onClick: () => cell.row.toggleExpanded() }, index.h("wa-icon", { style: { fontSize: '0.875rem' }, slot: "start", name: cell.row.getIsExpanded() ? 'chevron-down' : 'chevron-up' }), useTable.flexRender(cell.column.columnDef.cell, cell.getContext()), " ", index.h("span", { slot: "end" }, "(", cell.row.subRows.length, ")")));
        }
        if (cell.getIsAggregated()) {
            return useTable.flexRender(cell.column.columnDef.aggregatedCell ?? cell.column.columnDef.cell, cell.getContext());
        }
        if (cell.getIsPlaceholder()) {
            return null;
        }
        return useTable.flexRender(cell.column.columnDef.cell, cell.getContext());
    };
    render() {
        return [
            index.h("tr", { key: 'f1a10bba9036d4c743cdcdb19468dbd6fb96054e' }, this.row.getVisibleCells().map((cell, index$1) => (index.h("td", { key: cell.id, class: {
                    'text-right': ['debit', 'credit', 'balance'].includes(cell.column.id),
                    'text-center': cell.column.id === 'actions',
                    'sticky-column': cell.column.id === 'status',
                    'input-column': ['debit', 'credit'].includes(cell.column.id),
                    'grouped-cell': cell.getIsGrouped(),
                } }, index.h("div", { class: { 'd-flex align-items-center': true } }, index$1 === 0 && (index.h("wa-button", { onClick: () => (this.isActive = !this.isActive), size: "s", appearance: "plain" }, index.h("wa-icon", { name: this.isActive ? 'chevron-up' : 'chevron-down' }))), this.renderCell(cell)))))),
            ...(this.isActive
                ? [
                    index.h("tr", null, this.row.getVisibleCells().map(cell => (index.h("td", { key: cell.id, class: {
                            'text-right': ['debit', 'credit', 'balance'].includes(cell.column.id),
                            'text-center': cell.column.id === 'actions',
                            'sticky-column': cell.column.id === 'status',
                            'input-column': ['debit', 'credit'].includes(cell.column.id),
                            'grouped-cell': cell.getIsGrouped(),
                        } }, "ACM2 ", this.renderCell(cell))))),
                    index.h("tr", null, this.row.getVisibleCells().map(cell => (index.h("td", { key: cell.id, class: {
                            'text-right': ['debit', 'credit', 'balance'].includes(cell.column.id),
                            'text-center': cell.column.id === 'actions',
                            'sticky-column': cell.column.id === 'status',
                            'input-column': ['debit', 'credit'].includes(cell.column.id),
                            'grouped-cell': cell.getIsGrouped(),
                        } }, "ACM3 ", this.renderCell(cell))))),
                ]
                : []),
        ];
    }
};
IrCollapsableRow.style = irCollapsableRowCss();

exports.ir_collapsable_row = IrCollapsableRow;
