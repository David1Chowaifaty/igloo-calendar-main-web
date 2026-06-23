import { h } from "@stencil/core";
import { calculateTrend, formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrSalesByCountrySummary {
    salesReports;
    filters;
    calculateTotalValues(field, lastYear = false) {
        return this.salesReports?.reduce((prev, curr) => {
            const value = lastYear ? (curr.last_year ? curr.last_year[field] : 0) : curr[field];
            return prev + value;
        }, 0);
    }
    render() {
        const totalRoomNights = this.calculateTotalValues('nights');
        const totalGuests = this.calculateTotalValues('number_of_guests');
        const totalRevenue = this.calculateTotalValues('revenue');
        const lastYearTotalRoomNights = this.calculateTotalValues('nights', true);
        const lastYearTotalGuests = this.calculateTotalValues('number_of_guests', true);
        const lastYearTotalRevenue = this.calculateTotalValues('revenue', true);
        const hasLastYear = Boolean(this.salesReports?.length && this.filters?.include_previous_year);
        return (h("div", { key: '36330b9f8eb44cfdbd37ef4231c23c4a798cfa54', class: "summary-row" }, h("ir-metric-card", { key: '0a6bcfb037d569134a249376b8658aed43d39402', class: "summary-metric", icon: "moon", label: "Total Room Nights", value: totalRoomNights?.toString(), trend: hasLastYear ? calculateTrend(totalRoomNights, lastYearTotalRoomNights) : undefined, trendLabel: "vs last year", caption: hasLastYear ? `Last year: ${lastYearTotalRoomNights}` : undefined }), h("ir-metric-card", { key: 'e115e6e6016050eb5101943305da29725f8c55d2', class: "summary-metric", icon: "user-group", label: "Total Guests", value: totalGuests?.toString(), trend: hasLastYear ? calculateTrend(totalGuests, lastYearTotalGuests) : undefined, trendLabel: "vs last year", caption: hasLastYear ? `Last year: ${lastYearTotalGuests}` : undefined }), h("ir-metric-card", { key: '06749746e8b20c803d663d56147d66456d71cf51', class: "summary-metric", icon: "money-bill", label: "Total Revenue", value: formatAmount(calendar_data.currency.symbol, totalRevenue), trend: hasLastYear ? calculateTrend(totalRevenue, lastYearTotalRevenue) : undefined, trendLabel: "vs last year", caption: hasLastYear ? `Last year: ${formatAmount(calendar_data.currency.symbol, lastYearTotalRevenue)}` : undefined })));
    }
    static get is() { return "ir-sales-by-country-summary"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-sales-by-country-summary.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-sales-by-country-summary.css"]
        };
    }
    static get properties() {
        return {
            "salesReports": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "SalesRecord[]",
                    "resolved": "SalesRecord[]",
                    "references": {
                        "SalesRecord": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-sales-by-country/types.ts::SalesRecord",
                            "referenceLocation": "SalesRecord"
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
            "filters": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "CountrySalesFilter",
                    "resolved": "Omit<CountrySalesParams, \"AC_ID\" | \"is_export_to_excel\"> & { include_previous_year: boolean; }",
                    "references": {
                        "CountrySalesFilter": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-sales-by-country/types.ts::CountrySalesFilter",
                            "referenceLocation": "CountrySalesFilter"
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
