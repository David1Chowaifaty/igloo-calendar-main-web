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
        return (h("div", { key: 'b631c5786f3bd5d6312ff310dae61c6d3ee67462', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '5ae030896cf4e3e2090cc582f21f7e6302614f3a', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: 'e615d5d625b5e5e71a3a823700a39a53c80d0585' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: 'b013a59bf2df8758e88e0f1e6c8a41a0f2122cf6', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'ad5fe86aa0edc65f4cf0e2aac08ab5136df5b4a0' }, locales.entries.Lcz_Balance, ": "), h("span", { key: 'e78665fe9a1d148389690ad99358d43949410551', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '355ee486fcd732325fd996059035a218db05fef2', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '8e243c1f23f743b851bd839d69dc1a1018cdc753' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '413aef586c89412e2f953308c5d4162c7c41d0af' }, formatAmount(this.currency.symbol, this.collected))))));
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