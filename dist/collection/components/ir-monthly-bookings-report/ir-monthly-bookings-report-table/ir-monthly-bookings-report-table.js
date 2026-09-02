import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import { formatDate } from "../../../utils/date/index";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: '0320e3e945c69469fe4caaadc2a85e63cac922cf', class: "daily-occupancy-table__card" }, h("div", { key: '385d7689a7f382f641ac22459097f3200fad50b5', class: 'table--container' }, h("table", { key: '9caec3b5ae9aa263fd90191e42757b9ea60c8bc6', class: "table data-table" }, h("thead", { key: 'b29676593e431faeadb7f96e455212804f0552c0', class: "table-header" }, h("tr", { key: '738309e4e71813a61ef5a289f2ea80e53385be02' }, h("th", { key: 'fe490b45ed6067888e53851222deb8572346e7fd', class: "text-center" }, "Date"), h("th", { key: 'ad5cd8e5084f4dc8ecfc8d095eb75528feba338d', class: "text-center" }, "Units booked"), h("th", { key: '7b1adc70c2761c64d1ab6bf2553ccb9317cec606', class: "text-center" }, "Adults"), h("th", { key: 'e90e5875fd75b66ab69d77ffddcdf00ee42b906a', class: "text-center" }, "Children"), h("th", { key: '4c232318f5cce226f7a8c2dd99db6b4606cd8988', class: "ir-text-end" }, h("ir-tooltip", { key: 'b5d0b412bf5b485ff48f4cfdc2ba20675e67fa2c', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '2cc4fc0352941d120ee16e962bb29f52812b33a1', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '2dfbb9eb3d713b5eb30b1b37da043143ec3ec217', class: "ir-text-end" }, "Rooms revenue"), h("th", { key: '812448d76e76f899f971405b91d0ee251e40e918' }, "Occupancy"))), h("tbody", { key: '79feb7ec818b846bc77c923a4e7977d4ed2549a1' }, this.reports.length === 0 && (h("tr", { key: '2e6fa77104aa7ff0d73c08c4877e10796a0cb289' }, h("td", { key: '1cfedc4241efcc0f29f4a9a7fef28769bd8e1f0e', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: '638f4cc5f326d55f0e78f73c0d5ed8dcf26312b1', message: "No data found" })))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, formatDate(report.day, { style: 'day-only' })), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.adults), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.adults))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.children), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.children))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '6fb6ac4224b673bdbf53da39bde41f7b9905eca9' }, h("tr", { key: '6a668ed4f272c9f32fc74695e5c389a4ec6d6e40' }, h("td", { key: '5696e143a241636f84922b80e7a6a11bc57894d5', colSpan: 6 }), h("td", { key: '4613036347b015afde7c5e8966d41d5364c7f255', class: "legend-cell" }, h("div", { key: 'b15ae18d84596b97f73ecd4afced8e6e77eda679', class: "legend-row" }, h("div", { key: 'f4bb21e8c6eb8d9d8055f4900ce5c06c504d0bd1', class: "legend-item" }, h("div", { key: 'a2d04f2be683b86bd43a3595c281b7e9b46658d4', class: "legend-dot legend-dot--current" }), h("p", { key: '9c25e3ddca95b5bf08ffc81465db27d3cd3c8183' }, "Selected period")), h("div", { key: '3f60bf5cca1798b642adf9172994b18d3a90f265', class: "legend-item" }, h("div", { key: '3139ef27996e94ec7fe709402d7ba575e0c6ffa9', class: "legend-dot legend-dot--previous" }), h("p", { key: '88c748e6f28c7f7a1d5a0f9c58975dbc7e2ddc49' }, "Previous year"))))))))));
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
