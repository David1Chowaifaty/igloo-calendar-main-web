import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '06a2100faddae3fe6ff75f5e420ba0b41e29ea83', class: 'card p-1  table-container table-responsive' }, h("table", { key: '095f659a3dc179f8a587e466d338dbc181ede9d4', class: "table" }, h("thead", { key: '43fee7217bc842d25f6ac8163f56e7cf031adbcd', class: "table-header" }, h("tr", { key: '209954c7fcc71a90fd8268528d48c34d2860746a' }, h("th", { key: '568bd40c15f196d692724d71950cb2e8a0103179', class: "text-center" }, "Date"), h("th", { key: '9e6873ef21c7b4c41352c4b88ccbf43b318895a1', class: "text-center" }, "Units booked"), h("th", { key: '0ee46c61904e2332e58246a60cd76afe2e8656b0', class: "text-center" }, "Total guests"), h("th", { key: 'ad84cd6303a367179ee7215e05898bb6132049e8', class: "text-right" }, h("ir-tooltip", { key: 'd9d12d2e9478ccd2f804e4e2c02bdb62d388813b', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '5f8b76fb3377f69acc919a3750cbd2082c4cdee0', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'f2334c0b3f88ef2131f7fae8f1d0badf1456a05e', class: "text-right" }, "Rooms revenue"), h("th", { key: '563af64227195bbd3d2d2dcf5fddd268a345b881', class: "" }, "Occupancy"))), h("tbody", { key: 'eefb82747dece50ff0cd26f5f87936bd7914eeab' }, this.reports.length === 0 && (h("tr", { key: '4895ae768d8bdf1ab9e80df777f3adc1f8369ab2' }, h("td", { key: 'f6e998dce5a57dbfef9c865ae9c309df2215b924', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '831aec798887d1d42ccee57ad57c8c4eac170df0' }, h("tr", { key: '531dbdc7ebdd399ba79b7973038c8404328d25e5' }, h("td", { key: '93fd85864892b655fc9b1ddb6fe4aa387b6bfca4', colSpan: 5 }), h("td", { key: 'de9ceb7a8d3ca21f8cd2141ef0fba3c791ca1025', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '57fb1970b9f51bede490df39526d9570ea06084e', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '154fb7ed4eff48395f5533e8f0131cce39bfac6a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'bae0b2851c09f43aa5508fc9311126850de3e186', class: "legend bg-primary" }), h("p", { key: '72b1bb4a9587bbc896dd4aea6b02e4547f5f1193', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '7ce717d642f99ee9144102fd10f431f93aa339de', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '14911b302169f156710cda1af72ab61ab7b9aa67', class: "legend secondary" }), h("p", { key: '4b388bb0d016a636173893d8aec3c250d608165b', class: "p-0 m-0" }, "Previous year")))))))));
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
