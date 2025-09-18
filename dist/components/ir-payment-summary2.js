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
        return (h("div", { key: 'd55d1bbe439a85d60f4d06ba2afb125a28749a8b', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '59eb2e3cb4d1cd7f5710548f9387411142f991f3', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: 'c063b41055f5c2803e13ce59b9d5ab0f914a752c' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '934f7440170576ea57ece36bdd153f8284d66b3d', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '9c99a9c2162a1322c69f17c0582eb42c6799f7ce' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '2ac569872da9971d39bb8d6e234c35b758f592e6', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), this.isBookingCancelled && (h("div", { key: 'c8b1e46d269cce9936f9ca3c83c175fede0caba3', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'da2c114c429ae3c86d271de813f7b78c47a0bf12' }, locales.entries.Lcz_Collected, ": "), h("span", { key: 'e15e1d1a9ab74465da09fe706e24f46ee8b7b292' }, formatAmount(this.currency.symbol, this.collected))))));
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