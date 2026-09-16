'use strict';

var index = require('./index-CQkpA5n3.js');
var arrivals_store = require('./arrivals.store-BibVqnII.js');
var irInterceptor_store = require('./ir-interceptor.store-moMB-JCs.js');
var t = require('./t-CyRK1btk.js');
require('./utils-oNe0zJBw.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-UPPAEVR_.js');
require('./locales.store-BMTss6fG.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
require('./types-BVJQZ50e.js');
require('./ir-date-BZLsqCOc.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irArrivalsFiltersCss = () => `.sc-ir-arrivals-filters-h{display:block}.arrivals-filters__container.sc-ir-arrivals-filters{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.arrivals-filters__container.sc-ir-arrivals-filters{flex-direction:row;align-items:center}.arrivals-filters__container.sc-ir-arrivals-filters>*.sc-ir-arrivals-filters{flex:1 1 0%}.arrivals-filters__date-picker.sc-ir-arrivals-filters{max-width:200px}.arrivals-filters__search-bar.sc-ir-arrivals-filters{max-width:400px}}`;

const IrArrivalsFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        arrivals_store.setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (index.h("div", { key: 'b43aaf8563021da6ccecd724143b83fcddf7b050', class: "arrivals-filters__container" }, index.h("ir-date-select", { key: 'd6173b77bdeec77ee28ee2406328077ee3e66b2e', onDateChanged: e => arrivals_store.setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivals_store.arrivalsStore.today, class: "arrivals-filters__date-picker" }, index.h("wa-icon", { key: '7bae59ab1785df5d7f69792c6e3c245d805705ad', name: "calendar", slot: "start" }), irInterceptor_store.isRequestPending('/Get_Rooms_To_Check_in') && index.h("wa-spinner", { key: '3c65e9517b40ef9ad222cdf862b68c1eb791ef3b', slot: "end" })), index.h("ir-input", { key: '8aa3fd48e399bcb0e404a4021a7acb6929a8a505', withClear: true, class: "arrivals-filters__search-bar", placeholder: t.t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: arrivals_store.arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: 'd9e0886bb9cf13020a979503fe992bf9e067c699', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

exports.ir_arrivals_filters = IrArrivalsFilters;
