import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { F as FdTypes } from './enums.js';
import { D as Debounce } from './debounce.js';
import { d as defineCustomElement$5 } from './ir-air-date-picker2.js';
import { d as defineCustomElement$4 } from './ir-custom-button2.js';
import { d as defineCustomElement$3 } from './ir-date-range-filter2.js';
import { d as defineCustomElement$2 } from './ir-date-select2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irCityLedgerFiscalDocumentsFiltersCss = ".sc-ir-city-ledger-fiscal-documents-filters-h{display:block}.filters-bar.sc-ir-city-ledger-fiscal-documents-filters{display:flex;flex-direction:column;align-items:stretch;gap:0.75rem}.filters-bar__dates.sc-ir-city-ledger-fiscal-documents-filters{display:flex;align-items:center;width:100%}.filters-bar__date_picker.sc-ir-city-ledger-fiscal-documents-filters{width:100%}.filters-bar__search-group.sc-ir-city-ledger-fiscal-documents-filters{display:flex;flex-wrap:wrap;align-items:center;gap:0.5rem;width:100%}.filters-bar__type-group.sc-ir-city-ledger-fiscal-documents-filters{display:flex;align-items:center;gap:0.75rem;width:100%}.filters-bar__status-select.sc-ir-city-ledger-fiscal-documents-filters{flex:1;min-width:0}.filters-bar__tax-switch.sc-ir-city-ledger-fiscal-documents-filters{flex-shrink:0;white-space:nowrap}.filters-bar__proforma-switch.sc-ir-city-ledger-fiscal-documents-filters{flex-shrink:0;white-space:nowrap}.filters-bar__search-input.sc-ir-city-ledger-fiscal-documents-filters{flex:1;min-width:0}.filters-bar__search-icon.sc-ir-city-ledger-fiscal-documents-filters{font-size:0.875rem;color:var(--wa-color-text-quiet, #9ca3af);flex-shrink:0}@media (min-width: 640px){.filters-bar.sc-ir-city-ledger-fiscal-documents-filters{flex-direction:row;flex-wrap:wrap;align-items:center;gap:0.75rem}.filters-bar__dates.sc-ir-city-ledger-fiscal-documents-filters{width:100%;flex-shrink:0;min-width:0}.filters-bar__search-group.sc-ir-city-ledger-fiscal-documents-filters{flex:1;flex-wrap:nowrap;min-width:0;width:auto}.filters-bar__type-group.sc-ir-city-ledger-fiscal-documents-filters{width:auto;flex-shrink:0}.filters-bar__status-select.sc-ir-city-ledger-fiscal-documents-filters{flex:none;min-width:160px}.filters-bar__search-input.sc-ir-city-ledger-fiscal-documents-filters{flex:1}}@media (min-width: 768px){.filters-bar__search-input.sc-ir-city-ledger-fiscal-documents-filters{min-width:160px}}@media (min-width: 1024px){.filters-bar__search-input.sc-ir-city-ledger-fiscal-documents-filters{max-width:250px}.filters-bar.sc-ir-city-ledger-fiscal-documents-filters{flex-wrap:nowrap}.filters-bar__dates.sc-ir-city-ledger-fiscal-documents-filters{width:auto;flex-shrink:0;min-width:280px}.filters-bar__search-group.sc-ir-city-ledger-fiscal-documents-filters{flex:1;width:auto}}";
const IrCityLedgerFiscalDocumentsFiltersStyle0 = irCityLedgerFiscalDocumentsFiltersCss;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const today = hooks();
const IrCityLedgerFiscalDocumentsFilters = /*@__PURE__*/ proxyCustomElement(class IrCityLedgerFiscalDocumentsFilters extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.filtersChange = createEvent(this, "filtersChange", 7);
        this.applyFilters = createEvent(this, "applyFilters", 7);
    }
    filters = {
        fromDate: undefined,
        toDate: undefined,
        docNumber: '',
        taxableOnly: false,
        type: 'all',
        proformaOnly: false,
    };
    docNumber = '';
    filtersChange;
    applyFilters;
    typeOptions = [
        { label: 'All Document Types', value: 'all' },
        { label: 'Invoices', value: FdTypes.Invoice },
        { label: 'Receipts', value: FdTypes.Receipt },
        { label: 'Credit Notes', value: FdTypes.CreditNote },
        { label: 'Debit Notes', value: FdTypes.DebitNote },
    ];
    updateFilters(patch) {
        this.filtersChange.emit({ ...this.filters, ...patch });
    }
    emitSearchDebounced(value) {
        this.updateFilters({ docNumber: value });
    }
    render() {
        return (h(Host, { key: '6b2c6933dd02b8488e3fd1aabf17de6f66803e3a' }, h("div", { key: 'fee0adde6f53f03e99a82af460d4747a35c64589', class: "filters-bar" }, h("div", { key: 'caaa027296bb40e4165054096e84a8f385fc76f9', class: "filters-bar__dates" }, h("ir-date-range-filter", { key: 'c30453951a359d57040cd3e6fa9cf47757c622d4', maxDate: today.format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.filters.fromDate, toDate: this.filters.toDate, onDatesChanged: e => this.updateFilters({ fromDate: e.detail.from, toDate: e.detail.to }) })), h("div", { key: '29bd01d7095c21ec17729b4683f2c1d8a69ed9f1', class: "filters-bar__search-group" }, h("div", { key: '5b55c2ff5320c1ee97a56d25363be1f58956e40f', class: "filters-bar__type-group" }, h("wa-select", { key: '6eef58e6332a6f96030790e6888ea04c9f7b701f', class: "filters-bar__status-select", value: this.filters.type, defaultValue: this.filters.type, onchange: e => this.updateFilters({ type: e.target.value }), size: "small", placeholder: "Document Type" }, this.typeOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("wa-switch", { key: 'de55e8c06e21d62e3a1b25b082c9f26eabde9aca', class: "filters-bar__tax-switch", checked: this.filters.taxableOnly, onchange: e => this.updateFilters({ taxableOnly: e.target.checked }) }, "Taxes"), h("wa-switch", { key: '0a53c1956b6093f2edb8c0a5a6cd6534142c8345', class: "filters-bar__proforma-switch", checked: this.filters.proformaOnly, onchange: e => {
                const updated = { ...this.filters, proformaOnly: e.target.checked };
                this.filtersChange.emit(updated);
                this.applyFilters.emit(updated);
            } }, "Pro forma")), h("ir-input", { key: 'e292091b7be0c893cfcdaa6617378bd73d43b4ee', class: "filters-bar__search-input", placeholder: "Search by doc number", value: this.docNumber, "onText-change": e => {
                this.docNumber = e.detail;
                this.emitSearchDebounced(e.detail);
            }, withClear: true }, h("wa-icon", { key: '940e0476e560db9b511c905951451f3ff19b396e', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: '449f6c2603a1b69b8b2c915d5ab98278ecb3d2e2', variant: "neutral", appearance: "outlined", onClickHandler: () => this.applyFilters.emit(this.filters) }, h("wa-icon", { key: '4c281afa64ce43f411a3abcf179701118e383d69', name: "magnifying-glass" }))))));
    }
    static get style() { return IrCityLedgerFiscalDocumentsFiltersStyle0; }
}, [2, "ir-city-ledger-fiscal-documents-filters", {
        "filters": [16],
        "docNumber": [32]
    }]);
__decorate([
    Debounce(300)
], IrCityLedgerFiscalDocumentsFilters.prototype, "emitSearchDebounced", null);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-city-ledger-fiscal-documents-filters", "ir-air-date-picker", "ir-custom-button", "ir-date-range-filter", "ir-date-select", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-city-ledger-fiscal-documents-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCityLedgerFiscalDocumentsFilters);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-date-range-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrCityLedgerFiscalDocumentsFilters as I, defineCustomElement as d };

//# sourceMappingURL=ir-city-ledger-fiscal-documents-filters2.js.map