'use strict';

var index = require('./index-OzksjAXP.js');
var cityLedger_service = require('./city-ledger.service-dGsL5iDm.js');
var index$1 = require('./index-DyWMrNm8.js');
var moment = require('./moment-CdViwxPQ.js');
var debounce = require('./debounce-Be8tSGtB.js');
var index$2 = require('./index-CLqkDPTC.js');
var realtime_service = require('./realtime.service-COdIt6Z-.js');
var calendarData = require('./calendar-data-BbZbFHz-.js');
var v4 = require('./v4-Bq3ldsQe.js');
var utils = require('./utils-BZv1W7LE.js');
var useTable = require('./useTable-BN32DOaV.js');
var functions = require('./functions-BU3I74OA.js');
require('./axios-C-Phc0sj.js');
require('./locales.store-BaDo11sT.js');
require('./index-BJltewV-.js');
require('./booking.dto-_IwrBIs_.js');
require('./type-DzNPp0zr.js');

const irCityLedgerFiscalDocumentsCss = () => `.sc-ir-city-ledger-fiscal-documents-h{display:block;max-width:1000px;margin-inline:auto}.fiscal-documents.sc-ir-city-ledger-fiscal-documents{display:flex;flex-direction:column;gap:0.875rem}`;

const IrCityLedgerFiscalDocuments = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clFiscalFiltersChange = index.createEvent(this, "clFiscalFiltersChange");
    }
    agentId = null;
    currencySymbol = '$';
    currencies = [];
    ticket;
    propertyId;
    initialFilters;
    clFiscalFiltersChange;
    filters = {
        fromDate: undefined,
        toDate: undefined,
        docNumber: '',
        taxableOnly: false,
        type: 'all',
        proformaOnly: false,
    };
    componentWillLoad() {
        if (this.initialFilters) {
            this.filters = { ...this.initialFilters };
        }
    }
    fiscalDocuments = [];
    isLoading = false;
    hasFetched = false;
    cityLedgerService = new cityLedger_service.CityLedgerService();
    handleAgentIdChange() {
        this.fiscalDocuments = [];
        this.hasFetched = false;
    }
    get filteredDocuments() {
        return this.fiscalDocuments;
    }
    async fetchFiscalDocuments(filters) {
        if (!this.agentId || (!filters.fromDate && !filters.toDate))
            return;
        this.isLoading = true;
        const effectiveFrom = this.filters.fromDate ? this.filters.fromDate : moment.hooks(filters.toDate).subtract(5, 'years').format('YYYY-MM-DD');
        const effectiveTo = filters.toDate ? this.filters.toDate : moment.hooks(filters.fromDate).add(5, 'years').format('YYYY-MM-DD');
        try {
            const result = await this.cityLedgerService.getFiscalDocuments({
                AGENCY_ID: this.agentId,
                START_DATE: effectiveFrom,
                END_DATE: effectiveTo,
                DOC_NUMBER: filters.docNumber || '',
                LIST_FD_TYPE_CODE: filters.proformaOnly
                    ? [index$1.FdTypes.Proforma]
                    : filters.type === 'all'
                        ? [index$1.FdTypes.Invoice, index$1.FdTypes.Receipt, index$1.FdTypes.CreditNote, index$1.FdTypes.DebitNote, index$1.FdTypes.Draft, index$1.FdTypes.CreditReceipt]
                        : [filters.type],
            });
            this.fiscalDocuments = result ?? [];
        }
        catch (err) {
            console.error('[ir-city-ledger-fiscal-documents] getFiscalDocuments error:', err);
        }
        finally {
            this.isLoading = false;
            this.hasFetched = true;
        }
    }
    render() {
        return (index.h(index.Host, { key: '6f027ed6ffc17823d0b943340c98027880af1efd' }, index.h("section", { key: '7a6204f142ace8bc5710191a36eeba8e7a339ffa', class: "fiscal-documents", "aria-label": "City ledger fiscal documents" }, index.h("ir-city-ledger-fiscal-documents-filters", { key: 'e89cc31d74f2f3bea401b0d59259da15ea5e8a78', filters: this.filters, onFiltersChange: event => {
                this.filters = event.detail;
                this.clFiscalFiltersChange.emit(event.detail);
            }, onApplyFilters: event => {
                this.filters = event.detail;
                this.clFiscalFiltersChange.emit(event.detail);
                this.fetchFiscalDocuments(event.detail);
            } }), index.h("ir-city-ledger-fiscal-documents-table", { key: '28dfeba2d6e2a246bf2a0169974d53693774c2de', isLoading: this.isLoading, rows: this.filteredDocuments, currencySymbol: this.currencySymbol, currencies: this.currencies, taxableOnly: this.filters.taxableOnly, hasDates: !!(this.filters.fromDate && this.filters.toDate), hasFetched: this.hasFetched, ticket: this.ticket, propertyId: this.propertyId, agentId: this.agentId, fromDate: this.filters.fromDate, toDate: this.filters.toDate, onFetchRequested: () => this.fetchFiscalDocuments(this.filters) }))));
    }
    static get watchers() { return {
        "agentId": [{
                "handleAgentIdChange": 0
            }]
    }; }
};
IrCityLedgerFiscalDocuments.style = irCityLedgerFiscalDocumentsCss();

