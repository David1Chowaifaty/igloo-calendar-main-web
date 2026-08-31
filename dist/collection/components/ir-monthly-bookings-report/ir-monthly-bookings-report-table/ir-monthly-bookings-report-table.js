import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import { formatDate } from "../../../utils/date/index";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: '8a9412aeb97fb82c01f00a7440077e24cee2b7dd', class: "daily-occupancy-table__card" }, h("div", { key: 'ae532603cb45303b301c902964c188a9e8897126', class: 'table--container' }, h("table", { key: '4bc5fca9fc82dccfbe776aed382124cc1e38e3f6', class: "table data-table" }, h("thead", { key: '7795982806ca79bf4d948cae07613091fca1619a', class: "table-header" }, h("tr", { key: '1818548132202d11ac35a640adc27683eed30ec2' }, h("th", { key: '3e6e99eb7c111057acccfe87587e5b114feda9ab', class: "text-center" }, "Date"), h("th", { key: 'f0344733ac346b16f92f26072542044f8406de6d', class: "text-center" }, "Units booked"), h("th", { key: '4308be1b85682c8b2e183805da2ebcfe86fd6283', class: "text-center" }, "Adults"), h("th", { key: 'c6cf6eaf06d0f892df720f9b4a23d788b6525979', class: "text-center" }, "Children"), h("th", { key: '4e97a831203952b0f96dc2dc9300f6c0fa2884a4', class: "text-right" }, h("ir-tooltip", { key: '815ffa3f04d50638ff03066d5e6081c69fdcc274', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '473833927c4b67bcfb5a3bbf2d81fd446e10d98b', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '5fea47c62f58394ab943997af41d33d07c28b7ba', class: "text-right" }, "Rooms revenue"), h("th", { key: '5bbb146bcb7a2a3eb3d9f2c3b80ba610aa611325' }, "Occupancy"))), h("tbody", { key: 'd566b67fb0c3cb10bc976d678b334cfbb9a6fec3' }, this.reports.length === 0 && (h("tr", { key: '4afbc65cac2d14476210ea461baf2f77efcc5c15' }, h("td", { key: '87bde552ce566135d9bb5c2df3d666bd26bfe54e', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: 'ad70337b32f2cbd44b8324ffae7e21b5eaa1be7b', message: "No data found" })))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, formatDate(report.day, { style: 'day-only' })), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.adults), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.adults))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.children), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.children))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '9665a16c7daf85bed052d6ea3e9cc43afe2ecf96' }, h("tr", { key: '98b32b1813fda8f05578ad1f7d7f6f9ba2103ddf' }, h("td", { key: '0d45b8e8cbb146914a8d5910ed48c7819afde03c', colSpan: 6 }), h("td", { key: 'b4b13217cd6bbb3d3a1326642b7bec7444cf3c9e', class: "legend-cell" }, h("div", { key: '097005f2732a81d1aaa24e1c751543e1edc78f1e', class: "legend-row" }, h("div", { key: '74d24a661a8ea68e0196fe769455a94ab4efd298', class: "legend-item" }, h("div", { key: '754fffa2558bedb69c6aebfb18caf19a06402e22', class: "legend-dot legend-dot--current" }), h("p", { key: 'e53f78fd38ce85ef3d4f9b069c761b0dec31b114' }, "Selected period")), h("div", { key: 'a8050f516e061087c20c053be6c268d006ded6b8', class: "legend-item" }, h("div", { key: '4123bb4a4d8b17611141dcf4ff43ba3c899bb6b3', class: "legend-dot legend-dot--previous" }), h("p", { key: 'b8567cf2ebda8ab3ff11ce27a6a3deabbae9ddd6' }, "Previous year"))))))))));
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
