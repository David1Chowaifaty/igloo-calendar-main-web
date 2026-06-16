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
        return (h(Host, { key: 'd86b523f9b59f934d85cc4717ea8a62e2916a486' }, h("header", { key: '534fad4f12682e884d28b6e8f837b6dfb4137d66', class: "invoice__header" }, h("h3", { key: 'fd982ee878fa9faab329b06fcf8697cc4d76afbb', class: "invoice__title" }, this.documentTitle), h("section", { key: '5f5e2b5cb17d131b97366052c02c0dfc2ab0b1e1', class: "invoice__layout" }, h("div", { key: '0bd47ffe047b6f49dfe600787decd16b3df33591', class: "invoice__column invoice__column--details" }, h("div", { key: 'b1d2c990c7dd2d3103584e90df9215e1f66076a5', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'fe3be14c4f17cef662838676a707a6d190aa0d32', class: "invoice__meta-row" }, h("span", { key: '26855d4d94973e863c47944b52d5b424cb271388', class: "invoice__meta-label" }, "Document #"), h("span", { key: '3dbc088da25c604410d056a2af4004ef0a8e04a1', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '9e7ec80f915f91a77f96e400eb20c19557962789', class: "invoice__meta-row" }, h("span", { key: '5eaf4c52a663753e74abeb75233e61fb7c177a21', class: "invoice__meta-label" }, "Date"), h("span", { key: '228aa74890b839572ece48c1f145bee7570b4c5c', class: "invoice__meta-value" }, hooks().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'c8024ddbcf5780a66bebda43a93a6756ef7fc0f6', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '70878f1075d94e13962271b44ec74d86e606292b', class: "section-heading" }, "Bill To"), h("div", { key: '250de234d5708aa51902adc985e21dfcd090d581', class: "bill-to" }, h("p", { key: 'd9597c87d0201b9eb3f44d426b208dd769198f9f', class: "bill-to__name" }, this.agentName))))), h("div", { key: '5b0d15ac31c83c19aa2c7e593f075e8d14617766', class: "invoice__column invoice__column--property" }, h("div", { key: 'd92ee0c1ea95e30884bd740de6d2876baa9e481b', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '82a8b58cdd90bc4be205ce4cf935d0b8e2f135b1', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '17d485c81142199467b45fd33b95c70f119d17df', class: "property-overview__text" }, h("p", { key: '36244a427983b598fc316a2d5df53b58da7de0b8', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '677a85de64a46830e819158ed6fbe054f01efd82', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'd08a656a88ef4c746bd29166b6d156e1d16aeb20', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'ad8a277fb015ea7d275438bea4cc88773304a2b6', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '7dd3913d26641061769c50c90dfe81b9c763c99a', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'd91434b9761c041dcb95d9f124ac097737648c04', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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