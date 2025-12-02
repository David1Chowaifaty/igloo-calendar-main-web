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
        return (h("div", { key: 'e4d14ec80ba531876d2f68496381146bdaddfe73', class: "departures-filters__container" }, h("ir-custom-date-picker", { key: '594c8bb69c43c740615b6b4191e4b9651b369361', class: "departures-filters__date-picker" }, h("wa-icon", { key: '4ae766913dd33a84f36fa94ee0d72bbe305f9eb4', name: "calendar", slot: "start" }), h("wa-spinner", { key: 'c643df9d1d4a48b63fbefb121a753ca5fbdd93cf', slot: "end" })), h("ir-custom-input", { key: '60e888b175f8891ac44d5c2c6ddf84380a5f3668', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: '5276c7015b8db8046fdacb2c819c2a20c03f70ef', name: "magnifying-glass", slot: "start" }))));
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