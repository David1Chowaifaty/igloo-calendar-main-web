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
        return (h("div", { key: '44765e7ad6c997559051daec014662762e8f6928', class: "payment-item__payment-item" }, h("div", { key: '75b1fffc793c9a328da6accce1a19db5a5c4cc1f', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '8ab3802d7e593de4aa1957861b35672492983ac2', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '83f63e3e29c44e5d333899faeef7d38ef8b3f0a2', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'bbab44654954cec4d6465d6479ac3a85cc72f1db', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '3e4ea6b8f0e29347e341cc9f1b247cd0f5e07e17', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '37583653fd7cbc93fd843a822a3bb4f4ac211df1', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '930841c65d3b0d02cf92ab7abb21c54599ac2b19', class: "payment-item__payment-toolbar" }, h("p", { key: 'b02ee04a2c3956fce0ec4a8327d1e2ed6e4069b6', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '8f0ad5a002fc8302295867a9223680543700a228', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'e88e5803e3bd2e8f091b783be0892caed9d2b872', class: "payment-item__payment-actions" }, h("div", { key: 'e0a98dffb2d2d5b63b140ca89da3f254dd1aa545', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '2f98ad638d280b70cb2dbb0ded8e91532d5626ac', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'e9e4bb6fda1c16ff0dfb2439a67e692a39a50388', name: "user", id: this._id }), h("wa-dropdown", { key: 'accfe9e0829869e09f2b6e6d57cbb5614e86e00d', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '92e5b41d8b8467578a69e421c175767818f178f8', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '47742cacf653c75d238b9a750b0e1ea0370e0b0f', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '907c759e57243870d74cccd16ef32109c6a8d6e6', value: "receipt" }, h("wa-icon", { key: 'f5eb2965ef2371120f72e6489a7b897665a17070', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: '7e425c70514d398b6c066fe5cca67bf6662e0259', value: "edit" }, h("wa-icon", { key: '760fb480927b16c00ca50e69725a26b64b46ae8a', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '6f9519499280ef7131b27be9b101008e2a67cdfa', value: "delete", variant: "danger" }, h("wa-icon", { key: '0f767cf7dcde87c224d893e6166d25c9e0816fba', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '3650322c05e16431650830d1fa49dc36209cdbc0', class: "payment-item__payment-reference" }, this.payment?.reference)));
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