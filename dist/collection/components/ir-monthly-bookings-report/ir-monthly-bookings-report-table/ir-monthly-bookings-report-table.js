import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '1886834a18b4640aa1c853f4695e4cd7b40038cc', class: 'card p-1  table-container table-responsive' }, h("table", { key: '23c6b9bbec46b66fbd9f7faf44f11d2a4381ff11', class: "table" }, h("thead", { key: '223972c63526c521840e955ddbaaa6efe4e8b3a2', class: "table-header" }, h("tr", { key: 'd7d23042b834b81c2fe8d65f205345da4f9ca4dc' }, h("th", { key: '4e040c2b23cb1a98de32345f5e7ee3c26bb0dea4', class: "text-center" }, "Date"), h("th", { key: '60d2722f96047396e264595a5ab3fd4fc32d5ba7', class: "text-center" }, "Units booked"), h("th", { key: '1a854438d52f23638d2330ccf46ee495b2135d84', class: "text-center" }, "Total guests"), h("th", { key: '2b8861f90d49ed4657263390350045c4d7a8b1ed', class: "text-right" }, h("ir-tooltip", { key: 'ee62f5683d10585338f803c60386d6f0e8ebc646', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '8d1362ab28133ecddd0e70bb96ce41d47ecced29', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '12976fbe939c25135f82ab9086a8db985e84f380', class: "text-right" }, "Rooms revenue"), h("th", { key: '8b173c15bd681cb9118dab650461533ebda71d87', class: "" }, "Occupancy"))), h("tbody", { key: '3c33c8f27b046594677f7f54afdc5ea5ec764f2f' }, this.reports.length === 0 && (h("tr", { key: 'a07e648a67935c141c308a1ba506bfcd79c1bce7' }, h("td", { key: '4eff5d45ac25c00a5f8946376707db6e57fd2612', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '27d58e5529bfd9c73a04e6aaf6b08ee5db50798c' }, h("tr", { key: '8fd076f86ed62a94dbd533e524134309e5295b8c' }, h("td", { key: 'e2c98621311ca1d0a1ae711c3f573d0fb7289402', colSpan: 5 }), h("td", { key: 'da6275cb54494a6f52c6e2b67e63aa6d4944c438', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '541fbe98305187d232621752b607078a1ae1cc52', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '847a7cfd400f69d2a5b9ae653f53b8adfbea7b31', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '599687b9bee593d07f8f04b1d72a942baeee88d6', class: "legend bg-primary" }), h("p", { key: 'c2e924bea4d5cda13124a32244b570b907280412', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'a3889158c362834139348fe8631945b5a161b9c2', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b77cce2eac1193d0913e79f1137bae6abd0b64a8', class: "legend secondary" }), h("p", { key: '3e722f7ff7f321863dc55cf5b5be697676ec4ed0', class: "p-0 m-0" }, "Previous year")))))))));
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
