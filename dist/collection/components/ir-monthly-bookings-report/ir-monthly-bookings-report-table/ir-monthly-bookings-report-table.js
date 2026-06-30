import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: 'dbc3a7ec2701656642e401ba298bd4af04b5e7b0', class: "daily-occupancy-table__card" }, h("div", { key: 'd9306188aed6d252891fc6dcea3f94c5c2a66fe8', class: 'table--container' }, h("table", { key: 'db9fac112a47b80b1c470bfd63d4d3e38d9468b9', class: "table data-table" }, h("thead", { key: '2b9acc6c9cd0f7812345f1279211e887e654a000', class: "table-header" }, h("tr", { key: 'cc417ac4796d3be7470ff6ed7b0790c4c8a4aa5d' }, h("th", { key: 'fe80abcafb39eed690db1db13849f4802558ced7', class: "text-center" }, "Date"), h("th", { key: 'dd553ba9a91c3532f7a19b6d1d4b335f6d0fa405', class: "text-center" }, "Units booked"), h("th", { key: '7835bc5988f1152744019c6c4c5366f533709234', class: "text-center" }, "Total guests"), h("th", { key: '9615a599b023152f240b7dfc6253765c28a3f9be', class: "text-right" }, h("ir-tooltip", { key: 'c56ed091452cc94fd99a13df66ae812e6128fd46', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '4cee79a95b02b8adf94bbd6b3ab78744983d1834', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '42e73bac3a712882da14cc4d4d58f56dd022748f', class: "text-right" }, "Rooms revenue"), h("th", { key: '529919286e42859f31708447e89a10d96279bfcb' }, "Occupancy"))), h("tbody", { key: 'e0d6809761feb3f14e515fce4357e26e82f1d756' }, this.reports.length === 0 && (h("tr", { key: '27e0b5d09deccaabcf4a35c1e0f5c6164ae9ca77' }, h("td", { key: '42ae25047a2f50aa6ff1697a5a7eb6bf3d1c5bb7', colSpan: 6, class: "empty-row" }, h("ir-empty-state", { key: '223558461fa95f5c85f8cee5f0e44b4f7d2e537b', message: "No data found" })))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: 'b258d2a3388471fb26364b1674e116e9b41fa3dd' }, h("tr", { key: '6556d80700296a2e52e21f8d1907b442d86e871e' }, h("td", { key: '7764487b1607400bbe5881a2766ec31ee07c90d0', colSpan: 5 }), h("td", { key: '4280c8d1d0f0b367356325f55b7689dbffa1c281', class: "legend-cell" }, h("div", { key: 'cef9e8feab937e9dee5ebab831077a6f4028396a', class: "legend-row" }, h("div", { key: '3311ab850c88cc7ba043588105cc8d5fa1a4239e', class: "legend-item" }, h("div", { key: '344bff305deff4aabb62937919fd646b998d027f', class: "legend-dot legend-dot--current" }), h("p", { key: '6339f9ad7e186c9bdda5087f88155e3a558e771d' }, "Selected period")), h("div", { key: '464fe1da2368ec1d7aa7b7d8b6489a319c6b479f', class: "legend-item" }, h("div", { key: '901de69f085f6125d927a696b4ffce1d24ffaf9f', class: "legend-dot legend-dot--previous" }), h("p", { key: '0a7e4ccd2992d7276f8aad15a857fd74638fbd1b' }, "Previous year"))))))))));
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
