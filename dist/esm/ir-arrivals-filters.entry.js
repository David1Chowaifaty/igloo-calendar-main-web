import { r as registerInstance, h } from './index-CwWmK1sZ.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store-hmcMFdAb.js';
import { i as isRequestPending } from './ir-interceptor.store-BjT5RY0N.js';
import './utils-DCUYWubA.js';
import './moment-Mki5YqAR.js';
import './calendar-data-zADniuy4.js';
import './index-BfixheT-.js';
import './locales.store-DN9FqlnV.js';
import './type-ByBjJ3uo.js';
import './types-Cvnhk41g.js';
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
        return (h("div", { key: '529c470691a9dafa3962c21c7651005defab6fe7', class: "arrivals-filters__container" }, h("ir-date-select", { key: 'c3de7b59910acce8ef8070f77c98fcdb44036c07', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: 'a567ae23de787d194f76effd8200ba53e7609dfb', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: '65b809ddb5ce7f0cc9593e096cf4f54cce175357', slot: "end" })), h("ir-input", { key: '2b88a58ad5439a952f153c4ec178f035cfd6c0b1', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'b2d8731211206251da460baaf659a03d38fd089c', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

export { IrArrivalsFilters as ir_arrivals_filters };
