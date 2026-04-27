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
    totalCost;
    balance;
    collected;
    currency;
    isBookingCancelled;
    shouldShowTotalCost() {
        return this.totalCost > 0 && this.totalCost !== null;
    }
    render() {
        return (h("div", { key: 'e088b19ae5ee37ea4431f85fbd5772d9890a7397', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '1a8aaac28fd39bd0f08dcb56b61581c895b4f2a4', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '38fdf901ec91672d1197259701f58c3624f92ad6' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '6771e9acd51fe8d2ecddf265773dccafe52809ab', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'd53b4ed807d62f36ca42c5df1ce91ecd1d345ff0' }, locales.entries.Lcz_Balance, ": "), h("span", { key: 'fd51dabf39787975368c54357e0c1a6811b32f1d', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '3acfbed5c3c2de5499168b1dba781370d4042a0b', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '0f9ae53b690620c6fb6e227e849a2eb5724de8ad' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '97405491a5daa874a4b53af270ed0645c9ac5c4f' }, formatAmount(this.currency.symbol, this.collected))))));
    }
    static get style() { return IrPaymentSummaryStyle0; }
}, [2, "ir-payment-summary", {
        "totalCost": [2, "total-cost"],
        "balance": [2],
        "collected": [2],
        "currency": [16],
        "isBookingCancelled": [4, "is-booking-cancelled"]
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