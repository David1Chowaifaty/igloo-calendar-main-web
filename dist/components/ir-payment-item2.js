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
        return (h("div", { key: '7c0188f3c2612e587b3e06baa8c44bdf96a02cc6', class: "payment-item__payment-item" }, h("div", { key: '37e820c7a513101feb762c85598f0820a78ac58d', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'c0910b8222c0cf91557190da2c1554d749cabb54', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'f5eca17e5d383e7712979fc7320b7681390cbfa9', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'e457fa3c2c342ade1781c37be92ddf5f7714f224', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '3e5aec4624f0f63f173098dabd6ec2a2b94d8f1b', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '02f3c917afb1180fc429c4960a23b0635086b25a', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'ad774167a9d3a580516ec8fcbb1f59218ddbfcc3', class: "payment-item__payment-toolbar" }, h("p", { key: '9b9e262061e9a5e491bc9c2385264f359d184a3d', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '757967d72a7b15dca0e5f6645d2dc06d13a322c6', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'af92ce344964b1079f4a10fcf930d64c65bc0e91', class: "payment-item__payment-actions" }, h("div", { key: '9188df419d7498b8a6ae4f10e26fcfb825a7b4ff', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '3947666de3215c17983ea61d92457223b5c6444f', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '4b754bd26cf1476d0941d61da4e52a19850713b9', name: "user", id: this._id }), h("wa-dropdown", { key: 'd0bee2d575e27dc7731bbc4c78b3f68b439db42d', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '959511e66e9fed9bbaf6116aa2cbeeb2457b185c', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'a95590c7fc956c04961340e360f3380730f25ce8', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '22f25cb5ee90a88952a402edfe6410328b99dfe7', value: "receipt" }, h("wa-icon", { key: 'e758fbcbf406d484f4bdb8c682760a1a90b0fe7f', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: '99337606369c66f3b6b4dec275a6cdb1ab97e90c', value: "edit" }, h("wa-icon", { key: 'cf198acf35aa961dd2ce9edb84d27cdd7a2b0e60', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: 'b894ddbfc432167827ba46a203d9afcd2308af7e', value: "delete", variant: "danger" }, h("wa-icon", { key: '26a46cf3e96d1af942ed68fea57297dbe0ecef7a', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '64d7cd95aa9a174915bc19fb722ab16422cc7290', class: "payment-item__payment-reference" }, this.payment?.reference)));
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