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
        return (h(Host, { key: '9b905c30ca1f19a3481fa7589a84ee6f270a50a5', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'be40cefa7b953f65575a8d2628ff19e0305247f4', class: "table" }, h("thead", { key: '8b8eeda302b4c166d7bd0a3fa0f3256b58200fa9', class: "table-header" }, h("tr", { key: 'd88a31f241d0fef4193d79123863b718ce2675de' }, h("th", { key: 'ffb14f35b3b9cc7aa8ff4343d2062efe08c7cab3', class: "text-center" }, "Date"), h("th", { key: 'c8a94f802154aac6fac4a273c9110971d9aa8286', class: "text-center" }, "Units booked"), h("th", { key: '0c684a83674df9d641a96d28cf85902bdb42efbf', class: "text-center" }, "Total guests"), h("th", { key: '5a6e4ab68ec3994e41ec59c9fce4262153e54ab1', class: "text-right" }, h("ir-tooltip", { key: 'f4fd9d50501549a758b5999c4422fd0adefad6f8', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '178ee2f7be959726d203f79efb0d4cabae5333d3', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'cac0269b888472788b951f802653f4c148db0c32', class: "text-right" }, "Rooms revenue"), h("th", { key: '7e96ac3994e1276a9d5735a61e83d5c626091462', class: "" }, "Occupancy"))), h("tbody", { key: '679b7d6f902ae74ae21888708439395c329241d4' }, this.reports.length === 0 && (h("tr", { key: '12db5578739d463c7f3c146a2eeba6171ae43d29' }, h("td", { key: '43b62a28cb89cef011d149a6b2029067ebb12674', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '8cb47b8b9a50093ed512fe9b2a6262a660df7abe' }, h("tr", { key: '0a11e712d54a130dec3e02ffafede9ba9ba14520' }, h("td", { key: 'a74a6f1ca087f76edb96e7a3d5a3444b4ea6512d', colSpan: 5 }), h("td", { key: 'd62fd2c6275af39837c7565dcd3f6f232f1a18ce', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '22ce8efee5ecce9bb785aeb9a1b0063c047cc878', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '4e4e23812dc9954b5e2d9129a88f2abfc614afea', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '376bc64b3a772ea421fa0d082fb8e22a9c5f44bc', class: "legend bg-primary" }), h("p", { key: 'f35b5ba036b2b8afb91153dab0b4e6ff1e5c817a', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'd2134796a3713377381529ea626222cddd9d1e86', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '76c524adf0cf4705c1ea034faedeb210cc7698a2', class: "legend secondary" }), h("p", { key: 'c8dbd6cd4ee6c603fa648ec6043f33443e84ecc5', class: "p-0 m-0" }, "Previous year")))))))));
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
