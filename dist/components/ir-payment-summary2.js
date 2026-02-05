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
        return (h("div", { key: '069a7109f44f8f11b74cf65067bf7dd463093506', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: 'a21c05a81368b82f9f4e2a705fcd72741e314305', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '2410d99dfbaf171ed594b9200ed70b26a14a855c' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: 'ee7b0d6e3fbcda275053ffcbdf5e5dccb30226d5', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '780eb9bb05505483eaf08ebb9ba54a0bfd510bc2' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '7cb142399a84392f3e8a6e3ce0a3bf5c023821b0', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '09360f726b2b62bb5bd20f108b0c7c0ae671664e', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '11c0ba4bce4942ff05ecb5437397dccbb4b50a17' }, locales.entries.Lcz_Collected, ": "), h("span", { key: 'dc90bf739a3b1314bca6216e5c513e9af1e1486a' }, formatAmount(this.currency.symbol, this.collected))))));
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