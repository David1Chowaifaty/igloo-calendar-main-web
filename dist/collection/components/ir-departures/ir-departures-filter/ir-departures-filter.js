import { departuresStore, setDeparturesSearchTerm } from "../../../stores/departures.store";
import { h } from "@stencil/core";
export class IrDeparturesFilter {
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '6b104cc60951d93fd6552d0e8403780f276722bd', class: "departures-filters__container" }, h("ir-custom-date-picker", { key: 'a69624c076aa85bc6180493a86870d08f22821a1', class: "departures-filters__date-picker" }, h("wa-icon", { key: '216271031ef9c5643ce80eb4a490e7a77e93ab6e', name: "calendar", slot: "start" }), h("wa-spinner", { key: '42d778d8cb68a52f54a221410c5b666b669e287d', slot: "end" })), h("ir-custom-input", { key: 'bbbaa474810da46b072f70ddb87400b2e0834481', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '0334b228fe92020e22d78868c03d1820ba3055dd', name: "magnifying-glass", slot: "start" }))));
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
