import { arrivalsStore, setArrivalsReferenceDate, setArrivalsSearchTerm } from "../../../stores/arrivals.store";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { h } from "@stencil/core";
export class IrArrivalsFilters {
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: 'b57daad0f534552b83ed76bc01c2bc8faf3b08c8', class: "arrivals-filters__container" }, h("ir-custom-date-picker", { key: '7c695b41186335ae5af364898672ebd1a910c03e', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '5fa810c301259b599d827818203fabf3b741410a', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: '63b34027eb5211aabd7851d38904ed79a13a8488', slot: "end" })), h("ir-input", { key: 'a185aa197394b6278b814333839c15845c4a8889', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '0794e644ab0173f266fd6167a5c1c93f572e6421', name: "magnifying-glass", slot: "start" }))));
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
