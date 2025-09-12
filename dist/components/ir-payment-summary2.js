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
        return (h("div", { key: '7640039967a02f3b349e638a88708081034ae00f', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '0329ca59fb458095f8f697b51a112f1d8e0d4541', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '48887d8bf087a8b3957d2bd47e5da017eda18c8c' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '6b2e8b0d022f06ba335c45aa1cd8def3f130f3d8', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'b999fd0c6911c342087f2b25e1d20650c35af53c' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '5d01d1a7e6fcc6a9e3a9dd1e496fe37ebd02ea33', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), h("div", { key: '1e9ac1ad531d3115e73af1178293892d3124ea3b', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'a7fec786977cc493f57690d0a67172dae787b787' }, locales.entries.Lcz_Collected, ": "), h("span", { key: 'f81ca38ec3e0a7e9f9c60d1d74c1f0cc8e7cdeb1' }, formatAmount(this.currency.symbol, this.collected)))));
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