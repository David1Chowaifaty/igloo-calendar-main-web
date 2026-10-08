import { r as registerInstance, h } from './index-CeHdrJeH.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store-BtKWkVJb.js';
import { i as isRequestPending } from './ir-interceptor.store-B1TrAet5.js';
import { t } from './t-BVYK64UG.js';
import './utils-DsZQyztt.js';
import './moment-Mki5YqAR.js';
import './calendar-data-9xOw4JU4.js';
import './locale-scope-CapRuPkM.js';
import './booking.dto-B554ToUQ.js';
import './type-DjfVZqvs.js';
import './types-CB66a07H.js';
import './ir-date-CASx9LWM.js';
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
        return (h("div", { key: '04049983a08d1b46d58a0c08a2e9c52aa83e13a1', class: "arrivals-filters__container" }, h("ir-date-select", { key: '3be3b53ef9214d9489741fff16aa36976037c56f', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '9a84579b098e5abfea4e1d66377665beeb174754', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: '015b7a07d948bd4a8990623e4c70c00a0d0ca03c', slot: "end" })), h("ir-input", { key: '1a4fc1b873b46a2214ddb5f5ccdd9730143e1e01', withClear: true, class: "arrivals-filters__search-bar", placeholder: t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'e6a6b50a4b3f89e16dea26f28795e0694e729ad5', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

export { IrArrivalsFilters as ir_arrivals_filters };
