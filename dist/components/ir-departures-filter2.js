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
        return (h("div", { key: 'fd7c9a2da5fb11ac6fcf8c2f38f6fc81713b02f4', class: "departures-filters__container" }, h("ir-custom-date-picker", { key: '1820989a4a4541017205f4a5493733617ea45708', class: "departures-filters__date-picker" }, h("wa-icon", { key: 'a5044ab2d71deb0dc6da06290e02e6f61a315104', name: "calendar", slot: "start" }), h("wa-spinner", { key: '76cb9406e8797250ce7d577cb69bc7ab4fc9fc39', slot: "end" })), h("ir-custom-input", { key: '06691b0cadbc62f2a598376dd17c432e5ab5afa5', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'dcb83127c4e49758cb9b5be4ea24d4097e3e8ecf', name: "magnifying-glass", slot: "start" }))));
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