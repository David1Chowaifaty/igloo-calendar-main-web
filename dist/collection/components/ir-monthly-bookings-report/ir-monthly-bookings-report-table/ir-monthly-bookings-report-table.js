import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'eb2e781f941b2ca3033f3964c96621d7bcc9f931', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'bc37386d584aa8f21df5af54c5cffd7b34b421e1', class: "table" }, h("thead", { key: '87e4c2af4ffcc0ffb83cd05a388241ce40a1cd04', class: "table-header" }, h("tr", { key: '3f927300e06b09244adb9dc4c9ad71ce38d82824' }, h("th", { key: '35cec48b6668d10ca798367dc08b2b3d0a8d29ab', class: "text-center" }, "Date"), h("th", { key: '29953e365023eb8e581430e6864969ba6f25e12b', class: "text-center" }, "Units booked"), h("th", { key: 'e657681af0b4603112c51e4c448825f7c4776977', class: "text-center" }, "Total guests"), h("th", { key: 'baa93ec60faf7228e46c225716c94c1dd721743e', class: "text-right" }, h("ir-tooltip", { key: 'e9c33b2a88e67627d3a7a3594481bfe3577cde98', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '46abfee2b9480f07eff7b9f8dc1b9ea1e69bee95', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '6b96ab8d1714c30ad1d20a1c5dd2d59c2c79da80', class: "text-right" }, "Rooms revenue"), h("th", { key: '3ceaef197656899d7fb774153256da53677823c4', class: "" }, "Occupancy"))), h("tbody", { key: '028ebc1e4935b78b28aa16c2f04492da569fc119' }, this.reports.length === 0 && (h("tr", { key: '3d78a6b1d667b9edb8614d22d5534d6af8369c19' }, h("td", { key: '9062b7ce312f3d0d7b2664205e6935e055549a5a', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'f162833144ccdb6964033ffda32d8b6f3d5c99a2' }, h("tr", { key: 'fb82ec4d3a24d0f1771aece72ff23e0b9cbf8150' }, h("td", { key: '8de1bbdb99005e3455b9ddba774ee6743c1ebb51', colSpan: 5 }), h("td", { key: 'eb7b221f57af0e77a7956944fcdb365fe6db53e9', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'd42a532c1b705d23866dd6d47ea06e1e40a09f1c', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'b7220543924f208b68e5738bc87b27dc299daf85', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '79b8ccbd90a4464b76ca565e3e5e499d49baec57', class: "legend bg-primary" }), h("p", { key: 'e47a5fa25c3192c393e97bb0b67403a0e0dd592e', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'b78ed65fc582faacc85096aa334bf66ec975e2de', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '5d532113b8c3100148ab4d33f5fc5ba0d0ca9811', class: "legend secondary" }), h("p", { key: 'da459b37dd8f0917d1841e3687ccdbbcbc302e51', class: "p-0 m-0" }, "Previous year")))))))));
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
