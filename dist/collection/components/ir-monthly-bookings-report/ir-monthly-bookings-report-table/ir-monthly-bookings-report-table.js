import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrMonthlyBookingsReportTable {
    constructor() {
        this.reports = [];
    }
    render() {
        var _a, _b;
        const totalUnits = (_b = (_a = this.reports) === null || _a === void 0 ? void 0 : _a.reduce((prev, curr) => prev + curr.units_booked, 0)) !== null && _b !== void 0 ? _b : 0;
        return (h(Host, { key: '1fa0939ed14a6fae86bd1384df2b318aabb89537', class: 'card p-1  table-container table-responsive' }, h("table", { key: '7ee64eb9730d006c2751c72d6eab1f1c035e397b', class: "table" }, h("thead", { key: 'f30fbcac46cb30e5b41d1ad560e0a36e999ffeed', class: "table-header" }, h("tr", { key: '29b85e93422dbe45a879f6745ef84c3060ff2526' }, h("th", { key: '1065746571ee8ffaa7f42066d41a809ef926318e', class: "text-center" }, "Date"), h("th", { key: '4a8eb9370d537aae6b50cdde48d18a103e393d15', class: "text-center" }, "Units booked"), h("th", { key: '8bbfed807dc8b31e778f10bab12884727ffc1a7e' }, "Occupancy"))), h("tbody", { key: '4699df31d7251654e4a9a9304bf953922857d962' }, this.reports.length === 0 && (h("tr", { key: '9b8bb7936a529c820b1cd62039975a99403c23ab' }, h("td", { key: '997bc1f3aeaee5fdd43cdaa27bb6b311bf0f40d7', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '064b31d00fe4e2378afb0a7c42b28d727716f110' }, h("tr", { key: '67f38cf08e7d9c7ff7a15033d6098925f2160bbb' }, h("td", { key: 'c15674989726be0461df9585d8442e59165dc9cf' }), h("td", { key: '55caf614970a1aebf850b08900192ab151ce2d36' }, ' ', h("b", { key: 'ab1e7a800abaefe361b7cb18bb90c2f1f41e09c7', style: { whiteSpace: 'nowrap' } }, "Total: ", totalUnits)), h("td", { key: 'c977a865a537f8b97199f35231edfec40421c6c9', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '846f64dda02e07f193f2b37092c9ab68833fe7a4', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '303ab5e4a4b2811551d4bf473153efa828873b30', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '144d494f290dfcbfaf625178cca78b856fd3dca0', class: "legend bg-primary" }), h("p", { key: 'ac4d920181c49da2c8a57b85178abb42ee43dd0e', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '0a3d546a6b0d3190ec4cfc330e146a8ab6d99e3c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '066795634f85ffb8d8fedf9300c1da4862560244', class: "legend secondary" }), h("p", { key: '56bb65e8596ddc4ce940a823ec0fb126bd6bc2d6', class: "p-0 m-0" }, "Previous year")))))))));
    }
    static get is() { return "ir-monthly-bookings-report-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-monthly-bookings-report-table.css", "../../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-monthly-bookings-report-table.css", "../../../common/table.css"]
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
                            "id": "src/components/ir-monthly-bookings-report/types.ts::DailyReport"
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
//# sourceMappingURL=ir-monthly-bookings-report-table.js.map
