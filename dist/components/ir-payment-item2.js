import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as colorVariants, d as defineCustomElement$1 } from './ir-icons2.js';
import { f as formatAmount } from './utils.js';
import { d as defineCustomElement$2 } from './ir-button2.js';

const irPaymentItemCss = ".payment-item{position:relative;width:100%;display:flex;padding:0.5rem;align-items:center;min-height:3rem;gap:1rem;box-sizing:border-box}.payment-item:hover{background:#f4f5fa}.payment-item:hover .payment-actions{display:flex}.payment-item p{padding:0;margin:0;box-sizing:border-box}.payment-item .payment-actions{display:none;background:#f4f5fa;gap:0.5rem;justify-content:flex-end;align-items:center}.payment-body{display:flex;flex-direction:column;gap:0.25rem;flex:1 1 0%}.payment-fields{display:flex;flex-direction:column}.payment-amount{font-weight:700;white-space:nowrap}.payment-amount.is-credit{color:#629a4c}.payment-amount.is-debit{color:#ff4961}.payment-reference{font-size:12px}.payment-toolbar{display:flex;align-items:center;gap:0.5rem}.action-button{cursor:pointer}@media (min-width: 768px){.payment-fields{flex-direction:row;align-items:center;gap:1rem}}";
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
        var _a, _b;
        const isCredit = this.payment.payment_type.operation === 'CR';
        return (h("div", { key: '3b965a546ce8be99483253264deb130c6305ac3c', class: "payment-item", part: "base" }, h("div", { key: '05252ccfa3469945583c01054dc0a4c7dcdf6505', class: "payment-body", part: "payment-body" }, h("div", { key: 'a98ded496c7e6ee8bbf3e323b9d4008fd20ee559', class: "payment-fields", part: "payment-fields" }, h("p", { key: 'ae9f53e065b8173648d3a447c53d264e3c3c4b23', class: "text-muted" }, this.payment.date), h("p", { key: 'ee3f1f863cee227fbd9f713a6fdf9d5415597596' }, h("b", { key: '5ad2d0a9db4aab8477fc2ff940942b98e9707ecd' }, (_a = this.payment.payment_type.description) !== null && _a !== void 0 ? _a : this.payment.designation))), this.payment.reference && h("p", { key: 'b3af6e0b092e823dcc5e79d487c4b4c389fcc5a5', class: "payment-reference text-muted" }, (_b = this.payment) === null || _b === void 0 ? void 0 : _b.reference)), h("div", { key: '96f265e9665ff78dc3246007d8d3ef8c7106d75b', class: "payment-toolbar", part: "payment-toolbar" }, h("p", { key: 'a4f8b1a6eef9f0c60cd4b3d1257b72d3dc5b6211', class: `payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.payment_type.code === '012' ? this.payment.amount * -1 : this.payment.amount)), h("div", { key: 'd41b9a6e5602e534ec031d9d983103edb7a4ab51', class: "payment-actions" }, h("ir-button", { key: '6ff655eb59849949aea0347f5ceec34086c521d1', class: "action-button", variant: "icon", onClickHandler: () => {
                this.editPayment.emit(this.payment);
            }, icon_name: "edit", style: colorVariants.secondary }), h("ir-button", { key: '15567ccd47646f5304fff4b97ff0efa68cb14350', class: "action-button", onClickHandler: () => {
                this.deletePayment.emit(this.payment);
            }, variant: "icon", style: colorVariants.danger, icon_name: "trash" })))));
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