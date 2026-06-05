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
        return (h(Host, { key: 'e49b45280ca4e9e2aada7638f97b869d5e0b9732' }, h("header", { key: '0c057b15b2b63d3035f4b6a1b2f5a3e58dcbe2b7', class: "invoice__header" }, h("h3", { key: '1dcaf09e67e604c126bd6a4180269fab9ce9bb7d', class: "invoice__title" }, this.documentTitle), h("section", { key: '8044324bd379011bd84dbd27e762e181d9570633', class: "invoice__layout" }, h("div", { key: 'da9bf8d2b03c7dca0e4f20abfe325d2c70149337', class: "invoice__column invoice__column--details" }, h("div", { key: 'f1a3670c5041e3ab92086271b23db88b61017c2d', class: "invoice__details" }, this.documentNumber && (h("div", { key: '0479aba29d909b3180e23b79851d7ef796710956', class: "invoice__meta-row" }, h("span", { key: '9b4a5c7f287b71448c4da26586e360d466bd68d7', class: "invoice__meta-label" }, "Document #"), h("span", { key: '8d8d3553bee16f3808fa0a247586a8a789d7fe8c', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'c5b9c9359b70c02cedaab9ef47330d706d023a19', class: "invoice__meta-row" }, h("span", { key: 'b8d8f577e9972efd438ef4bdc0108b5a63a76bc8', class: "invoice__meta-label" }, "Date"), h("span", { key: 'cb9e0c919094b588fe7b55897c52865febf0c00d', class: "invoice__meta-value" }, hooks().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'dc8b3dfa6bf4c057e95f263e8f09b9400ddbf545', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '1e1fb7f1ae519de052af55f3cf6dcf677d2615fd', class: "section-heading" }, "Bill To"), h("div", { key: '64d5c4bcc1c0806cbaaaebbb6201ec9b11a99ac9', class: "bill-to" }, h("p", { key: 'c8fccbc8bb8f9e3ebe1be02e5b5978ff9344d95f', class: "bill-to__name" }, this.agentName))))), h("div", { key: '6a54c626525ff34a22d7534e24097923c96ce822', class: "invoice__column invoice__column--property" }, h("div", { key: '601c7e64416f6424d1d75099472e1fa4203519dd', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'efe394be9d2b7ae4efe9196dd7cd8b6caa3f0c8e', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '3daec6af8cebb8c692e7176b4eb2b0ba3daf24bd', class: "property-overview__text" }, h("p", { key: '873a8c2dba5180676ef4614693d3e49aac83db96', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '86dea364ffc3ba2cd24205eaea72f05c46679ba7', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'edb01e99ab0b9de313eb97bebd02c3044dc05332', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '453ec1d2700f7cf5f7ea779a3c4e828e99681d36', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '1cb39109725438ed138383e2bfac419f5b328340', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '0e071fbc5ae1771403ca2c6cfaef889bcb74595a', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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