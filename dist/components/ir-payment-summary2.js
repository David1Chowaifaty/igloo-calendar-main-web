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
        return (h("div", { key: '8e0562ab7e03b16709a0a1510f735f8c4e38b777', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '49583585ae62874f3c6013b6f4900a6506b6dd9b', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '9f5b39f9c0c06bcfe909542f6c2162b0dab3784d' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: 'c4abf8722001f2a2379dbe99f315db6390a2c40b', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'a28abcf69a8b5ab0817bbd45cea74c1d1e3bcca1' }, locales.entries.Lcz_Balance, ": "), h("span", { key: 'b056a399d2faae07f2531545b265a224aca3f9dc', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: 'd2dda9e512e1d07296e57987ba152ecca495a359', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '1900f59bf42380c8233444096c88919aa16692c2' }, locales.entries.Lcz_Collected, ": "), h("span", { key: 'f75f818f8b90216697e423e140e291cef62c5dfe' }, formatAmount(this.currency.symbol, this.collected))))));
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