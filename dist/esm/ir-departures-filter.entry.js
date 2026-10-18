import { r as registerInstance, h } from './index-DKZeCK8T.js';
import { s as setDeparturesSearchTerm, d as departuresStore, a as setDeparturesReferenceDate } from './departures.store-DIH0HoXd.js';
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

const irDeparturesFilterCss = () => `.sc-ir-departures-filter-h{display:block}.sc-ir-departures-filter-h{display:block}.departures-filters__container.sc-ir-departures-filter{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.departures-filters__container.sc-ir-departures-filter{flex-direction:row;align-items:center}.departures-filters__container.sc-ir-departures-filter>*.sc-ir-departures-filter{flex:1 1 0%}.departures-filters__date-picker.sc-ir-departures-filter{max-width:200px}.departures-filters__search-bar.sc-ir-departures-filter{max-width:400px}}`;

const IrDeparturesFilter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '33573db160aa974854dbbccd687c88b47d82b777', class: "departures-filters__container" }, h("ir-date-select", { key: '1f1e60a72c6cb396479737615934746dfa7282b6', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: '87dc4d9dda357dd8f0101c52155596f51069b656', name: "calendar", slot: "start" })), h("ir-input", { key: '212fad504ee475552da5b1781620d83d63342a94', withClear: true, class: "departures-filters__search-bar", placeholder: t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '539c214012a6607c886a7cb162817c17c4f6bb2f', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

export { IrDeparturesFilter as ir_departures_filter };
