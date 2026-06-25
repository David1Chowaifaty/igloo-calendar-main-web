'use strict';

var index = require('./index-DYQrLNin.js');
var enums = require('./enums-BfYSWFRQ.js');
var moment = require('./moment-CdViwxPQ.js');
var index$1 = require('./index-CLqkDPTC.js');
var agents_service = require('./agents.service-DWaVZIds.js');
var booking_store = require('./booking.store-BCEuSVh0.js');
var irInterceptor_store = require('./ir-interceptor.store-DCFOyFp0.js');
var utils = require('./utils-DgT4kKsD.js');
var useTable = require('./useTable-BN32DOaV.js');
var calendarData = require('./calendar-data-R3j-WBLW.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./type-Dy9pVS4V.js');
require('./booking-D81t5lFq.js');
require('./locales.store-6IlEbCjL.js');
require('./index-C59pxKl1.js');

const irFiscalDocumentsFiltersCss = () => `.sc-ir-fiscal-documents-filters-h{display:block}.filters-bar.sc-ir-fiscal-documents-filters{display:flex;flex-direction:column;align-items:stretch;gap:0.75rem}.filters-bar__dates.sc-ir-fiscal-documents-filters{display:flex;align-items:center;width:100%}.filters-bar__date_picker.sc-ir-fiscal-documents-filters{width:100%}.filters-bar__search-group.sc-ir-fiscal-documents-filters{display:flex;flex-direction:column;gap:0.75rem;width:100%}.filters-bar__type-group.sc-ir-fiscal-documents-filters{display:flex;flex-wrap:wrap;align-items:center;gap:0.75rem;width:100%}.filters-bar__status-select.sc-ir-fiscal-documents-filters{flex:1 1 140px;min-width:0}.filters-bar__tax-switch.sc-ir-fiscal-documents-filters{flex:0 0 auto;white-space:nowrap}.filters-bar__proforma-switch.sc-ir-fiscal-documents-filters{flex:0 0 auto;white-space:nowrap}.filters-bar__folio-select.sc-ir-fiscal-documents-filters{width:100%}.filters-bar__search-actions.sc-ir-fiscal-documents-filters{display:flex;align-items:center;gap:0.5rem;width:100%}.filters-bar__search-input.sc-ir-fiscal-documents-filters{flex:1 1 auto;min-width:0}.filters-bar__search-submit.sc-ir-fiscal-documents-filters{flex:0 0 auto}.filters-bar__search-icon.sc-ir-fiscal-documents-filters{font-size:0.875rem;color:var(--wa-color-text-quiet, #9ca3af);flex-shrink:0}@media (min-width: 640px){.filters-bar__search-group.sc-ir-fiscal-documents-filters{flex-direction:row;flex-wrap:wrap;align-items:center}.filters-bar__type-group.sc-ir-fiscal-documents-filters{width:auto;flex:1 1 auto}.filters-bar__status-select.sc-ir-fiscal-documents-filters{flex:0 1 180px;min-width:160px}.filters-bar__folio-select.sc-ir-fiscal-documents-filters{flex:1 1 220px;width:auto}.filters-bar__search-actions.sc-ir-fiscal-documents-filters{flex:1 1 260px;width:auto}}@media (min-width: 1024px){.filters-bar__search-group.sc-ir-fiscal-documents-filters{flex-wrap:nowrap}.filters-bar__type-group.sc-ir-fiscal-documents-filters{flex:0 0 auto;flex-wrap:nowrap}.filters-bar__folio-select.sc-ir-fiscal-documents-filters{flex:0 1 220px}.filters-bar__search-actions.sc-ir-fiscal-documents-filters{flex:1 1 auto;max-width:320px}}@media (min-width: 1280px){.filters-bar.sc-ir-fiscal-documents-filters{flex-direction:row;flex-wrap:nowrap;align-items:center}.filters-bar__dates.sc-ir-fiscal-documents-filters{width:auto;flex:0 0 auto;min-width:280px}.filters-bar__search-group.sc-ir-fiscal-documents-filters{flex:1;width:auto}}`;

