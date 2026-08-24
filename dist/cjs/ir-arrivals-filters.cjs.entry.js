'use strict';

var index = require('./index-DgHWBwDV.js');
var arrivals_store = require('./arrivals.store-DbGFoaLB.js');
var irInterceptor_store = require('./ir-interceptor.store-Xl3b3GY8.js');
require('./utils-DDEjVhUV.js');
require('./moment-CdViwxPQ.js');
require('./index-CLqkDPTC.js');
require('./calendar-data-DAVd_kwk.js');
require('./index-daCuTVuG.js');
require('./locales.store-CqlNSy6z.js');

const irArrivalsFiltersCss = () => `.sc-ir-arrivals-filters-h{display:block}.arrivals-filters__container.sc-ir-arrivals-filters{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.arrivals-filters__container.sc-ir-arrivals-filters{flex-direction:row;align-items:center}.arrivals-filters__container.sc-ir-arrivals-filters>*.sc-ir-arrivals-filters{flex:1 1 0%}.arrivals-filters__date-picker.sc-ir-arrivals-filters{max-width:200px}.arrivals-filters__search-bar.sc-ir-arrivals-filters{max-width:400px}}`;

const IrArrivalsFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        arrivals_store.setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (index.h("div", { key: '77b2d147190875da3f575c5b049c1db0831801b3', class: "arrivals-filters__container" }, index.h("ir-date-select", { key: '31041581374e88a5fae20a120aafa4df9eab2d5c', onDateChanged: e => arrivals_store.setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivals_store.arrivalsStore.today, class: "arrivals-filters__date-picker" }, index.h("wa-icon", { key: '05e2dcce912bd3d6fbecec832d4e4a53586348ba', name: "calendar", slot: "start" }), irInterceptor_store.isRequestPending('/Get_Rooms_To_Check_in') && index.h("wa-spinner", { key: 'bbe77879c528127421542901ffce3a62ca4b86e6', slot: "end" })), index.h("ir-input", { key: '2a98dccdb594e8746e344c4c6d2919a264522040', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivals_store.arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '25cd839b7c8edc90f3b5cab3f2740bace0a875ac', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

exports.ir_arrivals_filters = IrArrivalsFilters;
