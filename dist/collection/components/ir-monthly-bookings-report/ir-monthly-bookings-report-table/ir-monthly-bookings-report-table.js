import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '93e9aace9efb6045a046450511af385c5758f0b2', class: 'card p-1  table-container table-responsive' }, h("table", { key: '7c139db2d39ed34090ab0b2cba6f78b67a203604', class: "table" }, h("thead", { key: 'eb0803a2580b174814ba47b80aa0c2b76827193f', class: "table-header" }, h("tr", { key: '8d37066ec8f4a8343d1d32d6618a8e51d728dc2c' }, h("th", { key: 'aaf4a670864f2b9a9bb5e8049d1029b3f8fc7f25', class: "text-center" }, "Date"), h("th", { key: 'dcfa6b31a65debb90713a65bd16ac404f42614a6', class: "text-center" }, "Units booked"), h("th", { key: 'c864a22ae4b35c8d623f4d77dfd4c1d6f714059f', class: "text-center" }, "Total guests"), h("th", { key: '5f5bd79243ad7d614dccf33856a7f7481c0621a3', class: "text-right" }, h("ir-tooltip", { key: 'a084f4669af43da8436fc1c2671d42d7485a8094', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'e7958b85c931c9f11aac007440f95e5e8e88da28', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '84ed15b2d98340eb1e0808e204e87708b6f22adb', class: "text-right" }, "Rooms revenue"), h("th", { key: '7bf723d6f6339528887218afd1f70b2d32d45dd8', class: "" }, "Occupancy"))), h("tbody", { key: '2b88cc848aada703c47ad7db162e92ec5807fd83' }, this.reports.length === 0 && (h("tr", { key: 'a6fc5e8ea79801d8df18fc2100074f8a0c95bd13' }, h("td", { key: '7ad9de020942c01f81cca2bf459ef9e60d869dd9', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '530550d6c8160aa34831c5768a4c605f38806295' }, h("tr", { key: '6af60fba30e8dd2473abf619586dee8aafa73304' }, h("td", { key: '61fed7e021d555281021e63c992e288de032c763', colSpan: 5 }), h("td", { key: '48d54204e7954f6891bd641e709fdf5c6c0c4d40', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'fe8c2c4dfa69f6a9af9a2810ac3961326b352539', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'bf834b29ac2a04018dc9988624d8cf40de741245', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '069becb1c3445c9cbfbcc7641aaa6730b03b4d1d', class: "legend bg-primary" }), h("p", { key: '294ee48ae4cbedc59349c184877ba44b7f8fe0c2', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'a70f0525843aef3639687ab6a8290e2f49389620', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'e2c7cb798dc362e6061e0d027131782b4e83e3b1', class: "legend secondary" }), h("p", { key: '775c9960d39bf737630c716572543ef35e930de3', class: "p-0 m-0" }, "Previous year")))))))));
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
