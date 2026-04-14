import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '8274eab05aaf03f0a67762bf7b139ef7323f5531', class: 'card p-1  table-container table-responsive' }, h("table", { key: '52ab7c497e37dc840cf14042877b6909ded1fc3a', class: "table" }, h("thead", { key: 'd198e65eed6a4b4f5fe1abadf0f7f131ca16a19c', class: "table-header" }, h("tr", { key: 'be49b2b45f5faa8b2173ebf722a040d564a11056' }, h("th", { key: '57a0a92fee09e657e45a747cde61f5ab291c3a1f', class: "text-center" }, "Date"), h("th", { key: 'c17e6e1c14feb46ea9a7369d72ab98bac4f8db85', class: "text-center" }, "Units booked"), h("th", { key: '7f8b31f528671fe722f3e145d3f512e3aff9f545', class: "text-center" }, "Total guests"), h("th", { key: 'b5624eea4cfa097fe0cdb47758af51a3f24bca7a', class: "text-right" }, h("ir-tooltip", { key: 'e104b6c1aa751f7f4f656be0fd3878a0af40c90c', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'de65307760ef8721a5a3a6f97464735f36f741aa', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '04c6af0465441b59ac0dcb7a86fb6f2a188d6f29', class: "text-right" }, "Rooms revenue"), h("th", { key: 'f2f27a8022862835fe00150401800a00ac6866cf', class: "" }, "Occupancy"))), h("tbody", { key: 'b60d97099dc82b596daf8f307c2ee73801dc49d9' }, this.reports.length === 0 && (h("tr", { key: '0e0b3fffc801f31dc46a609e6dee51ca53819193' }, h("td", { key: '2f3a79de4681c3bdb6f8164b183c3ecf629b008d', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '81744d41f038a793cb9f9e7056154c90bf12ba01' }, h("tr", { key: 'c8db8e4815ea56a602108ce9fc668d855f558f7b' }, h("td", { key: '96ec0e5059168e590b950b55335590680488050e', colSpan: 5 }), h("td", { key: '1b8522e419857d93a85e9b1f459aecda87fb611c', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '6c204d372fabb4ca77c417330f59c237722f8e4d', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '5a5f240ea58b733ab6bdf286ef51e95c6350b812', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '812f4c2d78a49f61534a2c855b7fd5608331abbe', class: "legend bg-primary" }), h("p", { key: '0ce091686f0f4b314f471d157fc9553c7c26e3cf', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '50b542171b4a352fe74052c255f8d4f4e221d0ff', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'bc971135cfa5f124ad088ca2b887b42a904903d5', class: "legend secondary" }), h("p", { key: '973e0f875bb62109de3620870af64e71c7117a00', class: "p-0 m-0" }, "Previous year")))))))));
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