const irCityLedgerFiscalDocumentsFiltersCss = () => `.sc-ir-city-ledger-fiscal-documents-filters-h{display:block}.filters-bar.sc-ir-city-ledger-fiscal-documents-filters{display:flex;flex-direction:column;align-items:stretch;gap:0.75rem}.filters-bar__dates.sc-ir-city-ledger-fiscal-documents-filters{display:flex;align-items:center;width:100%}.filters-bar__date_picker.sc-ir-city-ledger-fiscal-documents-filters{width:100%}.filters-bar__search-group.sc-ir-city-ledger-fiscal-documents-filters{display:flex;flex-wrap:wrap;align-items:center;gap:0.5rem;width:100%}.filters-bar__type-group.sc-ir-city-ledger-fiscal-documents-filters{display:flex;align-items:center;gap:0.75rem;width:100%}.filters-bar__status-select.sc-ir-city-ledger-fiscal-documents-filters{flex:1;min-width:0}.filters-bar__tax-switch.sc-ir-city-ledger-fiscal-documents-filters{flex-shrink:0;white-space:nowrap}.filters-bar__proforma-switch.sc-ir-city-ledger-fiscal-documents-filters{flex-shrink:0;white-space:nowrap}.filters-bar__search-input.sc-ir-city-ledger-fiscal-documents-filters{flex:1;min-width:0}.filters-bar__search-icon.sc-ir-city-ledger-fiscal-documents-filters{font-size:0.875rem;color:var(--wa-color-text-quiet, #9ca3af);flex-shrink:0}@media (min-width: 640px){.filters-bar.sc-ir-city-ledger-fiscal-documents-filters{flex-direction:row;flex-wrap:wrap;align-items:center;gap:0.75rem}.filters-bar__dates.sc-ir-city-ledger-fiscal-documents-filters{width:100%;flex-shrink:0;min-width:0}.filters-bar__search-group.sc-ir-city-ledger-fiscal-documents-filters{flex:1;flex-wrap:nowrap;min-width:0;width:auto}.filters-bar__type-group.sc-ir-city-ledger-fiscal-documents-filters{width:auto;flex-shrink:0}.filters-bar__status-select.sc-ir-city-ledger-fiscal-documents-filters{flex:none;min-width:160px}.filters-bar__search-input.sc-ir-city-ledger-fiscal-documents-filters{flex:1}}@media (min-width: 768px){.filters-bar__search-input.sc-ir-city-ledger-fiscal-documents-filters{min-width:160px}}@media (min-width: 1024px){.filters-bar__search-input.sc-ir-city-ledger-fiscal-documents-filters{max-width:250px}.filters-bar.sc-ir-city-ledger-fiscal-documents-filters{flex-wrap:nowrap}.filters-bar__dates.sc-ir-city-ledger-fiscal-documents-filters{width:auto;flex-shrink:0;min-width:280px}.filters-bar__search-group.sc-ir-city-ledger-fiscal-documents-filters{flex:1;width:auto}}`;

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const today = moment.hooks();
const IrCityLedgerFiscalDocumentsFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.filtersChange = index.createEvent(this, "filtersChange");
        this.applyFilters = index.createEvent(this, "applyFilters");
    }
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
        { label: 'Invoices', value: index$1.FdTypes.Invoice },
        { label: 'Receipts', value: index$1.FdTypes.Receipt },
        { label: 'Credit Notes', value: index$1.FdTypes.CreditNote },
        // { label: 'Debit Notes', value: FdTypes.DebitNote },
        { label: 'Credit Receipt', value: index$1.FdTypes.CreditReceipt },
    ];
    updateFilters(patch) {
        this.filtersChange.emit({ ...this.filters, ...patch });
    }
    emitSearchDebounced(value) {
        this.updateFilters({ docNumber: value });
    }
    render() {
        return (index.h("form", { key: '411a6ae3665d839d6de3f68337265b569501c12f', onSubmit: e => {
                e.preventDefault();
                this.applyFilters.emit(this.filters);
            } }, index.h("div", { key: '3330a5d077ad3dc1e19feed0e5d8a3b50cf46c3a', class: "filters-bar" }, index.h("ir-validator", { key: 'e7c98cf209792eb3aceb41e4acc0f0f1e8e4e7cd', value: this.filters?.fromDate || this.filters?.toDate, schema: index$2.libExports.z.string().nonempty(), class: "filters-bar__dates" }, index.h("ir-date-range-filter", { key: '6e1bcf5149081e6ba4861bd802fa62a3f8a3fd09', maxDate: today.format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.filters.fromDate, toDate: this.filters.toDate, onDatesChanged: e => this.updateFilters({ fromDate: e.detail.from, toDate: e.detail.to }) })), index.h("div", { key: 'f52b2ea925ea21c212fc9cc5941a4fa3b4ddb33c', class: "filters-bar__search-group" }, index.h("div", { key: '409eb5a3a1e4608d787de3d0b71b007381853829', class: "filters-bar__type-group" }, index.h("wa-select", { key: '9390c8712209d8bdbc3e07ba84f5f16a1a3a71ac', class: "filters-bar__status-select", value: this.filters.type, defaultValue: this.filters.type, onchange: e => this.updateFilters({ type: e.target.value }), size: "small", placeholder: "Document Type" }, this.typeOptions.map(option => (index.h("wa-option", { value: option.value, key: option.value }, option.label)))), index.h("wa-switch", { key: 'e3a38dd6a0bce56016665b2a6fb393b72efb6ecb', class: "filters-bar__tax-switch", checked: this.filters.taxableOnly, onchange: e => this.updateFilters({ taxableOnly: e.target.checked }) }, "Taxes"), index.h("wa-switch", { key: 'd9d668ee3c852b0782e9e0251bf17c9c83cfbfbc', class: "filters-bar__proforma-switch", checked: this.filters.proformaOnly, onchange: e => {
                const updated = { ...this.filters, proformaOnly: e.target.checked };
                this.filtersChange.emit(updated);
                this.applyFilters.emit(updated);
            } }, "Proforma")), index.h("ir-input", { key: '337388c509965ad598628e8a0672f9b921ea6c79', class: "filters-bar__search-input", placeholder: "Search by doc number", value: this.docNumber, "onText-change": e => {
                this.docNumber = e.detail;
                this.emitSearchDebounced(e.detail);
            }, withClear: true }, index.h("wa-icon", { key: 'f9df8c03678831aad043a82a795430e37203949a', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), index.h("ir-custom-button", { key: '9c478afc43fa5c0f1ba54d0491e252e7dd21723d', variant: "neutral", appearance: "outlined", type: "submit" }, index.h("wa-icon", { key: '0bf2f597e632ade85f90eecaec93276df2e1d005', name: "magnifying-glass" }))))));
    }
};
__decorate$1([
    debounce.Debounce(300)
], IrCityLedgerFiscalDocumentsFilters.prototype, "emitSearchDebounced", null);
IrCityLedgerFiscalDocumentsFilters.style = irCityLedgerFiscalDocumentsFiltersCss();

const lockedStatus = new Set([index$1.ClTxTypeCode.Payment, index$1.ClTxTypeCode.CreditNote, index$1.ClTxTypeCode.DebitNote]);
function mapClTxToFolioRow(tx) {
    const status = tx.IS_LOCKED
        ? { id: 'billed', label: lockedStatus.has(tx.CL_TX_TYPE_CODE) ? 'Locked' : 'Billed', variant: 'success', description: '' }
        : tx.IS_HOLD
            ? { id: 'held', label: 'Held', variant: 'warning', description: '' }
            : { id: 'unbilled', label: 'Unbilled', variant: 'neutral', description: '' };
    return {
        _raw: tx,
        status,
        type: tx.CATEGORY,
        serviceDate: tx.SERVICE_DATE,
        bookingNumber: tx.BOOK_NBR ? tx.BOOK_NBR : null,
        docNumber: tx.DOC_NUMBER ?? tx.EXTERNAL_REF,
        description: tx.DESCRIPTION,
        debit: tx.DEBIT,
        credit: tx.CREDIT,
        balance: tx.RUNNING_BALANCE,
    };
}

const irCityLedgerFolioCss = () => `.sc-ir-city-ledger-folio-h{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem);max-width:1920px}`;

const IrCityLedgerFolio = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.folioSummaryUpdate = index.createEvent(this, "folioSummaryUpdate");
    }
    agent = null;
    propertyId;
    ticket;
    language = 'en';
    serviceCategoryOptions = [];
    currencies = [];
    isTransactionOpen = false;
    editingTransaction = null;
    deleteTarget = null;
    isDeleting = false;
    filters = {};
    data = [];
    isLoading = false;
    hasFetched = false;
    startingBalance = 0;
    closingBalance = 0;
    totalCount = 0;
    pageIndex = 0;
    pageSize = 25;
    isFetchingExcel = false;
    folioSummaryUpdate;
    cityLedgerService = new index$1.CityLedgerService();
    unsubscribeRealtime = null;
    clLockingPending = new Map();
    clLockingTimer = null;
    componentDidLoad() {
        this.unsubscribeRealtime = realtime_service.realtimeService.subscribe(this.propertyId, async (msg) => {
            await this.handleFolioMessage(msg.reason, msg.payload);
        });
    }
    disconnectedCallback() {
        this.unsubscribeRealtime?.();
        this.unsubscribeRealtime = null;
        if (this.clLockingTimer !== null) {
            clearTimeout(this.clLockingTimer);
            this.clLockingTimer = null;
        }
    }
    getFolioSocketHandlers() {
        // ─── Fill in once the server REASON string(s) and payload shape are known ───
        //
        // Relevance check (inline in each case):
        //   agent:  tx.AGENCY_ID !== this.agent?.id → return
        //   dates:  tx.SERVICE_DATE outside [filters.fromDate … filters.toDate] → return
        //
        // Running balance helper (inline in each case):
        //   let running = this.startingBalance;
        //   rows = rows.map(r => {
        //     running += (r.debit ?? 0) - (r.credit ?? 0);
        //     return { ...r, balance: running, _raw: { ...r._raw, RUNNING_BALANCE: running } };
        //   });
        //
        // return {
        //   'CL_TX_ADDED': async payload => {
        //     const tx = payload as ClTx;
        //     // relevance check...
        //     const row: FolioRow = { ...mapClTxToFolioRow(tx), _rowId: v4() };
        //     let running = this.startingBalance;
        //     this.data = [...this.data, row].map(r => {
        //       running += (r.debit ?? 0) - (r.credit ?? 0);
        //       return { ...r, balance: running, _raw: { ...r._raw, RUNNING_BALANCE: running } };
        //     });
        //   },
        //   'CL_TX_UPDATED': async payload => {
        //     const tx = payload as ClTx;
        //     // relevance check...
        //     const updated = this.data.map(r => (r._raw.CL_TX_ID === tx.CL_TX_ID ? { ...mapClTxToFolioRow(tx), _rowId: r._rowId } : r));
        //     let running = this.startingBalance;
        //     this.data = updated.map(r => {
        //       running += (r.debit ?? 0) - (r.credit ?? 0);
        //       return { ...r, balance: running, _raw: { ...r._raw, RUNNING_BALANCE: running } };
        //     });
        //   },
        //   'CL_TX_DELETED': async payload => {
        //     const id = (payload as { CL_TX_ID: number }).CL_TX_ID;
        //     const filtered = this.data.filter(r => r._raw.CL_TX_ID !== id);
        //     let running = this.startingBalance;
        //     this.data = filtered.map(r => {
        //       running += (r.debit ?? 0) - (r.credit ?? 0);
        //       return { ...r, balance: running, _raw: { ...r._raw, RUNNING_BALANCE: running } };
        //     });
        //   },
        // };
        return {
            CL_TX_LOCKING: async (payload) => {
                const tx = payload;
                if (tx.TRAVEL_AGENCY_ID !== this.agent?.id)
                    return;
                this.clLockingPending.set(tx.CL_TX_ID, tx.IS_LOCKED);
                if (this.clLockingTimer !== null)
                    clearTimeout(this.clLockingTimer);
                this.clLockingTimer = setTimeout(() => {
                    this.clLockingTimer = null;
                    this.applyClLockingUpdates();
                }, 150);
            },
            CL_TX_HOLD_TOGGLED: async (payload) => {
                const { cl_tx_id, agency_id, is_hold } = payload;
                if (agency_id !== this.agent?.id)
                    return;
                this.data = this.data.map(r => {
                    if (r._raw.CL_TX_ID !== cl_tx_id)
                        return r;
                    const updatedTx = { ...r._raw, IS_HOLD: is_hold };
                    return { ...mapClTxToFolioRow(updatedTx), _rowId: r._rowId };
                });
            },
            CL_TX_CREATED: async (payload) => {
                const tx = payload;
                if (tx.TRAVEL_AGENCY_ID !== this.agent?.id)
                    return;
                const row = { ...mapClTxToFolioRow(tx), _rowId: v4.v4() };
                let running = this.startingBalance;
                this.data = [...this.data, row].map(r => {
                    running += (r.debit ?? 0) - (r.credit ?? 0);
                    return { ...r, balance: running, _raw: { ...r._raw, RUNNING_BALANCE: running } };
                });
                this.totalCount += 1;
            },
        };
    }
    async handleFolioMessage(reason, payload) {
        const handler = this.getFolioSocketHandlers()[reason];
        if (!handler)
            return;
        await handler(payload);
    }
    applyClLockingUpdates() {
        const pending = this.clLockingPending;
        this.clLockingPending = new Map();
        this.data = this.data.map(r => {
            const isLocked = pending.get(r._raw.CL_TX_ID);
            if (isLocked === undefined)
                return r;
            return { ...mapClTxToFolioRow({ ...r._raw, IS_LOCKED: isLocked }), _rowId: r._rowId };
        });
    }
    async handleDelete() {
        const tx = this.deleteTarget;
        if (!tx)
            return;
        this.isDeleting = true;
        try {
            await this.cityLedgerService.issueManualCLTx({
                CL_TX_ID: tx.CL_TX_ID,
                AGENCY_ID: this.agent.id,
                SERVICE_DATE: tx.SERVICE_DATE,
                CL_TX_TYPE_CODE: tx.CL_TX_TYPE_CODE ?? '',
                DESCRIPTION: tx.DESCRIPTION,
                DEBIT: tx.DEBIT,
                CREDIT: tx.CREDIT,
                CURRENCY_ID: tx.CURRENCY_ID,
                PAY_METHOD_CODE: tx.PAY_METHOD_CODE ?? '',
                EXTERNAL_REF: tx.EXTERNAL_REF ?? '',
                IS_DELETE: true,
            });
            this.deleteTarget = null;
            await this.fetchFolioData();
        }
        catch (error) {
            console.error('Failed to delete city ledger entry', error);
        }
        finally {
            this.isDeleting = false;
        }
    }
    handleAgentIdChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.clearData();
        }
    }
    clearData() {
        this.data = [];
        this.hasFetched = false;
        this.startingBalance = 0;
        this.closingBalance = 0;
        this.totalCount = 0;
        this.pageIndex = 0;
    }
    // private sortFolioRows(rows: FolioRow[]): FolioRow[] {
    //   const roomRows = rows.filter(r => r.docNumber !== null);
    //   const standaloneRows = rows.filter(r => r.docNumber === null);
    //   const groups = new Map<string, FolioRow[]>();
    //   for (const row of roomRows) {
    //     const key = `${row.bookingNumber}__${row.docNumber}`;
    //     if (!groups.has(key)) groups.set(key, []);
    //     groups.get(key)!.push(row);
    //   }
    //   for (const group of groups.values()) {
    //     group.sort((a, b) => a.serviceDate.localeCompare(b.serviceDate));
    //   }
    //   const slots: { anchorDate: string; rows: FolioRow[] }[] = [];
    //   for (const row of standaloneRows) {
    //     slots.push({ anchorDate: row.serviceDate, rows: [row] });
    //   }
    //   for (const group of groups.values()) {
    //     slots.push({ anchorDate: group[0].serviceDate, rows: group });
    //   }
    //   slots.sort((a, b) => a.anchorDate.localeCompare(b.anchorDate));
    //   return slots.flatMap(slot => slot.rows);
    // }
    async fetchCl(withExport = false) {
        try {
            this.isFetchingExcel = withExport;
            if (!this.agent?.id || (!this.filters?.fromDate && !this.filters?.toDate))
                return;
            const effectiveFrom = this.filters.fromDate ? this.filters.fromDate : moment.hooks(this.filters.toDate).subtract(5, 'years').format('YYYY-MM-DD');
            const effectiveTo = this.filters.toDate ? this.filters.toDate : moment.hooks(this.filters.fromDate).add(5, 'years').format('YYYY-MM-DD');
            const startRow = this.pageIndex * this.pageSize;
            const statusParams = (() => {
                switch (this.filters?.status) {
                    case 'billed':
                        return { IS_LOCKED: true, IS_HOLD: null };
                    case 'held':
                        return { IS_LOCKED: null, IS_HOLD: true };
                    case 'unbilled':
                        return { IS_LOCKED: false, IS_HOLD: false };
                    case 'unbilled&checkedOut':
                        return { IS_LOCKED: false, IS_HOLD: false, IS_CHECKED_OUT_ONLY: true };
                    default:
                        return { IS_LOCKED: null, IS_HOLD: null };
                }
            })();
            return await this.cityLedgerService.fetchCL({
                AGENCY_ID: this.agent?.id,
                START_DATE: effectiveFrom,
                END_DATE: effectiveTo,
                START_ROW: startRow,
                END_ROW: startRow + this.pageSize - 1,
                SEARCH_QUERY: this.filters.search || null,
                ...statusParams,
                is_export_to_excel: withExport,
            });
        }
        catch (error) {
        }
        finally {
            this.isFetchingExcel = false;
        }
    }
    async fetchFolioData() {
        if (!this.agent?.id || (!this.filters?.fromDate && !this.filters?.toDate))
            return;
        const effectiveFrom = this.filters.fromDate ? this.filters.fromDate : moment.hooks(this.filters.toDate).subtract(5, 'years').format('YYYY-MM-DD');
        const effectiveTo = this.filters.toDate ? this.filters.toDate : moment.hooks(this.filters.fromDate).add(5, 'years').format('YYYY-MM-DD');
        try {
            this.isLoading = true;
            const currencyId = calendarData.calendar_data?.property?.currency?.id;
            const [result, statement] = await Promise.all([
                this.fetchCl(),
                this.cityLedgerService.getCLStatement({
                    AGENCY_ID: this.agent?.id,
                    CURRENCY_ID: currencyId,
                    START_DATE: effectiveFrom,
                    END_DATE: effectiveTo,
                }),
            ]);
            const txList = result?.My_Cl_tx ?? [];
            this.totalCount = result?.TOTAL_COUNT ?? 0;
            const startingBal = statement?.STARTING_BALANCE ?? 0;
            this.startingBalance = startingBal;
            this.closingBalance = statement?.ENDING_BALANCE ?? 0;
            let totalDebits = 0;
            let totalCredits = 0;
            let unbilledCount = 0;
            const mappedRows = txList.map((tx) => {
                const mapped = mapClTxToFolioRow(tx);
                totalDebits += tx.DEBIT || 0;
                totalCredits += tx.CREDIT || 0;
                if (mapped.status.label === 'Unbilled')
                    unbilledCount++;
                return { ...mapped, _rowId: v4.v4() };
            });
            this.data = mappedRows;
            this.folioSummaryUpdate.emit({
                startingBalance: startingBal,
                totalDebits,
                totalCredits,
                currentBalance: this.closingBalance,
                unbilledCount,
            });
        }
        catch (error) {
            console.error('Failed to fetch city ledger folio', error);
            this.data = [];
        }
        finally {
            this.isLoading = false;
            this.hasFetched = true;
        }
    }
    render() {
        return (index.h(index.Host, { key: '68cb0df66284d198750a2d90f9236b361b554b55' }, index.h("ir-city-ledger-folio-filters", { key: '14c9affb47740e80b497463bc5a9c484e171f6b2', onFiltersChange: e => (this.filters = e.detail), onApplyFilters: async (e) => {
                this.filters = e.detail;
                this.pageIndex = 0;
                await this.fetchFolioData();
            }, onAddEntry: () => {
                this.editingTransaction = null;
                this.isTransactionOpen = true;
            }, isExporting: this.isFetchingExcel, onExportFolio: () => {
                this.fetchCl(true);
            } }), index.h("ir-city-ledger-folio-table", { key: '40846e714e4ca367452245c1f637899c1b428ad6', agentId: this.agent?.id, propertyId: this.propertyId, ticket: this.ticket, language: this.language, hideBalanceInfo: !!(this.filters.search || (this.filters.status && this.filters.status !== 'all')), data: this.data, isLoading: this.isLoading, hasFetched: this.hasFetched, startingBalance: this.startingBalance, closingBalance: this.closingBalance, totalCount: this.totalCount, pageIndex: this.pageIndex, pageSize: this.pageSize, fromDate: this.filters?.fromDate, toDate: this.filters?.toDate, currencySymbol: calendarData.calendar_data.property?.currency?.symbol, currencies: this.currencies, onPageChange: async (e) => {
                this.pageIndex = e.detail.pageIndex;
                this.pageSize = e.detail.pageSize;
                await this.fetchFolioData();
            }, onFetchRequested: async () => {
                this.pageIndex = 0;
                await this.fetchFolioData();
            }, onGenerateInvoice: e => console.log('Generate invoice for', e.detail), onEditEntry: e => {
                this.editingTransaction = e.detail;
                this.isTransactionOpen = true;
            }, onDeleteEntry: e => {
                this.deleteTarget = e.detail;
            } }), index.h("ir-dialog", { key: 'fb35dcc20ea39d1ea4cfcaa14f65e9e7393e1062', label: "Delete Entry", open: !!this.deleteTarget, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!this.isDeleting)
                    this.deleteTarget = null;
            } }, index.h("p", { key: 'ec8ceb604957a062c70f4f3bfed30a240374af98' }, "Are you sure you want to delete this entry? This action cannot be undone."), index.h("div", { key: 'e442a1174c5c2515c673ac06c02927a627da3f48', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '38002f64e7c0ca841f479123bdb9b645b5548e6e', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => (this.deleteTarget = null) }, "Cancel"), index.h("ir-custom-button", { key: '9fc6e26e39e3fd1b1d7d12512885fa49e90f5985', size: "medium", variant: "danger", loading: this.isDeleting, onClickHandler: () => this.handleDelete() }, "Delete"))), index.h("ir-city-ledger-transaction-drawer", { key: '05307c3b02e0473ca77219df601784307d6aee0e', open: this.isTransactionOpen, serviceCategoryOptions: this.serviceCategoryOptions, agent: this.agent, transaction: this.editingTransaction, drawerLabel: this.editingTransaction ? 'Edit Entry' : 'New Entry', onTransactionSaved: () => {
                this.fetchFolioData();
            }, onCloseDrawer: () => {
                this.isTransactionOpen = false;
                this.editingTransaction = null;
            } })));
    }
    static get watchers() { return {
        "agentId": [{
                "handleAgentIdChange": 0
            }]
    }; }
};
IrCityLedgerFolio.style = irCityLedgerFolioCss();

