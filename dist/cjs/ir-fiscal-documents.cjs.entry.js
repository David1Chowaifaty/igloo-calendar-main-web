'use strict';

var index = require('./index-DYQrLNin.js');
var Token = require('./Token-mN7PQKGF.js');
var moment = require('./moment-CdViwxPQ.js');
var index$1 = require('./index-Dd_1v2qq.js');
var enums = require('./enums-BfYSWFRQ.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./index-CLqkDPTC.js');
require('./utils-DgT4kKsD.js');
require('./calendar-data-R3j-WBLW.js');
require('./index-C59pxKl1.js');
require('./locales.store-6IlEbCjL.js');
require('./type-Dy9pVS4V.js');

const irFiscalDocumentsCss = () => `.sc-ir-fiscal-documents-h{display:block}`;

const IrFiscalDocuments = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
    tokenService = new Token.Token();
    cityLedgerService = new index$1.CityLedgerService();
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
        const effectiveFrom = filters.fromDate ? filters.fromDate : moment.hooks(filters.toDate).subtract(5, 'years').format('YYYY-MM-DD');
        const effectiveTo = filters.toDate ? filters.toDate : moment.hooks(filters.fromDate).add(5, 'years').format('YYYY-MM-DD');
        const listFdTypeCode = filters.proformaOnly
            ? [enums.FdTypes.Proforma]
            : filters.type === 'all'
                ? [enums.FdTypes.Invoice, enums.FdTypes.Receipt, enums.FdTypes.CreditNote, enums.FdTypes.DebitNote, enums.FdTypes.Draft, enums.FdTypes.CreditReceipt]
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
        return (index.h("ir-page", { key: '1efa152cfac719a0985884006edf7d87cbd2a496', label: "Fiscal Documents" }, index.h("ir-fiscal-documents-filters", { key: '02533bcea3658a649bcd1bcd6dfeb0d923033e63', propertyId: this.propertyid, filters: this.filters, onFiltersChange: e => (this.filters = e.detail), onApplyFilters: e => {
                this.filters = e.detail;
                this.fetchFiscalDocuments(e.detail);
            } }), index.h("ir-fiscal-documents-table", { key: '1dc461cc3fcb0a5b92312f2b4d6a644c2b1fd45f', rows: this.rows, isLoading: this.isLoading, hasFetched: this.hasFetched, taxableOnly: this.filters.taxableOnly, hasDates: !!(this.filters.fromDate && this.filters.toDate), fromDate: this.filters.fromDate, toDate: this.filters.toDate, folioType: this.filters.folioType, agentId: this.filters.agentId, guestId: this.filters.guestId, ticket: this.ticket, propertyId: this.propertyid, onFetchRequested: () => this.fetchFiscalDocuments(this.filters) })));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrFiscalDocuments.style = irFiscalDocumentsCss();

exports.ir_fiscal_documents = IrFiscalDocuments;
