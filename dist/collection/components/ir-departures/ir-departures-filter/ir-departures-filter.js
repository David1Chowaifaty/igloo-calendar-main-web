import { departuresStore, setDeparturesSearchTerm } from "../../../stores/departures.store";
import { h } from "@stencil/core";
export class IrDeparturesFilter {
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: 'ea704491bfa0641f6bf74719716b5021e2109b0c', class: "departures-filters__container" }, h("ir-custom-date-picker", { key: '1f4f95012c91b4d3f01399673389a1d2c9ec8535', class: "departures-filters__date-picker" }, h("wa-icon", { key: 'ef497c42ec0966f5ac7ee27892b868c733413eba', name: "calendar", slot: "start" }), h("wa-spinner", { key: '50122f64d460041be6239545a5c3e85a7125c190', slot: "end" })), h("ir-custom-input", { key: 'e781be2053943ac1ae5014c45888c6a75832683e', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'b53ade395f86355b7eef887eea8e3f04951273aa', name: "magnifying-glass", slot: "start" }))));
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
