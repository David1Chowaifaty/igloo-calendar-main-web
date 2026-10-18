'use strict';

var index = require('./index-IDeZZwEK.js');
var moment = require('./moment-CdViwxPQ.js');
require('./calendar-data-ShS6b-Ns.js');
require('./booking.dto-CUSvGTvD.js');
var irDate = require('./ir-date-CbkOKs2C.js');
var t = require('./t-CqJPQrfm.js');
var number = require('./number-xBpNWk3H.js');
require('./locale-scope-Cch-vf1R.js');
require('./type-Bj2x9EWc.js');
require('./types-BVJQZ50e.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irPaymentActionCss = () => `.sc-ir-payment-action-h{display:block;--label-col:6rem;--amount-col:1ch;--payment-action-bg:rgba(255, 73, 97, 10%);--payment-action-border:rgba(255, 73, 97, 40%)}.action-container.overdue.sc-ir-payment-action{--payment-action-bg:rgba(255, 73, 97, 5%);--payment-action-border:rgba(255, 73, 97, 40%)}.action-container.future.sc-ir-payment-action{--payment-action-bg:rgb(30, 159, 242, 5%);--payment-action-border:rgba(30, 159, 242, 40%)}.action-container.overdue.sc-ir-payment-action:hover{--payment-action-bg:rgba(255, 73, 97, 10%);--payment-action-border:rgba(255, 73, 97, 50%)}.action-container.future.sc-ir-payment-action:hover{--payment-action-bg:rgb(30, 159, 242, 10%);--payment-action-border:rgba(30, 159, 242, 50%)}.action-container.sc-ir-payment-action{display:flex;align-items:center;gap:1rem;background:var(--payment-action-bg);padding:0.5rem 1rem;box-sizing:border-box;border:1px solid var(--payment-action-border);border-radius:0.25rem;transition:all 0.3s ease-in-out}.overdue_action.sc-ir-payment-action,.future_action.sc-ir-payment-action{display:inline-flex;align-items:center;gap:0.5rem;border-radius:0.25rem;min-width:0}.action-container.overdue.sc-ir-payment-action .overdue_action.sc-ir-payment-action{color:#ff4961}.future_action.sc-ir-payment-action{color:#1e9ff2}.payment-meta.sc-ir-payment-action{display:flex;align-items:center;gap:1rem}.alert-message.sc-ir-payment-action{display:none}.action-container.overdue.sc-ir-payment-action .alert-message.sc-ir-payment-action{text-transform:capitalize}.amount_action.sc-ir-payment-action{font-weight:600;font-variant-numeric:tabular-nums;text-align:end;justify-self:end;white-space:nowrap}.meta-grid.sc-ir-payment-action{display:flex;flex-direction:column;flex:1 1 0%}.payment-reason.sc-ir-payment-action{font-size:12px;color:hsl(230, 10%, 46%, 80%)}.date_action.sc-ir-payment-action{font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.action-container.sc-ir-payment-action p.sc-ir-payment-action{margin:0;padding:0}.action-row.sc-ir-payment-action{display:contents}@media (min-width: 640px){.sc-ir-payment-action-h{--amount-col:8ch}.alert-message.sc-ir-payment-action{display:inline-flex}.amount_action.sc-ir-payment-action{justify-self:auto}.action-container.sc-ir-payment-action{display:grid;grid-template-columns:var(--label-col) 1fr auto;align-items:center}.payment-meta.sc-ir-payment-action{display:grid;grid-template-columns:var(--amount-col) 1fr;align-items:center;column-gap:1rem;min-width:0}}`;

const IrPaymentAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.generatePayment = index.createEvent(this, "generatePayment");
    }
    paymentAction;
    generatePayment;
    render() {
        const paymentActionType = this.paymentAction.type.toLowerCase();
        const isFutureAction = paymentActionType === 'future';
        return (index.h("div", { key: '805881930bdd7a54ae7ee618dad73d5cd2c6118d', class: `action-container ${isFutureAction ? 'future' : 'overdue'}` }, index.h("div", { key: 'a12250d4957fd6ede5097904ecf249b89e21acbe', class: 'action-row' }, !isFutureAction && (index.h("div", { key: '00778db1255c066a263097da4dbb826ae75a429c', class: 'overdue_action' }, index.h("svg", { key: 'be8184042092589ea998f28791b712a143fd9f93', height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, index.h("path", { key: 'fc3b0237c83fef1bb9203dc07f27c34f02d84507', fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), index.h("span", { key: 'dafe3af9f00d5625f68523daf3326bd647c3342d', class: "alert-message" }, paymentActionType))), paymentActionType === 'future' && this.paymentAction.amount > 0 && (index.h("div", { key: '0c4506b3e95793484d1240f62c9df78dc5195263', class: 'future_action ' }, index.h("svg", { key: '3604c655a39d1833e8908447a58de5224586496b', xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, index.h("path", { key: '36c5ced7ac870acea8032fd8d67811b6022a1d38', fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), index.h("span", { key: 'f3e229de213a62fb90013a93a0d3e5b0716570dd', class: "alert-message" }, moment.hooks(new Date(this.paymentAction.due_on)).isSame(new Date()) ? t.t('Lcz_Today', { fallback: 'Today' }) : t.t('Lcz_FutureLabel', { fallback: 'Future' })))), index.h("div", { key: '1bb18c880cffd273925e660531869400530bf984', class: "meta-grid" }, index.h("div", { key: '991b616a59d973b5883173dad8702ee7b795c296', class: "payment-meta" }, index.h("p", { key: '76a604eab50b94bcdfaec98c825887c35d0635df', class: "amount_action" }, number.formatAmount(this.paymentAction.currency.symbol, this.paymentAction.amount)), index.h("p", { key: '18b8bdae82fb9b7c5600785a87c76015e72018bc', class: "date_action" }, irDate.formatDate(new Date(this.paymentAction.due_on), 'ddd, MMM DD YYYY'))))), index.h("div", { key: '789b71484b7578abce8363ae1b011b7957becfb4', style: { width: 'fit-content' } }, index.h("ir-button", { key: 'bbab3a33212ac8d3adfb601ab79df8a7dfd81121', btn_color: "dark", text: t.t('Lcz_Pay', { fallback: 'Pay' }), size: "sm", onClickHandler: () => this.generatePayment.emit(this.paymentAction) }))));
    }
};
IrPaymentAction.style = irPaymentActionCss();

exports.ir_payment_action = IrPaymentAction;
