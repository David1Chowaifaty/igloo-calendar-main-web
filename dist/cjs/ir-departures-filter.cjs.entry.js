'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const departures_store = require('./departures.store-dfd39b7b.js');
require('./utils-1ff7957f.js');
require('./moment-1780b03a.js');
require('./calendar-data-0598de26.js');
require('./index-fbf1fe1d.js');
require('./locales.store-32782582.js');

const irDeparturesFilterCss = ".sc-ir-departures-filter-h{display:block}.sc-ir-departures-filter-h{display:block}.departures-filters__container.sc-ir-departures-filter{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.departures-filters__container.sc-ir-departures-filter{flex-direction:row;align-items:center}.departures-filters__container.sc-ir-departures-filter>*.sc-ir-departures-filter{flex:1 1 0%}.departures-filters__date-picker.sc-ir-departures-filter{max-width:200px}.departures-filters__search-bar.sc-ir-departures-filter{max-width:400px}}";
const IrDeparturesFilterStyle0 = irDeparturesFilterCss;

const IrDeparturesFilter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        departures_store.setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (index.h("div", { key: '60c80fe38745a643e09bff959b210a35fdd2356e', class: "departures-filters__container" }, index.h("ir-custom-date-picker", { key: 'c0916426722f64102c91a7a125a5e7d93c5800da', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                departures_store.setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departures_store.departuresStore.today, class: "departures-filters__date-picker" }, index.h("wa-icon", { key: '2a6a0379144079f7c2eac083558ee6760696b05c', name: "calendar", slot: "start" })), index.h("ir-input", { key: 'f7b17f129ebe66f95ad27c0c28ef9eb98c091741', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departures_store.departuresStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '52ebefec79aaf730ddd181c283484e2d460aa18c', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = IrDeparturesFilterStyle0;

exports.ir_departures_filter = IrDeparturesFilter;

//# sourceMappingURL=ir-departures-filter.cjs.entry.js.map