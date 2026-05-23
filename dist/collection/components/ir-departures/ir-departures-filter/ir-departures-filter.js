import { departuresStore, setDeparturesReferenceDate, setDeparturesSearchTerm } from "../../../stores/departures.store";
import { h } from "@stencil/core";
export class IrDeparturesFilter {
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '045c3c77ec714be3c19764c4d2977b04b801bb5b', class: "departures-filters__container" }, h("ir-custom-date-picker", { key: 'bb9f9c2a93e5edae3d35e6ef1bdcb3c4e3f8de4f', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: 'c3f6ecf85937cb0616f1479c6ed6d169624fdf38', name: "calendar", slot: "start" })), h("ir-input", { key: '672939ecde9471c3d896aae966543bbf7ef084a6', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'f8c8ad7d9e53a7c66d6849456afb1e36642fba2b', name: "magnifying-glass", slot: "start" }))));
    }
    static get is() { return "ir-departures-filter"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-departures-filter.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-departures-filter.css"]
        };
    }
}
//# sourceMappingURL=ir-departures-filter.js.map
