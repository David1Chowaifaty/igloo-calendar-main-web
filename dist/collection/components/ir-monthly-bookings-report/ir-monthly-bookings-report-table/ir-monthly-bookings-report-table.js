import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'cfaab538f82d633f59871820be39ad7cba9b36e1', class: 'card p-1  table-container table-responsive' }, h("table", { key: '6fa5cdba053f405f023b3c0bf97a8e72c770988b', class: "table" }, h("thead", { key: 'd7340a54004c7a2c3ebd9852219a0813a076dd75', class: "table-header" }, h("tr", { key: '91f726288126a9f420c59075fa910dc50f729a4b' }, h("th", { key: '711d5ac02b11e1ca0251a7190f87d1a57876a918', class: "text-center" }, "Date"), h("th", { key: 'd251d11360a830b601a358e92b2a80d1208c58f6', class: "text-center" }, "Units booked"), h("th", { key: '49615a295fb3e3682c455cd146bb2b9dd1007978', class: "text-center" }, "Total guests"), h("th", { key: '7ab91b0b1c02a97293463d2e5f21cad2bb25e5e6', class: "text-right" }, h("ir-tooltip", { key: 'f929ecf73cdc88b2f20a0dd8ea6d41a76b25777e', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '0680a1b104266db9781cd75f0ce7ab199610a066', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'd61299bec6eaf24084df294b8c29bf7bacc5ee44', class: "text-right" }, "Rooms revenue"), h("th", { key: '4c71685d1974a12a518d4eceff03d8880e7b52d9', class: "" }, "Occupancy"))), h("tbody", { key: 'b8c6fdb6839a3548fe5be8df0fbcfb4d4f82deee' }, this.reports.length === 0 && (h("tr", { key: '84d55d85dda4663287b6359147d8e9ca5c2d004e' }, h("td", { key: '50c907252a8ce2ebb704e141dc984617a6551788', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '765b483c22fcafcf79bdfe6dbd86fa27ce3874a5' }, h("tr", { key: '60f080f28af3a810b3503fc2021ce56f1fe00fae' }, h("td", { key: '9507c54c0cfb7136fbed0dd88223b479f5805aec', colSpan: 5 }), h("td", { key: 'fd86a4c4c3d6209a72e8d4e1fc91659df9f46d99', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'b0b69baf04c4810af1cb477fb3b838061226e52f', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '411ee764b261499fc83232c6187a72bc2a7447d1', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '2d73782a078dac2547854a30992618e47552caa3', class: "legend bg-primary" }), h("p", { key: '4a3b14265f22b3fe585100149ef5f6fd34caf191', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'e21b9d94408936c1f4b2c16c2b6373d23b21dad0', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'cb5bf4ed907884db5734813e47561f76ebd639d1', class: "legend secondary" }), h("p", { key: 'd0399cb3a579d84de4f8bc27f7d93cdc9e224dda', class: "p-0 m-0" }, "Previous year")))))))));
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
