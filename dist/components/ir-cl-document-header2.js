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
        return (h(Host, { key: '6118758ba7610c28ca4f34f11a76583c0d1463cb' }, h("header", { key: '8abe13a1b9f9d7bacf4b0512655108ccff577300', class: "invoice__header" }, h("h3", { key: '1abc556cbba7d56e5d4fda3a45fc71f4fca5c272', class: "invoice__title" }, this.documentTitle), h("section", { key: 'adb538dc63a4e360557da2cd1c2562118cb8df78', class: "invoice__layout" }, h("div", { key: '84a5ad0ffc0eb5796b62332b4a7774e68e2106e0', class: "invoice__column invoice__column--details" }, h("div", { key: 'c35a9c91f49736a27f53ca3747b6b472b78ed8a7', class: "invoice__details" }, this.documentNumber && (h("div", { key: '8ec1c6b0e6d1bb8d73621f433b466f50afe232be', class: "invoice__meta-row" }, h("span", { key: '257bd4522dfd846ff49f2daf8838d79d78424fcb', class: "invoice__meta-label" }, "Document #"), h("span", { key: '2bd211c4d617473d41c9d8b17f9b994260a3ffb6', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'b4f3520f5d0714c97bdfeacd698eb0c1b5312ef6', class: "invoice__meta-row" }, h("span", { key: 'dfe2e607031400971e4eb5a7dd9b24e6b56f3db2', class: "invoice__meta-label" }, "Date"), h("span", { key: '19c9fa3cf794e7b743a6a532c2e7e00fd9c459fd', class: "invoice__meta-value" }, hooks().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'c590c9d1a9ba3c2c3b02a70b7fb9353c969b09ad', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '942b1ad2bc34968f25b48913a7f19a45090acc23', class: "section-heading" }, "Bill To"), h("div", { key: '268ddea100b546be49f3aa6fb23dd09e1651b175', class: "bill-to" }, h("p", { key: '6332edc0a1dd74c7548700ac97571492a482af1f', class: "bill-to__name" }, this.agentName))))), h("div", { key: '4f97518fe82e9c3030c88a7571b848b568a703d9', class: "invoice__column invoice__column--property" }, h("div", { key: 'da5b4d0da0faad73fe21af810ae6a808cc9bec6f', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '91db3177b44bce985a847796e6b2654e1ed9b839', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '13f693609f06022e885102821dbe47f6a4ff6cb0', class: "property-overview__text" }, h("p", { key: 'd507ab82ffc32ecbbb83258f7194463ead9b46a4', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'd7bed99f09f051cc48d189dfa81dd993ec7ed106', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '00e1ccdc1dc580d79bb28420ae7db0ed27ce8258', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '57caf917e6882ded616b65ee7afd874b1780d69e', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'c779c99e2492e2da9010368e4e26dd4e1781e606', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '88cd82aa0a12c18f9eb224f55befe845284a2cc7', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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