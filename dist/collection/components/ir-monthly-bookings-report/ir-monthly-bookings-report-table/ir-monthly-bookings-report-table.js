import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: '97e1e29dcf79e1d4a69c40d0dfdc430482e89fac', class: "daily-occupancy-table__card" }, h("div", { key: 'd73a0a10b4860d5b71933048726b185a87c75685', class: 'table--container' }, h("table", { key: '8f2d22089b885278fd6c1f6e154d72a21da75492', class: "table data-table" }, h("thead", { key: '102ac87a2a160038f46224722df29a725da3501e', class: "table-header" }, h("tr", { key: '244745eab0ab9b3979e550c1b6c5937e835c60e8' }, h("th", { key: '4ffa631d8de7dd71fb1620e89e3c06d7a99c181a', class: "text-center" }, "Date"), h("th", { key: '2818309ed1a55cf10b774734bea6dcce09a18867', class: "text-center" }, "Units booked"), h("th", { key: 'e289415bed01c4b1f85da64970a42da9cad7666a', class: "text-center" }, "Total guests"), h("th", { key: 'a4fcb7c0297ff01e6017809193bd46c356badae0', class: "text-right" }, h("ir-tooltip", { key: '040515323e389637600205dc155a2e48c52970e3', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '5c7373ef800bd3d9522773d22b0e4a2d0474d446', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'c1a66da6eb4375962be9a4d83db8985306e51b73', class: "text-right" }, "Rooms revenue"), h("th", { key: '07405533afea0e5e657aad3ca0e159ab83c310b3' }, "Occupancy"))), h("tbody", { key: '7403fc0b94c55de5386a9c932bb25f8de002b344' }, this.reports.length === 0 && (h("tr", { key: '0fb65af4969350a3a65689ad1315a7ffc5bc0edc' }, h("td", { key: '18fddb923973541a46a235a0805aa276e02afdc3', colSpan: 6, class: "empty-row" }, h("ir-empty-state", { key: '15764eb6102e07d0f9def5dc6b76fa299d16c683', message: "No data found" })))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: 'c0c66e81a00d8c20981bf322e20bc21a0ff0b47b' }, h("tr", { key: '4cb42d48d8f9b19007ec9401f582abc53ca09e81' }, h("td", { key: 'f4cb20c311ae1c9de8e1fe722c420cb4afc39772', colSpan: 5 }), h("td", { key: '64d7ccfe627799924adf34d0bbd535da9d3b6807', class: "legend-cell" }, h("div", { key: '04d3ff785f0984431cfa9b33356f335e86e10008', class: "legend-row" }, h("div", { key: 'e99a3133899f7a0cf0f2ea73e0baff4c379a782a', class: "legend-item" }, h("div", { key: '7e308dcf3928a60bb07929a72741b57a5aba44fa', class: "legend-dot legend-dot--current" }), h("p", { key: '35a5842b1e04a87399521f973f4ac62b2775d6a4' }, "Selected period")), h("div", { key: 'ae191e5643e7ac6d46ad3cbe1bd0c549dc2c6907', class: "legend-item" }, h("div", { key: '9823441812da49288185dfeecabd68394e0c8137', class: "legend-dot legend-dot--previous" }), h("p", { key: '23684db00c79b1e8a54038a721ea04f9c93d9a9d' }, "Previous year"))))))))));
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
