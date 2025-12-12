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
        return (h("div", { key: '792e5d87efa9c9fe23fddf19c3c070de924fa1d6', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: 'b380c6281924f28a4383ae63d92a86de099650bf', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '7579a23b3214d87facf4069885a77d5e8063d94e' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '3ef12266b829a1e33bc4a8e1c41f3cf1db5244c6', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '1039d406375fa4b5e3abd2a9e8d830052991b4e7' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '1d97785d9a0f18e9d43eb23353be4f8611adc0fc', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '29ca2cb186c7632a0a766f01b0003bb6eea8ce1c', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '5e645c2f2bed8cd2a6412c0bedb042005a63488a' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '882929be759a17c841cd21ef102f6846321639f3' }, formatAmount(this.currency.symbol, this.collected))))));
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