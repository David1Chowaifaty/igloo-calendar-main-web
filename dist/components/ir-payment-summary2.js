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
        return (h("div", { key: '923625f1cfcc562df4be1832576dd34892b2a18e', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '4d7d7ce603ec7665453e8d9e046684a11dd970d6', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: 'a73e0e3ce4af9cf087332f1539aeee8f7176de37' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '8f80eb0c437c4d868bf21d604904c7aa46a8e90d', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'c7ea6a8055f81e3c3ad973673ceb420ec3239248' }, locales.entries.Lcz_Balance, ": "), h("span", { key: 'e333c54d4ed8777386674c2b3f484784c7495c63', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: 'bc0e1fa9b643ba096fb832b8b945fa0e0be86d34', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'ae3902689fc2631597e5668e6cf24bbc74f7e74a' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '4576e9d7a273754fd380caf390df3c3707225c67' }, formatAmount(this.currency.symbol, this.collected))))));
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