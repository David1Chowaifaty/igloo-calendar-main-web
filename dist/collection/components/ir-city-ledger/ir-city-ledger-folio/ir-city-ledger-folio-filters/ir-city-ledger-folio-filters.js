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
import { h } from "@stencil/core";
import moment from "moment";
import { Debounce } from "../../../../decorators/debounce";
import { z } from "zod";
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
        { value: 'unbilled&checkedOut', label: 'Unbilled checkouts' },
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
        return (h("form", { key: '935ffaa209c5be1b5a0c95252a3f7200f7a7051f', onSubmit: e => {
                e.preventDefault();
                this.applyFilters.emit({
                    fromDate: this.dates.from?.format('YYYY-MM-DD'),
                    toDate: this.dates.to?.format('YYYY-MM-DD'),
                    status: this.statusFilter,
                    search: this.searchQuery,
                });
            } }, h("div", { key: 'e92dd6d86642196f418e178c93f50034d8c5c584', class: "filters-bar" }, h("ir-validator", { key: '613ac515a030b668956aca79a9d33c33314c32f3', value: this.dates?.from?.format('YYYY-MM-DD') || this.dates?.to?.format('YYYY-MM-DD'), schema: z.string().nonempty(), class: "filters-bar__dates" }, h("ir-date-range-filter", { key: 'b13d5032983dfa2b239170a6b0c314d914bea02f', maxDate: moment().format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.dates.from?.format('YYYY-MM-DD') ?? undefined, toDate: this.dates.to?.format('YYYY-MM-DD') ?? undefined, onDatesChanged: e => {
                const { from, to } = e.detail;
                this.dates = {
                    from: from ? moment(from, 'YYYY-MM-DD') : null,
                    to: to ? moment(to, 'YYYY-MM-DD') : null,
                };
                this.emitFilters();
            } })), h("div", { key: '90dc0bf30d141944726f5aef017d11a2d7dd288a', class: "filters-bar__search-group" }, h("wa-select", { key: 'aa819461e7fa273dc985853c5c0a2e05ec0cebf6', class: "filters-bar__status-select", value: this.statusFilter, onchange: e => {
                this.statusFilter = e.target.value?.toString();
                this.emitFilters();
            }, "onwa-clear": () => {
                this.statusFilter = 'all';
                this.emitFilters();
            }, placeholder: "Status", size: "small", withClear: true }, this.statuses.map(s => (h("wa-option", { value: s.value, label: s.label }, s.label)))), h("ir-input", { key: '7013b2d38d70e2d2af3bb3e0ee890f8cff17fe62', class: "filters-bar__search-input", "onText-change": e => {
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
            }), value: this.searchQuery, placeholder: "Booking# or doc number", withClear: true }, h("wa-icon", { key: '64c64c9b64da93f7abcf8de789d95e0745b14fb7', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: 'ce52b8a6b691ceccd721411963e9f3e36bd7822d', variant: "neutral", type: "submit", appearance: "outlined" }, h("wa-icon", { key: '26931e994e777fb3fcbf60fa0851b416b8a7fa6d', name: "magnifying-glass" }))), h("div", { key: 'c4bb297312a6560f0d156816e39f8c9edd062e11', class: "filters-bar__actions" }, h("ir-custom-button", { key: '999230cab990d88e6b7c24776e267361dc0f975d', loading: this.isExporting, appearance: "outlined", disabled: !this.dates.from && !this.dates.to, onClickHandler: () => this.exportFolio.emit() }, h("wa-icon", { key: 'df7cf1926616085ca172a2b9e38970ad66315c85', name: "download", slot: "start" }), h("span", { key: 'f89dbb50ecaecce586dc41e04c5d4e653c6856a2' }, "Export")), h("ir-custom-button", { key: '74873a57a22882660ed113c8ab2fad73b777b642', variant: "brand", appearance: "outlined", onClickHandler: () => this.addEntry.emit() }, "Add Entry")))));
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
