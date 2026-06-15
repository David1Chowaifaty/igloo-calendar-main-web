import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { D as Debounce } from './debounce.js';
import { F as FdTypes } from './enums.js';
import { h as hooks } from './moment.js';
import { z } from './index2.js';
import { A as AgentsService } from './agents.service.js';
import { B as BookingService } from './booking.store.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$a } from './ir-air-date-picker2.js';
import { d as defineCustomElement$9 } from './ir-autocomplete2.js';
import { d as defineCustomElement$8 } from './ir-autocomplete-option2.js';
import { d as defineCustomElement$7 } from './ir-custom-button2.js';
import { d as defineCustomElement$6 } from './ir-date-range-filter2.js';
import { d as defineCustomElement$5 } from './ir-date-select2.js';
import { d as defineCustomElement$4 } from './ir-input2.js';
import { d as defineCustomElement$3 } from './ir-picker2.js';
import { d as defineCustomElement$2 } from './ir-picker-item2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irFiscalDocumentsFiltersCss = ".sc-ir-fiscal-documents-filters-h{display:block}.filters-bar.sc-ir-fiscal-documents-filters{display:flex;flex-direction:column;align-items:stretch;gap:0.75rem}.filters-bar__dates.sc-ir-fiscal-documents-filters{display:flex;align-items:center;width:100%}.filters-bar__date_picker.sc-ir-fiscal-documents-filters{width:100%}.filters-bar__search-group.sc-ir-fiscal-documents-filters{display:flex;flex-direction:column;gap:0.75rem;width:100%}.filters-bar__type-group.sc-ir-fiscal-documents-filters{display:flex;flex-wrap:wrap;align-items:center;gap:0.75rem;width:100%}.filters-bar__status-select.sc-ir-fiscal-documents-filters{flex:1 1 140px;min-width:0}.filters-bar__tax-switch.sc-ir-fiscal-documents-filters{flex:0 0 auto;white-space:nowrap}.filters-bar__proforma-switch.sc-ir-fiscal-documents-filters{flex:0 0 auto;white-space:nowrap}.filters-bar__folio-select.sc-ir-fiscal-documents-filters{width:100%}.filters-bar__search-actions.sc-ir-fiscal-documents-filters{display:flex;align-items:center;gap:0.5rem;width:100%}.filters-bar__search-input.sc-ir-fiscal-documents-filters{flex:1 1 auto;min-width:0}.filters-bar__search-submit.sc-ir-fiscal-documents-filters{flex:0 0 auto}.filters-bar__search-icon.sc-ir-fiscal-documents-filters{font-size:0.875rem;color:var(--wa-color-text-quiet, #9ca3af);flex-shrink:0}@media (min-width: 640px){.filters-bar__search-group.sc-ir-fiscal-documents-filters{flex-direction:row;flex-wrap:wrap;align-items:center}.filters-bar__type-group.sc-ir-fiscal-documents-filters{width:auto;flex:1 1 auto}.filters-bar__status-select.sc-ir-fiscal-documents-filters{flex:0 1 180px;min-width:160px}.filters-bar__folio-select.sc-ir-fiscal-documents-filters{flex:1 1 220px;width:auto}.filters-bar__search-actions.sc-ir-fiscal-documents-filters{flex:1 1 260px;width:auto}}@media (min-width: 1024px){.filters-bar__search-group.sc-ir-fiscal-documents-filters{flex-wrap:nowrap}.filters-bar__type-group.sc-ir-fiscal-documents-filters{flex:0 0 auto;flex-wrap:nowrap}.filters-bar__folio-select.sc-ir-fiscal-documents-filters{flex:0 1 220px}.filters-bar__search-actions.sc-ir-fiscal-documents-filters{flex:1 1 auto;max-width:320px}}@media (min-width: 1280px){.filters-bar.sc-ir-fiscal-documents-filters{flex-direction:row;flex-wrap:nowrap;align-items:center}.filters-bar__dates.sc-ir-fiscal-documents-filters{width:auto;flex:0 0 auto;min-width:280px}.filters-bar__search-group.sc-ir-fiscal-documents-filters{flex:1;width:auto}}";
const IrFiscalDocumentsFiltersStyle0 = irFiscalDocumentsFiltersCss;

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
const IrFiscalDocumentsFilters = /*@__PURE__*/ proxyCustomElement(class IrFiscalDocumentsFilters extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.filtersChange = createEvent(this, "filtersChange", 7);
        this.applyFilters = createEvent(this, "applyFilters", 7);
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
        return (h("form", { key: '159e7ceb415513361d388ff8dfa51efdb5aa65db', onSubmit: e => {
                e.preventDefault();
                this.applyFilters.emit(this.filters);
            } }, h("div", { key: 'ec95fdcf4737246e91c54aa1faf3218ea6271c1a', class: "filters-bar" }, h("ir-validator", { key: '8e182923ad084ae36ca70581fa762ba06979f550', value: this.filters?.fromDate || this.filters?.toDate, schema: z.string().nonempty(), class: "filters-bar__dates" }, h("ir-date-range-filter", { key: '3d091fc20ae4c085d86e7365cff097adb5aee594', maxDate: today.format('YYYY-MM-DD'), class: "filters-bar__date_picker", fromDate: this.filters.fromDate, toDate: this.filters.toDate, onDatesChanged: e => this.updateFilters({ fromDate: e.detail.from, toDate: e.detail.to }) })), h("div", { key: '79a2b2852d27ff44e121d4f58f99a258c6507c2d', class: "filters-bar__search-group" }, h("div", { key: '8a4843cab97dc95032dfae7834adf532f7bf7289', class: "filters-bar__type-group" }, h("wa-select", { key: 'ad9a47bcfe72a24bcb535ef1410ca2e113365584', class: "filters-bar__status-select", value: this.filters.type, defaultValue: this.filters.type, onchange: e => this.updateFilters({ type: e.target.value }), size: "small", placeholder: "Document Type" }, this.typeOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("wa-select", { key: '83f7d047bb908bb0e976d06a7ea2d90bf9c47ab6', class: "filters-bar__status-select", value: this.filters.folioType, defaultValue: this.filters.folioType, onchange: e => this.handleFolioTypeChange(e.target.value), size: "small", placeholder: "Folios" }, this.folioOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("wa-switch", { key: 'ed3c7bc281fd15f52b8cd1c5295cbc9ecda4cc24', class: "filters-bar__tax-switch", checked: this.filters.taxableOnly, onchange: e => this.updateFilters({ taxableOnly: e.target.checked }) }, "Taxes")), this.filters.folioType === 'agent' && (h("ir-autocomplete", { key: 'e5515a876e16615030fa5ecaca44fd14cea9df74', class: "filters-bar__folio-select", size: "small", placeholder: "Select agent", value: this.filters.agentId ? (this.agents.find(a => a.id === this.filters.agentId)?.name ?? '') : ALL_AGENTS_LABEL, "onText-change": (e) => {
                this.agentSearch = e.detail ?? '';
            }, "onCombobox-change": (e) => {
                this.agentSearch = '';
                this.updateFilters({ agentId: e.detail && e.detail !== ALL_AGENTS_VALUE ? Number(e.detail) : null });
            } }, h("ir-autocomplete-option", { key: '69048d76fc539be50bb3312b1244703aefc9b88c', label: ALL_AGENTS_LABEL, value: ALL_AGENTS_VALUE }, ALL_AGENTS_LABEL), this.filteredAgents.map(agent => (h("ir-autocomplete-option", { key: agent.id, label: agent.name, value: String(agent.id) }, agent.name))))), this.filters.folioType === 'guest' && (h("ir-picker", { key: 'fd7a9e8b02e3756588ae5e57afc31fdfa72888a0', class: "filters-bar__folio-select", size: "small", placeholder: "Search customer by email or name", withClear: true, mode: "select-async", debounce: 500, loading: isRequestPending('/Fetch_Exposed_Guests'), "onText-change": event => this.fetchGuests(event.detail), "onCombobox-select": this.handleGuestSelect.bind(this), "onCombobox-clear": () => this.updateFilters({ guestId: null }) }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        }))), h("div", { key: '723f1322dd115405e6b36b71cef6c2dad2bf500c', class: "filters-bar__search-actions" }, h("ir-input", { key: '51e9e6e255d5ee8cfb16fe21ea6f66c84cb8ca16', class: "filters-bar__search-input", placeholder: this.searchPlaceholder, value: this.docNumber, "onText-change": e => {
                this.docNumber = e.detail;
                this.emitSearchDebounced(e.detail);
            }, withClear: true }, h("wa-icon", { key: '4e3f7aad710d1f286fdd4b4ece90b3d36f42c959', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("ir-custom-button", { key: '516c899e66a23b35c3f71fd3f3daa6d62a3e1094', class: "filters-bar__search-submit", variant: "neutral", appearance: "outlined", type: "submit" }, h("wa-icon", { key: '1238aa53292dcc227582d33398cd85c2b12f9ec3', name: "magnifying-glass" })))))));
    }
    static get watchers() { return {
        "propertyId": ["handlePropertyIdChange"]
    }; }
    static get style() { return IrFiscalDocumentsFiltersStyle0; }
}, [2, "ir-fiscal-documents-filters", {
        "propertyId": [2, "property-id"],
        "filters": [16],
        "docNumber": [32],
        "agents": [32],
        "agentSearch": [32],
        "guests": [32]
    }, undefined, {
        "propertyId": ["handlePropertyIdChange"]
    }]);
__decorate([
    Debounce(300)
], IrFiscalDocumentsFilters.prototype, "emitSearchDebounced", null);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-fiscal-documents-filters", "ir-air-date-picker", "ir-autocomplete", "ir-autocomplete-option", "ir-custom-button", "ir-date-range-filter", "ir-date-select", "ir-input", "ir-picker", "ir-picker-item", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-fiscal-documents-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrFiscalDocumentsFilters);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-autocomplete-option":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-date-range-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrFiscalDocumentsFilters as I, defineCustomElement as d };

//# sourceMappingURL=ir-fiscal-documents-filters2.js.map