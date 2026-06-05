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
        return (h(Host, { key: 'c337a6088dd30ec47dd711d3064e2c480950724f' }, h("header", { key: '2ba38160fa105283991400454f4b09514b388c60', class: "invoice__header" }, h("h3", { key: '14c00615e97420eec1fb0b99c64efd2f02a8d0c7', class: "invoice__title" }, this.documentTitle), h("section", { key: 'f15a8ca283bf7f037c705c5337317602f1986b1a', class: "invoice__layout" }, h("div", { key: '7cdc133103842454385fec63018273779a7bf6da', class: "invoice__column invoice__column--details" }, h("div", { key: 'f9c26518f2e4f768f0efacc824e049fd8711bbb1', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'a00a78ef4fb97876352da184e4501508a1632591', class: "invoice__meta-row" }, h("span", { key: '2964d3931b43fbae4b4fb3353c0ec1a1bb4897af', class: "invoice__meta-label" }, "Document #"), h("span", { key: '2db7311f3ac4cf926ba74be230e5b5eaa9449100', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '6e7cc53153a43b1bc1e330732775e8617350f6e7', class: "invoice__meta-row" }, h("span", { key: 'd57897b2882dc1207599910b0d4ab938ac1c0adc', class: "invoice__meta-label" }, "Date"), h("span", { key: '3e162c8cd645008108a46d64247926d3028a91e5', class: "invoice__meta-value" }, hooks().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '6f53178c1aaf98d0e9db392b6db5619111e87e0f', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '910cd414b3d37471e47c7854973ec82347c6240c', class: "section-heading" }, "Bill To"), h("div", { key: '64bce65ae840680f124c5498a37776c42abb4ad7', class: "bill-to" }, h("p", { key: 'a166a15bf8f635ee6b47f9c11664eaad5feba36f', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'a08a640fb64fb82bd3ac9ceadfe8484c7074c531', class: "invoice__column invoice__column--property" }, h("div", { key: '3bdad296c6e9ca186cbd4de2014bbe4a23941329', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '5470c659602721923914c40c64f27554ba2d62a6', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '5f944f7e89f7c7d43ecca591aff6f08010e7e4ce', class: "property-overview__text" }, h("p", { key: '5342e3c2f55d48754128f2471e063f45e6f0085f', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '24fbf6c6718560e7941936fb8f6c5a4aaa41300e', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '942e16c1406c13de24a8044c669d8657eef84c97', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'b484420861097bd5098640cc94f304a15c6b2c01', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '19b091bd7927aadab5a13eafaf10d9f7b87282b7', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'f3bb74c8c5f3a097a54a30e83d9c058d677f4a38', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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