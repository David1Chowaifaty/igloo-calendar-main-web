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
        return (h("div", { key: '1171e7d4ec7a92d0328fb1e0b2b417cf5a72e4ba', class: "arrivals-filters__container" }, h("ir-custom-date-picker", { key: 'a41f31f0a2f70a91283df39e12a69acfcc6ad913', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '96ad1410f24221fac9de2b72c51713142de34598', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: '0c100a6c10ff4947f344da899ace9c408774543f', slot: "end" })), h("ir-input", { key: 'a63636967d431dce582628e7a71c69e3c1e526b5', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '33d038f934d32a691055948b8e737cfefe246a18', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = IrArrivalsFiltersStyle0;

export { IrArrivalsFilters as ir_arrivals_filters };

//# sourceMappingURL=ir-arrivals-filters.entry.js.map