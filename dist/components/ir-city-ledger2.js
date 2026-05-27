import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { A as AgentsService } from './agents.service.js';
import { B as BookingService } from './booking.store.js';
import { P as PropertyService } from './property.service.js';
import { c as calendar_data } from './calendar-data.js';
import { S as SystemService, d as defineCustomElement$a } from './ir-otp-modal2.js';
import { d as defineCustomElement$O } from './ir-air-date-picker2.js';
import { d as defineCustomElement$N } from './ir-autocomplete2.js';
import { d as defineCustomElement$M } from './ir-autocomplete-option2.js';
import { d as defineCustomElement$L } from './ir-button2.js';
import { d as defineCustomElement$K } from './ir-city-ledger-fiscal-documents2.js';
import { d as defineCustomElement$J } from './ir-city-ledger-fiscal-documents-filters2.js';
import { d as defineCustomElement$I } from './ir-city-ledger-fiscal-documents-table2.js';
import { d as defineCustomElement$H } from './ir-city-ledger-folio2.js';
import { d as defineCustomElement$G } from './ir-city-ledger-folio-filters2.js';
import { d as defineCustomElement$F } from './ir-city-ledger-folio-table2.js';
import { d as defineCustomElement$E } from './ir-city-ledger-steatments.js';
import { d as defineCustomElement$D } from './ir-city-ledger-statements-filter2.js';
import { d as defineCustomElement$C } from './ir-city-ledger-statements-table2.js';
import { d as defineCustomElement$B } from './ir-city-ledger-toolbar2.js';
import { d as defineCustomElement$A } from './ir-city-ledger-transaction-drawer2.js';
import { d as defineCustomElement$z } from './ir-city-ledger-transaction-form2.js';
import { d as defineCustomElement$y } from './ir-cl-adjustment-fields2.js';
import { d as defineCustomElement$x } from './ir-cl-credit-note-fields2.js';
import { d as defineCustomElement$w } from './ir-cl-debit-note-fields2.js';
import { d as defineCustomElement$v } from './ir-cl-fiscal-document-preview2.js';
import { d as defineCustomElement$u } from './ir-cl-invoice-dialog2.js';
import { d as defineCustomElement$t } from './ir-cl-invoice-form2.js';
import { d as defineCustomElement$s } from './ir-cl-invoice-select2.js';
import { d as defineCustomElement$r } from './ir-cl-opening-balance-fields2.js';
import { d as defineCustomElement$q } from './ir-cl-payment-fields2.js';
import { d as defineCustomElement$p } from './ir-cl-status-tag2.js';
import { d as defineCustomElement$o } from './ir-custom-button2.js';
import { d as defineCustomElement$n } from './ir-date-range-filter2.js';
import { d as defineCustomElement$m } from './ir-date-select2.js';
import { d as defineCustomElement$l } from './ir-dialog2.js';
import { d as defineCustomElement$k } from './ir-drawer2.js';
import { d as defineCustomElement$j } from './ir-empty-state2.js';
import { d as defineCustomElement$i } from './ir-fd-confirm-dialog2.js';
import { d as defineCustomElement$h } from './ir-hold-transaction-dialog2.js';
import { d as defineCustomElement$g } from './ir-icons2.js';
import { d as defineCustomElement$f } from './ir-input2.js';
import { d as defineCustomElement$e } from './ir-input-cell2.js';
import { d as defineCustomElement$d } from './ir-interceptor2.js';
import { d as defineCustomElement$c } from './ir-loading-screen2.js';
import { d as defineCustomElement$b } from './ir-otp2.js';
import { d as defineCustomElement$9 } from './ir-page2.js';
import { d as defineCustomElement$8 } from './ir-pagination2.js';
import { d as defineCustomElement$7 } from './ir-pdf-viewer2.js';
import { d as defineCustomElement$6 } from './ir-preview-screen-dialog2.js';
import { d as defineCustomElement$5 } from './ir-spinner2.js';
import { d as defineCustomElement$4 } from './ir-toast2.js';
import { d as defineCustomElement$3 } from './ir-toast-alert2.js';
import { d as defineCustomElement$2 } from './ir-toast-provider2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irCityLedgerCss = ".sc-ir-city-ledger-h{display:block;height:100%}.city-ledger__agents-autocomplete.sc-ir-city-ledger{width:100%}@media (min-width: 768px){.city-ledger__agents-autocomplete.sc-ir-city-ledger{max-width:400px}}.city-ledger__content.sc-ir-city-ledger{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}.city-ledger__no-agent.sc-ir-city-ledger{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.625rem;padding:5rem 2rem;height:100%;text-align:center;color:var(--wa-color-text-quiet, #6b7280)}.city-ledger__no-agent-icon-container.sc-ir-city-ledger{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.city-ledger__no-agent-title.sc-ir-city-ledger{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.city-ledger__no-agent-sub.sc-ir-city-ledger{margin:0;font-size:0.875rem;max-width:400px;line-height:1.6}.statement-tab-panel.sc-ir-city-ledger{min-height:400px}.statement__empty-state.sc-ir-city-ledger{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;padding:4rem 2rem;color:var(--wa-color-text-quiet, #6b7280);text-align:center}.statement__empty-title.sc-ir-city-ledger{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.statement__empty-subtitle.sc-ir-city-ledger{margin:0;font-size:0.875rem;max-width:360px}.statement__content.sc-ir-city-ledger{display:flex;flex-direction:column;gap:1.25rem}.statement__controls.sc-ir-city-ledger{display:flex;align-items:flex-end;flex-wrap:wrap;gap:1rem}.statement__period-group.sc-ir-city-ledger{display:flex;flex-direction:column;gap:0.375rem}.statement__label.sc-ir-city-ledger{font-size:0.8125rem;font-weight:500;color:var(--wa-color-text-quiet, #6b7280)}.statement__dates.sc-ir-city-ledger{display:flex;align-items:center;gap:0.5rem}.statement__date-picker.sc-ir-city-ledger{width:160px}.statement__dates-sep.sc-ir-city-ledger{color:var(--wa-color-text-quiet, #9ca3af);font-weight:500}.statement__action-bar.sc-ir-city-ledger{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;padding:0.75rem 1rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);border:1px solid var(--wa-color-brand-border-quiet, #bfdbfe);border-radius:0.625rem 0.625rem 0 0;font-size:0.875rem}.statement__action-bar-label.sc-ir-city-ledger{display:flex;align-items:center;font-weight:500;color:var(--wa-color-brand-on-quiet)}.statement__action-bar-buttons.sc-ir-city-ledger{display:flex;gap:0.5rem;flex-wrap:wrap}.statement__preview-wrapper.sc-ir-city-ledger{display:flex;flex-direction:column}.statement-doc.sc-ir-city-ledger{background:#fff;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-top:0;border-radius:0 0 0.75rem 0.75rem;padding:2rem;display:flex;flex-direction:column;gap:1.5rem;box-shadow:0 1px 3px 0 rgb(0 0 0 / 0.04)}.statement-doc__header.sc-ir-city-ledger{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem}.statement-doc__hotel.sc-ir-city-ledger{display:flex;align-items:center;gap:0.875rem}.statement-doc__hotel-logo.sc-ir-city-ledger{display:flex;align-items:center;justify-content:center;width:3rem;height:3rem;background:var(--wa-color-neutral-fill-quiet, #f3f4f6);border-radius:0.5rem;color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__title.sc-ir-city-ledger{margin:0;font-size:1.375rem;font-weight:700;color:var(--wa-color-text-normal, #111827)}.statement-doc__subtitle.sc-ir-city-ledger{margin:0;font-size:0.8125rem;color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__meta.sc-ir-city-ledger{display:flex;flex-direction:column;gap:0.25rem;text-align:right}.statement-doc__meta-row.sc-ir-city-ledger{display:flex;justify-content:flex-end;gap:0.5rem;font-size:0.8125rem}.statement-doc__meta-label.sc-ir-city-ledger{color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__meta-value.sc-ir-city-ledger{font-weight:500;color:var(--wa-color-text-normal, #111827)}.statement-doc__statement-number.sc-ir-city-ledger{font-family:ui-monospace, 'Cascadia Code', monospace;font-size:0.8125rem}.statement-doc__divider.sc-ir-city-ledger{border:0;border-top:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);margin:0}.statement-doc__parties.sc-ir-city-ledger{display:grid;grid-template-columns:1fr 1fr;gap:1rem}.statement-doc__party-label.sc-ir-city-ledger{margin:0 0 0.375rem;font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__party-name.sc-ir-city-ledger{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.statement-doc__party-detail.sc-ir-city-ledger{margin:0.125rem 0 0;font-size:0.8125rem;color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__summary.sc-ir-city-ledger{display:grid;grid-template-columns:repeat(2, 1fr);gap:0.75rem}@media (min-width: 768px){.statement-doc__summary.sc-ir-city-ledger{grid-template-columns:repeat(4, 1fr)}}.statement-doc__summary-card.sc-ir-city-ledger{padding:1rem;border-radius:0.5rem;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);display:flex;flex-direction:column;gap:0.25rem}.statement-doc__summary-card--opening.sc-ir-city-ledger{border-color:var(--wa-color-neutral-border-quiet, #e5e7eb)}.statement-doc__summary-card--charges.sc-ir-city-ledger{border-color:#fecaca;background:#fef2f2}.statement-doc__summary-card--payments.sc-ir-city-ledger{border-color:#bbf7d0;background:#f0fdf4}.statement-doc__summary-card--due.sc-ir-city-ledger{border-color:var(--wa-color-brand-border-quiet, #bfdbfe);background:var(--wa-color-brand-fill-quiet, #eff6ff)}.statement-doc__summary-card-label.sc-ir-city-ledger{font-size:0.75rem;font-weight:500;color:var(--wa-color-text-quiet, #6b7280);text-transform:uppercase;letter-spacing:0.03em}.statement-doc__summary-card-value.sc-ir-city-ledger{font-size:1.125rem;font-weight:700;color:var(--wa-color-text-normal, #111827);font-variant-numeric:tabular-nums}.statement-doc__balance-due.sc-ir-city-ledger{color:var(--wa-color-brand-fill-loud, #2563eb)}.statement-doc__table-wrapper.sc-ir-city-ledger{overflow-x:auto;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-radius:0.5rem}.statement-doc__table.sc-ir-city-ledger{width:100%;border-collapse:collapse;font-size:0.875rem}.statement-doc__table.sc-ir-city-ledger thead.sc-ir-city-ledger th.sc-ir-city-ledger{padding:0.625rem 0.875rem;background:var(--wa-color-neutral-fill-quiet, #f9fafb);font-weight:600;font-size:0.8125rem;color:var(--wa-color-text-quiet, #6b7280);text-align:left;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);white-space:nowrap}.statement-doc__table.sc-ir-city-ledger tbody.sc-ir-city-ledger td.sc-ir-city-ledger{padding:0.625rem 0.875rem;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #f3f4f6);color:var(--wa-color-text-normal, #111827)}.statement-doc__table.sc-ir-city-ledger tfoot.sc-ir-city-ledger td.sc-ir-city-ledger{padding:0.75rem 0.875rem;background:var(--wa-color-neutral-fill-quiet, #f9fafb);border-top:2px solid var(--wa-color-neutral-border-quiet, #e5e7eb);font-weight:700}.statement-doc__col--right.sc-ir-city-ledger{text-align:right}.statement-doc__opening-row.sc-ir-city-ledger td.sc-ir-city-ledger{font-weight:500;background:var(--wa-color-neutral-fill-quiet, #fafafa);color:var(--wa-color-text-quiet, #6b7280);font-size:0.8125rem}.statement-doc__totals-row.sc-ir-city-ledger td.sc-ir-city-ledger{font-weight:700}.statement-doc__table-note.sc-ir-city-ledger{text-align:center;color:var(--wa-color-text-quiet, #9ca3af);font-size:0.8125rem;padding:1.5rem !important}.statement-doc__footer.sc-ir-city-ledger{background:var(--wa-color-neutral-fill-quiet, #f9fafb);border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-radius:0.5rem;padding:0.875rem 1rem}.statement-doc__payment-notice.sc-ir-city-ledger{display:flex;align-items:flex-start;gap:0.5rem;font-size:0.8125rem;color:var(--wa-color-text-quiet, #6b7280)}.statement-doc__payment-notice.sc-ir-city-ledger p.sc-ir-city-ledger{margin:0;line-height:1.5}";
const IrCityLedgerStyle0 = irCityLedgerCss;

