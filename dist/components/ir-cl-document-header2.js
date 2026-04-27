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
        return (h(Host, { key: '67c38ce6a33c7249f9e0937a2ba7bb74bc901aa3' }, h("header", { key: 'eac83a577ed2038536b3fca6c94d2c3c5db0b54d', class: "invoice__header" }, h("h3", { key: 'a39ba63fad948753cf82e87e3aac0f08f15be958', class: "invoice__title" }, this.documentTitle), h("section", { key: '14bd6af5664c5c015068fb4f416b3385c91f0893', class: "invoice__layout" }, h("div", { key: 'ce4d5a4f4c823f9cca8a2bbd080a104fff15114c', class: "invoice__column invoice__column--details" }, h("div", { key: 'fcf21e1ad10c2b0cc32cce57d1081ebda8c3906f', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'ae751b03467240c742ebf065bc1c852707bba889', class: "invoice__meta-row" }, h("span", { key: 'c4bd7b40a0e155f9514ce857fc6277cdf43bc77c', class: "invoice__meta-label" }, "Document #"), h("span", { key: 'dd68d01cc5c1bd9b8f2dbe47457a6b55a7477bc0', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'd51612e19610b10fffacada101e5b9e2928cc3eb', class: "invoice__meta-row" }, h("span", { key: '8b4abfef4d5a9e7472d59bd098d0eb57c714d6d4', class: "invoice__meta-label" }, "Date"), h("span", { key: '299a3ade64627c1738b65948220f130053b560a1', class: "invoice__meta-value" }, hooks().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '7a924204122cd38054861269c1e4a55a093eb306', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: 'e31087d601955a489fac57f663b2aeedd648558f', class: "section-heading" }, "Bill To"), h("div", { key: 'b7255336fcd14740ebf13f3becca3d3a174a3281', class: "bill-to" }, h("p", { key: 'a79d58946979b137f2f12ec3e65c2b8faaf82501', class: "bill-to__name" }, this.agentName))))), h("div", { key: '254423634b52b2d57244332b0a211f80efa352aa', class: "invoice__column invoice__column--property" }, h("div", { key: 'af74894bdc1ef9afcb8b421e1bab5e459125ecdc', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'b42de3e05b0659e3f7bea6c9b06cad93f417867b', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '11ca83989e4c5b7d1edf81fb90e20fea904dba45', class: "property-overview__text" }, h("p", { key: '376deabc4d5d5c3df80763d5dfe6d6053e4641ac', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '36894ac6df68aac16acfd09a3f8d3f3d645ff63b', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'c4beae0305786ce53f60a130ce311a9098a72718', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '4bcab1bd160a655588b4fa7f0f38f05ab3154471', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '2cdcfe116487cfb6590a4ce37f906c497a27d0a3', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '4abd4132ced7171d8ca930d6ff3dfd112b1550df', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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