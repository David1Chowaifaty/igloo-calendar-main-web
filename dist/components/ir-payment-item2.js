import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
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
        return (h("div", { key: '680b5806472224ef21b26b1be409d6a0ba0a0635', class: "payment-item__payment-item" }, h("div", { key: 'aff1813e29fe3cbd141d0005b0f9c115b8484e71', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'c6a9f0d2e2b77d9c41c5617232d90b6da29c193f', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '195132f153218e8e7fe2c68871cebc27d0896ae6', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '3ec05d6a60792103b3e4756f54e25306ba20ee3c', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '49883eaa4c4af338ea035402488d17b82b76a1c7', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '8d0973db2ebbeb49de117146b32c3dcb1c049711', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'be8ce8e0936530b7d74656e614f128acf1ad4763', class: "payment-item__payment-toolbar" }, h("p", { key: '61e5af72f7c4d38fe1938df7003eacc13bc7247c', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '5ba319cd8cf00f5793d0e3a916bea276d0081b5f', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '0c082abcc34909fefeccbba0aa5a807a75f4cc51', class: "payment-item__payment-actions" }, h("div", { key: '9194b2116fa139810293b1804f440580cda68295', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '4a06b5c7b4d2719e4f73c2e7f3a4335e2462dbd0', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '524a5b51306f0a252c70dfd5707bde06c55e68cf', name: "user", id: this._id }), h("wa-dropdown", { key: '16bae63621c06359f996bfe2c3d78f9ff4a0563e', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: 'd2606a135f555fca5f431015a1a4e3d84178a58a', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'a202d72e33056ea876e35c7a36668c58f2d8b5e5', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '7faa85647744ffa87eeab4db81f59df26005c501', value: "receipt" }, h("wa-icon", { key: '136ce5df193316c9f1abe55a161a019c26a3c84e', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: '2513c5dd21ca6482cc26d81d06450d229738cdd4', value: "edit" }, h("wa-icon", { key: '58941d21793acb37cc875271759f5775d33ca29c', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '6ec81984ea2b3d2f550aa7b0ae785acf8e6a7138', value: "delete", variant: "danger" }, h("wa-icon", { key: '593c7eb130db327c77659c2674b015b340864584', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '46085969885c82f21e599f6fd41096ae5fdfa7cb', class: "payment-item__payment-reference" }, this.payment?.reference)));
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