import { r as registerInstance, h } from './index-Kqbk9HdW.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store-CLDo0gFj.js';
import { i as isRequestPending } from './ir-interceptor.store-P7NCUZUW.js';
import './utils-ChAbsVix.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-BrVhDpXA.js';
import './index-BJS0kaeV.js';
import './locales.store-C-PbJt6i.js';
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
        return (h("div", { key: '1bdc147fe5fa42aa1100402bcdd52d1854aa2261', class: "arrivals-filters__container" }, h("ir-date-select", { key: '6c970c586a26bccf7eda20cbfdc776142f2c21bc', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '4bbaa6037710bfd1aaf308eb27d6144ab55a79bc', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: '217561f82e3f0f73babd0dd847da4048310c0033', slot: "end" })), h("ir-input", { key: '8ac3013884a0800ec9c9211473ca063dde9f8402', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '53971b729225ab88803ffe35f77dea0d8f48e36c', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

export { IrArrivalsFilters as ir_arrivals_filters };
