import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { C as CityLedgerService } from './index6.js';
import { c as calendar_data } from './calendar-data.js';
import { b as InOut, F as FdTypes } from './enums.js';
import { d as defineCustomElement$7 } from './ir-air-date-picker2.js';
import { d as defineCustomElement$6 } from './ir-cl-invoice-form2.js';
import { d as defineCustomElement$5 } from './ir-custom-button2.js';
import { d as defineCustomElement$4 } from './ir-date-range-filter2.js';
import { d as defineCustomElement$3 } from './ir-date-select2.js';
import { d as defineCustomElement$2 } from './ir-dialog2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irClInvoiceDialogCss = ".sc-ir-cl-invoice-dialog-h{display:contents}.create-invoice-dialog__body.sc-ir-cl-invoice-dialog{display:flex;flex-direction:column;gap:0.75rem}.cl-invoice-dialog__header-actions.sc-ir-cl-invoice-dialog{display:flex;align-items:center}.create-invoice-dialog__no-results.sc-ir-cl-invoice-dialog{margin:0}.create-invoice-dialog__error.sc-ir-cl-invoice-dialog{margin:0;font-size:0.8125rem;color:var(--wa-color-danger-500, #ef4444)}.create-invoice-dialog__footer.sc-ir-cl-invoice-dialog{display:flex;justify-content:flex-end;gap:0.5rem}";
const IrClInvoiceDialogStyle0 = irClInvoiceDialogCss;

const IrClInvoiceDialog = /*@__PURE__*/ proxyCustomElement(class IrClInvoiceDialog extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.invoiceIssued = createEvent(this, "invoiceIssued", 7);
        this.clFiscalDocumentPreview = createEvent(this, "clFiscalDocumentPreview", 7);
    }
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
        return (h(Host, { key: '6a8118baec2de6198e48dd993882025611402310' }, h("ir-dialog", { key: 'daa4bc798df0eec7cdfabfb92e1eafefae06557d', label: "Create Invoice", ref: el => (this.dialogRef = el) }, h("div", { key: 'fab4ec0a42711aaa73944096c47607560a88bd61', slot: "header-actions", class: 'cl-invoice-dialog__header-actions' }, h("wa-switch", { key: '86af872023b6fc1363d0e8a0aa1c32de450acecf', checked: this.isProforma, disabled: this.mode === 'booking' && !this.allRoomsCheckedOut, onchange: e => (this.isProforma = e.target.checked) }, "Pro forma")), h("div", { key: '7b1f8d264b1eb12f9e8e7d08ed78f7adf21a4681', class: "create-invoice-dialog__body" }, this.mode === 'booking' ? (h("p", { class: "create-invoice-dialog__message" }, this.isProforma ? `Generate a pro forma for Booking #${this.bookingNbr}?` : `Issue a draft invoice for Booking #${this.bookingNbr} to the agent?`)) : (h("ir-cl-invoice-form", { ref: el => (this.formRef = el) })), this.noResults && (h("wa-callout", { key: 'ec67cf1695af6e7412a94a84aa35a949812c74ac', variant: "warning", class: "create-invoice-dialog__no-results" }, h("wa-icon", { key: 'dfa95450829e185974c2786c808f12c2dd3ea502', slot: "icon", name: "triangle-exclamation" }), "No transactions found for the selected period and filters.")), this.error && h("p", { key: 'f42c2df0870ddb8644110d1391e958aa0177a1f7', class: "create-invoice-dialog__error" }, this.error)), h("div", { key: '2a417196ce63111cbee2f86f70567cb35e3a583e', slot: "footer", class: "create-invoice-dialog__footer" }, h("ir-custom-button", { key: 'db6c5aca37e485dd59704343f10dd1b541790a9e', size: "medium", appearance: "filled", variant: "neutral", "data-dialog": "close", disabled: this.isLoading }, "Cancel"), h("ir-custom-button", { key: '370e68c61cc50c4815c69d85b31062b95b6bd58a', size: "medium", appearance: "accent", variant: "brand", loading: this.isLoading, onClickHandler: () => this.handleSubmit() }, this.isProforma ? 'Confirm' : 'Show draft')))));
    }
    static get style() { return IrClInvoiceDialogStyle0; }
}, [2, "ir-cl-invoice-dialog", {
        "agentId": [2, "agent-id"],
        "mode": [1],
        "bookingNbr": [1, "booking-nbr"],
        "startDate": [1, "start-date"],
        "endDate": [1, "end-date"],
        "currencyId": [2, "currency-id"],
        "rooms": [16],
        "isLoading": [32],
        "error": [32],
        "noResults": [32],
        "isProforma": [32],
        "openModal": [64],
        "closeModal": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-invoice-dialog", "ir-air-date-picker", "ir-cl-invoice-form", "ir-custom-button", "ir-date-range-filter", "ir-date-select", "ir-dialog", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-invoice-dialog":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClInvoiceDialog);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-cl-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-date-range-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrClInvoiceDialog as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-invoice-dialog2.js.map