const irCityLedgerFolioFiltersCss = () => `.sc-ir-city-ledger-folio-filters-h{display:block}.filters-bar.sc-ir-city-ledger-folio-filters{display:flex;flex-direction:column;align-items:stretch;gap:0.75rem}.filters-bar__dates.sc-ir-city-ledger-folio-filters{display:flex;align-items:center;width:100%}.filters-bar__date_picker.sc-ir-city-ledger-folio-filters{width:100%}.filters-bar__search-group.sc-ir-city-ledger-folio-filters{display:flex;align-items:center;gap:0.5rem;width:100%}.filters-bar__status-select.sc-ir-city-ledger-folio-filters{flex-shrink:0;min-width:110px}.filters-bar__search-input.sc-ir-city-ledger-folio-filters{flex:1;min-width:0}.filters-bar__search-icon.sc-ir-city-ledger-folio-filters{font-size:0.875rem;color:var(--wa-color-text-quiet, #9ca3af);flex-shrink:0}.filters-bar__actions.sc-ir-city-ledger-folio-filters{display:flex;align-items:center;gap:0.5rem;width:100%;justify-content:flex-end}@media (min-width: 640px){.filters-bar.sc-ir-city-ledger-folio-filters{flex-direction:row;flex-wrap:wrap;align-items:center;gap:0.75rem}.filters-bar__dates.sc-ir-city-ledger-folio-filters{width:100%;flex-shrink:0;min-width:0}.filters-bar__search-group.sc-ir-city-ledger-folio-filters{flex:1;min-width:0;width:auto}.filters-bar__status-select.sc-ir-city-ledger-folio-filters{min-width:130px;flex-shrink:0}.filters-bar__search-input.sc-ir-city-ledger-folio-filters{flex:1;min-width:0}.filters-bar__actions.sc-ir-city-ledger-folio-filters{flex-shrink:0;width:auto;justify-content:flex-end}}@media (min-width: 768px){.filters-bar__search-input.sc-ir-city-ledger-folio-filters{min-width:160px;max-width:none}}@media (min-width: 1024px){.filters-bar__search-input.sc-ir-city-ledger-folio-filters{max-width:250px}.filters-bar.sc-ir-city-ledger-folio-filters{flex-wrap:nowrap}.filters-bar__dates.sc-ir-city-ledger-folio-filters{width:auto;flex-shrink:0;min-width:280px}.filters-bar__search-group.sc-ir-city-ledger-folio-filters{flex:1;width:auto}.filters-bar__actions.sc-ir-city-ledger-folio-filters{width:auto;flex-shrink:0}}`;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrCityLedgerFolioFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.filtersChange = index.createEvent(this, "filtersChange");
        this.addEntry = index.createEvent(this, "addEntry");
        this.applyFilters = index.createEvent(this, "applyFilters");
        this.exportFolio = index.createEvent(this, "exportFolio");
    }
    isExporting;
    dates = {
        from: undefined,
        to: undefined,
    };
    statusFilter = 'all';
    searchQuery = '';
    filtersChange;
    addEntry;
    applyFilters;
    exportFolio;
    componentDidLoad() {
        this.emitFilters();
    }
    statuses = [
        { value: 'all', label: 'All entries' },
        { value: 'billed', label: 'Billed' },
        { value: 'held', label: 'Held' },
        { value: 'unbilled', label: 'Unbilled' },
        { value: 'unbilled&checkedOut', label: 'Unbilled checkouts' },
    ];
    emitFilters() {
        this.filtersChange.emit({
            fromDate: this.dates.from?.format('YYYY-MM-DD'),
            toDate: this.dates.to?.format('YYYY-MM-DD'),
            status: this.statusFilter,
            search: this.searchQuery,
        });
    }
    emitFiltersDebounced() {
        this.emitFilters();
    }
    render() {
        return (index.h("form", { key: '250112e060bb5b9e81823599ddf85606e37b1acf', onSubmit: e => {
                e.preventDefault();
                this.applyFilters.emit({
                    fromDate: this.dates.from?.format('YYYY-MM-DD'),
                    toDate: this.dates.to?.format('YYYY-MM-DD'),
                    status: this.statusFilter,
                    search: this.searchQuery,
                });
            } }, index.h("div", { key: '476ddd954855e82e05e4095b41cf16332b345d59', class: "filters-bar" }, index.h("ir-validator", { key: '7fdf74d27a1ddc4e2e8e4f7cfac6b1fb7b0ee306', value: this.dates?.from?.format('YYYY-MM-DD') || this.dates?.to?.format('YYYY-MM-DD'), schema: index$2.libExports.z.string().nonempty(), class: "filters-bar__dates" }, index.h("ir-date-range-filter", { key: '279a3b6c4048d33e31e891b67e7fb9c000586f7c', maxDate: moment.hooks().format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.dates.from?.format('YYYY-MM-DD') ?? undefined, toDate: this.dates.to?.format('YYYY-MM-DD') ?? undefined, onDatesChanged: e => {
                const { from, to } = e.detail;
                this.dates = {
                    from: from ? moment.hooks(from, 'YYYY-MM-DD') : null,
                    to: to ? moment.hooks(to, 'YYYY-MM-DD') : null,
                };
                this.emitFilters();
            } })), index.h("div", { key: 'f7af54e7dfb56ca39093d9c2b5da457896ee6b0c', class: "filters-bar__search-group" }, index.h("wa-select", { key: '52775db9331895fce7b7788f0a55ec94ad503a6a', class: "filters-bar__status-select", value: this.statusFilter, onchange: e => {
                this.statusFilter = e.target.value?.toString();
                this.emitFilters();
            }, "onwa-clear": () => {
                this.statusFilter = 'all';
                this.emitFilters();
            }, placeholder: "Status", size: "small", withClear: true }, this.statuses.map(s => (index.h("wa-option", { value: s.value, label: s.label }, s.label)))), index.h("ir-input", { key: '445723e38aa8038d5a432cec97aa95fd4b5f7d14', class: "filters-bar__search-input", "onText-change": e => {
                const wasCleared = this.searchQuery !== '' && e.detail === '';
                this.searchQuery = e.detail;
                if (wasCleared) {
                    this.applyFilters.emit({
                        fromDate: this.dates.from?.format('YYYY-MM-DD'),
                        toDate: this.dates.to?.format('YYYY-MM-DD'),
                        status: this.statusFilter,
                        search: '',
                    });
                }
                else {
                    this.emitFiltersDebounced();
                }
            }, onChange: () => {
                this.emitFiltersDebounced();
            }, onInputCleared: () => this.applyFilters.emit({
                fromDate: this.dates.from?.format('YYYY-MM-DD'),
                toDate: this.dates.to?.format('YYYY-MM-DD'),
                status: this.statusFilter,
                search: '',
            }), value: this.searchQuery, placeholder: "Booking# or doc number", withClear: true }, index.h("wa-icon", { key: 'a86a6a8c3473124c3857968f3dd7b70e76ef07ec', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), index.h("ir-custom-button", { key: 'dd6af179aa31e246838ac1225e869abbf6b29a64', variant: "neutral", type: "submit", appearance: "outlined" }, index.h("wa-icon", { key: '71cf26c0d84e71ba16191a87f986bd1aab21d170', name: "magnifying-glass" }))), index.h("div", { key: '1a995cbac254a2a3a3d0cf08339906ddb883847c', class: "filters-bar__actions" }, index.h("ir-custom-button", { key: 'a8ff7cd3067d8e6a6b0e8122242fb1129e4b5158', loading: this.isExporting, appearance: "outlined", disabled: !this.dates.from && !this.dates.to, onClickHandler: () => this.exportFolio.emit() }, index.h("wa-icon", { key: 'b4c3ddd02d0221514e5b8a010969cef058af21e6', name: "download", slot: "start" }), index.h("span", { key: 'a8e4e67befee23122a405a0f71917e5bbb58c538' }, "Export")), index.h("ir-custom-button", { key: 'a9ee08fce4e33c09338abde4ae9588c945ba6854', variant: "brand", appearance: "outlined", onClickHandler: () => this.addEntry.emit() }, "Add Entry")))));
    }
};
__decorate([
    debounce.Debounce(300)
], IrCityLedgerFolioFilters.prototype, "emitFiltersDebounced", null);
IrCityLedgerFolioFilters.style = irCityLedgerFolioFiltersCss();

const irCityLedgerFolioTableCss = () => `.sc-ir-city-ledger-folio-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-city-ledger-folio-table{overflow-x:auto}.table--container.sc-ir-city-ledger-folio-table,.data-table.sc-ir-city-ledger-folio-table{height:100%}.ir-table-row.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,      background-color 0.15s ease-in-out,      border-color 0.15s ease-in-out,      box-shadow 0.15s ease-in-out}.table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table tr.sc-ir-city-ledger-folio-table:last-child>td.sc-ir-city-ledger-folio-table{border-bottom:0 !important}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-city-ledger-folio-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-city-ledger-folio-table,.ir-table-row.sc-ir-city-ledger-folio-table{transition:color 0.15s ease-in-out,      background-color 0.15s ease-in-out,      border-color 0.15s ease-in-out,      box-shadow 0.15s ease-in-out}.sortable.sc-ir-city-ledger-folio-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sortable.sc-ir-city-ledger-folio-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sortable.sc-ir-city-ledger-folio-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sortable.sc-ir-city-ledger-folio-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-city-ledger-folio-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-city-ledger-folio-table svg.sc-ir-city-ledger-folio-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-city-ledger-folio-table:hover td.sc-ir-city-ledger-folio-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-city-ledger-folio-table:hover td.sc-ir-city-ledger-folio-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-city-ledger-folio-table:active td.sc-ir-city-ledger-folio-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,      background-color 0.15s ease-in-out,      border-color 0.15s ease-in-out,      box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-city-ledger-folio-table:hover td.sc-ir-city-ledger-folio-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-city-ledger-folio-table:active td.sc-ir-city-ledger-folio-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-city-ledger-folio-table .empty-row.sc-ir-city-ledger-folio-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-city-ledger-folio-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-city-ledger-folio-table{position:sticky !important;right:0;background-color:white}.sc-ir-city-ledger-folio-table-h{display:flex;flex-direction:column;border-radius:0.75rem;overflow:hidden;min-height:60dvh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);background-color:var(--wa-color-surface-default, #fff);box-shadow:0 1px 3px 0 rgb(0 0 0 / 0.05),      0 1px 2px -1px rgb(0 0 0 / 0.05)}.booking_heading.sc-ir-city-ledger-folio-table .heading_container.sc-ir-city-ledger-folio-table{display:flex;align-items:center;justify-content:space-between;width:100%;gap:0.5rem}.booking_heading.sc-ir-city-ledger-folio-table .heading_container--between.sc-ir-city-ledger-folio-table{justify-content:space-between}.booking_heading.sc-ir-city-ledger-folio-table .heading_container--end.sc-ir-city-ledger-folio-table{justify-content:flex-end}.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.grouped-cell.sc-ir-city-ledger-folio-table{padding-top:0 !important;padding-bottom:0 !important}.data-table--pagination.sc-ir-city-ledger-folio-table{margin-top:auto !important}.header-button.sc-ir-city-ledger-folio-table::part(start),.header-button.sc-ir-city-ledger-folio-table [part~="start"]{display:none}.header-button.sc-ir-city-ledger-folio-table::part(base),.header-button.sc-ir-city-ledger-folio-table [part~="base"]{justify-content:space-between;color:var(--wa-color-text-subtle, #6b7280);height:auto !important;width:auto !important;padding:0.25rem;border-radius:0.25rem;transition:color 0.15s ease,      background-color 0.15s ease}.header-button.sc-ir-city-ledger-folio-table:hover::part(base),.header-button.sc-ir-city-ledger-folio-table:hover [part~="base"]{color:var(--wa-color-text-normal);background-color:var(--wa-color-neutral-fill-quiet, #f3f4f6)}.input-column.sc-ir-city-ledger-folio-table{padding:0 !important}.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.input-column.sc-ir-city-ledger-folio-table{--input-width:150px;padding:0 !important;width:var(--input-width);max-width:var(--input-width);box-sizing:border-box}.group-expander.sc-ir-city-ledger-folio-table{height:100%}.group-expander.sc-ir-city-ledger-folio-table::part(base),.group-expander.sc-ir-city-ledger-folio-table [part~="base"]{font-size:1rem;height:100%;align-items:center;width:auto}.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table,.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{border-right:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb) !important}.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table:last-child,.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table:last-child{border-right:0 !important}.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sticky-column.sc-ir-city-ledger-folio-table,.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.sticky-column.sc-ir-city-ledger-folio-table{border-right:0 !important}.sticky-column.sc-ir-city-ledger-folio-table::after{content:'';position:absolute;top:0;right:0;width:1px;height:100%;background-color:var(--wa-color-neutral-border-quiet, #e5e7eb);pointer-events:none}.folio-table__empty-state.sc-ir-city-ledger-folio-table,.folio-table__loading.sc-ir-city-ledger-folio-table{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;flex:1;min-height:200px;color:var(--wa-color-text-subtle, #6b7280);font-size:0.875rem}.folio-table__date-prompt.sc-ir-city-ledger-folio-table{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;flex:1;padding:3rem 2rem;text-align:center}.folio-table__date-prompt-icon.sc-ir-city-ledger-folio-table{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.folio-table__date-prompt-title.sc-ir-city-ledger-folio-table{margin:0;font-size:0.9375rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.folio-table__date-prompt-subtitle.sc-ir-city-ledger-folio-table{margin:0;font-size:0.8125rem;color:var(--wa-color-text-subtle, #6b7280);max-width:28rem;line-height:1.5}.folio-table__no-results.sc-ir-city-ledger-folio-table{text-align:center;color:var(--wa-color-text-quiet, #9ca3af);font-size:0.875rem;padding:2rem 1rem}.folio-table__select-col.sc-ir-city-ledger-folio-table{width:40px !important;max-width:40px !important;min-width:40px !important;text-align:center !important;padding-inline:0.5rem !important}.folio-table__checkbox.sc-ir-city-ledger-folio-table{cursor:pointer;width:1rem;height:1rem;accent-color:var(--wa-color-brand-fill-loud)}.folio-table__row--selected.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{background-color:var(--wa-color-brand-fill-quiet, #eff6ff) !important}.folio-table__invoice-bar.sc-ir-city-ledger-folio-table{display:flex;align-items:center;gap:0.75rem;padding:0.625rem 1rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);border-bottom:1px solid var(--wa-color-brand-border-quiet, #bfdbfe);font-size:0.875rem;flex-wrap:wrap}.folio-table__invoice-bar-text.sc-ir-city-ledger-folio-table{display:flex;align-items:center;color:var(--wa-color-brand-on-quiet);font-weight:500;flex:1}.folio-table__balance.sc-ir-city-ledger-folio-table{font-variant-numeric:tabular-nums;font-weight:500;display:block;text-align:right;padding:var(--ir-cell-padding, 0.5rem 1rem)}.folio-table__balance--negative.sc-ir-city-ledger-folio-table{color:var(--wa-color-danger-fill-loud, #dc2626)}.balance-row__label.sc-ir-city-ledger-folio-table{display:flex;align-items:center;font-size:0.8125rem}.cell--align-end.sc-ir-city-ledger-folio-table{text-align:right !important}.cell--align-center.sc-ir-city-ledger-folio-table{text-align:center}.folio-table__status-cell.sc-ir-city-ledger-folio-table{display:flex;align-items:center;justify-content:space-between}.folio-table__col-label.sc-ir-city-ledger-folio-table{display:flex;align-items:center;gap:0.5rem}.folio-table__col-label--end.sc-ir-city-ledger-folio-table{justify-content:flex-end}.folio-table__col-label--center.sc-ir-city-ledger-folio-table{justify-content:center}.folio-table__description.sc-ir-city-ledger-folio-table{display:block;width:100%}.folio-table__heading--actions.sc-ir-city-ledger-folio-table,.folio-table__cell--actions.sc-ir-city-ledger-folio-table{text-align:center !important}.fiscal-table__action-trigger.--placeholder.sc-ir-city-ledger-folio-table{height:calc(24px + 0.02rem)}.fiscal-table__action-trigger.sc-ir-city-ledger-folio-table::part(base),.fiscal-table__action-trigger.sc-ir-city-ledger-folio-table [part~="base"]{width:24px;height:24px}.balance-row.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{background:var(--wa-color-brand-fill-quiet) !important;color:var(--wa-color-brand-on-quiet) !important;border-color:var(--wa-color-brand-border-quiet) !important;padding:0.75rem 1rem !important}.balance-row.sc-ir-city-ledger-folio-table td.sticky-column.sc-ir-city-ledger-folio-table{background:var(--wa-color-brand-fill-quiet) !important}`;

const DATE_DISPLAY_FORMAT$1 = 'MMM DD, YYYY';
const DATE_INPUT_FORMAT$1 = 'YYYY-MM-DD';
const IrCityLedgerFolioTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.pageChange = index.createEvent(this, "pageChange");
        this.generateInvoice = index.createEvent(this, "generateInvoice");
        this.fetchRequested = index.createEvent(this, "fetchRequested");
        this.editEntry = index.createEvent(this, "editEntry");
        this.deleteEntry = index.createEvent(this, "deleteEntry");
    }
    handleAction(value, row) {
        switch (value) {
            case 'hold-transaction':
                this.holdTargetRow = row;
                this.holdDialogRef.openModal();
                break;
            case 'edit-transaction':
                this.editEntry.emit(row._raw);
                break;
            case 'delete-transaction':
                this.deleteEntry.emit(row._raw);
                break;
        }
    }
    // ─── Props ───────────────────────────────────────────────────────────────
    agentId = null;
    propertyId;
    ticket;
    language = 'en';
    data = [];
    isLoading = false;
    startingBalance = 0;
    closingBalance = 0;
    totalCount = 0;
    pageIndex = 0;
    pageSize = 25;
    fromDate = '';
    toDate = '';
    hasFetched = false;
    currencySymbol = '$';
    currencies = [];
    hideBalanceInfo = false;
    // ─── State ───────────────────────────────────────────────────────────────
    tableState = {};
    selectedRowIds = new Set();
    holdTargetRow = null;
    bookingDrawerOpen = false;
    selectedBookingNumber = null;
    // ─── Events ──────────────────────────────────────────────────────────────
    pageChange;
    generateInvoice;
    fetchRequested;
    editEntry;
    deleteEntry;
    // ─── Private fields ──────────────────────────────────────────────────────
    columnHelper = useTable.createColumnHelper();
    pageSizes = [25, 50, 100];
    holdDialogRef;
    // ─── Utilities ───────────────────────────────────────────────────────────
    formatDate(date) {
        if (!date)
            return '';
        const m = moment.hooks(date, [DATE_INPUT_FORMAT$1, moment.hooks.ISO_8601], true);
        return m.isValid() ? m.format(DATE_DISPLAY_FORMAT$1) : date;
    }
    // ─── Selection ────────────────────────────────────────────────────────────
    get selectedUnbilledRows() {
        return this.data.filter(row => this.selectedRowIds.has(row._rowId) && row.status?.label === 'Unbilled');
    }
    handleHoldToggled(rowId, newIsHold) {
        // Note: optimistic local update — parent will re-fetch on next search
        const updatedData = this.data.map(row => {
            if (row._rowId !== rowId)
                return row;
            const updatedRaw = { ...row._raw, IS_HOLD: newIsHold };
            const status = newIsHold ? { id: 'held', label: 'Held', variant: 'warning', description: '' } : { id: 'unbilled', label: 'Unbilled', variant: 'neutral', description: '' };
            return { ...row, _raw: updatedRaw, status };
        });
        // Trigger re-render by reassigning (Stencil tracks Prop changes via reference)
        // Since data is a Prop we can't mutate it — we use a local state for optimistic UI
        this._localDataOverride = updatedData;
        this.holdTargetRow = null;
    }
    // Local override for optimistic hold/revert updates
    _localDataOverride = null;
    onDataChange() {
        this._localDataOverride = null;
    }
    get displayData() {
        return this._localDataOverride ?? this.data;
    }
    // ─── Currency helpers ─────────────────────────────────────────────────────
    getSymbol(currencyId) {
        const match = this.currencies.find(c => c.id === currencyId);
        return match?.symbol ?? this.currencySymbol;
    }
    // ─── Column definitions ──────────────────────────────────────────────────
    columns = [
        this.columnHelper.accessor(row => row.status.label, {
            id: 'status',
            header: 'Status',
            size: 200,
            cell: info => {
                if (info?.row?.original?._raw?.CL_TX_TYPE_CODE === index$1.ClTxTypeCode.OpeningBalance) {
                    return null;
                }
                return (index.h("div", { class: "folio-table__status-cell" }, index.h("ir-cl-status-tag", { transaction: info.row.original })));
            },
            enableGrouping: true,
            enableSorting: false,
        }),
        this.columnHelper.accessor('serviceDate', {
            enableSorting: false,
            header: 'Service Date',
            cell: info => this.formatDate(info.getValue()),
            aggregatedCell: info => this.formatDate(info.getValue()),
            enableGrouping: false,
            aggregationFn: (columnId, leafRows) => {
                if (!leafRows.length)
                    return undefined;
                const dates = leafRows
                    .map(row => row.getValue(columnId))
                    .filter(Boolean)
                    .map(date => new Date(date));
                if (!dates.length)
                    return undefined;
                const latest = new Date(Math.max(...dates.map(d => d.getTime())));
                return latest.toISOString().split('T')[0];
            },
        }),
        this.columnHelper.accessor('bookingNumber', {
            header: 'Booking #',
            cell: info => {
                const val = info.getValue();
                if (!val)
                    return null;
                return (index.h("ir-custom-button", { link: true, onClickHandler: () => {
                        this.selectedBookingNumber = val;
                        this.bookingDrawerOpen = true;
                    } }, val));
            },
            enableGrouping: true,
            enableSorting: false,
        }),
        this.columnHelper.accessor('description', {
            header: 'Description',
            cell: info => index.h("span", { class: "folio-table__description" }, info.getValue()),
            enableSorting: false,
            enableGrouping: true,
        }),
        this.columnHelper.accessor('docNumber', {
            header: 'Fiscal Doc',
            cell: info => index.h("span", null, info.getValue()),
            enableSorting: false,
            enableGrouping: true,
        }),
        this.columnHelper.accessor('debit', {
            header: 'Debit',
            cell: info => {
                const symbol = this.getSymbol(info.row.original._raw.CURRENCY_ID);
                return (index.h("ir-input-cell", { disabled: true, mask: 'price', value: info.getValue().toString() }, index.h("span", { slot: "start" }, symbol), index.h("span", null, info.getValue() ? utils.formatAmount(symbol, info.getValue()) : '')));
            },
            aggregatedCell: info => index.h("span", { style: { padding: 'var(--ir-cell-padding)' } }, utils.formatAmount(this.currencySymbol, Number(info.getValue()))),
            aggregationFn: 'sum',
            enableGrouping: false,
            enableSorting: false,
        }),
        this.columnHelper.accessor('credit', {
            header: 'Credit',
            cell: info => {
                const symbol = this.getSymbol(info.row.original._raw.CURRENCY_ID);
                return (index.h("ir-input-cell", { mask: 'price', disabled: true, value: info.getValue().toString() }, index.h("span", { slot: "start" }, symbol), index.h("span", null, info.getValue() ? utils.formatAmount(symbol, info.getValue()) : '')));
            },
            aggregatedCell: info => index.h("span", { style: { padding: 'var(--ir-cell-padding)' } }, utils.formatAmount(this.currencySymbol, Number(info.getValue()))),
            aggregationFn: 'sum',
            enableSorting: false,
            enableGrouping: false,
        }),
        this.columnHelper.accessor('balance', {
            header: 'Balance',
            cell: info => {
                const symbol = this.getSymbol(info.row.original._raw.CURRENCY_ID);
                return (index.h("ir-input-cell", { disabled: true, mask: 'price', value: info.getValue().toString() }, index.h("span", { slot: "start" }, symbol), index.h("span", null, info.getValue() ? utils.formatAmount(symbol, +info.getValue()) : '')));
            },
            enableSorting: false,
            enableGrouping: false,
        }),
        this.columnHelper.display({
            id: 'actions',
            header: 'Actions',
            size: 48,
            cell: info => {
                const row = info.row.original;
                if (row._raw.IS_LOCKED || row._raw.CL_TX_TYPE_CODE === index$1.ClTxTypeCode.OpeningBalance)
                    return index.h("div", { class: 'fiscal-table__action-trigger --placeholder' });
                const canEditOrDelete = cityLedger_service.actionableClTypes.has(row._raw.CL_TX_TYPE_CODE) && !row._raw.CATEGORY;
                return (index.h("wa-dropdown", { "onwa-hide": e => {
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                    }, "onwa-select": (e) => {
                        this.handleAction(e.detail.item.value, row);
                    } }, index.h("wa-button", { slot: "trigger", size: "small", variant: "neutral", appearance: "plain", class: "fiscal-table__action-trigger" }, index.h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1rem' } })), index.h("wa-dropdown-item", { value: "hold-transaction" }, row._raw.IS_HOLD ? 'Revert to Unbilled' : 'Hold entry'), canEditOrDelete && index.h("wa-dropdown-item", { value: "edit-transaction" }, "Edit"), canEditOrDelete && (index.h("wa-dropdown-item", { value: "delete-transaction", variant: "danger" }, "Delete"))));
            },
            enableSorting: false,
            enableGrouping: false,
        }),
    ];
    // ─── Table state ─────────────────────────────────────────────────────────
    onTableStateChange = (updater) => {
        const nextState = typeof updater === 'function' ? updater(this.tableState) : updater;
        if (JSON.stringify(this.tableState) === JSON.stringify(nextState))
            return;
        this.tableState = nextState;
    };
    renderCell = (cell) => {
        if (cell.getIsGrouped()) {
            return (index.h("wa-button", { appearance: "plain", size: "small", class: "group-expander", onClick: () => cell.row.toggleExpanded() }, index.h("wa-icon", { style: { fontSize: '0.875rem' }, slot: "start", name: cell.row.getIsExpanded() ? 'chevron-down' : 'chevron-up' }), useTable.flexRender(cell.column.columnDef.cell, cell.getContext()), " ", index.h("span", { slot: "end" }, "(", cell.row.subRows.length, ")")));
        }
        if (cell.getIsAggregated()) {
            return useTable.flexRender(cell.column.columnDef.aggregatedCell ?? cell.column.columnDef.cell, cell.getContext());
        }
        if (cell.getIsPlaceholder())
            return null;
        return useTable.flexRender(cell.column.columnDef.cell, cell.getContext());
    };
    // ─── Render helpers ──────────────────────────────────────────────────────
    renderTableHead(table) {
        return (index.h("thead", null, table.getHeaderGroups().map(headerGroup => (index.h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => {
            const canSort = header.column.getCanSort();
            const canGroup = header.column.getCanGroup();
            // const isGrouped = header.column.getIsGrouped();
            // const sortDirection = header.column.getIsSorted();
            const isNumericCol = ['debit', 'credit', 'balance'].includes(header.column.id);
            return (index.h("th", { key: header.id, class: {
                    'booking_heading': !header.isPlaceholder,
                    'cell--align-end': isNumericCol,
                    'cell--align-center': header.column.id === 'select',
                    'folio-table__heading--actions': header.column.id === 'actions',
                    'sticky-column': header.column.id === 'status',
                    'folio-table__select-col': header.column.id === 'select',
                }, style: header.column.id === 'bookingNumber' ? { paddingInline: '0' } : undefined }, !header.isPlaceholder && (index.h("div", { class: {
                    'heading_container': true,
                    'heading_container--between': canSort || canGroup,
                    'heading_container--end': isNumericCol,
                } }, index.h("div", { class: {
                    'folio-table__col-label': true,
                    'folio-table__col-label--end': isNumericCol,
                    'folio-table__col-label--center': header.column.id === 'select',
                } }, index.h("span", null, useTable.flexRender(header.column.columnDef.header, header.getContext())))))));
        }))))));
    }
    renderStartingBalanceRow() {
        return (index.h("tr", { class: "ir-table-row balance-row balance-row--start" }, index.h("td", { class: "sticky-column" }), index.h("td", null, this.formatDate(this.fromDate)), index.h("td", null), index.h("td", null, index.h("wa-icon", { name: "scale-balanced", style: { marginRight: '0.375rem', fontSize: '0.875rem' } }), "Starting Balance"), index.h("td", null), index.h("td", { class: "cell--align-end" }, this.startingBalance >= 0 ? utils.formatAmount(this.currencySymbol, this.startingBalance) : ''), index.h("td", { class: "cell--align-end" }, this.startingBalance < 0 ? utils.formatAmount(this.currencySymbol, this.startingBalance) : ''), index.h("td", { class: "cell--align-end" }, utils.formatAmount(this.currencySymbol, this.startingBalance)), index.h("td", null)));
    }
    renderEndingBalanceRow() {
        return (index.h("tr", { class: "ir-table-row balance-row balance-row--end" }, index.h("td", { class: "sticky-column" }), index.h("td", null, this.formatDate(this.toDate)), index.h("td", null), index.h("td", null, index.h("wa-icon", { name: "scale-balanced", style: { marginRight: '0.375rem', fontSize: '0.875rem' } }), "Ending Balance"), index.h("td", null), index.h("td", { class: "cell--align-end" }, this.closingBalance >= 0 ? utils.formatAmount(this.currencySymbol, Math.abs(this.closingBalance)) : ''), index.h("td", { class: "cell--align-end" }, this.closingBalance < 0 ? utils.formatAmount(this.currencySymbol, Math.abs(this.closingBalance)) : ''), index.h("td", { class: "cell--align-end" }, this.closingBalance < 0 ? '-' : '', utils.formatAmount(this.currencySymbol, Math.abs(this.closingBalance))), index.h("td", null)));
    }
    renderDataRows(table) {
        const rows = table.getRowModel().rows;
        if (rows.length === 0) {
            return (index.h("tr", null, index.h("td", { colSpan: this.columns.length + 1, class: "empty-row" }, index.h("ir-empty-state", null))));
        }
        return rows.map(row => {
            const isSelected = this.selectedRowIds.has(row.original._rowId);
            return (index.h("tr", { key: row.id, class: { 'ir-table-row': true, 'folio-table__row--selected': isSelected } }, row.getVisibleCells().map(cell => (index.h("td", { key: cell.id, class: {
                    'cell--align-end': ['debit', 'credit', 'balance'].includes(cell.column.id),
                    'cell--align-center': cell.column.id === 'select',
                    'sticky-column': cell.column.id === 'status',
                    'input-column': ['debit', 'credit', 'balance'].includes(cell.column.id),
                    'grouped-cell': cell.getIsGrouped(),
                    'folio-table__cell--actions': cell.column.id === 'actions',
                    'folio-table__select-col': cell.column.id === 'select',
                } }, this.renderCell(cell))))));
        });
    }
    // ─── Render ───────────────────────────────────────────────────────────────
    render() {
        if (!this.agentId) {
            return (index.h(index.Host, null, index.h("div", { class: "folio-table__empty-state" }, index.h("wa-icon", { name: "building-columns", style: { fontSize: '2.5rem', opacity: '0.3' } }), index.h("p", null, "Select an agent to view the folio ledger."))));
        }
        if (!this.hasFetched) {
            const hasDate = !!(this.fromDate || this.toDate);
            return (index.h(index.Host, null, index.h("div", { class: "folio-table__date-prompt" }, index.h("div", { class: "folio-table__date-prompt-icon" }, index.h("wa-icon", { name: "calendar-days" })), index.h("p", { class: "folio-table__date-prompt-title" }, "Select a date range to get started"), hasDate && (index.h("wa-animation", { play: true, iterations: 1, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, index.h("ir-custom-button", { size: "small", variant: "brand", onClickHandler: () => this.fetchRequested.emit() }, index.h("wa-icon", { slot: "start", name: "magnifying-glass" }), "Load Transactions"))))));
        }
        if (this.isLoading) {
            return (index.h(index.Host, null, index.h("div", { class: "folio-table__loading" }, index.h("ir-spinner", null))));
        }
        const visibleColumns = this.hideBalanceInfo ? this.columns.filter(c => c.accessorKey !== 'balance') : this.columns;
        const table = useTable.useTable({
            data: this.displayData,
            columns: visibleColumns,
            state: this.tableState,
            enableGrouping: false,
            onStateChange: this.onTableStateChange,
            getCoreRowModel: useTable.getCoreRowModel(),
            getSortedRowModel: useTable.getSortedRowModel(),
            getGroupedRowModel: useTable.getGroupedRowModel(),
            getExpandedRowModel: useTable.getExpandedRowModel(),
        });
        const total = this.totalCount;
        const pageCount = Math.ceil(total / this.pageSize);
        const showingFrom = total ? this.pageIndex * this.pageSize + 1 : 0;
        const showingTo = total ? Math.min(this.pageIndex * this.pageSize + this.displayData.length, total) : 0;
        const hasUnbilledSelected = this.selectedUnbilledRows.length > 0;
        return (index.h(index.Host, null, hasUnbilledSelected && (index.h("div", { class: "folio-table__invoice-bar" }, index.h("span", { class: "folio-table__invoice-bar-text" }, index.h("wa-icon", { name: "file-invoice", style: { marginRight: '0.375rem' } }), this.selectedUnbilledRows.length, " unbilled item", this.selectedUnbilledRows.length !== 1 ? 's' : '', " selected"), index.h("ir-custom-button", { size: "small", variant: "brand", onClickHandler: () => this.generateInvoice.emit(this.selectedUnbilledRows) }, index.h("wa-icon", { slot: "start", name: "file-invoice-dollar" }), "Generate Invoice"), index.h("ir-custom-button", { size: "small", variant: "neutral", appearance: "outlined", onClickHandler: () => (this.selectedRowIds = new Set()) }, "Clear Selection"))), index.h("div", { class: "table--container" }, index.h("table", { class: "table data-table" }, this.renderTableHead(table), index.h("tbody", null, !this.hideBalanceInfo && this.renderStartingBalanceRow(), this.renderDataRows(table), !this.hideBalanceInfo && this.renderEndingBalanceRow()))), index.h("ir-pagination", { class: "data-table--pagination", total: total, pages: pageCount, pageSize: this.pageSize, currentPage: this.pageIndex + 1, allowPageSizeChange: true, showing: { from: showingFrom, to: showingTo }, pageSizes: this.pageSizes, recordLabel: '', onPageChange: (event) => {
                event.stopPropagation();
                this.pageChange.emit({ pageIndex: event.detail.currentPage - 1, pageSize: this.pageSize });
            }, onPageSizeChange: (event) => {
                event.stopPropagation();
                if (event.detail.pageSize) {
                    this.pageChange.emit({ pageIndex: 0, pageSize: event.detail.pageSize });
                }
            } }), index.h("ir-hold-transaction-dialog", { row: this.holdTargetRow, currencySymbol: this.currencySymbol, ref: el => (this.holdDialogRef = el), onHoldToggled: e => this.handleHoldToggled(e.detail.rowId, e.detail.newIsHold) }), index.h("ir-booking-details-drawer", { open: this.bookingDrawerOpen, propertyId: this.propertyId, ticket: this.ticket, language: this.language, bookingNumber: this.selectedBookingNumber, onBookingDetailsDrawerClosed: () => (this.bookingDrawerOpen = false) })));
    }
    static get watchers() { return {
        "data": [{
                "onDataChange": 0
            }]
    }; }
};
IrCityLedgerFolioTable.style = irCityLedgerFolioTableCss();

const irCityLedgerStatementsCss = () => `.sc-ir-city-ledger-statements-h{display:block;max-width:1000px;margin-inline:auto}.cl-statements.sc-ir-city-ledger-statements{display:flex;flex-direction:column;gap:1rem}.preview-loading.sc-ir-city-ledger-statements{display:flex;align-items:center;justify-content:center;padding:3rem}.preview-body.sc-ir-city-ledger-statements{display:flex;justify-content:center;padding:1.5rem;min-height:100%}`;

const IrCityLedgerStatements = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clStmtFiltersChange = index.createEvent(this, "clStmtFiltersChange");
    }
    agentId = null;
    agentName = '';
    currencySymbol = '$';
    currencies = [];
    ticket;
    propertyId;
    initialFilters;
    clStmtFiltersChange;
    filters = { fromDate: null, toDate: null };
    componentWillLoad() {
        if (this.initialFilters?.fromDate || this.initialFilters?.toDate) {
            this.filters = { ...this.initialFilters };
        }
    }
    statement = null;
    rows = [];
    isLoading = false;
    hasFetched = false;
    printFilters = null;
    isFetchingPdf = false;
    pdfUrl = null;
    cityLedgerService = new index$1.CityLedgerService();
    handleAgentIdChange() {
        this.statement = null;
        this.rows = [];
        this.hasFetched = false;
        this.filters = { fromDate: null, toDate: null };
        this.printFilters = null;
        this.pdfUrl = null;
    }
    async handlePrintFiltersChange(next) {
        if (!next?.fromDate || !next?.toDate || !this.agentId) {
            this.pdfUrl = null;
            return;
        }
        this.isFetchingPdf = true;
        try {
            const url = await this.cityLedgerService.printClStatement({
                agency_id: String(this.agentId),
                from_date: next.fromDate,
                to_date: next.toDate,
            });
            this.pdfUrl = url;
        }
        catch (err) {
            console.error('[ir-city-ledger-statements] printClStatement error:', err);
        }
        finally {
            this.isFetchingPdf = false;
        }
    }
    async handleDownload() {
        if (!this.pdfUrl)
            return;
        const blob = await fetch(this.pdfUrl).then(r => r.blob());
        const objectUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = objectUrl;
        const from = this.printFilters?.fromDate ?? '';
        const to = this.printFilters?.toDate ?? '';
        a.download = `Statement_${from}_${to}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(objectUrl);
    }
    async fetchStatement(filters) {
        if (!this.agentId || !filters.fromDate || !filters.toDate)
            return;
        const currencyId = calendarData.calendar_data?.property?.currency?.id;
        if (!currencyId)
            return;
        this.isLoading = true;
        try {
            const [result, fiscalDocuments] = await Promise.all([
                this.cityLedgerService.getCLStatement({
                    AGENCY_ID: this.agentId,
                    CURRENCY_ID: currencyId,
                    START_DATE: filters.fromDate,
                    END_DATE: filters.toDate,
                }),
                this.cityLedgerService.getFiscalDocuments({
                    AGENCY_ID: this.agentId,
                    START_DATE: filters.fromDate,
                    END_DATE: filters.toDate,
                    LIST_FD_TYPE_CODE: [index$1.FdTypes.CreditReceipt, index$1.FdTypes.CreditNote, index$1.FdTypes.DebitNote, index$1.FdTypes.Invoice, index$1.FdTypes.Receipt],
                }),
            ]);
            this.statement = result ?? null;
            this.rows = fiscalDocuments ?? [];
        }
        catch (err) {
            console.error('[ir-city-ledger-statements] getCLStatement error:', err);
        }
        finally {
            this.isLoading = false;
            this.hasFetched = true;
        }
    }
    getPrintLabel() {
        if (!this.printFilters?.fromDate || !this.printFilters?.toDate)
            return 'Statement Preview';
        return `Statement - ${moment.hooks(this.printFilters.fromDate).format('MMM DD, YYYY')} to ${moment.hooks(this.printFilters.toDate).format('MMM DD, YYYY')}`;
    }
    render() {
        return (index.h(index.Host, { key: '3dad698ee2f03124d4237927fe674ec44e41499b' }, index.h("section", { key: 'b0d9d4f3909a7ccf04fa2728c2eab0f0cfb0a496', class: "cl-statements", "aria-label": "City ledger statements" }, index.h("ir-city-ledger-statements-filter", { key: '7f05946cd4f9d7521b74b517346a17d2b862e06b', initialFromDate: this.filters.fromDate, initialToDate: this.filters.toDate, onFiltersChange: e => {
                this.filters = e.detail;
                this.clStmtFiltersChange.emit(e.detail);
            }, onCreateStatement: e => {
                this.filters = e.detail;
                this.clStmtFiltersChange.emit(e.detail);
                this.fetchStatement(e.detail);
            }, onPrintStatement: e => (this.printFilters = e.detail) }), index.h("ir-city-ledger-statements-table", { key: 'f9aac446604afae3fb8c6521b8630b21cc7c5f6d', rows: this.rows, startingBalance: this.statement?.STARTING_BALANCE ?? 0, endingBalance: this.statement?.ENDING_BALANCE ?? 0, currencySymbol: this.currencySymbol, currencies: this.currencies, isLoading: this.isLoading, hasFetched: this.hasFetched, fromDate: this.filters.fromDate, toDate: this.filters.toDate, agentId: this.agentId })), index.h("ir-preview-screen-dialog", { key: '2613465a8de3fa951013398f7a8df12a8a91ef6a', hideDefaultAction: true, open: this.printFilters !== null, label: this.getPrintLabel(), onOpenChanged: e => {
                if (!e.detail) {
                    this.printFilters = null;
                    this.pdfUrl = null;
                }
            } }, index.h("div", { key: 'd076534e9c6f2b1db2384c4444055fa617a607a7', slot: "header-actions" }, this.pdfUrl && (index.h("ir-custom-button", { key: 'f7a293520ee4fe2a2b89366987fe89bf4d62a9cd', size: "medium", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleDownload() }, index.h("wa-icon", { key: '274ac30773413c49da916c3d7b48f5c0975794a4', name: "download", label: "Download PDF" })))), this.printFilters &&
            (this.isFetchingPdf ? (index.h("div", { class: "preview-loading" }, index.h("ir-spinner", null))) : (index.h("div", { class: "preview-body" }, index.h("ir-pdf-viewer", { src: this.pdfUrl })))))));
    }
    static get watchers() { return {
        "agentId": [{
                "handleAgentIdChange": 0
            }],
        "printFilters": [{
                "handlePrintFiltersChange": 0
            }]
    }; }
};
IrCityLedgerStatements.style = irCityLedgerStatementsCss();

const irCityLedgerStatementsFilterCss = () => `.sc-ir-city-ledger-statements-filter-h{display:block}.stmt-filters.sc-ir-city-ledger-statements-filter{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem}.stmt-filters__left.sc-ir-city-ledger-statements-filter{display:flex;flex-wrap:wrap;align-items:center;gap:0.5rem}.stmt-filters__date-picker.sc-ir-city-ledger-statements-filter{width:100%;min-width:280px}.stmt-filters__right.sc-ir-city-ledger-statements-filter{display:flex;align-items:center;gap:0.5rem}`;

const IrCityLedgerStatementsFilter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.filtersChange = index.createEvent(this, "filtersChange");
        this.createStatement = index.createEvent(this, "createStatement");
        this.printStatement = index.createEvent(this, "printStatement");
    }
    initialFromDate = null;
    initialToDate = null;
    fromDate = null;
    toDate = null;
    filtersChange;
    componentWillLoad() {
        this.fromDate = this.initialFromDate;
        this.toDate = this.initialToDate;
    }
    createStatement;
    printStatement;
    render() {
        const canCreate = !!(this.fromDate && this.toDate);
        return (index.h("form", { key: '93f98ead379064f2a0095e84b1d4ea20c6e33d91', onSubmit: e => {
                e.preventDefault();
                if (canCreate)
                    this.createStatement.emit({ fromDate: this.fromDate, toDate: this.toDate });
            } }, index.h("div", { key: 'f61da46a1f9d9e5a6b32c93777545dd6142f898e', class: "stmt-filters" }, index.h("ir-validator", { key: '41e3be4369aed1a73a92f38083609c345a3dec2b', schema: index$2.libExports.z.object({
                fromDate: index$2.libExports.z.string().nonempty(),
                toDate: index$2.libExports.z.string().nonempty(),
            }), value: {
                fromDate: this.fromDate,
                toDate: this.toDate,
            }, class: "stmt-filters__left" }, index.h("ir-date-range-filter", { key: '60eb9f5885306ac1356211710784c7cb909ce776', class: "stmt-filters__date-picker", maxDate: moment.hooks().format('YYYY-MM-DD'), fromDate: this.fromDate, toDate: this.toDate, onDatesChanged: e => {
                this.fromDate = e.detail.from ?? null;
                this.toDate = e.detail.to ?? null;
                this.filtersChange.emit({ fromDate: this.fromDate, toDate: this.toDate });
            } })), index.h("div", { key: 'a628178ac26e37f9d3c70942f04323c4b5441f97', class: "stmt-filters__right" }, index.h("ir-custom-button", { key: '155443d4d9001c1096b19128e70e09780701e352', variant: "brand", type: "submit" }, "Create Statement"), index.h("ir-custom-button", { key: '55384a2feac0435d4f955e71e26df3185a6db281', variant: "brand", appearance: "outlined", disabled: !canCreate, onClickHandler: () => {
                if (canCreate) {
                    this.printStatement.emit({ fromDate: this.fromDate, toDate: this.toDate });
                }
            } }, "Print")))));
    }
};
IrCityLedgerStatementsFilter.style = irCityLedgerStatementsFilterCss();

const irCityLedgerStatementsTableCss = () => `.sc-ir-city-ledger-statements-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-city-ledger-statements-table{overflow-x:auto}.table--container.sc-ir-city-ledger-statements-table,.data-table.sc-ir-city-ledger-statements-table{height:100%}.ir-table-row.sc-ir-city-ledger-statements-table td.sc-ir-city-ledger-statements-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-city-ledger-statements-table td.sc-ir-city-ledger-statements-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,      background-color 0.15s ease-in-out,      border-color 0.15s ease-in-out,      box-shadow 0.15s ease-in-out}.table.sc-ir-city-ledger-statements-table tbody.sc-ir-city-ledger-statements-table tr.sc-ir-city-ledger-statements-table:last-child>td.sc-ir-city-ledger-statements-table{border-bottom:0 !important}.table.sc-ir-city-ledger-statements-table thead.sc-ir-city-ledger-statements-table th.sc-ir-city-ledger-statements-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-city-ledger-statements-table thead.sc-ir-city-ledger-statements-table th.sc-ir-city-ledger-statements-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-city-ledger-statements-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-city-ledger-statements-table,.ir-table-row.sc-ir-city-ledger-statements-table{transition:color 0.15s ease-in-out,      background-color 0.15s ease-in-out,      border-color 0.15s ease-in-out,      box-shadow 0.15s ease-in-out}.sortable.sc-ir-city-ledger-statements-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-city-ledger-statements-table thead.sc-ir-city-ledger-statements-table th.sortable.sc-ir-city-ledger-statements-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-city-ledger-statements-table thead.sc-ir-city-ledger-statements-table th.sortable.sc-ir-city-ledger-statements-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-city-ledger-statements-table thead.sc-ir-city-ledger-statements-table th.sortable.sc-ir-city-ledger-statements-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-city-ledger-statements-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-city-ledger-statements-table svg.sc-ir-city-ledger-statements-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-city-ledger-statements-table:hover td.sc-ir-city-ledger-statements-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-city-ledger-statements-table:hover td.sc-ir-city-ledger-statements-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-city-ledger-statements-table:active td.sc-ir-city-ledger-statements-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-city-ledger-statements-table td.sc-ir-city-ledger-statements-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,      background-color 0.15s ease-in-out,      border-color 0.15s ease-in-out,      box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-city-ledger-statements-table:hover td.sc-ir-city-ledger-statements-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-city-ledger-statements-table:active td.sc-ir-city-ledger-statements-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-city-ledger-statements-table .empty-row.sc-ir-city-ledger-statements-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-city-ledger-statements-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-city-ledger-statements-table{position:sticky !important;right:0;background-color:white}.sc-ir-city-ledger-statements-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60dvh;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:var(--wa-color-surface-default)}.stmt-table__doc-number.sc-ir-city-ledger-statements-table::part(base),.stmt-table__doc-number.sc-ir-city-ledger-statements-table [part~="base"]{padding:0.05rem 0.5rem;height:auto}.cell--align-end.sc-ir-city-ledger-statements-table{text-align:right !important}.stmt-table__doc-number.sc-ir-city-ledger-statements-table{font-variant-numeric:tabular-nums}.stmt-table__cell--zero.sc-ir-city-ledger-statements-table{color:var(--wa-color-text-quiet, #9ca3af)}.stmt-table__cell--money.sc-ir-city-ledger-statements-table{font-variant-numeric:tabular-nums}.balance-row__label.sc-ir-city-ledger-statements-table{display:flex;align-items:center}.balance-row.sc-ir-city-ledger-statements-table td.sc-ir-city-ledger-statements-table{background:var(--wa-color-brand-fill-quiet) !important;color:var(--wa-color-brand-on-quiet) !important;border-color:var(--wa-color-brand-border-quiet) !important;padding:0.75rem 1rem !important}.stmt-table__loading.sc-ir-city-ledger-statements-table{display:flex;align-items:center;justify-content:center;flex:1;padding:3rem 2rem}.stmt-table__date-prompt.sc-ir-city-ledger-statements-table{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;flex:1;padding:3rem 2rem;text-align:center}.stmt-table__date-prompt-icon.sc-ir-city-ledger-statements-table{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.stmt-table__date-prompt-title.sc-ir-city-ledger-statements-table{margin:0;font-size:0.9375rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}`;

const NUMERIC_COLS = new Set(['debit', 'credit', 'balance']);
const DATE_INPUT_FORMAT = 'YYYY-MM-DD';
const DATE_DISPLAY_FORMAT = 'MMM DD, YYYY';
const IrCityLedgerStatementsTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clFiscalDocumentPreview = index.createEvent(this, "clFiscalDocumentPreview");
    }
    rows = [];
    agentId;
    startingBalance = 0;
    endingBalance = 0;
    currencySymbol = '$';
    currencies = [];
    isLoading = false;
    hasFetched = false;
    fromDate = null;
    toDate = null;
    clFiscalDocumentPreview;
    columnHelper = useTable.createColumnHelper();
    formatDate(date) {
        if (!date)
            return '';
        const m = moment.hooks(date, [DATE_INPUT_FORMAT, moment.hooks.ISO_8601], true);
        return m.isValid() ? m.format(DATE_DISPLAY_FORMAT) : date;
    }
    getSymbol(currencyId) {
        if (!currencyId)
            return this.currencySymbol;
        const match = this.currencies.find(c => c.id === currencyId);
        return match?.symbol ?? this.currencySymbol;
    }
    renderMoney(value, currencyId) {
        if (value == null || value === 0 || isNaN(value))
            return index.h("span", { class: "stmt-table__cell--zero" });
        return index.h("span", { class: "stmt-table__cell--money" }, utils.formatAmount(this.getSymbol(currencyId), value));
    }
    get runningBalances() {
        let balance = this.startingBalance;
        return this.rows.map(doc => {
            if (cityLedger_service.debitFdTypeCode.has(doc.FD_TYPE_CODE)) {
                balance += doc.DEBIT ?? 0;
            }
            else {
                balance -= Math.abs(doc.CREDIT ?? 0);
            }
            return balance;
        });
    }
    //Before Credit receipt change
    // private get runningBalances(): number[] {
    //   let balance = this.startingBalance;
    //   return this.rows.map(doc => {
    //     balance += Math.abs(doc.DEBIT ?? 0) - Math.abs(doc.CREDIT ?? 0);
    //     return balance;
    //   });
    // }
    getCredit(info) {
        const { FD_TYPE_CODE, DEBIT } = info.row.original;
        const value = info.getValue();
        switch (FD_TYPE_CODE) {
            case index$1.FdTypes.CreditReceipt:
                return -DEBIT;
            case index$1.FdTypes.Receipt:
                return Math.abs(value);
            default:
                return value;
        }
    }
    get columns() {
        const balances = this.runningBalances;
        return [
            this.columnHelper.accessor('ISSUE_DATE_DISPLAY', {
                id: 'date',
                header: 'Date',
                cell: info => info.getValue() || this.formatDate(info.row.original.ISSUE_DATE),
            }),
            this.columnHelper.accessor('DOC_NUMBER', {
                header: 'Doc Number',
                cell: info => (index.h("wa-button", { onClick: () => {
                        const row = info.row.original;
                        this.clFiscalDocumentPreview.emit({
                            fdTypeCode: row.FD_TYPE_CODE,
                            documentNumber: row.DOC_NUMBER,
                            agentId: this.agentId,
                            agentName: row.AGENCY_NAME,
                            fdId: row.FD_ID,
                            externalRef: row.EXTERNAL_REF,
                            fromDate: row.FD_TYPE_CODE === index$1.FdTypes.Proforma ? row.FROM_DATE : this.fromDate,
                            toDate: row.FD_TYPE_CODE === index$1.FdTypes.Proforma ? row.TO_DATE : this.toDate,
                            bookingNbr: row.FD_TYPE_CODE === index$1.FdTypes.Proforma ? row.BOOK_NBR : null,
                        });
                    }, variant: "brand", appearance: "plain", class: "stmt-table__doc-number" }, info.getValue() ?? '')),
            }),
            this.columnHelper.accessor('FD_TYPE_NAME', {
                id: 'type',
                header: 'Type',
                cell: info => info.getValue() ?? '',
            }),
            this.columnHelper.accessor('DEBIT', {
                id: 'debit',
                header: 'Debit',
                cell: info => (info.row.original.FD_TYPE_CODE === index$1.FdTypes.CreditReceipt ? '' : this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID)),
            }),
            this.columnHelper.accessor('CREDIT', {
                id: 'credit',
                header: 'Credit',
                cell: info => this.renderMoney(this.getCredit(info), info.row.original.CURRENCY_ID),
            }),
            this.columnHelper.display({
                id: 'balance',
                header: 'Balance',
                cell: info => this.renderMoney(balances[info.row.index], info.row.original.CURRENCY_ID),
            }),
        ];
    }
    renderStartingBalanceRow() {
        const bal = this.startingBalance;
        return (index.h("tr", { class: "ir-table-row balance-row balance-row--start" }, index.h("td", null, this.formatDate(this.fromDate)), index.h("td", null), index.h("td", { class: "balance-row__label" }, index.h("wa-icon", { name: "scale-balanced", style: { marginRight: '0.375rem', fontSize: '0.875rem' } }), "Starting Balance"), index.h("td", { class: "cell--align-end" }), index.h("td", { class: "cell--align-end" }), index.h("td", { class: "cell--align-end" }, utils.formatAmount(this.currencySymbol, bal))));
    }
    renderEndingBalanceRow() {
        const bal = this.runningBalances[this.runningBalances.length - 1];
        return (index.h("tr", { class: "ir-table-row balance-row balance-row--end" }, index.h("td", null, this.formatDate(this.toDate)), index.h("td", null), index.h("td", { class: "balance-row__label" }, index.h("wa-icon", { name: "scale-balanced", style: { marginRight: '0.375rem', fontSize: '0.875rem' } }), "Ending Balance"), index.h("td", { class: "cell--align-end" }), index.h("td", { class: "cell--align-end" }), index.h("td", { class: "cell--align-end" }, utils.formatAmount(this.currencySymbol, bal))));
    }
    render() {
        if (!this.hasFetched) {
            return (index.h(index.Host, null, index.h("div", { class: "stmt-table__date-prompt" }, index.h("div", { class: "stmt-table__date-prompt-icon" }, index.h("wa-icon", { name: "calendar-days" })), index.h("p", { class: "stmt-table__date-prompt-title" }, "Select a date range and click \"Create Statement\""))));
        }
        if (this.isLoading) {
            return (index.h(index.Host, null, index.h("div", { class: "stmt-table__loading" }, index.h("ir-spinner", null))));
        }
        const table = useTable.useTable({
            data: this.rows,
            columns: this.columns,
            getCoreRowModel: useTable.getCoreRowModel(),
            getSortedRowModel: useTable.getSortedRowModel(),
        });
        const colCount = this.columns.length;
        return (index.h(index.Host, null, index.h("div", { class: "table--container" }, index.h("table", { class: "table data-table" }, index.h("thead", null, table.getHeaderGroups().map(headerGroup => (index.h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (index.h("th", { key: header.id, class: { 'cell--align-end': NUMERIC_COLS.has(header.column.id) } }, useTable.flexRender(header.column.columnDef.header, header.getContext())))))))), index.h("tbody", null, this.renderStartingBalanceRow(), table.getRowModel().rows.length === 0 ? (index.h("tr", null, index.h("td", { class: "empty-row", colSpan: colCount }, "No fiscal documents in this period."))) : (table.getRowModel().rows.map(row => (index.h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (index.h("td", { key: cell.id, class: {
                'stmt-table__cell': true,
                'cell--align-end': NUMERIC_COLS.has(cell.column.id),
            } }, useTable.flexRender(cell.column.columnDef.cell, cell.getContext())))))))), this.renderEndingBalanceRow())))));
    }
};
IrCityLedgerStatementsTable.style = irCityLedgerStatementsTableCss();

