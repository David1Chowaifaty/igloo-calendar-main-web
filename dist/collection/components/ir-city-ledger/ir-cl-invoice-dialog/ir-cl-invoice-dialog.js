import { Host, h } from "@stencil/core";
import { CityLedgerService } from "../../../services/city-ledger/index";
import calendar_data from "../../../stores/calendar-data";
import { ClTxTypeCode, FdTypes, InOut } from "../../../types/enums";
import moment from "moment";
import { formatBookingNumber } from "../../../utils/number";
import { t } from "../../../services/locale/t";
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
    isCompact = false;
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
        this.isCompact = false;
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
                    IS_COMPACT: this.isCompact,
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
                const { fromDate, toDate, is_checked_out_only, is_compact } = await this.formRef.getValues();
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
                // const targetCategories = [SvcCategory.Accommodation, 'TRF', 'GEN'];
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
                    IS_COMPACT: is_compact,
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
            this.error = err instanceof Error ? err.message : t('Lcz_FailedToIssueInvoice', { fallback: 'Failed to issue invoice.' });
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
            let isCompact = this.isCompact;
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
                isCompact = values.is_compact;
            }
            const url = await this.cityLedgerService.printClProforma({
                agency_id: String(this.agentId),
                from_date: fromDate,
                to_date: toDate,
                booking_nbr: bookingNbr,
                is_compact: isCompact,
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
            this.error = err instanceof Error ? err.message : t('Lcz_FailedToGenerateProforma', { fallback: 'Failed to generate proforma.' });
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        const units = this.booking ? this.booking?.rooms.filter(r => r.agent && r.in_out?.code !== InOut.CheckedOut).map(r => r.unit.name) : null;
        return (h(Host, { key: '6e3e3f37423753acd92c3c79e832adab9a03a043' }, h("ir-dialog", { key: 'bc57348b3323fbf9143b5491a5e3af9eb4ea53dd', label: t('Lcz_CreateInvoice', { fallback: 'Create Invoice' }), ref: el => (this.dialogRef = el) }, this.booking && (h("div", { key: '1a1097d336abb3de8139448d62e6d04654c77e8c', slot: "header-actions", class: 'cl-invoice-dialog__header-actions' }, h("wa-switch", { key: '02fa8c588cb49b05bbc1af1931772f435afce7a1', checked: this.isProforma, disabled: this.mode === 'booking' && !this.allRoomsCheckedOut, onchange: e => (this.isProforma = e.target.checked) }, t('Lcz_Proforma', { fallback: 'Proforma' })))), h("div", { key: '074f97e1ea4fd6d563ca869beea4e4e8cd7f0bd7', class: "create-invoice-dialog__body" }, this.mode === 'booking' ? ([
            !this.allRoomsCheckedOut ? (h("wa-callout", { size: "s", variant: "warning" }, h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), t('Lcz_ProformaOnlyInHouseWarning', {
                fallback: 'Only a proforma invoice can be generated at this time because %1 is/are still in-house.',
                params: [`${units?.length > 1 ? t('Lcz_UnitsLowercase', { fallback: 'units' }) : t('Lcz_UnitLowercase', { fallback: 'unit' })} ${units?.join(', ')}`],
            }))) : (h("p", { class: "create-invoice-dialog__message" }, this.isProforma
                ? t('Lcz_GenerateProformaConfirm', { fallback: 'Generate a proforma for Booking #%1?', params: [formatBookingNumber(this.booking?.booking_nbr)] })
                : t('Lcz_IssueDraftInvoiceConfirm', {
                    fallback: 'Issue a draft invoice for Booking #%1 to the agent?',
                    params: [formatBookingNumber(this.booking?.booking_nbr)],
                }))),
            h("wa-checkbox", { checked: this.isCompact, defaultChecked: this.isCompact, onchange: e => {
                    this.isCompact = e.target.checked;
                } }, t('Lcz_CompactVersion', { fallback: 'Compact version' })),
        ]) : (h("ir-cl-invoice-form", { ref: el => (this.formRef = el) })), this.noResults && (h("wa-callout", { key: '32f5887adaca3332e873d99d8226fad8bf8eb9c1', variant: "warning", class: "create-invoice-dialog__no-results" }, h("wa-icon", { key: 'e3053f355b755ed8ecd8c8787cbc2abffe8118de', slot: "icon", name: "triangle-exclamation" }), t('Lcz_NoTransactionsFoundForPeriod', { fallback: 'No transactions found for the selected period and filters.' }))), this.error && h("p", { key: 'b956ffc93712c44207124e4956c7dfba54d57f42', class: "create-invoice-dialog__error" }, this.error)), h("div", { key: '3e38d07d3a811ca41145759ef4b85b94367ad590', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '44c56585b966bfb27fd9a5fb598e4fe3b4c2caaf', size: "m", appearance: "filled", variant: "neutral", "data-dialog": "close", disabled: this.isLoading }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '1ec0bb4968849a7c4164c92b42d119a8fa703129', size: "m", appearance: "accent", variant: "brand", loading: this.isLoading, onClickHandler: () => this.handleSubmit() }, this.isProforma ? t('Lcz_Confirm', { fallback: 'Confirm' }) : t('Lcz_ShowDraft', { fallback: 'Show draft' }))))));
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
            "isProforma": {},
            "isCompact": {}
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
                    "resolved": "{ DOC_NUMBER?: string; FD_TYPE_CODE?: string; CURRENCY_ID?: number; TOTAL_AMOUNT?: number; CREDIT?: number; DEBIT?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; AGENCY_ID?: number; AGENCY_NAME?: string; CREDIT_DISPLAY?: string; CURRENCY_CODE?: string; DEBIT_DISPLAY?: string; EXTERNAL_REF?: string; FD_ID?: number; FD_STATUS_CODE?: string; FD_STATUS_NAME?: string; FD_TYPE_NAME?: string; ISSUE_DATE?: string; ISSUE_DATE_DISPLAY?: string; ISSUE_HOUR?: number; ISSUE_MINUTE?: number; IS_PRINTED?: boolean; NET_AMOUNT_DISPLAY?: string; TAX_AMOUNT_DISPLAY?: string; BALANCE_BEFORE_TX?: number; BALANCE_AFTER_TX?: number; }",
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
