import { r as registerInstance, h } from './index-0Di74WDd.js';
import { s as setArrivalsSearchTerm, a as arrivalsStore, b as setArrivalsReferenceDate } from './arrivals.store--t0jW9xw.js';
import { i as isRequestPending } from './ir-interceptor.store-OTZhOdOP.js';
import './utils-BeklM4gy.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './calendar-data-wrvThdm8.js';
import './index-D9zfa7Bx.js';
import './locales.store-CPGnSUGJ.js';
import './booking.dto-DWti87Wx.js';
import './type-CBqEYOkK.js';

const irArrivalsFiltersCss = () => `.sc-ir-arrivals-filters-h{display:block}.arrivals-filters__container.sc-ir-arrivals-filters{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.arrivals-filters__container.sc-ir-arrivals-filters{flex-direction:row;align-items:center}.arrivals-filters__container.sc-ir-arrivals-filters>*.sc-ir-arrivals-filters{flex:1 1 0%}.arrivals-filters__date-picker.sc-ir-arrivals-filters{max-width:200px}.arrivals-filters__search-bar.sc-ir-arrivals-filters{max-width:400px}}`;

const IrArrivalsFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '567780a6efd25ca24398c2f8f555dcbd3b50dc1e', class: "arrivals-filters__container" }, h("ir-date-select", { key: '3161d57b8318ec9f09551f15bf25f70362ad2b7c', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '71dcd8512907be5e58e4d6672bde3103132e1232', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: '10032ffcce7422e558c002cbd7bc355be1e0b411', slot: "end" })), h("ir-input", { key: '510dbd69a19b47f3de05b7752306a4cbacae9b4e', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '3932066f3ce36979ccdb43d56322dfb3b244bf7d', name: "magnifying-glass", slot: "start" }))));
    }
};
IrArrivalsFilters.style = irArrivalsFiltersCss();

export { IrArrivalsFilters as ir_arrivals_filters };
