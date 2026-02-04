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
        return (h("div", { key: 'f8800be3179a2f30c52b716a4dba2ce7d1a1b17f', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: 'f6561c54b736ed51517980864240545fac52f1fc', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '856dab18b4fbeb19ebb18c687e022088174970e2' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: 'a290a49a44444b25e3bfe5b83f3e4c85edd05812', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '0deb37402e4a9ffb3e54ba16db82003fa6abe23a' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '5483812b93f53c808b22091f48f62b37c53fffa9', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: 'e5347726e234e4d159c77dd362dca0c7af5ac430', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '8cf1fdff55e9baaa2452fbcc64e216d007112751' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '9d9f4c015c278a3e6f0a658c909ceebf9ed3de88' }, formatAmount(this.currency.symbol, this.collected))))));
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