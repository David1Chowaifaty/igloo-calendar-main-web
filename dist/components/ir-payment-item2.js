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
        return (h("div", { key: 'f56a3a75278b2084f6f85329d9f601f5548b616b', class: "payment-item__payment-item" }, h("div", { key: '029a90e2a994080cb4e4afbbdfbc491409d5f08d', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '3d8f9ad892277e00a344067d150974251189a48a', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '9e10537832499c63f798c19a72e1144956dc0f5c', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '1d478aaa66e0014bf5e28517c9b88212cd0342bd', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'd9945b4c17dffc870d41b2b8478fb48ca7711b22', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '4095644f81b616ee04339e854b66b004cf0641b1', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'bf1fd98084be66e92775cf209d4e06e8a9e20dd5', class: "payment-item__payment-toolbar" }, h("p", { key: '25b89adaebba1f438b5c5d5d230d4a83bbd06de9', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '4239bf2639568d85430353c985485493db3bcbcb', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '25698eaee1c6e7503379cdf5c85a0b193fe634ef', class: "payment-item__payment-actions" }, h("div", { key: '739d1418c508f8270853697abbe8d293a9ff4e90', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '99208f30d48546421012262e9492f001a389e9ac', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '0dab7d8eacc7f60027ec7f332d0a532674547821', name: "user", id: this._id }), h("wa-dropdown", { key: '48149cc7c86a5f8aa3899c18beb40da76580ca6b', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: 'd8bb2a444dea05daa1b35dbb932d20f1e34e54d5', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '5ea2ca523eda06b19ccb8569f2bf675ffddb6c76', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '188b436635cd8d7315251ddd071a193dab4c358a', value: "receipt" }, h("wa-icon", { key: '004bd115115a45d12998a182ec4d3e0ca71c167b', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: '9aa4dd74a70f39adbac535b1036deb865665405c', value: "edit" }, h("wa-icon", { key: '089d4ead5f80fdf2e1b3a5f3f9f3b714f5306cd4', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '04d866469225ba31eb456fe664591bcc94b1b927', value: "delete", variant: "danger" }, h("wa-icon", { key: '889b0521509c1dd64170de4ead17e83ba2baad71', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '6a05e2b935b383b830a87302cfebc7a7f091f3d5', class: "payment-item__payment-reference" }, this.payment?.reference)));
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