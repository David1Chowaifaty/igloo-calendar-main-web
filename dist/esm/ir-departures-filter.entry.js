import { r as registerInstance, h } from './index-CeHdrJeH.js';
import { s as setDeparturesSearchTerm, d as departuresStore, a as setDeparturesReferenceDate } from './departures.store-BrkgO7KD.js';
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

const irDeparturesFilterCss = () => `.sc-ir-departures-filter-h{display:block}.sc-ir-departures-filter-h{display:block}.departures-filters__container.sc-ir-departures-filter{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.departures-filters__container.sc-ir-departures-filter{flex-direction:row;align-items:center}.departures-filters__container.sc-ir-departures-filter>*.sc-ir-departures-filter{flex:1 1 0%}.departures-filters__date-picker.sc-ir-departures-filter{max-width:200px}.departures-filters__search-bar.sc-ir-departures-filter{max-width:400px}}`;

const IrDeparturesFilter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '2bf5e8ffb2e9f799e9cba260d50e6035ddf6c1d6', class: "departures-filters__container" }, h("ir-date-select", { key: 'cb9086d2f9f74ee3d9b151c707963db0b23c7548', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: 'cda32ac238fd15c8561a6a0e3814d7af770d8c5c', name: "calendar", slot: "start" })), h("ir-input", { key: 'c4402e8f7667bd15b9b6a85c15fb7ff145590444', withClear: true, class: "departures-filters__search-bar", placeholder: t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'f4e7eab1f605fb0e5c2ec61f69ea83932c9f8751', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

export { IrDeparturesFilter as ir_departures_filter };
