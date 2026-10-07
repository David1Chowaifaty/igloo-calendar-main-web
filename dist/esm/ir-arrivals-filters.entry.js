import { r as registerInstance, h } from './index-CeHdrJeH.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store-BAsdXZA1.js';
import { i as isRequestPending } from './ir-interceptor.store-B1TrAet5.js';
import { t } from './t-BVYK64UG.js';
import './utils-VLa8HWRW.js';
import './moment-Mki5YqAR.js';
import './calendar-data-Cdv5kmxH.js';
import './locale-scope-CapRuPkM.js';
import './booking.dto-D-ACWjZx.js';
import './type-o1ai24d7.js';
import './types-Clk7NCXk.js';
import './ir-date-NNCOayR_.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './calendar-dates-D3hVfsrC.js';

const irArrivalsFiltersCss = () => `.sc-ir-arrivals-filters-h{display:block}.arrivals-filters__container.sc-ir-arrivals-filters{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.arrivals-filters__container.sc-ir-arrivals-filters{flex-direction:row;align-items:center}.arrivals-filters__container.sc-ir-arrivals-filters>*.sc-ir-arrivals-filters{flex:1 1 0%}.arrivals-filters__date-picker.sc-ir-arrivals-filters{max-width:200px}.arrivals-filters__search-bar.sc-ir-arrivals-filters{max-width:400px}}`;

const IrArrivalsFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '53b130d5e4705e9bc5ab5cd44b11cc57cca40cb9', class: "arrivals-filters__container" }, h("ir-date-select", { key: 'b8b595363c44a5f5d92a2b086080974ac024ac2d', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '7c772bcabd28c2204b876b7dece9fa9fbfe80d24', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: 'f933b20bdf8c0f6570f3c9d7b20d634cda6e81b4', slot: "end" })), h("ir-input", { key: 'f19c881a75587e4c266daf02c1003aa5b6e3ab19', withClear: true, class: "arrivals-filters__search-bar", placeholder: t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '0c0e361925523f7e18cf555c1ce38c6eac316d9c', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

export { IrArrivalsFilters as ir_arrivals_filters };
