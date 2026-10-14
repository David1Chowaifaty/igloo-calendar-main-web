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
import { t } from "../../../../services/locale/t";
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
        { label: t('Lcz_AllDocumentTypes', { fallback: 'All document types' }), value: 'all' },
        { label: t('Lcz_Invoices', { fallback: 'Invoices' }), value: FdTypes.Invoice },
        { label: t('Lcz_Receipts', { fallback: 'Receipts' }), value: FdTypes.Receipt },
        { label: t('Lcz_CreditNotes', { fallback: 'Credit Notes' }), value: FdTypes.CreditNote },
        // { label: 'Debit Notes', value: FdTypes.DebitNote },
        { label: t('Lcz_CreditReceipt', { fallback: 'Credit Receipt' }), value: FdTypes.CreditReceipt },
    ];
    updateFilters(patch) {
        this.filtersChange.emit({ ...this.filters, ...patch });
    }
    emitSearchDebounced(value) {
        this.updateFilters({ docNumber: value });
    }
    render() {
        return (h("form", { key: '4a0aff85e0311c627f07c885212fde7d73f712d5', onSubmit: e => {
                e.preventDefault();
                this.applyFilters.emit(this.filters);
            } }, h("div", { key: 'b81a2fe3c073da97cadaa56a0f6bc05aa34b0063', class: "filters-bar" }, h("ir-validator", { key: '09eb92f7f654c01f65721cd7a1241ce019731a27', value: this.filters?.fromDate || this.filters?.toDate, schema: z.string().nonempty(), class: "filters-bar__dates" }, h("ir-date-range-filter", { key: 'd26e774c40554a6e400dcf70524dd02ffc33a5e6', maxDate: today.format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.filters.fromDate, toDate: this.filters.toDate, onDatesChanged: e => this.updateFilters({ fromDate: e.detail.from, toDate: e.detail.to }) })), h("div", { key: '53fce0c94533d0aa0d74665457204ad2d3405ed7', class: "filters-bar__search-group" }, h("div", { key: '5dabddb4b105344814f5ecad5a20eb79689f24b5', class: "filters-bar__type-group" }, h("wa-select", { key: 'ab3409be0b7f2e488d754dcdedc5e28217c5233e', class: "filters-bar__status-select", value: this.filters.type, defaultValue: this.filters.type, onchange: e => this.updateFilters({ type: e.target.value }), size: "s", placeholder: t('Lcz_DocumentTypePlaceholder', { fallback: 'Document Type' }) }, this.typeOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("wa-switch", { key: 'c35cf04a08fd01a13232d3d2df3d709ed095883d', class: "filters-bar__tax-switch", checked: this.filters.taxableOnly, onchange: e => this.updateFilters({ taxableOnly: e.target.checked }) }, t('Lcz_Taxes', { fallback: 'Taxes' })), h("wa-switch", { key: '17ca967d067c368cc2e9cb72282a7017a7fbf0f1', class: "filters-bar__proforma-switch", checked: this.filters.proformaOnly, onchange: e => {
                const updated = { ...this.filters, proformaOnly: e.target.checked };
                this.filtersChange.emit(updated);
                this.applyFilters.emit(updated);
            } }, t('Lcz_Proforma', { fallback: 'Proforma' }))), h("ir-input", { key: '9b4d4904e5860503951cf8a65d89ccd38472eed8', class: "filters-bar__search-input", placeholder: t('Lcz_SearchByDocNumber', { fallback: 'Search by doc number' }), value: this.docNumber, "onText-change": e => {
                this.docNumber = e.detail;
                this.emitSearchDebounced(e.detail);
            }, withClear: true }, h("wa-icon", { key: '1b72350df2c6c1f6f39b3441f06789c7f7d1ecf6', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: '583247fe363c044d7f3a1d57c06fd3e4d75f3ff5', variant: "neutral", appearance: "outlined", type: "submit" }, h("wa-icon", { key: 'cbefdf9dae72db730d2f7378ef261ad8968bb946', name: "magnifying-glass" }))))));
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
