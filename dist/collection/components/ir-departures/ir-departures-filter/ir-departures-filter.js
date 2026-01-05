import { departuresStore, setDeparturesReferenceDate, setDeparturesSearchTerm } from "../../../stores/departures.store";
import { h } from "@stencil/core";
export class IrDeparturesFilter {
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '98a0d03b77da77240c874d72236e9f8a93ef7526', class: "departures-filters__container" }, h("ir-custom-date-picker", { key: '9b5ee98b8db952edbb7f0d9455ebc38bcbf8ac5a', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: '0a72f56a97195b5a3d02ccf3eba53d4e64bb2542', name: "calendar", slot: "start" })), h("ir-input", { key: 'c1f0670325ff18b8c17a65a03288e589f459af73', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '4d30ba9ef03f17544b6c0bca323691338ca6ea69', name: "magnifying-glass", slot: "start" }))));
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
