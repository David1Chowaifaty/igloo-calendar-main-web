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
        return (h(Host, { key: 'bc2a498c70c62f64360be18e33a2c073414512d9', class: 'card p-1  table-container table-responsive' }, h("table", { key: '22772e97904737d315f2c3637e5af011ced02ee9', class: "table" }, h("thead", { key: 'c22dc74f43ec032f1cfc374d5fa40276169f9294', class: "table-header" }, h("tr", { key: 'b033be3a7850d6d5fcace2da899550ea36f32804' }, h("th", { key: 'cdd1d4ab8da0ac8777fbb90f47adc1e739c4fbd7', class: "text-center" }, "Date"), h("th", { key: '810830868cb2b93eef3d2e5affacf84c15df8fb5', class: "text-center" }, "Units booked"), h("th", { key: '2dfd23af97bf49c6a5444d9fdc3877c744a65662', class: "text-center" }, "Total guests"), h("th", { key: '120bbd832fe526644d96ad2c100d04f36be8f6ab', class: "text-right" }, h("ir-tooltip", { key: 'b004502f06c422c1e9086ad295b2f3a372c29b99', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '0bcf188b514ca76cb8d2a118bc137a7d5e6844e5', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '8ba865ca5c66414ffd0f0f0111ff8fcd1742281a', class: "text-right" }, "Rooms revenue"), h("th", { key: 'f99059a449d17b455cfd37a1094d72b1b841df51', class: "" }, "Occupancy"))), h("tbody", { key: '179278d2afbeed4dc2e4139ddf8836601ff3dfe9' }, this.reports.length === 0 && (h("tr", { key: 'ce19826c8c5b1e78120cef81cff0be399c2a59b5' }, h("td", { key: '395a85354475d6be16599046a00240de76a68035', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'a1d980f19760bc5fb935f86a8c83ebc1e2b3ec8b' }, h("tr", { key: '51b971d5726c904285aa84c0a5f9dc4f4156642d' }, h("td", { key: '8fdc297166a209f67734b4d529512e0f50d583ad', colSpan: 5 }), h("td", { key: 'a22d39c10ba8770a67cef66e3113c709c488c5af', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '7f7657236d9b0b03051f3eb6c0d986ee1cf4d35a', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '0650d0dcc95561102b2fbcf139ee6421f120c94a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '55177664538b1e1b85ed05a4896ece30cd219d6e', class: "legend bg-primary" }), h("p", { key: 'bf0498b2188ebdd30c5c518d52b6c79e0f346c16', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '24dcc4b20ed6b17f9c225e441cf1631c9a53bf59', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '6a98c081249647412f0fc9119965f1d02a7ffc0b', class: "legend secondary" }), h("p", { key: '0e3d063a26e1f4d6f9a218072e3245eadc69cf99', class: "p-0 m-0" }, "Previous year")))))))));
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
