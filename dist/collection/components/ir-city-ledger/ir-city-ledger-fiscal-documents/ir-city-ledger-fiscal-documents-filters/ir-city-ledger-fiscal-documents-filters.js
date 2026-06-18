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
        return (h("form", { key: '62080088442cb9679bbbd13160b31fe757202060', onSubmit: e => {
                e.preventDefault();
                this.applyFilters.emit(this.filters);
            } }, h("div", { key: '95b753caffd35506fe7fa97d95bd9b120f623684', class: "filters-bar" }, h("ir-validator", { key: '8a4d0d148668118e5b268f170b3a80705ba9972a', value: this.filters?.fromDate || this.filters?.toDate, schema: z.string().nonempty(), class: "filters-bar__dates" }, h("ir-date-range-filter", { key: '56f1948fe4787c47490bd742e5cf3f95d52fa85b', maxDate: today.format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.filters.fromDate, toDate: this.filters.toDate, onDatesChanged: e => this.updateFilters({ fromDate: e.detail.from, toDate: e.detail.to }) })), h("div", { key: 'f614a7d5e569956103b67db04fbb0f9ef458091e', class: "filters-bar__search-group" }, h("div", { key: '9b331d831a56d3518b3b90f691e351d220a460a6', class: "filters-bar__type-group" }, h("wa-select", { key: '056eff6efe9ff101f13a2c3a56fc58e8801dc38a', class: "filters-bar__status-select", value: this.filters.type, defaultValue: this.filters.type, onchange: e => this.updateFilters({ type: e.target.value }), size: "s", placeholder: "Document Type" }, this.typeOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("wa-switch", { key: 'a7e82aa7d22fd8b4e5cc947945ec4e4d82e4e03e', class: "filters-bar__tax-switch", checked: this.filters.taxableOnly, onchange: e => this.updateFilters({ taxableOnly: e.target.checked }) }, "Taxes"), h("wa-switch", { key: '4aa727ec6ac440359c1f0ec38e9540dab3097df8', class: "filters-bar__proforma-switch", checked: this.filters.proformaOnly, onchange: e => {
                const updated = { ...this.filters, proformaOnly: e.target.checked };
                this.filtersChange.emit(updated);
                this.applyFilters.emit(updated);
            } }, "Proforma")), h("ir-input", { key: '08ff8f910d6ea14e793885fefc9259e7696b3dc6', class: "filters-bar__search-input", placeholder: "Search by doc number", value: this.docNumber, "onText-change": e => {
                this.docNumber = e.detail;
                this.emitSearchDebounced(e.detail);
            }, withClear: true }, h("wa-icon", { key: '4685fc195a163c3893077ce25ff98589074de954', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: '7fb078daf1f4f23ff1788e5399f6924db251474a', variant: "neutral", appearance: "outlined", type: "submit" }, h("wa-icon", { key: 'b0f92ffc7aac0bd4de23cce6dfacb9ee6b9861b3', name: "magnifying-glass" }))))));
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
                    "original": "ClFiscalDocumentFilters",
                    "resolved": "ClFiscalDocumentFilters",
                    "references": {
                        "ClFiscalDocumentFilters": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-fiscal-documents/types.ts::ClFiscalDocumentFilters",
                            "referenceLocation": "ClFiscalDocumentFilters"
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
                    "original": "ClFiscalDocumentFilters",
                    "resolved": "ClFiscalDocumentFilters",
                    "references": {
                        "ClFiscalDocumentFilters": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-fiscal-documents/types.ts::ClFiscalDocumentFilters",
                            "referenceLocation": "ClFiscalDocumentFilters"
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
                    "original": "ClFiscalDocumentFilters",
                    "resolved": "ClFiscalDocumentFilters",
                    "references": {
                        "ClFiscalDocumentFilters": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-fiscal-documents/types.ts::ClFiscalDocumentFilters",
                            "referenceLocation": "ClFiscalDocumentFilters"
                        }
                    }
                }
            }];
    }
}
__decorate([
    Debounce(300)
], IrCityLedgerFiscalDocumentsFilters.prototype, "emitSearchDebounced", null);
