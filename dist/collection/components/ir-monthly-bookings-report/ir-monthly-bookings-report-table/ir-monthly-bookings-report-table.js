import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'a70db001afe5187e2f908d0b898ebf8b2ddd3ea3', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'a22e38dc2c0ef69ccaa63cd545115f184332a3a9', class: "table" }, h("thead", { key: 'bad890c70b3578a93afee5a8adb3346eefc332b1', class: "table-header" }, h("tr", { key: 'e0d77ec5572b8605562f74cce3f3841d462267a8' }, h("th", { key: '5ff4635783d9124e25eb526aec9a766350c1f5dc', class: "text-center" }, "Date"), h("th", { key: '66e0e3333beff1cd1df71f3e89f371ed35da69a8', class: "text-center" }, "Units booked"), h("th", { key: '6cfc985d02369990c526bc8a889496dfc030bbe3', class: "text-center" }, "Total guests"), h("th", { key: 'cbd59314614a9f8b1b139deb2fd57dce4b15e600', class: "text-right" }, h("ir-tooltip", { key: '8b526e5c4fa920230b1f896c386e85d0185c4420', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '950daebc13ca51f5bcc67569b37ed3c552d4593a', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'e8b5398e8bd61e85902b2b3e51e0a4186807a349', class: "text-right" }, "Rooms revenue"), h("th", { key: '8a266e9aa4ffbcc1602f06aed218d6f97cf7ba20', class: "" }, "Occupancy"))), h("tbody", { key: 'b10feb6ea68e6631b8c7a00d86e467c912522e84' }, this.reports.length === 0 && (h("tr", { key: '5dbd69be8dfa85a7df5a0262060175fcca378319' }, h("td", { key: 'f0aa512924154c4f9a61f30a23b4a8a87c6c4083', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '156c84af24cd4f98a23ddb8e341f3559c9b8b7cc' }, h("tr", { key: '5a388498e45f86070b3f9d171156da8e14aaab4b' }, h("td", { key: '2ea60027efc0a48922ba41b37bef284af93d758a', colSpan: 5 }), h("td", { key: '554ab1f63565a0621bc87cc5deae930d07a7f625', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '04e8ba79b93a011ac20fb49259a701f25743c29e', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'bcadda1ab525aa5177214c8797ede33735bf8ac5', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '65df2c57a901060752d6facea3831f333d020238', class: "legend bg-primary" }), h("p", { key: '85fcc86260465b9a8dcd81052b4bca977e33e78a', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'a26d07f7b5867dbe96d6795760753dfaaa41ee50', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b2ca8fadb09cb63a7c11a6fe1ba77fbebd1aac66', class: "legend secondary" }), h("p", { key: 'd533b230294c14e55aee7a5f2919f81862c2e5ab', class: "p-0 m-0" }, "Previous year")))))))));
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
