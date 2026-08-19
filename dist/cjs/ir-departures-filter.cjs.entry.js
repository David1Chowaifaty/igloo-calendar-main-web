'use strict';

var index = require('./index-DgHWBwDV.js');
var departures_store = require('./departures.store-DaoEWsYs.js');
require('./utils-BHTfkyQu.js');
require('./moment-CdViwxPQ.js');
require('./index-CLqkDPTC.js');
require('./calendar-data-CgquPLci.js');
require('./index-daCuTVuG.js');
require('./locales.store-CqlNSy6z.js');
require('./type-Dy9pVS4V.js');

const irDeparturesFilterCss = () => `.sc-ir-departures-filter-h{display:block}.sc-ir-departures-filter-h{display:block}.departures-filters__container.sc-ir-departures-filter{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.departures-filters__container.sc-ir-departures-filter{flex-direction:row;align-items:center}.departures-filters__container.sc-ir-departures-filter>*.sc-ir-departures-filter{flex:1 1 0%}.departures-filters__date-picker.sc-ir-departures-filter{max-width:200px}.departures-filters__search-bar.sc-ir-departures-filter{max-width:400px}}`;

const IrDeparturesFilter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        departures_store.setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (index.h("div", { key: 'b8c5f55a186f9db6b9db95833ae2ec23d5aabf61', class: "departures-filters__container" }, index.h("ir-date-select", { key: 'a9c0246bfb115d3b2bf731d73b98255b9146de6f', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                departures_store.setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departures_store.departuresStore.today, class: "departures-filters__date-picker" }, index.h("wa-icon", { key: 'eb45af6dfe88f89a92ec13fcdab1ef5163b529f0', name: "calendar", slot: "start" })), index.h("ir-input", { key: '634e430f5f4ae58f59636c9546bd7f3d04275cd1', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departures_store.departuresStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: 'a93e0391ccd298f58e93820aba5e1f507421ac46', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

exports.ir_departures_filter = IrDeparturesFilter;
