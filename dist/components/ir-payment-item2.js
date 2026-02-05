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
        return (h("div", { key: '4f5387c3dc9ec7e58237dc5514970aa569714ccb', class: "payment-item__payment-item" }, h("div", { key: '79285570dc9d4500ef728b7362ec367863db35ed', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: '0f9d3231aa210f2701289a30b6adafc7b5e7b9cc', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '585a7f5fac53b31cfabdf047377e77d98835481a', class: "payment-item__payment-date" }, hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '8fb6708b2174a2515f2eb2d4f09ae82e10b20f23', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'cd23101a3830d1c77b49b295105263d379cdc11e', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '379957c05a6bab51dc7a08b7ac2373a83cdc12f5', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '3b7625a509dd588ebb0613d19597aa312114bf32', class: "payment-item__payment-toolbar" }, h("p", { key: '6a9d1f4e97b920691164c4a2f845678e72fa368b', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: 'df2157eaea95d589dc55be42a6965a16a1511db9', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '996ac5b61bf1933dbf73b888c1167d6e89c23f5c', class: "payment-item__payment-actions" }, h("div", { key: 'd16f04ee5aa33fed25eb84af9880effa060cf746', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '70ef1f861e64a48e6c8cde070758cc7360c2cdc3', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: '50e99ae66bd0b6b26cc23820da3e1ace5c1429cd', name: "user", id: this._id }), h("wa-dropdown", { key: 'eedbdbdeb65328b29383e908a9116c4c89d3f17a', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '1384bb71c372c61812b07b0d5eb4bc33d589ac17', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'ebf879bf071871887b8612d4e6030277a9b00436', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: '9caa2bb3545727ee159ac986ab293af2ff5ab885', value: "receipt" }, h("wa-icon", { key: '888fdb1344a51593d37ca7ae1ea98a7c433f1e8a', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: '3b2c63fd820c318b09773dd5f6da1ca98f44564b', value: "edit" }, h("wa-icon", { key: '8e29afedc7d27a3149db04bbe887d0d2af4141f2', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: 'dda9ae68eb8eaa313be246d9fd81e7c3075c030b', value: "delete", variant: "danger" }, h("wa-icon", { key: '91a81fc6fd966de79f88b14831abaa17a935c718', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: 'e468be5fe7f5c83d2300c8e443c0c5e4495e3b91', class: "payment-item__payment-reference" }, this.payment?.reference)));
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