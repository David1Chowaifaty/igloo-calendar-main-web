import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'ffe36c7279211452ca919e07803c5b6365ee9c02', class: 'card p-1  table-container table-responsive' }, h("table", { key: '4e562c9a0944c257cf79673c254a8d3a0100b824', class: "table" }, h("thead", { key: '972e48045bb2d3c0e0ffcf5ed64205194c09d7d1', class: "table-header" }, h("tr", { key: 'd16d46ac6a495803848a40303cf76edad67d3981' }, h("th", { key: '6735832a1fc9133c773a4d2ce99c53fe84804ced', class: "text-center" }, "Date"), h("th", { key: 'debe96939ae6c9d5c9dd822b290cee5a21b44db4', class: "text-center" }, "Units booked"), h("th", { key: '6204bfc68e67f5b05272aa1c0f23a9dc849fb687', class: "text-center" }, "Total guests"), h("th", { key: '0995dba648a4d475e32d2387d7e0d3a53024b321', class: "text-right" }, h("ir-tooltip", { key: '82231349ea3568c56d9cc9cf4966dd282d870706', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'c050f7aa7f093ddab35cbf6b7f8ddc4f9376cf10', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'aebee7f6ded1747376fb51749c20e350db9e4c6d', class: "text-right" }, "Rooms revenue"), h("th", { key: '4d5d79de2842aac57a28355014a8996d9ac9c32c', class: "" }, "Occupancy"))), h("tbody", { key: '0dbac390747346707a3a8746a85e9c37eaa13a64' }, this.reports.length === 0 && (h("tr", { key: '41703be36d95c090e9697bde399c7f233dca85bc' }, h("td", { key: '67fd585846374c7967e81b99c4a94f44701ce2ff', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'e96d20d3cd16498bca0e21cff68229c67e3f5a22' }, h("tr", { key: '4c5b1306af8d7a277f7bd710e885609aead61039' }, h("td", { key: 'e45469be54ed2038a554de644d9dda8e5d5befa4', colSpan: 5 }), h("td", { key: 'a74f998638bb8d104eac41b96e6f0c7179656844', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '78235dd6ccf106a6f2d9b9bb16522f7056c04d52', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '28db60ebb759f6d21b66a053572fe67f3538eb8b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '3199047bc16cddda680f72016c4d025c2a4a9a1c', class: "legend bg-primary" }), h("p", { key: 'a51813221d7f66b846b7836db6050e9d1d21e493', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '7c391ac2b54c918cdf4236f37e2a47f0d2ab3896', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a49d6e463f51142ca7f3b8d65937dd8fe7c14e8e', class: "legend secondary" }), h("p", { key: '7adcf463976ca84c267b1ae70ba5ba7af0a0f457', class: "p-0 m-0" }, "Previous year")))))))));
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
