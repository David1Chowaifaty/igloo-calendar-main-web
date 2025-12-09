'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const utils = require('./utils-bca29761.js');
const moment = require('./moment-1780b03a.js');
require('./index-ffd50e35.js');
require('./calendar-data-e7cdcfec.js');
require('./index-6299b0f7.js');
require('./locales.store-4eb57996.js');
require('./axios-6e678d52.js');

const irPaymentActionCss = ".sc-ir-payment-action-h{display:block;--label-col:6rem;--amount-col:1ch;--payment-action-bg:rgba(255, 73, 97, 10%);--payment-action-border:rgba(255, 73, 97, 40%)}.action-container.overdue.sc-ir-payment-action{--payment-action-bg:rgba(255, 73, 97, 5%);--payment-action-border:rgba(255, 73, 97, 40%)}.action-container.future.sc-ir-payment-action{--payment-action-bg:rgb(30, 159, 242, 5%);--payment-action-border:rgba(30, 159, 242, 40%)}.action-container.overdue.sc-ir-payment-action:hover{--payment-action-bg:rgba(255, 73, 97, 10%);--payment-action-border:rgba(255, 73, 97, 50%)}.action-container.future.sc-ir-payment-action:hover{--payment-action-bg:rgb(30, 159, 242, 10%);--payment-action-border:rgba(30, 159, 242, 50%)}.action-container.sc-ir-payment-action{display:flex;align-items:center;gap:1rem;background:var(--payment-action-bg);padding:0.5rem 1rem;box-sizing:border-box;border:1px solid var(--payment-action-border);border-radius:0.25rem;transition:all 0.3s ease-in-out}.overdue_action.sc-ir-payment-action,.future_action.sc-ir-payment-action{display:inline-flex;align-items:center;gap:0.5rem;border-radius:0.25rem;min-width:0}.action-container.overdue.sc-ir-payment-action .overdue_action.sc-ir-payment-action{color:#ff4961}.future_action.sc-ir-payment-action{color:#1e9ff2}.payment-meta.sc-ir-payment-action{display:flex;align-items:center;gap:1rem}.alert-message.sc-ir-payment-action{display:none}.action-container.overdue.sc-ir-payment-action .alert-message.sc-ir-payment-action{text-transform:capitalize}.amount_action.sc-ir-payment-action{font-weight:600;font-variant-numeric:tabular-nums;text-align:right;justify-self:end;white-space:nowrap}.meta-grid.sc-ir-payment-action{display:flex;flex-direction:column;flex:1 1 0%}.payment-reason.sc-ir-payment-action{font-size:12px;color:hsl(230, 10%, 46%, 80%)}.date_action.sc-ir-payment-action{font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.action-container.sc-ir-payment-action p.sc-ir-payment-action{margin:0;padding:0}.action-row.sc-ir-payment-action{display:contents}@media (min-width: 640px){.sc-ir-payment-action-h{--amount-col:8ch}.alert-message.sc-ir-payment-action{display:inline-flex}.amount_action.sc-ir-payment-action{justify-self:auto}.action-container.sc-ir-payment-action{display:grid;grid-template-columns:var(--label-col) 1fr auto;align-items:center}.payment-meta.sc-ir-payment-action{display:grid;grid-template-columns:var(--amount-col) 1fr;align-items:center;column-gap:1rem;min-width:0}}";
const IrPaymentActionStyle0 = irPaymentActionCss;

const IrPaymentAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.generatePayment = index.createEvent(this, "generatePayment", 7);
    }
    paymentAction;
    generatePayment;
    render() {
        const paymentActionType = this.paymentAction.type.toLowerCase();
        const isFutureAction = paymentActionType === 'future';
        return (index.h("div", { key: '78e2efad6ea1c307b2c831b7e1f026838c271aeb', class: `action-container ${isFutureAction ? 'future' : 'overdue'}` }, index.h("div", { key: '51aeda67001967cd4e65d4bfe855f68f2e60f4b1', class: 'action-row' }, !isFutureAction && (index.h("div", { key: 'e5dcfef1cfa6a1a82c7d6a21cb61bc6e9be7e7dd', class: 'overdue_action' }, index.h("svg", { key: 'e12993288a82c882e77b56302b86284f82d5a6fd', height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, index.h("path", { key: 'ffe8351f86aa92259dd5cf403440923244f625f5', fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), index.h("span", { key: '66631ca1980cd1e628bffa5f3d27f7bed2b4ac23', class: "alert-message" }, paymentActionType))), paymentActionType === 'future' && this.paymentAction.amount > 0 && (index.h("div", { key: 'bf3b6f2a70ee099f0e06e7f5e76211768b725bf8', class: 'future_action ' }, index.h("svg", { key: '0c3dd04677ed10d6aff4ba8f2be08939b00325c4', xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, index.h("path", { key: 'b40e3324b52b6a0ee04ea112136d5af746cd4cbd', fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), index.h("span", { key: '22424b50800c9dfdf6e2002df10b43887d7a37ce', class: "alert-message" }, moment.hooks(new Date(this.paymentAction.due_on)).isSame(new Date()) ? 'Today' : 'Future'))), index.h("div", { key: '60ac1ea3d7250002e17297dc15f3e934d975fc8e', class: "meta-grid" }, index.h("div", { key: '640be6332b27d11093dcfee0c9495f0daf764e49', class: "payment-meta" }, index.h("p", { key: 'd65e917c429e090e82bfc815c81f6b1c96d20cce', class: "amount_action" }, utils.formatAmount(this.paymentAction.currency.symbol, this.paymentAction.amount)), index.h("p", { key: '482a4dc44691314004997f78a815612d193b273e', class: "date_action" }, moment.hooks(new Date(this.paymentAction.due_on)).format('ddd, MMM DD YYYY'))))), index.h("div", { key: '5aa553e0c1327ea60a087b9063374a4b658ced07', style: { width: 'fit-content' } }, index.h("ir-button", { key: '88776df6f13a04e589d2a469bfa600fe27697878', btn_color: "dark", text: 'Pay', size: "sm", onClickHandler: () => this.generatePayment.emit(this.paymentAction) }))));
    }
};
IrPaymentAction.style = IrPaymentActionStyle0;

exports.ir_payment_action = IrPaymentAction;

//# sourceMappingURL=ir-payment-action.cjs.entry.js.map