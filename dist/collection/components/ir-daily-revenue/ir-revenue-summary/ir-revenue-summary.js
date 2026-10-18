import { Host, h } from "@stencil/core";
import { calculateTrend, formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
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
        const hasPrevious = Boolean(this.filters?.date && this.previousDateGroupedPayments?.size > 0);
        return (h(Host, { key: 'f6b82c4066483d0e3ee45e818c047cb49f8bc7f9' }, h("div", { key: 'f980d8d6e75dc325bc8758eebd3f298f04f6324d', class: "revenue-summary__row" }, h("ir-metric-card", { key: 'c31f8bb663092ed8c2e5509a0a073d5974a3495e', class: "revenue-summary__metric", icon: "arrow-trend-up", label: t('Lcz_Payments', { fallback: 'Payments' }), value: formatAmount(calendar_data.currency.symbol, paymentsTotal), trend: hasPrevious ? calculateTrend(paymentsTotal, previousDatePaymentsTotal) : undefined, trendLabel: t('Lcz_FromPreviousDay', { fallback: 'from previous day' }), caption: hasPrevious ? `${t('Lcz_PreviousDay', { fallback: 'Previous day:' })} ${formatAmount(calendar_data.currency.symbol, previousDatePaymentsTotal)}` : undefined }), h("ir-metric-card", { key: 'd191c4053340ca94973ce39929f4715b88e9ce3f', class: "revenue-summary__metric", icon: "arrow-trend-down", label: t('Lcz_Refunds', { fallback: 'Refunds' }), value: formatAmount(calendar_data.currency.symbol, refundAmount), trend: hasPrevious ? calculateTrend(refundAmount, previousDateRefundAmount) : undefined, trendLabel: t('Lcz_FromPreviousDay', { fallback: 'from previous day' }), invertTrend: true, caption: hasPrevious ? `${t('Lcz_PreviousDay', { fallback: 'Previous day:' })} ${formatAmount(calendar_data.currency.symbol, previousDateRefundAmount)}` : undefined }), h("ir-metric-card", { key: 'b17f63bbc4983dbe2461bb8340e6fe7f2577aadc', class: "revenue-summary__metric", icon: this.getTrendIcon(totalAmount, previousDateTotalAmount) ?? 'money-bill', label: t('Lcz_NetTotal', { fallback: 'Net Total' }), value: formatAmount(calendar_data.currency.symbol, totalAmount), trend: hasPrevious ? calculateTrend(totalAmount, previousDateTotalAmount) : undefined, trendLabel: t('Lcz_FromPreviousDay', { fallback: 'from previous day' }), caption: hasPrevious ? `${t('Lcz_PreviousDay', { fallback: 'Previous day:' })} ${formatAmount(calendar_data.currency.symbol, previousDateTotalAmount)}` : undefined }))));
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
                    "resolved": "{ from_date?: string; to_date?: string; date?: string; users: string; source: string; }",
                    "references": {
                        "DailyPaymentFilter": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-daily-revenue/types.ts::DailyPaymentFilter",
                            "referenceLocation": "DailyPaymentFilter"
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
                            "id": "src/components/ir-daily-revenue/types.ts::GroupedFolioPayment",
                            "referenceLocation": "GroupedFolioPayment"
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
                            "id": "src/components/ir-daily-revenue/types.ts::GroupedFolioPayment",
                            "referenceLocation": "GroupedFolioPayment"
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
                    "resolved": "{ types: SetupEntries[]; groups: SetupEntries[]; methods: SetupEntries[]; }",
                    "references": {
                        "PaymentEntries": {
                            "location": "import",
                            "path": "@/components/ir-booking-details/types",
                            "id": "src/components/ir-booking-details/types.ts::PaymentEntries",
                            "referenceLocation": "PaymentEntries"
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
