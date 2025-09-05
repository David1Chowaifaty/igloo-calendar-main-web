import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { f as formatAmount } from './utils.js';

const irPaymentSummaryCss = ".sc-ir-payment-summary-h{display:block}.sc-ir-payment-summary-h{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-payment-summary-h *.sc-ir-payment-summary{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}";
const IrPaymentSummaryStyle0 = irPaymentSummaryCss;

const IrPaymentSummary = /*@__PURE__*/ proxyCustomElement(class IrPaymentSummary extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    shouldShowTotalCost() {
        return this.totalCost > 0 && this.totalCost !== null;
    }
    render() {
        return (h("div", { key: '0db7213420cd4bdcb26ca8735cf010104d09326c', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: 'c08de0c61f23c7e72bd6205b1d19ae60756b4b4a', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '07cc1c5edf8d6a11d7fe75a7a2df158d52699357' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '33ffb7106478aa641bef6dca170bdf63920ec7d7', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '1df5186dd2f90d9bd93793e7d7af7a05848318c5' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '2a0158f7fee29e20e2c0d5c8f8d21c60e40c76c4', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), h("div", { key: '501319c3de850f9b447c2fb2ac0bc5564de97347', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '8b1a9714c71eab98bd15ef0529a6fd64b28580eb' }, locales.entries.Lcz_Collected, ": "), h("span", { key: 'c68c261db825c5d9db09e5ee1aaf01f60eb1823b' }, formatAmount(this.currency.symbol, this.collected)))));
    }
    static get style() { return IrPaymentSummaryStyle0; }
}, [2, "ir-payment-summary", {
        "totalCost": [2, "total-cost"],
        "balance": [2],
        "collected": [2],
        "currency": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-payment-summary"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-payment-summary":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPaymentSummary);
            }
            break;
    } });
}

export { IrPaymentSummary as I, defineCustomElement as d };

//# sourceMappingURL=ir-payment-summary2.js.map