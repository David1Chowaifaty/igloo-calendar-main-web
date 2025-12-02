import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { P as PAYMENT_TYPES_WITH_METHOD } from './global.variables.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$1 } from './ir-custom-button2.js';
import { v as v4 } from './v4.js';

const irPaymentItemCss = ".payment-item__payment-item.sc-ir-payment-item{display:flex;flex-direction:column;min-height:2.5rem}.payment-item__payment-item.sc-ir-payment-item p.sc-ir-payment-item{padding:0;margin:0;box-sizing:border-box}.payment-item__payment-body.sc-ir-payment-item{display:flex;flex-direction:column}.payment-item__payment-fields.sc-ir-payment-item{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item{display:none}.payment-item__payment-toolbar.sc-ir-payment-item{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-toolbar.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item{display:none}.payment-item__action-button.sc-ir-payment-item{cursor:pointer}.payment-item__payment-amount.sc-ir-payment-item{font-weight:700;white-space:nowrap}.payment-item__payment-amount.is-credit.sc-ir-payment-item{color:#629a4c}.payment-item__payment-amount.is-debit.sc-ir-payment-item{color:#ff4961}.payment-item__payment-reference.sc-ir-payment-item{font-size:12px}@media (min-width: 640px){.payment-item__payment-item.sc-ir-payment-item{flex-direction:row;align-items:center;gap:1rem}.payment-item__payment-item.sc-ir-payment-item:hover{background:#f4f5fa}.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-actions.sc-ir-payment-item{display:inline-flex}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item,.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item{display:inline-flex}.payment-item__payment-fields.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item,.payment-item__payment-toolbar.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item,.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-actions.sc-ir-payment-item{display:none}.payment-item__payment-description.sc-ir-payment-item{padding:0 0.5rem !important}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item{display:inline-flex;align-items:center}.payment-item__payment-body.sc-ir-payment-item{flex:1 1 0%;justify-content:flex-start}.payment-item__payment-fields.sc-ir-payment-item{justify-content:flex-start;gap:0.5rem}.payment-item__payment-toolbar.sc-ir-payment-item{gap:0.5rem;align-items:center}}";
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
        return (h("div", { key: '620f4a5d396b479c5c0a47bf9ce33a804dd007c2', class: "payment-item__payment-item" }, h("div", { key: 'e91fae0c7e30f9a4c9499f65c1e7b247bebc6a8b', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '1a8ea5ff120dd779d0aea79a97ff29f06ddf00dc', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '33b5bdb4a214cad388f1474dc78a4b47532db20d', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '317ef2245d9c06d10592fe003a1f204260b96af0', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'c47452c9805a9e819024ad882e1b71c0ccdd0338', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '3ac4aa0f94351da9b35b13533237d46dd95f1433', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '7eef822ede4225332ffaaf6a20052c1a88944a2c', class: "payment-item__payment-toolbar" }, h("p", { key: '9e128f4360c1243a5eec8c3f62216466d209ffb5', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '97569ad399f3c63de9ca1862d27ddbcfcb8ce970', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'f2a8bc0146a95f18e485e1fcae9476d77c21b531', class: "payment-item__payment-actions" }, h("div", { key: 'c51198da41b3b70a1a79831aedbadcf0aa72b417', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'd4384660601232c06ed5f3f3527afb6ef0a4baae', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '8d4ba07c4afbb7b279a7048fe752f0a07f1988ef', name: "user", id: this._id }), h("wa-dropdown", { key: 'f85f3043d5a8f5f095ab3e909d264184826129d4', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: 'b52cc30bb72426de5f3fae1c0d9f86f4f6611f79', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '41a3c56ca0923b15ef912665130b534c1a1a4580', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'b3137c5f2db0cc170a7964bb9d1d8fcfa704a2aa', value: "receipt" }, h("wa-icon", { key: '7408a1afacff91afdbd4990af42dfa257cb153df', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: 'cf1d3f7e4058563e9c0fc74b02f7fb9ad469b9ad', value: "edit" }, h("wa-icon", { key: '80e3ee5a461dd910a6aac4618c1203d7a5466ebe', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '909e1c60fcf330439fa8b6367b92fb506233748c', value: "delete", variant: "danger" }, h("wa-icon", { key: '02f280783a79d876cce19b3a46484f34a4f470ef', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '5d201e721dd6db32171a3f73b7dda30571d85ed1', class: "payment-item__payment-reference" }, this.payment?.reference)));
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