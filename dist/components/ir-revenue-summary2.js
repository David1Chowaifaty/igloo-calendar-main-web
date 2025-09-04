import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-stats-card2.js';

const irRevenueSummaryCss = ".sc-ir-revenue-summary-h{display:grid;grid-template-columns:repeat(1, 1fr);gap:1rem}@media (min-width: 768px){.sc-ir-revenue-summary-h{grid-template-columns:repeat(3, 1fr)}}";
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
    calculateTotalAmount(groupedPayments) {
        return Array.from(groupedPayments.entries()).reduce((prev, curr) => prev + this.calculateTotalValue(curr[1]), 0);
    }
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
        const totalAmount = this.calculateTotalAmount(this.groupedPayments);
        const refundAmount = this.calculateTotalRefunds(this.groupedPayments);
        const previousDatePaymentsTotal = this.calculateTotalPayments(this.previousDateGroupedPayments);
        const previousDateTotalAmount = this.calculateTotalAmount(this.previousDateGroupedPayments);
        const previousDateRefundAmount = this.calculateTotalRefunds(this.previousDateGroupedPayments);
        return (h(Host, { key: '52c7f0138fd06b53dc58603d05770d69f0352dc6' }, h("ir-stats-card", { key: 'f98eee7aa45f4488300c095e769e8d578124ce81', icon: this.getTrendIcon(paymentsTotal, previousDatePaymentsTotal), value: formatAmount(calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments", subtitle: `Previous day payments ${formatAmount(calendar_data.currency.symbol, previousDatePaymentsTotal)}` }), h("ir-stats-card", { key: 'bf3119e1e7e1d6d8a81ca9bd89ca2dcca2ead5cb', value: "123$", class: "refunds-card", icon: this.getTrendIcon(refundAmount, previousDateRefundAmount), cardTitle: "Refunds", subtitle: `Previous day refunds ${formatAmount(calendar_data.currency.symbol, previousDateRefundAmount)}` }, h("p", { key: '73c524244b3b7d293dc11d79e5d91b2d651156c4', class: "p-0 m-0 text-danger", slot: "value" }, formatAmount(calendar_data.currency.symbol, refundAmount))), h("ir-stats-card", { key: '1205083bb2b51aff8f55facf0d0ae2fd9583027b', icon: this.getTrendIcon(totalAmount, previousDateTotalAmount), value: formatAmount(calendar_data.currency.symbol, totalAmount), cardTitle: "Total", subtitle: `Previous day total ${formatAmount(calendar_data.currency.symbol, previousDateTotalAmount)}` })));
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