import { arrivalsStore, setArrivalsReferenceDate, setArrivalsSearchTerm } from "../../../stores/arrivals.store";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { h } from "@stencil/core";
export class IrArrivalsFilters {
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '3018aac76774bba1a7e37d294f3687e048cf08a9', class: "arrivals-filters__container" }, h("ir-custom-date-picker", { key: 'd0a0942140793998664c9fb4afd56c3f4370fb45', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '40c91f951afc52c21ac2c24e8d9ee862ba199663', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: '416c819596b1517973fbe375a12e033d5fb7d5c0', slot: "end" })), h("ir-input", { key: '2a6aa2aadbdd2dcf30389de8782af1e31bc06b6d', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'c159df3e0b5ec6656b381ae16ea03c10a7f7eb28', name: "magnifying-glass", slot: "start" }))));
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
