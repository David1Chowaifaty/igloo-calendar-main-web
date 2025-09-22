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
        return (h(Host, { key: '056a863671da2aa34fdaf613adcdbf9a60ad2a4e', class: 'card p-1  table-container table-responsive' }, h("table", { key: '5ff14f51b640d6b5ee63fc303d4405056bddbced', class: "table" }, h("thead", { key: '98d7953cb524b84c49d95297c5763a946a3a4827', class: "table-header" }, h("tr", { key: '7910220b5274e99bf741f95ee274b4cb1c2dced8' }, h("th", { key: '43516476a75a1744562379547cc324ebf4a0c3f8', class: "text-center" }, "Date"), h("th", { key: 'cd32cccaaec62d5f932d4df36d0a9d48472b96d5', class: "text-center" }, "Units booked"), h("th", { key: '03c829455295ad61dedc28c54c8686392b75f207', class: "text-center" }, "Total guests"), h("th", { key: '6f3dbd166be165ee86ad79310055bfc34a166de1', class: "text-right" }, h("ir-tooltip", { key: '633782579a4fc66bb86822c2a29c0f90ae566f87', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'd21806d325a21e9982cc9cc181f7fb1c5963e013', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '26409948dd8997214a4a69a03ec82e32b82231f1', class: "text-right" }, "Rooms revenue"), h("th", { key: '6e2f8137808cff6fafe52b0aa5c162d836769010', class: "" }, "Occupancy"))), h("tbody", { key: '253152a2e89378e57620ae0415f1ab2a9e2db93e' }, this.reports.length === 0 && (h("tr", { key: 'eaa1f56bd7dcc687d02cf8b06b05baf98774ea8b' }, h("td", { key: '874c2d2f7b920e422366c97286585702fbae3e59', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'd2f6055e9d1fb2e537d973a364b8552a6c593fa9' }, h("tr", { key: '13674c248adfd48a4c4a29de34d1f4e51e68c229' }, h("td", { key: 'eb512891b781e323be6eac37b48e9edab9b4a26c', colSpan: 5 }), h("td", { key: '8b0b2cf8a767a78cbdb9b5314e3900874d92b20f', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'c79fd9f231c2dd2cb7359ce306fc764f6729f3b7', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '23efc2fc2456cab66cd506761fdd7971a4f7652f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'e87e8a2c855791f120b25b09e343924353fbb771', class: "legend bg-primary" }), h("p", { key: 'a36b4a27ad5e016f6c2437cdb69398321b7b807f', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '0cf8127f59f21f615fed5ae6b679b976a24114ab', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'e2e179aea0761cb56728d5eb80978534ab4198f9', class: "legend secondary" }), h("p", { key: '70c10305f6ae746d8b875436f01cbd25692786d2', class: "p-0 m-0" }, "Previous year")))))))));
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
