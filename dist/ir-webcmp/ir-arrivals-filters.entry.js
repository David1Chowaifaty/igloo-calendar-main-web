import { r as registerInstance, h } from './index-7b3961ed.js';
import { s as setArrivalsSearchTerm, a as setArrivalsReferenceDate, b as arrivalsStore } from './arrivals.store-9e83b5a3.js';
import { i as isRequestPending } from './ir-interceptor.store-3b04ad32.js';
import './utils-7eaed9ad.js';
import './moment-ab846cee.js';
import './index-40c31d5b.js';
import './calendar-data-cdc01d0d.js';
import './index-17663a35.js';
import './locales.store-daef23cc.js';

const irArrivalsFiltersCss = ".sc-ir-arrivals-filters-h{display:block}.arrivals-filters__container.sc-ir-arrivals-filters{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.arrivals-filters__container.sc-ir-arrivals-filters{flex-direction:row;align-items:center}.arrivals-filters__container.sc-ir-arrivals-filters>*.sc-ir-arrivals-filters{flex:1 1 0%}.arrivals-filters__date-picker.sc-ir-arrivals-filters{max-width:200px}.arrivals-filters__search-bar.sc-ir-arrivals-filters{max-width:400px}}";

const IrArrivalsFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '5807fe5657a02e7bd4d6cfe98e3eb4e7ccf853f8', class: "arrivals-filters__container" }, h("ir-custom-date-picker", { key: '7c9e9efe689d75c79d6d892c5291ea038b0601d7', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: 'd9ab635200274b45c4851b215cbdd04ef10afb40', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: '3458196d9118d81c59f1f322d081ef55cb3b471d', slot: "end" })), h("ir-input", { key: 'e0b4be64822160a5a31965f0e5c1fec87529d7ba', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '5c34b308bc20a4c5cc12ee314557b90d61b0405e', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss;

export { IrArrivalsFilters as ir_arrivals_filters };

//# sourceMappingURL=ir-arrivals-filters.entry.js.map