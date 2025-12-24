'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const booking = require('./booking-e68bffd8.js');
const moment = require('./moment-1780b03a.js');
require('./index-8bb117a0.js');
require('./axios-6e678d52.js');
require('./locales.store-4eb57996.js');
require('./index-6299b0f7.js');
require('./calendar-data-e7cdcfec.js');

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
        return (index.h("div", { key: '27e39728a04ac2e5d806993362fc43b507621ce2', class: `action-container ${isFutureAction ? 'future' : 'overdue'}` }, index.h("div", { key: '0ef5422b40c527db39028ab92c98c929f7c4b9bf', class: 'action-row' }, !isFutureAction && (index.h("div", { key: '105dffdb6dc6f1db90016515082281a97dd3f5bc', class: 'overdue_action' }, index.h("svg", { key: '62fd402be87d61064f15e42fabd7839383794b98', height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, index.h("path", { key: 'b1c165e63e47749c28b2f3bb46f1ce6946e40cec', fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), index.h("span", { key: '388dfb577bdcdbcc76c066f28b3ab0d944278497', class: "alert-message" }, paymentActionType))), paymentActionType === 'future' && this.paymentAction.amount > 0 && (index.h("div", { key: 'd112539037a846aa7dadeb85aed4b2db35a7b510', class: 'future_action ' }, index.h("svg", { key: 'c68803206e98d8590a55db84643c9f351ebe2782', xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, index.h("path", { key: '2a02aef7c420ce4ee79acb515f17897799bc93ae', fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), index.h("span", { key: '970da7a94432e4082bf3e27d3b6165bf9cf9bcf1', class: "alert-message" }, moment.hooks(new Date(this.paymentAction.due_on)).isSame(new Date()) ? 'Today' : 'Future'))), index.h("div", { key: '26ac5448fa856912c683186f8931d6cbed3f0901', class: "meta-grid" }, index.h("div", { key: '2c27a74ea594020db8fd986d2370852ca819a135', class: "payment-meta" }, index.h("p", { key: '182732909d14a0b807e7baadb4446b4eeb22e50f', class: "amount_action" }, booking.formatAmount(this.paymentAction.currency.symbol, this.paymentAction.amount)), index.h("p", { key: 'd3af2e7a7d75491d5b80c93cf9b3e614cefcb4df', class: "date_action" }, moment.hooks(new Date(this.paymentAction.due_on)).format('ddd, MMM DD YYYY'))))), index.h("div", { key: 'c2b0014136dac8d9c30115322676824a7d76a9de', style: { width: 'fit-content' } }, index.h("ir-button", { key: '9ac75b49897101ba085198f1399782cecf040066', btn_color: "dark", text: 'Pay', size: "sm", onClickHandler: () => this.generatePayment.emit(this.paymentAction) }))));
    }
};
IrPaymentAction.style = IrPaymentActionStyle0;

exports.ir_payment_action = IrPaymentAction;

//# sourceMappingURL=ir-payment-action.cjs.entry.js.map