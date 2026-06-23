import { r as registerInstance, c as createEvent, h, H as Host } from './index-D7D7fhZS.js';
import { D as Debounce } from './debounce-DF70NVXP.js';
import { F as FdTypes, a as FdStatus } from './enums-DC2FbBuL.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { l as libExports } from './index-DeW5X45W.js';
import { A as AgentsService } from './agents.service-CfKXQqnt.js';
import { B as BookingService } from './booking.store-BmdBj9HL.js';
import { i as isRequestPending } from './ir-interceptor.store-B5mzcEc4.js';
import { i as formatAmount } from './utils-DvzWTdKJ.js';
import { c as createColumnHelper, u as useTable, f as flexRender, g as getSortedRowModel, a as getCoreRowModel } from './useTable-D3LS_BXH.js';
import { C as CityLedgerService } from './index-UiAzOH9k.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './type-D7rOPtKA.js';
import './booking-BFhWMWVg.js';
import './locales.store-C0aS6UDK.js';
import './index-TzZ5wfUy.js';
import './calendar-data-15-64PrB.js';

const irFiscalDocumentsFiltersCss = () => `.sc-ir-fiscal-documents-filters-h{display:block}.filters-bar.sc-ir-fiscal-documents-filters{display:flex;flex-direction:column;align-items:stretch;gap:0.75rem}.filters-bar__dates.sc-ir-fiscal-documents-filters{display:flex;align-items:center;width:100%}.filters-bar__date_picker.sc-ir-fiscal-documents-filters{width:100%}.filters-bar__search-group.sc-ir-fiscal-documents-filters{display:flex;flex-direction:column;gap:0.75rem;width:100%}.filters-bar__type-group.sc-ir-fiscal-documents-filters{display:flex;flex-wrap:wrap;align-items:center;gap:0.75rem;width:100%}.filters-bar__status-select.sc-ir-fiscal-documents-filters{flex:1 1 140px;min-width:0}.filters-bar__tax-switch.sc-ir-fiscal-documents-filters{flex:0 0 auto;white-space:nowrap}.filters-bar__proforma-switch.sc-ir-fiscal-documents-filters{flex:0 0 auto;white-space:nowrap}.filters-bar__folio-select.sc-ir-fiscal-documents-filters{width:100%}.filters-bar__search-actions.sc-ir-fiscal-documents-filters{display:flex;align-items:center;gap:0.5rem;width:100%}.filters-bar__search-input.sc-ir-fiscal-documents-filters{flex:1 1 auto;min-width:0}.filters-bar__search-submit.sc-ir-fiscal-documents-filters{flex:0 0 auto}.filters-bar__search-icon.sc-ir-fiscal-documents-filters{font-size:0.875rem;color:var(--wa-color-text-quiet, #9ca3af);flex-shrink:0}@media (min-width: 640px){.filters-bar__search-group.sc-ir-fiscal-documents-filters{flex-direction:row;flex-wrap:wrap;align-items:center}.filters-bar__type-group.sc-ir-fiscal-documents-filters{width:auto;flex:1 1 auto}.filters-bar__status-select.sc-ir-fiscal-documents-filters{flex:0 1 180px;min-width:160px}.filters-bar__folio-select.sc-ir-fiscal-documents-filters{flex:1 1 220px;width:auto}.filters-bar__search-actions.sc-ir-fiscal-documents-filters{flex:1 1 260px;width:auto}}@media (min-width: 1024px){.filters-bar__search-group.sc-ir-fiscal-documents-filters{flex-wrap:nowrap}.filters-bar__type-group.sc-ir-fiscal-documents-filters{flex:0 0 auto;flex-wrap:nowrap}.filters-bar__folio-select.sc-ir-fiscal-documents-filters{flex:0 1 220px}.filters-bar__search-actions.sc-ir-fiscal-documents-filters{flex:1 1 auto;max-width:320px}}@media (min-width: 1280px){.filters-bar.sc-ir-fiscal-documents-filters{flex-direction:row;flex-wrap:nowrap;align-items:center}.filters-bar__dates.sc-ir-fiscal-documents-filters{width:auto;flex:0 0 auto;min-width:280px}.filters-bar__search-group.sc-ir-fiscal-documents-filters{flex:1;width:auto}}`;

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
const today = hooks();
/** Sentinel option in the agent autocomplete meaning "no specific agent" (the default). */
const ALL_AGENTS_VALUE = 'all';
const ALL_AGENTS_LABEL = 'All agents';
const IrFiscalDocumentsFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.filtersChange = createEvent(this, "filtersChange");
        this.applyFilters = createEvent(this, "applyFilters");
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
    agentsService = new AgentsService();
    bookingService = new BookingService();
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
        { label: 'Invoices', value: FdTypes.Invoice },
        { label: 'Receipts', value: FdTypes.Receipt },
        { label: 'Credit Notes', value: FdTypes.CreditNote },
        // { label: 'Debit Notes', value: FdTypes.DebitNote },
        { label: 'Credit Receipt', value: FdTypes.CreditReceipt },
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
        return (h("form", { key: '0be98f3c4dab6d71208a84f1b757d6aed7dd1617', onSubmit: e => {
                e.preventDefault();
                this.applyFilters.emit(this.filters);
            } }, h("div", { key: '13e9387bf46a75b3ed66c7889d16ab4ea467053d', class: "filters-bar" }, h("ir-validator", { key: 'e845bfa26ae1247b3295e8acaf645a567f0a8ff3', value: this.filters?.fromDate || this.filters?.toDate, schema: libExports.z.string().nonempty(), class: "filters-bar__dates" }, h("ir-date-range-filter", { key: 'a206f94729c91b624769eb29295c0b4cb7825c52', maxDate: today.format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.filters.fromDate, toDate: this.filters.toDate, onDatesChanged: e => this.updateFilters({ fromDate: e.detail.from, toDate: e.detail.to }) })), h("div", { key: 'a2a0cc4482c9e08d6dde77ccfd9e7d231e947ba8', class: "filters-bar__search-group" }, h("div", { key: '9aa389cdf0722eefe2a69032e363596649d8d0ce', class: "filters-bar__type-group" }, h("wa-select", { key: '9295e5fdb1ad922f055d083e5de1439372a651c6', class: "filters-bar__status-select", value: this.filters.type, defaultValue: this.filters.type, onchange: e => this.updateFilters({ type: e.target.value }), size: "s", placeholder: "Document Type" }, this.typeOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("wa-select", { key: '833c426a59c302411fb02089ebd1d63271d5a58c', class: "filters-bar__status-select", value: this.filters.folioType, defaultValue: this.filters.folioType, onchange: e => this.handleFolioTypeChange(e.target.value), size: "s", placeholder: "Folios" }, this.folioOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("wa-switch", { key: '9abd02da1ce1c0eb3b74ded1fad4c03943432497', class: "filters-bar__tax-switch", checked: this.filters.taxableOnly, onchange: e => this.updateFilters({ taxableOnly: e.target.checked }) }, "Taxes")), this.filters.folioType === 'agent' && (h("ir-autocomplete", { key: '2c2e3ebba555b023aba564c367ca60fe104a8949', class: "filters-bar__folio-select", size: "s", placeholder: "Select agent", value: this.filters.agentId ? (this.agents.find(a => a.id === this.filters.agentId)?.name ?? '') : ALL_AGENTS_LABEL, "onText-change": (e) => {
                this.agentSearch = e.detail ?? '';
            }, "onCombobox-change": (e) => {
                this.agentSearch = '';
                const value = e.detail;
                this.updateFilters({ agentId: value && value !== ALL_AGENTS_VALUE ? Number(value) : null });
            } }, h("ir-autocomplete-option", { key: '0aeb3bc4b4c65d64b728198b91c447f64588d0af', label: ALL_AGENTS_LABEL, value: ALL_AGENTS_VALUE }, ALL_AGENTS_LABEL), this.filteredAgents.map(agent => (h("ir-autocomplete-option", { key: agent.id, label: agent.name, value: String(agent.id) }, agent.name))))), this.filters.folioType === 'guest' && (h("ir-picker", { key: '05de3b21bb804d688d6fcad552f766515ef2a02e', class: "filters-bar__folio-select", size: "s", placeholder: "Search customer by email or name", withClear: true, mode: "select-async", debounce: 500, loading: isRequestPending('/Fetch_Exposed_Guests'), "onText-change": event => this.fetchGuests(event.detail), "onCombobox-select": this.handleGuestSelect.bind(this), "onCombobox-clear": () => this.updateFilters({ guestId: null }) }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        }))), h("div", { key: '0821e979c703c99952ee031e16e01e9321cc31c5', class: "filters-bar__search-actions" }, h("ir-input", { key: '485fdb6803f5dbdc82a0a699bcbf8165eb10be9b', class: "filters-bar__search-input", placeholder: this.searchPlaceholder, value: this.docNumber, "onText-change": e => {
                this.docNumber = e.detail;
                this.emitSearchDebounced(e.detail);
            }, withClear: true }, h("wa-icon", { key: 'b026b725cf99fb289ac8959b31d5176afd67efd2', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: 'e4df1c142c6844e72d5bf0a7b7265b0a82e402ae', class: "filters-bar__search-submit", variant: "neutral", appearance: "outlined", type: "submit" }, h("wa-icon", { key: '5f235a17108be15b8ff3d59d4debba8f8d3e2baa', name: "magnifying-glass" })))))));
    }
    static get watchers() { return {
        "propertyId": [{
                "handlePropertyIdChange": 0
            }]
    }; }
};
__decorate([
    Debounce(300)
], IrFiscalDocumentsFilters.prototype, "emitSearchDebounced", null);
IrFiscalDocumentsFilters.style = irFiscalDocumentsFiltersCss();

