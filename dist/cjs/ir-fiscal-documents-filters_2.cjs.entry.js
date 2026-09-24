'use strict';

var index = require('./index-CQkpA5n3.js');
var enums = require('./enums-BSCnMYlE.js');
var moment = require('./moment-CdViwxPQ.js');
var agents_service = require('./agents.service-ZwZ3mX3j.js');
var booking_store = require('./booking.store-DDthytEL.js');
var irInterceptor_store = require('./ir-interceptor.store-moMB-JCs.js');
var t = require('./t-CyRK1btk.js');
var types = require('./types-BlCoz3jZ.js');
var calendarData = require('./calendar-data-HgC39-BR.js');
require('./booking.dto-DxxzsxJC.js');
var irDate = require('./ir-date-BZLsqCOc.js');
var number = require('./number-D7i5wAQq.js');
var utils = require('./utils-CQGL0l4_.js');
var useTable = require('./useTable-BN32DOaV.js');
var functions = require('./functions-CsGCS8vQ.js');
var locale_controller = require('./locale.controller-C4TH5Eq_.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./type-BRhg-bzd.js');
require('./IBooking-C1lok6Tq.js');
require('./utils-C5I0LkiV.js');
require('./booking-CQEjAIov.js');
require('./locales.store-BMTss6fG.js');
require('./commonSchemas-BFzTbV-r.js');
require('./language-observer-DKp37LIu.js');
require('./types-BzBUVSnE.js');

