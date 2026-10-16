import { r as registerInstance, h } from './index-CwWmK1sZ.js';
import { s as setDeparturesSearchTerm, d as departuresStore, a as setDeparturesReferenceDate } from './departures.store-C07T3Vix.js';
import './utils-DCUYWubA.js';
import './moment-Mki5YqAR.js';
import './calendar-data-zADniuy4.js';
import './index-BfixheT-.js';
import './locales.store-DN9FqlnV.js';
import './type-ByBjJ3uo.js';
import './types-Cvnhk41g.js';
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
        return (h("div", { key: 'ad657aa3c9caaa1b1c07abf643b5ca01fdca078d', class: "departures-filters__container" }, h("ir-date-select", { key: '35849304fa65bcb5a4b742b7751a289c5bad70b4', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: '741134e8947cbfb5f43bf392dfdc503a87d3636b', name: "calendar", slot: "start" })), h("ir-input", { key: '71cd4aebef952d96bb266998d34a731734730ff4', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '077abc6966b69813c9ddfbe94aaedfeb8d83de79', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

export { IrDeparturesFilter as ir_departures_filter };
