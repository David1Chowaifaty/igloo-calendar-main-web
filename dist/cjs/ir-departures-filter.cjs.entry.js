'use strict';

var index = require('./index-P5Mginch.js');
var departures_store = require('./departures.store-C2hutD7m.js');
require('./utils-CwIiTro6.js');
require('./moment-CdViwxPQ.js');
require('./index-CLqkDPTC.js');
require('./calendar-data-PetnikUI.js');
require('./index-BLJXadKe.js');
require('./locales.store-v9LoZcAK.js');
require('./booking.dto-kenLHU-o.js');
require('./type-Dy9pVS4V.js');
require('./ir-date-BH2JQpbC.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irDeparturesFilterCss = () => `.sc-ir-departures-filter-h{display:block}.sc-ir-departures-filter-h{display:block}.departures-filters__container.sc-ir-departures-filter{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.departures-filters__container.sc-ir-departures-filter{flex-direction:row;align-items:center}.departures-filters__container.sc-ir-departures-filter>*.sc-ir-departures-filter{flex:1 1 0%}.departures-filters__date-picker.sc-ir-departures-filter{max-width:200px}.departures-filters__search-bar.sc-ir-departures-filter{max-width:400px}}`;

const IrDeparturesFilter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        departures_store.setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (index.h("div", { key: 'f2aced3235039c7249885c19e5c1dea15552ebc5', class: "departures-filters__container" }, index.h("ir-date-select", { key: 'df1e3d27ecbfec56edc08fc718c732403f76315e', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                departures_store.setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departures_store.departuresStore.today, class: "departures-filters__date-picker" }, index.h("wa-icon", { key: '1d4f48e183536f3699ec79e7ccbede52b07d0bc7', name: "calendar", slot: "start" })), index.h("ir-input", { key: 'f6e20871f2e4d8a076bfb6c7b2484ad12e00e814', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departures_store.departuresStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '645d33bbf7dccd3b0b43dba0c5f8416b5e619277', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

exports.ir_departures_filter = IrDeparturesFilter;
