import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { f as formatAmount } from './utils.js';
import { c as calendar_data } from './calendar-data.js';
import { i as invoiceIdRequiredFieldSchema } from './ir-city-ledger-transaction-form.schema.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irClInvoiceSelectCss = ".sc-ir-cl-invoice-select-h{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.field.sc-ir-cl-invoice-select{display:grid;gap:0.35rem}.field--full-width.sc-ir-cl-invoice-select,.field--full-width.sc-ir-cl-invoice-select wa-radio-group.sc-ir-cl-invoice-select{width:100%}.field--full-width.sc-ir-cl-invoice-select wa-radio-group.sc-ir-cl-invoice-select wa-radio.sc-ir-cl-invoice-select{flex:1}.entry-type.--credit.sc-ir-cl-invoice-select:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.entry-type.--debit.sc-ir-cl-invoice-select:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}.invoice-option.sc-ir-cl-invoice-select{display:flex;flex-direction:column;gap:0.125rem;padding:0.125rem 0}.invoice-option__row.sc-ir-cl-invoice-select{display:flex;align-items:baseline;gap:0.5rem}.invoice-option__number.sc-ir-cl-invoice-select{font-weight:600;font-size:0.8125rem}.invoice-option__type.sc-ir-cl-invoice-select{font-size:0.75rem;color:var(--wa-color-neutral-text-quiet)}.invoice-option__meta.sc-ir-cl-invoice-select{justify-content:space-between}.invoice-option__date.sc-ir-cl-invoice-select{font-size:0.75rem;color:var(--wa-color-neutral-text-quiet)}.invoice-option__amount.sc-ir-cl-invoice-select{font-size:0.75rem;font-weight:500;color:var(--wa-color-neutral-text)}.invoice-option__ref.sc-ir-cl-invoice-select{font-size:0.6875rem;color:var(--wa-color-neutral-text-quiet);font-style:italic}";
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
        return (h("ir-validator", { key: 'f0eca1be01b96480ba17cbc3fcaf5aef45222088', schema: invoiceIdRequiredFieldSchema, value: this.value, valueEvent: "change" }, h("wa-select", { key: '28e5ad56e0468293b1c36dbc39e7a47b4385d59b', label: this.label, size: "small", required: true, hint: this.hint || undefined, placeholder: "Select invoice", value: this.value, onchange: event => {
                this.invoiceChange.emit(event.target.value || '');
            } }, this.fiscalDocuments.map(doc => {
            const date = doc.ISSUE_DATE_DISPLAY ?? (doc.ISSUE_DATE ? hooks(doc.ISSUE_DATE, 'YYYY-MM-DD').format('MMM D, YYYY') : '');
            const amount = doc.TOTAL_AMOUNT != null ? formatAmount(calendar_data.property?.currency?.symbol, doc.TOTAL_AMOUNT) : '';
            const docNumber = doc.DOC_NUMBER ?? '';
            const typeName = doc.FD_TYPE_NAME ?? '';
            return (h("wa-option", { key: doc.FD_ID, value: String(doc.FD_ID), label: docNumber }, h("div", { class: "invoice-option" }, h("div", { class: "invoice-option__row" }, h("span", { class: "invoice-option__number" }, docNumber), h("span", { class: "invoice-option__type" }, typeName)), h("div", { class: "invoice-option__row invoice-option__meta" }, date && h("span", { class: "invoice-option__date" }, date), amount && h("span", { class: "invoice-option__amount" }, amount)), doc.EXTERNAL_REF && h("span", { class: "invoice-option__ref" }, "Ref: ", doc.EXTERNAL_REF))));
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