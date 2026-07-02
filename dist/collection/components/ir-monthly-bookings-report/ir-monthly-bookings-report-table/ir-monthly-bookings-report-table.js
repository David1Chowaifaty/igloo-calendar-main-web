import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: '2e0206382ba31efb53dd9f2a7dc043d9c5b734a2', class: "daily-occupancy-table__card" }, h("div", { key: 'fb52b398d237d510c3e0af265e139d448989c329', class: 'table--container' }, h("table", { key: 'f6bbc97c61f34ffad6fea04bacb42a1218827aab', class: "table data-table" }, h("thead", { key: '150d50f516c4842b28395a9ce65527515ac3533e', class: "table-header" }, h("tr", { key: '130e0c4b0e1b2c4d315648cc0337eb6867d1c7fe' }, h("th", { key: '22b75311333c15f1644479c64eb101f757f07105', class: "text-center" }, "Date"), h("th", { key: '0b3fad9ee360b0accc51a81ad04cf932b3e6d482', class: "text-center" }, "Units booked"), h("th", { key: '998a9fda0be37c4f29a2ba5323fcb6d26a3a2baa', class: "text-center" }, "Total guests"), h("th", { key: '7a91d30895f26ef003874005f803f5957fc79b4a', class: "text-right" }, h("ir-tooltip", { key: '61351bf62e989bf50c54128dfc5354ac8f516309', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '1a09cb4095a371ccda7786ad3bcaf6ca435b2a65', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '640a36e9138abab9bb892649cbf4c86adc502c8d', class: "text-right" }, "Rooms revenue"), h("th", { key: '9d55bc637ef146cef249e37a2c7d0463bf2be773' }, "Occupancy"))), h("tbody", { key: '90e1e15a2b8039b142e7aa6643aeafd910ac6035' }, this.reports.length === 0 && (h("tr", { key: '0376eea14e86668a648a0166e477d1d6f100465f' }, h("td", { key: '2b0b27171a759063e6ad9d1a1a550061358a5ccc', colSpan: 6, class: "empty-row" }, h("ir-empty-state", { key: '758491aebe3cda38419bcbe5e6ea2d24a675c00f', message: "No data found" })))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '767092302b4865aa92a480c843126c8b2ba564a5' }, h("tr", { key: '4d9d4fba41972bcd38c158ab8aea41d38e18b07a' }, h("td", { key: '57b5e88520a1c008a09608ef1319dde14aa630d1', colSpan: 5 }), h("td", { key: 'd83e0715c8ec8ad6254c4e145a5bfeacd92f7cb6', class: "legend-cell" }, h("div", { key: '112b3e58b8c112f7ea5ce9b3b7edead074647f0f', class: "legend-row" }, h("div", { key: '823b56711116c7208e4279077f5710682fda1a18', class: "legend-item" }, h("div", { key: '122f811625bb9a59ef0a5af6f0cb24c6ef431263', class: "legend-dot legend-dot--current" }), h("p", { key: 'e4e6f92b8a807724f8c20dcc6261919f5d55e7df' }, "Selected period")), h("div", { key: '3ae61a297d5c86a26b9e0807c3417e7c36c864f5', class: "legend-item" }, h("div", { key: '4c34306a05e147a292e1c6f2cf34fcac14e7dfbb', class: "legend-dot legend-dot--previous" }), h("p", { key: '51db41c7305635b7ec4db51a3845eda75f476c19' }, "Previous year"))))))))));
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
