import { r as registerInstance, h } from './index-b3dce66a.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store-2ab3c824.js';
import { i as isRequestPending } from './ir-interceptor.store-ebb6c559.js';
import './booking-7c3fba5f.js';
import './moment-ab846cee.js';
import './index-1e1f097b.js';
import './axios-aa1335b8.js';
import './locales.store-f4150353.js';
import './index-a124d225.js';
import './calendar-data-8a36a1b2.js';

const irArrivalsFiltersCss = ".sc-ir-arrivals-filters-h{display:block}.arrivals-filters__container.sc-ir-arrivals-filters{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.arrivals-filters__container.sc-ir-arrivals-filters{flex-direction:row;align-items:center}.arrivals-filters__container.sc-ir-arrivals-filters>*.sc-ir-arrivals-filters{flex:1 1 0%}.arrivals-filters__date-picker.sc-ir-arrivals-filters{max-width:200px}.arrivals-filters__search-bar.sc-ir-arrivals-filters{max-width:400px}}";
const IrArrivalsFiltersStyle0 = irArrivalsFiltersCss;

const IrArrivalsFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '91a681832cde0e36faf93f08de39c374ceea72d5', class: "arrivals-filters__container" }, h("ir-custom-date-picker", { key: 'f104d10400cd67ee7a24fb386ee787bffe4eb039', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '57246ac970aeff8fc54ce82d06d31b035a390fa0', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: '893017fe2d051d5ee0d9056d550d58c122ac910f', slot: "end" })), h("ir-input", { key: '523264156baa121ba5267bea3dd69dd77162dad3', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '37f6d24b61f55234d1dc31e3a82c21654d6a5474', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = IrArrivalsFiltersStyle0;

export { IrArrivalsFilters as ir_arrivals_filters };

//# sourceMappingURL=ir-arrivals-filters.entry.js.map