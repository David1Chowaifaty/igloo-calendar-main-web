import { arrivalsStore, setArrivalsReferenceDate, setArrivalsSearchTerm } from "../../../stores/arrivals.store";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { h } from "@stencil/core";
import { t } from "../../../services/locale/t";
export class IrArrivalsFilters {
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: 'd14ae1e1da338d5275ea0b14b63602915583c3d5', class: "arrivals-filters__container" }, h("ir-date-select", { key: 'bb5e89cc12f124b9c032e2724bd407678ae34d2d', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '5e020e7295e47bcb029bc9fbaa1245b08c0e8500', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: 'c7f4fb555925d69ea6637ac4f96fe2601dd2b7bf', slot: "end" })), h("ir-input", { key: 'e50ad071456e8cbc9879c7183b2c2967d90f4076', withClear: true, class: "arrivals-filters__search-bar", placeholder: t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'fad65ec38e1ac9fe176b97847c0e730f4f133ce7', name: "magnifying-glass", slot: "start" }))));
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
