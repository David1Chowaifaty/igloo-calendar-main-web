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
        return (h(Host, { key: '5d70aa65296a39e9c1c480cecbf6ca61031ac9c0' }, h("div", { key: '9d6b8270296b7ca2a4ba1245fbfeb764b0715ac1', class: "ir-revenue-summary__mobile" }, h("ir-stats-card", { key: '7c7e9a9cc63a9c67ae21dc0d82dce63e5baf6f6d', icon: 'arrow-trend-up', value: formatAmount(calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments" }, h("p", { key: '42cf284cc21c62a600970d1bd84060a4ef97986f', class: "stats-card__payments-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, paymentsTotal))), h("ir-stats-card", { key: 'bb431d4e21da3236fd5f4fcd84d0bc999554d08c', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds" }, h("p", { key: 'd59afe97308d38b8ca81b2ecab71341ef3b08a03', class: "stats-card__refund-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, refundAmount)))), h("div", { key: '33e40ed76b3ebcca73e3b41f9c3bde5802fe4a2b', class: "ir-revenue-summary__tablet" }, h("ir-stats-card", { key: 'a007bfcc6b96cc26aecc6a7adbedb3a4700d1619', icon: 'arrow-trend-up', value: formatAmount(calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments", subtitle: this.filters?.date ? `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDatePaymentsTotal)}` : '' }, h("p", { key: 'f119e188236b6b251e62b397abd8b894d66e6698', class: "stats-card__payments-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, paymentsTotal))), h("ir-stats-card", { key: '7603ed924c8dc0f175ec622ea7d9b3b0e8f96ff5', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds", subtitle: this.filters?.date ? `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDateRefundAmount)}` : '' }, h("p", { key: 'd3cf1c5b3e65aabb64d4dd9a6f54afea6996e41b', class: "stats-card__refund-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, refundAmount))), h("ir-stats-card", { key: '57acbbe89a8e5955697710b94cc46f746c5a8d9e', icon: this.getTrendIcon(totalAmount, previousDateTotalAmount), value: formatAmount(calendar_data.currency.symbol, totalAmount), cardTitle: "Difference", subtitle: this.filters?.date ? `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDateTotalAmount)}` : '' }))));
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
