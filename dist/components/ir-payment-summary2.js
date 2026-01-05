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
        return (h("div", { key: '0d3889e42d0a9dec6b2903a76f4490b97d23a2ab', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: 'e589e1ec27f69aeb8be52d7ac3d0591ddc38b066', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '35d5bef31e5fee73a51fd49ebdff1ae3917e4a63' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '9093889f7ab112bc0bb941683bcf379d6eac8a17', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '05da60ec9f5f1d9174c78993dd81491e092fc028' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '544501854c46a0d10c86a8af1098db0b1fb02f42', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: 'b4942358ab1a66b841db63d311090435d75c10f8', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'd7dd8e94efb475717a4eaab842ab54e91a81704f' }, locales.entries.Lcz_Collected, ": "), h("span", { key: 'd42dbeefc7a6bbca56959ed432a5904cdc8e04b1' }, formatAmount(this.currency.symbol, this.collected))))));
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