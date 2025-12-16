import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'b08855c13ea00ab7f65d194b15f78661f1c759c4', class: 'card p-1  table-container table-responsive' }, h("table", { key: '6ce973e79d09add46a168a2a04681a80976f0c20', class: "table" }, h("thead", { key: '27e221e1b95e86991d26bd8c7a4b1c5b2f6c02f3', class: "table-header" }, h("tr", { key: '31af4dc250ba446ad3dd1f81791cdba67e3389ab' }, h("th", { key: '2fc40292ba5ea988205cac2c9341f1f25fa4c1c1', class: "text-center" }, "Date"), h("th", { key: '415fce76ec45a0c6c1ba4a6115651947ec568faf', class: "text-center" }, "Units booked"), h("th", { key: '86bef589a92b3d87f5ac6ee419c05ff046f1fd0e', class: "text-center" }, "Total guests"), h("th", { key: 'f3baa7a98781390b6fbc9fdc2155d66dddcbfb45', class: "text-right" }, h("ir-tooltip", { key: 'dcfe74f936901da234d5b52206212c0856d61204', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'f9a403d326a29b98c59f91eb46f00c49a6b0ff27', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'e992fe986db153fe6caa57ba57707e4f98697754', class: "text-right" }, "Rooms revenue"), h("th", { key: 'df85819db790bb07937b701472ff30be560882bd', class: "" }, "Occupancy"))), h("tbody", { key: '4233f3dd2b659509ca171899806906f3eed785d1' }, this.reports.length === 0 && (h("tr", { key: '8004a9ffc84f0bd215eb3700d70256ddb28fc0d2' }, h("td", { key: 'a6189309f147094031940d7a86c622274c2ff393', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '9a1761a0105789d3913bd3e4c376037384e69ebf' }, h("tr", { key: '73568e72c0260c0bd9f83e2e53545b1cdeb6105a' }, h("td", { key: 'f27124353683737e4a5cb562da001d66018eb1bd', colSpan: 5 }), h("td", { key: '2808f58d86146a7532bec4874bd65b192c868ad8', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'f3b86e8795b02f8c6fe946013210674effdd7dcc', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '79a67d5f403d8d7c182ac195a6ede6011cc5b3d3', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '484b5cf74398769c504473cd3eea26808437707f', class: "legend bg-primary" }), h("p", { key: 'b0b596639ff4bfdfeb4ecbaf303f6e42484c60e8', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '046d5a80aad7ac23fafcea001910c45bbcb9d7dc', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '24b2004832fd82c3f97088e35c36c6c273ee1513', class: "legend secondary" }), h("p", { key: '2efa8d2c42058d9532ce81e5d718028410c80d0a', class: "p-0 m-0" }, "Previous year")))))))));
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
