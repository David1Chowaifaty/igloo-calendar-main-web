import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { P as PAYMENT_TYPES_WITH_METHOD } from './global.variables.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$1 } from './ir-custom-button2.js';
import { v as v4 } from './v4.js';

const irPaymentItemCss = ".payment-item__payment-item.sc-ir-payment-item{display:flex;flex-direction:column;padding:0.25rem 0rem;min-height:2.5rem}.payment-item__payment-item.sc-ir-payment-item p.sc-ir-payment-item{padding:0;margin:0;box-sizing:border-box}.payment-item__payment-body.sc-ir-payment-item{display:flex;flex-direction:column}.payment-item__payment-fields.sc-ir-payment-item{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item{display:none}.payment-item__payment-toolbar.sc-ir-payment-item{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-toolbar.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item{display:none}.payment-item__action-button.sc-ir-payment-item{cursor:pointer}.payment-item__payment-amount.sc-ir-payment-item{font-weight:700;white-space:nowrap}.payment-item__payment-amount.is-credit.sc-ir-payment-item{color:var(--wa-color-success-50)}.payment-item__payment-amount.is-debit.sc-ir-payment-item{color:var(--wa-color-danger-50)}.payment-item__payment-reference.sc-ir-payment-item{font-size:12px}@media (min-width: 640px){.payment-item__payment-item.sc-ir-payment-item{flex-direction:row;align-items:center;gap:1rem}.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-actions.sc-ir-payment-item{display:inline-flex}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item,.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item{display:inline-flex}.payment-item__payment-fields.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item,.payment-item__payment-toolbar.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item,.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-actions.sc-ir-payment-item{display:none}.payment-item__payment-description.sc-ir-payment-item{padding:0 0.5rem !important}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item{display:inline-flex;align-items:center}.payment-item__payment-body.sc-ir-payment-item{flex:1 1 0%;justify-content:flex-start}.payment-item__payment-fields.sc-ir-payment-item{justify-content:flex-start;gap:0.5rem}.payment-item__payment-toolbar.sc-ir-payment-item{gap:0.5rem;align-items:center}}";
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
        return (h("div", { key: '5c13f335247ad43f3346034ca196c2dc851f967d', class: "payment-item__payment-item" }, h("div", { key: '8f45845059d82953bde37504733d817b4abeea78', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '08d62729fa850a150d83da8ef27751c53cfd47df', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '0f509123e3ebd9828ffa2cc542e43aedd62c2a42', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '68a8c538839c1c7a1d5e3ff52c4af191fc8f9ef4', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '2c85d58834a9a78b01fa3cfca02d1168910325ae', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: 'c9d34b1883caa83761b7a6b10833ff675d02a187', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'd24a9c7f2fad63eca77bec2b9d69a341f2e41da1', class: "payment-item__payment-toolbar" }, h("p", { key: 'bde2bb009a3b2b34b3d33683f3e342ed22ff643e', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'd47934fdf222d152da9698f1288084f180a1315c', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '6bf13286fb7aa06cfde871c2bf35d9a296ff0938', class: "payment-item__payment-actions" }, h("div", { key: '5c5c365ff27b6cd2d574872ceeb596a4249accca', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'ae973008cd375c76eaa2353818864ed1a7efd314', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '4e33d516c996775863e7057deb176e5458bb7ac1', name: "user", id: this._id }), h("wa-dropdown", { key: '909bf215e87dea033edf4eaa72eeb7d044d1647e', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: 'd46a1a15513903a900d737a989b269f1a62edf60', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '0f58c058a293113eff52a45084163da8d2e2ee0b', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '1f5e39cd8b4b35be26fdab54d3322679dbcd77d9', value: "receipt" }, "Print Receipt")), h("wa-dropdown-item", { key: 'f7ebe4599dbb042a45f7c25512b6c72d652cb345', value: "edit" }, "Edit"), h("wa-dropdown-item", { key: 'b5f6da7ad219190dbe11ba42ec6a94e2150edbb9', value: "delete", variant: "danger" }, "Delete"))))), this.payment.reference && h("p", { key: '3dca7dc6547045a339a40c294049165b0a0ae5be', class: "payment-item__payment-reference" }, this.payment?.reference)));
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