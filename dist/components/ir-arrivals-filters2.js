import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { s as setArrivalsSearchTerm, a as arrivalsStore } from './arrivals.store.js';
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
        return (h("div", { key: '0171c9ef7b65be7b832084bb6addbb6fdc747eaf', class: "arrivals-filters__container" }, h("ir-custom-date-picker", { key: '36e24a0e09f2cbf06a4c3387439b4f361ad4fe9e', class: "arrivals-filters__date-picker" }, h("wa-icon", { key: '2bf96818cbbd5d6e65ab4c34603ad91a94c324f0', name: "calendar", slot: "start" })), h("ir-custom-input", { key: '2980e2b2a5676b6f97fa76b6c6d61987beea07fd', withClear: true, class: "arrivals-filters__search-bar", placeholder: "Search guests or bookings", value: arrivalsStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '3cf891fde339c55ffa3b9538f63480e9b4ec19f7', name: "magnifying-glass", slot: "start" }))));
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