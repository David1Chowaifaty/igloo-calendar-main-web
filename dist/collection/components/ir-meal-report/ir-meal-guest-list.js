import { Host, h } from "@stencil/core";
export class IrMealGuestList {
    guestList = [];
    render() {
        const list = this.guestList;
        if (!list || list.length === 0) {
            return (h("div", { class: "ir-meal-guest-list__empty-state" }, h("p", { class: "mb-0 small" }, "No guests found for current filters.")));
        }
        const totalAdults = list.reduce((sum, item) => sum + item.occupancy.adult_nbr, 0);
        const totalChildren = list.reduce((sum, item) => sum + item.occupancy.children_nbr, 0);
        return (h(Host, null, h("div", { class: "ir-meal-guest-list__container table--container" }, h("table", { class: "table align-middle mb-0 ir-meal-guest-list__table" }, h("thead", null, h("tr", { class: "table-header" }, h("th", { class: "ps-4 text-start ir-meal-guest-list__header-cell" }, "Unit"), h("th", { class: "px-4 text-start ir-meal-guest-list__header-cell" }, "Guest name"), h("th", { class: "px-4 text-center ir-meal-guest-list__header-cell" }, "Ad - Ch"), h("th", { class: "px-4 text-start ir-meal-guest-list__header-cell" }, "Source"), h("th", { class: "pe-4 text-start ir-meal-guest-list__header-cell" }, "Rate plan"))), h("tbody", null, list.map(entry => (h("tr", { class: "ir-table-row border-bottom" }, h("td", { class: "ps-4 text-start py-2 ir-meal-guest-list__cell" }, h("span", { class: "text-dark fw-bold" }, entry.unit.name)), h("td", { class: "px-4 text-start py-2 ir-meal-guest-list__cell" }, h("div", { class: "ir-meal-guest-list__guest-info" }, h("span", { class: "text-dark" }, entry.guest.first_name, " ", entry.guest.last_name), entry.is_arriving_today && h("wa-tag", { size: "small", variant: "brand", pill: true, class: "ir-meal-guest-list__arr-tag" }, "ARR"))), h("td", { class: "px-4 text-center py-2 ir-meal-guest-list__cell", style: { color: 'var(--wa-color-text-quiet)' } }, entry.occupancy.adult_nbr, " - ", entry.occupancy.children_nbr), h("td", { class: "px-4 text-muted text-start py-2 ir-meal-guest-list__cell" }, h("span", null, entry.source?.Label)), h("td", { class: "pe-4 text-muted text-start py-2 ir-meal-guest-list__cell" }, entry.rate_plan.short_name))))), h("tfoot", null, h("tr", { class: "ir-meal-guest-list__total-row" }, h("td", { class: "ps-3" }), h("td", { class: "ir-meal-guest-list__total-label py-2" }, "Total"), h("td", { class: "ir-meal-guest-list__total-value py-2" }, totalAdults, " - ", totalChildren), h("td", { colSpan: 2, class: "ir-meal-guest-list__total-meta py-2" }, list.length, " Units | ", totalAdults + totalChildren, " Guests")))))));
    }
    static get is() { return "ir-meal-guest-list"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-meal-guest-list.css", "../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-meal-guest-list.css", "../../common/table.css"]
        };
    }
    static get properties() {
        return {
            "guestList": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "MealGuestEntry[]",
                    "resolved": "MealGuestEntry[]",
                    "references": {
                        "MealGuestEntry": {
                            "location": "import",
                            "path": "@/services/meal-report/types",
                            "id": "src/services/meal-report/types.ts::MealGuestEntry"
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
//# sourceMappingURL=ir-meal-guest-list.js.map
