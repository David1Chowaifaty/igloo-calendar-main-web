import { h } from "@stencil/core";
import { calculateTrend, formatAmount } from "../../../utils/utils";
import { t } from "../../../services/locale/t";
import { formatCount } from "../../../utils/number";
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
        return (h("div", { key: 'a076153c4b2eca728c59ba3bc4aedd3aeabfebda', class: "summary-row" }, h("ir-metric-card", { key: '366042d6aa1a8e0dbe3ff004cfcdae1dfb9b7104', class: "summary-metric", icon: "moon", label: t('Lcz_TotalRoomNights', { fallback: 'Total Room Nights' }), value: formatCount(totalNights), trend: hasLastYear ? calculateTrend(totalNights, lastYearNights) : undefined, trendLabel: t('Lcz_VsLastYear', { fallback: 'vs last year' }), caption: hasLastYear ? `${t('Lcz_LastYear', { fallback: 'Last year:' })} ${formatCount(lastYearNights)}` : undefined }), h("ir-metric-card", { key: '2d191248c21f98409feb4449e467757e52a64df1', class: "summary-metric", icon: "money-bill", label: t('Lcz_TotalRevenue', { fallback: 'Total Revenue' }), value: formatAmount(currency, totalRevenue), trend: hasLastYear ? calculateTrend(totalRevenue, lastYearRevenue) : undefined, trendLabel: t('Lcz_VsLastYear', { fallback: 'vs last year' }), caption: hasLastYear ? `${t('Lcz_LastYear', { fallback: 'Last year:' })} ${formatAmount(currency, lastYearRevenue)}` : undefined }), h("ir-metric-card", { key: '0bf31e72bd0b51df4864ed9224e87c88683a7736', class: "summary-metric", icon: "chart-bar", label: t('Lcz_Sources', { fallback: 'Sources' }), value: formatCount(this.records?.length ?? 0) })));
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
                    "resolved": "{ is_export_to_excel?: boolean; AC_ID?: string; FROM_DATE?: string; TO_DATE?: string; BOOK_CASE?: string; WINDOW?: number; LIST_AC_ID?: number[]; include_previous_year?: boolean; }",
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
