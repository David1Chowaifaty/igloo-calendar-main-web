import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '81dc0becda5384d4dc1bfecc801e8ef132b953d0', class: 'card p-1  table-container table-responsive' }, h("table", { key: '6369516af1cf90f31030dcb48ea7eee23c514bd8', class: "table" }, h("thead", { key: 'a758b8703c8a93e6ed36bd76b0a0e120af18d47c', class: "table-header" }, h("tr", { key: '674ba0b65e8a4b5f70a05c6831fadd79ff089018' }, h("th", { key: '291c2f38d1ffc80a7198bc785bef62672f88b0f4', class: "text-center" }, "Date"), h("th", { key: '3d3893319b656d9f7767ba974ca9c71f38e50a02', class: "text-center" }, "Units booked"), h("th", { key: 'd37fd5112473e7aad0d82822bf2a58cfc1a1ee17', class: "text-center" }, "Total guests"), h("th", { key: '5d6c8b84a64fa0b3375736805b523156f6874268', class: "text-right" }, h("ir-tooltip", { key: 'adfcc985b49b43991563528a8abf2e47e22751f9', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '11746cdf0ebff9d4e23eb4017718441a49ef0ae8', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'b5809858a3ec6125089ab2426286998039276638', class: "text-right" }, "Rooms revenue"), h("th", { key: 'dbea08975f21328dc2b0f13be45bc46b5d896932', class: "" }, "Occupancy"))), h("tbody", { key: 'afa051edd0477d960e16caf860e42709ef94c8cb' }, this.reports.length === 0 && (h("tr", { key: 'f342974628d5dd239437a02bba87c69bf346b79a' }, h("td", { key: 'f6fb497abd015a6e76f2c4daaa14a66c21b8af0e', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'e937646134ff1d3da62d743d03718b12d5a7c397' }, h("tr", { key: 'b6eb62d7093c87053e9293773a6ea3389e1bfa5a' }, h("td", { key: '2335e81f9d3f3fcfba498f91409716eeeb362dd6', colSpan: 5 }), h("td", { key: '3e3b2e87921b1e68eef4161eb0c20a52cc001d2b', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '8be36188bd5cf396342ad12ae01c1e9d890cdaac', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'adf83767627022a7ea87ca91590d57a94891cc8b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'c9089a78a40111bc26ab6ca85a70082bf009cc91', class: "legend bg-primary" }), h("p", { key: 'c40c174cd80c1cfc1df8398244c05d24988761bd', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '4666ef8cab41a06ac542d97fe53b5041637e190f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '355bb0e8e0216f231dc2cfeba460325b7f366e11', class: "legend secondary" }), h("p", { key: 'a4afdc7b79d0ffbd587e6953ddc697e83bb631be', class: "p-0 m-0" }, "Previous year")))))))));
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
