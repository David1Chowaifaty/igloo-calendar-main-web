import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '6c90cb9d498b9e1f0c5d6c3d0d7da6521dec0843', class: 'card p-1  table-container table-responsive' }, h("table", { key: '8fb83e7ac6c66716017f30fad97d3659c4986def', class: "table" }, h("thead", { key: '6b7903d41d904cc72b62130a085641a6e6b718f7', class: "table-header" }, h("tr", { key: '7446e8a266b857477a10314ee3a9e2282e0c8149' }, h("th", { key: '6e6e267c3a2c574b8a9683edebf215db5b86f80f', class: "text-center" }, "Date"), h("th", { key: 'fd96e03dc95ff23206bf5b36d155700a34067eea', class: "text-center" }, "Units booked"), h("th", { key: 'adfd0e2f474b7a9c872de81bed86d9c18043b613', class: "text-center" }, "Total guests"), h("th", { key: '2ac55311cb92e4f975809ab92f86e2bc2dee4dc0', class: "text-right" }, h("ir-tooltip", { key: '513fd72b48f980aad0edbd1a42d78589abdd776c', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'c51a129fa7d6e158aa6e02ce98958592b697920f', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'cc9862baaa0c8b348be77468b5485ab0b3452799', class: "text-right" }, "Rooms revenue"), h("th", { key: 'ddddc8dc620bb18f31129f9aec32094cc4842818', class: "" }, "Occupancy"))), h("tbody", { key: '14d751331cc61d73e139fd15014e1389931697fa' }, this.reports.length === 0 && (h("tr", { key: 'dfefdb5bd6de2384662b28514e828fd7bec7d3a5' }, h("td", { key: '704aaebb4c8da3ca908fcee0ba1a9bbd0cd79fb7', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '88f62b0097a16a5b9da72300884c1a268ca8a418' }, h("tr", { key: '081737332ea8668a519c361993d287872edf05eb' }, h("td", { key: 'e08122d7f11c80afe85efd16fba29699d4fa4aba', colSpan: 5 }), h("td", { key: '9b5013347dc50ab1392b0c99b03eda5e50db8ad0', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '20d767c36f116ee0fd6388b15f7183bdf05bb0a6', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '618f48c429d7c879aef0ece554f4827c3d1176cd', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '7defb96e5c35c13531a5ecc5ea6d9d9311194fa6', class: "legend bg-primary" }), h("p", { key: '078345cd2bd9789dd6918d24ca3af3cb32cd7159', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '23614b04c03673c9789c1f9b407a5dc7e52bf238', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '392334cc7da72dcf9c884724f6d8da83360c5157', class: "legend secondary" }), h("p", { key: '4caf4f5f4d0d589075e75c2d7c05a6d41a1d3676', class: "p-0 m-0" }, "Previous year")))))))));
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
