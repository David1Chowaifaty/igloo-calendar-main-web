import { r as registerInstance, h } from './index-Kqbk9HdW.js';
import { s as setDeparturesSearchTerm, d as departuresStore, a as setDeparturesReferenceDate } from './departures.store-BT4vTHgM.js';
import './utils-ChAbsVix.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-BrVhDpXA.js';
import './index-BJS0kaeV.js';
import './locales.store-C-PbJt6i.js';
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
        return (h("div", { key: '8dd537ddd8add893cee88882dbf25bcb07ca1b68', class: "departures-filters__container" }, h("ir-date-select", { key: 'd3e412ff7d74e5431e600c8839c3ad315a88f53e', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: 'f4b6555862c09d6424e64c77db1dc522106d6e72', name: "calendar", slot: "start" })), h("ir-input", { key: '1588868fe65d278a1d0a7e4785af01fd7d9b5d28', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'ca3dbaad334f4cb34b2ca9c20f62ece51f5483a8', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

export { IrDeparturesFilter as ir_departures_filter };
