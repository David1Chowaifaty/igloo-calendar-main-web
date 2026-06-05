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
import { FdTypes } from "../../../../types/enums";
import { Debounce } from "../../../../decorators/debounce";
const today = moment();
export class IrCityLedgerFiscalDocumentsFilters {
    filters = {
        fromDate: undefined,
        toDate: undefined,
        docNumber: '',
        taxableOnly: false,
        type: 'all',
        proformaOnly: false,
    };
    docNumber = '';
    filtersChange;
    applyFilters;
    componentWillLoad() {
        this.docNumber = this.filters.docNumber ?? '';
    }
    typeOptions = [
        { label: 'All Document Types', value: 'all' },
        { label: 'Invoices', value: FdTypes.Invoice },
        { label: 'Receipts', value: FdTypes.Receipt },
        { label: 'Credit Notes', value: FdTypes.CreditNote },
        { label: 'Debit Notes', value: FdTypes.DebitNote },
    ];
    updateFilters(patch) {
        this.filtersChange.emit({ ...this.filters, ...patch });
    }
    emitSearchDebounced(value) {
        this.updateFilters({ docNumber: value });
    }
    render() {
        return (h(Host, { key: 'f9f465b47e135c0514928fd65a1a1bdae29735a0' }, h("div", { key: 'f2d4ee4d88bccc472a212f524a1203f3385ebef1', class: "filters-bar" }, h("div", { key: '999e953186dbe38407b8cbd2526a0cf4a9aa5c65', class: "filters-bar__dates" }, h("ir-date-range-filter", { key: 'bd1621f3c56aad02cc8210f046e411de1bb0bfcc', maxDate: today.format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.filters.fromDate, toDate: this.filters.toDate, onDatesChanged: e => this.updateFilters({ fromDate: e.detail.from, toDate: e.detail.to }) })), h("div", { key: 'f92d798544ecbfebee51956ce0335326975d5aec', class: "filters-bar__search-group" }, h("div", { key: '3570423d61d7e6e0bd31a08f20932c6a598552a2', class: "filters-bar__type-group" }, h("wa-select", { key: '06283134298833ed2eae959ac1ac00c679fdbd8a', class: "filters-bar__status-select", value: this.filters.type, defaultValue: this.filters.type, onchange: e => this.updateFilters({ type: e.target.value }), size: "small", placeholder: "Document Type" }, this.typeOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("wa-switch", { key: '1c15a022484d7a15cf9eb79c2d398d90e074dedc', class: "filters-bar__tax-switch", checked: this.filters.taxableOnly, onchange: e => this.updateFilters({ taxableOnly: e.target.checked }) }, "Taxes"), h("wa-switch", { key: '297f4f78b9b50ee3a1962da478117393e072ac15', class: "filters-bar__proforma-switch", checked: this.filters.proformaOnly, onchange: e => {
                const updated = { ...this.filters, proformaOnly: e.target.checked };
                this.filtersChange.emit(updated);
                this.applyFilters.emit(updated);
            } }, "Pro forma")), h("ir-input", { key: '77deaa3beadc91b4f745a8cd39f7ba03443e6c6f', class: "filters-bar__search-input", placeholder: "Search by doc number", value: this.docNumber, "onText-change": e => {
                this.docNumber = e.detail;
                this.emitSearchDebounced(e.detail);
            }, withClear: true }, h("wa-icon", { key: '3c5a3df117aa14efbdde9db2e1512cdebc225f63', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: '5449dbcc6cf0ef6b6a05eb016a1e747f278d8a25', variant: "neutral", appearance: "outlined", onClickHandler: () => this.applyFilters.emit(this.filters) }, h("wa-icon", { key: 'a506aee8847ed0017691805826f24f82fc7691cb', name: "magnifying-glass" }))))));
    }
    static get is() { return "ir-city-ledger-fiscal-documents-filters"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-city-ledger-fiscal-documents-filters.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-city-ledger-fiscal-documents-filters.css"]
        };
    }
    static get properties() {
        return {
            "filters": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "FiscalDocumentFilters",
                    "resolved": "FiscalDocumentFilters",
                    "references": {
                        "FiscalDocumentFilters": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-fiscal-documents/types.ts::FiscalDocumentFilters"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{\n    fromDate: undefined,\n    toDate: undefined,\n    docNumber: '',\n    taxableOnly: false,\n    type: 'all',\n    proformaOnly: false,\n  }"
            }
        };
    }
    static get states() {
        return {
            "docNumber": {}
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
                    "original": "FiscalDocumentFilters",
                    "resolved": "FiscalDocumentFilters",
                    "references": {
                        "FiscalDocumentFilters": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-fiscal-documents/types.ts::FiscalDocumentFilters"
                        }
                    }
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
                    "original": "FiscalDocumentFilters",
                    "resolved": "FiscalDocumentFilters",
                    "references": {
                        "FiscalDocumentFilters": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-fiscal-documents/types.ts::FiscalDocumentFilters"
                        }
                    }
                }
            }];
    }
}
__decorate([
    Debounce(300)
], IrCityLedgerFiscalDocumentsFilters.prototype, "emitSearchDebounced", null);
//# sourceMappingURL=ir-city-ledger-fiscal-documents-filters.js.map
