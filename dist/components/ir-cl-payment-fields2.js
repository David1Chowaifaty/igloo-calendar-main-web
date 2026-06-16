import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { z as getEntryValue } from './utils.js';
import { p as paymentMethodCodeFieldSchema } from './ir-city-ledger-transaction-form.schema.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irClPaymentFieldsCss = ".sc-ir-cl-payment-fields-h{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.field.sc-ir-cl-payment-fields{display:grid;gap:0.35rem}.field--full-width.sc-ir-cl-payment-fields,.field--full-width.sc-ir-cl-payment-fields wa-radio-group.sc-ir-cl-payment-fields{width:100%}.field--full-width.sc-ir-cl-payment-fields wa-radio-group.sc-ir-cl-payment-fields wa-radio.sc-ir-cl-payment-fields{flex:1}.entry-type.--credit.sc-ir-cl-payment-fields:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.entry-type.--debit.sc-ir-cl-payment-fields:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}.payment-section.sc-ir-cl-payment-fields{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.payment-section.sc-ir-cl-payment-fields wa-radio-group.sc-ir-cl-payment-fields{width:100%}.payment-section.sc-ir-cl-payment-fields wa-radio-group.sc-ir-cl-payment-fields wa-radio.sc-ir-cl-payment-fields{flex:1}.invoice-select.sc-ir-cl-payment-fields{animation:slide-in 0.18s ease}";
const IrClPaymentFieldsStyle0 = irClPaymentFieldsCss;

const IrClPaymentFields = /*@__PURE__*/ proxyCustomElement(class IrClPaymentFields extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.fieldChange = createEvent(this, "fieldChange", 7);
    }
    paymentMethodCode = '';
    isOnAccount = false;
    invoiceId;
    paymentMethods = [];
    unpaidInvoiceOptions = [];
    noInvoices = false;
    language = 'en';
    fieldChange;
    stopPropagation(event) {
        event.stopImmediatePropagation();
    }
    handlePaymentMethodChange(value) {
        const method = this.paymentMethods?.find(pm => pm.CODE_NAME === value);
        if (!method) {
            this.fieldChange.emit({ payment_method: null });
            return;
        }
        const payment_method = {
            code: method.CODE_NAME,
            description: method.CODE_VALUE_EN,
            operation: method.NOTES,
        };
        this.fieldChange.emit({ payment_method });
    }
    render() {
        return (h(Fragment, { key: '3127459a4ce57c134d705025a7bb3561aa1805ad' }, h("div", { key: '871ec03af18776e5d727e7c373a2f2b1faa3278d', class: "payment-section" }, h("div", { key: 'f57db73a06f5bae189833ec1237b1937614eefe1', class: "field" }, h("ir-validator", { key: '91fd254d65c0bf5e0e991b5c06ba6b82d33580d9', schema: paymentMethodCodeFieldSchema, value: this.paymentMethodCode, valueEvent: "change" }, h("wa-select", { key: '82673b3677c90fb53a1513ff64587dd7288757ce', size: "small", label: "Payment method", placeholder: "Select method\u2026", value: this.paymentMethodCode, "onwa-show": e => this.stopPropagation(e), "onwa-hide": e => this.stopPropagation(e), onchange: e => {
                this.stopPropagation(e);
                this.handlePaymentMethodChange(e.target.value);
            } }, h("wa-option", { key: '39b7e78403b882e50739c6c9042c2dfc5d9786af', value: "" }, "Select method\u2026"), this.paymentMethods.map(method => (h("wa-option", { key: method.CODE_NAME, label: method.CODE_VALUE_EN, value: method.CODE_NAME }, getEntryValue({ entry: method, language: this.language }))))))))));
    }
    static get style() { return IrClPaymentFieldsStyle0; }
}, [2, "ir-cl-payment-fields", {
        "paymentMethodCode": [1, "payment-method-code"],
        "isOnAccount": [4, "is-on-account"],
        "invoiceId": [1, "invoice-id"],
        "paymentMethods": [16],
        "unpaidInvoiceOptions": [16],
        "noInvoices": [4, "no-invoices"],
        "language": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-payment-fields", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-payment-fields":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClPaymentFields);
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrClPaymentFields as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-payment-fields2.js.map