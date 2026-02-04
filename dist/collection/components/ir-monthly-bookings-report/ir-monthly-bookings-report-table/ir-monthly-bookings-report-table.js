import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '736a65c7835f8b298ddaa0d5c6ec8f57a0082611', class: 'card p-1  table-container table-responsive' }, h("table", { key: '1ea3c03f434584fc63a500305149860d8458f28d', class: "table" }, h("thead", { key: '512c50600d9032d039190ea540e811c84b5a644f', class: "table-header" }, h("tr", { key: 'd71cb79e67f420c21bcc4615165714297c6f3db8' }, h("th", { key: '49b4696f14b599b1c5899dcde1e25e60e0c4b89f', class: "text-center" }, "Date"), h("th", { key: 'd4a47d5367e77cfd69050b822415d0d40be926bf', class: "text-center" }, "Units booked"), h("th", { key: '62341f0e6336228746ceb66f68e0883b44d59216', class: "text-center" }, "Total guests"), h("th", { key: '68b066176471e95e831509301091fd25730a1a59', class: "text-right" }, h("ir-tooltip", { key: '5b17a8abbb417843b98211ad9a40a85e35fc70d9', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'e386ce1da176e79702d5beebe79a68bca9b4aa0f', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'f23bdc626f12183076bd4988ce6bad25a2275333', class: "text-right" }, "Rooms revenue"), h("th", { key: '20d1ec70b58e233edb55ef4cfcbd443433bcd005', class: "" }, "Occupancy"))), h("tbody", { key: '9dab604eb5211af91f4a6b8218fd9d14d7036428' }, this.reports.length === 0 && (h("tr", { key: 'fac99ef04438165b313cb6c232e88942478f13c6' }, h("td", { key: 'bf6becfb974818154ec9d8f9f0f23de9d5792d7f', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '894207fcdf75532f1c37dd415d94dbd4989e0f69' }, h("tr", { key: 'cc71aab7f3189676f0ceb708b9404ec8b87c8a6c' }, h("td", { key: 'b8913c7e8fd2cdf839ff36bb762a9fe403c97557', colSpan: 5 }), h("td", { key: '6599b8be3f39ff36100f2d7a8f5c6355f297d1e8', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '627b838cff2f45b1642db17ed47b0ab4f3d570db', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'ba1a362cc3d253804a81e3e8e73aec7a0269c876', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'dca6b5970c705ef869ca6b57cfc987c049b2322b', class: "legend bg-primary" }), h("p", { key: 'cf303aceaf6d376173dd1e28c344ed24526ace5a', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '4075115dc5132101023bc34f863270de4a3786fb', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a0838fcbac6dcf6c585f939b753299abb9e80cb5', class: "legend secondary" }), h("p", { key: 'f9654fc7ce5dfdab4f64a5bffafc9d626714472d', class: "p-0 m-0" }, "Previous year")))))))));
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
