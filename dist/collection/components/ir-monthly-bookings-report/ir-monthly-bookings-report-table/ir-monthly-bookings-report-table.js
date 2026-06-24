import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: 'e8b0d93d8ba6757f03895a6191ae1466f4be5270', class: "daily-occupancy-table__card" }, h("div", { key: 'dcaaa6a73b58a6a004e99cc23072ac7817ea859a', class: 'table--container' }, h("table", { key: '4fbe1ab56d7a267f3de58656e8abb2b91095450c', class: "table data-table" }, h("thead", { key: 'c6f1dcbceadc6068d77ff58d83fd24ec7ff87e12', class: "table-header" }, h("tr", { key: '6937623a570a06dc6882c51d5cb76a1470f8a863' }, h("th", { key: 'fe12eb77d1477ab6b0786a70541bb8c61d2105a1', class: "text-center" }, "Date"), h("th", { key: '64ca9b2725d264fc158a30e12dd9eb50eaf450b3', class: "text-center" }, "Units booked"), h("th", { key: 'dabc6519b52800727dcf2c9e34b7736f831b1c70', class: "text-center" }, "Total guests"), h("th", { key: '16fde20bfaf221efc7415af3e8dcc429eb634dfa', class: "text-right" }, h("ir-tooltip", { key: 'd958dc7e708cb2a8ae58a13e081031df5de783b3', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '55fe24688424d4a422e7aaf963773fbfcdff528b', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'fcacd80b5b25404ed5d55eac757780544ae53e33', class: "text-right" }, "Rooms revenue"), h("th", { key: '1c8de95b8b637364ef2dc34c4d6ab75e49329d7d' }, "Occupancy"))), h("tbody", { key: '1764e2caeb3949c7385ce3cb9308afd383ebdd43' }, this.reports.length === 0 && (h("tr", { key: '238c32197d2df3910dee0a3fcfa7c1f81db243e4' }, h("td", { key: 'db591d32a824bb5c6927e58e54332fffc8a67524', colSpan: 6, class: "empty-row" }, h("ir-empty-state", { key: '8a4dccf3a278c7c0dc14f35f8a38dbbe54a76fec', message: "No data found" })))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '87c4aa82c65ce2fbe938da34aadffcd8e2ed4124' }, h("tr", { key: '68eed769c480ed42a81a6ebf394439a6ec5558b0' }, h("td", { key: '0e5e45cae7b7d8d3bf07acd7c3459ff87f2eda07', colSpan: 5 }), h("td", { key: '8f8138d898516f41ce24471d46da67f256194d1c', class: "legend-cell" }, h("div", { key: 'eeacdc129cbc04907cc99b89f18c08257f9bea36', class: "legend-row" }, h("div", { key: '5d4b0538b085ec45b5db6ae698b716832cc89560', class: "legend-item" }, h("div", { key: '96c76a7a17a751f647766edc1408a05cc73834fc', class: "legend-dot legend-dot--current" }), h("p", { key: 'c24b33e568c4ecfe8343a1d19304afa266e86ec7' }, "Selected period")), h("div", { key: '2be7dba46f9bd65ceef37f0b98133872e469bb77', class: "legend-item" }, h("div", { key: '56181f5a064a8a985683f3c459e919d129acf8dd', class: "legend-dot legend-dot--previous" }), h("p", { key: '6fbf97a0835bc0db55f7f832e3076bebb77e18cc' }, "Previous year"))))))))));
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
