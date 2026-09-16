import { r as registerInstance, c as createEvent, h, H as Host } from './index-CeHdrJeH.js';
import { F as FdTypes } from './enums-CcLtXwvz.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { A as AgentsService } from './agents.service-CScn9mDQ.js';
import { B as BookingService } from './booking.service-CMmse-Np.js';
import { i as isRequestPending } from './ir-interceptor.store-302gZvQv.js';
import { t } from './t-Bk78Wumj.js';
import { s as stringType } from './types-BG9uwIsj.js';
import { c as calendar_data } from './calendar-data-BZeaTRgj.js';
import './booking.dto-FOZcMojD.js';
import { f as formatDate } from './ir-date-DFR8GVLZ.js';
import { a as formatBookingNumber, f as formatAmount } from './number-DegV2dS7.js';
import { d as getEntryValue } from './utils-Jf3si-tr.js';
import { c as createColumnHelper, u as useTable, f as flexRender, g as getSortedRowModel, a as getCoreRowModel } from './useTable-D3LS_BXH.js';
import { _ as _formatTime } from './functions-D_076Gzf.js';
import { L as LocaleController } from './locale.controller-DKzzcKD9.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './type-DUaIPoJQ.js';
import './IBooking-B-QQODPH.js';
import './utils-BtgW0txG.js';
import './booking-DuWdYels.js';
import './locales.store-CXJn6ls-.js';
import './commonSchemas-DZl_Ygcg.js';
import './language-observer-CHgzsZkY.js';

const irFiscalDocumentsFiltersCss = () => `.sc-ir-fiscal-documents-filters-h{display:block}.filters-bar.sc-ir-fiscal-documents-filters{display:flex;flex-direction:column;align-items:stretch;gap:0.75rem}.filters-bar__dates.sc-ir-fiscal-documents-filters{display:flex;align-items:center;width:100%}.filters-bar__date_picker.sc-ir-fiscal-documents-filters{width:100%}.filters-bar__search-group.sc-ir-fiscal-documents-filters{display:flex;flex-direction:column;gap:0.75rem;width:100%}.filters-bar__type-group.sc-ir-fiscal-documents-filters{display:flex;flex-wrap:wrap;align-items:center;gap:0.75rem;width:100%}.filters-bar__status-select.sc-ir-fiscal-documents-filters{flex:1 1 140px;min-width:0}.filters-bar__tax-switch.sc-ir-fiscal-documents-filters{flex:0 0 auto;white-space:nowrap}.filters-bar__proforma-switch.sc-ir-fiscal-documents-filters{flex:0 0 auto;white-space:nowrap}.filters-bar__folio-select.sc-ir-fiscal-documents-filters{width:100%}.filters-bar__search-actions.sc-ir-fiscal-documents-filters{display:flex;align-items:center;gap:0.5rem;width:100%}.filters-bar__search-input.sc-ir-fiscal-documents-filters{flex:1 1 auto;min-width:0}.filters-bar__search-submit.sc-ir-fiscal-documents-filters{flex:0 0 auto}.filters-bar__search-icon.sc-ir-fiscal-documents-filters{font-size:0.875rem;color:var(--wa-color-text-quiet, #9ca3af);flex-shrink:0}.filters-bar__search-combo.sc-ir-fiscal-documents-filters{display:flex;align-items:stretch;flex:1 1 auto;min-width:0}.filters-bar__combo-input.sc-ir-fiscal-documents-filters{flex:1 1 auto;min-width:0;position:relative;z-index:0;--wa-form-control-border-radius:var(--wa-border-radius-m, 0.375rem) 0 0 var(--wa-border-radius-m, 0.375rem)}.filters-bar__combo-input.sc-ir-fiscal-documents-filters:focus-within{z-index:2}.filters-bar__combo-select.sc-ir-fiscal-documents-filters{flex:0 0 auto;width:12rem;--wa-form-control-border-radius:0 var(--wa-border-radius-m, 0.375rem) var(--wa-border-radius-m, 0.375rem) 0;margin-inline-start:-1px}.sc-ir-fiscal-documents-filters:dir(rtl) .filters-bar__combo-input.sc-ir-fiscal-documents-filters,[dir='rtl'].sc-ir-fiscal-documents-filters .filters-bar__combo-input.sc-ir-fiscal-documents-filters{--wa-form-control-border-radius:0 var(--wa-border-radius-m, 0.375rem) var(--wa-border-radius-m, 0.375rem) 0}.sc-ir-fiscal-documents-filters:dir(rtl) .filters-bar__combo-select.sc-ir-fiscal-documents-filters,[dir='rtl'].sc-ir-fiscal-documents-filters .filters-bar__combo-select.sc-ir-fiscal-documents-filters{--wa-form-control-border-radius:var(--wa-border-radius-m, 0.375rem) 0 0 var(--wa-border-radius-m, 0.375rem)}@media (min-width: 640px){.filters-bar__search-group.sc-ir-fiscal-documents-filters{flex-direction:row;flex-wrap:wrap;align-items:center}.filters-bar__type-group.sc-ir-fiscal-documents-filters{width:auto}.filters-bar__status-select.sc-ir-fiscal-documents-filters{flex:0 1 180px;min-width:160px}.filters-bar__folio-select.sc-ir-fiscal-documents-filters{flex:1 1 220px;width:auto}.filters-bar__search-actions.sc-ir-fiscal-documents-filters{flex:1 1 260px;width:auto}.filters-bar__search-actions--wide.sc-ir-fiscal-documents-filters{flex-basis:400px}}@media (min-width: 1024px){.filters-bar__search-group.sc-ir-fiscal-documents-filters{flex-wrap:nowrap}.filters-bar__type-group.sc-ir-fiscal-documents-filters{width:auto;flex:1 1 auto}.filters-bar__type-group.sc-ir-fiscal-documents-filters{flex:0 0 auto;flex-wrap:nowrap}.filters-bar__folio-select.sc-ir-fiscal-documents-filters{flex:0 1 220px}.filters-bar__search-actions.sc-ir-fiscal-documents-filters{flex:1 1 auto;max-width:320px}.filters-bar__search-actions--wide.sc-ir-fiscal-documents-filters{max-width:480px}}@media (min-width: 1280px){.filters-bar.sc-ir-fiscal-documents-filters{flex-direction:row;flex-wrap:wrap;align-items:center}.filters-bar__search-combo.sc-ir-fiscal-documents-filters{flex:auto}.filters-bar__dates.sc-ir-fiscal-documents-filters{width:auto;flex:0 0 auto;min-width:280px}.filters-bar__search-group.sc-ir-fiscal-documents-filters{flex:1;width:auto}}`;

