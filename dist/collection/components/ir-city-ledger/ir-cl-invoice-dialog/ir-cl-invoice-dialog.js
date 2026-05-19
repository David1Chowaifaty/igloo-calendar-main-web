import { Host, h } from "@stencil/core";
import { CityLedgerService } from "../../../services/city-ledger/index";
import calendar_data from "../../../stores/calendar-data";
import { FdTypes, InOut } from "../../../types/enums";
export class IrClInvoiceDialog {
    agentId = null;
    mode = 'default';
    bookingNbr = null;
    startDate = null;
    endDate = null;
    currencyId = null;
    rooms = [];
    isLoading = false;
    error = null;
    noResults = false;
    isProforma = false;
    get allRoomsCheckedOut() {
        if (this.mode !== 'booking' || !this.rooms.length)
            return true;
        return this.rooms.every(r => r.in_out?.code === InOut.CheckedOut);
    }
    invoiceIssued;
    clFiscalDocumentPreview;
    dialogRef;
    formRef;
    cityLedgerService = new CityLedgerService();
    async openModal() {
        this.error = null;
        this.noResults = false;
        this.isProforma = !this.allRoomsCheckedOut;
        this.dialogRef.openModal();
    }
    async closeModal() {
        this.dialogRef.closeModal();
    }
    async handleSubmit() {
        this.isLoading = true;
        this.error = null;
        this.noResults = false;
        try {
            if (this.isProforma) {
                await this.handleProforma();
                return;
            }
            if (this.mode === 'booking') {
                const result = await this.cityLedgerService.issueFiscalDocument({
                    AGENCY_ID: this.agentId,
                    CURRENCY_ID: this.currencyId,
                    START_DATE: this.startDate,
                    END_DATE: this.endDate,
                    BOOKING_NBR: this.bookingNbr,
                    FD_TYPE_CODE: FdTypes.Draft,
                });
                const doc = result;
                this.clFiscalDocumentPreview.emit({
                    fdTypeCode: doc.FD_TYPE_CODE,
                    documentNumber: doc.DOC_NUMBER,
                    agentId: doc.AGENCY_ID ?? this.agentId,
                    agentName: doc.AGENCY_NAME,
                    fdId: doc.FD_ID,
                    externalRef: doc.EXTERNAL_REF,
                });
                this.invoiceIssued.emit(result);
                this.dialogRef.closeModal();
            }
            else {
                const isValid = await this.formRef.validate();
                if (!isValid) {
                    this.isLoading = false;
                    return;
                }
                const { fromDate, toDate, is_checked_out_only } = await this.formRef.getValues();
                const clResult = await this.cityLedgerService.fetchCL({
                    AGENCY_ID: this.agentId,
                    START_DATE: fromDate,
                    END_DATE: toDate,
                    START_ROW: 1,
                    END_ROW: 999999,
                    IS_CHECKED_OUT_ONLY: is_checked_out_only,
                    IS_HOLD: false,
                    IS_LOCKED: false,
                });
                // const targetCategories = ['ACM', 'TRF', 'GEN'];
                // const listClTxIds = [...new Set(clResult.My_Cl_tx.filter(tx => targetCategories.includes(tx.CATEGORY) && !tx.DOC_NUMBER).map(tx => tx.CL_TX_ID))];
                if (!clResult.My_Cl_tx?.length) {
                    this.noResults = true;
                    return;
                }
                const listClTxIds = [...new Set(clResult.My_Cl_tx.map(tx => tx.CL_TX_ID))];
                const result = await this.cityLedgerService.issueFiscalDocument({
                    AGENCY_ID: this.agentId,
                    CURRENCY_ID: calendar_data?.property?.currency?.id,
                    START_DATE: fromDate,
                    END_DATE: toDate,
                    LIST_CL_TX_ID: listClTxIds,
                    FD_TYPE_CODE: FdTypes.Draft,
                });
                const doc = result;
                this.clFiscalDocumentPreview.emit({
                    fdTypeCode: doc.FD_TYPE_CODE,
                    documentNumber: doc.DOC_NUMBER,
                    agentId: doc.AGENCY_ID ?? this.agentId,
                    agentName: doc.AGENCY_NAME,
                    fdId: doc.FD_ID,
                    externalRef: doc.EXTERNAL_REF,
                });
                this.invoiceIssued.emit(doc);
                this.dialogRef.closeModal();
            }
        }
        catch (err) {
            this.error = err instanceof Error ? err.message : 'Failed to issue invoice.';
        }
        finally {
            this.isLoading = false;
        }
    }
    async handleProforma() {
        try {
            let fromDate;
            let toDate;
            let bookingNbr = null;
            if (this.mode === 'booking') {
                fromDate = this.startDate;
                toDate = this.endDate;
                bookingNbr = this.bookingNbr != null ? String(this.bookingNbr) : null;
            }
            else {
                const isValid = await this.formRef.validate();
                if (!isValid) {
                    this.isLoading = false;
                    return;
                }
                const values = await this.formRef.getValues();
                fromDate = values.fromDate;
                toDate = values.toDate;
            }
            const url = await this.cityLedgerService.printClProforma({
                agency_id: String(this.agentId),
                from_date: fromDate,
                to_date: toDate,
                booking_nbr: bookingNbr,
            });
            if (url) {
                this.clFiscalDocumentPreview.emit({
                    fdTypeCode: FdTypes.Proforma,
                    documentNumber: '',
                    agentId: this.agentId,
                    agentName: '',
                    externalRef: '',
                    url,
                });
            }
            this.dialogRef.closeModal();
        }
        catch (err) {
            this.error = err instanceof Error ? err.message : 'Failed to generate pro forma.';
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        return (h(Host, { key: '45b7c7ac2f166f937ed0d82c7ed0868b59a7c19e' }, h("ir-dialog", { key: '7c3344196904950e3df17e1a759c00cb01e037d6', label: "Create Invoice", ref: el => (this.dialogRef = el) }, h("div", { key: '2d690f5c82a5d30e6f9c0db6da005aa2a76b1dc6', slot: "header-actions", class: 'cl-invoice-dialog__header-actions' }, h("wa-switch", { key: 'd8833da2ef1fc90f6162207a7b9e4b8c29f5003d', checked: this.isProforma, disabled: this.mode === 'booking' && !this.allRoomsCheckedOut, onchange: e => (this.isProforma = e.target.checked) }, "Pro forma")), h("div", { key: 'a7dce14b6d03353cd1080707c73bcffa0fa20426', class: "create-invoice-dialog__body" }, this.mode === 'booking' ? (h("p", { class: "create-invoice-dialog__message" }, this.isProforma ? `Generate a pro forma for Booking #${this.bookingNbr}?` : `Issue a draft invoice for Booking #${this.bookingNbr} to the agent?`)) : (h("ir-cl-invoice-form", { ref: el => (this.formRef = el) })), this.noResults && (h("wa-callout", { key: 'ca06ffc2d47cc2a3a5e29a787672678e9c2c4ff7', variant: "warning", class: "create-invoice-dialog__no-results" }, h("wa-icon", { key: '81348468cf0e2d08950fc890d2f3dcdc240930ee', slot: "icon", name: "triangle-exclamation" }), "No transactions found for the selected period and filters.")), this.error && h("p", { key: 'a8a74413dbf4cfce784f28a1bc739e98dd2be26c', class: "create-invoice-dialog__error" }, this.error)), h("div", { key: '1ae61f00e0f9cf08179ec721baaeffebf4bffefd', slot: "footer", class: "create-invoice-dialog__footer" }, h("ir-custom-button", { key: 'b3eb1aa538c3680cab0c520135c6f1cdae896429', size: "medium", appearance: "filled", variant: "neutral", "data-dialog": "close", disabled: this.isLoading }, "Cancel"), h("ir-custom-button", { key: 'f6ead00865449aed997aa1355341cfebf507c78f', size: "medium", appearance: "accent", variant: "brand", loading: this.isLoading, onClickHandler: () => this.handleSubmit() }, this.isProforma ? 'Confirm' : 'Show draft')))));
    }
    static get is() { return "ir-cl-invoice-dialog"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-cl-invoice-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-cl-invoice-dialog.css"]
        };
    }
    static get properties() {
        return {
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
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'booking' | 'default'",
                    "resolved": "\"booking\" | \"default\"",
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
                "attribute": "mode",
                "reflect": false,
                "defaultValue": "'default'"
            },
            "bookingNbr": {
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
                "attribute": "booking-nbr",
                "reflect": false,
                "defaultValue": "null"
            },
            "startDate": {
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
                "attribute": "start-date",
                "reflect": false,
                "defaultValue": "null"
            },
            "endDate": {
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
                "attribute": "end-date",
                "reflect": false,
                "defaultValue": "null"
            },
            "currencyId": {
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
                "attribute": "currency-id",
                "reflect": false,
                "defaultValue": "null"
            },
            "rooms": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Room[]",
                    "resolved": "Room[]",
                    "references": {
                        "Room": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Room"
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
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "error": {},
            "noResults": {},
            "isProforma": {}
        };
    }
    static get events() {
        return [{
                "method": "invoiceIssued",
                "name": "invoiceIssued",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "FiscalDocument",
                    "resolved": "{ FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; AGENCY_ID?: number; CURRENCY_ID?: number; AGENCY_NAME?: string; CREDIT?: number; CREDIT_DISPLAY?: string; CURRENCY_CODE?: string; DEBIT?: number; DEBIT_DISPLAY?: string; DOC_NUMBER?: string; EXTERNAL_REF?: string; FD_ID?: number; FD_STATUS_CODE?: string; FD_STATUS_NAME?: string; FD_TYPE_CODE?: string; FD_TYPE_NAME?: string; ISSUE_DATE?: string; ISSUE_DATE_DISPLAY?: string; IS_PRINTED?: boolean; NET_AMOUNT?: number; NET_AMOUNT_DISPLAY?: string; TAX_AMOUNT?: number; TAX_AMOUNT_DISPLAY?: string; TOTAL_AMOUNT?: number; BALANCE_BEFORE_TX?: number; BALANCE_AFTER_TX?: number; }",
                    "references": {
                        "FiscalDocument": {
                            "location": "import",
                            "path": "@/services/city-ledger",
                            "id": "src/services/city-ledger/index.ts::FiscalDocument"
                        }
                    }
                }
            }, {
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
                            "path": "../ir-city-ledger-fiscal-documents/ir-cl-fiscal-document-preview/types",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-fiscal-documents/ir-cl-fiscal-document-preview/types.ts::ClFiscalDocumentPreviewRequest"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "openModal": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "closeModal": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
}
//# sourceMappingURL=ir-cl-invoice-dialog.js.map
