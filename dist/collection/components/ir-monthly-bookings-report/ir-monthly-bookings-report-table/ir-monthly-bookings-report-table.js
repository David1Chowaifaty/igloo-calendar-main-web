import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: '8e3a00f3c7b1ed0c23959274ec73baff5594ec94', class: "daily-occupancy-table__card" }, h("div", { key: 'f6ebd68d8659c2e48d715729055efd534bde92ec', class: 'table--container' }, h("table", { key: 'b8b2cf3a3a7d6403663f1e9f42cdc99a925d3c60', class: "table data-table" }, h("thead", { key: 'ae655f4bcbc55407d4ea1a74c92f2de3b0dd7e8f', class: "table-header" }, h("tr", { key: '7b52210fac0977c01ac3c9656bb3c507fb93120b' }, h("th", { key: '467cbe93840f154136d6b024de84849bb5b415df', class: "text-center" }, "Date"), h("th", { key: '57e9796bdbf47c8f454353254c23337fc7eb3adf', class: "text-center" }, "Units booked"), h("th", { key: '9192168c6a41e84b043faac44b1e24718222e264', class: "text-center" }, "Total guests"), h("th", { key: '26e6326d131f60d23c976e0c9d483598bf70d90b', class: "text-right" }, h("ir-tooltip", { key: 'a5b0b251f50e691c3f05f2d789ef6d918be634ee', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'ffd6253be53d7d1f0c4d5f201bb349414a3b5d4b', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '45987b6f2a4bcb98aa3cc5ed107407030e255dfa', class: "text-right" }, "Rooms revenue"), h("th", { key: 'b008519a6298022ee6b7d574b2476ca5f19c0594' }, "Occupancy"))), h("tbody", { key: 'f9f947e537a3e327443f5d2b450da52b11f32e9e' }, this.reports.length === 0 && (h("tr", { key: '5abfcd27dae01d0c1a5cd23a572fb64c5b166b02' }, h("td", { key: '654c5cb38970988fff37787297ec450c003dca0a', colSpan: 6, class: "empty-row" }, h("ir-empty-state", { key: '61df976ac60880777807db187c273d4aa89df4d0', message: "No data found" })))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: 'a3056fb96e6e91cea9293f32e9c3ca581181ed70' }, h("tr", { key: '3a94612c0d8df73e82bdef937809679f84936ed4' }, h("td", { key: '711807012d738359240c12318747cc51a5c8a739', colSpan: 5 }), h("td", { key: 'de871ac6144d3d480908b13e7032d6a15d1a7901', class: "legend-cell" }, h("div", { key: '954febecf7c5fcd4ba8fa3d59e2d462d815162a9', class: "legend-row" }, h("div", { key: '53df099da955a34c5fe3315346a47a56d47ede9a', class: "legend-item" }, h("div", { key: 'd24472a66f6f65e50e3890519c6310dbc5304cf9', class: "legend-dot legend-dot--current" }), h("p", { key: '28814c32b23f3f14a1c7e189e04ac60e5a6426ef' }, "Selected period")), h("div", { key: '3ab22fe1e18d587c75d4215dda07f39b724495ff', class: "legend-item" }, h("div", { key: '706e225c26e9a3b0944740c4f22d434c9ed24237', class: "legend-dot legend-dot--previous" }), h("p", { key: 'f13567dff1610b83999f36079cc7625a696c94ef' }, "Previous year"))))))))));
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
