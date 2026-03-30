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
        return (h("div", { key: '61e736ef12979842be950d8ed2641967b7e3b3fe', class: "payment-item__payment-item" }, h("div", { key: 'aacd7d7df99f1507cf09d53f9c7028afa2ea0b71', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'e002e3842f2cec612d25b3e6dabe322d72c12da7', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'a13ae3088516f9481d986203378ed22154981187', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '1767c44af3168052d47c1a47859d1209ea047f80', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'd93a9a0afff2de701dbaf7479050a93aaed59b08', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '97c11cca106a70c5a79d70e45bb67a33cbd8295d', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'ed3263b2cf2c27d07a712fba13ad310252590b7e', class: "payment-item__payment-toolbar" }, h("p", { key: 'fd79f6a4b08bf49c4d229af38d8ea872b8f4ea55', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'bb48ff8118e65ed0e584da1f0dbb09edf1ec906a', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'cf4b9eeab540b9951d804f9b1619ef49c7dfc160', class: "payment-item__payment-actions" }, h("div", { key: 'c0ddd1bfe4767f22e8ee0e7f448967e0ffce5405', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'a50999dbee92c35ef35989d250d95b8c5a86213f', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'a328980cca7b8fbfe973a56ee2008bac942bfddf', name: "user", id: this._id }), h("wa-dropdown", { key: 'e22995d2b80535fc1ef82844eaec809223ba35ae', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '427ed53d0b2df0fbb7bd486cf4ace70dc8f3786f', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'd2931025ca71bee3d6e92d71fa1a628dd86989a7', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '7d48f4b4ecee5beba1d8e1da8d0ea04643b1a73d', value: "receipt" }, h("wa-icon", { key: 'ad112c0c88fc5dd8426bb11a4ba255decca8debf', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: 'd70f287d9e02fec8db5cda773dab286388d1db95', value: "edit" }, h("wa-icon", { key: 'ad270d25ae97a3f770b0fdf0b53af55e34731008', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: 'd0e3a49a58cef6d2087ff84c7e659a716e4d5b92', value: "delete", variant: "danger" }, h("wa-icon", { key: 'b1f0810cab63e4858c9c8dbd29d4f5ac6ee54e0c', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '4ebb56799e13a60bb00479b1c508a326fe7a816d', class: "payment-item__payment-reference" }, this.payment?.reference)));
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