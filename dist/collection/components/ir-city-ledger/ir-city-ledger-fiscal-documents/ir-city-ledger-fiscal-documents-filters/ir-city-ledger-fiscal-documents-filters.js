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
        return (h(Host, { key: '4d1fd97d81c9b44777920a6c8ed6cdc4ed9eee37' }, h("div", { key: '364ab2532286940670da97fadbd793bb180d8008', class: "filters-bar" }, h("div", { key: '6cbb8aea2a6f215d51dce454b4a19647754502d9', class: "filters-bar__dates" }, h("ir-date-range-filter", { key: '2933c56a3f98a93731adf3c88b17c5570f39156c', maxDate: today.format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.filters.fromDate, toDate: this.filters.toDate, onDatesChanged: e => this.updateFilters({ fromDate: e.detail.from, toDate: e.detail.to }) })), h("div", { key: 'f1201503feb768aa80147690953c4152c09f3d77', class: "filters-bar__search-group" }, h("div", { key: 'fb7c94db8b5d10351e222ed42739112d988a21eb', class: "filters-bar__type-group" }, h("wa-select", { key: '2969f350074efe1fc260828651abb9394c2993eb', class: "filters-bar__status-select", value: this.filters.type, defaultValue: this.filters.type, onchange: e => this.updateFilters({ type: e.target.value }), size: "small", placeholder: "Document Type" }, this.typeOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("wa-switch", { key: '9d4fe079cfef7bec45f8a8cafd028b8efcaab0ab', class: "filters-bar__tax-switch", checked: this.filters.taxableOnly, onchange: e => this.updateFilters({ taxableOnly: e.target.checked }) }, "Taxes only"), h("wa-switch", { key: '72b718b11d42b2ac4281bdbb16fe069394db4955', class: "filters-bar__proforma-switch", checked: this.filters.proformaOnly, onchange: e => {
                const updated = { ...this.filters, proformaOnly: e.target.checked };
                this.filtersChange.emit(updated);
                this.applyFilters.emit(updated);
            } }, "Pro-forma")), h("ir-input", { key: 'dbbe08d5916759deb4a76edb93886ee72bff667d', class: "filters-bar__search-input", placeholder: "Search by doc number", value: this.docNumber, "onText-change": e => {
                this.docNumber = e.detail;
                this.emitSearchDebounced(e.detail);
            }, withClear: true }, h("wa-icon", { key: '73bddd44f0804dcc63bcf103e0b43fe281ecf0f2', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: '14bc065ba24ca656e3213dfcca7f16a6db17527c', variant: "neutral", appearance: "outlined", onClickHandler: () => this.applyFilters.emit(this.filters) }, h("wa-icon", { key: '8f6523375c2e61ec3676c8d7db9ff3dc8361557a', name: "magnifying-glass" }))))));
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
