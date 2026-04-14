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
        return (h("div", { key: 'cfd4f6f794560cde56c1a35ddc82c9284c42f8af', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '03253a6ec8b43c61ed67f8a1e0ba30932b346e27', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '8a6d6b61863f60be69cafa77ec1906d9eee1c6ce' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: 'b591edbbbe44d20ad3626cba883c2ac64026be19', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'ecdc75cec58423da37400dd71aa44c8ff5bdc914' }, locales.entries.Lcz_Balance, ": "), h("span", { key: 'f408dd4675b9aab67547d7156b9ee903a193fe17', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '617947b171fc46d2d219d3f6a9d7fa1f140a0ca5', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'a5af6d2a31e385c1360a1b7765baa7902d3ed855' }, locales.entries.Lcz_Collected, ": "), h("span", { key: 'ff3fd8dc612ead97af405e1bfeeeff097851821d' }, formatAmount(this.currency.symbol, this.collected))))));
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