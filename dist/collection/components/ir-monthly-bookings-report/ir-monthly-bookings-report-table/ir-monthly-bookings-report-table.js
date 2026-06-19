import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: 'eaff000bcde6a3df5ddfe0394341d5c1248de24e', class: "daily-occupancy-table__card" }, h("div", { key: 'de0b4cd5a5d1c42b0417a898c7ef4b6d05a16c72', class: 'table--container' }, h("table", { key: '1974165875f42d11371b8c6a28c4ccee7e3f86df', class: "table data-table" }, h("thead", { key: '803bbf5d0837a174ac5a6d29cf2f9f22d7b69c02', class: "table-header" }, h("tr", { key: '4b5bb57531ce77dcfa125dbbd81702788e46a854' }, h("th", { key: '21ad6e9cac4e4ba0409d77b4151fdbccbdd62824', class: "text-center" }, "Date"), h("th", { key: '94df5476a5ccfde2b2350ba74ec1e139003aeee8', class: "text-center" }, "Units booked"), h("th", { key: '9df8b66629243ff4ee1b7e56bc38917b6c16c35a', class: "text-center" }, "Total guests"), h("th", { key: 'e88b7f0a446572816990664092dc8fe0d0a1a9ba', class: "text-right" }, h("ir-tooltip", { key: '875382bcb0aa2c7fbb1750abd27703293e9be8bd', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '1dd4595c91e94e93de533037dedd4013dde78fba', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '92b427b348f8431cd7f4c6dbc1bc04f7fc62c4e2', class: "text-right" }, "Rooms revenue"), h("th", { key: 'acf067728474751d337eefdd93fee1635408caeb' }, "Occupancy"))), h("tbody", { key: '54ff243709f4422eb364a536eadabd75ab7ec9fb' }, this.reports.length === 0 && (h("tr", { key: '385a23ea2b2505d94a8189146e9c555df3ca3137' }, h("td", { key: 'ab34227465a9dddff2580d118e0909a558f8f468', colSpan: 6, class: "empty-row" }, h("ir-empty-state", { key: 'f60b0a6fc4647b0df5d580b85dadab8dc25878d1', message: "No data found" })))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '736e3f4c714fdf26c32a58ac48031f05bea2c9da' }, h("tr", { key: '22657dd8e77450f7bb1ff8e0563d0f4c5bdb0c5e' }, h("td", { key: '8e02cf64f414e41903de0625495d9a656e5efe07', colSpan: 5 }), h("td", { key: '22e9ee0a5efdac83445425a7f4fb91c8be4d63be', class: "legend-cell" }, h("div", { key: 'e0e53d986286dcb942b36aa22bf18fa096a1613d', class: "legend-row" }, h("div", { key: 'aed8e9ef2b7ae4593e0fe65d6a2504421597d6ad', class: "legend-item" }, h("div", { key: '6b6b8e21b6b30121b902ca8a9fa4d9ec0bd0da5e', class: "legend-dot legend-dot--current" }), h("p", { key: 'facffc57ef9040454141bed87f08b3fe3c8059ac' }, "Selected period")), h("div", { key: 'ab93b809db03118f89e442fa9b119e2b92204c67', class: "legend-item" }, h("div", { key: 'c558a5cd3317d9cf0b377a423e8309c50b84a5be', class: "legend-dot legend-dot--previous" }), h("p", { key: '61d574c4958774efc546b27cc831036f2b0d683d' }, "Previous year"))))))))));
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