const IrCityLedger = /*@__PURE__*/ proxyCustomElement(class IrCityLedger extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    get el() { return this; }
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
        return (h(Host, null, h("ir-page", { label: 'City Ledger', description: this.selectedAgent?.name }, h("ir-autocomplete", { slot: "page-header",
            // size="medium"
            placeholder: "Select agent", class: "city-ledger__agents-autocomplete", "onText-change": (e) => {
                this.agentSearch = e.detail ?? '';
            }, "onCombobox-change": (e) => {
                this.agentSearch = '';
                this.selectedAgent = e.detail ? this.agents?.find(agent => agent.id === Number(e.detail)) : null;
                this.showStatementPreview = false;
                this.folioSummary = null;
                this.fiscalFilters = { fromDate: undefined, toDate: undefined, docNumber: '', taxableOnly: false, type: 'all', proformaOnly: false };
                this.stmtFilters = { fromDate: null, toDate: null };
            } }, this.filteredAgents.map(agent => (h("ir-autocomplete-option", { key: agent.id, label: agent.name, value: String(agent.id) }, agent.name)))), !this.selectedAgent ? (h("ir-empty-state", { message: "Select an agent to get started", class: "city-ledger__no-agent" }, h("div", { slot: "icon", class: 'city-ledger__no-agent-icon-container' }, h("wa-icon", { name: "building", class: "city-ledger__no-agent-icon" })), h("p", { class: "city-ledger__no-agent-sub" }, "Choose an agent from the selector above to view their city ledger folio, fiscal documents, and statements."))) : (h("div", { class: "city-ledger__content" }, h("ir-city-ledger-toolbar", { ref: el => (this.toolbarRef = el), agentId: this.selectedAgent?.id, currencySymbol: this.currencySymbol, onCreateInvoice: () => this.createInvoiceDialogRef.openModal() }), h("wa-tab-group", { activation: "manual", "onwa-tab-show": e => {
                this.currentTab = e.detail.name.toString();
            }, active: this.currentTab }, this.panels.map(panel => (h("wa-tab", { key: panel.id, panel: panel.id }, panel.label))), h("wa-tab-panel", { name: "folio" }, this.currentTab === 'folio' && (h("ir-city-ledger-folio", { agent: this.selectedAgent, propertyId: this.resolvedPropertyId, serviceCategoryOptions: this.serviceCategoryOptions, currencies: this.currencies, onFolioSummaryUpdate: e => (this.folioSummary = e.detail) }))), h("wa-tab-panel", { name: "fiscal-documents" }, this.currentTab === 'fiscal-documents' && (h("ir-city-ledger-fiscal-documents", { agentId: this.selectedAgent?.id, currencySymbol: calendar_data.property?.currency?.symbol, currencies: this.currencies, ticket: this.ticket, propertyId: this.resolvedPropertyId, initialFilters: this.fiscalFilters, onClFiscalFiltersChange: e => (this.fiscalFilters = e.detail) }))), h("wa-tab-panel", { name: "create-statement", class: "statement-tab-panel" }, this.currentTab === 'create-statement' && (h("ir-city-ledger-statements", { agentId: this.selectedAgent?.id, agentName: this.selectedAgent?.name ?? '', currencySymbol: calendar_data.property?.currency?.symbol, currencies: this.currencies, ticket: this.ticket, propertyId: this.resolvedPropertyId, initialFilters: this.stmtFilters, onClStmtFiltersChange: e => (this.stmtFilters = e.detail) }))))))), h("ir-cl-invoice-dialog", { ref: el => (this.createInvoiceDialogRef = el), agentId: this.selectedAgent?.id, onInvoiceIssued: async () => {
                await this.toolbarRef?.refresh();
            } }), h("ir-cl-fiscal-document-preview", { ticket: this.ticket, propertyId: calendar_data?.property?.id, onDocumentConverted: () => this.toolbarRef?.refresh() })));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"],
        "propertyid": ["handlePropertyIdChange"],
        "agentId": ["handleAgentIdChange"]
    }; }
    static get style() { return IrCityLedgerStyle0; }
}, [2, "ir-city-ledger", {
        "ticket": [1],
        "p": [1],
        "baseurl": [1],
        "language": [1],
        "propertyid": [2],
        "agentId": [2, "agent-id"],
        "resolvedPropertyId": [32],
        "currentTab": [32],
        "isLoading": [32],
        "agents": [32],
        "selectedAgent": [32],
        "taxOptions": [32],
        "serviceCategoryOptions": [32],
        "currencySymbol": [32],
        "statementFrom": [32],
        "statementTo": [32],
        "showStatementPreview": [32],
        "folioSummary": [32],
        "agentSearch": [32],
        "fiscalFilters": [32],
        "stmtFilters": [32]
    }, undefined, {
        "ticket": ["handleTicketChange"],
        "propertyid": ["handlePropertyIdChange"],
        "agentId": ["handleAgentIdChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-city-ledger", "ir-air-date-picker", "ir-autocomplete", "ir-autocomplete-option", "ir-button", "ir-city-ledger-fiscal-documents", "ir-city-ledger-fiscal-documents-filters", "ir-city-ledger-fiscal-documents-table", "ir-city-ledger-folio", "ir-city-ledger-folio-filters", "ir-city-ledger-folio-table", "ir-city-ledger-statements", "ir-city-ledger-statements-filter", "ir-city-ledger-statements-table", "ir-city-ledger-toolbar", "ir-city-ledger-transaction-drawer", "ir-city-ledger-transaction-form", "ir-cl-adjustment-fields", "ir-cl-credit-note-fields", "ir-cl-debit-note-fields", "ir-cl-fiscal-document-preview", "ir-cl-invoice-dialog", "ir-cl-invoice-form", "ir-cl-invoice-select", "ir-cl-opening-balance-fields", "ir-cl-payment-fields", "ir-cl-status-tag", "ir-custom-button", "ir-date-range-filter", "ir-date-select", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-fd-confirm-dialog", "ir-hold-transaction-dialog", "ir-icons", "ir-input", "ir-input-cell", "ir-interceptor", "ir-loading-screen", "ir-otp", "ir-otp-modal", "ir-page", "ir-pagination", "ir-pdf-viewer", "ir-preview-screen-dialog", "ir-spinner", "ir-toast", "ir-toast-alert", "ir-toast-provider", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-city-ledger":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCityLedger);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$O();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$N();
            }
            break;
        case "ir-autocomplete-option":
            if (!customElements.get(tagName)) {
                defineCustomElement$M();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$L();
            }
            break;
        case "ir-city-ledger-fiscal-documents":
            if (!customElements.get(tagName)) {
                defineCustomElement$K();
            }
            break;
        case "ir-city-ledger-fiscal-documents-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$J();
            }
            break;
        case "ir-city-ledger-fiscal-documents-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$I();
            }
            break;
        case "ir-city-ledger-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$H();
            }
            break;
        case "ir-city-ledger-folio-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$G();
            }
            break;
        case "ir-city-ledger-folio-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$F();
            }
            break;
        case "ir-city-ledger-statements":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-city-ledger-statements-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-city-ledger-statements-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-city-ledger-toolbar":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "ir-city-ledger-transaction-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "ir-city-ledger-transaction-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "ir-cl-adjustment-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-cl-credit-note-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-cl-debit-note-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-cl-fiscal-document-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-cl-invoice-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-cl-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-cl-invoice-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-cl-opening-balance-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-cl-payment-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-cl-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-date-range-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-fd-confirm-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-hold-transaction-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-input-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-pdf-viewer":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-preview-screen-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-toast-provider":
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

export { IrCityLedger as I, defineCustomElement as d };

//# sourceMappingURL=ir-city-ledger2.js.map