const today = hooks();
/** Sentinel option in the agent autocomplete meaning "no specific agent" (the default). */
const ALL_AGENTS_VALUE = 'all';
const allAgentsLabel = () => t('Lcz_AllAgents', { fallback: 'All agents' });
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
        { label: t('Lcz_AllDocumentTypes', { fallback: 'All document types' }), value: 'all' },
        { label: t('Lcz_Invoices', { fallback: 'Invoices' }), value: FdTypes.Invoice },
        { label: t('Lcz_Receipts', { fallback: 'Receipts' }), value: FdTypes.Receipt },
        { label: t('Lcz_CreditNotes', { fallback: 'Credit Notes' }), value: FdTypes.CreditNote },
        // { label: 'Debit Notes', value: FdTypes.DebitNote },
        { label: t('Lcz_CreditReceipt', { fallback: 'Credit Receipt' }), value: FdTypes.CreditReceipt },
    ];
    get folioOptions() {
        return [
            { label: t('Lcz_AllFolios', { fallback: 'All folios' }), value: 'all' },
            { label: t('Lcz_AgentFolio', { fallback: 'Agent folio' }), value: 'agent' },
            { label: t('Lcz_GuestFolio', { fallback: 'Guest folio' }), value: 'guest' },
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
                ? t('Lcz_SearchByBookingNumber', { fallback: 'Search by booking number' })
                : t('Lcz_SearchByDocNumber', { fallback: 'Search by doc number' })
            : t('Lcz_SearchByDocNumber', { fallback: 'Search by doc number' });
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
        return (h("form", { key: 'f61fe56436be7dc6683eda3515cc952e8a9fb944', onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                this.applyFilters.emit({ ...this.draft, export: submitter?.value === 'export' });
            } }, h("div", { key: 'cb6886a30ccab1b3ce3aac35a5c40a0582214606', class: "filters-bar" }, h("ir-validator", { key: 'ece99f8765a4dbc0d85dc1ebc7b0a94bab848e0f', value: this.draft?.fromDate || this.draft?.toDate, schema: stringType().nonempty(), class: "filters-bar__dates" }, h("ir-date-range-filter", { key: 'c807f6b11f096ef57bcb5fe1920f2222177280d0', maxDate: today.format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.draft.fromDate, toDate: this.draft.toDate, onDatesChanged: e => {
                this.updateDraft({ fromDate: e.detail.from, toDate: e.detail.to });
                this.filterChanged.emit({ ...this.draft, fromDate: e.detail.from, toDate: e.detail.to });
            } })), h("div", { key: '71a024b15dd55b77a3ce6a543410dcfb373afc1f', class: "filters-bar__search-group" }, h("div", { key: 'e455489d03ce555a06ffe0def0480f35f06b66f2', class: "filters-bar__type-group" }, h("wa-select", { key: '9027f709a1bae2b5e7c6f1cc784dd1f48e7ff258', class: "filters-bar__status-select", value: this.draft.type, defaultValue: this.draft.type, onchange: e => this.updateDraft({ type: e.target.value }), size: "s", placeholder: t('Lcz_DocumentTypePlaceholder', { fallback: 'Document Type' }) }, this.typeOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("wa-select", { key: '8783477c80c93221e3b09bb0ca53c54eec6044ac', class: "filters-bar__status-select", value: this.draft.folioType, defaultValue: this.draft.folioType, onchange: e => this.handleFolioTypeChange(e.target.value), size: "s", placeholder: t('Lcz_FoliosPlaceholder', { fallback: 'Folios' }) }, this.folioOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label))))), this.draft.folioType === 'agent' && (h("ir-autocomplete", { key: 'bc110f28cecab0b1f0f21d2d738f8761585d3e1a', class: "filters-bar__folio-select", size: "s", placeholder: t('Lcz_SelectAgentPlaceholder', { fallback: 'Select agent' }), withExpandIcon: true, value: this.draft.agentId ? (this.agents.find(a => a.id === this.draft.agentId)?.name ?? '') : allAgentsLabel(), "onText-change": (e) => {
                this.agentSearch = e.detail ?? '';
            }, "onCombobox-change": (e) => {
                this.agentSearch = '';
                const value = e.detail;
                this.updateDraft({ agentId: value && value !== ALL_AGENTS_VALUE ? Number(value) : null });
            } }, h("ir-autocomplete-option", { key: '78aa214ad75e81f30e67037d411f2c0f51866c54', label: allAgentsLabel(), value: ALL_AGENTS_VALUE }, allAgentsLabel()), this.filteredAgents.map(agent => (h("ir-autocomplete-option", { key: agent.id, label: agent.name, value: String(agent.id) }, agent.name))))), this.draft.folioType === 'guest' && (h("ir-picker", { key: '89d81007c6701429e1d7ff6e05f42dbaf31d7abd', class: "filters-bar__folio-select", size: "s", placeholder: t('Lcz_CustomerEmailOrNamePlaceholder', { fallback: 'Customer email or name' }), withClear: true, mode: "select-async", debounce: 500, loading: isRequestPending('/Fetch_Exposed_Guests'), "onText-change": event => this.fetchGuests(event.detail), "onCombobox-select": this.handleGuestSelect.bind(this), "onCombobox-clear": () => {
                this.updateDraft({ guestId: null });
                this.applyFilters.emit(this.draft);
            } }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        }))), h("div", { key: 'd674a49610ad950585ae078d382d7d57d4a4085b', class: `filters-bar__search-actions${this.draft.folioType === 'guest' ? ' filters-bar__search-actions--wide' : ''}` }, h("div", { key: 'c35c95760873cfe001bd77d49f6c1e7b1d35bbcb', class: "filters-bar__search-combo" }, h("ir-input", { key: '34d186eac18ac3162e4c576e29a7fa52324f246d', class: `filters-bar__search-input${this.draft.folioType === 'guest' ? ' filters-bar__combo-input' : ''}`, placeholder: this.searchPlaceholder, value: this.draft.docNumber, "onText-change": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateDraft({ docNumber: e.detail });
            }, withClear: true, onInputCleared: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.applyFilters.emit({ ...this.draft, docNumber: '' });
            } }, h("wa-icon", { key: '2b2e53590e18890cd1ab448e6e2590fc50ce8bca', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), this.draft.folioType === 'guest' && (h("wa-select", { key: '0189a99ddd0c86cd8d2d16fb3c727529e71a7d0d', class: "filters-bar__combo-select", size: "s", value: this.draft.searchBy, defaultValue: this.draft.searchBy, onchange: e => this.updateDraft({ searchBy: e.target.value }) }, h("wa-option", { key: '00dd398b888cef441276be6f199c64e7e2aed0a8', value: "doc_nbr" }, t('Lcz_DocumentNumberOption', { fallback: 'Document number' })), h("wa-option", { key: '8f5783492875aa1f456fcdfede1447b687e696ac', value: "booking_nbr" }, t('Lcz_BookingNumber', { fallback: 'Booking number' }))))), h("wa-tooltip", { key: '3db9c66784cb5dea93005785b5fa47e4cc1549c9', for: "search-btn" }, t('Lcz_Search', { fallback: 'Search' })), h("ir-custom-button", { key: 'a20b977d1b4fbdbafd7048d5fc7373bc0118cd32', id: "search-btn", loading: this.loading === 'search', class: "filters-bar__search-submit", value: "search", variant: "neutral", appearance: "outlined", type: "submit" }, h("wa-icon", { key: '395e17935531fcce5ad4ac68aaa20615a4498e22', name: "magnifying-glass" })), h("wa-tooltip", { key: '24f5d7d80c60d42f12298f2329594da700726a18', for: "excel-btn" }, 'Export to excel'), h("ir-custom-button", { key: '903f10273cd9c599e3b0bab4886a40bb3d5f16d6', disabled: !(this.draft?.fromDate || this.draft?.toDate), id: "excel-btn", variant: "neutral", loading: this.loading === 'export', appearance: "outlined", type: "submit", value: "export" }, h("wa-icon", { key: '5256aee084f9292d88a21aa92682fd74e4d88a69', name: "file-excel", variant: "regular" })))))));
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
            map[entry.CODE_NAME] = getEntryValue({ entry, language: LocaleController.language });
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
                header: t('Lcz_DateLabel', { fallback: 'Date' }),
                cell: info => {
                    const row = info.row.original;
                    const date = formatDate(info.getValue(), 'MMM DD, YYYY');
                    return (h("div", { class: "fiscal-table__date-cell" }, h("p", { class: "m-0 p-0" }, date), row.DOC_HOUR != null && row.DOC_MINUTE != null && h("p", { class: "fd_ss" }, _formatTime(String(row.DOC_HOUR), String(row.DOC_MINUTE)))));
                },
                enableSorting: true,
            }),
            this.columnHelper.accessor('DOC_NUMBER', {
                header: t('Lcz_DocNumber', { fallback: 'Doc Number' }),
                cell: info => {
                    const row = info.row.original;
                    const value = info.getValue() ?? '';
                    if (!value)
                        return h("span", null);
                    // Agent documents open the city-ledger fiscal-document preview; guest
                    // documents open the invoice/credit-note PDF (ir-guest-billing flow).
                    const onClick = row.TARGET_TYPE === 'GUEST' ? () => this.emitGuestPreview(row) : () => this.emitPreview(row);
                    return (h("wa-button", { onClick: onClick, variant: "brand", appearance: "plain", class: "fiscal-table__doc-number" }, formatBookingNumber(value)));
                },
            }),
            this.columnHelper.accessor('DOC_TYPE', {
                id: 'type',
                header: t('Lcz_Type', { fallback: 'Type' }),
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
                header: t('Lcz_Agent', { fallback: 'Agent' }),
                cell: info => h("span", null, info.getValue() ?? ''),
            }));
        }
        if (this.showGuestName && this.rows.some(r => r.TARGET_TYPE === 'GUEST')) {
            identityCols.push(this.columnHelper.accessor('GUEST_NAME', {
                id: 'guestName',
                header: t('Lcz_Guest', { fallback: 'Guest' }),
                cell: info => h("span", null, info.getValue() ?? ''),
            }));
        }
        identityCols.push(this.columnHelper.accessor('BOOKING_NUMBER', {
            id: 'bookingNumber',
            header: t('Lcz_BookingNumberColumn', { fallback: 'Booking #' }),
            cell: info => {
                const bookingNbr = info.getValue();
                if (!bookingNbr)
                    return h("span", null);
                return (h("wa-button", { onClick: () => this.openBookingDetails.emit(String(bookingNbr)), variant: "brand", appearance: "plain", class: "fiscal-table__doc-number" }, bookingNbr));
            },
        }));
        if (!this.taxableOnly) {
            identityCols.push(this.columnHelper.accessor('DEBIT', {
                header: t('Lcz_DebitColumn', { fallback: 'Debit' }),
                cell: info => h("span", null, this.renderMoney(info.getValue())),
            }));
            identityCols.push(this.columnHelper.accessor('CREDIT', {
                header: t('Lcz_CreditColumn', { fallback: 'Credit' }),
                cell: info => h("span", null, this.renderMoney(this.getCredit(info))),
            }));
        }
        else {
            identityCols.push(this.columnHelper.accessor('NET_AMOUNT', {
                header: t('Lcz_NetAmount', { fallback: 'Net amount' }),
                cell: info => h("span", null, this.renderMoney(info.getValue())),
            }));
            identityCols.push(this.columnHelper.accessor('TAX_AMOUNT', {
                header: t('Lcz_TaxAmount', { fallback: 'Tax amount' }),
                cell: info => h("span", null, this.renderMoney(info.getValue())),
            }));
            identityCols.push(this.columnHelper.accessor('TOTAL_AMOUNT', {
                header: t('Lcz_Total', { fallback: 'Total' }),
                cell: info => this.renderMoney(info.getValue()),
            }));
        }
        return [
            ...base,
            ...identityCols,
            this.columnHelper.display({
                id: 'actions',
                header: t('Lcz_Action', { fallback: 'Action' }),
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
            return (h(Host, null, h("div", { class: "fiscal-table__date-prompt" }, h("div", { class: "fiscal-table__date-prompt-icon" }, h("wa-icon", { name: "calendar-days" })), h("p", { class: "fiscal-table__date-prompt-title" }, t('Lcz_SelectDateRangeToGetStarted', { fallback: 'Select a date range to get started' })), hasDate && (h("wa-animation", { iterations: 1, play: true, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { size: "s", variant: "brand", onClickHandler: () => this.fetchRequested.emit() }, h("wa-icon", { slot: "start", name: "magnifying-glass" }), t('Lcz_LoadDocuments', { fallback: 'Load Documents' })))))));
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
            } }, flexRender(cell.column.columnDef.cell, cell.getContext()))))))), table.getRowModel().rows.length === 0 && (h("tr", null, h("td", { class: "empty-row", colSpan: columns.length }, this.isLoading ? h("ir-spinner", null) : t('Lcz_NoFiscalDocumentsMatchFilters', { fallback: 'No fiscal documents match the current filters.' }))))))), this.totalRecords > 0 && (h("ir-pagination", { class: "data-table--pagination", showing: showing, total: this.totalRecords, pages: totalPages, pageSize: this.pageSize, currentPage: this.currentPage, allowPageSizeChange: true, pageSizes: PAGE_SIZES, recordLabel: "documents", onPageChange: event => this.handlePageChange(event), onPageSizeChange: event => this.handlePageSizeChange(event) }))));
    }
};
IrFiscalDocumentsTable.style = irFiscalDocumentsTableCss();

export { IrFiscalDocumentsFilters as ir_fiscal_documents_filters, IrFiscalDocumentsTable as ir_fiscal_documents_table };
