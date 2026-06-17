'use strict';

var index = require('./index-DtXemfU-.js');
var departures_store = require('./departures.store-6BlWMq8e.js');
require('./utils-CsChIHgF.js');
require('./moment-CdViwxPQ.js');
require('./index-CLqkDPTC.js');
require('./calendar-data--UuFzfsJ.js');
require('./index-koQJ3Kgt.js');
require('./locales.store-CtV5-KJh.js');
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
        return (index.h("div", { key: 'bfa366d0dab9b88c02f805a76262c2871a98ad8a', class: "departures-filters__container" }, index.h("ir-date-select", { key: 'c7cd07fed964937e56e3ad9d263131048d214962', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                departures_store.setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departures_store.departuresStore.today, class: "departures-filters__date-picker" }, index.h("wa-icon", { key: '8c8964bdc878ad404dee0eaa5cacb474bdd6585e', name: "calendar", slot: "start" })), index.h("ir-input", { key: 'e1dd7a69c586816936723deb557d8eb3e040c5db', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departures_store.departuresStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: 'c99ea6e8ec8befc91df85eb83e002cb696284334', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

exports.ir_departures_filter = IrDeparturesFilter;
