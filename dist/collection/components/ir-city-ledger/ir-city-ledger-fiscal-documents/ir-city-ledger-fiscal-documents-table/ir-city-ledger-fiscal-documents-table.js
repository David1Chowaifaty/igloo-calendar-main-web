import { formatAmount } from "../../../../utils/utils";
import { flexRender, useTable } from "../../../../utils/useTable";
import { Host, h } from "@stencil/core";
import { createColumnHelper, getCoreRowModel, getSortedRowModel } from "@tanstack/table-core";
import { CityLedgerService } from "../../../../services/city-ledger";
import { FdStatus, FdTypes } from "../../../../types/enums";
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
    hasFetched = false;
    clFiscalDocumentPreview;
    fetchRequested;
    pendingAction = null;
    isConfirming = false;
    columnHelper = createColumnHelper();
    cityLedgerService = new CityLedgerService();
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
        console.log('here', action);
        switch (action) {
            case 'view':
            case 'preview':
                this.clFiscalDocumentPreview.emit({
                    fdTypeCode: row.FD_TYPE_CODE,
                    documentNumber: row.DOC_NUMBER,
                    agentId: this.agentId,
                    agentName: row.AGENCY_NAME,
                    fdId: row.FD_ID,
                    externalRef: row.EXTERNAL_REF,
                    fromDate: row.FD_TYPE_CODE === FdTypes.Proforma ? row.FROM_DATE : this.fromDate,
                    toDate: row.FD_TYPE_CODE === FdTypes.Proforma ? row.TO_DATE : this.toDate,
                    bookingNbr: row.FD_TYPE_CODE === FdTypes.Proforma ? row.BOOK_NBR : null,
                });
                break;
            case 'print':
                this.clFiscalDocumentPreview.emit({
                    fdTypeCode: row.FD_TYPE_CODE,
                    documentNumber: row.DOC_NUMBER,
                    agentId: this.agentId,
                    agentName: row.AGENCY_NAME,
                    fdId: row.FD_ID,
                    autoPrint: true,
                    externalRef: row.EXTERNAL_REF,
                    fromDate: row.FD_TYPE_CODE === FdTypes.Proforma ? row.FROM_DATE : this.fromDate,
                    toDate: row.FD_TYPE_CODE === FdTypes.Proforma ? row.TO_DATE : this.toDate,
                    bookingNbr: row.FD_TYPE_CODE === FdTypes.Proforma ? row.BOOK_NBR : null,
                });
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
            case 'delete-draft':
            case 'convert-to-invoice':
                this.pendingAction = { action: action, row };
                break;
        }
    }
    async confirmPendingAction() {
        if (!this.pendingAction)
            return;
        const { action, row } = this.pendingAction;
        this.isConfirming = true;
        try {
            if (action === 'void') {
                await this.cityLedgerService.voidInvoiceByCreditNote({ FD_ID: row.FD_ID });
            }
            else if (action === 'delete-draft') {
                await this.cityLedgerService.deleteDraftFiscalDocument({ FD_ID: row.FD_ID });
            }
            else if (action === 'convert-to-invoice') {
                await this.cityLedgerService.issueInvoiceFromDraft({ FD_ID: row.FD_ID });
            }
            this.fetchRequested.emit();
        }
        finally {
            this.isConfirming = false;
            this.pendingAction = null;
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
                    const isDraft = row.FD_TYPE_CODE === FdTypes.Draft;
                    // const isPaid = row.FD_STATUS_CODE === 'INV';
                    const isInvoice = row.FD_TYPE_CODE === FdTypes.Invoice;
                    return (h("wa-dropdown", { "onwa-hide": e => {
                            e.stopImmediatePropagation();
                            e.stopPropagation();
                        }, "onwa-select": (e) => {
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
                            // <wa-dropdown-item value="download">Download PDF</wa-dropdown-item>,
                            // (!isPaid || !isInvoice) && <wa-divider></wa-divider>,
                            // !isPaid && <wa-dropdown-item value="send-reminder">Send Reminder</wa-dropdown-item>,
                            // !isPaid && isInvoice && <wa-dropdown-item value="apply-payment">Apply Payment</wa-dropdown-item>,
                            // !isPaid && <wa-dropdown-item value="mark-paid">Mark as Paid</wa-dropdown-item>,
                            // <wa-divider></wa-divider>,
                            isInvoice && info.row.original.FD_STATUS_CODE !== FdStatus.Voided && (h("wa-dropdown-item", { value: "void" }, h("span", { class: "fiscal-table__action-danger" }, "Void with credit note"))),
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
        if (!this.hasFetched) {
            const hasDate = !!(this.fromDate || this.toDate);
            return (h(Host, null, h("div", { class: "fiscal-table__date-prompt" }, h("div", { class: "fiscal-table__date-prompt-icon" }, h("wa-icon", { name: "calendar-days" })), h("p", { class: "fiscal-table__date-prompt-title" }, "Select a date range to get started"), hasDate && (h("wa-animation", { iterations: 1, play: true, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { size: "small", variant: "brand", onClickHandler: () => this.fetchRequested.emit() }, h("wa-icon", { slot: "start", name: "magnifying-glass" }), "Load Documents"))))));
        }
        const table = useTable({
            data: this.rows,
            columns: this.columns,
            getCoreRowModel: getCoreRowModel(),
            getSortedRowModel: getSortedRowModel(),
        });
        return (h(Host, null, h("div", { class: "table--container" }, h("table", { class: "table data-table" }, h("thead", null, table.getHeaderGroups().map(headerGroup => (h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (h("th", { key: header.id, class: {
                'fiscal-table__heading--numeric': ['NET_AMOUNT', 'TAX_AMOUNT', 'amount', 'DEBIT', 'CREDIT'].includes(header.column.id),
                'fiscal-table__heading--actions': header.column.id === 'actions',
            } }, flexRender(header.column.columnDef.header, header.getContext())))))))), h("tbody", null, table.getRowModel().rows.map(row => (h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: {
                'fiscal-table__cell': true,
                'fiscal-table__cell--numeric': ['NET_AMOUNT', 'TAX_AMOUNT', 'amount', 'DEBIT', 'CREDIT'].includes(cell.column.id),
                'fiscal-table__cell--actions': cell.column.id === 'actions',
            } }, flexRender(cell.column.columnDef.cell, cell.getContext()))))))), table.getRowModel().rows.length === 0 && (h("tr", null, h("td", { class: "empty-row", colSpan: this.columns.length }, this.isLoading ? h("ir-spinner", null) : 'No fiscal documents match the current filters.')))))), h("ir-fd-confirm-dialog", { open: this.pendingAction !== null, action: this.pendingAction?.action ?? null, docNumber: this.pendingAction?.row.DOC_NUMBER ?? 'this document', isConfirming: this.isConfirming, onConfirmed: () => this.confirmPendingAction(), onCancelled: () => (this.pendingAction = null) })));
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
                    "resolved": "{ FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; AGENCY_ID?: number; CURRENCY_ID?: number; AGENCY_NAME?: string; CREDIT?: number; CREDIT_DISPLAY?: string; CURRENCY_CODE?: string; DEBIT?: number; DEBIT_DISPLAY?: string; DOC_NUMBER?: string; EXTERNAL_REF?: string; FD_ID?: number; FD_STATUS_CODE?: string; FD_STATUS_NAME?: string; FD_TYPE_CODE?: string; FD_TYPE_NAME?: string; ISSUE_DATE?: string; ISSUE_DATE_DISPLAY?: string; IS_PRINTED?: boolean; NET_AMOUNT?: number; NET_AMOUNT_DISPLAY?: string; TAX_AMOUNT?: number; TAX_AMOUNT_DISPLAY?: string; TOTAL_AMOUNT?: number; BALANCE_BEFORE_TX?: number; BALANCE_AFTER_TX?: number; }[]",
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
            }
        };
    }
    static get states() {
        return {
            "pendingAction": {},
            "isConfirming": {}
        };
    }
    static get events() {
        return [{
                "method": "clFiscalDocumentPreview",
                "name": "clFiscalDocumentPreview",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "ClFiscalDocumentPreviewRequest",
                    "resolved": "ClFiscalDocumentPreviewRequest",
                    "references": {
                        "ClFiscalDocumentPreviewRequest": {
                            "location": "import",
                            "path": "../ir-cl-fiscal-document-preview/types",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-fiscal-documents/ir-cl-fiscal-document-preview/types.ts::ClFiscalDocumentPreviewRequest"
                        }
                    }
                }
            }, {
                "method": "fetchRequested",
                "name": "fetchRequested",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-city-ledger-fiscal-documents-table.js.map
