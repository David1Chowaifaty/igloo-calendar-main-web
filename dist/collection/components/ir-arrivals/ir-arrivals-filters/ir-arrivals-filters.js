import { arrivalsStore, setArrivalsSearchTerm } from "../../../stores/arrivals.store";
import { h } from "@stencil/core";
export class IrArrivalsFilters {
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '156ec040c4dfbd219125b8305c21cdea1a6dfc61', class: "arrivals-filters__container" }, h("ir-custom-date-picker", { key: 'a94dd9828de542983b60c8bcdd8b5263c603e121', class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '1859b68a56273797117c02df300550ec36a97894', name: "calendar", slot: "start" })), h("ir-custom-input", { key: '82973ac7cac9d456ab71f1a934dbf4b7129ec7c4', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'ebf0243007347ee289463c5f594f4bddeb9ceafd', name: "magnifying-glass", slot: "start" }))));
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
