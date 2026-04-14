import { r as registerInstance, h } from './index-7e96440e.js';
import { s as setDeparturesSearchTerm, d as departuresStore, a as setDeparturesReferenceDate } from './departures.store-a7e71883.js';
import './utils-123be455.js';
import './moment-ab846cee.js';
import './index-87419685.js';
import './calendar-data-b1f645da.js';
import './index-f100e9d2.js';
import './locales.store-cb784e95.js';
import './type-f926f853.js';

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
        return (h("div", { key: '9e36095e53b0083e5f0f75e13dc90ecbcf63593f', class: "departures-filters__container" }, h("ir-custom-date-picker", { key: '0830f36d438add098a88c4a0fee5667e7982147c', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: '2a6fd1e9eb4b2b0636e55994f6110a68a5224410', name: "calendar", slot: "start" })), h("ir-input", { key: '5bf6d8e1b184a6043c13839372ea61a7eea491ad', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'fc9c46eb75e8a8f3070d93b60b5c51d0f9113230', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = IrDeparturesFilterStyle0;

export { IrDeparturesFilter as ir_departures_filter };

//# sourceMappingURL=ir-departures-filter.entry.js.map