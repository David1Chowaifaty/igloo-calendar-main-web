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
        return (h("div", { key: '7a1d316bd04226854cdf6b0ef4d59a6b13c1cd66', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '17950a5d74ad753f5166b19e92d6823d868f3205', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: 'ba8853b53cd34614af3da4d54f22f05f1a4a29a2' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '337467c2d912e48e6a09efc7d5a535a17c914762', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '792dcf213ec5a678dcc8643df53a5b94a64b6613' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '97cf081a640788ee86a0669074965e1c77aa342a', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '89ae5fa787abb89fae92cae28e36a73a890272f2', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '80cc65281c032e23534f32f7d4aae84947725451' }, locales.entries.Lcz_Collected, ": "), h("span", { key: 'ff9f06e55cba8435625a77e4019bd104f56b3475' }, formatAmount(this.currency.symbol, this.collected))))));
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