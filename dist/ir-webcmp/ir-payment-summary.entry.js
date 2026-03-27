import { r as registerInstance, h } from './index-7b3961ed.js';
import { l as locales } from './locales.store-daef23cc.js';
import { h as formatAmount } from './utils-7eaed9ad.js';
import './index-17663a35.js';
import './moment-ab846cee.js';
import './index-40c31d5b.js';
import './calendar-data-cdc01d0d.js';

const irPaymentSummaryCss = ".sc-ir-payment-summary-h{display:block}.sc-ir-payment-summary-h{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-payment-summary-h *.sc-ir-payment-summary{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}";

const IrPaymentSummary = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
IrPaymentSummary.style = irPaymentSummaryCss;

export { IrPaymentSummary as ir_payment_summary };

//# sourceMappingURL=ir-payment-summary.entry.js.map