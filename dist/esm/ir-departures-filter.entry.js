import { r as registerInstance, h } from './index-D8DCR0yx.js';
import { s as setDeparturesSearchTerm, d as departuresStore, a as setDeparturesReferenceDate } from './departures.store-BvZjH8ng.js';
import './utils-1CCVam5W.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-BIZ201rH.js';
import './index-D5oXdmCj.js';
import './locales.store-ChFOK43k.js';
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
        return (h("div", { key: 'df2d885d1c1cdf12992efae8e17cd4c5908e3fdb', class: "departures-filters__container" }, h("ir-date-select", { key: '2c2772586591c886ae74bc479d5e70fef3178c4d', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: '287f8e10ab1fdedd7341cb7f272dc16987bb954d', name: "calendar", slot: "start" })), h("ir-input", { key: 'e041607dac23f2c431480a0d5cc7103a9b3134e1', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '06023fb285f3e31a823ac4adc2514e46744a5192', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

export { IrDeparturesFilter as ir_departures_filter };
