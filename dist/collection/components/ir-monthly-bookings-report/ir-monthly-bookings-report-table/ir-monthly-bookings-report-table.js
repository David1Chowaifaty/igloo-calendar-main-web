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
        return (h(Host, { key: '5d28f4588e84cae0a54d5f6f7f988bb55bdfe6d0', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'b73803f283a04fbed93d41cb543b2712be7bd4be', class: "table" }, h("thead", { key: '969fc56d2edbb315d5e0887866984b477d20c57c', class: "table-header" }, h("tr", { key: 'ad31b631ff169157b1ffee7b6b1c3f32a05907f5' }, h("th", { key: '988d6e35ce5f3024b20a9ee692a0f851d846ebba', class: "text-center" }, "Date"), h("th", { key: 'e0cc1196c3a80d783294a8bb15b7b63f3262a840', class: "text-center" }, "Units booked"), h("th", { key: 'bc90fcd1b88528680e2eaf1cc4bab545ff7d872d', class: "text-center" }, "Total guests"), h("th", { key: 'ad81db42560454919d90df50c994082fe10f1d6d', class: "text-right" }, h("ir-tooltip", { key: '971d83e250410b2af1772cb8cc6b4b7639382ec0', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '0b65596608a0bbb2ee81daed0deb546530030804', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'ab1a80d16bd738f7628c0310b16e0c38282cb83e', class: "text-right" }, "Rooms revenue"), h("th", { key: '911805790fbb8c0f54dbbd16853d6a049c2ef400', class: "" }, "Occupancy"))), h("tbody", { key: '04935916b94e97b176072b596cc7db50dc6b3bb9' }, this.reports.length === 0 && (h("tr", { key: 'bb3b45f5e8513d7ae5df9953f213aa6ebaac727d' }, h("td", { key: 'a7e4ed48c64eb641891b6406535cc3705c65acac', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '114176866893873fef344f894b551c4458f34af7' }, h("tr", { key: 'cdaa3926ecfa8939bd2749e4d09f9cd18d25f118' }, h("td", { key: 'db49a2240150de48158b1dda5d54864dd60d01ac', colSpan: 5 }), h("td", { key: 'a4d5487ed24e383945f46103167e006d39926001', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'adec9b803227b5d8d6945e9f5407e703ef6a6851', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'b0433374a925311e92c2cceca63a016ef9faa3d5', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '9057f0e625fa6681fbc8fef2f0e5c7a18766329f', class: "legend bg-primary" }), h("p", { key: 'b09e50ca4a7f8a8df72904ed55d5a5f5cce74314', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'b38179c6fcee4aede6271b0a39baa5a35746f063', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '94af35b462bcae18d75524e9d9ee926ab7cf2858', class: "legend secondary" }), h("p", { key: 'dfd3c9c4957c92b8a6c2b596f1037b4ae85734ba', class: "p-0 m-0" }, "Previous year")))))))));
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
