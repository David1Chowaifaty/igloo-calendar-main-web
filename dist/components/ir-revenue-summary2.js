import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-stats-card2.js';

const irRevenueSummaryCss = ".ir-revenue-summary__mobile.sc-ir-revenue-summary{display:flex;align-items:center;gap:1rem}.ir-revenue-summary__tablet.sc-ir-revenue-summary{display:none;grid-template-columns:repeat(3, 1fr);gap:1rem}.stats-card__payments-value.sc-ir-revenue-summary{padding:0;margin:0;color:#629a4c}.stats-card__refund-value.sc-ir-revenue-summary{padding:0;margin:0;color:#ff4961}@media (min-width: 768px){.ir-revenue-summary__tablet.sc-ir-revenue-summary{display:grid}.ir-revenue-summary__mobile.sc-ir-revenue-summary{display:none}}";
const IrRevenueSummaryStyle0 = irRevenueSummaryCss;

const IrRevenueSummary = /*@__PURE__*/ proxyCustomElement(class IrRevenueSummary extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    filters;
    groupedPayments = new Map();
    previousDateGroupedPayments = new Map();
    paymentEntries;
    calculateTotalPayments(groupedPayments) {
        let total = 0;
        groupedPayments.forEach((value, key) => {
            if (key.split('_')[0] === '001') {
                total += this.calculateTotalValue(value);
            }
        });
        return total;
    }
    // private calculateTotalAmount(groupedPayments: GroupedFolioPayment) {
    //   return Array.from(groupedPayments.entries()).reduce((prev, curr) => prev + this.calculateTotalValue(curr[1]), 0);
    // }
    calculateTotalRefunds(groupedPayments) {
        const refundKeyCode = '010';
        const payments = [];
        groupedPayments.forEach((value, key) => {
            if (key.split('_')[0] === refundKeyCode) {
                payments.push(...value);
            }
        });
        return this.calculateTotalValue(payments);
    }
    calculateTotalValue(payments) {
        return payments.reduce((p, c) => p + c.amount, 0);
    }
    getTrendIcon(val1, val2) {
        if (val1 === val2) {
            return undefined;
        }
        return val1 > val2 ? 'arrow-trend-up' : 'arrow-trend-down';
    }
    render() {
        const paymentsTotal = this.calculateTotalPayments(this.groupedPayments);
        const refundAmount = this.calculateTotalRefunds(this.groupedPayments);
        const totalAmount = paymentsTotal + refundAmount;
        const previousDatePaymentsTotal = this.calculateTotalPayments(this.previousDateGroupedPayments);
        const previousDateRefundAmount = this.calculateTotalRefunds(this.previousDateGroupedPayments);
        const previousDateTotalAmount = previousDatePaymentsTotal + previousDateRefundAmount;
        return (h(Host, { key: '81e2fbb7e0d1d188d1f3bfbde37529ffadfcccda' }, h("div", { key: 'fac703b2d632a823f4441bb9f788d5d6fc7085e5', class: "ir-revenue-summary__mobile" }, h("ir-stats-card", { key: '80b1072f6bf9d03902b170d68b447dc0e24daad7', icon: 'arrow-trend-up', value: formatAmount(calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments" }, h("p", { key: '6ff497b48d0b5db33649ccf23b51474c1c1eafdd', class: "stats-card__payments-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, paymentsTotal))), h("ir-stats-card", { key: 'a53c996bd30a0b45d302afee96e449cb1faeb7b4', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds" }, h("p", { key: '0fbbb25ff4845f5785d99f01db49db6eac97610b', class: "stats-card__refund-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, refundAmount)))), h("div", { key: 'f2239b17d9342e7b6dec681d34e30183975bde2b', class: "ir-revenue-summary__tablet" }, h("ir-stats-card", { key: 'eef27e269ee2df582279d5b7c095be760033c5cd', icon: 'arrow-trend-up', value: formatAmount(calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments", subtitle: this.filters?.date ? `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDatePaymentsTotal)}` : '' }, h("p", { key: '2cc6041e88d3cf110031c386e724262fa9181ea4', class: "stats-card__payments-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, paymentsTotal))), h("ir-stats-card", { key: '9c15f66ca8540de3fbb2f824d44a4e99b15a04bc', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds", subtitle: this.filters?.date ? `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDateRefundAmount)}` : '' }, h("p", { key: '61d11f689cb2e93327832274aebd7e94b73060c4', class: "stats-card__refund-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, refundAmount))), h("ir-stats-card", { key: '767ce42e472bcbb65b12f4bff20883207b6cdeeb', icon: this.getTrendIcon(totalAmount, previousDateTotalAmount), value: formatAmount(calendar_data.currency.symbol, totalAmount), cardTitle: "Difference", subtitle: this.filters?.date ? `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDateTotalAmount)}` : '' }))));
    }
    static get style() { return IrRevenueSummaryStyle0; }
}, [2, "ir-revenue-summary", {
        "filters": [16],
        "groupedPayments": [16],
        "previousDateGroupedPayments": [16],
        "paymentEntries": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-revenue-summary", "ir-icons", "ir-stats-card"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-revenue-summary":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrRevenueSummary);
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-stats-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrRevenueSummary as I, defineCustomElement as d };

//# sourceMappingURL=ir-revenue-summary2.js.map