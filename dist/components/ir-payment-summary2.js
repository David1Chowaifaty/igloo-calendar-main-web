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
        return (h("div", { key: 'ebf0cecb595c92518da840fcc376906bb3eae7ac', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '6ed041d7151800b5b77f6a79e4076600d8fc7057', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: 'e89a7a2439152b5389fe129e7ee0d03f6ccf3f8e' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '6077d48f284506089380989ea03d5f99138eb95e', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'a98f15ccff38c1f1ca5d5817617446e65cc47226' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '2eb0e68590ae271ae18b71460635ab64ef72fb54', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: 'f3682b78fe37ee8454317ecc8b0cdaefb1eb5242', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '2a92dd82b7b4fefc2254b979c39b31d22a9d406c' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '775f156ca1d6799c480fb1e0f6abf9ec9449e174' }, formatAmount(this.currency.symbol, this.collected))))));
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