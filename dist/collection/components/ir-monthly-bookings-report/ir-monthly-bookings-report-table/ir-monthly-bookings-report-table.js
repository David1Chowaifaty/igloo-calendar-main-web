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
        return (h(Host, { key: '28ffd942b73c33c96eccec870cdea9eeeb80d495', class: 'card p-1  table-container table-responsive' }, h("table", { key: '266abc231cc487d242a2b37a5f0dfe07608a4360', class: "table" }, h("thead", { key: '9a3414f67c8fb0286d6a77cdc2d1922601d47c70', class: "table-header" }, h("tr", { key: '3d50a056f37627bfc07ff46bb549a712435ca4a9' }, h("th", { key: '57654962dd54aeb4f78291dbd85fb3084c05c9da', class: "text-center" }, "Date"), h("th", { key: 'a1b6e4761713b4250f0af72ac0d5ac9fc03d11be', class: "text-center" }, "Units booked"), h("th", { key: 'b70036c2a1d81d49cd390be72000714f2d2bcb97', class: "text-center" }, "Total guests"), h("th", { key: '13bd9937c1e9ff227d335895b8b03d5361931377', class: "text-right" }, h("ir-tooltip", { key: '345573351a0e961ed57b29594f13b48f851cdc51', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'dfdb2647a9b33173d5464ef50f8f2e5ddca00543', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'cae870e0081275487d10a557686c70971c96fc0a', class: "text-right" }, "Rooms revenue"), h("th", { key: '8aa426f3e449e38c273c45f19672eb968df45ee9', class: "" }, "Occupancy"))), h("tbody", { key: '17490e7127f38cfd8d4bfffb2cec6de275f05157' }, this.reports.length === 0 && (h("tr", { key: '74c662b23354a71b3e5116a636654065288d3f9e' }, h("td", { key: '3eac5fc182a0a6dc01d23dec10f1c59bf764c557', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'f4682a5ffa649df58b43c992b55ddc7d2a013ce5' }, h("tr", { key: '4019cacec78f7f5c461964c810fd7aa9e463b8dc' }, h("td", { key: 'ea8ae9adeab078179c69d4693929845575b3fe56', colSpan: 5 }), h("td", { key: '372e0548ff14674262118fd371ffb6539373eeda', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'bd531524b648f41ddf564f08b5c001186c00180f', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'c6f6f4fdfcb37b358021d30974447d70d349d603', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '0d23cd6a8c233c030b6572d27a8a0a848310a209', class: "legend bg-primary" }), h("p", { key: '08cc7de25f15f1fa4b98b1ae36e0918c487078e0', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '6616100f590df3842c5f07c143c264eaedf1efdd', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'd0bffabb50c3bd7a3e8efba583ce93c9621a976d', class: "legend secondary" }), h("p", { key: 'fbdfb4d932493668f850501491229c1114efffa6', class: "p-0 m-0" }, "Previous year")))))))));
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
