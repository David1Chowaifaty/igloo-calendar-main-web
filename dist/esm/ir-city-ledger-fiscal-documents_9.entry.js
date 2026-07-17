import { r as registerInstance, c as createEvent, h, H as Host } from './index-JbQjGrUG.js';
import { C as CityLedgerService } from './index-CE0OWTiY.js';
import { F as FdTypes, C as ClTxTypeCode } from './enums-QjeU2ajV.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { D as Debounce } from './debounce-DF70NVXP.js';
import { l as libExports } from './index-DeW5X45W.js';
import { r as realtimeService } from './realtime.service-BLk631kq.js';
import { m as mapClTxToFolioRow, a as actionableClTypes, d as debitFdTypeCode } from './city-ledger.service-CLz9UqsT.js';
import { c as calendar_data } from './calendar-data-CRLrGQXE.js';
import { v as v4 } from './v4-CK3_k8jD.js';
import { i as formatAmount } from './utils-AafVtJtY.js';
import { c as createColumnHelper, f as flexRender, u as useTable, b as getExpandedRowModel, d as getGroupedRowModel, g as getSortedRowModel, a as getCoreRowModel } from './useTable-D3LS_BXH.js';
import { _ as _formatTime } from './functions-81yL-Vms.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './locales.store-CV07I3Cw.js';
import './index-CR94o8Bs.js';
import './type-D7rOPtKA.js';

const irCityLedgerFiscalDocumentsCss = () => `.sc-ir-city-ledger-fiscal-documents-h{display:block;max-width:1000px;margin-inline:auto}.fiscal-documents.sc-ir-city-ledger-fiscal-documents{display:flex;flex-direction:column;gap:0.875rem}`;

