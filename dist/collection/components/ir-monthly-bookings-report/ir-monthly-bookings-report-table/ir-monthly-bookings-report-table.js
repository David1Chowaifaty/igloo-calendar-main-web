import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'ee3fe51f2072692b10365e212601721bcbd94c76', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'a64c5f7d8d47338632a9c32eebb6858bff060b42', class: "table" }, h("thead", { key: '700449371e616a1dc7228b82c3a72efb7c9ce5db', class: "table-header" }, h("tr", { key: '4fd17e43f28ba270d1f8114c596651a930fa2f21' }, h("th", { key: '22fbfd5378df121ed0475e500c22057b8b1a05fd', class: "text-center" }, "Date"), h("th", { key: '4c4c3788762a3eded1f8502d011fa49bf3d1f477', class: "text-center" }, "Units booked"), h("th", { key: '035d01ea22e2a2927256155aecfabebb0c1ca59d', class: "text-center" }, "Total guests"), h("th", { key: 'f0445845dab4caa8815237cf7c8028da82434f8c', class: "text-right" }, h("ir-tooltip", { key: '76fa6a48f17165d50c1c8a4b7ba0233cbf8b050e', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '10227378413a3fdcff876f557206e9aef530c7b6', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '8e26d2cb764956e4329d68beb35bd6e78d5a9098', class: "text-right" }, "Rooms revenue"), h("th", { key: '3291eca906058ee5592b56259ad99fc7fa873746', class: "" }, "Occupancy"))), h("tbody", { key: '2e2d580756525cab054d6cd6d7493424a049d3c5' }, this.reports.length === 0 && (h("tr", { key: '6d915838ae359916920e9e351fd15437776d063c' }, h("td", { key: 'f0454e1bdbdb29969e113be2f892ee1f467b3786', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'ebba4463ee05cb64fb436745412adbc148b11179' }, h("tr", { key: '83e31b50671f4d98ff3974846e0d994afbd2a8a8' }, h("td", { key: '6cf55f7f40022d464ea6bf1215afdd7d8c2887fc', colSpan: 5 }), h("td", { key: '8ddba61b7825456ce921f5e51717cced2d5cd7d9', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '90fdc346e17ff7c080a781099360d632176cf56f', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'd554a3358498a3da4df57d24e623c83319f54e22', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '63aa4b5fd6737aa5b80ebc1b288017836090a5d3', class: "legend bg-primary" }), h("p", { key: '8c394c9904d49904b590caca1daf034f31fb5c0e', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '7698069349909a04a0916e344ed8caa0598dd1be', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '7823d804a97ec65e62ca0c2c90857a99a6c51af0', class: "legend secondary" }), h("p", { key: '149036235caed8cf6d76373da5612374cce07462', class: "p-0 m-0" }, "Previous year")))))))));
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
