import { r as registerInstance, h } from './index-JbQjGrUG.js';
import { s as setDeparturesSearchTerm, d as departuresStore, a as setDeparturesReferenceDate } from './departures.store-DHzrplDR.js';
import './utils-AafVtJtY.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-CRLrGQXE.js';
import './index-CR94o8Bs.js';
import './locales.store-CV07I3Cw.js';
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
        return (h("div", { key: '3739afe504612ea63b8a58c687fc83281f04117d', class: "departures-filters__container" }, h("ir-date-select", { key: '4dc42816bb235886df520f6be55e7d4bdec70cea', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: '3a8eec461c235d931744c7e66eeec9fb0c8ebc23', name: "calendar", slot: "start" })), h("ir-input", { key: 'e5eddf737b71fb301f5624cde7880ae9e45d28f1', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '68582610778cdbb2fc4c168ef86659bf2daf9382', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

export { IrDeparturesFilter as ir_departures_filter };
