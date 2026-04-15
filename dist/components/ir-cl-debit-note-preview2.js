import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { C as ClFiscalDocumentService } from './cl-fiscal-document.service.js';
import { d as defineCustomElement$b } from './ir-cl-document-header2.js';
import { d as defineCustomElement$a } from './ir-cl-fiscal-document-table2.js';
import { d as defineCustomElement$9 } from './ir-cl-invoice-city-tax-amount-cell2.js';
import { d as defineCustomElement$8 } from './ir-cl-invoice-city-tax-pct-cell2.js';
import { d as defineCustomElement$7 } from './ir-cl-invoice-date-cell2.js';
import { d as defineCustomElement$6 } from './ir-cl-invoice-description-cell2.js';
import { d as defineCustomElement$5 } from './ir-cl-invoice-net-price-cell2.js';
import { d as defineCustomElement$4 } from './ir-cl-invoice-total-cell2.js';
import { d as defineCustomElement$3 } from './ir-cl-invoice-vat-amount-cell2.js';
import { d as defineCustomElement$2 } from './ir-cl-invoice-vat-pct-cell2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irClDebitNotePreviewCss = ":host{display:block;font-family:system-ui,\n    -apple-system,\n    sans-serif;color:#1a1a1a}.document-state{display:flex;align-items:center;justify-content:center;min-height:200px;font-size:0.875rem;color:#6b7280}.document-state--error{color:#dc2626}.document{max-width:900px;margin:0 auto;padding:2.5rem;background:#fff;box-shadow:0 1px 4px rgba(0, 0, 0, 0.08);border-radius:8px}@media print{:host{display:block;width:100%}.document{box-shadow:none;width:100%;max-width:100%;padding:0;border-radius:0}}";
const IrClDebitNotePreviewStyle0 = irClDebitNotePreviewCss;

const IrClDebitNotePreview = /*@__PURE__*/ proxyCustomElement(class IrClDebitNotePreview extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.clPreviewReady = createEvent(this, "clPreviewReady", 7);
    }
    propertyId;
    ticket;
    baseurl;
    agentId;
    agentName;
    documentNumber;
    isLoading = false;
    error = null;
    property = null;
    transactions = [];
    clPreviewReady;
    dataService = new ClFiscalDocumentService();
    hasEmitted = false;
    componentWillLoad() {
        if (!this.ticket) {
            this.error = 'Authentication ticket is required.';
            return;
        }
        this.dataService.init(this.baseurl, this.ticket);
        return this.fetchData();
    }
    componentDidRender() {
        if (!this.isLoading && !this.error && !this.hasEmitted) {
            this.hasEmitted = true;
            requestAnimationFrame(() => {
                this.clPreviewReady.emit();
            });
        }
    }
    async fetchData() {
        this.isLoading = true;
        this.error = null;
        try {
            const { property, transactions } = await this.dataService.fetchData(this.propertyId, this.agentId, this.documentNumber);
            this.property = property;
            this.transactions = transactions;
        }
        catch (e) {
            this.error = e?.message ?? 'Failed to load debit note data.';
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        if (!this.ticket) {
            return (h(Host, null, h("div", { class: "document-state document-state--error" }, "Authentication ticket is required.")));
        }
        if (this.isLoading) {
            return (h(Host, null, h("div", { class: "document-state" }, h("ir-spinner", null))));
        }
        if (this.error) {
            return (h(Host, null, h("div", { class: "document-state document-state--error" }, this.error)));
        }
        return (h(Host, null, h("div", { class: "document" }, h("ir-cl-document-header", { style: { marginBottom: '2.5rem' }, property: this.property, documentNumber: this.documentNumber, agentName: this.agentName, documentType: "debitnote" }), h("ir-cl-fiscal-document-table", { transactions: this.transactions, currencySymbol: this.property?.currency?.symbol ?? '$' }))));
    }
    static get style() { return IrClDebitNotePreviewStyle0; }
}, [1, "ir-cl-debit-note-preview", {
        "propertyId": [2, "property-id"],
        "ticket": [1],
        "baseurl": [1],
        "agentId": [2, "agent-id"],
        "agentName": [1, "agent-name"],
        "documentNumber": [1, "document-number"],
        "isLoading": [32],
        "error": [32],
        "property": [32],
        "transactions": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-debit-note-preview", "ir-cl-document-header", "ir-cl-fiscal-document-table", "ir-cl-invoice-city-tax-amount-cell", "ir-cl-invoice-city-tax-pct-cell", "ir-cl-invoice-date-cell", "ir-cl-invoice-description-cell", "ir-cl-invoice-net-price-cell", "ir-cl-invoice-total-cell", "ir-cl-invoice-vat-amount-cell", "ir-cl-invoice-vat-pct-cell", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-debit-note-preview":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClDebitNotePreview);
            }
            break;
        case "ir-cl-document-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-cl-fiscal-document-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-cl-invoice-city-tax-amount-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-cl-invoice-city-tax-pct-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-cl-invoice-date-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-cl-invoice-description-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-cl-invoice-net-price-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-cl-invoice-total-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-cl-invoice-vat-amount-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-cl-invoice-vat-pct-cell":
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

export { IrClDebitNotePreview as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-debit-note-preview2.js.map