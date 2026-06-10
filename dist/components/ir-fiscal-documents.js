import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { h as hooks } from './moment.js';
import { C as CityLedgerService } from './index5.js';
import { F as FdTypes } from './enums.js';
import { d as defineCustomElement$q } from './ir-air-date-picker2.js';
import { d as defineCustomElement$p } from './ir-autocomplete2.js';
import { d as defineCustomElement$o } from './ir-autocomplete-option2.js';
import { d as defineCustomElement$n } from './ir-button2.js';
import { d as defineCustomElement$m } from './ir-cl-status-tag2.js';
import { d as defineCustomElement$l } from './ir-custom-button2.js';
import { d as defineCustomElement$k } from './ir-date-range-filter2.js';
import { d as defineCustomElement$j } from './ir-date-select2.js';
import { d as defineCustomElement$i } from './ir-dialog2.js';
import { d as defineCustomElement$h } from './ir-fd-confirm-dialog2.js';
import { d as defineCustomElement$g } from './ir-fiscal-documents-filters2.js';
import { d as defineCustomElement$f } from './ir-fiscal-documents-table2.js';
import { d as defineCustomElement$e } from './ir-icons2.js';
import { d as defineCustomElement$d } from './ir-input2.js';
import { d as defineCustomElement$c } from './ir-interceptor2.js';
import { d as defineCustomElement$b } from './ir-otp2.js';
import { d as defineCustomElement$a } from './ir-otp-modal2.js';
import { d as defineCustomElement$9 } from './ir-page2.js';
import { d as defineCustomElement$8 } from './ir-picker2.js';
import { d as defineCustomElement$7 } from './ir-picker-item2.js';
import { d as defineCustomElement$6 } from './ir-spinner2.js';
import { d as defineCustomElement$5 } from './ir-toast2.js';
import { d as defineCustomElement$4 } from './ir-toast-alert2.js';
import { d as defineCustomElement$3 } from './ir-toast-provider2.js';
import { d as defineCustomElement$2 } from './ir-validator2.js';

const irFiscalDocumentsCss = ".sc-ir-fiscal-documents-h{display:block}";
const IrFiscalDocumentsStyle0 = irFiscalDocumentsCss;

const IrFiscalDocuments$1 = /*@__PURE__*/ proxyCustomElement(class IrFiscalDocuments extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    ticket;
    baseurl;
    language = 'en';
    propertyid;
    filters = {
        fromDate: undefined,
        toDate: undefined,
        docNumber: '',
        taxableOnly: false,
        type: 'all',
        proformaOnly: false,
        folioType: 'all',
        agentId: null,
        guestId: null,
    };
    rows = [];
    isLoading = false;
    hasFetched = false;
    tokenService = new Token();
    cityLedgerService = new CityLedgerService();
    componentWillLoad() {
        if (this.baseurl) {
            this.tokenService.setBaseUrl(this.baseurl);
        }
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        if (this.baseurl) {
            this.tokenService.setBaseUrl(this.baseurl);
        }
        this.tokenService.setToken(this.ticket);
    }
    async fetchFiscalDocuments(filters) {
        if (!filters.fromDate && !filters.toDate)
            return;
        this.isLoading = true;
        const effectiveFrom = filters.fromDate ? filters.fromDate : hooks(filters.toDate).subtract(5, 'years').format('YYYY-MM-DD');
        const effectiveTo = filters.toDate ? filters.toDate : hooks(filters.fromDate).add(5, 'years').format('YYYY-MM-DD');
        const listFdTypeCode = filters.proformaOnly
            ? [FdTypes.Proforma]
            : filters.type === 'all'
                ? [FdTypes.Invoice, FdTypes.Receipt, FdTypes.CreditNote, FdTypes.DebitNote, FdTypes.Draft, FdTypes.CreditReceipt]
                : [filters.type];
        try {
            // Only the agent-scoped folio maps onto the existing city-ledger endpoint
            // (it requires AGENCY_ID). The "all folios" and "guest folio" scopes need a
            // dedicated backend endpoint that is not available yet.
            if (filters.folioType === 'agent' && filters.agentId) {
                const result = await this.cityLedgerService.getFiscalDocuments({
                    AGENCY_ID: filters.agentId,
                    START_DATE: effectiveFrom,
                    END_DATE: effectiveTo,
                    DOC_NUMBER: filters.docNumber || '',
                    LIST_FD_TYPE_CODE: listFdTypeCode,
                });
                this.rows = result ?? [];
            }
            else {
                // TODO: wire all-folios / guest-folio fetch once the backend endpoint exists.
                console.warn('[ir-fiscal-documents] fetch for folioType="%s" is not wired yet — no endpoint available.', filters.folioType);
                this.rows = [];
            }
        }
        catch (err) {
            console.error('[ir-fiscal-documents] getFiscalDocuments error:', err);
        }
        finally {
            this.isLoading = false;
            this.hasFetched = true;
        }
    }
    render() {
        return (h("ir-page", { key: 'ee54424ea6626dfde52a0861b779bc3bc313d7e0', label: "Fiscal Documents" }, h("ir-fiscal-documents-filters", { key: '2f3ee4ee75abfe79de0ba79cca55b69e92a6404d', propertyId: this.propertyid, filters: this.filters, onFiltersChange: e => (this.filters = e.detail), onApplyFilters: e => {
                this.filters = e.detail;
                this.fetchFiscalDocuments(e.detail);
            } }), h("ir-fiscal-documents-table", { key: 'f46a05231ed141130bcd69c2ce9a4bc67d4a6a65', rows: this.rows, isLoading: this.isLoading, hasFetched: this.hasFetched, taxableOnly: this.filters.taxableOnly, hasDates: !!(this.filters.fromDate && this.filters.toDate), fromDate: this.filters.fromDate, toDate: this.filters.toDate, folioType: this.filters.folioType, agentId: this.filters.agentId, guestId: this.filters.guestId, ticket: this.ticket, propertyId: this.propertyid, onFetchRequested: () => this.fetchFiscalDocuments(this.filters) })));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
    static get style() { return IrFiscalDocumentsStyle0; }
}, [2, "ir-fiscal-documents", {
        "ticket": [1],
        "baseurl": [1],
        "language": [1],
        "propertyid": [2],
        "filters": [32],
        "rows": [32],
        "isLoading": [32],
        "hasFetched": [32]
    }, undefined, {
        "ticket": ["handleTicketChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-fiscal-documents", "ir-air-date-picker", "ir-autocomplete", "ir-autocomplete-option", "ir-button", "ir-cl-status-tag", "ir-custom-button", "ir-date-range-filter", "ir-date-select", "ir-dialog", "ir-fd-confirm-dialog", "ir-fiscal-documents-filters", "ir-fiscal-documents-table", "ir-icons", "ir-input", "ir-interceptor", "ir-otp", "ir-otp-modal", "ir-page", "ir-picker", "ir-picker-item", "ir-spinner", "ir-toast", "ir-toast-alert", "ir-toast-provider", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-fiscal-documents":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrFiscalDocuments$1);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-autocomplete-option":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-cl-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-date-range-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-fd-confirm-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-fiscal-documents-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-fiscal-documents-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-toast-provider":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrFiscalDocuments = IrFiscalDocuments$1;
const defineCustomElement = defineCustomElement$1;

export { IrFiscalDocuments, defineCustomElement };

//# sourceMappingURL=ir-fiscal-documents.js.map