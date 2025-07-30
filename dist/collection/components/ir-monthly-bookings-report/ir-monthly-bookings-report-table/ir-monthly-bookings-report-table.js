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
        return (h(Host, { key: '19a2f0917db0e727629a8be5f037e9325f44c941', class: 'card p-1  table-container table-responsive' }, h("table", { key: '2ca5b2ac503e9d9475a605cccfaffbe8c2a09b43', class: "table" }, h("thead", { key: '1be7a210db90cbad9448451843b5851e71308ab6', class: "table-header" }, h("tr", { key: 'c1a686f51d5b2398b69db12dcd4832cdc702e241' }, h("th", { key: '3c554d9e1cf50a13f0f3b4127da53ee91dc98295', class: "text-center" }, "Date"), h("th", { key: 'c3640a8c3647c69d714bf535f12a7845f799b339', class: "text-center" }, "Units booked"), h("th", { key: '600f4314898a36c0baf30033ef59274dc84872d9', class: "text-center" }, "Total guests"), h("th", { key: '1b44da257d1db52d96276d862971c05c1fa61733', class: "text-right" }, h("ir-tooltip", { key: '80bd0e979cf34bf95bfb8efc15649495841dc1d3', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'c618d47c494a2449957dc8b08c47a39c0a5e6f1c', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '848415db4bcd5871574a59af4a7cab4c08a93e2b', class: "text-right" }, "Rooms revenue"), h("th", { key: '9d6a2a04e07a41d9b7f1d57b3687103680265701', class: "" }, "Occupancy"))), h("tbody", { key: '85dea415bf253fdc09b94f9b456c3b65aed635c9' }, this.reports.length === 0 && (h("tr", { key: 'f89129e4878174d7d523e8bf24077b9333ac7d42' }, h("td", { key: '8e53c3c5bc20c900a4b50172fb73c58cee5d093c', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '41e928364b871c37518329ac17efeeb4e871767c' }, h("tr", { key: '7040af861c965e8198502d70bb11d8d6ae5f00e8' }, h("td", { key: 'ccb1ce10ed8d502f77113fdfe4b8b58ecf88a0d5', colSpan: 5 }), h("td", { key: 'b92c6872b0d2f136f39375c1b5bc7dc718498056', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '14dbb34aaa33a5198b831d025bf7c27ba6f288c2', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '6682ec7594efed2a85db2323508b9a9c546d03c0', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '6b8ed88391d6fcd2f71d1108ccb519806c32a756', class: "legend bg-primary" }), h("p", { key: '30c515d9e5cb15f008e4f6377e5be92dc413de4e', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'cf884301783d66b85591bcc86cea2d78bd6db25f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'fd170a6a9b0629b6ac1bbb7fba9f62496653594b', class: "legend secondary" }), h("p", { key: 'a984872ff233c1b8a3eafdd85eef739edfa32ad0', class: "p-0 m-0" }, "Previous year")))))))));
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
