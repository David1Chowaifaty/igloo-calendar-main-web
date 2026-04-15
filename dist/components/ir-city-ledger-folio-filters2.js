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
        return (h(Host, { key: 'd12946923492054212ca7afd65435706e7a4ad3e' }, h("div", { key: 'f6fc6b251659ffc2b2cc0a9bff668891b1d53441', class: "filters-bar" }, h("div", { key: '0822028b550fa9acb203c1c67216c4e2e8f477ca', class: "filters-bar__dates" }, h("ir-date-range-filter", { key: 'e80c60c827c57d84f4e407c9bf0852c739d2bb86', maxDate: hooks().format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.dates.from?.format('YYYY-MM-DD') ?? undefined, toDate: this.dates.to?.format('YYYY-MM-DD') ?? undefined, onDatesChanged: e => {
                const { from, to } = e.detail;
                this.dates = {
                    from: from ? hooks(from, 'YYYY-MM-DD') : null,
                    to: to ? hooks(to, 'YYYY-MM-DD') : null,
                };
                this.emitFilters();
            } })), h("div", { key: '47c466d22c3a43703aad7f85e009e29ddfd5f870', class: "filters-bar__search-group" }, h("wa-select", { key: '47d56116dddf696c14c68c45d42b84697564a84e', class: "filters-bar__status-select", value: this.statusFilter, onchange: e => {
                this.statusFilter = e.target.value?.toString();
                this.emitFilters();
            }, "onwa-clear": () => {
                this.statusFilter = 'all';
                this.emitFilters();
            }, placeholder: "Status", size: "small", withClear: true }, this.statuses.map(s => (h("wa-option", { value: s.value, label: s.label }, s.label)))), h("ir-input", { key: 'da0eec3e3566ddb48ee96ebe12ed77d95abde38c', class: "filters-bar__search-input", "onText-change": e => {
                this.searchQuery = e.detail;
                this.emitFiltersDebounced();
            }, value: this.searchQuery, placeholder: "Booking# or doc number", withClear: true }, h("wa-icon", { key: '9d2daa53aca31a9d38c56a431d65fb9aa50d6aed', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: '533932411dcb7f05d029abdb334a0bca12ebda01', variant: "neutral", appearance: "outlined", onClickHandler: () => this.applyFilters.emit({
                fromDate: this.dates.from?.format('YYYY-MM-DD'),
                toDate: this.dates.to?.format('YYYY-MM-DD'),
                status: this.statusFilter,
                search: this.searchQuery,
            }) }, h("wa-icon", { key: 'ed83ac48a244bde3b5d1a3b76e0982410e1d7043', name: "magnifying-glass" }))), h("div", { key: '200fcfcd2ed93faab0a2356feda47abf9cc248ec', class: "filters-bar__actions" }, h("wa-dropdown", { key: 'c47bfa38fe7c2e380802adb141d3a1c08d57ab83' }, h("ir-custom-button", { key: 'f9ba9841e2490ef75a991d3f1963ad104dc66325', slot: "trigger", appearance: "outlined", withCaret: true }, h("wa-icon", { key: '8f23d2bea0a9a41f69c35305d4c0e80f2964fdf5', name: "download", slot: "start" }), h("span", { key: '4b194569bbe80515a6025ddb982e5a79ce170d92' }, "Export")), h("wa-dropdown-item", { key: '45d6b1e13d168fa0e4311cacb173a0896e03b9c0', value: "csv" }, h("wa-icon", { key: '2cb702028f417e35a042824a7da64bda176deeb2', slot: "icon", name: "file-csv" }), "Export as CSV"), h("wa-dropdown-item", { key: '3d80776adcd1ec8f3bde68888102ec198fc63041', value: "pdf" }, h("wa-icon", { key: '30072d2d408055884387beb9d0a20965ae8599da', slot: "icon", name: "file-pdf" }), "Export as PDF"), h("wa-divider", { key: '6f86a333ef5c1bb96b399872b54311be213eab66' }), h("wa-dropdown-item", { key: '5acb0a7d0d3dc5e730fab4014256aee2979fadf9', value: "print" }, h("wa-icon", { key: 'f90ed4e2d7beca2323191671ae254a29065992f7', slot: "icon", name: "print" }), "Print Folio")), h("ir-custom-button", { key: '0d207cd055f9178243941e835cf8d5aeee7e1196', variant: "brand", appearance: "outlined", onClickHandler: () => this.addEntry.emit() }, "Add Entry")))));
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