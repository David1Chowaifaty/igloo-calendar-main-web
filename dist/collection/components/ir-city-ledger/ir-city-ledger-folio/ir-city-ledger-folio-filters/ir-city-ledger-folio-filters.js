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
        return (h(Host, { key: '26844a6c2bb33b92b869ee67fc3830fe74b93b1d' }, h("div", { key: 'd2cbeca8ba947fa46c59d8537cf8a222dde0555e', class: "filters-bar" }, h("ir-date-range-filter", { key: '1681bc1561249e99815441f4ee360c21b89fb47a', fromDate: this.dates.from?.format('YYYY-MM-DD'), toDate: this.dates.to?.format('YYYY-MM-DD'), onDatesChanged: e => {
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
            }, style: { minWidth: '230px' } }), h("wa-select", { key: '019646eac6edd2a1eadb61c9ad8bc4fa843aebe9', value: this.statusFilter, onchange: e => {
                this.statusFilter = e.target.value?.toString();
                this.emitFilters();
            }, "onwa-clear": () => {
                this.statusFilter = 'all';
                this.emitFilters();
            }, placeholder: "Status", size: "small", withClear: true }, this.statuses.map(s => (h("wa-option", { value: s.value, label: s.label }, s.label)))), h("ir-input", { key: '2959e59e0bab63af8470d8509e18606d470611f0', "onText-change": e => {
                this.searchQuery = e.detail;
                this.emitFiltersDebounced();
            }, value: this.searchQuery, placeholder: "Booking# or doc number", withClear: true, style: { minWidth: '250px' } }, h("wa-icon", { key: '64ebb61844f2470b2c0bc7c98f8805309b671d4b', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("wa-dropdown", { key: '2a1a55f9f6a432edcb444be808ccb470a6eedc9f' }, h("ir-custom-button", { key: '855d5b3069ddae7e7be7834f26e4621388085055', slot: "trigger", appearance: "outlined", withCaret: true }, h("wa-icon", { key: '135d92a55081860426ace4525d49ecc54f3c9e4d', name: "download", slot: "start" }), h("span", { key: 'a2c7f628e08b553830893c8a2f56531b7d519f1d' }, "Export")), h("wa-dropdown-item", { key: '2709e424482886a1492fc97b16282a06f9c22228', value: "csv" }, h("wa-icon", { key: '1ea879ac30eeac775bf3030e0df700ae75728d2d', slot: "icon", name: "file-csv" }), "Export as CSV"), h("wa-dropdown-item", { key: '99f6e415abecc979cf78e511a9fa22f8f736e43f', value: "pdf" }, h("wa-icon", { key: 'cce65efb5c2561b275a7848f207e107b5a5d78d9', slot: "icon", name: "file-pdf" }), "Export as PDF"), h("wa-divider", { key: 'e8c1b4e85b3ecca3e71d98653880df13dc176c89' }), h("wa-dropdown-item", { key: '0347e1108f22304f002fdcfe8ece1de3957490c3', value: "print" }, h("wa-icon", { key: 'f79f86f4c2f797eb27e17cd42d018ac772b00632', slot: "icon", name: "print" }), "Print Folio")), h("ir-custom-button", { key: '6d1b216f52a004aa3d9cd49a0d236c878c85e7ab', variant: "brand", appearance: "outlined", onClickHandler: () => this.addEntry.emit() }, "Add Entry"))));
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
