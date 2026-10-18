import { arrivalsStore, setArrivalsReferenceDate, setArrivalsSearchTerm } from "../../../stores/arrivals.store";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { h } from "@stencil/core";
import { t } from "../../../services/locale/t";
export class IrArrivalsFilters {
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '95b70e55c232a11cf1f194809ab1d587ba8db0e9', class: "arrivals-filters__container" }, h("ir-date-select", { key: '1eabcefb87918b06f62621fcb60d1006c186494f', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '586c0039cba702093a5f26cd5785624a4bba945d', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: 'bdd4764acadfbcd92cd81faaaedfe26b39a47454', slot: "end" })), h("ir-input", { key: 'f888d3fad5793e4a04f1e0290350716ba63f9dac', withClear: true, class: "arrivals-filters__search-bar", placeholder: t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'c2ed16bc4c4341b2c0bb430ee5315b73803585f3', name: "magnifying-glass", slot: "start" }))));
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
