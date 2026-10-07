import { r as registerInstance, h } from './index-CeHdrJeH.js';
import { s as setDeparturesSearchTerm, d as departuresStore, a as setDeparturesReferenceDate } from './departures.store-CNDjqfzM.js';
import { t } from './t-BVYK64UG.js';
import './utils-VLa8HWRW.js';
import './moment-Mki5YqAR.js';
import './calendar-data-Cdv5kmxH.js';
import './locale-scope-CapRuPkM.js';
import './booking.dto-D-ACWjZx.js';
import './type-o1ai24d7.js';
import './types-Clk7NCXk.js';
import './ir-date-NNCOayR_.js';
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
        return (h("div", { key: '82e672e71f359940cc65c94ddf05ebc7e0cda9f5', class: "departures-filters__container" }, h("ir-date-select", { key: '80991cfe9c6fb5df6ef8f4a65bd04306454f4f08', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: 'f071fcfcb06d049fdefe22bbe99be6e6d6920c86', name: "calendar", slot: "start" })), h("ir-input", { key: '85e08cb4f63204202d3f7ba62c2b2b53d56ee326', withClear: true, class: "departures-filters__search-bar", placeholder: t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '00d5460025a9fb9ff48c09a0ce8c337a277fffaf', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

export { IrDeparturesFilter as ir_departures_filter };
