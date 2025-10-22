'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const utils = require('./utils-8b80d485.js');
const moment = require('./moment-1780b03a.js');
require('./index-63734c32.js');
require('./calendar-data-d2bec4fe.js');
require('./index-7564ffa1.js');
require('./locales.store-a1ac5174.js');
require('./axios-6e678d52.js');

const irPaymentActionCss = ".sc-ir-payment-action-h{display:block;--label-col:6rem;--amount-col:1ch;--payment-action-bg:rgba(255, 73, 97, 10%);--payment-action-border:rgba(255, 73, 97, 40%)}.action-container.overdue.sc-ir-payment-action{--payment-action-bg:rgba(255, 73, 97, 5%);--payment-action-border:rgba(255, 73, 97, 40%)}.action-container.future.sc-ir-payment-action{--payment-action-bg:rgb(30, 159, 242, 5%);--payment-action-border:rgba(30, 159, 242, 40%)}.action-container.overdue.sc-ir-payment-action:hover{--payment-action-bg:rgba(255, 73, 97, 10%);--payment-action-border:rgba(255, 73, 97, 50%)}.action-container.future.sc-ir-payment-action:hover{--payment-action-bg:rgb(30, 159, 242, 10%);--payment-action-border:rgba(30, 159, 242, 50%)}.action-container.sc-ir-payment-action{display:flex;align-items:center;gap:1rem;background:var(--payment-action-bg);padding:0.5rem 1rem;box-sizing:border-box;border:1px solid var(--payment-action-border);border-radius:0.25rem;transition:all 0.3s ease-in-out}.overdue_action.sc-ir-payment-action,.future_action.sc-ir-payment-action{display:inline-flex;align-items:center;gap:0.5rem;border-radius:0.25rem;min-width:0}.action-container.overdue.sc-ir-payment-action .overdue_action.sc-ir-payment-action{color:#ff4961}.future_action.sc-ir-payment-action{color:#1e9ff2}.payment-meta.sc-ir-payment-action{display:flex;align-items:center;gap:1rem}.alert-message.sc-ir-payment-action{display:none}.action-container.overdue.sc-ir-payment-action .alert-message.sc-ir-payment-action{text-transform:capitalize}.amount_action.sc-ir-payment-action{font-weight:600;font-variant-numeric:tabular-nums;text-align:right;justify-self:end;white-space:nowrap}.meta-grid.sc-ir-payment-action{display:flex;flex-direction:column;flex:1 1 0%}.payment-reason.sc-ir-payment-action{font-size:12px;color:hsl(230, 10%, 46%, 80%)}.date_action.sc-ir-payment-action{font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.action-container.sc-ir-payment-action p.sc-ir-payment-action{margin:0;padding:0}.action-row.sc-ir-payment-action{display:contents}@media (min-width: 640px){.sc-ir-payment-action-h{--amount-col:8ch}.alert-message.sc-ir-payment-action{display:inline-flex}.amount_action.sc-ir-payment-action{justify-self:auto}.action-container.sc-ir-payment-action{display:grid;grid-template-columns:var(--label-col) 1fr auto;align-items:center}.payment-meta.sc-ir-payment-action{display:grid;grid-template-columns:var(--amount-col) 1fr;align-items:center;column-gap:1rem;min-width:0}}";
const IrPaymentActionStyle0 = irPaymentActionCss;

const IrPaymentAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.generatePayment = index.createEvent(this, "generatePayment", 7);
    }
    render() {
        const paymentActionType = this.paymentAction.type.toLowerCase();
        const isFutureAction = paymentActionType === 'future';
        return (index.h("div", { key: '951a7b78442913af846b389ddd7c5be2aab808c5', class: `action-container ${isFutureAction ? 'future' : 'overdue'}` }, index.h("div", { key: 'b4bd9f9843b75c5151ed49fcbe2b1b663ff4335d', class: 'action-row' }, !isFutureAction && (index.h("div", { key: '9cfcea91fce7c0ae010090666691b10b60c3d677', class: 'overdue_action' }, index.h("svg", { key: 'e0b24f0475f979daa06cd94e6c6292127605e093', height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, index.h("path", { key: '4d03331150282a53aae4a7418bec6da900658b88', fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), index.h("span", { key: '0c3ddf3b84de362e5b9d7225818330269a14a231', class: "alert-message" }, paymentActionType))), paymentActionType === 'future' && this.paymentAction.amount > 0 && (index.h("div", { key: '2abafac3309466117c117002a1541fd1edc67c89', class: 'future_action ' }, index.h("svg", { key: '5a64e6eaa13942ffd7f656e74903672d8ac21153', xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, index.h("path", { key: '7ccec324a512bcae286dc6e05751d78e7f5e4882', fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), index.h("span", { key: 'b8234da41cecbd89a8a7e8b78c69b6b11d85789f', class: "alert-message" }, moment.hooks(new Date(this.paymentAction.due_on)).isSame(new Date()) ? 'Today' : 'Future'))), index.h("div", { key: '6cb72a2b6a4154dc10331ab5d4a40352a2f561ae', class: "meta-grid" }, index.h("div", { key: '6f9ce9cfe1abff54e580a4670d05fa026f75cc0e', class: "payment-meta" }, index.h("p", { key: '277619ee6344a0221cc2d83ccef418995039b901', class: "amount_action" }, utils.formatAmount(this.paymentAction.currency.symbol, this.paymentAction.amount)), index.h("p", { key: 'bb09864ae0870fc2464ab33b0f3fcc42cf4aae24', class: "date_action" }, moment.hooks(new Date(this.paymentAction.due_on)).format('ddd, MMM DD YYYY'))))), index.h("div", { key: '67cc306e44089ad0182386aed4c0ccb17ab00c97', style: { width: 'fit-content' } }, index.h("ir-button", { key: '0aa67a23e44901ad8c3070efcdc87cf2d5238f09', btn_color: "dark", text: 'Pay', size: "sm", onClickHandler: () => this.generatePayment.emit(this.paymentAction) }))));
    }
};
IrPaymentAction.style = IrPaymentActionStyle0;

exports.ir_payment_action = IrPaymentAction;

//# sourceMappingURL=ir-payment-action.cjs.entry.js.map