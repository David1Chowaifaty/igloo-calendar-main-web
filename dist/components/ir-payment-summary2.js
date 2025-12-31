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
        return (h("div", { key: '0ae1331aacebe2aa3a83253ca9f00959a7b5cf9c', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: 'a6d61fb823a8eb86e0c8a182167c43a35dd9af4f', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: 'a6553b823615b39315c6aee2231e1f640bc97d26' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: 'f3a3a73d5e05e62a9e03f07b95a0e20ccbec856f', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '7540ccd49ef4cf28d3476ad739da23fe176196f0' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '9a8ffd9b68327ecdf3efed4a5eb5a053dfc6d573', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '526fc44b6adafea4173553be038b560d32609777', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '2e774eecce6e25a15401d1e3c15b674492676909' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '6b6803a3c615a2855aef96373d2e0fd42db09252' }, formatAmount(this.currency.symbol, this.collected))))));
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