import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const IrGhsCandidateTable = /*@__PURE__*/ proxyCustomElement(class IrGhsCandidateTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.toggleSelection = createEvent(this, "toggleSelection", 7);
        this.toggleAll = createEvent(this, "toggleAll", 7);
    }
    properties = [];
    countries = [];
    selectedCountryId = null;
    selectedProperties = [];
    isLoading = false;
    searchQuery = '';
    toggleSelection;
    toggleAll;
    render() {
        const countryName = this.countries.find(c => c.id === this.selectedCountryId)?.name || 'All';
        const selectedIds = this.selectedProperties.map(p => p.AC_ID);
        const allVisibleSelected = this.properties.length > 0 && this.properties.every(p => selectedIds.includes(p.AC_ID));
        return (h("div", { key: '27403346cfe8885af139553c280fd19cbaf5099f', class: "card mb-0 overflow-hidden shadow-sm border-0 position-relative", style: { flex: '1 1 0', minWidth: '0' } }, h("div", { key: 'fb8f7bcc1dde73cd61ecac3b79fd6a707b6e76e1', class: "card-header bg-white py-2 px-3 border-bottom d-flex align-items-center gap-3" }, h("h3", { key: 'bedc3b0eccd5e35c9e0f19bb1d49fa7bba9a324f', class: "h6 fw-bold mb-0 text-dark flex-grow-1 text-nowrap" }, "Candidate properties", h("span", { key: '3333cf24f6514322750948a625a275a0bf1dd952', class: "text-muted extra-small ms-2 fw-normal" }, "(", countryName, ")")), h("div", { key: '6b0b462465798b6f676ee2b820cd22e2d3424245', style: { width: '180px' } }, h("ir-input", { key: 'f05a6052d44ec6d2650962d679e74444a42d8f3d', size: "small", placeholder: "Search aname...", value: this.searchQuery, "onText-change": (e) => {
                this.searchQuery = e.detail;
            } }, h("wa-icon", { key: '610c6b2d99202f3fa47e655289218f6540a6f979', name: "search", slot: "start", style: { fontSize: '12px' } })))), h("div", { key: 'fcb0f319dcc91266a8e09dddb4f316a56e5b700b', class: "card-body p-0 position-relative overflow-auto", style: { maxHeight: '600px', minHeight: '400px' } }, this.isLoading && (h("div", { key: 'd4361916a944a48f0b149c09beb24ccb8851b741', class: "loading-overlay position-absolute w-100 h-100 d-flex align-items-center justify-content-center bg-white bg-opacity-50 z-index-2" }, h("ir-spinner", { key: '26f932fe7dcb1e46228b5b70c7b8d6e38a95990d' }))), h("div", { key: '1c14d6fcdf144bde8ff1147a35e126dd216c748a', class: "table-container p-0 m-0 table-responsive bg-white overflow-auto" }, this.isLoading && this.properties.length === 0 ? (h("div", { class: "d-flex align-items-center justify-content-center p-5", style: { minHeight: '300px' } }, h("ir-spinner", null))) : (h("table", { class: "table align-middle mb-0 w-100", style: { tableLayout: 'fixed', minWidth: '380px' } }, h("thead", null, h("tr", { class: "table-header bg-light" }, h("th", { class: "text-center py-1", style: { width: '30px' } }, this.properties.length > 0 && (h("div", { class: "d-flex align-items-center justify-content-center" }, h("wa-checkbox", { checked: allVisibleSelected, indeterminate: this.selectedProperties.length > 0 && !allVisibleSelected, onchange: (e) => {
                this.toggleAll.emit(e.target.checked);
            }, disabled: this.properties.length === 0 })))), h("th", { class: "px-1 text-start py-1 extra-small fw-bold", style: { width: '70px' } }, "Country"), h("th", { class: "px-1 text-start py-1 extra-small fw-bold", style: { width: '60px' } }, "Level2"), h("th", { class: "px-1 text-start py-1 extra-small fw-bold", style: { width: '60px' } }, "Username"), h("th", { class: "px-1 text-start py-1 extra-small fw-bold", style: { width: '140px' } }, "Property name"))), h("tbody", null, this.properties
            .filter(p => !this.searchQuery || p.aname.toLowerCase().includes(this.searchQuery.toLowerCase()))
            .map(p => ({
            ...p,
            countryName: this.countries.find(c => c.id === p.COUNTRY_ID)?.name || 'Unknown',
        }))
            .sort((a, b) => {
            const countryCompare = a.countryName.localeCompare(b.countryName);
            if (countryCompare !== 0)
                return countryCompare;
            return (a.level2 || '').localeCompare(b.level2 || '');
        })
            .map(p => {
            return (h("tr", { class: "ir-table-row border-bottom", style: { cursor: 'pointer' }, onClick: () => {
                    this.toggleSelection.emit(p);
                } }, h("td", { class: "text-center py-1" }, h("div", { class: "d-flex align-items-center justify-content-center", onClick: (e) => e.stopPropagation() }, h("wa-checkbox", { checked: selectedIds.includes(p.AC_ID), onchange: (e) => {
                    e.stopPropagation();
                    this.toggleSelection.emit(p);
                } }))), h("td", { class: "px-1 text-muted text-start py-1 extra-small text-truncate", title: p.countryName }, p.countryName), h("td", { class: "px-1 text-muted text-start py-1 extra-small text-truncate", title: p.level2 }, p.level2), h("td", { class: "px-1 text-muted text-start py-1 extra-small text-truncate", title: p.aname }, p.aname), h("td", { class: "px-1 text-dark fw-bold text-start py-1 extra-small text-truncate", title: p.NAME }, p.NAME)));
        }), this.properties.length === 0 && (h("tr", null, h("td", { colSpan: 5, class: "text-center p-4 text-muted border-0 bg-white" }, h("p", { class: "mb-0 small" }, "No candidate properties found.")))))))))));
    }
}, [2, "ir-ghs-candidate-table", {
        "properties": [16],
        "countries": [16],
        "selectedCountryId": [2, "selected-country-id"],
        "selectedProperties": [16],
        "isLoading": [4, "is-loading"],
        "searchQuery": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-ghs-candidate-table", "ir-input", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-ghs-candidate-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrGhsCandidateTable);
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrGhsCandidateTable as I, defineCustomElement as d };

//# sourceMappingURL=ir-ghs-candidate-table2.js.map