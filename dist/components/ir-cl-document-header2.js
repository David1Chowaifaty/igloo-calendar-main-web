import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';

const irClDocumentHeaderCss = ":host{display:block}@media print{.invoice__meta-label{color:#374151}.section-heading{color:#374151}.property-overview__location{color:#374151}}.invoice__title{margin:0 0 0.5rem;font-size:1.75rem;font-weight:800;letter-spacing:0.05em;color:#111827;text-transform:uppercase}.invoice__layout{display:flex;justify-content:space-between;padding:0.75rem 0 0}.invoice__column{display:flex;flex-direction:column}.invoice__column--property{align-items:flex-end;text-align:end}.invoice__details{display:flex;flex-direction:column;gap:0.25rem}.invoice__meta-row{display:flex;gap:1rem;font-size:0.8125rem;line-height:1.6}.invoice__meta-label{color:#9ca3af;font-weight:500;min-width:80px}.invoice__meta-value{color:#111827;font-weight:600}.bill-to-section{margin-top:0.875rem}.section-heading{margin:0 0 0.25rem;font-size:0.75rem;font-weight:600;letter-spacing:0.08em;color:#9ca3af;text-transform:uppercase}.bill-to__name{margin:0;font-size:1rem;font-weight:600;color:#111827}.property-overview{display:flex;flex-direction:column;align-items:flex-end;text-align:end}.property-logo{height:2.5rem;width:auto;object-fit:contain;margin-bottom:0.5rem}.property-overview__text{display:flex;flex-direction:column;gap:0.1rem}.property-overview__name{margin:0 0 0.125rem;font-size:1.125rem;font-weight:700;color:#111827}.property-overview__location{margin:0;font-size:0.8125rem;color:#6b7280;line-height:1.4}";
const IrClDocumentHeaderStyle0 = irClDocumentHeaderCss;

const DATE_DISPLAY = 'MMM DD, YYYY';
const IrClDocumentHeader = /*@__PURE__*/ proxyCustomElement(class IrClDocumentHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    documentType = 'invoice';
    /** Property whose branding and details appear on the right side. */
    property;
    /** Optional document reference number shown in the meta block. */
    documentNumber;
    /** Name of the agent/company to bill to. */
    agentName;
    get primaryContact() {
        return this.property?.contacts?.find(c => c.type === 'marketing') ?? this.property?.contacts?.[0];
    }
    get documentTitle() {
        switch (this.documentType) {
            case 'invoice':
                return 'invoice';
            case 'receipt':
                return 'receipt';
            case 'creditnote':
                return 'credit note';
            case 'debitnote':
                return 'debit note';
            case 'statement':
                return 'account statement';
            default:
                return '';
        }
    }
    render() {
        const p = this.property;
        const logo = p?.space_theme?.logo;
        const propertyLocation = [p?.city?.['name'] ?? null, p?.country?.name ?? null].filter(f => f !== null).join(', ');
        return (h(Host, { key: '54f048f5a44cc34ea09cd8be64f54b31de8905cd' }, h("header", { key: '92345673a5f70988a8a16828a5609884c79571e1', class: "invoice__header" }, h("h3", { key: 'c9fa2146e1dbfc974237abae1bac4f7da01938e8', class: "invoice__title" }, this.documentTitle), h("section", { key: '2adeb9e48bb9cfa5e74bdf74678e8df978d91eb3', class: "invoice__layout" }, h("div", { key: 'd8ef47e6c29f71d1a3d9c6e499f2c29311351532', class: "invoice__column invoice__column--details" }, h("div", { key: 'a10a42ec98d17d7403f37c0d2acab259ef892a9f', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'd0b5f72881d6a8c3c4f3a6101057734c32c32e0f', class: "invoice__meta-row" }, h("span", { key: '17c6782d5f6b5e5c53adf41f588cda9aef0b9d96', class: "invoice__meta-label" }, "Document #"), h("span", { key: '82c9d455805dd391c964d5d5aa063f389e1159ee', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '273b68cfee4069442951b97ca0237347adb8ed1c', class: "invoice__meta-row" }, h("span", { key: 'a53af68dae6a1fe0e80e3395f66af3d35348777c', class: "invoice__meta-label" }, "Date"), h("span", { key: '6b6e0463744c8739a689321ba60e1323c87d3e9f', class: "invoice__meta-value" }, hooks().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '364a4cfa49bd254e1f506570eac02107d2ed2ad4', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '176874defb17ae57604faceea5db342125fa57fe', class: "section-heading" }, "Bill To"), h("div", { key: 'fb6d1f6b5b7ace2da4f8035358a02dfeb38a37cc', class: "bill-to" }, h("p", { key: '197a08d8a5e980055342880b10cbaedf78460e75', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'bc28851bf7213e830b92e9721274496d8f9bb7ce', class: "invoice__column invoice__column--property" }, h("div", { key: '22062f5e0c73d3687865fe94a3493134477fa6a9', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'f712b8b90f1d6fb59e2bda25e11b21021bdcb0f6', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '956f6e3653166434831eb2d57ffc28e357de803f', class: "property-overview__text" }, h("p", { key: 'd3f70a69d898eeb99c8b8ae2afe09d7638ba7615', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'f30cc4a2f67fea2c20517cd1e478552de0f50907', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '6f4fd57457ee6de1c0b5eaf73c0d0e9dc61bd5dd', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '2849d766f796f65353604e8c9ef4ae6f932adf1a', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '224d3a580f5a93ef3413efa3ed0141e284dc9fe4', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '5c2e383a580e58f827c2c2cd5a1ecf627c721027', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
    }
    static get style() { return IrClDocumentHeaderStyle0; }
}, [1, "ir-cl-document-header", {
        "documentType": [1, "document-type"],
        "property": [16],
        "documentNumber": [1, "document-number"],
        "agentName": [1, "agent-name"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-document-header"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-document-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClDocumentHeader);
            }
            break;
    } });
}

export { IrClDocumentHeader as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-document-header2.js.map