import { r as registerInstance, h } from './index-DKZeCK8T.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store-D5qiSsp3.js';
import { i as isRequestPending } from './ir-interceptor.store-DjDNm9TC.js';
import { t } from './t-Bvz1wS_D.js';
import './room-movement-time-DWm_ef3q.js';
import './moment-Mki5YqAR.js';
import './utils-CAiEa-WB.js';
import './calendar-data-D4DbXAhg.js';
import './locale-scope-Jre4lb6k.js';
import './booking.dto-DQx6bzbY.js';
import './type-D_dKkSLY.js';
import './types-BLb1NO3I.js';
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
        return (h("div", { key: '95b70e55c232a11cf1f194809ab1d587ba8db0e9', class: "arrivals-filters__container" }, h("ir-date-select", { key: '1eabcefb87918b06f62621fcb60d1006c186494f', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '586c0039cba702093a5f26cd5785624a4bba945d', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: 'bdd4764acadfbcd92cd81faaaedfe26b39a47454', slot: "end" })), h("ir-input", { key: 'f888d3fad5793e4a04f1e0290350716ba63f9dac', withClear: true, class: "arrivals-filters__search-bar", placeholder: t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'c2ed16bc4c4341b2c0bb430ee5315b73803585f3', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

export { IrArrivalsFilters as ir_arrivals_filters };
