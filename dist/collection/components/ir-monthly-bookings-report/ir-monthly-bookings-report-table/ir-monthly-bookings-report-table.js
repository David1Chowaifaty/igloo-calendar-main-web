import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: '2a8bcfe3aa98a2c8d1ee2cabb072bb57506b52ea', class: "daily-occupancy-table__card" }, h("div", { key: '017caa9bd6f54ee71219e3a199f55053061647cd', class: 'table--container' }, h("table", { key: 'df01367cc458008d2026f7d685b3506aab408fd8', class: "table data-table" }, h("thead", { key: 'e54c0a9514582ae7169aaf514a1d91301cd9558a', class: "table-header" }, h("tr", { key: 'b3d3b3c8dbda80fa04b89ef786af8379cfcb4dae' }, h("th", { key: '96fa5f5bf07ce9987c42e3d43d66e794e0c23832', class: "text-center" }, "Date"), h("th", { key: '9b6b6de8d7b5a9fe2e020e362460f82e92841db1', class: "text-center" }, "Units booked"), h("th", { key: '20f74ca0be1aeb6d6ae266adbcf50848441cf38b', class: "text-center" }, "Total guests"), h("th", { key: 'c83bb39b3347d59e14535e4cfe93a641fdb19369', class: "text-right" }, h("ir-tooltip", { key: '50324514121f0dc08fd6b2f86c4b313ec7c24e69', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '5b78a54464ed9680abff3c5e957a225ace513ef0', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'cf50a30b53cce92c1a68013bc65cc808c8256f42', class: "text-right" }, "Rooms revenue"), h("th", { key: '79e6b7192b4c78962b609be50157b9fe9b4ce962' }, "Occupancy"))), h("tbody", { key: '48d86005dee03042c16f49114f560f7336bb4332' }, this.reports.length === 0 && (h("tr", { key: '448618b50ad8d404faa85db7fefc8114ae153a93' }, h("td", { key: 'a2da0a57c42ecdae18e7934137fac0bfb2bcfe29', colSpan: 3, class: "empty-row" }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '1174e5514913bbe9c13fbd4cb1c1b4f7c6b11811' }, h("tr", { key: '544894d0c39765a871794b5a59ab4e2c67f5ee59' }, h("td", { key: '8a84e2dc8989587fb60aa181dc311f914db50ceb', colSpan: 5 }), h("td", { key: '213311766b9a259394602a129347105c8dfe9596', class: "legend-cell" }, h("div", { key: 'bb956132c7b55b7a69823a5eb8269aef0d3b3b6f', class: "legend-row" }, h("div", { key: '020bf79133c1cf7f61e767983e8e3846a77551a3', class: "legend-item" }, h("div", { key: '5ea254071ca86dfd0d4acb9786033a8bf13a5b70', class: "legend-dot legend-dot--current" }), h("p", { key: 'c9b12558ad2df4c8536a580c977d53bfa134cc17' }, "Selected period")), h("div", { key: 'f2f46c80f3518ab496a4ca3d2173d210e046b454', class: "legend-item" }, h("div", { key: '37271d09ae50485a55c3994b394c68bba1581b1a', class: "legend-dot legend-dot--previous" }), h("p", { key: 'fe4fcba85f70ac1e1b0e99bff744cc678520fbbf' }, "Previous year"))))))))));
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
