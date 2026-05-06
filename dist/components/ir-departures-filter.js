import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { c as setDeparturesSearchTerm, e as setDeparturesReferenceDate, d as departuresStore } from './departures.store.js';
import { d as defineCustomElement$3 } from './ir-custom-date-picker2.js';
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
        return (h("div", { key: '389626b6cd3235cca7763bc535a56b352f272f12', class: "departures-filters__container" }, h("ir-custom-date-picker", { key: 'd0723d4d46f4f00c52093cfd4887f9ec87d5a7f0', onDateChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                setDeparturesReferenceDate(e.detail.start.format('YYYY-MM-DD'));
            }, date: departuresStore.today, class: "departures-filters__date-picker" }, h("wa-icon", { key: '35ac18c4f014f54da8f19296afc769bc27bbc73c', name: "calendar", slot: "start" })), h("ir-input", { key: '7956cf5ed812e63396897a75e1f400551b07f129', withClear: true, class: "departures-filters__search-bar", placeholder: "Search guests or bookings", value: departuresStore.searchTerm, "onText-change": this.handleSearchChange }, h("wa-icon", { key: 'efd7d9905719fb25146c33598591d281bdf2ab51', name: "magnifying-glass", slot: "start" }))));
    }
    static get style() { return IrDeparturesFilterStyle0; }
}, [2, "ir-departures-filter"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-departures-filter", "ir-custom-date-picker", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-departures-filter":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDeparturesFilter$1);
            }
            break;
        case "ir-custom-date-picker":
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