import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as colorVariants, d as defineCustomElement$1 } from './ir-icons2.js';
import { d as defineCustomElement$2 } from './ir-button2.js';

const irPaymentItemCss = ".payment-item{position:relative;width:100%;display:flex;padding:0.5rem;align-items:center;min-height:3rem;gap:1rem;box-sizing:border-box}.payment-item:hover{background:#f4f5fa}.payment-item:hover .payment-actions{display:flex}.payment-item p{padding:0;margin:0;box-sizing:border-box}.payment-item .payment-actions{display:none;background:#f4f5fa;gap:0.5rem;justify-content:flex-end;align-items:center}.payment-body{display:flex;flex-direction:column;gap:0.25rem;flex:1 1 0%}.payment-fields{display:flex;align-items:center;gap:1rem}.payment-amount{font-weight:700;white-space:nowrap}.payment-amount.is-credit{color:#629a4c}.payment-amount.is-debit{color:#ff4961}.payment-reference{font-size:12px}.payment-toolbar{display:flex;align-items:center;gap:0.5rem}.action-button{cursor:pointer}";
const IrPaymentItemStyle0 = irPaymentItemCss;

const IrPaymentItem = /*@__PURE__*/ proxyCustomElement(class IrPaymentItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.editPayment = createEvent(this, "editPayment", 7);
        this.deletePayment = createEvent(this, "deletePayment", 7);
    }
    render() {
        var _a;
        const isCredit = this.payment.payment_type.operation === 'CR';
        return (h("div", { key: '4f072da6791a8cc8cad97ef599a20d2632fad0fa', class: "payment-item", part: "base" }, h("div", { key: 'ad394493e2bd87169bed846d6dd9c34273977214', class: "payment-body", part: "payment-body" }, h("div", { key: '4e82bbfbc32c9413043439754af040eb62c7f9dc', class: "payment-fields", part: "payment-fields" }, h("p", { key: '97158df97eb3cf7897ea654472d5a884f03a5fd4', class: "text-muted" }, this.payment.date), h("p", { key: '22060ff41b222a29573103f79e32625e1c4557e1' }, h("b", { key: 'dcbfcd689adb0bb7573b17380d608b290ccb83f5' }, this.payment.designation))), this.payment.reference && h("p", { key: 'c6820ccdba1fea75cf207fdf216c9767ef74cee8', class: "payment-reference text-muted" }, (_a = this.payment) === null || _a === void 0 ? void 0 : _a.reference)), h("div", { key: '1f18a326e78dae6b6d62edbe06035563ab8725c5', class: "payment-toolbar", part: "payment-toolbar" }, h("p", { key: '686d273eb3c3cc5e26c1fbce613da9e6d1a01a0f', class: `payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, isCredit ? '+' : '-', this.payment.currency.symbol, " ", this.payment.amount), h("div", { key: 'ba41aea838746074940ea98356a9b395e21342b8', class: "payment-actions" }, h("ir-button", { key: '9b386c6efc2159b9b86838026017f48e1153a50f', class: "action-button", variant: "icon", onClickHandler: () => {
                this.editPayment.emit(this.payment);
            }, icon_name: "edit", style: colorVariants.secondary }), h("ir-button", { key: '5ab51d32489d703d52c6192c0750632849693616', class: "action-button", onClickHandler: () => {
                this.deletePayment.emit(this.payment);
            }, variant: "icon", style: colorVariants.danger, icon_name: "trash" })))));
    }
    static get style() { return IrPaymentItemStyle0; }
}, [1, "ir-payment-item", {
        "payment": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-payment-item", "ir-button", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPaymentItem);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPaymentItem as I, defineCustomElement as d };

//# sourceMappingURL=ir-payment-item2.js.map