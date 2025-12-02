import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'f60e80c7a0d5be5abbdca880df7534f1d9bcdb1b', class: 'card p-1  table-container table-responsive' }, h("table", { key: '25317c770bf6d8b04444002c16b5498e5755d297', class: "table" }, h("thead", { key: 'fa4973f0d8a6142c7de0517a598b269786a8222b', class: "table-header" }, h("tr", { key: 'd432358846db150d95047a5b01a658cd30de0549' }, h("th", { key: '518d6c6ff6edf5e1ba7d57fef98eea8e68fc5272', class: "text-center" }, "Date"), h("th", { key: 'fd1f94c72896fd3105940d2ec68eace17b38b726', class: "text-center" }, "Units booked"), h("th", { key: '4672b979a8c8732a4b819514a89e2601c9af056f', class: "text-center" }, "Total guests"), h("th", { key: 'b3a0d75be06a3bfc4fbe45bc43b19c05806f167a', class: "text-right" }, h("ir-tooltip", { key: '22870b331a25649529c671d68fff16f3d665c7e7', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '876a0f52ebe00275da6091d237f4f300c82c0a1b', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'eab5892cea4781d6211c0281baa8e3332cfc92c3', class: "text-right" }, "Rooms revenue"), h("th", { key: '745adfe7769f050efd6f1a105c8cef510a2cccd3', class: "" }, "Occupancy"))), h("tbody", { key: 'e9773c321c40a551db8bffbae5d06e0855391adb' }, this.reports.length === 0 && (h("tr", { key: 'b3394d719ae8117d0f84375a4a1ad2f34e13e0f8' }, h("td", { key: '5eb8a2b5a07eb105b6020cf24edb4c3a4ab08c6d', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '1291a3d1ad371df79bee109ed2ed3945e56403f7' }, h("tr", { key: '60dd18562f3599d284d1a5581f5de78b17457511' }, h("td", { key: '138c054dfe10e2adf8eb08cc115790c7ee0d9229', colSpan: 5 }), h("td", { key: 'daddacb21b3b3ca894e1a8020e1384559708435b', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '3e205d1c16aaf76e587bc1cd35af516d0229d825', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'fc553172245e52d727cfb3d5da4f9152cb39527e', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a2de4f20353edbe35b5e759ee1146a40147ab50f', class: "legend bg-primary" }), h("p", { key: 'af85e713a77802fe59dd8ef80668cc8fb45ff090', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '2caae29cf1dedbc964694063a14c605c8fc7d6d9', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'c312d94a91f4fc9a8013862f802e46ec97a342e8', class: "legend secondary" }), h("p", { key: 'e7a3ff84c6c7305e1eb2926e6ac657d454f77bce', class: "p-0 m-0" }, "Previous year")))))))));
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
