'use strict';

var index = require('./index-IDeZZwEK.js');
var moment = require('./moment-CdViwxPQ.js');
require('./calendar-data-ShS6b-Ns.js');
require('./booking.dto-CMx8s-oW.js');
var irDate = require('./ir-date-CbkOKs2C.js');
var t = require('./t-CqJPQrfm.js');
var number = require('./number-xBpNWk3H.js');
require('./locale-scope-Cch-vf1R.js');
require('./type-DxODN41W.js');
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
        return (index.h("div", { key: 'aa318012bc2ca7802b8013705541876a4d2b2913', class: `action-container ${isFutureAction ? 'future' : 'overdue'}` }, index.h("div", { key: '05e6ecedad077ece3fb83488683c9fdf4a7c42ac', class: 'action-row' }, !isFutureAction && (index.h("div", { key: '95b1ea1a98d56d64e0d60f9eb181d203cea70dda', class: 'overdue_action' }, index.h("svg", { key: '00a0d4786e253c292aee012c5e00d93fab3b980b', height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, index.h("path", { key: '3d935a18ae9a09f900c33ffeb57f399b8984e866', fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), index.h("span", { key: 'd5ad8aa676a7e1b62ff58317aa6aca4b831028fe', class: "alert-message" }, paymentActionType))), paymentActionType === 'future' && this.paymentAction.amount > 0 && (index.h("div", { key: '63d2cd37e1f12b79a85c9990fd1d1e2670e8265d', class: 'future_action ' }, index.h("svg", { key: 'fd9cfaf7c613c9af3b035a3ef53ab46c955a8b29', xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, index.h("path", { key: '23de93ef167410122c517ac9d675b620145f2efc', fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), index.h("span", { key: 'e69bc9615678c8d1324f2130b64355b624b83afd', class: "alert-message" }, moment.hooks(new Date(this.paymentAction.due_on)).isSame(new Date()) ? t.t('Lcz_Today', { fallback: 'Today' }) : t.t('Lcz_FutureLabel', { fallback: 'Future' })))), index.h("div", { key: '1478c9cc1c39b351d3474294c32f5e1d92b92bd5', class: "meta-grid" }, index.h("div", { key: '4bf53e88c83e6e97a265162cf715149b54ba850d', class: "payment-meta" }, index.h("p", { key: '03b5744735a885ff85aa335d5294bc572b1474c1', class: "amount_action" }, number.formatAmount(this.paymentAction.currency.symbol, this.paymentAction.amount)), index.h("p", { key: 'e5ba53374bd8b75094e12712758c2d7e8bb0aec5', class: "date_action" }, irDate.formatDate(new Date(this.paymentAction.due_on), 'ddd, MMM DD YYYY'))))), index.h("div", { key: '5f0a3bb47a88b9c332c589760f4a4525630c1a26', style: { width: 'fit-content' } }, index.h("ir-button", { key: 'ccb4d09cabd837f11e532dc7387bb4431c2c0c4c', btn_color: "dark", text: t.t('Lcz_Pay', { fallback: 'Pay' }), size: "sm", onClickHandler: () => this.generatePayment.emit(this.paymentAction) }))));
    }
};
IrPaymentAction.style = irPaymentActionCss();

exports.ir_payment_action = IrPaymentAction;
