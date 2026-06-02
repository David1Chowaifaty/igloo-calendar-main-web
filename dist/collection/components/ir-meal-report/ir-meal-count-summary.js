import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrMealCountSummary {
    mealCountSummary = [];
    render() {
        const list = this.mealCountSummary;
        if (!list || list.length === 0) {
            return (h("div", { class: "ir-meal-count-summary__empty-state" }, h("p", { class: "mb-0 small" }, "No summary data available.")));
        }
        const totals = {
            bAd: list.reduce((s, d) => s + (d.Breakfast_Ad || 0), 0),
            bCh: list.reduce((s, d) => s + (d.Breakfast_Ch || 0), 0),
            lAd: list.reduce((s, d) => s + (d.Lunch_Ad || 0), 0),
            lCh: list.reduce((s, d) => s + (d.Lunch_Ch || 0), 0),
            dAd: list.reduce((s, d) => s + (d.Dinner_Ad || 0), 0),
            dCh: list.reduce((s, d) => s + (d.Dinner_Ch || 0), 0),
        };
        return (h(Host, null, h("div", { class: "ir-meal-count-summary__stats-grid" }, h("div", { class: "ir-meal-count-summary__stat-card" }, h("div", { class: "ir-meal-count-summary__stat-title" }, "Breakfast"), h("div", { class: "ir-meal-count-summary__stat-content" }, h("div", null, h("span", { class: "ir-meal-count-summary__stat-value ir-meal-count-summary__stat-value--primary" }, totals.bAd), h("div", { class: "ir-meal-count-summary__stat-label" }, "Adults")), h("div", { class: "ir-meal-count-summary__stat-divider" }), h("div", null, h("span", { class: "ir-meal-count-summary__stat-value ir-meal-count-summary__stat-value--dark" }, totals.bCh), h("div", { class: "ir-meal-count-summary__stat-label" }, "Children")))), h("div", { class: "ir-meal-count-summary__stat-card" }, h("div", { class: "ir-meal-count-summary__stat-title" }, "Lunch"), h("div", { class: "ir-meal-count-summary__stat-content" }, h("div", null, h("span", { class: "ir-meal-count-summary__stat-value ir-meal-count-summary__stat-value--primary" }, totals.lAd), h("div", { class: "ir-meal-count-summary__stat-label" }, "Adults")), h("div", { class: "ir-meal-count-summary__stat-divider" }), h("div", null, h("span", { class: "ir-meal-count-summary__stat-value ir-meal-count-summary__stat-value--dark" }, totals.lCh), h("div", { class: "ir-meal-count-summary__stat-label" }, "Children")))), h("div", { class: "ir-meal-count-summary__stat-card" }, h("div", { class: "ir-meal-count-summary__stat-title" }, "Dinner"), h("div", { class: "ir-meal-count-summary__stat-content" }, h("div", null, h("span", { class: "ir-meal-count-summary__stat-value ir-meal-count-summary__stat-value--primary" }, totals.dAd), h("div", { class: "ir-meal-count-summary__stat-label" }, "Adults")), h("div", { class: "ir-meal-count-summary__stat-divider" }), h("div", null, h("span", { class: "ir-meal-count-summary__stat-value ir-meal-count-summary__stat-value--dark" }, totals.dCh), h("div", { class: "ir-meal-count-summary__stat-label" }, "Children"))))), h("div", { class: "ir-meal-count-summary__container table--container" }, h("table", { class: "table text-center align-middle mb-0", style: { tableLayout: 'fixed', width: '100%', minWidth: '650px' } }, h("colgroup", null, h("col", { style: { width: '16%' } }), h("col", { style: { width: '14%' } }), h("col", { style: { width: '14%' } }), h("col", { style: { width: '14%' } }), h("col", { style: { width: '14%' } }), h("col", { style: { width: '14%' } }), h("col", { style: { width: '14%' } })), h("thead", null, h("tr", { class: "table-header border-bottom-0" }, h("th", { rowSpan: 2, class: "align-middle border-bottom-0 ps-3 text-start bg-white", style: { textTransform: 'none', width: '16%' } }), h("th", { colSpan: 2, class: "ir-meal-count-summary__header-group border-start" }, "Breakfast"), h("th", { colSpan: 2, class: "ir-meal-count-summary__header-group border-start" }, "Lunch"), h("th", { colSpan: 2, class: "ir-meal-count-summary__header-group border-start" }, "Dinner")), h("tr", { class: "table-header extra-small border-top-0" }, h("th", { class: "ir-meal-count-summary__header-sub border-start" }, "Ad"), h("th", { class: "ir-meal-count-summary__header-sub" }, "Ch"), h("th", { class: "ir-meal-count-summary__header-sub border-start" }, "Ad"), h("th", { class: "ir-meal-count-summary__header-sub" }, "Ch"), h("th", { class: "ir-meal-count-summary__header-sub border-start" }, "Ad"), h("th", { class: "ir-meal-count-summary__header-sub" }, "Ch"))), h("tbody", null, list.map(day => (h("tr", { class: "ir-table-row" }, h("td", { class: "ps-3 text-start ir-meal-count-summary__cell-date" }, moment(day.Date).format('ddd MMM DD, YYYY')), h("td", { class: "ir-meal-count-summary__cell-data border-start ir-meal-count-summary__cell--primary" }, day.Breakfast_Ad), h("td", { class: "ir-meal-count-summary__cell-data text-muted" }, day.Breakfast_Ch), h("td", { class: "ir-meal-count-summary__cell-data border-start ir-meal-count-summary__cell--primary" }, day.Lunch_Ad), h("td", { class: "ir-meal-count-summary__cell-data text-muted" }, day.Lunch_Ch), h("td", { class: "ir-meal-count-summary__cell-data border-start ir-meal-count-summary__cell--primary" }, day.Dinner_Ad), h("td", { class: "ir-meal-count-summary__cell-data text-muted" }, day.Dinner_Ch)))))))));
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
