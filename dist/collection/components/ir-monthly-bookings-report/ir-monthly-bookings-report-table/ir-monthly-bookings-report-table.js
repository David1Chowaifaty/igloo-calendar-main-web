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
        return (h(Host, { key: '26eb5ffa1c5ee3c65ef48deca1366a72f4442e99', class: 'card p-1  table-container table-responsive' }, h("table", { key: '027382fe90dd87c14ae96d7274227133d6ef5180', class: "table" }, h("thead", { key: 'f730cfcae8e5c2a5c659dad237d345ff4202d363', class: "table-header" }, h("tr", { key: '4e7259a01e145d465a23e00bd6ef61a7db613992' }, h("th", { key: '91dbba82691ec9749850bfc1e9b0a6b50a167773', class: "text-center" }, "Date"), h("th", { key: 'b5754040948cff0c48185455878678334e4f804b', class: "text-center" }, "Units booked"), h("th", { key: '407860d0f44830946801ac9dc6b45759c8d02687', class: "text-center" }, "Total guests"), h("th", { key: '29af1052bfd6de1616e9d50d3f1dba100f0cd9b1', class: "text-right" }, h("ir-tooltip", { key: 'd21ec42cce2d91580c2fd7cec62c121ee399237e', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '18e77c9030724fe9abee3833d6c09d116502d6d4', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'fc93eb7e79c520caf70348a2338c3c5f06b1c24f', class: "text-right" }, "Rooms revenue"), h("th", { key: '9eadcb1d5ac403faebedddd5996f21e3a7a95b2c', class: "" }, "Occupancy"))), h("tbody", { key: 'b7892f6b1aa710865b8c70816c051c7b30073bb5' }, this.reports.length === 0 && (h("tr", { key: 'ed7e5ead8fcb712f1b3dba864143637644e08f83' }, h("td", { key: '64f76dee63682e003956d687958b11ab838d1005', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'b25892182e3790b52526108ca7220e76c6a262d9' }, h("tr", { key: '91c0abdd0130d23c5b6df5749d58ff984faa33c1' }, h("td", { key: '3ce14f66b52d26d020d07d7e5076594459e0a45d', colSpan: 5 }), h("td", { key: '6c1350d14c7cd302719052434c59a8b33a61a007', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '3671e48d42b1875c1bd53674692ba330f2edb146', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'df6290952e4bbfbd44552e45aa8f1ca67a7c6b1f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '22374044c20674e3b3c7cee8d09f1aea179f8b12', class: "legend bg-primary" }), h("p", { key: '387d83898ea4cc1a3c877343afbe30e14c8c1052', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '479b464fcd065e4de3389acaadd0529b206a171c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '41963db15c07ab0ae856eed3b22600cc1f23474c', class: "legend secondary" }), h("p", { key: '0af90f0c2ae9c696af36583e659136a9d540a8f9', class: "p-0 m-0" }, "Previous year")))))))));
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
