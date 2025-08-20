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
        return (h(Host, { key: '492acd8de12cd334a47edd94b6abfb7d68bf35ea', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'ea8ecdb4592e4019d2351805893e8b40c964fd55', class: "table" }, h("thead", { key: '6e2aca14e8988c1d06b351735f03f9fc9c330471', class: "table-header" }, h("tr", { key: '315bb235688003b053e91c2ae8af63c78fa34a9a' }, h("th", { key: '5fdfdc1dc05bb1023542baa8853e8921900ea1c8', class: "text-center" }, "Date"), h("th", { key: '690d4790f527d773a36b07d4c226c8210692f4e6', class: "text-center" }, "Units booked"), h("th", { key: 'b7587b254b7e23a908671660708f9b9063e24bab', class: "text-center" }, "Total guests"), h("th", { key: 'c385ec94819292446b927fef2fb0f908b74c4568', class: "text-right" }, h("ir-tooltip", { key: '87895e7fa53c12385b4cdaae405b2d587dfe9488', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'adfe7ab2c5bf583909128565b1d8a4176a3bf1d6', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'df193c5ce0663aaa839b5a05e16b9ac76d3dac78', class: "text-right" }, "Rooms revenue"), h("th", { key: '841e6220ee25bd60c440069c89d14eca0105be1b', class: "" }, "Occupancy"))), h("tbody", { key: 'e592e1784643494c52bbcc3e4934c5c4a48a8bcf' }, this.reports.length === 0 && (h("tr", { key: '46027a526eef8b37c9a3807d159b9e03be81a390' }, h("td", { key: '16214b21bb7827430f2b706e44732b00f1cb708d', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'f9660ff25d32e2cbd8fbd46559080838c068d321' }, h("tr", { key: '3633471e1ab7c32fa68cb3a09161bce2818080cd' }, h("td", { key: 'b61b01b3002cd9918ab6166e2af5239b7c8498bb', colSpan: 5 }), h("td", { key: '734f5fb1c8a24531a52fa446684ae1a8b24f0159', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '4f8dfc6a949be95d6371a514e9ab9f88805135c9', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'bf3a7047a86fb8c1691252262fef255839fcaebf', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '9ebe7194c4cb599b781ba5b3ff83dc6306ee5f63', class: "legend bg-primary" }), h("p", { key: 'f1bab015eb19a1f0be8073073175d500bef0c8cc', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '7957ffc7be161bd3b3b95575fed62dfcf1bfad0d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '5ba33fb9ad777e6a80f8f67c65002e5d690b3170', class: "legend secondary" }), h("p", { key: 'e874047d03c3838fd1e0e5e18544ac9ed892d8d2', class: "p-0 m-0" }, "Previous year")))))))));
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
