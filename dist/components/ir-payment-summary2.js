import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { f as formatAmount } from './booking.js';

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
        return (h("div", { key: '63a559ade847844fa1924a8b6fb32fb2b1690be9', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '9148f339abdfdef14fc2a08045ef7abeccaebebc', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '78c1a10de5476261c80f81bb4c38ba626135b9be' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '8aad62143167cc1bbd132a045379dfb6bb7a24fa', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '62ccb4399693ff8d5dab67b8318f65de608c72ca' }, locales.entries.Lcz_Balance, ": "), h("span", { key: 'b949eb9f915c5db9b2aca3a1f27578b4eecdf656', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: 'cb52040db5894793e7d01dbc889ae6ad5bb5421d', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '7cb7117e5249c1f05f9ea2a28727c083c39eb611' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '35781fd2a16dd5048e52bd6cc57d6400c5df9eaa' }, formatAmount(this.currency.symbol, this.collected))))));
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