import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'c43760b921e019ae136f30d616897b2a95f27aff', class: 'card p-1  table-container table-responsive' }, h("table", { key: '9b6e135852a9087276f8740a16a3ce2b4334e6f0', class: "table" }, h("thead", { key: '39737ae34bef4cf5038ad8ad9ead43acd36ea56e', class: "table-header" }, h("tr", { key: 'c6e5deb0a1fd4bac99f30bfc256cf4118decc727' }, h("th", { key: 'ee01d50c6af1896b850ddf4c9aee61971f51791e', class: "text-center" }, "Date"), h("th", { key: 'a2233803a28bd4f31349dd5c087ee89ae3ff1cf5', class: "text-center" }, "Units booked"), h("th", { key: '03417ddb5081da9a96ad4c58c1474ce6dbb48caa', class: "text-center" }, "Total guests"), h("th", { key: 'a15e50618206734c36436f06bac5ebe17da911a3', class: "text-right" }, h("ir-tooltip", { key: '2ab81b695e217d6aa339724d20c5eccb27c7b34c', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '2ba0b0a88525ae7cb3079ea43158e63ed5c158e8', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '7d9e1c39dc04ed3f2ca2cb3ae2a2edc6eb0f469b', class: "text-right" }, "Rooms revenue"), h("th", { key: 'eba79fb515e0418a48571846e1fcbebb91129f35', class: "" }, "Occupancy"))), h("tbody", { key: '96129c3d645f0a56534e0826be4b0a4ba401ec64' }, this.reports.length === 0 && (h("tr", { key: 'dd0fc39ce6db49df96e76a218bebf8ac7c2a24a3' }, h("td", { key: 'e843f33da67f30b7aa1fc3c9ac75ab8283e8bafb', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'fe0e2f72a3bfd0636e453af412b7cc26babfc4fa' }, h("tr", { key: '118e5f11a122c5edd0386cd31833b2a4520ae92b' }, h("td", { key: '63fbab6b8860b1869d8d00566a0a4674f16550fa', colSpan: 5 }), h("td", { key: '9cd6b5315d58555ff14bf4dcddedcd93d03090fc', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '12180d67b1ee6ce754a816c56052bef46f3c7023', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'a33aea1389973ab0d0be157f72f221c135c6981e', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '90a5003deff7286f4c4ced5ea0e606027fcf5bdc', class: "legend bg-primary" }), h("p", { key: '6c2a5a82b70f9fa44389a6edf2ba013eca8d29b1', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '302ddd7fc80291097b524076c32930f95ac88466', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '48e110ae1bd559c76158621e71e984efdd69b369', class: "legend secondary" }), h("p", { key: '6ced31ff736b438c612d80019480a1f6ad573dc4', class: "p-0 m-0" }, "Previous year")))))))));
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
