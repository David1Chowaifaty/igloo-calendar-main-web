'use strict';

var index = require('./index-IDeZZwEK.js');
var arrivals_store = require('./arrivals.store-DgqgVg8s.js');
var irInterceptor_store = require('./ir-interceptor.store-CdFHnn22.js');
var t = require('./t-sd8HJHNy.js');
require('./utils-CpEd8z_J.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-DZk0v7WL.js');
require('./locales.store-D6DJIhoZ.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
require('./types-BVJQZ50e.js');
require('./ir-date-Bjy8vNGm.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./calendar-dates-BxDGM1ix.js');

const irArrivalsFiltersCss = () => `.sc-ir-arrivals-filters-h{display:block}.arrivals-filters__container.sc-ir-arrivals-filters{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.arrivals-filters__container.sc-ir-arrivals-filters{flex-direction:row;align-items:center}.arrivals-filters__container.sc-ir-arrivals-filters>*.sc-ir-arrivals-filters{flex:1 1 0%}.arrivals-filters__date-picker.sc-ir-arrivals-filters{max-width:200px}.arrivals-filters__search-bar.sc-ir-arrivals-filters{max-width:400px}}`;

const IrArrivalsFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        arrivals_store.setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (index.h("div", { key: '23c53912b808327d42ea65d3ed00606b5157d1c6', class: "arrivals-filters__container" }, index.h("ir-date-select", { key: '171763ebf1b6b774ffc2c10a3d5c251cbec592f8', onDateChanged: e => arrivals_store.setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivals_store.arrivalsStore.today, class: "arrivals-filters__date-picker" }, index.h("wa-icon", { key: 'fbc83435ffff165e96d3569779ec7bf4a0d1ec7f', name: "calendar", slot: "start" }), irInterceptor_store.isRequestPending('/Get_Rooms_To_Check_in') && index.h("wa-spinner", { key: '1a56a18b76b48d0153952786f1920da891b4a021', slot: "end" })), index.h("ir-input", { key: '6a06f0e2973c28abacde7dca3879d111b7396adb', withClear: true, class: "arrivals-filters__search-bar", placeholder: t.t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: arrivals_store.arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '0c00d203c09efec6490a292279b3a6b5bcaafcc6', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

exports.ir_arrivals_filters = IrArrivalsFilters;
