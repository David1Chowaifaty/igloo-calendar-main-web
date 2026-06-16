import { r as registerInstance, h } from './index-DrVkW3Kc.js';
import { s as setDeparturesSearchTerm, d as departuresStore, a as setDeparturesReferenceDate } from './departures.store-DQJqYzob.js';
import './utils-CJFvKroT.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-CmdqrXAh.js';
import './index-DXObjBRn.js';
import './locales.store-CcwAwmT9.js';
import './type-D7rOPtKA.js';

const irDeparturesFilterCss = () => `.sc-ir-departures-filter-h{display:block}.sc-ir-departures-filter-h{display:block}.departures-filters__container.sc-ir-departures-filter{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.departures-filters__container.sc-ir-departures-filter{flex-direction:row;align-items:center}.departures-filters__container.sc-ir-departures-filter>*.sc-ir-departures-filter{flex:1 1 0%}.departures-filters__date-picker.sc-ir-departures-filter{max-width:200px}.departures-filters__search-bar.sc-ir-departures-filter{max-width:400px}}`;

const IrDeparturesFilter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '7fec2cac8bf5756cbf1f73f1f9dc561c8978a14c', class: "departures-filters__container" }, h("ir-date-select", { key: '3c2bcdc73eeb63281155d08eb0e3e298ab87e0a8', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: '81212dbf20e5c9513d9dfad313e91385c1cc418d', name: "calendar", slot: "start" })), h("ir-input", { key: 'ed4c6ca48daad8a01a9e283d3a4ca155ebde4250', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'b0f1878bea250a5f63714d86d84d49722e959de8', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

export { IrDeparturesFilter as ir_departures_filter };
