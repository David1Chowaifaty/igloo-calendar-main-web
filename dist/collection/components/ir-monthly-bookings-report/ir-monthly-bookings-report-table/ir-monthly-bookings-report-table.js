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
        return (h(Host, { key: '2150d16bc94a388ab10290d10018c95f3d34a7fa', class: 'card p-1  table-container table-responsive' }, h("table", { key: '2c56c02dc437fe130adbe64b70591c8be001d679', class: "table" }, h("thead", { key: 'd0c653c30574001a05d03dc4abd934427cf63bd0', class: "table-header" }, h("tr", { key: '5f7a355db4633f9f934c3c4f8221455da8adea5a' }, h("th", { key: 'fbe3e5d9c8aa701a26a33d187968e4a7836f113b', class: "text-center" }, "Date"), h("th", { key: 'ed69774340f0d69e3620c9f635efc0394d5c5e99', class: "text-center" }, "Units booked"), h("th", { key: '7e372c07f4234b5d5833f1e71025c334691b09ee', class: "text-center" }, "Total guests"), h("th", { key: '37cfa69ae012e11dfd2643bb95cad352767cb73a', class: "text-right" }, h("ir-tooltip", { key: '3608593126a6519f82a681ff1abcb859e8a1c536', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '90c09fbba9d4b9705631541cc80f92e2524e199c', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '919b4cda6bc3bbfdd5087b2cba543f605d18660a', class: "text-right" }, "Rooms revenue"), h("th", { key: 'f7cf1efda2f25320d31d55e0a57502f4a804a666', class: "" }, "Occupancy"))), h("tbody", { key: '7a410fcf7c74873c226b959ecf2ace3772bec693' }, this.reports.length === 0 && (h("tr", { key: 'f8bc6ffbca11e1ad171cde97c91d69c84dc62f02' }, h("td", { key: 'e0920156f617b6b275f14c82bccc1dab969cdba5', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '8a7766275362822fd884ef7dfeeee1b41ebaf0b4' }, h("tr", { key: '3c94ef51c2f521ce974aa1b036ee5f0128104997' }, h("td", { key: 'e4f3b55ecb2645980b99ef20106e6271699b7deb', colSpan: 5 }), h("td", { key: '4c861042b9b246e06306dfaff7f40692c89a0cc2', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'a59f089125231870a9c8725731d106c55ddf1de6', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'fd7b2773768cb2d17344743fc892aaa4fe8c340d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '3bdba1c13ce022dd77ba8690ecf6c6f65aec1e3d', class: "legend bg-primary" }), h("p", { key: '3b578a6c99b85947f9695c1b95ee83341385d7ba', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'b6f37c8146993d32a17a8a2410a6fa699c4c9082', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '41c3af56c26ebffaf4a854cb38a858d2bdfe9d29', class: "legend secondary" }), h("p", { key: 'c4c3d342d7b680207ddcfae6a0a3dbe98b3595ad', class: "p-0 m-0" }, "Previous year")))))))));
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
