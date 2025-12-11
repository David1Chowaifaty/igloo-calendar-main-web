import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as setArrivalsSearchTerm, e as setArrivalsReferenceDate, a as arrivalsStore } from './arrivals.store.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$2 } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$1 } from './ir-custom-input2.js';

const irArrivalsFiltersCss = ".sc-ir-arrivals-filters-h{display:block}.arrivals-filters__container.sc-ir-arrivals-filters{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.arrivals-filters__container.sc-ir-arrivals-filters{flex-direction:row;align-items:center}.arrivals-filters__container.sc-ir-arrivals-filters>*.sc-ir-arrivals-filters{flex:1 1 0%}.arrivals-filters__date-picker.sc-ir-arrivals-filters{max-width:200px}.arrivals-filters__search-bar.sc-ir-arrivals-filters{max-width:400px}}";
const IrArrivalsFiltersStyle0 = irArrivalsFiltersCss;

const IrArrivalsFilters = /*@__PURE__*/ proxyCustomElement(class IrArrivalsFilters extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    handleSearchChange = (event) => {
        setArrivalsSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '34549f8402830be91a2dae1dd0c974442a3a24ed', class: "arrivals-filters__container" }, h("ir-custom-date-picker", { key: 'a0c5410096bfa0a10350cd966d35247c75824a11', onDateChanged: e => setArrivalsReferenceDate(e.detail.start.format('YYYY-MM-DD')), date: arrivalsStore.today, class: "arrivals-filters__date-picker" }, h("wa-icon", { key: 'ba68dc7f503379a534ede9d02b976ca9ff861d61', name: "calendar", slot: "start" }), isRequestPending('/Get_Rooms_To_Check_in') && h("wa-spinner", { key: 'ec7719dec58d0f29a6975d35a2c7d5d93f022125', slot: "end" })), h("ir-custom-input", { key: 'af2fe2f1689f517fa31950d32bdcabccced25341', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'cba3428d6d2478176411d1e17cf902b983c6020b', name: "magnifying-glass", slot: "start" }))));
    }
    static get style() { return IrArrivalsFiltersStyle0; }
}, [2, "ir-arrivals-filters"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-arrivals-filters", "ir-custom-date-picker", "ir-custom-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-arrivals-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrArrivalsFilters);
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-custom-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrArrivalsFilters as I, defineCustomElement as d };

//# sourceMappingURL=ir-arrivals-filters2.js.map