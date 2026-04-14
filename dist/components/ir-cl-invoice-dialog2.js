import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { C as CityLedgerService, F as FD_TYPES } from './index6.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$7 } from './ir-air-date-picker2.js';
import { d as defineCustomElement$6 } from './ir-cl-invoice-form2.js';
import { d as defineCustomElement$5 } from './ir-custom-button2.js';
import { d as defineCustomElement$4 } from './ir-date-range-filter2.js';
import { d as defineCustomElement$3 } from './ir-date-select2.js';
import { d as defineCustomElement$2 } from './ir-dialog2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irClInvoiceDialogCss = ".sc-ir-cl-invoice-dialog-h{display:contents}.create-invoice-dialog__body.sc-ir-cl-invoice-dialog{display:flex;flex-direction:column;gap:0.75rem}.create-invoice-dialog__no-results.sc-ir-cl-invoice-dialog{margin:0}.create-invoice-dialog__error.sc-ir-cl-invoice-dialog{margin:0;font-size:0.8125rem;color:var(--wa-color-danger-500, #ef4444)}.create-invoice-dialog__footer.sc-ir-cl-invoice-dialog{display:flex;justify-content:flex-end;gap:0.5rem}";
const IrClInvoiceDialogStyle0 = irClInvoiceDialogCss;

const IrClInvoiceDialog = /*@__PURE__*/ proxyCustomElement(class IrClInvoiceDialog extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.invoiceIssued = createEvent(this, "invoiceIssued", 7);
    }
    agentId = null;
    mode = 'default';
    bookingNbr = null;
    startDate = null;
    endDate = null;
    currencyId = null;
    isLoading = false;
    error = null;
    noResults = false;
    invoiceIssued;
    dialogRef;
    formRef;
    cityLedgerService = new CityLedgerService();
    async openModal() {
        this.error = null;
        this.noResults = false;
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
            if (this.mode === 'booking') {
                const result = await this.cityLedgerService.issueFiscalDocument({
                    AGENCY_ID: this.agentId,
                    CURRENCY_ID: this.currencyId,
                    START_DATE: this.startDate,
                    END_DATE: this.endDate,
                    BOOKING_NBR: this.bookingNbr,
                    FD_TYPE_CODE: FD_TYPES.Draft,
                });
                this.invoiceIssued.emit(result);
                this.dialogRef.closeModal();
            }
            else {
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
                    FD_TYPE_CODE: FD_TYPES.Draft,
                });
                this.invoiceIssued.emit(result);
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
    render() {
        return (h(Host, { key: '1ed69c3a1e2b09d00185a5120ce4fcc62bf2bf70' }, h("ir-dialog", { key: '9f15ef2da892380daea221923f7bdd0fdb0282e9', label: "Create Invoice", ref: el => (this.dialogRef = el) }, h("div", { key: 'a95a804808d5e5fe715c10837d80bdd135729cc9', class: "create-invoice-dialog__body" }, this.mode === 'booking' ? (h("p", { class: "create-invoice-dialog__message" }, "Issue a draft invoice for booking #", this.bookingNbr, " to the agent?")) : (h("ir-cl-invoice-form", { ref: el => (this.formRef = el) })), this.noResults && (h("wa-callout", { key: '69d7eb1c9c33bec0bff4d8e80842cae13feb134a', variant: "warning", class: "create-invoice-dialog__no-results" }, h("wa-icon", { key: '2cd7aea230637f146d3a9762d372b2d7584cfe5d', slot: "icon", name: "triangle-exclamation" }), "No transactions found for the selected period and filters.")), this.error && h("p", { key: '8917e84a0a7ce140992d38a76d42b02e0b61a217', class: "create-invoice-dialog__error" }, this.error)), h("div", { key: '7e2cc69784022e5515b94716a920acba74c16c52', slot: "footer", class: "create-invoice-dialog__footer" }, h("ir-custom-button", { key: '044d91b7b1677170b7a60f6512c0302ca4ad0f7a', size: "medium", appearance: "filled", variant: "neutral", "data-dialog": "close", disabled: this.isLoading }, "Cancel"), h("ir-custom-button", { key: '499b8016dc9cecd46c680a086e28eae490d15a37', size: "medium", appearance: "accent", variant: "brand", loading: this.isLoading, onClickHandler: () => this.handleSubmit() }, "Show draft")))));
    }
    static get style() { return IrClInvoiceDialogStyle0; }
}, [2, "ir-cl-invoice-dialog", {
        "agentId": [2, "agent-id"],
        "mode": [1],
        "bookingNbr": [2, "booking-nbr"],
        "startDate": [1, "start-date"],
        "endDate": [1, "end-date"],
        "currencyId": [2, "currency-id"],
        "isLoading": [32],
        "error": [32],
        "noResults": [32],
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