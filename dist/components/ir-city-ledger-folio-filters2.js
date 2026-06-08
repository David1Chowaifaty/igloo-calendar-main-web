import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { D as Debounce } from './debounce.js';
import { z } from './index2.js';
import { d as defineCustomElement$6 } from './ir-air-date-picker2.js';
import { d as defineCustomElement$5 } from './ir-custom-button2.js';
import { d as defineCustomElement$4 } from './ir-date-range-filter2.js';
import { d as defineCustomElement$3 } from './ir-date-select2.js';
import { d as defineCustomElement$2 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irCityLedgerFolioFiltersCss = ".sc-ir-city-ledger-folio-filters-h{display:block}.filters-bar.sc-ir-city-ledger-folio-filters{display:flex;flex-direction:column;align-items:stretch;gap:0.75rem}.filters-bar__dates.sc-ir-city-ledger-folio-filters{display:flex;align-items:center;width:100%}.filters-bar__date_picker.sc-ir-city-ledger-folio-filters{width:100%}.filters-bar__search-group.sc-ir-city-ledger-folio-filters{display:flex;align-items:center;gap:0.5rem;width:100%}.filters-bar__status-select.sc-ir-city-ledger-folio-filters{flex-shrink:0;min-width:110px}.filters-bar__search-input.sc-ir-city-ledger-folio-filters{flex:1;min-width:0}.filters-bar__search-icon.sc-ir-city-ledger-folio-filters{font-size:0.875rem;color:var(--wa-color-text-quiet, #9ca3af);flex-shrink:0}.filters-bar__actions.sc-ir-city-ledger-folio-filters{display:flex;align-items:center;gap:0.5rem;width:100%;justify-content:flex-end}@media (min-width: 640px){.filters-bar.sc-ir-city-ledger-folio-filters{flex-direction:row;flex-wrap:wrap;align-items:center;gap:0.75rem}.filters-bar__dates.sc-ir-city-ledger-folio-filters{width:100%;flex-shrink:0;min-width:0}.filters-bar__search-group.sc-ir-city-ledger-folio-filters{flex:1;min-width:0;width:auto}.filters-bar__status-select.sc-ir-city-ledger-folio-filters{min-width:130px;flex-shrink:0}.filters-bar__search-input.sc-ir-city-ledger-folio-filters{flex:1;min-width:0}.filters-bar__actions.sc-ir-city-ledger-folio-filters{flex-shrink:0;width:auto;justify-content:flex-end}}@media (min-width: 768px){.filters-bar__search-input.sc-ir-city-ledger-folio-filters{min-width:160px;max-width:none}}@media (min-width: 1024px){.filters-bar__search-input.sc-ir-city-ledger-folio-filters{max-width:250px}.filters-bar.sc-ir-city-ledger-folio-filters{flex-wrap:nowrap}.filters-bar__dates.sc-ir-city-ledger-folio-filters{width:auto;flex-shrink:0;min-width:280px}.filters-bar__search-group.sc-ir-city-ledger-folio-filters{flex:1;width:auto}.filters-bar__actions.sc-ir-city-ledger-folio-filters{width:auto;flex-shrink:0}}";
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
        return (h("form", { key: '2f50e2c5a0fd4e2465a9088d61cb50dd6116493c', onSubmit: e => {
                e.preventDefault();
                this.applyFilters.emit({
                    fromDate: this.dates.from?.format('YYYY-MM-DD'),
                    toDate: this.dates.to?.format('YYYY-MM-DD'),
                    status: this.statusFilter,
                    search: this.searchQuery,
                });
            } }, h("div", { key: 'eb0914fad32d2466ccdc6918341fabc50465f4b0', class: "filters-bar" }, h("ir-validator", { key: 'a58f1483fbac58565c02307a1085b6c62e0c2d2c', value: this.dates?.from?.format('YYYY-MM-DD') || this.dates?.to?.format('YYYY-MM-DD'), schema: z.string().nonempty(), class: "filters-bar__dates" }, h("ir-date-range-filter", { key: '992ff7a731de454bb06129fedeb633c75ba65fd5', maxDate: hooks().format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.dates.from?.format('YYYY-MM-DD') ?? undefined, toDate: this.dates.to?.format('YYYY-MM-DD') ?? undefined, onDatesChanged: e => {
                const { from, to } = e.detail;
                this.dates = {
                    from: from ? hooks(from, 'YYYY-MM-DD') : null,
                    to: to ? hooks(to, 'YYYY-MM-DD') : null,
                };
                this.emitFilters();
            } })), h("div", { key: '0a829e27cb6b50dab4d6f32245414cd54b76a091', class: "filters-bar__search-group" }, h("wa-select", { key: 'f703d6643c383f23b006c891cd7e07905f5afc31', class: "filters-bar__status-select", value: this.statusFilter, onchange: e => {
                this.statusFilter = e.target.value?.toString();
                this.emitFilters();
            }, "onwa-clear": () => {
                this.statusFilter = 'all';
                this.emitFilters();
            }, placeholder: "Status", size: "small", withClear: true }, this.statuses.map(s => (h("wa-option", { value: s.value, label: s.label }, s.label)))), h("ir-input", { key: '5753ec7aaea34deb5819d1f75ccb0f3e94694755', class: "filters-bar__search-input", "onText-change": e => {
                const wasCleared = this.searchQuery !== '' && e.detail === '';
                this.searchQuery = e.detail;
                if (wasCleared) {
                    this.applyFilters.emit({
                        fromDate: this.dates.from?.format('YYYY-MM-DD'),
                        toDate: this.dates.to?.format('YYYY-MM-DD'),
                        status: this.statusFilter,
                        search: '',
                    });
                }
                else {
                    this.emitFiltersDebounced();
                }
            }, onChange: () => {
                this.emitFiltersDebounced();
            }, onInputCleared: () => this.applyFilters.emit({
                fromDate: this.dates.from?.format('YYYY-MM-DD'),
                toDate: this.dates.to?.format('YYYY-MM-DD'),
                status: this.statusFilter,
                search: '',
            }), value: this.searchQuery, placeholder: "Booking# or doc number", withClear: true }, h("wa-icon", { key: 'c2a43087d21ab89f5b6cb40104adae3a363b6f1d', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: 'e32c75b4e0bc72d7b9abc80617e142cab3853e31', variant: "neutral", type: "submit", appearance: "outlined" }, h("wa-icon", { key: 'e8c6a8fd2555616844ad770ec104f569cee664ad', name: "magnifying-glass" }))), h("div", { key: '4ac3b3603667d222ea5432bf0241bceab573bfae', class: "filters-bar__actions" }, h("ir-custom-button", { key: '1a6b65eae1ebe949e6ba2b77bd69162166ff6858', loading: this.isExporting, appearance: "outlined", disabled: !this.dates.from && !this.dates.to, onClickHandler: () => this.exportFolio.emit() }, h("wa-icon", { key: 'f174a4c76ebacfe0cdd4d4059113b7523c46a128', name: "download", slot: "start" }), h("span", { key: 'a9520e405977f36e2c4926596f4605929e438748' }, "Export")), h("ir-custom-button", { key: '79470747669e0cf9b4f023e85a5f37cb987187f1', variant: "brand", appearance: "outlined", onClickHandler: () => this.addEntry.emit() }, "Add Entry")))));
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
    const components = ["ir-city-ledger-folio-filters", "ir-air-date-picker", "ir-custom-button", "ir-date-range-filter", "ir-date-select", "ir-input", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-city-ledger-folio-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCityLedgerFolioFilters);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-date-range-filter":
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
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrCityLedgerFolioFilters as I, defineCustomElement as d };

//# sourceMappingURL=ir-city-ledger-folio-filters2.js.map