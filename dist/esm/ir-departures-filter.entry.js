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
        return (h("div", { key: 'ed6846ff6d7e001567e17e2fc66413dc4d0025dc', class: "departures-filters__container" }, h("ir-date-select", { key: '7efdbd6ec848bd3aa09c0d4bcc4d8f7889f500d3', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: 'ef03e6525766a1a26ddd1db2d1ca5483d4bc6515', name: "calendar", slot: "start" })), h("ir-input", { key: 'ab08bfbb2f056dae29c60a4b4c5ed1751f030403', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '00ab076585747a9b95f90a84e557cee99fb07659', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

export { IrDeparturesFilter as ir_departures_filter };
