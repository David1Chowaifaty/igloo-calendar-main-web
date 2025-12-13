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
        return (h("div", { key: 'ad0625eb6a193bd009ed2b115491e26e95a8d6e5', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '02d2415622144c9a4334d862b8b73058c9c7c593', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '7e5ff2867363b4dea66ccafffa6f79fb8d167aba' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: 'a5b040089a661adf5339432ab4b6196818856a76', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '4e2224ef23d236ccd80816c5efe2abc1aadd5248' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '4d980af014aa6cd342ec790a6bda7b944af10f30', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: 'e0c93df45456d9785966e674f48efa956e09258c', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '32a47ba545005ab4d9d25dc58d98873715108789' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '2fc28702b4f9e54afe66b34d95499eb072ae7609' }, formatAmount(this.currency.symbol, this.collected))))));
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