import { r as registerInstance, h } from './index-Kqbk9HdW.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store-UFJA3wZT.js';
import { i as isRequestPending } from './ir-interceptor.store-P7NCUZUW.js';
import './utils-1xMAwYd7.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-Cd3WjpQE.js';
import './index-BJS0kaeV.js';
import './locales.store-C-PbJt6i.js';

const irArrivalsFiltersCss = () => `.sc-ir-arrivals-filters-h{display:block}.arrivals-filters__container.sc-ir-arrivals-filters{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.arrivals-filters__container.sc-ir-arrivals-filters{flex-direction:row;align-items:center}.arrivals-filters__container.sc-ir-arrivals-filters>*.sc-ir-arrivals-filters{flex:1 1 0%}.arrivals-filters__date-picker.sc-ir-arrivals-filters{max-width:200px}.arrivals-filters__search-bar.sc-ir-arrivals-filters{max-width:400px}}`;

const IrArrivalsFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '77b2d147190875da3f575c5b049c1db0831801b3', class: "arrivals-filters__container" }, h("ir-date-select", { key: '31041581374e88a5fae20a120aafa4df9eab2d5c', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '05e2dcce912bd3d6fbecec832d4e4a53586348ba', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: 'bbe77879c528127421542901ffce3a62ca4b86e6', slot: "end" })), h("ir-input", { key: '2a98dccdb594e8746e344c4c6d2919a264522040', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '25cd839b7c8edc90f3b5cab3f2740bace0a875ac', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

export { IrArrivalsFilters as ir_arrivals_filters };
