import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { y as getEntryValue } from './utils.js';
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
        return (h(Fragment, { key: 'a9d0fe57f5c37dba06c16be67dca163ff1df8cf7' }, h("div", { key: '25f4ca8d77c0a1c648027b16b64369b9c6db4646', class: "payment-section" }, h("div", { key: 'eb8957e035e9f25ffeca987dde51a8a49a875b5e', class: "field" }, h("ir-validator", { key: 'f116f59ad482f5b324a1dc89f864b3823bc3f1c7', schema: paymentMethodCodeFieldSchema, value: this.paymentMethodCode, valueEvent: "change" }, h("wa-select", { key: '2ef6015732447e67c94ac9efdd97da9361bb01d4', size: "small", label: "Payment method", placeholder: "Select method\u2026", value: this.paymentMethodCode, "onwa-show": e => this.stopPropagation(e), "onwa-hide": e => this.stopPropagation(e), onchange: e => {
                this.stopPropagation(e);
                this.handlePaymentMethodChange(e.target.value);
            } }, h("wa-option", { key: '26f404bef034da7e098f95465dc6d0d30891f5ce', value: "" }, "Select method\u2026"), this.paymentMethods.map(method => (h("wa-option", { key: method.CODE_NAME, label: method.CODE_VALUE_EN, value: method.CODE_NAME }, getEntryValue({ entry: method, language: this.language }))))))))));
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