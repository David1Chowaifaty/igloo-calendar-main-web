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
        return (h("form", { key: 'ff3ce0cf3e67944923b27ec660dc49b986f362a1', onSubmit: e => {
                e.preventDefault();
                const submitter = e.submitter;
                this.applyFilters.emit({ ...this.draft, export: submitter?.value === 'export' });
            } }, h("div", { key: '25df55c26bfe441b9ff8db46acd8a8cafc3d552c', class: "filters-bar" }, h("ir-validator", { key: 'e358e581c8096d88efa18b69de0295c4db266194', value: this.draft?.fromDate || this.draft?.toDate, schema: z.string().nonempty(), class: "filters-bar__dates" }, h("ir-date-range-filter", { key: '3ae67f344a04470f5cebafb7ff17139b5497b190', maxDate: today.format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.draft.fromDate, toDate: this.draft.toDate, onDatesChanged: e => {
                this.updateDraft({ fromDate: e.detail.from, toDate: e.detail.to });
                this.filterChanged.emit({ ...this.draft, fromDate: e.detail.from, toDate: e.detail.to });
            } })), h("div", { key: '80985c5dea1882d46bdc8aa3b4df911e9ada9d5b', class: "filters-bar__search-group" }, h("div", { key: '90d6a8fea7f7bf3163a614d5fe55a558d1e369ec', class: "filters-bar__type-group" }, h("wa-select", { key: '888961d188cc11e8b362e0e261085a9ffd350075', class: "filters-bar__status-select", value: this.draft.type, defaultValue: this.draft.type, onchange: e => this.updateDraft({ type: e.target.value }), size: "s", placeholder: t('Lcz_DocumentTypePlaceholder', { fallback: 'Document Type' }) }, this.typeOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("wa-select", { key: 'adc7e3569e2f885b2659fc667c4d03b6953c5d84', class: "filters-bar__status-select", value: this.draft.folioType, defaultValue: this.draft.folioType, onchange: e => this.handleFolioTypeChange(e.target.value), size: "s", placeholder: t('Lcz_FoliosPlaceholder', { fallback: 'Folios' }) }, this.folioOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label))))), this.draft.folioType === 'agent' && (h("ir-autocomplete", { key: 'e1794a011d706730186a88e87cf981638511dfe1', class: "filters-bar__folio-select", size: "s", placeholder: t('Lcz_SelectAgentPlaceholder', { fallback: 'Select agent' }), withExpandIcon: true, value: this.draft.agentId ? (this.agents.find(a => a.id === this.draft.agentId)?.name ?? '') : allAgentsLabel(), "onText-change": (e) => {
                this.agentSearch = e.detail ?? '';
            }, "onCombobox-change": (e) => {
                this.agentSearch = '';
                const value = e.detail;
                this.updateDraft({ agentId: value && value !== ALL_AGENTS_VALUE ? Number(value) : null });
            } }, h("ir-autocomplete-option", { key: '3042b616ae273e494e96bc2f2512582aee4dee50', label: allAgentsLabel(), value: ALL_AGENTS_VALUE }, allAgentsLabel()), this.filteredAgents.map(agent => (h("ir-autocomplete-option", { key: agent.id, label: agent.name, value: String(agent.id) }, agent.name))))), this.draft.folioType === 'guest' && (h("ir-picker", { key: 'b97b4b1ad76684854b2476982d5e74a0cc97cb43', class: "filters-bar__folio-select", size: "s", placeholder: t('Lcz_CustomerEmailOrNamePlaceholder', { fallback: 'Customer email or name' }), withClear: true, mode: "select-async", debounce: 500, loading: isRequestPending('/Fetch_Exposed_Guests'), "onText-change": event => this.fetchGuests(event.detail), "onCombobox-select": this.handleGuestSelect.bind(this), "onCombobox-clear": () => {
                this.updateDraft({ guestId: null });
                this.applyFilters.emit(this.draft);
            } }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        }))), h("div", { key: 'bdb33e9328cd23e8f132cdf598e233aceb0bd268', class: `filters-bar__search-actions${this.draft.folioType === 'guest' ? ' filters-bar__search-actions--wide' : ''}` }, h("div", { key: 'dc81f7020126b1fe7cd937145aa45cb58e0bb1b6', class: "filters-bar__search-combo" }, h("ir-input", { key: 'ad7eacc9bf9368fae642c63f362d58f06c04cbb9', class: `filters-bar__search-input${this.draft.folioType === 'guest' ? ' filters-bar__combo-input' : ''}`, placeholder: this.searchPlaceholder, value: this.draft.docNumber, "onText-change": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateDraft({ docNumber: e.detail });
            }, withClear: true, onInputCleared: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.applyFilters.emit({ ...this.draft, docNumber: '' });
            } }, h("wa-icon", { key: 'fd2ce806340f277b90c698014950733c66009576', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), this.draft.folioType === 'guest' && (h("wa-select", { key: 'b2d0243b8130e27b9a81565f7f77c43b4bdd194c', class: "filters-bar__combo-select", size: "s", value: this.draft.searchBy, defaultValue: this.draft.searchBy, onchange: e => this.updateDraft({ searchBy: e.target.value }) }, h("wa-option", { key: '7c5159b10b91667e446991d75a9589628d7f3f25', value: "doc_nbr" }, t('Lcz_DocumentNumberOption', { fallback: 'Document number' })), h("wa-option", { key: '84db653f07f886761c1ad511c5303c494ea75a7c', value: "booking_nbr" }, t('Lcz_BookingNumber', { fallback: 'Booking number' }))))), h("wa-tooltip", { key: 'e00f928a32f32c69ddc04af3361cd855031c2f4a', for: "search-btn" }, t('Lcz_Search', { fallback: 'Search' })), h("ir-custom-button", { key: '207f375e19679394662c3a10611fc7a9c21126d2', id: "search-btn", loading: this.loading === 'search', class: "filters-bar__search-submit", value: "search", variant: "neutral", appearance: "outlined", type: "submit" }, h("wa-icon", { key: 'c705e8c7426dfe4aab31fe2cb4eec9bad016dd8b', name: "magnifying-glass" })), h("wa-tooltip", { key: 'ec31dab8333293068761063db475ccc6ef38f903', for: "excel-btn" }, t('Lcz_ExportToExcel', { fallback: 'Export to excel' })), h("ir-custom-button", { key: '3a4f168079c7e68b953495c898506fdef71f7fb4', disabled: !(this.draft?.fromDate || this.draft?.toDate), id: "excel-btn", variant: "neutral", loading: this.loading === 'export', appearance: "outlined", type: "submit", value: "export" }, h("wa-icon", { key: 'a88c53dcbb8431e3ffdaa0a24e619d2cd4b68124', name: "file-excel", variant: "regular" })))))));
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
