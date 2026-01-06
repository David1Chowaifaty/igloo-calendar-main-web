'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const arrivals_store = require('./arrivals.store-5e55ab97.js');
const irInterceptor_store = require('./ir-interceptor.store-d60f5a34.js');
require('./utils-54f6f6b7.js');
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
        return (index.h("div", { key: 'd68d04803e991d1c7c4c0d1ae1a58303bef11980', class: "arrivals-filters__container" }, index.h("ir-custom-date-picker", { key: '0a6e3320c5d25538d157ddb312ddfd84aa345536', onDateChanged: e => arrivals_store.setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivals_store.arrivalsStore.today, class: "arrivals-filters__date-picker" }, index.h("wa-icon", { key: 'fa40a55b819afb8e57c7aae0dfcfce9665b38b81', name: "calendar", slot: "start" }), irInterceptor_store.isRequestPending('/Get_Rooms_To_Check_in') && index.h("wa-spinner", { key: '928cf8c76b90d36c64f816574c52fd50be7ee0c1', slot: "end" })), index.h("ir-input", { key: 'f2ce9864551a15fb84e6ffb3bc619b36078a1bae', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivals_store.arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: 'd020e3c9544b95dec93aaa3ddfb3c4c2a154cce0', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = IrArrivalsFiltersStyle0;

exports.ir_arrivals_filters = IrArrivalsFilters;

//# sourceMappingURL=ir-arrivals-filters.cjs.entry.js.map