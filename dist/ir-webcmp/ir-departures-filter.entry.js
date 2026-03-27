import { r as registerInstance, h } from './index-7b3961ed.js';
import { s as setDeparturesSearchTerm, a as setDeparturesReferenceDate, d as departuresStore } from './departures.store-5f6d2cae.js';
import './utils-7eaed9ad.js';
import './moment-ab846cee.js';
import './index-40c31d5b.js';
import './calendar-data-cdc01d0d.js';
import './index-17663a35.js';
import './locales.store-daef23cc.js';

const irDeparturesFilterCss = ".sc-ir-departures-filter-h{display:block}.sc-ir-departures-filter-h{display:block}.departures-filters__container.sc-ir-departures-filter{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.departures-filters__container.sc-ir-departures-filter{flex-direction:row;align-items:center}.departures-filters__container.sc-ir-departures-filter>*.sc-ir-departures-filter{flex:1 1 0%}.departures-filters__date-picker.sc-ir-departures-filter{max-width:200px}.departures-filters__search-bar.sc-ir-departures-filter{max-width:400px}}";

const IrDeparturesFilter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: 'ae8759dd61bce6a80313279f3d563f7eb37b8f83', class: "departures-filters__container" }, h("ir-custom-date-picker", { key: '3c8b13ef70ee4453f79ebe68b2fd8dcb8b1ed183', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: 'e383148c5fad5a0b753a84caa147aa677f549cb9', name: "calendar", slot: "start" })), h("ir-input", { key: 'e081cb88d03f170c0355f926c50bedb7d457a5c4', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '6f9d05c8e26460dfb9b67c88c5e0dbcf46b351ee', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss;

export { IrDeparturesFilter as ir_departures_filter };

//# sourceMappingURL=ir-departures-filter.entry.js.map