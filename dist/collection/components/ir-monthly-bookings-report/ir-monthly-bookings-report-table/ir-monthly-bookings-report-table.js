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
        })), h("tfoot", { key: '49767449cbf48dd3e1f8ea06c2e0e3e026665f79' }, h("tr", { key: 'a1044fbb33a8d5566294918affc539cce18fe1be' }, h("td", { key: '1c4e3bbd625e9d9db3001214d2570ec26567c2aa', colSpan: 2 }), h("td", { key: '8d900a0b233864949feacb426c60d009d2b8ccae', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '76330c855fd36c5ada359efaecaa6e54c668677e', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("b", { key: '3636b4ef3741bfc64e081624cd6fc8e6786fcca6', style: { whiteSpace: 'nowrap' } }, "Total: ", totalUnits), h("div", { key: 'dc11c619bcae64ac93e42632d121dca8e9584e6d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'd8561df92d33c707b8725f8498d00c85322ade02', class: "legend bg-primary" }), h("p", { key: 'c1132fc96d62ff022cb9d659796157b46d0d0103', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '5ff93eeaabdba60ae82bb79f40e8e07bc6591dfe', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'eb9ba6713141d89f95508323b40f3ff8fdb29b31', class: "legend secondary" }), h("p", { key: '06b79a7408b1eeb705a652ca9152b98764a93f57', class: "p-0 m-0" }, "Previous year")))))))));
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
