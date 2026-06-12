var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Debounce } from "../../../decorators/debounce";
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
export class IrFiscalDocumentsFilters {
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
        return (h("form", { key: '3465519d8d1c3644257f6b995a478954566f8f57', onSubmit: e => {
                e.preventDefault();
                this.applyFilters.emit(this.filters);
            } }, h("div", { key: '5199e982f0e4047168681e84dc4d19d914643b24', class: "filters-bar" }, h("ir-validator", { key: '6e75c56afb7fc0c121061b1a8bbd51c73fac635e', value: this.filters?.fromDate || this.filters?.toDate, schema: z.string().nonempty(), class: "filters-bar__dates" }, h("ir-date-range-filter", { key: 'c3e33f93db86f78fd0a360bfabc4f7d39bfb7e26', maxDate: today.format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.filters.fromDate, toDate: this.filters.toDate, onDatesChanged: e => this.updateFilters({ fromDate: e.detail.from, toDate: e.detail.to }) })), h("div", { key: '09343f1f514763c7ebd0f9090b42428e84d9563f', class: "filters-bar__search-group" }, h("div", { key: '90ac3b57a2564c0e2c9df1f45b3ec5c0529fc514', class: "filters-bar__type-group" }, h("wa-select", { key: '8f86ca26a5dab99a8663bd182fe9c1769805dfc5', class: "filters-bar__status-select", value: this.filters.type, defaultValue: this.filters.type, onchange: e => this.updateFilters({ type: e.target.value }), size: "small", placeholder: "Document Type" }, this.typeOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("wa-select", { key: 'f3cd834cd8415d6703d32583ad44d5ee08f612d0', class: "filters-bar__status-select", value: this.filters.folioType, defaultValue: this.filters.folioType, onchange: e => this.handleFolioTypeChange(e.target.value), size: "small", placeholder: "Folios" }, this.folioOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("wa-switch", { key: 'c5f2b01d18cac5db73031da7fce905d0c7263b9c', class: "filters-bar__tax-switch", checked: this.filters.taxableOnly, onchange: e => this.updateFilters({ taxableOnly: e.target.checked }) }, "Taxes")), this.filters.folioType === 'agent' && (h("ir-autocomplete", { key: 'b62c10f2f0459a232d65bba5a89431ccf08966d6', class: "filters-bar__folio-select", size: "small", placeholder: "Select agent", value: this.filters.agentId ? (this.agents.find(a => a.id === this.filters.agentId)?.name ?? '') : ALL_AGENTS_LABEL, "onText-change": (e) => {
                this.agentSearch = e.detail ?? '';
            }, "onCombobox-change": (e) => {
                this.agentSearch = '';
                this.updateFilters({ agentId: e.detail && e.detail !== ALL_AGENTS_VALUE ? Number(e.detail) : null });
            } }, h("ir-autocomplete-option", { key: '8701077f8295eaeb1c8d092eb41dbf9be8c2799f', label: ALL_AGENTS_LABEL, value: ALL_AGENTS_VALUE }, ALL_AGENTS_LABEL), this.filteredAgents.map(agent => (h("ir-autocomplete-option", { key: agent.id, label: agent.name, value: String(agent.id) }, agent.name))))), this.filters.folioType === 'guest' && (h("ir-picker", { key: '9c6c6adf3bbafd48beeb7eeb645a88634a0fd871', class: "filters-bar__folio-select", size: "small", placeholder: "Search customer by email or name", withClear: true, mode: "select-async", debounce: 500, loading: isRequestPending('/Fetch_Exposed_Guests'), "onText-change": event => this.fetchGuests(event.detail), "onCombobox-select": this.handleGuestSelect.bind(this), "onCombobox-clear": () => this.updateFilters({ guestId: null }) }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        }))), h("div", { key: '84906fdf53a2b6f0f58a82b44f1c723440a9070e', class: "filters-bar__search-actions" }, h("ir-input", { key: '3a8c3196feaca67b4c169a22d46cff2cf13e6948', class: "filters-bar__search-input", placeholder: this.searchPlaceholder, value: this.docNumber, "onText-change": e => {
                this.docNumber = e.detail;
                this.emitSearchDebounced(e.detail);
            }, withClear: true }, h("wa-icon", { key: '9fc076705c00db2f6051806594fc72b86ce272c4', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: '6c9da2b038ed98ec72d668005d8ec7d0fc931bd8', class: "filters-bar__search-submit", variant: "neutral", appearance: "outlined", type: "submit" }, h("wa-icon", { key: 'e6a2b8a8c0ca84e5b2790243c04cb297ba42e3c1', name: "magnifying-glass" })))))));
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
                "attribute": "property-id",
                "reflect": false
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
                            "id": "src/components/ir-fiscal-documents/types.ts::FiscalDocumentFilters"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{\n    fromDate: undefined,\n    toDate: undefined,\n    docNumber: '',\n    taxableOnly: false,\n    type: 'all',\n    proformaOnly: false,\n    folioType: 'all',\n    agentId: null,\n    guestId: null,\n  }"
            }
        };
    }
    static get states() {
        return {
            "docNumber": {},
            "agents": {},
            "agentSearch": {},
            "guests": {}
        };
    }
    static get events() {
        return [{
                "method": "filtersChange",
                "name": "filtersChange",
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
                            "id": "src/components/ir-fiscal-documents/types.ts::FiscalDocumentFilters"
                        }
                    }
                }
            }, {
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
                            "id": "src/components/ir-fiscal-documents/types.ts::FiscalDocumentFilters"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "propertyId",
                "methodName": "handlePropertyIdChange"
            }];
    }
}
__decorate([
    Debounce(300)
], IrFiscalDocumentsFilters.prototype, "emitSearchDebounced", null);
//# sourceMappingURL=ir-fiscal-documents-filters.js.map
