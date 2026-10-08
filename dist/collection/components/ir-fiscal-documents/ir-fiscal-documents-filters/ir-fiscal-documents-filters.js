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
        return (h("form", { key: 'bfa855b051f91a525c6f17e9d93bc314fa417f42', onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                this.applyFilters.emit({ ...this.draft, export: submitter?.value === 'export' });
            } }, h("div", { key: 'a826318c258a02db20e5b6746c69f46f8b0a0105', class: "filters-bar" }, h("ir-validator", { key: 'b7861f70ce24891f6e9aefeb22c5fa3e0cc7b1c7', value: this.draft?.fromDate || this.draft?.toDate, schema: z.string().nonempty(), class: "filters-bar__dates" }, h("ir-date-range-filter", { key: '77d12ce0e4155f2ac27d96177ec3f876cabb7962', maxDate: today.format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.draft.fromDate, toDate: this.draft.toDate, onDatesChanged: e => {
                this.updateDraft({ fromDate: e.detail.from, toDate: e.detail.to });
                this.filterChanged.emit({ ...this.draft, fromDate: e.detail.from, toDate: e.detail.to });
            } })), h("div", { key: '3ddb54c29e37efc52dbf6305a23b197747339e82', class: "filters-bar__search-group" }, h("div", { key: 'ee52c5777645a056bad928c7f5f0c7c2dc12ba28', class: "filters-bar__type-group" }, h("wa-select", { key: '20175c23a21cb70eda5ccc88ac7b719b0b0d15c2', class: "filters-bar__status-select", value: this.draft.type, defaultValue: this.draft.type, onchange: e => this.updateDraft({ type: e.target.value }), size: "s", placeholder: t('Lcz_DocumentTypePlaceholder', { fallback: 'Document Type' }) }, this.typeOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("wa-select", { key: '247e90dc6789a3216bb60a5203dca2370995608c', class: "filters-bar__status-select", value: this.draft.folioType, defaultValue: this.draft.folioType, onchange: e => this.handleFolioTypeChange(e.target.value), size: "s", placeholder: t('Lcz_FoliosPlaceholder', { fallback: 'Folios' }) }, this.folioOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label))))), this.draft.folioType === 'agent' && (h("ir-autocomplete", { key: '16241117c4a69f4145afa9315a8515baee5fdb82', class: "filters-bar__folio-select", size: "s", placeholder: t('Lcz_SelectAgentPlaceholder', { fallback: 'Select agent' }), withExpandIcon: true, value: this.draft.agentId ? (this.agents.find(a => a.id === this.draft.agentId)?.name ?? '') : allAgentsLabel(), "onText-change": (e) => {
                this.agentSearch = e.detail ?? '';
            }, "onCombobox-change": (e) => {
                this.agentSearch = '';
                const value = e.detail;
                this.updateDraft({ agentId: value && value !== ALL_AGENTS_VALUE ? Number(value) : null });
            } }, h("ir-autocomplete-option", { key: '077e27c41c69d0b9dfc24826d236ab0ef7eae423', label: allAgentsLabel(), value: ALL_AGENTS_VALUE }, allAgentsLabel()), this.filteredAgents.map(agent => (h("ir-autocomplete-option", { key: agent.id, label: agent.name, value: String(agent.id) }, agent.name))))), this.draft.folioType === 'guest' && (h("ir-picker", { key: '592c9da5b4f206749b61bd8051e306a40582bcf0', class: "filters-bar__folio-select", size: "s", placeholder: t('Lcz_CustomerEmailOrNamePlaceholder', { fallback: 'Customer email or name' }), withClear: true, mode: "select-async", debounce: 500, loading: isRequestPending('/Fetch_Exposed_Guests'), "onText-change": event => this.fetchGuests(event.detail), "onCombobox-select": this.handleGuestSelect.bind(this), "onCombobox-clear": () => {
                this.updateDraft({ guestId: null });
                this.applyFilters.emit(this.draft);
            } }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        }))), h("div", { key: '69acfce4af75f760f271dad4fe42bee23e5c2882', class: `filters-bar__search-actions${this.draft.folioType === 'guest' ? ' filters-bar__search-actions--wide' : ''}` }, h("div", { key: '14bbb3e46d2490b60e0c86396343242f36582bae', class: "filters-bar__search-combo" }, h("ir-input", { key: '0162f59b7ea53e1e145e014542e2243adeb828bc', class: `filters-bar__search-input${this.draft.folioType === 'guest' ? ' filters-bar__combo-input' : ''}`, placeholder: this.searchPlaceholder, value: this.draft.docNumber, "onText-change": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateDraft({ docNumber: e.detail });
            }, withClear: true, onInputCleared: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.applyFilters.emit({ ...this.draft, docNumber: '' });
            } }, h("wa-icon", { key: '43805136d614645fc344d48bbcf835ef0379960b', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), this.draft.folioType === 'guest' && (h("wa-select", { key: 'df4d77afa57cc13d4e210d1aba3c743e695e3a77', class: "filters-bar__combo-select", size: "s", value: this.draft.searchBy, defaultValue: this.draft.searchBy, onchange: e => this.updateDraft({ searchBy: e.target.value }) }, h("wa-option", { key: '3116a03bbae2dd720fb4184bc39a5eecbcac31cb', value: "doc_nbr" }, t('Lcz_DocumentNumberOption', { fallback: 'Document number' })), h("wa-option", { key: 'e5ef89a804b8e8dac36a6356475b91efcb794ab9', value: "booking_nbr" }, t('Lcz_BookingNumber', { fallback: 'Booking number' }))))), h("wa-tooltip", { key: '693c5940f0d956b4d950eb68cd58c67186769d58', for: "search-btn" }, t('Lcz_Search', { fallback: 'Search' })), h("ir-custom-button", { key: 'de13fe3b3f5e7419d4c66193ddbd357afeda84e8', id: "search-btn", loading: this.loading === 'search', class: "filters-bar__search-submit", value: "search", variant: "neutral", appearance: "outlined", type: "submit" }, h("wa-icon", { key: 'b2ae967107f81ed61383b258c9d18319c6772369', name: "magnifying-glass" })), h("wa-tooltip", { key: 'b8e0342a0051fedd9bd919836476309ff866e2d3', for: "excel-btn" }, t('Lcz_ExportToExcel', { fallback: 'Export to excel' })), h("ir-custom-button", { key: '37df4d1257e91d5b7dc5aa215d00c0ded1c1950f', disabled: !(this.draft?.fromDate || this.draft?.toDate), id: "excel-btn", variant: "neutral", loading: this.loading === 'export', appearance: "outlined", type: "submit", value: "export" }, h("wa-icon", { key: 'b72d82cdc5dfce3a2295327e021b6f56926e60f8', name: "file-excel", variant: "regular" })))))));
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
