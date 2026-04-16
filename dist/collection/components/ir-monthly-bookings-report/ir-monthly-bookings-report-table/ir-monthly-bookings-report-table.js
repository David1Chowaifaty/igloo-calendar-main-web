import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'bd9bfade7cf2d6f89bfd32da26c720148187cacc', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'f0b25e382c5904983d0caf456c634849a9f9d513', class: "table" }, h("thead", { key: 'ecff4d487f5696b83c25c3557fa86f0a3aaf7813', class: "table-header" }, h("tr", { key: 'd09d0045240471bc89f75505ede1a50a6b4ab79a' }, h("th", { key: '65464ccfd7ebec6edc4cfa4c20cdae07101ac9f4', class: "text-center" }, "Date"), h("th", { key: 'cba4fdce97893ab97738ebba7ff0b43e95c754db', class: "text-center" }, "Units booked"), h("th", { key: 'b5ce7e7497af7cc53caa1b727410039533429943', class: "text-center" }, "Total guests"), h("th", { key: '7a1ce9ef27b3f3a033e45464915d69f1d7ff59ee', class: "text-right" }, h("ir-tooltip", { key: '697d740bc268cf1ddceecd52d496dd91ae2b7f67', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'c29fc7e87dbd50e9d3b4542d3bffbee1ed0c2e69', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '5bd678096878b22f399272788da6ab25ee6d437e', class: "text-right" }, "Rooms revenue"), h("th", { key: '6bd7fb4d909bdee19c3548281c7ba522da55524a', class: "" }, "Occupancy"))), h("tbody", { key: '614fa065e151fa871f42b84cce3687d9c3e47fa5' }, this.reports.length === 0 && (h("tr", { key: 'bcf35fa0a6808a9072d3a5aa1d9d8e372eb3d8b4' }, h("td", { key: '7c90a30773ad1fa4bfe7cc5a2fdf891891a75061', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'ba26e8d0fbd50608156bd6a7dae33bfe51c5ecd5' }, h("tr", { key: 'f136e147c01320b3a7e4b50d0d3a387b19417a7b' }, h("td", { key: '2eb57316d73e1d1056b8d1afabe494d70b1731c5', colSpan: 5 }), h("td", { key: 'adbf5439a6ca9ae3436e9e1a0f04e4146d6de9bd', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'c20f0160ea7781564d566ab5e16065af07d643fb', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '6ef8b4ea4b2229fc036fe02a7b1ab49ca700cf52', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a276dc7eab4c7d8bac38ce93daa91cf9e88dcb7b', class: "legend bg-primary" }), h("p", { key: '5b334102e6addab0ddb22c11a4ead97e70be4610', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '6514ce34dea8ae690698f2258f449dda5b42cca3', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'f60e0b7fedc4d19ef485d298d2753b1d23abbf5a', class: "legend secondary" }), h("p", { key: '7cdb473fdd3135ada75940bada862e5f5bb657fb', class: "p-0 m-0" }, "Previous year")))))))));
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
