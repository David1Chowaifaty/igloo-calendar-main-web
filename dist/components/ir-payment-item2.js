import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as colorVariants, d as defineCustomElement$1 } from './ir-icons2.js';
import { f as formatAmount } from './utils.js';
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
        var _a, _b, _c, _d;
        const isCredit = this.payment.payment_type.operation === 'CR';
        return (h("div", { key: '7fdb2148668b464d9006909940120adbe5056c80', class: "payment-item__payment-item" }, h("div", { key: '9b18f14a63a8287d7bc305e4cd44872c7f618597', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '05c67b021b5b5d1d10096aa4a461bc6682657cf8', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'efdeae11a9592ec01105911943f3d6b98243b93b', class: "payment-item__payment-date" }, this.payment.date), h("p", { key: 'a559bdf42084594d12b2b93475c8ab5893bde3be', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '9a44153e42e63200c6c739a69124c3384c4ac529', class: "payment-item__payment-description" }, h("b", { key: 'de95bfa7e82bec3ddbd2dd58d848f55d00060707' }, (_a = this.payment.payment_type.description) !== null && _a !== void 0 ? _a : this.payment.designation))), this.payment.reference && h("p", { key: 'ecd0429e0654b1b88191e1ef6b3fbdae62bd4e75', class: "payment-item__payment-reference" }, (_b = this.payment) === null || _b === void 0 ? void 0 : _b.reference)), h("div", { key: '4ee7d42ce70ba128236a45c7862caed80ce4b715', class: "payment-item__payment-toolbar" }, h("p", { key: '4339848d45f0368cd0f964c22762bd69af6a6282', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '1b5ef3f2d14e3ce9656ae353890e860b46c50820', class: "payment-item__payment-description" }, h("b", { key: '98c821811535957e33fb8f513c9707bf81c038df' }, (_c = this.payment.payment_type.description) !== null && _c !== void 0 ? _c : this.payment.designation)), h("div", { key: '82e0acb526ee0b2adba983f325b5d48cb0210c75', class: "payment-item__payment-actions" }, h("ir-button", { key: '6c71e7cb40f94d42b5f1f5a11295c4da8d20e6a4', class: "payment-item__action-button", variant: "icon", onClickHandler: () => {
                this.editPayment.emit(this.payment);
            }, icon_name: "edit", style: colorVariants.secondary }), h("ir-button", { key: '80f1d309b7c013c364d6603bcdbcd663c93a0926', class: "payment-item__action-button", onClickHandler: () => {
                this.deletePayment.emit(this.payment);
            }, variant: "icon", style: colorVariants.danger, icon_name: "trash" }))), this.payment.reference && h("p", { key: '4dfc422173b60ea11b578dae6277f092b7f460ff', class: "payment-item__payment-reference" }, (_d = this.payment) === null || _d === void 0 ? void 0 : _d.reference)));
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