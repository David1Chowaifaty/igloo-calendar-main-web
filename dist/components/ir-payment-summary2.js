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
        return (h("div", { key: 'a15ad40961e9e43bd8b8902340367a083db98bd7', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '932bc557ece8b9a797979ebbcc780af242a08df9', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: 'e189a561abfb92afca876031c6c3e00171445d0b' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: 'f233fbcbc3dc7cd18232b2605afdd7f5653efa70', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '4b1e4ddcff6539947a8a377ddf99384350810c5b' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '110ab8b575613ab776121bd986b1a1770e033bac', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: 'b45fea272b8be15b825e732b9bc93c105a49ff17', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '545fba3015c3d1dbcbcd04572d0655f29591b53d' }, locales.entries.Lcz_Collected, ": "), h("span", { key: 'b913820b9714589f77e2f470ab75f252ee5b3223' }, formatAmount(this.currency.symbol, this.collected))))));
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