import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'ba843f42e7d81ba3f1d3e189f810f613cdd93c13', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'c44e20696343fc8750b662605ceaf29429dbd64e', class: "table" }, h("thead", { key: '7c73b7de7e27b51554c4f445245fcd9b2ab995ef', class: "table-header" }, h("tr", { key: '87c180afe1512caf54a37f371bfa7d9b7f61d5a6' }, h("th", { key: 'ea2672213893a12640d9e012552713e664437667', class: "text-center" }, "Date"), h("th", { key: '04e2ce272d71d8b14c7956f976ecdffaba2a6c88', class: "text-center" }, "Units booked"), h("th", { key: 'fa712913970de492b081b321ccf63d63621bef98', class: "text-center" }, "Total guests"), h("th", { key: '099ca35fdb481c6e7111ae6caa190c726491fe58', class: "text-right" }, h("ir-tooltip", { key: 'f6595db0f52503bfa277556ad54306f9bbefea1d', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '817d4ad6cc20b067f5470e9244c16992677f1eec', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '326c6bb59ac48a79c2753e1305d57ff291ac4626', class: "text-right" }, "Rooms revenue"), h("th", { key: 'db81c006ea8204ec24c9df1605bb97d5ee5151ed', class: "" }, "Occupancy"))), h("tbody", { key: '622806d4b2b2ca7183a029314bacddf6d14f05df' }, this.reports.length === 0 && (h("tr", { key: 'e1062950ef324cd6d2a8f0f4316d790a4510bbba' }, h("td", { key: '3da166b8c094daea011e20e5aa70c82cecf8d83d', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '49e24b760b5b363ec3fb050c0029492f3fd726da' }, h("tr", { key: '91725c01c6bbfb360a7b423c09e8798b42d6b4ef' }, h("td", { key: '710881feadcad70f814e1a9b358d8823c82d9f8d', colSpan: 5 }), h("td", { key: '551c7d67d8387968ba4550d3ed4964536f30dc62', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '2799a11cbfaa66106f6d47328c481e7984e12cd2', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '5028def11dfacd7d508372ef3f2297ba1783d954', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '3aaaa16d3132c6b11edf4ca2e85c1ab4e02bd159', class: "legend bg-primary" }), h("p", { key: '8e50f2549d1e20f452832e760cdc291669900b07', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'fcb28639fc265cc350068a2365a1d2d6242478af', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '589f5ffc2c0b8080d557ad4e56d2e552a17f67fd', class: "legend secondary" }), h("p", { key: '22f240024459bc11e6c34a045703af929c307733', class: "p-0 m-0" }, "Previous year")))))))));
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
