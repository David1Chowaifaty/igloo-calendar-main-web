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
        return (h(Host, { key: 'e62fe41fc586eeca1896f6931bc5a46e7dd057ab', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'dc90a43bd43f1ad2934d04fa3911f517e5b7d29d', class: "table" }, h("thead", { key: '9e0998c2e6ef48e24bb1a6d85d33123d47970b49', class: "table-header" }, h("tr", { key: 'bf97beb0eec7b67b7e56b7fc6a265666270ce1fe' }, h("th", { key: 'ce8468517c77c14821cac16d25e2efa06a2c53da', class: "text-center" }, "Date"), h("th", { key: '2185724d188afea86df2f488aadf3d165d31e5ef', class: "text-center" }, "Units booked"), h("th", { key: '84d17851ea0e749f2f2dd38d1e0b0df5d14fdc56', class: "text-center" }, "Total guests"), h("th", { key: 'cf9dd480f7b704da4c4bcf17615eff143b354979', class: "text-right" }, h("ir-tooltip", { key: 'f62f223602cbdd35ffdda2204c68f05557f5b470', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '8bf6c9a09f6f5f6a3ce021f7a34013f8385e9cf1', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '9d32e730c447ada2b8bd1955b3bdee9ffad57d70', class: "text-right" }, "Rooms revenue"), h("th", { key: '2be7f91b473c2cc6f1d9ad1bef501f84c6784e18', class: "" }, "Occupancy"))), h("tbody", { key: '263fe77b82ca54e27f972361c5a3ef310b22e715' }, this.reports.length === 0 && (h("tr", { key: '9187768a9c20cd875e295e758314b26d85a2e8fe' }, h("td", { key: '6a5969d04b49293c2a2a238311b6b8e311df55a4', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'a5606ebd9385c26f97e1b6e481c46645e9442b35' }, h("tr", { key: 'f6d18399e1203f1d951f6a5894a2a1a27f6be0bd' }, h("td", { key: '25387410dbb3dac29f9728e00cc96f9c42ec8bed', colSpan: 5 }), h("td", { key: 'cc0a20d54927fd78ee89f3209361169d7ebf356a', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '94353e96e6a21bbe81971ea48c7e3a3b49c420e7', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '37bdb6ab8c5d9bf653c59f8f045cf3c4cd55238a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '2b8577169c7363fba09fd8d7f81de294fccf1785', class: "legend bg-primary" }), h("p", { key: '2dcc9234cd7864122083aba38ae57ac9dab77ffe', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '68186cf46a490b679198193c53982334b14ea41d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b2cb58bc89cc57a6fae7ebeb912db736c93dbf37', class: "legend secondary" }), h("p", { key: 'fd1d5ccdb45b00de8daed81dfa89ff1cbd0140f0', class: "p-0 m-0" }, "Previous year")))))))));
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
