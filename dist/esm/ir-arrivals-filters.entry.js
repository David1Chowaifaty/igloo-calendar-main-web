import { r as registerInstance, h } from './index-b3dce66a.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store-2ab3c824.js';
import { i as isRequestPending } from './ir-interceptor.store-ebb6c559.js';
import './booking-7c3fba5f.js';
import './moment-ab846cee.js';
import './index-1e1f097b.js';
import './axios-aa1335b8.js';
import './locales.store-f4150353.js';
import './index-a124d225.js';
import './calendar-data-8a36a1b2.js';

const irArrivalsFiltersCss = ".sc-ir-arrivals-filters-h{display:block}.arrivals-filters__container.sc-ir-arrivals-filters{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.arrivals-filters__container.sc-ir-arrivals-filters{flex-direction:row;align-items:center}.arrivals-filters__container.sc-ir-arrivals-filters>*.sc-ir-arrivals-filters{flex:1 1 0%}.arrivals-filters__date-picker.sc-ir-arrivals-filters{max-width:200px}.arrivals-filters__search-bar.sc-ir-arrivals-filters{max-width:400px}}";
const IrArrivalsFiltersStyle0 = irArrivalsFiltersCss;

const IrArrivalsFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: 'c87c4d563c59ab9f59c2d763fd3f750adc14c83e', class: "arrivals-filters__container" }, h("ir-custom-date-picker", { key: 'f3fecf140835a3d61e3841423b49ef5279181904', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '89bfa53a24fc813eadd2a26112ca44b30029fba6', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: '667f018ff984a1b3b36285da45cfc6d9a83dc93a', slot: "end" })), h("ir-input", { key: 'a864eddb6058ccbe627823ac49de2545a85f3a09', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'cd679df71ee7c2db95fa8506ecc0826b46d9f4a6', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = IrArrivalsFiltersStyle0;

export { IrArrivalsFilters as ir_arrivals_filters };

//# sourceMappingURL=ir-arrivals-filters.entry.js.map