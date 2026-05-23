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
        return (h(Host, { key: '16ef8cfbe24ab46db55a2b37ada8cb5d725ce674' }, h("div", { key: 'b3b8e2e4b9aec750db264b491c20960350991066', class: "filters-bar" }, h("div", { key: 'b8832c8d22a819661d22a9b6401b8e106d3cee5a', class: "filters-bar__dates" }, h("ir-date-range-filter", { key: 'b0bb39862973975c5358c14ed498d2da01417758', maxDate: moment().format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.dates.from?.format('YYYY-MM-DD') ?? undefined, toDate: this.dates.to?.format('YYYY-MM-DD') ?? undefined, onDatesChanged: e => {
                const { from, to } = e.detail;
                this.dates = {
                    from: from ? moment(from, 'YYYY-MM-DD') : null,
                    to: to ? moment(to, 'YYYY-MM-DD') : null,
                };
                this.emitFilters();
            } })), h("div", { key: '455cabd10c973617dddf74f2f048142bd3b2c8f7', class: "filters-bar__search-group" }, h("wa-select", { key: '832921e18b41a3251e48189c2ff5931aebfeb1a0', class: "filters-bar__status-select", value: this.statusFilter, onchange: e => {
                this.statusFilter = e.target.value?.toString();
                this.emitFilters();
            }, "onwa-clear": () => {
                this.statusFilter = 'all';
                this.emitFilters();
            }, placeholder: "Status", size: "small", withClear: true }, this.statuses.map(s => (h("wa-option", { value: s.value, label: s.label }, s.label)))), h("ir-input", { key: 'f78b450ab9ee61eaf90230526f536d602bf71868', class: "filters-bar__search-input", "onText-change": e => {
                this.searchQuery = e.detail;
                this.emitFiltersDebounced();
            }, value: this.searchQuery, placeholder: "Booking# or doc number", withClear: true }, h("wa-icon", { key: '0f526be955144d2f387d5ef6bc2c9f6cf6c2d606', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: '77c4cb81d76f6b44fd9f618207c1bf3d7bdf45ef', variant: "neutral", appearance: "outlined", onClickHandler: () => this.applyFilters.emit({
                fromDate: this.dates.from?.format('YYYY-MM-DD'),
                toDate: this.dates.to?.format('YYYY-MM-DD'),
                status: this.statusFilter,
                search: this.searchQuery,
            }) }, h("wa-icon", { key: 'd3aacf477d7fc2556c134777ccdadb16392471db', name: "magnifying-glass" }))), h("div", { key: 'f5c9da9a4c60ce9146ee0da19f6c89441cb55942', class: "filters-bar__actions" }, h("ir-custom-button", { key: '11d254ce949bfc12ed195123f02a0a596c96a01b', loading: this.isExporting, appearance: "outlined", disabled: !this.dates.from && !this.dates.to, onClickHandler: () => this.exportFolio.emit() }, h("wa-icon", { key: '15e9ed4b21a65a73b5d94acad631b5906415b938', name: "download", slot: "start" }), h("span", { key: 'f41ace599c1d5604c4476e63a4d352350c263950' }, "Export")), h("ir-custom-button", { key: '0f575afe0cfea5423c10dee979358610efd033dd', variant: "brand", appearance: "outlined", onClickHandler: () => this.addEntry.emit() }, "Add Entry")))));
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
    static get properties() {
        return {
            "isExporting": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "is-exporting",
                "reflect": false
            }
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
            }, {
                "method": "exportFolio",
                "name": "exportFolio",
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
            }];
    }
}
__decorate([
    Debounce(300)
], IrCityLedgerFolioFilters.prototype, "emitFiltersDebounced", null);
//# sourceMappingURL=ir-city-ledger-folio-filters.js.map
