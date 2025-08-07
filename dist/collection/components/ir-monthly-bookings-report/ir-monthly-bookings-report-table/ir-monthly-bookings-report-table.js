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
        return (h(Host, { key: '5fa2dbb8e1c12f77c9b29ec403047b9c90ba06b3', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'ac3e61c51ee896d1249501ed0ff6b1320f006860', class: "table" }, h("thead", { key: '38319a87ad0db7c2b984f6b9b575f11a02f804b9', class: "table-header" }, h("tr", { key: '71da74e6d07a46310ccd9d1334b0db93d8083da9' }, h("th", { key: '5eb5d8dc6a9ea98dfd31fe749de216ba0819b4e2', class: "text-center" }, "Date"), h("th", { key: '1d7af2871e50465bca91561f96e5f78e579fab07', class: "text-center" }, "Units booked"), h("th", { key: '6f3af3795d003d6a234d737b651bdd959f3e28dc', class: "text-center" }, "Total guests"), h("th", { key: '0e4637aadf5c34ed750ec370e993c839fad82249', class: "text-right" }, h("ir-tooltip", { key: 'bd82271dd7ac28af33c5187d838c922ffbe846b7', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '5c5dc2327880088ba738b2696dacc3cace84069c', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '882908c887640fa99b9e922f660b88752856b8d8', class: "text-right" }, "Rooms revenue"), h("th", { key: '67d9233c34df557185635a865adfc173a1aafa06', class: "" }, "Occupancy"))), h("tbody", { key: '79d27762493524bc8288ae7b8ef7022a3fe6f381' }, this.reports.length === 0 && (h("tr", { key: 'cb70b96ee67836895b74524b7395b1f4edec77a3' }, h("td", { key: 'c3e7a056dacd2a6402b5e36766daee089ee5613a', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '57768623f9c87a02c5aeb27ba618efdf008bb779' }, h("tr", { key: '091c9f32e7aff57c0fff7553f75e8e432b548b70' }, h("td", { key: '3a2cb25827716cbb679d1c7ce5d173baa4320d97', colSpan: 5 }), h("td", { key: 'f6b15f6742e8ec9cf214778ad08de07c25d1f7d2', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '73d049d3119f15ba2d152aef6a2e5614e2fb1f2d', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'cd7628c0790d1040f2fed5e63d70521693575202', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '1fbb131b86ad762e4d6f21be11ea9b335ee12b58', class: "legend bg-primary" }), h("p", { key: 'b5fbf53b3f5e3214f780088482127294bf47b7ae', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'b4b931066912272e99bf18ac9c1a4399f0365733', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '41a758f65e34a9de7136b8cb0957d4b5f94d4034', class: "legend secondary" }), h("p", { key: '50ef8672db08e78e8f998f832e9c16b42755e9d5', class: "p-0 m-0" }, "Previous year")))))))));
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