const irCityLedgerToolbarCss = () => `.sc-ir-city-ledger-toolbar-h{display:block}.toolbar.sc-ir-city-ledger-toolbar{width:100%;display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;padding:0.75rem 1rem;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-radius:0.625rem;background:var(--wa-color-surface-default, #fff)}.toolbar__stats.sc-ir-city-ledger-toolbar{display:flex;align-items:center;gap:1.25rem;flex-wrap:wrap}.toolbar__stats-placeholder.sc-ir-city-ledger-toolbar{flex:1}.toolbar__stat.sc-ir-city-ledger-toolbar{display:flex;flex-direction:column;gap:0.125rem}.toolbar__stat-label.sc-ir-city-ledger-toolbar{font-size:0.6875rem;font-weight:500;text-transform:uppercase;letter-spacing:0.05em;color:var(--wa-color-text-quiet, #6b7280);white-space:nowrap}.toolbar__stat-value.sc-ir-city-ledger-toolbar{font-size:1rem;font-weight:700;color:var(--wa-color-text-normal, #111827);font-variant-numeric:tabular-nums;white-space:nowrap}.toolbar__stat-value--negative.sc-ir-city-ledger-toolbar{color:var(--wa-color-danger-fill-loud, #dc2626)}.toolbar__stats-sep.sc-ir-city-ledger-toolbar{width:1px;height:2rem;background:var(--wa-color-neutral-border-quiet, #e5e7eb);flex-shrink:0}.toolbar__actions.sc-ir-city-ledger-toolbar{display:flex;align-items:center;gap:0.5rem;margin-inline-start:auto;flex-shrink:0}`;

