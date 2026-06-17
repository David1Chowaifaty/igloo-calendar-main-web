import { r as registerInstance, h } from './index-DF2__fQU.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store-B9-OYPmQ.js';
import { i as isRequestPending } from './ir-interceptor.store-DTVpqbBV.js';
import './utils-Wjp6LFRm.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-I5D6ZJ1U.js';
import './index-C6os-U8X.js';
import './locales.store-BOppy8do.js';
import './type-D7rOPtKA.js';

const irArrivalsFiltersCss = () => `.sc-ir-arrivals-filters-h{display:block}.arrivals-filters__container.sc-ir-arrivals-filters{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.arrivals-filters__container.sc-ir-arrivals-filters{flex-direction:row;align-items:center}.arrivals-filters__container.sc-ir-arrivals-filters>*.sc-ir-arrivals-filters{flex:1 1 0%}.arrivals-filters__date-picker.sc-ir-arrivals-filters{max-width:200px}.arrivals-filters__search-bar.sc-ir-arrivals-filters{max-width:400px}}`;

const IrArrivalsFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '66a8892fc0a54c7f49f5c610c6c84dde16a8ca56', class: "arrivals-filters__container" }, h("ir-date-select", { key: '361eef34ca6cf289d840cf57db5c2628b7750dd4', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '02257e1bed58d86ffee98f159701d0ea5ee405d7', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: 'cf8be4f8257892770e61f8dbb5072998d313785e', slot: "end" })), h("ir-input", { key: '0f06a4916207388bd907791484c108c06a65b798', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '6a9d0cfaf6af8226b2b5648df10a6642accdf40b', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

export { IrArrivalsFilters as ir_arrivals_filters };
