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
        return (h("div", { key: 'ce5406c689e02b234515bdd59e1b30077a4e8c51', class: "payment-item__payment-item" }, h("div", { key: '63dce9d730e4a0d7aca0639235cbcc1883eb39c5', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '9304a9d1bb0d809fc71e938d72b3d201f4d79db0', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '5a9ba554116c7bb92df706f871277afd17eae8b3', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '2701c848972f98e9ff2a2f48a801fdd1238c71a2', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '33cc9d662b96a175b7495165a645e65af26d0125', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '12600876408e6872907899975cf65ed15aa5f550', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '73c3f68cd0ca7ac3c12b5f4a61a6d5dcc8fd9b26', class: "payment-item__payment-toolbar" }, h("p", { key: '04393358df77be456c44e0336ca38aabc986e079', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '9fdb4f5a665a396e030fd26b74ca3e0da44bd957', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '8d466ff397bf0040c7c75d9ab8ffa22728d27593', class: "payment-item__payment-actions" }, h("div", { key: '101dbb208d40970bfe461d334457742fb526948e', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'b153b9d1a6a0099103adf023778470cab7f93797', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '65970150d1f02a678ca6762dffafb2213bb333d0', name: "user", id: this._id }), h("wa-dropdown", { key: '60a85a1dd198747a973d23071ec6dd32a2e24d44', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '301b0dfc6a7ecddef531d89f87e2aaa9721ec1e2', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '4abd3c89150d17bbafc60ca6d803b4daaf1dacf8', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'd31e7e0434d51c8ae1aa0b7bdc69588ab4865068', value: "receipt" }, h("wa-icon", { key: 'c92af65b48c55ea68c6baa0004d70f9b690734f5', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: '2741452fc22db4648257a37090a5a4590c741031', value: "edit" }, h("wa-icon", { key: '8f24c5c7238ae3e938a5d64f8ecce046dc40b4ce', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: 'b11e4255c4e05ee5c4d7edcfa4f48f60fa3d6bcf', value: "delete", variant: "danger" }, h("wa-icon", { key: '0c327553e33fc2acb8d8fb73f09c2760bb294a7e', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '220b89638a003096a3a848851e7e6a7ac283cc7e', class: "payment-item__payment-reference" }, this.payment?.reference)));
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