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
        return (h("div", { key: '6384c7f927e0509e780d26aeb515a37c6af544a6', class: "payment-item__payment-item" }, h("div", { key: 'f7a3e6775d60d17bb656856ed9f0e4ab7110f96c', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'd9e1ff18f62922305b90ae4eebad210faabaa68e', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '98348e310dae3954bc77b44ed73941faccf52d5a', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'e886036998acbbfa45cee103afba625d220cfddc', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '3570694a032e6b0d108c63ea7c10c8c8bb236d3d', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '2f5446c549a59a2abf226389752680a599d57dde', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '0516f22edf25b769d462517d3a23a26886a1629a', class: "payment-item__payment-toolbar" }, h("p", { key: '5c11a8e82afdd9631c7f08fd4b6c10b1147e9f13', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'f6776993d9c1a26f042fbfbeb57d97b6e9cb8ca2', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: 'cb1b2d477a7ea14a1d382b8622cf623c3b604015', class: "payment-item__payment-actions" }, h("div", { key: '6eaf0016f5b4bd8947a2bf1cef19f84b4718dfe3', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '535f8d50cbc8d5961da918d1fe153747873c694d', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '9b8fda56f33b09582f8a254b0f4f7f34031dec39', name: "user", id: this._id }), h("wa-dropdown", { key: 'b6f93ea95e870c654542fc1ef3b3126d62ddfbc2', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: 'c6ac990cc2d3208f02c70f4620d4897a1e4a7f94', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '48fe89d43b0055f7d132cabdbab998fe3cbe54c1', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'f32bf246a121d9022e5e2525ab9e4e4597ccac98', value: "receipt" }, h("wa-icon", { key: '5bac021cb1a54af60efcb993ede38a931cae302f', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: 'e64aa93140c13d3d2fa8dd25c021647a5df44281', value: "edit" }, h("wa-icon", { key: '35d9c04caf9388dbcee56c39810a2a4fe10c6672', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: 'd4d21bd231a66db343e7ab8a4a7a86c0b347ce02', value: "delete", variant: "danger" }, h("wa-icon", { key: '2d132598aef8b27763a4b393eb52c058fd32bffc', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '24599a35a23efc55ab0b5958d9ba3044500f2e65', class: "payment-item__payment-reference" }, this.payment?.reference)));
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