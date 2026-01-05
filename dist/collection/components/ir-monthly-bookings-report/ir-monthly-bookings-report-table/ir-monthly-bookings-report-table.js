import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '097fa08dd93485cde3af2bf5f7d6bb91da1acc52', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'e4bcae4bef037e41731e24aa6e5b69d4e8a080f3', class: "table" }, h("thead", { key: 'b3501ecab3574a8c331db02e7cb4ffe2414ae87d', class: "table-header" }, h("tr", { key: '9a0fcffa8790915ee99caab0f71ee1a486cccd82' }, h("th", { key: '340e0686eb7212b49ef22778fc16d1bfa481b38f', class: "text-center" }, "Date"), h("th", { key: 'cbb92f513d5a1498c3aa5494bf7a2d402b6cb5d2', class: "text-center" }, "Units booked"), h("th", { key: '3db750aa188a1ce4e61b5cd54c6c6fac248b6048', class: "text-center" }, "Total guests"), h("th", { key: '8942e501077aa035bd2a72bd486cb1101b8f1c2f', class: "text-right" }, h("ir-tooltip", { key: '06fd6bd349933b97ce57e0ac2f04b527b009211e', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'abfa56ccfa1f6e7f1a4f712d5fc13d786e83136e', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'b8a1e7378ee2025165c7d6d3eb4beed1be7be012', class: "text-right" }, "Rooms revenue"), h("th", { key: 'd182a0dd53bea8e7b9819ddc47d0c65450d95c63', class: "" }, "Occupancy"))), h("tbody", { key: 'd21b741d4a782232a09963cf47949b1cf80f92b9' }, this.reports.length === 0 && (h("tr", { key: '7658ad313a31a7bdec36f519ef69c76441fe1eac' }, h("td", { key: '19e750daee648051ac832d57463560fc7cbf6782', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '1cacd17064772e5740b39e26af7e124a85ad1a6e' }, h("tr", { key: '7d71cef9caad6c9ac95025ab1759ee653de0f0d1' }, h("td", { key: '006da1dc871858016dbe458f5b5f6f2bd3e589a0', colSpan: 5 }), h("td", { key: '1c1dcdda5371bb11462e11aab9ded5c587335257', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'a03142a12650c1a6bce9a856dd75a8af4382b87a', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '07abe3b3cd4dc82fd2fa50ff6bfbdc81bcd389ba', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'd55fb5c88407890278cb3aee287e52174665be02', class: "legend bg-primary" }), h("p", { key: '6a8c2b4720d4effc8da0798191741d17416b42a1', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '4b49e3ba7f434acf5dab2cfca5802cd0e17be90a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '28f21832278008d54965a9c305e2c1041c274533', class: "legend secondary" }), h("p", { key: '4a07c010eb35e9af1bb5c29a9186ed53840371b4', class: "p-0 m-0" }, "Previous year")))))))));
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
