import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrMealCountSummary {
    mealCountSummary = [];
    render() {
        const list = this.mealCountSummary;
        if (!list || list.length === 0) {
            return (h("div", { class: "text-center p-4 text-muted border-0 bg-white" }, h("p", { class: "mb-0 small" }, "No summary data available.")));
        }
        const totals = {
            bAd: list.reduce((s, d) => s + (d.Breakfast_Ad || 0), 0),
            bCh: list.reduce((s, d) => s + (d.Breakfast_Ch || 0), 0),
            lAd: list.reduce((s, d) => s + (d.Lunch_Ad || 0), 0),
            lCh: list.reduce((s, d) => s + (d.Lunch_Ch || 0), 0),
            dAd: list.reduce((s, d) => s + (d.Dinner_Ad || 0), 0),
            dCh: list.reduce((s, d) => s + (d.Dinner_Ch || 0), 0),
        };
        return (h(Host, null, h("div", { class: "d-flex flex-wrap gap-3 mb-4 justify-content-between" }, h("div", { class: "card shadow-sm border rounded p-3 text-center bg-white flex-grow-1", style: { minWidth: '200px' } }, h("div", { class: "extra-small fw-bold text-muted mb-2", style: { letterSpacing: '0.5px', fontSize: '10px', textTransform: 'none' } }, "Breakfast"), h("div", { class: "d-flex justify-content-center align-items-center gap-3" }, h("div", null, h("span", { class: "h4 fw-bold text-primary mb-0 d-block", style: { fontSize: '20px' } }, totals.bAd), h("div", { class: "extra-small text-muted", style: { fontSize: '10px' } }, "Adults")), h("div", { style: { width: '1px', backgroundColor: '#e2e8f0', height: '30px' } }), h("div", null, h("span", { class: "h4 fw-bold text-dark mb-0 d-block", style: { fontSize: '20px' } }, totals.bCh), h("div", { class: "extra-small text-muted", style: { fontSize: '10px' } }, "Children")))), h("div", { class: "card shadow-sm border rounded p-3 text-center bg-white flex-grow-1", style: { minWidth: '200px' } }, h("div", { class: "extra-small fw-bold text-muted mb-2", style: { letterSpacing: '0.5px', fontSize: '10px', textTransform: 'none' } }, "Lunch"), h("div", { class: "d-flex justify-content-center align-items-center gap-3" }, h("div", null, h("span", { class: "h4 fw-bold text-primary mb-0 d-block", style: { fontSize: '20px' } }, totals.lAd), h("div", { class: "extra-small text-muted", style: { fontSize: '10px' } }, "Adults")), h("div", { style: { width: '1px', backgroundColor: '#e2e8f0', height: '30px' } }), h("div", null, h("span", { class: "h4 fw-bold text-dark mb-0 d-block", style: { fontSize: '20px' } }, totals.lCh), h("div", { class: "extra-small text-muted", style: { fontSize: '10px' } }, "Children")))), h("div", { class: "card shadow-sm border rounded p-3 text-center bg-white flex-grow-1", style: { minWidth: '200px' } }, h("div", { class: "extra-small fw-bold text-muted mb-2", style: { letterSpacing: '0.5px', fontSize: '10px', textTransform: 'none' } }, "Dinner"), h("div", { class: "d-flex justify-content-center align-items-center gap-3" }, h("div", null, h("span", { class: "h4 fw-bold text-primary mb-0 d-block", style: { fontSize: '20px' } }, totals.dAd), h("div", { class: "extra-small text-muted", style: { fontSize: '10px' } }, "Adults")), h("div", { style: { width: '1px', backgroundColor: '#e2e8f0', height: '30px' } }), h("div", null, h("span", { class: "h4 fw-bold text-dark mb-0 d-block", style: { fontSize: '20px' } }, totals.dCh), h("div", { class: "extra-small text-muted", style: { fontSize: '10px' } }, "Children"))))), h("div", { class: "table-container p-0 m-0 table-responsive border rounded bg-white" }, h("table", { class: "table text-center align-middle mb-0", style: { tableLayout: 'fixed', width: '100%', minWidth: '650px' } }, h("colgroup", null, h("col", { style: { width: '16%' } }), h("col", { style: { width: '14%' } }), h("col", { style: { width: '14%' } }), h("col", { style: { width: '14%' } }), h("col", { style: { width: '14%' } }), h("col", { style: { width: '14%' } }), h("col", { style: { width: '14%' } })), h("thead", null, h("tr", { class: "table-header border-bottom-0" }, h("th", { rowSpan: 2, class: "align-middle border-bottom-0 ps-3 text-start bg-white", style: { textTransform: 'none', width: '16%' } }), h("th", { colSpan: 2, class: "bg-light border-start text-dark fw-bold", style: { textTransform: 'none', backgroundColor: '#f1f5f9' } }, "Breakfast"), h("th", { colSpan: 2, class: "bg-light border-start text-dark fw-bold", style: { textTransform: 'none', backgroundColor: '#f1f5f9' } }, "Lunch"), h("th", { colSpan: 2, class: "bg-light border-start text-dark fw-bold", style: { textTransform: 'none', backgroundColor: '#f1f5f9' } }, "Dinner")), h("tr", { class: "table-header extra-small border-top-0" }, h("th", { class: "border-start text-muted", style: { textTransform: 'none', backgroundColor: '#f8fafc' } }, "Ad"), h("th", { class: "text-muted", style: { textTransform: 'none', backgroundColor: '#f8fafc' } }, "Ch"), h("th", { class: "border-start text-muted", style: { textTransform: 'none', backgroundColor: '#f8fafc' } }, "Ad"), h("th", { class: "text-muted", style: { textTransform: 'none', backgroundColor: '#f8fafc' } }, "Ch"), h("th", { class: "border-start text-muted", style: { textTransform: 'none', backgroundColor: '#f8fafc' } }, "Ad"), h("th", { class: "text-muted", style: { textTransform: 'none', backgroundColor: '#f8fafc' } }, "Ch"))), h("tbody", null, list.map(day => (h("tr", { class: "ir-table-row" }, h("td", { class: "ps-3 text-start fw-medium text-dark", style: { fontSize: '11px' } }, moment(day.Date).format('ddd MMM DD, YYYY')), h("td", { class: "border-start fw-bold text-primary", style: { backgroundColor: '#fdfdfd', fontSize: '12px' } }, day.Breakfast_Ad), h("td", { class: "text-muted", style: { backgroundColor: '#fdfdfd', fontSize: '12px' } }, day.Breakfast_Ch), h("td", { class: "border-start fw-bold text-primary", style: { backgroundColor: '#fdfdfd', fontSize: '12px' } }, day.Lunch_Ad), h("td", { class: "text-muted", style: { backgroundColor: '#fdfdfd', fontSize: '12px' } }, day.Lunch_Ch), h("td", { class: "border-start fw-bold text-primary", style: { backgroundColor: '#fdfdfd', fontSize: '12px' } }, day.Dinner_Ad), h("td", { class: "text-muted", style: { backgroundColor: '#fdfdfd', fontSize: '12px' } }, day.Dinner_Ch)))))))));
    }
    static get is() { return "ir-meal-count-summary"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-meal-count-summary.css", "../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-meal-count-summary.css", "../../common/table.css"]
        };
    }
    static get properties() {
        return {
            "mealCountSummary": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "MealCountDaySummary[]",
                    "resolved": "MealCountDaySummary[]",
                    "references": {
                        "MealCountDaySummary": {
                            "location": "import",
                            "path": "@/services/meal-report/types",
                            "id": "src/services/meal-report/types.ts::MealCountDaySummary"
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
//# sourceMappingURL=ir-meal-count-summary.js.map
