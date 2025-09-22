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
        return (h(Host, { key: 'bcbe7dd241ace68d41c15e5bbed891607d3972b7', class: 'card p-1  table-container table-responsive' }, h("table", { key: '6e86846d7aeacf26dbc2669ed531ffc9de50faab', class: "table" }, h("thead", { key: '5787164258602d4df38832d69a77f55b7dceae14', class: "table-header" }, h("tr", { key: '365770e330124a0b1f398486af6705225e3b1ff6' }, h("th", { key: 'a645308fe0a79ace11622db667f60f56fa958997', class: "text-center" }, "Date"), h("th", { key: '70f0c9e28b62d66985cd512bec93390409d02854', class: "text-center" }, "Units booked"), h("th", { key: 'f3dd33c00814c6870190dd6491d639f2885c6e82', class: "text-center" }, "Total guests"), h("th", { key: '69d48667dd04a34b6b60fa6ece3da46bc496b6ef', class: "text-right" }, h("ir-tooltip", { key: '3f7a9781cd8f4c61506389a9db6317efd3c9432b', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '64a9d5f17e5f9cb5895c34664b9aea3f93bb221e', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'be827b9d3b2352320b05a508b8bd84dd71e22513', class: "text-right" }, "Rooms revenue"), h("th", { key: '1ed0ec580c10f75ea66fe90695cd6e17df71f56f', class: "" }, "Occupancy"))), h("tbody", { key: '5e3ad72bfb117932bda1da85af72fc8eda3a1e87' }, this.reports.length === 0 && (h("tr", { key: '459f7b46ec32c394d30cf420cab3fbf56b0f1fc7' }, h("td", { key: '92293126e0b33c6830c6ae780a5b83b17d10b428', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '5867ce24675a7a569bc981a74d4adac71c5965c9' }, h("tr", { key: '7afac06e2911c6c70752d6fa22cfcf86be3ef880' }, h("td", { key: 'cecf6b5c210deb8945ab9d38e9329269af698cbb', colSpan: 5 }), h("td", { key: 'a7b53732c5fd1400686b58729f7b2ef682dfd5cb', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '8237aa437de8270bde7ece81a2c40973d33ade1a', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '5c6e1368086883a016b434c937f57d08917e940a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'cd55c46bfe461844fde9bff685b2f63c7999cd7d', class: "legend bg-primary" }), h("p", { key: '985d38c2d3034ac3299f7d50d00681547899f927', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'd40965b9f838bbe030151d6371bb928d38e2b57e', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'e249adf557f05d2f962cc7dfb65b7d1c71c9c077', class: "legend secondary" }), h("p", { key: '2dfbcf07fdee28fb653186cc71036cdb4e9fb237', class: "p-0 m-0" }, "Previous year")))))))));
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
