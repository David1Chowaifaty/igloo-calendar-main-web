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
        return (index.h("div", { key: 'ed6846ff6d7e001567e17e2fc66413dc4d0025dc', class: "departures-filters__container" }, index.h("ir-date-select", { key: '7efdbd6ec848bd3aa09c0d4bcc4d8f7889f500d3', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                departures_store.setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departures_store.departuresStore.today, class: "departures-filters__date-picker" }, index.h("wa-icon", { key: 'ef03e6525766a1a26ddd1db2d1ca5483d4bc6515', name: "calendar", slot: "start" })), index.h("ir-input", { key: 'ab08bfbb2f056dae29c60a4b4c5ed1751f030403', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departures_store.departuresStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '00ab076585747a9b95f90a84e557cee99fb07659', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

exports.ir_departures_filter = IrDeparturesFilter;
