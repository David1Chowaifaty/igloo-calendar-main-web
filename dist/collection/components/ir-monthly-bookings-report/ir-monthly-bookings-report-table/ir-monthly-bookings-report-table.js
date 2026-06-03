import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '8ab1a6afebcd50a39b971f4b42c25be9206d7e64', class: 'card p-1  table-container table-responsive' }, h("table", { key: '4beaecce5f619863f1748dfef4b13a520ee31a31', class: "table" }, h("thead", { key: '55ae548c882e4ca1a96784d38e2bb7025e13b015', class: "table-header" }, h("tr", { key: 'b5661cbd7e72093214c539b677fdeb484402dac1' }, h("th", { key: '9dad85cea376815b3ccd9d2798701afded3736e7', class: "text-center" }, "Date"), h("th", { key: 'aa0512a310bb9d62d6b8dd4ab3b12d68f4798ae2', class: "text-center" }, "Units booked"), h("th", { key: '02da6b1932a7a82631661d4ff57399a96d22f4ce', class: "text-center" }, "Total guests"), h("th", { key: '3df800b0ee8df3bb3663b8e20b4098da0d73996b', class: "text-right" }, h("ir-tooltip", { key: '134d532d15335c1fb2e40c2e22180a86d224960f', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '4ccd664a8588bbf3cf80d2a181e69cb3c05a3ac2', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '25536660e496adc6b03a135f68d959b97e671af1', class: "text-right" }, "Rooms revenue"), h("th", { key: '86ca5dfd4a1c99dcfc86e18659346cb1472aa5b1', class: "" }, "Occupancy"))), h("tbody", { key: '4e81b1dc3997cf2eaaf72290427595d8d50e325d' }, this.reports.length === 0 && (h("tr", { key: 'cf65329405596eff1c12d978f91765fea21c8b17' }, h("td", { key: '89adb3df99409aeba01ba202378d1f65f8324878', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '6ff84c05e7491cb3ed34c34fea19c537d19ad703' }, h("tr", { key: '6d82dc2844687e2008da1ada0529aac146c06728' }, h("td", { key: 'edb9b0023c2e06efa942aeb44b70a66494902534', colSpan: 5 }), h("td", { key: '79257c8cb090a039473050a774ea37b6c89b1d17', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '276b71d0de9ce33519ed71f209c559d85c6e05f2', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'ecfe4a129f8d41ee89e716ef8f35982a5bb16c21', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'f93cd391987a9c519b44fe15f0feb4c2335d9e3d', class: "legend bg-primary" }), h("p", { key: 'acb7481d9ca3cb830b5246410c16adafc3f2f733', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'ebd889a311b2860ba72d117177824fddd053e0f8', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '3ddbfdb002fc1b52e24e7eff224e3256dedc5577', class: "legend secondary" }), h("p", { key: '59d51fb1feca8283430d2785f0cbbf5e975bf0f6', class: "p-0 m-0" }, "Previous year")))))))));
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
