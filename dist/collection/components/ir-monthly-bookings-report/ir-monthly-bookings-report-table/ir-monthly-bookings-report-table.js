import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'd4230f94e05ab44dbf1e3565372c7b9ddebefc45', class: 'card p-1  table-container table-responsive' }, h("table", { key: '1bdab504faa7de70d4e7fd5f601a428e26ef6741', class: "table" }, h("thead", { key: 'c16be043b13b84a8a6f7e982e8933fa82f93f4b9', class: "table-header" }, h("tr", { key: '5b6899ff12d2eedb7510da7311a21124e586b305' }, h("th", { key: '865b3f7af151dbe9ad9ec33f46207f017ff88dfe', class: "text-center" }, "Date"), h("th", { key: 'b4f77d0d198c7577397747e0d01d40ce8794b4c6', class: "text-center" }, "Units booked"), h("th", { key: 'c26cdcb884bc6fd1e8a7a017edd99bc9d5e5f43f', class: "text-center" }, "Total guests"), h("th", { key: '1e8a68d6c8bef3207254f286854d952611abef85', class: "text-right" }, h("ir-tooltip", { key: '6d40fff0570033ed6897264dcfa57a121a0d5c64', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'f5e15117c119681a5164fc61232dbe5d8300c05f', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'b6b91329e914fcd59e2cb523ded2aa0d377f55e9', class: "text-right" }, "Rooms revenue"), h("th", { key: 'ea5debdd4d76c7cafa16b2e56f1e8c131f4c399c', class: "" }, "Occupancy"))), h("tbody", { key: '7657b9aabe30477b0fa7a80b10e718edccaade11' }, this.reports.length === 0 && (h("tr", { key: '61c068724f89fd76dd9bdaf0c058f5b4783e02a0' }, h("td", { key: '748164194615f85728a7e74e4eddda2dcbbf4817', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '493dd7f98e17684ef2a398771de92c8dcf491a52' }, h("tr", { key: '12a9e4006db7dd3790b43df74630e002cdb5b94b' }, h("td", { key: '45904fc9ea7f041439efd9ad36f5aade467eda5e', colSpan: 5 }), h("td", { key: 'b76ca284c8e7af117575470f70569f53ba0bd135', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'd068d946f40c95d87cbfcee192a99568d8228950', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '8bbd67f58e963cbf7845714ba28b73ac4e37b0cb', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '33f1691de05a85efdcb49a0f7398dbe212a3f49d', class: "legend bg-primary" }), h("p", { key: 'bdcacd075b57f57232f8363170967cc79a2d7f2c', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'eb9164db681832a09284e1e1a9ea6fc8255b70a3', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b417988aabcf081d17e297be5cb010fffa8cd5e3', class: "legend secondary" }), h("p", { key: 'db5a2134b8179b638ddb826e4c9d418506dd869a', class: "p-0 m-0" }, "Previous year")))))))));
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