const irFiscalDocumentsFiltersCss = () => `.sc-ir-fiscal-documents-filters-h{display:block}.filters-bar.sc-ir-fiscal-documents-filters{display:flex;flex-direction:column;align-items:stretch;gap:0.75rem}.filters-bar__dates.sc-ir-fiscal-documents-filters{display:flex;align-items:center;width:100%}.filters-bar__date_picker.sc-ir-fiscal-documents-filters{width:100%}.filters-bar__search-group.sc-ir-fiscal-documents-filters{display:flex;flex-direction:column;gap:0.75rem;width:100%}.filters-bar__type-group.sc-ir-fiscal-documents-filters{display:flex;flex-wrap:wrap;align-items:center;gap:0.75rem;width:100%}.filters-bar__status-select.sc-ir-fiscal-documents-filters{flex:1 1 140px;min-width:0}.filters-bar__tax-switch.sc-ir-fiscal-documents-filters{flex:0 0 auto;white-space:nowrap}.filters-bar__proforma-switch.sc-ir-fiscal-documents-filters{flex:0 0 auto;white-space:nowrap}.filters-bar__folio-select.sc-ir-fiscal-documents-filters{width:100%}.filters-bar__search-actions.sc-ir-fiscal-documents-filters{display:flex;align-items:center;gap:0.5rem;width:100%}.filters-bar__search-input.sc-ir-fiscal-documents-filters{flex:1 1 auto;min-width:0}.filters-bar__search-submit.sc-ir-fiscal-documents-filters{flex:0 0 auto}.filters-bar__search-icon.sc-ir-fiscal-documents-filters{font-size:0.875rem;color:var(--wa-color-text-quiet, #9ca3af);flex-shrink:0}.filters-bar__search-combo.sc-ir-fiscal-documents-filters{display:flex;align-items:stretch;flex:1 1 auto;min-width:0}.filters-bar__combo-input.sc-ir-fiscal-documents-filters{flex:1 1 auto;min-width:0;position:relative;z-index:0;--wa-form-control-border-radius:var(--wa-border-radius-m, 0.375rem) 0 0 var(--wa-border-radius-m, 0.375rem)}.filters-bar__combo-input.sc-ir-fiscal-documents-filters:focus-within{z-index:2}.filters-bar__combo-select.sc-ir-fiscal-documents-filters{flex:0 0 auto;width:12rem;--wa-form-control-border-radius:0 var(--wa-border-radius-m, 0.375rem) var(--wa-border-radius-m, 0.375rem) 0;margin-inline-start:-1px}.sc-ir-fiscal-documents-filters:dir(rtl) .filters-bar__combo-input.sc-ir-fiscal-documents-filters,[dir='rtl'].sc-ir-fiscal-documents-filters .filters-bar__combo-input.sc-ir-fiscal-documents-filters{--wa-form-control-border-radius:0 var(--wa-border-radius-m, 0.375rem) var(--wa-border-radius-m, 0.375rem) 0}.sc-ir-fiscal-documents-filters:dir(rtl) .filters-bar__combo-select.sc-ir-fiscal-documents-filters,[dir='rtl'].sc-ir-fiscal-documents-filters .filters-bar__combo-select.sc-ir-fiscal-documents-filters{--wa-form-control-border-radius:var(--wa-border-radius-m, 0.375rem) 0 0 var(--wa-border-radius-m, 0.375rem)}@media (min-width: 640px){.filters-bar__search-group.sc-ir-fiscal-documents-filters{flex-direction:row;flex-wrap:wrap;align-items:center}.filters-bar__type-group.sc-ir-fiscal-documents-filters{width:auto}.filters-bar__status-select.sc-ir-fiscal-documents-filters{flex:0 1 180px;min-width:160px}.filters-bar__folio-select.sc-ir-fiscal-documents-filters{flex:1 1 220px;width:auto}.filters-bar__search-actions.sc-ir-fiscal-documents-filters{flex:1 1 260px;width:auto}.filters-bar__search-actions--wide.sc-ir-fiscal-documents-filters{flex-basis:400px}}@media (min-width: 1024px){.filters-bar__search-group.sc-ir-fiscal-documents-filters{flex-wrap:nowrap}.filters-bar__type-group.sc-ir-fiscal-documents-filters{width:auto;flex:1 1 auto}.filters-bar__type-group.sc-ir-fiscal-documents-filters{flex:0 0 auto;flex-wrap:nowrap}.filters-bar__folio-select.sc-ir-fiscal-documents-filters{flex:0 1 220px}.filters-bar__search-actions.sc-ir-fiscal-documents-filters{flex:1 1 auto;max-width:320px}.filters-bar__search-actions--wide.sc-ir-fiscal-documents-filters{max-width:480px}}@media (min-width: 1280px){.filters-bar.sc-ir-fiscal-documents-filters{flex-direction:row;flex-wrap:wrap;align-items:center}.filters-bar__search-combo.sc-ir-fiscal-documents-filters{flex:auto}.filters-bar__dates.sc-ir-fiscal-documents-filters{width:auto;flex:0 0 auto;min-width:280px}.filters-bar__search-group.sc-ir-fiscal-documents-filters{flex:1;width:auto}}`;

