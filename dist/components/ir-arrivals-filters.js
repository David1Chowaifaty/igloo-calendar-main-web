import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as setArrivalsSearchTerm, e as setArrivalsReferenceDate, a as arrivalsStore } from './arrivals.store.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$4 } from './ir-air-date-picker2.js';
import { d as defineCustomElement$3 } from './ir-date-select2.js';
import { d as defineCustomElement$2 } from './ir-input2.js';

const irArrivalsFiltersCss = ".sc-ir-arrivals-filters-h{display:block}.arrivals-filters__container.sc-ir-arrivals-filters{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.arrivals-filters__container.sc-ir-arrivals-filters{flex-direction:row;align-items:center}.arrivals-filters__container.sc-ir-arrivals-filters>*.sc-ir-arrivals-filters{flex:1 1 0%}.arrivals-filters__date-picker.sc-ir-arrivals-filters{max-width:200px}.arrivals-filters__search-bar.sc-ir-arrivals-filters{max-width:400px}}";
const IrArrivalsFiltersStyle0 = irArrivalsFiltersCss;

const IrArrivalsFilters$1 = /*@__PURE__*/ proxyCustomElement(class IrArrivalsFilters extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '843e44dbc3402b0596c4226bc7e3ef6e177beeb7', class: "arrivals-filters__container" }, h("ir-date-select", { key: '0bb67def7b1dab8f1bc19c46413cf2c82225b5bc', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '0a82029e9d8e46835b2b1c15f820ac6af7d6b0d9', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: 'd7475c214293bff7e745c0d1d4b3af08b5189233', slot: "end" })), h("ir-input", { key: '383381c12524649401f4bf332437f962f813cb92', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '67fb20a213ee046aaf526a1e47fb8cde243ced4b', name: "magnifying-glass", slot: "start" }))));
    }
    static get style() { return IrArrivalsFiltersStyle0; }
}, [2, "ir-arrivals-filters"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-arrivals-filters", "ir-air-date-picker", "ir-date-select", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-arrivals-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrArrivalsFilters$1);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrArrivalsFilters = IrArrivalsFilters$1;
const defineCustomElement = defineCustomElement$1;

export { IrArrivalsFilters, defineCustomElement };

//# sourceMappingURL=ir-arrivals-filters.js.map