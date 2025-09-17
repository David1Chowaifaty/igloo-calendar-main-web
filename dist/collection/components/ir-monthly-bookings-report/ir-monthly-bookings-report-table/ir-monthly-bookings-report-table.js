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
        return (h(Host, { key: '9290f8f4d1b1721eb1e7dec9056880b9b85092c8', class: 'card p-1  table-container table-responsive' }, h("table", { key: '7975dcf82a6e4f32381eaf918e1061d1c3afc8e7', class: "table" }, h("thead", { key: 'b12c527adedaa7a4ed73233a863c7af7a526694c', class: "table-header" }, h("tr", { key: '2d66aa943199814e18959b34f3b284b7a14e0284' }, h("th", { key: '394bbabebc927d1daaeed45ca51b006341ece080', class: "text-center" }, "Date"), h("th", { key: '5d62cb98119b61919eac098e4189358d5c37295c', class: "text-center" }, "Units booked"), h("th", { key: '4fe3e03b174eb84bec0996c24c395f5ad4ec9b3b', class: "text-center" }, "Total guests"), h("th", { key: 'cdf3cfce139d22334bc3817a98f4375a4e6023b2', class: "text-right" }, h("ir-tooltip", { key: '4d9ee28a5a2574eb9dd234b8cbb5660cb15cf3e8', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '74dece8bcff6e1a70ecc23cb5ef9cee41d081bff', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'fdc7ec208cf42399afc7e2d665411a5076339cef', class: "text-right" }, "Rooms revenue"), h("th", { key: '2777821594e045d45dd93770b7f86ac6fc1a4ffc', class: "" }, "Occupancy"))), h("tbody", { key: '2625ab373b63b0019171dad0b55dc1f6d84d02d3' }, this.reports.length === 0 && (h("tr", { key: '1d84e4f3e719dbfe15377061049779d1da8ab06f' }, h("td", { key: '95c255c95b80c6a27fb80c2fd3d41b7ba822020e', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '22f3bc989dff9a2dcee7251dcf168aee1dfcd310' }, h("tr", { key: '2aae97176c477545d345471a1af074f6de841d11' }, h("td", { key: '0cd17132692718a23c0f8c2ea3ed02e66cd888d3', colSpan: 5 }), h("td", { key: '0238b1171607eae0cb0436aaf29fa97425e5128d', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '265adb5ca8ea514f72ffac4b386200c32bfcfc6b', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'f3dbe02d13585a66b7629d29d8a2fdc1a2f60657', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b932818c29249842a48d8d7d0b050e78f62192f0', class: "legend bg-primary" }), h("p", { key: 'e19949751df120c17ceaaa9258677a33eba7cbf9', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'b980a403f731570d06140add5795b55d68b21560', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'c94ea84d6ec0e05ac244bf7b60d6d030ad553424', class: "legend secondary" }), h("p", { key: 'de009cbd766b43a9abdd6e97ab4efaad61f4b470', class: "p-0 m-0" }, "Previous year")))))))));
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
