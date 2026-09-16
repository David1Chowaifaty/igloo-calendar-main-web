import { r as registerInstance, h } from './index-CeHdrJeH.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store-CUZkg3al.js';
import { i as isRequestPending } from './ir-interceptor.store-302gZvQv.js';
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

const irArrivalsFiltersCss = () => `.sc-ir-arrivals-filters-h{display:block}.arrivals-filters__container.sc-ir-arrivals-filters{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.arrivals-filters__container.sc-ir-arrivals-filters{flex-direction:row;align-items:center}.arrivals-filters__container.sc-ir-arrivals-filters>*.sc-ir-arrivals-filters{flex:1 1 0%}.arrivals-filters__date-picker.sc-ir-arrivals-filters{max-width:200px}.arrivals-filters__search-bar.sc-ir-arrivals-filters{max-width:400px}}`;

const IrArrivalsFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: 'b43aaf8563021da6ccecd724143b83fcddf7b050', class: "arrivals-filters__container" }, h("ir-date-select", { key: 'd6173b77bdeec77ee28ee2406328077ee3e66b2e', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '7bae59ab1785df5d7f69792c6e3c245d805705ad', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: '3c65e9517b40ef9ad222cdf862b68c1eb791ef3b', slot: "end" })), h("ir-input", { key: '8aa3fd48e399bcb0e404a4021a7acb6929a8a505', withClear: true, class: "arrivals-filters__search-bar", placeholder: t('Lcz_SearchGuestsOrBookings', { fallback: 'Search guests or bookings' }), value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'd9e0886bb9cf13020a979503fe992bf9e067c699', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

export { IrArrivalsFilters as ir_arrivals_filters };
