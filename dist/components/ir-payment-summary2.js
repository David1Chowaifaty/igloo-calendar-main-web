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
        return (h("div", { key: '7d779e12ceb1e98507c76b84b693e56c75787dba', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: 'fa9c16bd7cecf372df47bb14509400940b711d26', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '95bcfc5728ee2643eab7121a51d1b6b477e13499' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: 'bac89fb3b4506a162ee62628081d33348690e978', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'e356f2418dde0f8138032be48635c63af4475ed5' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '8866896a53c60220d9864b57b4152108fb34e6a2', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '7f31219d391e8b0bad6a4b2d2c4c653f39c8e309', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'ed6d9822476bd96046fe25f76de4c404abe6a339' }, locales.entries.Lcz_Collected, ": "), h("span", { key: 'c43af6dc3e64e389bdb061b2b75db35cdaea63ea' }, formatAmount(this.currency.symbol, this.collected))))));
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