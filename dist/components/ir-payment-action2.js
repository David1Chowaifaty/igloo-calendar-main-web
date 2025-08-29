import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irPaymentActionCss = ".sc-ir-payment-action-h{display:block;--label-col:6rem;--amount-col:1ch;--payment-action-bg:rgba(255, 73, 97, 10%);--payment-action-border:rgba(255, 73, 97, 40%);max-width:500px}.action-container.overdue.sc-ir-payment-action{--payment-action-bg:rgba(255, 73, 97, 5%);--payment-action-border:rgba(255, 73, 97, 40%)}.action-container.future.sc-ir-payment-action{--payment-action-bg:rgb(30, 159, 242, 5%);--payment-action-border:rgba(30, 159, 242, 40%)}.action-container.sc-ir-payment-action{display:grid;grid-template-columns:var(--label-col) 1fr auto;align-items:center;gap:1rem;background:var(--payment-action-bg);padding:0.5rem 1rem;box-sizing:border-box;border:1px solid var(--payment-action-border);border-radius:0.25rem}.overdue_action.sc-ir-payment-action,.future_action.sc-ir-payment-action{display:inline-flex;align-items:center;gap:0.5rem;border-radius:0.25rem;min-width:0}.overdue_action.sc-ir-payment-action{color:#ff4961}.future_action.sc-ir-payment-action{color:#1e9ff2}.payment-meta.sc-ir-payment-action{display:grid;grid-template-columns:var(--amount-col) 1fr;align-items:center;column-gap:1rem;min-width:0}.alert-message.sc-ir-payment-action{display:none}.amount_action.sc-ir-payment-action{font-weight:600;font-variant-numeric:tabular-nums;text-align:right;justify-self:end;white-space:nowrap}.date_action.sc-ir-payment-action{font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.action-container.sc-ir-payment-action p.sc-ir-payment-action{margin:0;padding:0}.action-row.sc-ir-payment-action{display:contents}@media (min-width: 640px){.sc-ir-payment-action-h{--amount-col:8ch}.alert-message.sc-ir-payment-action{display:inline-flex}}";
const IrPaymentActionStyle0 = irPaymentActionCss;

const IrPaymentAction = /*@__PURE__*/ proxyCustomElement(class IrPaymentAction extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.generatePayment = createEvent(this, "generatePayment", 7);
    }
    render() {
        return (h("div", { key: '839f008a4c22d467f8aea77fd6987dc3c940f32d', class: `action-container ${this.paymentAction.type}` }, h("div", { key: 'e57672d411c0712c2342cd89a955ef31bb9c4b52', class: 'action-row' }, this.paymentAction.type === 'overdue' && this.paymentAction.amount > 0 && (h("div", { key: '14ac954dd09e1728d39c5234e3b0a58abf348503', class: 'overdue_action' }, h("svg", { key: '172ccefba9b6313b820dda31767e1bef7326a1c8', height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, h("path", { key: '9f0db78644ead8f9a44eee58fc288733b12926c4', fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), h("span", { key: 'dba095f4ba93a57db36e9c6f4de7d77800fd775f', class: "alert-message" }, "Overdue"))), this.paymentAction.type === 'future' && this.paymentAction.amount > 0 && (h("div", { key: 'd812e621db9b92c44335c394ed25e8036f70b23d', class: 'future_action ' }, h("svg", { key: 'ed099aff14b2fbd065980890be6a620c73cf9cd5', xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, h("path", { key: '379ba2ead3b2e3803c9e41d0f91117dde5f79db9', fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), h("span", { key: 'f2dd949aa72f9a25ae0ac40c34ee5744f3f6e831', class: "alert-message" }, hooks(new Date(this.paymentAction.due_on)).isSame(new Date()) ? 'Today' : 'Future'))), h("div", { key: '37b1985c71331e16fff6c3da105d714d7a776333', class: "payment-meta" }, h("p", { key: '164e3b1a90acad4ac1e1796f580b1cf4222fb7bf', class: 'amount_action' }, formatAmount(this.paymentAction.currency.symbol, this.paymentAction.amount)), h("p", { key: 'd59a92b659811204c60990de9dd022f4fff00fa3', class: 'date_action' }, hooks(new Date(this.paymentAction.due_on)).format('ddd, MMM DD YYYY')))), this.paymentAction.amount > 0 && (h("div", { key: '84feae25c7426f9c5ea102c52d47b6a8cb535588', style: { width: 'fit-content' } }, h("ir-button", { key: '066fac11ae395d293dff23c3190f4a549aeb1d16', btn_color: "dark", text: 'Pay', size: "sm", onClickHandler: () => this.generatePayment.emit(this.paymentAction) })))));
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