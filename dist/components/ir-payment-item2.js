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
        return (h("div", { key: '330fb385a1123a1decaa0b2f56edd98995c0b6d5', class: "payment-item__payment-item" }, h("div", { key: '00332e1e312d299af6a77a5a391a7bbaab59d452', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'e01f2f732bf9affd531d49c016ef080064f968ea', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '4afe3150aa44baa017bfd55a7781e30226ea4e96', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '21fb8e61b3b0aa4b95fda03b29bfb90a58e95bd6', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '13e2baee5e2e13ef69b08477696cb9349f854f10', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: 'f08e8cc06299b1d51b4dba1aed0ab1e43003c4b6', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '2746ee4aece92549e4d102bf3b76a15e94159cfa', class: "payment-item__payment-toolbar" }, h("p", { key: '93f14fb106dfab1a8db699d60119a0369a412f83', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '6e390f263a5ba414beb4553da4bb92d31f0d1754', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '28e7ba4d3df8d1a91bc9a6d1dcc36aeec10cccf5', class: "payment-item__payment-actions" }, h("div", { key: 'add0a979104c174c45be891cb0ca000ddc600ffa', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'fcda6b118c98e6f4e881de6744dab7e313f5d75a', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'bff5f270ee6abfaf30c281564e430a9a63213f78', name: "user", id: this._id }), h("wa-dropdown", { key: 'e88b7a354387b047dddd68067e7d886ef4c85a46', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '444f59cc254ef0ba906ce2597dbec112fe4eee85', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '562fdbfe6071dd7adf7cfa37c906289fcc98f19d', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'f48a0ef4c62d4177115a9178e0cf26e77b5b49d7', value: "receipt" }, h("wa-icon", { key: '0c228461c7595cd844b38987587ce21ce367e9fc', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: '5031d05c5619a764f72439efefb21069b5333b6f', value: "edit" }, h("wa-icon", { key: '5af1a39592c677e92935a2c5c57b79107ccff4de', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '2ba51d910a106975d84f9004ad05970201d207b8', value: "delete", variant: "danger" }, h("wa-icon", { key: '3005b992bad27bb29a7f8928a1670e6a66bd7219', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: 'b91fe2ea3ef4549d9ad3363314a4ea0950be4322', class: "payment-item__payment-reference" }, this.payment?.reference)));
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