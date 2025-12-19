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
        return (h("div", { key: 'e2994dfa2f99c1dd1f70ba880ae6bc31cd8d02ed', class: "payment-item__payment-item" }, h("div", { key: 'ae8f99719633440eef158a7994c575a5007d9088', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '241bbb0ef75b937229e7fab51cceb75a18e4de2e', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'a00a783759856dc43ec01d25d9d1658b51edd585', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'b4b3d8fe96170e115e1fd3f1983b39f377770820', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'f93fefa188c97e968dda02a76034c0273287923d', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '454000a0aebd50d0166408d4b7f65c3de2e4253f', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '4073d88259d66d8bf736f870f20df334724ae0b5', class: "payment-item__payment-toolbar" }, h("p", { key: '39849eb11cb398280385933c3c5218c39955cb6a', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '3261de68396b9c4c78275eb434b6811d7624f5ae', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '889aa8288a41ae9dfb9863b64e2a022b420be6c0', class: "payment-item__payment-actions" }, h("div", { key: 'dbc54eeec82817d541280cbb73a77e14ff3a0653', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '4abe5e2c65dc331de96beac22d2e32dce6e97ecf', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '1d2e2ebe537f9c72652950b664206f8a0a753d91', name: "user", id: this._id }), h("wa-dropdown", { key: 'c8cd03409d6be7838fa70713d3da21f8f1a4485b', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '4dce11f2c9d274b38d38979b32ab67ee2316b508', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'c1c7c395648fbaa510eb8ffefce5e485d746f171', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '65c9758af815d35f1654013d9026c2a2c521104b', value: "receipt" }, h("wa-icon", { key: '14e51046ec9d12e664026e8e226cf1780cf7b6d9', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: 'c8a4cdfa92a8d54664d3eea13ad6347bddae998d', value: "edit" }, h("wa-icon", { key: 'f7eb7facb998a65e82f1cd65bed4c7ccab9760d5', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '0acf71948b63819ee0e670b367511462766e8ef7', value: "delete", variant: "danger" }, h("wa-icon", { key: 'a75ea53e8719a770692b12d09a682b0967354ee6', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '28fa2ad1dc9ad3a37b55a4862dcd278950146ae7', class: "payment-item__payment-reference" }, this.payment?.reference)));
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