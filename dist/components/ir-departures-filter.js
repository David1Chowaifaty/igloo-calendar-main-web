import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { c as setDeparturesSearchTerm, e as setDeparturesReferenceDate, d as departuresStore } from './departures.store.js';
import { d as defineCustomElement$4 } from './ir-air-date-picker2.js';
import { d as defineCustomElement$3 } from './ir-date-select2.js';
import { d as defineCustomElement$2 } from './ir-input2.js';

const irDeparturesFilterCss = ".sc-ir-departures-filter-h{display:block}.sc-ir-departures-filter-h{display:block}.departures-filters__container.sc-ir-departures-filter{display:flex;flex-direction:column;gap:1rem}@media (min-width: 768px){.departures-filters__container.sc-ir-departures-filter{flex-direction:row;align-items:center}.departures-filters__container.sc-ir-departures-filter>*.sc-ir-departures-filter{flex:1 1 0%}.departures-filters__date-picker.sc-ir-departures-filter{max-width:200px}.departures-filters__search-bar.sc-ir-departures-filter{max-width:400px}}";
const IrDeparturesFilterStyle0 = irDeparturesFilterCss;

const IrDeparturesFilter$1 = /*@__PURE__*/ proxyCustomElement(class IrDeparturesFilter extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    handleSearchChange = (event) => {
        setDeparturesSearchTerm(event.detail ?? '');
    };
    render() {
        return (h("div", { key: '80649d93040b1f89bb4b5f834e1eef6c082eab00', class: "departures-filters__container" }, h("ir-date-select", { key: 'be31c1c7e49301829f6f074638c362d60884090a', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: 'b34a99d85108c47e3605175d63a544673d906a33', name: "calendar", slot: "start" })), h("ir-input", { key: '2f56a07fbd70594bb6340c763357b4b2b6518d7b', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'f5e266fdea811b0abf85108310e1cd9102ee7011', name: "magnifying-glass", slot: "start" }))));
    }
    static get style() { return IrDeparturesFilterStyle0; }
}, [2, "ir-departures-filter"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-departures-filter", "ir-air-date-picker", "ir-date-select", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-departures-filter":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDeparturesFilter$1);
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

const IrDeparturesFilter = IrDeparturesFilter$1;
const defineCustomElement = defineCustomElement$1;

export { IrDeparturesFilter, defineCustomElement };

//# sourceMappingURL=ir-departures-filter.js.map