import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'cb2e21a07c5257ef26948b8553558c47af189324', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'c1e2f77562b218597cc6ce517ddd3c6b928734b5', class: "table" }, h("thead", { key: '410a2a75d06fdf204b34be5979030701390a9306', class: "table-header" }, h("tr", { key: '6d01f0f716258dee68c24a5f1af06a7c38603ef4' }, h("th", { key: '976b4a170e25b6a917609d8342dfdd4e01a16790', class: "text-center" }, "Date"), h("th", { key: '8be8c64cd20b044a12af9f33391b9d066cdace30', class: "text-center" }, "Units booked"), h("th", { key: 'fcc72c6ff6e744c530e6425cdf1619a5bc03266e', class: "text-center" }, "Total guests"), h("th", { key: '1d7df0f761905dfef30cc76499d6a3ca9fb3cce8', class: "text-right" }, h("ir-tooltip", { key: 'e6163d6d6ccde57b5882d824d681a5e6a5e3bae8', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '7a083595f7385d0dfc16c8a8f97f8462f3e1954c', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '07526fe3a7f37c3ec318f9a841975bb9967c0292', class: "text-right" }, "Rooms revenue"), h("th", { key: '0efe22512985c46424cd75f31a0a6a72ff114a36', class: "" }, "Occupancy"))), h("tbody", { key: 'cfc6f74ffe12e9dd6c7539b14c6ba9d61e2b891e' }, this.reports.length === 0 && (h("tr", { key: 'b4a76879cc53ef2aa21dca6b7d0a0a6d16342ffd' }, h("td", { key: '2bedf84511addc4a57aa40f6d215291244d4b415', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'fda8b67e2136721f2dbeb6536e616db509070a59' }, h("tr", { key: 'd636ef68befd77b99faded88dfdc28af19d71903' }, h("td", { key: 'fbde3c64524bc1bdd3ef936c55ef4512a6f4505d', colSpan: 5 }), h("td", { key: '0c53a05c9495012c12de676febdd0d4b27d75e52', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '03d60ea43d318da373ad3e72d492e1808c77809c', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'bfeeb472b1418c1d9e0f0f3fdfe8de53061c9afa', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b12192a669d71772c116cfe83eb57217c958d142', class: "legend bg-primary" }), h("p", { key: 'cd4440437879b24e2f01b89ab633b9c4013451c2', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '72c811c0e51965b583557ac278c5fe59e2166d69', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '0d85d59b595917301484f724b35a8f1e6607320b', class: "legend secondary" }), h("p", { key: 'f1cb70ed00d22ba68fb71624ed9af986b5622754', class: "p-0 m-0" }, "Previous year")))))))));
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
