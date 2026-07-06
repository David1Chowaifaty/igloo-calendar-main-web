'use strict';

var index = require('./index-DYQrLNin.js');
var arrivals_store = require('./arrivals.store-BYfwYNng.js');
var irInterceptor_store = require('./ir-interceptor.store-DCFOyFp0.js');
require('./utils-DgT4kKsD.js');
require('./moment-CdViwxPQ.js');
require('./index-CLqkDPTC.js');
require('./calendar-data-R3j-WBLW.js');
require('./index-C59pxKl1.js');
require('./locales.store-6IlEbCjL.js');
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
        return (index.h("div", { key: 'eb263af64a483d03d66ebbb91ff4065e7f898cbc', class: "arrivals-filters__container" }, index.h("ir-date-select", { key: '4aab1208f0eb7a9ad80af4f74e553eb146556d05', onDateChanged: e => arrivals_store.setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivals_store.arrivalsStore.today, class: "arrivals-filters__date-picker" }, index.h("wa-icon", { key: '534e70e37958a6c8bf81ca551eb64c73372bbb4d', name: "calendar", slot: "start" }), irInterceptor_store.isRequestPending('/Get_Rooms_To_Check_in') && index.h("wa-spinner", { key: '5a3d71a74d381e1cfabacc754d253be389dd1984', slot: "end" })), index.h("ir-input", { key: 'a523bd0c6c3354bb72aeb70e8ec99bd0762cc989', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivals_store.arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: 'c49a8f862db05cd0b9c701f9424073943f29cd51', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

exports.ir_arrivals_filters = IrArrivalsFilters;
