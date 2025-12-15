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
        return (h("div", { key: '695226f8b16dfa315642927c7a41e06128d04656', class: "payment-item__payment-item" }, h("div", { key: '88b74e6a497857f6b63ab98f4017bbe18b7c8b80', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '5abfb70c9fb81f515e4b57a2bd941a8e1a1c9edd', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '795a9dac5b22801bcde154b60bc3939b8608f4f1', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'e08be340ef35f7619f439d5507cd71c33ab5831b', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '0cc1ae09933cc44be0792b0bea13359cbbfbf04f', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: 'f9559bd6cab8d7404315cb300c6b1263dadd3feb', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '6301507d41c481f7548e67610d1ead864b7811eb', class: "payment-item__payment-toolbar" }, h("p", { key: 'd599b4820b55e2c4546f6b5cd4992f188bb57b1d', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '8132c67fb17313ff6ffa1c3af87e75aa2e9fdb42', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '65fedf3bfb2b47604b0a5de3007cdaa05d23c4c8', class: "payment-item__payment-actions" }, h("div", { key: '4bef9ad21b37d17d279539ac1295ec2fe27472ee', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '249b26215eb05bb673a69a7a0241a74fe586783f', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '47ba523ee526b0dc0452f3bb990af221f746b171', name: "user", id: this._id }), h("wa-dropdown", { key: 'd62584f470e8c07467bd1a322c898e287e9bf836', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: 'a5a9a9bdeb4286f5f8bb79177da61c0b570c23c9', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '81a3842ddfb402e64d7327b38eab91154875f6e1', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'cd4eca8b971bbe763a943bd9dae56c61cedaef6a', value: "receipt" }, h("wa-icon", { key: '463f7c2599ff2fe534ea4e35dd4d72bab8f0caf7', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: '3923acdc7d029c545e0743ab49fa8a12c3f8698f', value: "edit" }, h("wa-icon", { key: '571c67c6c86dba79b6ecaca5949cf8e466020e92', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '83a8ffa971de9b22ddfef43fc2a248b50ab0370b', value: "delete", variant: "danger" }, h("wa-icon", { key: '2abdee863d48fdc5ddba39ef621040fd35d2fd4a', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: 'dc1a0febc856de4b536a1ed6dd28703c823f1e52', class: "payment-item__payment-reference" }, this.payment?.reference)));
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