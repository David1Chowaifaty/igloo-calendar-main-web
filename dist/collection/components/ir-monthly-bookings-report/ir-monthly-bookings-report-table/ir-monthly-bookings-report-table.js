import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '65da57c17cc3dc58b7c8e61a118c9f671077540d', class: 'card p-1  table-container table-responsive' }, h("table", { key: '1c14a3dd86948715f68f66af79bd7242270ec536', class: "table" }, h("thead", { key: '24659b14d64a7a5e84568eb35090adfcbf1528cc', class: "table-header" }, h("tr", { key: '4cc9f34ca99b5f52a607d58a070dde269b87be82' }, h("th", { key: '617b2b12c14f0fb616195ba3dcb56227956736af', class: "text-center" }, "Date"), h("th", { key: 'c18e4bf0165f31f3e860065a26e0b270196edd44', class: "text-center" }, "Units booked"), h("th", { key: '00c68cd26d5ba5c463e53908cb3a618155d40646', class: "text-center" }, "Total guests"), h("th", { key: 'b9305178c7d061a81b824267155eaba00f8a00d3', class: "text-right" }, h("ir-tooltip", { key: '9027d9a73bb4d534c4fd4274fba03de1cfff3c06', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '9800a5ffdddccd58b0d43d78650e869cdfbc6165', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'cc3c7bb83e11331ac848c367dc8b128f2790631d', class: "text-right" }, "Rooms revenue"), h("th", { key: '8284c366583dd01d6514f70471176d79f67ff2b3', class: "" }, "Occupancy"))), h("tbody", { key: '5ae3f205203ab6ee53300a971980cd644af6e7ea' }, this.reports.length === 0 && (h("tr", { key: 'caa74f3697812c7c01d1b1eb68f749534fb190e5' }, h("td", { key: '9bfd56aa7df1b7ac1d7037c656e3f1b089d27b93', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '7af1a2991057468a553276e974f2fa18b0363e68' }, h("tr", { key: 'cd01476b3953365d7e94764887e13a814a2c4fb2' }, h("td", { key: '6395149a15f0847cb88c771542faf61ff4e183a5', colSpan: 5 }), h("td", { key: '5fb1e753fef4437e54be0f7b4243c42dd1cdfcc2', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '426c31fc9c9ec88385eb76d1fd117a245c2b33c0', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '50bed51112398f2e93341875b65c25a1da89718e', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'f2bb1a4badc1d0b873fd3001c4f72aceadc0a16f', class: "legend bg-primary" }), h("p", { key: '20678c6cc62c050bcb91a8bccd15fda61ded22cc', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '3e1efc62a8274e278827b889bb2ae38f812ebfff', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '55532478b33209f075c2369b054951b341b33e64', class: "legend secondary" }), h("p", { key: 'a24e05ffecc95a2816c6db176cbd9a84e5e06008', class: "p-0 m-0" }, "Previous year")))))))));
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
