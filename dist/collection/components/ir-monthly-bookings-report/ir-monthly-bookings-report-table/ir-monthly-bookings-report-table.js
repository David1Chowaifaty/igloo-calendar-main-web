import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'dc30a42e3f8fb7342f7a30162a08652ecfc95da6', class: 'card p-1  table-container table-responsive' }, h("table", { key: '1f4258edecb2490eace8b66ea8bd505249e6d3f1', class: "table" }, h("thead", { key: 'c8e367ef1c1bc386ffecfc25f1da35e086ba78b6', class: "table-header" }, h("tr", { key: '30cf247667103d0a837cf406fca3852ef6bca66b' }, h("th", { key: '28f2ef9293f7f89888b6fd156d9239fd2456753c', class: "text-center" }, "Date"), h("th", { key: '6b6824dc364ed0957d9a80b74dd3588af6bb6d4c', class: "text-center" }, "Units booked"), h("th", { key: '6d47a05ffc31b2a2084950952139ad91aca147cc', class: "text-center" }, "Total guests"), h("th", { key: '55bfb3b50d124343b0ebc34d3bc0f5062dc5fea4', class: "text-right" }, h("ir-tooltip", { key: '08af866ab6a5e2054c58f925e9462a67312a9d21', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '5663ac747da1f18ecd7ed18aafc7ef548a573214', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '4159b35ce73a7191d1fe75432c96c53482361fef', class: "text-right" }, "Rooms revenue"), h("th", { key: 'b73d154a304a66d94e2ef1fa964ff9e34cb18bcf', class: "" }, "Occupancy"))), h("tbody", { key: '2e6c9865817a9e598c95c4519cb7321da1a6f0c5' }, this.reports.length === 0 && (h("tr", { key: '2ff2f0c41152fea0f04367e99ae5ab302ebf880a' }, h("td", { key: 'e65a3870ea162ab7a3b69d949b621c797a19d0a9', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '3082248d5b486f631e94bcadb0994c6262d3e5dc' }, h("tr", { key: 'efa6555a1d72f642f4497d3560038f514c1539ab' }, h("td", { key: '05301bdc61f6c04d411484339b770c0d8d70788e', colSpan: 5 }), h("td", { key: '4df2f96e9b334bf336c7d55735c5c677aefd58b7', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'f8e95ae43ae3f3b96b2b10b5891576c8b29a1942', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '31efe5db64303df452eb8c57ee4a32504e1fb1a3', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'fab8f48f6e893608d72f80d901f128d12afe000c', class: "legend bg-primary" }), h("p", { key: '36b59044d2b5caf2ecebaaa2cc0495e33d45f5a5', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '962fb3cb344e459ba37a7ad5abd82eafbaa01bb7', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '8951487658f04a049ad5cf94c6ee8e292dd7946a', class: "legend secondary" }), h("p", { key: '08c4490228a8e724db89e6b0ae90781e21db43cf', class: "p-0 m-0" }, "Previous year")))))))));
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
