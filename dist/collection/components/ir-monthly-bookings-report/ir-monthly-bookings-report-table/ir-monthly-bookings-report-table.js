import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '06a8f581a55a2f68958ef72a8b50c8bb037d3e42', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'b3177fe3486e5585623a8136ce415112b7ef4740', class: "table" }, h("thead", { key: '6d28c1b9de35baa1f8baa6733c1146e336078161', class: "table-header" }, h("tr", { key: '728d2b7f9a437f262396870a2e5937ed19357fdd' }, h("th", { key: '294cccb52c8845859585474382e16f4ad4525838', class: "text-center" }, "Date"), h("th", { key: '7a05ab151b921a5ec848b16e414c695a27bd715e', class: "text-center" }, "Units booked"), h("th", { key: '3a56a8e183dc422bbcb7dd5c063589c9177bf8cb', class: "text-center" }, "Total guests"), h("th", { key: 'ce2419ed7398f8aa931b38ef02539cd0ffa2d0b5', class: "text-right" }, h("ir-tooltip", { key: '45a87e326be8efac39ee5718ac9c4996235fca36', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '451b5e31533164dca42270506c50e56e92e8d2a2', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '8391b4b8a6da5cb5ac873b82308b2d674d525f99', class: "text-right" }, "Rooms revenue"), h("th", { key: '5f40bc4e36fd7c3056319afc3c320945d8021254', class: "" }, "Occupancy"))), h("tbody", { key: 'fe856f4b8cd4c87e8fb1d26e0dd681d6a2b3b18b' }, this.reports.length === 0 && (h("tr", { key: '703070d26ddd396984e5c2817e7cc4fb91792b16' }, h("td", { key: 'a07d2246c774af1f3ffc0bd20137f47283d5ba57', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '43dc2d1060a3995ee1f04ab8445c00f38a08dcfa' }, h("tr", { key: '11dd2105ccffdd903b6f5ad5615436ad9af75cc6' }, h("td", { key: '15dd9b6bd388e79a6369a7dc1d165810496c3bbd', colSpan: 5 }), h("td", { key: '4226dd34c7915c1719019e259ed936d1d40710d7', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '0c86085d37d1cc737f365683b228e2053aebccbc', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'de2065e82adf6bf996c8fe7178746811851198d7', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '45f1149315b29f7fd1d89ca22ffd042338fe0b59', class: "legend bg-primary" }), h("p", { key: '93b7a6e6b54f84987a379a0632d00fa608a01d83', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '16912b3a3d40a02a86ce3d476413af91e15a3762', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'cfec62768f9fef6c44303143122878b96b91f3be', class: "legend secondary" }), h("p", { key: '855e466a5c7eaa114ffd53edc0367909351cb2f2', class: "p-0 m-0" }, "Previous year")))))))));
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
