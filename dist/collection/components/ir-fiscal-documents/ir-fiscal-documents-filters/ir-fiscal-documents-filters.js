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
        return (h("form", { key: '05ad547c26e785aa544a32f1dd8a1a1dbb1d9068', onSubmit: e => {
                e.preventDefault();
                this.applyFilters.emit(this.filters);
            } }, h("div", { key: '9ae1d5a83df3e8cfbc474e2a36dd59a03815fb4b', class: "filters-bar" }, h("ir-validator", { key: '09e42132c48c77e5ceced9c0d37444dd0ba288af', value: this.filters?.fromDate || this.filters?.toDate, schema: z.string().nonempty(), class: "filters-bar__dates" }, h("ir-date-range-filter", { key: 'cc52d11517c04c145e1414738679994afa2b395b', maxDate: today.format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.filters.fromDate, toDate: this.filters.toDate, onDatesChanged: e => this.updateFilters({ fromDate: e.detail.from, toDate: e.detail.to }) })), h("div", { key: '0543d53fc8448780c6c1a5a33362203d9ab6e36f', class: "filters-bar__search-group" }, h("div", { key: '7d03472c543a46d66b9bc1d970d4580f8c1f5630', class: "filters-bar__type-group" }, h("wa-select", { key: '1ab959af3b53479b46039ae9639c0c857a7fa75c', class: "filters-bar__status-select", value: this.filters.type, defaultValue: this.filters.type, onchange: e => this.updateFilters({ type: e.target.value }), size: "s", placeholder: "Document Type" }, this.typeOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("wa-select", { key: '1df8093f3091a0d73b0ad87b581a187db4b5753b', class: "filters-bar__status-select", value: this.filters.folioType, defaultValue: this.filters.folioType, onchange: e => this.handleFolioTypeChange(e.target.value), size: "s", placeholder: "Folios" }, this.folioOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("wa-switch", { key: 'cd222b7dc9aa58230b1ae2794b3346036607217a', class: "filters-bar__tax-switch", checked: this.filters.taxableOnly, onchange: e => this.updateFilters({ taxableOnly: e.target.checked }) }, "Taxes")), this.filters.folioType === 'agent' && (h("ir-autocomplete", { key: '8f045859cc9b9c2bfc499293b38fbb729931376f', class: "filters-bar__folio-select", size: "s", placeholder: "Select agent", value: this.filters.agentId ? (this.agents.find(a => a.id === this.filters.agentId)?.name ?? '') : ALL_AGENTS_LABEL, "onText-change": (e) => {
                this.agentSearch = e.detail ?? '';
            }, "onCombobox-change": (e) => {
                this.agentSearch = '';
                this.updateFilters({ agentId: e.detail && e.detail !== ALL_AGENTS_VALUE ? Number(e.detail) : null });
            } }, h("ir-autocomplete-option", { key: '94dc203a8f1c84ae60e8d5c711e4fc109432590e', label: ALL_AGENTS_LABEL, value: ALL_AGENTS_VALUE }, ALL_AGENTS_LABEL), this.filteredAgents.map(agent => (h("ir-autocomplete-option", { key: agent.id, label: agent.name, value: String(agent.id) }, agent.name))))), this.filters.folioType === 'guest' && (h("ir-picker", { key: '26b3b77ad1395d95436db1483e20d83b167609f9', class: "filters-bar__folio-select", size: "s", placeholder: "Search customer by email or name", withClear: true, mode: "select-async", debounce: 500, loading: isRequestPending('/Fetch_Exposed_Guests'), "onText-change": event => this.fetchGuests(event.detail), "onCombobox-select": this.handleGuestSelect.bind(this), "onCombobox-clear": () => this.updateFilters({ guestId: null }) }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        }))), h("div", { key: 'cee6bb486db54b27c425db7425fceac3cd4a004c', class: "filters-bar__search-actions" }, h("ir-input", { key: '9b144c5eab6fb668d6ce0d9ee611ecae430eca65', class: "filters-bar__search-input", placeholder: this.searchPlaceholder, value: this.docNumber, "onText-change": e => {
                this.docNumber = e.detail;
                this.emitSearchDebounced(e.detail);
            }, withClear: true }, h("wa-icon", { key: 'd3c7b496eafb4219c1df4bc84c6216fa5b1786ef', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: '6acdeafa07b7c9614180e66b11a23cd7bffd87f5', class: "filters-bar__search-submit", variant: "neutral", appearance: "outlined", type: "submit" }, h("wa-icon", { key: 'e14c66bd5df6c517e33e8b9795df219ed1ba3910', name: "magnifying-glass" })))))));
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
                            "id": "src/components/ir-fiscal-documents/types.ts::FiscalDocumentFilters",
                            "referenceLocation": "FiscalDocumentFilters"
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
                            "id": "src/components/ir-fiscal-documents/types.ts::FiscalDocumentFilters",
                            "referenceLocation": "FiscalDocumentFilters"
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
