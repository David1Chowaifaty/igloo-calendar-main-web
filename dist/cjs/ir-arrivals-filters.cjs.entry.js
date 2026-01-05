'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const arrivals_store = require('./arrivals.store-4da90a3f.js');
const irInterceptor_store = require('./ir-interceptor.store-d60f5a34.js');
require('./utils-02a0d542.js');
require('./moment-1780b03a.js');
require('./index-8bb117a0.js');
require('./calendar-data-0598de26.js');
require('./index-fbf1fe1d.js');
require('./locales.store-32782582.js');

const irArrivalsFiltersCss = ".sc-ir-arrivals-filters-h{display:block}.arrivals-filters__container.sc-ir-arrivals-filters{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.arrivals-filters__container.sc-ir-arrivals-filters{flex-direction:row;align-items:center}.arrivals-filters__container.sc-ir-arrivals-filters>*.sc-ir-arrivals-filters{flex:1 1 0%}.arrivals-filters__date-picker.sc-ir-arrivals-filters{max-width:200px}.arrivals-filters__search-bar.sc-ir-arrivals-filters{max-width:400px}}";
const IrArrivalsFiltersStyle0 = irArrivalsFiltersCss;

const IrArrivalsFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        arrivals_store.setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (index.h("div", { key: '86c31eb5a39b6fee9bcdc547640bc07a2a4af6d3', class: "arrivals-filters__container" }, index.h("ir-custom-date-picker", { key: 'c2e4edda859fc5090c469c06c98e665c33a20745', onDateChanged: e => arrivals_store.setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivals_store.arrivalsStore.today, class: "arrivals-filters__date-picker" }, index.h("wa-icon", { key: '76fe734234685ffd2780651f3d8e7c6733df21d9', name: "calendar", slot: "start" }), irInterceptor_store.isRequestPending('/Get_Rooms_To_Check_in') && index.h("wa-spinner", { key: '0158874195e92c8c33fe982f0f15cc6c24e0f8c0', slot: "end" })), index.h("ir-input", { key: '311e86b346b05b3d14929391c1cc5ea821cd93fc', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivals_store.arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '1aa46751a90ea0c9384c907b1e5b14631889ab38', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = IrArrivalsFiltersStyle0;

exports.ir_arrivals_filters = IrArrivalsFilters;

//# sourceMappingURL=ir-arrivals-filters.cjs.entry.js.map