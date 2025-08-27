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
        return (h(Host, { key: '284f3e734a2e77139d1c816da30d139d0bd37679', class: 'card p-1  table-container table-responsive' }, h("table", { key: '46deca1b4cc4c7af9dbb552a0fe14ea97c30fb68', class: "table" }, h("thead", { key: 'd3ab083181914ad2d6058e38ba5a3d16cfb93b65', class: "table-header" }, h("tr", { key: '37dc63ba21a97dd9d4ead523c5c652a83b1c8221' }, h("th", { key: '45e139ff00c40f36c2d8dcc27489993e6ab97bec', class: "text-center" }, "Date"), h("th", { key: '7f63ac2e18eadf77d3049b9278245e5a3338485a', class: "text-center" }, "Units booked"), h("th", { key: '82548a509b2b20f463c6f9f0a4a47308a17f3b8d', class: "text-center" }, "Total guests"), h("th", { key: 'd37daa71dae78a35cd0f8ae0cb256ed61b0b3ef3', class: "text-right" }, h("ir-tooltip", { key: '0ecd0044e96ab432a31ca9cb5c1d4c4b59c5a515', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'e1141a37a7ed8cf3c1e11d9d99b02bc287bfd94c', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '81994bd3a3c5e462214fd57648d4a17bd030e38c', class: "text-right" }, "Rooms revenue"), h("th", { key: '1e5a15e59d54fd4eeed188cf929bc6fa77870316', class: "" }, "Occupancy"))), h("tbody", { key: '5dfa0ce2f3edf0bb22c5c6278275a1bdca8d754b' }, this.reports.length === 0 && (h("tr", { key: 'e4a770b15a80524f944697f9b06a79ee0055659c' }, h("td", { key: '3a3b68087b75887dbad979a83913bd0b9c8929fa', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'cb16f7eeecdfdf7726c60790cbd0c1e919ad4ff1' }, h("tr", { key: 'c4a0bb5cce15c6bc31f92399bd2cee7bca7dc26d' }, h("td", { key: 'c526cc0ae2abdc0b740990225ea64d95c24a5454', colSpan: 5 }), h("td", { key: '3746372c1229d9bc5e56a37c56cc6fb80fa8581d', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'fdb41dde7b41083cdc49934a974a6601df8731bb', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'f1071ab2df92e620e7c715ae3338274cded2ea11', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a658755888bb3cd196e3a6ca5a147d0ce513303a', class: "legend bg-primary" }), h("p", { key: '5231beaecd1d78d15389733ceb7efb64ccadf4ac', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '6df4a9dca436ffde426badbf576d8ebf86fc130d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '5bdc74eea0d85de78cc720e1a7a8f96f1515c09d', class: "legend secondary" }), h("p", { key: 'ad1e65350abc387d81da3123c2a620c91fa0fe54', class: "p-0 m-0" }, "Previous year")))))))));
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
