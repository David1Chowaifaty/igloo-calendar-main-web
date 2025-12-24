import { r as registerInstance, h } from './index-b3dce66a.js';
import { s as setDeparturesSearchTerm, d as departuresStore, a as setDeparturesReferenceDate } from './departures.store-7b421a59.js';
import './booking-7c3fba5f.js';
import './moment-ab846cee.js';
import './index-1e1f097b.js';
import './axios-aa1335b8.js';
import './locales.store-f4150353.js';
import './index-a124d225.js';
import './calendar-data-8a36a1b2.js';

const irDeparturesFilterCss = ".sc-ir-departures-filter-h{display:block}.sc-ir-departures-filter-h{display:block}.departures-filters__container.sc-ir-departures-filter{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.departures-filters__container.sc-ir-departures-filter{flex-direction:row;align-items:center}.departures-filters__container.sc-ir-departures-filter>*.sc-ir-departures-filter{flex:1 1 0%}.departures-filters__date-picker.sc-ir-departures-filter{max-width:200px}.departures-filters__search-bar.sc-ir-departures-filter{max-width:400px}}";
const IrDeparturesFilterStyle0 = irDeparturesFilterCss;

const IrDeparturesFilter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '06f029af222a83bd12f9dc5d8da15f597c2959be', class: "departures-filters__container" }, h("ir-custom-date-picker", { key: '77ffbd88342008112db9634c9245f487bcfe2869', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: 'aa778474cb6c966b7e9c43379d2f159db4c45c9a', name: "calendar", slot: "start" })), h("ir-input", { key: '54ac6e0d893011f5ca4742c8ad759947928e78b7', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '9e46cface3f0636c9d6c1cd3ae100b14671aa2b4', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = IrDeparturesFilterStyle0;

export { IrDeparturesFilter as ir_departures_filter };

//# sourceMappingURL=ir-departures-filter.entry.js.map