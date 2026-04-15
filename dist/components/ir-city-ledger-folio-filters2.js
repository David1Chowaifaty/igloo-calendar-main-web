import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { D as Debounce } from './debounce.js';
import { d as defineCustomElement$5 } from './ir-air-date-picker2.js';
import { d as defineCustomElement$4 } from './ir-custom-button2.js';
import { d as defineCustomElement$3 } from './ir-date-range-filter2.js';
import { d as defineCustomElement$2 } from './ir-date-select2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irCityLedgerFolioFiltersCss = ".sc-ir-city-ledger-folio-filters-h{display:block}.filters-bar.sc-ir-city-ledger-folio-filters{display:flex;align-items:center;flex-wrap:wrap;gap:0.5rem}.filters-bar__dates.sc-ir-city-ledger-folio-filters{display:flex;align-items:center;flex-shrink:0;min-width:280px}.filters-bar__date_picker.sc-ir-city-ledger-folio-filters{width:100%}.filters-bar__search-group.sc-ir-city-ledger-folio-filters{display:flex;align-items:center;gap:0.5rem;flex:1;min-width:0}.filters-bar__status-select.sc-ir-city-ledger-folio-filters{flex-shrink:0;min-width:130px}.filters-bar__search-input.sc-ir-city-ledger-folio-filters{flex:1;min-width:0;max-width:400px}.filters-bar__search-icon.sc-ir-city-ledger-folio-filters{font-size:0.875rem;color:var(--wa-color-text-quiet, #9ca3af);flex-shrink:0}.filters-bar__actions.sc-ir-city-ledger-folio-filters{display:flex;align-items:center;gap:0.5rem;flex-shrink:0}@media (max-width: 767px){.filters-bar.sc-ir-city-ledger-folio-filters{flex-direction:column;align-items:stretch;gap:0.625rem}.filters-bar__dates.sc-ir-city-ledger-folio-filters{width:100%;min-width:0}.filters-bar__search-group.sc-ir-city-ledger-folio-filters{width:100}.filters-bar__status-select.sc-ir-city-ledger-folio-filters{min-width:110px;flex-shrink:0}.filters-bar__actions.sc-ir-city-ledger-folio-filters{width:100%;justify-content:flex-end}}";
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
    }
    dates = {
        from: undefined,
        to: undefined,
    };
    statusFilter = 'all';
    searchQuery = '';
    filtersChange;
    addEntry;
    applyFilters;
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
        return (h(Host, { key: 'ccaefc77af4f7bf6a46e3aaa53b8b87bca31fbd1' }, h("div", { key: '0448a0ecacfe0f6d6ef897ee2f4ff8914b2b2c9d', class: "filters-bar" }, h("div", { key: 'c2df70e8be2ccf7ee1a9f81c8c5e4f6bf8eceacc', class: "filters-bar__dates" }, h("ir-date-range-filter", { key: '8ce3798fbd5f3c1515b7db14cd5a5aa90e492de4', maxDate: hooks().format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.dates.from?.format('YYYY-MM-DD') ?? undefined, toDate: this.dates.to?.format('YYYY-MM-DD') ?? undefined, onDatesChanged: e => {
                const { from, to } = e.detail;
                this.dates = {
                    from: from ? hooks(from, 'YYYY-MM-DD') : null,
                    to: to ? hooks(to, 'YYYY-MM-DD') : null,
                };
                this.emitFilters();
            } })), h("div", { key: 'b76f0f173477c5fd9ac78e8bf1ff02b1ee071f5a', class: "filters-bar__search-group" }, h("wa-select", { key: '46468d3be241b594ba7e7e63f544dc7db32314bc', class: "filters-bar__status-select", value: this.statusFilter, onchange: e => {
                this.statusFilter = e.target.value?.toString();
                this.emitFilters();
            }, "onwa-clear": () => {
                this.statusFilter = 'all';
                this.emitFilters();
            }, placeholder: "Status", size: "small", withClear: true }, this.statuses.map(s => (h("wa-option", { value: s.value, label: s.label }, s.label)))), h("ir-input", { key: 'c4c63faf948673f98e8e5b0cadcb4411a769a5de', class: "filters-bar__search-input", "onText-change": e => {
                this.searchQuery = e.detail;
                this.emitFiltersDebounced();
            }, value: this.searchQuery, placeholder: "Booking# or doc number", withClear: true }, h("wa-icon", { key: '6ed2040127079ed00022451bbd690add78fe5de0', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: 'af41593730565490658a8d7a44d8ab989baf7fc8', variant: "neutral", appearance: "outlined", onClickHandler: () => this.applyFilters.emit({
                fromDate: this.dates.from?.format('YYYY-MM-DD'),
                toDate: this.dates.to?.format('YYYY-MM-DD'),
                status: this.statusFilter,
                search: this.searchQuery,
            }) }, h("wa-icon", { key: 'ca7655588c54c34659d0b2c955e5841dfac2f342', name: "magnifying-glass" }))), h("div", { key: 'f97cd824b61797f69be615b5c11d899c8cfcf917', class: "filters-bar__actions" }, h("wa-dropdown", { key: '8ee72c6562bcb071f48ff081cc202325baee871b' }, h("ir-custom-button", { key: '1fa7eae8c87f2c2ef3f7cb8595a50925b6de4f9f', slot: "trigger", appearance: "outlined", withCaret: true }, h("wa-icon", { key: '5e5b000297a40a79a315ce56a5558bdd5f7e4185', name: "download", slot: "start" }), h("span", { key: 'dc1e7155d63b91c90c71050faf1d928d1a5b6d6e' }, "Export")), h("wa-dropdown-item", { key: 'be3cfb9ca2a461595e42a5f81bce7b7fa7f5604c', value: "csv" }, h("wa-icon", { key: '613b9e7ca6f37a122a03cbc99c41cd8ef5a2816c', slot: "icon", name: "file-csv" }), "Export as CSV"), h("wa-dropdown-item", { key: '5033dc4bff7ba117a1fc241f7497204eee45070c', value: "pdf" }, h("wa-icon", { key: 'ab8a2a69ff528ec971c993b8839c49dc5694f56b', slot: "icon", name: "file-pdf" }), "Export as PDF"), h("wa-divider", { key: 'd08ec315710d06bb4c5f8c5d2f3069a8f2ac213d' }), h("wa-dropdown-item", { key: '74b895dc00b68b3df0f598b9949c89e7c595bb44', value: "print" }, h("wa-icon", { key: '535f64d17f88c449e5fc20c05e846d9742348697', slot: "icon", name: "print" }), "Print Folio")), h("ir-custom-button", { key: '36624f8172f5067093a8d25102fb4577fb6e6364', variant: "brand", appearance: "outlined", onClickHandler: () => this.addEntry.emit() }, "Add Entry")))));
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