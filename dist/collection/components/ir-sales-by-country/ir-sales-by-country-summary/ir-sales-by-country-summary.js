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
        return (h("div", { key: '74312021283546dc3d307be02104cc525351cd92', class: "summary-row" }, h("ir-metric-card", { key: '663d408013bf05fde5443cc773f73b6bdc36a6bc', class: "summary-metric", icon: "moon", label: "Total Room Nights", value: totalRoomNights?.toString(), trend: hasLastYear ? totalRoomNights - lastYearTotalRoomNights : undefined, trendLabel: "vs last year", caption: hasLastYear ? `Last year: ${lastYearTotalRoomNights}` : undefined }), h("ir-metric-card", { key: '74818cd1947c3804df10a0ff0f1d8803af616ba1', class: "summary-metric", icon: "user-group", label: "Total Guests", value: totalGuests?.toString(), trend: hasLastYear ? totalGuests - lastYearTotalGuests : undefined, trendLabel: "vs last year", caption: hasLastYear ? `Last year: ${lastYearTotalGuests}` : undefined }), h("ir-metric-card", { key: 'f90437134da31adac1620c2fc998a61a54080da1', class: "summary-metric", icon: "money-bill", label: "Total Revenue", value: formatAmount(calendar_data.currency.symbol, totalRevenue), trend: hasLastYear ? totalRevenue - lastYearTotalRevenue : undefined, trendLabel: "vs last year", caption: hasLastYear ? `Last year: ${formatAmount(calendar_data.currency.symbol, lastYearTotalRevenue)}` : undefined })));
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
