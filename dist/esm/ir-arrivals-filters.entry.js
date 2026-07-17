import { r as registerInstance, h } from './index-JbQjGrUG.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store-g6VsTibu.js';
import { i as isRequestPending } from './ir-interceptor.store-BiWSX1U0.js';
import './utils-AafVtJtY.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-CRLrGQXE.js';
import './index-CR94o8Bs.js';
import './locales.store-CV07I3Cw.js';
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
        return (h("div", { key: '6f8f7163112a82f7e5a0f74410ee27cf9b9246a9', class: "arrivals-filters__container" }, h("ir-date-select", { key: '4b1da7723621c8e61d5722a052cbcae248e1be70', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '289bd3c661897d31034faa68a5925962e1f2a622', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: '345deebaada5dcf8392c05ebff9cf96df8f53d4a', slot: "end" })), h("ir-input", { key: 'a3105f0ea2682d68102faca239f66b2328bfa9c7', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '807a0fa224405c61624605d8952d5ce88334fc60', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

export { IrArrivalsFilters as ir_arrivals_filters };
