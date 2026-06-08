import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { P as PAYMENT_TYPES_WITH_METHOD } from './global.variables.js';
import { h as hooks } from './moment.js';
import { v as v4 } from './v4.js';

const irPaymentItemCss = ".payment-item__payment-item.sc-ir-payment-item{display:flex;flex-direction:column;padding:var(--wa-space-s) var(--wa-space-l);border-bottom:1px solid var(--wa-color-neutral-100, #f4f4f5)}.payment-item__payment-item.sc-ir-payment-item:last-of-type{border-bottom:0}.payment-item__payment-item.sc-ir-payment-item p.sc-ir-payment-item{padding:0;margin:0;box-sizing:border-box}.payment-item__payment-body.sc-ir-payment-item{display:flex;flex-direction:column}.payment-item__payment-fields.sc-ir-payment-item{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item{display:none}.payment-item__payment-toolbar.sc-ir-payment-item{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-toolbar.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item{display:none}.payment-item__action-button.sc-ir-payment-item{cursor:pointer}.payment-item__payment-amount.sc-ir-payment-item{font-weight:700;white-space:nowrap}.payment-item__payment-amount.is-credit.sc-ir-payment-item{color:var(--wa-color-success-50)}.payment-item__payment-amount.is-debit.sc-ir-payment-item{color:var(--wa-color-danger-50)}.payment-item__payment-reference.sc-ir-payment-item{font-size:12px}.payment-item__action-trigger.sc-ir-payment-item::part(base){height:auto;width:var(--wa-space-s)}.payment-item__action-trigger-icon.sc-ir-payment-item{font-size:1rem}@media (min-width: 640px){.payment-item__payment-item.sc-ir-payment-item{flex-direction:row;align-items:center;gap:1rem}.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-actions.sc-ir-payment-item{display:inline-flex}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item,.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item{display:inline-flex}.payment-item__payment-fields.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item,.payment-item__payment-toolbar.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item,.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-actions.sc-ir-payment-item{display:none}.payment-item__payment-description.sc-ir-payment-item{padding:0 0.5rem !important}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item{display:inline-flex;align-items:center}.payment-item__payment-body.sc-ir-payment-item{flex:1 1 0%;justify-content:flex-start}.payment-item__payment-fields.sc-ir-payment-item{justify-content:flex-start;gap:0.5rem}.payment-item__payment-toolbar.sc-ir-payment-item{gap:0.5rem;align-items:center}}";
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
        return (h("div", { key: '84e8b3591e334b8b8d15197d239db688ed3fa504', class: "payment-item__payment-item" }, h("div", { key: '5bc4a26e1d042ab97ae72995a48f19916b9c56af', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '69975a91e23f1c8e1cf6ccbb99aa49d4264a7070', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '266cd85340a20e588d3d12d5ea9910b8240ccddc', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'b63391f1b7ae48bce33b42309017baed94c60a98', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '54f19235c85d4b402dadbceed4e476763f9840b6', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: 'abfa5b0b400a4776c5c916f7435a264691db24ac', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '06d75e36120618c30b787078804e22a2040608b0', class: "payment-item__payment-toolbar" }, h("p", { key: '5ef646fa3e7dbe3359edd0cffeb447e8489090aa', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '35034a127e7c0768c7f5611289fa7d16d2a59526', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'ccc9f1f8eb02c70c42c0a6770a92606d4870c184', class: "payment-item__payment-actions" }, h("div", { key: '05d7a65fd53bc43f727e7bdf831603deaef284e0', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'e283e697ff5e078f54ee1306dde056e24669c4e6', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '9f2041c1af3ab829ddebad1e5c11ecda0535989c', name: "user", id: this._id }), h("wa-dropdown", { key: 'ca28237a12f86c55c8ecacf8f5d7cdf309b899db', "onwa-hide": e => {
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
            } }, h("wa-button", { key: 'eed50af38946e86da8ce0665e724727fd1a54479', size: "small", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'cc0c4e7601620e9458ed867acbbc31c479201d64', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '9641f645a4c22d402434f8ff93a62af3a57a7bd4', value: "receipt" }, "Print Receipt")), h("wa-dropdown-item", { key: '405707bdfe8a0a946a40ab3f7c72aae951220501', value: "edit" }, "Edit"), h("wa-dropdown-item", { key: 'd0ff3bab36032916bd86cefd6306d78c59043e43', value: "delete", variant: "danger" }, "Delete"))))), this.payment.reference && h("p", { key: 'cf85d4e66d205d287754420f1506e0095dbda7a4', class: "payment-item__payment-reference" }, this.payment?.reference)));
    }
    static get style() { return IrPaymentItemStyle0; }
}, [2, "ir-payment-item", {
        "payment": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-payment-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPaymentItem);
            }
            break;
    } });
}

export { IrPaymentItem as I, defineCustomElement as d };

//# sourceMappingURL=ir-payment-item2.js.map