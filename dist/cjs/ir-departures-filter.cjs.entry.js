'use strict';

var index = require('./index-OzksjAXP.js');
var departures_store = require('./departures.store-owFWAfvE.js');
require('./utils-BZv1W7LE.js');
require('./moment-CdViwxPQ.js');
require('./index-CLqkDPTC.js');
require('./calendar-data-BbZbFHz-.js');
require('./index-BJltewV-.js');
require('./locales.store-BaDo11sT.js');
require('./booking.dto-_IwrBIs_.js');
require('./type-DzNPp0zr.js');

const irDeparturesFilterCss = () => `.sc-ir-departures-filter-h{display:block}.sc-ir-departures-filter-h{display:block}.departures-filters__container.sc-ir-departures-filter{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.departures-filters__container.sc-ir-departures-filter{flex-direction:row;align-items:center}.departures-filters__container.sc-ir-departures-filter>*.sc-ir-departures-filter{flex:1 1 0%}.departures-filters__date-picker.sc-ir-departures-filter{max-width:200px}.departures-filters__search-bar.sc-ir-departures-filter{max-width:400px}}`;

const IrDeparturesFilter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        departures_store.setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (index.h("div", { key: '3e54ce7ffe927042ceca7dcf570b4ad19b0f859b', class: "departures-filters__container" }, index.h("ir-date-select", { key: 'cc8712a47a348145b466ef297e4a78cf66fa52b6', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                departures_store.setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departures_store.departuresStore.today, class: "departures-filters__date-picker" }, index.h("wa-icon", { key: '37213531a1862c037c678fc100830d7239a1fd02', name: "calendar", slot: "start" })), index.h("ir-input", { key: '47f509ac236ed24880bdf48957eec632c5f28959', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departures_store.departuresStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '46dcdb73e0c72d800b5d0ac598ce29e0c9e5e6b0', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

exports.ir_departures_filter = IrDeparturesFilter;
