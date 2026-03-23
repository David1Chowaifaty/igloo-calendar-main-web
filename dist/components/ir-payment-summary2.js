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
        return (h("div", { key: '54c0fb49726f03e146a4f05796e56e179931bdbe', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '6067dda69ec3435d3f2eb1f1b05d95db2c333a11', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '7e3fc48df59b9f83e971b4821b2cfedc5f7114e2' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: 'f2f7e34f535825fef7eb0dc79cdd1e9fa143b969', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '6d7786838b775fa731cb4ba024d5c64ddb28e427' }, locales.entries.Lcz_Balance, ": "), h("span", { key: 'b77323c57daa74ddbae730ea78c5a6639fc5e98d', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '4aebd5c9fa6058919d508fb947932fe98b95aa81', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '43f0b01828b5b424230660eb0e7fd44708d02899' }, locales.entries.Lcz_Collected, ": "), h("span", { key: 'efec2cfe99774d01320dc2b30cd7ad05189beecc' }, formatAmount(this.currency.symbol, this.collected))))));
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