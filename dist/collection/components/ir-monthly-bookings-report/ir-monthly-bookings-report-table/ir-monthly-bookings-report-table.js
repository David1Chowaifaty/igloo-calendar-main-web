import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '6f0d3479d656a7130b25f19cdc37213a62f6ddf1', class: 'card p-1  table-container table-responsive' }, h("table", { key: '1f8deae90b742827d6b9850205141b6ba85a6b71', class: "table" }, h("thead", { key: 'b68ab5d02833b4e72f6bd1b294064cafd55af232', class: "table-header" }, h("tr", { key: '2d407ab4fdb304b10274225e2f2ef95c4e72702f' }, h("th", { key: '4d915e2fa0d34d5f82b074c568f48eeadea097c0', class: "text-center" }, "Date"), h("th", { key: '96def1f40afbed26e773e400984457d97bf5d12b', class: "text-center" }, "Units booked"), h("th", { key: 'bce0347deef42513f67b5ea84c4f57298704d2d0', class: "text-center" }, "Total guests"), h("th", { key: 'e168f15cd0db58c3584034625308c72006cabef4', class: "text-right" }, h("ir-tooltip", { key: 'b7b1fb0c3509134a82cb5e51809921b41b48684f', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '15a6f681a3ead88a7eb9cb32550124d53b853ea3', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '572db841c642bb0ec9013a62a412c425115efa78', class: "text-right" }, "Rooms revenue"), h("th", { key: '5e9b973fae460829ed8b90d220d63c5e5225daa3', class: "" }, "Occupancy"))), h("tbody", { key: '370f05e3bd9ef1c23305a30f05c09257c485ef27' }, this.reports.length === 0 && (h("tr", { key: '08510811629d45e8ec95575641cdd2221c3ec4a0' }, h("td", { key: '773418bcdf49d87bbea494bf8f7688135ccc0591', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '2b4220f87d5b90f4f410b1cafadb115d504cd2f7' }, h("tr", { key: '7a1aa38054b8d753af57906ee383aef0fee50235' }, h("td", { key: 'd849615f33c7a6b90718de7207522b5e158617d0', colSpan: 5 }), h("td", { key: '47a83150f171a51bdb3235a57da45c5571e96b98', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'b6ee0ba638c7d974e9e843c0c721af75b3c86b05', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '33b1e947bf4b8d524ed4cfcfd6bf1a44d6e933a5', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'f53dbfbd0ec423bbbccd4f3e06559b7c00ff6175', class: "legend bg-primary" }), h("p", { key: '663558f93bd0af3bddfcbb9267e6be294b71b656', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '64e6973540fb8e96adfc91d16876e21ba59579e4', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'ac3477d725152e7197d1b129bb87a6467dd9dcd8', class: "legend secondary" }), h("p", { key: '709af6959e6da66bacb3d4524153c44c323f69d6', class: "p-0 m-0" }, "Previous year")))))))));
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
