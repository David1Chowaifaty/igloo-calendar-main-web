import { formatAmount } from "../../../utils/utils";
import { flexRender, useTable } from "../../../utils/useTable";
import { Host, h } from "@stencil/core";
import { createColumnHelper, getCoreRowModel, getSortedRowModel } from "@tanstack/table-core";
import { CityLedgerService } from "../../../services/city-ledger/index";
import { FdStatus, FdTypes } from "../../../types/enums";
export class IrFiscalDocumentsTable {
    rows = [];
    currencySymbol = '$';
    currencies = [];
    taxableOnly = false;
    isLoading = false;
    hasDates = false;
    ticket;
    propertyId;
    fromDate = null;
    toDate = null;
    hasFetched = false;
    /** Folio scope driving which identity columns are shown. */
    folioType = 'all';
    /** Selected agent id (when a specific agent is chosen under the agent folio). */
    agentId = null;
    /** Selected guest id (when a specific guest is chosen under the guest folio). */
    guestId = null;
    clFiscalDocumentPreview;
    fetchRequested;
    pendingAction = null;
    isConfirming = false;
    columnHelper = createColumnHelper();
    cityLedgerService = new CityLedgerService();
    /**
     * A "specific party" is selected when the folio is scoped to a single agent or
     * guest. In that case the table collapses to the base city-ledger layout (no
     * identity / booking columns).
     */
    get isSpecificPartySelected() {
        return (this.folioType === 'agent' && !!this.agentId) || (this.folioType === 'guest' && !!this.guestId);
    }
    get showAgentName() {
        return !this.isSpecificPartySelected && this.folioType !== 'guest';
    }
    get showGuestName() {
        return !this.isSpecificPartySelected && this.folioType !== 'agent';
    }
    get showBookingNumber() {
        return !this.isSpecificPartySelected;
    }
    handleAction(action, row) {
        switch (action) {
            case 'view':
            case 'preview':
                this.clFiscalDocumentPreview.emit({
                    fdTypeCode: row.FD_TYPE_CODE,
                    documentNumber: row.DOC_NUMBER,
                    agentId: row.AGENCY_ID ?? this.agentId,
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
                    agentId: row.AGENCY_ID ?? this.agentId,
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
                switch (row.FD_TYPE_CODE) {
                    case FdTypes.Invoice:
                        await this.cityLedgerService.voidInvoiceByCreditNote({ FD_ID: row.FD_ID });
                        break;
                    case FdTypes.Receipt:
                        await this.cityLedgerService.voidReceiptByCreditReceipt({ FD_ID: row.FD_ID });
                        break;
                    default:
                        console.warn(row.FD_TYPE_CODE + ' not implemented');
                        break;
                }
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
                cell: info => h("ir-cl-status-tag", { transaction: info.row.original }),
            }),
            this.columnHelper.accessor('ISSUE_DATE_DISPLAY', {
                header: 'Date',
                cell: info => info.getValue(),
            }),
            this.columnHelper.accessor('DOC_NUMBER', {
                header: 'Doc Number',
                cell: info => (h("wa-button", { onClick: () => {
                        const row = info.row.original;
                        this.clFiscalDocumentPreview.emit({
                            fdTypeCode: row.FD_TYPE_CODE,
                            documentNumber: row.DOC_NUMBER,
                            agentId: row.AGENCY_ID ?? this.agentId,
                            agentName: row.AGENCY_NAME,
                            fdId: row.FD_ID,
                            externalRef: row.EXTERNAL_REF,
                            fromDate: row.FD_TYPE_CODE === FdTypes.Proforma ? row.FROM_DATE : this.fromDate,
                            toDate: row.FD_TYPE_CODE === FdTypes.Proforma ? row.TO_DATE : this.toDate,
                            bookingNbr: row.FD_TYPE_CODE === FdTypes.Proforma ? row.BOOK_NBR : null,
                        });
                    }, variant: "brand", appearance: "plain", class: "fiscal-table__doc-number" }, info.getValue() ?? '')),
            }),
            this.columnHelper.accessor('FD_TYPE_NAME', {
                id: 'type',
                header: 'Type',
                cell: info => (h("div", null, h("p", { class: "m-0 p-0" }, info.getValue()), info.row.original.EXTERNAL_REF && (h("p", { class: "fd_ss" }, [FdTypes.CreditNote, FdTypes.CreditReceipt].includes(info.row.original.FD_TYPE_CODE) ? 'for' : 'voided by', " ", info.row.original.EXTERNAL_REF)))),
            }),
        ];
        // Identity / booking columns — shown only while the folio is not scoped to a
        // single agent or guest (see the show* getters).
        const identityCols = [];
        if (this.showAgentName) {
            identityCols.push(this.columnHelper.accessor('AGENCY_NAME', {
                id: 'agentName',
                header: 'Agent',
                cell: info => h("span", null, info.getValue() ?? ''),
            }));
        }
        if (this.showGuestName) {
            identityCols.push(this.columnHelper.accessor('GUEST_NAME', {
                id: 'guestName',
                header: 'Guest',
                cell: info => h("span", null, info.getValue() ?? ''),
            }));
        }
        if (this.showBookingNumber) {
            identityCols.push(this.columnHelper.accessor('BOOK_NBR', {
                id: 'bookingNumber',
                header: 'Booking #',
                cell: info => h("span", null, info.getValue() ?? ''),
            }));
        }
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
            : [];
        return [
            ...base,
            ...identityCols,
            ...amountCols,
            this.columnHelper.accessor('DEBIT', {
                header: 'Debit',
                cell: info => (info.row.original.FD_TYPE_CODE === FdTypes.CreditReceipt ? '' : this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID)),
            }),
            this.columnHelper.accessor('CREDIT', {
                header: 'Credit',
                cell: info => this.renderMoney(info.row.original.FD_TYPE_CODE === FdTypes.CreditReceipt ? info.row.original.DEBIT : info.getValue(), info.row.original.CURRENCY_ID),
            }),
            this.columnHelper.display({
                id: 'actions',
                header: 'Actions',
                cell: info => {
                    const row = info.row.original;
                    const isDraft = row.FD_TYPE_CODE === FdTypes.Draft;
                    const isInvoice = row.FD_TYPE_CODE === FdTypes.Invoice;
                    const isReceipt = row.FD_TYPE_CODE === FdTypes.Receipt;
                    return (h("wa-dropdown", { "onwa-hide": e => {
                            e.stopImmediatePropagation();
                            e.stopPropagation();
                        }, "onwa-select": (e) => {
                            this.handleAction(e.detail.item.value, row);
                        } }, h("wa-button", { slot: "trigger", size: "small", variant: "neutral", appearance: "plain", class: "fiscal-table__action-trigger" }, h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1.2rem' } })), isDraft
                        ? [
                            h("wa-dropdown-item", { value: "preview" }, "Preview"),
                            h("wa-dropdown-item", { value: "convert-to-invoice" }, "Convert to invoice"),
                            h("wa-dropdown-item", { value: "delete-draft", variant: "danger" }, "Delete"),
                        ]
                        : [
                            h("wa-dropdown-item", { value: "view" }, "View document"),
                            h("wa-dropdown-item", { value: "print" }, "Print"),
                            isInvoice && info.row.original.FD_STATUS_CODE !== FdStatus.Voided && (h("wa-dropdown-item", { value: "void" }, h("span", { class: "fiscal-table__action-danger" }, "Void with credit note"))),
                            isReceipt && info.row.original.FD_STATUS_CODE !== FdStatus.Voided && (h("wa-dropdown-item", { value: "void" }, h("span", { class: "fiscal-table__action-danger" }, "Void with credit receipt"))),
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
            return h("span", { class: "fiscal-table__cell--zero" });
        return h("span", null, formatAmount(this.getSymbol(currencyId), value));
    }
    render() {
        if (!this.hasFetched) {
            const hasDate = !!(this.fromDate || this.toDate);
            return (h(Host, null, h("div", { class: "fiscal-table__date-prompt" }, h("div", { class: "fiscal-table__date-prompt-icon" }, h("wa-icon", { name: "calendar-days" })), h("p", { class: "fiscal-table__date-prompt-title" }, "Select a date range to get started"), hasDate && (h("wa-animation", { iterations: 1, play: true, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { size: "small", variant: "brand", onClickHandler: () => this.fetchRequested.emit() }, h("wa-icon", { slot: "start", name: "magnifying-glass" }), "Load Documents"))))));
        }
        const columns = this.columns;
        const table = useTable({
            data: this.rows,
            columns,
            getCoreRowModel: getCoreRowModel(),
            getSortedRowModel: getSortedRowModel(),
        });
        const numericColumnIds = ['NET_AMOUNT', 'TAX_AMOUNT', 'amount', 'DEBIT', 'CREDIT'];
        return (h(Host, null, h("div", { class: "table--container" }, h("table", { class: "table data-table" }, h("thead", null, table.getHeaderGroups().map(headerGroup => (h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (h("th", { key: header.id, class: {
                'fiscal-table__heading--numeric': numericColumnIds.includes(header.column.id),
                'fiscal-table__heading--actions': header.column.id === 'actions',
            } }, flexRender(header.column.columnDef.header, header.getContext())))))))), h("tbody", null, table.getRowModel().rows.map(row => (h("tr", { key: row.id, class: { 'ir-table-row': true, '--is-draft': row.original.FD_TYPE_CODE === FdTypes.Draft } }, row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: {
                'fiscal-table__cell': true,
                'fiscal-table__cell--numeric': numericColumnIds.includes(cell.column.id),
                'fiscal-table__cell--actions': cell.column.id === 'actions',
                'fiscal-table__cell--doc-number': cell.column.id === 'DOC_NUMBER',
            } }, flexRender(cell.column.columnDef.cell, cell.getContext()))))))), table.getRowModel().rows.length === 0 && (h("tr", null, h("td", { class: "empty-row", colSpan: columns.length }, this.isLoading ? h("ir-spinner", null) : 'No fiscal documents match the current filters.')))))), h("ir-fd-confirm-dialog", { open: this.pendingAction !== null, action: this.pendingAction?.action ?? null, docNumber: this.pendingAction?.row.DOC_NUMBER ?? 'this document', isConfirming: this.isConfirming, onConfirmed: () => this.confirmPendingAction(), onCancelled: () => (this.pendingAction = null) })));
    }
    static get is() { return "ir-fiscal-documents-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-fiscal-documents-table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-fiscal-documents-table.css"]
        };
    }
    static get properties() {
        return {
            "rows": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "FiscalDocumentRow[]",
                    "resolved": "FiscalDocumentRow[]",
                    "references": {
                        "FiscalDocumentRow": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-fiscal-documents/types.ts::FiscalDocumentRow"
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
            },
            "folioType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "FiscalFolioType",
                    "resolved": "\"agent\" | \"all\" | \"guest\"",
                    "references": {
                        "FiscalFolioType": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-fiscal-documents/types.ts::FiscalFolioType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Folio scope driving which identity columns are shown."
                },
                "getter": false,
                "setter": false,
                "attribute": "folio-type",
                "reflect": false,
                "defaultValue": "'all'"
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
                    "text": "Selected agent id (when a specific agent is chosen under the agent folio)."
                },
                "getter": false,
                "setter": false,
                "attribute": "agent-id",
                "reflect": false,
                "defaultValue": "null"
            },
            "guestId": {
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
                    "text": "Selected guest id (when a specific guest is chosen under the guest folio)."
                },
                "getter": false,
                "setter": false,
                "attribute": "guest-id",
                "reflect": false,
                "defaultValue": "null"
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
                            "path": "@components/ir-city-ledger/ir-city-ledger-fiscal-documents/ir-cl-fiscal-document-preview/types",
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
//# sourceMappingURL=ir-fiscal-documents-table.js.map
