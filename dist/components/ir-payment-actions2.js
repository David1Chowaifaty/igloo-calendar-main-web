import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-payment-action2.js';

const irPaymentActionsCss = ".sc-ir-payment-actions-h{display:block}.sc-ir-payment-actions-h p.sc-ir-payment-actions,.sc-ir-payment-actions-h div.sc-ir-payment-actions,.sc-ir-payment-actions-h span.sc-ir-payment-actions,.sc-ir-payment-actions-h ir-icons.sc-ir-payment-actions{box-sizing:border-box;padding:0;margin:0}.beta.sc-ir-payment-actions{background:var(--red);color:white;padding:0.2rem 0.3rem !important;font-size:12px;border-radius:4px;margin:0}.payment-actions-container.sc-ir-payment-actions{display:flex;flex-direction:column;gap:0.5rem}";
const IrPaymentActionsStyle0 = irPaymentActionsCss;

const IrPaymentActions = /*@__PURE__*/ proxyCustomElement(class IrPaymentActions extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        var _a, _b;
        if (((_a = this.paymentAction) === null || _a === void 0 ? void 0 : _a.filter(pa => pa.amount !== 0).length) == 0) {
            return null;
        }
        return (h(Host, null, h("div", { class: 'my-1 d-flex align-items-center', style: { gap: '0.5rem' } }, h("p", { class: 'font-size-large p-0 m-0 ' }, "Payment actions"), h("span", { class: "beta" }, "Beta")), h("div", { class: "payment-actions-container" }, (_b = this.paymentAction) === null || _b === void 0 ? void 0 : _b.map((pa, index) => (h("ir-payment-action", { key: pa.due_on + index, paymentAction: pa }))))));
    }
    static get style() { return IrPaymentActionsStyle0; }
}, [2, "ir-payment-actions", {
        "booking": [16],
        "paymentAction": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-payment-actions", "ir-button", "ir-icons", "ir-payment-action"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-payment-actions":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPaymentActions);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-payment-action":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPaymentActions as I, defineCustomElement as d };

//# sourceMappingURL=ir-payment-actions2.js.map