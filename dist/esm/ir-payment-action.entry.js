import { r as registerInstance, c as createEvent, h } from './index-CeHdrJeH.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import './calendar-data-CiYzaNK0.js';
import './booking.dto-B554ToUQ.js';
import { f as formatDate } from './ir-date-tLkbTntq.js';
import { t } from './t-CHjay2ar.js';
import { f as formatAmount } from './number-DbiGgV_N.js';
import './locales.store-CXJn6ls-.js';
import './type-DjfVZqvs.js';
import './types-CB66a07H.js';
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
        return (h("div", { key: '4f0f4284f860fa8ad596880ba1bb0008b191e78f', class: `action-container ${isFutureAction ? 'future' : 'overdue'}` }, h("div", { key: 'c28b04d1a396c8092769538904fa82cbcd86cc1b', class: 'action-row' }, !isFutureAction && (h("div", { key: '345443356639f12cde4e77591970bceebb241d6b', class: 'overdue_action' }, h("svg", { key: '282f3ba5dad83c151cf22d7d04ab0bfe4249c56c', height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, h("path", { key: 'c06f82ac36181f1aa5c59c7de6b95b008140bfed', fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), h("span", { key: '42220aacda7c3e9d4fad6745cb339bb7188b6cd2', class: "alert-message" }, paymentActionType))), paymentActionType === 'future' && this.paymentAction.amount > 0 && (h("div", { key: 'd838cb3953bffca530969986fe4819ffc2263ee5', class: 'future_action ' }, h("svg", { key: '15f9471e44d223ffa60fdfd587ded408aacada3f', xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, h("path", { key: '8fe5b0ef113f3336ed1db272b065cdd130377bcf', fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), h("span", { key: '45c0ab2984cb6bc642aef15d947423b05000e104', class: "alert-message" }, hooks(new Date(this.paymentAction.due_on)).isSame(new Date()) ? t('Lcz_Today', { fallback: 'Today' }) : t('Lcz_FutureLabel', { fallback: 'Future' })))), h("div", { key: '979826493c57e909d247ba99cc8c350b91954e5e', class: "meta-grid" }, h("div", { key: '9a55c50f067af81f08e612cc4609fcf4bce5be9f', class: "payment-meta" }, h("p", { key: '3568c034aa7c498ccaac45e9b63ec7aaac73f731', class: "amount_action" }, formatAmount(this.paymentAction.currency.symbol, this.paymentAction.amount)), h("p", { key: '7e74a490c4ad55f28270b35cbba817eb4263854f', class: "date_action" }, formatDate(new Date(this.paymentAction.due_on), 'ddd, MMM DD YYYY'))))), h("div", { key: '5d879f2b85296150546f4a7a31c7ef725f5a82df', style: { width: 'fit-content' } }, h("ir-button", { key: '18892cc559271471a1f3bed0ec70d5487d6e2fdf', btn_color: "dark", text: t('Lcz_Pay', { fallback: 'Pay' }), size: "sm", onClickHandler: () => this.generatePayment.emit(this.paymentAction) }))));
    }
};
IrPaymentAction.style = irPaymentActionCss();

export { IrPaymentAction as ir_payment_action };
