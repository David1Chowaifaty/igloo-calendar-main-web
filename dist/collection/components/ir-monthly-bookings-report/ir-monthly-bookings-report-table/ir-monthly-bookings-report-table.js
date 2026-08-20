import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: 'db6e4ab97ae567b5e90c065a3c9b463fb8aa86ef', class: "daily-occupancy-table__card" }, h("div", { key: '1b85d2e7113c0deb42d3d4017fd836f56f503316', class: 'table--container' }, h("table", { key: 'ae532603cb45303b301c902964c188a9e8897126', class: "table data-table" }, h("thead", { key: '49d274698b840d4172365dac135d71f08c0fe6ce', class: "table-header" }, h("tr", { key: '9e0c675a0dc4e3db74f9d3c32f6ede6bc6498305' }, h("th", { key: '49dac6c45c8e0baf83aa3235fbe290246b4f615d', class: "text-center" }, "Date"), h("th", { key: '4f186528294b07aede67b3ccdf6f8b60839d719f', class: "text-center" }, "Units booked"), h("th", { key: '763ef6d6ff2365a179671b2ccc11f156976d40cc', class: "text-center" }, "Adults"), h("th", { key: 'a203d704b96b13d63b14a6151bec90b1bb97a925', class: "text-center" }, "Children"), h("th", { key: 'b993fb86c57875bf489b5881a04cd0c50fa32794', class: "text-right" }, h("ir-tooltip", { key: '936e2af81221a3006dd2526172b152e5a04002a7', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '5124560e778f482137bb0daf5b69924de1d8d03e', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '3b6abcf41fb1fe8992aed2959219043ee1b8bfd0', class: "text-right" }, "Rooms revenue"), h("th", { key: '65b3f7832716aabc776e818f51d14d22b67f8512' }, "Occupancy"))), h("tbody", { key: '0c97692638aed053fcde1ef30a2e2eb0104c84de' }, this.reports.length === 0 && (h("tr", { key: 'b82d0a74d5817b70091c10d3ffeba6b9f13e87a1' }, h("td", { key: '5eb5f2b3bffbdfe65145b9026ee23dcc0534d3d6', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: '105632caf8f59aad63cb5b133d107f4ebc063342', message: "No data found" })))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.adults), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.adults))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.children), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.children))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: 'bb57413fff8c49b8755e1d117e9f578fee64405c' }, h("tr", { key: 'd5c41c9f0fb7024cdd524abc3a057a23f8bbb941' }, h("td", { key: 'e013e5efff2a521d04a08ac2d9c00e3a0a58cdc9', colSpan: 6 }), h("td", { key: '4987eb8133d09d075c0ad56fa9ebffff91bec3c3', class: "legend-cell" }, h("div", { key: 'fe6f62b4d3631dabab271a8eaf7aa70d54084554', class: "legend-row" }, h("div", { key: 'd165660f8993a33c9387f6857c6d58a33014a2cb', class: "legend-item" }, h("div", { key: '12829a740a049523b923ef26855ee2cc1bdf17dd', class: "legend-dot legend-dot--current" }), h("p", { key: 'e55b42f9bb0914e716e47d0140f6124b03db6493' }, "Selected period")), h("div", { key: 'c6ca9f30ab8f7d5906960e51541bacaeb3f59ed1', class: "legend-item" }, h("div", { key: '854a1fb200e99e0c8c26ea98e8901a97801e466f', class: "legend-dot legend-dot--previous" }), h("p", { key: '166ee400d62ff41d1528fc529fd7b8a363426434' }, "Previous year"))))))))));
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
