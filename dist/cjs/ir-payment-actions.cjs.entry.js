'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');

const irPaymentActionsCss = ".sc-ir-payment-actions-h{display:block}.sc-ir-payment-actions-h p.sc-ir-payment-actions,.sc-ir-payment-actions-h div.sc-ir-payment-actions,.sc-ir-payment-actions-h span.sc-ir-payment-actions,.sc-ir-payment-actions-h ir-icons.sc-ir-payment-actions{box-sizing:border-box;padding:0;margin:0}.beta.sc-ir-payment-actions{background:var(--red);color:white;padding:0.2rem 0.3rem !important;font-size:12px;border-radius:4px;margin:0}.payment-actions-container.sc-ir-payment-actions{display:flex;flex-direction:column;gap:0.5rem}";
const IrPaymentActionsStyle0 = irPaymentActionsCss;

const IrPaymentActions = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        var _a, _b;
        if (((_a = this.paymentAction) === null || _a === void 0 ? void 0 : _a.filter(pa => pa.amount !== 0).length) == 0) {
            return null;
        }
        return (index.h(index.Host, null, index.h("div", { class: 'my-1 d-flex align-items-center', style: { gap: '0.5rem' } }, index.h("p", { class: 'font-size-large p-0 m-0 ' }, "Payment Actions"), index.h("span", { class: "beta" }, "Beta")), index.h("div", { class: "payment-actions-container" }, (_b = this.paymentAction) === null || _b === void 0 ? void 0 : _b.map((pa, index$1) => (index.h("ir-payment-action", { key: pa.due_on + index$1, paymentAction: pa }))))));
    }
};
IrPaymentActions.style = IrPaymentActionsStyle0;

exports.ir_payment_actions = IrPaymentActions;

//# sourceMappingURL=ir-payment-actions.cjs.entry.js.map