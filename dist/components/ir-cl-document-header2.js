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
        return (h(Host, { key: '5f871964d59dc14e1c03728b1ffc74132cf28979' }, h("header", { key: '35d096133958eec3feeadfedaa9d7912caac76f6', class: "invoice__header" }, h("h3", { key: '4ebcbb70077e0c2abe75768421b0faeb61bcdddc', class: "invoice__title" }, this.documentTitle), h("section", { key: 'dc456273c4e91787f6b46b44f6c0552f5b3cf2a1', class: "invoice__layout" }, h("div", { key: 'bd5c59dfbcc9561639eb7462b15acb899014b932', class: "invoice__column invoice__column--details" }, h("div", { key: '07edf7dd0f0ad354c750c53588bbfd5267223c6c', class: "invoice__details" }, this.documentNumber && (h("div", { key: '87884e1a61947270509353e36fd6aa75b110fe04', class: "invoice__meta-row" }, h("span", { key: 'ad853653c5705bba001fdc1c87f09a8b64d48cac', class: "invoice__meta-label" }, "Document #"), h("span", { key: '993f41559a769876f5fb8c89f7327630a6f86e8d', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '9260e8a0eb67a93baf18040e999ed7f5089451b5', class: "invoice__meta-row" }, h("span", { key: 'afd884b96a11f59c37dc9bacc7c06b1254becf94', class: "invoice__meta-label" }, "Date"), h("span", { key: '5dcce17a2452d19613834c504ae24a5cfbc1bcd5', class: "invoice__meta-value" }, hooks().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '71c5d53ac57e7929efdc6e6da14e5048e7917b97', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '73f21b66a75608a916181352cda654fc38c2b87b', class: "section-heading" }, "Bill To"), h("div", { key: '5b7c4878303ba5cd2f147a2f3dc27417821c1c90', class: "bill-to" }, h("p", { key: '265351fef193d514daa79c0809b63919cf36e8c3', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'a7cde473032a74ef6826a393821b4333ff30272a', class: "invoice__column invoice__column--property" }, h("div", { key: '13f0f671ab0fd703a79d4af073fed5e065afa6b8', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '487dcf4b9b46483be5ca317ad6f8acf93d5189ec', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'b14a59f7244166e13342701c91f3d9410d084013', class: "property-overview__text" }, h("p", { key: '987e679aa1d0074da5d344bc0190b9ca4a6524a3', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'ff01214d4c0ebeb10b88defa7c65906aeaddf2ce', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'a0233d0183f9eabe95cad959acd1ed9d40b5da46', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '61d64c0d9f81446925f3208d8a5a70feff404995', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'ea09e103769223dc62443444f756d5f799c1e3ac', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '1aa425e735001a76672e0bc0afaf958ef991e503', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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