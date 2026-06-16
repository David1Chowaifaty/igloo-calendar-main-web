import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '267b989cd2ef3cc5430881c997a65aa59c96dfa6', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'e700cfcf85636804637816b737196503d45c9f2a', class: "table" }, h("thead", { key: '5aa1d1475981326b5a5744c3a0e73973d40fd3e0', class: "table-header" }, h("tr", { key: 'bdc464a5fd198f712313415b47bfdac77899e1e0' }, h("th", { key: '14657ed34fd11ca1389e391fb1cd94a8b48878ec', class: "text-center" }, "Date"), h("th", { key: 'f18c840dff9905d4dde5b231c5fc590d3e1fc502', class: "text-center" }, "Units booked"), h("th", { key: '0b833760e3f143b66916a783ff9216cc96c14285', class: "text-center" }, "Total guests"), h("th", { key: '76dcbcd20a5ff9e7e9068f2c43aefc52cd49b8de', class: "text-right" }, h("ir-tooltip", { key: '9c1547c5894ab34b5a562ee8d9c43b0d85de4a7c', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'd1149bcb29949562c25ac77dac40c40b68204091', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '1d6cdea9696eba638e6dc4478f9e398e27a313c6', class: "text-right" }, "Rooms revenue"), h("th", { key: 'a2e70eb5e5814a536845da29091ce27d18f000b2', class: "" }, "Occupancy"))), h("tbody", { key: '0cbcf881857b40fb9ce9718d05b6ef39949b0a0a' }, this.reports.length === 0 && (h("tr", { key: 'f01f24d56c73693b9e4a8d5c3d3f44d96c328842' }, h("td", { key: '3c1831b235b0a53dd368d3c258a766bb5c301d39', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'f2f00062001a559dad0d327ab67460e34c80f57e' }, h("tr", { key: 'dd1c3464e9cfd9e9fe1e5237f30e1e3974ac55c0' }, h("td", { key: '741f1b30b2013ad4cc487ce4a60fa83b700c5e2c', colSpan: 5 }), h("td", { key: '1e41f7690b3c3bfe3bbe07d58dd682336dbe0fd0', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'a36e6c1367af5b92c87b922386d9817e147cad00', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '8d40fadb7c63ae59af0e62816bd53960fd20d11b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'f1e82d83425e8097bb0b35c0ec97913d2a0a65ab', class: "legend bg-primary" }), h("p", { key: '6202dbcbbbe215c7b4dc95bad318e3cbf4b31acb', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '6218e9d427aca7a25880851502ee489ec367bcde', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'f3d9034ebcb66f68875b1a8a17c701e895bea571', class: "legend secondary" }), h("p", { key: '1e0be163e5d163f5f52af0296092be38da313f31', class: "p-0 m-0" }, "Previous year")))))))));
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
