import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { A as AgentsService } from './agents.service.js';
import { B as BookingService } from './booking.store.js';
import { P as PropertyService } from './property.service.js';
import { c as calendar_data } from './calendar-data.js';
import { S as SystemService, d as defineCustomElement$y } from './ir-otp-modal2.js';
import { d as defineCustomElement$1W } from './igl-application-info2.js';
import { d as defineCustomElement$1V } from './igl-rate-plan2.js';
import { d as defineCustomElement$1U } from './igl-room-type2.js';
import { d as defineCustomElement$1T } from './ir-agent-billing2.js';
import { d as defineCustomElement$1S } from './ir-air-date-picker2.js';
import { d as defineCustomElement$1R } from './ir-applicable-policies2.js';
import { d as defineCustomElement$1Q } from './ir-arrival-time-dialog2.js';
import { d as defineCustomElement$1P } from './ir-assignment-toggle-dialog2.js';
import { d as defineCustomElement$1O } from './ir-autocomplete2.js';
import { d as defineCustomElement$1N } from './ir-autocomplete-option2.js';
import { d as defineCustomElement$1M } from './ir-billing2.js';
import { d as defineCustomElement$1L } from './ir-billing-drawer2.js';
import { d as defineCustomElement$1K } from './ir-booking-assign-items2.js';
import { d as defineCustomElement$1J } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$1I } from './ir-booking-city-ledger2.js';
import { d as defineCustomElement$1H } from './ir-booking-company-dialog2.js';
import { d as defineCustomElement$1G } from './ir-booking-company-form2.js';
import { d as defineCustomElement$1F } from './ir-booking-details2.js';
import { d as defineCustomElement$1E } from './ir-booking-details-drawer2.js';
import { d as defineCustomElement$1D } from './ir-booking-editor2.js';
import { d as defineCustomElement$1C } from './ir-booking-editor-drawer2.js';
import { d as defineCustomElement$1B } from './ir-booking-editor-form2.js';
import { d as defineCustomElement$1A } from './ir-booking-editor-guest-form2.js';
import { d as defineCustomElement$1z } from './ir-booking-editor-header2.js';
import { d as defineCustomElement$1y } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$1x } from './ir-booking-guarantee2.js';
import { d as defineCustomElement$1w } from './ir-booking-header2.js';
import { d as defineCustomElement$1v } from './ir-booking-pricing-drawer2.js';
import { d as defineCustomElement$1u } from './ir-booking-pricing-form2.js';
import { d as defineCustomElement$1t } from './ir-booking-rooms2.js';
import { d as defineCustomElement$1s } from './ir-booking-source-editor-dialog2.js';
import { d as defineCustomElement$1r } from './ir-booking-source-editor-form2.js';
import { d as defineCustomElement$1q } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$1p } from './ir-button2.js';
import { d as defineCustomElement$1o } from './ir-checkout-dialog2.js';
import { d as defineCustomElement$1n } from './ir-city-ledger-fiscal-documents2.js';
import { d as defineCustomElement$1m } from './ir-city-ledger-fiscal-documents-filters2.js';
import { d as defineCustomElement$1l } from './ir-city-ledger-fiscal-documents-table2.js';
import { d as defineCustomElement$1k } from './ir-city-ledger-folio2.js';
import { d as defineCustomElement$1j } from './ir-city-ledger-folio-filters2.js';
import { d as defineCustomElement$1i } from './ir-city-ledger-folio-table2.js';
import { d as defineCustomElement$1h } from './ir-city-ledger-steatments.js';
import { d as defineCustomElement$1g } from './ir-city-ledger-statements-filter2.js';
import { d as defineCustomElement$1f } from './ir-city-ledger-statements-table2.js';
import { d as defineCustomElement$1e } from './ir-city-ledger-toolbar2.js';
import { d as defineCustomElement$1d } from './ir-city-ledger-transaction-drawer2.js';
import { d as defineCustomElement$1c } from './ir-city-ledger-transaction-form2.js';
import { d as defineCustomElement$1b } from './ir-cl-adjustment-fields2.js';
import { d as defineCustomElement$1a } from './ir-cl-credit-note-fields2.js';
import { d as defineCustomElement$19 } from './ir-cl-debit-note-fields2.js';
import { d as defineCustomElement$18 } from './ir-cl-fiscal-document-preview2.js';
import { d as defineCustomElement$17 } from './ir-cl-invoice-dialog2.js';
import { d as defineCustomElement$16 } from './ir-cl-invoice-form2.js';
import { d as defineCustomElement$15 } from './ir-cl-invoice-select2.js';
import { d as defineCustomElement$14 } from './ir-cl-opening-balance-fields2.js';
import { d as defineCustomElement$13 } from './ir-cl-payment-fields2.js';
import { d as defineCustomElement$12 } from './ir-cl-status-tag2.js';
import { d as defineCustomElement$11 } from './ir-country-picker2.js';
import { d as defineCustomElement$10 } from './ir-custom-button2.js';
import { d as defineCustomElement$$ } from './ir-custom-date-range2.js';
import { d as defineCustomElement$_ } from './ir-date-range2.js';
import { d as defineCustomElement$Z } from './ir-date-range-filter2.js';
import { d as defineCustomElement$Y } from './ir-date-select2.js';
import { d as defineCustomElement$X } from './ir-date-view2.js';
import { d as defineCustomElement$W } from './ir-dialog2.js';
import { d as defineCustomElement$V } from './ir-drawer2.js';
import { d as defineCustomElement$U } from './ir-empty-state2.js';
import { d as defineCustomElement$T } from './ir-events-log2.js';
import { d as defineCustomElement$S } from './ir-extra-service2.js';
import { d as defineCustomElement$R } from './ir-extra-service-config2.js';
import { d as defineCustomElement$Q } from './ir-extra-service-config-form2.js';
import { d as defineCustomElement$P } from './ir-extra-services2.js';
import { d as defineCustomElement$O } from './ir-fd-confirm-dialog2.js';
import { d as defineCustomElement$N } from './ir-guest-billing2.js';
import { d as defineCustomElement$M } from './ir-guest-info-drawer2.js';
import { d as defineCustomElement$L } from './ir-guest-info-form2.js';
import { d as defineCustomElement$K } from './ir-hold-transaction-dialog2.js';
import { d as defineCustomElement$J } from './ir-icons2.js';
import { d as defineCustomElement$I } from './ir-input2.js';
import { d as defineCustomElement$H } from './ir-input-cell2.js';
import { d as defineCustomElement$G } from './ir-input-text2.js';
import { d as defineCustomElement$F } from './ir-interceptor2.js';
import { d as defineCustomElement$E } from './ir-invoice2.js';
import { d as defineCustomElement$D } from './ir-invoice-form2.js';
import { d as defineCustomElement$C } from './ir-label2.js';
import { d as defineCustomElement$B } from './ir-loading-screen2.js';
import { d as defineCustomElement$A } from './ir-mobile-input2.js';
import { d as defineCustomElement$z } from './ir-otp2.js';
import { d as defineCustomElement$x } from './ir-page2.js';
import { d as defineCustomElement$w } from './ir-pagination2.js';
import { d as defineCustomElement$v } from './ir-payment-details2.js';
import { d as defineCustomElement$u } from './ir-payment-folio2.js';
import { d as defineCustomElement$t } from './ir-payment-folio-form2.js';
import { d as defineCustomElement$s } from './ir-payment-item2.js';
import { d as defineCustomElement$r } from './ir-payment-summary2.js';
import { d as defineCustomElement$q } from './ir-payments-folio2.js';
import { d as defineCustomElement$p } from './ir-pdf-viewer2.js';
import { d as defineCustomElement$o } from './ir-picker2.js';
import { d as defineCustomElement$n } from './ir-picker-item2.js';
import { d as defineCustomElement$m } from './ir-pickup2.js';
import { d as defineCustomElement$l } from './ir-pickup-form2.js';
import { d as defineCustomElement$k } from './ir-pickup-view2.js';
import { d as defineCustomElement$j } from './ir-pms-logs2.js';
import { d as defineCustomElement$i } from './ir-preview-screen-dialog2.js';
import { d as defineCustomElement$h } from './ir-print-room2.js';
import { d as defineCustomElement$g } from './ir-printing-extra-service2.js';
import { d as defineCustomElement$f } from './ir-printing-label2.js';
import { d as defineCustomElement$e } from './ir-printing-pickup2.js';
import { d as defineCustomElement$d } from './ir-proforma-invoice-preview2.js';
import { d as defineCustomElement$c } from './ir-reservation-information2.js';
import { d as defineCustomElement$b } from './ir-room2.js';
import { d as defineCustomElement$a } from './ir-room-guests2.js';
import { d as defineCustomElement$9 } from './ir-room-guests-form2.js';
import { d as defineCustomElement$8 } from './ir-service-assignee-select2.js';
import { d as defineCustomElement$7 } from './ir-spinner2.js';
import { d as defineCustomElement$6 } from './ir-toast2.js';
import { d as defineCustomElement$5 } from './ir-toast-item2.js';
import { d as defineCustomElement$4 } from './ir-toast-provider2.js';
import { d as defineCustomElement$3 } from './ir-unit-tag2.js';
import { d as defineCustomElement$2 } from './ir-validator2.js';
import { d as defineCustomElement$1 } from './ota-label2.js';

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
    currentTab = 'fiscal-documents';
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
        "agentId": [1026, "agent-id"],
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
    const components = ["ir-city-ledger", "igl-application-info", "igl-rate-plan", "igl-room-type", "ir-agent-billing", "ir-air-date-picker", "ir-applicable-policies", "ir-arrival-time-dialog", "ir-assignment-toggle-dialog", "ir-autocomplete", "ir-autocomplete-option", "ir-billing", "ir-billing-drawer", "ir-booking-assign-items", "ir-booking-billing-recipient", "ir-booking-city-ledger", "ir-booking-company-dialog", "ir-booking-company-form", "ir-booking-details", "ir-booking-details-drawer", "ir-booking-editor", "ir-booking-editor-drawer", "ir-booking-editor-form", "ir-booking-editor-guest-form", "ir-booking-editor-header", "ir-booking-extra-note", "ir-booking-guarantee", "ir-booking-header", "ir-booking-pricing-drawer", "ir-booking-pricing-form", "ir-booking-rooms", "ir-booking-source-editor-dialog", "ir-booking-source-editor-form", "ir-booking-status-tag", "ir-button", "ir-checkout-dialog", "ir-city-ledger-fiscal-documents", "ir-city-ledger-fiscal-documents-filters", "ir-city-ledger-fiscal-documents-table", "ir-city-ledger-folio", "ir-city-ledger-folio-filters", "ir-city-ledger-folio-table", "ir-city-ledger-statements", "ir-city-ledger-statements-filter", "ir-city-ledger-statements-table", "ir-city-ledger-toolbar", "ir-city-ledger-transaction-drawer", "ir-city-ledger-transaction-form", "ir-cl-adjustment-fields", "ir-cl-credit-note-fields", "ir-cl-debit-note-fields", "ir-cl-fiscal-document-preview", "ir-cl-invoice-dialog", "ir-cl-invoice-form", "ir-cl-invoice-select", "ir-cl-opening-balance-fields", "ir-cl-payment-fields", "ir-cl-status-tag", "ir-country-picker", "ir-custom-button", "ir-custom-date-range", "ir-date-range", "ir-date-range-filter", "ir-date-select", "ir-date-view", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-events-log", "ir-extra-service", "ir-extra-service-config", "ir-extra-service-config-form", "ir-extra-services", "ir-fd-confirm-dialog", "ir-guest-billing", "ir-guest-info-drawer", "ir-guest-info-form", "ir-hold-transaction-dialog", "ir-icons", "ir-input", "ir-input-cell", "ir-input-text", "ir-interceptor", "ir-invoice", "ir-invoice-form", "ir-label", "ir-loading-screen", "ir-mobile-input", "ir-otp", "ir-otp-modal", "ir-page", "ir-pagination", "ir-payment-details", "ir-payment-folio", "ir-payment-folio-form", "ir-payment-item", "ir-payment-summary", "ir-payments-folio", "ir-pdf-viewer", "ir-picker", "ir-picker-item", "ir-pickup", "ir-pickup-form", "ir-pickup-view", "ir-pms-logs", "ir-preview-screen-dialog", "ir-print-room", "ir-printing-extra-service", "ir-printing-label", "ir-printing-pickup", "ir-proforma-invoice-preview", "ir-reservation-information", "ir-room", "ir-room-guests", "ir-room-guests-form", "ir-service-assignee-select", "ir-spinner", "ir-toast", "ir-toast-item", "ir-toast-provider", "ir-unit-tag", "ir-validator", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-city-ledger":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCityLedger);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$1W();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$1V();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$1U();
            }
            break;
        case "ir-agent-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$1T();
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$1S();
            }
            break;
        case "ir-applicable-policies":
            if (!customElements.get(tagName)) {
                defineCustomElement$1R();
            }
            break;
        case "ir-arrival-time-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1Q();
            }
            break;
        case "ir-assignment-toggle-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1P();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$1O();
            }
            break;
        case "ir-autocomplete-option":
            if (!customElements.get(tagName)) {
                defineCustomElement$1N();
            }
            break;
        case "ir-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$1M();
            }
            break;
        case "ir-billing-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1L();
            }
            break;
        case "ir-booking-assign-items":
            if (!customElements.get(tagName)) {
                defineCustomElement$1K();
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$1J();
            }
            break;
        case "ir-booking-city-ledger":
            if (!customElements.get(tagName)) {
                defineCustomElement$1I();
            }
            break;
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1H();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1G();
            }
            break;
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$1F();
            }
            break;
        case "ir-booking-details-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1E();
            }
            break;
        case "ir-booking-editor":
            if (!customElements.get(tagName)) {
                defineCustomElement$1D();
            }
            break;
        case "ir-booking-editor-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1C();
            }
            break;
        case "ir-booking-editor-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1B();
            }
            break;
        case "ir-booking-editor-guest-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1A();
            }
            break;
        case "ir-booking-editor-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$1z();
            }
            break;
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$1y();
            }
            break;
        case "ir-booking-guarantee":
            if (!customElements.get(tagName)) {
                defineCustomElement$1x();
            }
            break;
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$1w();
            }
            break;
        case "ir-booking-pricing-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1v();
            }
            break;
        case "ir-booking-pricing-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1u();
            }
            break;
        case "ir-booking-rooms":
            if (!customElements.get(tagName)) {
                defineCustomElement$1t();
            }
            break;
        case "ir-booking-source-editor-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1s();
            }
            break;
        case "ir-booking-source-editor-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1r();
            }
            break;
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$1q();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$1p();
            }
            break;
        case "ir-checkout-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1o();
            }
            break;
        case "ir-city-ledger-fiscal-documents":
            if (!customElements.get(tagName)) {
                defineCustomElement$1n();
            }
            break;
        case "ir-city-ledger-fiscal-documents-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$1m();
            }
            break;
        case "ir-city-ledger-fiscal-documents-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$1l();
            }
            break;
        case "ir-city-ledger-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$1k();
            }
            break;
        case "ir-city-ledger-folio-filters":
            if (!customElements.get(tagName)) {
                defineCustomElement$1j();
            }
            break;
        case "ir-city-ledger-folio-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$1i();
            }
            break;
        case "ir-city-ledger-statements":
            if (!customElements.get(tagName)) {
                defineCustomElement$1h();
            }
            break;
        case "ir-city-ledger-statements-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$1g();
            }
            break;
        case "ir-city-ledger-statements-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$1f();
            }
            break;
        case "ir-city-ledger-toolbar":
            if (!customElements.get(tagName)) {
                defineCustomElement$1e();
            }
            break;
        case "ir-city-ledger-transaction-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1d();
            }
            break;
        case "ir-city-ledger-transaction-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1c();
            }
            break;
        case "ir-cl-adjustment-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$1b();
            }
            break;
        case "ir-cl-credit-note-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$1a();
            }
            break;
        case "ir-cl-debit-note-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$19();
            }
            break;
        case "ir-cl-fiscal-document-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$18();
            }
            break;
        case "ir-cl-invoice-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$17();
            }
            break;
        case "ir-cl-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$16();
            }
            break;
        case "ir-cl-invoice-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$15();
            }
            break;
        case "ir-cl-opening-balance-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$14();
            }
            break;
        case "ir-cl-payment-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$13();
            }
            break;
        case "ir-cl-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$12();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$11();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$10();
            }
            break;
        case "ir-custom-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$$();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$_();
            }
            break;
        case "ir-date-range-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$Z();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$Y();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$X();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$W();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$V();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$U();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$T();
            }
            break;
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$S();
            }
            break;
        case "ir-extra-service-config":
            if (!customElements.get(tagName)) {
                defineCustomElement$R();
            }
            break;
        case "ir-extra-service-config-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$Q();
            }
            break;
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                defineCustomElement$P();
            }
            break;
        case "ir-fd-confirm-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$O();
            }
            break;
        case "ir-guest-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$N();
            }
            break;
        case "ir-guest-info-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$M();
            }
            break;
        case "ir-guest-info-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$L();
            }
            break;
        case "ir-hold-transaction-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$K();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$J();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$I();
            }
            break;
        case "ir-input-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$H();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$G();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$F();
            }
            break;
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-page":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-payment-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-payment-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-payment-folio-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-payment-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-payments-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-pdf-viewer":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-pickup-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-pickup-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-preview-screen-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-print-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-printing-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-printing-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-printing-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-proforma-invoice-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-room-guests":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-room-guests-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-service-assignee-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-toast-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-toast-provider":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-unit-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ota-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrCityLedger as I, defineCustomElement as d };

//# sourceMappingURL=ir-city-ledger2.js.map