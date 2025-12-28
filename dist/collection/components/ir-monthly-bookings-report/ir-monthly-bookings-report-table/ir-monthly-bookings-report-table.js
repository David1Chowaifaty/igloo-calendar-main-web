import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'a44f1a4a320bde091a3599b80842a74ccac8afa8', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'c369f0e3c781e9d11cf3b2370498b8e2c29f6d43', class: "table" }, h("thead", { key: '50b7c7387956f079c2b59815116cf3407dc380b7', class: "table-header" }, h("tr", { key: '83066c0d80ecc9fca3085face3d38654e0a0ef23' }, h("th", { key: 'a9bc1f71e0dd8d5303dc3c5deeb92bf127ded147', class: "text-center" }, "Date"), h("th", { key: '70e9bd80845d4a80a9b227415c9f7d1bfd264851', class: "text-center" }, "Units booked"), h("th", { key: '489d3e4bc1d3bddb00249e4cd89a2e26b755589a', class: "text-center" }, "Total guests"), h("th", { key: '1a8b8f46722b17aed97e3cc79cea043b885f0cc3', class: "text-right" }, h("ir-tooltip", { key: 'f1503bb2e2e2db6873aa2b478ab1afb291a3c358', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '34cbdf73d926596a26d2e127fb66b9947a40fbf0', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'e4c981e8227cf1ebfec0aa4d5719c08573c0f612', class: "text-right" }, "Rooms revenue"), h("th", { key: '79f24245403796ad3367ff73dbcfebafa52179e4', class: "" }, "Occupancy"))), h("tbody", { key: 'f370d8208137183864250549b20cd30bb81de238' }, this.reports.length === 0 && (h("tr", { key: 'd4fe920083af92deff0eae3be9bbe7493468913a' }, h("td", { key: '79e11bc5900cd94d0f33058df94dc63e18442f37', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'adc914bced161d0069098f111f6185088b31b365' }, h("tr", { key: 'b583f2ce94e36529268039f6dd2fd9e56d1a16de' }, h("td", { key: '138b343d1866ff085e2abacfc99cafd512baee4d', colSpan: 5 }), h("td", { key: 'c7cc093fd344ca501064795fff76eb3f53d7a839', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '9e3aa6beeb13636fd0413edce1faf2fc494b08ea', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'c44f30ca4bcf3a0ec7f7797df138c312c218ead5', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '4f3a10d6ab40479e705fd8bb2aa08d0458cdfae9', class: "legend bg-primary" }), h("p", { key: '9d03f86af34ea7f7ad972951b33069cdd59acd41', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '3ecb029021a762a44887c0ff8961e5e68f360ee3', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '89f6a5c9e1aca24c71340ca8b63b9154cff45330', class: "legend secondary" }), h("p", { key: 'feceda4870dbaae8b5c07154441d01d77093cad4', class: "p-0 m-0" }, "Previous year")))))))));
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
