import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: '6d62e5cca1f0840c2d3d6ae9b593eaef48d7cd90', class: "daily-occupancy-table__card" }, h("div", { key: '3e40f5c3862dba19a164979704a10599b04bfc8f', class: 'table--container' }, h("table", { key: '33bdbf11981d57ba1ed1a8753284d9d4638b3938', class: "table data-table" }, h("thead", { key: '95b094ccb80cea77550a479dc37de303e706f213', class: "table-header" }, h("tr", { key: 'f4b806f30ef5e1c96bcd3e06ffa255f46c930f47' }, h("th", { key: '31e0d60bc234e116d83fa0d0b7cd15e1427d5c58', class: "text-center" }, "Date"), h("th", { key: '113c02eeca8e0f98762aa98bfd3b2c616e9933dd', class: "text-center" }, "Units booked"), h("th", { key: '72db3aa64c658734b07b2819f5dd873840721950', class: "text-center" }, "Total guests"), h("th", { key: 'f2579878b4e66f3f42419582542ff84f1af32d0f', class: "text-right" }, h("ir-tooltip", { key: '76d198010839d078a1bff10e0e69e0a4ff78274b', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '593179ac3eff4173e5e803bf2d6bd3eff91afd08', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'bcea13415ad0e0d33b2ed1bb7c2b480e50d6a809', class: "text-right" }, "Rooms revenue"), h("th", { key: '42f0548145b00ea9e4d86f4bacc6b925654f5536' }, "Occupancy"))), h("tbody", { key: '158bcf3be24e63f1bdd3bcd714e1e4f818721ef8' }, this.reports.length === 0 && (h("tr", { key: '24aa315e2bccf598ef8229368b56fc7d62e71e60' }, h("td", { key: '92d88bb4f954904c2323b18c761659188a1a4fb0', colSpan: 6, class: "empty-row" }, h("ir-empty-state", { key: '65008503e12106464ed15d6f2a8cc3e8687330c6', message: "No data found" })))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '3f55b555e56971bcc569c33779732c7df790eb56' }, h("tr", { key: '6d033abfed69f34e8cb49bd0c651fde5b979250a' }, h("td", { key: '61820b8d2cd53b6d8bbd5c17f84379a4b5e79582', colSpan: 5 }), h("td", { key: '0dbcff040e15d9dedcdcba115c577dbb06c1bc1e', class: "legend-cell" }, h("div", { key: '4e3e65cfdd251234d3cbe4be7d5da7beaf524e0a', class: "legend-row" }, h("div", { key: 'c1b9fe6a558c515523200ec0b4dcc0906fa4d5d9', class: "legend-item" }, h("div", { key: '3a34ff23ddd2594d170457262846526046c33b5b', class: "legend-dot legend-dot--current" }), h("p", { key: 'a953013ebf8af62416fa1b0cf48813124ab0cc19' }, "Selected period")), h("div", { key: '9e657b93957e0b59d406a4a38a8c26266a67e260', class: "legend-item" }, h("div", { key: 'c67dd4cacb8f4da0ee64e0af548d8204af872416', class: "legend-dot legend-dot--previous" }), h("p", { key: '01ea9ca4982129a749b86d192c99a8d7d4304d2b' }, "Previous year"))))))))));
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
