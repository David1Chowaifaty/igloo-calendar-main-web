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
import { FdTypes } from "../../../../types/enums";
import { Debounce } from "../../../../decorators/debounce";
import { z } from "zod";
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
        // { label: 'Debit Notes', value: FdTypes.DebitNote },
        { label: 'Credit Receipt', value: FdTypes.CreditReceipt },
    ];
    updateFilters(patch) {
        this.filtersChange.emit({ ...this.filters, ...patch });
    }
    emitSearchDebounced(value) {
        this.updateFilters({ docNumber: value });
    }
    render() {
        return (h("form", { key: '49db317c5952445e7060c4e44324138beef6d0fa', onSubmit: e => {
                e.preventDefault();
                this.applyFilters.emit(this.filters);
            } }, h("div", { key: '76e37dafd402850bcbf744a354f578f742b4cf2a', class: "filters-bar" }, h("ir-validator", { key: '9300681526a32c894852b257a20314fe9334db17', value: this.filters?.fromDate || this.filters?.toDate, schema: z.string().nonempty(), class: "filters-bar__dates" }, h("ir-date-range-filter", { key: '5895e1144e1ae5018acb597fd85ae956a136a594', maxDate: today.format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.filters.fromDate, toDate: this.filters.toDate, onDatesChanged: e => this.updateFilters({ fromDate: e.detail.from, toDate: e.detail.to }) })), h("div", { key: 'fd632455272d8f6a407481c3c10c8b219fc4f6e3', class: "filters-bar__search-group" }, h("div", { key: '7ed4c36cf88b0c5a811d00abb1f59d664dd1dedc', class: "filters-bar__type-group" }, h("wa-select", { key: '4d052d9b96e016a24b4f5e910ee7bae1aa74d120', class: "filters-bar__status-select", value: this.filters.type, defaultValue: this.filters.type, onchange: e => this.updateFilters({ type: e.target.value }), size: "small", placeholder: "Document Type" }, this.typeOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("wa-switch", { key: '28322ff6eda4299ed3b263f12dfab0cdb0aab0d0', class: "filters-bar__tax-switch", checked: this.filters.taxableOnly, onchange: e => this.updateFilters({ taxableOnly: e.target.checked }) }, "Taxes"), h("wa-switch", { key: '12267b1d35d65f545c5c258a81fd761a666ca6cd', class: "filters-bar__proforma-switch", checked: this.filters.proformaOnly, onchange: e => {
                const updated = { ...this.filters, proformaOnly: e.target.checked };
                this.filtersChange.emit(updated);
                this.applyFilters.emit(updated);
            } }, "Proforma")), h("ir-input", { key: '20475ce1e409e8e8d15575857e235d3dd80885b9', class: "filters-bar__search-input", placeholder: "Search by doc number", value: this.docNumber, "onText-change": e => {
                this.docNumber = e.detail;
                this.emitSearchDebounced(e.detail);
            }, withClear: true }, h("wa-icon", { key: '8f012b674450654a9839285c5b88ee4e86da44f7', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: 'bae7b89e47b0f87c54d5a4450a23f8a49f93ed30', variant: "neutral", appearance: "outlined", type: "submit" }, h("wa-icon", { key: '4a2d620987100886a225c9adbb27ad4e6046b680', name: "magnifying-glass" }))))));
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
