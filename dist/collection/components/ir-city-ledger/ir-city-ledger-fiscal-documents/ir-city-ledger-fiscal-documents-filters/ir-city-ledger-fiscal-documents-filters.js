import { h } from "@stencil/core";
import moment from "moment";
import { FdTypes } from "../../../../types/enums";
const today = moment();
export class IrCityLedgerFiscalDocumentsFilters {
    filters = {
        fromDate: undefined,
        toDate: undefined,
        docNumber: '',
        taxableOnly: false,
        type: 'all',
    };
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
        this.filtersChange.emit({
            ...this.filters,
            ...patch,
        });
    }
    render() {
        return (h("section", { key: 'cd8882c38655e32b5b7100683fb7ae84db22edcb', class: "fiscal-filters", "aria-label": "Fiscal document filters" }, h("div", { key: '7b57c6095221861d4a93651a7dfeec897009b8b7', class: "fiscal-filters__left" }, h("ir-date-range-filter", { key: 'e5a7ac937b6b17b39ced94ad6dbebb86e58965fe', maxDate: today.format('YYYY-MM-DD'), class: "fiscal-filters__dates", fromDate: this.filters.fromDate, toDate: this.filters.toDate, onDatesChanged: e => this.updateFilters({ fromDate: e.detail.from, toDate: e.detail.to }) }), h("wa-select", { key: '52b4fb1fd5804495899716827e1e63c2d0e75bc4', value: this.filters.type, defaultValue: this.filters.type, onchange: e => this.updateFilters({ type: e.target.value }), size: "small", placeholder: "Status" }, this.typeOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("ir-input", { key: 'd872cf4a4705cabf52cf3d077e56bde463629910', placeholder: "Search", class: "fiscal-filters__search" }, h("wa-icon", { key: '3f7cd2d060ac79a812291462225f342f9283b7bb', name: "magnifying-glass", slot: "start" })), h("wa-switch", { key: '7f1662d92d74e3e604773ad4127a753cbe7f0f6c', id: "tax-switch", checked: this.filters.taxableOnly, onchange: event => this.updateFilters({ taxableOnly: event.target.checked }) }, "Taxes"), h("ir-custom-button", { key: 'ea903b5053e7c6d1e31e5574e43b9e5a1bfa2aa3', variant: "neutral", appearance: "outlined", onClickHandler: () => this.applyFilters.emit(this.filters) }, h("wa-icon", { key: 'd507422d18302d3c261f4b946d1c6f3f9f148fd6', name: "magnifying-glass" })))));
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
                "defaultValue": "{\n    fromDate: undefined,\n    toDate: undefined,\n    docNumber: '',\n    taxableOnly: false,\n    type: 'all',\n  }"
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
//# sourceMappingURL=ir-city-ledger-fiscal-documents-filters.js.map
