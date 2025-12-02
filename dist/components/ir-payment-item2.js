import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as colorVariants, d as defineCustomElement$2 } from './ir-icons2.js';
import { f as formatAmount } from './utils.js';
import { P as PAYMENT_TYPES_WITH_METHOD } from './global.variables.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$4 } from './ir-button2.js';
import { d as defineCustomElement$3 } from './ir-custom-button2.js';
import { d as defineCustomElement$1 } from './ir-popover2.js';

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
    render() {
        const isCredit = this.payment.payment_type.operation === 'CR';
        const paymentDescription = (PAYMENT_TYPES_WITH_METHOD.includes(this.payment.payment_type?.code)
            ? `${this.payment.payment_type?.description}: ${this.payment.payment_method.description}`
            : this.payment.payment_type.description) ?? this.payment.designation;
        return (h("div", { key: 'f5f1fb17e44f3e64a7c3ec9cbb51b5c1b3b3de80', class: "payment-item__payment-item" }, h("div", { key: '20cccac9f1d4b443d2452adbd1725d595f4b32f7', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '16f57e01807c509c834aab8bb6f1b0a34584f2a1', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '233065642c8ad2a1dbe8c2118a1da873303e2751', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'a9be945b645e4557f566348b682564a4ceae4ab1', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'ffa2757364c11bdfa7a823075e6cae7981876885', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '539d74c9b5b9b98af9b83b1333aa86b47c0c7c55', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'd3732954ac08555ce96e8e0ffd9340e3e790f3b6', class: "payment-item__payment-toolbar" }, h("p", { key: '751b4bb0e6a5a7759cdadc1f75c3b869e9c6faeb', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '09ef75c96a04446ffae9a5d0ebba54249774d4dd', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'becccaa0d347f18be45f2d0204ddf05e04b8b320', class: "payment-item__payment-actions" }, h("div", { key: '7195f03a7e2e5e2478de7d1025026d0f70d7db58', class: "d-flex align-items-center" }, h("ir-popover", { key: '3b214c2eb98af32206191f606f30950f255d1795', trigger: "hover", content: `User: ${this.payment.time_stamp.user}` }, h("ir-button", { key: '0fc6ff8d7619cc28e3b1388dc4080fb31131d269', variant: "icon", style: { 'color': colorVariants.secondary['--icon-button-color'], '--icon-size': '1.1rem' }, icon_name: "user" })), h("wa-dropdown", { key: '710213a3f48824eef553b94e77f685bbdf7eaea6', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '9a27feef3b8a43150bff9124e37225cd50a78093', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '2a2e0f9e8a7e76e51cce841d9d7128e4ea58602c', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'e6be092fbf2916b469089ba2bd33a1c9f477980b', value: "receipt" }, h("wa-icon", { key: '9febec2a7a47bf89edc54069c7e2722e4858b71a', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: 'bb84b462a1992a0785bb195b345e32ce3319f2da', value: "edit" }, h("wa-icon", { key: '3d511836bc2a5ded3925fd5e9e2897d4febc8b49', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '7c9632f0e74386fcc087c121ca6173d5dca12efc', value: "delete", variant: "danger" }, h("wa-icon", { key: '7af9b2c7a5f1fe6ac6d291f61901cf40b88af542', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '099678715b5862cf9b2bba4d4ccdf33fa21bb408', class: "payment-item__payment-reference" }, this.payment?.reference)));
    }
    static get style() { return IrPaymentItemStyle0; }
}, [2, "ir-payment-item", {
        "payment": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-payment-item", "ir-button", "ir-custom-button", "ir-icons", "ir-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPaymentItem);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPaymentItem as I, defineCustomElement as d };

//# sourceMappingURL=ir-payment-item2.js.map