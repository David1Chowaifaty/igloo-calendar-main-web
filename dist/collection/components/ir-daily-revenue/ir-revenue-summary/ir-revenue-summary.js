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
            "payTypesGroup": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IEntries[]",
                    "resolved": "IEntries[]",
                    "references": {
                        "IEntries": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::IEntries"
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
