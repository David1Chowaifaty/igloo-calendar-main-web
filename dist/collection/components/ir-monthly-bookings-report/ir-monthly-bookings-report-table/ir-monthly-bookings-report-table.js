import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: '3aeb86f1e5b9817045ce8dfefbefdb97b2428c79', class: "daily-occupancy-table__card" }, h("div", { key: 'ad54b2cc950fbedd1edbd0672c158a82f3aeae64', class: 'table--container' }, h("table", { key: '97bccbe1059ce60909cd0835d969745ab2fc8cfe', class: "table data-table" }, h("thead", { key: 'ef88e20ac659a397c05b1243d0e3a55730e77696', class: "table-header" }, h("tr", { key: '6f46a2d6e331df6633fd08d1a9f671d760d4c236' }, h("th", { key: 'c7ff4f90b09a6edca865e2bd607dbeaa50ed2d09', class: "text-center" }, "Date"), h("th", { key: '9d9ae654b3f486a8e4059f7d4d5892d1c6b40d4e', class: "text-center" }, "Units booked"), h("th", { key: 'cf67bd95d8f60c6d22d0ceb4ec702a1091667000', class: "text-center" }, "Total guests"), h("th", { key: '8a72e9ffde5e8a37799ec72dfc6e41191de62615', class: "text-right" }, h("ir-tooltip", { key: 'cb1407c001077216b329f6d026c286c042328743', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '5d6cd75b82411f22de24414a73624a7eefeef638', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '5f030030391443c7a3113a444171f222bd752bbb', class: "text-right" }, "Rooms revenue"), h("th", { key: 'dffa4880e16f07e0d5e0d704f77b79828f156796' }, "Occupancy"))), h("tbody", { key: 'dfaf7c52aa9a5b29716bb3ad800cbba55014c416' }, this.reports.length === 0 && (h("tr", { key: '4e79e33d256da07ded9648f746f4b04e6bb4ecaa' }, h("td", { key: 'cb0bb404ab58f900780b9d9c9382de414a765725', colSpan: 6, class: "empty-row" }, h("ir-empty-state", { key: '4881127ff73635572da24385a18cbd0fe46dc9ab', message: "No data found" })))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: 'a80e74dc7d5a21b6a5acb59a9edcb96b22636f1c' }, h("tr", { key: '7fc4a18eca12404264f32420500f7c798a0f8ba7' }, h("td", { key: '949907fc4be3eea3f9f32fc1ddc54fa300cd910b', colSpan: 5 }), h("td", { key: 'e30184af17428bbadd60fd949967f05ceee8bb53', class: "legend-cell" }, h("div", { key: 'ff17b8600f9618c8ed1e5cbd4bc93e39e75a5c8e', class: "legend-row" }, h("div", { key: '2d68773ae1352953aa419e59941bca4735a350ca', class: "legend-item" }, h("div", { key: '6e632a3a1de2b263a020a582f410ce7aad6612fe', class: "legend-dot legend-dot--current" }), h("p", { key: '472febc71b3d42de5fb86f8fb0f43a401085e42a' }, "Selected period")), h("div", { key: '907a91fed84128f7c24cbcbadac9e35c08947de1', class: "legend-item" }, h("div", { key: 'a267f9a82611408f2bfff4c302b857d424ca09cc', class: "legend-dot legend-dot--previous" }), h("p", { key: '828f6196109aae2c2f4d982032e1cf99b17b89e1' }, "Previous year"))))))))));
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
