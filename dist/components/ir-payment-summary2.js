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
        return (h("div", { key: '966e75a267757f1947f8baaae4bad3aa7784bd83', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '926354519dc5b29395bda5dd455be44c0c1b535f', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: 'e3e77b116442be1eaab0dbfca628c3fffb6c97e6' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '8bd681523173c2d69d85b1318affa96b9202349d', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '44de646929370ed94b6ad7b8ed9c0620408a0e5e' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '511249e8e5a9c3dfdd6d22087010e4c1363fdac9', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: 'db475d69d3ce660af86b1aa3316bf77dcf6d164c', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '88fc0329559dff3756b463e4665a730257fd49c2' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '400b8dac888b1bffc678f7d21c98e7a20e3d6b5b' }, formatAmount(this.currency.symbol, this.collected))))));
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