import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'fca6f9737cd82226657944d4b563212ace439768', class: 'card p-1  table-container table-responsive' }, h("table", { key: '4f5e93a952457245ef36e61c698539b722c87c9f', class: "table" }, h("thead", { key: '04532030b9d68f1663b59e86630f3af540a5d748', class: "table-header" }, h("tr", { key: '4dfb2fefdc37f764bc09afb7a08560c654a13743' }, h("th", { key: '3943a0046a937e0b6bda914387f60b84d07b6c51', class: "text-center" }, "Date"), h("th", { key: 'b57a1d4e4d5db39efc564795eff4e00a6a529580', class: "text-center" }, "Units booked"), h("th", { key: '993b0433b10043074e8fdb62ae3767825d0ee8a5', class: "text-center" }, "Total guests"), h("th", { key: 'a020b1232cbe0a33e37aeafa10f41f748b48bd2c', class: "text-right" }, h("ir-tooltip", { key: '325bd24c8a66216420f3065f44e5d688d6307f68', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '12d38bd76e276489d84fbeabd4c22dc0c42e4238', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'af098c3d163fa91f339f8ae9fb50a315502908a2', class: "text-right" }, "Rooms revenue"), h("th", { key: 'f015d4b7f5084a18b093f25fa19164aaebd6f0d5', class: "" }, "Occupancy"))), h("tbody", { key: 'e74c2ff043000ebf9fab3873a8dc9f17736cf95c' }, this.reports.length === 0 && (h("tr", { key: 'd0a7770d9c6636a89578e488553eb1a4a9be6584' }, h("td", { key: '503e967a2cbdc96a22f5a1f93dff2e0948429218', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '7bddbbdf588ad1847ab6671883a10083f53211a4' }, h("tr", { key: '732d4fc19e50009d69d7ffab78184f1932edaab0' }, h("td", { key: 'c3e66d50e5293dd871cb20e4aab23c585c4d18a5', colSpan: 5 }), h("td", { key: '1b1065c225d4049d66ecb70cd04bbea9ac714475', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '659edcd4ef68ab9890405ba28a2f8b7b54d1016b', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '4a168b2582ec95df9790d00cf3a41050cf9ac60c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '9063551291d2658447a46769687348b60bda2a7a', class: "legend bg-primary" }), h("p", { key: 'be0e8c71f34b311b01b0b384468f0cbe9cdd45ff', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'a034c9056c1574d67fc8a2f700f49c1fce8e9f2a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '37343700165bbd1e14f0e9ff85e91ac0c61f8da7', class: "legend secondary" }), h("p", { key: 'da213d1192624f4860fa8d3a7c9373cb4076aaa6', class: "p-0 m-0" }, "Previous year")))))))));
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
