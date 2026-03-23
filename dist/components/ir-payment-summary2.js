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
        return (h("div", { key: 'cf5031a6d9c9feae655d6e70f891ddfc594ad7ef', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: 'b782f2dcfcb10f8f9625d1682a47e1170d098b96', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: 'fa7a314baec7929a6071de6029004c354d7b31dd' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '79408724d8969be2a32c54befe5afb3d8c9a8fda', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '7b08645ece435eafabd6b642c004ea0ee6f13867' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '8435f147677f6eca60f1df80ec5d99bbec536b78', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: 'bf9a3a13c9cc1b04571efd824a93f1189546501e', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'bf41a2dd6b198645630f0dbd1174a06b7f5d2d8e' }, locales.entries.Lcz_Collected, ": "), h("span", { key: 'dd72e601e7185633fda0507bfb5ce474d448047b' }, formatAmount(this.currency.symbol, this.collected))))));
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