import { r as registerInstance, h } from './index-D7D7fhZS.js';
import { T as Token } from './Token-DEDKqWud.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { C as CityLedgerService, F as FdTypes } from './index-TFU14CZ7.js';
import './axios-CleaxLzD.js';
import './index-DeW5X45W.js';
import './utils-CRHW_k78.js';
import './calendar-data-15-64PrB.js';
import './index-TzZ5wfUy.js';
import './locales.store-C0aS6UDK.js';
import './type-D7rOPtKA.js';

const irFiscalDocumentsCss = () => `.sc-ir-fiscal-documents-h{display:block}`;

const IrFiscalDocuments = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("ir-page", { key: '357dcce56faf5f3adafc6198d61200dcbeb5d0b9', label: "Fiscal Documents" }, h("ir-fiscal-documents-filters", { key: 'f6db2c179bff01b3f3a0a196d78a0cb32604a915', propertyId: this.propertyid, filters: this.filters, onFiltersChange: e => (this.filters = e.detail), onApplyFilters: e => {
                this.filters = e.detail;
                this.fetchFiscalDocuments(e.detail);
            } }), h("ir-fiscal-documents-table", { key: 'a566419cbb5516ce3abfc90ecf574bf4989d30d6', rows: this.rows, isLoading: this.isLoading, hasFetched: this.hasFetched, taxableOnly: this.filters.taxableOnly, hasDates: !!(this.filters.fromDate && this.filters.toDate), fromDate: this.filters.fromDate, toDate: this.filters.toDate, folioType: this.filters.folioType, agentId: this.filters.agentId, guestId: this.filters.guestId, ticket: this.ticket, propertyId: this.propertyid, onFetchRequested: () => this.fetchFiscalDocuments(this.filters) })));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrFiscalDocuments.style = irFiscalDocumentsCss();

export { IrFiscalDocuments as ir_fiscal_documents };
