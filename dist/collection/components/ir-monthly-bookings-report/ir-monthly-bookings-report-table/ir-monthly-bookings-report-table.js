import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '5f671a40630210ddbeb760794f5fb7c4a4d59c9c', class: 'card p-1  table-container table-responsive' }, h("table", { key: '3dc27ca195477d07dafcf7e7a652a9e31ac98d16', class: "table" }, h("thead", { key: '129e2bfcc430b93bcb545994c55a5da3c3eec3ad', class: "table-header" }, h("tr", { key: 'a71b79426963a99a59ae75bebef9ec3915478ddf' }, h("th", { key: '937d47ada85cf9348ac01d1f5442322d46940f4a', class: "text-center" }, "Date"), h("th", { key: '2bc40cf287c33cac513d0f7ce400466e489633cb', class: "text-center" }, "Units booked"), h("th", { key: '27cb63e98f3eb9b4aa8398aaf24e132be5f2ca3a', class: "text-center" }, "Total guests"), h("th", { key: 'f158b0fa6adbaacdd6b1a1f06ac4e35aefac1562', class: "text-right" }, h("ir-tooltip", { key: 'db8b918f24be1ff702e05b93ed7c60c8ef432fbb', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'efde2a81348744152627f8db7bcf43a7d05d3175', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'dc2e28ffc67e35313eb4e43097366e50c6733b71', class: "text-right" }, "Rooms revenue"), h("th", { key: '4c2cf1b1bcdc0c93f0ba73555a5878fc95aff36e', class: "" }, "Occupancy"))), h("tbody", { key: 'e6f95b112315f2ad46eb728498672747d4025b9e' }, this.reports.length === 0 && (h("tr", { key: 'ec5ac10350d502e4bc3fafd133f951f82c6b1e4d' }, h("td", { key: '596d247e9efa76cb65ca01adb1bced15668d94a6', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'bc5492804efc2646388df5567b1c9aead06a94fe' }, h("tr", { key: '84b67853d214ac4cfee36c2a7a6284733b5bfc67' }, h("td", { key: '7fec16e45895a6a1090a1ea6fdd64c12507544c9', colSpan: 5 }), h("td", { key: 'ea4523b3cbed1df33d7dae2f385df437702bedd1', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'c605a8735ceaeb1bf6a8ff4fb9df5cbcb5140af5', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '070824cddf63ae10a82a52dabc63d72ad8e2bf0a', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '4f63b5d282cdc26c30ce31e80dbdff50cfcc1f20', class: "legend bg-primary" }), h("p", { key: 'cdd0c299956e0756960d21700717eb64f3f20bba', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'b673be55a9c4369189b04dc24ab99836c62553db', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'ca725f971e4e2e1bc49f6150a2fb18e9782b22e5', class: "legend secondary" }), h("p", { key: '2d9e3ed9fa0acfefb61a7961005de06b663f3e43', class: "p-0 m-0" }, "Previous year")))))))));
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
