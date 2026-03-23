import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '50a1dc30e133f55d5b79f7f464826bbc14756e63', class: 'card p-1  table-container table-responsive' }, h("table", { key: '42d7a98c09e95bea7c3d283f65c74930740c9cc6', class: "table" }, h("thead", { key: '37ade059398faf2113830f7b56cfaeadab37937f', class: "table-header" }, h("tr", { key: '74a336ea6de40ec43a0ea5bd7d162b4be93be399' }, h("th", { key: '11d0d3bfdb65c9b5532c5758a9c30f9aa0fd8631', class: "text-center" }, "Date"), h("th", { key: '460bc97fcb987575eec2d13f4cb0fc7e0978ec15', class: "text-center" }, "Units booked"), h("th", { key: 'bed65546bfb1ace7089fc2f8e6fe831e03341164', class: "text-center" }, "Total guests"), h("th", { key: '3f108d7aec3ce06eaf34b160d2f975a4f028d8ac', class: "text-right" }, h("ir-tooltip", { key: '1fcdff2834202c68528a5bf735f5bcad5a4a6f7c', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '3e1be0d78b4478cd5263b4003658d9117b9bf60b', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'd217fdb9dcf08592d43d567748862769a8eda29e', class: "text-right" }, "Rooms revenue"), h("th", { key: 'efa372d0ca9d1a33fc2a281ca077d27fbbd5d30b', class: "" }, "Occupancy"))), h("tbody", { key: '46b90d8952cf7a9dac8347260697739dc2719cc2' }, this.reports.length === 0 && (h("tr", { key: '199c7dddacbaff585ae3b3d12fd4cb8e5b7bf42f' }, h("td", { key: '3b2076f2bb2e61d60e907fa2b10c71d7db980c53', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'a2595a32bbd099c92c6bb36c40698448b6449158' }, h("tr", { key: '94029f1d00c2c2e2dbe296b707ad038be30d3805' }, h("td", { key: '900e22da71b80a020bac9c4b97fbc7590ee59740', colSpan: 5 }), h("td", { key: 'ad5cbbf2c3f5f5d5a42322fcc8c468aa63bc09b8', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '564e0f2f65247cb8547effa33945db9ccb62883e', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '57c47038192b4eed19449a85368439baff2f9ce9', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'dc0d3bcbdc0b8aa98aa7e2cd73cf7a25222c4d20', class: "legend bg-primary" }), h("p", { key: 'eb4b3b0f35465db3a00e01e30780dbd6e1143455', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '7efe346c5025fdef6a1d71c1df0497b2079bcfed', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '11b9dbba085704e764b16c87e840d5e0653516c4', class: "legend secondary" }), h("p", { key: '28d40e6ac5cf4c1e1a34f7555fe917f047f6779e', class: "p-0 m-0" }, "Previous year")))))))));
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
