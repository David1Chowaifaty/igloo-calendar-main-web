import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '32976056761f3147db5c754d8ef56e6d04ef66e9', class: 'card p-1  table-container table-responsive' }, h("table", { key: '5df03ea49aeebaaee230dd8485d67f204204144b', class: "table" }, h("thead", { key: 'f640e7c36fe1340628d979eaef112f17b0ea02e1', class: "table-header" }, h("tr", { key: '2cfc3e815b0ec171062e7282a94760a2ab2aaa8d' }, h("th", { key: 'c7aed9ea6353a8a814756a0ac303f8dcc1056ef8', class: "text-center" }, "Date"), h("th", { key: '1c7da9cda5ba8a09514cb3b197534335ca3209ca', class: "text-center" }, "Units booked"), h("th", { key: '4c815412464d0730fc2a2b8905aae00615bfd774', class: "text-center" }, "Total guests"), h("th", { key: 'be0812b5b7736c8084e94927719314645dd65ed0', class: "text-right" }, h("ir-tooltip", { key: '832e805cac4b09f6b8d008b0f1d5004fb82b80ac', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'f9f67b9666b00bfbb908a8506cb671b31c6129d5', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'eb4261179ff9c1933dea2747014942f566f80064', class: "text-right" }, "Rooms revenue"), h("th", { key: '26d1dbe1aef729d802e25127e7f59e8f3e05e273', class: "" }, "Occupancy"))), h("tbody", { key: 'd4586bb727cd89f7eabab838a7dbe781a1cbab54' }, this.reports.length === 0 && (h("tr", { key: 'e5c1bfe09c10fb801be374e56ef89f8a48f7c4d1' }, h("td", { key: '9421d20410b0edb59467ea1eabe7063f916d4bb5', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'b60e5a98fa002f89d424a5d62d3efdf22d0feebf' }, h("tr", { key: 'f929a88450de83d38e85925cfaacee2d3aba6919' }, h("td", { key: '29b49b73c83953c9183c7ac3406a79611985aab8', colSpan: 5 }), h("td", { key: 'f4e92830e57c980b102c6bbe8a5511b10da54761', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'fd6b18592014d9354b4704306f7b73052cba6274', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '483cdeaba7bc76d820ca763b9d711797cb924389', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '744c05d7dca3cc0b28b9927cd1802c270ee9a700', class: "legend bg-primary" }), h("p", { key: '3bd53d791402c082ba13568905a7315950cddc20', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'a9218d15567b164b33ba25ae9a6e68a94d5eb117', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'efebbe1f75613395f5a6d072c15dffd7c5e487e5', class: "legend secondary" }), h("p", { key: '05ee0cc50bd677cbe488cd9098a919cc7cebe002', class: "p-0 m-0" }, "Previous year")))))))));
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
