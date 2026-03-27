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
        return (h("div", { key: 'bc25d162dec4300117fccc9d6456c3ba4abd0a2f', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '6858c305ca7a04da564b98521e36fb973f0f64fa', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '1aad253de815a7726eaf80846be26eb6e2dd9dd3' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: 'dbfa2206f34762339c34a86d1b80949264d620ff', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'e9cb930dded44a77e060cfec6051e2425346993f' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '798a2d740b78d979319ce84ff9bae760c19048d7', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '2beed140d98438c44d1b81444e8d3ba4700f5b2a', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'ec32ef06408102c0b6d4e897ec24d2ce07150b6d' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '5748c72e4d9cc167722ec3629736fc410be8b2e6' }, formatAmount(this.currency.symbol, this.collected))))));
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