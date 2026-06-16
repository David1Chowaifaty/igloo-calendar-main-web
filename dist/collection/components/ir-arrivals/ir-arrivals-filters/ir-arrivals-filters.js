import { arrivalsStore, setArrivalsReferenceDate, setArrivalsSearchTerm } from "../../../stores/arrivals.store";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { h } from "@stencil/core";
export class IrArrivalsFilters {
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '4ff7dd7e7c60bdc61e0f91bbb08d15b96943a5b6', class: "arrivals-filters__container" }, h("ir-date-select", { key: 'a3a51d1562e12b8f156069b31d86b5476482809d', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: 'd733129de146d81f873685e2187e35ea9aabb191', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: '650ced1cf53fe9beae90286e55486d2723200ff3', slot: "end" })), h("ir-input", { key: 'e68a14dd33af1042a616ba6f0f141f9da70cf81c', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'c4cf9c6c21a0b3398e895ab0365a106a11341b6c', name: "magnifying-glass", slot: "start" }))));
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
