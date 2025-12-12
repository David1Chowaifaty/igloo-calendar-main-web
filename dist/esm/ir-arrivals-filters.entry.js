import { r as registerInstance, h } from './index-b3dce66a.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store-1b85ce40.js';
import { i as isRequestPending } from './ir-interceptor.store-ebb6c559.js';
import './utils-74b435e5.js';
import './moment-ab846cee.js';
import './index-1e1f097b.js';
import './calendar-data-8a36a1b2.js';
import './index-a124d225.js';
import './locales.store-f4150353.js';
import './axios-aa1335b8.js';

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
        return (h("div", { key: '7d4cee017a1b302c0f7f7ffa33ceb33d88a8dc82', class: "arrivals-filters__container" }, h("ir-custom-date-picker", { key: '79f438b5b4bc127bbc2de903d1e5e40f8fafd3c1', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '6ad6f98dc269c8dc5377e3925e99d1e8bdb125ff', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: '272416171e3764242e517035121993811e059172', slot: "end" })), h("ir-input", { key: 'f1a74bb155882ec2b5fe399f364eeb34d3d0aacd', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'b92f5696cbf04b47cae0c2551bb628db0d9500df', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = IrArrivalsFiltersStyle0;

export { IrArrivalsFilters as ir_arrivals_filters };

//# sourceMappingURL=ir-arrivals-filters.entry.js.map