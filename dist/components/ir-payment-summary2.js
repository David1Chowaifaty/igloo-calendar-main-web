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
        return (h("div", { key: 'b8d205676eb9f281d6ffa2e4d684567bcc976142', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '10cc3eb19f1f06c0946a406d60a2039a1532e69f', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: 'a650468664c3565bd41ce2e1d19f65c477626d4a' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: 'cc9633f9329feac8593f6589e48709be2fda6562', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'c513853e36ac35052fd7dbb5c49954ee173860ab' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '36faf9e88343ad3c58cdf726cbd53a97a4799cf8', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), h("div", { key: 'ee49d78ca66c34e9620ac7cdb9053fa896e61217', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '29c4f9699de77db97e1d67e92743cff880db5b5f' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '74f7a3387ef05d47e5612dc692e6c9b3f7f113b9' }, formatAmount(this.currency.symbol, this.collected)))));
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