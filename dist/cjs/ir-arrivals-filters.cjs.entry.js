'use strict';

var index = require('./index-Cn9TxUnA.js');
var arrivals_store = require('./arrivals.store-DzqGr2S7.js');
var irInterceptor_store = require('./ir-interceptor.store-DCKAa58Q.js');
require('./utils-DjJ9po0i.js');
require('./moment-CdViwxPQ.js');
require('./index-CLqkDPTC.js');
require('./calendar-data-BS2xSsKS.js');
require('./index-DIiJtwiU.js');
require('./locales.store-BeGVOOFV.js');
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
        return (index.h("div", { key: '66a8892fc0a54c7f49f5c610c6c84dde16a8ca56', class: "arrivals-filters__container" }, index.h("ir-date-select", { key: '361eef34ca6cf289d840cf57db5c2628b7750dd4', onDateChanged: e => arrivals_store.setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivals_store.arrivalsStore.today, class: "arrivals-filters__date-picker" }, index.h("wa-icon", { key: '02257e1bed58d86ffee98f159701d0ea5ee405d7', name: "calendar", slot: "start" }), irInterceptor_store.isRequestPending('/Get_Rooms_To_Check_in') && index.h("wa-spinner", { key: 'cf8be4f8257892770e61f8dbb5072998d313785e', slot: "end" })), index.h("ir-input", { key: '0f06a4916207388bd907791484c108c06a65b798', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivals_store.arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '6a9d0cfaf6af8226b2b5648df10a6642accdf40b', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

exports.ir_arrivals_filters = IrArrivalsFilters;
