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
        return (h("div", { key: 'db55227b1c94c064a5bd0a3053e750044ce1a412', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: 'c17a6843e5922dc8a6728bd35da109d17ccb6427', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '46b8017df964f6ee6955296bdb07ca470370d154' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '2daae2c7f0507a2c67ef8506aad198744ea97b75', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'a8a2ea8f285c9479abb6a924c5643ef09e29f864' }, locales.entries.Lcz_Balance, ": "), h("span", { key: 'f67cc443d82c572c4c3f5b29f05d8427ba8f4b75', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '76ef8cd489ffb04d36a0f9ac7963ac85471159e3', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '0f30671d4ac30860604fd9ee2be0d4e359f20b56' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '27260aef86ce09cbe5cd961c8293aef7ec880adb' }, formatAmount(this.currency.symbol, this.collected))))));
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