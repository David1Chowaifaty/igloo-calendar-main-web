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
        return (h(Host, { key: '2de7ba9e61575d566f6b2c9a02d3c0a835fbf1d5' }, h("div", { key: 'f5ff4353693b5fc8f28650f4b6f05d01b1ccd53c', class: "ir-revenue-summary__mobile" }, h("ir-stats-card", { key: '6a8759e1867692ca91f119a3c1ad5b4958c38b2b', icon: 'arrow-trend-up', value: formatAmount(calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments" }, h("p", { key: '83534c9d87429f467162d22acb3ab3b06d883d73', class: "stats-card__payments-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, paymentsTotal))), h("ir-stats-card", { key: '72255f9b367cd65f66070892efc4dc0fef909daf', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds" }, h("p", { key: 'a1ebffc194c0cd942e147747b6a2f09028d021ff', class: "stats-card__refund-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, refundAmount)))), h("div", { key: 'abbfcfd6f959cb86c31bac30a06dde8bdddc774e', class: "ir-revenue-summary__tablet" }, h("ir-stats-card", { key: 'f5adc188fa1ceefeabf02ab9f85a3dbabd3ccea6', icon: 'arrow-trend-up', value: formatAmount(calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments", subtitle: `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDatePaymentsTotal)}` }, h("p", { key: '688c3421dc510a4bd88bca49816546dd92bbbca7', class: "stats-card__payments-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, paymentsTotal))), h("ir-stats-card", { key: '7090dca13df0864c245e07eb3e2349b57705d8f2', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds", subtitle: `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDateRefundAmount)}` }, h("p", { key: '926306520bfaf28019be3613fbae223367b7feef', class: "stats-card__refund-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, refundAmount))), h("ir-stats-card", { key: '03e4f7108a476ea4adcdd84b4b7de328a3438734', icon: this.getTrendIcon(totalAmount, previousDateTotalAmount), value: formatAmount(calendar_data.currency.symbol, totalAmount), cardTitle: "Difference", subtitle: `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDateTotalAmount)}` }))));
    }
    static get style() { return IrRevenueSummaryStyle0; }
}, [2, "ir-revenue-summary", {
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