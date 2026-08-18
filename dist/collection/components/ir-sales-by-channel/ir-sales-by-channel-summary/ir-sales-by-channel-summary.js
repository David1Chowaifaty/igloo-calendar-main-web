import { h } from "@stencil/core";
import { calculateTrend, formatAmount } from "../../../utils/utils";
export class IrSalesByChannelSummary {
    records = [];
    filters;
    sum(field, lastYear = false) {
        return (this.records ?? []).reduce((acc, r) => {
            const val = lastYear ? (r.last_year ? r.last_year[field] : 0) : r[field];
            return acc + (val ?? 0);
        }, 0);
    }
    render() {
        const totalNights = this.sum('NIGHTS');
        const totalRevenue = this.sum('REVENUE');
        const lastYearNights = this.sum('NIGHTS', true);
        const lastYearRevenue = this.sum('REVENUE', true);
        const currency = this.records?.[0]?.currency;
        const hasLastYear = Boolean(this.records?.length && this.filters?.include_previous_year);
        return (h("div", { key: '3d4581eae4e5fb53acc88f87fd86b6e07c6ac4f7', class: "summary-row" }, h("ir-metric-card", { key: '106aa6290db36c3612c5a3112e75e2283823d542', class: "summary-metric", icon: "moon", label: "Total Room Nights", value: totalNights.toString(), trend: hasLastYear ? calculateTrend(totalNights, lastYearNights) : undefined, trendLabel: "vs last year", caption: hasLastYear ? `Last year: ${lastYearNights}` : undefined }), h("ir-metric-card", { key: '78c90e011d89ab9c9c06b60e7ac4447e88999076', class: "summary-metric", icon: "money-bill", label: "Total Revenue", value: formatAmount(currency, totalRevenue), trend: hasLastYear ? calculateTrend(totalRevenue, lastYearRevenue) : undefined, trendLabel: "vs last year", caption: hasLastYear ? `Last year: ${formatAmount(currency, lastYearRevenue)}` : undefined }), h("ir-metric-card", { key: 'b2c80e2c76c918dfc4e5c16320c4b7ee669a80d2', class: "summary-metric", icon: "chart-bar", label: "Sources", value: (this.records?.length ?? 0).toString() })));
    }
    static get is() { return "ir-sales-by-channel-summary"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-sales-by-channel-summary.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-sales-by-channel-summary.css"]
        };
    }
    static get properties() {
        return {
            "records": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ChannelReportResult",
                    "resolved": "{ currency?: string; NIGHTS?: number; PCT?: number; REVENUE?: number; SOURCE?: string; PROPERTY_ID?: number; PROPERTY_NAME?: string; SOURCE_ICON?: string; last_year?: { currency?: string; NIGHTS?: number; PCT?: number; REVENUE?: number; SOURCE?: string; PROPERTY_ID?: number; PROPERTY_NAME?: string; SOURCE_ICON?: string; }; }[]",
                    "references": {
                        "ChannelReportResult": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-sales-by-channel/types.ts::ChannelReportResult",
                            "referenceLocation": "ChannelReportResult"
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
                "defaultValue": "[]"
            },
            "filters": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ChannelSaleFilter",
                    "resolved": "{ is_export_to_excel?: boolean; FROM_DATE?: string; TO_DATE?: string; AC_ID?: string; BOOK_CASE?: string; WINDOW?: number; LIST_AC_ID?: number[]; include_previous_year?: boolean; }",
                    "references": {
                        "ChannelSaleFilter": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-sales-by-channel/types.ts::ChannelSaleFilter",
                            "referenceLocation": "ChannelSaleFilter"
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
