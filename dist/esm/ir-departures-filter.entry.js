import { r as registerInstance, h } from './index-BvoylR5O.js';
import { s as setDeparturesSearchTerm, d as departuresStore, a as setDeparturesReferenceDate } from './departures.store-B0CFc7OT.js';
import './utils-DE70XlzV.js';
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
        return (h("div", { key: 'b00297af880d355b739d8e1be269db675543e9ec', class: "departures-filters__container" }, h("ir-date-select", { key: '6e888d2f2e18ea471782e9c262f6fe57fb3cc061', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: '1fcf72ef4e8c36df9ed7f6a9cfa3b628507c3690', name: "calendar", slot: "start" })), h("ir-input", { key: '475f50029e3fc30b69ac05531bde47646de25018', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'cdb7a1d6a04d0772519457134e6408d999daef23', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

export { IrDeparturesFilter as ir_departures_filter };
