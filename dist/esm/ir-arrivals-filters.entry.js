import { r as registerInstance, h } from './index-DKZeCK8T.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store-B6PmCJUF.js';
import { i as isRequestPending } from './ir-interceptor.store-DjDNm9TC.js';
import { t } from './t-Bvz1wS_D.js';
import './room-movement-time-DWm_ef3q.js';
import './moment-Mki5YqAR.js';
import './utils-BXvXVM76.js';
import './calendar-data-D4DbXAhg.js';
import './locale-scope-Jre4lb6k.js';
import './booking.dto-VzFWIl64.js';
import './type-B1KlYN_1.js';
import './types-DFSK8b1u.js';
import './ir-date-CY_qGQ63.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';
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
        return (h("div", { key: 'd14ae1e1da338d5275ea0b14b63602915583c3d5', class: "arrivals-filters__container" }, h("ir-date-select", { key: 'bb5e89cc12f124b9c032e2724bd407678ae34d2d', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '5e020e7295e47bcb029bc9fbaa1245b08c0e8500', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: 'c7f4fb555925d69ea6637ac4f96fe2601dd2b7bf', slot: "end" })), h("ir-input", { key: 'e50ad071456e8cbc9879c7183b2c2967d90f4076', withClear: true, class: "arrivals-filters__search-bar", placeholder: t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'fad65ec38e1ac9fe176b97847c0e730f4f133ce7', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

export { IrArrivalsFilters as ir_arrivals_filters };
