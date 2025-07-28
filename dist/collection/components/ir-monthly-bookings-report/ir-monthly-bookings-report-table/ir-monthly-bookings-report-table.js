import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    constructor() {
        this.reports = [];
    }
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '55f21a8424b4b337cc7273739c6aa9b2500a5ba2', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'e9663469ad8b70eaeaf1734c7e54c8d6757753c7', class: "table" }, h("thead", { key: '2f82a4a6c13dc2bc4f66cc044f9ea5cf1ab78f4a', class: "table-header" }, h("tr", { key: 'b9ebfb0ffd41013de13ef3bd927bbc874db28597' }, h("th", { key: '37e5c79cf3cb4df4a3ed6c68d6db4574a5d1bf57', class: "text-center" }, "Date"), h("th", { key: '6dfd9ceb98da3e6f421f28384945e38083fa4cb4', class: "text-center" }, "Units booked"), h("th", { key: '3b82858a074c60dc96bf8d830ff069baf921c2f6', class: "text-right" }, "ADR"), h("th", { key: '1ba1b735fd04ec1638807be48106e385a9eda88b', class: "text-right" }, "RevPAR"), h("th", { key: '096fe815193be718235f7f9391fda3d221e86714', class: "" }, "Occupancy"))), h("tbody", { key: '279a2753818dd23c303ac122fc4171ecdfb03945' }, this.reports.length === 0 && (h("tr", { key: '852ccb26dedaf0ecf1626fbe4e2b903db3498646' }, h("td", { key: '0a01ec32617e844963e879425fb91a8475999fed', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.units_booked) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_f = report.last_year) === null || _f === void 0 ? void 0 : _f.units_booked) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'd5348098cd30e3f5c178ccaac35726489f8dbd79' }, h("tr", { key: 'e75e9c8df058bcd6ece524d47f8a92e66ab71ada' }, h("td", { key: 'bf6e43bc46110e015170b4786b4e2381401d13ce', colSpan: 4 }), h("td", { key: 'ab14ae736e61d1eb2396e0e2ac49206cc3f5927f', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '5f4e700e9b8be63b1f99b4766b402bff7f3419c1', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '0806aa7fea68c0fa34b172d38e7854c1909f420e', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'e77b08b8541f865aed09db8ae7e238d53c14837e', class: "legend bg-primary" }), h("p", { key: 'b1c52f8fe0f30689d29b23dd7ccd172d16617478', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '7962afe1d2a2b3102f54e417593a5841fb8e2759', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'fe751f62c63e979df5d5be1e940a757b6a1179b6', class: "legend secondary" }), h("p", { key: '54a67c30a7e6deac78b02ae703ba1173bec4a4b2', class: "p-0 m-0" }, "Previous year")))))))));
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
