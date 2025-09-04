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
        var _a;
        const isCredit = this.payment.payment_type.operation === 'CR';
        return (h("div", { key: '9345c2b8521bd99d72721ecdb8b4360e3804dd7a', class: "payment-item", part: "base" }, h("div", { key: '2e77ce8399e1e0b1dd2568eaf5275150721593bb', class: "payment-content", part: "payment-content" }, h("div", { key: 'fbb5fb7f71502235c956c239a40e996ae28ca042', class: "payment-body", part: "payment-body" }, h("div", { key: '24f0b1393af126d7143d5fae76e909990aca60ec', class: "payment-fields", part: "payment-fields" }, h("p", { key: '0b0580121c41e5ec03f48e6cf4f3cd6bedd0da69', class: "payment-date" }, this.payment.date), h("p", { key: 'bf168fecfd2cb066527fe3939e80190ac65af2a8', class: "payment-description" }, (_a = this.payment.payment_type.description) !== null && _a !== void 0 ? _a : this.payment.designation)), this.payment.reference && (h("p", { key: 'b429defb1c964908d081430edfb0d400d3ab746a', class: "payment-reference", title: this.payment.reference }, this.payment.reference))), h("div", { key: '7185c82775a99e4c7319c1d08e523100fb80ddfd', class: "payment-amount-section", part: "payment-amount-section" }, h("p", { key: 'ee3326af8ff6f51b0d90b9a85af86133e39ce430', class: `payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.payment_type.code === '012' ? this.payment.amount * -1 : this.payment.amount)), h("div", { key: 'bff660670d53b9b5a7e3fb433a98a828a9c8630f', class: "payment-actions", part: "payment-actions" }, h("ir-button", { key: '1044e3486f808682e3ced320146c8f76dc060ca3', class: "action-button", variant: "icon", onClickHandler: () => {
                this.editPayment.emit(this.payment);
            }, icon_name: "edit", style: colorVariants.secondary, size: "sm" }), h("ir-button", { key: '6e48340333d435d59ca1fd79ba609e80272cd01c', class: "action-button", onClickHandler: () => {
                this.deletePayment.emit(this.payment);
            }, variant: "icon", style: colorVariants.danger, icon_name: "trash", size: "sm" }))))));
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