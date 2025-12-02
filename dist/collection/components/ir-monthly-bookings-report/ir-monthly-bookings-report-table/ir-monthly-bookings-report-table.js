import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '1033ac18bc7e88475888b55586133c6b0205ceca', class: 'card p-1  table-container table-responsive' }, h("table", { key: '98a2e5960729d2f4d7c07ca2b2ab8724b92c9dda', class: "table" }, h("thead", { key: '022355ba63ba1b7b36a19b68b730f870e1cb966e', class: "table-header" }, h("tr", { key: '24f2ea265496a9710245991f1b822e6cecffd65f' }, h("th", { key: 'b223cfc5c46eb13084617fa8613a8a04cc59e28a', class: "text-center" }, "Date"), h("th", { key: 'fc91d792047d471d04c097083fa76f5d58b1cd76', class: "text-center" }, "Units booked"), h("th", { key: '549cb19cef56ea2329a7eef01ce56dc03aaf0fe3', class: "text-center" }, "Total guests"), h("th", { key: '8cc5cdfaeae93c4ca26aa2f25fcb6ec9263f02c8', class: "text-right" }, h("ir-tooltip", { key: '16d0ae948179484512b37719425315b9a460a5c4', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '53e57a8ea4483cdbf2581d7e27b1016d0b1d8fa1', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '960c42b641611cc51c350ef9c8f712dd55b89e2c', class: "text-right" }, "Rooms revenue"), h("th", { key: 'dbed7b6364bd98ab8b1b0801950112b3d36db78f', class: "" }, "Occupancy"))), h("tbody", { key: '0d787c2aaa7446cbccda4d2f58749ef07892de13' }, this.reports.length === 0 && (h("tr", { key: '7beffb63254afcb9b5789ea55a247d883dc21985' }, h("td", { key: '895f04403a6fefd88fa8806e40fc190746f080fb', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '6daf80420f8f9c75cc2bfdf2e7ea2b1361db84e4' }, h("tr", { key: '019492c8e6df46dd6eff58136bccd371906ea61b' }, h("td", { key: '2520f64d9e2a0681ee8fa65b357bdf9dacc7cd80', colSpan: 5 }), h("td", { key: '331ff9d7aacf15f8ad1ec75fe0db74b5c4a71392', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '53e98873875e79428f8bee437855513e4e2d739a', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '01a69afa3cadda17e489861bf71846ba03a54cfe', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '978323d162b87f8819d8ba68fada903bd38d75aa', class: "legend bg-primary" }), h("p", { key: 'f63f8805dd6a3cd3388f61858721d7d157e92e41', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'a437e545c40c4eeeee0850615ef2dd600b93d72f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '37292c0d36c6439ba70cd9e2334f043778e91ac8', class: "legend secondary" }), h("p", { key: '723ca1c6eb43b4c4d863a1d68b7f1e750c36b1ea', class: "p-0 m-0" }, "Previous year")))))))));
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
