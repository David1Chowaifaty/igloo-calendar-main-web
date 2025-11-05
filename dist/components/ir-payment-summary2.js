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
        return (h("div", { key: 'f2a495a41854708f41eac9503e812a264ff79f32', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '6f95a23b268d495c40ad5a762b759703a34d7eb2', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '8b9fccc98125bcca2d26272513afb604b2b7dee8' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '3c4d1e06048940dbffba046ecc484704579833b9', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'd66a474ebbe75cc55d916e994f983bf23707f61a' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '44f62bd91ff514e58f949a1790e00ec455e6640c', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '31b157f66112e75154a788eaf677d34ed38c1f4a', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'fb8bf0b373acc393b07774f466cb1cb98260e7fc' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '1bfc784ad7f3820f82f381dd01c922c70338fdbc' }, formatAmount(this.currency.symbol, this.collected))))));
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