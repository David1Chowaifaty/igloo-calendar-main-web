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
        return (h("div", { key: '1c5920955f14d6bf0d0dfc5c4269d77fabd01f48', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '24562dda2aa04575e92db40ac5cb5dd6df9f4a7b', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '22dbde9a3680367fb851cd1a0cd81d02e4a952b1' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: 'c06e422af99a60d4f3754debe7be2eb2ac4449b4', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '95699ee0e40cd057a59f6e3ba721d72148a19a39' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '1e39ca450abee6975e07541ffbe81e5eb275dab2', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: 'bf2b02ec41e6186b5241f24ec93749c811e22f53', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'ea6da1c3c10c8cee254bfaf53177ded4b993b1fe' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '7d6c011bb95987b85188a7dfcd97c237cb65f749' }, formatAmount(this.currency.symbol, this.collected))))));
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