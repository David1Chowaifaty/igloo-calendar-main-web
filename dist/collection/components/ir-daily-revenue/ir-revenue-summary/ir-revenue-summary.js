import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrRevenueSummary {
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
        return (h(Host, { key: '3f112ccd5b2afb4e2b1d1fb4fdbd48cc0a373e00' }, h("div", { key: '86f0eb426f68dc861e95b7730151ee062c88c993', class: "ir-revenue-summary__mobile" }, h("ir-stats-card", { key: 'd1421b85cf6fa4b52ff7a0e53757d866e8f44777', icon: 'arrow-trend-up', value: formatAmount(calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments" }, h("p", { key: '113e793cbb1b39fd5cb5d12734dccda7f3f27bc8', class: "stats-card__payments-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, paymentsTotal))), h("ir-stats-card", { key: 'c7c44eb00ed5e7a0a4a0623e6d47930d1b8d6d95', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds" }, h("p", { key: '73960e7515337b0f76375c26218e204b456c6cfa', class: "stats-card__refund-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, refundAmount)))), h("div", { key: '2fd207529c0dec10789ab5cd14228dd02dff0941', class: "ir-revenue-summary__tablet" }, h("ir-stats-card", { key: '3f01defc75198d2f8ef6bec18d7081827e6be580', icon: 'arrow-trend-up', value: formatAmount(calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments", subtitle: this.filters?.date ? `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDatePaymentsTotal)}` : '' }, h("p", { key: '9205b5e4d6146a0f3f7a1097330131822e1d2e55', class: "stats-card__payments-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, paymentsTotal))), h("ir-stats-card", { key: 'dcf59e40886dfc4dbf044e09615b1c654fe423f7', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds", subtitle: this.filters?.date ? `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDateRefundAmount)}` : '' }, h("p", { key: 'b1b7bb86f570e30918b93685146123f0be070a93', class: "stats-card__refund-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, refundAmount))), h("ir-stats-card", { key: 'ef40b9142aad99b4f549552e4559ea49180de308', icon: this.getTrendIcon(totalAmount, previousDateTotalAmount), value: formatAmount(calendar_data.currency.symbol, totalAmount), cardTitle: "Difference", subtitle: this.filters?.date ? `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDateTotalAmount)}` : '' }))));
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
            "filters": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "DailyPaymentFilter",
                    "resolved": "{ from_date?: string; to_date?: string; date?: string; users: string; }",
                    "references": {
                        "DailyPaymentFilter": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-daily-revenue/types.ts::DailyPaymentFilter"
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
            },
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
