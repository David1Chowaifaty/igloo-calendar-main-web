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
        return (h(Host, { key: '55f21a8424b4b337cc7273739c6aa9b2500a5ba2', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'e9663469ad8b70eaeaf1734c7e54c8d6757753c7', class: "table" }, h("thead", { key: '2f82a4a6c13dc2bc4f66cc044f9ea5cf1ab78f4a', class: "table-header" }, h("tr", { key: 'b9ebfb0ffd41013de13ef3bd927bbc874db28597' }, h("th", { key: '37e5c79cf3cb4df4a3ed6c68d6db4574a5d1bf57', class: "text-center" }, "Date"), h("th", { key: '6dfd9ceb98da3e6f421f28384945e38083fa4cb4', class: "text-center" }, "Units booked"), h("th", { key: '3b82858a074c60dc96bf8d830ff069baf921c2f6', class: "text-right" }, "ADR"), h("th", { key: '1ba1b735fd04ec1638807be48106e385a9eda88b', class: "text-right" }, "Room revenue"), h("th", { key: '1883857ad52eb6835343330a018bf39a9225c941', class: "" }, "Occupancy"))), h("tbody", { key: 'a9ce354af3f3ffbee6c1df7538ca10db92f8109c' }, this.reports.length === 0 && (h("tr", { key: '1d54b7a4d39c324d7db623169b79c5cfb36eddd7' }, h("td", { key: 'c6c99bf461b7e14d34d4f91f52a264d7eb4818c0', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.units_booked) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_f = report.last_year) === null || _f === void 0 ? void 0 : _f.units_booked) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '30a232ecfe493f613552b42896b873d8a7d9bca0' }, h("tr", { key: '1ea17f8a6a6a85042c739f853fc4e86cadf8ade6' }, h("td", { key: '9068aa19ca53f89a7d9a47af8cc160ec184c6574', colSpan: 4 }), h("td", { key: 'a52465ab3016d03e9a20124a63087722bedf727f', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '26733f5cb4246b3dd4ef24310f9bc95aa83a349a', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '562cd9ee25d6213de622e17ccf721eaf0679abb5', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'c29e2d50f51a889b06fe729bd19ea63047b6e0ff', class: "legend bg-primary" }), h("p", { key: 'f4c6539483066f2cf9e2da05110d938303c70a26', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'eb2d5d6ccb89b4d805ef165e6bbd7453217e61b1', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'd8f70b6c86e99e7cf851f31f511df57df7e73eb0', class: "legend secondary" }), h("p", { key: 'e0a46062632bb0698f7a015a75a07515dbf1e00f', class: "p-0 m-0" }, "Previous year")))))))));
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
