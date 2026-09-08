import { r as registerInstance, h } from './index-BYqrdgY9.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store-Dm348FaP.js';
import { i as isRequestPending } from './ir-interceptor.store-CyWfUv6a.js';
import './utils-BShicg8f.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-DT3jrP3G.js';
import './index-CimhgHoX.js';
import './booking.dto-DpE31yhG.js';
import './type-D7rOPtKA.js';
import './ir-date-CLlijQNQ.js';
import './locales.store-BfROgg7a.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './t-CHttQIVe.js';

const irArrivalsFiltersCss = () => `.sc-ir-arrivals-filters-h{display:block}.arrivals-filters__container.sc-ir-arrivals-filters{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.arrivals-filters__container.sc-ir-arrivals-filters{flex-direction:row;align-items:center}.arrivals-filters__container.sc-ir-arrivals-filters>*.sc-ir-arrivals-filters{flex:1 1 0%}.arrivals-filters__date-picker.sc-ir-arrivals-filters{max-width:200px}.arrivals-filters__search-bar.sc-ir-arrivals-filters{max-width:400px}}`;

const IrArrivalsFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '15663196571ec9d42e608c6f7005fa1ca484646e', class: "arrivals-filters__container" }, h("ir-date-select", { key: '367caafdb64510db8183d4e5fafc464cf7f57ae9', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '0afb7fceaa187e3d061eeed83d7b8409bcf3c616', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: '93f53e00ad7ad88d8646d4e7805303b69b9a1156', slot: "end" })), h("ir-input", { key: 'b686cac98b3d49058779e9add508dd715c49babe', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'e73aa98d2d07345fafd56307d8597122936c4400', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

export { IrArrivalsFilters as ir_arrivals_filters };
