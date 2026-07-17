import { r as registerInstance, c as createEvent, h, H as Host } from './index-JbQjGrUG.js';
import { F as FdTypes } from './enums-QjeU2ajV.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { l as libExports } from './index-DeW5X45W.js';
import { A as AgentsService } from './agents.service-CfKXQqnt.js';
import { B as BookingService } from './booking.store-3Tubbm72.js';
import { i as isRequestPending } from './ir-interceptor.store-BiWSX1U0.js';
import { p as getEntryValue, i as formatAmount } from './utils-AafVtJtY.js';
import { c as createColumnHelper, u as useTable, f as flexRender, g as getSortedRowModel, a as getCoreRowModel } from './useTable-D3LS_BXH.js';
import { c as calendar_data } from './calendar-data-CRLrGQXE.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './type-D7rOPtKA.js';
import './booking-BamW7Ksy.js';
import './locales.store-CV07I3Cw.js';
import './index-CR94o8Bs.js';

const irFiscalDocumentsFiltersCss = () => `.sc-ir-fiscal-documents-filters-h{display:block}.filters-bar.sc-ir-fiscal-documents-filters{display:flex;flex-direction:column;align-items:stretch;gap:0.75rem}.filters-bar__dates.sc-ir-fiscal-documents-filters{display:flex;align-items:center;width:100%}.filters-bar__date_picker.sc-ir-fiscal-documents-filters{width:100%}.filters-bar__search-group.sc-ir-fiscal-documents-filters{display:flex;flex-direction:column;gap:0.75rem;width:100%}.filters-bar__type-group.sc-ir-fiscal-documents-filters{display:flex;flex-wrap:wrap;align-items:center;gap:0.75rem;width:100%}.filters-bar__status-select.sc-ir-fiscal-documents-filters{flex:1 1 140px;min-width:0}.filters-bar__tax-switch.sc-ir-fiscal-documents-filters{flex:0 0 auto;white-space:nowrap}.filters-bar__proforma-switch.sc-ir-fiscal-documents-filters{flex:0 0 auto;white-space:nowrap}.filters-bar__folio-select.sc-ir-fiscal-documents-filters{width:100%}.filters-bar__search-actions.sc-ir-fiscal-documents-filters{display:flex;align-items:center;gap:0.5rem;width:100%}.filters-bar__search-input.sc-ir-fiscal-documents-filters{flex:1 1 auto;min-width:0}.filters-bar__search-submit.sc-ir-fiscal-documents-filters{flex:0 0 auto}.filters-bar__search-icon.sc-ir-fiscal-documents-filters{font-size:0.875rem;color:var(--wa-color-text-quiet, #9ca3af);flex-shrink:0}.filters-bar__search-combo.sc-ir-fiscal-documents-filters{display:flex;align-items:stretch;flex:1 1 auto;min-width:0}.filters-bar__combo-input.sc-ir-fiscal-documents-filters{flex:1 1 auto;min-width:0;position:relative;z-index:0;--wa-form-control-border-radius:var(--wa-border-radius-m, 0.375rem) 0 0 var(--wa-border-radius-m, 0.375rem)}.filters-bar__combo-input.sc-ir-fiscal-documents-filters:focus-within{z-index:2}.filters-bar__combo-select.sc-ir-fiscal-documents-filters{flex:0 0 auto;width:12rem;--wa-form-control-border-radius:0 var(--wa-border-radius-m, 0.375rem) var(--wa-border-radius-m, 0.375rem) 0;margin-inline-start:-1px}.sc-ir-fiscal-documents-filters:dir(rtl) .filters-bar__combo-input.sc-ir-fiscal-documents-filters,[dir='rtl'].sc-ir-fiscal-documents-filters .filters-bar__combo-input.sc-ir-fiscal-documents-filters{--wa-form-control-border-radius:0 var(--wa-border-radius-m, 0.375rem) var(--wa-border-radius-m, 0.375rem) 0}.sc-ir-fiscal-documents-filters:dir(rtl) .filters-bar__combo-select.sc-ir-fiscal-documents-filters,[dir='rtl'].sc-ir-fiscal-documents-filters .filters-bar__combo-select.sc-ir-fiscal-documents-filters{--wa-form-control-border-radius:var(--wa-border-radius-m, 0.375rem) 0 0 var(--wa-border-radius-m, 0.375rem)}@media (min-width: 640px){.filters-bar__search-group.sc-ir-fiscal-documents-filters{flex-direction:row;flex-wrap:wrap;align-items:center}.filters-bar__type-group.sc-ir-fiscal-documents-filters{width:auto}.filters-bar__status-select.sc-ir-fiscal-documents-filters{flex:0 1 180px;min-width:160px}.filters-bar__folio-select.sc-ir-fiscal-documents-filters{flex:1 1 220px;width:auto}.filters-bar__search-actions.sc-ir-fiscal-documents-filters{flex:1 1 260px;width:auto}.filters-bar__search-actions--wide.sc-ir-fiscal-documents-filters{flex-basis:400px}}@media (min-width: 1024px){.filters-bar__search-group.sc-ir-fiscal-documents-filters{flex-wrap:nowrap}.filters-bar__type-group.sc-ir-fiscal-documents-filters{width:auto;flex:1 1 auto}.filters-bar__type-group.sc-ir-fiscal-documents-filters{flex:0 0 auto;flex-wrap:nowrap}.filters-bar__folio-select.sc-ir-fiscal-documents-filters{flex:0 1 220px}.filters-bar__search-actions.sc-ir-fiscal-documents-filters{flex:1 1 auto;max-width:320px}.filters-bar__search-actions--wide.sc-ir-fiscal-documents-filters{max-width:480px}}@media (min-width: 1280px){.filters-bar.sc-ir-fiscal-documents-filters{flex-direction:row;flex-wrap:wrap;align-items:center}.filters-bar__search-combo.sc-ir-fiscal-documents-filters{flex:auto}.filters-bar__dates.sc-ir-fiscal-documents-filters{width:auto;flex:0 0 auto;min-width:280px}.filters-bar__search-group.sc-ir-fiscal-documents-filters{flex:1;width:auto}}`;

