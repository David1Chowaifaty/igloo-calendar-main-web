import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'e565711af77034141f5d97ad91e8f3bcc15bcdd2', class: 'card p-1  table-container table-responsive' }, h("table", { key: '176f23ac80b3c27e4847911fadb7b2a6e25dc2fd', class: "table" }, h("thead", { key: 'd10db9a6add8f550594023882a5e672b5cfd9d3a', class: "table-header" }, h("tr", { key: '43b950e68ae94939613436d955921f9e63aa02ab' }, h("th", { key: 'c9a353a47c8e913cc722c54b48c572010babcc4e', class: "text-center" }, "Date"), h("th", { key: '439f9636205a65e1b114d71ef0d58934d532ecae', class: "text-center" }, "Units booked"), h("th", { key: '3886530d1e4ad6b3a814d58554eb14f55031291e', class: "text-center" }, "Total guests"), h("th", { key: 'f12002803a6ae37374e0a8a668a214be0e2bb783', class: "text-right" }, h("ir-tooltip", { key: '733804199fc8dfe01c926be4334d04df651cd251', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '49e3219cd9643518caf3b824c7b2a7258b81ff9c', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'be6971c14aaa6c1b837f8f19eb1723d973998815', class: "text-right" }, "Rooms revenue"), h("th", { key: '58b520e852687851bf6135c115df68c39914c33b', class: "" }, "Occupancy"))), h("tbody", { key: 'f77aa5849cf576000b8a72b55f78d423ddefd439' }, this.reports.length === 0 && (h("tr", { key: '2a9dc6f305709a35bb24adf56960a23f71ffc869' }, h("td", { key: 'b0350705008951f0105dcd38c4ac2299e3ec0d0d', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'ea62d4e30e6433c8aa81c57b19c37d818fda3fe6' }, h("tr", { key: '5e7cb39fa1bff97a6477054d04231eae366255d7' }, h("td", { key: 'ce080a9717fec36053d05b792b6d8575dfd8c94a', colSpan: 5 }), h("td", { key: 'f6541b56a5bbe067b5cdf5c32e1b9fe99d8ab84c', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'e9b46e4c19f02a33c33f9a5d09180520e454cdd4', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '96850c6be62cdbe962526501f481b5677d8791c9', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'f9c07a67db0aacedb7bf079008cdd68c15a729dc', class: "legend bg-primary" }), h("p", { key: '08a3b5d56198595021f0207b79cf78ecb31f30e3', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '63c7b5f31e9a91ca165d7e2a06bcce50835b7010', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '564a6f27226c5ff28f41c3b082b29ab8ee6f7aed', class: "legend secondary" }), h("p", { key: '03b9f2738c82ce002d9a7b879da12b31c4d8d4c1', class: "p-0 m-0" }, "Previous year")))))))));
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
