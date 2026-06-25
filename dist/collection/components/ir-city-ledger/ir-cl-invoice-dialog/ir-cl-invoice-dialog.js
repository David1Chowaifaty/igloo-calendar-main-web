import { Host, h } from "@stencil/core";
import { CityLedgerService } from "../../../services/city-ledger/index";
import calendar_data from "../../../stores/calendar-data";
import { ClTxTypeCode, FdTypes, InOut } from "../../../types/enums";
import moment from "moment";
export class IrClInvoiceDialog {
    agentId = null;
    mode = 'default';
    booking;
    startDate = null;
    endDate = null;
    currencyId = null;
    isLoading = false;
    error = null;
    noResults = false;
    isProforma = false;
    /**
     * Determines whether a final (non-proforma) invoice can be issued, based on
     * whether every room in the booking has effectively been checked out.
     *
     * Resolution order:
     * 1. When not in `booking` mode, or the booking has no rooms, there is nothing
     *    blocking a final invoice — returns `true`.
     * 2. When today is on or before the booking's to-date and at least one room is
     *    still checked in, the stay is ongoing — returns `false`.
     * 3. When today is exactly the booking's to-date and no room has been set
     *    (all rooms are `NotSet`), the invoice is allowed — returns `true`.
     * 4. Otherwise falls back to the default rule: `true` once today is past the
     *    booking's to-date, else `true` only when every room is checked out.
     *
     * @returns `true` when all rooms are considered checked out and a final invoice may be issued.
     */
    get allRoomsCheckedOut() {
        if (this.mode !== 'booking' || !this.booking.rooms.length)
            return true;
        const today = moment();
        const bookingToDate = moment(this.booking.to_date, 'YYYY-MM-DD');
        if (today.isSameOrBefore(bookingToDate, 'date') && this.booking.rooms.some(r => r.in_out?.code === InOut.CheckedIn))
            return false;
        if (today.isSame(bookingToDate, 'date') && this.booking.rooms.every(r => r.in_out?.code === InOut.NotSet))
            return true;
        if (today.isAfter(bookingToDate, 'date'))
            return true;
        return this.booking.rooms.every(r => r.in_out?.code === InOut.CheckedOut);
    }
    invoiceIssued;
    fiscalDocumentIssued;
    clFiscalDocumentPreview;
    dialogRef;
    formRef;
    invoicedClTxTypeCode = new Set([ClTxTypeCode.Adjustment, ClTxTypeCode.CancellationPenalty, ClTxTypeCode.Discount, ClTxTypeCode.StandardChargeDebit]);
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
                    BOOKING_NBR: this.booking?.booking_nbr,
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
                this.fiscalDocumentIssued.emit();
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
                const listClTxIds = [
                    ...new Set(clResult.My_Cl_tx.map(tx => {
                        if (this.invoicedClTxTypeCode.has(tx.CL_TX_TYPE_CODE)) {
                            return tx.CL_TX_ID;
                        }
                        return null;
                    }).filter(Boolean)),
                ];
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
                this.fiscalDocumentIssued.emit();
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
                bookingNbr = this.booking != null ? String(this.booking.booking_nbr) : null;
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
            this.fiscalDocumentIssued.emit();
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
            this.error = err instanceof Error ? err.message : 'Failed to generate proforma.';
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        const units = this.booking ? this.booking?.rooms.filter(r => r.agent && r.in_out?.code !== InOut.CheckedOut).map(r => r.unit.name) : null;
        return (h(Host, { key: '3475eb69b442bac651f17e16fed0345452461e89' }, h("ir-dialog", { key: '3865c5dd11f16d9f16a6fd58d6d82af23db1f630', label: "Create Invoice", ref: el => (this.dialogRef = el) }, this.booking && (h("div", { key: '5894eeb64823bbe098a897ed0021fe12ea4c456a', slot: "header-actions", class: 'cl-invoice-dialog__header-actions' }, h("wa-switch", { key: 'afa67e6f439c561dcd7f4dd2005eb8e133e3c6d1', checked: this.isProforma, disabled: this.mode === 'booking' && !this.allRoomsCheckedOut, onchange: e => (this.isProforma = e.target.checked) }, "Proforma"))), h("div", { key: '4822f98040948e7e1913867a0d17d048d5fe425c', class: "create-invoice-dialog__body" }, this.mode === 'booking' ? (!this.allRoomsCheckedOut ? (h("wa-callout", { size: "s", variant: "warning" }, h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), "Only a proforma invoice can be generated at this time because ", units?.length > 1 ? 'units' : 'unit', " ", h("b", null, units?.join(', ')), ".", ' ', units?.length > 1 ? 'are' : 'is', " still in-house.")) : (h("p", { class: "create-invoice-dialog__message" }, this.isProforma
            ? `Generate a proforma for Booking #${this.booking?.booking_nbr}?`
            : `Issue a draft invoice for Booking #${this.booking?.booking_nbr} to the agent?`))) : (h("ir-cl-invoice-form", { ref: el => (this.formRef = el) })), this.noResults && (h("wa-callout", { key: 'd65ccdebe8f90bd2ec24dd4516d95243e81dd0f7', variant: "warning", class: "create-invoice-dialog__no-results" }, h("wa-icon", { key: '9fc4adf34ebbb3dcb24cc820861d8053a0102f1b', slot: "icon", name: "triangle-exclamation" }), "No transactions found for the selected period and filters.")), this.error && h("p", { key: 'c5ab717895a408c50acff6a710c9cb7ff3ae4b73', class: "create-invoice-dialog__error" }, this.error)), h("div", { key: 'd466046b49d56bd54228777439e782e7ef36942f', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'b35d9ced30065e009106e8e2c2eb4b0932f26417', size: "m", appearance: "filled", variant: "neutral", "data-dialog": "close", disabled: this.isLoading }, "Cancel"), h("ir-custom-button", { key: '308d9079d21088422fd4e323e03203a205c14db8', size: "m", appearance: "accent", variant: "brand", loading: this.isLoading, onClickHandler: () => this.handleSubmit() }, this.isProforma ? 'Confirm' : 'Show draft')))));
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
                "reflect": false,
                "attribute": "agent-id",
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
                "reflect": false,
                "attribute": "mode",
                "defaultValue": "'default'"
            },
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
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
                "reflect": false,
                "attribute": "start-date",
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
                "reflect": false,
                "attribute": "end-date",
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
                "reflect": false,
                "attribute": "currency-id",
                "defaultValue": "null"
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
                    "resolved": "{ DOC_NUMBER?: string; FD_TYPE_CODE?: string; CURRENCY_ID?: number; TOTAL_AMOUNT?: number; CREDIT?: number; DEBIT?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; AGENCY_ID?: number; AGENCY_NAME?: string; CREDIT_DISPLAY?: string; CURRENCY_CODE?: string; DEBIT_DISPLAY?: string; EXTERNAL_REF?: string; FD_ID?: number; FD_STATUS_CODE?: string; FD_STATUS_NAME?: string; FD_TYPE_NAME?: string; ISSUE_DATE?: string; ISSUE_DATE_DISPLAY?: string; IS_PRINTED?: boolean; NET_AMOUNT_DISPLAY?: string; TAX_AMOUNT_DISPLAY?: string; BALANCE_BEFORE_TX?: number; BALANCE_AFTER_TX?: number; }",
                    "references": {
                        "FiscalDocument": {
                            "location": "import",
                            "path": "@/services/city-ledger",
                            "id": "src/services/city-ledger/index.ts::FiscalDocument",
                            "referenceLocation": "FiscalDocument"
                        }
                    }
                }
            }, {
                "method": "fiscalDocumentIssued",
                "name": "fiscalDocumentIssued",
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
                            "id": "src/components/ir-city-ledger/ir-city-ledger-fiscal-documents/ir-cl-fiscal-document-preview/types.ts::ClFiscalDocumentPreviewRequest",
                            "referenceLocation": "ClFiscalDocumentPreviewRequest"
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
