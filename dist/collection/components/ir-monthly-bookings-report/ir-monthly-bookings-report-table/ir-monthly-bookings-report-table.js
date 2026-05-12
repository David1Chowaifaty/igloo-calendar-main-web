import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'ae5bcff8522a0b4d02308febd0ff63775ac242a8', class: 'card p-1  table-container table-responsive' }, h("table", { key: '503c6d19a0992aabcabee84f48d8c217e78898ba', class: "table" }, h("thead", { key: 'ed3b0841eae31de7e6c455056dcfed133ae1bd06', class: "table-header" }, h("tr", { key: '5c7ad4c5a5090eaedf9ae84e2a0737090cc7abdb' }, h("th", { key: '63898035e4ec757013d75f5572e45c4cd52ae82e', class: "text-center" }, "Date"), h("th", { key: '7c002633a42a10e4eea73831c6495d159e93981f', class: "text-center" }, "Units booked"), h("th", { key: '2ca1efdcc851d3406e00e8368e9373015c6d15e4', class: "text-center" }, "Total guests"), h("th", { key: '94016e59d57c2aad93b1f1008d6f2254e1d15d89', class: "text-right" }, h("ir-tooltip", { key: '3d78d8a198db6d8867819b12090e4e49cdf8538e', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '7a1eb4f6938cc30f070288b71734012604c2ac91', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '737d3d96a5c1a5102506c34e1b901643f77e9ffb', class: "text-right" }, "Rooms revenue"), h("th", { key: 'ab517ee97fcf0559bd2e4f1dcd09bb1801f56411', class: "" }, "Occupancy"))), h("tbody", { key: '51b3b41395152f5b5527c09901d5082f4adeca38' }, this.reports.length === 0 && (h("tr", { key: '1820a86d0f94ea6f7ed1ce5366759c453e724ab0' }, h("td", { key: '25a0a6ce5b7f8fd03dc535b8e6772df86f4e4abb', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '761f4e5e1947475c62ab845bad372f2704bed9f1' }, h("tr", { key: '3b6d0d08b8203eff510846111607b8c225afd10a' }, h("td", { key: 'b4426ed913306356f015fb55e73155199ee700a3', colSpan: 5 }), h("td", { key: '78c7cd25d656218b7835696672b97934dc12d440', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'e94982c2c5476dd93c022494b55c8cf128d79ba9', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '2bc07fd85ad7a8813bc87ecf35b5b223500c3181', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'ccc1af2bbfa83d8861b010d530cd3f8a4e97381c', class: "legend bg-primary" }), h("p", { key: 'de0a44bfe5540ac26a5bd508407f8228f78d625a', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'be2378a21318f7b4e8b611f4c88a0f3f742eb155', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '0e3fe73a04049907990eead7b5f353782c556a3a', class: "legend secondary" }), h("p", { key: 'c45876852a2dfc7c65fad2d7d92730325ab5f396', class: "p-0 m-0" }, "Previous year")))))))));
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
