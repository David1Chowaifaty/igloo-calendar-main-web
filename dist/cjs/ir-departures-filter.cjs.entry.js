'use strict';

var index = require('./index-CJ0kc5p1.js');
var departures_store = require('./departures.store-BGop2tpx.js');
require('./utils-CHYeTDt_.js');
require('./moment-CdViwxPQ.js');
require('./index-CLqkDPTC.js');
require('./calendar-data-CTxCbso4.js');
require('./index-dbmC5P-h.js');
require('./locales.store-BfrChT1G.js');
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
        return (index.h("div", { key: '175f40e9e137130aefd25474a358bfc9c120e43c', class: "departures-filters__container" }, index.h("ir-date-select", { key: 'b010856658177d6ce62f6a2dc99284e8a0af2336', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                departures_store.setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departures_store.departuresStore.today, class: "departures-filters__date-picker" }, index.h("wa-icon", { key: '62330a2e5c0a3fa208ea71a95279837fd442422a', name: "calendar", slot: "start" })), index.h("ir-input", { key: 'c0215267fb05528cd1c213d5d3609ca945e4be9b', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departures_store.departuresStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: 'b757f091c7f700d7a626f8ac2e448dc2e9d65250', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

exports.ir_departures_filter = IrDeparturesFilter;
