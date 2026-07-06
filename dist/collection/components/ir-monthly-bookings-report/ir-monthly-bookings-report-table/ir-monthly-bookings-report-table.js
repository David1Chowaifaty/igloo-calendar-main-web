import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: 'd73f83a34e073273373d9034979d5f3ae625f8bd', class: "daily-occupancy-table__card" }, h("div", { key: 'bd6d40aa95e54779aeeff55bb52de9534216b08c', class: 'table--container' }, h("table", { key: 'fff66161e1ec7894b694e025366dcaa3c5cc793f', class: "table data-table" }, h("thead", { key: 'd154e654a208d72193b50245ba55f0cacf961da2', class: "table-header" }, h("tr", { key: '14a6a3432f73957a5490497306ee147ee84a271a' }, h("th", { key: 'aca6ee7cc0f3b2269fe9880fe3b238f0e27e72df', class: "text-center" }, "Date"), h("th", { key: 'c8f2b1c1de1b1e9965b68e7d1b9a7e7846003f3b', class: "text-center" }, "Units booked"), h("th", { key: '2c28d497b5d50c45a6da5312c685755ad350ffb3', class: "text-center" }, "Total guests"), h("th", { key: 'acc00329c9f8ce33d10f6328915ec5e55e3d8c93', class: "text-right" }, h("ir-tooltip", { key: 'e224007c5b6f4dc18ea19397abc343179f35dd4b', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '7b5db194849c70c701567f170c7797a1b1b64ad1', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '568172aff1c5dd1fe9e9356669c2051e01ab89e8', class: "text-right" }, "Rooms revenue"), h("th", { key: '7d359a3a916f85095b6e6ceec8ada0b3e6ab7688' }, "Occupancy"))), h("tbody", { key: '3ad18da33c0061c125d42cdfb756ddae461b5c63' }, this.reports.length === 0 && (h("tr", { key: 'cf20b0ebc77f312094c2385c34bb2c3697ce083a' }, h("td", { key: '86d28847c7446355c01cd554d50ee1c2fc5993f9', colSpan: 6, class: "empty-row" }, h("ir-empty-state", { key: 'f12b6c3fa25459b74d132f7d4975e3f7bf2e2936', message: "No data found" })))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: 'd2ae9263e3902556ff8af6329332ffa8582566cf' }, h("tr", { key: '4e2d3de445129a9af31fe5c38c9ce8c33bbfcc6f' }, h("td", { key: 'a57fac4190a05e009daeb0b2deeb4d18231436ad', colSpan: 5 }), h("td", { key: '4e976b18e7285a8ac97c5502b805fc653e691b29', class: "legend-cell" }, h("div", { key: 'aef133b7ecf322d65616e17bd7838b2ccf201260', class: "legend-row" }, h("div", { key: '4f3e55df578b8d80e138000d5be918b342e66043', class: "legend-item" }, h("div", { key: '1966e724260edb8070e00404d09207b54212498e', class: "legend-dot legend-dot--current" }), h("p", { key: '797928573c723cf371e00ca47813f377ab3f3d2e' }, "Selected period")), h("div", { key: '909cc2da648eb8971ff2c6de48d4f484e38245a5', class: "legend-item" }, h("div", { key: '0f921317797fa2a7863dbe7cb1ad6ff2b693c108', class: "legend-dot legend-dot--previous" }), h("p", { key: '8a4a6f3ca023e6ee8a3757c013dbb8a9f8c6af83' }, "Previous year"))))))))));
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
