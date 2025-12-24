'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const arrivals_store = require('./arrivals.store-652073d7.js');
const irInterceptor_store = require('./ir-interceptor.store-c6d5162b.js');
require('./booking-e68bffd8.js');
require('./moment-1780b03a.js');
require('./index-8bb117a0.js');
require('./axios-6e678d52.js');
require('./locales.store-4eb57996.js');
require('./index-6299b0f7.js');
require('./calendar-data-e7cdcfec.js');

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
        return (index.h("div", { key: '1171e7d4ec7a92d0328fb1e0b2b417cf5a72e4ba', class: "arrivals-filters__container" }, index.h("ir-custom-date-picker", { key: 'a41f31f0a2f70a91283df39e12a69acfcc6ad913', onDateChanged: e => arrivals_store.setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivals_store.arrivalsStore.today, class: "arrivals-filters__date-picker" }, index.h("wa-icon", { key: '96ad1410f24221fac9de2b72c51713142de34598', name: "calendar", slot: "start" }), irInterceptor_store.isRequestPending('/Get_Rooms_To_Check_in') && index.h("wa-spinner", { key: '0c100a6c10ff4947f344da899ace9c408774543f', slot: "end" })), index.h("ir-input", { key: 'a63636967d431dce582628e7a71c69e3c1e526b5', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivals_store.arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '33d038f934d32a691055948b8e737cfefe246a18', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = IrArrivalsFiltersStyle0;

exports.ir_arrivals_filters = IrArrivalsFilters;

//# sourceMappingURL=ir-arrivals-filters.cjs.entry.js.map