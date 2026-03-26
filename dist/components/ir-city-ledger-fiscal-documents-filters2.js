import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './ir-custom-button2.js';
import { d as defineCustomElement$4 } from './ir-custom-date-range2.js';
import { d as defineCustomElement$3 } from './ir-date-range-filter2.js';
import { d as defineCustomElement$2 } from './ir-date-select2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irCityLedgerFiscalDocumentsFiltersCss = ".sc-ir-city-ledger-fiscal-documents-filters-h{display:block}.fiscal-filters.sc-ir-city-ledger-fiscal-documents-filters{display:flex;flex-wrap:wrap;justify-content:space-between;gap:1rem}.fiscal-filters__dates.sc-ir-city-ledger-fiscal-documents-filters,.fiscal-filters__search.sc-ir-city-ledger-fiscal-documents-filters{width:100%}.fiscal-filters__dates.sc-ir-city-ledger-fiscal-documents-filters{min-width:230px}@media (min-width: 640px){.fiscal-filters__dates.sc-ir-city-ledger-fiscal-documents-filters,.fiscal-filters__search.sc-ir-city-ledger-fiscal-documents-filters{width:fit-content}.fiscal-filters__left.sc-ir-city-ledger-fiscal-documents-filters{align-items:center}.fiscal-filters__search.sc-ir-city-ledger-fiscal-documents-filters{min-width:300px}}.fiscal-filters__left.sc-ir-city-ledger-fiscal-documents-filters{display:flex;flex-wrap:wrap;gap:0.75rem}.fiscal-filters__field.sc-ir-city-ledger-fiscal-documents-filters{display:flex;flex-direction:column;gap:0.375rem}.fiscal-filters__label.sc-ir-city-ledger-fiscal-documents-filters{font-size:0.75rem;color:var(--wa-color-text-quiet);font-weight:600}.fiscal-filters__input.sc-ir-city-ledger-fiscal-documents-filters{height:2.125rem;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);border-radius:0.375rem;background-color:var(--wa-color-surface-default);color:var(--wa-color-text-normal);padding:0 0.625rem;font-size:0.875rem}.fiscal-filters__input.sc-ir-city-ledger-fiscal-documents-filters:focus-visible{outline:2px solid var(--wa-color-brand-border-normal);outline-offset:1px}.fiscal-filters__tax-switch.sc-ir-city-ledger-fiscal-documents-filters{display:inline-flex;align-items:center;gap:0.5rem;font-size:0.875rem;color:var(--wa-color-text-normal);font-weight:600;min-height:2.125rem;white-space:nowrap}.fiscal-filters__right.sc-ir-city-ledger-fiscal-documents-filters{display:flex;align-items:center;flex-wrap:wrap;gap:0.5rem}.fiscal-filters__meta.sc-ir-city-ledger-fiscal-documents-filters,.fiscal-filters__active.sc-ir-city-ledger-fiscal-documents-filters{font-size:0.8125rem;color:var(--wa-color-text-quiet);font-weight:600}.fiscal-filters__chips.sc-ir-city-ledger-fiscal-documents-filters{display:inline-flex;align-items:center;flex-wrap:wrap;gap:0.375rem}.fiscal-filters__chip.sc-ir-city-ledger-fiscal-documents-filters{height:1.875rem;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);border-radius:999px;padding:0 0.625rem;background-color:var(--wa-color-surface-default);color:var(--wa-color-text-normal);font-size:0.8125rem;font-weight:600;line-height:1;cursor:pointer}.fiscal-filters__chip.sc-ir-city-ledger-fiscal-documents-filters:hover{background-color:var(--wa-color-neutral-fill-quiet, #f1f2f3)}.fiscal-filters__chip--active.sc-ir-city-ledger-fiscal-documents-filters{border-color:var(--wa-color-brand-border-normal);color:var(--wa-color-brand-fill-loud);background-color:color-mix(in oklab, var(--wa-color-brand-fill-quiet) 40%, white)}@media (max-width: 1100px){.fiscal-filters__left.sc-ir-city-ledger-fiscal-documents-filters{grid-template-columns:repeat(2, minmax(180px, 1fr))}}@media (max-width: 768px){.fiscal-filters__left.sc-ir-city-ledger-fiscal-documents-filters{width:100%;grid-template-columns:1fr}.fiscal-filters__right.sc-ir-city-ledger-fiscal-documents-filters{width:100%}}";
const IrCityLedgerFiscalDocumentsFiltersStyle0 = irCityLedgerFiscalDocumentsFiltersCss;

const IrCityLedgerFiscalDocumentsFilters = /*@__PURE__*/ proxyCustomElement(class IrCityLedgerFiscalDocumentsFilters extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.filtersChange = createEvent(this, "filtersChange", 7);
    }
    filters = {
        fromDate: null,
        toDate: null,
        docNumber: '',
        taxableOnly: false,
        type: 'all',
    };
    filtersChange;
    typeOptions = [
        { label: 'All Document Types', value: 'all' },
        { label: 'Invoices', value: 'invoice' },
        { label: 'Receipts', value: 'receipt' },
        { label: 'Credit Notes', value: 'credit-note' },
        { label: 'Debit Notes', value: 'debit-note' },
    ];
    updateFilters(patch) {
        this.filtersChange.emit({
            ...this.filters,
            ...patch,
        });
    }
    render() {
        return (h("section", { key: '412923609635e4f2841591b7f047cee4aa279bba', class: "fiscal-filters", "aria-label": "Fiscal document filters" }, h("div", { key: 'c5fcea9aaf2846f5de9c2a18e7b950fe9e91bf63', class: "fiscal-filters__left" }, h("ir-date-range-filter", { key: 'ae015f5f712146241046080d95e0fd765f42bf93', class: "fiscal-filters__dates", fromDate: this.filters.fromDate, toDate: this.filters.toDate, onDatesChanged: e => this.updateFilters({ fromDate: e.detail.from, toDate: e.detail.to }) }), h("wa-select", { key: 'd3e93282a5b5a5240465ef23a99ed84890fed818', value: this.filters.type, defaultValue: this.filters.type, onchange: e => this.updateFilters({ type: e.target.value }), size: "small", placeholder: "Status" }, this.typeOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("ir-input", { key: '0ff833f04e689fb3015657408eba5df917b751a8', placeholder: "Search", class: "fiscal-filters__search" }, h("wa-icon", { key: '471ccf37650619e945ffd8813de42f4228d0c11b', name: "magnifying-glass", slot: "start" })), h("wa-switch", { key: 'ffe438b101cd074e327d90e862f6b92d5fb8c723', id: "tax-switch", checked: this.filters.taxableOnly, onchange: event => this.updateFilters({ taxableOnly: event.target.checked }) }, "Taxes"))));
    }
    static get style() { return IrCityLedgerFiscalDocumentsFiltersStyle0; }
}, [2, "ir-city-ledger-fiscal-documents-filters", {
        "filters": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-city-ledger-fiscal-documents-filters", "ir-custom-button", "ir-custom-date-range", "ir-date-range-filter", "ir-date-select", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-city-ledger-fiscal-documents-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCityLedgerFiscalDocumentsFilters);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-custom-date-range":
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