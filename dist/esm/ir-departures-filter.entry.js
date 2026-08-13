import { r as registerInstance, h } from './index-CaNXuIlM.js';
import { s as setDeparturesSearchTerm, d as departuresStore, a as setDeparturesReferenceDate } from './departures.store-Dcdvva4O.js';
import './utils-D3iMLGYK.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-DyW8sCZ4.js';
import './index-Cn49IR5D.js';
import './locales.store-VrM8jHuM.js';

const irDeparturesFilterCss = () => `.sc-ir-departures-filter-h{display:block}.sc-ir-departures-filter-h{display:block}.departures-filters__container.sc-ir-departures-filter{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.departures-filters__container.sc-ir-departures-filter{flex-direction:row;align-items:center}.departures-filters__container.sc-ir-departures-filter>*.sc-ir-departures-filter{flex:1 1 0%}.departures-filters__date-picker.sc-ir-departures-filter{max-width:200px}.departures-filters__search-bar.sc-ir-departures-filter{max-width:400px}}`;

const IrDeparturesFilter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: 'f2aced3235039c7249885c19e5c1dea15552ebc5', class: "departures-filters__container" }, h("ir-date-select", { key: 'df1e3d27ecbfec56edc08fc718c732403f76315e', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: '1d4f48e183536f3699ec79e7ccbede52b07d0bc7', name: "calendar", slot: "start" })), h("ir-input", { key: 'f6e20871f2e4d8a076bfb6c7b2484ad12e00e814', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '645d33bbf7dccd3b0b43dba0c5f8416b5e619277', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

export { IrDeparturesFilter as ir_departures_filter };
