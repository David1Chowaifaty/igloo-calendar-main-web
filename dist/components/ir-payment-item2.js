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
        return (h("div", { key: '27116ec119e597a446a7372aa04a4bcd625bf96c', class: "payment-item__payment-item" }, h("div", { key: '825fd3c62cf3d22326d2ed4198afef543658e4c1', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '81b57693004994c0c5e0c23cb9fe4ef0193f6deb', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '477e44a40926e51f6dedc5c85a98cbc85744bafb', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'fa7a04d1e20913ece740b46c0f6debfe14982ebc', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'd47e28adf51986229f00880a46e8825bc2bb13f2', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '32b8857a3d8b76ff4d9416c7e49249db2ff043cc', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '333d3c4eaf2ed92c2c04a91a061a6dbcae0007c8', class: "payment-item__payment-toolbar" }, h("p", { key: '74001cab8d98a6fbc4092fbd09d97917fb1b2e9f', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'd3b964a68e5ac18210b34c849b9992e5ce0cb33b', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '9dc6599e35998b47f2cb1ee99f5c8450b43cf973', class: "payment-item__payment-actions" }, h("div", { key: '8ca6bf46804d7047eaa49238c9fee70566ab191f', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '1144e8565d124eec0983abedd0f90fa594e2222f', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '39a05cd36c55cd5064bf7c484e1bfcbc45d04a6a', name: "user", id: this._id }), h("wa-dropdown", { key: '61103426421e6db7847d57f1e2067897f16f6948', "onwa-hide": e => {
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
            } }, h("wa-button", { key: 'a165ff8bda4209e5e9dac048ff7e896c774b7257', size: "small", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '30c18523015e8ff028af8277a135b0fed96fbb1b', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '7c9a35592769e2a1ad5d4900b330dbace35a5da4', value: "receipt" }, "Print Receipt")), h("wa-dropdown-item", { key: 'a9f0a5ebc9c6c68408000aab3ddadc37e736c182', value: "edit" }, "Edit"), h("wa-dropdown-item", { key: '9165aeb192343a52d5f356d7153609aa69b4ddac', value: "delete", variant: "danger" }, "Delete"))))), this.payment.reference && h("p", { key: '0c6b76ddf60d6c386f5ea89cbb35382b5f2d1814', class: "payment-item__payment-reference" }, this.payment?.reference)));
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