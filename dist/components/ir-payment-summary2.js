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
        return (h("div", { key: '535b467cc800080b29b0678e240328348a703482', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '203c988eeefa60176fb67f1b66cee2373b54e5d1', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '1c5fa96af2b3620a22f61638896aa40498a8323d' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '29a79ae2d2baa01a2215757cab9198ed80c135e4', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '8a5b03ebe59eee47e08ca629d57ad0fed21fcc4d' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '412acb8c0f7acc2a6bb76211054fc1ba506d981f', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '0ba13917c748a617ad00c7fcf04350ecce31c10f', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '9e996d6e3a599888f41f6a00991c3b09e114ab98' }, locales.entries.Lcz_Collected, ": "), h("span", { key: 'a9093e5cebadb0ee38121aa52634a78a38cdf552' }, formatAmount(this.currency.symbol, this.collected))))));
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