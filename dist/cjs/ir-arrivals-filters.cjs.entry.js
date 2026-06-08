'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const arrivals_store = require('./arrivals.store-9d646dfa.js');
const irInterceptor_store = require('./ir-interceptor.store-d60f5a34.js');
require('./utils-32be062a.js');
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
        return (index.h("div", { key: '843e44dbc3402b0596c4226bc7e3ef6e177beeb7', class: "arrivals-filters__container" }, index.h("ir-date-select", { key: '0bb67def7b1dab8f1bc19c46413cf2c82225b5bc', onDateChanged: e => arrivals_store.setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivals_store.arrivalsStore.today, class: "arrivals-filters__date-picker" }, index.h("wa-icon", { key: '0a82029e9d8e46835b2b1c15f820ac6af7d6b0d9', name: "calendar", slot: "start" }), irInterceptor_store.isRequestPending('/Get_Rooms_To_Check_in') && index.h("wa-spinner", { key: 'd7475c214293bff7e745c0d1d4b3af08b5189233', slot: "end" })), index.h("ir-input", { key: '383381c12524649401f4bf332437f962f813cb92', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivals_store.arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '67fb20a213ee046aaf526a1e47fb8cde243ced4b', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = IrArrivalsFiltersStyle0;

exports.ir_arrivals_filters = IrArrivalsFilters;

//# sourceMappingURL=ir-arrivals-filters.cjs.entry.js.map