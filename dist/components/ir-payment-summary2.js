import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { f as formatAmount } from './booking.js';

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
        return (h("div", { key: '6f4b7485ffc74c2788ad07f65f3a3d692588f8d4', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '552988d05516d334b44da27e10c383bdedd8001d', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: 'cd615fc81686e6ae921af3fe3f56ebcc526d6e57' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: 'cd2d1a4175e0d756d60a1a98ba2f7fd5a7b8e794', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '025631f92781cb5ea959f63a52cc5a16d1f7e1be' }, locales.entries.Lcz_Balance, ": "), h("span", { key: 'bc4e14243d55417dec652f0567e898c8792a3c2b', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '733c69e28bd91d93518b87da8e290960afd8bd8a', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '8de4fa00a899b94f25974fa417591f89a260bfa9' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '6ca4f5531531bbb005b639e43f63e1231348bdee' }, formatAmount(this.currency.symbol, this.collected))))));
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