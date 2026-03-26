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
        return (h("div", { key: '036f022f68c317de1f367325131fdac532b02d98', class: "payment-item__payment-item" }, h("div", { key: '204c90dd691732827fd1215331809e0673ca2f3b', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'a248e9cc72642bee042fafb69deb9a520403c94c', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '2b11a66efe1e12e05f9640dba09d6df373b03219', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'f14963f1fb74f431fc20f0ae13220cf36260630c', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'c28f1309144f75896bae28f335cc4e76ac20fa75', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '59560df4e0cfa46183ea14f6b86748a79d886928', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '44a6ff1d59b5b2e78ee544c6f0d384b395626418', class: "payment-item__payment-toolbar" }, h("p", { key: '59a97e2c8b74fb5033b084cc3a90526b7356cf6f', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'cca3c45f9424d0de57ae5d188dd56a48fa925277', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '8e32992db0eba4ebf0d99ea805fb73a69c57a1b5', class: "payment-item__payment-actions" }, h("div", { key: 'd4a904a1446904540564ec35207c16d3771a92b3', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '8d59e23a6b39e2ea5cd84f2df5a2ef41276559f1', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'cd92af44f61effc456329fbfc0090a30bb8baed0', name: "user", id: this._id }), h("wa-dropdown", { key: '38eaf7b7f8bb04c5a1c9333553e31f68b9e83672', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '2bc4993874a5cc587e48ecfe6165b01078de32ab', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'e06f69389c216bec8f5b9a3f8600b2e46e1825fc', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '09affa1f365bba56506dfdfd860a3b81f690278b', value: "receipt" }, h("wa-icon", { key: '3555bbcc414c683415dffbe86fe31c66f4fdb32e', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: 'fd0549a99ab8adef7273c54d9bbfeae94cfb8d5e', value: "edit" }, h("wa-icon", { key: '0568eca47690c849ac1d97a537b547b2fac216b0', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '635bec4a9a0b3e86916ddaf56d6afbb9a36fa12c', value: "delete", variant: "danger" }, h("wa-icon", { key: '82705ff4d436f3c72ea77407315f542f5df2e433', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: 'a1f0cc0d00aa09c0477e708b56d3fd7ce054f355', class: "payment-item__payment-reference" }, this.payment?.reference)));
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