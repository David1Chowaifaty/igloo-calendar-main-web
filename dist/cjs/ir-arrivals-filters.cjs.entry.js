'use strict';

var index = require('./index-CQkpA5n3.js');
var arrivals_store = require('./arrivals.store-BitTtJPu.js');
var irInterceptor_store = require('./ir-interceptor.store-B6XUQQuI.js');
var t = require('./t-wyGILxEL.js');
require('./utils-HVSePjFf.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-Br2L_0sg.js');
require('./locale-scope-C7rmpwuA.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
require('./types-BVJQZ50e.js');
require('./ir-date-wIaf9EWb.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');
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
        return (index.h("div", { key: '04049983a08d1b46d58a0c08a2e9c52aa83e13a1', class: "arrivals-filters__container" }, index.h("ir-date-select", { key: '3be3b53ef9214d9489741fff16aa36976037c56f', onDateChanged: e => arrivals_store.setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivals_store.arrivalsStore.today, class: "arrivals-filters__date-picker" }, index.h("wa-icon", { key: '9a84579b098e5abfea4e1d66377665beeb174754', name: "calendar", slot: "start" }), irInterceptor_store.isRequestPending('/Get_Rooms_To_Check_in') && index.h("wa-spinner", { key: '015b7a07d948bd4a8990623e4c70c00a0d0ca03c', slot: "end" })), index.h("ir-input", { key: '1a4fc1b873b46a2214ddb5f5ccdd9730143e1e01', withClear: true, class: "arrivals-filters__search-bar", placeholder: t.t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: arrivals_store.arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: 'e6a6b50a4b3f89e16dea26f28795e0694e729ad5', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

exports.ir_arrivals_filters = IrArrivalsFilters;
