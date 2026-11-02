import { arrivalsStore, setArrivalsReferenceDate, setArrivalsSearchTerm } from "../../../stores/arrivals.store";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { h } from "@stencil/core";
import { t } from "../../../services/locale/t";
export class IrArrivalsFilters {
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: 'f2b75d918cc7f2f82c33eb66b514db969693d63c', class: "arrivals-filters__container" }, h("ir-date-select", { key: '26f05eb2e333c4230f4bee6d648fbdb3ab6aa9f5', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '4c4eb939667c56cbfd631ae64b9622b2f79144b6', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: 'a5436d8838988e9c9f3019bde896a67edf7f9d29', slot: "end" })), h("ir-input", { key: 'b91b7725ce29059d5b3802bf9b5816d4a16d4622', withClear: true, class: "arrivals-filters__search-bar", placeholder: t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'ef524fa033fd8241b31b849727742c09575c92f4', name: "magnifying-glass", slot: "start" }))));
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
