import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'fc0d915c5e7b7b2715cfff72fe5e15d43caac023', class: 'card p-1  table-container table-responsive' }, h("table", { key: '9ba5bfcb9e206da9d09ea4e3d906b6e4b9090cfb', class: "table" }, h("thead", { key: 'c802ba80ddadab80444d767765313cb250d4b21e', class: "table-header" }, h("tr", { key: 'abd8344c4961363f296fce10abdc0ad0928ea29f' }, h("th", { key: '5c44428705c74c2e0623df5b88df6601ae28002c', class: "text-center" }, "Date"), h("th", { key: 'a271ceb25909a56445fa5d84bf2ea65f36894c40', class: "text-center" }, "Units booked"), h("th", { key: '730cf3e92dad177de9117f183c978cfa7a0eb2d6', class: "text-center" }, "Total guests"), h("th", { key: '6a033ca9b0655bcaee80dba96f86251b05604323', class: "text-right" }, h("ir-tooltip", { key: 'e1c4a5098f10a9b61ad7cdfe358d16f4dd14e3fb', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '6475fabf1a06aa1d5f625e257461866edee15578', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '3ae52769d3b34de22727b9437f183a5335d985db', class: "text-right" }, "Rooms revenue"), h("th", { key: 'c1c2622e632dbb984588ffd03274a9703a451b3c', class: "" }, "Occupancy"))), h("tbody", { key: '14cae01a641eef5641beca85f040eceeb1654340' }, this.reports.length === 0 && (h("tr", { key: '24b3bdd3390ef15cefac312a82426a1392568504' }, h("td", { key: '39080651950b5acb87214bbd2cb9207d32121cf9', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'd7cecb21b5dc2af92d676f2978e675e8c1d56129' }, h("tr", { key: '141e4a9edb3fb5a616c816b089c187455f686240' }, h("td", { key: '3c9303c2c7d17779ff6b1043e8929f3435248498', colSpan: 5 }), h("td", { key: '1597df5ccf1949e10546fdae2fbb32baf2a2983f', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '179dd23b68f26b192b88b38290b997d30b0de02f', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '14dcac1ee7eeed2774be6279e84df054627237fb', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '4c794674a329671a48f822fc7bc0dadc88f9b3a1', class: "legend bg-primary" }), h("p", { key: 'a92d8ed0e3f25fd769a1bcbe7ad785a094b0f679', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '51cf34ee5359aae828731f7f0e7dae0159611073', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'e64179c9d627952a3f7902faa4a3e71c9d855d37', class: "legend secondary" }), h("p", { key: 'ed8b3e0baa9a264988638b11059ea1d2c9e44b71', class: "p-0 m-0" }, "Previous year")))))))));
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
