import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'a12cb56a4306dd05dd20be1398c85226579a8ff9', class: 'card p-1  table-container table-responsive' }, h("table", { key: '5ae9ffd340a42361b2f511792766f0945b67577f', class: "table" }, h("thead", { key: '15310c3629d21a92f9a7e36f256dbf2bd47ee9e3', class: "table-header" }, h("tr", { key: '5818e87723e3bd31f18848b064e261d25c751ffd' }, h("th", { key: '1cd2b42d7b0ae55aef9e505b1b17287178c80016', class: "text-center" }, "Date"), h("th", { key: 'dfa374c42548505af7edce6bda5ff7ac7162597b', class: "text-center" }, "Units booked"), h("th", { key: 'b81501429fb6147f402493dd506cd06758dc2c14', class: "text-center" }, "Total guests"), h("th", { key: '0432f9d9eeb7260df16301b240d689264ac47b24', class: "text-right" }, h("ir-tooltip", { key: 'bffda879dc59e83b200d0559dbff0d0f1668a087', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'ba5140c7aee93998a8b400ff171fe88919c010b3', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'ffef756630d91fb78fc85bf98c712a2d764052ad', class: "text-right" }, "Rooms revenue"), h("th", { key: 'e9d7f21e4365a4eb9e158793ef17b0b7ad221739', class: "" }, "Occupancy"))), h("tbody", { key: '47eb24475de6650d63c0757c6ff7b5bd58e9fa6f' }, this.reports.length === 0 && (h("tr", { key: '4faaba53184bf930ef6bc226bea9d1c8c85b2322' }, h("td", { key: '75c53aabbf9e79a688f8d6ac82d2b82c735d9f82', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '40cc0df8257c2e03f9681f6f1bb98072d334ef88' }, h("tr", { key: '330af125bf79547705fd4fbdc1a75e22c5862027' }, h("td", { key: '4925dcfa47ce904b61a699c0a4d96a7f79e6044e', colSpan: 5 }), h("td", { key: '701da257c9bbf19cca55d7ee62de69f5b9e3c3b0', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'f9c11fbf6505643ee2ac0eab9131ddadd58c2f4f', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '73a8529e84a4e953ceabaab892181c9ae3ef8408', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'f437c071d0c0f942767bd447c128b1eb807e1cc5', class: "legend bg-primary" }), h("p", { key: '6c3b6ed57051b1985902470984914dfe228d137c', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '5d24f4a4a20219663a6468c758aef0290c7bd7f4', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '3fcf4a0c651026efa9a21cbed074dc72b7990733', class: "legend secondary" }), h("p", { key: '137bd0794ab328b874177151954314d5a308f4f7', class: "p-0 m-0" }, "Previous year")))))))));
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