const IrCityLedgerToolbar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.createInvoice = index.createEvent(this, "createInvoice");
    }
    agentId = null;
    currencySymbol = '$';
    accountOverview = null;
    createInvoice;
    cityLedgerService = new index$1.CityLedgerService();
    componentWillLoad() {
        if (this.agentId)
            this.fetchOverview();
    }
    async handleAgentIdChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        this.accountOverview = null;
        if (newValue)
            await this.fetchOverview();
    }
    async refresh() {
        await this.fetchOverview();
    }
    async fetchOverview() {
        if (!this.agentId)
            return;
        this.accountOverview = await this.cityLedgerService.getCLAccountOverview({
            AGENCY_ID: this.agentId,
            CURRENCY_ID: calendarData.calendar_data?.property?.currency?.id,
        });
    }
    render() {
        return (index.h(index.Host, { key: 'a13a68c240dcdc82f8b37c125681f98f65999f82' }, index.h("div", { key: 'ed87e379224645607e88808c8b1be8705c131023', class: "toolbar" }, this.accountOverview ? (index.h("div", { class: "toolbar__stats" }, index.h("div", { id: "netbalance", class: "toolbar__stat" }, index.h("span", { class: "toolbar__stat-label" }, "Net Balance"), index.h("span", { class: {
                'toolbar__stat-value': true,
                'toolbar__stat-value--negative': this.accountOverview.ACCOUNT_NET_BALANCE < 0,
            } }, this.accountOverview.ACCOUNT_NET_BALANCE < 0 ? '-' : '', utils.formatAmount(this.currencySymbol, Math.abs(this.accountOverview.ACCOUNT_NET_BALANCE)))), index.h("div", { class: "toolbar__stats-sep" }), index.h("div", { id: "uninvoiced", class: "toolbar__stat" }, index.h("span", { class: "toolbar__stat-label" }, "Uninvoiced"), index.h("span", { class: "toolbar__stat-value" }, utils.formatAmount(this.currencySymbol, this.accountOverview.TOTAL_UNINVOICED))), index.h("wa-tooltip", { for: "netbalance" }, "Ending balance as of ", moment.hooks().format('MMM DD, YYYY'), " ", functions._formatTime(new Date().getHours().toString(), new Date().getMinutes().toString())), index.h("wa-tooltip", { for: "due-invoice" }), index.h("wa-tooltip", { for: "uninvoiced" }, "Total ", index.h("b", null, "unbilled"), " entries from bookings, manual charges, adjustments and discounts."), index.h("wa-tooltip", { for: "toolbar-held" }, "Total ", index.h("b", null, "held"), " entries to resolve with agent."))) : (index.h("div", { class: "toolbar__stats-placeholder" })), index.h("div", { key: '70b8ef17b1c6ebfbc440966e0a540209d5ccabcd', class: "toolbar__actions" }, index.h("ir-custom-button", { key: '0297a9f4b57376bf63f8f34c90209f637b94ed48', variant: "brand", onClickHandler: () => this.createInvoice.emit() }, "Create Invoice")))));
    }
    static get watchers() { return {
        "agentId": [{
                "handleAgentIdChange": 0
            }]
    }; }
};
IrCityLedgerToolbar.style = irCityLedgerToolbarCss();

exports.ir_city_ledger_fiscal_documents = IrCityLedgerFiscalDocuments;
exports.ir_city_ledger_fiscal_documents_filters = IrCityLedgerFiscalDocumentsFilters;
exports.ir_city_ledger_folio = IrCityLedgerFolio;
exports.ir_city_ledger_folio_filters = IrCityLedgerFolioFilters;
exports.ir_city_ledger_folio_table = IrCityLedgerFolioTable;
exports.ir_city_ledger_statements = IrCityLedgerStatements;
exports.ir_city_ledger_statements_filter = IrCityLedgerStatementsFilter;
exports.ir_city_ledger_statements_table = IrCityLedgerStatementsTable;
exports.ir_city_ledger_toolbar = IrCityLedgerToolbar;
