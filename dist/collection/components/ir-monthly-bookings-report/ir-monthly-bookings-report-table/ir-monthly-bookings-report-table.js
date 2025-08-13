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
        return (h(Host, { key: 'f47d002659736ca6acd2a1e42316ced935237223', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'a11d6710eae7a765580f1d83fb9918881d717338', class: "table" }, h("thead", { key: '20dbace0808aba1d90e7ecededb59f7ff182fa45', class: "table-header" }, h("tr", { key: '2cd85a2f20a098321042208466d5cb6f4c9d89b8' }, h("th", { key: '850b640930e61ba0a7757f601b11af986a4eadc9', class: "text-center" }, "Date"), h("th", { key: '510fdac084839487c73a7ed13bdd6fd8b64e0203', class: "text-center" }, "Units booked"), h("th", { key: '336d7859788dede47f69c19c7d3da600bc037577', class: "text-center" }, "Total guests"), h("th", { key: '57c184496e4522ca4008f69ec5eb8b0e40d60a70', class: "text-right" }, h("ir-tooltip", { key: '9a7c008ca42ed11f8578601a0408ee511a9e4c7a', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '385244f84e9eae6825022f3169327750cb3878ce', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '46c3b0cd5e89094fc6542c8be98d8e135eb251ce', class: "text-right" }, "Rooms revenue"), h("th", { key: '768e8c98284a1aef0b85f86fe373b177182ec56a', class: "" }, "Occupancy"))), h("tbody", { key: 'ffb7d83564a0642c9060e5024cb540e2da23c0ff' }, this.reports.length === 0 && (h("tr", { key: 'de0c0d29b52dad1b69694c9ea87ed6c5815a3574' }, h("td", { key: 'f4cf083479e22e39f38f6209a4c35186abad832f', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'b21e4872b019e3fedb0c072a9414fe9230a0d1f9' }, h("tr", { key: '07f90298f80283a90683a0ce806e8b2bf0bef2a9' }, h("td", { key: 'b4c14effcb438ee7bc1a889239f3217b2ee725ed', colSpan: 5 }), h("td", { key: 'fd7c83de90bb185f704eb7cdf5c15773289e06e3', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '4c5d782f61cced7fe233847ee6c3e9dcc7fe2d4d', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '79f96e4e7506ff30f3bca941daef0213ff54ee68', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '6aae0be2bd690a92d3d9e68bf3c946e1c2daff92', class: "legend bg-primary" }), h("p", { key: '95a777edecf14a57e2f1bcccb1846f75c99de36f', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'fb713ec4a304ec10ab4a8f7396627b596c6d513c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'c053a0954e4d16b1311edc5c76d792fec7df69d2', class: "legend secondary" }), h("p", { key: 'af1d25e1b8039c143bbff7918cde3fbfa32baa6b', class: "p-0 m-0" }, "Previous year")))))))));
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
