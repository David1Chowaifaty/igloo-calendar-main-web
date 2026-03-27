import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'bbe106a8b9faae0bed9cf92d8137c7f5c4ded298', class: 'card p-1  table-container table-responsive' }, h("table", { key: '4841851d9e0c9e1875ecb007e29103c8f064f813', class: "table" }, h("thead", { key: 'dc3dfcf04b494efbf3f1af96b28c2f18515cb95f', class: "table-header" }, h("tr", { key: '23d07b32e7ea19f3402f0eb98fcb6e297b1d036e' }, h("th", { key: '29ddd0809a54e1eb93b0790f929d5f07cbed5e70', class: "text-center" }, "Date"), h("th", { key: 'f5e04e3c4810129b714aad6532ec7a9857862387', class: "text-center" }, "Units booked"), h("th", { key: '4aee519a98fb0966a59f34de6c7a86e72cc4fa1c', class: "text-center" }, "Total guests"), h("th", { key: '389ec89d21290ef8c076e2dcdef99d65d89d3950', class: "text-right" }, h("ir-tooltip", { key: '0d44b04ddeefe4c84c613b12ed1f827dfb4c3e24', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '740fa9fbbafbb87dcf91c70e91b2f4354b2fca5a', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '9bc76d240d1316e0d985b83515e7587ede6ff52c', class: "text-right" }, "Rooms revenue"), h("th", { key: 'b42c7b220ad27b7fb981327e1b0fa9194cb6e5bb', class: "" }, "Occupancy"))), h("tbody", { key: 'f7a7d180752baa818d671af176a24f20e2701135' }, this.reports.length === 0 && (h("tr", { key: 'cb1c7c6dc8d65d7067ba8be9110a3bd926fa4090' }, h("td", { key: '83c84265c0edd3663b6da8f47544c74c3bb4bc62', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'fefb15c9c7b174a83eb5f0b101dd7bd9d3579211' }, h("tr", { key: '54c5e9fe65f4ea9dc890ba40f9958fb9b08ac954' }, h("td", { key: '1aca9ab916ea8c4d1cc5ed58fa127b581add1f1a', colSpan: 5 }), h("td", { key: '65d4fd282c0785cdf1f17f3ec9a38f7fcc26a8fe', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '3bbcc1e845cd7a6cc882bd8ba344607089613baa', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'c7f39c4bea48f38d1994f07cdd21b1e92ecc9916', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '0f65d04b7c9f936ddc5d66d062dfa136a45c1e78', class: "legend bg-primary" }), h("p", { key: '58a459761930f18847fe5f748a9c679978b29922', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'ec0c00486cdd41c174b7b120cc54202f1d84b419', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '48cb4a0570eab5788ef8cdc857f7ea9cf5d3487f', class: "legend secondary" }), h("p", { key: 'd09b07847c89dea4d271cb269be32afde54283b3', class: "p-0 m-0" }, "Previous year")))))))));
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
