'use strict';

var index = require('./index-Du1V06mp.js');
var departures_store = require('./departures.store-BDEtNehq.js');
require('./utils-EjuW-lx0.js');
require('./moment-CdViwxPQ.js');
require('./index-CLqkDPTC.js');
require('./calendar-data-CeBvVadE.js');
require('./index-BTAleJGz.js');
require('./locales.store-CYcHBWUG.js');
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
        return (index.h("div", { key: '3739afe504612ea63b8a58c687fc83281f04117d', class: "departures-filters__container" }, index.h("ir-date-select", { key: '4dc42816bb235886df520f6be55e7d4bdec70cea', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                departures_store.setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departures_store.departuresStore.today, class: "departures-filters__date-picker" }, index.h("wa-icon", { key: '3a8eec461c235d931744c7e66eeec9fb0c8ebc23', name: "calendar", slot: "start" })), index.h("ir-input", { key: 'e5eddf737b71fb301f5624cde7880ae9e45d28f1', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departures_store.departuresStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '68582610778cdbb2fc4c168ef86659bf2daf9382', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

exports.ir_departures_filter = IrDeparturesFilter;
