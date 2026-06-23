import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: '6e394cb3738790355e37cca4f13f7e92487e2ca9', class: "daily-occupancy-table__card" }, h("div", { key: 'a79cc89bfb4f846ebab9af739d5c1a9c4e004333', class: 'table--container' }, h("table", { key: 'c9f4928feb83e5e744c87231ea413b2c0f5b045b', class: "table data-table" }, h("thead", { key: '9063d88a66ea75d01d8468bf2a6f9d4694e028f5', class: "table-header" }, h("tr", { key: '9301f0d9367b988e56e1248c61d945744fe7c16e' }, h("th", { key: 'e3f39dbe774d5487db3005dd2abeb5c4626f94b1', class: "text-center" }, "Date"), h("th", { key: '75657024586814a75b9b3bedd9f6c9d2d3d64669', class: "text-center" }, "Units booked"), h("th", { key: '50ac1c12682eb1944a7378ff89658163c0edb43d', class: "text-center" }, "Total guests"), h("th", { key: '75b69f7f5eac4cf28ebf95305ea8bb2a1a3ab8a2', class: "text-right" }, h("ir-tooltip", { key: '582bf879ab03cb447ecff1d7a64fb172ea430d44', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '9cf49fabf2f18ea62cef26a0614dfeeaa5a8e9b7', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '87a0762dd7c144cf90067d148befdc99a1f6f1f2', class: "text-right" }, "Rooms revenue"), h("th", { key: 'dcf23efb67b70fa95ad125818c3f66426938b131' }, "Occupancy"))), h("tbody", { key: 'd034d249602e6ce9cf172eaaeaa13d84d579be78' }, this.reports.length === 0 && (h("tr", { key: 'aa9201e18ed2f84bb9c0fe9e48ca506f9569d7d8' }, h("td", { key: '8c0d88f17db05fb84cb694efda87d024b007fe69', colSpan: 6, class: "empty-row" }, h("ir-empty-state", { key: 'e82005dec3e912087b1956003d3a27dd09dce8c5', message: "No data found" })))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '044bb537b3767780af3f69e6d0479fe1d3ae6be5' }, h("tr", { key: '14aa7dbb4bf033c28deca11da7a5c02dacb64666' }, h("td", { key: 'ca6eb568826ea27b998be28fea5ca9803c0a1544', colSpan: 5 }), h("td", { key: '84644a456a41e74a947bf4b1733ca7fcf970035c', class: "legend-cell" }, h("div", { key: '9367e93fbe55a84f44b67350ef405eb77d4c008f', class: "legend-row" }, h("div", { key: 'b536a1c06680a83ccdffc1c9fb9b8dae5fb9f337', class: "legend-item" }, h("div", { key: 'd6ec8b38b2dc16b0baf96b3d51124ed546a6cd3a', class: "legend-dot legend-dot--current" }), h("p", { key: 'b11be6b1b15f1e4b36fb1fcfb53fb38871f92154' }, "Selected period")), h("div", { key: '2f02a7c0d349ff028e86fec8d0505e675cbfdf21', class: "legend-item" }, h("div", { key: '98bae6729efab111d90f42cb39a3f48b3197199f', class: "legend-dot legend-dot--previous" }), h("p", { key: 'bde72aacbedb055c6b24e97e4cd8411c41e7e31f' }, "Previous year"))))))))));
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
