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
        return (h(Host, { key: '7e7732dcadc30c45a83b44056510be48b39ed1b2', class: 'card p-1  table-container table-responsive' }, h("table", { key: '46040ebc3bf08ac7cdd72977e48c032d48a7dd05', class: "table" }, h("thead", { key: '29eac7d752f0dedc21e987329eccdedbee7e26ef', class: "table-header" }, h("tr", { key: '98ffcb7bc2a5891b7e7ddcc91eccc75bd0f78eaa' }, h("th", { key: '2b25dce97b5ce31bb58dca735ee014bddd6d03be', class: "text-center" }, "Date"), h("th", { key: '8df0e9360ccb994c3fc745d466d5186e40d417e8', class: "text-center" }, "Units booked"), h("th", { key: '43f1b7063cd03b71ff76b4358b3a480def90ef89', class: "text-center" }, "Total guests"), h("th", { key: '5986d68c6f87237d529fcf7684e9adb1738f4d8d', class: "text-right" }, h("ir-tooltip", { key: 'f76ac0d39f0d2049f4d5fe94028637c1ee3c764f', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '7b07a23c6a811d29744a9362620b0e4c40a5049e', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'e73571ee5bcf6b5b6957428eaea0ddd1b1f13c81', class: "text-right" }, "Rooms revenue"), h("th", { key: 'd3273a23e4c81a7ea69a5a00879067436fbc5b36', class: "" }, "Occupancy"))), h("tbody", { key: '9b76a71fb385ed23a9cf7a18f0d62ea769ce9358' }, this.reports.length === 0 && (h("tr", { key: '9a5232b95374fd249cac70caaba52c6ae586dd39' }, h("td", { key: '58078a8c6fbd4568d71996522229ded0966f7b2b', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'd480f78c74cd999423479021eb0e203fa43a5985' }, h("tr", { key: '129d0769135e0bd8fa003a5050f5e1c87a003f44' }, h("td", { key: '2a84d23a5adbe7ca23f5263fe5aecd1973509fff', colSpan: 5 }), h("td", { key: '27d28f8f8bd778415b92dddd5f9fcc8e916f5446', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'ef1c35e6062682e8f36e7d637490bbdc75a8f6bb', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'd9a373bb975c9181f1ab618caee8665214ce2a05', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'ddcbfec33f437d63bb64302a0499f3a71df3cc44', class: "legend bg-primary" }), h("p", { key: 'e4df893fbcfdff11bc09df4282b2556ac159b3f8', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'daffe1039e44438d49da9ad9af6a43d3f5b86d52', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'df69723031f1a07518fef5816226ee1102dce0a2', class: "legend secondary" }), h("p", { key: '438bf6f3bff97505bec2f29797792fb4981f080a', class: "p-0 m-0" }, "Previous year")))))))));
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
