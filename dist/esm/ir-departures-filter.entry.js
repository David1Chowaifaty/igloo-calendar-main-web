import { r as registerInstance, h } from './index-b3dce66a.js';
import { s as setDeparturesSearchTerm, d as departuresStore, a as setDeparturesReferenceDate } from './departures.store-4b3aa02d.js';
import './utils-3047c015.js';
import './moment-ab846cee.js';
import './index-1e1f097b.js';
import './calendar-data-8a36a1b2.js';
import './index-a124d225.js';
import './locales.store-f4150353.js';
import './axios-aa1335b8.js';

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
        return (h("div", { key: '9360ec3bca38634830b90dd99daad3e1a0208358', class: "departures-filters__container" }, h("ir-custom-date-picker", { key: '22add53f3f7ea1f97dbe06cfb6aabb4d890b30ee', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: '19214889aaf1241f240ba472699a561164a4f590', name: "calendar", slot: "start" })), h("ir-input", { key: '92db617daf7aea39222110c2806bcdc8e48227e9', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '319c7d1a52b5f1e182712b42099d6fabdaa5d119', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = IrDeparturesFilterStyle0;

export { IrDeparturesFilter as ir_departures_filter };

//# sourceMappingURL=ir-departures-filter.entry.js.map