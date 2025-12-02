import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { s as setDeparturesSearchTerm, d as departuresStore } from './departures.store.js';
import { d as defineCustomElement$2 } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$1 } from './ir-custom-input2.js';

const irDeparturesFilterCss = ".sc-ir-departures-filter-h{display:block}.sc-ir-departures-filter-h{display:block}.departures-filters__container.sc-ir-departures-filter{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.departures-filters__container.sc-ir-departures-filter{flex-direction:row;align-items:center}.departures-filters__container.sc-ir-departures-filter>*.sc-ir-departures-filter{flex:1 1 0%}.departures-filters__date-picker.sc-ir-departures-filter{max-width:200px}.departures-filters__search-bar.sc-ir-departures-filter{max-width:400px}}";
const IrDeparturesFilterStyle0 = irDeparturesFilterCss;

const IrDeparturesFilter = /*@__PURE__*/ proxyCustomElement(class IrDeparturesFilter extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '6b104cc60951d93fd6552d0e8403780f276722bd', class: "departures-filters__container" }, h("ir-custom-date-picker", { key: 'a69624c076aa85bc6180493a86870d08f22821a1', class: "departures-filters__date-picker" }, h("wa-icon", { key: '216271031ef9c5643ce80eb4a490e7a77e93ab6e', name: "calendar", slot: "start" }), h("wa-spinner", { key: '42d778d8cb68a52f54a221410c5b666b669e287d', slot: "end" })), h("ir-custom-input", { key: 'bbbaa474810da46b072f70ddb87400b2e0834481', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '0334b228fe92020e22d78868c03d1820ba3055dd', name: "magnifying-glass", slot: "start" }))));
    }
    static get style() { return IrDeparturesFilterStyle0; }
}, [2, "ir-departures-filter"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-departures-filter", "ir-custom-date-picker", "ir-custom-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-departures-filter":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDeparturesFilter);
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

export { IrDeparturesFilter as I, defineCustomElement as d };

//# sourceMappingURL=ir-departures-filter2.js.map