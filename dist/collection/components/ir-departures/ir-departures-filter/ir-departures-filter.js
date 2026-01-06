import { departuresStore, setDeparturesReferenceDate, setDeparturesSearchTerm } from "../../../stores/departures.store";
import { h } from "@stencil/core";
export class IrDeparturesFilter {
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: 'c9e65c4cf5e6a01544e64f88d32a9300c9c1c5ce', class: "departures-filters__container" }, h("ir-custom-date-picker", { key: '5e620834d0b896f3e3ec0b08e6ba657db25a2d8d', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: '0daf313a7adce341ecd82de5755b91edf342e861', name: "calendar", slot: "start" })), h("ir-input", { key: '8bba4a18a0399fda24c6a91ee1c23f1bb095c425', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '7f52a5ea2e362d5d90de1ce431dea5026dcdb79c', name: "magnifying-glass", slot: "start" }))));
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
