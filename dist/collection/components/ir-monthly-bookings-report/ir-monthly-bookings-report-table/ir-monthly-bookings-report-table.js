import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '6588f308f4142ca128c2ada302080deb566aa803', class: 'card p-1  table-container table-responsive' }, h("table", { key: '82db18c70eb62b57de5f2c50bd325d89e5dcec4e', class: "table" }, h("thead", { key: 'd1c2bb1564566756ae6e89e7553caddde26a6d93', class: "table-header" }, h("tr", { key: '005c6f14967ec346e051007ac681db374584424b' }, h("th", { key: '77e76919fe2bf35c39edaf92a3927b1a07a456b5', class: "text-center" }, "Date"), h("th", { key: 'c9a0492f633293d7dc2a034d740849d0f039dc7e', class: "text-center" }, "Units booked"), h("th", { key: '1df2bd4f8666a3b698f0b84fe3149bdcd9866139', class: "text-center" }, "Total guests"), h("th", { key: '08d93739933e54c58b58f6089cf86e5352ba0c31', class: "text-right" }, h("ir-tooltip", { key: '7587e1ab8315198c880c63d79959c79cf6061223', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'b0192f51b840edd14de2efbded76ae206700ea03', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'f487d3f855d9dcc41d453b0ff7389854a93f1a3d', class: "text-right" }, "Rooms revenue"), h("th", { key: '5fc9b84128b751c676ca156750d530ed3a84f485', class: "" }, "Occupancy"))), h("tbody", { key: '330f4fa7bd97b99dde8deab0dbcb3087b0d73f8a' }, this.reports.length === 0 && (h("tr", { key: '1f5809d1875ed8bc26557d3952a69080d775dfc8' }, h("td", { key: '6fa748064f4289eff7c232dbbe386074c7f901fb', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '633cc62458cb082d3650757d7f38d449ad119151' }, h("tr", { key: '905f07f0d2b09ffd233349f6d7dcd8c3e89a68c7' }, h("td", { key: '9e0aa528caca459287d1dc53c2d3209d9211d2ac', colSpan: 5 }), h("td", { key: 'd3cf3c092342aa448d11e353e962ac6aaaec751b', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '57452b15269358a8f6aed25af97941de3b165138', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '0ff47ea25244f866e6a68253f3ba9cd89643e08d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '1a1c8238b9cc146e8cf73cfdaba4ef3142a604d7', class: "legend bg-primary" }), h("p", { key: '60e7798778a259fcf9c3a11b65c7271263faa547', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '6ab314314730baf9d536eef8ff13fce9bdd93fd6', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '1038848b4636d521d0fc8bd67af4ed322f272ac9', class: "legend secondary" }), h("p", { key: '6e054b6d41bcc847ef0fc943a2214073a8e1cd5c', class: "p-0 m-0" }, "Previous year")))))))));
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
