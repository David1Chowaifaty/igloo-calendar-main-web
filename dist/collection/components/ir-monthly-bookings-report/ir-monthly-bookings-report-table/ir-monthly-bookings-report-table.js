import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: '7aa319c2618c679a5d406a87eb060e9ae4da9fd4', class: "daily-occupancy-table__card" }, h("div", { key: '09b2ef35599db13597997a7292afd20257da4ed8', class: 'table--container' }, h("table", { key: '06282674a3f8a3123aeb2b871607c6de791bbe0f', class: "table data-table" }, h("thead", { key: 'aa628131ba7ed8ca9aaaf5875ae929fddd073b8c', class: "table-header" }, h("tr", { key: '848ab35475729cb0ff42ff4f71dfe8c1a7e89a39' }, h("th", { key: '1d8fc638c6716fe1de4fe95f939d950d1824afb1', class: "text-center" }, "Date"), h("th", { key: '01bcda1046f32962ca516f9886fb0b747ec0f21f', class: "text-center" }, "Units booked"), h("th", { key: '5603694001c2d2287cc6a9a9722df6cebc5f40bf', class: "text-center" }, "Total guests"), h("th", { key: 'a50cefffcbe350b4c23c796175fcd90ce9b6418e', class: "text-right" }, h("ir-tooltip", { key: '97bdf67c1e9d484d6b4fbb0ff5af1fbd61982f25', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '8e3d3bd454e3a148732f44836ca5a8a850b79738', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'e72805cf98ab4aba49937535e91781187fb7fef7', class: "text-right" }, "Rooms revenue"), h("th", { key: '1fde4133934def73ed7a1d973426958f9ae0d954' }, "Occupancy"))), h("tbody", { key: 'a1c7b284f5084d717ba6591e007436e337558bf3' }, this.reports.length === 0 && (h("tr", { key: 'ad1ae00a3ae70f4b6232cba9f37e559b33d3cbb0' }, h("td", { key: 'f3ad85eb9ba128407e644fa75566fd21faaf105d', colSpan: 6, class: "empty-row" }, h("ir-empty-state", { key: '523c5df668836b22a4e4ec8e507041dc3517c321', message: "No data found" })))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: 'c8ac949de87197f2a3e2a794050d2f8fa8dd2ae2' }, h("tr", { key: '9fb0b61b9836a1ad94386d852eb034416b9c214a' }, h("td", { key: 'ad809fd5eccf1d883e58d7a73272d698cadf60df', colSpan: 5 }), h("td", { key: 'fb09af1b886c33ae017c43a39d2c4ef5acf0c219', class: "legend-cell" }, h("div", { key: '7144e9a41213b02dd3d456a3b43424c46f3cc422', class: "legend-row" }, h("div", { key: '777e39fcfa5d4a3e40de1cd9bfd24926997b4015', class: "legend-item" }, h("div", { key: '20bed0d91bbf4a22f194da7c1f7e42b08bd595b3', class: "legend-dot legend-dot--current" }), h("p", { key: '0d4820c9beb25af7831323566f04075be6c58743' }, "Selected period")), h("div", { key: 'f5f9d5c0c5dda8ab54984c75d9f44933befb85db', class: "legend-item" }, h("div", { key: '1426f890234f8c07dc00ea80b58413c0d04ed913', class: "legend-dot legend-dot--previous" }), h("p", { key: '4096ca7faf4ddf002e63804a72aacb570fc601c7' }, "Previous year"))))))))));
    }
    static get is() { return "ir-monthly-bookings-report-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-monthly-bookings-report-table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-monthly-bookings-report-table.css"]
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
                            "id": "src/components/ir-monthly-bookings-report/types.ts::DailyReport",
                            "referenceLocation": "DailyReport"
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
