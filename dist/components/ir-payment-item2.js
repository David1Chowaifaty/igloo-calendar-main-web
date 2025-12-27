import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { f as formatAmount } from './booking.js';
import { P as PAYMENT_TYPES_WITH_METHOD } from './global.variables.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$1 } from './ir-custom-button2.js';
import { v as v4 } from './v4.js';

const irPaymentItemCss = ".payment-item__payment-item.sc-ir-payment-item{display:flex;flex-direction:column;min-height:2.5rem}.payment-item__payment-item.sc-ir-payment-item p.sc-ir-payment-item{padding:0;margin:0;box-sizing:border-box}.payment-item__payment-body.sc-ir-payment-item{display:flex;flex-direction:column}.payment-item__payment-fields.sc-ir-payment-item{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item{display:none}.payment-item__payment-toolbar.sc-ir-payment-item{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-toolbar.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item{display:none}.payment-item__action-button.sc-ir-payment-item{cursor:pointer}.payment-item__payment-amount.sc-ir-payment-item{font-weight:700;white-space:nowrap}.payment-item__payment-amount.is-credit.sc-ir-payment-item{color:var(--wa-color-success-50)}.payment-item__payment-amount.is-debit.sc-ir-payment-item{color:var(--wa-color-danger-50)}.payment-item__payment-reference.sc-ir-payment-item{font-size:12px}@media (min-width: 640px){.payment-item__payment-item.sc-ir-payment-item{flex-direction:row;align-items:center;gap:1rem}.payment-item__payment-item.sc-ir-payment-item:hover{background:var(--wa-color-neutral-fill-quiet, #f1f2f3)}.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-actions.sc-ir-payment-item{display:inline-flex}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item,.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item{display:inline-flex}.payment-item__payment-fields.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item,.payment-item__payment-toolbar.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item,.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-actions.sc-ir-payment-item{display:none}.payment-item__payment-description.sc-ir-payment-item{padding:0 0.5rem !important}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item{display:inline-flex;align-items:center}.payment-item__payment-body.sc-ir-payment-item{flex:1 1 0%;justify-content:flex-start}.payment-item__payment-fields.sc-ir-payment-item{justify-content:flex-start;gap:0.5rem}.payment-item__payment-toolbar.sc-ir-payment-item{gap:0.5rem;align-items:center}}";
const IrPaymentItemStyle0 = irPaymentItemCss;

const IrPaymentItem = /*@__PURE__*/ proxyCustomElement(class IrPaymentItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.editPayment = createEvent(this, "editPayment", 7);
        this.deletePayment = createEvent(this, "deletePayment", 7);
        this.issueReceipt = createEvent(this, "issueReceipt", 7);
    }
    payment;
    editPayment;
    deletePayment;
    issueReceipt;
    _id = v4();
    render() {
        const isCredit = this.payment.payment_type.operation === 'CR';
        const paymentDescription = (PAYMENT_TYPES_WITH_METHOD.includes(this.payment.payment_type?.code)
            ? `${this.payment.payment_type?.description}: ${this.payment.payment_method.description}`
            : this.payment.payment_type.description) ?? this.payment.designation;
        return (h("div", { key: 'bc0fee3788e149608eb8bfe461234fed9ce20e21', class: "payment-item__payment-item" }, h("div", { key: '4350aedf7feb396dd914a864f46865b565333bee', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '74bc27db0eeed52612fe6806e12cdab0b80e6bbd', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'a15c65ab4c1386d07618e82b2ff83f70b2321453', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'b97a6788daf5c29e61675f38231f093112775fa6', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '19fef72ffda799d902cde9fee3a5b647819acccc', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '14b6de3df04524ec7709b786f27f8b1df7db55a1', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '07255dab8c999ec57c4e0c603aa651c5b7763b0c', class: "payment-item__payment-toolbar" }, h("p", { key: '26cf0f24db13788049cc164f6498e2f4a376079f', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '147349ab20306da9b89a46ea047dc05203e6903d', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '7d55258a9892fe67364ff626ad4e6f1231b2caa5', class: "payment-item__payment-actions" }, h("div", { key: 'c812e0c3017439ee16a87554fd1c84c5d71ae620', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'e4dd48198fddb8b739b2afea97ebf0163ed4550b', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '549c1b421203744253505a0c3c337daf7d10d2f5', name: "user", id: this._id }), h("wa-dropdown", { key: '92e081f94f92dba9e90e11ac95fdf431a86c7955', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": e => {
                switch (e.detail.item.value) {
                    case 'edit':
                        this.editPayment.emit(this.payment);
                        break;
                    case 'delete':
                        this.deletePayment.emit(this.payment);
                        break;
                    case 'receipt':
                        this.issueReceipt.emit(this.payment);
                        break;
                }
            } }, h("ir-custom-button", { key: 'fee3ac2586c9f9d1491c74fdc95e786a8e54685b', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '3824ebe94438ddabeedeeb0062367106b8acca21', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'd01859fb0e3e2079a36564a49227f9c724611ff7', value: "receipt" }, h("wa-icon", { key: 'bc8b154b0f8322dc1c57faf5889b545d317da043', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: 'ffaa24a1b48644cf7f3baacfd34696f576086384', value: "edit" }, h("wa-icon", { key: 'aa09383a83da74277b084a1a761bf367a5a164b4', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '55e417da97228ef170512c7d3085646d0e1ebd3c', value: "delete", variant: "danger" }, h("wa-icon", { key: 'c5bc08a71b3cfdc2e30a4683ea7e3a1afc0fa25d', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: 'b2d715a6c8c276ca9d8485ac4a5d7cef6c37d8cd', class: "payment-item__payment-reference" }, this.payment?.reference)));
    }
    static get style() { return IrPaymentItemStyle0; }
}, [2, "ir-payment-item", {
        "payment": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-payment-item", "ir-custom-button"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPaymentItem);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPaymentItem as I, defineCustomElement as d };

//# sourceMappingURL=ir-payment-item2.js.map