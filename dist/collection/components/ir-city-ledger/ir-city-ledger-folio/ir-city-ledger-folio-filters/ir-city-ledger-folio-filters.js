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
        return (h(Host, { key: 'eceebbc6a6d0314decba84b3e2539c3431da4c1e' }, h("div", { key: 'b68c5876043fe69e4cfd275b006fd08f2ca0f813', class: "filters-bar" }, h("div", { key: '122cda4d4f453047f36f0cc6bb72ca4eb4448787', class: "filters-bar__dates" }, h("ir-date-range-filter", { key: 'e256f0c4883776a68edaaa027b378ac1f2b5eb36', maxDate: moment().format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.dates.from?.format('YYYY-MM-DD') ?? undefined, toDate: this.dates.to?.format('YYYY-MM-DD') ?? undefined, onDatesChanged: e => {
                const { from, to } = e.detail;
                this.dates = {
                    from: from ? moment(from, 'YYYY-MM-DD') : null,
                    to: to ? moment(to, 'YYYY-MM-DD') : null,
                };
                this.emitFilters();
            } })), h("div", { key: '15f02a5eac3e78e057cca481ad87a7cae09326dc', class: "filters-bar__search-group" }, h("wa-select", { key: 'bb6b95fb5a303844775e30624c44af19925cabda', class: "filters-bar__status-select", value: this.statusFilter, onchange: e => {
                this.statusFilter = e.target.value?.toString();
                this.emitFilters();
            }, "onwa-clear": () => {
                this.statusFilter = 'all';
                this.emitFilters();
            }, placeholder: "Status", size: "small", withClear: true }, this.statuses.map(s => (h("wa-option", { value: s.value, label: s.label }, s.label)))), h("ir-input", { key: '890a5bf0ac0c1c15e82318a119ea07adfe230193', class: "filters-bar__search-input", "onText-change": e => {
                this.searchQuery = e.detail;
                this.emitFiltersDebounced();
            }, value: this.searchQuery, placeholder: "Booking# or doc number", withClear: true }, h("wa-icon", { key: '3a199b1164a2ad81042f2e6db138c4f52957d3c1', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: '60cbb2e715fb3426faf6a99292d411f191f9c2f9', variant: "neutral", appearance: "outlined", onClickHandler: () => this.applyFilters.emit({
                fromDate: this.dates.from?.format('YYYY-MM-DD'),
                toDate: this.dates.to?.format('YYYY-MM-DD'),
                status: this.statusFilter,
                search: this.searchQuery,
            }) }, h("wa-icon", { key: '3ffcf3083261c305d44dd4c9599c5c6a165c2e5d', name: "magnifying-glass" }))), h("div", { key: 'bd5a78b7247130f7dd39dd20d1f4fd44443f9d78', class: "filters-bar__actions" }, h("wa-dropdown", { key: 'bdb8b1d15bfaa721bd65eb9027fd2fe11f4afac9' }, h("ir-custom-button", { key: 'e390089e71d913acb3cbc1ad30f8d4356755b9f1', slot: "trigger", appearance: "outlined", withCaret: true }, h("wa-icon", { key: '9c7a455939fa4742430ef6d1a758ceaf95eaad8e', name: "download", slot: "start" }), h("span", { key: '5e5153d52a64472b02dab67fa84b93eb42695cb3' }, "Export")), h("wa-dropdown-item", { key: '7b56f0597d908f044eea40789ef0c0d520b9aac9', value: "csv" }, h("wa-icon", { key: 'd169b55bbc9f7705173e3a58f5e9c6f38a98b03f', slot: "icon", name: "file-csv" }), "Export as CSV"), h("wa-dropdown-item", { key: 'f763b8128142ca2ef2e7d0719a7e0ec2ed72b78b', value: "pdf" }, h("wa-icon", { key: '0ba4f96c97c4aa61f86027795f6f9a8ec87ff7e0', slot: "icon", name: "file-pdf" }), "Export as PDF"), h("wa-divider", { key: 'a1414404d61d75074ef61f97c49e4939c88302c0' }), h("wa-dropdown-item", { key: '62bf36297b8cb37bceebb7f47fc7680ace1e99d0', value: "print" }, h("wa-icon", { key: 'abbc209054f70cc6e17cdb4b7381a4af7faafb78', slot: "icon", name: "print" }), "Print Folio")), h("ir-custom-button", { key: 'ef22fd1260fe78ed5c674a3b773490e44da55906', variant: "brand", appearance: "outlined", onClickHandler: () => this.addEntry.emit() }, "Add Entry")))));
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
