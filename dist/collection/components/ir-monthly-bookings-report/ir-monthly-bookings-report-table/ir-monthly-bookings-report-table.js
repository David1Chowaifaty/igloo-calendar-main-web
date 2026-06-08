import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'ad109fd2b5b539ed3347964475d69f13ee642284', class: 'card p-1  table-container table-responsive' }, h("table", { key: '65272120ff1547236318faf7eb85eadca6bf6385', class: "table" }, h("thead", { key: '8cfe9b7d5315a7591060fa3e3a6961dc4c177704', class: "table-header" }, h("tr", { key: '806a50d9dd68cc71cee0882d1b39c97ad5229368' }, h("th", { key: 'e6efd057eaa3f9040821ddb15d2c1bb56b04b294', class: "text-center" }, "Date"), h("th", { key: '55b92f15e32c9f0f342c3462aa9a81a30342e468', class: "text-center" }, "Units booked"), h("th", { key: '9e08273403f36c2a059298daec116c1835e94307', class: "text-center" }, "Total guests"), h("th", { key: 'a272a37a1bbf35737e8acb00a87df2c94d2e1808', class: "text-right" }, h("ir-tooltip", { key: 'cfeda599028cca45b1ade8e79473dbfd84cb2fdc', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '69cf8b75363ac6b6e723b414cf895a2ba8eb46f1', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '6049898393936a0f0cb5cdeb7a1179d49f76308a', class: "text-right" }, "Rooms revenue"), h("th", { key: 'ddd16781065f636665760e0ce30530e713f41d95', class: "" }, "Occupancy"))), h("tbody", { key: '06f240dad47278bd426e952601890518042a4f97' }, this.reports.length === 0 && (h("tr", { key: 'da388d41611f95f7577497f5f4250f261ccef852' }, h("td", { key: '2ff289aa149b45dbd11c3af8c9a757df54a24105', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '0ce33cbf9516b5b87c2995cdba650afc67dfba8f' }, h("tr", { key: '3dc4b2beff9e484ecba32d067c1f6f03e8c995f8' }, h("td", { key: '2beb27439e15d90887ccfb7dce695fb2db1d0a9e', colSpan: 5 }), h("td", { key: 'aef41fa1b35fd99ce6484736967840f82627ef2c', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '43e28798cb375368c19e2700eb2549ff784e0822', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '0695dacc329954d05e3dfcd63183497a932ca786', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '4f5435a1dccd45ace3cba8ea6beaf74ba9401bd8', class: "legend bg-primary" }), h("p", { key: 'ee8fbaf0cc7cc51a61877c6c5bb3dbe966ce5104', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '0449200d11b158a71532e14c1410390f56c21817', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '9d7579c6f602bd90cb8a9eeb90e5bd7becf2b24f', class: "legend secondary" }), h("p", { key: 'e67c83e0c8e316494ce2c8dbacf05e6573cf4917', class: "p-0 m-0" }, "Previous year")))))))));
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
