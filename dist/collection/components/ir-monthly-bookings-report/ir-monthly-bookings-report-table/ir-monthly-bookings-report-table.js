import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '77b300d6a604c37014297d56c576b0e390a7d05c', class: 'card p-1  table-container table-responsive' }, h("table", { key: '994bc29fab258557e1f7b806f4bd111329be7586', class: "table" }, h("thead", { key: '529b78acaceed1f270bd25885cff3c9adff0a4f7', class: "table-header" }, h("tr", { key: 'ce05aa1689b3ee1a7766a3c36209a74d731911c5' }, h("th", { key: 'bd67cf06b2c9a316ce77643a49c94ebe8c2cc8ef', class: "text-center" }, "Date"), h("th", { key: 'b22f2e6dcfc4b7437eba75329ecb1e8491062bf5', class: "text-center" }, "Units booked"), h("th", { key: '694ae0c06d0bea9ff55ce73d4446a1941d163ca3', class: "text-center" }, "Total guests"), h("th", { key: 'd0654e102bb9ef89b74df072f8a1300cda860192', class: "text-right" }, h("ir-tooltip", { key: '2ed45ac1314bb714405bfd332ff48960096baed1', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'e97b765252f77aaea84f056279ae8dd69cd35658', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '67dd4fb5e9c571f655afabbe9750e63e5aed27f0', class: "text-right" }, "Rooms revenue"), h("th", { key: '9dff647f81956ea7482a6f15d30b5dd2363991f1', class: "" }, "Occupancy"))), h("tbody", { key: 'c70255581d4cc12bd98281228c90abdaab451d26' }, this.reports.length === 0 && (h("tr", { key: 'c4b9ec0f3da6adbdc385498817a4ad27c1e1a258' }, h("td", { key: '99cba8b33d2cbd2ab38380527a920a8f5d326352', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '67b10b8b59da6da1eb42403c74731b4e9a67915f' }, h("tr", { key: '04d52f230a4504f1c4b134cdada4a5e5a71aa27d' }, h("td", { key: '50b50161f9496a75e188ba7f503149c0f5665577', colSpan: 5 }), h("td", { key: 'e54086d0905b0b63385a199a232e27282459409e', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '2b6ef56afec6ab6206791afe11837180e4811b4e', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'a5d03bc3abb9653b6edcc78c8335dc629a75c50c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '1735d9c3244ca8be13e2dfb294d15e46571db4ac', class: "legend bg-primary" }), h("p", { key: '001f865216b686d32f12fa46949fac60346d147e', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '4818b67fa1cdebf764f0e12a3c8473b5a9e99677', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'd182cec96c89d4fe451a64c666d27915ab55911d', class: "legend secondary" }), h("p", { key: '55b79aa9f473a9928b44ee34fc8c412dabf95af6', class: "p-0 m-0" }, "Previous year")))))))));
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
