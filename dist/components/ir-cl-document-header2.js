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
        return (h(Host, { key: 'c826eac8574dcbb101b9304889a840f6227034b5' }, h("header", { key: 'f0e7431bced454382f7f2fdf00d27c525eab940a', class: "invoice__header" }, h("h3", { key: 'd65582e58b862aba6621c52bf82f3769fb404260', class: "invoice__title" }, this.documentTitle), h("section", { key: '346efaef0ecbbe51a85a611302a28054396aae1d', class: "invoice__layout" }, h("div", { key: 'b55d3cb87419c4a616dfaf5ab3fdfe2f1bebc3b4', class: "invoice__column invoice__column--details" }, h("div", { key: '2b6fca5a880b1bd41b01f2f4cc1d438d7990699e', class: "invoice__details" }, this.documentNumber && (h("div", { key: '59790913cbad2abd6f5a1777b1546c81c3cd4b8a', class: "invoice__meta-row" }, h("span", { key: '8578c847f2170a9676223c1fff3e81a168ab4aba', class: "invoice__meta-label" }, "Document #"), h("span", { key: '4e5c99e19334d89bc1178a281739960144e6e1c1', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'd4c49102b31a9bf073f99093e089a72c1b0a4e75', class: "invoice__meta-row" }, h("span", { key: '327533713120af2d119399275d2b3c9335ba4e26', class: "invoice__meta-label" }, "Date"), h("span", { key: '00fea9d8cbeef4642756b4705562ba46328e6e3a', class: "invoice__meta-value" }, hooks().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'a45f09e3107565abc489080851a3f51101fc3f1d', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '431eb31d3f63809699841852fa09f98f5cd4afc6', class: "section-heading" }, "Bill To"), h("div", { key: '7d4854ddcb8acb24218237542a6e55ce2b2ce30f', class: "bill-to" }, h("p", { key: '21c8214c483429a12d036f5242396b9dffadf941', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'e0889e5fff72b766ee04e6b042d68d4a909dfdcc', class: "invoice__column invoice__column--property" }, h("div", { key: '8ddce4a4c909df794a4dd7837afd86d12c802222', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '2805b3a0021fb07cd8fb614875de5d7ade31cdc0', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '7e0af8df63ea599cf8f7f264fc84cbce6ad800ff', class: "property-overview__text" }, h("p", { key: 'd804e750e25535c1adb82ba57839ce1be9b8d0d9', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '6cd5e9624856f7e1c2950e6bbbbde725a805edf9', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'aab3f86d278d640e669df443cd2a78cfcf441d62', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '6ae726376475fffc1c474a4d53bc701a82110df1', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'be8a77c4b0e8dbd56c0eca35432aad294272932c', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '088acadfa8130a3e0416ae5c95219266cc1a27d9', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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