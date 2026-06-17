import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'bc4f3f0214b3e4d392b9675b875ff909160083de', class: 'card p-1  table-container table-responsive' }, h("table", { key: '2d7a4d4634a20ee516bf60d9b06c222f99dff897', class: "table" }, h("thead", { key: '813174ec712ada8423986e2263ca0916794ab57f', class: "table-header" }, h("tr", { key: '8d0e9ab8e673620042749165f857689a393ae7a2' }, h("th", { key: '7d8fbce60796c22c5387703a7ef095cd16b370bd', class: "text-center" }, "Date"), h("th", { key: '6f319342308e29dc9cdec8d4cebb73830c5e2845', class: "text-center" }, "Units booked"), h("th", { key: 'fc3658ae099df88556fa7134d5878f7645ce2aef', class: "text-center" }, "Total guests"), h("th", { key: '62c5be24c3c469cb229f0529161e014994580ee0', class: "text-right" }, h("ir-tooltip", { key: '5a1d5bee4a21a30ef746e92f2afac471b6bc4c04', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'a2c64950e9596900c1658296767fed63766a14f7', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '2c9d5c830a320967dbce7d36990ab977cc7435e8', class: "text-right" }, "Rooms revenue"), h("th", { key: '0928be4aad2f75c6c78d2c4f16cccef8a461b396', class: "" }, "Occupancy"))), h("tbody", { key: '42cac5ebfa6f3d8dd8687911bc3fd84d6fc24652' }, this.reports.length === 0 && (h("tr", { key: '7278a7dd7ee19e87819a10277411e9b11ca2215c' }, h("td", { key: 'cf3e02362d25908e4bc0d592492244dad8779093', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '116c863ca3707a358de373d0833020981368b372' }, h("tr", { key: '52e1e90294e4fc8d67c6826489ad8372dca1a767' }, h("td", { key: '46a0dd260708efbac161d911eb1de5c255941574', colSpan: 5 }), h("td", { key: '7410adab5420e19875087d3ee8d33ed2ea88879b', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '00b1171b1eebd5a452e22b26bad2907aa1f109a8', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '2f87d42b775027a6aadc046062684e0bb9f25a39', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a918d788fa12ebc488de3b97a86aae4e0cb02547', class: "legend bg-primary" }), h("p", { key: '504ec6a7afa4f58d3bf5caa4c7c42efb32a0d1b3', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '525ac29e12e0bdcfc6c90e0e7e0884ee89219c78', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '9a770bcafc934cf8fab1ee948542626da5c6bff6', class: "legend secondary" }), h("p", { key: '6941889f0c08cc042934cb38cc14a7595514944f', class: "p-0 m-0" }, "Previous year")))))))));
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
                            "id": "src/components/ir-monthly-bookings-report/types.ts::DailyReport",
                            "referenceLocation": "DailyReport"
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
