import { r as registerInstance, h } from './index-CeHdrJeH.js';
import { s as setDeparturesSearchTerm, d as departuresStore, a as setDeparturesReferenceDate } from './departures.store-Cj-hxFQl.js';
import { t } from './t-CHjay2ar.js';
import './utils-LYNfNy1h.js';
import './moment-Mki5YqAR.js';
import './calendar-data-CiYzaNK0.js';
import './locales.store-CXJn6ls-.js';
import './booking.dto-xX-uaIxb.js';
import './type-DahsFfOq.js';
import './types-BWKgfE54.js';
import './ir-date-tLkbTntq.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';

const irDeparturesFilterCss = () => `.sc-ir-departures-filter-h{display:block}.sc-ir-departures-filter-h{display:block}.departures-filters__container.sc-ir-departures-filter{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.departures-filters__container.sc-ir-departures-filter{flex-direction:row;align-items:center}.departures-filters__container.sc-ir-departures-filter>*.sc-ir-departures-filter{flex:1 1 0%}.departures-filters__date-picker.sc-ir-departures-filter{max-width:200px}.departures-filters__search-bar.sc-ir-departures-filter{max-width:400px}}`;

const IrDeparturesFilter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '475f978df73afa91888616f2fe5ba3fe10d3e660', class: "departures-filters__container" }, h("ir-date-select", { key: '33abe07654fb4af3af14d28efa00d751e9e7e099', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: '1823cfba3150236f2447fd2fea666f033c8e83bd', name: "calendar", slot: "start" })), h("ir-input", { key: '2ebfa96337d73619613f8512aa6c07ac385802b4', withClear: true, class: "departures-filters__search-bar", placeholder: t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'eee140ce9b1b5c7259e65bceef8fa44deeec821e', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

export { IrDeparturesFilter as ir_departures_filter };
