import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'd9b9fdebe419844e96922dba936d3d33c3e54a5f', class: 'card p-1  table-container table-responsive' }, h("table", { key: '229ed2bfbaf7ce2048bf5d22afd06417b2551740', class: "table" }, h("thead", { key: '2bf05ee9dab45ec13042543c0a0406a9572ee1bb', class: "table-header" }, h("tr", { key: '6e741e048def1beb2512dbd700e7698fb980a8c3' }, h("th", { key: 'e95ddef6aab2393854e44b90e97b42580a48b5fa', class: "text-center" }, "Date"), h("th", { key: '5da8b8be74ca53b6d130c051818ccfbc256e8a11', class: "text-center" }, "Units booked"), h("th", { key: 'ddacce62e26366cb24204144a651727674ec9ccb', class: "text-center" }, "Total guests"), h("th", { key: 'eeacbcee2a6b3bcaeee70611aefb898aff4cc57a', class: "text-right" }, h("ir-tooltip", { key: 'ca8a30c7af74d18da4eb5f25b3b0109d4e17b984', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'd52e2d2f045eb020ef54c56513a09e51d46e5c2e', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '7ba46aa4244927c10eae46d6da45d5d7f1f099f0', class: "text-right" }, "Rooms revenue"), h("th", { key: '2e1c18332d299986c38918b2342ecdc18b1e0964', class: "" }, "Occupancy"))), h("tbody", { key: '5c0f0a842551b7db8b1582a231b6357e3bd95711' }, this.reports.length === 0 && (h("tr", { key: '07938b9b496f8767623c906c57e406272dce895a' }, h("td", { key: 'cc2784de8b90810febc0809319e3cc33211e7172', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'aeb45d70b02946915b13932aec1a70af2faedd59' }, h("tr", { key: 'b486795c17b6c01b6b7bfe43ce4b09ad79a379ae' }, h("td", { key: '8681af1d602d6a8e05ff79eadf65b03d3d2d0864', colSpan: 5 }), h("td", { key: 'f31b3daba780db97341b8dd98e12f81451974f29', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '5faca4a2129f3f2af13a0bd74b012efe08c6289b', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '32fb45dfdf5782c906ac1f3293b805fb1bf09a79', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '8c4722bde6323bb844bd8bb7f3ddab62fb4c92e2', class: "legend bg-primary" }), h("p", { key: '8c60fb83016af4d49958550f7e1217c01745172a', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '7ea7e6df03599a5340ff255a8b373c9f427782dd', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '1fa3ddd89a1aef97b06962fdbd0df0e9a36a7a57', class: "legend secondary" }), h("p", { key: '671cbd9db912aa228e88253358ac4c817b428ed2', class: "p-0 m-0" }, "Previous year")))))))));
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
