import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'ac14efb216e8d995aa2442335a8a3fc274059e19', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'bfac407f2a140809094053f535cc6318e1185ea7', class: "table" }, h("thead", { key: '36124b537b3f60a54d35062247db322f3d3457c0', class: "table-header" }, h("tr", { key: 'db52e1286ad87238b86aef5f4511031037e0410c' }, h("th", { key: '7f242ac3f685ad9ded64b20ea09f03390e4319be', class: "text-center" }, "Date"), h("th", { key: 'c24915da6681c71074e738b00882afe20614b4f8', class: "text-center" }, "Units booked"), h("th", { key: 'df9c60a38d74ada117684d10e9874c131567eedb', class: "text-center" }, "Total guests"), h("th", { key: 'f338013ac25149c5554c7ae59a21eff6b05c3be4', class: "text-right" }, h("ir-tooltip", { key: 'd15bd7839179456258b5ced817a2696eac404a03', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'c2de8589506fdb6acdfb24716b407ff32221064b', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '07e0dc3c436697f43d0cfcf863dd20d81a140219', class: "text-right" }, "Rooms revenue"), h("th", { key: 'cf5bcc76a599eb50176b12ee106cb2c35b84bb6a', class: "" }, "Occupancy"))), h("tbody", { key: '9faec357afd21b31f56984dc6dd09f92a537aef0' }, this.reports.length === 0 && (h("tr", { key: 'ef1fd78c17dcbb04ccc1f598c4513c904878db84' }, h("td", { key: 'd394b97e4044afe608f497cbda0de0f2ca5e4f57', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '21b630fd8c7dd0406c7c9c6a64023caa1874983b' }, h("tr", { key: '8e66ffc0589939a2a5e585395013719abf547f1d' }, h("td", { key: 'c2bd327cecb66b719c8772b36735c63c2ed5a2fd', colSpan: 5 }), h("td", { key: 'b0181706c8fdf0bf33527f76fcf817ebeb87596f', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '47c3ebe5d97699d7f77e69c210135ae9c67dbfaf', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'bc9fdb85dfa914910af327b5526a9406bd32ea8b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '3128f0e328c242209ee01a90fcd1b4d635a33766', class: "legend bg-primary" }), h("p", { key: '4c2be28ce38c30abb55cb918699a30d3070855c0', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '363f72a0d79d4f6512e56c9e57f1414e84c913c9', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'c452395a54889e95ba0ea8fa10294b86a5fa05fd', class: "legend secondary" }), h("p", { key: 'e1439b94aee0b662c1b727df39a5ba2cf4282b6f', class: "p-0 m-0" }, "Previous year")))))))));
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
