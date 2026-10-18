'use strict';

var index = require('./index-IDeZZwEK.js');
var arrivals_store = require('./arrivals.store-CxYY9GbK.js');
var irInterceptor_store = require('./ir-interceptor.store-GIfc0Pi9.js');
var t = require('./t-CqJPQrfm.js');
require('./room-movement-time-CCE_KSaI.js');
require('./moment-CdViwxPQ.js');
require('./utils-ZKsQb8eV.js');
require('./calendar-data-ShS6b-Ns.js');
require('./locale-scope-Cch-vf1R.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
require('./types-BVJQZ50e.js');
require('./ir-date-CbkOKs2C.js');
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
        return (index.h("div", { key: '95b70e55c232a11cf1f194809ab1d587ba8db0e9', class: "arrivals-filters__container" }, index.h("ir-date-select", { key: '1eabcefb87918b06f62621fcb60d1006c186494f', onDateChanged: e => arrivals_store.setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivals_store.arrivalsStore.today, class: "arrivals-filters__date-picker" }, index.h("wa-icon", { key: '586c0039cba702093a5f26cd5785624a4bba945d', name: "calendar", slot: "start" }), irInterceptor_store.isRequestPending('/Get_Rooms_To_Check_in') && index.h("wa-spinner", { key: 'bdd4764acadfbcd92cd81faaaedfe26b39a47454', slot: "end" })), index.h("ir-input", { key: 'f888d3fad5793e4a04f1e0290350716ba63f9dac', withClear: true, class: "arrivals-filters__search-bar", placeholder: t.t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: arrivals_store.arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: 'c2ed16bc4c4341b2c0bb430ee5315b73803585f3', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

exports.ir_arrivals_filters = IrArrivalsFilters;
