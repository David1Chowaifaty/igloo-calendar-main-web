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
        return (h(Host, { key: '63365dccd16ba6471017779fdf40a08ec07ba2df', class: 'card p-1  table-container table-responsive' }, h("table", { key: '608438dea7b2917395a1c765b4dc957692083a12', class: "table" }, h("thead", { key: '170a1014a9bcb79b16ce36e840d032a5db27eb50', class: "table-header" }, h("tr", { key: '964560f9237a87f0adca29a17711aa6fc522cac1' }, h("th", { key: 'dcffd4a68ede0de9c1f694aeafeee42b6757d688', class: "text-center" }, "Date"), h("th", { key: '4303b4d9ad827a524eee7c247ad4f94985465d18', class: "text-center" }, "Units booked"), h("th", { key: '7f3d8475a063c08bd7be8a1478fddcfa92b24da0', class: "text-center" }, "Total guests"), h("th", { key: 'f7acf2d104af99c9537c4e8faabc1bf062986c08', class: "text-right" }, h("ir-tooltip", { key: '408c60507996c6ff5bbf14523f660ddd2ca916c1', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '227e6d8a599f13663c49e8dc3d0748f1167d2a1e', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '7f24bc7a59174fdbd6a89812173cbb8f4d7a8480', class: "text-right" }, "Rooms revenue"), h("th", { key: '916f63bf172a26d69dc58b3305c12c8728a6c57e', class: "" }, "Occupancy"))), h("tbody", { key: '409960d6d290afa1fbd3d2589dad1790e3bc937b' }, this.reports.length === 0 && (h("tr", { key: '5a9baf6acde0a7ef63944f63db31c3bed0a7cd17' }, h("td", { key: 'dae5c911a142df0848e589c901f320fcd0c03d72', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '16dbd558b738123adce829fc4e832fd566402bf8' }, h("tr", { key: '41bcc7a05124ea4ec434ff34a231d0d72caccd96' }, h("td", { key: '6cb98e8d25700bb791c5d0b2f4281144c7bd452c', colSpan: 5 }), h("td", { key: 'd286677f1c0d00bbf7dba091fe677ee0a5484b23', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '9f75f6e59dfad351bd6c1339f62487bd2f54373f', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '237b0feebf2b7bd63c8c65142e60fdc3e66993b0', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '30dc6af074fc6528c7eaaddaf51e2810c978fa2b', class: "legend bg-primary" }), h("p", { key: 'a7b6abb99ceaaead58a7e58124a4573eb2e1aeed', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '76db56e0cf638868cbdf131cbe2393d8fd2e95f8', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '050679bddd5fae34c291340435603ef65a0a0e84', class: "legend secondary" }), h("p", { key: '3544e73ddcec523fe7fd80b236c3448660976c2b', class: "p-0 m-0" }, "Previous year")))))))));
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
