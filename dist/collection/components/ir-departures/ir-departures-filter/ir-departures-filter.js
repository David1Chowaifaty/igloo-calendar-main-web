import { departuresStore, setDeparturesSearchTerm } from "../../../stores/departures.store";
import { h } from "@stencil/core";
export class IrDeparturesFilter {
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: 'e4d14ec80ba531876d2f68496381146bdaddfe73', class: "departures-filters__container" }, h("ir-custom-date-picker", { key: '594c8bb69c43c740615b6b4191e4b9651b369361', class: "departures-filters__date-picker" }, h("wa-icon", { key: '4ae766913dd33a84f36fa94ee0d72bbe305f9eb4', name: "calendar", slot: "start" }), h("wa-spinner", { key: 'c643df9d1d4a48b63fbefb121a753ca5fbdd93cf', slot: "end" })), h("ir-custom-input", { key: '60e888b175f8891ac44d5c2c6ddf84380a5f3668', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '5276c7015b8db8046fdacb2c819c2a20c03f70ef', name: "magnifying-glass", slot: "start" }))));
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
