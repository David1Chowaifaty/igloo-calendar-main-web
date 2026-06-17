'use strict';

var index = require('./index-OzksjAXP.js');
var arrivals_store = require('./arrivals.store-C_y5DRYo.js');
var irInterceptor_store = require('./ir-interceptor.store-Ciah62kc.js');
require('./utils-BZv1W7LE.js');
require('./moment-CdViwxPQ.js');
require('./index-CLqkDPTC.js');
require('./calendar-data-BbZbFHz-.js');
require('./index-BJltewV-.js');
require('./locales.store-BaDo11sT.js');
require('./booking.dto-_IwrBIs_.js');
require('./type-DzNPp0zr.js');

const irArrivalsFiltersCss = () => `.sc-ir-arrivals-filters-h{display:block}.arrivals-filters__container.sc-ir-arrivals-filters{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.arrivals-filters__container.sc-ir-arrivals-filters{flex-direction:row;align-items:center}.arrivals-filters__container.sc-ir-arrivals-filters>*.sc-ir-arrivals-filters{flex:1 1 0%}.arrivals-filters__date-picker.sc-ir-arrivals-filters{max-width:200px}.arrivals-filters__search-bar.sc-ir-arrivals-filters{max-width:400px}}`;

const IrArrivalsFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        arrivals_store.setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (index.h("div", { key: '567780a6efd25ca24398c2f8f555dcbd3b50dc1e', class: "arrivals-filters__container" }, index.h("ir-date-select", { key: '3161d57b8318ec9f09551f15bf25f70362ad2b7c', onDateChanged: e => arrivals_store.setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivals_store.arrivalsStore.today, class: "arrivals-filters__date-picker" }, index.h("wa-icon", { key: '71dcd8512907be5e58e4d6672bde3103132e1232', name: "calendar", slot: "start" }), irInterceptor_store.isRequestPending('/Get_Rooms_To_Check_in') && index.h("wa-spinner", { key: '10032ffcce7422e558c002cbd7bc355be1e0b411', slot: "end" })), index.h("ir-input", { key: '510dbd69a19b47f3de05b7752306a4cbacae9b4e', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivals_store.arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, index.h("wa-icon", { key: '3932066f3ce36979ccdb43d56322dfb3b244bf7d', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

exports.ir_arrivals_filters = IrArrivalsFilters;
