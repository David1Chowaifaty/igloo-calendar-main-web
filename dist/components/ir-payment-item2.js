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
        return (h("div", { key: '6a34883b4022f4cfd3f883cdd766b490a04438ec', class: "payment-item__payment-item" }, h("div", { key: '9fdd57ad8e1ec9406360ede6fdf493b09df4ebe2', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'c78192afb5a7e4404bb711a881b23dcea61d9018', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'df7fdd46f84d07255f3837af3b39368b4f5b9256', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '6da9a15a7f8960396b425fbf8c73a0ac626cc8c8', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '4e6d1c2c73be8b60f0a2c567ef662e8bef4052ea', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: 'f755ebf58a93db40ba3120ed869d8627a0a99494', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'b237110c8e6d706e8a0841d2b394422a22a58e85', class: "payment-item__payment-toolbar" }, h("p", { key: 'bb84ec68b249b17c1a1d2870381de3227d9cd67e', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'd9f2eb813cafaf97e283bc8357ea4c12dc47b105', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '74b0fb314920c32e55ecee1f6fd7a54ffd41c75f', class: "payment-item__payment-actions" }, h("div", { key: 'ae539d998545f2c0077c8952ec19aa25dd869fd3', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'ccd9a86db4d5be9ce5bc8a6e9520b707f5343005', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'db6eb005052a8e5e70fac91cb7980b855764de15', name: "user", id: this._id }), h("wa-dropdown", { key: 'd3f7096dcb8c03e8e6dda8734c940da6adfb8e8c', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '9027bde4140b82a414bd50d90c0e10f33cd91ea1', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'dc73cb29fcb0387aeb85672d208b1f935d7c8e99', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'aa6b2e827d75bf77c08a83a2c73e88c8724aa148', value: "receipt" }, h("wa-icon", { key: 'ec1d0350921f87f76ce8cb97c94fadcc7dfbddb1', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: 'a88a781921e7f7d06d0189a1d8e866b41aadc446', value: "edit" }, h("wa-icon", { key: 'abfb8e483d43fdf7a621ddf4dc5086cd1ce33044', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: 'ab34c0e3cbd8566e71ef00e9c1aa29b3f4695f50', value: "delete", variant: "danger" }, h("wa-icon", { key: '74d335b8640787d9f2c201d7224db71c190352d6', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '4bccf7955143345217fa61163e161d0cdfbfc086', class: "payment-item__payment-reference" }, this.payment?.reference)));
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