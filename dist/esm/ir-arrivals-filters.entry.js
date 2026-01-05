import { r as registerInstance, h } from './index-7e96440e.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store-dea20350.js';
import { i as isRequestPending } from './ir-interceptor.store-1376ed6c.js';
import './utils-c81962e8.js';
import './moment-ab846cee.js';
import './index-1e1f097b.js';
import './calendar-data-2ae53dc9.js';
import './index-f100e9d2.js';
import './locales.store-cb784e95.js';

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
        return (h("div", { key: '86c31eb5a39b6fee9bcdc547640bc07a2a4af6d3', class: "arrivals-filters__container" }, h("ir-custom-date-picker", { key: 'c2e4edda859fc5090c469c06c98e665c33a20745', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '76fe734234685ffd2780651f3d8e7c6733df21d9', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: '0158874195e92c8c33fe982f0f15cc6c24e0f8c0', slot: "end" })), h("ir-input", { key: '311e86b346b05b3d14929391c1cc5ea821cd93fc', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '1aa46751a90ea0c9384c907b1e5b14631889ab38', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = IrArrivalsFiltersStyle0;

export { IrArrivalsFilters as ir_arrivals_filters };

//# sourceMappingURL=ir-arrivals-filters.entry.js.map