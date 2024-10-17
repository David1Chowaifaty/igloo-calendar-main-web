'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');
const utils = require('./utils-34705107.js');
const moment = require('./moment-1780b03a.js');

const irPaymentActionsCss = ".sc-ir-payment-actions-h{display:block}.sc-ir-payment-actions-h p.sc-ir-payment-actions,.sc-ir-payment-actions-h div.sc-ir-payment-actions,.sc-ir-payment-actions-h span.sc-ir-payment-actions,.sc-ir-payment-actions-h ir-icons.sc-ir-payment-actions{box-sizing:border-box;padding:0;margin:0}.action-container.sc-ir-payment-actions td.sc-ir-payment-actions{padding:0px 0.5rem;padding-bottom:0.5rem}.action-container.sc-ir-payment-actions .amount_action.sc-ir-payment-actions{padding-inline-start:0}.overdue_action.sc-ir-payment-actions{color:#ff4961;border-radius:0.25rem;display:flex;align-items:center;gap:0.5rem}.future_action.sc-ir-payment-actions{border-radius:0.25rem;color:#1e9ff2;display:flex;align-items:center;justify-content:start;gap:0.5rem}.date_action.sc-ir-payment-actions{font-weight:500}.amount_action.sc-ir-payment-actions{font-weight:700}";
const IrPaymentActionsStyle0 = irPaymentActionsCss;

const IrPaymentActions = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.generatePayment = index.createEvent(this, "generatePayment", 7);
        this.booking = undefined;
        this.paymentAction = undefined;
    }
    render() {
        var _a, _b;
        if (((_a = this.paymentAction) === null || _a === void 0 ? void 0 : _a.filter(pa => pa.amount !== 0).length) == 0) {
            return null;
        }
        return (index.h(index.Host, null, index.h("div", { class: 'my-1' }, index.h("strong", null, "Payment actions")), index.h("table", null, index.h("thead", null, index.h("th", null, index.h("p", { class: "sr-only" }, "Amount")), index.h("th", null, index.h("p", { class: 'sr-only' }, "Due date")), index.h("th", null, index.h("p", { class: 'sr-only' }, "Pay")), index.h("th", null, index.h("p", { class: 'sr-only' }, "Status"))), index.h("tbody", null, (_b = this.paymentAction) === null || _b === void 0 ? void 0 : _b.map(pa => {
            if (!pa.due_on) {
                return null;
            }
            return (index.h("tr", { class: 'action-container' }, index.h("td", { class: 'amount_action' }, utils.formatAmount(pa.currency.symbol, pa.amount)), index.h("td", { class: 'date_action' }, moment.hooks(new Date(pa.due_on)).format('ddd, DD MMM YYYY')), pa.amount > 0 && (index.h("td", null, index.h("ir-button", { btn_color: "outline", text: 'Pay', size: "sm", onClickHanlder: () => this.generatePayment.emit(pa) }))), pa.type === 'overdue' && pa.amount > 0 && (index.h("td", null, index.h("div", { class: 'overdue_action' }, index.h("svg", { height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, index.h("path", { fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), index.h("span", null, "Overdue")))), pa.type === 'future' && pa.amount > 0 && (index.h("td", null, index.h("div", { class: 'future_action ' }, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, index.h("path", { fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), index.h("span", null, moment.hooks(new Date(pa.due_on)).isSame(new Date()) ? 'Today' : 'Future'))))));
        })))));
    }
};
IrPaymentActions.style = IrPaymentActionsStyle0;

exports.ir_payment_actions = IrPaymentActions;

//# sourceMappingURL=ir-payment-actions.cjs.entry.js.map