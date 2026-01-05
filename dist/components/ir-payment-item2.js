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
        return (h("div", { key: '6b6567066260c6a3b4f20c9747fec50946f6c99c', class: "payment-item__payment-item" }, h("div", { key: '0f0195c672f636fbb3fde3cd0d28051875b9f099', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'bb18699d5fcaf6238aa0e0c96680f770d21c9d82', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'ce21a90d582937880ccc94c8a2188c27808d172e', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '8e606c8652bd44465e39a5041e08c8cce5e7b9eb', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '283142ba833c6c1734311f99929bca39f8034263', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '98e3ccd193fb69cd7e338baa737a5f9b4c1d5877', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: 'bef3298698c9ab3e5be360703ee3edd47bad5638', class: "payment-item__payment-toolbar" }, h("p", { key: '66ade1430da83c30e51e2cd56b50b04d03c706c8', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'bf68530c51f76f91b08375e838c4d430dfc8e164', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'c705aad44022b1d1fe89309007d3664ef06fb8d7', class: "payment-item__payment-actions" }, h("div", { key: 'b33f14ad20461305dba8fb46f7fac32c580918f6', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '83aa3cb15b08c2b649b6b5dcad711a10f2952a93', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '60d8a3d257f655c174bc5ba288d9b3269b4c8b3d', name: "user", id: this._id }), h("wa-dropdown", { key: '878b6dbf5e4a88f20bff0f0399b0159e255cb72b', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '3314d8534952cd8b4b45b385fb6a620195435bad', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '6f606fc29ca741ad3a8f03b40ba346d46731f0bc', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '7968e1b58e0ca884b1823fda49cc19891efe5bc2', value: "receipt" }, h("wa-icon", { key: 'eff545892b934886628970ef558210a269bd1339', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: '7af215369e8760466757edac91a8a1868ec19f8e', value: "edit" }, h("wa-icon", { key: 'e199f0ee3c7e6791a8fe7fec9f3959f99150645a', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '723cb6b3dc5edb82cb81b72ed4a393fb568ae5bb', value: "delete", variant: "danger" }, h("wa-icon", { key: '33f5a9861e6e6aae08761bf55eba4b6693c15758', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: 'c04c913e2de820a8a0723da6d80b47c6d89846ad', class: "payment-item__payment-reference" }, this.payment?.reference)));
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