import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '9127266e38352178387225f907a12e3bace64108', class: 'card p-1  table-container table-responsive' }, h("table", { key: '6f8f76b147585089754ec3656914381bd7e734fa', class: "table" }, h("thead", { key: 'ba45ba9715ec69242f13cd6a9e24365a90cccdbb', class: "table-header" }, h("tr", { key: 'f6022a6b43586a4417aa4c398bd9184ace8b8e25' }, h("th", { key: '431a1f7a236be89f58f87134c9eb075b114202d1', class: "text-center" }, "Date"), h("th", { key: '819b847f985560d26643ce005976a2d7f7f96821', class: "text-center" }, "Units booked"), h("th", { key: '0ab4f3b9c73918147fab291254092cb31a00d395', class: "text-center" }, "Total guests"), h("th", { key: 'dd9f4f0ab8f49576f55d59e0e34dc9464802167a', class: "text-right" }, h("ir-tooltip", { key: '55eeacdbc2c52ede57a97c9c464cbea3e65a598a', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '66a4e129fcd2b3f35988cca8797aba1473de199c', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '12e55c534862c32307582ec25b1887d7a53ef7a2', class: "text-right" }, "Rooms revenue"), h("th", { key: '107a92269d7f4ac845729c49bf396094bf493d1b', class: "" }, "Occupancy"))), h("tbody", { key: '7214d36f052eb64eebf616fa1504ff4ea63253b6' }, this.reports.length === 0 && (h("tr", { key: 'bd4fd7b7315ba5f025bf072f470d0eb12e1e2d78' }, h("td", { key: 'ed383a9abc4ab68fe5f8d218bb7963626f6147b4', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '1a03355691047641e1e8ce649e9b58af20f06380' }, h("tr", { key: '43fed08dcb695b3b913457b0ae9fa6964bf72000' }, h("td", { key: 'a3fa67c78787b1257664f9f6e7fdafc63bef6e85', colSpan: 5 }), h("td", { key: '1ad186573262f6ca82b4f1a0a75306510304a22f', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'ff4b9c8d0036d2d47144a3c7c4641ee0150b0509', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '8b4456811950f1f9eaf4f43c339c75770779de68', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '838f24b4ac4ae69b17c8cab77b16e1f79bb0b380', class: "legend bg-primary" }), h("p", { key: 'ab0d1c7647a171fd5fa8c59a55da02acf75c95ed', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '973b6a69485fc82b884aa07dccc983824bd8ba2c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'd8bfd77292eedc346bc8cd5a71c4dd165f6c19ca', class: "legend secondary" }), h("p", { key: '76be734cfb3f237233346c034573330283dd60a5', class: "p-0 m-0" }, "Previous year")))))))));
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