const irFiscalDocumentsTableCss = () => `.sc-ir-fiscal-documents-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-fiscal-documents-table{overflow-x:auto}.table--container.sc-ir-fiscal-documents-table,.data-table.sc-ir-fiscal-documents-table{height:100%}.ir-table-row.sc-ir-fiscal-documents-table td.sc-ir-fiscal-documents-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-fiscal-documents-table td.sc-ir-fiscal-documents-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-fiscal-documents-table tbody.sc-ir-fiscal-documents-table tr.sc-ir-fiscal-documents-table:last-child>td.sc-ir-fiscal-documents-table{border-bottom:0 !important}.table.sc-ir-fiscal-documents-table thead.sc-ir-fiscal-documents-table th.sc-ir-fiscal-documents-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-fiscal-documents-table thead.sc-ir-fiscal-documents-table th.sc-ir-fiscal-documents-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-fiscal-documents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-fiscal-documents-table,.ir-table-row.sc-ir-fiscal-documents-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-fiscal-documents-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-fiscal-documents-table thead.sc-ir-fiscal-documents-table th.sortable.sc-ir-fiscal-documents-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-fiscal-documents-table thead.sc-ir-fiscal-documents-table th.sortable.sc-ir-fiscal-documents-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-fiscal-documents-table thead.sc-ir-fiscal-documents-table th.sortable.sc-ir-fiscal-documents-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-fiscal-documents-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-fiscal-documents-table svg.sc-ir-fiscal-documents-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-fiscal-documents-table:hover td.sc-ir-fiscal-documents-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-fiscal-documents-table:hover td.sc-ir-fiscal-documents-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-fiscal-documents-table:active td.sc-ir-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-fiscal-documents-table td.sc-ir-fiscal-documents-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-fiscal-documents-table:hover td.sc-ir-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-fiscal-documents-table:active td.sc-ir-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-fiscal-documents-table .empty-row.sc-ir-fiscal-documents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-fiscal-documents-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-fiscal-documents-table{position:sticky !important;right:0;background-color:white}.sc-ir-fiscal-documents-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60dvh;max-width:1920px;background-color:var(--wa-color-surface-default);border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9)}.fiscal-table__heading.sc-ir-fiscal-documents-table:last-child{border-right:0}.fiscal-table__heading--numeric.sc-ir-fiscal-documents-table,.fiscal-table__cell--numeric.sc-ir-fiscal-documents-table{text-align:right !important}.ir-table-row.--is-draft.sc-ir-fiscal-documents-table>td.sc-ir-fiscal-documents-table{background-color:var(--wa-color-warning-fill-quiet) !important}.fd_ss.sc-ir-fiscal-documents-table{color:var(--wa-color-text-quiet);margin:0;padding:0;font-size:var(--wa-font-size-s)}.fiscal-table__status-tag.sc-ir-fiscal-documents-table{text-transform:capitalize}.fiscal-table__doc-number.sc-ir-fiscal-documents-table::part(base),.fiscal-table__doc-number.sc-ir-fiscal-documents-table [part~="base"]{padding:0.05rem 0.5rem;height:auto}.fiscal-table__cell--doc-number.sc-ir-fiscal-documents-table{--ir-cell-padding:0.5rem}.fiscal-table__heading--actions.sc-ir-fiscal-documents-table,.fiscal-table__cell--actions.sc-ir-fiscal-documents-table{text-align:center !important}.fiscal-table__action-trigger.sc-ir-fiscal-documents-table::part(base),.fiscal-table__action-trigger.sc-ir-fiscal-documents-table [part~="base"]{width:24px;height:24px}.fiscal-table__action-danger.sc-ir-fiscal-documents-table{color:var(--wa-color-danger-fill-loud, #dc2626)}.fiscal-table__cell--zero.sc-ir-fiscal-documents-table{color:var(--wa-color-text-quiet, #9ca3af)}.fiscal-table__empty.sc-ir-fiscal-documents-table{text-align:center;color:var(--wa-color-text-quiet);font-size:0.875rem;padding:1.25rem}.fiscal-table__date-prompt.sc-ir-fiscal-documents-table{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;flex:1;padding:3rem 2rem;text-align:center}.fiscal-table__date-prompt-icon.sc-ir-fiscal-documents-table{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.fiscal-table__date-prompt-title.sc-ir-fiscal-documents-table{margin:0;font-size:0.9375rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}`;

const IrFiscalDocumentsTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clFiscalDocumentPreview = createEvent(this, "clFiscalDocumentPreview");
        this.fetchRequested = createEvent(this, "fetchRequested");
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
    columnHelper = createColumnHelper();
    cityLedgerService = new CityLedgerService();
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
                    fromDate: row.FD_TYPE_CODE === FdTypes.Proforma ? row.FROM_DATE : this.fromDate,
                    toDate: row.FD_TYPE_CODE === FdTypes.Proforma ? row.TO_DATE : this.toDate,
                    bookingNbr: row.FD_TYPE_CODE === FdTypes.Proforma ? row.BOOK_NBR : null,
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
                    fromDate: row.FD_TYPE_CODE === FdTypes.Proforma ? row.FROM_DATE : this.fromDate,
                    toDate: row.FD_TYPE_CODE === FdTypes.Proforma ? row.TO_DATE : this.toDate,
                    bookingNbr: row.FD_TYPE_CODE === FdTypes.Proforma ? row.BOOK_NBR : null,
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
                    case FdTypes.Invoice:
                        await this.cityLedgerService.voidInvoiceByCreditNote({ FD_ID: row.FD_ID });
                        break;
                    case FdTypes.Receipt:
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
                cell: info => h("ir-cl-status-tag", { transaction: info.row.original }),
            }),
            this.columnHelper.accessor('ISSUE_DATE_DISPLAY', {
                header: 'Date',
                cell: info => info.getValue(),
            }),
            this.columnHelper.accessor('DOC_NUMBER', {
                header: 'Doc Number',
                cell: info => (h("wa-button", { onClick: () => {
                        const row = info.row.original;
                        this.clFiscalDocumentPreview.emit({
                            fdTypeCode: row.FD_TYPE_CODE,
                            documentNumber: row.DOC_NUMBER,
                            agentId: row.AGENCY_ID ?? this.agentId,
                            agentName: row.AGENCY_NAME,
                            fdId: row.FD_ID,
                            externalRef: row.EXTERNAL_REF,
                            fromDate: row.FD_TYPE_CODE === FdTypes.Proforma ? row.FROM_DATE : this.fromDate,
                            toDate: row.FD_TYPE_CODE === FdTypes.Proforma ? row.TO_DATE : this.toDate,
                            bookingNbr: row.FD_TYPE_CODE === FdTypes.Proforma ? row.BOOK_NBR : null,
                        });
                    }, variant: "brand", appearance: "plain", class: "fiscal-table__doc-number" }, info.getValue() ?? '')),
            }),
            this.columnHelper.accessor('FD_TYPE_NAME', {
                id: 'type',
                header: 'Type',
                cell: info => (h("div", null, h("p", { class: "m-0 p-0" }, info.getValue()), info.row.original.EXTERNAL_REF && (h("p", { class: "fd_ss" }, [FdTypes.CreditNote, FdTypes.CreditReceipt].includes(info.row.original.FD_TYPE_CODE) ? 'for' : 'voided by', " ", info.row.original.EXTERNAL_REF)))),
            }),
        ];
        // Identity / booking columns — shown only while the folio is not scoped to a
        // single agent or guest (see the show* getters).
        const identityCols = [];
        if (this.showAgentName) {
            identityCols.push(this.columnHelper.accessor('AGENCY_NAME', {
                id: 'agentName',
                header: 'Agent',
                cell: info => h("span", null, info.getValue() ?? ''),
            }));
        }
        if (this.showGuestName) {
            identityCols.push(this.columnHelper.accessor('GUEST_NAME', {
                id: 'guestName',
                header: 'Guest',
                cell: info => h("span", null, info.getValue() ?? ''),
            }));
        }
        if (this.showBookingNumber) {
            identityCols.push(this.columnHelper.accessor('BOOK_NBR', {
                id: 'bookingNumber',
                header: 'Booking #',
                cell: info => h("span", null, info.getValue() ?? ''),
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
                cell: info => (info.row.original.FD_TYPE_CODE === FdTypes.CreditReceipt ? '' : this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID)),
            }),
            this.columnHelper.accessor('CREDIT', {
                header: 'Credit',
                cell: info => this.renderMoney(info.row.original.FD_TYPE_CODE === FdTypes.CreditReceipt ? info.row.original.DEBIT : info.getValue(), info.row.original.CURRENCY_ID),
            }),
            this.columnHelper.display({
                id: 'actions',
                header: 'Actions',
                cell: info => {
                    const row = info.row.original;
                    const isDraft = row.FD_TYPE_CODE === FdTypes.Draft;
                    const isInvoice = row.FD_TYPE_CODE === FdTypes.Invoice;
                    const isReceipt = row.FD_TYPE_CODE === FdTypes.Receipt;
                    return (h("wa-dropdown", { "onwa-hide": e => {
                            e.stopImmediatePropagation();
                            e.stopPropagation();
                        }, "onwa-select": (e) => {
                            this.handleAction(e.detail.item.value, row);
                        } }, h("wa-button", { slot: "trigger", size: "s", variant: "neutral", appearance: "plain", class: "fiscal-table__action-trigger" }, h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1.2rem' } })), isDraft
                        ? [
                            h("wa-dropdown-item", { value: "preview" }, "Preview"),
                            h("wa-dropdown-item", { value: "convert-to-invoice" }, "Convert to invoice"),
                            h("wa-dropdown-item", { value: "delete-draft", variant: "danger" }, "Delete"),
                        ]
                        : [
                            h("wa-dropdown-item", { value: "view" }, "View document"),
                            h("wa-dropdown-item", { value: "print" }, "Print"),
                            isInvoice && info.row.original.FD_STATUS_CODE !== FdStatus.Voided && (h("wa-dropdown-item", { value: "void" }, h("span", { class: "fiscal-table__action-danger" }, "Void with credit note"))),
                            isReceipt && info.row.original.FD_STATUS_CODE !== FdStatus.Voided && (h("wa-dropdown-item", { value: "void" }, h("span", { class: "fiscal-table__action-danger" }, "Void with credit receipt"))),
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
            return h("span", { class: "fiscal-table__cell--zero" });
        return h("span", null, formatAmount(this.getSymbol(currencyId), value));
    }
    render() {
        if (!this.hasFetched) {
            const hasDate = !!(this.fromDate || this.toDate);
            return (h(Host, null, h("div", { class: "fiscal-table__date-prompt" }, h("div", { class: "fiscal-table__date-prompt-icon" }, h("wa-icon", { name: "calendar-days" })), h("p", { class: "fiscal-table__date-prompt-title" }, "Select a date range to get started"), hasDate && (h("wa-animation", { iterations: 1, play: true, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { size: "s", variant: "brand", onClickHandler: () => this.fetchRequested.emit() }, h("wa-icon", { slot: "start", name: "magnifying-glass" }), "Load Documents"))))));
        }
        const columns = this.columns;
        const table = useTable({
            data: this.rows,
            columns,
            getCoreRowModel: getCoreRowModel(),
            getSortedRowModel: getSortedRowModel(),
        });
        const numericColumnIds = ['NET_AMOUNT', 'TAX_AMOUNT', 'amount', 'DEBIT', 'CREDIT'];
        return (h(Host, null, h("div", { class: "table--container" }, h("table", { class: "table data-table" }, h("thead", null, table.getHeaderGroups().map(headerGroup => (h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (h("th", { key: header.id, class: {
                'fiscal-table__heading--numeric': numericColumnIds.includes(header.column.id),
                'fiscal-table__heading--actions': header.column.id === 'actions',
            } }, flexRender(header.column.columnDef.header, header.getContext())))))))), h("tbody", null, table.getRowModel().rows.map(row => (h("tr", { key: row.id, class: { 'ir-table-row': true, '--is-draft': row.original.FD_TYPE_CODE === FdTypes.Draft } }, row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: {
                'fiscal-table__cell': true,
                'fiscal-table__cell--numeric': numericColumnIds.includes(cell.column.id),
                'fiscal-table__cell--actions': cell.column.id === 'actions',
                'fiscal-table__cell--doc-number': cell.column.id === 'DOC_NUMBER',
            } }, flexRender(cell.column.columnDef.cell, cell.getContext()))))))), table.getRowModel().rows.length === 0 && (h("tr", null, h("td", { class: "empty-row", colSpan: columns.length }, this.isLoading ? h("ir-spinner", null) : 'No fiscal documents match the current filters.')))))), h("ir-fd-confirm-dialog", { open: this.pendingAction !== null, action: this.pendingAction?.action ?? null, docNumber: this.pendingAction?.row.DOC_NUMBER ?? 'this document', isConfirming: this.isConfirming, onConfirmed: () => this.confirmPendingAction(), onCancelled: () => (this.pendingAction = null) })));
    }
};
IrFiscalDocumentsTable.style = irFiscalDocumentsTableCss();

export { IrFiscalDocumentsFilters as ir_fiscal_documents_filters, IrFiscalDocumentsTable as ir_fiscal_documents_table };
