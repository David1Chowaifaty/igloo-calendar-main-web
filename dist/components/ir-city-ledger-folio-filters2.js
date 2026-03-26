import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { D as Debounce } from './debounce.js';
import { d as defineCustomElement$5 } from './ir-custom-button2.js';
import { d as defineCustomElement$4 } from './ir-custom-date-range2.js';
import { d as defineCustomElement$3 } from './ir-date-range-filter2.js';
import { d as defineCustomElement$2 } from './ir-date-select2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irCityLedgerFolioFiltersCss = ".sc-ir-city-ledger-folio-filters-h{display:block}.filters-bar.sc-ir-city-ledger-folio-filters{display:flex;align-items:stretch;border-radius:0.625rem;gap:0.5rem}.filters-bar__section.sc-ir-city-ledger-folio-filters{display:flex;align-items:center}.filters-bar__section--dates.sc-ir-city-ledger-folio-filters{gap:0.125rem;padding-inline:0.75rem 0.375rem;flex-shrink:0}.filters-bar__cal-icon.sc-ir-city-ledger-folio-filters{font-size:0.875rem;color:var(--wa-color-text-quiet, #9ca3af);flex-shrink:0;margin-inline-end:0.25rem}.filters-bar__date-picker.sc-ir-city-ledger-folio-filters::part(input-base){border:none !important;border-radius:0 !important;background:transparent !important;box-shadow:none !important;padding-inline:0.25rem;height:2rem;min-width:82px;font-size:0.8125rem}.filters-bar__date-picker--from.sc-ir-city-ledger-folio-filters{z-index:2}.filters-bar__date-picker--to[open].sc-ir-city-ledger-folio-filters{z-index:3}.filters-bar__quick-actions.sc-ir-city-ledger-folio-filters{display:flex;flex-direction:column;gap:0.5rem;padding-inline-start:1rem}.filters-bar__quick-action-btn.sc-ir-city-ledger-folio-filters{font-size:0.8125rem}.filters-bar__date-arrow.sc-ir-city-ledger-folio-filters{color:var(--wa-color-text-quiet, #9ca3af);font-size:0.75rem;user-select:none;flex-shrink:0;padding-inline:0.125rem}.filters-bar__section--status.sc-ir-city-ledger-folio-filters{gap:0.125rem;padding-inline:0.5rem;flex-shrink:0}.filters-bar__pill.sc-ir-city-ledger-folio-filters{display:inline-flex;align-items:center;padding:0.25rem 0.625rem;border:none;background:transparent;border-radius:0.375rem;font-size:0.8125rem;font-weight:500;color:var(--wa-color-text-quiet, #6b7280);cursor:pointer;white-space:nowrap;transition:background 0.1s ease,\n    color 0.1s ease;line-height:1;font-family:inherit}.filters-bar__pill--active.sc-ir-city-ledger-folio-filters{background:var(--wa-color-neutral-fill-quiet, #f3f4f6);color:var(--wa-color-text-normal, #111827)}.filters-bar__pill.sc-ir-city-ledger-folio-filters:hover:not(.filters-bar__pill--active){background:var(--wa-color-neutral-fill-quiet, #f9fafb);color:var(--wa-color-text-normal, #374151)}.filters-bar__section--search.sc-ir-city-ledger-folio-filters{flex:1;min-width:0;gap:0.5rem;padding-inline:0.75rem}.filters-bar__search-icon.sc-ir-city-ledger-folio-filters{font-size:0.875rem;color:var(--wa-color-text-quiet, #9ca3af);flex-shrink:0}.filters-bar__search-input.sc-ir-city-ledger-folio-filters{flex:1;min-width:0;border:none;outline:none;background:transparent;font-size:0.8125rem;color:var(--wa-color-text-normal, #111827);font-family:inherit;height:2rem;-webkit-appearance:none;appearance:none}.filters-bar__search-input.sc-ir-city-ledger-folio-filters::placeholder{color:var(--wa-color-text-quiet, #9ca3af)}.filters-bar__search-input.sc-ir-city-ledger-folio-filters::-webkit-search-cancel-button{display:none}.filters-bar__icon-btn.sc-ir-city-ledger-folio-filters{display:inline-flex;align-items:center;justify-content:center;width:1.375rem;height:1.375rem;border:none;background:transparent;border-radius:50%;color:var(--wa-color-text-quiet, #9ca3af);cursor:pointer;padding:0;flex-shrink:0;transition:background 0.1s ease,\n    color 0.1s ease;font-size:0.6875rem;font-family:inherit}.filters-bar__icon-btn.sc-ir-city-ledger-folio-filters:hover{background:var(--wa-color-neutral-fill-quiet, #f3f4f6);color:var(--wa-color-text-normal, #374151)}.filters-bar__section--export.sc-ir-city-ledger-folio-filters{padding-inline:0.375rem;flex-shrink:0}.filters-bar__export-btn.sc-ir-city-ledger-folio-filters{display:inline-flex;align-items:center;gap:0.375rem;padding:0.375rem 0.625rem;border:none;background:transparent;border-radius:0.375rem;font-size:0.8125rem;font-weight:500;color:var(--wa-color-text-quiet, #6b7280);cursor:pointer;white-space:nowrap;transition:background 0.1s ease,\n    color 0.1s ease;font-family:inherit;height:calc(100% - 0.5rem);align-self:center}.filters-bar__export-btn.sc-ir-city-ledger-folio-filters:hover{background:var(--wa-color-neutral-fill-quiet, #f3f4f6);color:var(--wa-color-text-normal, #374151)}.filters-bar__export-chevron.sc-ir-city-ledger-folio-filters{font-size:0.6875rem;opacity:0.6}@media (max-width: 767px){.filters-bar.sc-ir-city-ledger-folio-filters{flex-direction:column;align-items:stretch}.filters-bar__sep.sc-ir-city-ledger-folio-filters{width:100%;height:1px;align-self:auto}.filters-bar__section.sc-ir-city-ledger-folio-filters{padding-inline:0.875rem;min-height:2.5rem}.filters-bar__section--status.sc-ir-city-ledger-folio-filters{flex-wrap:wrap;padding-block:0.375rem}.filters-bar__section--search.sc-ir-city-ledger-folio-filters{padding-inline:0.875rem}.filters-bar__section--export.sc-ir-city-ledger-folio-filters{padding-inline:0.875rem;padding-block:0.375rem}.filters-bar__export-btn.sc-ir-city-ledger-folio-filters{height:auto;padding-block:0.375rem}.filters-bar__date-picker.sc-ir-city-ledger-folio-filters::part(input-base){min-width:70px}}";
const IrCityLedgerFolioFiltersStyle0 = irCityLedgerFolioFiltersCss;

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
const IrCityLedgerFolioFilters = /*@__PURE__*/ proxyCustomElement(class IrCityLedgerFolioFilters extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.filtersChange = createEvent(this, "filtersChange", 7);
        this.addEntry = createEvent(this, "addEntry", 7);
    }
    dates = {
        from: hooks().subtract(30, 'days'),
        to: hooks(),
    };
    statusFilter = 'all';
    searchQuery = '';
    filtersChange;
    addEntry;
    componentDidLoad() {
        this.emitFilters();
    }
    statuses = [
        { value: 'all', label: 'All entries' },
        { value: 'billed', label: 'Billed' },
        { value: 'held', label: 'Held' },
        { value: 'unbilled', label: 'Unbilled' },
    ];
    toDateSelectRef;
    fromDateSelectRef;
    emitFilters() {
        this.filtersChange.emit({
            fromDate: this.dates?.from?.format('YYYY-MM-DD'),
            toDate: this.dates?.to?.format('YYYY-MM-DD'),
            status: this.statusFilter,
            search: this.searchQuery,
        });
    }
    emitFiltersDebounced() {
        this.emitFilters();
    }
    render() {
        return (h(Host, { key: 'f0cf9ab6c12662c8b63a1fc1515bb48308881caf' }, h("div", { key: '313a87b9f943cb1405e04aabec9da398f474c857', class: "filters-bar" }, h("ir-date-range-filter", { key: '16525e71ed178ca1c70e28bc5292da80b1f8982b', fromDate: this.dates.from?.format('YYYY-MM-DD'), toDate: this.dates.to?.format('YYYY-MM-DD'), onDatesChanged: e => {
                let newDates = {};
                let dates = e.detail;
                if (dates.from) {
                    newDates = { ...newDates, from: hooks(dates.from, 'YYYY-MM-DD') };
                }
                if (dates.to) {
                    newDates = { ...newDates, to: hooks(dates.to, 'YYYY-MM-DD') };
                }
                this.dates = { ...this.dates, ...newDates };
                this.emitFilters();
            }, style: { minWidth: '230px' } }), h("wa-select", { key: 'b5c7343d9799271095d2c7533018fb0d90aa0898', value: this.statusFilter, onchange: e => {
                this.statusFilter = e.target.value?.toString();
                this.emitFilters();
            }, "onwa-clear": () => {
                this.statusFilter = 'all';
                this.emitFilters();
            }, placeholder: "Status", size: "small", withClear: true }, this.statuses.map(s => (h("wa-option", { value: s.value, label: s.label }, s.label)))), h("ir-input", { key: '6ba5ce98c3b44bd8bdc729aeb39199a302d88ce3', "onText-change": e => {
                this.searchQuery = e.detail;
                this.emitFiltersDebounced();
            }, value: this.searchQuery, placeholder: "Booking# or doc number", withClear: true, style: { minWidth: '250px' } }, h("wa-icon", { key: '74a54e2c1f35c24009d925a97e301b5d4f23cd5d', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("wa-dropdown", { key: '332b094b9e431839a30b4320ea0269ea247f44b0' }, h("ir-custom-button", { key: 'da9d8884b445ac77f770bfdc53d9568df5f78cfe', slot: "trigger", appearance: "outlined", withCaret: true }, h("wa-icon", { key: 'a136f7e52a2a67dfa2a917c00fcf78c6c8f53fda', name: "download", slot: "start" }), h("span", { key: 'c3c8548fc91f9038cecdb79c36eab4a96c6e8613' }, "Export")), h("wa-dropdown-item", { key: '177f870f63006b13b3b9fdd7846c32b92d01e55d', value: "csv" }, h("wa-icon", { key: 'eaed8edf26b190280a46b4d15be82f2b6b0b3923', slot: "icon", name: "file-csv" }), "Export as CSV"), h("wa-dropdown-item", { key: 'b24788ddb3734ef24fd838dd3c91baa5bfbad9d4', value: "pdf" }, h("wa-icon", { key: '3f6fe5262711cbd9a3c3f814b576137b35257362', slot: "icon", name: "file-pdf" }), "Export as PDF"), h("wa-divider", { key: '16e7d19ff36824a5db0313e85cca5fc5bee09ce8' }), h("wa-dropdown-item", { key: '05ac88ce0f3b7a1728bb4c799cede5ab0fdded06', value: "print" }, h("wa-icon", { key: '18ea8af30f05c17a3259ff0f63406933f0775cb9', slot: "icon", name: "print" }), "Print Folio")), h("ir-custom-button", { key: 'b7c266e82265b7f7d4df196309210652320d8205', variant: "brand", appearance: "outlined", onClickHandler: () => this.addEntry.emit() }, "Add Entry"))));
    }
    static get style() { return IrCityLedgerFolioFiltersStyle0; }
}, [2, "ir-city-ledger-folio-filters", {
        "dates": [32],
        "statusFilter": [32],
        "searchQuery": [32]
    }]);
__decorate([
    Debounce(300)
], IrCityLedgerFolioFilters.prototype, "emitFiltersDebounced", null);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-city-ledger-folio-filters", "ir-custom-button", "ir-custom-date-range", "ir-date-range-filter", "ir-date-select", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-city-ledger-folio-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCityLedgerFolioFilters);
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

export { IrCityLedgerFolioFilters as I, defineCustomElement as d };

//# sourceMappingURL=ir-city-ledger-folio-filters2.js.map