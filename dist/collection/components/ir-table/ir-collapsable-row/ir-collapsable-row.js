import { flexRender } from "../../../utils/useTable";
import { h } from "@stencil/core";
export class IrCollapsableRow {
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
    static get is() { return "ir-collapsable-row"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-collapsable-row.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-collapsable-row.css"]
        };
    }
    static get properties() {
        return {
            "row": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Row<any>",
                    "resolved": "Row<any>",
                    "references": {
                        "Row": {
                            "location": "import",
                            "path": "@tanstack/table-core",
                            "id": "node_modules::Row"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "isActive": {}
        };
    }
}
//# sourceMappingURL=ir-collapsable-row.js.map
