import { r as registerInstance, c as createEvent, h } from './index-DKZeCK8T.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import './calendar-data-D8EnecFU.js';
import './booking.dto-DVIFh8qe.js';
import { f as formatDate } from './ir-date-CdNwD9PM.js';
import { t } from './t-DTGA0v_q.js';
import { f as formatAmount } from './number-COOjxK58.js';
import './locales.store-DsOXxI8k.js';
import './type-W0yWfEBm.js';
import './types-CrHq6jOb.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';

const irPaymentActionCss = () => `.sc-ir-payment-action-h{display:block;--label-col:6rem;--amount-col:1ch;--payment-action-bg:rgba(255, 73, 97, 10%);--payment-action-border:rgba(255, 73, 97, 40%)}.action-container.overdue.sc-ir-payment-action{--payment-action-bg:rgba(255, 73, 97, 5%);--payment-action-border:rgba(255, 73, 97, 40%)}.action-container.future.sc-ir-payment-action{--payment-action-bg:rgb(30, 159, 242, 5%);--payment-action-border:rgba(30, 159, 242, 40%)}.action-container.overdue.sc-ir-payment-action:hover{--payment-action-bg:rgba(255, 73, 97, 10%);--payment-action-border:rgba(255, 73, 97, 50%)}.action-container.future.sc-ir-payment-action:hover{--payment-action-bg:rgb(30, 159, 242, 10%);--payment-action-border:rgba(30, 159, 242, 50%)}.action-container.sc-ir-payment-action{display:flex;align-items:center;gap:1rem;background:var(--payment-action-bg);padding:0.5rem 1rem;box-sizing:border-box;border:1px solid var(--payment-action-border);border-radius:0.25rem;transition:all 0.3s ease-in-out}.overdue_action.sc-ir-payment-action,.future_action.sc-ir-payment-action{display:inline-flex;align-items:center;gap:0.5rem;border-radius:0.25rem;min-width:0}.action-container.overdue.sc-ir-payment-action .overdue_action.sc-ir-payment-action{color:#ff4961}.future_action.sc-ir-payment-action{color:#1e9ff2}.payment-meta.sc-ir-payment-action{display:flex;align-items:center;gap:1rem}.alert-message.sc-ir-payment-action{display:none}.action-container.overdue.sc-ir-payment-action .alert-message.sc-ir-payment-action{text-transform:capitalize}.amount_action.sc-ir-payment-action{font-weight:600;font-variant-numeric:tabular-nums;text-align:end;justify-self:end;white-space:nowrap}.meta-grid.sc-ir-payment-action{display:flex;flex-direction:column;flex:1 1 0%}.payment-reason.sc-ir-payment-action{font-size:12px;color:hsl(230, 10%, 46%, 80%)}.date_action.sc-ir-payment-action{font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.action-container.sc-ir-payment-action p.sc-ir-payment-action{margin:0;padding:0}.action-row.sc-ir-payment-action{display:contents}@media (min-width: 640px){.sc-ir-payment-action-h{--amount-col:8ch}.alert-message.sc-ir-payment-action{display:inline-flex}.amount_action.sc-ir-payment-action{justify-self:auto}.action-container.sc-ir-payment-action{display:grid;grid-template-columns:var(--label-col) 1fr auto;align-items:center}.payment-meta.sc-ir-payment-action{display:grid;grid-template-columns:var(--amount-col) 1fr;align-items:center;column-gap:1rem;min-width:0}}`;

const IrPaymentAction = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.generatePayment = createEvent(this, "generatePayment");
    }
    paymentAction;
    generatePayment;
    render() {
        const paymentActionType = this.paymentAction.type.toLowerCase();
        const isFutureAction = paymentActionType === 'future';
        return (h("div", { key: '8038edf12ba4b737f732dd568eac065fc452f3e7', class: `action-container ${isFutureAction ? 'future' : 'overdue'}` }, h("div", { key: '77e985941a80f4e2940a9f4447c5fc3e5df4d0a0', class: 'action-row' }, !isFutureAction && (h("div", { key: 'a364f746016d8e944f7edb78c42a3340952cbaed', class: 'overdue_action' }, h("svg", { key: 'd5ca957db3534151b4325e584cf016ca7ed9f51d', height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, h("path", { key: '100d669fd043f96b305425767970b3f0134ef552', fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), h("span", { key: '9e7705b5ba5402582fd96bc102f492ea1e439c8f', class: "alert-message" }, paymentActionType))), paymentActionType === 'future' && this.paymentAction.amount > 0 && (h("div", { key: '72b5113e2b46932497a395d814137176562e267e', class: 'future_action ' }, h("svg", { key: 'f9a560adad6123207b2a9ef607f402f237caf03c', xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, h("path", { key: '2b313958f2c8186c713285410aeca37d01bb59f4', fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), h("span", { key: 'c75004f4272ca141c42322189b3cd9d29f23c2c6', class: "alert-message" }, hooks(new Date(this.paymentAction.due_on)).isSame(new Date()) ? t('Lcz_Today', { fallback: 'Today' }) : t('Lcz_FutureLabel', { fallback: 'Future' })))), h("div", { key: '844827694c358b322d155decf143697158a6ee25', class: "meta-grid" }, h("div", { key: '1db4f8d7fbec598ba7fdf4152ddf70218754e8bc', class: "payment-meta" }, h("p", { key: '73a36f6e4c481e37667f82c4931371102c609e4a', class: "amount_action" }, formatAmount(this.paymentAction.currency.symbol, this.paymentAction.amount)), h("p", { key: 'bf60ded8c3044e63904a6e9034184fa07975415f', class: "date_action" }, formatDate(new Date(this.paymentAction.due_on), 'ddd, MMM DD YYYY'))))), h("div", { key: '1db45f363c50e4cc99d687331794cbe187d1b3be', style: { width: 'fit-content' } }, h("ir-button", { key: 'cf8757d7e85752a9d62c803d0eb2de1e88def7b2', btn_color: "dark", text: t('Lcz_Pay', { fallback: 'Pay' }), size: "sm", onClickHandler: () => this.generatePayment.emit(this.paymentAction) }))));
    }
};
IrPaymentAction.style = irPaymentActionCss();

export { IrPaymentAction as ir_payment_action };
