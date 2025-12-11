import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '8f7898ae0205b6a217af0026490e8343d574f434', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'dfbd073f7e1d68eec81e8d2db4a87970209d4210', class: "table" }, h("thead", { key: 'b3933359f63d979fcb21f042507ac42c312b28a7', class: "table-header" }, h("tr", { key: '924fd85c7da91080525a24813b1f5b08707437ea' }, h("th", { key: '83449a2e979dca360a80c8944c83173512bae8a4', class: "text-center" }, "Date"), h("th", { key: 'fb9764bef8120443186cbc2fe44a242adb1d16ec', class: "text-center" }, "Units booked"), h("th", { key: '05b4a1d7e3314cffc73b3a6fa9fce53bf5b07c8d', class: "text-center" }, "Total guests"), h("th", { key: 'b0e3ead6c50542f86326be9f315c16b00a0a69bd', class: "text-right" }, h("ir-tooltip", { key: '7fb2e203954b741f0f954ef7c7c32e9bc50f7787', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '47a28294caf14ad1c9b20478d993c5820feb3cd9', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'b164f029d68674d3184d5f38aac74a6b91962a58', class: "text-right" }, "Rooms revenue"), h("th", { key: '9f5558b9a0ca36a5d291ecec348829554d71a0e2', class: "" }, "Occupancy"))), h("tbody", { key: '2586d78e6a67a34573d72c0da12fb69302b8ec18' }, this.reports.length === 0 && (h("tr", { key: '05456987c0f222e5f2b28ab2a3a28de214b07a3a' }, h("td", { key: 'f03525b66de082d94288fe17fb289aeaf910ee95', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'edd452f376f139e3ca28bd15364a8e65ae047ee6' }, h("tr", { key: '0151e1317e4b3adb028ccb2c795915de78002060' }, h("td", { key: 'c5483ba836e8e3c9243bc8824f028d1621c3e0c2', colSpan: 5 }), h("td", { key: '8ee24327674ce80397eee29243d9d86a2f7dba25', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '9301f1d090bcf637be992a6c22f261d4c9464a02', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '128d3380fde0f6d6dc53e574222615f74843faa2', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'de6f6e40d52d9b0914a94846cd9d8ba0ef1b27a1', class: "legend bg-primary" }), h("p", { key: '2f295303b9af5bc1e124a784a4b20717f24f845d', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '31d2fb15455ce187ec63dcefbe9e6c97969c013a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'c055b3e7c039a4834ff2046d858582e3c8c22aaa', class: "legend secondary" }), h("p", { key: '746db87057bdcb350f8dbd85302f931659e1af3d', class: "p-0 m-0" }, "Previous year")))))))));
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
