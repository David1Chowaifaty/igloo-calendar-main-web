import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("div", { key: 'd4863caef18474028937f739c89be8c5af074bcd', class: 'table--container' }, h("table", { key: 'a0de8380c84297910e1ed52e086c14b810f1a787', class: "table" }, h("thead", { key: '3523c34090f0f8d662bb9405fa413fc2ea7f0e5f', class: "table-header" }, h("tr", { key: '98de2894d95afdfd68343fb5010bcda2ec63bf0c' }, h("th", { key: '269182b26bdfcf7a921060f8f29a1cd5ea89b0c8', class: "text-center" }, "Date"), h("th", { key: '63a1774753fead449ab5eb6dfceaa59a1c005f07', class: "text-center" }, "Units booked"), h("th", { key: '17935be184b68633b71b7466bdd568d1e979b973', class: "text-center" }, "Total guests"), h("th", { key: '7c505678776b924f70bfd239cda52aa9a5345a48', class: "text-right" }, h("ir-tooltip", { key: '449a92c173e42f91943f389e77a1026ace7264b8', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '8db3bf54e97c9dfca5f08db1220e4dd320c5828c', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '92a0c1f09a5f7ba0cfdba3a2423fc1152abb2981', class: "text-right" }, "Rooms revenue"), h("th", { key: '3113f0aa7674c483c7416ec91718118f41561d2a' }, "Occupancy"))), h("tbody", { key: 'e038b58707113a19fcb0e0f8d5bca62311dab1b7' }, this.reports.length === 0 && (h("tr", { key: 'cfc4742f214f1582ff589e9bfcfb4441ff642219' }, h("td", { key: 'ae3d836c77f6124b2ae2ee206a6b5613571c8dba', colSpan: 3, class: "empty-row" }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '05ed3532f6522d68e6006022e47ac7a39d294415' }, h("tr", { key: '98fad07468d845f539320aec78796763ef037701' }, h("td", { key: '4510b7243b53336af4b4dab6d6a7bf272b186ebf', colSpan: 5 }), h("td", { key: 'b8142908a090b628c92a44643876e1977e5f319f', class: "legend-cell" }, h("div", { key: 'dfbc5023d8a7031d10c5999f1884a727afa49a1e', class: "legend-row" }, h("div", { key: '2cf9380f92f230bed7d874ed8b2386e820e99e92', class: "legend-item" }, h("div", { key: '602930a7a52fab1e30a062ddb735f3969d83da85', class: "legend-dot legend-dot--current" }), h("p", { key: '61532b6e9006692f7efc4b9550c14135bd179a66' }, "Selected period")), h("div", { key: '959a4967d515e9b086f72a268414411861625025', class: "legend-item" }, h("div", { key: 'e440ea29a96bd390d52c67c0d3171c18c7da72d5', class: "legend-dot legend-dot--previous" }), h("p", { key: '9b6842f9b70f752f827834d550b7d9543b18375c' }, "Previous year")))))))));
    }
    static get is() { return "ir-monthly-bookings-report-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-monthly-bookings-report-table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-monthly-bookings-report-table.css"]
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
