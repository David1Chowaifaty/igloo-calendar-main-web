'use strict';

var index = require('./index-DN8J4ULi.js');
var arrivals_store = require('./arrivals.store-CZCXOvuc.js');
var irInterceptor_store = require('./ir-interceptor.store-DHA5tM8U.js');
require('./utils-t-vm9_Z2.js');
require('./moment-CdViwxPQ.js');
require('./index-CLqkDPTC.js');
require('./calendar-data-CdMMPf5M.js');
require('./locales.store-QRiel1Gy.js');
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
        return (index.h("div", { key: '0f8f6ba3ffbaab1bcf20f7a17b76822631876967', class: "arrivals-filters__container" }, index.h("ir-date-select", { key: 'ccaccbeb8a038c9f8c057a7e63eea6b791914650', onDateChanged: e => arrivals_store.setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivals_store.arrivalsStore.today, class: "arrivals-filters__date-picker" }, index.h("wa-icon", { key: 'bd9ef336a6ca93ea90f866ea3dd0e069685706ab', name: "calendar", slot: "start" }), irInterceptor_store.isRequestPending('/Get_Rooms_To_Check_in') && index.h("wa-spinner", { key: '1b072199127c875d122e38d6890efa592a33d82b', slot: "end" })), index.h("ir-input", { key: '8cfe56ae4a551602d1286721644a09299b2d1b1d', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivals_store.arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '5846149de6e04a1338f56b4f37ae458bb4f86b13', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

exports.ir_arrivals_filters = IrArrivalsFilters;
