import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    constructor() {
        this.reports = [];
    }
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'a6f8324d53690e2e37b34092682a5c05b6d2ced7', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'e0d27f89c207a899469bc8a530041c2c6bf9c7f5', class: "table" }, h("thead", { key: '36439488b794cf5754d1ef4c2587f8c4dcf78247', class: "table-header" }, h("tr", { key: '6b65ea94cb1b79dd7fcf0be3868d68b1cc9beaf0' }, h("th", { key: '1d8f71d5df73209f41013bdbb62a525cbc9e8c85', class: "text-center" }, "Date"), h("th", { key: '581b6a2f490d76c2681fa6bb8e8830a8661ea5b4', class: "text-center" }, "Units booked"), h("th", { key: '2122343027b012a3064a049d87b651a545d22be9', class: "text-center" }, "Total guests"), h("th", { key: '77f3440b94a80570ad566e2ae655f65ef647e7e9', class: "text-right" }, h("ir-tooltip", { key: '651f123b993ceff1b4554d743d830c57f1a591c8', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'e5beadaec53c34c98e9afbb2c8569333b23fd9e5', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '4805e8869c21771502cef9fb90b7be100dad5878', class: "text-right" }, "Rooms revenue"), h("th", { key: 'cb213126144da7e28690f5739a4c0669262de04f', class: "" }, "Occupancy"))), h("tbody", { key: '2e4cb6afa918896e0ddd26098d27f44f233dbeb8' }, this.reports.length === 0 && (h("tr", { key: '25d70d1b006ed4b26419b35a1a410437c75a01db' }, h("td", { key: '3ba4975d45e4e9de43c77f1cfa02bd3507c59b98', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'e7d98169e7d32cfea36958b8fcbd1755a1db5946' }, h("tr", { key: '0913b0b42448e788c5e37f165dca63d52e03cb57' }, h("td", { key: 'a6f0914029f7b3bb036f67661551fc9747525667', colSpan: 5 }), h("td", { key: 'c5c5478999cd18c9be690f3ef264675315f52de9', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'ebf8893895f036e07f32d5bf25d38c8e20af8e51', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '4480c9d94c0358327f2a4e6838c0b1e5cd88509f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '06874aa2f6943654a29f5b30d0ea5658d8b9a9fb', class: "legend bg-primary" }), h("p", { key: '10deeadcc46ce185675527119f83ae2448adecae', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '6fee1f33a0d475e01a5908f99790daaaab45a8a2', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '4378e6d6efd2f13a242daa65f798ef02f6d460cc', class: "legend secondary" }), h("p", { key: '9603b65b920ea6c81495978f155a8834185a50f3', class: "p-0 m-0" }, "Previous year")))))))));
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
