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
        return (h("div", { key: 'd6aa73d60a8a0029832463e5dd7acaf212ade963', class: "departures-filters__container" }, h("ir-custom-date-picker", { key: '08217f119d81998a860aa185c0ae6fdda76dcde1', class: "departures-filters__date-picker" }, h("wa-icon", { key: '609b7d2c9b559044301b54b4838071b6507087e8', name: "calendar", slot: "start" }), h("wa-spinner", { key: '7e2d59d62f0ee57f1a7b54e09fbe348b8b2b6fb5', slot: "end" })), h("ir-custom-input", { key: 'ee9bd8d7d267e063fe41303fd0d76f7deda7842f', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '00e4b8b9f23033fb22f82f0ddfe90fc31cb33941', name: "magnifying-glass", slot: "start" }))));
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