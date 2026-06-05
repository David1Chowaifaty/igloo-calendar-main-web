import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { r as realtimeService } from './realtime.service.js';
import { m as mapClTxToFolioRow } from './types3.js';
import { C as CityLedgerService } from './index5.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$1M } from './igl-application-info2.js';
import { d as defineCustomElement$1L } from './igl-rate-plan2.js';
import { d as defineCustomElement$1K } from './igl-room-type2.js';
import { d as defineCustomElement$1J } from './ir-agent-billing2.js';
import { d as defineCustomElement$1I } from './ir-air-date-picker2.js';
import { d as defineCustomElement$1H } from './ir-applicable-policies2.js';
import { d as defineCustomElement$1G } from './ir-arrival-time-dialog2.js';
import { d as defineCustomElement$1F } from './ir-assignment-toggle-dialog2.js';
import { d as defineCustomElement$1E } from './ir-billing2.js';
import { d as defineCustomElement$1D } from './ir-billing-drawer2.js';
import { d as defineCustomElement$1C } from './ir-booking-assign-items2.js';
import { d as defineCustomElement$1B } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$1A } from './ir-booking-city-ledger2.js';
import { d as defineCustomElement$1z } from './ir-booking-company-dialog2.js';
import { d as defineCustomElement$1y } from './ir-booking-company-form2.js';
import { d as defineCustomElement$1x } from './ir-booking-details2.js';
import { d as defineCustomElement$1w } from './ir-booking-details-drawer2.js';
import { d as defineCustomElement$1v } from './ir-booking-editor2.js';
import { d as defineCustomElement$1u } from './ir-booking-editor-drawer2.js';
import { d as defineCustomElement$1t } from './ir-booking-editor-form2.js';
import { d as defineCustomElement$1s } from './ir-booking-editor-guest-form2.js';
import { d as defineCustomElement$1r } from './ir-booking-editor-header2.js';
import { d as defineCustomElement$1q } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$1p } from './ir-booking-guarantee2.js';
import { d as defineCustomElement$1o } from './ir-booking-header2.js';
import { d as defineCustomElement$1n } from './ir-booking-pricing-drawer2.js';
import { d as defineCustomElement$1m } from './ir-booking-pricing-form2.js';
import { d as defineCustomElement$1l } from './ir-booking-rooms2.js';
import { d as defineCustomElement$1k } from './ir-booking-source-editor-dialog2.js';
import { d as defineCustomElement$1j } from './ir-booking-source-editor-form2.js';
import { d as defineCustomElement$1i } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$1h } from './ir-button2.js';
import { d as defineCustomElement$1g } from './ir-checkout-dialog2.js';
import { d as defineCustomElement$1f } from './ir-city-ledger-fiscal-documents-table2.js';
import { d as defineCustomElement$1e } from './ir-city-ledger-folio-filters2.js';
import { d as defineCustomElement$1d } from './ir-city-ledger-folio-table2.js';
import { d as defineCustomElement$1c } from './ir-city-ledger-transaction-drawer2.js';
import { d as defineCustomElement$1b } from './ir-city-ledger-transaction-form2.js';
import { d as defineCustomElement$1a } from './ir-cl-adjustment-fields2.js';
import { d as defineCustomElement$19 } from './ir-cl-credit-note-fields2.js';
import { d as defineCustomElement$18 } from './ir-cl-debit-note-fields2.js';
import { d as defineCustomElement$17 } from './ir-cl-fiscal-document-preview2.js';
import { d as defineCustomElement$16 } from './ir-cl-invoice-dialog2.js';
import { d as defineCustomElement$15 } from './ir-cl-invoice-form2.js';
import { d as defineCustomElement$14 } from './ir-cl-invoice-select2.js';
import { d as defineCustomElement$13 } from './ir-cl-opening-balance-fields2.js';
import { d as defineCustomElement$12 } from './ir-cl-payment-fields2.js';
import { d as defineCustomElement$11 } from './ir-cl-status-tag2.js';
import { d as defineCustomElement$10 } from './ir-country-picker2.js';
import { d as defineCustomElement$$ } from './ir-custom-button2.js';
import { d as defineCustomElement$_ } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$Z } from './ir-custom-date-range2.js';
import { d as defineCustomElement$Y } from './ir-date-range2.js';
import { d as defineCustomElement$X } from './ir-date-range-filter2.js';
import { d as defineCustomElement$W } from './ir-date-select2.js';
import { d as defineCustomElement$V } from './ir-date-view2.js';
import { d as defineCustomElement$U } from './ir-dialog2.js';
import { d as defineCustomElement$T } from './ir-drawer2.js';
import { d as defineCustomElement$S } from './ir-empty-state2.js';
import { d as defineCustomElement$R } from './ir-events-log2.js';
import { d as defineCustomElement$Q } from './ir-extra-service2.js';
import { d as defineCustomElement$P } from './ir-extra-service-config2.js';
import { d as defineCustomElement$O } from './ir-extra-service-config-form2.js';
import { d as defineCustomElement$N } from './ir-extra-services2.js';
import { d as defineCustomElement$M } from './ir-fd-confirm-dialog2.js';
import { d as defineCustomElement$L } from './ir-guest-billing2.js';
import { d as defineCustomElement$K } from './ir-guest-info-drawer2.js';
import { d as defineCustomElement$J } from './ir-guest-info-form2.js';
import { d as defineCustomElement$I } from './ir-hold-transaction-dialog2.js';
import { d as defineCustomElement$H } from './ir-icons2.js';
import { d as defineCustomElement$G } from './ir-input2.js';
import { d as defineCustomElement$F } from './ir-input-cell2.js';
import { d as defineCustomElement$E } from './ir-input-text2.js';
import { d as defineCustomElement$D } from './ir-interceptor2.js';
import { d as defineCustomElement$C } from './ir-invoice2.js';
import { d as defineCustomElement$B } from './ir-invoice-form2.js';
import { d as defineCustomElement$A } from './ir-label2.js';
import { d as defineCustomElement$z } from './ir-mobile-input2.js';
import { d as defineCustomElement$y } from './ir-otp2.js';
import { d as defineCustomElement$x } from './ir-otp-modal2.js';
import { d as defineCustomElement$w } from './ir-pagination2.js';
import { d as defineCustomElement$v } from './ir-payment-details2.js';
import { d as defineCustomElement$u } from './ir-payment-folio2.js';
import { d as defineCustomElement$t } from './ir-payment-folio-form2.js';
import { d as defineCustomElement$s } from './ir-payment-item2.js';
import { d as defineCustomElement$r } from './ir-payment-summary2.js';
import { d as defineCustomElement$q } from './ir-payments-folio2.js';
import { d as defineCustomElement$p } from './ir-pdf-viewer2.js';
import { d as defineCustomElement$o } from './ir-picker2.js';
import { d as defineCustomElement$n } from './ir-picker-item2.js';
import { d as defineCustomElement$m } from './ir-pickup2.js';
import { d as defineCustomElement$l } from './ir-pickup-form2.js';
import { d as defineCustomElement$k } from './ir-pickup-view2.js';
import { d as defineCustomElement$j } from './ir-pms-logs2.js';
import { d as defineCustomElement$i } from './ir-preview-screen-dialog2.js';
import { d as defineCustomElement$h } from './ir-print-room2.js';
import { d as defineCustomElement$g } from './ir-printing-extra-service2.js';
import { d as defineCustomElement$f } from './ir-printing-label2.js';
import { d as defineCustomElement$e } from './ir-printing-pickup2.js';
import { d as defineCustomElement$d } from './ir-proforma-invoice-preview2.js';
import { d as defineCustomElement$c } from './ir-reservation-information2.js';
import { d as defineCustomElement$b } from './ir-room2.js';
import { d as defineCustomElement$a } from './ir-room-guests2.js';
import { d as defineCustomElement$9 } from './ir-room-guests-form2.js';
import { d as defineCustomElement$8 } from './ir-service-assignee-select2.js';
import { d as defineCustomElement$7 } from './ir-spinner2.js';
import { d as defineCustomElement$6 } from './ir-toast2.js';
import { d as defineCustomElement$5 } from './ir-toast-alert2.js';
import { d as defineCustomElement$4 } from './ir-toast-provider2.js';
import { d as defineCustomElement$3 } from './ir-unit-tag2.js';
import { d as defineCustomElement$2 } from './ir-validator2.js';
import { d as defineCustomElement$1 } from './ota-label2.js';
import { v as v4 } from './v4.js';

