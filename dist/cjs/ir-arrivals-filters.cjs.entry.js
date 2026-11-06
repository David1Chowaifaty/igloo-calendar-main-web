'use strict';

var index = require('./index-IDeZZwEK.js');
var arrivals_store = require('./arrivals.store-CHBhUgk0.js');
var irInterceptor_store = require('./ir-interceptor.store-GIfc0Pi9.js');
var t = require('./t-CqJPQrfm.js');
require('./room-movement-time-CCE_KSaI.js');
require('./moment-CdViwxPQ.js');
require('./utils-Do0GLh35.js');
require('./calendar-data-ShS6b-Ns.js');
require('./locale-scope-Cch-vf1R.js');
require('./booking.dto-CMx8s-oW.js');
require('./type-DxODN41W.js');
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
        return (index.h("div", { key: '3bae37123f7a553b1aca2f8361a90356cada971a', class: "arrivals-filters__container" }, index.h("ir-date-select", { key: '4fea997c4aeb01b044086f91f255681bd76641b7', onDateChanged: e => arrivals_store.setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivals_store.arrivalsStore.today, class: "arrivals-filters__date-picker" }, index.h("wa-icon", { key: 'ad711ea80e9b84483c0bcc8304ffa70a3e9acacf', name: "calendar", slot: "start" }), irInterceptor_store.isRequestPending('/Get_Rooms_To_Check_in') && index.h("wa-spinner", { key: '5110f88adf4641d7b243b27cea6d89d261a8f51e', slot: "end" })), index.h("ir-input", { key: '9b7c7078c1429c2d79c300bee6a17e36edad7546', withClear: true, class: "arrivals-filters__search-bar", placeholder: t.t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: arrivals_store.arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '8f2e170889024ff6d1239bf1f4213f82a961333a', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

exports.ir_arrivals_filters = IrArrivalsFilters;
