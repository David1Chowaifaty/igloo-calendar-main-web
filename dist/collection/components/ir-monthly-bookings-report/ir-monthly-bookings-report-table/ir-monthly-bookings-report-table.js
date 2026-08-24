import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: 'b958fa4c57567809c68ffdfb790c1466b5942fb5', class: "daily-occupancy-table__card" }, h("div", { key: 'c4ef859cb12602e9ead862f294db32b907fa9886', class: 'table--container' }, h("table", { key: 'd8cb8fd0486f536aab40853dcbaf1c927d747310', class: "table data-table" }, h("thead", { key: '00b57921359722dda2047e1a4dc9b3e2a09a0c61', class: "table-header" }, h("tr", { key: 'e31aad7c27478ee5f3d3a898e185408ce397ff8b' }, h("th", { key: '0cac2b46bb43519cb8971fb0c053506b909e72c4', class: "text-center" }, "Date"), h("th", { key: '529331959e01da3029e24f7e1bbba5789c7033ab', class: "text-center" }, "Units booked"), h("th", { key: 'eb4c811809539bf625cabd6436036ee24d8ca5cc', class: "text-center" }, "Adults"), h("th", { key: 'e4010f5f35c970da8d8ef5efba5b384f30356dbf', class: "text-center" }, "Children"), h("th", { key: '17db8b687c2c3ba4e7f31f5b2efed4006f50b5b1', class: "text-right" }, h("ir-tooltip", { key: '3beafd3f09d589ead79b0fe35eeb32e605717c09', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'c91faea6a0084a3f9736d5b8bf323bedbd8c6550', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'feae28d556802528541685ec9282cba2e49cd1f5', class: "text-right" }, "Rooms revenue"), h("th", { key: '89abba788fe83e7c4771f7fda8595eeea0b6b4de' }, "Occupancy"))), h("tbody", { key: '032cf1a39840c0763cfc1e6aeb54251bbbe62437' }, this.reports.length === 0 && (h("tr", { key: '7f12767306c31f67a28f527fcd78501d96975469' }, h("td", { key: '46bec310250dd94eaf89bb256ff1009e03f04ddd', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: '8dee411c10c2dcf2f8258b413422a00e1a6bf007', message: "No data found" })))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.adults), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.adults))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.children), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.children))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: 'd565fddf950417fa62e1a6c81dedaa445a00028d' }, h("tr", { key: 'ddd2b43e3606203e3cfad32a2b18e3becf6e64cf' }, h("td", { key: '5d052142248077632cb920bb1b112f951c658989', colSpan: 6 }), h("td", { key: '9694b31545b1b481b18074a8af519c08d52c710b', class: "legend-cell" }, h("div", { key: '9a142ec711955ef9f354ce68529289851fbe08ea', class: "legend-row" }, h("div", { key: '026b19bd2b4b44dc884968c83592a28af10088b0', class: "legend-item" }, h("div", { key: '4678ba8d64e1848eb4cece012dce8e7251f564a2', class: "legend-dot legend-dot--current" }), h("p", { key: '70b8f06c9da669c848ccecec29aa9682ebfe7324' }, "Selected period")), h("div", { key: '8def45cd348e9fb631308b974d320124e2259ed3', class: "legend-item" }, h("div", { key: '97626d8f59d1ef5090bc51ba5719791e2706631a', class: "legend-dot legend-dot--previous" }), h("p", { key: '4e24dbcc7f2555ce71b1ed0f2ecf35d85583b0a9' }, "Previous year"))))))))));
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
