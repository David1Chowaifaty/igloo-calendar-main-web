'use strict';

var index = require('./index-CQkpA5n3.js');
var arrivals_store = require('./arrivals.store-BDXghnzH.js');
var irInterceptor_store = require('./ir-interceptor.store-moMB-JCs.js');
var t = require('./t-C54QV4_c.js');
require('./utils-CVHsag7R.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-HgC39-BR.js');
require('./locales.store-BMTss6fG.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
require('./types-BVJQZ50e.js');
require('./ir-date-BLb2Vxrk.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irArrivalsFiltersCss = () => `.sc-ir-arrivals-filters-h{display:block}.arrivals-filters__container.sc-ir-arrivals-filters{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.arrivals-filters__container.sc-ir-arrivals-filters{flex-direction:row;align-items:center}.arrivals-filters__container.sc-ir-arrivals-filters>*.sc-ir-arrivals-filters{flex:1 1 0%}.arrivals-filters__date-picker.sc-ir-arrivals-filters{max-width:200px}.arrivals-filters__search-bar.sc-ir-arrivals-filters{max-width:400px}}`;

const IrArrivalsFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        arrivals_store.setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (index.h("div", { key: '8d4ee33d8140bddca053f58dc656c6f5844c9f5b', class: "arrivals-filters__container" }, index.h("ir-date-select", { key: '9881e5cb72f7109025b3c6b641a967e8f46b68ee', onDateChanged: e => arrivals_store.setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivals_store.arrivalsStore.today, class: "arrivals-filters__date-picker" }, index.h("wa-icon", { key: 'e7636587e757971e53732a0a1cb16d17fc380e40', name: "calendar", slot: "start" }), irInterceptor_store.isRequestPending('/Get_Rooms_To_Check_in') && index.h("wa-spinner", { key: 'be80e199271239b8b8d0ad6229cbbf05156793a4', slot: "end" })), index.h("ir-input", { key: '8848b1426ae5174329d8e9762b5be629fb03cb8b', withClear: true, class: "arrivals-filters__search-bar", placeholder: t.t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: arrivals_store.arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '3b812fcdbdd3ca150b52b785b66d1a39845f1622', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

exports.ir_arrivals_filters = IrArrivalsFilters;
