import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '769a7bf6e0332cfa5031053af688e752807fcce5', class: 'card p-1  table-container table-responsive' }, h("table", { key: '75cda11909f2f69430082bc167b6056231aa9d77', class: "table" }, h("thead", { key: 'dcd8189e08b98d1d0f65c9ce2a8d043bde4ba423', class: "table-header" }, h("tr", { key: '00d82279ad0f304d13e17a0814ca121416196565' }, h("th", { key: 'f29accabf07d3c1afe2e491e1aa505b96e6b6cca', class: "text-center" }, "Date"), h("th", { key: '0ae59d07a104caa2d43ee388fc85fd71bcbc3e1c', class: "text-center" }, "Units booked"), h("th", { key: '53f5d6920974fca04e85c8b991ec1bdce71471dd', class: "text-center" }, "Total guests"), h("th", { key: 'bb52e7ebd5808c571bf2f670c83b7ae343f27ae8', class: "text-right" }, h("ir-tooltip", { key: '7b0d28f1938dcf4f19b95fcdeb0c8df176c3aa4f', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '43a7c65a8c9b81c0dfc50f0943ef664d4b0a0ef4', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '5572b615c71d5fbcf49c204cedb24de074cdda37', class: "text-right" }, "Rooms revenue"), h("th", { key: 'b063c10ffe8609519c197b03c38f19ddade1d4c9', class: "" }, "Occupancy"))), h("tbody", { key: 'b0900221f86b39d34a0c021873fb78b43fae56d5' }, this.reports.length === 0 && (h("tr", { key: '6f396b520c08bf4535dcdc0e734a89a5964dbe28' }, h("td", { key: '5070dc2e6d1fa589162a37ac4f6376d927dca0c2', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '50ece48a2f574717091d11bb11aa836939d5dc03' }, h("tr", { key: 'c1bc06039dbec8960cd2b90ed973b4f38af06a34' }, h("td", { key: '8462e9cd26822fb764e1be635851e21daf265813', colSpan: 5 }), h("td", { key: '757f63d5bf65bab974b67725131e883888a30044', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'ed65e6b5a8d809ee88bb125bc502d19ac5c4ab6d', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'c3c923c9a588acbf505a10029ab15f4c77303e57', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '5888c669d39817b865f1fb0fd443dd352139459c', class: "legend bg-primary" }), h("p", { key: '59c8a6cdfb31cf30784ddeb90af12337ad1aecfe', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '685054c704a1cde069980120b5b05ff4af681a10', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '8c056ae2baff3572589d13991afb7bea3693f970', class: "legend secondary" }), h("p", { key: '6a23edc93a9e5725074a234835d708e5fb365d06', class: "p-0 m-0" }, "Previous year")))))))));
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
