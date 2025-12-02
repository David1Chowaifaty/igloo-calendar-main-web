import { departuresStore, setDeparturesSearchTerm } from "../../../stores/departures.store";
import { h } from "@stencil/core";
export class IrDeparturesFilter {
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: 'fd7c9a2da5fb11ac6fcf8c2f38f6fc81713b02f4', class: "departures-filters__container" }, h("ir-custom-date-picker", { key: '1820989a4a4541017205f4a5493733617ea45708', class: "departures-filters__date-picker" }, h("wa-icon", { key: 'a5044ab2d71deb0dc6da06290e02e6f61a315104', name: "calendar", slot: "start" }), h("wa-spinner", { key: '76cb9406e8797250ce7d577cb69bc7ab4fc9fc39', slot: "end" })), h("ir-custom-input", { key: '06691b0cadbc62f2a598376dd17c432e5ab5afa5', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'dcb83127c4e49758cb9b5be4ea24d4097e3e8ecf', name: "magnifying-glass", slot: "start" }))));
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
