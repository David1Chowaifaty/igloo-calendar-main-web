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
        return (h("div", { key: '246d7f5947d1210fa24255fbd0c2dd7374bc1ed3', class: "summary-row" }, h("ir-metric-card", { key: '1f7831313ebd3381baf2c075f23bb2e6ddb6c3f1', class: "summary-metric", icon: "moon", label: "Total Room Nights", value: totalNights.toString(), trend: hasLastYear ? calculateTrend(totalNights, lastYearNights) : undefined, trendLabel: "vs last year", caption: hasLastYear ? `Last year: ${lastYearNights}` : undefined }), h("ir-metric-card", { key: '0bfecc706ca7ab2bb61fa95a7cf555739a9f798a', class: "summary-metric", icon: "money-bill", label: "Total Revenue", value: formatAmount(currency, totalRevenue), trend: hasLastYear ? calculateTrend(totalRevenue, lastYearRevenue) : undefined, trendLabel: "vs last year", caption: hasLastYear ? `Last year: ${formatAmount(currency, lastYearRevenue)}` : undefined }), h("ir-metric-card", { key: '7bd4e3c0d6b68a689792e6d17b42f1eb0d11a7c3', class: "summary-metric", icon: "chart-bar", label: "Sources", value: (this.records?.length ?? 0).toString() })));
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
