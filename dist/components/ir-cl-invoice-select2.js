import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { f as formatAmount } from './utils.js';
import { c as calendar_data } from './calendar-data.js';
import { i as invoiceIdRequiredFieldSchema } from './ir-city-ledger-transaction-form.schema.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irClInvoiceSelectCss = ".sc-ir-cl-invoice-select-h{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.field.sc-ir-cl-invoice-select{display:grid;gap:0.35rem}.field--full-width.sc-ir-cl-invoice-select,.field--full-width.sc-ir-cl-invoice-select wa-radio-group.sc-ir-cl-invoice-select{width:100%}.field--full-width.sc-ir-cl-invoice-select wa-radio-group.sc-ir-cl-invoice-select wa-radio.sc-ir-cl-invoice-select{flex:1}.entry-type.--credit.sc-ir-cl-invoice-select:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.entry-type.--debit.sc-ir-cl-invoice-select:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}.invoice-option.sc-ir-cl-invoice-select{display:flex;align-items:baseline;justify-content:space-between;gap:0.5rem;width:100%}.invoice-option__left.sc-ir-cl-invoice-select{display:flex;align-items:baseline;gap:1rem}.invoice-option__number.sc-ir-cl-invoice-select{font-weight:500}.invoice-option__date.sc-ir-cl-invoice-select{color:var(--wa-color-neutral-text-quiet)}.invoice-option__amount.sc-ir-cl-invoice-select{font-weight:500}.invoice-option__ref.sc-ir-cl-invoice-select{color:var(--wa-color-neutral-text-quiet);font-style:italic}";
const IrClInvoiceSelectStyle0 = irClInvoiceSelectCss;

const IrClInvoiceSelect = /*@__PURE__*/ proxyCustomElement(class IrClInvoiceSelect extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.invoiceChange = createEvent(this, "invoiceChange", 7);
    }
    value = '';
    fiscalDocuments = [];
    label = 'Invoice';
    hint = '';
    invoiceChange;
    render() {
        return (h("ir-validator", { key: '7c7b8d44ef6ddafaf43f3448add88eb6bfa74a3a', schema: invoiceIdRequiredFieldSchema, value: this.value, valueEvent: "change" }, h("wa-select", { key: '1eb047f54f4f2fdd99dd3898762ccbd2cd71f6dc', label: this.label, size: "small", required: true, hint: this.hint || undefined, placeholder: "Select invoice", value: this.value, onchange: event => {
                this.invoiceChange.emit(event.target.value || '');
            } }, this.fiscalDocuments.map(doc => {
            const date = doc.ISSUE_DATE_DISPLAY ?? (doc.ISSUE_DATE ? hooks(doc.ISSUE_DATE, 'YYYY-MM-DD').format('MMM D, YYYY') : '');
            const amount = doc.TOTAL_AMOUNT != null ? formatAmount(calendar_data.property?.currency?.symbol, doc.TOTAL_AMOUNT) : '';
            const docNumber = doc.DOC_NUMBER ?? '';
            return (h("wa-option", { key: doc.FD_ID, value: String(doc.FD_ID), label: docNumber }, h("div", { class: "invoice-option" }, h("div", { class: "invoice-option__left" }, h("span", { class: "invoice-option__number" }, docNumber), date && h("span", { class: "invoice-option__date" }, date), doc.EXTERNAL_REF && h("span", { class: "invoice-option__ref" }, "Ref: ", doc.EXTERNAL_REF)), amount && h("span", { class: "invoice-option__amount" }, amount))));
        }))));
    }
    static get style() { return IrClInvoiceSelectStyle0; }
}, [2, "ir-cl-invoice-select", {
        "value": [1],
        "fiscalDocuments": [16],
        "label": [1],
        "hint": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-invoice-select", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-invoice-select":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClInvoiceSelect);
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrClInvoiceSelect as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-invoice-select2.js.map