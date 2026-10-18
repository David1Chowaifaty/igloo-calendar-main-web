'use strict';

var index = require('./index-IDeZZwEK.js');
var departures_store = require('./departures.store-Cft0Vk2T.js');
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

const irDeparturesFilterCss = () => `.sc-ir-departures-filter-h{display:block}.sc-ir-departures-filter-h{display:block}.departures-filters__container.sc-ir-departures-filter{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.departures-filters__container.sc-ir-departures-filter{flex-direction:row;align-items:center}.departures-filters__container.sc-ir-departures-filter>*.sc-ir-departures-filter{flex:1 1 0%}.departures-filters__date-picker.sc-ir-departures-filter{max-width:200px}.departures-filters__search-bar.sc-ir-departures-filter{max-width:400px}}`;

const IrDeparturesFilter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        departures_store.setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (index.h("div", { key: '33573db160aa974854dbbccd687c88b47d82b777', class: "departures-filters__container" }, index.h("ir-date-select", { key: '1f1e60a72c6cb396479737615934746dfa7282b6', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                departures_store.setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departures_store.departuresStore.today, class: "departures-filters__date-picker" }, index.h("wa-icon", { key: '87dc4d9dda357dd8f0101c52155596f51069b656', name: "calendar", slot: "start" })), index.h("ir-input", { key: '212fad504ee475552da5b1781620d83d63342a94', withClear: true, class: "departures-filters__search-bar", placeholder: t.t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: departures_store.departuresStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '539c214012a6607c886a7cb162817c17c4f6bb2f', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

exports.ir_departures_filter = IrDeparturesFilter;
