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
        return (h("div", { key: 'c9fcfacd6d333d0cd42f5a73c3175fe182126989', class: "payment-item__payment-item" }, h("div", { key: '88a9d95d355763ad0e2fdc4b983dc8b1546bb524', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'c3c1f47dd71dfe1be58862c3ff3f61fd75b23f3d', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '44eb5313e66b123c3163feab99e85de714ad0a56', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '09cdd3128c7988d4f7cfdf0031123b0f1c219955', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'dd415ae9372e5c2b78fda7f5abab1811c9914864', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '8025586fa42bf47d84f8652cc3f4fb2b873c5c22', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '3bd695be754d850969a4631042947e1f3399691d', class: "payment-item__payment-toolbar" }, h("p", { key: 'b4ceac769c6e4711aa1cebfe5bfa9e86903bd473', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '43f845f932398d64b1518f3dca3467a59d1ec8b8', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '2ed7a593fd7bbdc53d72c627fb9c17a3af1757ad', class: "payment-item__payment-actions" }, h("div", { key: '791a46380075e10a39566cebbc03d45c560e5b85', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '6c2a5e94c8ecebc87f5be2d68316f3ee3b08729a', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '05e2efb1dba2ff2d58d8068ffae6bb9a3fbe96af', name: "user", id: this._id }), h("wa-dropdown", { key: '2aab2e74a8d3e6b8c990148a63c21a592809210b', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '4236284e6de3e719e7aa3354cd6220ab427de28e', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '51912c7b414a9dd4241f25e9162b553bbb32f434', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '1987b771ac4db59138fc6cf85454ce95779d3d98', value: "receipt" }, h("wa-icon", { key: 'd562a5bab0729ff8fbfb7cf5019c5761722c4c68', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: '5975010b9754c7b32b21a57d97165d4de7dba7c4', value: "edit" }, h("wa-icon", { key: 'e86747fed5cef630847946b33b30a0aa02fd7837', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '6476a2b1f531ec0e406282548ca0374ae945e17c', value: "delete", variant: "danger" }, h("wa-icon", { key: 'bc33f2ccbc812b5132f12725ff53fc9942152016', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: 'b0c282ebf574d414a6ee464d11b993989d8b3d09', class: "payment-item__payment-reference" }, this.payment?.reference)));
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