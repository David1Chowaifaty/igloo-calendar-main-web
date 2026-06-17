import { Host, h } from "@stencil/core";
import Token from "../../models/Token";
import { AgentsService } from "../../services/agents/agents.service";
import { BookingService } from "../../services/booking-service/booking.service";
import { PropertyService } from "../../services/property.service";
import calendar_data from "../../stores/calendar-data";
import { SystemService } from "../../services/system.service";
export class IrCityLedger {
    el;
    ticket;
    p;
    baseurl;
    language = 'en';
    propertyid;
    agentId = null;
    resolvedPropertyId = null;
    currentTab = 'folio';
    isLoading = false;
    agents = [];
    selectedAgent = null;
    taxOptions = [];
    serviceCategoryOptions = [];
    currencySymbol = '$';
    // Statement tab state
    statementFrom = null;
    statementTo = null;
    showStatementPreview = false;
    folioSummary = null;
    agentSearch = '';
    fiscalFilters = { fromDate: undefined, toDate: undefined, docNumber: '', taxableOnly: false, type: 'all', proformaOnly: false };
    stmtFilters = { fromDate: null, toDate: null };
    panels = [
        { id: 'folio', label: 'Folio' },
        { id: 'fiscal-documents', label: 'Fiscal Documents' },
        { id: 'create-statement', label: 'Create Statement' },
    ];
    tokenService = new Token();
    agentsService = new AgentsService();
    propertyService = new PropertyService();
    bookingService = new BookingService();
    systemService = new SystemService();
    toolbarRef;
    createInvoiceDialogRef;
    currencies = [];
    get filteredAgents() {
        const q = this.agentSearch.trim().toLowerCase();
        if (!q)
            return this.agents;
        return this.agents.filter(a => a.name.toLowerCase().includes(q));
    }
    componentWillLoad() {
        const agentId = this.getAgentIdFromSearchParams();
        if (agentId && !this.agentId) {
            this.agentId = agentId;
        }
        if (this.ticket) {
            if (this.baseurl) {
                this.tokenService.setBaseUrl(this.baseurl);
            }
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        if (this.baseurl)
            this.tokenService.setBaseUrl(this.baseurl);
        this.tokenService.setToken(this.ticket);
        this.init();
    }
    handlePropertyIdChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        if (this.ticket)
            this.init();
    }
    handleAgentIdChange(newId, oldId) {
        if (newId === oldId || this.isLoading)
            return;
        this.applyAgentIdProp();
    }
    getAgentIdFromSearchParams() {
        const agentId = new URLSearchParams(window.location.search).get('agentId');
        return agentId ? Number(agentId) : null;
    }
    applyAgentIdProp() {
        if (this.agentId == null)
            return;
        const agent = this.agents.find(a => a.id === this.agentId);
        if (!agent)
            return;
        this.selectedAgent = agent;
        this.showStatementPreview = false;
        this.folioSummary = null;
        requestAnimationFrame(() => {
            const autocomplete = this.el.querySelector('ir-autocomplete');
            if (autocomplete)
                autocomplete.value = agent.name;
        });
    }
    async init() {
        try {
            this.isLoading = true;
            // If a property name was supplied but no numeric id, resolve the id first.
            let propertyId = this.propertyid;
            if (!propertyId && this.p) {
                await this.propertyService.getExposedProperty({ id: null, language: this.language, aname: this.p });
                propertyId = calendar_data.id;
            }
            this.resolvedPropertyId = propertyId;
            const resolvedByName = !this.propertyid && !!this.p;
            const [, setupEntries, agents, currencies] = await Promise.all([
                resolvedByName ? Promise.resolve() : this.propertyService.getExposedProperty({ id: propertyId, language: this.language }),
                this.bookingService.getSetupEntriesByTableNameMulti(['_SVC_CATEGORY']),
                this.agentsService.getExposedAgents({ property_id: propertyId }),
                this.systemService.getExposedCurrencies(),
            ]);
            this.currencies = currencies;
            this.agents = agents ?? [];
            this.applyAgentIdProp();
            const { svc_category } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.serviceCategoryOptions = (svc_category ?? []).map(entry => ({
                id: entry.CODE_NAME,
                label: entry.CODE_VALUE_EN,
            }));
            this.currencySymbol = calendar_data.currency?.symbol ?? '$';
        }
        catch (error) {
            console.error('Failed to initialize city ledger', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-page", { label: 'City Ledger', description: this.selectedAgent?.name }, h("i", { slot: "page-description", style: { marginLeft: '0.5rem' } }, this.selectedAgent?.code), h("ir-autocomplete", { slot: "page-header",
            // size="m"
            placeholder: "Select agent", class: "city-ledger__agents-autocomplete", "onText-change": (e) => {
                this.agentSearch = e.detail ?? '';
            }, "onCombobox-change": (e) => {
                this.agentSearch = '';
                this.selectedAgent = e.detail ? this.agents?.find(agent => agent.id === Number(e.detail)) : null;
                this.showStatementPreview = false;
                this.folioSummary = null;
                this.fiscalFilters = { fromDate: undefined, toDate: undefined, docNumber: '', taxableOnly: false, type: 'all', proformaOnly: false };
                this.stmtFilters = { fromDate: null, toDate: null };
                // Update URL search param
                if (this.selectedAgent) {
                    const url = new URL(window.location.href);
                    url.searchParams.set('agentId', this.selectedAgent.id.toString());
                    window.history.replaceState({}, '', url);
                }
            } }, this.filteredAgents.map(agent => (h("ir-autocomplete-option", { key: agent.id, label: agent.name, value: String(agent.id) }, agent.name)))), !this.selectedAgent ? (h("ir-empty-state", { message: "Select an agent to get started", class: "city-ledger__no-agent" }, h("div", { slot: "icon", class: 'city-ledger__no-agent-icon-container' }, h("wa-icon", { name: "building", class: "city-ledger__no-agent-icon" })), h("p", { class: "city-ledger__no-agent-sub" }, "Choose an agent from the selector above to view their city ledger folio, fiscal documents, and statements."))) : (h("div", { class: "city-ledger__content" }, h("ir-city-ledger-toolbar", { ref: el => (this.toolbarRef = el), agentId: this.selectedAgent?.id, currencySymbol: this.currencySymbol, onCreateInvoice: () => this.createInvoiceDialogRef.openModal() }), h("wa-tab-group", { activation: "manual", "onwa-tab-show": e => {
                this.currentTab = e.detail.name.toString();
            }, active: this.currentTab }, this.panels.map(panel => (h("wa-tab", { key: panel.id, panel: panel.id }, panel.label))), h("wa-tab-panel", { name: "folio" }, h("ir-city-ledger-folio", { agent: this.selectedAgent, propertyId: this.resolvedPropertyId, ticket: this.ticket, language: this.language, serviceCategoryOptions: this.serviceCategoryOptions, currencies: this.currencies, onFolioSummaryUpdate: e => (this.folioSummary = e.detail) })), h("wa-tab-panel", { name: "fiscal-documents" }, h("ir-city-ledger-fiscal-documents", { agentId: this.selectedAgent?.id, currencySymbol: calendar_data.property?.currency?.symbol, currencies: this.currencies, ticket: this.ticket, propertyId: this.resolvedPropertyId, initialFilters: this.fiscalFilters, onClFiscalFiltersChange: e => (this.fiscalFilters = e.detail) })), h("wa-tab-panel", { name: "create-statement", class: "statement-tab-panel" }, h("ir-city-ledger-statements", { agentId: this.selectedAgent?.id, agentName: this.selectedAgent?.name ?? '', currencySymbol: calendar_data.property?.currency?.symbol, currencies: this.currencies, ticket: this.ticket, propertyId: this.resolvedPropertyId, initialFilters: this.stmtFilters, onClStmtFiltersChange: e => (this.stmtFilters = e.detail) })))))), h("ir-cl-invoice-dialog", { ref: el => (this.createInvoiceDialogRef = el), agentId: this.selectedAgent?.id, onInvoiceIssued: async () => {
                await this.toolbarRef?.refresh();
            } }), h("ir-cl-fiscal-document-preview", { ticket: this.ticket, propertyId: calendar_data?.property?.id, onDocumentConverted: () => this.toolbarRef?.refresh() })));
    }
    static get is() { return "ir-city-ledger"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-city-ledger.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-city-ledger.css"]
        };
    }
    static get properties() {
        return {
            "ticket": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "ticket"
            },
            "p": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "p"
            },
            "baseurl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "baseurl"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "language",
                "defaultValue": "'en'"
            },
            "propertyid": {
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
                "attribute": "propertyid"
            },
            "agentId": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number | null",
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
                "attribute": "agent-id",
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "resolvedPropertyId": {},
            "currentTab": {},
            "isLoading": {},
            "agents": {},
            "selectedAgent": {},
            "taxOptions": {},
            "serviceCategoryOptions": {},
            "currencySymbol": {},
            "statementFrom": {},
            "statementTo": {},
            "showStatementPreview": {},
            "folioSummary": {},
            "agentSearch": {},
            "fiscalFilters": {},
            "stmtFilters": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }, {
                "propName": "propertyid",
                "methodName": "handlePropertyIdChange"
            }, {
                "propName": "agentId",
                "methodName": "handleAgentIdChange"
            }];
    }
}
