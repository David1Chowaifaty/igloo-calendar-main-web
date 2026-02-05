import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '455155a85589ff0675782d653e72a6ae84a81de1', class: 'card p-1  table-container table-responsive' }, h("table", { key: '03bd9d9a9e62c2b22e4781c74aeda8a88d6197b1', class: "table" }, h("thead", { key: 'b5a464400a98069034f4183076cf673e5caf0c73', class: "table-header" }, h("tr", { key: 'f98af004b153bffb8c60afd8842981d8ac032314' }, h("th", { key: '2cbeaeb44233b95f861113b1487b883ed2e85a5d', class: "text-center" }, "Date"), h("th", { key: '0ab46819c328f18e27bad59cad19aa8509006baf', class: "text-center" }, "Units booked"), h("th", { key: '0af120e6a83d4920844dca2e5e5dab91c31c0ab6', class: "text-center" }, "Total guests"), h("th", { key: '1b981a99411beb906a767387ca2a292feed13110', class: "text-right" }, h("ir-tooltip", { key: '6cea30ed28b835de6c5ea8c4b8e198bb9eb6a311', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '9d257ddeb0c846e94817c92fbd398fd53158144d', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'fd5e3bf9d87a101fe38df0c371ae09f931f372f5', class: "text-right" }, "Rooms revenue"), h("th", { key: '640f1c0c310f323d6396315a5dfe46b5b48eedb3', class: "" }, "Occupancy"))), h("tbody", { key: 'f46f4f3dc2abcd97a37f335668efe3db708dc905' }, this.reports.length === 0 && (h("tr", { key: 'ec74d40709723c9d0ac6becb5418107003e41c13' }, h("td", { key: 'dcafa7c683ce4c3a6cbe89ad1b7251a345ce87cc', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'a7b1e96ad69898c5530e41f8721b1f980d83992e' }, h("tr", { key: 'b70ca5621920bb1cda80a2948be0aa4815e36838' }, h("td", { key: '189f7b755cef09758c1b696cb59a1c7e72e552f4', colSpan: 5 }), h("td", { key: '712498c71f028f567760a445956c95c6a0ef6b48', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '45f92971f0899ff328a7018077300faa667eefe1', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '4835f50b3b577267d2a920835c1a665251af1d8d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '061e470cb9616860043d2753f6e08e4052c0249b', class: "legend bg-primary" }), h("p", { key: '8b80aa9b376b62d5d9eeb1ca75f7c0b93ccc2392', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'b8604b029b16ee663fba1de9c277528225480b53', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '81cffccb3e0eab3449d437ed2bd6edb8d68f9e41', class: "legend secondary" }), h("p", { key: '4c38ade014ff47b67e3fb11870d93d7fbcddf989', class: "p-0 m-0" }, "Previous year")))))))));
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
