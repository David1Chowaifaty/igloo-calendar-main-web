'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const arrivals_store = require('./arrivals.store-0d4d41f7.js');
const irInterceptor_store = require('./ir-interceptor.store-c6d5162b.js');
require('./utils-9892967b.js');
require('./moment-1780b03a.js');
require('./index-8bb117a0.js');
require('./calendar-data-e7cdcfec.js');
require('./index-6299b0f7.js');
require('./locales.store-4eb57996.js');
require('./axios-6e678d52.js');

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
        return (index.h("div", { key: '7d4cee017a1b302c0f7f7ffa33ceb33d88a8dc82', class: "arrivals-filters__container" }, index.h("ir-custom-date-picker", { key: '79f438b5b4bc127bbc2de903d1e5e40f8fafd3c1', onDateChanged: e => arrivals_store.setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivals_store.arrivalsStore.today, class: "arrivals-filters__date-picker" }, index.h("wa-icon", { key: '6ad6f98dc269c8dc5377e3925e99d1e8bdb125ff', name: "calendar", slot: "start" }), irInterceptor_store.isRequestPending('/Get_Rooms_To_Check_in') && index.h("wa-spinner", { key: '272416171e3764242e517035121993811e059172', slot: "end" })), index.h("ir-input", { key: 'f1a74bb155882ec2b5fe399f364eeb34d3d0aacd', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivals_store.arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: 'b92f5696cbf04b47cae0c2551bb628db0d9500df', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = IrArrivalsFiltersStyle0;

exports.ir_arrivals_filters = IrArrivalsFilters;

//# sourceMappingURL=ir-arrivals-filters.cjs.entry.js.map