import { Host, h } from "@stencil/core";
import { createColumnHelper, getCoreRowModel, getSortedRowModel } from "@tanstack/table-core";
import { flexRender, useTable } from "../../../../utils/useTable";
import { formatAmount } from "../../../../utils/utils";
import moment from "moment";
const NUMERIC_COLS = new Set(['debit', 'credit', 'balance']);
const DATE_INPUT_FORMAT = 'YYYY-MM-DD';
const DATE_DISPLAY_FORMAT = 'MMM DD, YYYY';
export class IrCityLedgerStatementsTable {
    rows = [];
    startingBalance = 0;
    endingBalance = 0;
    currencySymbol = '$';
    currencies = [];
    isLoading = false;
    hasFetched = false;
    fromDate = null;
    toDate = null;
    columnHelper = createColumnHelper();
    formatDate(date) {
        if (!date)
            return '';
        const m = moment(date, [DATE_INPUT_FORMAT, moment.ISO_8601], true);
        return m.isValid() ? m.format(DATE_DISPLAY_FORMAT) : date;
    }
    getSymbol(row) {
        const match = this.currencies.find(c => c.id === row._raw?.CURRENCY_ID);
        return match?.symbol ?? this.currencySymbol;
    }
    renderMoney(value, row) {
        if (!value)
            return h("span", { class: "stmt-table__cell--zero" }, "\u2014");
        return h("span", null, formatAmount(this.getSymbol(row), value));
    }
    get columns() {
        return [
            this.columnHelper.accessor('serviceDate', {
                header: 'Date',
                cell: info => this.formatDate(info.getValue()),
            }),
            this.columnHelper.accessor('docNumber', {
                header: 'Doc Number',
                cell: info => h("span", { class: "stmt-table__doc-number" }, info.getValue() ?? '—'),
            }),
            this.columnHelper.accessor('type', {
                header: 'Type',
                cell: info => info.getValue() ?? '—',
            }),
            this.columnHelper.accessor('debit', {
                header: 'Debit',
                cell: info => this.renderMoney(info.getValue(), info.row.original),
            }),
            this.columnHelper.accessor('credit', {
                header: 'Credit',
                cell: info => this.renderMoney(info.getValue(), info.row.original),
            }),
            this.columnHelper.accessor('balance', {
                header: 'Balance',
                cell: info => this.renderMoney(info.getValue(), info.row.original),
            }),
        ];
    }
    renderStartingBalanceRow() {
        const bal = this.startingBalance;
        return (h("tr", { class: "ir-table-row balance-row balance-row--start" }, h("td", null, this.formatDate(this.fromDate)), h("td", null), h("td", { class: "balance-row__label" }, h("wa-icon", { name: "scale-balanced", style: { marginRight: '0.375rem', fontSize: '0.875rem' } }), "Starting Balance"), h("td", { class: "cell--align-end" }, bal >= 0 ? formatAmount(this.currencySymbol, bal) : ''), h("td", { class: "cell--align-end" }, bal < 0 ? formatAmount(this.currencySymbol, bal) : ''), h("td", { class: "cell--align-end" }, formatAmount(this.currencySymbol, bal))));
    }
    renderEndingBalanceRow() {
        const bal = this.endingBalance;
        return (h("tr", { class: "ir-table-row balance-row balance-row--end" }, h("td", null, this.formatDate(this.toDate)), h("td", null), h("td", { class: "balance-row__label" }, h("wa-icon", { name: "scale-balanced", style: { marginRight: '0.375rem', fontSize: '0.875rem' } }), "Ending Balance"), h("td", { class: "cell--align-end" }, bal >= 0 ? formatAmount(this.currencySymbol, Math.abs(bal)) : ''), h("td", { class: "cell--align-end" }, bal < 0 ? formatAmount(this.currencySymbol, Math.abs(bal)) : ''), h("td", { class: "cell--align-end" }, h("strong", null, bal < 0 ? '-' : '', formatAmount(this.currencySymbol, Math.abs(bal))))));
    }
    render() {
        if (!this.hasFetched) {
            return (h(Host, null, h("div", { class: "stmt-table__date-prompt" }, h("div", { class: "stmt-table__date-prompt-icon" }, h("wa-icon", { name: "calendar-days" })), h("p", { class: "stmt-table__date-prompt-title" }, "Select a date range and click \"Create Statement\""))));
        }
        if (this.isLoading) {
            return (h(Host, null, h("div", { class: "stmt-table__loading" }, h("ir-spinner", null))));
        }
        const table = useTable({
            data: this.rows,
            columns: this.columns,
            getCoreRowModel: getCoreRowModel(),
            getSortedRowModel: getSortedRowModel(),
        });
        const colCount = this.columns.length;
        return (h(Host, null, h("div", { class: "table--container" }, h("table", { class: "table data-table" }, h("thead", null, table.getHeaderGroups().map(headerGroup => (h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (h("th", { key: header.id, class: { 'cell--align-end': NUMERIC_COLS.has(header.column.id) } }, flexRender(header.column.columnDef.header, header.getContext())))))))), h("tbody", null, this.renderStartingBalanceRow(), table.getRowModel().rows.length === 0 ? (h("tr", null, h("td", { class: "empty-row", colSpan: colCount }, "No transactions in this period."))) : (table.getRowModel().rows.map(row => (h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: {
                'stmt-table__cell': true,
                'cell--align-end': NUMERIC_COLS.has(cell.column.id),
            } }, flexRender(cell.column.columnDef.cell, cell.getContext())))))))), this.renderEndingBalanceRow())))));
    }
    static get is() { return "ir-city-ledger-statements-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-city-ledger-statements-table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-city-ledger-statements-table.css"]
        };
    }
    static get properties() {
        return {
            "rows": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "FolioRow[]",
                    "resolved": "FolioRow[]",
                    "references": {
                        "FolioRow": {
                            "location": "import",
                            "path": "@/components/ir-city-ledger/ir-city-ledger-folio/types",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/types.ts::FolioRow"
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
                "setter": false,
                "defaultValue": "[]"
            },
            "startingBalance": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "starting-balance",
                "reflect": false,
                "defaultValue": "0"
            },
            "endingBalance": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "ending-balance",
                "reflect": false,
                "defaultValue": "0"
            },
            "currencySymbol": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "currency-symbol",
                "reflect": false,
                "defaultValue": "'$'"
            },
            "currencies": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICurrency[]",
                    "resolved": "ICurrency[]",
                    "references": {
                        "ICurrency": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::ICurrency"
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
                "setter": false,
                "defaultValue": "[]"
            },
            "isLoading": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "is-loading",
                "reflect": false,
                "defaultValue": "false"
            },
            "hasFetched": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "has-fetched",
                "reflect": false,
                "defaultValue": "false"
            },
            "fromDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | null",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "from-date",
                "reflect": false,
                "defaultValue": "null"
            },
            "toDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | null",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "to-date",
                "reflect": false,
                "defaultValue": "null"
            }
        };
    }
}
//# sourceMappingURL=ir-city-ledger-statements-table.js.map