const today = moment.hooks();
/** Sentinel option in the agent autocomplete meaning "no specific agent" (the default). */
const ALL_AGENTS_VALUE = 'all';
const ALL_AGENTS_LABEL = 'All agents';
const DEFAULT_FILTERS = {
    fromDate: null,
    toDate: null,
    docNumber: '',
    taxableOnly: false,
    type: 'all',
    proformaOnly: false,
    folioType: 'all',
    agentId: null,
    guestId: null,
};
const IrFiscalDocumentsFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.applyFilters = index.createEvent(this, "applyFilters");
        this.filterChanged = index.createEvent(this, "filterChanged");
    }
    propertyId;
    loading;
    /** Initial filter values. Edits are kept locally and only sent on submit. */
    filters = { ...DEFAULT_FILTERS };
    /** Working copy of the filters — edited locally, emitted to the parent only on submit. */
    draft = { ...DEFAULT_FILTERS };
    agents = [];
    agentSearch = '';
    guests = [];
    applyFilters;
    filterChanged;
    agentsService = new agents_service.AgentsService();
    bookingService = new booking_store.BookingService();
    componentWillLoad() {
        this.draft = { ...DEFAULT_FILTERS, ...this.filters };
        if (this.propertyId) {
            this.fetchAgents();
        }
    }
    handleFiltersChange(newValue) {
        // Re-sync the local draft when the parent pushes a new filter set.
        this.draft = { ...DEFAULT_FILTERS, ...newValue };
    }
    handlePropertyIdChange(newValue, oldValue) {
        if (newValue && newValue !== oldValue) {
            this.fetchAgents();
        }
    }
    typeOptions = [
        { label: 'All Document Types', value: 'all' },
        { label: 'Invoices', value: enums.FdTypes.Invoice },
        { label: 'Receipts', value: enums.FdTypes.Receipt },
        { label: 'Credit Notes', value: enums.FdTypes.CreditNote },
        // { label: 'Debit Notes', value: FdTypes.DebitNote },
        { label: 'Credit Receipt', value: enums.FdTypes.CreditReceipt },
    ];
    folioOptions = [
        { label: 'All folios', value: 'all' },
        { label: 'Agent folio', value: 'agent' },
        { label: 'Guest folio', value: 'guest' },
    ];
    get filteredAgents() {
        const q = this.agentSearch.trim().toLowerCase();
        if (!q)
            return this.agents;
        return this.agents.filter(a => a.name.toLowerCase().includes(q));
    }
    get searchPlaceholder() {
        return this.draft.folioType === 'guest' ? 'Search by doc or booking number' : 'Search by doc number';
    }
    async fetchAgents() {
        try {
            const agents = await this.agentsService.getExposedAgents({ property_id: this.propertyId });
            this.agents = agents ?? [];
        }
        catch (error) {
            console.error('Failed to fetch agents', error);
        }
    }
    async fetchGuests(email) {
        try {
            if (!email) {
                return;
            }
            this.guests = await this.bookingService.fetchExposedGuest(email, this.propertyId);
        }
        catch (error) {
            console.error('Failed to fetch guests', error);
        }
    }
    /** Updates the local draft only — nothing is sent to the parent until submit. */
    updateDraft(patch) {
        this.draft = { ...this.draft, ...patch };
    }
    handleFolioTypeChange(folioType) {
        // Reset the folio-scoped selections whenever the folio scope changes.
        this.agentSearch = '';
        this.guests = [];
        this.updateDraft({ folioType, agentId: null, guestId: null });
    }
    handleGuestSelect(e) {
        const guest = this.guests?.find(g => g.id?.toString() === e.detail.item.value);
        if (!guest) {
            console.warn(`guest not found with id ${e.detail.item.value}`);
            return;
        }
        this.updateDraft({ guestId: guest.id });
    }
    render() {
        return (index.h("form", { key: '4ca57553343cbba10960e99e717977c457a294e4', onSubmit: e => {
                e.preventDefault();
                this.applyFilters.emit(this.draft);
            } }, index.h("div", { key: '09e275765ddcb1a001d2bad856fc19513fe52baf', class: "filters-bar" }, index.h("ir-validator", { key: '7dc7ea9530156788e5961c799965cf65309656f9', value: this.draft?.fromDate || this.draft?.toDate, schema: index$1.libExports.z.string().nonempty(), class: "filters-bar__dates" }, index.h("ir-date-range-filter", { key: '397765e2d5b9b353c90a4708fbe83a45dbba561a', maxDate: today.format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.draft.fromDate, toDate: this.draft.toDate, onDatesChanged: e => {
                this.updateDraft({ fromDate: e.detail.from, toDate: e.detail.to });
                this.filterChanged.emit({ ...this.draft, fromDate: e.detail.from, toDate: e.detail.to });
            } })), index.h("div", { key: '8362f38a014a7b144cd496d576ce95e08f1c0db5', class: "filters-bar__search-group" }, index.h("div", { key: '20e57f78978c504f5dbd76cc0e7c0790346d6642', class: "filters-bar__type-group" }, index.h("wa-select", { key: '80311e4615c91b3206cc5e11189ce6b5181715cc', class: "filters-bar__status-select", value: this.draft.type, defaultValue: this.draft.type, onchange: e => this.updateDraft({ type: e.target.value }), size: "s", placeholder: "Document Type" }, this.typeOptions.map(option => (index.h("wa-option", { value: option.value, key: option.value }, option.label)))), index.h("wa-select", { key: 'ab6fc33a7589fbe53f98dcd95fbd1cc748cc0157', class: "filters-bar__status-select", value: this.draft.folioType, defaultValue: this.draft.folioType, onchange: e => this.handleFolioTypeChange(e.target.value), size: "s", placeholder: "Folios" }, this.folioOptions.map(option => (index.h("wa-option", { value: option.value, key: option.value }, option.label)))), index.h("wa-switch", { key: 'dc5033182e3d6dde8fb966dbbba3a91fd762807a', class: "filters-bar__tax-switch", checked: this.draft.taxableOnly, onchange: e => {
                this.updateDraft({ taxableOnly: e.target.checked });
                this.filterChanged.emit({ ...this.draft, taxableOnly: e.target.checked });
            } }, "Taxes")), this.draft.folioType === 'agent' && (index.h("ir-autocomplete", { key: '6b344b11c7fd7e1f2b08ff84c4b214a6134ce277', class: "filters-bar__folio-select", size: "s", placeholder: "Select agent", value: this.draft.agentId ? (this.agents.find(a => a.id === this.draft.agentId)?.name ?? '') : ALL_AGENTS_LABEL, "onText-change": (e) => {
                this.agentSearch = e.detail ?? '';
            }, "onCombobox-change": (e) => {
                this.agentSearch = '';
                const value = e.detail;
                this.updateDraft({ agentId: value && value !== ALL_AGENTS_VALUE ? Number(value) : null });
            } }, index.h("ir-autocomplete-option", { key: '58f849bc6876e7d8eb82aeebdbfa8f355f0895b4', label: ALL_AGENTS_LABEL, value: ALL_AGENTS_VALUE }, ALL_AGENTS_LABEL), this.filteredAgents.map(agent => (index.h("ir-autocomplete-option", { key: agent.id, label: agent.name, value: String(agent.id) }, agent.name))))), this.draft.folioType === 'guest' && (index.h("ir-picker", { key: 'bbe864483cbda1e1f3e5c5b46b449b051ed7938d', class: "filters-bar__folio-select", size: "s", placeholder: "Search customer by email or name", withClear: true, mode: "select-async", debounce: 500, loading: irInterceptor_store.isRequestPending('/Fetch_Exposed_Guests'), "onText-change": event => this.fetchGuests(event.detail), "onCombobox-select": this.handleGuestSelect.bind(this), "onCombobox-clear": () => {
                this.updateDraft({ guestId: null });
                this.applyFilters.emit(this.draft);
            } }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (index.h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        }))), index.h("div", { key: 'b45a8f27578071bcacaa649d4a921eb1571ae5d3', class: "filters-bar__search-actions" }, index.h("ir-input", { key: '59c5c563374753e805f909b1668e453905bcd8b8', class: "filters-bar__search-input", placeholder: this.searchPlaceholder, value: this.draft.docNumber, "onText-change": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateDraft({ docNumber: e.detail });
            }, withClear: true, onInputCleared: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.applyFilters.emit({ ...this.draft, docNumber: '' });
            } }, index.h("wa-icon", { key: '39650e347a4ea44145eb2b0076c1618f54fe2efb', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), index.h("ir-custom-button", { key: '4cc2f787ee54442a03c70302352491cebe2683e0', loading: this.loading, class: "filters-bar__search-submit", variant: "neutral", appearance: "outlined", type: "submit" }, index.h("wa-icon", { key: 'dcfad109a5bc5fc601574e9225d5a22a5e728562', name: "magnifying-glass" })))))));
    }
    static get watchers() { return {
        "filters": [{
                "handleFiltersChange": 0
            }],
        "propertyId": [{
                "handlePropertyIdChange": 0
            }]
    }; }
};
IrFiscalDocumentsFilters.style = irFiscalDocumentsFiltersCss();

