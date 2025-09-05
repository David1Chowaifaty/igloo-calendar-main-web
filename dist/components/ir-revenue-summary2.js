import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-stats-card2.js';

const irRevenueSummaryCss = ".ir-revenue-summary__mobile.sc-ir-revenue-summary{display:flex;align-items:center;gap:1rem}.ir-revenue-summary__tablet.sc-ir-revenue-summary{display:none;grid-template-columns:repeat(3, 1fr);gap:1rem}.stats-card__payments-value.sc-ir-revenue-summary{color:#629a4c}.stats-card__refund-value.sc-ir-revenue-summary{color:#ff4961}@media (min-width: 768px){.ir-revenue-summary__tablet.sc-ir-revenue-summary{display:grid}.ir-revenue-summary__mobile.sc-ir-revenue-summary{display:none}}";
const IrRevenueSummaryStyle0 = irRevenueSummaryCss;

const IrRevenueSummary = /*@__PURE__*/ proxyCustomElement(class IrRevenueSummary extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.groupedPayments = new Map();
        this.previousDateGroupedPayments = new Map();
    }
    calculateTotalPayments(groupedPayments) {
        let total = 0;
        groupedPayments.forEach((value, key) => {
            if (this.payTypesGroup.find(p => p.CODE_NAME === key)) {
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
        if (!groupedPayments.has(refundKeyCode)) {
            return 0;
        }
        return this.calculateTotalValue(groupedPayments.get(refundKeyCode));
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
        const totalAmount = paymentsTotal - refundAmount;
        const previousDatePaymentsTotal = this.calculateTotalPayments(this.previousDateGroupedPayments);
        const previousDateRefundAmount = this.calculateTotalRefunds(this.previousDateGroupedPayments);
        const previousDateTotalAmount = previousDatePaymentsTotal - previousDateRefundAmount;
        return (h(Host, { key: 'ea8b3b77a71dc6638fc892671bd561f1b6d912f7' }, h("div", { key: '206f405354ddfbe6913b3d34255a736770c87d28', class: "ir-revenue-summary__mobile" }, h("ir-stats-card", { key: 'a7fd0a9196f5bc5e62af051f04f200caa13e675a', icon: 'arrow-trend-up', value: formatAmount(calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments" }, h("p", { key: 'fab0062961dd0013d3576a1d0b59eac41cd3d710', class: "stats-card__payments-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, paymentsTotal))), h("ir-stats-card", { key: '941e7e60d3a3e948dc8e01a76c76020fa2f7c1dc', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds" }, h("p", { key: 'b599cf8d295fad4bbe61811922cba58ed6b54bc0', class: "stats-card__refund-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, refundAmount)))), h("div", { key: '278a24ffea81cd4da3ecc2f3c78576e0f5bd5855', class: "ir-revenue-summary__tablet" }, h("ir-stats-card", { key: 'b99d85bb408a2b18b4d40abbf1c0dbb5649e5046', icon: 'arrow-trend-up', value: formatAmount(calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments", subtitle: `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDatePaymentsTotal)}` }, h("p", { key: '727c6569b361fd2be06b1d4cf608b92f853cdb77', class: "stats-card__payments-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, paymentsTotal))), h("ir-stats-card", { key: 'ec5bd42a51d74eccee2dae4926ac4805651e2d6c', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds", subtitle: `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDateRefundAmount)}` }, h("p", { key: '102c33f3d6551b1a6d4befe19f4bc986ab0db1a3', class: "stats-card__refund-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, refundAmount))), h("ir-stats-card", { key: '99020d946fe0924a67158037d06a6c60c52ef9ef', icon: this.getTrendIcon(totalAmount, previousDateTotalAmount), value: formatAmount(calendar_data.currency.symbol, totalAmount), cardTitle: "Difference", subtitle: `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDateTotalAmount)}` }))));
    }
    static get style() { return IrRevenueSummaryStyle0; }
}, [2, "ir-revenue-summary", {
        "groupedPayments": [16],
        "previousDateGroupedPayments": [16],
        "payTypesGroup": [16]
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