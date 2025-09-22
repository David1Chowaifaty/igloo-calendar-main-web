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
        return (h("div", { key: 'f86713ff9cdb0fa886ca0ec4ac6eeb7a1596b6a2', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '947244db84d6b9dc614c19e7083071d4758daf4a', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '3a8958959a19a7fe1d3c460c4b8d4bfba6c31203' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: 'f94792b22e3a5368f003dfea2f4138420949fbc9', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'f8968ee8a24af89064ab863cd591633148eaf45e' }, locales.entries.Lcz_Balance, ": "), h("span", { key: 'ab35c800af7bc34623335414e5a71e58bd282762', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '7f37de76520ad24615998e1b4874f2272a257e16', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '7030df15753e0391d9ebad4c83832af8e701fc14' }, locales.entries.Lcz_Collected, ": "), h("span", { key: 'e938f0b07a90cdce4d5fff272d1fca35fa9ebf8d' }, formatAmount(this.currency.symbol, this.collected))))));
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