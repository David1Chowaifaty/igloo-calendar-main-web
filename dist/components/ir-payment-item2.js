import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { P as PAYMENT_TYPES_WITH_METHOD } from './global.variables.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$1 } from './ir-custom-button2.js';
import { v as v4 } from './v4.js';

const irPaymentItemCss = ".payment-item__payment-item.sc-ir-payment-item{display:flex;flex-direction:column;padding:0.25rem 0rem;min-height:2.5rem}.payment-item__payment-item.sc-ir-payment-item p.sc-ir-payment-item{padding:0;margin:0;box-sizing:border-box}.payment-item__payment-body.sc-ir-payment-item{display:flex;flex-direction:column}.payment-item__payment-fields.sc-ir-payment-item{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item{display:none}.payment-item__payment-toolbar.sc-ir-payment-item{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-toolbar.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item{display:none}.payment-item__action-button.sc-ir-payment-item{cursor:pointer}.payment-item__payment-amount.sc-ir-payment-item{font-weight:700;white-space:nowrap}.payment-item__payment-amount.is-credit.sc-ir-payment-item{color:var(--wa-color-success-50)}.payment-item__payment-amount.is-debit.sc-ir-payment-item{color:var(--wa-color-danger-50)}.payment-item__payment-reference.sc-ir-payment-item{font-size:12px}@media (min-width: 640px){.payment-item__payment-item.sc-ir-payment-item{flex-direction:row;align-items:center;gap:1rem}.payment-item__payment-item.sc-ir-payment-item:hover{background:var(--wa-color-neutral-fill-quiet, #f1f2f3)}.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-actions.sc-ir-payment-item{display:inline-flex}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item,.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item{display:inline-flex}.payment-item__payment-fields.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item,.payment-item__payment-toolbar.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item,.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-actions.sc-ir-payment-item{display:none}.payment-item__payment-description.sc-ir-payment-item{padding:0 0.5rem !important}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item{display:inline-flex;align-items:center}.payment-item__payment-body.sc-ir-payment-item{flex:1 1 0%;justify-content:flex-start}.payment-item__payment-fields.sc-ir-payment-item{justify-content:flex-start;gap:0.5rem}.payment-item__payment-toolbar.sc-ir-payment-item{gap:0.5rem;align-items:center}}";
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
        return (h("div", { key: '44c867c35e0baf2ae5e06ecb3f2b2c67e4bfb897', class: "payment-item__payment-item" }, h("div", { key: 'd17521cf3595a046535f182876e375de0522157e', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '18c0f6c495d0ea340dbdb3d28195b0ac5c3eb116', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'bfb05225fd9f241d0becbfb2c857cdade39f5277', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'cb7e4443ae54908bb8e77cf1910293f325a91e1f', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'c96248a8fb0318af136e9191f33fdfec93976f7f', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '10621f40bd3166b93512a9a3eca0f6954e9dab4f', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'aafa891ea166a8e5bec583d5594b713603800b73', class: "payment-item__payment-toolbar" }, h("p", { key: 'a06f1f52d7c27d6c03184710caddbe88194f4f9c', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'd45fc8c97471dda2b50e0490d1c9e91e6ed4fd44', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '7e775ba173440e20a49f7c78ade2813325cb98de', class: "payment-item__payment-actions" }, h("div", { key: '8a13475ec73fb8db9847fa7f27ead557d500487a', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '2af18c7db862ba97089fe2bfe6ae252371e0d5b3', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '0b8a8ac4fe2baa36076ef8a1740a00e918aa392b', name: "user", id: this._id }), h("wa-dropdown", { key: '82b4de1891c20091be8b01e0ff8fa76ef5eed8dc', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: 'd982ffa86c2a67c8451e32cbc4948f04b08ce841', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '18502163deced6bc1b5aecb21b37ef75ecb1ee6e', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'a6dbd966d96755018f48aa4f6c1af4033b33b48a', value: "receipt" }, h("wa-icon", { key: '025a479813b911bd51ce6a03f1e13bc8299f4f24', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: 'af91e757a419027aad03c3c5c3b738251c1cc4f6', value: "edit" }, h("wa-icon", { key: '7a75ea1eda796569d54d6e820091239e8aa386bb', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: 'fd045ef4b56125751182cadb46cef832f6038009', value: "delete", variant: "danger" }, h("wa-icon", { key: '6953a6518ba320098661160242ebb6452839a768', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: 'c679239dd79ffdc3e18fcdc0ad699557cb6c23cb', class: "payment-item__payment-reference" }, this.payment?.reference)));
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