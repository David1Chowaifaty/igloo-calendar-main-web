import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { C as ClFiscalDocumentService } from './cl-fiscal-document.service.js';
import { d as defineCustomElement$2 } from './ir-cl-document-header2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irClReceiptPreviewCss = ":host{display:block;font-family:system-ui,\n    -apple-system,\n    sans-serif;color:#1a1a1a}.document-state{display:flex;align-items:center;justify-content:center;min-height:200px;font-size:0.875rem;color:#6b7280}.document-state--error{color:#dc2626}.document{max-width:900px;margin:0 auto;padding:2.5rem;background:#fff;box-shadow:0 1px 4px rgba(0, 0, 0, 0.08);border-radius:8px}@media print{:host{display:block;width:100%}.document{box-shadow:none;width:100%;max-width:100%;padding:0;border-radius:0}}";
const IrClReceiptPreviewStyle0 = irClReceiptPreviewCss;

const IrClReceiptPreview = /*@__PURE__*/ proxyCustomElement(class IrClReceiptPreview extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    // @State() private transactions: MyClTx[] = [];
    dataService = new ClFiscalDocumentService();
    componentWillLoad() {
        if (!this.ticket) {
            this.error = 'Authentication ticket is required.';
            return;
        }
        this.dataService.init(this.baseurl, this.ticket);
        return this.fetchData();
    }
    async fetchData() {
        this.isLoading = true;
        this.error = null;
        try {
            const { property } = await this.dataService.fetchData(this.propertyId, this.agentId, this.documentNumber);
            this.property = property;
            // this.transactions = transactions;
        }
        catch (e) {
            this.error = e?.message ?? 'Failed to load receipt data.';
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
        return (h(Host, null, h("div", { class: "document" }, h("ir-cl-document-header", { style: { marginBottom: '2.5rem' }, property: this.property, documentNumber: this.documentNumber, agentName: this.agentName, documentType: "receipt" }))));
    }
    static get style() { return IrClReceiptPreviewStyle0; }
}, [1, "ir-cl-receipt-preview", {
        "propertyId": [2, "property-id"],
        "ticket": [1],
        "baseurl": [1],
        "agentId": [2, "agent-id"],
        "agentName": [1, "agent-name"],
        "documentNumber": [1, "document-number"],
        "isLoading": [32],
        "error": [32],
        "property": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-receipt-preview", "ir-cl-document-header", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-receipt-preview":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClReceiptPreview);
            }
            break;
        case "ir-cl-document-header":
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

export { IrClReceiptPreview as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-receipt-preview2.js.map