import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { C as CityLedgerService } from './index6.js';
import { d as defineCustomElement$b } from './ir-city-ledger-fiscal-documents-filters2.js';
import { d as defineCustomElement$a } from './ir-city-ledger-fiscal-documents-table2.js';
import { d as defineCustomElement$9 } from './ir-cl-invoice-preview2.js';
import { d as defineCustomElement$8 } from './ir-custom-button2.js';
import { d as defineCustomElement$7 } from './ir-custom-date-range2.js';
import { d as defineCustomElement$6 } from './ir-date-range-filter2.js';
import { d as defineCustomElement$5 } from './ir-date-select2.js';
import { d as defineCustomElement$4 } from './ir-dialog2.js';
import { d as defineCustomElement$3 } from './ir-input2.js';
import { d as defineCustomElement$2 } from './ir-preview-screen-dialog2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irCityLedgerFiscalDocumentsCss = ".sc-ir-city-ledger-fiscal-documents-h{display:block}.fiscal-documents.sc-ir-city-ledger-fiscal-documents{display:flex;flex-direction:column;gap:0.875rem}";
const IrCityLedgerFiscalDocumentsStyle0 = irCityLedgerFiscalDocumentsCss;

const IrCityLedgerFiscalDocuments = /*@__PURE__*/ proxyCustomElement(class IrCityLedgerFiscalDocuments extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
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
        return (h(Host, { key: 'ec69e41e3177f017fe05fed8bc5622e04d3293bf' }, h("section", { key: '575ecac7e908d42269cefe355e4d2e9ba1001418', class: "fiscal-documents", "aria-label": "City ledger fiscal documents" }, h("ir-city-ledger-fiscal-documents-filters", { key: '038fe2548c17e280fb29abfc9005f7aa4ca8355f', filters: this.filters, onFiltersChange: event => {
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
            } }), h("ir-city-ledger-fiscal-documents-table", { key: 'a518a16e2c26424052bd546459bd79660b0db4d4', isLoading: this.isLoading, rows: this.filteredDocuments, currencySymbol: this.currencySymbol, currencies: this.currencies, taxableOnly: this.filters.taxableOnly, hasDates: !!(this.filters.fromDate && this.filters.toDate), ticket: this.ticket, propertyId: this.propertyId, agentId: this.agentId, fromDate: this.filters.fromDate, toDate: this.filters.toDate }))));
    }
    static get style() { return IrCityLedgerFiscalDocumentsStyle0; }
}, [2, "ir-city-ledger-fiscal-documents", {
        "agentId": [2, "agent-id"],
        "currencySymbol": [1, "currency-symbol"],
        "currencies": [16],
        "ticket": [1],
        "propertyId": [2, "property-id"],
        "filters": [32],
        "fiscalDocuments": [32],
        "isLoading": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-city-ledger-fiscal-documents", "ir-city-ledger-fiscal-documents-filters", "ir-city-ledger-fiscal-documents-table", "ir-cl-invoice-preview", "ir-custom-button", "ir-custom-date-range", "ir-date-range-filter", "ir-date-select", "ir-dialog", "ir-input", "ir-preview-screen-dialog", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-city-ledger-fiscal-documents":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCityLedgerFiscalDocuments);
            }
            break;
        case "ir-city-ledger-fiscal-documents-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-city-ledger-fiscal-documents-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-cl-invoice-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-custom-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-date-range-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-preview-screen-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrCityLedgerFiscalDocuments as I, defineCustomElement as d };

//# sourceMappingURL=ir-city-ledger-fiscal-documents2.js.map