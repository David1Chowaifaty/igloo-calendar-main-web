import { h } from "@stencil/core";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrSalesByCountrySummary {
    salesReports;
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
        const hasLastYear = Boolean(this.salesReports?.length && this.salesReports[0].last_year);
        return (h("div", { key: 'f817892bf61f5c992127f6cd857c141c254e1959', class: "summary-row" }, h("ir-metric-card", { key: '52d1dd70cad31f52aa6cf3cdfd68965d4ae78c07', class: "summary-metric", icon: "moon", label: "Total Room Nights", value: totalRoomNights?.toString(), trend: hasLastYear ? totalRoomNights - lastYearTotalRoomNights : undefined, trendLabel: "vs last year", caption: hasLastYear ? `Last year: ${lastYearTotalRoomNights}` : undefined }), h("ir-metric-card", { key: 'c8d9f110c768964fad0dd522f46033bf29442ad0', class: "summary-metric", icon: "user-group", label: "Total Guests", value: totalGuests?.toString(), trend: hasLastYear ? totalGuests - lastYearTotalGuests : undefined, trendLabel: "vs last year", caption: hasLastYear ? `Last year: ${lastYearTotalGuests}` : undefined }), h("ir-metric-card", { key: '8c07f05217a31c6aef857a22395c6fa8453c0bc8', class: "summary-metric", icon: "money-bill", label: "Total Revenue", value: formatAmount(calendar_data.currency.symbol, totalRevenue), trend: hasLastYear ? totalRevenue - lastYearTotalRevenue : undefined, trendLabel: "vs last year", caption: hasLastYear ? `Last year: ${formatAmount(calendar_data.currency.symbol, lastYearTotalRevenue)}` : undefined })));
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
            }
        };
    }
}
