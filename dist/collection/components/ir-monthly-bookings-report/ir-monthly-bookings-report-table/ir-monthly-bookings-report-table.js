import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrMonthlyBookingsReportTable {
    constructor() {
        this.reports = [];
    }
    render() {
        console.log(this.reports);
        return (h(Host, { key: 'f5f9093b913f1dde2b4bf602859cd398d69a32f8', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'f93ae9b5ceda40228709c78a0807b3c4eab1aa83', class: "table" }, h("thead", { key: '6bbe5d3d18ef2558a642be7d0df8854d0ab23bc6', class: "table-header" }, h("tr", { key: '3bcbaa32f4813cd31e59c2aaf18c6bf1fe04ab9f' }, h("th", { key: '0b477a2875370a5e84a85bee8a59aa9e6d741ee6', class: "text-center" }, "Date"), h("th", { key: 'c7df728de2a94ec7dbd178060485ed5bc0ca5ea5', class: "text-center" }, "Units booked"), h("th", { key: 'fa25136c0e9ec2bf465640a38877dc5e2c01a7f0' }, "Occupancy"))), h("tbody", { key: '6aa06afdb259b409f81876362f0a0e174568aaad' }, this.reports.map(report => {
            var _a, _b, _c;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('DD')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) && h("p", { class: "p-0 m-0" }, report.units_booked))), h("td", { style: { width: '100%' } }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_c = report.last_year) === null || _c === void 0 ? void 0 : _c.occupancy_percent) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })))));
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