const irCityLedgerFolioCss = ".sc-ir-city-ledger-folio-h{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem);max-width:1920px}";
const IrCityLedgerFolioStyle0 = irCityLedgerFolioCss;

const IrCityLedgerFolio = /*@__PURE__*/ proxyCustomElement(class IrCityLedgerFolio extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.folioSummaryUpdate = createEvent(this, "folioSummaryUpdate", 7);
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
        return (h(Host, { key: 'b07a21d74ab5e13c039b8991d3f148ebe1ecedd3' }, h("ir-city-ledger-folio-filters", { key: '98d8de53deee34a97fe7d2d1ef6951bc2e1c8e65', onFiltersChange: e => (this.filters = e.detail), onApplyFilters: async (e) => {
                this.filters = e.detail;
                this.pageIndex = 0;
                await this.fetchFolioData();
            }, onAddEntry: () => {
                this.editingTransaction = null;
                this.isTransactionOpen = true;
            }, isExporting: this.isFetchingExcel, onExportFolio: () => {
                this.fetchCl(true);
            } }), h("ir-city-ledger-folio-table", { key: 'fa6d03a436bc1c0bc93e3a901ac86e0bfdbe5e00', agentId: this.agent?.id, propertyId: this.propertyId, ticket: this.ticket, language: this.language, hideBalanceInfo: !!(this.filters.search || (this.filters.status && this.filters.status !== 'all')), data: this.data, isLoading: this.isLoading, hasFetched: this.hasFetched, startingBalance: this.startingBalance, closingBalance: this.closingBalance, totalCount: this.totalCount, pageIndex: this.pageIndex, pageSize: this.pageSize, fromDate: this.filters?.fromDate, toDate: this.filters?.toDate, currencySymbol: calendar_data.property?.currency?.symbol, currencies: this.currencies, onPageChange: async (e) => {
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
            } }), h("ir-dialog", { key: 'aa39a0ecf08f66a6ac7b56bd211f4330432badcb', label: "Delete Entry", open: !!this.deleteTarget, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!this.isDeleting)
                    this.deleteTarget = null;
            } }, h("p", { key: '853a61d42c25a62567c0ea837032663ebae6cf6e' }, "Are you sure you want to delete this entry? This action cannot be undone."), h("div", { key: '5f37bcfe5ce1493ca37c1feadea476aec23fdce3', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'db6ef2e51fdffce81d9219cbdcd347166130f231', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => (this.deleteTarget = null) }, "Cancel"), h("ir-custom-button", { key: '44a788fce68699cb601418a26a5d936ac2f95d08', size: "medium", variant: "danger", loading: this.isDeleting, onClickHandler: () => this.handleDelete() }, "Delete"))), h("ir-city-ledger-transaction-drawer", { key: 'dc41aaf5ef49e7c8dfaaedbb7a34d9218fd9f6df', open: this.isTransactionOpen, serviceCategoryOptions: this.serviceCategoryOptions, agent: this.agent, transaction: this.editingTransaction, drawerLabel: this.editingTransaction ? 'Edit Entry' : 'New Entry', onTransactionSaved: () => {
                this.fetchFolioData();
            }, onCloseDrawer: () => {
                this.isTransactionOpen = false;
                this.editingTransaction = null;
            } })));
    }
    static get watchers() { return {
        "agentId": ["handleAgentIdChange"]
    }; }
    static get style() { return IrCityLedgerFolioStyle0; }
}, [2, "ir-city-ledger-folio", {
        "agent": [16],
        "propertyId": [2, "property-id"],
        "ticket": [1],
        "language": [1],
        "serviceCategoryOptions": [16],
        "currencies": [16],
        "isTransactionOpen": [32],
        "editingTransaction": [32],
        "deleteTarget": [32],
        "isDeleting": [32],
        "filters": [32],
        "data": [32],
        "isLoading": [32],
        "hasFetched": [32],
        "startingBalance": [32],
        "closingBalance": [32],
        "totalCount": [32],
        "pageIndex": [32],
        "pageSize": [32],
        "isFetchingExcel": [32]
    }, undefined, {
        "agentId": ["handleAgentIdChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-city-ledger-folio", "igl-application-info", "igl-rate-plan", "igl-room-type", "ir-agent-billing", "ir-air-date-picker", "ir-applicable-policies", "ir-arrival-time-dialog", "ir-assignment-toggle-dialog", "ir-billing", "ir-billing-drawer", "ir-booking-assign-items", "ir-booking-billing-recipient", "ir-booking-city-ledger", "ir-booking-company-dialog", "ir-booking-company-form", "ir-booking-details", "ir-booking-details-drawer", "ir-booking-editor", "ir-booking-editor-drawer", "ir-booking-editor-form", "ir-booking-editor-guest-form", "ir-booking-editor-header", "ir-booking-extra-note", "ir-booking-guarantee", "ir-booking-header", "ir-booking-pricing-drawer", "ir-booking-pricing-form", "ir-booking-rooms", "ir-booking-source-editor-dialog", "ir-booking-source-editor-form", "ir-booking-status-tag", "ir-button", "ir-checkout-dialog", "ir-city-ledger-fiscal-documents-table", "ir-city-ledger-folio-filters", "ir-city-ledger-folio-table", "ir-city-ledger-transaction-drawer", "ir-city-ledger-transaction-form", "ir-cl-adjustment-fields", "ir-cl-credit-note-fields", "ir-cl-debit-note-fields", "ir-cl-fiscal-document-preview", "ir-cl-invoice-dialog", "ir-cl-invoice-form", "ir-cl-invoice-select", "ir-cl-opening-balance-fields", "ir-cl-payment-fields", "ir-cl-status-tag", "ir-country-picker", "ir-custom-button", "ir-custom-date-picker", "ir-custom-date-range", "ir-date-range", "ir-date-range-filter", "ir-date-select", "ir-date-view", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-events-log", "ir-extra-service", "ir-extra-service-config", "ir-extra-service-config-form", "ir-extra-services", "ir-fd-confirm-dialog", "ir-guest-billing", "ir-guest-info-drawer", "ir-guest-info-form", "ir-hold-transaction-dialog", "ir-icons", "ir-input", "ir-input-cell", "ir-input-text", "ir-interceptor", "ir-invoice", "ir-invoice-form", "ir-label", "ir-mobile-input", "ir-otp", "ir-otp-modal", "ir-pagination", "ir-payment-details", "ir-payment-folio", "ir-payment-folio-form", "ir-payment-item", "ir-payment-summary", "ir-payments-folio", "ir-pdf-viewer", "ir-picker", "ir-picker-item", "ir-pickup", "ir-pickup-form", "ir-pickup-view", "ir-pms-logs", "ir-preview-screen-dialog", "ir-print-room", "ir-printing-extra-service", "ir-printing-label", "ir-printing-pickup", "ir-proforma-invoice-preview", "ir-reservation-information", "ir-room", "ir-room-guests", "ir-room-guests-form", "ir-service-assignee-select", "ir-spinner", "ir-toast", "ir-toast-alert", "ir-toast-provider", "ir-unit-tag", "ir-validator", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-city-ledger-folio":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCityLedgerFolio);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$1M();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$1L();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$1K();
            }
            break;
        case "ir-agent-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$1J();
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$1I();
            }
            break;
        case "ir-applicable-policies":
            if (!customElements.get(tagName)) {
                defineCustomElement$1H();
            }
            break;
        case "ir-arrival-time-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1G();
            }
            break;
        case "ir-assignment-toggle-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1F();
            }
            break;
        case "ir-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$1E();
            }
            break;
        case "ir-billing-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1D();
            }
            break;
        case "ir-booking-assign-items":
            if (!customElements.get(tagName)) {
                defineCustomElement$1C();
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$1B();
            }
            break;
        case "ir-booking-city-ledger":
            if (!customElements.get(tagName)) {
                defineCustomElement$1A();
            }
            break;
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1z();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1y();
            }
            break;
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$1x();
            }
            break;
        case "ir-booking-details-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1w();
            }
            break;
        case "ir-booking-editor":
            if (!customElements.get(tagName)) {
                defineCustomElement$1v();
            }
            break;
        case "ir-booking-editor-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1u();
            }
            break;
        case "ir-booking-editor-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1t();
            }
            break;
        case "ir-booking-editor-guest-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1s();
            }
            break;
        case "ir-booking-editor-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$1r();
            }
            break;
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$1q();
            }
            break;
        case "ir-booking-guarantee":
            if (!customElements.get(tagName)) {
                defineCustomElement$1p();
            }
            break;
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$1o();
            }
            break;
        case "ir-booking-pricing-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1n();
            }
            break;
        case "ir-booking-pricing-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1m();
            }
            break;
        case "ir-booking-rooms":
            if (!customElements.get(tagName)) {
                defineCustomElement$1l();
            }
            break;
        case "ir-booking-source-editor-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1k();
            }
            break;
        case "ir-booking-source-editor-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1j();
            }
            break;
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$1i();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$1h();
            }
            break;
        case "ir-checkout-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1g();
            }
            break;
        case "ir-city-ledger-fiscal-documents-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$1f();
            }
            break;
        case "ir-city-ledger-folio-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$1e();
            }
            break;
        case "ir-city-ledger-folio-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$1d();
            }
            break;
        case "ir-city-ledger-transaction-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1c();
            }
            break;
        case "ir-city-ledger-transaction-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1b();
            }
            break;
        case "ir-cl-adjustment-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$1a();
            }
            break;
        case "ir-cl-credit-note-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$19();
            }
            break;
        case "ir-cl-debit-note-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$18();
            }
            break;
        case "ir-cl-fiscal-document-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$17();
            }
            break;
        case "ir-cl-invoice-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$16();
            }
            break;
        case "ir-cl-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$15();
            }
            break;
        case "ir-cl-invoice-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$14();
            }
            break;
        case "ir-cl-opening-balance-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$13();
            }
            break;
        case "ir-cl-payment-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$12();
            }
            break;
        case "ir-cl-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$11();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$10();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$$();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$_();
            }
            break;
        case "ir-custom-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$Z();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$Y();
            }
            break;
        case "ir-date-range-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$X();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$W();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$V();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$U();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$T();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$S();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$R();
            }
            break;
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$Q();
            }
            break;
        case "ir-extra-service-config":
            if (!customElements.get(tagName)) {
                defineCustomElement$P();
            }
            break;
        case "ir-extra-service-config-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$O();
            }
            break;
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                defineCustomElement$N();
            }
            break;
        case "ir-fd-confirm-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$M();
            }
            break;
        case "ir-guest-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$L();
            }
            break;
        case "ir-guest-info-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$K();
            }
            break;
        case "ir-guest-info-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$J();
            }
            break;
        case "ir-hold-transaction-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$I();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$H();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$G();
            }
            break;
        case "ir-input-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$F();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-payment-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-payment-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-payment-folio-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-payment-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-payments-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-pdf-viewer":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-pickup-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-pickup-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-preview-screen-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-print-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-printing-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-printing-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-printing-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-proforma-invoice-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-room-guests":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-room-guests-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-service-assignee-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-toast-provider":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-unit-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ota-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrCityLedgerFolio as I, defineCustomElement as d };

//# sourceMappingURL=ir-city-ledger-folio2.js.map