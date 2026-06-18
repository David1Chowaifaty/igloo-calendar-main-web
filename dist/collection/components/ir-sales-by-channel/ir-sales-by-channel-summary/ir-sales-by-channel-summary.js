import { h } from "@stencil/core";
import { formatAmount } from "../../../utils/utils";
export class IrSalesByChannelSummary {
    records = [];
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
        const hasLastYear = Boolean(this.records?.length && this.records[0].last_year);
        return (h("div", { key: '74423f35b918305f2a9ba9ea7f94e38fda3fc468', class: "summary-row" }, h("ir-metric-card", { key: '574ed8f91e846b9c068a52b1bf38d4c090eed65e', class: "summary-metric", icon: "moon", label: "Total Room Nights", value: totalNights.toString(), trend: hasLastYear ? totalNights - lastYearNights : undefined, trendLabel: "vs last year", caption: hasLastYear ? `Last year: ${lastYearNights}` : undefined }), h("ir-metric-card", { key: '6c62c58607db60f3cc15bbea1681a54502baf422', class: "summary-metric", icon: "money-bill", label: "Total Revenue", value: formatAmount(currency, totalRevenue), trend: hasLastYear ? totalRevenue - lastYearRevenue : undefined, trendLabel: "vs last year", caption: hasLastYear ? `Last year: ${formatAmount(currency, lastYearRevenue)}` : undefined }), h("ir-metric-card", { key: '760e859a8d154456c57eaafe541929600383c0db', class: "summary-metric", icon: "chart-bar", label: "Channels", value: (this.records?.length ?? 0).toString() })));
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
                    "resolved": "{ currency?: string; NIGHTS?: number; PCT?: number; REVENUE?: number; SOURCE?: string; PROPERTY_ID?: number; PROPERTY_NAME?: string; last_year?: { currency?: string; NIGHTS?: number; PCT?: number; REVENUE?: number; SOURCE?: string; PROPERTY_ID?: number; PROPERTY_NAME?: string; }; }[]",
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
            }
        };
    }
}
