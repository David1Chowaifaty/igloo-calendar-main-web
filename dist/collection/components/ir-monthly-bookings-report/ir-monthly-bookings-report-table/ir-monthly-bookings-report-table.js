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
        return (h(Host, { key: 'a7a8b27525f6bf7043e45289dacc9ca3255b7d89', class: 'card p-1  table-container table-responsive' }, h("table", { key: '159a7fed064e6bd5d766e80da54e2b4eb92af669', class: "table" }, h("thead", { key: '907d463aef31dd7492512fc7c78ce94123048d5c', class: "table-header" }, h("tr", { key: '1aace455a027527ad9d7037a1aee45e8880c8e92' }, h("th", { key: '37265ddc178b3022bba2d3ef5c0669f141b9cfd3', class: "text-center" }, "Date"), h("th", { key: '708a4687295d771cc5f14af19c37980d686312e5', class: "text-center" }, "Units booked"), h("th", { key: 'ec113304c80d6d2bd87b20fcf7d20b787a2eac92', class: "text-center" }, "Total guests"), h("th", { key: '6373fe13d29c0f0d656a4e228b89c869bd5bdad2', class: "text-right" }, h("ir-tooltip", { key: '5478bf9899a6a6e7929b2ea9594ed57e89a5f4ca', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '1a6e7bd0a5f20406ee05ee7bf2a52cb48219d2c9', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'caae6a351ce8ce995819b7bcd86ffd54d3621b7b', class: "text-right" }, "Rooms revenue"), h("th", { key: 'f0dae49f38b70397df2e1e080c9db3eeba7c622c', class: "" }, "Occupancy"))), h("tbody", { key: '212ba5ebcfd98aca52383a620d150e9017e577e7' }, this.reports.length === 0 && (h("tr", { key: '8579ea5f52d32837b1770b0a96bbe00710ec8826' }, h("td", { key: '0d7cfeaff49a8ff805eee89fb3d8d4196de7a33a', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '8a0d50e155221ba417e01d2edbd13b21c170417c' }, h("tr", { key: '7748f4c06ec32ac1cdc7e6222af95cc038c58817' }, h("td", { key: '4d8bee0036b49eac468c296231bda7a0fc5c36b4', colSpan: 5 }), h("td", { key: '5b1672e8639c389f761556e9a5bce89da3e0239f', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '3b4569ae0bf8595a1db15f09735a1eb708675c09', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '4574731f64fb11b85026ba2110229679fdf8275b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '7f8e842e3b4b55e3f7440f6e1a5fa1a01c8284e7', class: "legend bg-primary" }), h("p", { key: 'd5ad00c8f095ab8a050f0efb24400a8dd19c2c2a', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '4f66ddb56f93d31db8f41eae363e3fe5ffc13352', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '678a2ff8a9cdf1a994912ab8551fa7963f4310a1', class: "legend secondary" }), h("p", { key: '0b2827c654eda56117d063ceba61f936eb2adb1e', class: "p-0 m-0" }, "Previous year")))))))));
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
