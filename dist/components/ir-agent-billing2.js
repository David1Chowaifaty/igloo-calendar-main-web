import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { C as CityLedgerService } from './index6.js';
import { c as calendar_data } from './calendar-data.js';
import { T as Token } from './Token.js';
import { d as defineCustomElement$5 } from './ir-city-ledger-fiscal-documents-table2.js';
import { d as defineCustomElement$4 } from './ir-custom-button2.js';
import { d as defineCustomElement$3 } from './ir-dialog2.js';
import { d as defineCustomElement$2 } from './ir-fd-confirm-dialog2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irAgentBillingCss = ".sc-ir-agent-billing-h{display:flex;flex-direction:column;height:100%}.billing__container.sc-ir-agent-billing{display:flex;flex-direction:column;height:100%;gap:var(--wa-space-l);padding:0 var(--wa-space-l)}.agent-billing__table.sc-ir-agent-billing{border:0;border-radius:0}.billing__section-title-row.sc-ir-agent-billing{display:flex;align-items:center;justify-content:space-between}.billing__section-title.sc-ir-agent-billing{margin:0;padding:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-m)}.billing__actions-row.sc-ir-agent-billing{display:flex;align-items:center;justify-content:flex-end;gap:0.5rem}.billing__invoice-nbr.sc-ir-agent-billing{margin:0;padding:0}.billing__invoice-nbr.--secondary.sc-ir-agent-billing{font-size:0.75rem}.billing__price-col.sc-ir-agent-billing{text-align:end !important}.billing__cards.sc-ir-agent-billing{display:flex;flex-direction:column;gap:var(--wa-space-m);padding-bottom:var(--wa-space-l) !important}.billing__card.sc-ir-agent-billing{display:block}.billing__card-header.sc-ir-agent-billing{display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem}.billing__card-header-info.sc-ir-agent-billing{display:flex;flex-direction:column}.billing__card-number.sc-ir-agent-billing{margin:0;font-weight:var(--wa-font-weight-heading);font-family:var(--wa-font-family-heading)}.billing__card-type.sc-ir-agent-billing{margin:0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-secondary)}.billing__card-download-btn.sc-ir-agent-billing{display:flex;align-items:center}.billing__card-details.sc-ir-agent-billing{display:flex;gap:var(--wa-space-xs);justify-content:space-between}.billing__card-detail.sc-ir-agent-billing{display:flex;flex-direction:column}.billing__card-detail-label.sc-ir-agent-billing{margin:0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}.billing__card-detail-label.--amount.sc-ir-agent-billing{text-align:end !important}.billing__card-detail-value.sc-ir-agent-billing{margin:0;font-weight:var(--wa-font-weight-regular);font-size:var(--wa-font-size-s)}.billing__card-void-btn.sc-ir-agent-billing{flex:1 1 0%}.billing__card-footer.sc-ir-agent-billing{display:flex}.table-container.sc-ir-agent-billing{display:none}.billing__card.sc-ir-agent-billing::part(footer){padding-top:1rem;padding-bottom:1rem}@media (min-width: 768px){.billing__cards.sc-ir-agent-billing{display:none}.table-container.sc-ir-agent-billing{display:block}}";
const IrAgentBillingStyle0 = irAgentBillingCss;

const IrAgentBilling = /*@__PURE__*/ proxyCustomElement(class IrAgentBilling extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    booking;
    fiscalDocuments = [];
    isLoading = false;
    hasFetched = false;
    cityLedgerService = new CityLedgerService();
    tokenService = new Token();
    async componentWillLoad() {
        await this.fetchFiscalDocuments();
    }
    async handleBookingChange(newVal, oldVal) {
        if (newVal?.booking_nbr !== oldVal?.booking_nbr || newVal?.agent?.id !== oldVal?.agent?.id) {
            this.fiscalDocuments = [];
            this.hasFetched = false;
            await this.fetchFiscalDocuments();
        }
    }
    async fetchFiscalDocuments() {
        if (!this.booking?.agent?.id || !this.booking?.booking_nbr)
            return;
        this.isLoading = true;
        try {
            const result = await this.cityLedgerService.getFiscalDocuments({
                AGENCY_ID: this.booking.agent.id,
                START_DATE: this.booking.from_date,
                END_DATE: this.booking.to_date,
                BOOK_NBR: this.booking.booking_nbr,
            });
            this.fiscalDocuments = result ?? [];
        }
        catch (err) {
            console.error('[ir-agent-billing] getFiscalDocuments failed:', err);
            this.fiscalDocuments = [];
        }
        finally {
            this.isLoading = false;
            this.hasFetched = true;
        }
    }
    render() {
        return (h(Host, { key: '3b1c974bad469f76c43a3176c17b8162a2ff8a63' }, h("div", { key: '16afad274c4491573df024dc9ca7b35aed1210b4', class: "billing__container" }, h("div", { key: 'd5638ab2905415fd61999cfd3cd4323df7dba9a2', class: "billing__section-title-row" }, h("h4", { key: '9ef1c8c5b0d0a499978de9e4547a00da2c4f95a4', class: "billing__section-title" }, "Issued documents")), h("ir-city-ledger-fiscal-documents-table", { key: 'fad801cc7e86011e02c5e51290e5d931678af0b4', class: 'agent-billing__table', rows: this.fiscalDocuments, isLoading: this.isLoading, hasFetched: this.hasFetched, agentId: this.booking?.agent?.id ?? null, currencySymbol: calendar_data.property?.currency?.symbol ?? '$', fromDate: this.booking?.from_date ?? null, toDate: this.booking?.to_date ?? null, hasDates: true, ticket: this.tokenService.getToken(), propertyId: calendar_data.property?.id, onFetchRequested: () => this.fetchFiscalDocuments() }))));
    }
    static get watchers() { return {
        "booking": ["handleBookingChange"]
    }; }
    static get style() { return IrAgentBillingStyle0; }
}, [2, "ir-agent-billing", {
        "booking": [16],
        "fiscalDocuments": [32],
        "isLoading": [32],
        "hasFetched": [32]
    }, undefined, {
        "booking": ["handleBookingChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-agent-billing", "ir-city-ledger-fiscal-documents-table", "ir-custom-button", "ir-dialog", "ir-fd-confirm-dialog", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-agent-billing":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrAgentBilling);
            }
            break;
        case "ir-city-ledger-fiscal-documents-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-fd-confirm-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrAgentBilling as I, defineCustomElement as d };

//# sourceMappingURL=ir-agent-billing2.js.map