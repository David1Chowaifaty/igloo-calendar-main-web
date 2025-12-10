import { Host, h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import calendar_data from "../../../stores/calendar-data";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '2d92fcf85ca2268b8d91dc99e450292430d6673f', class: 'card p-1  table-container table-responsive' }, h("table", { key: '208944674e00275ba468876d6232f45fb857f41f', class: "table" }, h("thead", { key: '81b95f5bd5005823ea5e6d7a83e7b2c7f0db574c', class: "table-header" }, h("tr", { key: 'fdd33549d2d482ae321fb44d85bfe66773d4ea20' }, h("th", { key: '2caf62efc715c33e568ac711746e7e2e0fa10497', class: "text-center" }, "Date"), h("th", { key: '332f9e25ce4cb5360020ece41725cf9c42c1c03b', class: "text-center" }, "Units booked"), h("th", { key: 'f2951e37dd5aa410cb7aae9c41bfb65d2694ac58', class: "text-center" }, "Total guests"), h("th", { key: '4040e379e6be7a7f8d12629c5a640b8bdc4c9ad8', class: "text-right" }, h("ir-tooltip", { key: '747a5a996c2b57b0da4f911ab22302a0373e212c', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '7bcff4ac3c7c700e47004b19a04fd933dbbbc988', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '83ef33ff3a74517fca31e92eb6c946d098abdf4a', class: "text-right" }, "Rooms revenue"), h("th", { key: '20ef9d8758ffbe726e75bb0ec5cd89b263c4f6da', class: "" }, "Occupancy"))), h("tbody", { key: 'b0245c4f1d5189c87df915beeaa17b85da87918c' }, this.reports.length === 0 && (h("tr", { key: '330755c3397ed6fa3db50966df5bcb9917b57263' }, h("td", { key: '24db107cb2cf1437576ba91f003cbe9f25b7775c', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '6a59e9f63cad7bc7dfae4283bdac27e41ef495f8' }, h("tr", { key: '739d028e1b70052dfae1159abdbc9f8f465aa4d8' }, h("td", { key: '97331fae4f0a4913c7386e28a91a94b9ce0bed57', colSpan: 5 }), h("td", { key: '7af835f60af3a4bfc6f51c40f06f039bf6eb8e7d', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '9eccfde88679565ad6a9599c1bf5ae8344e05d25', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '39e62704f640cd36933f4fb290bfac38311bb89b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '6b81df1f40b770f19c5579f947111a7c3d7bdea3', class: "legend bg-primary" }), h("p", { key: 'bd02994d2cd047b42e0b073956518ad4757a995e', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'db951326df0328700928c15941cc69f56a5174bf', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'f94c3a8d6b0591392641d70e3d8af7d7020fa5ca', class: "legend secondary" }), h("p", { key: 'aff59f172004ab4be6b8045f29758bafff915179', class: "p-0 m-0" }, "Previous year")))))))));
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
