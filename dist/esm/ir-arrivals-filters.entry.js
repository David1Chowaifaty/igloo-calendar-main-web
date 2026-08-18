import { r as registerInstance, h } from './index-CaNXuIlM.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store-CloJtFcW.js';
import { i as isRequestPending } from './ir-interceptor.store-C7oPv8Fq.js';
import './utils-BuVomnMs.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-C4sU6rT3.js';
import './index-Cn49IR5D.js';
import './locales.store-VrM8jHuM.js';
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
        return (h("div", { key: '0f8f6ba3ffbaab1bcf20f7a17b76822631876967', class: "arrivals-filters__container" }, h("ir-date-select", { key: 'ccaccbeb8a038c9f8c057a7e63eea6b791914650', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: 'bd9ef336a6ca93ea90f866ea3dd0e069685706ab', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: '1b072199127c875d122e38d6890efa592a33d82b', slot: "end" })), h("ir-input", { key: '8cfe56ae4a551602d1286721644a09299b2d1b1d', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '5846149de6e04a1338f56b4f37ae458bb4f86b13', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

export { IrArrivalsFilters as ir_arrivals_filters };
