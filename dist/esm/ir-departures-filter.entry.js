import { r as registerInstance, h } from './index-DKZeCK8T.js';
import { s as setDeparturesSearchTerm, d as departuresStore, a as setDeparturesReferenceDate } from './departures.store-DOE_VU6V.js';
import { t } from './t-Bvz1wS_D.js';
import './room-movement-time-DWm_ef3q.js';
import './moment-Mki5YqAR.js';
import './utils-C5T893Le.js';
import './calendar-data-D4DbXAhg.js';
import './locale-scope-Jre4lb6k.js';
import './booking.dto-VzFWIl64.js';
import './type-B1KlYN_1.js';
import './types-DFSK8b1u.js';
import './ir-date-CY_qGQ63.js';
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
        return (h("div", { key: '2ca74a256e42e963d8ed1babed741d7bcb874a71', class: "departures-filters__container" }, h("ir-date-select", { key: '3a82b98eeefc41f380719bf865a63f2f98092ae0', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: '5f0f2bb05e2e103141a671e429cead58a878bdc6', name: "calendar", slot: "start" })), h("ir-input", { key: 'ffe6e20c467426153c8201da606231d18f3f1c33', withClear: true, class: "departures-filters__search-bar", placeholder: t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '43aa8bf635b3096627ff99e3be789c9acbd353d7', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

export { IrDeparturesFilter as ir_departures_filter };
