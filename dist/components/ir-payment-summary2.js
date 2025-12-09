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
        return (h("div", { key: 'ba36ac16f152836697e9ef7add05ba9ef3cf2500', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '7e5faddde9423092ae38a49f779a64a798f855de', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '4aa6ad6095275ba15dd1962209f6b6418a261fa8' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '51532f54c6d0d2f17166b6028b929d727848722b', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'ced8b3ddf8c1856e43ee7a07a7d9ea83968ef3b6' }, locales.entries.Lcz_Balance, ": "), h("span", { key: 'e1b82982d7ef1f443fe1b83813ab80918602c619', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '614faef9932a110d58b8a1f85ee94071e7439dd7', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '6b78302dae3f3331d695384665b0e5744f450e46' }, locales.entries.Lcz_Collected, ": "), h("span", { key: 'b643e85632dd86f9e22ba604d6e48e9fb9a789d4' }, formatAmount(this.currency.symbol, this.collected))))));
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