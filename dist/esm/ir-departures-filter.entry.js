import { r as registerInstance, h } from './index-Kqbk9HdW.js';
import { s as setDeparturesSearchTerm, d as departuresStore, a as setDeparturesReferenceDate } from './departures.store-CP9uKZIt.js';
import './utils-1xMAwYd7.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-Cd3WjpQE.js';
import './index-BJS0kaeV.js';
import './locales.store-C-PbJt6i.js';

const irDeparturesFilterCss = () => `.sc-ir-departures-filter-h{display:block}.sc-ir-departures-filter-h{display:block}.departures-filters__container.sc-ir-departures-filter{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.departures-filters__container.sc-ir-departures-filter{flex-direction:row;align-items:center}.departures-filters__container.sc-ir-departures-filter>*.sc-ir-departures-filter{flex:1 1 0%}.departures-filters__date-picker.sc-ir-departures-filter{max-width:200px}.departures-filters__search-bar.sc-ir-departures-filter{max-width:400px}}`;

const IrDeparturesFilter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '946970a8b3f950d4d63724c946a6c5b3fb8f09d7', class: "departures-filters__container" }, h("ir-date-select", { key: '7765aaf9e86a86d0851022477431b2822762cbcb', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: 'd022f3b764bc1355af9592c75d2f409c5008761b', name: "calendar", slot: "start" })), h("ir-input", { key: 'a16752848503186991be0f421d39eee81b3e61b3', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '4935058184399a85ae0e83f81a33999f81a25d38', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

export { IrDeparturesFilter as ir_departures_filter };
