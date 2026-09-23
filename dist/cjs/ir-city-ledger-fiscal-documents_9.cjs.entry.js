'use strict';

var index = require('./index-CQkpA5n3.js');
var index$1 = require('./index-B_DsrcJr.js');
var enums = require('./enums-BSCnMYlE.js');
var moment = require('./moment-CdViwxPQ.js');
var t = require('./t-CyRK1btk.js');
var debounce = require('./debounce-Be8tSGtB.js');
var types = require('./types-BlCoz3jZ.js');
var realtime_service = require('./realtime.service-BMgF8Zdb.js');
var cityLedger_service = require('./city-ledger.service-BzsOyj-y.js');
var calendarData = require('./calendar-data-HgC39-BR.js');
var v4 = require('./v4-_2BfiRUa.js');
require('./booking.dto-DxxzsxJC.js');
var irDate = require('./ir-date-BZLsqCOc.js');
var number = require('./number-D7i5wAQq.js');
var useTable = require('./useTable-BN32DOaV.js');
var functions = require('./functions-CsGCS8vQ.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./utils-C5I0LkiV.js');
require('./locales.store-BMTss6fG.js');
require('./type-BRhg-bzd.js');
require('./language-observer-DKp37LIu.js');

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
    cityLedgerService = new index$1.CityLedgerService();
    handleAgentIdChange() {
        this.fiscalDocuments = [];
        this.hasFetched = false;
        if (this.filters.fromDate || this.filters.toDate) {
            this.fetchFiscalDocuments(this.filters);
        }
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
                    ? [enums.FdTypes.Proforma]
                    : filters.type === 'all'
                        ? [enums.FdTypes.Invoice, enums.FdTypes.Receipt, enums.FdTypes.CreditNote, enums.FdTypes.DebitNote, enums.FdTypes.Draft, enums.FdTypes.CreditReceipt]
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
    handleFiscalDocumentIssued(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.fetchFiscalDocuments(this.filters);
    }
    render() {
        return (index.h(index.Host, { key: 'd94be07e8bbd9abdebab7cce41162f77b1364da0' }, index.h("section", { key: 'd68797d10b1326d63d7493c7a1d08e364df61443', class: "fiscal-documents", "aria-label": t.t('Lcz_CityLedgerFiscalDocumentsAriaLabel', { fallback: 'City ledger fiscal documents' }) }, index.h("ir-city-ledger-fiscal-documents-filters", { key: 'b59789670736ef9d0e858847b7fc57879609dddc', filters: this.filters, onFiltersChange: event => {
                this.filters = event.detail;
                this.clFiscalFiltersChange.emit(event.detail);
            }, onApplyFilters: event => {
                this.filters = event.detail;
                this.clFiscalFiltersChange.emit(event.detail);
                this.fetchFiscalDocuments(event.detail);
            } }), index.h("ir-city-ledger-fiscal-documents-table", { key: '068715ccd8c6151f519c0e625150ce950c2d647c', isLoading: this.isLoading, rows: this.filteredDocuments, currencySymbol: this.currencySymbol, currencies: this.currencies, taxableOnly: this.filters.taxableOnly, hasDates: !!(this.filters.fromDate && this.filters.toDate), hasFetched: this.hasFetched, ticket: this.ticket, propertyId: this.propertyId, agentId: this.agentId, fromDate: this.filters.fromDate, toDate: this.filters.toDate, onFetchRequested: () => this.fetchFiscalDocuments(this.filters) }))));
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
        { label: t.t('Lcz_AllDocumentTypes', { fallback: 'All document types' }), value: 'all' },
        { label: t.t('Lcz_Invoices', { fallback: 'Invoices' }), value: enums.FdTypes.Invoice },
        { label: t.t('Lcz_Receipts', { fallback: 'Receipts' }), value: enums.FdTypes.Receipt },
        { label: t.t('Lcz_CreditNotes', { fallback: 'Credit Notes' }), value: enums.FdTypes.CreditNote },
        // { label: 'Debit Notes', value: FdTypes.DebitNote },
        { label: t.t('Lcz_CreditReceipt', { fallback: 'Credit Receipt' }), value: enums.FdTypes.CreditReceipt },
    ];
    updateFilters(patch) {
        this.filtersChange.emit({ ...this.filters, ...patch });
    }
    emitSearchDebounced(value) {
        this.updateFilters({ docNumber: value });
    }
    render() {
        return (index.h("form", { key: '37dd16c364c63980df4b8c31cee80f9976256ffa', onSubmit: e => {
                e.preventDefault();
                this.applyFilters.emit(this.filters);
            } }, index.h("div", { key: 'd70acd2554b05d988d6743c0c6cd061a89c0fc62', class: "filters-bar" }, index.h("ir-validator", { key: '729c57a00e0ad4ac4546107d96ae37366a5438f0', value: this.filters?.fromDate || this.filters?.toDate, schema: types.stringType().nonempty(), class: "filters-bar__dates" }, index.h("ir-date-range-filter", { key: '3b943a5384e80908ba37551c49b1ab44dc96a9c4', maxDate: today.format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.filters.fromDate, toDate: this.filters.toDate, onDatesChanged: e => this.updateFilters({ fromDate: e.detail.from, toDate: e.detail.to }) })), index.h("div", { key: 'c7ad77f8930583feeebe333e7919445e684ec812', class: "filters-bar__search-group" }, index.h("div", { key: '5bf54b1736e150502c1e7b101dc5476e6fdd3e32', class: "filters-bar__type-group" }, index.h("wa-select", { key: 'd405a7bf3bcc78ce5aa2d8c184e265cf783d11c4', class: "filters-bar__status-select", value: this.filters.type, defaultValue: this.filters.type, onchange: e => this.updateFilters({ type: e.target.value }), size: "s", placeholder: t.t('Lcz_DocumentTypePlaceholder', { fallback: 'Document Type' }) }, this.typeOptions.map(option => (index.h("wa-option", { value: option.value, key: option.value }, option.label)))), index.h("wa-switch", { key: '3db9930000e91a665e5a6be7f6432b0253ef2576', class: "filters-bar__tax-switch", checked: this.filters.taxableOnly, onchange: e => this.updateFilters({ taxableOnly: e.target.checked }) }, t.t('Lcz_Taxes', { fallback: 'Taxes' })), index.h("wa-switch", { key: '17bb1fe01eee1aa6e5c38298321c621a4ea9b09e', class: "filters-bar__proforma-switch", checked: this.filters.proformaOnly, onchange: e => {
                const updated = { ...this.filters, proformaOnly: e.target.checked };
                this.filtersChange.emit(updated);
                this.applyFilters.emit(updated);
            } }, t.t('Lcz_Proforma', { fallback: 'Proforma' }))), index.h("ir-input", { key: '2c6a98a0ce3ba04673bfde80b2a167d537a2064c', class: "filters-bar__search-input", placeholder: t.t('Lcz_SearchByDocNumber', { fallback: 'Search by doc number' }), value: this.docNumber, "onText-change": e => {
                this.docNumber = e.detail;
                this.emitSearchDebounced(e.detail);
            }, withClear: true }, index.h("wa-icon", { key: '449d343a6df6258f712fe0827610ab5322cc2a8c', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), index.h("ir-custom-button", { key: '883c62b5d4af61d0993d4fc3f51815315a8baa13', variant: "neutral", appearance: "outlined", type: "submit" }, index.h("wa-icon", { key: '8de472b4478c02ac6169c6cd94cd10766aef7b09', name: "magnifying-glass" }))))));
    }
};
__decorate$1([
    debounce.Debounce(300)
], IrCityLedgerFiscalDocumentsFilters.prototype, "emitSearchDebounced", null);
IrCityLedgerFiscalDocumentsFilters.style = irCityLedgerFiscalDocumentsFiltersCss();

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
                    return { ...cityLedger_service.mapClTxToFolioRow(updatedTx), _rowId: r._rowId };
                });
            },
            CL_TX_CREATED: async (payload) => {
                const tx = payload;
                if (tx.TRAVEL_AGENCY_ID !== this.agent?.id)
                    return;
                const row = { ...cityLedger_service.mapClTxToFolioRow(tx), _rowId: v4.v4() };
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
            return { ...cityLedger_service.mapClTxToFolioRow({ ...r._raw, IS_LOCKED: isLocked }), _rowId: r._rowId };
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
    handleAgentChange(newAgent, oldAgent) {
        if (newAgent?.id === oldAgent?.id)
            return;
        this.clearData();
        if (this.filters.fromDate || this.filters.toDate) {
            this.fetchFolioData();
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
                const mapped = cityLedger_service.mapClTxToFolioRow(tx);
                totalDebits += tx.DEBIT || 0;
                totalCredits += tx.CREDIT || 0;
                if (mapped.status.id === 'unbilled')
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
        return (index.h(index.Host, { key: '559695f867addb12138c72f7ae3c8fa4cd1d35c2' }, index.h("ir-city-ledger-folio-filters", { key: 'e00198d7296491b3a97859c5812d80589b29e626', onFiltersChange: e => (this.filters = e.detail), onApplyFilters: async (e) => {
                this.filters = e.detail;
                this.pageIndex = 0;
                await this.fetchFolioData();
            }, onAddEntry: () => {
                this.editingTransaction = null;
                this.isTransactionOpen = true;
            }, isExporting: this.isFetchingExcel, onExportFolio: () => {
                this.fetchCl(true);
            } }), index.h("ir-city-ledger-folio-table", { key: 'a8ecb04ee10f67b6a50ab17fe2c4b2546daac3f8', agentId: this.agent?.id, propertyId: this.propertyId, ticket: this.ticket, language: this.language, hideBalanceInfo: !!(this.filters.search || (this.filters.status && this.filters.status !== 'all')), data: this.data, isLoading: this.isLoading, hasFetched: this.hasFetched, startingBalance: this.startingBalance, closingBalance: this.closingBalance, totalCount: this.totalCount, pageIndex: this.pageIndex, pageSize: this.pageSize, fromDate: this.filters?.fromDate, toDate: this.filters?.toDate, currencySymbol: calendarData.calendar_data.property?.currency?.symbol, currencies: this.currencies, serviceCategoryOptions: this.serviceCategoryOptions, onPageChange: async (e) => {
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
            } }), index.h("ir-dialog", { key: '197ad44d85e6beab5cb2b113709498e7fdbf0725', label: t.t('Lcz_DeleteEntry', { fallback: 'Delete Entry' }), open: !!this.deleteTarget, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!this.isDeleting)
                    this.deleteTarget = null;
            } }, index.h("p", { key: '7596da7521e3d7c9ecf3b3c11a49daebeee53c48' }, t.t('Lcz_ConfirmDeleteFolioEntry', { fallback: 'Are you sure you want to delete this entry? This action cannot be undone.' })), index.h("div", { key: '9672b88c4924266343cc1b322006fedd0a428b20', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: 'f374e17ddc3f1dccb3f2360d85d485afd071a1af', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => (this.deleteTarget = null) }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '4e7c816f854353042cf84615b44986bc1d4414b3', size: "m", variant: "danger", loading: this.isDeleting, onClickHandler: () => this.handleDelete() }, t.t('Lcz_Delete', { fallback: 'Delete' })))), index.h("ir-city-ledger-transaction-drawer", { key: 'f36c0d3269d5758b1e282976fc94772ccdfca77d', open: this.isTransactionOpen, serviceCategoryOptions: this.serviceCategoryOptions, agent: this.agent, transaction: this.editingTransaction, drawerLabel: this.editingTransaction ? t.t('Lcz_EditEntryTitle', { fallback: 'Edit Entry' }) : t.t('Lcz_NewEntryTitle', { fallback: 'New Entry' }), onTransactionSaved: () => {
                this.fetchFolioData();
            }, onCloseDrawer: () => {
                this.isTransactionOpen = false;
                this.editingTransaction = null;
            } })));
    }
    static get watchers() { return {
        "agent": [{
                "handleAgentChange": 0
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
        { value: 'all', label: t.t('Lcz_AllEntries', { fallback: 'All entries' }) },
        { value: 'billed', label: t.t('Lcz_Billed', { fallback: 'Billed' }) },
        { value: 'held', label: t.t('Lcz_Held', { fallback: 'Held' }) },
        { value: 'unbilled', label: t.t('Lcz_Unbilled', { fallback: 'Unbilled' }) },
        { value: 'unbilled&checkedOut', label: t.t('Lcz_UnbilledCheckouts', { fallback: 'Unbilled checkouts' }) },
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
        return (index.h("form", { key: '1a99af5bf8fea76ba2ab4695a8902ce280160cd1', onSubmit: e => {
                e.preventDefault();
                this.applyFilters.emit({
                    fromDate: this.dates.from?.format('YYYY-MM-DD'),
                    toDate: this.dates.to?.format('YYYY-MM-DD'),
                    status: this.statusFilter,
                    search: this.searchQuery,
                });
            } }, index.h("div", { key: '00fb2e8cf13ea48d4dabe2093c7ae80591e33330', class: "filters-bar" }, index.h("ir-validator", { key: '3d72233b270a7a8e9a0f61c85ff74eb57a41bb89', value: this.dates?.from?.format('YYYY-MM-DD') || this.dates?.to?.format('YYYY-MM-DD'), schema: types.stringType().nonempty(), class: "filters-bar__dates" }, index.h("ir-date-range-filter", { key: '73fa1016ac1e2cae95a83e749744fabb0efcf331', maxDate: moment.hooks().format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.dates.from?.format('YYYY-MM-DD') ?? undefined, toDate: this.dates.to?.format('YYYY-MM-DD') ?? undefined, onDatesChanged: e => {
                const { from, to } = e.detail;
                this.dates = {
                    from: from ? moment.hooks(from, 'YYYY-MM-DD') : null,
                    to: to ? moment.hooks(to, 'YYYY-MM-DD') : null,
                };
                this.emitFilters();
            } })), index.h("div", { key: '2ae4943d7f35e48d82e3aaacaf26edf5480921b4', class: "filters-bar__search-group" }, index.h("wa-select", { key: '917bb55d8d0c52f6e5310334d0ef1b4c07bc4939', class: "filters-bar__status-select", value: this.statusFilter, onchange: e => {
                this.statusFilter = e.target.value?.toString();
                this.emitFilters();
            }, "onwa-clear": () => {
                this.statusFilter = 'all';
                this.emitFilters();
            }, placeholder: t.t('Lcz_Status', { fallback: 'Status' }), size: "s", withClear: true }, this.statuses.map(s => (index.h("wa-option", { value: s.value, label: s.label }, s.label)))), index.h("ir-input", { key: 'd9111fae3c8fde33df28023c81f12176c3776335', class: "filters-bar__search-input", "onText-change": e => {
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
            }), value: this.searchQuery, placeholder: t.t('Lcz_BookingOrDocNumberPlaceholder', { fallback: 'Booking# or doc number' }), withClear: true }, index.h("wa-icon", { key: '51186392c8b162b7aca1e28d9bd3f161344781a2', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), index.h("ir-custom-button", { key: 'a91edfa4c162f11e0ca47ea2e1d8bec12bc85a73', variant: "neutral", type: "submit", appearance: "outlined" }, index.h("wa-icon", { key: '949ee24505e78d304bb3dbaf1d80e9c87a85be93', name: "magnifying-glass" }))), index.h("div", { key: '375bbac04c7b6eea8ce77970c41525d66b65f6ae', class: "filters-bar__actions" }, index.h("ir-custom-button", { key: 'e8190afb62318b829f9ea4906fc0390f735305d0', loading: this.isExporting, appearance: "outlined", disabled: !this.dates.from && !this.dates.to, onClickHandler: () => this.exportFolio.emit() }, index.h("wa-icon", { key: 'd0876e24fcf3584289934f14042ab92026be67fc', name: "download", slot: "start" }), index.h("span", { key: '45716147c1b2cc37b150d0e9173e61a870640dec' }, t.t('Lcz_Export', { fallback: 'Export' }))), index.h("ir-custom-button", { key: '9a1674825c6345d234a798e2409ead5c55f9d776', variant: "brand", appearance: "outlined", onClickHandler: () => this.addEntry.emit() }, t.t('Lcz_AddEntry', { fallback: 'Add Entry' }))))));
    }
};
__decorate([
    debounce.Debounce(300)
], IrCityLedgerFolioFilters.prototype, "emitFiltersDebounced", null);
IrCityLedgerFolioFilters.style = irCityLedgerFolioFiltersCss();

const irCityLedgerFolioTableCss = () => `.sc-ir-city-ledger-folio-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-city-ledger-folio-table{overflow-x:auto}.table--container.sc-ir-city-ledger-folio-table,.data-table.sc-ir-city-ledger-folio-table{height:100%}.ir-table-row.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table tr.sc-ir-city-ledger-folio-table:last-child>td.sc-ir-city-ledger-folio-table{border-bottom:0 !important}.cell--align-start.sc-ir-city-ledger-folio-table{text-align:start !important}.cell--align-center.sc-ir-city-ledger-folio-table{text-align:center !important}.cell--align-end.sc-ir-city-ledger-folio-table{text-align:end !important}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-city-ledger-folio-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-city-ledger-folio-table,.ir-table-row.sc-ir-city-ledger-folio-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-city-ledger-folio-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sortable.sc-ir-city-ledger-folio-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sortable.sc-ir-city-ledger-folio-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sortable.sc-ir-city-ledger-folio-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-city-ledger-folio-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-city-ledger-folio-table svg.sc-ir-city-ledger-folio-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-city-ledger-folio-table:hover td.sc-ir-city-ledger-folio-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-city-ledger-folio-table:hover td.sc-ir-city-ledger-folio-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-city-ledger-folio-table:active td.sc-ir-city-ledger-folio-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-city-ledger-folio-table:hover td.sc-ir-city-ledger-folio-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-city-ledger-folio-table:active td.sc-ir-city-ledger-folio-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-city-ledger-folio-table .empty-row.sc-ir-city-ledger-folio-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-city-ledger-folio-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-city-ledger-folio-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}.sc-ir-city-ledger-folio-table-h{display:flex;flex-direction:column;border-radius:0.75rem;overflow:hidden;min-height:60dvh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);background-color:var(--wa-color-surface-default, #fff);box-shadow:0 1px 3px 0 rgb(0 0 0 / 0.05),     0 1px 2px -1px rgb(0 0 0 / 0.05)}.booking_heading.sc-ir-city-ledger-folio-table .heading_container.sc-ir-city-ledger-folio-table{display:flex;align-items:center;justify-content:space-between;width:100%;gap:0.5rem}.booking_heading.sc-ir-city-ledger-folio-table .heading_container--between.sc-ir-city-ledger-folio-table{justify-content:space-between}.booking_heading.sc-ir-city-ledger-folio-table .heading_container--end.sc-ir-city-ledger-folio-table{justify-content:flex-end}.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.grouped-cell.sc-ir-city-ledger-folio-table{padding-top:0 !important;padding-bottom:0 !important}.data-table--pagination.sc-ir-city-ledger-folio-table{margin-top:auto !important}.header-button.sc-ir-city-ledger-folio-table::part(start),.header-button.sc-ir-city-ledger-folio-table [part~="start"]{display:none}.header-button.sc-ir-city-ledger-folio-table::part(base),.header-button.sc-ir-city-ledger-folio-table [part~="base"]{justify-content:space-between;color:var(--wa-color-text-subtle, #6b7280);height:auto !important;width:auto !important;padding:0.25rem;border-radius:0.25rem;transition:color 0.15s ease,     background-color 0.15s ease}.header-button.sc-ir-city-ledger-folio-table:hover::part(base),.header-button.sc-ir-city-ledger-folio-table:hover [part~="base"]{color:var(--wa-color-text-normal);background-color:var(--wa-color-neutral-fill-quiet, #f3f4f6)}.input-column.sc-ir-city-ledger-folio-table{padding:0 !important}.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.input-column.sc-ir-city-ledger-folio-table{--input-width:150px;padding:0 !important;width:var(--input-width);max-width:var(--input-width);box-sizing:border-box}.group-expander.sc-ir-city-ledger-folio-table{height:100%}.group-expander.sc-ir-city-ledger-folio-table::part(base),.group-expander.sc-ir-city-ledger-folio-table [part~="base"]{font-size:1rem;height:100%;align-items:center;width:auto}.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table,.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{border-inline-end:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb) !important}.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table:last-child,.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table:last-child{border-inline-end:0 !important}.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sticky-column.sc-ir-city-ledger-folio-table,.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.sticky-column.sc-ir-city-ledger-folio-table{border-inline-end:0 !important}.sticky-column.sc-ir-city-ledger-folio-table::after{content:'';position:absolute;top:0;inset-inline-end:0;width:1px;height:100%;background-color:var(--wa-color-neutral-border-quiet, #e5e7eb);pointer-events:none}.folio-table__empty-state.sc-ir-city-ledger-folio-table,.folio-table__loading.sc-ir-city-ledger-folio-table{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;flex:1;min-height:200px;color:var(--wa-color-text-subtle, #6b7280);font-size:0.875rem}.folio-table__date-prompt.sc-ir-city-ledger-folio-table{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;flex:1;padding:3rem 2rem;text-align:center}.folio-table__date-prompt-icon.sc-ir-city-ledger-folio-table{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.folio-table__date-prompt-title.sc-ir-city-ledger-folio-table{margin:0;font-size:0.9375rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.folio-table__date-prompt-subtitle.sc-ir-city-ledger-folio-table{margin:0;font-size:0.8125rem;color:var(--wa-color-text-subtle, #6b7280);max-width:28rem;line-height:1.5}.folio-table__no-results.sc-ir-city-ledger-folio-table{text-align:center;color:var(--wa-color-text-quiet, #9ca3af);font-size:0.875rem;padding:2rem 1rem}.folio-table__select-col.sc-ir-city-ledger-folio-table{width:40px !important;max-width:40px !important;min-width:40px !important;text-align:center !important;padding-inline:0.5rem !important}.folio-table__checkbox.sc-ir-city-ledger-folio-table{cursor:pointer;width:1rem;height:1rem;accent-color:var(--wa-color-brand-fill-loud)}.folio-table__row--selected.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{background-color:var(--wa-color-brand-fill-quiet, #eff6ff) !important}.folio-table__invoice-bar.sc-ir-city-ledger-folio-table{display:flex;align-items:center;gap:0.75rem;padding:0.625rem 1rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);border-bottom:1px solid var(--wa-color-brand-border-quiet, #bfdbfe);font-size:0.875rem;flex-wrap:wrap}.folio-table__invoice-bar-text.sc-ir-city-ledger-folio-table{display:flex;align-items:center;color:var(--wa-color-brand-on-quiet);font-weight:500;flex:1}.folio-table__balance.sc-ir-city-ledger-folio-table{font-variant-numeric:tabular-nums;font-weight:500;display:block;text-align:end;padding:var(--ir-cell-padding, 0.5rem 1rem)}.folio-table__balance--negative.sc-ir-city-ledger-folio-table{color:var(--wa-color-danger-fill-loud, #dc2626)}.balance-row__label.sc-ir-city-ledger-folio-table{display:flex;align-items:center;font-size:0.8125rem}.folio-table__status-cell.sc-ir-city-ledger-folio-table{display:flex;align-items:center;justify-content:space-between}.folio-table__col-label.sc-ir-city-ledger-folio-table{display:flex;align-items:center;gap:0.5rem}.folio-table__col-label--end.sc-ir-city-ledger-folio-table{justify-content:flex-end}.folio-table__col-label--center.sc-ir-city-ledger-folio-table{justify-content:center}.folio-table__description.sc-ir-city-ledger-folio-table{display:block;width:100%}.folio-table__heading--actions.sc-ir-city-ledger-folio-table,.folio-table__cell--actions.sc-ir-city-ledger-folio-table{text-align:center !important}.fiscal-table__action-trigger.--placeholder.sc-ir-city-ledger-folio-table{height:calc(24px + 0.02rem)}.fiscal-table__action-trigger.sc-ir-city-ledger-folio-table::part(base),.fiscal-table__action-trigger.sc-ir-city-ledger-folio-table [part~="base"]{width:24px;height:24px}.balance-row.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{background:var(--wa-color-brand-fill-quiet) !important;color:var(--wa-color-brand-on-quiet) !important;border-color:var(--wa-color-brand-border-quiet) !important;padding:0.75rem 1rem !important}.balance-row.sc-ir-city-ledger-folio-table td.sticky-column.sc-ir-city-ledger-folio-table{background:var(--wa-color-brand-fill-quiet) !important}`;

const DATE_DISPLAY_FORMAT$1 = 'MMM DD, YYYY';
/** `REL_ENTITY` of CL rows that came from a booking extra service. */
const BOOKING_SERVICE_ENTITY = 'TBL_BSE';
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
    /** `_SVC_CATEGORY` setup entries, used to label extra-service descriptions. */
    serviceCategoryOptions = [];
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
        return irDate.formatDate(date, DATE_DISPLAY_FORMAT$1);
        // const m = moment(date, [DATE_INPUT_FORMAT, moment.ISO_8601], true);
        // return m.isValid() ? m.format(DATE_DISPLAY_FORMAT) : date;
    }
    // ─── Selection ────────────────────────────────────────────────────────────
    get selectedUnbilledRows() {
        return this.data.filter(row => this.selectedRowIds.has(row._rowId) && row.status?.id === 'unbilled');
    }
    handleHoldToggled(rowId, newIsHold) {
        // Note: optimistic local update — parent will re-fetch on next search
        const updatedData = this.data.map(row => {
            if (row._rowId !== rowId)
                return row;
            const updatedRaw = { ...row._raw, IS_HOLD: newIsHold };
            const status = newIsHold
                ? { id: 'held', label: t.t('Lcz_Held', { fallback: 'Held' }), variant: 'warning', description: '' }
                : { id: 'unbilled', label: t.t('Lcz_Unbilled', { fallback: 'Unbilled' }), variant: 'neutral', description: '' };
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
            header: t.t('Lcz_Status', { fallback: 'Status' }),
            size: 200,
            cell: info => {
                if (info?.row?.original?._raw?.CL_TX_TYPE_CODE === enums.ClTxTypeCode.OpeningBalance) {
                    return null;
                }
                return (index.h("div", { class: "folio-table__status-cell" }, index.h("ir-cl-status-tag", { transaction: info.row.original })));
            },
            enableGrouping: true,
            enableSorting: false,
        }),
        this.columnHelper.accessor('serviceDate', {
            enableSorting: false,
            header: t.t('Lcz_ServiceDate', { fallback: 'Service Date' }),
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
            header: t.t('Lcz_BookingNumberColumn', { fallback: 'Booking #' }),
            cell: info => {
                const val = info.getValue();
                if (!val)
                    return null;
                return (index.h("ir-custom-button", { link: true, onClickHandler: () => {
                        this.selectedBookingNumber = val;
                        this.bookingDrawerOpen = true;
                    } }, number.formatBookingNumber(val)));
            },
            enableGrouping: true,
            enableSorting: false,
        }),
        this.columnHelper.accessor('description', {
            header: t.t('Lcz_Description', { fallback: 'Description' }),
            cell: info => index.h("span", { class: "folio-table__description" }, this.resolveRowDescription(info.row.original)),
            enableSorting: false,
            enableGrouping: true,
        }),
        this.columnHelper.accessor('docNumber', {
            header: t.t('Lcz_FiscalDoc', { fallback: 'Fiscal Doc' }),
            cell: info => index.h("span", null, info.getValue()),
            enableSorting: false,
            enableGrouping: true,
        }),
        this.columnHelper.accessor('debit', {
            header: t.t('Lcz_DebitColumn', { fallback: 'Debit' }),
            cell: info => {
                const symbol = this.getSymbol(info.row.original._raw.CURRENCY_ID);
                return (index.h("ir-input-cell", { disabled: true, mask: 'price', value: info.getValue().toString() }, index.h("span", { slot: "start" }, symbol), index.h("span", null, info.getValue() ? number.formatAmount(symbol, info.getValue()) : '')));
            },
            aggregatedCell: info => index.h("span", { style: { padding: 'var(--ir-cell-padding)' } }, number.formatAmount(this.currencySymbol, Number(info.getValue()))),
            aggregationFn: 'sum',
            enableGrouping: false,
            enableSorting: false,
        }),
        this.columnHelper.accessor('credit', {
            header: t.t('Lcz_CreditColumn', { fallback: 'Credit' }),
            cell: info => {
                const symbol = this.getSymbol(info.row.original._raw.CURRENCY_ID);
                return (index.h("ir-input-cell", { mask: 'price', disabled: true, value: info.getValue().toString() }, index.h("span", { slot: "start" }, symbol), index.h("span", null, info.getValue() ? number.formatAmount(symbol, info.getValue()) : '')));
            },
            aggregatedCell: info => index.h("span", { style: { padding: 'var(--ir-cell-padding)' } }, number.formatAmount(this.currencySymbol, Number(info.getValue()))),
            aggregationFn: 'sum',
            enableSorting: false,
            enableGrouping: false,
        }),
        this.columnHelper.accessor('balance', {
            header: t.t('Lcz_Balance', { fallback: 'Balance' }),
            cell: info => {
                const symbol = this.getSymbol(info.row.original._raw.CURRENCY_ID);
                return (index.h("ir-input-cell", { disabled: true, mask: 'price', value: info.getValue().toString() }, index.h("span", { slot: "start" }, symbol), index.h("span", null, info.getValue() ? number.formatAmount(symbol, +info.getValue()) : '')));
            },
            enableSorting: false,
            enableGrouping: false,
        }),
        this.columnHelper.display({
            id: 'actions',
            header: t.t('Lcz_Actions', { fallback: 'Actions' }),
            size: 48,
            cell: info => {
                const row = info.row.original;
                if (row._raw.IS_LOCKED || row._raw.CL_TX_TYPE_CODE === enums.ClTxTypeCode.OpeningBalance)
                    return index.h("div", { class: 'fiscal-table__action-trigger --placeholder' });
                const canEditOrDelete = cityLedger_service.actionableClTypes.has(row._raw.CL_TX_TYPE_CODE) && !row._raw.CATEGORY;
                return (index.h("wa-dropdown", { "onwa-hide": e => {
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                    }, "onwa-select": (e) => {
                        this.handleAction(e.detail.item.value, row);
                    } }, index.h("wa-button", { slot: "trigger", size: "s", variant: "neutral", appearance: "plain", class: "fiscal-table__action-trigger" }, index.h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1rem' } })), index.h("wa-dropdown-item", { value: "hold-transaction" }, row._raw.IS_HOLD ? t.t('Lcz_RevertToUnbilled', { fallback: 'Revert to Unbilled' }) : t.t('Lcz_HoldEntry', { fallback: 'Hold entry' })), canEditOrDelete && index.h("wa-dropdown-item", { value: "edit-transaction" }, t.t('Lcz_Edit', { fallback: 'Edit' })), canEditOrDelete && (index.h("wa-dropdown-item", { value: "delete-transaction", variant: "danger" }, t.t('Lcz_Delete', { fallback: 'Delete' })))));
            },
            enableSorting: false,
            enableGrouping: false,
        }),
    ];
    /**
     * @param {string} description - Raw DESCRIPTION from the CL row.
     * @param {Record<string, string>} svcCategory - _SVC_CATEGORY labels, keyed by code.
     * @returns {string} Description with the category code replaced by its label.
     */
    resolveServiceDescription(description, svcCategory) {
        if (!description)
            return description;
        const separatorIndex = description.indexOf(':');
        const code = (separatorIndex === -1 ? description : description.slice(0, separatorIndex)).trim();
        const label = svcCategory?.[code];
        if (!label)
            return description;
        const rest = separatorIndex === -1 ? '' : description.slice(separatorIndex + 1).trim();
        return rest ? `${label}: ${rest}` : label;
    }
    /** `_SVC_CATEGORY` labels keyed by code, rebuilt whenever the options prop changes. */
    get svcCategoryLabels() {
        return (this.serviceCategoryOptions ?? []).reduce((acc, option) => {
            acc[option.id] = option.label;
            return acc;
        }, {});
    }
    /**
     * Extra-service rows store their description as `CATEGORY_CODE: detail`, and this screen has no
     * category grouping to spell the code out — so the label is inlined. Every other row renders the
     * description as it came from the API.
     *
     * @param {FolioRow} row - Folio row being rendered.
     * @returns {string} Description to display.
     */
    resolveRowDescription(row) {
        if (row._raw?.REL_ENTITY !== BOOKING_SERVICE_ENTITY)
            return row.description;
        return this.resolveServiceDescription(row.description, this.svcCategoryLabels);
    }
    // ─── Table state ─────────────────────────────────────────────────────────
    onTableStateChange = (updater) => {
        const nextState = typeof updater === 'function' ? updater(this.tableState) : updater;
        if (JSON.stringify(this.tableState) === JSON.stringify(nextState))
            return;
        this.tableState = nextState;
    };
    renderCell = (cell) => {
        if (cell.getIsGrouped()) {
            return (index.h("wa-button", { appearance: "plain", size: "s", class: "group-expander", onClick: () => cell.row.toggleExpanded() }, index.h("wa-icon", { style: { fontSize: '0.875rem' }, slot: "start", name: cell.row.getIsExpanded() ? 'chevron-down' : 'chevron-up' }), useTable.flexRender(cell.column.columnDef.cell, cell.getContext()), " ", index.h("span", { slot: "end" }, "(", number.formatCount(cell.row.subRows.length), ")")));
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
        return (index.h("tr", { class: "ir-table-row balance-row balance-row--start" }, index.h("td", { class: "sticky-column" }), index.h("td", null, this.formatDate(this.fromDate)), index.h("td", null), index.h("td", null, index.h("wa-icon", { name: "scale-balanced", style: { marginInlineEnd: '0.375rem', fontSize: '0.875rem' } }), t.t('Lcz_StartingBalance', { fallback: 'Starting Balance' })), index.h("td", null), index.h("td", { class: "cell--align-end" }, this.startingBalance >= 0 ? number.formatAmount(this.currencySymbol, this.startingBalance) : ''), index.h("td", { class: "cell--align-end" }, this.startingBalance < 0 ? number.formatAmount(this.currencySymbol, this.startingBalance) : ''), index.h("td", { class: "cell--align-end" }, number.formatAmount(this.currencySymbol, this.startingBalance)), index.h("td", null)));
    }
    renderEndingBalanceRow() {
        return (index.h("tr", { class: "ir-table-row balance-row balance-row--end" }, index.h("td", { class: "sticky-column" }), index.h("td", null, this.formatDate(this.toDate)), index.h("td", null), index.h("td", null, index.h("wa-icon", { name: "scale-balanced", style: { marginInlineEnd: '0.375rem', fontSize: '0.875rem' } }), t.t('Lcz_EndingBalance', { fallback: 'Ending Balance' })), index.h("td", null), index.h("td", { class: "cell--align-end" }, this.closingBalance >= 0 ? number.formatAmount(this.currencySymbol, Math.abs(this.closingBalance)) : ''), index.h("td", { class: "cell--align-end" }, this.closingBalance < 0 ? number.formatAmount(this.currencySymbol, Math.abs(this.closingBalance)) : ''), index.h("td", { class: "cell--align-end" }, this.closingBalance < 0 ? '-' : '', number.formatAmount(this.currencySymbol, Math.abs(this.closingBalance))), index.h("td", null)));
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
            return (index.h(index.Host, null, index.h("div", { class: "folio-table__empty-state" }, index.h("wa-icon", { name: "building-columns", style: { fontSize: '2.5rem', opacity: '0.3' } }), index.h("p", null, t.t('Lcz_SelectAgentToViewFolio', { fallback: 'Select an agent to view the folio ledger.' })))));
        }
        if (!this.hasFetched) {
            const hasDate = !!(this.fromDate || this.toDate);
            return (index.h(index.Host, null, index.h("div", { class: "folio-table__date-prompt" }, index.h("div", { class: "folio-table__date-prompt-icon" }, index.h("wa-icon", { name: "calendar-days" })), index.h("p", { class: "folio-table__date-prompt-title" }, t.t('Lcz_SelectDateRangeToGetStarted', { fallback: 'Select a date range to get started' })), hasDate && (index.h("wa-animation", { play: true, iterations: 1, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, index.h("ir-custom-button", { size: "s", variant: "brand", onClickHandler: () => this.fetchRequested.emit() }, index.h("wa-icon", { slot: "start", name: "magnifying-glass" }), t.t('Lcz_LoadTransactions', { fallback: 'Load Transactions' })))))));
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
        return (index.h(index.Host, null, hasUnbilledSelected && (index.h("div", { class: "folio-table__invoice-bar" }, index.h("span", { class: "folio-table__invoice-bar-text" }, index.h("wa-icon", { name: "file-invoice", style: { marginInlineEnd: '0.375rem' } }), t.t('Lcz_UnbilledItemsSelected', { fallback: '%1 unbilled item(s) selected', params: [number.formatCount(this.selectedUnbilledRows.length)] })), index.h("ir-custom-button", { size: "s", variant: "brand", onClickHandler: () => this.generateInvoice.emit(this.selectedUnbilledRows) }, index.h("wa-icon", { slot: "start", name: "file-invoice-dollar" }), t.t('Lcz_GenerateInvoice', { fallback: 'Generate Invoice' })), index.h("ir-custom-button", { size: "s", variant: "neutral", appearance: "outlined", onClickHandler: () => (this.selectedRowIds = new Set()) }, t.t('Lcz_ClearSelection', { fallback: 'Clear Selection' })))), index.h("div", { class: "table--container" }, index.h("table", { class: "table data-table" }, this.renderTableHead(table), index.h("tbody", null, !this.hideBalanceInfo && this.renderStartingBalanceRow(), this.renderDataRows(table), !this.hideBalanceInfo && this.renderEndingBalanceRow()))), index.h("ir-pagination", { class: "data-table--pagination", total: total, pages: pageCount, pageSize: this.pageSize, currentPage: this.pageIndex + 1, allowPageSizeChange: true, showing: { from: showingFrom, to: showingTo }, pageSizes: this.pageSizes, recordLabel: '', onPageChange: (event) => {
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
        this.printFilters = null;
        this.pdfUrl = null;
        if (this.filters.fromDate && this.filters.toDate) {
            this.fetchStatement(this.filters);
        }
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
                    LIST_FD_TYPE_CODE: [enums.FdTypes.CreditReceipt, enums.FdTypes.CreditNote, enums.FdTypes.DebitNote, enums.FdTypes.Invoice, enums.FdTypes.Receipt],
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
            return t.t('Lcz_StatementPreviewTitle', { fallback: 'Statement Preview' });
        return t.t('Lcz_StatementDateRangeLabel', {
            fallback: 'Statement - %1 to %2',
            params: [irDate.formatDate(this.printFilters.fromDate, 'MMM DD, YYYY'), irDate.formatDate(this.printFilters.toDate, 'MMM DD, YYYY')],
        });
    }
    render() {
        return (index.h(index.Host, { key: '7fb7e5a4eaeb72a59faf607cd2d334b931b6b352' }, index.h("section", { key: '6257209ac1572b640ad47ed5cb2ef990b166b7a2', class: "cl-statements", "aria-label": t.t('Lcz_CityLedgerStatementsAriaLabel', { fallback: 'City ledger statements' }) }, index.h("ir-city-ledger-statements-filter", { key: '184136afe839bba7eb92e24cad7cd4db7bd29172', initialFromDate: this.filters.fromDate, initialToDate: this.filters.toDate, onFiltersChange: e => {
                this.filters = e.detail;
                this.clStmtFiltersChange.emit(e.detail);
            }, onCreateStatement: e => {
                this.filters = e.detail;
                this.clStmtFiltersChange.emit(e.detail);
                this.fetchStatement(e.detail);
            }, onPrintStatement: e => (this.printFilters = e.detail) }), index.h("ir-city-ledger-statements-table", { key: '0ac3b0cee98dba57a4095a8133172c51d7cd83ae', rows: this.rows, startingBalance: this.statement?.STARTING_BALANCE ?? 0, endingBalance: this.statement?.ENDING_BALANCE ?? 0, currencySymbol: this.currencySymbol, currencies: this.currencies, isLoading: this.isLoading, hasFetched: this.hasFetched, fromDate: this.filters.fromDate, toDate: this.filters.toDate, agentId: this.agentId })), index.h("ir-preview-screen-dialog", { key: '1a7372d9da729531d0343acb028924c8e8be3fa6', hideDefaultAction: true, open: this.printFilters !== null, label: this.getPrintLabel(), onOpenChanged: e => {
                if (!e.detail) {
                    this.printFilters = null;
                    this.pdfUrl = null;
                }
            } }, index.h("div", { key: 'dbfbc92a234853548dc1a50e044330474d104484', slot: "header-actions" }, this.pdfUrl && (index.h("ir-custom-button", { key: '7bbcb8ad1cab11aac8d0e5eb24d0594c80797dbe', size: "m", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleDownload() }, index.h("wa-icon", { key: '670d24b6ed68efb216dd094ac68e19959afa0af2', name: "download", label: t.t('Lcz_DownloadPdfTooltip', { fallback: 'Download PDF' }) })))), this.printFilters &&
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
        return (index.h("form", { key: 'b1f940cbaf43e77a3d40b8c2cea5c70e49ef572f', onSubmit: e => {
                e.preventDefault();
                if (canCreate)
                    this.createStatement.emit({ fromDate: this.fromDate, toDate: this.toDate });
            } }, index.h("div", { key: '85c3f7f2f159d4fb55d66678b1ee0505a6481ce1', class: "stmt-filters" }, index.h("ir-validator", { key: '24c260e6851b34d2c08dab7b1ca7c6f0fcd6205a', schema: types.objectType({
                fromDate: types.stringType().nonempty(),
                toDate: types.stringType().nonempty(),
            }), value: {
                fromDate: this.fromDate,
                toDate: this.toDate,
            }, class: "stmt-filters__left" }, index.h("ir-date-range-filter", { key: '68519a7c1d6ea4e9bd87cce88d4d67ae51e54a9f', selectionMode: "auto", class: "stmt-filters__date-picker", maxDate: moment.hooks().format('YYYY-MM-DD'), fromDate: this.fromDate, toDate: this.toDate, onDatesChanged: e => {
                this.fromDate = e.detail.from ?? null;
                this.toDate = e.detail.to ?? null;
                this.filtersChange.emit({ fromDate: this.fromDate, toDate: this.toDate });
            } })), index.h("div", { key: '045295c4bdba89fcd0a5293f488251ef40d9898e', class: "stmt-filters__right" }, index.h("ir-custom-button", { key: '80485c6057d22b9c5cb2a0e4c5a2b6f791559889', variant: "brand", type: "submit" }, t.t('Lcz_CreateStatement', { fallback: 'Create Statement' })), index.h("ir-custom-button", { key: '5efa08e88591f2ca5354df6c33639b1d4b13a40c', variant: "brand", appearance: "outlined", disabled: !canCreate, onClickHandler: () => {
                if (canCreate) {
                    this.printStatement.emit({ fromDate: this.fromDate, toDate: this.toDate });
                }
            } }, t.t('Lcz_Print', { fallback: 'Print' }))))));
    }
};
IrCityLedgerStatementsFilter.style = irCityLedgerStatementsFilterCss();

const irCityLedgerStatementsTableCss = () => `.sc-ir-city-ledger-statements-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-city-ledger-statements-table{overflow-x:auto}.table--container.sc-ir-city-ledger-statements-table,.data-table.sc-ir-city-ledger-statements-table{height:100%}.ir-table-row.sc-ir-city-ledger-statements-table td.sc-ir-city-ledger-statements-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-city-ledger-statements-table td.sc-ir-city-ledger-statements-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-city-ledger-statements-table tbody.sc-ir-city-ledger-statements-table tr.sc-ir-city-ledger-statements-table:last-child>td.sc-ir-city-ledger-statements-table{border-bottom:0 !important}.cell--align-start.sc-ir-city-ledger-statements-table{text-align:start !important}.cell--align-center.sc-ir-city-ledger-statements-table{text-align:center !important}.cell--align-end.sc-ir-city-ledger-statements-table{text-align:end !important}.table.sc-ir-city-ledger-statements-table thead.sc-ir-city-ledger-statements-table th.sc-ir-city-ledger-statements-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-city-ledger-statements-table thead.sc-ir-city-ledger-statements-table th.sc-ir-city-ledger-statements-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-city-ledger-statements-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-city-ledger-statements-table,.ir-table-row.sc-ir-city-ledger-statements-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-city-ledger-statements-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-city-ledger-statements-table thead.sc-ir-city-ledger-statements-table th.sortable.sc-ir-city-ledger-statements-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-city-ledger-statements-table thead.sc-ir-city-ledger-statements-table th.sortable.sc-ir-city-ledger-statements-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-city-ledger-statements-table thead.sc-ir-city-ledger-statements-table th.sortable.sc-ir-city-ledger-statements-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-city-ledger-statements-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-city-ledger-statements-table svg.sc-ir-city-ledger-statements-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-city-ledger-statements-table:hover td.sc-ir-city-ledger-statements-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-city-ledger-statements-table:hover td.sc-ir-city-ledger-statements-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-city-ledger-statements-table:active td.sc-ir-city-ledger-statements-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-city-ledger-statements-table td.sc-ir-city-ledger-statements-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-city-ledger-statements-table:hover td.sc-ir-city-ledger-statements-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-city-ledger-statements-table:active td.sc-ir-city-ledger-statements-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-city-ledger-statements-table .empty-row.sc-ir-city-ledger-statements-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-city-ledger-statements-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-city-ledger-statements-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}.sc-ir-city-ledger-statements-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60dvh;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:var(--wa-color-surface-default)}.stmt-table__doc-number.sc-ir-city-ledger-statements-table::part(base),.stmt-table__doc-number.sc-ir-city-ledger-statements-table [part~="base"]{padding:0.05rem 0.5rem;height:auto}.stmt-table__doc-number.sc-ir-city-ledger-statements-table{font-variant-numeric:tabular-nums}.stmt-table__cell--zero.sc-ir-city-ledger-statements-table{color:var(--wa-color-text-quiet, #9ca3af)}.stmt-table__cell--money.sc-ir-city-ledger-statements-table{font-variant-numeric:tabular-nums}.balance-row__label.sc-ir-city-ledger-statements-table{display:flex;align-items:center}.balance-row.sc-ir-city-ledger-statements-table td.sc-ir-city-ledger-statements-table{background:var(--wa-color-brand-fill-quiet) !important;color:var(--wa-color-brand-on-quiet) !important;border-color:var(--wa-color-brand-border-quiet) !important;padding:0.75rem 1rem !important}.stmt-table__loading.sc-ir-city-ledger-statements-table{display:flex;align-items:center;justify-content:center;flex:1;padding:3rem 2rem}.stmt-table__date-prompt.sc-ir-city-ledger-statements-table{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;flex:1;padding:3rem 2rem;text-align:center}.stmt-table__date-prompt-icon.sc-ir-city-ledger-statements-table{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.stmt-table__date-prompt-title.sc-ir-city-ledger-statements-table{margin:0;font-size:0.9375rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}`;

const NUMERIC_COLS = new Set(['debit', 'credit', 'balance']);
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
        return irDate.formatDate(date, DATE_DISPLAY_FORMAT);
        // const m = moment(date, [DATE_INPUT_FORMAT, moment.ISO_8601], true);
        // return m.isValid() ? m.format(DATE_DISPLAY_FORMAT) : date;
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
        return index.h("span", { class: "stmt-table__cell--money" }, number.formatAmount(this.getSymbol(currencyId), value));
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
            case enums.FdTypes.CreditReceipt:
                return -DEBIT;
            case enums.FdTypes.Receipt:
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
                header: t.t('Lcz_DateLabel', { fallback: 'Date' }),
                cell: info => this.formatDate(info.getValue() || info.row.original.ISSUE_DATE),
            }),
            this.columnHelper.accessor('DOC_NUMBER', {
                header: t.t('Lcz_DocNumber', { fallback: 'Doc Number' }),
                cell: info => (index.h("wa-button", { onClick: () => {
                        const row = info.row.original;
                        this.clFiscalDocumentPreview.emit({
                            fdTypeCode: row.FD_TYPE_CODE,
                            documentNumber: row.DOC_NUMBER,
                            agentId: this.agentId,
                            agentName: row.AGENCY_NAME,
                            fdId: row.FD_ID,
                            externalRef: row.EXTERNAL_REF,
                            fromDate: row.FD_TYPE_CODE === enums.FdTypes.Proforma ? row.FROM_DATE : this.fromDate,
                            toDate: row.FD_TYPE_CODE === enums.FdTypes.Proforma ? row.TO_DATE : this.toDate,
                            bookingNbr: row.FD_TYPE_CODE === enums.FdTypes.Proforma ? row.BOOK_NBR : null,
                        });
                    }, variant: "brand", appearance: "plain", class: "stmt-table__doc-number" }, number.formatBookingNumber(info.getValue()))),
            }),
            this.columnHelper.accessor('FD_TYPE_NAME', {
                id: 'type',
                header: t.t('Lcz_Type', { fallback: 'Type' }),
                cell: info => info.getValue() ?? '',
            }),
            this.columnHelper.accessor('DEBIT', {
                id: 'debit',
                header: t.t('Lcz_DebitColumn', { fallback: 'Debit' }),
                cell: info => (info.row.original.FD_TYPE_CODE === enums.FdTypes.CreditReceipt ? '' : this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID)),
            }),
            this.columnHelper.accessor('CREDIT', {
                id: 'credit',
                header: t.t('Lcz_CreditColumn', { fallback: 'Credit' }),
                cell: info => this.renderMoney(this.getCredit(info), info.row.original.CURRENCY_ID),
            }),
            this.columnHelper.display({
                id: 'balance',
                header: t.t('Lcz_Balance', { fallback: 'Balance' }),
                cell: info => this.renderMoney(balances[info.row.index], info.row.original.CURRENCY_ID),
            }),
        ];
    }
    renderStartingBalanceRow() {
        const bal = this.startingBalance;
        return (index.h("tr", { class: "ir-table-row balance-row balance-row--start" }, index.h("td", null, this.formatDate(this.fromDate)), index.h("td", null), index.h("td", { class: "balance-row__label" }, index.h("wa-icon", { name: "scale-balanced", style: { marginInlineEnd: '0.375rem', fontSize: '0.875rem' } }), t.t('Lcz_StartingBalance', { fallback: 'Starting Balance' })), index.h("td", { class: "cell--align-end" }), index.h("td", { class: "cell--align-end" }), index.h("td", { class: "cell--align-end" }, number.formatAmount(this.currencySymbol, bal))));
    }
    renderEndingBalanceRow() {
        const bal = this.runningBalances[this.runningBalances.length - 1];
        return (index.h("tr", { class: "ir-table-row balance-row balance-row--end" }, index.h("td", null, this.formatDate(this.toDate)), index.h("td", null), index.h("td", { class: "balance-row__label" }, index.h("wa-icon", { name: "scale-balanced", style: { marginInlineEnd: '0.375rem', fontSize: '0.875rem' } }), t.t('Lcz_EndingBalance', { fallback: 'Ending Balance' })), index.h("td", { class: "cell--align-end" }), index.h("td", { class: "cell--align-end" }), index.h("td", { class: "cell--align-end" }, number.formatAmount(this.currencySymbol, bal))));
    }
    render() {
        if (!this.hasFetched) {
            return (index.h(index.Host, null, index.h("div", { class: "stmt-table__date-prompt" }, index.h("div", { class: "stmt-table__date-prompt-icon" }, index.h("wa-icon", { name: "calendar-days" })), index.h("p", { class: "stmt-table__date-prompt-title" }, t.t('Lcz_SelectDateRangeAndClickCreateStatement', { fallback: 'Select a date range and click "Create Statement"' })))));
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
        return (index.h(index.Host, null, index.h("div", { class: "table--container" }, index.h("table", { class: "table data-table" }, index.h("thead", null, table.getHeaderGroups().map(headerGroup => (index.h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (index.h("th", { key: header.id, class: { 'cell--align-end': NUMERIC_COLS.has(header.column.id) } }, useTable.flexRender(header.column.columnDef.header, header.getContext())))))))), index.h("tbody", null, this.renderStartingBalanceRow(), table.getRowModel().rows.length === 0 ? (index.h("tr", null, index.h("td", { class: "empty-row", colSpan: colCount }, t.t('Lcz_NoFiscalDocumentsInPeriod', { fallback: 'No fiscal documents in this period.' })))) : (table.getRowModel().rows.map(row => (index.h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (index.h("td", { key: cell.id, class: {
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
        return (index.h(index.Host, { key: '7508ae9b7dbb8bc0f2ab98f4e68da1a9c00d357d' }, index.h("div", { key: '010174cf7ed1b7c3e611303a1f4ec2a94aabd8c0', class: "toolbar" }, this.accountOverview ? (index.h("div", { class: "toolbar__stats" }, index.h("div", { id: "netbalance", class: "toolbar__stat" }, index.h("span", { class: "toolbar__stat-label" }, t.t('Lcz_NetBalance', { fallback: 'Net Balance' })), index.h("span", { class: {
                'toolbar__stat-value': true,
                'toolbar__stat-value--negative': this.accountOverview.ACCOUNT_NET_BALANCE < 0,
            } }, this.accountOverview.ACCOUNT_NET_BALANCE < 0 ? '-' : '', number.formatAmount(calendarData.calendar_data.currency.symbol, Math.abs(this.accountOverview.ACCOUNT_NET_BALANCE)))), index.h("div", { class: "toolbar__stats-sep" }), index.h("div", { id: "uninvoiced", class: "toolbar__stat" }, index.h("span", { class: "toolbar__stat-label" }, t.t('Lcz_Uninvoiced', { fallback: 'Uninvoiced' })), index.h("span", { class: "toolbar__stat-value" }, number.formatAmount(calendarData.calendar_data.currency.symbol, this.accountOverview.TOTAL_UNINVOICED))), index.h("wa-tooltip", { for: "netbalance" }, t.t('Lcz_EndingBalanceAsOfTooltip', {
            fallback: 'Ending balance as of %1 %2',
            params: [irDate.formatDate(moment.hooks(), 'MMM DD, YYYY'), functions._formatTime(new Date().getHours().toString(), new Date().getMinutes().toString())],
        })), index.h("wa-tooltip", { for: "due-invoice" }), index.h("wa-tooltip", { for: "uninvoiced" }, t.t('Lcz_UnbilledEntriesTooltip', { fallback: 'Total unbilled entries from bookings, manual charges, adjustments and discounts.' })), index.h("wa-tooltip", { for: "toolbar-held" }, t.t('Lcz_HeldEntriesTooltip', { fallback: 'Total held entries to resolve with agent.' })))) : (index.h("div", { class: "toolbar__stats-placeholder" })), index.h("div", { key: 'a19cf317113a18387acc7c9b86b56a66067e8c0a', class: "toolbar__actions" }, index.h("ir-custom-button", { key: '5cb01d2c9a8c26915fe4a7cddbfeaf30541f014f', variant: "brand", onClickHandler: () => this.createInvoice.emit() }, t.t('Lcz_CreateInvoice', { fallback: 'Create Invoice' }))))));
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
