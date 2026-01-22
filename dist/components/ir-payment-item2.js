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
        return (h("div", { key: 'f85c8e83cb45203b8ac84609547e8e99ad95aa68', class: "payment-item__payment-item" }, h("div", { key: 'b33668c47be3370a48fafe0350b1ef15a160767d', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'e3b516a03f7f120e8f288303fd1e3d6c93f5bcc2', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '6a6a3b6b4fe25a954d449724b7b2c4cc259752a9', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'd54aac37a9f9df2ae42801c8561b543a3c0beca4', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'e610f01f1b25deb67b193973e8ca54cede6432fd', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: 'e73a0ed3dd7ed1c2fdd4c44997ae7e4ab7469fd3', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '4f4f834072c80d15058b21e48a1c8195ec443244', class: "payment-item__payment-toolbar" }, h("p", { key: '8a6e9167b1932420bea047c1e3a2855f7f78848a', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '5c591d7c0b184f96558775387187dfe7a824c9c4', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '0a6a1a480fff62b9abe0ea10d3682965892013e7', class: "payment-item__payment-actions" }, h("div", { key: '6f21e5137fcf873ff569e0472882373c29b03cb6', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'aa11245e79e1921e7c864b518e8bf44e50201184', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '5b96c83da0554be1187356d8b8b3249d4b8ed749', name: "user", id: this._id }), h("wa-dropdown", { key: '2475ab93f65c329804c5c26d4e304f00c750af45', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '1f8b4cc814047827b79740689740a8e27185e701', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '9b7b35ad834413a4382b2e9f980fbcd62e962a1f', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '2600136d6bbd710621235131faa5e0ac0c4e8414', value: "receipt" }, h("wa-icon", { key: '2da5937d326f37be27030dce01272b5573e6505f', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: '80adaf2f8d5c7f44197398ec8ee0bcef9ac2ae8c', value: "edit" }, h("wa-icon", { key: 'e0997c8afbbd2de5833b14e79fe960350aa7d9c9', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '43f09261a3f4d1c6f2fc245e5eb84916ad7b2108', value: "delete", variant: "danger" }, h("wa-icon", { key: 'd39aea05f5d9a8edfd7384cc8020d76f8158d144', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '80612ce009403a6622e135a834c646885da0370f', class: "payment-item__payment-reference" }, this.payment?.reference)));
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