const IrCityLedgerFiscalDocuments = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clFiscalFiltersChange = createEvent(this, "clFiscalFiltersChange");
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
    cityLedgerService = new CityLedgerService();
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
        const effectiveFrom = this.filters.fromDate ? this.filters.fromDate : hooks(filters.toDate).subtract(5, 'years').format('YYYY-MM-DD');
        const effectiveTo = filters.toDate ? this.filters.toDate : hooks(filters.fromDate).add(5, 'years').format('YYYY-MM-DD');
        try {
            const result = await this.cityLedgerService.getFiscalDocuments({
                AGENCY_ID: this.agentId,
                START_DATE: effectiveFrom,
                END_DATE: effectiveTo,
                DOC_NUMBER: filters.docNumber || '',
                LIST_FD_TYPE_CODE: filters.proformaOnly
                    ? [FdTypes.Proforma]
                    : filters.type === 'all'
                        ? [FdTypes.Invoice, FdTypes.Receipt, FdTypes.CreditNote, FdTypes.DebitNote, FdTypes.Draft, FdTypes.CreditReceipt]
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
        return (h(Host, { key: 'f3993e634d41d6eb4bc78cd68303328b287e1e20' }, h("section", { key: '528ef593624e5e91527448f163b2c3be4f5d4562', class: "fiscal-documents", "aria-label": "City ledger fiscal documents" }, h("ir-city-ledger-fiscal-documents-filters", { key: 'c8006483e7a2e21d224a81f6e9c4fd0f26a058c7', filters: this.filters, onFiltersChange: event => {
                this.filters = event.detail;
                this.clFiscalFiltersChange.emit(event.detail);
            }, onApplyFilters: event => {
                this.filters = event.detail;
                this.clFiscalFiltersChange.emit(event.detail);
                this.fetchFiscalDocuments(event.detail);
            } }), h("ir-city-ledger-fiscal-documents-table", { key: '779c983860c751737faf0d350b61783117fa9741', isLoading: this.isLoading, rows: this.filteredDocuments, currencySymbol: this.currencySymbol, currencies: this.currencies, taxableOnly: this.filters.taxableOnly, hasDates: !!(this.filters.fromDate && this.filters.toDate), hasFetched: this.hasFetched, ticket: this.ticket, propertyId: this.propertyId, agentId: this.agentId, fromDate: this.filters.fromDate, toDate: this.filters.toDate, onFetchRequested: () => this.fetchFiscalDocuments(this.filters) }))));
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
const today = hooks();
const IrCityLedgerFiscalDocumentsFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.filtersChange = createEvent(this, "filtersChange");
        this.applyFilters = createEvent(this, "applyFilters");
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
        { label: 'All document types', value: 'all' },
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
        return (h("form", { key: '9e93a549f5e2c01ad327b83bb2f27f612a6b90b9', onSubmit: e => {
                e.preventDefault();
                this.applyFilters.emit(this.filters);
            } }, h("div", { key: 'b3e8909ab89ba84973791925fa07451845fbdf56', class: "filters-bar" }, h("ir-validator", { key: '963806142c84f9a01af14bb59116aac8869dd96e', value: this.filters?.fromDate || this.filters?.toDate, schema: libExports.z.string().nonempty(), class: "filters-bar__dates" }, h("ir-date-range-filter", { key: '9538f64ffcbba8de0bba4170ea7f75565ccdb424', maxDate: today.format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.filters.fromDate, toDate: this.filters.toDate, onDatesChanged: e => this.updateFilters({ fromDate: e.detail.from, toDate: e.detail.to }) })), h("div", { key: 'f218b66a008e05a4c8e55529c0439a77dca1b8be', class: "filters-bar__search-group" }, h("div", { key: 'eef90f229b86f171ba699df4efb3e03ccacfb03f', class: "filters-bar__type-group" }, h("wa-select", { key: 'd87f0af72eee2f515f0743afecf63cb3d8598901', class: "filters-bar__status-select", value: this.filters.type, defaultValue: this.filters.type, onchange: e => this.updateFilters({ type: e.target.value }), size: "s", placeholder: "Document Type" }, this.typeOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("wa-switch", { key: 'd60edee1ae6f4ca7f7c0e264108790c37cb5aa75', class: "filters-bar__tax-switch", checked: this.filters.taxableOnly, onchange: e => this.updateFilters({ taxableOnly: e.target.checked }) }, "Taxes"), h("wa-switch", { key: 'c0840485bdab113862280b1301c66d5118d0a9e3', class: "filters-bar__proforma-switch", checked: this.filters.proformaOnly, onchange: e => {
                const updated = { ...this.filters, proformaOnly: e.target.checked };
                this.filtersChange.emit(updated);
                this.applyFilters.emit(updated);
            } }, "Proforma")), h("ir-input", { key: '3200bf22f4f6addc3b98faf6a2dd3d02921860e8', class: "filters-bar__search-input", placeholder: "Search by doc number", value: this.docNumber, "onText-change": e => {
                this.docNumber = e.detail;
                this.emitSearchDebounced(e.detail);
            }, withClear: true }, h("wa-icon", { key: 'b1316ce8ad6baa41e9955f3c90fb338d7008f4b4', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: '185a1c69abc99e78bf2147d835e76d4100d2582a', variant: "neutral", appearance: "outlined", type: "submit" }, h("wa-icon", { key: 'c887e9629c40db00fb0310e6a486925b816b0cae', name: "magnifying-glass" }))))));
    }
};
__decorate$1([
    Debounce(300)
], IrCityLedgerFiscalDocumentsFilters.prototype, "emitSearchDebounced", null);
IrCityLedgerFiscalDocumentsFilters.style = irCityLedgerFiscalDocumentsFiltersCss();

const irCityLedgerFolioCss = () => `.sc-ir-city-ledger-folio-h{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem);max-width:1920px}`;

const IrCityLedgerFolio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.folioSummaryUpdate = createEvent(this, "folioSummaryUpdate");
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
    cityLedgerService = new CityLedgerService();
    unsubscribeRealtime = null;
    clLockingPending = new Map();
    clLockingTimer = null;
    componentDidLoad() {
        this.unsubscribeRealtime = realtimeService.subscribe(this.propertyId, async (msg) => {
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
                const row = { ...mapClTxToFolioRow(tx), _rowId: v4() };
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
            const effectiveFrom = this.filters.fromDate ? this.filters.fromDate : hooks(this.filters.toDate).subtract(5, 'years').format('YYYY-MM-DD');
            const effectiveTo = this.filters.toDate ? this.filters.toDate : hooks(this.filters.fromDate).add(5, 'years').format('YYYY-MM-DD');
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
        const effectiveFrom = this.filters.fromDate ? this.filters.fromDate : hooks(this.filters.toDate).subtract(5, 'years').format('YYYY-MM-DD');
        const effectiveTo = this.filters.toDate ? this.filters.toDate : hooks(this.filters.fromDate).add(5, 'years').format('YYYY-MM-DD');
        try {
            this.isLoading = true;
            const currencyId = calendar_data?.property?.currency?.id;
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
                return { ...mapped, _rowId: v4() };
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
        return (h(Host, { key: '154e8d32da4e7a92cb1a496814056f88ee15de2b' }, h("ir-city-ledger-folio-filters", { key: 'a4717fd060e9907dc56f32f4787aba818c408429', onFiltersChange: e => (this.filters = e.detail), onApplyFilters: async (e) => {
                this.filters = e.detail;
                this.pageIndex = 0;
                await this.fetchFolioData();
            }, onAddEntry: () => {
                this.editingTransaction = null;
                this.isTransactionOpen = true;
            }, isExporting: this.isFetchingExcel, onExportFolio: () => {
                this.fetchCl(true);
            } }), h("ir-city-ledger-folio-table", { key: '94529454ed5a392d24f445d5f3e0edbbb3e635db', agentId: this.agent?.id, propertyId: this.propertyId, ticket: this.ticket, language: this.language, hideBalanceInfo: !!(this.filters.search || (this.filters.status && this.filters.status !== 'all')), data: this.data, isLoading: this.isLoading, hasFetched: this.hasFetched, startingBalance: this.startingBalance, closingBalance: this.closingBalance, totalCount: this.totalCount, pageIndex: this.pageIndex, pageSize: this.pageSize, fromDate: this.filters?.fromDate, toDate: this.filters?.toDate, currencySymbol: calendar_data.property?.currency?.symbol, currencies: this.currencies, onPageChange: async (e) => {
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
            } }), h("ir-dialog", { key: 'c0ab545ada9eb94c5e52b7a626da1136af05b462', label: "Delete Entry", open: !!this.deleteTarget, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!this.isDeleting)
                    this.deleteTarget = null;
            } }, h("p", { key: '1e3f1364d29df345e267fa96e2088f1854b8fae9' }, "Are you sure you want to delete this entry? This action cannot be undone."), h("div", { key: 'aeb0078e447aa9e6240d1fab46d0a260687d34f7', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '6203a47998f797e971e284a0e56ef3a005058e80', size: "m", appearance: "filled", variant: "neutral", onClickHandler: () => (this.deleteTarget = null) }, "Cancel"), h("ir-custom-button", { key: 'fbc9b5af45997a55b5e2cd852a76495ae6c95791', size: "m", variant: "danger", loading: this.isDeleting, onClickHandler: () => this.handleDelete() }, "Delete"))), h("ir-city-ledger-transaction-drawer", { key: '74f97d13cdb831e5f20baaed9ee1fc06062ee14d', open: this.isTransactionOpen, serviceCategoryOptions: this.serviceCategoryOptions, agent: this.agent, transaction: this.editingTransaction, drawerLabel: this.editingTransaction ? 'Edit Entry' : 'New Entry', onTransactionSaved: () => {
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
        registerInstance(this, hostRef);
        this.filtersChange = createEvent(this, "filtersChange");
        this.addEntry = createEvent(this, "addEntry");
        this.applyFilters = createEvent(this, "applyFilters");
        this.exportFolio = createEvent(this, "exportFolio");
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
        return (h("form", { key: 'ca1b86435fbada7106db03bfa70d0cb1b49fdc91', onSubmit: e => {
                e.preventDefault();
                this.applyFilters.emit({
                    fromDate: this.dates.from?.format('YYYY-MM-DD'),
                    toDate: this.dates.to?.format('YYYY-MM-DD'),
                    status: this.statusFilter,
                    search: this.searchQuery,
                });
            } }, h("div", { key: '8f6e9a7bce624b5b05bf461a9c61b5417369d2e8', class: "filters-bar" }, h("ir-validator", { key: 'd24520aa20e590a3b45ed658649d1e795bb13a55', value: this.dates?.from?.format('YYYY-MM-DD') || this.dates?.to?.format('YYYY-MM-DD'), schema: libExports.z.string().nonempty(), class: "filters-bar__dates" }, h("ir-date-range-filter", { key: '103b593c2f58f4c252dd5f7f34dffe0c2a33beec', maxDate: hooks().format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.dates.from?.format('YYYY-MM-DD') ?? undefined, toDate: this.dates.to?.format('YYYY-MM-DD') ?? undefined, onDatesChanged: e => {
                const { from, to } = e.detail;
                this.dates = {
                    from: from ? hooks(from, 'YYYY-MM-DD') : null,
                    to: to ? hooks(to, 'YYYY-MM-DD') : null,
                };
                this.emitFilters();
            } })), h("div", { key: '99083aab3a1569ffed528bed5f4bfb07f9a7157c', class: "filters-bar__search-group" }, h("wa-select", { key: '96931c97e496b2bc0bd4f8ab2f3a40bfb2ed6060', class: "filters-bar__status-select", value: this.statusFilter, onchange: e => {
                this.statusFilter = e.target.value?.toString();
                this.emitFilters();
            }, "onwa-clear": () => {
                this.statusFilter = 'all';
                this.emitFilters();
            }, placeholder: "Status", size: "s", withClear: true }, this.statuses.map(s => (h("wa-option", { value: s.value, label: s.label }, s.label)))), h("ir-input", { key: '484d49592b001222fc7fffa5fe982644ce4b5fdd', class: "filters-bar__search-input", "onText-change": e => {
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
            }), value: this.searchQuery, placeholder: "Booking# or doc number", withClear: true }, h("wa-icon", { key: '83f0fcd62672d79bd9dfa2a0ff0e9e3e1e92525d', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: '77b7a3ba20989391c2d473f37438cc96e0126226', variant: "neutral", type: "submit", appearance: "outlined" }, h("wa-icon", { key: '33978297cff989c75f362116ed13abcc3d5401cf', name: "magnifying-glass" }))), h("div", { key: 'e3d1f35dd223ca2aad64a7500b0ea64cc01841fc', class: "filters-bar__actions" }, h("ir-custom-button", { key: 'b3216046f89454af8368170ec8e4db2aca121570', loading: this.isExporting, appearance: "outlined", disabled: !this.dates.from && !this.dates.to, onClickHandler: () => this.exportFolio.emit() }, h("wa-icon", { key: 'a7dbdb43fd0ecbcf5ca4e098ed762a62e5c3aa3d', name: "download", slot: "start" }), h("span", { key: 'fbff8d818e5ac0824f0ce10587006b24b0a65e97' }, "Export")), h("ir-custom-button", { key: '420bb70ba3e4c992ced74e45f3411576f5528760', variant: "brand", appearance: "outlined", onClickHandler: () => this.addEntry.emit() }, "Add Entry")))));
    }
};
__decorate([
    Debounce(300)
], IrCityLedgerFolioFilters.prototype, "emitFiltersDebounced", null);
IrCityLedgerFolioFilters.style = irCityLedgerFolioFiltersCss();

const irCityLedgerFolioTableCss = () => `.sc-ir-city-ledger-folio-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-city-ledger-folio-table{overflow-x:auto}.table--container.sc-ir-city-ledger-folio-table,.data-table.sc-ir-city-ledger-folio-table{height:100%}.ir-table-row.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table tr.sc-ir-city-ledger-folio-table:last-child>td.sc-ir-city-ledger-folio-table{border-bottom:0 !important}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-city-ledger-folio-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-city-ledger-folio-table,.ir-table-row.sc-ir-city-ledger-folio-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-city-ledger-folio-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sortable.sc-ir-city-ledger-folio-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sortable.sc-ir-city-ledger-folio-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sortable.sc-ir-city-ledger-folio-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-city-ledger-folio-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-city-ledger-folio-table svg.sc-ir-city-ledger-folio-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-city-ledger-folio-table:hover td.sc-ir-city-ledger-folio-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-city-ledger-folio-table:hover td.sc-ir-city-ledger-folio-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-city-ledger-folio-table:active td.sc-ir-city-ledger-folio-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-city-ledger-folio-table:hover td.sc-ir-city-ledger-folio-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-city-ledger-folio-table:active td.sc-ir-city-ledger-folio-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-city-ledger-folio-table .empty-row.sc-ir-city-ledger-folio-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-city-ledger-folio-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-city-ledger-folio-table{position:sticky !important;right:0;background-color:white}.sc-ir-city-ledger-folio-table-h{display:flex;flex-direction:column;border-radius:0.75rem;overflow:hidden;min-height:60dvh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);background-color:var(--wa-color-surface-default, #fff);box-shadow:0 1px 3px 0 rgb(0 0 0 / 0.05),     0 1px 2px -1px rgb(0 0 0 / 0.05)}.booking_heading.sc-ir-city-ledger-folio-table .heading_container.sc-ir-city-ledger-folio-table{display:flex;align-items:center;justify-content:space-between;width:100%;gap:0.5rem}.booking_heading.sc-ir-city-ledger-folio-table .heading_container--between.sc-ir-city-ledger-folio-table{justify-content:space-between}.booking_heading.sc-ir-city-ledger-folio-table .heading_container--end.sc-ir-city-ledger-folio-table{justify-content:flex-end}.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.grouped-cell.sc-ir-city-ledger-folio-table{padding-top:0 !important;padding-bottom:0 !important}.data-table--pagination.sc-ir-city-ledger-folio-table{margin-top:auto !important}.header-button.sc-ir-city-ledger-folio-table::part(start),.header-button.sc-ir-city-ledger-folio-table [part~="start"]{display:none}.header-button.sc-ir-city-ledger-folio-table::part(base),.header-button.sc-ir-city-ledger-folio-table [part~="base"]{justify-content:space-between;color:var(--wa-color-text-subtle, #6b7280);height:auto !important;width:auto !important;padding:0.25rem;border-radius:0.25rem;transition:color 0.15s ease,     background-color 0.15s ease}.header-button.sc-ir-city-ledger-folio-table:hover::part(base),.header-button.sc-ir-city-ledger-folio-table:hover [part~="base"]{color:var(--wa-color-text-normal);background-color:var(--wa-color-neutral-fill-quiet, #f3f4f6)}.input-column.sc-ir-city-ledger-folio-table{padding:0 !important}.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.input-column.sc-ir-city-ledger-folio-table{--input-width:150px;padding:0 !important;width:var(--input-width);max-width:var(--input-width);box-sizing:border-box}.group-expander.sc-ir-city-ledger-folio-table{height:100%}.group-expander.sc-ir-city-ledger-folio-table::part(base),.group-expander.sc-ir-city-ledger-folio-table [part~="base"]{font-size:1rem;height:100%;align-items:center;width:auto}.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table,.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{border-right:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb) !important}.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table:last-child,.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table:last-child{border-right:0 !important}.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sticky-column.sc-ir-city-ledger-folio-table,.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.sticky-column.sc-ir-city-ledger-folio-table{border-right:0 !important}.sticky-column.sc-ir-city-ledger-folio-table::after{content:'';position:absolute;top:0;right:0;width:1px;height:100%;background-color:var(--wa-color-neutral-border-quiet, #e5e7eb);pointer-events:none}.folio-table__empty-state.sc-ir-city-ledger-folio-table,.folio-table__loading.sc-ir-city-ledger-folio-table{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;flex:1;min-height:200px;color:var(--wa-color-text-subtle, #6b7280);font-size:0.875rem}.folio-table__date-prompt.sc-ir-city-ledger-folio-table{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;flex:1;padding:3rem 2rem;text-align:center}.folio-table__date-prompt-icon.sc-ir-city-ledger-folio-table{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.folio-table__date-prompt-title.sc-ir-city-ledger-folio-table{margin:0;font-size:0.9375rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.folio-table__date-prompt-subtitle.sc-ir-city-ledger-folio-table{margin:0;font-size:0.8125rem;color:var(--wa-color-text-subtle, #6b7280);max-width:28rem;line-height:1.5}.folio-table__no-results.sc-ir-city-ledger-folio-table{text-align:center;color:var(--wa-color-text-quiet, #9ca3af);font-size:0.875rem;padding:2rem 1rem}.folio-table__select-col.sc-ir-city-ledger-folio-table{width:40px !important;max-width:40px !important;min-width:40px !important;text-align:center !important;padding-inline:0.5rem !important}.folio-table__checkbox.sc-ir-city-ledger-folio-table{cursor:pointer;width:1rem;height:1rem;accent-color:var(--wa-color-brand-fill-loud)}.folio-table__row--selected.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{background-color:var(--wa-color-brand-fill-quiet, #eff6ff) !important}.folio-table__invoice-bar.sc-ir-city-ledger-folio-table{display:flex;align-items:center;gap:0.75rem;padding:0.625rem 1rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);border-bottom:1px solid var(--wa-color-brand-border-quiet, #bfdbfe);font-size:0.875rem;flex-wrap:wrap}.folio-table__invoice-bar-text.sc-ir-city-ledger-folio-table{display:flex;align-items:center;color:var(--wa-color-brand-on-quiet);font-weight:500;flex:1}.folio-table__balance.sc-ir-city-ledger-folio-table{font-variant-numeric:tabular-nums;font-weight:500;display:block;text-align:right;padding:var(--ir-cell-padding, 0.5rem 1rem)}.folio-table__balance--negative.sc-ir-city-ledger-folio-table{color:var(--wa-color-danger-fill-loud, #dc2626)}.balance-row__label.sc-ir-city-ledger-folio-table{display:flex;align-items:center;font-size:0.8125rem}.cell--align-end.sc-ir-city-ledger-folio-table{text-align:right !important}.cell--align-center.sc-ir-city-ledger-folio-table{text-align:center}.folio-table__status-cell.sc-ir-city-ledger-folio-table{display:flex;align-items:center;justify-content:space-between}.folio-table__col-label.sc-ir-city-ledger-folio-table{display:flex;align-items:center;gap:0.5rem}.folio-table__col-label--end.sc-ir-city-ledger-folio-table{justify-content:flex-end}.folio-table__col-label--center.sc-ir-city-ledger-folio-table{justify-content:center}.folio-table__description.sc-ir-city-ledger-folio-table{display:block;width:100%}.folio-table__heading--actions.sc-ir-city-ledger-folio-table,.folio-table__cell--actions.sc-ir-city-ledger-folio-table{text-align:center !important}.fiscal-table__action-trigger.--placeholder.sc-ir-city-ledger-folio-table{height:calc(24px + 0.02rem)}.fiscal-table__action-trigger.sc-ir-city-ledger-folio-table::part(base),.fiscal-table__action-trigger.sc-ir-city-ledger-folio-table [part~="base"]{width:24px;height:24px}.balance-row.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{background:var(--wa-color-brand-fill-quiet) !important;color:var(--wa-color-brand-on-quiet) !important;border-color:var(--wa-color-brand-border-quiet) !important;padding:0.75rem 1rem !important}.balance-row.sc-ir-city-ledger-folio-table td.sticky-column.sc-ir-city-ledger-folio-table{background:var(--wa-color-brand-fill-quiet) !important}`;

const DATE_DISPLAY_FORMAT$1 = 'MMM DD, YYYY';
const DATE_INPUT_FORMAT$1 = 'YYYY-MM-DD';
const IrCityLedgerFolioTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.pageChange = createEvent(this, "pageChange");
        this.generateInvoice = createEvent(this, "generateInvoice");
        this.fetchRequested = createEvent(this, "fetchRequested");
        this.editEntry = createEvent(this, "editEntry");
        this.deleteEntry = createEvent(this, "deleteEntry");
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
    columnHelper = createColumnHelper();
    pageSizes = [25, 50, 100];
    holdDialogRef;
    // ─── Utilities ───────────────────────────────────────────────────────────
    formatDate(date) {
        if (!date)
            return '';
        const m = hooks(date, [DATE_INPUT_FORMAT$1, hooks.ISO_8601], true);
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
                if (info?.row?.original?._raw?.CL_TX_TYPE_CODE === ClTxTypeCode.OpeningBalance) {
                    return null;
                }
                return (h("div", { class: "folio-table__status-cell" }, h("ir-cl-status-tag", { transaction: info.row.original })));
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
                return (h("ir-custom-button", { link: true, onClickHandler: () => {
                        this.selectedBookingNumber = val;
                        this.bookingDrawerOpen = true;
                    } }, val));
            },
            enableGrouping: true,
            enableSorting: false,
        }),
        this.columnHelper.accessor('description', {
            header: 'Description',
            cell: info => h("span", { class: "folio-table__description" }, info.getValue()),
            enableSorting: false,
            enableGrouping: true,
        }),
        this.columnHelper.accessor('docNumber', {
            header: 'Fiscal Doc',
            cell: info => h("span", null, info.getValue()),
            enableSorting: false,
            enableGrouping: true,
        }),
        this.columnHelper.accessor('debit', {
            header: 'Debit',
            cell: info => {
                const symbol = this.getSymbol(info.row.original._raw.CURRENCY_ID);
                return (h("ir-input-cell", { disabled: true, mask: 'price', value: info.getValue().toString() }, h("span", { slot: "start" }, symbol), h("span", null, info.getValue() ? formatAmount(symbol, info.getValue()) : '')));
            },
            aggregatedCell: info => h("span", { style: { padding: 'var(--ir-cell-padding)' } }, formatAmount(this.currencySymbol, Number(info.getValue()))),
            aggregationFn: 'sum',
            enableGrouping: false,
            enableSorting: false,
        }),
        this.columnHelper.accessor('credit', {
            header: 'Credit',
            cell: info => {
                const symbol = this.getSymbol(info.row.original._raw.CURRENCY_ID);
                return (h("ir-input-cell", { mask: 'price', disabled: true, value: info.getValue().toString() }, h("span", { slot: "start" }, symbol), h("span", null, info.getValue() ? formatAmount(symbol, info.getValue()) : '')));
            },
            aggregatedCell: info => h("span", { style: { padding: 'var(--ir-cell-padding)' } }, formatAmount(this.currencySymbol, Number(info.getValue()))),
            aggregationFn: 'sum',
            enableSorting: false,
            enableGrouping: false,
        }),
        this.columnHelper.accessor('balance', {
            header: 'Balance',
            cell: info => {
                const symbol = this.getSymbol(info.row.original._raw.CURRENCY_ID);
                return (h("ir-input-cell", { disabled: true, mask: 'price', value: info.getValue().toString() }, h("span", { slot: "start" }, symbol), h("span", null, info.getValue() ? formatAmount(symbol, +info.getValue()) : '')));
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
                if (row._raw.IS_LOCKED || row._raw.CL_TX_TYPE_CODE === ClTxTypeCode.OpeningBalance)
                    return h("div", { class: 'fiscal-table__action-trigger --placeholder' });
                const canEditOrDelete = actionableClTypes.has(row._raw.CL_TX_TYPE_CODE) && !row._raw.CATEGORY;
                return (h("wa-dropdown", { "onwa-hide": e => {
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                    }, "onwa-select": (e) => {
                        this.handleAction(e.detail.item.value, row);
                    } }, h("wa-button", { slot: "trigger", size: "s", variant: "neutral", appearance: "plain", class: "fiscal-table__action-trigger" }, h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1rem' } })), h("wa-dropdown-item", { value: "hold-transaction" }, row._raw.IS_HOLD ? 'Revert to Unbilled' : 'Hold entry'), canEditOrDelete && h("wa-dropdown-item", { value: "edit-transaction" }, "Edit"), canEditOrDelete && (h("wa-dropdown-item", { value: "delete-transaction", variant: "danger" }, "Delete"))));
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
            return (h("wa-button", { appearance: "plain", size: "s", class: "group-expander", onClick: () => cell.row.toggleExpanded() }, h("wa-icon", { style: { fontSize: '0.875rem' }, slot: "start", name: cell.row.getIsExpanded() ? 'chevron-down' : 'chevron-up' }), flexRender(cell.column.columnDef.cell, cell.getContext()), " ", h("span", { slot: "end" }, "(", cell.row.subRows.length, ")")));
        }
        if (cell.getIsAggregated()) {
            return flexRender(cell.column.columnDef.aggregatedCell ?? cell.column.columnDef.cell, cell.getContext());
        }
        if (cell.getIsPlaceholder())
            return null;
        return flexRender(cell.column.columnDef.cell, cell.getContext());
    };
    // ─── Render helpers ──────────────────────────────────────────────────────
    renderTableHead(table) {
        return (h("thead", null, table.getHeaderGroups().map(headerGroup => (h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => {
            const canSort = header.column.getCanSort();
            const canGroup = header.column.getCanGroup();
            // const isGrouped = header.column.getIsGrouped();
            // const sortDirection = header.column.getIsSorted();
            const isNumericCol = ['debit', 'credit', 'balance'].includes(header.column.id);
            return (h("th", { key: header.id, class: {
                    'booking_heading': !header.isPlaceholder,
                    'cell--align-end': isNumericCol,
                    'cell--align-center': header.column.id === 'select',
                    'folio-table__heading--actions': header.column.id === 'actions',
                    'sticky-column': header.column.id === 'status',
                    'folio-table__select-col': header.column.id === 'select',
                }, style: header.column.id === 'bookingNumber' ? { paddingInline: '0' } : undefined }, !header.isPlaceholder && (h("div", { class: {
                    'heading_container': true,
                    'heading_container--between': canSort || canGroup,
                    'heading_container--end': isNumericCol,
                } }, h("div", { class: {
                    'folio-table__col-label': true,
                    'folio-table__col-label--end': isNumericCol,
                    'folio-table__col-label--center': header.column.id === 'select',
                } }, h("span", null, flexRender(header.column.columnDef.header, header.getContext())))))));
        }))))));
    }
    renderStartingBalanceRow() {
        return (h("tr", { class: "ir-table-row balance-row balance-row--start" }, h("td", { class: "sticky-column" }), h("td", null, this.formatDate(this.fromDate)), h("td", null), h("td", null, h("wa-icon", { name: "scale-balanced", style: { marginRight: '0.375rem', fontSize: '0.875rem' } }), "Starting Balance"), h("td", null), h("td", { class: "cell--align-end" }, this.startingBalance >= 0 ? formatAmount(this.currencySymbol, this.startingBalance) : ''), h("td", { class: "cell--align-end" }, this.startingBalance < 0 ? formatAmount(this.currencySymbol, this.startingBalance) : ''), h("td", { class: "cell--align-end" }, formatAmount(this.currencySymbol, this.startingBalance)), h("td", null)));
    }
    renderEndingBalanceRow() {
        return (h("tr", { class: "ir-table-row balance-row balance-row--end" }, h("td", { class: "sticky-column" }), h("td", null, this.formatDate(this.toDate)), h("td", null), h("td", null, h("wa-icon", { name: "scale-balanced", style: { marginRight: '0.375rem', fontSize: '0.875rem' } }), "Ending Balance"), h("td", null), h("td", { class: "cell--align-end" }, this.closingBalance >= 0 ? formatAmount(this.currencySymbol, Math.abs(this.closingBalance)) : ''), h("td", { class: "cell--align-end" }, this.closingBalance < 0 ? formatAmount(this.currencySymbol, Math.abs(this.closingBalance)) : ''), h("td", { class: "cell--align-end" }, this.closingBalance < 0 ? '-' : '', formatAmount(this.currencySymbol, Math.abs(this.closingBalance))), h("td", null)));
    }
    renderDataRows(table) {
        const rows = table.getRowModel().rows;
        if (rows.length === 0) {
            return (h("tr", null, h("td", { colSpan: this.columns.length + 1, class: "empty-row" }, h("ir-empty-state", null))));
        }
        return rows.map(row => {
            const isSelected = this.selectedRowIds.has(row.original._rowId);
            return (h("tr", { key: row.id, class: { 'ir-table-row': true, 'folio-table__row--selected': isSelected } }, row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: {
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
            return (h(Host, null, h("div", { class: "folio-table__empty-state" }, h("wa-icon", { name: "building-columns", style: { fontSize: '2.5rem', opacity: '0.3' } }), h("p", null, "Select an agent to view the folio ledger."))));
        }
        if (!this.hasFetched) {
            const hasDate = !!(this.fromDate || this.toDate);
            return (h(Host, null, h("div", { class: "folio-table__date-prompt" }, h("div", { class: "folio-table__date-prompt-icon" }, h("wa-icon", { name: "calendar-days" })), h("p", { class: "folio-table__date-prompt-title" }, "Select a date range to get started"), hasDate && (h("wa-animation", { play: true, iterations: 1, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { size: "s", variant: "brand", onClickHandler: () => this.fetchRequested.emit() }, h("wa-icon", { slot: "start", name: "magnifying-glass" }), "Load Transactions"))))));
        }
        if (this.isLoading) {
            return (h(Host, null, h("div", { class: "folio-table__loading" }, h("ir-spinner", null))));
        }
        const visibleColumns = this.hideBalanceInfo ? this.columns.filter(c => c.accessorKey !== 'balance') : this.columns;
        const table = useTable({
            data: this.displayData,
            columns: visibleColumns,
            state: this.tableState,
            enableGrouping: false,
            onStateChange: this.onTableStateChange,
            getCoreRowModel: getCoreRowModel(),
            getSortedRowModel: getSortedRowModel(),
            getGroupedRowModel: getGroupedRowModel(),
            getExpandedRowModel: getExpandedRowModel(),
        });
        const total = this.totalCount;
        const pageCount = Math.ceil(total / this.pageSize);
        const showingFrom = total ? this.pageIndex * this.pageSize + 1 : 0;
        const showingTo = total ? Math.min(this.pageIndex * this.pageSize + this.displayData.length, total) : 0;
        const hasUnbilledSelected = this.selectedUnbilledRows.length > 0;
        return (h(Host, null, hasUnbilledSelected && (h("div", { class: "folio-table__invoice-bar" }, h("span", { class: "folio-table__invoice-bar-text" }, h("wa-icon", { name: "file-invoice", style: { marginRight: '0.375rem' } }), this.selectedUnbilledRows.length, " unbilled item", this.selectedUnbilledRows.length !== 1 ? 's' : '', " selected"), h("ir-custom-button", { size: "s", variant: "brand", onClickHandler: () => this.generateInvoice.emit(this.selectedUnbilledRows) }, h("wa-icon", { slot: "start", name: "file-invoice-dollar" }), "Generate Invoice"), h("ir-custom-button", { size: "s", variant: "neutral", appearance: "outlined", onClickHandler: () => (this.selectedRowIds = new Set()) }, "Clear Selection"))), h("div", { class: "table--container" }, h("table", { class: "table data-table" }, this.renderTableHead(table), h("tbody", null, !this.hideBalanceInfo && this.renderStartingBalanceRow(), this.renderDataRows(table), !this.hideBalanceInfo && this.renderEndingBalanceRow()))), h("ir-pagination", { class: "data-table--pagination", total: total, pages: pageCount, pageSize: this.pageSize, currentPage: this.pageIndex + 1, allowPageSizeChange: true, showing: { from: showingFrom, to: showingTo }, pageSizes: this.pageSizes, recordLabel: '', onPageChange: (event) => {
                event.stopPropagation();
                this.pageChange.emit({ pageIndex: event.detail.currentPage - 1, pageSize: this.pageSize });
            }, onPageSizeChange: (event) => {
                event.stopPropagation();
                if (event.detail.pageSize) {
                    this.pageChange.emit({ pageIndex: 0, pageSize: event.detail.pageSize });
                }
            } }), h("ir-hold-transaction-dialog", { row: this.holdTargetRow, currencySymbol: this.currencySymbol, ref: el => (this.holdDialogRef = el), onHoldToggled: e => this.handleHoldToggled(e.detail.rowId, e.detail.newIsHold) }), h("ir-booking-details-drawer", { open: this.bookingDrawerOpen, propertyId: this.propertyId, ticket: this.ticket, language: this.language, bookingNumber: this.selectedBookingNumber, onBookingDetailsDrawerClosed: () => (this.bookingDrawerOpen = false) })));
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
        registerInstance(this, hostRef);
        this.clStmtFiltersChange = createEvent(this, "clStmtFiltersChange");
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
    cityLedgerService = new CityLedgerService();
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
        const currencyId = calendar_data?.property?.currency?.id;
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
                    LIST_FD_TYPE_CODE: [FdTypes.CreditReceipt, FdTypes.CreditNote, FdTypes.DebitNote, FdTypes.Invoice, FdTypes.Receipt],
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
        return `Statement - ${hooks(this.printFilters.fromDate).format('MMM DD, YYYY')} to ${hooks(this.printFilters.toDate).format('MMM DD, YYYY')}`;
    }
    render() {
        return (h(Host, { key: 'd77ac7a39f6c47d2366dfffd3c29e9efe50162db' }, h("section", { key: '5decf84ccfb4a02ef72c87c6b98cc5dac8057cf4', class: "cl-statements", "aria-label": "City ledger statements" }, h("ir-city-ledger-statements-filter", { key: 'b7ec058a149ca979cf9bd02dad39396b11366499', initialFromDate: this.filters.fromDate, initialToDate: this.filters.toDate, onFiltersChange: e => {
                this.filters = e.detail;
                this.clStmtFiltersChange.emit(e.detail);
            }, onCreateStatement: e => {
                this.filters = e.detail;
                this.clStmtFiltersChange.emit(e.detail);
                this.fetchStatement(e.detail);
            }, onPrintStatement: e => (this.printFilters = e.detail) }), h("ir-city-ledger-statements-table", { key: '64d915f5932268e183b7a54966a2a9f9fe5b1038', rows: this.rows, startingBalance: this.statement?.STARTING_BALANCE ?? 0, endingBalance: this.statement?.ENDING_BALANCE ?? 0, currencySymbol: this.currencySymbol, currencies: this.currencies, isLoading: this.isLoading, hasFetched: this.hasFetched, fromDate: this.filters.fromDate, toDate: this.filters.toDate, agentId: this.agentId })), h("ir-preview-screen-dialog", { key: '03c315c14c03f50dd4d85ac98c4bffdee1e21399', hideDefaultAction: true, open: this.printFilters !== null, label: this.getPrintLabel(), onOpenChanged: e => {
                if (!e.detail) {
                    this.printFilters = null;
                    this.pdfUrl = null;
                }
            } }, h("div", { key: '90e5f50ab8b74348ec216e9c122108305854dd84', slot: "header-actions" }, this.pdfUrl && (h("ir-custom-button", { key: 'c06ce214bc39e2afbb7f8c06aa661cdf7ea54f5a', size: "m", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleDownload() }, h("wa-icon", { key: 'bc2d37c0df3eee13988f63ca26809317ddf73f58', name: "download", label: "Download PDF" })))), this.printFilters &&
            (this.isFetchingPdf ? (h("div", { class: "preview-loading" }, h("ir-spinner", null))) : (h("div", { class: "preview-body" }, h("ir-pdf-viewer", { src: this.pdfUrl })))))));
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
        registerInstance(this, hostRef);
        this.filtersChange = createEvent(this, "filtersChange");
        this.createStatement = createEvent(this, "createStatement");
        this.printStatement = createEvent(this, "printStatement");
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
        return (h("form", { key: '8a69b5eb3ca80cd052688ce5ad6fac1b0b536f4b', onSubmit: e => {
                e.preventDefault();
                if (canCreate)
                    this.createStatement.emit({ fromDate: this.fromDate, toDate: this.toDate });
            } }, h("div", { key: '33050a3874493d909d9f5d4e1df1ecade97a34a5', class: "stmt-filters" }, h("ir-validator", { key: '7d125d6541c59a77318a30894f88332e2bbe5762', schema: libExports.z.object({
                fromDate: libExports.z.string().nonempty(),
                toDate: libExports.z.string().nonempty(),
            }), value: {
                fromDate: this.fromDate,
                toDate: this.toDate,
            }, class: "stmt-filters__left" }, h("ir-date-range-filter", { key: 'eae74dc4126d89fd1846c6010cc6bce3015a2ce2', selectionMode: "auto", class: "stmt-filters__date-picker", maxDate: hooks().format('YYYY-MM-DD'), fromDate: this.fromDate, toDate: this.toDate, onDatesChanged: e => {
                this.fromDate = e.detail.from ?? null;
                this.toDate = e.detail.to ?? null;
                this.filtersChange.emit({ fromDate: this.fromDate, toDate: this.toDate });
            } })), h("div", { key: '59f02f886a014ceb970df2a481ce5c3474e681b5', class: "stmt-filters__right" }, h("ir-custom-button", { key: '3442214a7c71a4e9657947c0aba6390e8256dfaa', variant: "brand", type: "submit" }, "Create Statement"), h("ir-custom-button", { key: '2f62ba2f57580f64c3c56f6583a46a72e32d09c9', variant: "brand", appearance: "outlined", disabled: !canCreate, onClickHandler: () => {
                if (canCreate) {
                    this.printStatement.emit({ fromDate: this.fromDate, toDate: this.toDate });
                }
            } }, "Print")))));
    }
};
IrCityLedgerStatementsFilter.style = irCityLedgerStatementsFilterCss();

const irCityLedgerStatementsTableCss = () => `.sc-ir-city-ledger-statements-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-city-ledger-statements-table{overflow-x:auto}.table--container.sc-ir-city-ledger-statements-table,.data-table.sc-ir-city-ledger-statements-table{height:100%}.ir-table-row.sc-ir-city-ledger-statements-table td.sc-ir-city-ledger-statements-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-city-ledger-statements-table td.sc-ir-city-ledger-statements-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-city-ledger-statements-table tbody.sc-ir-city-ledger-statements-table tr.sc-ir-city-ledger-statements-table:last-child>td.sc-ir-city-ledger-statements-table{border-bottom:0 !important}.table.sc-ir-city-ledger-statements-table thead.sc-ir-city-ledger-statements-table th.sc-ir-city-ledger-statements-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-city-ledger-statements-table thead.sc-ir-city-ledger-statements-table th.sc-ir-city-ledger-statements-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-city-ledger-statements-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-city-ledger-statements-table,.ir-table-row.sc-ir-city-ledger-statements-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-city-ledger-statements-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-city-ledger-statements-table thead.sc-ir-city-ledger-statements-table th.sortable.sc-ir-city-ledger-statements-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-city-ledger-statements-table thead.sc-ir-city-ledger-statements-table th.sortable.sc-ir-city-ledger-statements-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-city-ledger-statements-table thead.sc-ir-city-ledger-statements-table th.sortable.sc-ir-city-ledger-statements-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-city-ledger-statements-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-city-ledger-statements-table svg.sc-ir-city-ledger-statements-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-city-ledger-statements-table:hover td.sc-ir-city-ledger-statements-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-city-ledger-statements-table:hover td.sc-ir-city-ledger-statements-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-city-ledger-statements-table:active td.sc-ir-city-ledger-statements-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-city-ledger-statements-table td.sc-ir-city-ledger-statements-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-city-ledger-statements-table:hover td.sc-ir-city-ledger-statements-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-city-ledger-statements-table:active td.sc-ir-city-ledger-statements-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-city-ledger-statements-table .empty-row.sc-ir-city-ledger-statements-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-city-ledger-statements-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-city-ledger-statements-table{position:sticky !important;right:0;background-color:white}.sc-ir-city-ledger-statements-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60dvh;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:var(--wa-color-surface-default)}.stmt-table__doc-number.sc-ir-city-ledger-statements-table::part(base),.stmt-table__doc-number.sc-ir-city-ledger-statements-table [part~="base"]{padding:0.05rem 0.5rem;height:auto}.cell--align-end.sc-ir-city-ledger-statements-table{text-align:right !important}.stmt-table__doc-number.sc-ir-city-ledger-statements-table{font-variant-numeric:tabular-nums}.stmt-table__cell--zero.sc-ir-city-ledger-statements-table{color:var(--wa-color-text-quiet, #9ca3af)}.stmt-table__cell--money.sc-ir-city-ledger-statements-table{font-variant-numeric:tabular-nums}.balance-row__label.sc-ir-city-ledger-statements-table{display:flex;align-items:center}.balance-row.sc-ir-city-ledger-statements-table td.sc-ir-city-ledger-statements-table{background:var(--wa-color-brand-fill-quiet) !important;color:var(--wa-color-brand-on-quiet) !important;border-color:var(--wa-color-brand-border-quiet) !important;padding:0.75rem 1rem !important}.stmt-table__loading.sc-ir-city-ledger-statements-table{display:flex;align-items:center;justify-content:center;flex:1;padding:3rem 2rem}.stmt-table__date-prompt.sc-ir-city-ledger-statements-table{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;flex:1;padding:3rem 2rem;text-align:center}.stmt-table__date-prompt-icon.sc-ir-city-ledger-statements-table{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.stmt-table__date-prompt-title.sc-ir-city-ledger-statements-table{margin:0;font-size:0.9375rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}`;

const NUMERIC_COLS = new Set(['debit', 'credit', 'balance']);
const DATE_INPUT_FORMAT = 'YYYY-MM-DD';
const DATE_DISPLAY_FORMAT = 'MMM DD, YYYY';
const IrCityLedgerStatementsTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clFiscalDocumentPreview = createEvent(this, "clFiscalDocumentPreview");
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
    columnHelper = createColumnHelper();
    formatDate(date) {
        if (!date)
            return '';
        const m = hooks(date, [DATE_INPUT_FORMAT, hooks.ISO_8601], true);
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
            return h("span", { class: "stmt-table__cell--zero" });
        return h("span", { class: "stmt-table__cell--money" }, formatAmount(this.getSymbol(currencyId), value));
    }
    get runningBalances() {
        let balance = this.startingBalance;
        return this.rows.map(doc => {
            if (debitFdTypeCode.has(doc.FD_TYPE_CODE)) {
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
            case FdTypes.CreditReceipt:
                return -DEBIT;
            case FdTypes.Receipt:
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
                cell: info => (h("wa-button", { onClick: () => {
                        const row = info.row.original;
                        this.clFiscalDocumentPreview.emit({
                            fdTypeCode: row.FD_TYPE_CODE,
                            documentNumber: row.DOC_NUMBER,
                            agentId: this.agentId,
                            agentName: row.AGENCY_NAME,
                            fdId: row.FD_ID,
                            externalRef: row.EXTERNAL_REF,
                            fromDate: row.FD_TYPE_CODE === FdTypes.Proforma ? row.FROM_DATE : this.fromDate,
                            toDate: row.FD_TYPE_CODE === FdTypes.Proforma ? row.TO_DATE : this.toDate,
                            bookingNbr: row.FD_TYPE_CODE === FdTypes.Proforma ? row.BOOK_NBR : null,
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
                cell: info => (info.row.original.FD_TYPE_CODE === FdTypes.CreditReceipt ? '' : this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID)),
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
        return (h("tr", { class: "ir-table-row balance-row balance-row--start" }, h("td", null, this.formatDate(this.fromDate)), h("td", null), h("td", { class: "balance-row__label" }, h("wa-icon", { name: "scale-balanced", style: { marginRight: '0.375rem', fontSize: '0.875rem' } }), "Starting Balance"), h("td", { class: "cell--align-end" }), h("td", { class: "cell--align-end" }), h("td", { class: "cell--align-end" }, formatAmount(this.currencySymbol, bal))));
    }
    renderEndingBalanceRow() {
        const bal = this.runningBalances[this.runningBalances.length - 1];
        return (h("tr", { class: "ir-table-row balance-row balance-row--end" }, h("td", null, this.formatDate(this.toDate)), h("td", null), h("td", { class: "balance-row__label" }, h("wa-icon", { name: "scale-balanced", style: { marginRight: '0.375rem', fontSize: '0.875rem' } }), "Ending Balance"), h("td", { class: "cell--align-end" }), h("td", { class: "cell--align-end" }), h("td", { class: "cell--align-end" }, formatAmount(this.currencySymbol, bal))));
    }
    render() {
        if (!this.hasFetched) {
            return (h(Host, null, h("div", { class: "stmt-table__date-prompt" }, h("div", { class: "stmt-table__date-prompt-icon" }, h("wa-icon", { name: "calendar-days" })), h("p", { class: "stmt-table__date-prompt-title" }, "Select a date range and click \"Create Statement\""))));
        }
        if (this.isLoading) {
            return (h(Host, null, h("div", { class: "stmt-table__loading" }, h("ir-spinner", null))));
        }
        const table = useTable({
            data: this.rows,
            columns: this.columns,
            getCoreRowModel: getCoreRowModel(),
            getSortedRowModel: getSortedRowModel(),
        });
        const colCount = this.columns.length;
        return (h(Host, null, h("div", { class: "table--container" }, h("table", { class: "table data-table" }, h("thead", null, table.getHeaderGroups().map(headerGroup => (h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (h("th", { key: header.id, class: { 'cell--align-end': NUMERIC_COLS.has(header.column.id) } }, flexRender(header.column.columnDef.header, header.getContext())))))))), h("tbody", null, this.renderStartingBalanceRow(), table.getRowModel().rows.length === 0 ? (h("tr", null, h("td", { class: "empty-row", colSpan: colCount }, "No fiscal documents in this period."))) : (table.getRowModel().rows.map(row => (h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: {
                'stmt-table__cell': true,
                'cell--align-end': NUMERIC_COLS.has(cell.column.id),
            } }, flexRender(cell.column.columnDef.cell, cell.getContext())))))))), this.renderEndingBalanceRow())))));
    }
};
IrCityLedgerStatementsTable.style = irCityLedgerStatementsTableCss();

const irCityLedgerToolbarCss = () => `.sc-ir-city-ledger-toolbar-h{display:block}.toolbar.sc-ir-city-ledger-toolbar{width:100%;display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;padding:0.75rem 1rem;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-radius:0.625rem;background:var(--wa-color-surface-default, #fff)}.toolbar__stats.sc-ir-city-ledger-toolbar{display:flex;align-items:center;gap:1.25rem;flex-wrap:wrap}.toolbar__stats-placeholder.sc-ir-city-ledger-toolbar{flex:1}.toolbar__stat.sc-ir-city-ledger-toolbar{display:flex;flex-direction:column;gap:0.125rem}.toolbar__stat-label.sc-ir-city-ledger-toolbar{font-size:0.6875rem;font-weight:500;text-transform:uppercase;letter-spacing:0.05em;color:var(--wa-color-text-quiet, #6b7280);white-space:nowrap}.toolbar__stat-value.sc-ir-city-ledger-toolbar{font-size:1rem;font-weight:700;color:var(--wa-color-text-normal, #111827);font-variant-numeric:tabular-nums;white-space:nowrap}.toolbar__stat-value--negative.sc-ir-city-ledger-toolbar{color:var(--wa-color-danger-fill-loud, #dc2626)}.toolbar__stats-sep.sc-ir-city-ledger-toolbar{width:1px;height:2rem;background:var(--wa-color-neutral-border-quiet, #e5e7eb);flex-shrink:0}.toolbar__actions.sc-ir-city-ledger-toolbar{display:flex;align-items:center;gap:0.5rem;margin-inline-start:auto;flex-shrink:0}`;

const IrCityLedgerToolbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.createInvoice = createEvent(this, "createInvoice");
    }
    agentId = null;
    currencySymbol = '$';
    accountOverview = null;
    createInvoice;
    cityLedgerService = new CityLedgerService();
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
            CURRENCY_ID: calendar_data?.property?.currency?.id,
        });
    }
    render() {
        return (h(Host, { key: 'd1ed956dc79967af16eade190dbe2ac6957221c8' }, h("div", { key: '764ea88d36627f9a20adacc40dfdc2cd4e252ae3', class: "toolbar" }, this.accountOverview ? (h("div", { class: "toolbar__stats" }, h("div", { id: "netbalance", class: "toolbar__stat" }, h("span", { class: "toolbar__stat-label" }, "Net Balance"), h("span", { class: {
                'toolbar__stat-value': true,
                'toolbar__stat-value--negative': this.accountOverview.ACCOUNT_NET_BALANCE < 0,
            } }, this.accountOverview.ACCOUNT_NET_BALANCE < 0 ? '-' : '', formatAmount(this.currencySymbol, Math.abs(this.accountOverview.ACCOUNT_NET_BALANCE)))), h("div", { class: "toolbar__stats-sep" }), h("div", { id: "uninvoiced", class: "toolbar__stat" }, h("span", { class: "toolbar__stat-label" }, "Uninvoiced"), h("span", { class: "toolbar__stat-value" }, formatAmount(this.currencySymbol, this.accountOverview.TOTAL_UNINVOICED))), h("wa-tooltip", { for: "netbalance" }, "Ending balance as of ", hooks().format('MMM DD, YYYY'), " ", _formatTime(new Date().getHours().toString(), new Date().getMinutes().toString())), h("wa-tooltip", { for: "due-invoice" }), h("wa-tooltip", { for: "uninvoiced" }, "Total ", h("b", null, "unbilled"), " entries from bookings, manual charges, adjustments and discounts."), h("wa-tooltip", { for: "toolbar-held" }, "Total ", h("b", null, "held"), " entries to resolve with agent."))) : (h("div", { class: "toolbar__stats-placeholder" })), h("div", { key: 'bcf48d0bb74c0c396cf5ddaf1bc264b0fb8d56db', class: "toolbar__actions" }, h("ir-custom-button", { key: 'f80f130934fcd2c3bb81611dea0079cae6c5a2c7', variant: "brand", onClickHandler: () => this.createInvoice.emit() }, "Create Invoice")))));
    }
    static get watchers() { return {
        "agentId": [{
                "handleAgentIdChange": 0
            }]
    }; }
};
IrCityLedgerToolbar.style = irCityLedgerToolbarCss();

export { IrCityLedgerFiscalDocuments as ir_city_ledger_fiscal_documents, IrCityLedgerFiscalDocumentsFilters as ir_city_ledger_fiscal_documents_filters, IrCityLedgerFolio as ir_city_ledger_folio, IrCityLedgerFolioFilters as ir_city_ledger_folio_filters, IrCityLedgerFolioTable as ir_city_ledger_folio_table, IrCityLedgerStatements as ir_city_ledger_statements, IrCityLedgerStatementsFilter as ir_city_ledger_statements_filter, IrCityLedgerStatementsTable as ir_city_ledger_statements_table, IrCityLedgerToolbar as ir_city_ledger_toolbar };
