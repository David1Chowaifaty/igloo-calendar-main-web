'use strict';

var index = require('./index-IDeZZwEK.js');
var departures_store = require('./departures.store-B5yC9RZO.js');
var t = require('./t-CqJPQrfm.js');
require('./room-movement-time-CCE_KSaI.js');
require('./moment-CdViwxPQ.js');
require('./utils-DC_1UV-i.js');
require('./calendar-data-ShS6b-Ns.js');
require('./locale-scope-Cch-vf1R.js');
require('./booking.dto-CMx8s-oW.js');
require('./type-DxODN41W.js');
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
        return (index.h("div", { key: '2ca74a256e42e963d8ed1babed741d7bcb874a71', class: "departures-filters__container" }, index.h("ir-date-select", { key: '3a82b98eeefc41f380719bf865a63f2f98092ae0', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                departures_store.setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departures_store.departuresStore.today, class: "departures-filters__date-picker" }, index.h("wa-icon", { key: '5f0f2bb05e2e103141a671e429cead58a878bdc6', name: "calendar", slot: "start" })), index.h("ir-input", { key: 'ffe6e20c467426153c8201da606231d18f3f1c33', withClear: true, class: "departures-filters__search-bar", placeholder: t.t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: departures_store.departuresStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '43aa8bf635b3096627ff99e3be789c9acbd353d7', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

exports.ir_departures_filter = IrDeparturesFilter;
