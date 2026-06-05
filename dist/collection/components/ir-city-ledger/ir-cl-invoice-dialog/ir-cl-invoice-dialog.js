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
        return (h(Host, { key: 'b8b1bbbe7ff51d6c65377b3f1a9b81629e00614e' }, h("ir-dialog", { key: '32a5784202e08e32270acbbdb1e7f658eb6523f9', label: "Create Invoice", ref: el => (this.dialogRef = el) }, h("div", { key: 'ce83e7333edd347c63b7a8505b93c440b35006b1', slot: "header-actions", class: 'cl-invoice-dialog__header-actions' }, h("wa-switch", { key: '10add1e55fd4680d013f807a8db5965dfdeab085', checked: this.isProforma, disabled: this.mode === 'booking' && !this.allRoomsCheckedOut, onchange: e => (this.isProforma = e.target.checked) }, "Pro forma")), h("div", { key: 'a3ea60245c6318e3bd086c3c6b8e5f96abb4c616', class: "create-invoice-dialog__body" }, this.mode === 'booking' ? (h("p", { class: "create-invoice-dialog__message" }, this.isProforma ? `Generate a pro forma for Booking #${this.bookingNbr}?` : `Issue a draft invoice for Booking #${this.bookingNbr} to the agent?`)) : (h("ir-cl-invoice-form", { ref: el => (this.formRef = el) })), this.noResults && (h("wa-callout", { key: '76676cfa86a37f68c5577f0c8a91243f34597237', variant: "warning", class: "create-invoice-dialog__no-results" }, h("wa-icon", { key: '3e1a1f6d1b4a4c9764443b12c3aa20d40407c118', slot: "icon", name: "triangle-exclamation" }), "No transactions found for the selected period and filters.")), this.error && h("p", { key: '194d249c7f2c534db2ee0506a73eee6a2c31db76', class: "create-invoice-dialog__error" }, this.error)), h("div", { key: 'bc8380a30df3a79017dbca583ee42b017d58f887', slot: "footer", class: "create-invoice-dialog__footer" }, h("ir-custom-button", { key: '03f59a67f92a4110b87962a68e11b8302d45b5e0', size: "medium", appearance: "filled", variant: "neutral", "data-dialog": "close", disabled: this.isLoading }, "Cancel"), h("ir-custom-button", { key: 'd67c05d02ebfde2f679870b0fae9248efafcbd93', size: "medium", appearance: "accent", variant: "brand", loading: this.isLoading, onClickHandler: () => this.handleSubmit() }, this.isProforma ? 'Confirm' : 'Show draft')))));
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
