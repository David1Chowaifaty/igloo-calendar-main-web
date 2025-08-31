import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irPaymentActionCss = ".sc-ir-payment-action-h{display:block;--label-col:6rem;--amount-col:1ch;--payment-action-bg:rgba(255, 73, 97, 10%);--payment-action-border:rgba(255, 73, 97, 40%)}.action-container.overdue.sc-ir-payment-action{--payment-action-bg:rgba(255, 73, 97, 5%);--payment-action-border:rgba(255, 73, 97, 40%)}.action-container.future.sc-ir-payment-action{--payment-action-bg:rgb(30, 159, 242, 5%);--payment-action-border:rgba(30, 159, 242, 40%)}.action-container.sc-ir-payment-action{display:flex;align-items:center;gap:1rem;background:var(--payment-action-bg);padding:0.5rem 1rem;box-sizing:border-box;border:1px solid var(--payment-action-border);border-radius:0.25rem}.overdue_action.sc-ir-payment-action,.future_action.sc-ir-payment-action{display:inline-flex;align-items:center;gap:0.5rem;border-radius:0.25rem;min-width:0}.overdue_action.sc-ir-payment-action{color:#ff4961}.future_action.sc-ir-payment-action{color:#1e9ff2}.payment-meta.sc-ir-payment-action{display:flex;align-items:center;gap:1rem}.alert-message.sc-ir-payment-action{display:none}.amount_action.sc-ir-payment-action{font-weight:600;font-variant-numeric:tabular-nums;text-align:right;justify-self:end;white-space:nowrap}.meta-grid.sc-ir-payment-action{display:flex;flex-direction:column;flex:1 1 0%}.payment-reason.sc-ir-payment-action{font-size:12px;color:hsl(230, 10%, 46%, 80%)}.date_action.sc-ir-payment-action{font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.action-container.sc-ir-payment-action p.sc-ir-payment-action{margin:0;padding:0}.action-row.sc-ir-payment-action{display:contents}@media (min-width: 640px){.sc-ir-payment-action-h{--amount-col:8ch}.alert-message.sc-ir-payment-action{display:inline-flex}.amount_action.sc-ir-payment-action{justify-self:auto}.action-container.sc-ir-payment-action{display:grid;grid-template-columns:var(--label-col) 1fr auto;align-items:center}.payment-meta.sc-ir-payment-action{display:grid;grid-template-columns:var(--amount-col) 1fr;align-items:center;column-gap:1rem;min-width:0}}";
const IrPaymentActionStyle0 = irPaymentActionCss;

const IrPaymentAction = /*@__PURE__*/ proxyCustomElement(class IrPaymentAction extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.generatePayment = createEvent(this, "generatePayment", 7);
    }
    render() {
        return (h("div", { key: 'fd203b12f5d252e1894c282904bd209f87ed822d', class: `action-container ${this.paymentAction.type.toLowerCase()}` }, h("div", { key: 'e685660195cf0de71c5876bfd570dc8dd26a23bd', class: 'action-row' }, this.paymentAction.type.toLowerCase() === 'overdue' && this.paymentAction.amount > 0 && (h("div", { key: '2f4196a5de47856fed705351253c58cc7649c23a', class: 'overdue_action' }, h("svg", { key: '446858022dfcaf0b4773f7e13ffe232d3ca3b008', height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, h("path", { key: '3f3bb4e03be58e75ce6db802ed1b98cb4638f5f8', fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), h("span", { key: 'cdeab32ddf22d0b1319629c06a51e76f55419106', class: "alert-message" }, "Overdue"))), this.paymentAction.type.toLowerCase() === 'future' && this.paymentAction.amount > 0 && (h("div", { key: '6e0d7e107ad408af5baebdc47874c3b8a89b5c0f', class: 'future_action ' }, h("svg", { key: '0ac2881334260e7cd17528d2142cd112730c33c6', xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, h("path", { key: 'fc0203b1defeeee8bbaa82b8147049789caf7f7b', fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), h("span", { key: '84bdb35eebdd5bd8bdf40900e2e5bbd09e3be9df', class: "alert-message" }, hooks(new Date(this.paymentAction.due_on)).isSame(new Date()) ? 'Today' : 'Future'))), h("div", { key: '6def694a4cd0612062f0f2370a1bac19e9a7197e', class: "meta-grid" }, h("div", { key: 'ea5ec48db1aa3dd2d09a0a6055b977a09fd39f0d', class: "payment-meta" }, h("p", { key: '024c07c207b4dcacaf1b51fccbedd2eb7f3bf020', class: "amount_action" }, formatAmount(this.paymentAction.currency.symbol, this.paymentAction.amount)), h("p", { key: 'afb9c254462d5d2d64976ef8f4b73e5bdac0e970', class: "date_action" }, hooks(new Date(this.paymentAction.due_on)).format('ddd, MMM DD YYYY'))), h("p", { key: '58684d8136a3ffe0f2477d55214e164ab26cdb03', class: "payment-reason" }, this.paymentAction.reason.trim()))), this.paymentAction.amount > 0 && (h("div", { key: 'ad499556ee81877c60c3b462ecd31462df843e60', style: { width: 'fit-content' } }, h("ir-button", { key: '2b5f36aca1b0bdd6dba699c6deca1fb1931f9c9a', btn_color: "dark", text: 'Pay', size: "sm", onClickHandler: () => this.generatePayment.emit(this.paymentAction) })))));
    }
    static get style() { return IrPaymentActionStyle0; }
}, [2, "ir-payment-action", {
        "paymentAction": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-payment-action", "ir-button", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-payment-action":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPaymentAction);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPaymentAction as I, defineCustomElement as d };

//# sourceMappingURL=ir-payment-action2.js.map