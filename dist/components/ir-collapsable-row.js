import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { f as flexRender } from './useTable.js';

const irCollapsableRowCss = ".sc-ir-collapsable-row-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-collapsable-row td.sc-ir-collapsable-row{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-collapsable-row{overflow-x:auto}.table.sc-ir-collapsable-row td.sc-ir-collapsable-row{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-collapsable-row tbody.sc-ir-collapsable-row tr.sc-ir-collapsable-row:last-child>td.sc-ir-collapsable-row{border-bottom:0 !important}.table.sc-ir-collapsable-row thead.sc-ir-collapsable-row th.sc-ir-collapsable-row{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-collapsable-row thead.sc-ir-collapsable-row th.sc-ir-collapsable-row{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-collapsable-row .empty-row.sc-ir-collapsable-row{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-collapsable-row{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-collapsable-row td.sc-ir-collapsable-row{background:#e3f3fa !important}.selected.sc-ir-collapsable-row td.sc-ir-collapsable-row{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-collapsable-row,.ir-table-row.sc-ir-collapsable-row{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-collapsable-row{text-transform:capitalize}.sortable.sc-ir-collapsable-row:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-collapsable-row td.sc-ir-collapsable-row{transition-duration:var(--wa-transition-fast)}.ir-table-row.sc-ir-collapsable-row:hover td.sc-ir-collapsable-row{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-collapsable-row:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-collapsable-row svg.sc-ir-collapsable-row{color:var(--blue)}.sticky-column.sc-ir-collapsable-row{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-collapsable-row,.data-table.sc-ir-collapsable-row{height:100%}.sc-ir-collapsable-row-h{display:contents}td.sc-ir-collapsable-row{border-inline-end:1px solid var(--wa-color-neutral-border-quiet, #abaeb9)}td.sc-ir-collapsable-row:last-child{border-inline-end:0}";
const IrCollapsableRowStyle0 = irCollapsableRowCss;

const IrCollapsableRow$1 = /*@__PURE__*/ proxyCustomElement(class IrCollapsableRow extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    row;
    isActive;
    renderCell = (cell) => {
        if (cell.getIsGrouped()) {
            return (h("wa-button", { appearance: "plain", size: "small", class: "group-expander", onClick: () => cell.row.toggleExpanded() }, h("wa-icon", { style: { fontSize: '0.875rem' }, slot: "start", name: cell.row.getIsExpanded() ? 'chevron-down' : 'chevron-up' }), flexRender(cell.column.columnDef.cell, cell.getContext()), " ", h("span", { slot: "end" }, "(", cell.row.subRows.length, ")")));
        }
        if (cell.getIsAggregated()) {
            return flexRender(cell.column.columnDef.aggregatedCell ?? cell.column.columnDef.cell, cell.getContext());
        }
        if (cell.getIsPlaceholder()) {
            return null;
        }
        return flexRender(cell.column.columnDef.cell, cell.getContext());
    };
    render() {
        return [
            h("tr", { key: 'a6a0b1973008939d298acbe51fcb02ff4ea9a0f7' }, this.row.getVisibleCells().map((cell, index) => (h("td", { key: cell.id, class: {
                    'text-right': ['debit', 'credit', 'balance'].includes(cell.column.id),
                    'text-center': cell.column.id === 'actions',
                    'sticky-column': cell.column.id === 'status',
                    'input-column': ['debit', 'credit'].includes(cell.column.id),
                    'grouped-cell': cell.getIsGrouped(),
                } }, h("div", { class: { 'd-flex align-items-center': true } }, index === 0 && (h("wa-button", { onClick: () => (this.isActive = !this.isActive), size: "small", appearance: "plain" }, h("wa-icon", { name: this.isActive ? 'chevron-up' : 'chevron-down' }))), this.renderCell(cell)))))),
            ...(this.isActive
                ? [
                    h("tr", null, this.row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: {
                            'text-right': ['debit', 'credit', 'balance'].includes(cell.column.id),
                            'text-center': cell.column.id === 'actions',
                            'sticky-column': cell.column.id === 'status',
                            'input-column': ['debit', 'credit'].includes(cell.column.id),
                            'grouped-cell': cell.getIsGrouped(),
                        } }, "ACM2 ", this.renderCell(cell))))),
                    h("tr", null, this.row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: {
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
    static get style() { return IrCollapsableRowStyle0; }
}, [2, "ir-collapsable-row", {
        "row": [16],
        "isActive": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-collapsable-row"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-collapsable-row":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCollapsableRow$1);
            }
            break;
    } });
}

const IrCollapsableRow = IrCollapsableRow$1;
const defineCustomElement = defineCustomElement$1;

export { IrCollapsableRow, defineCustomElement };

//# sourceMappingURL=ir-collapsable-row.js.map