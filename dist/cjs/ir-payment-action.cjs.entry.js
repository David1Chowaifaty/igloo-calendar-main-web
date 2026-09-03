'use strict';

var index = require('./index-P5Mginch.js');
var moment = require('./moment-CdViwxPQ.js');
require('./calendar-data-BjlxOXi1.js');
require('./locales.store-v9LoZcAK.js');
require('./booking.dto-kenLHU-o.js');
var irDate = require('./ir-date-CUot5M4p.js');
var number = require('./number-3J_Nkle1.js');
require('./index-BLJXadKe.js');
require('./index-CLqkDPTC.js');
require('./type-Dy9pVS4V.js');
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
        return (index.h("div", { key: '2069abc2e7449fd4a7057b01d0c22a1b4c3ec080', class: `action-container ${isFutureAction ? 'future' : 'overdue'}` }, index.h("div", { key: 'df5a6a888b1b65752d6759beba8ae7eda746e3b9', class: 'action-row' }, !isFutureAction && (index.h("div", { key: '422feb24793bee63d7c3c368369de80aa28fb2c6', class: 'overdue_action' }, index.h("svg", { key: 'a19dfd414b787abc721ea9cbea6868d72e069f63', height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, index.h("path", { key: 'd1eb30dcbd8bca8a4688bbe931f51833365a85af', fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), index.h("span", { key: '6a85a7a66728243f1876946bd211be205b978e80', class: "alert-message" }, paymentActionType))), paymentActionType === 'future' && this.paymentAction.amount > 0 && (index.h("div", { key: '6e7de3e0a13a565374c15e39eb0b82442eee174f', class: 'future_action ' }, index.h("svg", { key: 'ed21a637e7366f4165547c89dabf7bb7e888c80c', xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, index.h("path", { key: '47041b098cf7c73f8b283ca891219ea1fdd3f22e', fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), index.h("span", { key: '07138bb7a045b71cd3196a38d7418b3d2153dc49', class: "alert-message" }, moment.hooks(new Date(this.paymentAction.due_on)).isSame(new Date()) ? 'Today' : 'Future'))), index.h("div", { key: '134c488e7718bd32b2bc5e4e3978f267547bd129', class: "meta-grid" }, index.h("div", { key: 'd1d1f9a253efb33394d2db4ecbe715924b55aee6', class: "payment-meta" }, index.h("p", { key: '5e38474e32351614de790764215d94df07297e36', class: "amount_action" }, number.formatAmount(this.paymentAction.currency.symbol, this.paymentAction.amount)), index.h("p", { key: '6120d88402753ddef4a3a4a70c615c77b3b50623', class: "date_action" }, irDate.formatDate(new Date(this.paymentAction.due_on), 'ddd, MMM DD YYYY'))))), index.h("div", { key: '8cb7e4b7fadffcd9723c0fc2bbbf5fcc785d045e', style: { width: 'fit-content' } }, index.h("ir-button", { key: '92ba5c85f5601547bed57504ce60fba4f043bcaf', btn_color: "dark", text: 'Pay', size: "sm", onClickHandler: () => this.generatePayment.emit(this.paymentAction) }))));
    }
};
IrPaymentAction.style = irPaymentActionCss();

exports.ir_payment_action = IrPaymentAction;
