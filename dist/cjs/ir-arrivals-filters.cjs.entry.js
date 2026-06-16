'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const arrivals_store = require('./arrivals.store-0bed2e62.js');
const irInterceptor_store = require('./ir-interceptor.store-d60f5a34.js');
require('./utils-410526d1.js');
require('./moment-1780b03a.js');
require('./index-8bb117a0.js');
require('./calendar-data-70bc3b4b.js');
require('./index-fbf1fe1d.js');
require('./locales.store-32782582.js');
require('./type-53035218.js');

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
        return (index.h("div", { key: '4ff7dd7e7c60bdc61e0f91bbb08d15b96943a5b6', class: "arrivals-filters__container" }, index.h("ir-date-select", { key: 'a3a51d1562e12b8f156069b31d86b5476482809d', onDateChanged: e => arrivals_store.setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivals_store.arrivalsStore.today, class: "arrivals-filters__date-picker" }, index.h("wa-icon", { key: 'd733129de146d81f873685e2187e35ea9aabb191', name: "calendar", slot: "start" }), irInterceptor_store.isRequestPending('/Get_Rooms_To_Check_in') && index.h("wa-spinner", { key: '650ced1cf53fe9beae90286e55486d2723200ff3', slot: "end" })), index.h("ir-input", { key: 'e68a14dd33af1042a616ba6f0f141f9da70cf81c', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivals_store.arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: 'c4cf9c6c21a0b3398e895ab0365a106a11341b6c', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = IrArrivalsFiltersStyle0;

exports.ir_arrivals_filters = IrArrivalsFilters;

//# sourceMappingURL=ir-arrivals-filters.cjs.entry.js.map