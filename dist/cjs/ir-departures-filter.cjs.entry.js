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
        return (index.h("div", { key: 'eb60a9d354069f795ef5c26bf4ad178b656d69b3', class: "departures-filters__container" }, index.h("ir-custom-date-picker", { key: 'e654cc5e93c7cd2e283ad1108e3b9e600db2f8d8', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                departures_store.setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departures_store.departuresStore.today, class: "departures-filters__date-picker" }, index.h("wa-icon", { key: '893c65aa48eea9247978c6306bfe1a7c4d0b4118', name: "calendar", slot: "start" })), index.h("ir-input", { key: 'd7bb612a3f3bc7e5bcc9be2927f6f3226e29b9b8', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departures_store.departuresStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: 'cfffb3b7cce51277be4288ae65a2d5f73206ecc7', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = IrDeparturesFilterStyle0;

exports.ir_departures_filter = IrDeparturesFilter;

//# sourceMappingURL=ir-departures-filter.cjs.entry.js.map