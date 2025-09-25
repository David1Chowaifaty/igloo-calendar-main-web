import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as colorVariants, d as defineCustomElement$2 } from './ir-icons2.js';
import { f as formatAmount } from './utils.js';
import { P as PAYMENT_TYPES_WITH_METHOD } from './global.variables.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-popover2.js';

const irPaymentItemCss = ".payment-item__payment-item.sc-ir-payment-item{display:flex;flex-direction:column;padding:0.25rem 0.5rem;min-height:2.5rem}.payment-item__payment-item.sc-ir-payment-item p.sc-ir-payment-item{padding:0;margin:0;box-sizing:border-box}.payment-item__payment-body.sc-ir-payment-item{display:flex;flex-direction:column}.payment-item__payment-fields.sc-ir-payment-item{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item{display:none}.payment-item__payment-toolbar.sc-ir-payment-item{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-toolbar.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item{display:none}.payment-item__action-button.sc-ir-payment-item{cursor:pointer}.payment-item__payment-amount.sc-ir-payment-item{font-weight:700;white-space:nowrap}.payment-item__payment-amount.is-credit.sc-ir-payment-item{color:#629a4c}.payment-item__payment-amount.is-debit.sc-ir-payment-item{color:#ff4961}.payment-item__payment-reference.sc-ir-payment-item{font-size:12px}@media (min-width: 640px){.payment-item__payment-item.sc-ir-payment-item{flex-direction:row;align-items:center;gap:1rem}.payment-item__payment-item.sc-ir-payment-item:hover{background:#f4f5fa}.payment-item__payment-item.sc-ir-payment-item:hover .payment-item__payment-actions.sc-ir-payment-item{display:inline-flex}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item,.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item{display:inline-flex}.payment-item__payment-fields.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item,.payment-item__payment-toolbar.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item,.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-actions.sc-ir-payment-item{display:none}.payment-item__payment-description.sc-ir-payment-item{padding:0 0.5rem !important}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item{display:inline-flex;align-items:center}.payment-item__payment-body.sc-ir-payment-item{flex:1 1 0%;justify-content:flex-start}.payment-item__payment-fields.sc-ir-payment-item{justify-content:flex-start;gap:0.5rem}.payment-item__payment-toolbar.sc-ir-payment-item{gap:0.5rem;align-items:center}}";
const IrPaymentItemStyle0 = irPaymentItemCss;

const IrPaymentItem = /*@__PURE__*/ proxyCustomElement(class IrPaymentItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.editPayment = createEvent(this, "editPayment", 7);
        this.deletePayment = createEvent(this, "deletePayment", 7);
    }
    render() {
        var _a, _b, _c, _d, _e;
        const isCredit = this.payment.payment_type.operation === 'CR';
        const paymentDescription = (_c = (PAYMENT_TYPES_WITH_METHOD.includes((_a = this.payment.payment_type) === null || _a === void 0 ? void 0 : _a.code)
            ? `${(_b = this.payment.payment_type) === null || _b === void 0 ? void 0 : _b.description}: ${this.payment.payment_method.description}`
            : this.payment.payment_type.description)) !== null && _c !== void 0 ? _c : this.payment.designation;
        return (h("div", { key: '3fa8b9f9462eae6c5cd3522bfc6b2320c4f4f5f2', class: "payment-item__payment-item" }, h("div", { key: '59e7d25771ba722d1f6997af154ca498401b9de4', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'e9230a12d70881835bff61f2428a509bc83e497b', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '1e746beb1d705d141c59e4de1b6065b6a188e048', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'b4c9f060114d621a798cc1205b9578321316959d', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '81ffc241735a33450a82413fb48db35daa8c6120', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '2417f0ca7f3f32466266f2a744028975477b7d0a', class: "payment-item__payment-reference" }, (_d = this.payment) === null || _d === void 0 ? void 0 : _d.reference)), h("div", { key: 'a73b3d75c910e415413176ac3f59dbf4f6a93006', class: "payment-item__payment-toolbar" }, h("p", { key: '9531b141ea6d8a581391beea59266b889a618577', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '7c440177ceeaba5420398c8acd76140b9830e95c', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '50034694da6108ecd9249db3f8f3d303a5ff0d86', class: "payment-item__payment-actions" }, h("div", { key: 'f1dc64a380e143f5fad9963417a2e52ffe5d87e3', class: "d-flex align-items-center" }, h("ir-popover", { key: 'a2369ac9cfefcbafc5fc9a090f401b8de25736c8', trigger: "hover", content: `User: ${this.payment.time_stamp.user}` }, h("ir-button", { key: 'e83b897680c16b86f9b3508fa3889310ee863fae', variant: "icon", style: { 'color': colorVariants.secondary['--icon-button-color'], '--icon-size': '1.1rem' }, icon_name: "user" }))), h("ir-button", { key: '52efe94840266012c07f2e6a867cba5c5d155dbc', class: "payment-item__action-button", variant: "icon", onClickHandler: () => {
                this.editPayment.emit(this.payment);
            }, icon_name: "edit", style: colorVariants.secondary }), h("ir-button", { key: 'ac9364ba7670720904fc80e818a235ab4a3919a8', class: "payment-item__action-button", onClickHandler: () => {
                this.deletePayment.emit(this.payment);
            }, variant: "icon", style: colorVariants.danger, icon_name: "trash" }))), this.payment.reference && h("p", { key: '79536531f5d9cd5a1d35ba332f499a67c1af71d6', class: "payment-item__payment-reference" }, (_e = this.payment) === null || _e === void 0 ? void 0 : _e.reference)));
    }
    static get style() { return IrPaymentItemStyle0; }
}, [2, "ir-payment-item", {
        "payment": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-payment-item", "ir-button", "ir-icons", "ir-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPaymentItem);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPaymentItem as I, defineCustomElement as d };

//# sourceMappingURL=ir-payment-item2.js.map