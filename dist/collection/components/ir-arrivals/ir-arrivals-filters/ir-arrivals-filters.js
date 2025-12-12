import { arrivalsStore, setArrivalsReferenceDate, setArrivalsSearchTerm } from "../../../stores/arrivals.store";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { h } from "@stencil/core";
export class IrArrivalsFilters {
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '7d4cee017a1b302c0f7f7ffa33ceb33d88a8dc82', class: "arrivals-filters__container" }, h("ir-custom-date-picker", { key: '79f438b5b4bc127bbc2de903d1e5e40f8fafd3c1', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '6ad6f98dc269c8dc5377e3925e99d1e8bdb125ff', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: '272416171e3764242e517035121993811e059172', slot: "end" })), h("ir-input", { key: 'f1a74bb155882ec2b5fe399f364eeb34d3d0aacd', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'b92f5696cbf04b47cae0c2551bb628db0d9500df', name: "magnifying-glass", slot: "start" }))));
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
