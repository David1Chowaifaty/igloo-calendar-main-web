import { r as registerInstance, h } from './index-BvoylR5O.js';
import { s as setDeparturesSearchTerm, d as departuresStore, a as setDeparturesReferenceDate } from './departures.store-wa-hIuwi.js';
import './utils-BDVP7IDp.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-Cnv5ncgJ.js';
import './index-U7zaiBri.js';
import './locales.store-BZFQn8-s.js';
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
        return (h("div", { key: '175f40e9e137130aefd25474a358bfc9c120e43c', class: "departures-filters__container" }, h("ir-date-select", { key: 'b010856658177d6ce62f6a2dc99284e8a0af2336', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: '62330a2e5c0a3fa208ea71a95279837fd442422a', name: "calendar", slot: "start" })), h("ir-input", { key: 'c0215267fb05528cd1c213d5d3609ca945e4be9b', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'b757f091c7f700d7a626f8ac2e448dc2e9d65250', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

export { IrDeparturesFilter as ir_departures_filter };
