import { r as registerInstance, h } from './index-b3dce66a.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store-21c18d01.js';
import { i as isRequestPending } from './ir-interceptor.store-ebb6c559.js';
import './utils-7e795e17.js';
import './moment-ab846cee.js';
import './index-1e1f097b.js';
import './calendar-data-8a36a1b2.js';
import './index-a124d225.js';
import './locales.store-f4150353.js';
import './axios-aa1335b8.js';

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
        return (h("div", { key: 'c705ec61270d6a70943a243a5e28cad52c74bbf5', class: "arrivals-filters__container" }, h("ir-custom-date-picker", { key: 'f0180291b26bb4175377eec18d3b9db56b9cddff', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '3c7a2a0222db81533fef9b4a5aebf0d40e1b4ac7', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: 'dd49c2c465ad31ade6fb70efac52cf99acc98b9b', slot: "end" })), h("ir-input", { key: 'b038b2da513e591ef8d5c33b37118069370fb116', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'cfd20f3d1a8c5725167994196ced9c76bc316472', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = IrArrivalsFiltersStyle0;

export { IrArrivalsFilters as ir_arrivals_filters };

//# sourceMappingURL=ir-arrivals-filters.entry.js.map