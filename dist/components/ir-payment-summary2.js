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
        return (h("div", { key: 'f7c68209a510c67eb97f28200b9bea21102444aa', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '8e7415851f986eb87953a1a5b0cb1d2ea783aadd', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '94f97fca594bdd42c5971e01fbd52a2bb8ef70c5' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: 'ff43179a881bea8258cbe145160eaa8b90c41f44', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '261ca114009459578ef1e88139c6b89176e00700' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '66e9b5e9db82b05caa437f8040a0526102e4591e', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: 'dc093eb9b946b99745409402a282a797a6d1a5b1', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '136c5fbacaac4b20a82b1352f8bac91ee056b7c3' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '3899e9b67403142fa2a371d1ede647bd4ad5ee1c' }, formatAmount(this.currency.symbol, this.collected))))));
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