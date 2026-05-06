import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'd5bfb6609cf729f066d938e4f2810f2d282d7b8f', class: 'card p-1  table-container table-responsive' }, h("table", { key: '0b7f241af65e1a4d22a792f751722b3ca3f614b3', class: "table" }, h("thead", { key: '9b531c8f14b23b75d6475be0a138af57f95da352', class: "table-header" }, h("tr", { key: '5fbc06d350066090cf3d11a6cad005c4e9d140b4' }, h("th", { key: 'cc7b7eb78565eb8fcf60b2afd776f7e8d2de690d', class: "text-center" }, "Date"), h("th", { key: '6cc876c51156bc61fabdc7d769f693f691fb3a9f', class: "text-center" }, "Units booked"), h("th", { key: '297639edd8ea741fbb557ce7d98ef781ecdd3d40', class: "text-center" }, "Total guests"), h("th", { key: '84591e7c9a7d2222c46502a860af363b6d71f3c8', class: "text-right" }, h("ir-tooltip", { key: '99e60196e9980fc598b452c4396b3b7c1f435c47', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '94ca3fb489f0e564111d32bafbaab7ecbad7f901', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '7ca1452375515b1d6b6bf7a75b68f077ce8e6534', class: "text-right" }, "Rooms revenue"), h("th", { key: '74f9fb08078c5feaa5ab1dfa05ce055913b602ec', class: "" }, "Occupancy"))), h("tbody", { key: '412e7a77993af668f559ec4a9e1c67bfea3622fb' }, this.reports.length === 0 && (h("tr", { key: '7fed18201770a99c79e08f8b732420b5bbf8e994' }, h("td", { key: '6ab32b081499043c4f88d42a08707deda8fae9e6', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '504790b484fb940a6d2289ff7c92c2a32dfab555' }, h("tr", { key: '1608ef65863c7dbb5818c0ca06c256c0c2ba4cff' }, h("td", { key: 'a02a4968a23740b38d66128add4c44506ac2ceed', colSpan: 5 }), h("td", { key: '4583b6cf07f8e4e3ca85265f6c7e7dec50a53ae5', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '319119eb088d869e26227691dcf27654ea6678e8', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'f800b17b19b1434040e0fbdc90301083af5da08d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'ef4451e4f61580d00fad6534046c44b66b29060c', class: "legend bg-primary" }), h("p", { key: '3b7570916578c45c3d0efea24afe12eddbc0ddad', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '411c7e4fa1408f00daf48ae0f2c01158a8c36659', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'ea64827c21fc1918c003ed1b3066924281e858f6', class: "legend secondary" }), h("p", { key: 'a6e93a0bf8fa51bee0fe515ca7d36b3da6c876b4', class: "p-0 m-0" }, "Previous year")))))))));
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
