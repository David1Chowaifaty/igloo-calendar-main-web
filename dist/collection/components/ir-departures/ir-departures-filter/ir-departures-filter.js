import { departuresStore, setDeparturesSearchTerm } from "../../../stores/departures.store";
import { h } from "@stencil/core";
export class IrDeparturesFilter {
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '00e786bafaa360c2bed8d165ad3b468a81b04f73', class: "departures-filters__container" }, h("ir-custom-date-picker", { key: '47672f3b431be2b2ee8f972eda751793af4d8fb2', class: "departures-filters__date-picker" }, h("wa-icon", { key: '615a88e9a48d145c187d462b108149f7fb6eb829', name: "calendar", slot: "start" }), h("wa-spinner", { key: 'd99d09c4f22b55709680c1308cb726efac2f9942', slot: "end" })), h("ir-custom-input", { key: '51d4dd14cef3dd6abc92afe23880a00091a66c1b', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '5b58954f5a00fb171b4bfaf4434367506ccff923', name: "magnifying-glass", slot: "start" }))));
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
