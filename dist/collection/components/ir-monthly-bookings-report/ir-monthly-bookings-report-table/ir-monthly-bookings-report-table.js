import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '9d18b4553f7e2e59916fe01586ca3b4d615667dc', class: 'card p-1  table-container table-responsive' }, h("table", { key: '11c68f87a7ef3ad56041d586b567cfd8d7b6068e', class: "table" }, h("thead", { key: 'd71c4dbcd5826743af868c1805842e7101aa2b4d', class: "table-header" }, h("tr", { key: 'bcd5c45c18d6eb8d3ef6032d0b41a7aafffdfb60' }, h("th", { key: '96a3300ce3bcd7184572a25c15f426d6c270c927', class: "text-center" }, "Date"), h("th", { key: 'a8d8485ad573aa66bf4872ccd98aea5e118998ea', class: "text-center" }, "Units booked"), h("th", { key: '9cc9122c3ecbd950533d8027132d3890a1016141', class: "text-center" }, "Total guests"), h("th", { key: '651dd9ce7eab16abc59e5c0b43c2fea4286c0a5a', class: "text-right" }, h("ir-tooltip", { key: 'abfbf2a7678a0a1d092baeef7f8fd87f280ea225', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '4528a8dac62283e13f0969a4f844c71dae17b945', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '8ae3e962182ff4ed83173778dcc2bde3d8e704f6', class: "text-right" }, "Rooms revenue"), h("th", { key: 'e2231501b59429ee1614d9f5db2c3bfe863559fd', class: "" }, "Occupancy"))), h("tbody", { key: '102d0cf888ecee94f8328deb88f6fa6675251a69' }, this.reports.length === 0 && (h("tr", { key: '53ea793cb495ce98f30037778b508f68169a205b' }, h("td", { key: 'f513a3650f54ade719443ea759d0499bd4b7ef4a', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '8a6a367b5cc4321a6f98917e85cbc3abcfbcbd2f' }, h("tr", { key: '53bd49f2738b864bd62b4475eebfcc2758631d43' }, h("td", { key: '497a9f10dc5baa3654fca16234e22b091482da02', colSpan: 5 }), h("td", { key: '06ca337013ce70f99dba82ee5d32b17246dd738b', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '089ebd4dadcb803d91ca6fb5704232416a427238', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '468b9bd9599088f255a7da4df8d44bb864e57d55', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '46410240cd4d08cd80cb6f3b1b4dc00bbcd4d11b', class: "legend bg-primary" }), h("p", { key: 'e698b75dae76bb6754f019b7f4cf8c2f5e7cac93', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'a57b5d5a99e9b49c6e90e77007c0c0ab0e659c33', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'eeb13522057aec2032c1404f83425360c0b79011', class: "legend secondary" }), h("p", { key: '3898a6450d0ba03840e346723b27d7ba63003b73', class: "p-0 m-0" }, "Previous year")))))))));
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
