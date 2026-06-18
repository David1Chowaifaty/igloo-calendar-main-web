import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: 'cd3ab7a9e37256014d25c74881e01e5074a5da2c', class: "daily-occupancy-table__card" }, h("div", { key: 'fe70e2699a1b6b4e4b1b717726bca49683b7d012', class: 'table--container' }, h("table", { key: '6e5cd050e880c9c853f46e2c6437d4108f0fcb98', class: "table data-table" }, h("thead", { key: 'afa3e785e8d3835c6245ee49b7855ec5695a91dd', class: "table-header" }, h("tr", { key: '398a67692e3c608cd466562913bc5134618384d6' }, h("th", { key: 'a963594603a414b053edb7cb21ee017bb8c98291', class: "text-center" }, "Date"), h("th", { key: '4d104ef70893c64e28393562910b45bad631dc6f', class: "text-center" }, "Units booked"), h("th", { key: '0a1418183fa7e05021323d8c464bb118e38decf9', class: "text-center" }, "Total guests"), h("th", { key: 'e813cd4e89a219403cdc42657ef8387b4f27577e', class: "text-right" }, h("ir-tooltip", { key: 'b71021772d7bdf80ad846a44fa15a80f5ca30854', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '4ccbdb20648ee64e5192ca5f77cb767a9a0969d3', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '6086b84aad3fbfb5f844a33a6f3825d725d80fb6', class: "text-right" }, "Rooms revenue"), h("th", { key: '8041f56e2ebe991b0c5314d055b853fdf5ad9d8d' }, "Occupancy"))), h("tbody", { key: '807b33aa2e3fb38de99b7b5821d1bd52cdfc3683' }, this.reports.length === 0 && (h("tr", { key: '256b7e01ac11918c2308b02affba3164ace1cc00' }, h("td", { key: 'cfa539e2dbf44d7254a4d4669b9ff76975e9c342', colSpan: 3, class: "empty-row" }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '3ee5339fbfd4fde7708aec2979d00b24ead529b5' }, h("tr", { key: 'd56cfa2fad797fa88c450a232477a51d4636335e' }, h("td", { key: '77edc0f20d227d4aa36c8140d6166d086f75372b', colSpan: 5 }), h("td", { key: 'e566c28d3b4d6f54c6c79856af6c965031830be1', class: "legend-cell" }, h("div", { key: 'e3a9c5973361cdf8c0e2b2c22c44ee90a4b6b044', class: "legend-row" }, h("div", { key: '7c4687129b0d3df3824787e945d3f7bc26d41bc9', class: "legend-item" }, h("div", { key: 'c0af03500b39aaa31b5f184b2db6c4aee6be050a', class: "legend-dot legend-dot--current" }), h("p", { key: '222dddb0de30da8c0854c00f731fbb9941251b35' }, "Selected period")), h("div", { key: '59f08c88c362852e8feeeceb835bf092590dc725', class: "legend-item" }, h("div", { key: 'fc58a7901bbb1da7cae24b97346db2f8c98c71d1', class: "legend-dot legend-dot--previous" }), h("p", { key: '7815d839743d9a6d3c17a5734649bf3cf3fe72e1' }, "Previous year"))))))))));
    }
    static get is() { return "ir-monthly-bookings-report-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-monthly-bookings-report-table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-monthly-bookings-report-table.css"]
        };
    }
    static get properties() {
        return {
            "reports": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "DailyReport[]",
                    "resolved": "DailyReport[]",
                    "references": {
                        "DailyReport": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-monthly-bookings-report/types.ts::DailyReport",
                            "referenceLocation": "DailyReport"
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
