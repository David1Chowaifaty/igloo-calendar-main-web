import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'ecc016ac37a310e9fd5e4c1da1a60d8e84a2a62b', class: 'card p-1  table-container table-responsive' }, h("table", { key: '5675b388716b54be19471add9d520a2bfd0ddb30', class: "table" }, h("thead", { key: '51cdf2843cc51de41ae6975dc28dc687df341b04', class: "table-header" }, h("tr", { key: 'cfe93e0950c88d2025a0b73ff79123a7f74ae65a' }, h("th", { key: '3282df1d6b311ad0f022a05b5b724b967822e99a', class: "text-center" }, "Date"), h("th", { key: 'a307549093fb8b91a3e33b0839b891edb91ddaf5', class: "text-center" }, "Units booked"), h("th", { key: '8ca94ebb95bfd9dac3892b2731ca2987189e83e5', class: "text-center" }, "Total guests"), h("th", { key: '1838bf474c4404057a48578f0f811028d9e483f0', class: "text-right" }, h("ir-tooltip", { key: '8910781b6d127a19a616b9ef3d68b9f3722e3010', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '233e7d58cc4ecf29c814b8da2e7cf4b23d75390e', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'e8795d752dd13b518097f03568b3b3bb27d729d4', class: "text-right" }, "Rooms revenue"), h("th", { key: 'de69b97578303688a6dcbfce3672858da64e63fe', class: "" }, "Occupancy"))), h("tbody", { key: '03d6d71fcc1aab643f6d9270ecde0252b1712442' }, this.reports.length === 0 && (h("tr", { key: '74c7422375e2266d6bc0511564fa2c88989bec3a' }, h("td", { key: '71749ad3424320408de65cc355fced61b8c27113', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'b761b5b4e393301298befde8b4d938238934ad4f' }, h("tr", { key: '4b336cfbd27232ff85b6c99902baa2b22dfb51c4' }, h("td", { key: '78245a7127e2104e5710776374f8f756face796e', colSpan: 5 }), h("td", { key: '42cb6f5c13de436dd80388bcb65ea37cf57c59f1', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '4263ee35be7a74963c7bb3e9e70534809675840b', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '8626ef52724649138cadcfdacd37bf632c97e017', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '8d55c79e0ca5442d501e27e3cc76d01598e575df', class: "legend bg-primary" }), h("p", { key: '820c8982280dfcbbc2d5346f3589fe8c73d8f941', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '791ee75a1074a0121344db1cc2abae1af7563549', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '168ff11b063b2b8bed068510bdcf9832e08bc2ad', class: "legend secondary" }), h("p", { key: '3509e6617c2a096fbb8fea8a3693f0ac0f417f07', class: "p-0 m-0" }, "Previous year")))))))));
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
