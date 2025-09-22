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
        return (h("div", { key: '3fa8b9f9462eae6c5cd3522bfc6b2320c4f4f5f2', class: "payment-item__payment-item" }, h("div", { key: '59e7d25771ba722d1f6997af154ca498401b9de4', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'e9230a12d70881835bff61f2428a509bc83e497b', class: "payment-item__payment-fields", part: "payment-fields" }, h("div", { key: '7859d3e865bad874899cb150e6900a62233a19ac', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("ir-popover", { key: 'ff46746128596e569a5c60f17790de9505a547fc', trigger: "hover", content: `User: ${this.payment.time_stamp.user}` }, h("ir-icons", { key: 'da38cb477e968f54249aa4e0f9f2ec08b1ad3a5a', name: "user", style: { '--icon-size': '0.875rem' } })), h("p", { key: '6b8cd74e66d80fe7541cee053423d3faedb3b56b', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY'))), h("p", { key: '2c46ead2e825fcb349b2c051ad3901968045cffd', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '4eaffba0e60ddb0a4d751daf800abbdd77f99fd8', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '40223b119534e4d4ffabb3f5922a4fe7037b527c', class: "payment-item__payment-reference" }, (_d = this.payment) === null || _d === void 0 ? void 0 : _d.reference)), h("div", { key: 'fd81c6b070ebae39048af9a7095dd539e7b06e25', class: "payment-item__payment-toolbar" }, h("p", { key: '7c5a1b68050bdea5a6b91b9fe9a2ff1b6a5be2c6', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '4122cf76a197ad458d94d6b466e5639e3f743093', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'b30e96e98bec199bed86bf9455d9a5064daf1d3b', class: "payment-item__payment-actions" }, h("ir-button", { key: '0e2bb7002f9383bcb4141dcbcb1cbef4756412ef', class: "payment-item__action-button", variant: "icon", onClickHandler: () => {
                this.editPayment.emit(this.payment);
            }, icon_name: "edit", style: colorVariants.secondary }), h("ir-button", { key: 'a8f65b493dc8aa3fb7081540fdcbbac507aa933d', class: "payment-item__action-button", onClickHandler: () => {
                this.deletePayment.emit(this.payment);
            }, variant: "icon", style: colorVariants.danger, icon_name: "trash" }))), this.payment.reference && h("p", { key: '754e90a8f9cf9631331eed2c8fde2308ffc38a05', class: "payment-item__payment-reference" }, (_e = this.payment) === null || _e === void 0 ? void 0 : _e.reference)));
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