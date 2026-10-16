import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: 'cb81d8696c1eb75bb23f899dca419957b2c3ea37', class: "daily-occupancy-table__card" }, h("div", { key: '3c0da4e5c1e49a796801a352746a58b574e06c44', class: 'table--container' }, h("table", { key: '29593f8c776d6c2c144047691ebeeb1de1b3d2a4', class: "table data-table" }, h("thead", { key: 'befab5de9d6ffe1fee0c309d9090b628f1832393', class: "table-header" }, h("tr", { key: 'ea58f58c9659c8c61573e1392b8d1897c7d3af97' }, h("th", { key: '7815bdd199061095602233e617dd9c3c206d788c', class: "text-center" }, "Date"), h("th", { key: 'b7bbcaef371d7a7a1efecd661ee82ace131e20a5', class: "text-center" }, "Units booked"), h("th", { key: 'd69ddb4e843efa028a906ff8d2ca9213b024ad94', class: "text-center" }, "Adults"), h("th", { key: '67ed62fa2832fd8ea1fa8858eb4c6693c9885da8', class: "text-center" }, "Children"), h("th", { key: '8280cec41a12d2dded3367b77e79d5cce3168092', class: "text-right" }, h("ir-tooltip", { key: '1642f7c1e738cf4b2a7c9bd1722f351a9bba02d7', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '59c8e575d8ca47a0484f215787ee468ebddd0e3e', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'a9c73c8e2f8b5c84262c28d95d51ad2a3d4606aa', class: "text-right" }, "Rooms revenue"), h("th", { key: '673a4e5a594e3239b7806d21a3c55cbf3ce028c7' }, "Occupancy"))), h("tbody", { key: 'd68c6fd331a20b7031b66c271c569c6a42e81849' }, this.reports.length === 0 && (h("tr", { key: 'e473f2a8795aaeac06e96a4164d180d8bd019a30' }, h("td", { key: '6f1037e3b9af3e5995009be197a55b1bcacc4d56', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: '032bd992a23477621f523d95797443d1ca65f30e', message: "No data found" })))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.adults), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.adults))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.children), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.children))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '5657fc815a245a45ac1fc17ca95a61eb1e84f25d' }, h("tr", { key: '8ae603db2e0c2be9fa527515bd069fcd78396f2b' }, h("td", { key: '6578f4bfc1685ba8c9db9c5f87b3f5e9b69ec8f4', colSpan: 6 }), h("td", { key: '964d3db0d519dd03c9593ce69c467e6ecdca3d1c', class: "legend-cell" }, h("div", { key: '46bfc1198ccf991b2c58bf3627113f0a980df9bf', class: "legend-row" }, h("div", { key: '03700a1142b64459be52532f2ef54541a7bd0dc4', class: "legend-item" }, h("div", { key: '04b96ff9f85491fd3fcbbf7627c5ffffe2d948a5', class: "legend-dot legend-dot--current" }), h("p", { key: '7d0b2de6d059a2e323ff7339f7180553ccfedd8d' }, "Selected period")), h("div", { key: '2384504ea17c9e0946d3c9e3fcd702799fc0a7b3', class: "legend-item" }, h("div", { key: 'a5dd51ec1132039c078353291c76fe265f00b9aa', class: "legend-dot legend-dot--previous" }), h("p", { key: 'e3da7bc8a4f1da9347269c89380e37f0749b11ba' }, "Previous year"))))))))));
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
