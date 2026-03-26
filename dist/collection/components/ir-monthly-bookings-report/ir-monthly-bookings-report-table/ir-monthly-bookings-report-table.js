import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '62582d0969e0b761f9d2fd59d4949cc1767bf0b7', class: 'card p-1  table-container table-responsive' }, h("table", { key: '88ae544de46941329992b16092446269db3e20d1', class: "table" }, h("thead", { key: '5376e6e252cfff2df12fd5b3af2e97a5d4a0f4f8', class: "table-header" }, h("tr", { key: '7491232325fa3e563d03f7fc8bd048eb560d50db' }, h("th", { key: 'e5c9a4771509883b8146b05ed643581aa2b06659', class: "text-center" }, "Date"), h("th", { key: '82de97458db4771c7a88290c0707456895b7e1a3', class: "text-center" }, "Units booked"), h("th", { key: 'a0603e0d75ccfd1d2e4dd6534b194eca08326cda', class: "text-center" }, "Total guests"), h("th", { key: '2fc0ecc5d54c5d747fb487f20019308460f6da98', class: "text-right" }, h("ir-tooltip", { key: 'f98a9c7a0f9bba1a7e984ba6f9f5e5c6119cd00e', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'f98d307cb95b1ce2548b250e27de42e798cc32e2', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '7cf2ea953fc0e0ad3c97031198f9199a0c1195c1', class: "text-right" }, "Rooms revenue"), h("th", { key: '3f3c393f1a2a81a24cf0ecac95caf9ffaf602120', class: "" }, "Occupancy"))), h("tbody", { key: '97efb5e653ab7665256bf71acfbeb27fe71cef52' }, this.reports.length === 0 && (h("tr", { key: '8235851711dddd897146089c19ffaf973cfdf6a9' }, h("td", { key: '041dfbb3af557601db4062c1920e6fcd9b3cd8f6', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'd13d2d38e7f0ad020ac9bb1a5f0ec6100a91766b' }, h("tr", { key: '2828388b30486e20b0313c52302d802df9dc3f3d' }, h("td", { key: '1bc1c5c274c278414d0363f6967565223a13779f', colSpan: 5 }), h("td", { key: '2cf70637eecdb899efdc9ae4b0671e6ccd771fc5', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '569794f4498002cf6edd50694af608db49d2673a', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '82946c09a23feb05af3cc5f8ce763257adb01e04', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '19f369cebd76a443e54800dbe9bed8a2dbc7de71', class: "legend bg-primary" }), h("p", { key: 'de6da04f0369c3d8e8568dfbfa6d47c70ed7a7c2', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '91a07c475cf5ec741941d4577ed5d8e813f0d4a8', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'ebfc67c9938ce66ac011f445223b40a7908b4800', class: "legend secondary" }), h("p", { key: 'aa5defa7e17a63e6ce9862e9ff688c410c28b080', class: "p-0 m-0" }, "Previous year")))))))));
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
