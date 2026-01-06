import { arrivalsStore, setArrivalsReferenceDate, setArrivalsSearchTerm } from "../../../stores/arrivals.store";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { h } from "@stencil/core";
export class IrArrivalsFilters {
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: 'd68d04803e991d1c7c4c0d1ae1a58303bef11980', class: "arrivals-filters__container" }, h("ir-custom-date-picker", { key: '0a6e3320c5d25538d157ddb312ddfd84aa345536', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: 'fa40a55b819afb8e57c7aae0dfcfce9665b38b81', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: '928cf8c76b90d36c64f816574c52fd50be7ee0c1', slot: "end" })), h("ir-input", { key: 'f2ce9864551a15fb84e6ffb3bc619b36078a1bae', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'd020e3c9544b95dec93aaa3ddfb3c4c2a154cce0', name: "magnifying-glass", slot: "start" }))));
    }
    static get is() { return "ir-arrivals-filters"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-arrivals-filters.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-arrivals-filters.css"]
        };
    }
}
//# sourceMappingURL=ir-arrivals-filters.js.map
