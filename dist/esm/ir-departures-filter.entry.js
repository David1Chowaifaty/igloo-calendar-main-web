import { r as registerInstance, h } from './index-Kqbk9HdW.js';
import { s as setDeparturesSearchTerm, d as departuresStore, a as setDeparturesReferenceDate } from './departures.store-C4UnVlVw.js';
import './utils-k8E2pDGf.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-MrKyEgFn.js';
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
        return (h("div", { key: 'b8c5f55a186f9db6b9db95833ae2ec23d5aabf61', class: "departures-filters__container" }, h("ir-date-select", { key: 'a9c0246bfb115d3b2bf731d73b98255b9146de6f', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: 'eb45af6dfe88f89a92ec13fcdab1ef5163b529f0', name: "calendar", slot: "start" })), h("ir-input", { key: '634e430f5f4ae58f59636c9546bd7f3d04275cd1', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'a93e0391ccd298f58e93820aba5e1f507421ac46', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

export { IrDeparturesFilter as ir_departures_filter };
