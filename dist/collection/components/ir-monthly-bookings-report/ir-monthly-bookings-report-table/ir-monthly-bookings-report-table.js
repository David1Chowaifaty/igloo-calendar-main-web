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
        return (h(Host, { key: 'b87ba435b846f183003bb81ecdf80e311a8d38c5', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'd52f8aa212110cad0c4eeae4469482fdbe9a403f', class: "table" }, h("thead", { key: '913a33edd2a82c890d196a422e8062242e5b5851', class: "table-header" }, h("tr", { key: 'b0e67189eaf3243804b61a7de8dd569f809bcbc7' }, h("th", { key: '92b87930e4a670ef2f5b18471241aaf0429cdc91', class: "text-center" }, "Date"), h("th", { key: 'e8753c959382943d20ee8c6aa97e5b3e8b365919', class: "text-center" }, "Units booked"), h("th", { key: 'b353e62c93c04de51a6e30f1e9c77bc41c900cb9', class: "text-center" }, "Total guests"), h("th", { key: '3dea3acb46091b0033bb591d25f6399ca3a922e3', class: "text-right" }, h("ir-tooltip", { key: '66c2c7a3218af6379c2f023194c487e1e985c68b', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'bf5dbc195d7fbdfbd97878dd6366821151896d15', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '2b96602df3429d3dfe3d8ce1f4767aab2e3d7b42', class: "text-right" }, "Rooms revenue"), h("th", { key: 'dcd26d160699f14ec29e97307b4007e112848249', class: "" }, "Occupancy"))), h("tbody", { key: '7a6930fb8d2d45c4d84efa7761ec1bfe8b414953' }, this.reports.length === 0 && (h("tr", { key: 'abf80584842dd6df90be0ae113c9c5a863877c9f' }, h("td", { key: '98b6847143473f9ec94cdcafbd802e305bbf4f33', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'da2cc0fc8af6678b123a32d16cd9efbe4de8918f' }, h("tr", { key: '689e6d9384442b68e8d2ec10dd6fcf2779610889' }, h("td", { key: '2ef777f1409239550adde7a83ee9b2acafd7ab3c', colSpan: 5 }), h("td", { key: 'e31094cf8f3c9591f8beb6297f5716f79810c1e6', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'facd336bc9cad1f20472f8fe0c9744590baeeff6', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '492e743f67da6c8e5311b54d350eed24cb68c213', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '5fed244a954761871a726c6fa3ed01c9137ee451', class: "legend bg-primary" }), h("p", { key: 'b01d79ff05f7a1adc0c6b49f2f5e0093a5895fff', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '086c34fcaa9a861edbd0b42ecad19eb63574aa2f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '68bc7184ea78cb7d5cf4fbc03a3ec3a38d4d41d9', class: "legend secondary" }), h("p", { key: '44771f073d81a3bb29878be84961d64f365aaefd', class: "p-0 m-0" }, "Previous year")))))))));
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
