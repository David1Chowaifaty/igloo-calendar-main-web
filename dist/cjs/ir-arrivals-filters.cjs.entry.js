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
        return (index.h("div", { key: '7626820f772427089b2872055a460446013db6eb', class: "arrivals-filters__container" }, index.h("ir-date-select", { key: '6b323aa845d2c83f2ecd7820b80d563ee9957853', onDateChanged: e => arrivals_store.setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivals_store.arrivalsStore.today, class: "arrivals-filters__date-picker" }, index.h("wa-icon", { key: 'eb1489921bf0617551fdd99bb7267e623f592caa', name: "calendar", slot: "start" }), irInterceptor_store.isRequestPending('/Get_Rooms_To_Check_in') && index.h("wa-spinner", { key: 'f9fd931420c4d02d066ddfaaeb62484ff613697c', slot: "end" })), index.h("ir-input", { key: '0d979fa90924eb4fbc6a1eb153c593428926a77d', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivals_store.arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '175b78a1ccd0c1bf82921e3523e3e240ca0c1a76', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

exports.ir_arrivals_filters = IrArrivalsFilters;
