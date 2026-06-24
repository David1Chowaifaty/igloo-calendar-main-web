import { r as registerInstance, h } from './index-D7D7fhZS.js';
import { s as setDeparturesSearchTerm, d as departuresStore, a as setDeparturesReferenceDate } from './departures.store-BtOzp5s3.js';
import './utils-DvzWTdKJ.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-15-64PrB.js';
import './index-TzZ5wfUy.js';
import './locales.store-C0aS6UDK.js';
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
        return (h("div", { key: '916875c7470996739d1ae81fa87ccdbde4c8803a', class: "departures-filters__container" }, h("ir-date-select", { key: '2c42c3bbda1c21e3f3081aa10b572bb4a6fec51b', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: '35a1b0697ebb161492bbf0391081790473997559', name: "calendar", slot: "start" })), h("ir-input", { key: '971a949b4f53f734b4899350156d3fde2efd78db', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '8b35d7c21233ca44a82c1ffaedaf3e574c843fd8', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

export { IrDeparturesFilter as ir_departures_filter };
