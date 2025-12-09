import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '26ec8eb9f42896b7c1da40b10940ffd5c76ed1f8', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'e3bc9fcd02d302886e21acaac1260fb2959f3642', class: "table" }, h("thead", { key: '16053d2937b26e5ee07f2a88759039baa52125a7', class: "table-header" }, h("tr", { key: '76e7f0c169d9455db9a976b21c1b4e5cd2c8e67c' }, h("th", { key: '5b68e4c1564231521c3e1ec2b9cbe0d72999a49c', class: "text-center" }, "Date"), h("th", { key: '9afd0e8277277601deedd645e2dbda0864fc629e', class: "text-center" }, "Units booked"), h("th", { key: '9ecc1c8ea970f69a87709841c517aee76bd567f4', class: "text-center" }, "Total guests"), h("th", { key: '6421ba6d9e2755c007a91480f0c1fd70ff9e4d37', class: "text-right" }, h("ir-tooltip", { key: '322872733bb5784e2adff2758d377962ff556461', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '9c5ef9776bbf2b29850251da3d9ab8636bb263d1', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'dca9d399fbb8011d1e2005d9ccc59c62bd207190', class: "text-right" }, "Rooms revenue"), h("th", { key: 'f274b3850f75a232674c45d393e6ddc89edbea23', class: "" }, "Occupancy"))), h("tbody", { key: '9885d4cbc9c9e820fb319671f0fd38c33ec72c78' }, this.reports.length === 0 && (h("tr", { key: '2ee4ca783b76b016abeb435bc5d436f10b38546d' }, h("td", { key: 'e1921a31e26485d71ee1762ec6bc60b5b27f3b3c', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'b320279902b4eaae9891b112012b472ad18a10d3' }, h("tr", { key: 'f48ba6309f86ecc24fd50dd0bbc854d4256a2d94' }, h("td", { key: 'a49a03150f6327064f5ec704cfa5093ebb759ad2', colSpan: 5 }), h("td", { key: 'c113ab2bfa70b9d70f376a3c1c8ee80bdca0b0e6', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '5888c2da6c3d185d5a62fd72ac2a0038803cc132', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '2f6fe8f491028a795c9028fbf9e510bb546bd05f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '151c3a6c0e7e74d9032311287568638fcd558cae', class: "legend bg-primary" }), h("p", { key: '91525663c7221d43dbd36e83493ed50665b5ce3a', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'ff72bb2d352d4ec33b67938bf3fe8bee8720faf4', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '48fa47b9d5b23b6c2a74816f7ac167335ffead99', class: "legend secondary" }), h("p", { key: 'd7643ff2fbf5675bfa16b7ba4fce02db0ec6b36e', class: "p-0 m-0" }, "Previous year")))))))));
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
