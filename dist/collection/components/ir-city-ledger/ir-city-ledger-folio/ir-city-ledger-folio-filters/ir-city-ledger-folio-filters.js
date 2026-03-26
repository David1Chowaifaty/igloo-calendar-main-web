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
        return (h(Host, { key: 'f0cf9ab6c12662c8b63a1fc1515bb48308881caf' }, h("div", { key: '313a87b9f943cb1405e04aabec9da398f474c857', class: "filters-bar" }, h("ir-date-range-filter", { key: '16525e71ed178ca1c70e28bc5292da80b1f8982b', fromDate: this.dates.from?.format('YYYY-MM-DD'), toDate: this.dates.to?.format('YYYY-MM-DD'), onDatesChanged: e => {
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
            }, style: { minWidth: '230px' } }), h("wa-select", { key: 'b5c7343d9799271095d2c7533018fb0d90aa0898', value: this.statusFilter, onchange: e => {
                this.statusFilter = e.target.value?.toString();
                this.emitFilters();
            }, "onwa-clear": () => {
                this.statusFilter = 'all';
                this.emitFilters();
            }, placeholder: "Status", size: "small", withClear: true }, this.statuses.map(s => (h("wa-option", { value: s.value, label: s.label }, s.label)))), h("ir-input", { key: '6ba5ce98c3b44bd8bdc729aeb39199a302d88ce3', "onText-change": e => {
                this.searchQuery = e.detail;
                this.emitFiltersDebounced();
            }, value: this.searchQuery, placeholder: "Booking# or doc number", withClear: true, style: { minWidth: '250px' } }, h("wa-icon", { key: '74a54e2c1f35c24009d925a97e301b5d4f23cd5d', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("wa-dropdown", { key: '332b094b9e431839a30b4320ea0269ea247f44b0' }, h("ir-custom-button", { key: 'da9d8884b445ac77f770bfdc53d9568df5f78cfe', slot: "trigger", appearance: "outlined", withCaret: true }, h("wa-icon", { key: 'a136f7e52a2a67dfa2a917c00fcf78c6c8f53fda', name: "download", slot: "start" }), h("span", { key: 'c3c8548fc91f9038cecdb79c36eab4a96c6e8613' }, "Export")), h("wa-dropdown-item", { key: '177f870f63006b13b3b9fdd7846c32b92d01e55d', value: "csv" }, h("wa-icon", { key: 'eaed8edf26b190280a46b4d15be82f2b6b0b3923', slot: "icon", name: "file-csv" }), "Export as CSV"), h("wa-dropdown-item", { key: 'b24788ddb3734ef24fd838dd3c91baa5bfbad9d4', value: "pdf" }, h("wa-icon", { key: '3f6fe5262711cbd9a3c3f814b576137b35257362', slot: "icon", name: "file-pdf" }), "Export as PDF"), h("wa-divider", { key: '16e7d19ff36824a5db0313e85cca5fc5bee09ce8' }), h("wa-dropdown-item", { key: '05ac88ce0f3b7a1728bb4c799cede5ab0fdded06', value: "print" }, h("wa-icon", { key: '18ea8af30f05c17a3259ff0f63406933f0775cb9', slot: "icon", name: "print" }), "Print Folio")), h("ir-custom-button", { key: 'b7c266e82265b7f7d4df196309210652320d8205', variant: "brand", appearance: "outlined", onClickHandler: () => this.addEntry.emit() }, "Add Entry"))));
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
