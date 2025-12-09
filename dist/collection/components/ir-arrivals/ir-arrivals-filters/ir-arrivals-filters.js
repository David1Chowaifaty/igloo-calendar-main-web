import { arrivalsStore, setArrivalsSearchTerm } from "../../../stores/arrivals.store";
import { h } from "@stencil/core";
export class IrArrivalsFilters {
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '0171c9ef7b65be7b832084bb6addbb6fdc747eaf', class: "arrivals-filters__container" }, h("ir-custom-date-picker", { key: '36e24a0e09f2cbf06a4c3387439b4f361ad4fe9e', class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '2bf96818cbbd5d6e65ab4c34603ad91a94c324f0', name: "calendar", slot: "start" })), h("ir-custom-input", { key: '2980e2b2a5676b6f97fa76b6c6d61987beea07fd', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '3cf891fde339c55ffa3b9538f63480e9b4ec19f7', name: "magnifying-glass", slot: "start" }))));
    }
    static get is() { return "ir-arrivals-filters"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-arrivals-filters.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-arrivals-filters.css"]
        };
    }
}
//# sourceMappingURL=ir-arrivals-filters.js.map
