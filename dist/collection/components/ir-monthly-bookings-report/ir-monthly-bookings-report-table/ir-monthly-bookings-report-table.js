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
        return (h(Host, { key: 'dd1170d2da13df484835a34720f672dc0fbcc6fa', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'd7ef7ef3cadcc94347ba658c275e9b8090372b40', class: "table" }, h("thead", { key: '1ff02717773872f27df9ba4da6b503959fa145cb', class: "table-header" }, h("tr", { key: '47ed6f8c80b0df3a33f81eeb0dc32b67d6b7c363' }, h("th", { key: '39db9ce15389e02b908502be55f3a92a49f1c3cf', class: "text-center" }, "Date"), h("th", { key: '9e5bb3e8add7e2dfa22cf8914f6c60f5b9705a58', class: "text-center" }, "Units booked"), h("th", { key: '96d0b615c47f36870b1c20c65e60d6908aff7e87', class: "text-center" }, "Total guests"), h("th", { key: '1efb0682afa8c33f4592317c6b05033b8011295f', class: "text-right" }, h("ir-tooltip", { key: 'e3c9c726dc31b19a21b6296854789b9d1e6ca7be', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '0cfa2a4133e3bfd89f36c76a121fe2d8686194f8', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '736feb215ff92436a90b2be8cb48ee414a930381', class: "text-right" }, "Rooms revenue"), h("th", { key: 'b4e31e164a03077207d7cadb10df9c98cc4aa61a', class: "" }, "Occupancy"))), h("tbody", { key: 'cbc88075a2ddb71b81637625a69e64291f9d6499' }, this.reports.length === 0 && (h("tr", { key: 'cd899c3467c5e65d9e2d0f410ab99605be35c597' }, h("td", { key: 'f079cd98d6229f41a217b0839337ab3bf425b502', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '66e72cc245c78a62da3d725d38552ede777131ac' }, h("tr", { key: '646bd859c37a8a6a80c953b412af8579a55ce9a3' }, h("td", { key: 'f5a0c55f8cdf3be4765f3088a36bb7b791acbf06', colSpan: 5 }), h("td", { key: 'cea42ef340eb2e813767c9c77dd853cbf28ff6fe', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '19b7512eeeca6d2e4b3b931fcbcadfa66b175bc8', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '38cd1f38f72178079e361869dfcaba33ab0f68e0', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'e871d17e458a93b6cb95151298bd19b161086eaa', class: "legend bg-primary" }), h("p", { key: '004fc56b723bc69f8649c3ca7878e46b73a976cb', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '64439c4c1d8d086fd0d527020f08c93246a9b5b0', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a68909790dba142682c1441feee6bfee285fc1fd', class: "legend secondary" }), h("p", { key: '3817b2fb26f830b64e81dff727805c64d22e1568', class: "p-0 m-0" }, "Previous year")))))))));
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
