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
        return (h("div", { key: 'b6720906c316f07debcf9a7eb894c55720187cea', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '06396be091662549774ba0346d8714e6425b2f87', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: 'fc26a0525591861f86a7c05b216b4c8b1d6de0e7' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '36a8ea89d3b3fa08dd139ddf9ade30d1645c2166', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '7d55655b23ff9cca50e5f9dc0d3dde1f68c4d24b' }, locales.entries.Lcz_Balance, ": "), h("span", { key: 'c4c18b697ac9d21f8682eaa8061aaba3b460c16a', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '1f0a40468adf10b50dfa731eb266b5c38b27d8b9', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '975c594884cbf72c7f9c07c549cad79565989280' }, locales.entries.Lcz_Collected, ": "), h("span", { key: 'a42ee6a6c785148f71b55b910736048e1f7d3e9a' }, formatAmount(this.currency.symbol, this.collected))))));
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