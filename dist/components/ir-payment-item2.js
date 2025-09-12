import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as colorVariants, d as defineCustomElement$1 } from './ir-icons2.js';
import { f as formatAmount } from './utils.js';
import { P as PAYMENT_TYPES_WITH_METHOD } from './global.variables.js';
import { d as defineCustomElement$2 } from './ir-button2.js';

const irPaymentItemCss = ".payment-item__payment-item{display:flex;flex-direction:column;padding:0.5rem;min-height:3rem}.payment-item__payment-item p{padding:0;margin:0;box-sizing:border-box}.payment-item__payment-body{display:flex;flex-direction:column}.payment-item__payment-fields{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-body .payment-item__payment-reference,.payment-item__payment-body .payment-item__payment-description{display:none}.payment-item__payment-toolbar{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-toolbar .payment-item__payment-amount{display:none}.payment-item__action-button{cursor:pointer}.payment-item__payment-amount{font-weight:700;white-space:nowrap}.payment-item__payment-amount.is-credit{color:#629a4c}.payment-item__payment-amount.is-debit{color:#ff4961}.payment-item__payment-reference{font-size:12px}@media (min-width: 640px){.payment-item__payment-item{flex-direction:row;align-items:center;gap:1rem}.payment-item__payment-item:hover{background:#f4f5fa}.payment-item__payment-item:hover .payment-item__payment-actions{display:inline-flex}.payment-item__payment-body .payment-item__payment-reference,.payment-item__payment-body .payment-item__payment-description,.payment-item__payment-item .payment-item__payment-amount{display:inline-flex}.payment-item__payment-fields .payment-item__payment-amount,.payment-item__payment-toolbar .payment-item__payment-description,.payment-item__payment-item .payment-item__payment-reference,.payment-item__payment-actions{display:none}.payment-item__payment-body .payment-item__payment-reference{display:inline-flex;align-items:center}.payment-item__payment-body{flex:1 1 0%;justify-content:flex-start;gap:0.5rem}.payment-item__payment-fields{justify-content:flex-start;gap:0.5rem}.payment-item__payment-toolbar{gap:0.5rem;align-items:center}}";
const IrPaymentItemStyle0 = irPaymentItemCss;

const IrPaymentItem = /*@__PURE__*/ proxyCustomElement(class IrPaymentItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.editPayment = createEvent(this, "editPayment", 7);
        this.deletePayment = createEvent(this, "deletePayment", 7);
    }
    render() {
        var _a, _b, _c, _d, _e;
        const isCredit = this.payment.payment_type.operation === 'CR';
        const paymentDescription = (_c = (PAYMENT_TYPES_WITH_METHOD.includes((_a = this.payment.payment_type) === null || _a === void 0 ? void 0 : _a.code)
            ? `${(_b = this.payment.payment_type) === null || _b === void 0 ? void 0 : _b.description}: ${this.payment.payment_method.description}`
            : this.payment.payment_type.description)) !== null && _c !== void 0 ? _c : this.payment.designation;
        return (h("div", { key: 'ebd62636645ee1b6f767e920c3c92fe58827b256', class: "payment-item__payment-item" }, h("div", { key: 'e4fe640e5d4a597a70f64b108e3991cfa0caa3a0', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'c179ef1d3dd2390a149736dfb09137064b2eb9c3', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '7549620e582097311155f545459ab2c7ca3af1db', class: "payment-item__payment-date" }, this.payment.date), h("p", { key: 'd58b019df78913eacd295294cf6d4b204af781f0', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '7d1ad9d05327bad728b605ac1ad68bca6e01531d', class: "payment-item__payment-description" }, h("b", { key: 'a03074bf64a8ad071edd8c16ecad62dc56e3b244' }, paymentDescription))), this.payment.reference && h("p", { key: '6c140fa78ba95fb9b90c71f61b37a6e88d5052f2', class: "payment-item__payment-reference" }, (_d = this.payment) === null || _d === void 0 ? void 0 : _d.reference)), h("div", { key: '101dd0d9eb9361501dd59988ac330d02640216c8', class: "payment-item__payment-toolbar" }, h("p", { key: '45f58a74834814fe1dd0483fc508b15e79720180', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '5408237648f41bac56a5f8c2b2d882e672794e02', class: "payment-item__payment-description" }, h("b", { key: '55384a37ead98e43b44e08884dea81bf1a05a266' }, paymentDescription)), h("div", { key: '5b51cb0069600941ff9c6c8725aa569650a93eaf', class: "payment-item__payment-actions" }, h("ir-button", { key: 'e0d7e0c3e57a27ee612cdb643db4f059627c61e2', class: "payment-item__action-button", variant: "icon", onClickHandler: () => {
                this.editPayment.emit(this.payment);
            }, icon_name: "edit", style: colorVariants.secondary }), h("ir-button", { key: 'eacb99c482053e359732fe6d486c661f56ce5e6b', class: "payment-item__action-button", onClickHandler: () => {
                this.deletePayment.emit(this.payment);
            }, variant: "icon", style: colorVariants.danger, icon_name: "trash" }))), this.payment.reference && h("p", { key: 'a66ddf4f7958bd6b755d6cb205c62b875f526952', class: "payment-item__payment-reference" }, (_e = this.payment) === null || _e === void 0 ? void 0 : _e.reference)));
    }
    static get style() { return IrPaymentItemStyle0; }
}, [1, "ir-payment-item", {
        "payment": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-payment-item", "ir-button", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPaymentItem);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPaymentItem as I, defineCustomElement as d };

//# sourceMappingURL=ir-payment-item2.js.map