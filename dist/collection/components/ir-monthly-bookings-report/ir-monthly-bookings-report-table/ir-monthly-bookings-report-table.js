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
        return (h(Host, { key: '55f21a8424b4b337cc7273739c6aa9b2500a5ba2', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'e9663469ad8b70eaeaf1734c7e54c8d6757753c7', class: "table" }, h("thead", { key: '2f82a4a6c13dc2bc4f66cc044f9ea5cf1ab78f4a', class: "table-header" }, h("tr", { key: 'b9ebfb0ffd41013de13ef3bd927bbc874db28597' }, h("th", { key: '37e5c79cf3cb4df4a3ed6c68d6db4574a5d1bf57', class: "text-center" }, "Date"), h("th", { key: '6dfd9ceb98da3e6f421f28384945e38083fa4cb4', class: "text-center" }, "Units booked"), h("th", { key: 'c155e67dcc812ce8188bb25a554651f11e2b4602', class: "text-center" }, "Total guests"), h("th", { key: 'a81095f680c8ed5302451a3959f96aef2d7c32a2', class: "text-right" }, h("ir-tooltip", { key: '6c9a0353f39d7472be74f8bdf7a8db79603c1896', customSlot: true, message: "Average Daily Revenue", alignment: "end" }, h("span", { key: '77cf8d3d4f25497fe73fa03f2681ce10d93b49e7', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'b8e01aaaf2b30837d3e51296d0a8793fbc9f16b4', class: "text-right" }, "Rooms revenue"), h("th", { key: 'd3b0c06a1db4f1424658177ac01c17fae5522ce8', class: "" }, "Occupancy"))), h("tbody", { key: 'fdcc26e225563c8f42b2d769b616bb6d66eb636d' }, this.reports.length === 0 && (h("tr", { key: '32c35a738c8aa64776ab95959340908527d549dd' }, h("td", { key: 'de491c8824db5cd6439b03115de5ccc3e44794f8', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '8fe67e26278be88a003b4c4f15fdd26a374d63b6' }, h("tr", { key: '4032724a9fb5ab8d07e4d3a58c16bd87f6c4c33d' }, h("td", { key: '03401cc6a274a90f6a671a0e1bc8b69c83bd65e3', colSpan: 5 }), h("td", { key: '4010c5d90211b21b0003060a183cc755a31abc90', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '0ba5ab0dcb55ebe9c935c64ca161aea44a2675b0', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'd2abbc89d5b6057d864684d483cf68d86f306a3c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b33d5cb7a56e1299bd165e36c431691bd942c556', class: "legend bg-primary" }), h("p", { key: 'd66cd055e64a31bc416b7577141de5449005c1a9', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '94363e6e3b018c1ce13e53085b8a9b63a6b111fa', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '259d0df48c0ac26a51bce98e22500d8d8335fbf1', class: "legend secondary" }), h("p", { key: '013e8fff071f11c4e2f3fff5b73b5e85dc242481', class: "p-0 m-0" }, "Previous year")))))))));
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
