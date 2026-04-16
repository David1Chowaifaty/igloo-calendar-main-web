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
        return (h(Host, { key: '44b056d3ff4edbbcdaa254d5353b6d7df793c005' }, h("div", { key: '51fe39db8d8e752d5eded49e39bbf164b90ab81f', class: "filters-bar" }, h("div", { key: '7b57e54a05ac1ac71f3f73c030d6cb35767dac72', class: "filters-bar__dates" }, h("ir-date-range-filter", { key: 'ba2a88aaf232954fd4fe87b0f6d2d296c0472851', maxDate: moment().format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.dates.from?.format('YYYY-MM-DD') ?? undefined, toDate: this.dates.to?.format('YYYY-MM-DD') ?? undefined, onDatesChanged: e => {
                const { from, to } = e.detail;
                this.dates = {
                    from: from ? moment(from, 'YYYY-MM-DD') : null,
                    to: to ? moment(to, 'YYYY-MM-DD') : null,
                };
                this.emitFilters();
            } })), h("div", { key: '3f05e378595c1851b2c65805b340bdd07f62968e', class: "filters-bar__search-group" }, h("wa-select", { key: 'd5038035e08e283dc19209883a8544e8f11cc19e', class: "filters-bar__status-select", value: this.statusFilter, onchange: e => {
                this.statusFilter = e.target.value?.toString();
                this.emitFilters();
            }, "onwa-clear": () => {
                this.statusFilter = 'all';
                this.emitFilters();
            }, placeholder: "Status", size: "small", withClear: true }, this.statuses.map(s => (h("wa-option", { value: s.value, label: s.label }, s.label)))), h("ir-input", { key: 'fa5fccd30f65a23933b92d963385988b701298e5', class: "filters-bar__search-input", "onText-change": e => {
                this.searchQuery = e.detail;
                this.emitFiltersDebounced();
            }, value: this.searchQuery, placeholder: "Booking# or doc number", withClear: true }, h("wa-icon", { key: 'cb6321f6f798766e1338f6bf242244c07cdf3ab9', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: '7b2d9ad886bbee82a0898b46677f80354ef4bafc', variant: "neutral", appearance: "outlined", onClickHandler: () => this.applyFilters.emit({
                fromDate: this.dates.from?.format('YYYY-MM-DD'),
                toDate: this.dates.to?.format('YYYY-MM-DD'),
                status: this.statusFilter,
                search: this.searchQuery,
            }) }, h("wa-icon", { key: 'a0a65505942eb5f057fcd62c0019d49090fbfc2b', name: "magnifying-glass" }))), h("div", { key: 'a883e45412e230504ab7736f3d43c96b8763c52e', class: "filters-bar__actions" }, h("wa-dropdown", { key: 'b72ecf98fe5194e42fba2a44493dcd75e28b8798' }, h("ir-custom-button", { key: '7cb69d98e9ddbd5691b3372266b80a671bf0339b', slot: "trigger", appearance: "outlined", withCaret: true }, h("wa-icon", { key: 'ae947e9ec921cd0b46c650d8ee1d7b6a3b54420f', name: "download", slot: "start" }), h("span", { key: '157df55ec23c9fc1e69d5f0447e1b2bbe8522706' }, "Export")), h("wa-dropdown-item", { key: '4f467fed18f058d012e5df2e640a48a8bf4e35e4', value: "csv" }, h("wa-icon", { key: '31fb6b9d6e22a508ad7ac8c8b6404066ab6c6660', slot: "icon", name: "file-csv" }), "Export as CSV"), h("wa-dropdown-item", { key: 'a9f5887cbfd0e2cd1cb17c029101aacabfba3b67', value: "pdf" }, h("wa-icon", { key: '213f1e4d97aacd5c510e8861ec64662395c47236', slot: "icon", name: "file-pdf" }), "Export as PDF"), h("wa-divider", { key: 'ec0c1a572d024ffa400f0a8c0d355ef4400b3e6c' }), h("wa-dropdown-item", { key: 'e16140e07091ed24a2ff9ec13424e826be4c70b3', value: "print" }, h("wa-icon", { key: '727740db605e23692d17daae8b50af0297cc903e', slot: "icon", name: "print" }), "Print Folio")), h("ir-custom-button", { key: '24d7c36e4e67daef7c5e3fead0e6279a5572af95', variant: "brand", appearance: "outlined", onClickHandler: () => this.addEntry.emit() }, "Add Entry")))));
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
