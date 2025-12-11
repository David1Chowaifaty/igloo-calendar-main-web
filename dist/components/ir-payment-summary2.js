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
        return (h("div", { key: '6ecfb756f3d23588bad1adf8aa4e12c40e224f43', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: 'b097037e83e270793cd8b8155eb90e862a0c0dd2', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '5c7a4630964bc9385be9caf860a921c31385aecc' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '32eb374af11406e3527dd306c296c79de7d421a7', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '14a1035376e1d10d67ca8cca984b334e214c3d4a' }, locales.entries.Lcz_Balance, ": "), h("span", { key: 'd111cd25fb8a044b36fda6e13d057b3b270201f9', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '8cf3667377ef00ab28738a310810b8cabee5a0a4', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '9a3fb51153dc9a45cf0fb2c65013380d93a3675c' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '1577ed70237baa2f376d2438e248efa05a926b4c' }, formatAmount(this.currency.symbol, this.collected))))));
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