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
        return (h("div", { key: '6e6d2abf2edba1b94b3b66164d80c2809e3ca936', class: "payment-item__payment-item" }, h("div", { key: 'd125a607bd255e28a7f9c0b54fca46fa9fadd971', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '5970d9b07858e2becb4afbf957458a85e6bd1ee8', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '48f8dc2c40fa0e4e4a92b9d05778c152faf26193', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '87994a93a94cc3d8ce658779a5d37e51243b86d2', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'bcb94db219bd73d2412bf1e90b34fa69960463e6', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '6ef841f24e19d7d1c80e1df93bfdd5ca16419f93', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '45aa9c022a58525908500aa13f1814c232edd2e1', class: "payment-item__payment-toolbar" }, h("p", { key: '9895a85438334855c0a36ac478fec64897a1ef5b', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '100fac2cd3ddfac1c8bff6b83c5180c784b918e5', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '9ec0370f4bf19b40cda234009bf7775ec9ac5d95', class: "payment-item__payment-actions" }, h("div", { key: 'b7a0ae66657e32ec31b0b6a19f981bd04535d445', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'ddbafeaa9d397b3b28afe1228001bf11576cc922', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '1ad7d51706e9edc811a2753a6defffd58faaddb2', name: "user", id: this._id }), h("wa-dropdown", { key: 'f50582507b5f47f9fbb95b1a3f497ea8c19a0cfe', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '4d99f27bdc0d47edc498e33bd0eefb1dfb010f1b', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '4b2c690508c514da1d9e00360dcf52977a298e99', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'f198e250b2cc84d27295d7685f2f596b07761105', value: "receipt" }, h("wa-icon", { key: '3560a4035c4c19b4e824f1dd6de83a649d6df37c', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: '766f5927b2ba9f6a20c8e129a3d5aa231ff0a741', value: "edit" }, h("wa-icon", { key: '5596a4304c17f5e5bd2f3b9985fe401231715c17', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '1f48a4040c00ea2767a021a1f4dc214fc73f186c', value: "delete", variant: "danger" }, h("wa-icon", { key: '1b42ed20a44f54dbee28fd8ca8e0b6dca84a95f7', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '648bb5e926ec45266f5f02b68d3a7d204f4e7d69', class: "payment-item__payment-reference" }, this.payment?.reference)));
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