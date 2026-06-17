import { r as registerInstance, h } from './index-0Di74WDd.js';
import { s as setDeparturesSearchTerm, d as departuresStore, a as setDeparturesReferenceDate } from './departures.store-oLpyS8fZ.js';
import './utils-BeklM4gy.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-wrvThdm8.js';
import './index-D9zfa7Bx.js';
import './locales.store-CPGnSUGJ.js';
import './booking.dto-DWti87Wx.js';
import './type-CBqEYOkK.js';

const irDeparturesFilterCss = () => `.sc-ir-departures-filter-h{display:block}.sc-ir-departures-filter-h{display:block}.departures-filters__container.sc-ir-departures-filter{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.departures-filters__container.sc-ir-departures-filter{flex-direction:row;align-items:center}.departures-filters__container.sc-ir-departures-filter>*.sc-ir-departures-filter{flex:1 1 0%}.departures-filters__date-picker.sc-ir-departures-filter{max-width:200px}.departures-filters__search-bar.sc-ir-departures-filter{max-width:400px}}`;

const IrDeparturesFilter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '3e54ce7ffe927042ceca7dcf570b4ad19b0f859b', class: "departures-filters__container" }, h("ir-date-select", { key: 'cc8712a47a348145b466ef297e4a78cf66fa52b6', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: '37213531a1862c037c678fc100830d7239a1fd02', name: "calendar", slot: "start" })), h("ir-input", { key: '47f509ac236ed24880bdf48957eec632c5f28959', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '46dcdb73e0c72d800b5d0ac598ce29e0c9e5e6b0', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

export { IrDeparturesFilter as ir_departures_filter };
