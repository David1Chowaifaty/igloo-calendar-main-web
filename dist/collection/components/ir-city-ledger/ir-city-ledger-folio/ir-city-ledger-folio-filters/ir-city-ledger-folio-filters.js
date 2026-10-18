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
import { t } from "../../../../services/locale/t";
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
        { value: 'all', label: t('Lcz_AllEntries', { fallback: 'All entries' }) },
        { value: 'billed', label: t('Lcz_Billed', { fallback: 'Billed' }) },
        { value: 'held', label: t('Lcz_Held', { fallback: 'Held' }) },
        { value: 'unbilled', label: t('Lcz_Unbilled', { fallback: 'Unbilled' }) },
        { value: 'unbilled&checkedOut', label: t('Lcz_UnbilledCheckouts', { fallback: 'Unbilled checkouts' }) },
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
        return (h("form", { key: '8a192e7084c56d408749a809eeac829a7612fae2', onSubmit: e => {
                e.preventDefault();
                this.applyFilters.emit({
                    fromDate: this.dates.from?.format('YYYY-MM-DD'),
                    toDate: this.dates.to?.format('YYYY-MM-DD'),
                    status: this.statusFilter,
                    search: this.searchQuery,
                });
            } }, h("div", { key: '54f96f6866310f945bc875389375ce782c0ed5b7', class: "filters-bar" }, h("ir-validator", { key: 'dafcd5d871fda18415f75e54cf61d174bb39b74d', value: this.dates?.from?.format('YYYY-MM-DD') || this.dates?.to?.format('YYYY-MM-DD'), schema: z.string().nonempty(), class: "filters-bar__dates" }, h("ir-date-range-filter", { key: 'dd8884477ad9b0aaa849f5019dd557c7c5529974', maxDate: moment().format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.dates.from?.format('YYYY-MM-DD') ?? undefined, toDate: this.dates.to?.format('YYYY-MM-DD') ?? undefined, onDatesChanged: e => {
                const { from, to } = e.detail;
                this.dates = {
                    from: from ? moment(from, 'YYYY-MM-DD') : null,
                    to: to ? moment(to, 'YYYY-MM-DD') : null,
                };
                this.emitFilters();
            } })), h("div", { key: '1198fcf7187e9026972dd7a6260071c7325ecc66', class: "filters-bar__search-group" }, h("wa-select", { key: '13c6301e5e0a6b0dc651437c1dc2d4e4f59046b7', class: "filters-bar__status-select", value: this.statusFilter, onchange: e => {
                this.statusFilter = e.target.value?.toString();
                this.emitFilters();
            }, "onwa-clear": () => {
                this.statusFilter = 'all';
                this.emitFilters();
            }, placeholder: t('Lcz_Status', { fallback: 'Status' }), size: "s", withClear: true }, this.statuses.map(s => (h("wa-option", { value: s.value, label: s.label }, s.label)))), h("ir-input", { key: '53f1784b5a3084090d83653b509f388dd9394a80', class: "filters-bar__search-input", "onText-change": e => {
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
            }), value: this.searchQuery, placeholder: t('Lcz_BookingOrDocNumberPlaceholder', { fallback: 'Booking# or doc number' }), withClear: true }, h("wa-icon", { key: '6ceed8fffe5e2ee1a6b3d9d6ebbcb8b9678dc0c8', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: '348d471d6458bbebc25f64c60188a01b35b41630', variant: "neutral", type: "submit", appearance: "outlined" }, h("wa-icon", { key: 'e2a0a9df8a0a7dcbf68d53f8fd9d26afbc6b3d96', name: "magnifying-glass" }))), h("div", { key: 'f271fe5c77ec32493352cd53f20786a8bf5123e1', class: "filters-bar__actions" }, h("ir-custom-button", { key: '7ad7d4cf6662d2db4b73389afb972d22bd2113a1', loading: this.isExporting, appearance: "outlined", disabled: !this.dates.from && !this.dates.to, onClickHandler: () => this.exportFolio.emit() }, h("wa-icon", { key: 'bf02ec6c13df6e42b4b68ea70e4643ac13d29ef8', name: "download", slot: "start" }), h("span", { key: '78878ec95cb210875ded7ee9bd95f7cb3cf35e24' }, t('Lcz_Export', { fallback: 'Export' }))), h("ir-custom-button", { key: 'b0b7928d92d33f0c5bd447cf06fc2cc4e5ee9526', variant: "brand", appearance: "outlined", onClickHandler: () => this.addEntry.emit() }, t('Lcz_AddEntry', { fallback: 'Add Entry' }))))));
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
                "reflect": false,
                "attribute": "is-exporting"
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
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/types.ts::FolioFilters",
                            "referenceLocation": "FolioFilters"
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
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/types.ts::FolioFilters",
                            "referenceLocation": "FolioFilters"
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
