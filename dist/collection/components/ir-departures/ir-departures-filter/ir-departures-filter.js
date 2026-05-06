import { departuresStore, setDeparturesReferenceDate, setDeparturesSearchTerm } from "../../../stores/departures.store";
import { h } from "@stencil/core";
export class IrDeparturesFilter {
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '389626b6cd3235cca7763bc535a56b352f272f12', class: "departures-filters__container" }, h("ir-custom-date-picker", { key: 'd0723d4d46f4f00c52093cfd4887f9ec87d5a7f0', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: '35ac18c4f014f54da8f19296afc769bc27bbc73c', name: "calendar", slot: "start" })), h("ir-input", { key: '7956cf5ed812e63396897a75e1f400551b07f129', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'efd7d9905719fb25146c33598591d281bdf2ab51', name: "magnifying-glass", slot: "start" }))));
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
