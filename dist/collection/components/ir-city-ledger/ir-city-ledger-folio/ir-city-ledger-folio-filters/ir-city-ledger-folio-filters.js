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
        return (h(Host, { key: 'd12946923492054212ca7afd65435706e7a4ad3e' }, h("div", { key: 'f6fc6b251659ffc2b2cc0a9bff668891b1d53441', class: "filters-bar" }, h("div", { key: '0822028b550fa9acb203c1c67216c4e2e8f477ca', class: "filters-bar__dates" }, h("ir-date-range-filter", { key: 'e80c60c827c57d84f4e407c9bf0852c739d2bb86', maxDate: moment().format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.dates.from?.format('YYYY-MM-DD') ?? undefined, toDate: this.dates.to?.format('YYYY-MM-DD') ?? undefined, onDatesChanged: e => {
                const { from, to } = e.detail;
                this.dates = {
                    from: from ? moment(from, 'YYYY-MM-DD') : null,
                    to: to ? moment(to, 'YYYY-MM-DD') : null,
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
