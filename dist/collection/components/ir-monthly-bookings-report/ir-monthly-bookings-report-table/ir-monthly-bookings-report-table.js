import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("div", { key: 'ff1ac6ebd7b0e133e8658952e2d59313c822ffe8', class: 'table--container' }, h("table", { key: 'dad195f823f6171c64ddc5c6d971a8dbba21253f', class: "table" }, h("thead", { key: 'e03df7423e6511bd4891ecf96aa881f0c692b889', class: "table-header" }, h("tr", { key: 'ab71047bf98f5820c6854a985cd0bb099c3ea7e5' }, h("th", { key: '159b51d3a074f7f0f4f7eb9a0b5bbf2b6a5bc242', class: "text-center" }, "Date"), h("th", { key: '1b9915f1838a9f9ca357258089bbf061730396c4', class: "text-center" }, "Units booked"), h("th", { key: '2912d32589640794ed50b7f0e69cf80ef1ed0cac', class: "text-center" }, "Total guests"), h("th", { key: 'ab47fa41020721ea1babcefb9b316caa3bf13774', class: "text-right" }, h("ir-tooltip", { key: '62208421dfcba0714b444df2e0705f667249c9de', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'b687d9f321bf977d073bbb793f6bd4014bab40d5', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'c6dd9c74e3a1cbe3bbb7b19bb35e977edcba90a7', class: "text-right" }, "Rooms revenue"), h("th", { key: 'ddfdaf264960cdc373ded632d7be0c5c7d074d89' }, "Occupancy"))), h("tbody", { key: 'dc1760a262fcd449e30ef411b1e39da0309f06be' }, this.reports.length === 0 && (h("tr", { key: 'db5b64f747a0421d6bcd6510b89e522e58e35f32' }, h("td", { key: '13b6f150175fe3bdb94bea9e02034f7ab691c971', colSpan: 3, class: "empty-row" }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: 'dc9ab72eaabec561084f197e86a32a9f20fe4641' }, h("tr", { key: '4de3bb7910f593abe8de48c541baf230544d599d' }, h("td", { key: 'd0dca3d1bce28f80498ec3ebc8cb24b2c81803a6', colSpan: 5 }), h("td", { key: 'a4d40067333d3d47e8a7e978a38dcae62ee812e4', class: "legend-cell" }, h("div", { key: '4d5361f35333c9a2c2538bc19f276a74cbfd0559', class: "legend-row" }, h("div", { key: '06e58e4c9cad4aeeebd0d2b8cf451a2978f4d5db', class: "legend-item" }, h("div", { key: 'f2065807c780caf8353e52621ab875c28addd19f', class: "legend-dot legend-dot--current" }), h("p", { key: '803c6b608928e2b06602d8ddb5259fbd7fa231ea' }, "Selected period")), h("div", { key: 'fc0ecdea10a4f3123566222f5f85bc8d2a4cb31b', class: "legend-item" }, h("div", { key: '9f69d59c5b0404ca3956982efa50678ad5c25fc9', class: "legend-dot legend-dot--previous" }), h("p", { key: 'bd00d35c521ff186c119646f9981e4bb8497559a' }, "Previous year")))))))));
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
