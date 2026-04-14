import { r as registerInstance, h } from './index-7e96440e.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store-ef12c3e2.js';
import { i as isRequestPending } from './ir-interceptor.store-1376ed6c.js';
import './utils-123be455.js';
import './moment-ab846cee.js';
import './index-87419685.js';
import './calendar-data-b1f645da.js';
import './index-f100e9d2.js';
import './locales.store-cb784e95.js';
import './type-f926f853.js';

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
        return (h("div", { key: '8fd3cdf0405231fb3ca0fb3b7254bc18f02f909d', class: "arrivals-filters__container" }, h("ir-custom-date-picker", { key: '207d38971dc7f8bf3fecb4ffb656afcc33b8b93a', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '2baddb7511803b77ab1956be8795f05135ff6130', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: '2ff767653e54d0b443c0f8c93acb772f29cb1d3a', slot: "end" })), h("ir-input", { key: '28aabb3d370eab9be584841048ad432b6968307f', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '9da32bf2fe43f4b7b93126e060156841dae15a32', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = IrArrivalsFiltersStyle0;

export { IrArrivalsFilters as ir_arrivals_filters };

//# sourceMappingURL=ir-arrivals-filters.entry.js.map