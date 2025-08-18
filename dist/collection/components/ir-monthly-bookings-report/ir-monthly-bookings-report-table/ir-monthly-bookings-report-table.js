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
        return (h(Host, { key: '951f7c288eeb9deafaa7aee7ea7bc6b7942beb9e', class: 'card p-1  table-container table-responsive' }, h("table", { key: '0fa6d266b001045eb67f3c65fe078fe3aad5db3b', class: "table" }, h("thead", { key: '84a5cdb620e512f514701899e4be16a73028892a', class: "table-header" }, h("tr", { key: '5a39f1ee60d8760ad4ee686357e04e44f9e00200' }, h("th", { key: '5277536f3ae807211ea9734c08c13a2dc8ff0197', class: "text-center" }, "Date"), h("th", { key: 'a4390af060a4ff4153514fb09273947e73c059b5', class: "text-center" }, "Units booked"), h("th", { key: 'b4440f9bcd7d49f07f987b347bf5c39c1be0eaba', class: "text-center" }, "Total guests"), h("th", { key: 'fae71cf32536165b41e067db7987de9940a9724b', class: "text-right" }, h("ir-tooltip", { key: '4a2eff1ce8a7b024760b693aaa56d12b0c3f6273', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '65725ad2970788170267c8bd14daf01f36122360', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '2fcea8c61f1a8705b0edb76bec43fd852bf4bfc1', class: "text-right" }, "Rooms revenue"), h("th", { key: '5db620d6e4696e45d7438d1880a90fc3570a09dc', class: "" }, "Occupancy"))), h("tbody", { key: '10954260dd9c2f7417a3ac33f3a27b93578db2b0' }, this.reports.length === 0 && (h("tr", { key: '55262e7b416630103980827db98dbc0d3b7a2aa2' }, h("td", { key: 'e548242f52fcd91ce11d786420ec40c84bddd1c0', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '111307ec939f54909c98062a2f0aadd1acf72f28' }, h("tr", { key: 'b4c3cd226b67a415f8600c5361889f0beb518e01' }, h("td", { key: '7125d303a2be5e2fba5053027e78d9a36077114f', colSpan: 5 }), h("td", { key: 'ef08a9b7e40464f4854a1846fd17019296aa2f00', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'a0abe167589a7946dc13672e2ad484eacb7f2d49', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '2f6d1c87d606e0718330ed48d5a0736a15698b8e', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '212378b16982c26cb107708eb39a6b76a443f709', class: "legend bg-primary" }), h("p", { key: 'bd4b55a7c1c7145cb5e100e3e65310f00f3eb38e', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '8998f9c337ac80ce35997b74df64e7f8d538a6f7', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '79582036d6ee8b9a6d04ecb22f12d1274e815dbe', class: "legend secondary" }), h("p", { key: '4e4568881fcde7052a33acba0ab42cf174bba6b5', class: "p-0 m-0" }, "Previous year")))))))));
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
