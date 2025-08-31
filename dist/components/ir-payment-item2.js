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
        return (h("div", { key: '371c38ec05b00a8f3699afc970cd3eff2f2670df', class: "payment-item", part: "base" }, h("div", { key: 'd940a47d9dbee11324fb80971a4dff6c580e310a', class: "payment-body", part: "payment-body" }, h("div", { key: 'c7e2cca0bb6d15e62fe9a8a5e4a48d7bae48ead3', class: "payment-fields", part: "payment-fields" }, h("p", { key: 'a2f0247459d382f595b76361d67e28470db632c4', class: "text-muted" }, this.payment.date), h("p", { key: '83df5560844344856e7f5af06879b31e22baf347' }, h("b", { key: '4fd7d6ac5877fada7736009d9727b5537263fa12' }, (_a = this.payment.payment_type.description) !== null && _a !== void 0 ? _a : this.payment.designation))), this.payment.reference && h("p", { key: 'abe8cada7ecda668238a6b45ab3cad00c548067e', class: "payment-reference text-muted" }, (_b = this.payment) === null || _b === void 0 ? void 0 : _b.reference)), h("div", { key: '00fa85baf4c6771d94474f73917db04c86f83ffa', class: "payment-toolbar", part: "payment-toolbar" }, h("p", { key: 'd42580f62b3084b1c638ef40d67bf6877dbc7746', class: `payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.payment_type.code === '012' ? this.payment.amount * -1 : this.payment.amount)), h("div", { key: 'a0a641003abc8d497bfe14e96e7c1cda4ce47cf7', class: "payment-actions" }, h("ir-button", { key: 'ce439367e3eb893232a7059054e2434268230712', class: "action-button", variant: "icon", onClickHandler: () => {
                this.editPayment.emit(this.payment);
            }, icon_name: "edit", style: colorVariants.secondary }), h("ir-button", { key: '32af5bcc018abb2265b21805e67b562b39a6117f', class: "action-button", onClickHandler: () => {
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