import { formatAmount } from "../../../../utils/utils";
import { flexRender, useTable } from "../../../../utils/useTable";
import { Host, h } from "@stencil/core";
import { createColumnHelper, getCoreRowModel, getSortedRowModel } from "@tanstack/table-core";
import { CityLedgerService, FD_TYPES } from "../../../../services/city-ledger";
export class IrCityLedgerFiscalDocumentsTable {
    rows = [];
    currencySymbol = '$';
    currencies = [];
    taxableOnly = false;
    isLoading = false;
    hasDates = false;
    ticket;
    propertyId;
    agentId = null;
    fromDate = null;
    toDate = null;
    previewRow = null;
    columnHelper = createColumnHelper();
    cityLedgerService = new CityLedgerService();
    previewDialogRef;
    getStatusVariant(code) {
        const map = {
            PAID: 'success',
            ISSUED: 'brand',
            SENT: 'brand',
            DRAFT: 'neutral',
            PARTIAL: 'warning',
            VOID: 'danger',
        };
        return map[code?.toUpperCase()] ?? 'neutral';
    }
    handleAction(action, row) {
        switch (action) {
            case 'view':
                console.log('view', row);
                break;
            case 'print':
                console.log('print', row);
                break;
            case 'download':
                console.log('download', row);
                break;
            case 'send-reminder':
                console.log('send-reminder', row);
                break;
            case 'apply-payment':
                console.log('apply-payment', row);
                break;
            case 'mark-paid':
                console.log('mark-paid', row);
                break;
            case 'void':
                console.log('void', row);
                this.cityLedgerService.voidInvoiceByCreditNote({
                    FD_ID: row.FD_ID,
                });
                break;
            case 'delete-draft':
                this.cityLedgerService.deleteDraftFiscalDocument({
                    FD_ID: row.FD_ID,
                });
                break;
            case 'preview':
                this.previewRow = row;
                this.previewDialogRef?.openDialog();
                break;
            case 'convert-to-invoice':
                console.log('convert-to-invoice', row);
                break;
        }
    }
    get columns() {
        const base = [
            this.columnHelper.accessor('FD_STATUS_CODE', {
                header: 'Status',
                cell: info => (h("wa-tag", { class: "fiscal-table__status-tag", variant: this.getStatusVariant(info.getValue()), size: "small" }, info.row.original.FD_STATUS_NAME ?? info.getValue())),
            }),
            this.columnHelper.accessor('ISSUE_DATE_DISPLAY', {
                header: 'Date',
                cell: info => info.getValue(),
            }),
            this.columnHelper.accessor('DOC_NUMBER', {
                header: 'Doc Number',
                cell: info => h("span", { class: "fiscal-table__doc-number" }, info.getValue()),
            }),
            this.columnHelper.accessor('FD_TYPE_NAME', {
                id: 'type',
                header: 'Type',
                cell: info => info.getValue(),
            }),
        ];
        const amountCols = this.taxableOnly
            ? [
                this.columnHelper.accessor('NET_AMOUNT', {
                    header: 'Net Amount',
                    cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
                }),
                this.columnHelper.accessor('TAX_AMOUNT', {
                    header: 'Taxes',
                    cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
                }),
            ]
            : [
                this.columnHelper.accessor('TOTAL_AMOUNT', {
                    id: 'amount',
                    header: 'Amount (incl. taxes)',
                    cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
                }),
            ];
        return [
            ...base,
            ...amountCols,
            this.columnHelper.accessor('DEBIT', {
                header: 'Debit',
                cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
            }),
            this.columnHelper.accessor('CREDIT', {
                header: 'Credit',
                cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
            }),
            this.columnHelper.display({
                id: 'actions',
                header: 'Actions',
                cell: info => {
                    const row = info.row.original;
                    const isDraft = row.FD_TYPE_CODE === FD_TYPES.Draft;
                    const isPaid = row.FD_STATUS_CODE === 'INV';
                    const isInvoice = row.FD_TYPE_CODE === FD_TYPES.Invoice;
                    return (h("wa-dropdown", { "onwa-select": (e) => {
                            this.handleAction(e.detail.item.value, row);
                        } }, h("wa-button", { slot: "trigger", size: "small", variant: "neutral", appearance: "plain", class: "fiscal-table__action-trigger" }, h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1.2rem' } })), isDraft
                        ? [
                            h("wa-dropdown-item", { value: "preview" }, "Preview"),
                            h("wa-dropdown-item", { value: "convert-to-invoice" }, "Convert to Invoice"),
                            h("wa-dropdown-item", { value: "delete-draft", variant: "danger" }, "Delete"),
                        ]
                        : [
                            h("wa-dropdown-item", { value: "view" }, "View Document"),
                            h("wa-dropdown-item", { value: "print" }, "Print"),
                            h("wa-dropdown-item", { value: "download" }, "Download PDF"),
                            (!isPaid || !isInvoice) && h("wa-divider", null),
                            !isPaid && h("wa-dropdown-item", { value: "send-reminder" }, "Send Reminder"),
                            !isPaid && isInvoice && h("wa-dropdown-item", { value: "apply-payment" }, "Apply Payment"),
                            !isPaid && h("wa-dropdown-item", { value: "mark-paid" }, "Mark as Paid"),
                            h("wa-divider", null),
                            h("wa-dropdown-item", { value: "void" }, h("span", { class: "fiscal-table__action-danger" }, "Void")),
                        ]));
                },
                enableSorting: false,
            }),
        ];
    }
    getSymbol(currencyId) {
        const match = this.currencies.find(c => c.id === currencyId);
        return match?.symbol ?? this.currencySymbol;
    }
    renderMoney(value, currencyId) {
        if (!value)
            return h("span", { class: "fiscal-table__cell--zero" }, "\u2014");
        return h("span", null, formatAmount(this.getSymbol(currencyId), value));
    }
    render() {
        const table = useTable({
            data: this.rows,
            columns: this.columns,
            getCoreRowModel: getCoreRowModel(),
            getSortedRowModel: getSortedRowModel(),
        });
        return (h(Host, { key: '04ffbd9d2263d272d9b103a40dc73099c537321b' }, h("ir-preview-screen-dialog", { key: '708556d02eed7bd2709e19fb089ba2a6895532f9', ref: el => (this.previewDialogRef = el), label: this.previewRow ? `Invoice Preview — ${this.previewRow.DOC_NUMBER}` : 'Invoice Preview', action: "print", onOpenChanged: e => {
                if (!e.detail)
                    this.previewRow = null;
            } }, this.previewRow && (h("ir-cl-invoice-preview", { key: 'c5fe3093c997b3e44025c00b8536f7d17e54d4ca', ticket: this.ticket, propertyId: this.propertyId, agentId: this.agentId, agentName: this.previewRow.AGENCY_NAME, documentNumber: this.previewRow.DOC_NUMBER, fromDate: this.fromDate, toDate: this.toDate }))), h("div", { key: '5ee22340ca73e234a58f396e2031589c47c0c7c0', class: "table--container" }, h("table", { key: '735cd6bf2017b38091972ef84760d2989c945807', class: "table data-table" }, h("thead", { key: 'd174cb1df7ab625eaae32206df176a9ad674988f' }, table.getHeaderGroups().map(headerGroup => (h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (h("th", { key: header.id, class: {
                'fiscal-table__heading--numeric': ['NET_AMOUNT', 'TAX_AMOUNT', 'amount', 'DEBIT', 'CREDIT'].includes(header.column.id),
                'fiscal-table__heading--actions': header.column.id === 'actions',
            } }, flexRender(header.column.columnDef.header, header.getContext())))))))), h("tbody", { key: 'b029bc73a95cb40a35c2ab955330f63c9a3d4569' }, table.getRowModel().rows.map(row => (h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: {
                'fiscal-table__cell': true,
                'fiscal-table__cell--numeric': ['NET_AMOUNT', 'TAX_AMOUNT', 'amount', 'DEBIT', 'CREDIT'].includes(cell.column.id),
                'fiscal-table__cell--actions': cell.column.id === 'actions',
            } }, flexRender(cell.column.columnDef.cell, cell.getContext()))))))), table.getRowModel().rows.length === 0 && (h("tr", { key: '13720d34a70a7ef651d67728db67286f1fb3ecf6' }, h("td", { key: '01e77ab7f9592fd66f39514f68e5c175e2bc8440', class: "empty-row", colSpan: this.columns.length }, this.isLoading ? (h("ir-spinner", null)) : this.hasDates ? ('No fiscal documents match the current filters.') : ('Please select a From and To date to view fiscal documents.')))))))));
    }
    static get is() { return "ir-city-ledger-fiscal-documents-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-city-ledger-fiscal-documents-table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-city-ledger-fiscal-documents-table.css"]
        };
    }
    static get properties() {
        return {
            "rows": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "FiscalDocument[]",
                    "resolved": "FiscalDocument[]",
                    "references": {
                        "FiscalDocument": {
                            "location": "import",
                            "path": "../../../../services/city-ledger",
                            "id": "src/services/city-ledger/index.ts::FiscalDocument"
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
            "taxableOnly": {
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
                "attribute": "taxable-only",
                "reflect": false,
                "defaultValue": "false"
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
            "hasDates": {
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
                "attribute": "has-dates",
                "reflect": false,
                "defaultValue": "false"
            },
            "ticket": {
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
                "attribute": "ticket",
                "reflect": false
            },
            "propertyId": {
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
                "attribute": "property-id",
                "reflect": false
            },
            "agentId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number | null",
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
                "attribute": "agent-id",
                "reflect": false,
                "defaultValue": "null"
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
    static get states() {
        return {
            "previewRow": {}
        };
    }
}
//# sourceMappingURL=ir-city-ledger-fiscal-documents-table.js.map
