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
        return (h(Host, { key: '44b6c350f247071a2fa1731bf89401188283aa21' }, h("header", { key: 'b28390e747adba66e338000e71fdf8906487682a', class: "invoice__header" }, h("h3", { key: '7640d74b44a6878c636998185baee195e9169516', class: "invoice__title" }, this.documentTitle), h("section", { key: 'b5ed63ac6db8cce09dc6e998d058d1ecb88154d4', class: "invoice__layout" }, h("div", { key: '10436ec06b6909c0ae369b10a4b1f6bbed0f300f', class: "invoice__column invoice__column--details" }, h("div", { key: 'f46c7af8437c98b998d67d868b0ab778218c95ff', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'ebb5d990335219a0ba915f282e6df2e97ded608d', class: "invoice__meta-row" }, h("span", { key: 'edffb40f9aa23a0f465adcd59268194d68d97b4e', class: "invoice__meta-label" }, "Document #"), h("span", { key: '67c71c719ac44aa6afcce2f0d5baa76dba530c33', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '1b7e39ae16cc3eaf0b41b72613fe215af9d34560', class: "invoice__meta-row" }, h("span", { key: 'a4c6f9bd428a4d37070bb0fd1db34719c26b7319', class: "invoice__meta-label" }, "Date"), h("span", { key: 'd0b21bcbaec57125e8ae0595140afbcd55769d9f', class: "invoice__meta-value" }, hooks().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'f6c01f01414312fd250bc2d4f082ca1942561605', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: 'c84cff89be2546ccc5ffb965ccb5554d72615a5c', class: "section-heading" }, "Bill To"), h("div", { key: '387b7e658dc53a8416a03304accd482094394df4', class: "bill-to" }, h("p", { key: 'b4762edf9fc9dff61242a8c5a263b784de30a275', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'e9bda1d12b7ba6f4f6ec71b0c9a392bf59c6d78b', class: "invoice__column invoice__column--property" }, h("div", { key: '4f5fa87af66e3836f6697ae7b6e9196f33a37996', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'dc81ff0239f511ac37c81796d4b6b9bf8a8f3354', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '18e7feb6e30cb54d9e3546eb3f4199f4015fd6c2', class: "property-overview__text" }, h("p", { key: '054077a30e52e1fdaa2e05f712bbe2dfdbd569fd', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '7e7e2032dab4d782c86c035f6a2249348c2414f7', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '24890f2b8bc193508c4ea20268289be8f162f0a7', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '08654c6cb41e82b6002d96b5879e42930e832d57', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'ea37a38e12f05d0443f7030742c19598be2bf920', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '8516a6573d771ae81824e9ad1e78f8037f91d322', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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