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
        return (h("div", { key: '117138eaf5c4c00b6d709465dcc04e7419cb67cf', class: "payment-item__payment-item" }, h("div", { key: '184914b1c3bb7d3e1595a782914f3be65e4aee3d', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '0f1ef1f7116eadbed97a52edde8737c637b93e49', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '174a47a9c608743827404dcd9d35144b4ed69100', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '5d9ca9af429159afc3741063ce83c564c47445f8', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '5e3a3770b2f92cba01aab5561f4336b223a13505', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '6a48c9770170f6e3e694db755d8ed4fe27d760d4', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '2a9d2a42f77b11ed0a2414654a41d44b65845852', class: "payment-item__payment-toolbar" }, h("p", { key: '51ef1310e49964ed1d25f052fb74f81bed198a08', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '52f41661880c1cb7158957391d8ad5a6a5fa848f', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '2565eaf0af79737a832affb55a1d6f958e063e4f', class: "payment-item__payment-actions" }, h("div", { key: '329807550b194eea410168c8af1c2c531e0bd031', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'f68c699d7b56038976ac3e6c64b6185fb1f23889', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '38950f798e4dd88c580b85cee14872f8f2e306fe', name: "user", id: this._id }), h("wa-dropdown", { key: 'b2fdf536eb5af80dd3627fdb2dc48fa482384330', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '98c879892a6ccd4fcf6d56a12ae75b54c2bfd0fc', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '72abe0a82930466d467fc3df92f0796e5627834b', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'd7d5d9537c77062ad6db9367c3a5397b613f1d67', value: "receipt" }, h("wa-icon", { key: 'd6928e236ac5f2b1274a2850457d9fabe65718e9', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: '2f4460528fa39ae23bc8143105b07f25438ccbe1', value: "edit" }, h("wa-icon", { key: '4eb5e3975ee87f7df764fd29b3c5b6102d4fd709', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: 'f1685a6a548f7c0ea9313e7858da77309f823e9f', value: "delete", variant: "danger" }, h("wa-icon", { key: 'cf20a58fe5270c9ce58fb01a50596c86fbc4ff72', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '7887376de6553d6af4166563f076011ed6d12dd8', class: "payment-item__payment-reference" }, this.payment?.reference)));
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