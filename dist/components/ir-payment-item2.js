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
        return (h("div", { key: '975efda06d42fafcaf2406f7b410d644f97ce119', class: "payment-item__payment-item" }, h("div", { key: '4b9c0e754125693cacacd569618f388ea64b8059', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'fe0ed3312e70c62050b5a9c250e9717726d51dc3', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '1ca29b776e9fc30a96d5ba735c59a3059f6048ce', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '62d30c96b6f8d539e7deef2ebf0eb27330146b73', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'c4bb5cd51a94dbdfb4129e4e91c8b5776049f289', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '80578ef745c4b1407cba21d6f76553c8a2c81c51', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '23e794088d3a347624272aa091f7243ff2cdfff7', class: "payment-item__payment-toolbar" }, h("p", { key: '3adb18a0ff89f727fe8f49ad1dada8653f9214e6', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'a762aa292f963f8957e051cf77cfb3cd024d31ac', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '350fdfa2411d6cab8153344be2e63344c7f18d2c', class: "payment-item__payment-actions" }, h("div", { key: '738ee81565063211a9ac1d9eb54e63904d0125ad', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'acd35b677ae91c8043a96f95784b5c1db815a51c', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'a813bcc8097be164f4626e4b7d137bb94a1d2646', name: "user", id: this._id }), h("wa-dropdown", { key: 'efce17b008071913812681bec2e748655a64efaa', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: 'cbcfc9c1cac56062c4570ccb99a3eb0763540298', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '2ee2d4d69282fdfa079f9cd2a49cc6de9ca7414b', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '8a5c3f81212731965c85a2dd63f69a2cb7acc26f', value: "receipt" }, h("wa-icon", { key: 'bbac27273d3e85e13fad46a7671239ab3450c387', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: 'fd10e9ab856a1fdefe9f9a4fe4ba9e2771411850', value: "edit" }, h("wa-icon", { key: '8a872f06444f1c507ad1e9e46777978ffc5c8ccf', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '1cf0120bbd7a897d002e09c656234537d656426d', value: "delete", variant: "danger" }, h("wa-icon", { key: '4e45afca69a47b099896e115c48534c1ff08a5a2', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: 'e59c35660f503e1c455ccbac3019bed3d87b4d8c', class: "payment-item__payment-reference" }, this.payment?.reference)));
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