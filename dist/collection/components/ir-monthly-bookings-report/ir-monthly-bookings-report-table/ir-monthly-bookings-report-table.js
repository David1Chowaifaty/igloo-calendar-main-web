import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'fea8765a215ae4281ff467a43eced112eb11d146', class: 'card p-1  table-container table-responsive' }, h("table", { key: '78bf011db80188041aae496760e756d1fd029b3a', class: "table" }, h("thead", { key: 'a474fc00883e5674e8366eb1177fbb3bf02b929e', class: "table-header" }, h("tr", { key: '94d0ed6395dac21f0911c9dfd2547751e9e3ba24' }, h("th", { key: '05a8d072e1a3083feb5a0197b1bcc717d0f1dddc', class: "text-center" }, "Date"), h("th", { key: 'e826e121743d0f085443ea0889d080003453849b', class: "text-center" }, "Units booked"), h("th", { key: '3078a92565f22d929ab3889ac940b31b4eb11ab0', class: "text-center" }, "Total guests"), h("th", { key: '16940b52ed4fcd327fb8fc63be63554cf1be3e7b', class: "text-right" }, h("ir-tooltip", { key: '9b3ee0532a82183d734ef3e5c1d6ff92f1b3f77d', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'bf09f9a1c4248da94c9d0f1aba9f6426341fd14c', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '648c2d9d2d18093eddbd7da7dd8138abd4e8982c', class: "text-right" }, "Rooms revenue"), h("th", { key: '7ef5cb9b2a0fdb090bb651bed3d0b3878d76b878', class: "" }, "Occupancy"))), h("tbody", { key: '501f84798224e5a05e37fb286a7a76165735049b' }, this.reports.length === 0 && (h("tr", { key: 'ec95f049f390ce4991f066fd138edc57cd7eaf33' }, h("td", { key: 'f99a06948f941bdb4fbadcc1ff9df1bc5dcd2fad', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '181d010b5e93d0a527d0bc283e4c7348b94554a4' }, h("tr", { key: '759bbcae938a560aec6bf5199176e3bd1eb16a9d' }, h("td", { key: '0c53ad55109bc20408361510ad34edda2b83aa66', colSpan: 5 }), h("td", { key: 'ebc083684ca5657ad8f0d281b02558af55e12652', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '466e2aca33e14bf16d96324a4488870cb6eefd08', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '757429da7cf05a498bac85585874a814506b02aa', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'f96e4ca064a2af8320aa2a24b1154b2a2596ef43', class: "legend bg-primary" }), h("p", { key: '289a08f44659a4ae790ab739b12f5411fb7f2e49', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'e7b10b2855c8040115a105b19f1baa6d75da39d0', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'ab723d47de84ac4aa3e6ae80c891a54271879d17', class: "legend secondary" }), h("p", { key: 'd74aea12b0330a1e5cbabb96cdd07bf37891030d', class: "p-0 m-0" }, "Previous year")))))))));
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
