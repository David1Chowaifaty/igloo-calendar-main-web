import { departuresStore, setDeparturesSearchTerm } from "../../../stores/departures.store";
import { h } from "@stencil/core";
export class IrDeparturesFilter {
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: 'd6aa73d60a8a0029832463e5dd7acaf212ade963', class: "departures-filters__container" }, h("ir-custom-date-picker", { key: '08217f119d81998a860aa185c0ae6fdda76dcde1', class: "departures-filters__date-picker" }, h("wa-icon", { key: '609b7d2c9b559044301b54b4838071b6507087e8', name: "calendar", slot: "start" }), h("wa-spinner", { key: '7e2d59d62f0ee57f1a7b54e09fbe348b8b2b6fb5', slot: "end" })), h("ir-custom-input", { key: 'ee9bd8d7d267e063fe41303fd0d76f7deda7842f', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '00e4b8b9f23033fb22f82f0ddfe90fc31cb33941', name: "magnifying-glass", slot: "start" }))));
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
