import { r as registerInstance, h } from './index-CeHdrJeH.js';
import { s as setDeparturesSearchTerm, d as departuresStore, a as setDeparturesReferenceDate } from './departures.store-D8R8QQXh.js';
import { t } from './t-Bk78Wumj.js';
import './utils-BtgW0txG.js';
import './moment-Mki5YqAR.js';
import './calendar-data-BZeaTRgj.js';
import './locales.store-CXJn6ls-.js';
import './booking.dto-FOZcMojD.js';
import './type-DUaIPoJQ.js';
import './types-BG9uwIsj.js';
import './ir-date-DFR8GVLZ.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';

const irDeparturesFilterCss = () => `.sc-ir-departures-filter-h{display:block}.sc-ir-departures-filter-h{display:block}.departures-filters__container.sc-ir-departures-filter{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.departures-filters__container.sc-ir-departures-filter{flex-direction:row;align-items:center}.departures-filters__container.sc-ir-departures-filter>*.sc-ir-departures-filter{flex:1 1 0%}.departures-filters__date-picker.sc-ir-departures-filter{max-width:200px}.departures-filters__search-bar.sc-ir-departures-filter{max-width:400px}}`;

const IrDeparturesFilter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '2879be9303157c333341c55c03a01707cf42d320', class: "departures-filters__container" }, h("ir-date-select", { key: '0be7ee86f9dbf2e42c223ca8e0b8cdb37a49caa3', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: 'ad7e1356d8dc1cc36b9c55200e60386912ee94ed', name: "calendar", slot: "start" })), h("ir-input", { key: 'eac8b6809d55e50977d82ebe4233abf14a964833', withClear: true, class: "departures-filters__search-bar", placeholder: t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'b3778e0d19ed0299bc5dcd01c99fcc859abadd99', name: "magnifying-glass", slot: "start" }))));
    }
};
IrDeparturesFilter.style = irDeparturesFilterCss();

export { IrDeparturesFilter as ir_departures_filter };
