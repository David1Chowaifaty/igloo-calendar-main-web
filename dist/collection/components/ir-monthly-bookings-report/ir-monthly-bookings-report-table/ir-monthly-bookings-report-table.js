import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import { formatDate } from "../../../utils/date/index";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: '661bfe4bf0e710502a7b2cc566dca06888a7ca55', class: "daily-occupancy-table__card" }, h("div", { key: 'd4a3be8d59065a20362aa7d132fd62ece0d0f842', class: 'table--container' }, h("table", { key: '225097e4654d840b27a7c36c87f9d4fe3fd62447', class: "table data-table" }, h("thead", { key: 'adbf524e3a504538500bf580a51819ff13d9776b', class: "table-header" }, h("tr", { key: '7d7e7cb2f73e3d12c1bce0d792f654c9b694bdab' }, h("th", { key: '437fc4284bbdc4eb32b234722fdce565b3baa938', class: "text-center" }, "Date"), h("th", { key: '165a0c8f6cc6f06bdaaae6d4d4f4a7a2964680d9', class: "text-center" }, "Units booked"), h("th", { key: 'fe3942ac17ef7bada4124510060470483a34e438', class: "text-center" }, "Adults"), h("th", { key: '3c08cc4311901d7b56170b41bd1ad1f8dcdb6a45', class: "text-center" }, "Children"), h("th", { key: '401f8d75f4ea22df43c6b675269ae04c4b1c659c', class: "ir-text-end" }, h("ir-tooltip", { key: 'c2742f33f9d4732b74134b8ba73d77db57083764', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '48b556686d8f06d5594876b2f6a9b0b156c83115', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '2d038b099a48109097a1c93afde3ee40adda5db5', class: "ir-text-end" }, "Rooms revenue"), h("th", { key: '2ad1801b8609cb56ca2923a4736bc9ff05bfca01' }, "Occupancy"))), h("tbody", { key: '121abcde6bc53ebcf797ff7b83887f59d0396d35' }, this.reports.length === 0 && (h("tr", { key: 'aa161330ef7763f38c0c5f5e80e37bcb42c6272b' }, h("td", { key: 'f34c2aebfb7e991d5c100084aa5d9eb38a7cd432', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: '22f39c8ad10f8f1364995ac7fe9f993091045990', message: "No data found" })))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, formatDate(report.day, { style: 'day-only' })), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.adults), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.adults))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.children), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.children))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '582eeeba016cd5125bb847994612c2bbeaec58a6' }, h("tr", { key: '9dbaec12f7078df1f33f837db19fd64ceccc47f5' }, h("td", { key: 'e864fdb215e00d611f6b1d48b1756080fc5f7b63', colSpan: 6 }), h("td", { key: 'd104bc19a8e9c0892a3e17c3993d14533c00dba3', class: "legend-cell" }, h("div", { key: '311034d5194ace43b0df7d1e90c3a313ff948f15', class: "legend-row" }, h("div", { key: '8f0c611ffa0796e6a6c5733da6fca67666250de1', class: "legend-item" }, h("div", { key: 'b7b0551e5618286de40ede77cba9ee5365dca226', class: "legend-dot legend-dot--current" }), h("p", { key: '8ef445601421c6f2166706d97a9a9fb0203e9d06' }, "Selected period")), h("div", { key: '34658ef47ce74eebcf316f245b0529341f4b6a2a', class: "legend-item" }, h("div", { key: '63ef163db7619f95100048c5672d92d5eca7cf3c', class: "legend-dot legend-dot--previous" }), h("p", { key: 'f7b1ac9aa289a7f8614f60ce263f0e27548a1e98' }, "Previous year"))))))))));
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
