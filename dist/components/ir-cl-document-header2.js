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
        return (h(Host, { key: '601d0510c32f919a33dc5488a2ab39df8abc2f3c' }, h("header", { key: '0e71c54c59e1e184d759556182bb825606bc92b4', class: "invoice__header" }, h("h3", { key: 'a49968cf781c5a9052b8da61d36422ecc20204bd', class: "invoice__title" }, this.documentTitle), h("section", { key: '9e314ecf606f221a336f50d0eaa5e4fac3b37a0f', class: "invoice__layout" }, h("div", { key: '057bc6efa08a905da7e0a4f2af59fd94870e6770', class: "invoice__column invoice__column--details" }, h("div", { key: '3a8bed824aec3f58914748a71430878466ec7e48', class: "invoice__details" }, this.documentNumber && (h("div", { key: '20a95fff6d3df7601bdb18c25e2beeb7c8a59a6c', class: "invoice__meta-row" }, h("span", { key: 'a69ac04dc4bd0f7c1481ec4391b630c84de32389', class: "invoice__meta-label" }, "Document #"), h("span", { key: '29c7ed42c0fcedac2f0749c85d2ea6d169241b37', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'd602bfc8b722ad0ac1a5ae54b51241986d17938c', class: "invoice__meta-row" }, h("span", { key: '08ce2ffd516de3248c6b1a26ea29e84507bc8156', class: "invoice__meta-label" }, "Date"), h("span", { key: 'f3884e5cee4a143f13edcf3d37c293dd51778354', class: "invoice__meta-value" }, hooks().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '80e6f42d038e258a8d90151b0352467ca201c8bf', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '53a99abe6cde4e81d5596a567b263ad9e1976582', class: "section-heading" }, "Bill To"), h("div", { key: '39411f637d2970ad7a7f16e5e451d6a1c20ace3f', class: "bill-to" }, h("p", { key: '54410d839017aea52cd55ed6936c4b1c20562704', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'f4bbdabd8b4338e32bc42269e186a034d61362e5', class: "invoice__column invoice__column--property" }, h("div", { key: 'ca0c845c4590d24cd6871610ff7f9e271b0390ed', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'e6adbce0001b6d0e21b18912486ae7a693d78d9c', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '008251a62b3a9b6a0b6ac6464897e9cee1d3f910', class: "property-overview__text" }, h("p", { key: '4670a2c3182ab0ae74455cf549c04a62cc6bff47', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '8e0e6221639ff3f72095fc00f2c28b54c456e56c', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '95eaebdf8339e5c913a638c78b65783fed961e23', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '32e19a363d4cacc189b3fdb323c2a8fffce3c645', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'f9d3cb0cceb2157db8e8ab7edaacde7837260c84', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '0f7b745878d0d220930f0b6099dde1badd182f91', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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