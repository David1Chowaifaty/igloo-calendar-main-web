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
        return (h(Host, { key: '127d1a30422672743a817f3e82d2d326ea3577b7', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'f8d572d15359fbe9938df3de605e1b5b67683801', class: "table" }, h("thead", { key: '427c70e582f01515def46cec94221a97e4529d6a', class: "table-header" }, h("tr", { key: '615b3591d78bcc49768518fc306a9784e48aa2f7' }, h("th", { key: '5fd8453d386cd525555d3d52eba0278c5bab36b1', class: "text-center" }, "Date"), h("th", { key: '2e6cfb19e091dd9954ed35240f78d7a3fd81c407', class: "text-center" }, "Units booked"), h("th", { key: '6ef3cdddb3c1ae371a9b05343b42ff71c660885b', class: "text-center" }, "Total guests"), h("th", { key: 'a9324371016587e7959c876f081ccc737b382dc9', class: "text-right" }, h("ir-tooltip", { key: 'e0622a846543fd29f0664cf33ee0aadc69791fd1', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '4cc8e4294e8151175af3805fc6248480889ced0d', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '97272cd1dda83377581ac86eee1999547c2f508f', class: "text-right" }, "Rooms revenue"), h("th", { key: 'c80acc34bbe474a105f576fff153a053e3a3be38', class: "" }, "Occupancy"))), h("tbody", { key: '8e8b23b7656f92dc931741b1dae857cbb2333dc2' }, this.reports.length === 0 && (h("tr", { key: '458c2444c95b0c9b7fe968fac63d597da5737d93' }, h("td", { key: 'b7662566fa013f6e641ffb8dda32ecb91b3c9241', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'e0ce2903bacc640a84ecb121c21e46f69c525d62' }, h("tr", { key: 'ac221448b557a1002ceb47c1568c6c6e9f12e6ac' }, h("td", { key: 'e61db31b437264ea125a0c0d7dc0e0f8e24c5b6b', colSpan: 5 }), h("td", { key: '42d102b2f73eb60af44645270f24e075b8efd0d1', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '21bd89b258193e02cc13738d9c88d7e9ba2d74d1', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'b0dc326fb94527fb58eb23a822c2fab214e8b491', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '2433c095c989ca2d4d78b2362f9b82dc633ac7d8', class: "legend bg-primary" }), h("p", { key: '6d276b088271b776c5d30ef1479e76257c815673', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'ae59aae358f3190519dd299992f844c81e2b49e2', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b3e8a740e8b7f54fa817df781379fae51111f467', class: "legend secondary" }), h("p", { key: '4d1b0ae6440657ad39fb4891f9e95c5a4597f538', class: "p-0 m-0" }, "Previous year")))))))));
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
