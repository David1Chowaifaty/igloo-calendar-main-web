import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: '31e86aa746463675d0bf64f5568b7be111b16407', class: "daily-occupancy-table__card" }, h("div", { key: 'b9a4ec09c10b8b8bdf09cb05d008b27837cf86ba', class: 'table--container' }, h("table", { key: '385d7689a7f382f641ac22459097f3200fad50b5', class: "table data-table" }, h("thead", { key: 'a00f80bdb07e2b2fc2737886574cf493eb640542', class: "table-header" }, h("tr", { key: '647d4ebe73f144d0170f45a474aa9884c8fff171' }, h("th", { key: '946728fde918e72ba92a574b6968947796a007b3', class: "text-center" }, "Date"), h("th", { key: '3150543c5706bb3ed62f7eb59f5036262bf4fd10', class: "text-center" }, "Units booked"), h("th", { key: '0b205cd498555878a30c9ef5416de164f33fc7d0', class: "text-center" }, "Total guests"), h("th", { key: 'aaca5213508bd44dd16faad0d60eaf4664d36c6a', class: "text-right" }, h("ir-tooltip", { key: '4728c5d6647e52012e38bac0ae1c21be2007b85a', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '68e4c8f75d5d1657295de9ba9a58f4cdd4b42ebc', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '5fa1080cdcdeeb24763ef5a15dfba2c7f02f57d7', class: "text-right" }, "Rooms revenue"), h("th", { key: '828c6e7a28112c3003c37a611dfb205517de7ea8' }, "Occupancy"))), h("tbody", { key: '98aeb4007a46364a288e7d0956bcda03f629cf7c' }, this.reports.length === 0 && (h("tr", { key: 'de5d21e8542820913aeb8177d9240c834aa74288' }, h("td", { key: 'a241c8e69d10e80424e7404946109da068f8be45', colSpan: 6, class: "empty-row" }, h("ir-empty-state", { key: '69af7cb9a849a1cdbb5bc00b9f7ced9f46ba97c9', message: "No data found" })))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '6e857f9494eaddb78b99a5ab978ca1d68dd8fa05' }, h("tr", { key: '5f03e718f6b35b946b9ceeae03e6cae3581d5b9c' }, h("td", { key: 'd09eab74e17062a3a2748604dc81350362931601', colSpan: 5 }), h("td", { key: '45d585b06a2e71e6fd29b14932234e1e19e5d184', class: "legend-cell" }, h("div", { key: '1d4f262b39fb5e5c6bc815f3a836e6eba130c719', class: "legend-row" }, h("div", { key: '1e10e4a38badf12b5ac14b684c829439e634c43c', class: "legend-item" }, h("div", { key: '5bd374e2ff755aefa668efa0d9191ab6bd61750e', class: "legend-dot legend-dot--current" }), h("p", { key: '3f37038d216d05afdb6219d82ec4c9e36ec1d001' }, "Selected period")), h("div", { key: 'aeaf5ba65e78221f0b170dbe21506d59361fdc1b', class: "legend-item" }, h("div", { key: 'c7ff92b8b07f552591cb59d4fa036e30ed164f89', class: "legend-dot legend-dot--previous" }), h("p", { key: '893670ab3b1292eb7e4aa50c86128319070988ee' }, "Previous year"))))))))));
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
