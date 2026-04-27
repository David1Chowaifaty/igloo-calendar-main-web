import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'cb7f03a66cf41686bcf8681e4bd3b8b33b3eb70f', class: 'card p-1  table-container table-responsive' }, h("table", { key: '8e8cdc3e2d4ef90ad72c2c96b24e40e28dcc9e9e', class: "table" }, h("thead", { key: '9357c8bf44679ceb7cac9a7049bd4eda3b0cb32f', class: "table-header" }, h("tr", { key: 'a25516c4356e3cb143bbcde07422fd2ad2815696' }, h("th", { key: '4b6521e85f6bb2e935886042eeefc62914721f33', class: "text-center" }, "Date"), h("th", { key: '0b01d48de482e9c6d1ace3d6f872f06b0c78278c', class: "text-center" }, "Units booked"), h("th", { key: '36ff6314c9d83b4b8610977ae937216c7a6b34f5', class: "text-center" }, "Total guests"), h("th", { key: 'adf884c1ad546814fe709be11be971dae952f9b5', class: "text-right" }, h("ir-tooltip", { key: '6ece37242d9265fded679ee8a375474221d1bca3', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'fc653852f0eb8aa8227cbb5d2c660f8b100ee265', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'c6af8a6a6677c0a559d0ea191ccd5ca23f1c8b1e', class: "text-right" }, "Rooms revenue"), h("th", { key: 'b1c8bd10e0234d338562a35d0df137ebd18d72d7', class: "" }, "Occupancy"))), h("tbody", { key: '0973502f604681b084d924d8447e026b6e50fc9c' }, this.reports.length === 0 && (h("tr", { key: '5b5864a96047e96ea0dd8ff7990c404e235cb55c' }, h("td", { key: 'ace91fd4d8fcf8edcefd092ed866f321608c039f', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '7b9a9a9148bb715658c19522a21c3036252587f2' }, h("tr", { key: '03efcf2e466c984755fee9ba5f6a8d5264cbe4a6' }, h("td", { key: '0be38ad13c27223e983dc2b332f06c8e7552044e', colSpan: 5 }), h("td", { key: '1355372f858329c2ac868315e9b8f16bcb13fef7', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'bb85e656bfc2c86ea8100653e9f66726858c0c57', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '65aa2de6927e781ec886feaf4bc2ae5428e3cd34', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '77d5aa6e1a922d41089303e84b7fdb0c246d8ed1', class: "legend bg-primary" }), h("p", { key: 'c916067da5a705d3201e8ac9a03d6a991e5f6ea2', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'bfe975d135ecfd1c7f3c57bfce3b21846a653bcb', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'd0ba0776fb21800a2dd0720cd779a39f5dac205b', class: "legend secondary" }), h("p", { key: '618476feae9fbdf615ca081d56985145ae4f2626', class: "p-0 m-0" }, "Previous year")))))))));
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
