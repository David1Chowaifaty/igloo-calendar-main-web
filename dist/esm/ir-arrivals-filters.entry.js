import { r as registerInstance, h } from './index-DCCEVrU4.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store-mgJ4CkOb.js';
import { i as isRequestPending } from './ir-interceptor.store-B_XQXISQ.js';
import './utils-DK1ZYV0C.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-B7ocnCQe.js';
import './index-CLFOnCBt.js';
import './locales.store-DkjT6ou2.js';
import './type-D7rOPtKA.js';

const irArrivalsFiltersCss = () => `.sc-ir-arrivals-filters-h{display:block}.arrivals-filters__container.sc-ir-arrivals-filters{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.arrivals-filters__container.sc-ir-arrivals-filters{flex-direction:row;align-items:center}.arrivals-filters__container.sc-ir-arrivals-filters>*.sc-ir-arrivals-filters{flex:1 1 0%}.arrivals-filters__date-picker.sc-ir-arrivals-filters{max-width:200px}.arrivals-filters__search-bar.sc-ir-arrivals-filters{max-width:400px}}`;

const IrArrivalsFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: 'f367851d33f29ba4c26390c2d0838370ea1b176e', class: "arrivals-filters__container" }, h("ir-date-select", { key: '07e043fbe31bad8368de45896f25d14664b77845', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '9c8e040c26b074d7a29a07a15c7f03d740aafbea', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: '2d538471f0b8466231236aa45da600b4776cce77', slot: "end" })), h("ir-input", { key: '443171832edd81f21b0671d522b507c71b7c3447', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'eaa1a12c18a44cdfbdbf4a4f9be8b92ccb45f907', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

export { IrArrivalsFilters as ir_arrivals_filters };
