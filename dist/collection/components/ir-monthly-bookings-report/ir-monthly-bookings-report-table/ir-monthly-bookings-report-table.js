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
        return (h(Host, { key: '24f58860c9bcb42f69e82ec7582bc2ede7f568b8', class: 'card p-1  table-container table-responsive' }, h("table", { key: '118d331797be971d88176affe083b185804e3d39', class: "table" }, h("thead", { key: 'c65ad27a5f4b68b7ddd08347e86f96e09a794f42', class: "table-header" }, h("tr", { key: '839ffc53fd7994eeb163fa8b6e5f2c0b0ed5a9fd' }, h("th", { key: '4afa7783b9a5b1c1bb8a694d5732e24d15b924ca', class: "text-center" }, "Date"), h("th", { key: '0b1ff691fccb3330eb3047514aaead43383cc45a', class: "text-center" }, "Units booked"), h("th", { key: '7a00feef9472d6b0dca541c2cd02d41305ab8971', class: "text-center" }, "Total guests"), h("th", { key: '8110b0e74fe320726981ded5fe14792a3ab76ba6', class: "text-right" }, h("ir-tooltip", { key: 'c492e8973f19659c6c13daefaa7a8658dcf87fc0', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '70a4684ef5b954b0efef4b6ad37c5be6a8782127', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '7c47713640011398811bd3bb7b1680ed70aa1003', class: "text-right" }, "Rooms revenue"), h("th", { key: '665a005b256864cc1f06ee7376f0ea7dc4a72c7b', class: "" }, "Occupancy"))), h("tbody", { key: '0754b469103c62eda279f41a069f37358d7e2f9a' }, this.reports.length === 0 && (h("tr", { key: 'cf4c61a894569435fbd8425814638d1bf9bf741d' }, h("td", { key: '3198d72c3b8a858a0a3c9389a7c54f353025ffde', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '9dfc3b921f2e4beb3af2a22b4bedff476646dd43' }, h("tr", { key: 'b270ad39912ae55689bb1b5fb43992df1cb8c419' }, h("td", { key: 'bbae1532deaaa85259cf63e1f9f58f7918ee48db', colSpan: 5 }), h("td", { key: 'b7402e1860a2d43d1aa456f11a57150a6e6a860a', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '9d421c82a6701224605fb712199a0fb9603238e0', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '94695366d6ed5c163e81cc767815c4d06714bee1', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b72cbce1b7b8f22af5de70b1e7d842c939582cca', class: "legend bg-primary" }), h("p", { key: '971bdab7b9d3a609669f1450ecdc809d91831483', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '491568da3b46d67e0e7def7656dc6df74c601cb5', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '49f03739e15d4fa9a866db23f2fa4bac1bc2540f', class: "legend secondary" }), h("p", { key: 'd84f371a0825240b1ab1af01800a01b52b7e3a80', class: "p-0 m-0" }, "Previous year")))))))));
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
