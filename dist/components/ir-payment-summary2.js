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
        return (h("div", { key: 'ba8cf439e47e10373d2b46df452a9160942fa1c5', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: 'c6318b6b3e8238cf7bade44efc6110a05f829857', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '3112481603e78ee744ff6ca2366c2ff465831ce3' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '9609f879469bd08a7365244a3caab6822488572f', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '77283a3286b5c5cdac666fe6ba35841529dae4c4' }, locales.entries.Lcz_Balance, ": "), h("span", { key: 'bcdd8ce1d99eaa8b15b0e857f033e684f2dda250', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), h("div", { key: '6175b69bc608742eea88aade61ee078bf425d980', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'cac3e33669872dd774d7a00d9ca15c458a2d559f' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '69e74f8e6c4fa4c33fbab7639edde09983034951' }, formatAmount(this.currency.symbol, this.collected)))));
    }
    static get style() { return IrPaymentSummaryStyle0; }
}, [2, "ir-payment-summary", {
        "totalCost": [2, "total-cost"],
        "balance": [2],
        "collected": [2],
        "currency": [16]
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