const irFiscalDocumentsTableCss = () => `.sc-ir-fiscal-documents-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-fiscal-documents-table{overflow-x:auto}.table--container.sc-ir-fiscal-documents-table,.data-table.sc-ir-fiscal-documents-table{height:100%}.ir-table-row.sc-ir-fiscal-documents-table td.sc-ir-fiscal-documents-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-fiscal-documents-table td.sc-ir-fiscal-documents-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-fiscal-documents-table tbody.sc-ir-fiscal-documents-table tr.sc-ir-fiscal-documents-table:last-child>td.sc-ir-fiscal-documents-table{border-bottom:0 !important}.table.sc-ir-fiscal-documents-table thead.sc-ir-fiscal-documents-table th.sc-ir-fiscal-documents-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-fiscal-documents-table thead.sc-ir-fiscal-documents-table th.sc-ir-fiscal-documents-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-fiscal-documents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-fiscal-documents-table,.ir-table-row.sc-ir-fiscal-documents-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-fiscal-documents-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-fiscal-documents-table thead.sc-ir-fiscal-documents-table th.sortable.sc-ir-fiscal-documents-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-fiscal-documents-table thead.sc-ir-fiscal-documents-table th.sortable.sc-ir-fiscal-documents-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-fiscal-documents-table thead.sc-ir-fiscal-documents-table th.sortable.sc-ir-fiscal-documents-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-fiscal-documents-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-fiscal-documents-table svg.sc-ir-fiscal-documents-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-fiscal-documents-table:hover td.sc-ir-fiscal-documents-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-fiscal-documents-table:hover td.sc-ir-fiscal-documents-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-fiscal-documents-table:active td.sc-ir-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-fiscal-documents-table td.sc-ir-fiscal-documents-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-fiscal-documents-table:hover td.sc-ir-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-fiscal-documents-table:active td.sc-ir-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-fiscal-documents-table .empty-row.sc-ir-fiscal-documents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-fiscal-documents-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-fiscal-documents-table{position:sticky !important;right:0;background-color:white}.sc-ir-fiscal-documents-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60dvh;max-width:1920px;background-color:var(--wa-color-surface-default);border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9)}.fiscal-table__heading.sc-ir-fiscal-documents-table:last-child{border-right:0}.fiscal-table__heading--numeric.sc-ir-fiscal-documents-table,.fiscal-table__cell--numeric.sc-ir-fiscal-documents-table{text-align:right !important}.ir-table-row.--is-draft.sc-ir-fiscal-documents-table>td.sc-ir-fiscal-documents-table{background-color:var(--wa-color-warning-fill-quiet) !important}.fd_ss.sc-ir-fiscal-documents-table{color:var(--wa-color-text-quiet);margin:0;padding:0;font-size:var(--wa-font-size-s)}.fiscal-table__status-tag.sc-ir-fiscal-documents-table{text-transform:capitalize}.fiscal-table__doc-number.sc-ir-fiscal-documents-table::part(base),.fiscal-table__doc-number.sc-ir-fiscal-documents-table [part~="base"]{padding:0.05rem 0.5rem;height:auto}.fiscal-table__cell--doc-number.sc-ir-fiscal-documents-table{--ir-cell-padding:0.5rem}.fiscal-table__heading--actions.sc-ir-fiscal-documents-table,.fiscal-table__cell--actions.sc-ir-fiscal-documents-table{text-align:center !important}.fiscal-table__action-trigger.sc-ir-fiscal-documents-table::part(base),.fiscal-table__action-trigger.sc-ir-fiscal-documents-table [part~="base"]{width:24px;height:24px}.fiscal-table__action-danger.sc-ir-fiscal-documents-table{color:var(--wa-color-danger-fill-loud, #dc2626)}.fiscal-table__cell--zero.sc-ir-fiscal-documents-table{color:var(--wa-color-text-quiet, #9ca3af)}.fiscal-table__empty.sc-ir-fiscal-documents-table{text-align:center;color:var(--wa-color-text-quiet);font-size:0.875rem;padding:1.25rem}.fiscal-table__date-prompt.sc-ir-fiscal-documents-table{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;flex:1;padding:3rem 2rem;text-align:center}.fiscal-table__date-prompt-icon.sc-ir-fiscal-documents-table{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.fiscal-table__date-prompt-title.sc-ir-fiscal-documents-table{margin:0;font-size:0.9375rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}`;

