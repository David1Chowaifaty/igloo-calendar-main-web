import { h } from "@stencil/core";
export class IrCityLedgerFiscalDocumentsFilters {
    filters = {
        fromDate: null,
        toDate: null,
        docNumber: '',
        taxableOnly: false,
        type: 'all',
    };
    filtersChange;
    typeOptions = [
        { label: 'All Document Types', value: 'all' },
        { label: 'Invoices', value: 'invoice' },
        { label: 'Receipts', value: 'receipt' },
        { label: 'Credit Notes', value: 'credit-note' },
        { label: 'Debit Notes', value: 'debit-note' },
    ];
    updateFilters(patch) {
        this.filtersChange.emit({
            ...this.filters,
            ...patch,
        });
    }
    render() {
        return (h("section", { key: 'd711426607170e7bc45558ea4cc2dba0d04bf33b', class: "fiscal-filters", "aria-label": "Fiscal document filters" }, h("div", { key: '38649168cc56663769804fe40c3b506a9a727895', class: "fiscal-filters__left" }, h("ir-date-range-filter", { key: 'dfb34ba087c9521a342ca6d34d9c09a92f26b16e', class: "fiscal-filters__dates", fromDate: this.filters.fromDate, toDate: this.filters.toDate, onDatesChanged: e => this.updateFilters({ fromDate: e.detail.from, toDate: e.detail.to }) }), h("wa-select", { key: 'd77caaa88c1f6ed6b1a564a520c70e5b9589f3a3', value: this.filters.type, defaultValue: this.filters.type, onchange: e => this.updateFilters({ type: e.target.value }), size: "small", placeholder: "Status" }, this.typeOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("ir-input", { key: 'b6c59116420fe22a213fe107863e1c8941d4c8e5', placeholder: "Search", class: "fiscal-filters__search" }, h("wa-icon", { key: '684abd02ec0d9c27df2b8af890c13b6f71e33677', name: "magnifying-glass", slot: "start" })), h("wa-switch", { key: '18a63457f7e82f436ac490a1bb281ef68e4d874f', id: "tax-switch", checked: this.filters.taxableOnly, onchange: event => this.updateFilters({ taxableOnly: event.target.checked }) }, "Taxes"))));
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
                "defaultValue": "{\n    fromDate: null,\n    toDate: null,\n    docNumber: '',\n    taxableOnly: false,\n    type: 'all',\n  }"
            }
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
            }];
    }
}
//# sourceMappingURL=ir-city-ledger-fiscal-documents-filters.js.map
