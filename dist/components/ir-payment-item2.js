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
        return (h("div", { key: '3e827cd95b4c5542b4f6cf71c0e8a32e54b22286', class: "payment-item__payment-item" }, h("div", { key: 'd986f2234092b41340f1109c16999e406450698e', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '36f0de0f699b20690d644728ee238182d48cdb7a', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'dba2cf17e0f1fba7d0389bfd2cabeeb76200046e', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '4876796a2172f8699d093fdc4fe49613e27f2558', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '727b33f3556735050e351f3be35771edba6824be', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '3666e8ff1d7f4740419a48a9bfdd32258a34d70b', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '9a8a545ef8a17394c3f66539d08d9e0ed50ba49d', class: "payment-item__payment-toolbar" }, h("p", { key: 'a5333fd0cac2da29dcaf7d8ccef25b7fab46b5af', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '4721609b1ba8bad7dfd6a9642bc4e0223f61ae83', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'e05cc18e2ce9ce0eebe596023d44d391e49a5f04', class: "payment-item__payment-actions" }, h("div", { key: '82e0e9c01a2d6b5dfc2ab300e4f036609dc1ff1f', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '9dc0ca1416a7890be3c56f81ae2ea89686f64258', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '585d74d7c73875fd2d993e23aea66d8720315f13', name: "user", id: this._id }), h("wa-dropdown", { key: 'c385b7f09659fb37ebd46081089c61561d241de8', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '50424aae1a058caee4ff8485c2f5e5c3410b65c0', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '616cff1a21ef1b8fff84f265cde1c303d24b3184', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'd81223c21ebdbfbb2344371afbeaf4f2304a541d', value: "receipt" }, h("wa-icon", { key: '5ff4fe31a95b65a09ce3dbc2e6b57dd176cdb23c', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: 'fa604297350f4e2cb4c3da470da8734ef1ea9697', value: "edit" }, h("wa-icon", { key: '18abd419e58d7943b151ebc69319ac10f44db2c4', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '4ea8c710ef5b65dcdfd250966d8a565d180f66db', value: "delete", variant: "danger" }, h("wa-icon", { key: 'f8e7070ec6840507b129d39c8bd53f135ad3f13d', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '28ce6be5182b9d87c0ce75c443cf4e7a6880133f', class: "payment-item__payment-reference" }, this.payment?.reference)));
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