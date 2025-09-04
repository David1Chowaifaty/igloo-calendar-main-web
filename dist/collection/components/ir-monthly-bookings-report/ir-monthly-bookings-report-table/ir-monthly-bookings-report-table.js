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
        return (h(Host, { key: '34d1aa84efef6be38c3aefb17428a58de3c9b663', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'ba8ae802e72bedad6e0c5fc7e5b88b9083d63250', class: "table" }, h("thead", { key: '12e0bcad41dab45c59a95f542e20fab05ce9f5d5', class: "table-header" }, h("tr", { key: '5cea0c294486dc4dcc3c0aa2a3d21f09c7087235' }, h("th", { key: '96f1efd33f3505cbe778d0d064195437928b419e', class: "text-center" }, "Date"), h("th", { key: '04e7d4bc8c62368a66b580c12f5abbe6462ff4db', class: "text-center" }, "Units booked"), h("th", { key: '02e4c0a04b8b442947c0b154508edb17e0a01add', class: "text-center" }, "Total guests"), h("th", { key: 'f9b303274ae798f209ccfcd0d82c464a16ac9908', class: "text-right" }, h("ir-tooltip", { key: 'fdbf17b48993b53da4b238274ad556bbb78fda1c', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'f78069a968b2bc49cd316533dc6a168764909fa4', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'e1757b6bcd1b296f677cb7aed3c28c6b945faae7', class: "text-right" }, "Rooms revenue"), h("th", { key: 'b2941aab95fd626e6d04611018f7370e9f2fcba8', class: "" }, "Occupancy"))), h("tbody", { key: '10e7778ae317c97d1cf257381929c80ead51604b' }, this.reports.length === 0 && (h("tr", { key: '9b540e8a6a76a78d6ab57d81d8a6aaa4cd0ba697' }, h("td", { key: '9974db6e58600251fc65d9284330eea9563638b1', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '4d884d8057c330242ee134dd2ca831d9343120ac' }, h("tr", { key: '6d1445ef79d00127def0df17c4f5a4eb7704537e' }, h("td", { key: '366708b9c2c43a71d60d5d0979cf0008d832726f', colSpan: 5 }), h("td", { key: 'afe92e8c44740936b34cb716866b79351feec055', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '7e1a83421c5559a738bd8a9cd03dfb521afd1140', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'b2fb18d2d38fca4de3c58dde27ee07e87b719386', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'da2d8819e5eaadc74685b98516ddbf599b2f0f24', class: "legend bg-primary" }), h("p", { key: 'fc20fac1f92904de208547e221d75c2b760ff00b', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '3d750458f884930e9f41d021f9370e5081357064', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '8296ff8e749dc9b92bed524d8ca12aff46620e1e', class: "legend secondary" }), h("p", { key: '7049265326e3b4719ea5d85f48d88db513a2165b', class: "p-0 m-0" }, "Previous year")))))))));
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
