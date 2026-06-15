'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const debounce = require('./debounce-1b63fe86.js');
const index$1 = require('./index-02ae9ba0.js');
const moment = require('./moment-1780b03a.js');
const index$2 = require('./index-8bb117a0.js');
const agents_service = require('./agents.service-dcea1c92.js');
const booking_store = require('./booking.store-bf99f431.js');
const irInterceptor_store = require('./ir-interceptor.store-d60f5a34.js');
const utils = require('./utils-410526d1.js');
const useTable = require('./useTable-206847ef.js');
require('./axios-6e678d52.js');
require('./type-53035218.js');
require('./locales.store-32782582.js');
require('./index-fbf1fe1d.js');
require('./calendar-data-70bc3b4b.js');

const irFiscalDocumentsFiltersCss = ".sc-ir-fiscal-documents-filters-h{display:block}.filters-bar.sc-ir-fiscal-documents-filters{display:flex;flex-direction:column;align-items:stretch;gap:0.75rem}.filters-bar__dates.sc-ir-fiscal-documents-filters{display:flex;align-items:center;width:100%}.filters-bar__date_picker.sc-ir-fiscal-documents-filters{width:100%}.filters-bar__search-group.sc-ir-fiscal-documents-filters{display:flex;flex-direction:column;gap:0.75rem;width:100%}.filters-bar__type-group.sc-ir-fiscal-documents-filters{display:flex;flex-wrap:wrap;align-items:center;gap:0.75rem;width:100%}.filters-bar__status-select.sc-ir-fiscal-documents-filters{flex:1 1 140px;min-width:0}.filters-bar__tax-switch.sc-ir-fiscal-documents-filters{flex:0 0 auto;white-space:nowrap}.filters-bar__proforma-switch.sc-ir-fiscal-documents-filters{flex:0 0 auto;white-space:nowrap}.filters-bar__folio-select.sc-ir-fiscal-documents-filters{width:100%}.filters-bar__search-actions.sc-ir-fiscal-documents-filters{display:flex;align-items:center;gap:0.5rem;width:100%}.filters-bar__search-input.sc-ir-fiscal-documents-filters{flex:1 1 auto;min-width:0}.filters-bar__search-submit.sc-ir-fiscal-documents-filters{flex:0 0 auto}.filters-bar__search-icon.sc-ir-fiscal-documents-filters{font-size:0.875rem;color:var(--wa-color-text-quiet, #9ca3af);flex-shrink:0}@media (min-width: 640px){.filters-bar__search-group.sc-ir-fiscal-documents-filters{flex-direction:row;flex-wrap:wrap;align-items:center}.filters-bar__type-group.sc-ir-fiscal-documents-filters{width:auto;flex:1 1 auto}.filters-bar__status-select.sc-ir-fiscal-documents-filters{flex:0 1 180px;min-width:160px}.filters-bar__folio-select.sc-ir-fiscal-documents-filters{flex:1 1 220px;width:auto}.filters-bar__search-actions.sc-ir-fiscal-documents-filters{flex:1 1 260px;width:auto}}@media (min-width: 1024px){.filters-bar__search-group.sc-ir-fiscal-documents-filters{flex-wrap:nowrap}.filters-bar__type-group.sc-ir-fiscal-documents-filters{flex:0 0 auto;flex-wrap:nowrap}.filters-bar__folio-select.sc-ir-fiscal-documents-filters{flex:0 1 220px}.filters-bar__search-actions.sc-ir-fiscal-documents-filters{flex:1 1 auto;max-width:320px}}@media (min-width: 1280px){.filters-bar.sc-ir-fiscal-documents-filters{flex-direction:row;flex-wrap:nowrap;align-items:center}.filters-bar__dates.sc-ir-fiscal-documents-filters{width:auto;flex:0 0 auto;min-width:280px}.filters-bar__search-group.sc-ir-fiscal-documents-filters{flex:1;width:auto}}";
const IrFiscalDocumentsFiltersStyle0 = irFiscalDocumentsFiltersCss;

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
const today = moment.hooks();
/** Sentinel option in the agent autocomplete meaning "no specific agent" (the default). */
const ALL_AGENTS_VALUE = 'all';
const ALL_AGENTS_LABEL = 'All agents';
const IrFiscalDocumentsFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.filtersChange = index.createEvent(this, "filtersChange", 7);
        this.applyFilters = index.createEvent(this, "applyFilters", 7);
    }
    propertyId;
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
    docNumber = '';
    agents = [];
    agentSearch = '';
    guests = [];
    filtersChange;
    applyFilters;
    agentsService = new agents_service.AgentsService();
    bookingService = new booking_store.BookingService();
    componentWillLoad() {
        this.docNumber = this.filters.docNumber ?? '';
        if (this.propertyId) {
            this.fetchAgents();
        }
    }
    handlePropertyIdChange(newValue, oldValue) {
        if (newValue && newValue !== oldValue) {
            this.fetchAgents();
        }
    }
    typeOptions = [
        { label: 'All Document Types', value: 'all' },
        { label: 'Invoices', value: index$1.FdTypes.Invoice },
        { label: 'Receipts', value: index$1.FdTypes.Receipt },
        { label: 'Credit Notes', value: index$1.FdTypes.CreditNote },
        // { label: 'Debit Notes', value: FdTypes.DebitNote },
        { label: 'Credit Receipt', value: index$1.FdTypes.CreditReceipt },
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
        return this.filters.folioType === 'guest' ? 'Search by doc or booking number' : 'Search by doc number';
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
    updateFilters(patch) {
        this.filtersChange.emit({ ...this.filters, ...patch });
    }
    handleFolioTypeChange(folioType) {
        // Reset the folio-scoped selections whenever the folio scope changes.
        this.agentSearch = '';
        this.guests = [];
        this.updateFilters({ folioType, agentId: null, guestId: null });
    }
    handleGuestSelect(e) {
        const guest = this.guests?.find(g => g.id?.toString() === e.detail.item.value);
        if (!guest) {
            console.warn(`guest not found with id ${e.detail.item.value}`);
            return;
        }
        this.updateFilters({ guestId: guest.id });
    }
    emitSearchDebounced(value) {
        this.updateFilters({ docNumber: value });
    }
    render() {
        return (index.h("form", { key: '159e7ceb415513361d388ff8dfa51efdb5aa65db', onSubmit: e => {
                e.preventDefault();
                this.applyFilters.emit(this.filters);
            } }, index.h("div", { key: 'ec95fdcf4737246e91c54aa1faf3218ea6271c1a', class: "filters-bar" }, index.h("ir-validator", { key: '8e182923ad084ae36ca70581fa762ba06979f550', value: this.filters?.fromDate || this.filters?.toDate, schema: index$2.z.string().nonempty(), class: "filters-bar__dates" }, index.h("ir-date-range-filter", { key: '3d091fc20ae4c085d86e7365cff097adb5aee594', maxDate: today.format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.filters.fromDate, toDate: this.filters.toDate, onDatesChanged: e => this.updateFilters({ fromDate: e.detail.from, toDate: e.detail.to }) })), index.h("div", { key: '79a2b2852d27ff44e121d4f58f99a258c6507c2d', class: "filters-bar__search-group" }, index.h("div", { key: '8a4843cab97dc95032dfae7834adf532f7bf7289', class: "filters-bar__type-group" }, index.h("wa-select", { key: 'ad9a47bcfe72a24bcb535ef1410ca2e113365584', class: "filters-bar__status-select", value: this.filters.type, defaultValue: this.filters.type, onchange: e => this.updateFilters({ type: e.target.value }), size: "small", placeholder: "Document Type" }, this.typeOptions.map(option => (index.h("wa-option", { value: option.value, key: option.value }, option.label)))), index.h("wa-select", { key: '83f7d047bb908bb0e976d06a7ea2d90bf9c47ab6', class: "filters-bar__status-select", value: this.filters.folioType, defaultValue: this.filters.folioType, onchange: e => this.handleFolioTypeChange(e.target.value), size: "small", placeholder: "Folios" }, this.folioOptions.map(option => (index.h("wa-option", { value: option.value, key: option.value }, option.label)))), index.h("wa-switch", { key: 'ed3c7bc281fd15f52b8cd1c5295cbc9ecda4cc24', class: "filters-bar__tax-switch", checked: this.filters.taxableOnly, onchange: e => this.updateFilters({ taxableOnly: e.target.checked }) }, "Taxes")), this.filters.folioType === 'agent' && (index.h("ir-autocomplete", { key: 'e5515a876e16615030fa5ecaca44fd14cea9df74', class: "filters-bar__folio-select", size: "small", placeholder: "Select agent", value: this.filters.agentId ? (this.agents.find(a => a.id === this.filters.agentId)?.name ?? '') : ALL_AGENTS_LABEL, "onText-change": (e) => {
                this.agentSearch = e.detail ?? '';
            }, "onCombobox-change": (e) => {
                this.agentSearch = '';
                this.updateFilters({ agentId: e.detail && e.detail !== ALL_AGENTS_VALUE ? Number(e.detail) : null });
            } }, index.h("ir-autocomplete-option", { key: '69048d76fc539be50bb3312b1244703aefc9b88c', label: ALL_AGENTS_LABEL, value: ALL_AGENTS_VALUE }, ALL_AGENTS_LABEL), this.filteredAgents.map(agent => (index.h("ir-autocomplete-option", { key: agent.id, label: agent.name, value: String(agent.id) }, agent.name))))), this.filters.folioType === 'guest' && (index.h("ir-picker", { key: 'fd7a9e8b02e3756588ae5e57afc31fdfa72888a0', class: "filters-bar__folio-select", size: "small", placeholder: "Search customer by email or name", withClear: true, mode: "select-async", debounce: 500, loading: irInterceptor_store.isRequestPending('/Fetch_Exposed_Guests'), "onText-change": event => this.fetchGuests(event.detail), "onCombobox-select": this.handleGuestSelect.bind(this), "onCombobox-clear": () => this.updateFilters({ guestId: null }) }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (index.h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        }))), index.h("div", { key: '723f1322dd115405e6b36b71cef6c2dad2bf500c', class: "filters-bar__search-actions" }, index.h("ir-input", { key: '51e9e6e255d5ee8cfb16fe21ea6f66c84cb8ca16', class: "filters-bar__search-input", placeholder: this.searchPlaceholder, value: this.docNumber, "onText-change": e => {
                this.docNumber = e.detail;
                this.emitSearchDebounced(e.detail);
            }, withClear: true }, index.h("wa-icon", { key: '4e3f7aad710d1f286fdd4b4ece90b3d36f42c959', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), index.h("ir-custom-button", { key: '516c899e66a23b35c3f71fd3f3daa6d62a3e1094', class: "filters-bar__search-submit", variant: "neutral", appearance: "outlined", type: "submit" }, index.h("wa-icon", { key: '1238aa53292dcc227582d33398cd85c2b12f9ec3', name: "magnifying-glass" })))))));
    }
    static get watchers() { return {
        "propertyId": ["handlePropertyIdChange"]
    }; }
};
__decorate([
    debounce.Debounce(300)
], IrFiscalDocumentsFilters.prototype, "emitSearchDebounced", null);
IrFiscalDocumentsFilters.style = IrFiscalDocumentsFiltersStyle0;

const irFiscalDocumentsTableCss = ".sc-ir-fiscal-documents-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-fiscal-documents-table{overflow-x:auto}.table--container.sc-ir-fiscal-documents-table,.data-table.sc-ir-fiscal-documents-table{height:100%}.ir-table-row.sc-ir-fiscal-documents-table td.sc-ir-fiscal-documents-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-fiscal-documents-table td.sc-ir-fiscal-documents-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-fiscal-documents-table tbody.sc-ir-fiscal-documents-table tr.sc-ir-fiscal-documents-table:last-child>td.sc-ir-fiscal-documents-table{border-bottom:0 !important}.table.sc-ir-fiscal-documents-table thead.sc-ir-fiscal-documents-table th.sc-ir-fiscal-documents-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-fiscal-documents-table thead.sc-ir-fiscal-documents-table th.sc-ir-fiscal-documents-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-fiscal-documents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-fiscal-documents-table,.ir-table-row.sc-ir-fiscal-documents-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-fiscal-documents-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-fiscal-documents-table thead.sc-ir-fiscal-documents-table th.sortable.sc-ir-fiscal-documents-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-fiscal-documents-table thead.sc-ir-fiscal-documents-table th.sortable.sc-ir-fiscal-documents-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-fiscal-documents-table thead.sc-ir-fiscal-documents-table th.sortable.sc-ir-fiscal-documents-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-fiscal-documents-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-fiscal-documents-table svg.sc-ir-fiscal-documents-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-fiscal-documents-table:hover td.sc-ir-fiscal-documents-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-fiscal-documents-table:hover td.sc-ir-fiscal-documents-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-fiscal-documents-table:active td.sc-ir-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-fiscal-documents-table td.sc-ir-fiscal-documents-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-fiscal-documents-table:hover td.sc-ir-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-fiscal-documents-table:active td.sc-ir-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-fiscal-documents-table .empty-row.sc-ir-fiscal-documents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-fiscal-documents-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-fiscal-documents-table{position:sticky !important;right:0;background-color:white}.sc-ir-fiscal-documents-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60dvh;max-width:1920px;background-color:var(--wa-color-surface-default);border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9)}.fiscal-table__heading.sc-ir-fiscal-documents-table:last-child{border-right:0}.fiscal-table__heading--numeric.sc-ir-fiscal-documents-table,.fiscal-table__cell--numeric.sc-ir-fiscal-documents-table{text-align:right !important}.ir-table-row.--is-draft.sc-ir-fiscal-documents-table>td.sc-ir-fiscal-documents-table{background-color:var(--wa-color-warning-fill-quiet) !important}.fd_ss.sc-ir-fiscal-documents-table{color:var(--wa-color-text-quiet);margin:0;padding:0;font-size:var(--wa-font-size-s)}.fiscal-table__status-tag.sc-ir-fiscal-documents-table{text-transform:capitalize}.fiscal-table__doc-number.sc-ir-fiscal-documents-table::part(base){padding:0.05rem 0.5rem;height:auto}.fiscal-table__cell--doc-number.sc-ir-fiscal-documents-table{--ir-cell-padding:0.5rem}.fiscal-table__heading--actions.sc-ir-fiscal-documents-table,.fiscal-table__cell--actions.sc-ir-fiscal-documents-table{text-align:center !important}.fiscal-table__action-trigger.sc-ir-fiscal-documents-table::part(base){width:24px;height:24px}.fiscal-table__action-danger.sc-ir-fiscal-documents-table{color:var(--wa-color-danger-fill-loud, #dc2626)}.fiscal-table__cell--zero.sc-ir-fiscal-documents-table{color:var(--wa-color-text-quiet, #9ca3af)}.fiscal-table__empty.sc-ir-fiscal-documents-table{text-align:center;color:var(--wa-color-text-quiet);font-size:0.875rem;padding:1.25rem}.fiscal-table__date-prompt.sc-ir-fiscal-documents-table{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;flex:1;padding:3rem 2rem;text-align:center}.fiscal-table__date-prompt-icon.sc-ir-fiscal-documents-table{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.fiscal-table__date-prompt-title.sc-ir-fiscal-documents-table{margin:0;font-size:0.9375rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}";
const IrFiscalDocumentsTableStyle0 = irFiscalDocumentsTableCss;

const IrFiscalDocumentsTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clFiscalDocumentPreview = index.createEvent(this, "clFiscalDocumentPreview", 7);
        this.fetchRequested = index.createEvent(this, "fetchRequested", 7);
    }
    rows = [];
    currencySymbol = '$';
    currencies = [];
    taxableOnly = false;
    isLoading = false;
    hasDates = false;
    ticket;
    propertyId;
    fromDate = null;
    toDate = null;
    hasFetched = false;
    /** Folio scope driving which identity columns are shown. */
    folioType = 'all';
    /** Selected agent id (when a specific agent is chosen under the agent folio). */
    agentId = null;
    /** Selected guest id (when a specific guest is chosen under the guest folio). */
    guestId = null;
    clFiscalDocumentPreview;
    fetchRequested;
    pendingAction = null;
    isConfirming = false;
    columnHelper = useTable.createColumnHelper();
    cityLedgerService = new index$1.CityLedgerService();
    /**
     * A "specific party" is selected when the folio is scoped to a single agent or
     * guest. In that case the table collapses to the base city-ledger layout (no
     * identity / booking columns).
     */
    get isSpecificPartySelected() {
        return (this.folioType === 'agent' && !!this.agentId) || (this.folioType === 'guest' && !!this.guestId);
    }
    get showAgentName() {
        return !this.isSpecificPartySelected && this.folioType !== 'guest';
    }
    get showGuestName() {
        return !this.isSpecificPartySelected && this.folioType !== 'agent';
    }
    get showBookingNumber() {
        return !this.isSpecificPartySelected;
    }
    handleAction(action, row) {
        switch (action) {
            case 'view':
            case 'preview':
                this.clFiscalDocumentPreview.emit({
                    fdTypeCode: row.FD_TYPE_CODE,
                    documentNumber: row.DOC_NUMBER,
                    agentId: row.AGENCY_ID ?? this.agentId,
                    agentName: row.AGENCY_NAME,
                    fdId: row.FD_ID,
                    externalRef: row.EXTERNAL_REF,
                    fromDate: row.FD_TYPE_CODE === index$1.FdTypes.Proforma ? row.FROM_DATE : this.fromDate,
                    toDate: row.FD_TYPE_CODE === index$1.FdTypes.Proforma ? row.TO_DATE : this.toDate,
                    bookingNbr: row.FD_TYPE_CODE === index$1.FdTypes.Proforma ? row.BOOK_NBR : null,
                });
                break;
            case 'print':
                this.clFiscalDocumentPreview.emit({
                    fdTypeCode: row.FD_TYPE_CODE,
                    documentNumber: row.DOC_NUMBER,
                    agentId: row.AGENCY_ID ?? this.agentId,
                    agentName: row.AGENCY_NAME,
                    fdId: row.FD_ID,
                    autoPrint: true,
                    externalRef: row.EXTERNAL_REF,
                    fromDate: row.FD_TYPE_CODE === index$1.FdTypes.Proforma ? row.FROM_DATE : this.fromDate,
                    toDate: row.FD_TYPE_CODE === index$1.FdTypes.Proforma ? row.TO_DATE : this.toDate,
                    bookingNbr: row.FD_TYPE_CODE === index$1.FdTypes.Proforma ? row.BOOK_NBR : null,
                });
                break;
            case 'download':
                console.log('download', row);
                break;
            case 'send-reminder':
                console.log('send-reminder', row);
                break;
            case 'apply-payment':
                console.log('apply-payment', row);
                break;
            case 'mark-paid':
                console.log('mark-paid', row);
                break;
            case 'void':
            case 'delete-draft':
            case 'convert-to-invoice':
                this.pendingAction = { action: action, row };
                break;
        }
    }
    async confirmPendingAction() {
        if (!this.pendingAction)
            return;
        const { action, row } = this.pendingAction;
        this.isConfirming = true;
        try {
            if (action === 'void') {
                switch (row.FD_TYPE_CODE) {
                    case index$1.FdTypes.Invoice:
                        await this.cityLedgerService.voidInvoiceByCreditNote({ FD_ID: row.FD_ID });
                        break;
                    case index$1.FdTypes.Receipt:
                        await this.cityLedgerService.voidReceiptByCreditReceipt({ FD_ID: row.FD_ID });
                        break;
                    default:
                        console.warn(row.FD_TYPE_CODE + ' not implemented');
                        break;
                }
            }
            else if (action === 'delete-draft') {
                await this.cityLedgerService.deleteDraftFiscalDocument({ FD_ID: row.FD_ID });
            }
            else if (action === 'convert-to-invoice') {
                await this.cityLedgerService.issueInvoiceFromDraft({ FD_ID: row.FD_ID });
            }
            this.fetchRequested.emit();
        }
        finally {
            this.isConfirming = false;
            this.pendingAction = null;
        }
    }
    get columns() {
        const base = [
            this.columnHelper.accessor('FD_STATUS_CODE', {
                header: 'Status',
                cell: info => index.h("ir-cl-status-tag", { transaction: info.row.original }),
            }),
            this.columnHelper.accessor('ISSUE_DATE_DISPLAY', {
                header: 'Date',
                cell: info => info.getValue(),
            }),
            this.columnHelper.accessor('DOC_NUMBER', {
                header: 'Doc Number',
                cell: info => (index.h("wa-button", { onClick: () => {
                        const row = info.row.original;
                        this.clFiscalDocumentPreview.emit({
                            fdTypeCode: row.FD_TYPE_CODE,
                            documentNumber: row.DOC_NUMBER,
                            agentId: row.AGENCY_ID ?? this.agentId,
                            agentName: row.AGENCY_NAME,
                            fdId: row.FD_ID,
                            externalRef: row.EXTERNAL_REF,
                            fromDate: row.FD_TYPE_CODE === index$1.FdTypes.Proforma ? row.FROM_DATE : this.fromDate,
                            toDate: row.FD_TYPE_CODE === index$1.FdTypes.Proforma ? row.TO_DATE : this.toDate,
                            bookingNbr: row.FD_TYPE_CODE === index$1.FdTypes.Proforma ? row.BOOK_NBR : null,
                        });
                    }, variant: "brand", appearance: "plain", class: "fiscal-table__doc-number" }, info.getValue() ?? '')),
            }),
            this.columnHelper.accessor('FD_TYPE_NAME', {
                id: 'type',
                header: 'Type',
                cell: info => (index.h("div", null, index.h("p", { class: "m-0 p-0" }, info.getValue()), info.row.original.EXTERNAL_REF && (index.h("p", { class: "fd_ss" }, [index$1.FdTypes.CreditNote, index$1.FdTypes.CreditReceipt].includes(info.row.original.FD_TYPE_CODE) ? 'for' : 'voided by', " ", info.row.original.EXTERNAL_REF)))),
            }),
        ];
        // Identity / booking columns — shown only while the folio is not scoped to a
        // single agent or guest (see the show* getters).
        const identityCols = [];
        if (this.showAgentName) {
            identityCols.push(this.columnHelper.accessor('AGENCY_NAME', {
                id: 'agentName',
                header: 'Agent',
                cell: info => index.h("span", null, info.getValue() ?? ''),
            }));
        }
        if (this.showGuestName) {
            identityCols.push(this.columnHelper.accessor('GUEST_NAME', {
                id: 'guestName',
                header: 'Guest',
                cell: info => index.h("span", null, info.getValue() ?? ''),
            }));
        }
        if (this.showBookingNumber) {
            identityCols.push(this.columnHelper.accessor('BOOK_NBR', {
                id: 'bookingNumber',
                header: 'Booking #',
                cell: info => index.h("span", null, info.getValue() ?? ''),
            }));
        }
        const amountCols = this.taxableOnly
            ? [
                this.columnHelper.accessor('NET_AMOUNT', {
                    header: 'Net Amount',
                    cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
                }),
                this.columnHelper.accessor('TAX_AMOUNT', {
                    header: 'Taxes',
                    cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
                }),
            ]
            : [];
        return [
            ...base,
            ...identityCols,
            ...amountCols,
            this.columnHelper.accessor('DEBIT', {
                header: 'Debit',
                cell: info => (info.row.original.FD_TYPE_CODE === index$1.FdTypes.CreditReceipt ? '' : this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID)),
            }),
            this.columnHelper.accessor('CREDIT', {
                header: 'Credit',
                cell: info => this.renderMoney(info.row.original.FD_TYPE_CODE === index$1.FdTypes.CreditReceipt ? info.row.original.DEBIT : info.getValue(), info.row.original.CURRENCY_ID),
            }),
            this.columnHelper.display({
                id: 'actions',
                header: 'Actions',
                cell: info => {
                    const row = info.row.original;
                    const isDraft = row.FD_TYPE_CODE === index$1.FdTypes.Draft;
                    const isInvoice = row.FD_TYPE_CODE === index$1.FdTypes.Invoice;
                    const isReceipt = row.FD_TYPE_CODE === index$1.FdTypes.Receipt;
                    return (index.h("wa-dropdown", { "onwa-hide": e => {
                            e.stopImmediatePropagation();
                            e.stopPropagation();
                        }, "onwa-select": (e) => {
                            this.handleAction(e.detail.item.value, row);
                        } }, index.h("wa-button", { slot: "trigger", size: "small", variant: "neutral", appearance: "plain", class: "fiscal-table__action-trigger" }, index.h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1.2rem' } })), isDraft
                        ? [
                            index.h("wa-dropdown-item", { value: "preview" }, "Preview"),
                            index.h("wa-dropdown-item", { value: "convert-to-invoice" }, "Convert to invoice"),
                            index.h("wa-dropdown-item", { value: "delete-draft", variant: "danger" }, "Delete"),
                        ]
                        : [
                            index.h("wa-dropdown-item", { value: "view" }, "View document"),
                            index.h("wa-dropdown-item", { value: "print" }, "Print"),
                            isInvoice && info.row.original.FD_STATUS_CODE !== index$1.FdStatus.Voided && (index.h("wa-dropdown-item", { value: "void" }, index.h("span", { class: "fiscal-table__action-danger" }, "Void with credit note"))),
                            isReceipt && info.row.original.FD_STATUS_CODE !== index$1.FdStatus.Voided && (index.h("wa-dropdown-item", { value: "void" }, index.h("span", { class: "fiscal-table__action-danger" }, "Void with credit receipt"))),
                        ]));
                },
                enableSorting: false,
            }),
        ];
    }
    getSymbol(currencyId) {
        const match = this.currencies.find(c => c.id === currencyId);
        return match?.symbol ?? this.currencySymbol;
    }
    renderMoney(value, currencyId) {
        if (!value)
            return index.h("span", { class: "fiscal-table__cell--zero" });
        return index.h("span", null, utils.formatAmount(this.getSymbol(currencyId), value));
    }
    render() {
        if (!this.hasFetched) {
            const hasDate = !!(this.fromDate || this.toDate);
            return (index.h(index.Host, null, index.h("div", { class: "fiscal-table__date-prompt" }, index.h("div", { class: "fiscal-table__date-prompt-icon" }, index.h("wa-icon", { name: "calendar-days" })), index.h("p", { class: "fiscal-table__date-prompt-title" }, "Select a date range to get started"), hasDate && (index.h("wa-animation", { iterations: 1, play: true, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, index.h("ir-custom-button", { size: "small", variant: "brand", onClickHandler: () => this.fetchRequested.emit() }, index.h("wa-icon", { slot: "start", name: "magnifying-glass" }), "Load Documents"))))));
        }
        const columns = this.columns;
        const table = useTable.useTable({
            data: this.rows,
            columns,
            getCoreRowModel: useTable.getCoreRowModel(),
            getSortedRowModel: useTable.getSortedRowModel(),
        });
        const numericColumnIds = ['NET_AMOUNT', 'TAX_AMOUNT', 'amount', 'DEBIT', 'CREDIT'];
        return (index.h(index.Host, null, index.h("div", { class: "table--container" }, index.h("table", { class: "table data-table" }, index.h("thead", null, table.getHeaderGroups().map(headerGroup => (index.h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (index.h("th", { key: header.id, class: {
                'fiscal-table__heading--numeric': numericColumnIds.includes(header.column.id),
                'fiscal-table__heading--actions': header.column.id === 'actions',
            } }, useTable.flexRender(header.column.columnDef.header, header.getContext())))))))), index.h("tbody", null, table.getRowModel().rows.map(row => (index.h("tr", { key: row.id, class: { 'ir-table-row': true, '--is-draft': row.original.FD_TYPE_CODE === index$1.FdTypes.Draft } }, row.getVisibleCells().map(cell => (index.h("td", { key: cell.id, class: {
                'fiscal-table__cell': true,
                'fiscal-table__cell--numeric': numericColumnIds.includes(cell.column.id),
                'fiscal-table__cell--actions': cell.column.id === 'actions',
                'fiscal-table__cell--doc-number': cell.column.id === 'DOC_NUMBER',
            } }, useTable.flexRender(cell.column.columnDef.cell, cell.getContext()))))))), table.getRowModel().rows.length === 0 && (index.h("tr", null, index.h("td", { class: "empty-row", colSpan: columns.length }, this.isLoading ? index.h("ir-spinner", null) : 'No fiscal documents match the current filters.')))))), index.h("ir-fd-confirm-dialog", { open: this.pendingAction !== null, action: this.pendingAction?.action ?? null, docNumber: this.pendingAction?.row.DOC_NUMBER ?? 'this document', isConfirming: this.isConfirming, onConfirmed: () => this.confirmPendingAction(), onCancelled: () => (this.pendingAction = null) })));
    }
};
IrFiscalDocumentsTable.style = IrFiscalDocumentsTableStyle0;

exports.ir_fiscal_documents_filters = IrFiscalDocumentsFilters;
exports.ir_fiscal_documents_table = IrFiscalDocumentsTable;

//# sourceMappingURL=ir-fiscal-documents-filters_2.cjs.entry.js.map