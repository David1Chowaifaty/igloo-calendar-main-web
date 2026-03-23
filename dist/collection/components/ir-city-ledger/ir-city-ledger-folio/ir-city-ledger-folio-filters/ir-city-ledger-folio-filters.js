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
        from: moment().subtract(30, 'days'),
        to: moment(),
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
        return (h(Host, { key: '4aa28f5f1789881ab4e1c140ad6c288f4078e21d' }, h("div", { key: 'c0f1d5523b31642a2d9d99caa52a9a77003109a1', class: "filters-bar" }, h("ir-date-range-filter", { key: '7abd903de3d5df65acf5dae2d3ed40be37ca4ce0', fromDate: this.dates.from?.format('YYYY-MM-DD'), toDate: this.dates.to?.format('YYYY-MM-DD'), onDatesChanged: e => {
                let newDates = {};
                let dates = e.detail;
                if (dates.from) {
                    newDates = { ...newDates, from: moment(dates.from, 'YYYY-MM-DD') };
                }
                if (dates.to) {
                    newDates = { ...newDates, to: moment(dates.to, 'YYYY-MM-DD') };
                }
                this.dates = { ...this.dates, ...newDates };
                this.emitFilters();
            }, style: { minWidth: '230px' } }), h("wa-select", { key: 'bd8462d5a6339d0c665a205491f8280af504982c', value: this.statusFilter, onchange: e => {
                this.statusFilter = e.target.value?.toString();
                this.emitFilters();
            }, "onwa-clear": () => {
                this.statusFilter = 'all';
                this.emitFilters();
            }, placeholder: "Status", size: "small", withClear: true }, this.statuses.map(s => (h("wa-option", { value: s.value, label: s.label }, s.label)))), h("ir-input", { key: '118fbc691957fc5d456cd268c18cd5bad194d7f3', "onText-change": e => {
                this.searchQuery = e.detail;
                this.emitFiltersDebounced();
            }, value: this.searchQuery, placeholder: "Booking# or doc number", withClear: true, style: { minWidth: '250px' } }, h("wa-icon", { key: 'd06bbba88bcd7839a674b17c4cba2244ed0033af', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("wa-dropdown", { key: '5440a2ed0cbc725224c8108a9c15c3d9e9dc0154' }, h("ir-custom-button", { key: '022e40f76d2705b3f73cc040d9fcee01324f9de9', slot: "trigger", appearance: "outlined", withCaret: true }, h("wa-icon", { key: '3c247f317dd205b4378ba5b72dfad1fb3324c441', name: "download", slot: "start" }), h("span", { key: '4dd6f22eef0941c48ddfd207dfe8cfbd594152e5' }, "Export")), h("wa-dropdown-item", { key: 'dd0a309a3316c1461b2f81d10f8f7f14a04412f5', value: "csv" }, h("wa-icon", { key: 'f1aabe5cc431f03600c2983997574ce41d06bc7a', slot: "icon", name: "file-csv" }), "Export as CSV"), h("wa-dropdown-item", { key: '5f1eed1ab3a5d98b465f72ca4642e1c32cd583c1', value: "pdf" }, h("wa-icon", { key: '3cfc60e7a52ef41abd07f868d9483123e0b76752', slot: "icon", name: "file-pdf" }), "Export as PDF"), h("wa-divider", { key: '028aaf78930283d60e04a43211a013764aed033b' }), h("wa-dropdown-item", { key: '54782b1f04df782fe67b78819054c0c460f48e0d', value: "print" }, h("wa-icon", { key: '06494cdb333e94a586ee9340dc1a3b333a51e12e', slot: "icon", name: "print" }), "Print Folio")), h("ir-custom-button", { key: '6eee0438b51c75f98734614baf73454787f6e0f1', variant: "brand", appearance: "outlined", onClickHandler: () => this.addEntry.emit() }, "Add Entry"))));
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
            }];
    }
}
__decorate([
    Debounce(300)
], IrCityLedgerFolioFilters.prototype, "emitFiltersDebounced", null);
//# sourceMappingURL=ir-city-ledger-folio-filters.js.map
