import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: '6cf1dbc15537adf8a5c2d1d63f2664d53e72e9f7', class: "daily-occupancy-table__card" }, h("div", { key: 'b8f7d9c15e0ea1f089b5ccb26c2752d0492ea286', class: 'table--container' }, h("table", { key: 'a98adcfb4a9258d98657b33e609e8e14eecec015', class: "table data-table" }, h("thead", { key: '56248b492568fefac0290ba3c2754db3f1ae63c0', class: "table-header" }, h("tr", { key: '2bc0cfa142188e8ec4d0dd2cc25bd570b5ab8efa' }, h("th", { key: '45b8c3b8905f34433eb7fd3aae053b0b6e3a5ee7', class: "text-center" }, "Date"), h("th", { key: 'c738d93df616e9d71ce2316500e5b592183ffefa', class: "text-center" }, "Units booked"), h("th", { key: 'e74df1425949e47c1b68b0268ed66daf534ffe6d', class: "text-center" }, "Total guests"), h("th", { key: '01e6648886ba572379d0a81ae29bfeccecb0a3a3', class: "text-right" }, h("ir-tooltip", { key: '886e9920bc1f12c1632922e0983b6aa3c06733bd', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'a6dfea3b8a70c75d95985a3d6029e98a7ece04e5', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '9887904e324ca5763ef89ea75a9e2c77ca38b9af', class: "text-right" }, "Rooms revenue"), h("th", { key: 'f2165ad4d0d71beaacacb5383e0d0ef4afeb73ab' }, "Occupancy"))), h("tbody", { key: '2c637e45bfc2e66bb5637ebf5430ed2c7a1776f4' }, this.reports.length === 0 && (h("tr", { key: '665e0ca41b19c82920a2d8cc90abc3992303d398' }, h("td", { key: 'f0daa5a287324070c44146962ffe746d3c0d1464', colSpan: 6, class: "empty-row" }, h("ir-empty-state", { key: 'f8b0262a139fd0953a414f60643eb4e1fc3ce94d', message: "No data found" })))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: 'd79bdee864de9f512e6e80389de63f1b70f30bac' }, h("tr", { key: '9d3e95c641b74a596217410bf829b66014c368d2' }, h("td", { key: '0417775140c39269ba9ed3e2c09235d695d596c6', colSpan: 5 }), h("td", { key: '1b58be9c08ca490b73314e88eba8002ef08a6766', class: "legend-cell" }, h("div", { key: 'a73cadfd85a2af767c0478859a91b8cada6e7661', class: "legend-row" }, h("div", { key: 'a358139ccb28c1f0f9b0043c52598d5869229379', class: "legend-item" }, h("div", { key: '96b1d2cd09fca35a9051a91f30a1950d7d3039a3', class: "legend-dot legend-dot--current" }), h("p", { key: '82448542c02cdf635c756cb93c7fb5b495adb2a0' }, "Selected period")), h("div", { key: 'ac72c8ccf5b9f1e52570be488ebb1e3524c05669', class: "legend-item" }, h("div", { key: '4126472125a03ae455fd0bedffb186cbb17f0e41', class: "legend-dot legend-dot--previous" }), h("p", { key: '9b98968b236e81dc0b4c447f26f07cff69645aea' }, "Previous year"))))))))));
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
