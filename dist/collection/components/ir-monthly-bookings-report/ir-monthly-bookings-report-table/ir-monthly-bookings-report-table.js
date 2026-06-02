import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '39abfbc18a1b867edf4634923a655d1e3922f11f', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'e5d3b97532c80c1d8a44b09638799b035878d0ae', class: "table" }, h("thead", { key: 'd366843eadd7d991d95b8becb1a3c0a5c9731a4e', class: "table-header" }, h("tr", { key: '868b3266bc2fe33f3e706830a95336699869d9fa' }, h("th", { key: 'c9303af008b6025a0155fa8268b6c413e558acc3', class: "text-center" }, "Date"), h("th", { key: 'de21ea51e426595ac1bc9d3bcbc8e034cc51693e', class: "text-center" }, "Units booked"), h("th", { key: 'b0c4196bb32ab6d34fc14ae3ef811a6e287bf665', class: "text-center" }, "Total guests"), h("th", { key: 'c3cdf8705d7ba204e4f712bbf7fb7ac0f67b585d', class: "text-right" }, h("ir-tooltip", { key: 'f2b11c351e6758724a5a25b21f2c4a47a5328226', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '271fa2f18ab7e6a1e37a05be40489969770a32a2', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '9475453a95a3756152614ca0f3ef5921de900ba2', class: "text-right" }, "Rooms revenue"), h("th", { key: '6d4779c348161104dcb0caf94558d085f824fc16', class: "" }, "Occupancy"))), h("tbody", { key: 'a82e7ad5c0ce0fda32c4268357102eb3b9095538' }, this.reports.length === 0 && (h("tr", { key: 'f9d1d5e6d3e8d60f9e95477f6b38350d64be4efb' }, h("td", { key: 'bdec48a7ace996ee72c94a4e889e31aa05779559', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'bfd774606d0c6fdce4a0fdd321c822026983e425' }, h("tr", { key: '9ba7e869f9153427eab102f0f15a53a4a7d0b3e1' }, h("td", { key: '3ee9e53032f391c01d7feefdf8f3963a34321e2e', colSpan: 5 }), h("td", { key: 'fdc585849e3c59ca3ab17337613db52df8ead6af', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '23a539e3890c62939950e5a57c3e8147c7e7b8ad', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'eb64ae78ba4a565314977a9374d39433bb89edab', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'c13fdfb271391a2e7d0f636a1f4f68ee8f44b349', class: "legend bg-primary" }), h("p", { key: '5fa8a01e15fbd4af4075f4ea068e0a6562220146', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '917f390eaf9ee3ae0c138fcbdb975724615cfaeb', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '31ccf1fa7e2abd1b79fcebee26c4ec4aabf33fd3', class: "legend secondary" }), h("p", { key: '13880ece0daa86a3013aa370b50a6c9d73867702', class: "p-0 m-0" }, "Previous year")))))))));
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
