import { r as registerInstance, h } from './index-7e96440e.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store-9444f9b2.js';
import { i as isRequestPending } from './ir-interceptor.store-1376ed6c.js';
import './utils-d0dadf41.js';
import './moment-ab846cee.js';
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
        return (h("div", { key: 'b092f491c8958b54a36a6723165704384bd51406', class: "arrivals-filters__container" }, h("ir-custom-date-picker", { key: '5be191414b09b544821ecd0415ef87977d6729b4', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '53b0d5df625623153843fa1281582bc4a0ac43db', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: 'b79ae7c0c64bab5c297fd14ac804805be27e0028', slot: "end" })), h("ir-input", { key: 'ff4b5c75856a9b25b51377623c3f6cd59eb1a9b7', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '463250466281b12c565152f77a5f533962e5ebfe', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = IrArrivalsFiltersStyle0;

export { IrArrivalsFilters as ir_arrivals_filters };

//# sourceMappingURL=ir-arrivals-filters.entry.js.map