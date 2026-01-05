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
        return (h("div", { key: '8aca14c53b7d2936c0c02d87278df2c5e0d6bc0e', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '41da62b12d47e6ffaf61805f6dfc34ae97338cc9', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '0ef9dea842e91cbc94e4abcc793515c9afaccf64' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '26b7eb32dd363d0ae94e23d68cbd08b94f4b2325', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '4da846b4a4dbed681671a308d46fc204db6e2825' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '5ab78f4372590694b19596ed6a1ee8c9930a7d42', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '3eb8732136596165e7692265b39a1c9f5eace40e', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '92a57474558718dc227e4fd9c8928bab52209011' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '3f2360a0942cd7bd2dea0fe1247a9be180355b02' }, formatAmount(this.currency.symbol, this.collected))))));
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