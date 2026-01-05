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
        return (h("div", { key: '4789c5a69d06a4d2c387ca3831bf59d39805d0e4', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: 'dc09a22932601e7f845f38116be9b743a5bc61cc', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: 'e9eabc1ab7ca4ba6b6c76eae5f4a11adb156fd5f' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '8387abacdb274fbdca83c2ddeaea6b289992d39b', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'a5fb2ec3ca5810da3ff8d930b5f731cee8d51d1e' }, locales.entries.Lcz_Balance, ": "), h("span", { key: 'bc69721d4762833d5f6f157b69bf491e7193b440', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '1c6bdeb7dabab882dfabbfe51afddd6deb38b7ad', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '4d66ecf66a984c755e7177cabebf58aa951ea86e' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '0f3dfd0c239e9331689b437f065c7692d105193d' }, formatAmount(this.currency.symbol, this.collected))))));
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