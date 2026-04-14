import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { w as getEntryValue } from './utils.js';
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
        return (h(Fragment, { key: '492c6055bf1fc76c315b86f0da9990035598d099' }, h("div", { key: 'a97fa9090edfb196230963957f64118ef97885f1', class: "payment-section" }, h("div", { key: 'a7ea8ddc424479f423802221123f58b128936e22', class: "field" }, h("ir-validator", { key: 'afd79016f1cabde0ca2506ce9b08729ebb614c82', schema: paymentMethodCodeFieldSchema, value: this.paymentMethodCode, valueEvent: "change" }, h("wa-select", { key: '092e24c3e2a719a03cfbbaa23a7d8ba62f7bdb8f', size: "small", label: "Payment method", placeholder: "Select method\u2026", value: this.paymentMethodCode, "onwa-show": e => this.stopPropagation(e), "onwa-hide": e => this.stopPropagation(e), onchange: e => {
                this.stopPropagation(e);
                this.handlePaymentMethodChange(e.target.value);
            } }, h("wa-option", { key: '30faff9d1c22f3247115d7edf87f71c2a7594012', value: "" }, "Select method\u2026"), this.paymentMethods.map(method => (h("wa-option", { key: method.CODE_NAME, label: method.CODE_VALUE_EN, value: method.CODE_NAME }, getEntryValue({ entry: method, language: this.language })))))))), h("div", { key: 'f0d793a2253f4ae28a5af97778abb4129fe05071', class: "payment-section" }, h("wa-radio-group", { key: '5cab7f2af65be9723e792674c0bff529836b26f4', label: "Apply to", size: "small", orientation: "horizontal", value: this.isOnAccount ? 'on-account' : 'apply-to-invoice', onchange: e => {
                const val = e.target.value;
                this.fieldChange.emit({
                    onAccount: val === 'on-account',
                    invoiceId: val === 'on-account' ? undefined : this.invoiceId,
                });
            } }, h("wa-radio", { key: '4660d41398b4b0ceadcb6a2391e2c2da37f039d2', appearance: "button", value: "on-account" }, "On Account"), h("wa-radio", { key: 'e957811d788038db220d6cdfa799ac855b5c876d', appearance: "button", value: "apply-to-invoice", disabled: this.noInvoices }, "Allocate to Invoices")), !this.isOnAccount && (h("div", { key: '9005ec3c3a12904a0e07dc68357d2c4419b97d82', class: "field invoice-select" }, h("wa-select", { key: '9df6f0e132ef16b4fa06f13300251e0ef8cc960f', label: "Outstanding Invoices", size: "small", placeholder: "Search invoices\u2026", value: this.invoiceId ?? '', "onwa-show": e => this.stopPropagation(e), "onwa-hide": e => this.stopPropagation(e), onchange: e => {
                this.stopPropagation(e);
                this.fieldChange.emit({ invoiceId: e.target.value || undefined });
            } }, h("wa-option", { key: '619ac353e7c329a9c0fe0f4820424ed58abad7aa', value: "" }, "No invoice linked"), this.unpaidInvoiceOptions.length === 0 && (h("wa-option", { key: '12f892143e91196baccdb603718eaacffc6d4fa7', value: "", disabled: true }, "No outstanding invoices")), this.unpaidInvoiceOptions.map(invoice => (h("wa-option", { key: invoice.id, value: invoice.id }, invoice.label)))))))));
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