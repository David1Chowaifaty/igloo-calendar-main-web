import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("div", { key: 'dbe821eab095248d847148dea09666725b845941', class: 'table--container' }, h("table", { key: 'a61569877676ecb7ec0826070b4cd311d38a6e3b', class: "table" }, h("thead", { key: '993c42e8858a8d170b25e0e3f34f50ae1d195510', class: "table-header" }, h("tr", { key: 'f3e374f0265d4315721686376552507c88c4f0e1' }, h("th", { key: '5cca0a21d0927207fcc499c597e5ce5350de1bd8', class: "text-center" }, "Date"), h("th", { key: '9ec936e1068a619f5df1835e1a407b62aa86bae7', class: "text-center" }, "Units booked"), h("th", { key: 'aeab27f1652b98b03604a1159f9436325a68e0d1', class: "text-center" }, "Total guests"), h("th", { key: '30324d84ac8621381275ac85e99447cf73dff36d', class: "text-right" }, h("ir-tooltip", { key: 'e5dc48a8d99cfb8c8997ceb6d8a316a966ee89eb', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '5f00eade54cde075257f94ee2c643f1756922bd8', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'fbb6fe42778bd6042913eff79a0e59130a3c4909', class: "text-right" }, "Rooms revenue"), h("th", { key: '55ac01aa25cd1b281b5c3f2a6f4888f83fee5a00' }, "Occupancy"))), h("tbody", { key: 'e7b995125250c76ebcbc0e98a30ae54110c5647d' }, this.reports.length === 0 && (h("tr", { key: 'bff0fac196f3cad716b62a554bcd64d43c42667a' }, h("td", { key: 'c9caefecb825cdee208886992bf2f363d957d5d4', colSpan: 3, class: "empty-row" }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: 'ea6ad4571349ca5f66cfbefd15914bb19895fbff' }, h("tr", { key: '628de7edfedabaaf58e05c65e2ae906b54152746' }, h("td", { key: '048e8fc47790e449bf6f6ff583220cfc9273b5e6', colSpan: 5 }), h("td", { key: '5c560b6162b9a5f605b9cc9b589b7dd4e1fd635c', class: "legend-cell" }, h("div", { key: '9cbe1264e35d4d7b9003a89d9636f94666cf5a0e', class: "legend-row" }, h("div", { key: 'a7b91a438000273ed79ebd3bd42571711cc9c749', class: "legend-item" }, h("div", { key: 'b50b0a7c5cda9c17041ec1feb7335b88b34b4ab8', class: "legend-dot legend-dot--current" }), h("p", { key: '47b2d8d60bb0b0c455278e114947d53d134a1520' }, "Selected period")), h("div", { key: 'c2a8469a4bcd4cfb385b9b93b11423d00b45f832', class: "legend-item" }, h("div", { key: 'f1029698c7542f04e64f54f99b6798e0a18ef2c8', class: "legend-dot legend-dot--previous" }), h("p", { key: '132c0a53cd5e987a2be6cd431d47ba69ada9e211' }, "Previous year")))))))));
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
