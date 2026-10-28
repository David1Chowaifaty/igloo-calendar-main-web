import { FdTypes } from "../../../types/enums";
import { h } from "@stencil/core";
import moment from "moment";
import { z } from "zod";
import { AgentsService } from "../../../services/agents/agents.service";
import { BookingService } from "../../../services/booking-service/booking.service";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { t } from "../../../services/locale/t";
const today = moment();
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
export class IrFiscalDocumentsFilters {
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
        return (h("form", { key: 'cdbcbfb166cd4d14e75eec95ed9e26f82fc3dcbd', onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                this.applyFilters.emit({ ...this.draft, export: submitter?.value === 'export' });
            } }, h("div", { key: 'ca17bba1cf3b41f569af49a38c054bb6d9508f24', class: "filters-bar" }, h("ir-validator", { key: 'a8387f90aed402d5f7db40c0fa03e7621b160cd8', value: this.draft?.fromDate || this.draft?.toDate, schema: z.string().nonempty(), class: "filters-bar__dates" }, h("ir-date-range-filter", { key: '9b65f66241918c15a858c6f5112ce946a9cd188e', maxDate: today.format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.draft.fromDate, toDate: this.draft.toDate, onDatesChanged: e => {
                this.updateDraft({ fromDate: e.detail.from, toDate: e.detail.to });
                this.filterChanged.emit({ ...this.draft, fromDate: e.detail.from, toDate: e.detail.to });
            } })), h("div", { key: '2fd5be38d4e97b5e513aa3fe4022dc259246fcb4', class: "filters-bar__search-group" }, h("div", { key: '7429f19ef0be813c4acddbb1e6ce877ed4f3f33d', class: "filters-bar__type-group" }, h("wa-select", { key: 'f0894e36aae9b808ac383b0a20a0deecedc68325', class: "filters-bar__status-select", value: this.draft.type, defaultValue: this.draft.type, onchange: e => this.updateDraft({ type: e.target.value }), size: "s", placeholder: t('Lcz_DocumentTypePlaceholder', { fallback: 'Document Type' }) }, this.typeOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("wa-select", { key: '5d02c7361f0d4053c18fb48a19aa737e95c2ed90', class: "filters-bar__status-select", value: this.draft.folioType, defaultValue: this.draft.folioType, onchange: e => this.handleFolioTypeChange(e.target.value), size: "s", placeholder: t('Lcz_FoliosPlaceholder', { fallback: 'Folios' }) }, this.folioOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label))))), this.draft.folioType === 'agent' && (h("ir-autocomplete", { key: 'd7bb49cb43a6ce249152fc3fc97b837ee8d7554c', class: "filters-bar__folio-select", size: "s", placeholder: t('Lcz_SelectAgentPlaceholder', { fallback: 'Select agent' }), withExpandIcon: true, value: this.draft.agentId ? (this.agents.find(a => a.id === this.draft.agentId)?.name ?? '') : allAgentsLabel(), "onText-change": (e) => {
                this.agentSearch = e.detail ?? '';
            }, "onCombobox-change": (e) => {
                this.agentSearch = '';
                const value = e.detail;
                this.updateDraft({ agentId: value && value !== ALL_AGENTS_VALUE ? Number(value) : null });
            } }, h("ir-autocomplete-option", { key: '31739c783fd26fd1b8777d80b6245239ce252c73', label: allAgentsLabel(), value: ALL_AGENTS_VALUE }, allAgentsLabel()), this.filteredAgents.map(agent => (h("ir-autocomplete-option", { key: agent.id, label: agent.name, value: String(agent.id) }, agent.name))))), this.draft.folioType === 'guest' && (h("ir-picker", { key: '6c588c904c7aa476545c011e0ee52754a7195a3a', class: "filters-bar__folio-select", size: "s", placeholder: t('Lcz_CustomerEmailOrNamePlaceholder', { fallback: 'Customer email or name' }), withClear: true, mode: "select-async", debounce: 500, loading: isRequestPending('/Fetch_Exposed_Guests'), "onText-change": event => this.fetchGuests(event.detail), "onCombobox-select": this.handleGuestSelect.bind(this), "onCombobox-clear": () => {
                this.updateDraft({ guestId: null });
                this.applyFilters.emit(this.draft);
            } }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        }))), h("div", { key: '4e17b3b674ec2e9ba05062a48a1539c07e878ebc', class: `filters-bar__search-actions${this.draft.folioType === 'guest' ? ' filters-bar__search-actions--wide' : ''}` }, h("div", { key: 'cdc5ae0fb956b013f7aa296dee6b78a97637489d', class: "filters-bar__search-combo" }, h("ir-input", { key: 'e15cf2d17a7448e8618bc8b92fd05e85fde0d3bc', class: `filters-bar__search-input${this.draft.folioType === 'guest' ? ' filters-bar__combo-input' : ''}`, placeholder: this.searchPlaceholder, value: this.draft.docNumber, "onText-change": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateDraft({ docNumber: e.detail });
            }, withClear: true, onInputCleared: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.applyFilters.emit({ ...this.draft, docNumber: '' });
            } }, h("wa-icon", { key: '9b2617804390f6ea98704039c0e43b23114aaf75', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), this.draft.folioType === 'guest' && (h("wa-select", { key: '9ddae0dde7e4d3831d264761be25f5a8ebb833c6', class: "filters-bar__combo-select", size: "s", value: this.draft.searchBy, defaultValue: this.draft.searchBy, onchange: e => this.updateDraft({ searchBy: e.target.value }) }, h("wa-option", { key: 'a802b5234c041fb9795499e50a74a13867e2aacd', value: "doc_nbr" }, t('Lcz_DocumentNumberOption', { fallback: 'Document number' })), h("wa-option", { key: '0b882be2b6091fdf15a943dfc3bbb4a455b6e3d7', value: "booking_nbr" }, t('Lcz_BookingNumber', { fallback: 'Booking number' }))))), h("wa-tooltip", { key: 'b52c918a1c0e8724bb362b2adde173b6c0b62893', for: "search-btn" }, t('Lcz_Search', { fallback: 'Search' })), h("ir-custom-button", { key: '50bc61aa82fbd3af9073869384ec9c38dae79355', id: "search-btn", loading: this.loading === 'search', class: "filters-bar__search-submit", value: "search", variant: "neutral", appearance: "outlined", type: "submit" }, h("wa-icon", { key: '6dcfb7c024a5e50342f62a838bc96d8a045c2a5a', name: "magnifying-glass" })), h("wa-tooltip", { key: 'd08a0755cca2e28496c858a5004ee857abdd4e9b', for: "excel-btn" }, t('Lcz_ExportToExcel', { fallback: 'Export to excel' })), h("ir-custom-button", { key: '89b8a8ad5397c9dce4f9e62d4a7d822430a236fa', disabled: !(this.draft?.fromDate || this.draft?.toDate), id: "excel-btn", variant: "neutral", loading: this.loading === 'export', appearance: "outlined", type: "submit", value: "export" }, h("wa-icon", { key: 'a31d7f7605b3901722db9c72e73a3e0bb56483eb', name: "file-excel", variant: "regular" })))))));
    }
    static get is() { return "ir-fiscal-documents-filters"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-fiscal-documents-filters.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-fiscal-documents-filters.css"]
        };
    }
    static get properties() {
        return {
            "propertyId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "property-id"
            },
            "loading": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'search' | 'export'",
                    "resolved": "\"export\" | \"search\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "loading"
            },
            "filters": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "FiscalDocumentFilters",
                    "resolved": "FiscalDocumentFilters",
                    "references": {
                        "FiscalDocumentFilters": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-fiscal-documents/types.ts::FiscalDocumentFilters",
                            "referenceLocation": "FiscalDocumentFilters"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Initial filter values. Edits are kept locally and only sent on submit."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{ ...DEFAULT_FILTERS }"
            }
        };
    }
    static get states() {
        return {
            "draft": {},
            "agents": {},
            "agentSearch": {},
            "guests": {}
        };
    }
    static get events() {
        return [{
                "method": "applyFilters",
                "name": "applyFilters",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "FiscalDocumentFilters",
                    "resolved": "FiscalDocumentFilters",
                    "references": {
                        "FiscalDocumentFilters": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-fiscal-documents/types.ts::FiscalDocumentFilters",
                            "referenceLocation": "FiscalDocumentFilters"
                        }
                    }
                }
            }, {
                "method": "filterChanged",
                "name": "filterChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "FiscalDocumentFilters",
                    "resolved": "FiscalDocumentFilters",
                    "references": {
                        "FiscalDocumentFilters": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-fiscal-documents/types.ts::FiscalDocumentFilters",
                            "referenceLocation": "FiscalDocumentFilters"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "filters",
                "methodName": "handleFiltersChange"
            }, {
                "propName": "propertyId",
                "methodName": "handlePropertyIdChange"
            }];
    }
}
