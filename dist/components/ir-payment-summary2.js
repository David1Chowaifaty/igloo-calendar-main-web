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
        return (h("div", { key: '59b02ae4ec078eb9d26b568d51b5454f96d494ec', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '34ad9c38352fd6ceecd4c87b4ada72d440880454', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '3c21c620705c6df0e2bdf00c5ccfb6fc81695f01' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: 'e4a7c0887707b3103b9a0f5a0457cba340ca5ed9', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '0077d29adf53193867d5a6cfe17fe33412c80199' }, locales.entries.Lcz_Balance, ": "), h("span", { key: 'dfabb74e332287439850061411067087f9b8c28d', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: 'ac5bfd56153f28f6a2e37ab80d05549313b1145a', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '0d971500c21f25261afd10792527290638bd33d9' }, locales.entries.Lcz_Collected, ": "), h("span", { key: 'fe87584f4c8ca4dd8a7746ce8db27c254b09cbb9' }, formatAmount(this.currency.symbol, this.collected))))));
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