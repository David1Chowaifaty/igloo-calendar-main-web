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
        return (h("div", { key: '1242db09de160aa061adc6d2fefd695aee5462d7', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '2bc0bc212ea85ac01c46830b22fff7de7f220f0c', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: 'f641d31963fb3d32bd0835c4463efe414749b0aa' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '0d751f83a55f47ce89b6d2bac29547063be36a6e', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '37f2352c7c09ea2366881649ed627bccad5b6462' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '6bbc36df59f9ae65c15e868051e8c6f0b6928b70', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: 'fc647a27413264e14b70ab171f5537e7eeeb1560', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'e5d58f89706fedb849297d1e51c2e0a478231d44' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '3e29108a741d549c0f50ce78eca3f3d605e92699' }, formatAmount(this.currency.symbol, this.collected))))));
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