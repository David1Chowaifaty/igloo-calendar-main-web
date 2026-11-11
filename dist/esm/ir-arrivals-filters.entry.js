import { r as registerInstance, h } from './index-DKZeCK8T.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store-CbS-TeWT.js';
import { i as isRequestPending } from './ir-interceptor.store-DjDNm9TC.js';
import { t } from './t-Bvz1wS_D.js';
import './room-movement-time-DWm_ef3q.js';
import './moment-Mki5YqAR.js';
import './utils-BBOkGbMg.js';
import './calendar-data-DknGMMFc.js';
import './locale-scope-Jre4lb6k.js';
import './booking.dto-DGwE7ON6.js';
import './type-9FR4Ndkd.js';
import './types-CB66a07H.js';
import './ir-date-XXNYhmSL.js';
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
        return (h("div", { key: '63f46274e90c80c25c4e974b121b3ac6d19398d0', class: "arrivals-filters__container" }, h("ir-date-select", { key: 'd6847878f6f94dfb209e65826b0cc39c32eea4d6', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '98178ca5259636250a7b4c3f7b3b265d8e3e83b8', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: '9aa0f055e099069c58066e6ebe29e9e52346bd51', slot: "end" })), h("ir-input", { key: '0bf42860058237e7cfafd5171aa4682e1886eee3', withClear: true, class: "arrivals-filters__search-bar", placeholder: t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'cfda4630c7d3f34bb1a68ed5f65a3757696dcada', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

export { IrArrivalsFilters as ir_arrivals_filters };
