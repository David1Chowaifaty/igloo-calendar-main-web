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
        return (h("div", { key: 'ac11f498d4ccbafc5aefe1e84961dcd6cb367387', class: "payment-item__payment-item" }, h("div", { key: '8c0a5da1d0577bb1857caf7cdd20aac811fc9176', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'c2b2f8314bdd521c9b36c002e694a021b66197ef', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '1ec83be83370051d4f9c1ef5f3e292bd86b72539', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'b502bb7d55f91f73b496254aab9c8ce6d6317a9c', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'dc8008cf807ae805b147691695dec28f6d3048e0', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '3903c069776b155a7b310d6a55cb2da95ed4564e', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '6f73abb83082343af90194b03b2de0069b19eeae', class: "payment-item__payment-toolbar" }, h("p", { key: 'f81cc85698ca010f1545eecf6b2a50a1d4668edc', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'e1cf7871fff27a30faea0b98b7fbf21571f6ba26', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '1baadee6ce99f4c2e50c13736aed81a7ab82aa02', class: "payment-item__payment-actions" }, h("div", { key: '7ed88918d591d2a38cebfb2f29835d0528781f3b', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '502a0176211dcf52f698b0e6eb56305c5c8ec656', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'a5765068a7accc3ff15c13252f5da259d9588501', name: "user", id: this._id }), h("wa-dropdown", { key: '39679caf304021ba2f2af95c8a2b2dabae437a1c', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '9c0775a380d981aa8478fd433e210a0ec5ada6bc', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '0206f39cf265c7fdd4153e25c7e7ae9f2f0b669f', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '85fa3c59bfb35b29fde6334eedf10473814ea987', value: "receipt" }, h("wa-icon", { key: '32d6dd9c947dea89c1b7b342424adb44c7e26344', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: '6299b02cb384c3a865d2fa54e837b73a743093bf', value: "edit" }, h("wa-icon", { key: 'b50af1ca74a986b2bab5c7462cc13e6e2aa82521', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '9c5c5f31fa71e2c326561472f35839f584898735', value: "delete", variant: "danger" }, h("wa-icon", { key: '4097ba428905220d56f337a70b76169df3cac649', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '62ccb566e7dd1c6d2942dbfb0307c8b4796fc55f', class: "payment-item__payment-reference" }, this.payment?.reference)));
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