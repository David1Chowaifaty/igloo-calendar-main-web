import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { D as Debounce } from './debounce.js';
import { d as defineCustomElement$5 } from './ir-air-date-picker2.js';
import { d as defineCustomElement$4 } from './ir-custom-button2.js';
import { d as defineCustomElement$3 } from './ir-date-range-filter2.js';
import { d as defineCustomElement$2 } from './ir-date-select2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irCityLedgerFolioFiltersCss = ".sc-ir-city-ledger-folio-filters-h{display:block}.filters-bar.sc-ir-city-ledger-folio-filters{display:flex;flex-direction:column;align-items:stretch;gap:0.625rem}.filters-bar__dates.sc-ir-city-ledger-folio-filters{display:flex;align-items:center;width:100%}.filters-bar__date_picker.sc-ir-city-ledger-folio-filters{width:100%}.filters-bar__search-group.sc-ir-city-ledger-folio-filters{display:flex;align-items:center;gap:0.5rem;width:100%}.filters-bar__status-select.sc-ir-city-ledger-folio-filters{flex-shrink:0;min-width:110px}.filters-bar__search-input.sc-ir-city-ledger-folio-filters{flex:1;min-width:0}.filters-bar__search-icon.sc-ir-city-ledger-folio-filters{font-size:0.875rem;color:var(--wa-color-text-quiet, #9ca3af);flex-shrink:0}.filters-bar__actions.sc-ir-city-ledger-folio-filters{display:flex;align-items:center;gap:0.5rem;width:100%;justify-content:flex-end}@media (min-width: 640px){.filters-bar.sc-ir-city-ledger-folio-filters{flex-direction:row;flex-wrap:wrap;align-items:center;gap:0.5rem}.filters-bar__dates.sc-ir-city-ledger-folio-filters{width:100%;flex-shrink:0;min-width:0}.filters-bar__search-group.sc-ir-city-ledger-folio-filters{flex:1;min-width:0;width:auto}.filters-bar__status-select.sc-ir-city-ledger-folio-filters{min-width:130px;flex-shrink:0}.filters-bar__search-input.sc-ir-city-ledger-folio-filters{flex:1;min-width:0;max-width:400px}.filters-bar__actions.sc-ir-city-ledger-folio-filters{flex-shrink:0;width:auto;justify-content:flex-end}}@media (min-width: 768px){.filters-bar__search-input.sc-ir-city-ledger-folio-filters{min-width:160px;max-width:none;max-width:400px}}@media (min-width: 1024px){.filters-bar.sc-ir-city-ledger-folio-filters{flex-wrap:nowrap}.filters-bar__dates.sc-ir-city-ledger-folio-filters{width:auto;flex-shrink:0;min-width:280px}.filters-bar__search-group.sc-ir-city-ledger-folio-filters{flex:1;width:auto}.filters-bar__actions.sc-ir-city-ledger-folio-filters{width:auto;flex-shrink:0}}";
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
        this.applyFilters = createEvent(this, "applyFilters", 7);
        this.exportFolio = createEvent(this, "exportFolio", 7);
    }
    isExporting;
    dates = {
        from: undefined,
        to: undefined,
    };
    statusFilter = 'all';
    searchQuery = '';
    filtersChange;
    addEntry;
    applyFilters;
    exportFolio;
    componentDidLoad() {
        this.emitFilters();
    }
    statuses = [
        { value: 'all', label: 'All entries' },
        { value: 'billed', label: 'Billed' },
        { value: 'held', label: 'Held' },
        { value: 'unbilled', label: 'Unbilled' },
    ];
    emitFilters() {
        this.filtersChange.emit({
            fromDate: this.dates.from?.format('YYYY-MM-DD'),
            toDate: this.dates.to?.format('YYYY-MM-DD'),
            status: this.statusFilter,
            search: this.searchQuery,
        });
    }
    emitFiltersDebounced() {
        this.emitFilters();
    }
    render() {
        return (h(Host, { key: 'bbc3344a08cf1e09d9d58889c971e58455aff7ee' }, h("div", { key: 'bc5c7522f3bd48e967cd08059a57aff5025c2b91', class: "filters-bar" }, h("div", { key: 'fdd26373a75378a08829ae6b1be0df4f72f33a25', class: "filters-bar__dates" }, h("ir-date-range-filter", { key: 'b72170e354b7843e3311c39d6b3bad1c8057692a', maxDate: hooks().format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.dates.from?.format('YYYY-MM-DD') ?? undefined, toDate: this.dates.to?.format('YYYY-MM-DD') ?? undefined, onDatesChanged: e => {
                const { from, to } = e.detail;
                this.dates = {
                    from: from ? hooks(from, 'YYYY-MM-DD') : null,
                    to: to ? hooks(to, 'YYYY-MM-DD') : null,
                };
                this.emitFilters();
            } })), h("div", { key: '08bc178a4ba31b48d23112285e5fee238723f18f', class: "filters-bar__search-group" }, h("wa-select", { key: '30698045496fa76b8554ed07e2088beef5b9f45e', class: "filters-bar__status-select", value: this.statusFilter, onchange: e => {
                this.statusFilter = e.target.value?.toString();
                this.emitFilters();
            }, "onwa-clear": () => {
                this.statusFilter = 'all';
                this.emitFilters();
            }, placeholder: "Status", size: "small", withClear: true }, this.statuses.map(s => (h("wa-option", { value: s.value, label: s.label }, s.label)))), h("ir-input", { key: 'c3e7f9982f41d2332afec3bc319946ec6efae1f5', class: "filters-bar__search-input", "onText-change": e => {
                this.searchQuery = e.detail;
                this.emitFiltersDebounced();
            }, value: this.searchQuery, placeholder: "Booking# or doc number", withClear: true }, h("wa-icon", { key: '1a632c0ac316ad6dc3d2738d840f1e5efb520763', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: '10152861db5eaac957975c233b4e65c9331ac69f', variant: "neutral", appearance: "outlined", onClickHandler: () => this.applyFilters.emit({
                fromDate: this.dates.from?.format('YYYY-MM-DD'),
                toDate: this.dates.to?.format('YYYY-MM-DD'),
                status: this.statusFilter,
                search: this.searchQuery,
            }) }, h("wa-icon", { key: 'f4bc49b7a1b1e09d151ce20142d565f19a54f5ee', name: "magnifying-glass" }))), h("div", { key: '5ac639c58192696c106f9c9fd6206e87e22ecee1', class: "filters-bar__actions" }, h("ir-custom-button", { key: '3a5bdf28737a4ac0e2a5cd051ae71d52edb7fcda', loading: this.isExporting, appearance: "outlined", disabled: !this.dates.from && !this.dates.to, onClickHandler: () => this.exportFolio.emit() }, h("wa-icon", { key: '8d6e5cbb5e86cbc557d35e8fcd8ce04f5972443c', name: "download", slot: "start" }), h("span", { key: '00600e7862d9d14d4ec8f84d7352d80330ea1bad' }, "Export")), h("ir-custom-button", { key: '02656d59180755cb9d4c9c87acf725de856fb701', variant: "brand", appearance: "outlined", onClickHandler: () => this.addEntry.emit() }, "Add Entry")))));
    }
    static get style() { return IrCityLedgerFolioFiltersStyle0; }
}, [2, "ir-city-ledger-folio-filters", {
        "isExporting": [4, "is-exporting"],
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
    const components = ["ir-city-ledger-folio-filters", "ir-air-date-picker", "ir-custom-button", "ir-date-range-filter", "ir-date-select", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-city-ledger-folio-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCityLedgerFolioFilters);
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

export { IrCityLedgerFolioFilters as I, defineCustomElement as d };

//# sourceMappingURL=ir-city-ledger-folio-filters2.js.map