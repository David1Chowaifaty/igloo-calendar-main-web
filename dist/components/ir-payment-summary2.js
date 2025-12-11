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
        return (h("div", { key: '336c5af2578684dce7bd19992ad0b20782656512', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: 'b9576c27e5a095873b8377ca18d23e641fe036fa', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: 'f5e91ab25ec8ac4d4dc8af0cbde15cbd475237ba' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '2d6fdfa1b3fbb17e93a6b0a6f8eab6f4991da362', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'b61aa6abb4a4a2fa9852bd785e0d71080895f040' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '35aa21ee877cc8b4257e3d24d64a093a4cc656a9', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '8a5924fd25080f9d9bb4dc1f805fe657f829ea4b', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '084a73d518478e173ef095a5dca13d2e4afb8f84' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '0ee497e5ac6d6960fbce6ee0ee206e20824f3532' }, formatAmount(this.currency.symbol, this.collected))))));
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