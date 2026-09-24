import { r as registerInstance, h } from './index-CeHdrJeH.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store-Cjcv-Dmr.js';
import { i as isRequestPending } from './ir-interceptor.store-302gZvQv.js';
import { t } from './t-Bk78Wumj.js';
import './utils-CNQuD3ma.js';
import './moment-Mki5YqAR.js';
import './calendar-data-CiYzaNK0.js';
import './locales.store-CXJn6ls-.js';
import './booking.dto-xX-uaIxb.js';
import './type-DahsFfOq.js';
import './types-BWKgfE54.js';
import './ir-date-BngUhoPp.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';

const irArrivalsFiltersCss = () => `.sc-ir-arrivals-filters-h{display:block}.arrivals-filters__container.sc-ir-arrivals-filters{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.arrivals-filters__container.sc-ir-arrivals-filters{flex-direction:row;align-items:center}.arrivals-filters__container.sc-ir-arrivals-filters>*.sc-ir-arrivals-filters{flex:1 1 0%}.arrivals-filters__date-picker.sc-ir-arrivals-filters{max-width:200px}.arrivals-filters__search-bar.sc-ir-arrivals-filters{max-width:400px}}`;

const IrArrivalsFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '8d4ee33d8140bddca053f58dc656c6f5844c9f5b', class: "arrivals-filters__container" }, h("ir-date-select", { key: '9881e5cb72f7109025b3c6b641a967e8f46b68ee', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: 'e7636587e757971e53732a0a1cb16d17fc380e40', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: 'be80e199271239b8b8d0ad6229cbbf05156793a4', slot: "end" })), h("ir-input", { key: '8848b1426ae5174329d8e9762b5be629fb03cb8b', withClear: true, class: "arrivals-filters__search-bar", placeholder: t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '3b812fcdbdd3ca150b52b785b66d1a39845f1622', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

export { IrArrivalsFilters as ir_arrivals_filters };
