import { departuresStore, setDeparturesReferenceDate, setDeparturesSearchTerm } from "../../../stores/departures.store";
import { h } from "@stencil/core";
export class IrDeparturesFilter {
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '4c041279897eefdb59b741cab16397d48285ba72', class: "departures-filters__container" }, h("ir-date-select", { key: 'f0737fe36551c3bcb7b044606ff7d4b501201eb9', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: 'a411f5fc18783b70090cba58f438d90e0047f0b4', name: "calendar", slot: "start" })), h("ir-input", { key: '5cbd4f3d432670fe5b79045781d38b05e275ce44', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '27de63c676870d3f52dff89322fe2fed19b9c806', name: "magnifying-glass", slot: "start" }))));
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
