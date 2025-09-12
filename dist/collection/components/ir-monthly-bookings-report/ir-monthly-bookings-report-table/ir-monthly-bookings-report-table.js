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
        return (h(Host, { key: '6164d20455b9b49db9f4f045baab864606b57b45', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'ce28b962bbbacb2b5977154fbe52690da10ccdf2', class: "table" }, h("thead", { key: 'f77286353d4ac50497046616ab04be4f9958b0a5', class: "table-header" }, h("tr", { key: '98a471f85c410a15480edc791dda95221555b148' }, h("th", { key: '379e04effaf76e1c9025b70f25ef96afdb8494fc', class: "text-center" }, "Date"), h("th", { key: 'a72d6445625d0d71a51595e0e8324222e85e7164', class: "text-center" }, "Units booked"), h("th", { key: '22a711b76738d9230c33fcf462f6fd619b4ba237', class: "text-center" }, "Total guests"), h("th", { key: '1c3b3b8125c3c259fa163692b751137908e77349', class: "text-right" }, h("ir-tooltip", { key: '7f7453c830d618b4dcafda2e1dce7cfa249aaeab', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'de13498447891480094cad63baae0efbdad2095d', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'bb590d13a74bcc6b5d66aac2695b9de8827e637a', class: "text-right" }, "Rooms revenue"), h("th", { key: '6c9ac8d85cf3107416f83e64a6a9a613dac7cfab', class: "" }, "Occupancy"))), h("tbody", { key: '393b84d1b0e61b0d1cc0d5e9f2469b864c7e9497' }, this.reports.length === 0 && (h("tr", { key: 'd94c3d6b275a528f73ab95d5b22aa43c82fbebc9' }, h("td", { key: '7adb8d628365f4e80d36aa80fed0f2a812e3025e', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '24068e3df967c08b37e063c2efc385aeb437c334' }, h("tr", { key: '21b98423dc6f178ca078232943ec83c5d77927be' }, h("td", { key: 'f500ba7206dd4c60c529572d6cfdf1527428b8e1', colSpan: 5 }), h("td", { key: 'a0196063d5ecd563541a1bd5245ea9044aa1c4f0', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'd64bdaee6a8754b66b180bdbc706f736ae2fcc8f', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'fbb1c666fd2caab6ab3ae0d3aa5a2a97b2813a5e', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '0aa3d2ab726a778ec35a2f2fc3528bd0a13b138a', class: "legend bg-primary" }), h("p", { key: 'd04a4ade7821a6d31575c40b9281593fdbbb56ba', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '0643b387df7c332454515cfc1f65bba88480b054', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '52a0499c68dbdbb9501236dc25b1071366f994ae', class: "legend secondary" }), h("p", { key: '31c0b1e20dcf563a78740239c751e809e279cc03', class: "p-0 m-0" }, "Previous year")))))))));
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
