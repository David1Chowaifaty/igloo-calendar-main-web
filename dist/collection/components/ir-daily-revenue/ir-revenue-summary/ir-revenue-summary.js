import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrRevenueSummary {
    constructor() {
        this.groupedPayments = new Map();
        this.previousDateGroupedPayments = new Map();
    }
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
        return (h(Host, { key: '4e58f6b08b8d0eb43ead6b28a7bedf68da9fda2a' }, h("div", { key: '044b832695b1eeeb0916a9c02a39df2bf0475c6c', class: "ir-revenue-summary__mobile" }, h("ir-stats-card", { key: 'a4fc716e2075fb40b2da6891f2e8b804f7ec7452', icon: 'arrow-trend-up', value: formatAmount(calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments" }, h("p", { key: '6035232039ec9b79b9c6816876a405b73afd374c', class: "stats-card__payments-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, paymentsTotal))), h("ir-stats-card", { key: 'a7dd9dbc883e0cab858921c3429251f48ddae9ba', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds" }, h("p", { key: '2735fb45812a79a1e60b3e8d30dac4a496c28ad0', class: "stats-card__refund-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, refundAmount)))), h("div", { key: '32f4853ae404991d830a51c4b6c6b5dbc6c5791d', class: "ir-revenue-summary__tablet" }, h("ir-stats-card", { key: '05798a658f365690ed8b8bb4e8e628f4275bdcd8', icon: 'arrow-trend-up', value: formatAmount(calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments", subtitle: `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDatePaymentsTotal)}` }, h("p", { key: '9f411fe8cd05d9abf49ae89b4b053a7a0394c785', class: "stats-card__payments-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, paymentsTotal))), h("ir-stats-card", { key: 'c301f95871904184fbacdb0b0192fc61011b1e1d', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds", subtitle: `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDateRefundAmount)}` }, h("p", { key: 'ddfceb2f4b19b4aa64091b358920880194d7da9a', class: "stats-card__refund-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, refundAmount))), h("ir-stats-card", { key: '6506733289278f46da84ff19637ad6a531c74c6f', icon: this.getTrendIcon(totalAmount, previousDateTotalAmount), value: formatAmount(calendar_data.currency.symbol, totalAmount), cardTitle: "Difference", subtitle: `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDateTotalAmount)}` }))));
    }
    static get is() { return "ir-revenue-summary"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-revenue-summary.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-revenue-summary.css"]
        };
    }
    static get properties() {
        return {
            "groupedPayments": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "GroupedFolioPayment",
                    "resolved": "Map<string, FolioPayment[]>",
                    "references": {
                        "GroupedFolioPayment": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-daily-revenue/types.ts::GroupedFolioPayment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "new Map()"
            },
            "previousDateGroupedPayments": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "GroupedFolioPayment",
                    "resolved": "Map<string, FolioPayment[]>",
                    "references": {
                        "GroupedFolioPayment": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-daily-revenue/types.ts::GroupedFolioPayment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "new Map()"
            },
            "paymentEntries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "PaymentEntries",
                    "resolved": "{ types: IEntries[]; groups: IEntries[]; methods: IEntries[]; }",
                    "references": {
                        "PaymentEntries": {
                            "location": "import",
                            "path": "@/components/ir-booking-details/types",
                            "id": "src/components/ir-booking-details/types.ts::PaymentEntries"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
}
//# sourceMappingURL=ir-revenue-summary.js.map