const today = moment.hooks();
/** Sentinel option in the agent autocomplete meaning "no specific agent" (the default). */
const ALL_AGENTS_VALUE = 'all';
const allAgentsLabel = () => t.t('Lcz_AllAgents', { fallback: 'All agents' });
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
    searchBy: 'doc_nbr',
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
        { label: t.t('Lcz_AllDocumentTypes', { fallback: 'All document types' }), value: 'all' },
        { label: t.t('Lcz_Invoices', { fallback: 'Invoices' }), value: enums.FdTypes.Invoice },
        { label: t.t('Lcz_Receipts', { fallback: 'Receipts' }), value: enums.FdTypes.Receipt },
        { label: t.t('Lcz_CreditNotes', { fallback: 'Credit Notes' }), value: enums.FdTypes.CreditNote },
        // { label: 'Debit Notes', value: FdTypes.DebitNote },
        { label: t.t('Lcz_CreditReceipt', { fallback: 'Credit Receipt' }), value: enums.FdTypes.CreditReceipt },
    ];
    get folioOptions() {
        return [
            { label: t.t('Lcz_AllFolios', { fallback: 'All folios' }), value: 'all' },
            { label: t.t('Lcz_AgentFolio', { fallback: 'Agent folio' }), value: 'agent' },
            { label: t.t('Lcz_GuestFolio', { fallback: 'Guest folio' }), value: 'guest' },
        ];
    }
    get filteredAgents() {
        const q = this.agentSearch.trim().toLowerCase();
        if (!q)
            return this.agents;
        return this.agents.filter(a => a.name.toLowerCase().includes(q));
    }
    get searchPlaceholder() {
        return this.draft.folioType === 'guest'
            ? this.draft?.searchBy === 'booking_nbr'
                ? t.t('Lcz_SearchByBookingNumber', { fallback: 'Search by booking number' })
                : t.t('Lcz_SearchByDocNumber', { fallback: 'Search by doc number' })
            : t.t('Lcz_SearchByDocNumber', { fallback: 'Search by doc number' });
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
        this.updateDraft({ folioType, agentId: null, guestId: null, searchBy: 'doc_nbr' });
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
        return (index.h("form", { key: '2610f4e9454f2c155ab160e704e42a4d1cb332f9', onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                this.applyFilters.emit({ ...this.draft, export: submitter?.value === 'export' });
            } }, index.h("div", { key: '9ed0b4a7225aeef74325768633aa0d71fbd89bba', class: "filters-bar" }, index.h("ir-validator", { key: 'd671a338c875404edccbb238e855851b1f463d6b', value: this.draft?.fromDate || this.draft?.toDate, schema: types.stringType().nonempty(), class: "filters-bar__dates" }, index.h("ir-date-range-filter", { key: 'bc7d359091a0a494a32cb61d4dd3abd847b66d69', maxDate: today.format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.draft.fromDate, toDate: this.draft.toDate, onDatesChanged: e => {
                this.updateDraft({ fromDate: e.detail.from, toDate: e.detail.to });
                this.filterChanged.emit({ ...this.draft, fromDate: e.detail.from, toDate: e.detail.to });
            } })), index.h("div", { key: '136ef9f33010c424db6aba6e2069c6144b306b15', class: "filters-bar__search-group" }, index.h("div", { key: '88152716275d9d7aa0c082148b83c922dafb6d57', class: "filters-bar__type-group" }, index.h("wa-select", { key: 'd551d57365051ca643bc693fd63df1b2f9088b8c', class: "filters-bar__status-select", value: this.draft.type, defaultValue: this.draft.type, onchange: e => this.updateDraft({ type: e.target.value }), size: "s", placeholder: t.t('Lcz_DocumentTypePlaceholder', { fallback: 'Document Type' }) }, this.typeOptions.map(option => (index.h("wa-option", { value: option.value, key: option.value }, option.label)))), index.h("wa-select", { key: '50ee8066110c37aa4fd334f86119616bd6061d53', class: "filters-bar__status-select", value: this.draft.folioType, defaultValue: this.draft.folioType, onchange: e => this.handleFolioTypeChange(e.target.value), size: "s", placeholder: t.t('Lcz_FoliosPlaceholder', { fallback: 'Folios' }) }, this.folioOptions.map(option => (index.h("wa-option", { value: option.value, key: option.value }, option.label))))), this.draft.folioType === 'agent' && (index.h("ir-autocomplete", { key: '54329e8d1dbc3b73327c23ea669cf10ad61c203c', class: "filters-bar__folio-select", size: "s", placeholder: t.t('Lcz_SelectAgentPlaceholder', { fallback: 'Select agent' }), withExpandIcon: true, value: this.draft.agentId ? (this.agents.find(a => a.id === this.draft.agentId)?.name ?? '') : allAgentsLabel(), "onText-change": (e) => {
                this.agentSearch = e.detail ?? '';
            }, "onCombobox-change": (e) => {
                this.agentSearch = '';
                const value = e.detail;
                this.updateDraft({ agentId: value && value !== ALL_AGENTS_VALUE ? Number(value) : null });
            } }, index.h("ir-autocomplete-option", { key: '102a5a3b01e8cd90b366a58fecf5ce1cd3bf91b6', label: allAgentsLabel(), value: ALL_AGENTS_VALUE }, allAgentsLabel()), this.filteredAgents.map(agent => (index.h("ir-autocomplete-option", { key: agent.id, label: agent.name, value: String(agent.id) }, agent.name))))), this.draft.folioType === 'guest' && (index.h("ir-picker", { key: 'c003832455f2279d507e05a0e4bb70abf89f25a0', class: "filters-bar__folio-select", size: "s", placeholder: t.t('Lcz_CustomerEmailOrNamePlaceholder', { fallback: 'Customer email or name' }), withClear: true, mode: "select-async", debounce: 500, loading: irInterceptor_store.isRequestPending('/Fetch_Exposed_Guests'), "onText-change": event => this.fetchGuests(event.detail), "onCombobox-select": this.handleGuestSelect.bind(this), "onCombobox-clear": () => {
                this.updateDraft({ guestId: null });
                this.applyFilters.emit(this.draft);
            } }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (index.h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        }))), index.h("div", { key: 'fc340b5c6b6523bc576724ddc8d1cc774715d59a', class: `filters-bar__search-actions${this.draft.folioType === 'guest' ? ' filters-bar__search-actions--wide' : ''}` }, index.h("div", { key: '340a841f9c154cfb74cc8f63ef961a9f54f0ad11', class: "filters-bar__search-combo" }, index.h("ir-input", { key: '2f02324683a473c312bab087edff9610231e96cc', class: `filters-bar__search-input${this.draft.folioType === 'guest' ? ' filters-bar__combo-input' : ''}`, placeholder: this.searchPlaceholder, value: this.draft.docNumber, "onText-change": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateDraft({ docNumber: e.detail });
            }, withClear: true, onInputCleared: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.applyFilters.emit({ ...this.draft, docNumber: '' });
            } }, index.h("wa-icon", { key: 'a19717bcbf9830df86903978527be92762a3421c', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), this.draft.folioType === 'guest' && (index.h("wa-select", { key: '689731166c80a2e92b7138b211642d8a78c85daa', class: "filters-bar__combo-select", size: "s", value: this.draft.searchBy, defaultValue: this.draft.searchBy, onchange: e => this.updateDraft({ searchBy: e.target.value }) }, index.h("wa-option", { key: '49dbb3d1c220a6bafefbd56f96ec30e610b9023a', value: "doc_nbr" }, t.t('Lcz_DocumentNumberOption', { fallback: 'Document number' })), index.h("wa-option", { key: 'dcd6233a4294e346537d8604a0e0117b2b157ce7', value: "booking_nbr" }, t.t('Lcz_BookingNumber', { fallback: 'Booking number' }))))), index.h("wa-tooltip", { key: 'c44d8ce332ded9b179155b9e387aea0236219ec0', for: "search-btn" }, t.t('Lcz_Search', { fallback: 'Search' })), index.h("ir-custom-button", { key: '69be133aeba145da50b028abd79b7fd071b1e5b3', id: "search-btn", loading: this.loading === 'search', class: "filters-bar__search-submit", value: "search", variant: "neutral", appearance: "outlined", type: "submit" }, index.h("wa-icon", { key: '16b841c6a30611c51b3eceb988bbdf046c15a1c7', name: "magnifying-glass" })), index.h("wa-tooltip", { key: '5836c86e365b08a3eab6cc31892f0a3a17c2d43d', for: "excel-btn" }, 'Export to excel'), index.h("ir-custom-button", { key: 'da4d1b79160f5c14ff88cad23c76dd3d983e5a06', disabled: !(this.draft?.fromDate || this.draft?.toDate), id: "excel-btn", variant: "neutral", loading: this.loading === 'export', appearance: "outlined", type: "submit", value: "export" }, index.h("wa-icon", { key: '1d6a1149469f6feb3a282fe10cdaead5998472fc', name: "file-excel", variant: "regular" })))))));
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

