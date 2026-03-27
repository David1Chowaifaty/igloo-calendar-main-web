import { Host, h } from "@stencil/core";
import { CityLedgerService } from "../../../services/city-ledger";
export class IrCityLedgerFiscalDocuments {
    agentId = null;
    currencySymbol = '$';
    currencies = [];
    ticket;
    propertyId;
    filters = {
        fromDate: null,
        toDate: null,
        docNumber: '',
        taxableOnly: false,
        type: 'all',
    };
    fiscalDocuments = [];
    isLoading = false;
    cityLedgerService = new CityLedgerService();
    get filteredDocuments() {
        return this.fiscalDocuments;
    }
    async fetchFiscalDocuments(filters) {
        if (!this.agentId || !filters.fromDate || !filters.toDate)
            return;
        this.isLoading = true;
        try {
            const result = await this.cityLedgerService.getFiscalDocuments({
                AGENCY_ID: this.agentId,
                FROM_DATE: filters.fromDate,
                END_DATE: filters.toDate,
                DOC_NUMBER: filters.docNumber || '',
                FD_TYPE_CODE: filters.type === 'all' ? null : filters.type,
            });
            this.fiscalDocuments = result ?? [];
        }
        catch (err) {
            console.error('[ir-city-ledger-fiscal-documents] getFiscalDocuments error:', err);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        return (h(Host, { key: '1f6f543ae5b78ea686258ff538cf34572191e15f' }, h("section", { key: '977f339c3620e3fc194b2af05be46cd60909cfc4', class: "fiscal-documents", "aria-label": "City ledger fiscal documents" }, h("ir-city-ledger-fiscal-documents-filters", { key: '44a4d2786a2c341740aced623122d0a1193a5d38', filters: this.filters, onFiltersChange: event => {
                const prev = this.filters;
                this.filters = event.detail;
                const taxableOnlyChanged = prev.taxableOnly !== event.detail.taxableOnly;
                const onlyTaxableOnlyChanged = taxableOnlyChanged &&
                    prev.fromDate === event.detail.fromDate &&
                    prev.toDate === event.detail.toDate &&
                    prev.docNumber === event.detail.docNumber &&
                    prev.type === event.detail.type;
                if (!onlyTaxableOnlyChanged) {
                    this.fetchFiscalDocuments(event.detail);
                }
            } }), h("ir-city-ledger-fiscal-documents-table", { key: 'ce8b9c796c5413e6e67ef58a867a9f2e19c87c22', isLoading: this.isLoading, rows: this.filteredDocuments, currencySymbol: this.currencySymbol, currencies: this.currencies, taxableOnly: this.filters.taxableOnly, hasDates: !!(this.filters.fromDate && this.filters.toDate), ticket: this.ticket, propertyId: this.propertyId, agentId: this.agentId, fromDate: this.filters.fromDate, toDate: this.filters.toDate }))));
    }
    static get is() { return "ir-city-ledger-fiscal-documents"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-city-ledger-fiscal-documents.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-city-ledger-fiscal-documents.css"]
        };
    }
    static get properties() {
        return {
            "agentId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number | null",
                    "resolved": "number",
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
                "attribute": "agent-id",
                "reflect": false,
                "defaultValue": "null"
            },
            "currencySymbol": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "currency-symbol",
                "reflect": false,
                "defaultValue": "'$'"
            },
            "currencies": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICurrency[]",
                    "resolved": "ICurrency[]",
                    "references": {
                        "ICurrency": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::ICurrency"
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
                "defaultValue": "[]"
            },
            "ticket": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "ticket",
                "reflect": false
            },
            "propertyId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "property-id",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "filters": {},
            "fiscalDocuments": {},
            "isLoading": {}
        };
    }
}
//# sourceMappingURL=ir-city-ledger-fiscal-documents.js.map
