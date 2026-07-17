'use strict';

var index = require('./index-Bg4VKYKR.js');
var arrivals_store = require('./arrivals.store-CC0M-FP2.js');
var irInterceptor_store = require('./ir-interceptor.store-DS298xp2.js');
require('./utils-Bb-1iFW2.js');
require('./moment-CdViwxPQ.js');
require('./index-CLqkDPTC.js');
require('./calendar-data-D7gl8C6U.js');
require('./index-KxiFTvIk.js');
require('./locales.store-B208i_tH.js');
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
        return (index.h("div", { key: '6f8f7163112a82f7e5a0f74410ee27cf9b9246a9', class: "arrivals-filters__container" }, index.h("ir-date-select", { key: '4b1da7723621c8e61d5722a052cbcae248e1be70', onDateChanged: e => arrivals_store.setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivals_store.arrivalsStore.today, class: "arrivals-filters__date-picker" }, index.h("wa-icon", { key: '289bd3c661897d31034faa68a5925962e1f2a622', name: "calendar", slot: "start" }), irInterceptor_store.isRequestPending('/Get_Rooms_To_Check_in') && index.h("wa-spinner", { key: '345deebaada5dcf8392c05ebff9cf96df8f53d4a', slot: "end" })), index.h("ir-input", { key: 'a3105f0ea2682d68102faca239f66b2328bfa9c7', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivals_store.arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '807a0fa224405c61624605d8952d5ce88334fc60', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

exports.ir_arrivals_filters = IrArrivalsFilters;