const irFiscalDocumentsTableCss = () => `.sc-ir-fiscal-documents-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-fiscal-documents-table{overflow-x:auto}.table--container.sc-ir-fiscal-documents-table,.data-table.sc-ir-fiscal-documents-table{height:100%}.ir-table-row.sc-ir-fiscal-documents-table td.sc-ir-fiscal-documents-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-fiscal-documents-table td.sc-ir-fiscal-documents-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-fiscal-documents-table tbody.sc-ir-fiscal-documents-table tr.sc-ir-fiscal-documents-table:last-child>td.sc-ir-fiscal-documents-table{border-bottom:0 !important}.cell--align-start.sc-ir-fiscal-documents-table{text-align:start !important}.cell--align-center.sc-ir-fiscal-documents-table{text-align:center !important}.cell--align-end.sc-ir-fiscal-documents-table{text-align:end !important}.table.sc-ir-fiscal-documents-table thead.sc-ir-fiscal-documents-table th.sc-ir-fiscal-documents-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-fiscal-documents-table thead.sc-ir-fiscal-documents-table th.sc-ir-fiscal-documents-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-fiscal-documents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-fiscal-documents-table,.ir-table-row.sc-ir-fiscal-documents-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-fiscal-documents-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-fiscal-documents-table thead.sc-ir-fiscal-documents-table th.sortable.sc-ir-fiscal-documents-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-fiscal-documents-table thead.sc-ir-fiscal-documents-table th.sortable.sc-ir-fiscal-documents-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-fiscal-documents-table thead.sc-ir-fiscal-documents-table th.sortable.sc-ir-fiscal-documents-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-fiscal-documents-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-fiscal-documents-table svg.sc-ir-fiscal-documents-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-fiscal-documents-table:hover td.sc-ir-fiscal-documents-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-fiscal-documents-table:hover td.sc-ir-fiscal-documents-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-fiscal-documents-table:active td.sc-ir-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-fiscal-documents-table td.sc-ir-fiscal-documents-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-fiscal-documents-table:hover td.sc-ir-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-fiscal-documents-table:active td.sc-ir-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-fiscal-documents-table .empty-row.sc-ir-fiscal-documents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-fiscal-documents-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-fiscal-documents-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}.sc-ir-fiscal-documents-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60dvh;max-width:1920px;background-color:var(--wa-color-surface-default);border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9)}.fiscal-table__heading.sc-ir-fiscal-documents-table:last-child{border-inline-end:0}.fiscal-table__heading--numeric.sc-ir-fiscal-documents-table,.fiscal-table__cell--numeric.sc-ir-fiscal-documents-table{text-align:end !important}.ir-table-row.--is-draft.sc-ir-fiscal-documents-table>td.sc-ir-fiscal-documents-table{background-color:var(--wa-color-warning-fill-quiet) !important}.fd_ss.sc-ir-fiscal-documents-table{color:var(--wa-color-text-quiet);margin:0;padding:0;font-size:var(--wa-font-size-s)}.fiscal-table__date-cell.sc-ir-fiscal-documents-table{display:flex;align-items:baseline;gap:0.5rem}.fiscal-table__status-tag.sc-ir-fiscal-documents-table{text-transform:capitalize}.fiscal-table__doc-number.sc-ir-fiscal-documents-table::part(base),.fiscal-table__doc-number.sc-ir-fiscal-documents-table [part~="base"]{padding:0.05rem 0.5rem;height:auto}.fiscal-table__cell--doc-number.sc-ir-fiscal-documents-table{--ir-cell-padding:0.5rem}.fiscal-table__heading--actions.sc-ir-fiscal-documents-table,.fiscal-table__cell--actions.sc-ir-fiscal-documents-table{text-align:center !important}.fiscal-table__action-trigger.sc-ir-fiscal-documents-table::part(base),.fiscal-table__action-trigger.sc-ir-fiscal-documents-table [part~="base"]{width:24px;height:24px}.fiscal-table__action-danger.sc-ir-fiscal-documents-table{color:var(--wa-color-danger-fill-loud, #dc2626)}.fiscal-table__cell--zero.sc-ir-fiscal-documents-table{color:var(--wa-color-text-quiet, #9ca3af)}.fiscal-table__empty.sc-ir-fiscal-documents-table{text-align:center;color:var(--wa-color-text-quiet);font-size:0.875rem;padding:1.25rem}.fiscal-table__date-prompt.sc-ir-fiscal-documents-table{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;flex:1;padding:3rem 2rem;text-align:center}.fiscal-table__date-prompt-icon.sc-ir-fiscal-documents-table{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.fiscal-table__date-prompt-title.sc-ir-fiscal-documents-table{margin:0;font-size:0.9375rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}`;

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
            map[entry.CODE_NAME] = utils.getEntryValue({ entry, language: locale_controller.LocaleController.language });
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
    getCredit(info) {
        const { FD_TYPE_CODE } = info.row.original;
        const value = info.getValue();
        switch (FD_TYPE_CODE) {
            case enums.FdTypes.CreditReceipt:
                return -Math.abs(value);
            case enums.FdTypes.Receipt:
                return Math.abs(value);
            default:
                return value;
        }
    }
    get columns() {
        const base = [
            this.columnHelper.accessor('DOC_DATE', {
                header: t.t('Lcz_DateLabel', { fallback: 'Date' }),
                cell: info => {
                    const row = info.row.original;
                    const date = irDate.formatDate(info.getValue(), 'MMM DD, YYYY');
                    return (index.h("div", { class: "fiscal-table__date-cell" }, index.h("p", { class: "m-0 p-0" }, date), row.DOC_HOUR != null && row.DOC_MINUTE != null && index.h("p", { class: "fd_ss" }, functions._formatTime(String(row.DOC_HOUR), String(row.DOC_MINUTE)))));
                },
                enableSorting: true,
            }),
            this.columnHelper.accessor('DOC_NUMBER', {
                header: t.t('Lcz_DocNumber', { fallback: 'Doc Number' }),
                cell: info => {
                    const row = info.row.original;
                    const value = info.getValue() ?? '';
                    if (!value)
                        return index.h("span", null);
                    // Agent documents open the city-ledger fiscal-document preview; guest
                    // documents open the invoice/credit-note PDF (ir-guest-billing flow).
                    const onClick = row.TARGET_TYPE === 'GUEST' ? () => this.emitGuestPreview(row) : () => this.emitPreview(row);
                    return (index.h("wa-button", { onClick: onClick, variant: "brand", appearance: "plain", class: "fiscal-table__doc-number" }, number.formatBookingNumber(value)));
                },
            }),
            this.columnHelper.accessor('DOC_TYPE', {
                id: 'type',
                header: t.t('Lcz_Type', { fallback: 'Type' }),
                cell: info => {
                    const code = info.row.original.FD_TYPE_CODE;
                    // Display the localized `_FD_TYPE` label, falling back to the raw code.
                    const label = (code && this.fdTypeLabels[code === 'RFND' ? enums.FdTypes.CreditReceipt : code]) || code || '';
                    return index.h("span", null, label);
                },
            }),
        ];
        // Identity / booking columns depend on the folio scope.
        const identityCols = [];
        if (this.showAgentName && this.rows.some(r => r.TARGET_TYPE === 'AGENT')) {
            identityCols.push(this.columnHelper.accessor('AGENT_NAME', {
                id: 'agentName',
                header: t.t('Lcz_Agent', { fallback: 'Agent' }),
                cell: info => index.h("span", null, info.getValue() ?? ''),
            }));
        }
        if (this.showGuestName && this.rows.some(r => r.TARGET_TYPE === 'GUEST')) {
            identityCols.push(this.columnHelper.accessor('GUEST_NAME', {
                id: 'guestName',
                header: t.t('Lcz_Guest', { fallback: 'Guest' }),
                cell: info => index.h("span", null, info.getValue() ?? ''),
            }));
        }
        identityCols.push(this.columnHelper.accessor('BOOKING_NUMBER', {
            id: 'bookingNumber',
            header: t.t('Lcz_BookingNumberColumn', { fallback: 'Booking #' }),
            cell: info => {
                const bookingNbr = info.getValue();
                if (!bookingNbr)
                    return index.h("span", null);
                return (index.h("wa-button", { onClick: () => this.openBookingDetails.emit(String(bookingNbr)), variant: "brand", appearance: "plain", class: "fiscal-table__doc-number" }, bookingNbr));
            },
        }));
        if (!this.taxableOnly) {
            identityCols.push(this.columnHelper.accessor('DEBIT', {
                header: t.t('Lcz_DebitColumn', { fallback: 'Debit' }),
                cell: info => index.h("span", null, this.renderMoney(info.getValue())),
            }));
            identityCols.push(this.columnHelper.accessor('CREDIT', {
                header: t.t('Lcz_CreditColumn', { fallback: 'Credit' }),
                cell: info => index.h("span", null, this.renderMoney(this.getCredit(info))),
            }));
        }
        else {
            identityCols.push(this.columnHelper.accessor('NET_AMOUNT', {
                header: t.t('Lcz_NetAmount', { fallback: 'Net amount' }),
                cell: info => index.h("span", null, this.renderMoney(info.getValue())),
            }));
            identityCols.push(this.columnHelper.accessor('TAX_AMOUNT', {
                header: t.t('Lcz_TaxAmount', { fallback: 'Tax amount' }),
                cell: info => index.h("span", null, this.renderMoney(info.getValue())),
            }));
            identityCols.push(this.columnHelper.accessor('TOTAL_AMOUNT', {
                header: t.t('Lcz_Total', { fallback: 'Total' }),
                cell: info => this.renderMoney(info.getValue()),
            }));
        }
        return [
            ...base,
            ...identityCols,
            this.columnHelper.display({
                id: 'actions',
                header: t.t('Lcz_Action', { fallback: 'Action' }),
                cell: info => {
                    const row = info.row.original;
                    return (index.h("ir-custom-button", { appearance: "plain", onClickHandler: () => {
                            if (row.TARGET_TYPE === 'GUEST') {
                                this.emitGuestPreview(row);
                            }
                            else {
                                this.emitPreview(row);
                            }
                        }, variant: "neutral" }, index.h("wa-icon", { name: "eye" })));
                },
                enableSorting: false,
            }),
        ];
    }
    renderMoney(value) {
        if (!value)
            return index.h("span", { class: "fiscal-table__cell--zero" });
        return index.h("span", null, number.formatAmount(calendarData.calendar_data?.property?.currency?.symbol, value));
    }
    render() {
        if (!this.hasFetched) {
            const hasDate = !!(this.fromDate || this.toDate);
            return (index.h(index.Host, null, index.h("div", { class: "fiscal-table__date-prompt" }, index.h("div", { class: "fiscal-table__date-prompt-icon" }, index.h("wa-icon", { name: "calendar-days" })), index.h("p", { class: "fiscal-table__date-prompt-title" }, t.t('Lcz_SelectDateRangeToGetStarted', { fallback: 'Select a date range to get started' })), hasDate && (index.h("wa-animation", { iterations: 1, play: true, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, index.h("ir-custom-button", { size: "s", variant: "brand", onClickHandler: () => this.fetchRequested.emit() }, index.h("wa-icon", { slot: "start", name: "magnifying-glass" }), t.t('Lcz_LoadDocuments', { fallback: 'Load Documents' })))))));
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
            } }, useTable.flexRender(cell.column.columnDef.cell, cell.getContext()))))))), table.getRowModel().rows.length === 0 && (index.h("tr", null, index.h("td", { class: "empty-row", colSpan: columns.length }, this.isLoading ? index.h("ir-spinner", null) : t.t('Lcz_NoFiscalDocumentsMatchFilters', { fallback: 'No fiscal documents match the current filters.' }))))))), this.totalRecords > 0 && (index.h("ir-pagination", { class: "data-table--pagination", showing: showing, total: this.totalRecords, pages: totalPages, pageSize: this.pageSize, currentPage: this.currentPage, allowPageSizeChange: true, pageSizes: PAGE_SIZES, recordLabel: "documents", onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) }))));
    }
};
IrFiscalDocumentsTable.style = irFiscalDocumentsTableCss();

exports.ir_fiscal_documents_filters = IrFiscalDocumentsFilters;
exports.ir_fiscal_documents_table = IrFiscalDocumentsTable;
