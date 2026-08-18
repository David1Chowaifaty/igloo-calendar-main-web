import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: 'db6e4ab97ae567b5e90c065a3c9b463fb8aa86ef', class: "daily-occupancy-table__card" }, h("div", { key: '1b85d2e7113c0deb42d3d4017fd836f56f503316', class: 'table--container' }, h("table", { key: 'ae532603cb45303b301c902964c188a9e8897126', class: "table data-table" }, h("thead", { key: '49d274698b840d4172365dac135d71f08c0fe6ce', class: "table-header" }, h("tr", { key: '9e0c675a0dc4e3db74f9d3c32f6ede6bc6498305' }, h("th", { key: '49dac6c45c8e0baf83aa3235fbe290246b4f615d', class: "text-center" }, "Date"), h("th", { key: '4f186528294b07aede67b3ccdf6f8b60839d719f', class: "text-center" }, "Units booked"), h("th", { key: '763ef6d6ff2365a179671b2ccc11f156976d40cc', class: "text-center" }, "Total guests"), h("th", { key: 'afbc489117f5ed2f5f5921f46c3b69092f79d85f', class: "text-right" }, h("ir-tooltip", { key: '8a8d76fef130d20f23a7d34d4fc38b5b90f69a6b', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '6cbfe3916d9128cdcd13622c7fb0a563176e297b', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'ade4131f44350bc1ff70f5d382717b105b06d255', class: "text-right" }, "Rooms revenue"), h("th", { key: 'c25ae59629bdab9738edb375961b06b067817f51' }, "Occupancy"))), h("tbody", { key: '4648df0eb8eb20e4b182e85af9830a83ab8ec311' }, this.reports.length === 0 && (h("tr", { key: '0ce39314e2a0b38c75099c9bcba9b6e2b74cc05c' }, h("td", { key: '6499f246eeda0ad5afeb9458afce90f30ff0118f', colSpan: 6, class: "empty-row" }, h("ir-empty-state", { key: 'e9a65cf6e68a024b7fc211435481cae00915da13', message: "No data found" })))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '85946cd608f7a13aee7dcc6a53c447171fe10a94' }, h("tr", { key: '882af4b24733720b33d00f442aabdb45ba4c9164' }, h("td", { key: '8f0d1801433eebd41ce40e88ebe5d865878a3a32', colSpan: 5 }), h("td", { key: '4bdefd0ee95a72d44310cb6f6c411764eeb87310', class: "legend-cell" }, h("div", { key: '54296ab3de01399bd3007eca767203fafc506da1', class: "legend-row" }, h("div", { key: '06d634421308855fcf2453dd7acf58832ff70d37', class: "legend-item" }, h("div", { key: '879e81e688312c9865c88470874b0c78bf81c39e', class: "legend-dot legend-dot--current" }), h("p", { key: 'a79d241f6cc9b4d689365f3dc7e03820869b993e' }, "Selected period")), h("div", { key: '01b775030fd3a5ca368dddf1f56f95a758396d53', class: "legend-item" }, h("div", { key: '9baa7a204d2d6da0fc6de330ceb6fcc28a8eb80c', class: "legend-dot legend-dot--previous" }), h("p", { key: '8964ffe9b94987671b58954f12f79ca489b35f16' }, "Previous year"))))))))));
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