const PAGE_SIZES = [20, 50, 100];
const IrFiscalDocumentsTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clFiscalDocumentPreview = index.createEvent(this, "clFiscalDocumentPreview");
        this.fetchRequested = index.createEvent(this, "fetchRequested");
        this.requestPageChange = index.createEvent(this, "requestPageChange");
        this.requestPageSizeChange = index.createEvent(this, "requestPageSizeChange");
        this.openBookingDetails = index.createEvent(this, "openBookingDetails");
        this.guestDocumentPreview = index.createEvent(this, "guestDocumentPreview");
    }
    rows = [];
    currencies = [];
    isLoading = false;
    hasDates = false;
    ticket;
    propertyId;
    language = 'en';
    /** `_FD_TYPE` setup entries used to display the document type. */
    fdTypes = [];
    fromDate = null;
    toDate = null;
    hasFetched = false;
    /** Folio scope driving which identity columns are shown. */
    folioType = 'all';
    taxableOnly = false;
    /** Selected agent id (when a specific agent is chosen under the agent folio). */
    agentId = null;
    /** Selected guest id (when a specific guest is chosen under the guest folio). */
    guestId = null;
    // Pagination (server-side) — driven by the parent.
    currentPage = 1;
    pageSize = 20;
    totalRecords = 0;
    pageSizes = [20, 50, 100];
    clFiscalDocumentPreview;
    fetchRequested;
    requestPageChange;
    requestPageSizeChange;
    /** Emitted with the booking number when a booking link is clicked. */
    openBookingDetails;
    /** Emitted when a guest document link/action is clicked (caught by ir-guest-document-preview). */
    guestDocumentPreview;
    columnHelper = useTable.createColumnHelper();
    emitGuestPreview(row) {
        this.guestDocumentPreview.emit({
            documentNumber: row.DOC_NUMBER ?? '',
            fdTypeCode: row.FD_TYPE_CODE ?? '',
            bookingNumber: row.BOOKING_NUMBER ?? '',
        });
    }
    handlePageChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.requestPageChange.emit(event.detail);
    }
    handlePageSizeChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.requestPageSizeChange.emit(event.detail);
    }
    /** Agent column is hidden for the guest folio (those rows have no agent). */
    get showAgentName() {
        return this.folioType !== 'guest' && !this.agentId;
    }
    /** Guest column is hidden for the agent folio (those rows have no guest). */
    get showGuestName() {
        return this.folioType !== 'agent' && !this.guestId;
    }
    /** Maps each `_FD_TYPE` code to its localized display label. */
    get fdTypeLabels() {
        const map = {};
        for (const entry of this.fdTypes ?? []) {
            map[entry.CODE_NAME] = utils.getEntryValue({ entry, language: this.language });
        }
        return map;
    }
    emitPreview(row, autoPrint = false) {
        this.clFiscalDocumentPreview.emit({
            fdTypeCode: row.FD_TYPE_CODE ?? '',
            documentNumber: row.DOC_NUMBER ?? '',
            agentId: row.AGENT_ID ?? this.agentId ?? 0,
            agentName: row.AGENT_NAME ?? '',
            fdId: row.DOC_ID ?? undefined,
            autoPrint,
            externalRef: '',
            fromDate: this.fromDate,
            toDate: this.toDate,
            bookingNbr: row.BOOKING_NUMBER ?? null,
        });
    }
    get columns() {
        const base = [
            this.columnHelper.accessor('DOC_DATE', {
                header: 'Date',
                cell: info => moment.hooks(info.getValue(), 'YYYY-MM-DD').format('MMM DD, YYYY') ?? '',
            }),
            this.columnHelper.accessor('DOC_NUMBER', {
                header: 'Doc Number',
                cell: info => {
                    const row = info.row.original;
                    const value = info.getValue() ?? '';
                    if (!value)
                        return index.h("span", null);
                    // Agent documents open the city-ledger fiscal-document preview; guest
                    // documents open the invoice/credit-note PDF (ir-guest-billing flow).
                    const onClick = row.TARGET_TYPE === 'GUEST' ? () => this.emitGuestPreview(row) : () => this.emitPreview(row);
                    return (index.h("wa-button", { onClick: onClick, variant: "brand", appearance: "plain", class: "fiscal-table__doc-number" }, value));
                },
            }),
            this.columnHelper.accessor('DOC_TYPE', {
                id: 'type',
                header: 'Type',
                cell: info => {
                    const code = info.row.original.FD_TYPE_CODE;
                    // Display the localized `_FD_TYPE` label, falling back to the raw code.
                    const label = (code && this.fdTypeLabels[code]) || code || '';
                    return index.h("span", null, label);
                },
            }),
        ];
        // Identity / booking columns depend on the folio scope.
        const identityCols = [];
        if (this.showAgentName && this.rows.some(r => r.TARGET_TYPE === 'AGENT')) {
            identityCols.push(this.columnHelper.accessor('AGENT_NAME', {
                id: 'agentName',
                header: 'Agent',
                cell: info => index.h("span", null, info.getValue() ?? ''),
            }));
        }
        if (this.showGuestName && this.rows.some(r => r.TARGET_TYPE === 'GUEST')) {
            identityCols.push(this.columnHelper.accessor('GUEST_NAME', {
                id: 'guestName',
                header: 'Guest',
                cell: info => index.h("span", null, info.getValue() ?? ''),
            }));
        }
        identityCols.push(this.columnHelper.accessor('BOOKING_NUMBER', {
            id: 'bookingNumber',
            header: 'Booking #',
            cell: info => {
                const bookingNbr = info.getValue();
                if (!bookingNbr)
                    return index.h("span", null);
                return (index.h("wa-button", { onClick: () => this.openBookingDetails.emit(String(bookingNbr)), variant: "brand", appearance: "plain", class: "fiscal-table__doc-number" }, bookingNbr));
            },
        }));
        if (!this.taxableOnly) {
            identityCols.push(this.columnHelper.accessor('CREDIT', {
                header: 'Credit',
                cell: info => index.h("span", null, this.renderMoney(info.getValue())),
            }));
            identityCols.push(this.columnHelper.accessor('DEBIT', {
                header: 'DEBIT',
                cell: info => index.h("span", null, this.renderMoney(info.getValue())),
            }));
        }
        else {
            identityCols.push(this.columnHelper.accessor('NET_AMOUNT', {
                header: 'Net amount',
                cell: info => index.h("span", null, this.renderMoney(info.getValue())),
            }));
            identityCols.push(this.columnHelper.accessor('TAX_AMOUNT', {
                header: 'Tax amount',
                cell: info => index.h("span", null, this.renderMoney(info.getValue())),
            }));
            identityCols.push(this.columnHelper.accessor('TOTAL_AMOUNT', {
                header: 'Total',
                cell: info => this.renderMoney(info.getValue()),
            }));
        }
        return [
            ...base,
            ...identityCols,
            this.columnHelper.display({
                id: 'actions',
                header: 'Actions',
                cell: info => {
                    const row = info.row.original;
                    // Guest documents open the invoice/credit-note PDF (ir-guest-billing flow).
                    if (row.TARGET_TYPE === 'GUEST') {
                        return (index.h("wa-dropdown", { "onwa-hide": e => {
                                e.stopImmediatePropagation();
                                e.stopPropagation();
                            }, "onwa-select": (e) => {
                                if (e.detail.item.value === 'view')
                                    this.emitGuestPreview(row);
                            } }, index.h("wa-button", { slot: "trigger", size: "s", variant: "neutral", appearance: "plain", class: "fiscal-table__action-trigger" }, index.h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1.2rem' } })), index.h("wa-dropdown-item", { value: "view" }, "Open PDF")));
                    }
                    // Agent documents have the city-ledger preview/print flow.
                    return (index.h("wa-dropdown", { "onwa-hide": e => {
                            e.stopImmediatePropagation();
                            e.stopPropagation();
                        }, "onwa-select": (e) => {
                            if (e.detail.item.value === 'print')
                                this.emitPreview(row, true);
                            else
                                this.emitPreview(row);
                        } }, index.h("wa-button", { slot: "trigger", size: "s", variant: "neutral", appearance: "plain", class: "fiscal-table__action-trigger" }, index.h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1.2rem' } })), index.h("wa-dropdown-item", { value: "view" }, "View document"), index.h("wa-dropdown-item", { value: "print" }, "Print")));
                },
                enableSorting: false,
            }),
        ];
    }
    renderMoney(value) {
        if (!value)
            return index.h("span", { class: "fiscal-table__cell--zero" });
        return index.h("span", null, utils.formatAmount(calendarData.calendar_data?.property?.currency?.symbol, value));
    }
    render() {
        if (!this.hasFetched) {
            const hasDate = !!(this.fromDate || this.toDate);
            return (index.h(index.Host, null, index.h("div", { class: "fiscal-table__date-prompt" }, index.h("div", { class: "fiscal-table__date-prompt-icon" }, index.h("wa-icon", { name: "calendar-days" })), index.h("p", { class: "fiscal-table__date-prompt-title" }, "Select a date range to get started"), hasDate && (index.h("wa-animation", { iterations: 1, play: true, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, index.h("ir-custom-button", { size: "s", variant: "brand", onClickHandler: () => this.fetchRequested.emit() }, index.h("wa-icon", { slot: "start", name: "magnifying-glass" }), "Load Documents"))))));
        }
        const columns = this.columns;
        const table = useTable.useTable({
            data: this.rows,
            columns,
            getCoreRowModel: useTable.getCoreRowModel(),
            getSortedRowModel: useTable.getSortedRowModel(),
        });
        const numericColumnIds = ['TOTAL_AMOUNT', 'CREDIT', 'DEBIT', 'NET_AMOUNT', 'TAX_AMOUNT'];
        const totalPages = this.pageSize > 0 ? Math.ceil(this.totalRecords / this.pageSize) : 0;
        const showing = {
            from: this.totalRecords === 0 ? 0 : (this.currentPage - 1) * this.pageSize + 1,
            to: Math.min(this.currentPage * this.pageSize, this.totalRecords),
        };
        return (index.h(index.Host, null, index.h("div", { class: "table--container" }, index.h("table", { class: "table data-table" }, index.h("thead", null, table.getHeaderGroups().map(headerGroup => (index.h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (index.h("th", { key: header.id, class: {
                'fiscal-table__heading--numeric': numericColumnIds.includes(header.column.id),
                'fiscal-table__heading--actions': header.column.id === 'actions',
            } }, useTable.flexRender(header.column.columnDef.header, header.getContext())))))))), index.h("tbody", null, table.getRowModel().rows.map(row => (index.h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (index.h("td", { key: cell.id, class: {
                'fiscal-table__cell': true,
                'fiscal-table__cell--numeric': numericColumnIds.includes(cell.column.id),
                'fiscal-table__cell--actions': cell.column.id === 'actions',
                'fiscal-table__cell--doc-number': cell.column.id === 'DOC_NUMBER' || cell.column.id === 'bookingNumber',
            } }, useTable.flexRender(cell.column.columnDef.cell, cell.getContext()))))))), table.getRowModel().rows.length === 0 && (index.h("tr", null, index.h("td", { class: "empty-row", colSpan: columns.length }, this.isLoading ? index.h("ir-spinner", null) : 'No fiscal documents match the current filters.')))))), this.totalRecords > 0 && (index.h("ir-pagination", { class: "data-table--pagination", showing: showing, total: this.totalRecords, pages: totalPages, pageSize: this.pageSize, currentPage: this.currentPage, allowPageSizeChange: true, pageSizes: PAGE_SIZES, recordLabel: "documents", onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) }))));
    }
};
IrFiscalDocumentsTable.style = irFiscalDocumentsTableCss();

exports.ir_fiscal_documents_filters = IrFiscalDocumentsFilters;
exports.ir_fiscal_documents_table = IrFiscalDocumentsTable;
