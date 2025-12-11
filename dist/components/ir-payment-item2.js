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
        return (h("div", { key: '37dfa9418f3475c24a47caafe3a7f5cd10e118f9', class: "payment-item__payment-item" }, h("div", { key: '699f52699081e22d27da3057a42b34ab20c3f1eb', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'e60863dd2a54e55fa629a1052370929a98fa2c84', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: 'd7f931779c33943e887dfd48889010b3e9fcb99c', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'fcc1be3d4993aaa1a3e6c2919e4731407b87dcf7', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '19f29009f82a586fd071e5af3ef663ab82151612', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: 'efc4d74c885f9443d9016c3211d03529b2665bd5', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '3fc4c3c813bff14e2145660093b0c4403fcee960', class: "payment-item__payment-toolbar" }, h("p", { key: 'f10a9fe440c62111f0230a34925706a8e86fdc34', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'e24a5fbdf75c1261a43b727e1b2f9a10dfd3b8ba', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '0a309c4011e5f767f2eab5360f898148d69b125b', class: "payment-item__payment-actions" }, h("div", { key: '78b80080d5f4410603ac082cb290113bdb4383bd', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '62657330e567adca12a810dded3f771f3e3bcb34', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'd9fe5879cf001ab4fda981cceca4f08a8d83fcdd', name: "user", id: this._id }), h("wa-dropdown", { key: 'acf9d7f2367b61f9c04ab082dbb7697253b33586', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '4d65c7f225ea7218d813c45520ce785266546d07', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '727ad8a6589c4216e4a5e0746b654b6d1403efdd', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'c971831590e3a7bfeb16e6fd7d9ef906b36de09a', value: "receipt" }, h("wa-icon", { key: '680d03604957cfc7ffea4f4072dc3d98954443f4', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: '84dfa6d41eb26a5796b3f160bbcfbd80fb5798b4', value: "edit" }, h("wa-icon", { key: '5aa55301b81205c095376a76d9da693efe30d39f', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: 'b1dce8a0c20cf33b310a0a5d103b3579b5f893c2', value: "delete", variant: "danger" }, h("wa-icon", { key: 'cac6d8554aacdac3e57fb163d12d5e216987aa0c', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '77f95c9b26f884b2508d0878b081fc51eecbcc59', class: "payment-item__payment-reference" }, this.payment?.reference)));
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