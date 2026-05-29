import { Host, h } from "@stencil/core";
export class IrMealGuestList {
    guestList = [];
    render() {
        const list = this.guestList;
        if (!list || list.length === 0) {
            return (h("div", { class: "text-center p-4 text-muted border-0 bg-white" }, h("p", { class: "mb-0 small" }, "No guests found for current filters.")));
        }
        const totalAdults = list.reduce((sum, item) => sum + item.occupancy.adult_nbr, 0);
        const totalChildren = list.reduce((sum, item) => sum + item.occupancy.children_nbr, 0);
        return (h(Host, null, h("div", { class: "table-container p-0 m-0 table-responsive border rounded bg-white shadow-sm d-inline-block", style: { maxWidth: '100%' } }, h("table", { class: "table align-middle mb-0", style: { width: 'auto' } }, h("thead", null, h("tr", { class: "table-header" }, h("th", { class: "ps-4 text-start", style: { textTransform: 'none', fontSize: '11px', whiteSpace: 'nowrap' } }, "Unit"), h("th", { class: "px-4 text-start", style: { textTransform: 'none', fontSize: '11px', whiteSpace: 'nowrap' } }, "Guest name"), h("th", { class: "px-4 text-center", style: { textTransform: 'none', fontSize: '11px', whiteSpace: 'nowrap' } }, "Ad - Ch"), h("th", { class: "px-4 text-start", style: { textTransform: 'none', fontSize: '11px', whiteSpace: 'nowrap' } }, "Source"), h("th", { class: "pe-4 text-start", style: { textTransform: 'none', fontSize: '11px', whiteSpace: 'nowrap' } }, "Rate plan"))), h("tbody", null, list.map(entry => (h("tr", { class: "ir-table-row border-bottom" }, h("td", { class: "ps-4 text-start py-2", style: { whiteSpace: 'nowrap' } }, h("span", { class: "text-dark fw-bold", style: { fontSize: '11px' } }, entry.unit.name)), h("td", { class: "px-4 text-start py-2", style: { whiteSpace: 'nowrap' } }, h("div", { class: "d-flex align-items-center" }, h("span", { class: "text-dark", style: { fontSize: '11px' } }, entry.guest.first_name, " ", entry.guest.last_name), entry.is_arriving_today && h("wa-tag", { size: "small", variant: "brand", pill: true, class: "ms-2", style: { fontSize: '8px', padding: '0 4px' } }, "ARR"))), h("td", { class: "px-4 text-center py-2", style: { fontSize: '11px', color: '#666', whiteSpace: 'nowrap' } }, entry.occupancy.adult_nbr, " - ", entry.occupancy.children_nbr), h("td", { class: "px-4 text-muted text-start py-2", style: { fontSize: '11px', whiteSpace: 'nowrap' } }, h("span", null, entry.source?.Label)), h("td", { class: "pe-4 text-muted text-start py-2", style: { fontSize: '11px', whiteSpace: 'nowrap' } }, entry.rate_plan.short_name))))), h("tfoot", null, h("tr", { class: "total-row bg-light" }, h("td", { class: "ps-3" }), h("td", { class: "text-end fw-bold py-2 text-uppercase", style: { fontSize: '10px', letterSpacing: '0.5px' } }, "Total"), h("td", { class: "text-center fw-bold text-primary py-2", style: { fontSize: '12px' } }, totalAdults, " - ", totalChildren), h("td", { colSpan: 2, class: "text-muted ps-3 py-2", style: { fontSize: '10px', whiteSpace: 'nowrap' } }, list.length, " Units | ", totalAdults + totalChildren, " Guests")))))));
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
