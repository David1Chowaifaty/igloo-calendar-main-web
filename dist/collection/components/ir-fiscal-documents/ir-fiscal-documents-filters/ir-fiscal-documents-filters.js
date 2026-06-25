import { FdTypes } from "../../../types/enums";
import { h } from "@stencil/core";
import moment from "moment";
import { z } from "zod";
import { AgentsService } from "../../../services/agents/agents.service";
import { BookingService } from "../../../services/booking-service/booking.service";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
const today = moment();
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
        return (h("form", { key: '4ca57553343cbba10960e99e717977c457a294e4', onSubmit: e => {
                e.preventDefault();
                this.applyFilters.emit(this.draft);
            } }, h("div", { key: '09e275765ddcb1a001d2bad856fc19513fe52baf', class: "filters-bar" }, h("ir-validator", { key: '7dc7ea9530156788e5961c799965cf65309656f9', value: this.draft?.fromDate || this.draft?.toDate, schema: z.string().nonempty(), class: "filters-bar__dates" }, h("ir-date-range-filter", { key: '397765e2d5b9b353c90a4708fbe83a45dbba561a', maxDate: today.format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.draft.fromDate, toDate: this.draft.toDate, onDatesChanged: e => {
                this.updateDraft({ fromDate: e.detail.from, toDate: e.detail.to });
                this.filterChanged.emit({ ...this.draft, fromDate: e.detail.from, toDate: e.detail.to });
            } })), h("div", { key: '8362f38a014a7b144cd496d576ce95e08f1c0db5', class: "filters-bar__search-group" }, h("div", { key: '20e57f78978c504f5dbd76cc0e7c0790346d6642', class: "filters-bar__type-group" }, h("wa-select", { key: '80311e4615c91b3206cc5e11189ce6b5181715cc', class: "filters-bar__status-select", value: this.draft.type, defaultValue: this.draft.type, onchange: e => this.updateDraft({ type: e.target.value }), size: "s", placeholder: "Document Type" }, this.typeOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("wa-select", { key: 'ab6fc33a7589fbe53f98dcd95fbd1cc748cc0157', class: "filters-bar__status-select", value: this.draft.folioType, defaultValue: this.draft.folioType, onchange: e => this.handleFolioTypeChange(e.target.value), size: "s", placeholder: "Folios" }, this.folioOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("wa-switch", { key: 'dc5033182e3d6dde8fb966dbbba3a91fd762807a', class: "filters-bar__tax-switch", checked: this.draft.taxableOnly, onchange: e => {
                this.updateDraft({ taxableOnly: e.target.checked });
                this.filterChanged.emit({ ...this.draft, taxableOnly: e.target.checked });
            } }, "Taxes")), this.draft.folioType === 'agent' && (h("ir-autocomplete", { key: '6b344b11c7fd7e1f2b08ff84c4b214a6134ce277', class: "filters-bar__folio-select", size: "s", placeholder: "Select agent", value: this.draft.agentId ? (this.agents.find(a => a.id === this.draft.agentId)?.name ?? '') : ALL_AGENTS_LABEL, "onText-change": (e) => {
                this.agentSearch = e.detail ?? '';
            }, "onCombobox-change": (e) => {
                this.agentSearch = '';
                const value = e.detail;
                this.updateDraft({ agentId: value && value !== ALL_AGENTS_VALUE ? Number(value) : null });
            } }, h("ir-autocomplete-option", { key: '58f849bc6876e7d8eb82aeebdbfa8f355f0895b4', label: ALL_AGENTS_LABEL, value: ALL_AGENTS_VALUE }, ALL_AGENTS_LABEL), this.filteredAgents.map(agent => (h("ir-autocomplete-option", { key: agent.id, label: agent.name, value: String(agent.id) }, agent.name))))), this.draft.folioType === 'guest' && (h("ir-picker", { key: 'bbe864483cbda1e1f3e5c5b46b449b051ed7938d', class: "filters-bar__folio-select", size: "s", placeholder: "Search customer by email or name", withClear: true, mode: "select-async", debounce: 500, loading: isRequestPending('/Fetch_Exposed_Guests'), "onText-change": event => this.fetchGuests(event.detail), "onCombobox-select": this.handleGuestSelect.bind(this), "onCombobox-clear": () => {
                this.updateDraft({ guestId: null });
                this.applyFilters.emit(this.draft);
            } }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        }))), h("div", { key: 'b45a8f27578071bcacaa649d4a921eb1571ae5d3', class: "filters-bar__search-actions" }, h("ir-input", { key: '59c5c563374753e805f909b1668e453905bcd8b8', class: "filters-bar__search-input", placeholder: this.searchPlaceholder, value: this.draft.docNumber, "onText-change": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateDraft({ docNumber: e.detail });
            }, withClear: true, onInputCleared: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.applyFilters.emit({ ...this.draft, docNumber: '' });
            } }, h("wa-icon", { key: '39650e347a4ea44145eb2b0076c1618f54fe2efb', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: '4cc2f787ee54442a03c70302352491cebe2683e0', loading: this.loading, class: "filters-bar__search-submit", variant: "neutral", appearance: "outlined", type: "submit" }, h("wa-icon", { key: 'dcfad109a5bc5fc601574e9225d5a22a5e728562', name: "magnifying-glass" })))))));
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
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
