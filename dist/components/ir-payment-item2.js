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
        return (h("div", { key: 'ee98488eadd5b44d57a3112d22698dd125ec96a1', class: "payment-item", part: "base" }, h("div", { key: '1a1ca120a0f1cdd9f1932c7c3967c85c51120ba6', class: "payment-body", part: "payment-body" }, h("div", { key: '8a2e828294f926826e01b6993d464f7cbea00e70', class: "payment-fields", part: "payment-fields" }, h("p", { key: '153d91c2bd5865747cb6d4c9d70a67140a0f98be', class: "text-muted" }, this.payment.date), h("p", { key: 'a439a3092cadc35e6b89a546ccb3b837786d62d2' }, h("b", { key: 'e020bac3967784993d60c167729ff43fe1ade52f' }, (_a = this.payment.payment_type.description) !== null && _a !== void 0 ? _a : this.payment.designation))), this.payment.reference && h("p", { key: '8a3a180f0a08c4b9bc5b7c48d983b4f238bfd4b4', class: "payment-reference text-muted" }, (_b = this.payment) === null || _b === void 0 ? void 0 : _b.reference)), h("div", { key: '566ac324886f65f2c8096b59dd7347eb5925f7fa', class: "payment-toolbar", part: "payment-toolbar" }, h("p", { key: '508430c3c97d7ba3277813916b0ee8472a7bbe0a', class: `payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.payment_type.code === '012' ? this.payment.amount * -1 : this.payment.amount)), h("div", { key: '05ff19b4f403ee0a315db9ef2d59aff65af2a4a2', class: "payment-actions" }, h("ir-button", { key: '78e20f5a1ce5d984de2d259a1bdbc2035c76eab1', class: "action-button", variant: "icon", onClickHandler: () => {
                this.editPayment.emit(this.payment);
            }, icon_name: "edit", style: colorVariants.secondary }), h("ir-button", { key: '4664daafc6a5999968562f469d3c4b71331bc824', class: "action-button", onClickHandler: () => {
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