var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Host, h } from "@stencil/core";
import moment from "moment";
import { Debounce } from "../../../../decorators/debounce";
export class IrCityLedgerFolioFilters {
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
        return (h(Host, { key: '068b5e8c4389a748117278499c80f856d2d5efeb' }, h("div", { key: '518207f7affc4ff1be6bcf024e6b0a563479dcde', class: "filters-bar" }, h("div", { key: 'd3c6bd7b7c8c970ca893d8fd54ef333cee1e7a46', class: "filters-bar__dates" }, h("ir-date-range-filter", { key: '0dc2d9f39b13d8890ca1a4bcb95aaba0e01d72bc', maxDate: moment().format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.dates.from?.format('YYYY-MM-DD') ?? undefined, toDate: this.dates.to?.format('YYYY-MM-DD') ?? undefined, onDatesChanged: e => {
                const { from, to } = e.detail;
                this.dates = {
                    from: from ? moment(from, 'YYYY-MM-DD') : null,
                    to: to ? moment(to, 'YYYY-MM-DD') : null,
                };
                this.emitFilters();
            } })), h("div", { key: '87f0cc652d8362d9e3d8bc78d5e3d32750f139d2', class: "filters-bar__search-group" }, h("wa-select", { key: '862aeeb3df828cf692bf9cab49cc98e3c720336d', class: "filters-bar__status-select", value: this.statusFilter, onchange: e => {
                this.statusFilter = e.target.value?.toString();
                this.emitFilters();
            }, "onwa-clear": () => {
                this.statusFilter = 'all';
                this.emitFilters();
            }, placeholder: "Status", size: "small", withClear: true }, this.statuses.map(s => (h("wa-option", { value: s.value, label: s.label }, s.label)))), h("ir-input", { key: '949f69496381c0c016864cd0c88fde5c5c4b072e', class: "filters-bar__search-input", "onText-change": e => {
                this.searchQuery = e.detail;
                this.emitFiltersDebounced();
            }, value: this.searchQuery, placeholder: "Booking# or doc number", withClear: true }, h("wa-icon", { key: '4edacf2122f7feaaa7ba18da286c40055b4aba62', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: '34b3eb1ff52121b558516100d2b72d8c407560e2', variant: "neutral", appearance: "outlined", onClickHandler: () => this.applyFilters.emit({
                fromDate: this.dates.from?.format('YYYY-MM-DD'),
                toDate: this.dates.to?.format('YYYY-MM-DD'),
                status: this.statusFilter,
                search: this.searchQuery,
            }) }, h("wa-icon", { key: '760f1e7e9f1438e0a4b26fe5359121aa7a0a2a42', name: "magnifying-glass" }))), h("div", { key: '6e0cde9e968be15b0af950b0a7606e7dae16c292', class: "filters-bar__actions" }, h("wa-dropdown", { key: '681b5f43fe338d9f0c7ce389c9cd74d6e7945aec' }, h("ir-custom-button", { key: '35b59ff162043bf4110ad206f4016d5af86e7917', slot: "trigger", appearance: "outlined", withCaret: true }, h("wa-icon", { key: 'f2ea556356248247cf2b19c496cdddf11713686d', name: "download", slot: "start" }), h("span", { key: '8971be882246da231ac4490e295321bf8b88bfc0' }, "Export")), h("wa-dropdown-item", { key: '4dadc29d9fb559aa1f02fd30a0fc64eaeff119c5', value: "csv" }, h("wa-icon", { key: '1ea1398fc81dc42e3502b36bfd311ecb8f031978', slot: "icon", name: "file-csv" }), "Export as CSV"), h("wa-dropdown-item", { key: '7f86efd0644c1690a7eaf43fa55f2b7b301758d4', value: "pdf" }, h("wa-icon", { key: '180fc2719385409b59428587252599b0610ec94e', slot: "icon", name: "file-pdf" }), "Export as PDF"), h("wa-divider", { key: '585d960deaf716178f8a76835c2c9ec95dbe8b6d' }), h("wa-dropdown-item", { key: '3147803db2601fc6962f6b9fc7a2b5dc610017c6', value: "print" }, h("wa-icon", { key: '7b7e9542c53ef8cb3a0fdf4a67d13bddbd05ffd4', slot: "icon", name: "print" }), "Print Folio")), h("ir-custom-button", { key: '43f15ff2de9052f103c6b694bdc816257ee3652c', variant: "brand", appearance: "outlined", onClickHandler: () => this.addEntry.emit() }, "Add Entry")))));
    }
    static get is() { return "ir-city-ledger-folio-filters"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-city-ledger-folio-filters.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-city-ledger-folio-filters.css"]
        };
    }
    static get states() {
        return {
            "dates": {},
            "statusFilter": {},
            "searchQuery": {}
        };
    }
    static get events() {
        return [{
                "method": "filtersChange",
                "name": "filtersChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "FolioFilters",
                    "resolved": "FolioFilters",
                    "references": {
                        "FolioFilters": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/types.ts::FolioFilters"
                        }
                    }
                }
            }, {
                "method": "addEntry",
                "name": "addEntry",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "applyFilters",
                "name": "applyFilters",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "FolioFilters",
                    "resolved": "FolioFilters",
                    "references": {
                        "FolioFilters": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/types.ts::FolioFilters"
                        }
                    }
                }
            }];
    }
}
__decorate([
    Debounce(300)
], IrCityLedgerFolioFilters.prototype, "emitFiltersDebounced", null);
//# sourceMappingURL=ir-city-ledger-folio-filters.js.map
