import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrMonthlyBookingsReportTable {
    constructor() {
        this.reports = [];
    }
    render() {
        var _a, _b;
        const totalUnits = (_b = (_a = this.reports) === null || _a === void 0 ? void 0 : _a.reduce((prev, curr) => prev + curr.units_booked, 0)) !== null && _b !== void 0 ? _b : 0;
        return (h(Host, { key: '1fa0939ed14a6fae86bd1384df2b318aabb89537', class: 'card p-1  table-container table-responsive' }, h("table", { key: '7ee64eb9730d006c2751c72d6eab1f1c035e397b', class: "table" }, h("thead", { key: 'f30fbcac46cb30e5b41d1ad560e0a36e999ffeed', class: "table-header" }, h("tr", { key: '29b85e93422dbe45a879f6745ef84c3060ff2526' }, h("th", { key: '1065746571ee8ffaa7f42066d41a809ef926318e', class: "text-center" }, "Date"), h("th", { key: '4a8eb9370d537aae6b50cdde48d18a103e393d15', class: "text-center" }, "Units booked"), h("th", { key: '8bbfed807dc8b31e778f10bab12884727ffc1a7e' }, "Occupancy"))), h("tbody", { key: '4699df31d7251654e4a9a9304bf953922857d962' }, this.reports.map(report => {
            var _a, _b, _c, _d;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.occupancy_percent) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '49767449cbf48dd3e1f8ea06c2e0e3e026665f79' }, h("tr", { key: 'a1044fbb33a8d5566294918affc539cce18fe1be' }, h("td", { key: 'f29127aa1f8519940b3565173282162d0d9ff7af' }), h("td", { key: '433185d3f179c351b5ded967f2d445fd5100d9e6' }, ' ', h("b", { key: 'd1fea61119eb36689851786e160209cd97a50c51', style: { whiteSpace: 'nowrap' } }, "Total: ", totalUnits)), h("td", { key: '7cd05868648559b16244903f4cdf9fc72fa091a8', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '434da9450c10a832d025bd2a524a48f2de557e13', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '07e9739b5560e70dff64ceea7cbf53ddc9428ff7', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '798cd0884d41f321d62ca5795c35ac85868ef126', class: "legend bg-primary" }), h("p", { key: 'e1636355f602ae32b889b14cb671d713b28693d0', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'ce37fd8a3060fccf82cd37693f3eb83ec73133da', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'cee005c86bf22a283d9adfff0790156d292f8acd', class: "legend secondary" }), h("p", { key: '9c26ef2912eb6063019e6fdaae08c535dc2a811f', class: "p-0 m-0" }, "Previous year")))))))));
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
