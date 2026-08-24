'use strict';

var index = require('./index-DgHWBwDV.js');
var arrivals_store = require('./arrivals.store-_b2hqZhV.js');
var irInterceptor_store = require('./ir-interceptor.store-Xl3b3GY8.js');
require('./utils-Dyzu_J0b.js');
require('./moment-CdViwxPQ.js');
require('./index-CLqkDPTC.js');
require('./calendar-data-DAVd_kwk.js');
require('./index-daCuTVuG.js');
require('./locales.store-CqlNSy6z.js');
require('./type-Dy9pVS4V.js');

const irArrivalsFiltersCss = () => `.sc-ir-arrivals-filters-h{display:block}.arrivals-filters__container.sc-ir-arrivals-filters{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.arrivals-filters__container.sc-ir-arrivals-filters{flex-direction:row;align-items:center}.arrivals-filters__container.sc-ir-arrivals-filters>*.sc-ir-arrivals-filters{flex:1 1 0%}.arrivals-filters__date-picker.sc-ir-arrivals-filters{max-width:200px}.arrivals-filters__search-bar.sc-ir-arrivals-filters{max-width:400px}}`;

const IrArrivalsFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        arrivals_store.setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (index.h("div", { key: '1bdc147fe5fa42aa1100402bcdd52d1854aa2261', class: "arrivals-filters__container" }, index.h("ir-date-select", { key: '6c970c586a26bccf7eda20cbfdc776142f2c21bc', onDateChanged: e => arrivals_store.setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivals_store.arrivalsStore.today, class: "arrivals-filters__date-picker" }, index.h("wa-icon", { key: '4bbaa6037710bfd1aaf308eb27d6144ab55a79bc', name: "calendar", slot: "start" }), irInterceptor_store.isRequestPending('/Get_Rooms_To_Check_in') && index.h("wa-spinner", { key: '217561f82e3f0f73babd0dd847da4048310c0033', slot: "end" })), index.h("ir-input", { key: '8ac3013884a0800ec9c9211473ca063dde9f8402', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivals_store.arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '53971b729225ab88803ffe35f77dea0d8f48e36c', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

exports.ir_arrivals_filters = IrArrivalsFilters;