const today = hooks();
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
    searchBy: 'doc_nbr',
};
const IrFiscalDocumentsFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.applyFilters = createEvent(this, "applyFilters");
        this.filterChanged = createEvent(this, "filterChanged");
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
    agentsService = new AgentsService();
    bookingService = new BookingService();
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
        { label: 'All document types', value: 'all' },
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
        return this.draft.folioType === 'guest' ? `Search by ${this.draft?.searchBy === 'booking_nbr' ? 'booking number' : 'doc number'}` : 'Search by doc number';
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
        return (h("form", { key: '4f42ca85cc5fca7e948fcd1db8c2783c2ee8b57d', onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                this.applyFilters.emit({ ...this.draft, export: submitter?.value === 'export' });
            } }, h("div", { key: '27140af4cb71ae301711b8a9b563f12dba25c24e', class: "filters-bar" }, h("ir-validator", { key: '7b020fb3a9b6baa03b5ea95f875cd513f3901800', value: this.draft?.fromDate || this.draft?.toDate, schema: libExports.z.string().nonempty(), class: "filters-bar__dates" }, h("ir-date-range-filter", { key: 'cfb2222d63a97b7cab97e9d987bcc7a66487b4ef', maxDate: today.format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.draft.fromDate, toDate: this.draft.toDate, onDatesChanged: e => {
                this.updateDraft({ fromDate: e.detail.from, toDate: e.detail.to });
                this.filterChanged.emit({ ...this.draft, fromDate: e.detail.from, toDate: e.detail.to });
            } })), h("div", { key: 'a7549dc369b5f14e556c88ad098cfdc1a99e033f', class: "filters-bar__search-group" }, h("div", { key: '56daafe565b7bb3dfa27b0e3bf4620c5af04b440', class: "filters-bar__type-group" }, h("wa-select", { key: '79e38e3e4e038ee2662afbdef4b89625b1816ddf', class: "filters-bar__status-select", value: this.draft.type, defaultValue: this.draft.type, onchange: e => this.updateDraft({ type: e.target.value }), size: "s", placeholder: "Document Type" }, this.typeOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("wa-select", { key: '55eab9ad0aceb8ec5bf9bc2a3640105668e406a1', class: "filters-bar__status-select", value: this.draft.folioType, defaultValue: this.draft.folioType, onchange: e => this.handleFolioTypeChange(e.target.value), size: "s", placeholder: "Folios" }, this.folioOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label))))), this.draft.folioType === 'agent' && (h("ir-autocomplete", { key: '9fdcf55826b4267578c152227672d335dd19ffbb', class: "filters-bar__folio-select", size: "s", placeholder: "Select agent", withExpandIcon: true, value: this.draft.agentId ? (this.agents.find(a => a.id === this.draft.agentId)?.name ?? '') : ALL_AGENTS_LABEL, "onText-change": (e) => {
                this.agentSearch = e.detail ?? '';
            }, "onCombobox-change": (e) => {
                this.agentSearch = '';
                const value = e.detail;
                this.updateDraft({ agentId: value && value !== ALL_AGENTS_VALUE ? Number(value) : null });
            } }, h("ir-autocomplete-option", { key: 'bb6f5f99ccc3382bdac2e2e6011eeb7f2bde70a1', label: ALL_AGENTS_LABEL, value: ALL_AGENTS_VALUE }, ALL_AGENTS_LABEL), this.filteredAgents.map(agent => (h("ir-autocomplete-option", { key: agent.id, label: agent.name, value: String(agent.id) }, agent.name))))), this.draft.folioType === 'guest' && (h("ir-picker", { key: 'd0ae16db4073556b7b328a9ed1476cc0f97e752c', class: "filters-bar__folio-select", size: "s", placeholder: "Customer email or name", withClear: true, mode: "select-async", debounce: 500, loading: isRequestPending('/Fetch_Exposed_Guests'), "onText-change": event => this.fetchGuests(event.detail), "onCombobox-select": this.handleGuestSelect.bind(this), "onCombobox-clear": () => {
                this.updateDraft({ guestId: null });
                this.applyFilters.emit(this.draft);
            } }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        }))), h("div", { key: 'e220a9e82816f1d873fb8b91f87716250891d38a', class: `filters-bar__search-actions${this.draft.folioType === 'guest' ? ' filters-bar__search-actions--wide' : ''}` }, h("div", { key: 'dbe3a5d94a53228ee9f0176c730b6f177065a612', class: "filters-bar__search-combo" }, h("ir-input", { key: 'c8833e85ccb548f7d3e1525cebb7909af3d614f1', class: `filters-bar__search-input${this.draft.folioType === 'guest' ? ' filters-bar__combo-input' : ''}`, placeholder: this.searchPlaceholder, value: this.draft.docNumber, "onText-change": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateDraft({ docNumber: e.detail });
            }, withClear: true, onInputCleared: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.applyFilters.emit({ ...this.draft, docNumber: '' });
            } }, h("wa-icon", { key: 'fc004ad632257cbc31477c46f38a256cfbf28f6d', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), this.draft.folioType === 'guest' && (h("wa-select", { key: '5549457087c459963f7428774d123de2d53e6361', class: "filters-bar__combo-select", size: "s", value: this.draft.searchBy, defaultValue: this.draft.searchBy, onchange: e => this.updateDraft({ searchBy: e.target.value }) }, h("wa-option", { key: 'fb89861b087bf15c10621a8a6fefcc3dbe8191be', value: "doc_nbr" }, "Document number"), h("wa-option", { key: 'ce78e8bfcaec8ad2ae59b4bafe841a3db92e217a', value: "booking_nbr" }, "Booking number")))), h("wa-tooltip", { key: 'bfb658386ee1990dc0a496f7a19effbd9fbd1841', for: "search-btn" }, "Search"), h("ir-custom-button", { key: 'b5de48cd38d3805647c4a3b56697c55aee90b6cb', id: "search-btn", loading: this.loading === 'search', class: "filters-bar__search-submit", value: "search", variant: "neutral", appearance: "outlined", type: "submit" }, h("wa-icon", { key: 'c7255c8025cda6273def78878c8d40bd3a6ffe82', name: "magnifying-glass" })), h("wa-tooltip", { key: 'ef17a5b21fed937e1160ad69f238d59bb638bab1', for: "excel-btn" }, 'Export to excel'), h("ir-custom-button", { key: 'dbbcbcb993185715e2378cb4b098370f37efa84b', disabled: !(this.draft?.fromDate || this.draft?.toDate), id: "excel-btn", variant: "neutral", loading: this.loading === 'export', appearance: "outlined", type: "submit", value: "export" }, h("wa-icon", { key: '8c08e4aae53eee082e07de9a4d9b9f2339e6e281', name: "file-excel", variant: "regular" })))))));
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
        registerInstance(this, hostRef);
        this.clFiscalDocumentPreview = createEvent(this, "clFiscalDocumentPreview");
        this.fetchRequested = createEvent(this, "fetchRequested");
        this.requestPageChange = createEvent(this, "requestPageChange");
        this.requestPageSizeChange = createEvent(this, "requestPageSizeChange");
        this.openBookingDetails = createEvent(this, "openBookingDetails");
        this.guestDocumentPreview = createEvent(this, "guestDocumentPreview");
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
    columnHelper = createColumnHelper();
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
            map[entry.CODE_NAME] = getEntryValue({ entry, language: this.language });
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
            case FdTypes.CreditReceipt:
                return -Math.abs(value);
            case FdTypes.Receipt:
                return Math.abs(value);
            default:
                return value;
        }
    }
    get columns() {
        const base = [
            this.columnHelper.accessor('DOC_DATE', {
                header: 'Date',
                cell: info => hooks(info.getValue(), 'YYYY-MM-DD').format('MMM DD, YYYY') ?? '',
                enableSorting: true,
            }),
            this.columnHelper.accessor('DOC_NUMBER', {
                header: 'Doc Number',
                cell: info => {
                    const row = info.row.original;
                    const value = info.getValue() ?? '';
                    if (!value)
                        return h("span", null);
                    // Agent documents open the city-ledger fiscal-document preview; guest
                    // documents open the invoice/credit-note PDF (ir-guest-billing flow).
                    const onClick = row.TARGET_TYPE === 'GUEST' ? () => this.emitGuestPreview(row) : () => this.emitPreview(row);
                    return (h("wa-button", { onClick: onClick, variant: "brand", appearance: "plain", class: "fiscal-table__doc-number" }, value));
                },
            }),
            this.columnHelper.accessor('DOC_TYPE', {
                id: 'type',
                header: 'Type',
                cell: info => {
                    const code = info.row.original.FD_TYPE_CODE;
                    // Display the localized `_FD_TYPE` label, falling back to the raw code.
                    const label = (code && this.fdTypeLabels[code === 'RFND' ? FdTypes.CreditReceipt : code]) || code || '';
                    return h("span", null, label);
                },
            }),
        ];
        // Identity / booking columns depend on the folio scope.
        const identityCols = [];
        if (this.showAgentName && this.rows.some(r => r.TARGET_TYPE === 'AGENT')) {
            identityCols.push(this.columnHelper.accessor('AGENT_NAME', {
                id: 'agentName',
                header: 'Agent',
                cell: info => h("span", null, info.getValue() ?? ''),
            }));
        }
        if (this.showGuestName && this.rows.some(r => r.TARGET_TYPE === 'GUEST')) {
            identityCols.push(this.columnHelper.accessor('GUEST_NAME', {
                id: 'guestName',
                header: 'Guest',
                cell: info => h("span", null, info.getValue() ?? ''),
            }));
        }
        identityCols.push(this.columnHelper.accessor('BOOKING_NUMBER', {
            id: 'bookingNumber',
            header: 'Booking #',
            cell: info => {
                const bookingNbr = info.getValue();
                if (!bookingNbr)
                    return h("span", null);
                return (h("wa-button", { onClick: () => this.openBookingDetails.emit(String(bookingNbr)), variant: "brand", appearance: "plain", class: "fiscal-table__doc-number" }, bookingNbr));
            },
        }));
        if (!this.taxableOnly) {
            identityCols.push(this.columnHelper.accessor('DEBIT', {
                header: 'Debit',
                cell: info => h("span", null, this.renderMoney(info.getValue())),
            }));
            identityCols.push(this.columnHelper.accessor('CREDIT', {
                header: 'Credit',
                cell: info => h("span", null, this.renderMoney(this.getCredit(info))),
            }));
        }
        else {
            identityCols.push(this.columnHelper.accessor('NET_AMOUNT', {
                header: 'Net amount',
                cell: info => h("span", null, this.renderMoney(info.getValue())),
            }));
            identityCols.push(this.columnHelper.accessor('TAX_AMOUNT', {
                header: 'Tax amount',
                cell: info => h("span", null, this.renderMoney(info.getValue())),
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
                header: 'Action',
                cell: info => {
                    const row = info.row.original;
                    return (h("ir-custom-button", { appearance: "plain", onClickHandler: () => {
                            if (row.TARGET_TYPE === 'GUEST') {
                                this.emitGuestPreview(row);
                            }
                            else {
                                this.emitPreview(row);
                            }
                        }, variant: "neutral" }, h("wa-icon", { name: "eye" })));
                },
                enableSorting: false,
            }),
        ];
    }
    renderMoney(value) {
        if (!value)
            return h("span", { class: "fiscal-table__cell--zero" });
        return h("span", null, formatAmount(calendar_data?.property?.currency?.symbol, value));
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
        const numericColumnIds = ['TOTAL_AMOUNT', 'CREDIT', 'DEBIT', 'NET_AMOUNT', 'TAX_AMOUNT'];
        const totalPages = this.pageSize > 0 ? Math.ceil(this.totalRecords / this.pageSize) : 0;
        const showing = {
            from: this.totalRecords === 0 ? 0 : (this.currentPage - 1) * this.pageSize + 1,
            to: Math.min(this.currentPage * this.pageSize, this.totalRecords),
        };
        return (h(Host, null, h("div", { class: "table--container" }, h("table", { class: "table data-table" }, h("thead", null, table.getHeaderGroups().map(headerGroup => (h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (h("th", { key: header.id, class: {
                'fiscal-table__heading--numeric': numericColumnIds.includes(header.column.id),
                'fiscal-table__heading--actions': header.column.id === 'actions',
            } }, flexRender(header.column.columnDef.header, header.getContext())))))))), h("tbody", null, table.getRowModel().rows.map(row => (h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: {
                'fiscal-table__cell': true,
                'fiscal-table__cell--numeric': numericColumnIds.includes(cell.column.id),
                'fiscal-table__cell--actions': cell.column.id === 'actions',
                'fiscal-table__cell--doc-number': cell.column.id === 'DOC_NUMBER' || cell.column.id === 'bookingNumber',
            } }, flexRender(cell.column.columnDef.cell, cell.getContext()))))))), table.getRowModel().rows.length === 0 && (h("tr", null, h("td", { class: "empty-row", colSpan: columns.length }, this.isLoading ? h("ir-spinner", null) : 'No fiscal documents match the current filters.')))))), this.totalRecords > 0 && (h("ir-pagination", { class: "data-table--pagination", showing: showing, total: this.totalRecords, pages: totalPages, pageSize: this.pageSize, currentPage: this.currentPage, allowPageSizeChange: true, pageSizes: PAGE_SIZES, recordLabel: "documents", onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) }))));
    }
};
IrFiscalDocumentsTable.style = irFiscalDocumentsTableCss();

export { IrFiscalDocumentsFilters as ir_fiscal_documents_filters, IrFiscalDocumentsTable as ir_fiscal_documents_table };
