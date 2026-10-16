'use strict';

var index = require('./index-Bp205iz4.js');
var arrivals_store = require('./arrivals.store-Bz1QFwgF.js');
var irInterceptor_store = require('./ir-interceptor.store-Df1UISPa.js');
require('./utils-w7_1d-K4.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-BpobEh98.js');
require('./index-CjQGUKJk.js');
require('./locales.store-CQhQqUVl.js');
require('./type-Bj2x9EWc.js');
require('./types-BVJQZ50e.js');
require('./calendar-dates-BxDGM1ix.js');

const irArrivalsFiltersCss = () => `.sc-ir-arrivals-filters-h{display:block}.arrivals-filters__container.sc-ir-arrivals-filters{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.arrivals-filters__container.sc-ir-arrivals-filters{flex-direction:row;align-items:center}.arrivals-filters__container.sc-ir-arrivals-filters>*.sc-ir-arrivals-filters{flex:1 1 0%}.arrivals-filters__date-picker.sc-ir-arrivals-filters{max-width:200px}.arrivals-filters__search-bar.sc-ir-arrivals-filters{max-width:400px}}`;

const IrArrivalsFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        arrivals_store.setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (index.h("div", { key: '529c470691a9dafa3962c21c7651005defab6fe7', class: "arrivals-filters__container" }, index.h("ir-date-select", { key: 'c3de7b59910acce8ef8070f77c98fcdb44036c07', onDateChanged: e => arrivals_store.setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivals_store.arrivalsStore.today, class: "arrivals-filters__date-picker" }, index.h("wa-icon", { key: 'a567ae23de787d194f76effd8200ba53e7609dfb', name: "calendar", slot: "start" }), irInterceptor_store.isRequestPending('/Get_Rooms_To_Check_in') && index.h("wa-spinner", { key: '65b809ddb5ce7f0cc9593e096cf4f54cce175357', slot: "end" })), index.h("ir-input", { key: '2b88a58ad5439a952f153c4ec178f035cfd6c0b1', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivals_store.arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: 'b2d8731211206251da460baaf659a03d38fd089c', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

exports.ir_arrivals_filters = IrArrivalsFilters;
