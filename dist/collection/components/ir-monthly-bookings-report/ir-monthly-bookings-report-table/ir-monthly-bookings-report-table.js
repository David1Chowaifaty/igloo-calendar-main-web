import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: 'd1de1c1354358d210c201e235c96b5384f9156c9', class: "daily-occupancy-table__card" }, h("div", { key: 'd516e358f6451b009d65e7eee3c21710be93a0ea', class: 'table--container' }, h("table", { key: 'f7ae8cb8a03f44d8e2243c91dcf6537e3e0af7a7', class: "table data-table" }, h("thead", { key: 'd5036a7622211005b60994ab140631a4c5e0eb6a', class: "table-header" }, h("tr", { key: 'c20f49196ffb7588807f5de66c6ed607e6188ce3' }, h("th", { key: '53ac51ba90e0018e2a9a90e6c9c768c96a1d0be3', class: "text-center" }, "Date"), h("th", { key: 'b6833d4f9c71754bb43b4d34e2b560b57b15300d', class: "text-center" }, "Units booked"), h("th", { key: '0d843f3560b75c974e7091ef4f1073df54076d2d', class: "text-center" }, "Adults"), h("th", { key: '3a2167bb5247887ca35c076ed01232614c687acc', class: "text-center" }, "Children"), h("th", { key: '4adda51454284db71d76b787bece3a847570d868', class: "text-right" }, h("ir-tooltip", { key: 'd8124f748ae1f59cd2d46b56f7358b3f1c261f07', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '346146ecdeda2c6bb73e3205cc2dae20a9728313', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '6ab4e5da825fc20968d337217b585afb4ebed906', class: "text-right" }, "Rooms revenue"), h("th", { key: 'fbec19960455e8fbca6c61d3cda4330d6d503cef' }, "Occupancy"))), h("tbody", { key: '9d961e62e47adce95ceb34c6df05e753181df117' }, this.reports.length === 0 && (h("tr", { key: '3af58bc16135f4acf69f8c464bac0832c3f9b593' }, h("td", { key: 'f26443076d01a892d993b1afbbcc931c3801de73', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: 'c91b95489f5603c7df37eaba266ece3aca26d176', message: "No data found" })))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.adults), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.adults))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.children), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.children))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '0df0beee64441d20d3c09150749628b1da2a624a' }, h("tr", { key: '84c728bc995c33483061360450c3c7915dad3dfc' }, h("td", { key: 'acc4540d0c2e4a79dc690d69dcdeaab3886ee2fe', colSpan: 6 }), h("td", { key: 'e454481745615a699db7c922f037d47339c9a009', class: "legend-cell" }, h("div", { key: '786d17c60b01ef7f46d3ad3eaa348a9f22143d77', class: "legend-row" }, h("div", { key: '3c263ed06d91805287e2403b591c02504d26d597', class: "legend-item" }, h("div", { key: 'c89d0ed166c0be15c8611c602c830dd3157c603f', class: "legend-dot legend-dot--current" }), h("p", { key: '132a19f2b7f56e80a23503fe71a9b20fa8051d87' }, "Selected period")), h("div", { key: '0769ea74b8f90ada8e074ab62a31884e2fa8e0e7', class: "legend-item" }, h("div", { key: 'd27954f71e3cbb5c6b7d42b939de9ff1ec0fff30', class: "legend-dot legend-dot--previous" }), h("p", { key: '099dccbd3701a72b88939d34bd8099fd96eaece5' }, "Previous year"))))))))));
    }
    static get is() { return "ir-monthly-bookings-report-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-monthly-bookings-report-table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-monthly-bookings-report-table.css"]
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
                            "id": "src/components/ir-monthly-bookings-report/types.ts::DailyReport",
                            "referenceLocation": "DailyReport"
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
