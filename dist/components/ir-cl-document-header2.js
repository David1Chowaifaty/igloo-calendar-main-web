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
        return (h(Host, { key: '3beb2cf854cc0e30f43d57f1307dbde0fb236cf4' }, h("header", { key: '801348ecbe46d53d0ee991dafbee5b4718cea37f', class: "invoice__header" }, h("h3", { key: '98c062e9da7f8055922829e310b4540d6d551933', class: "invoice__title" }, this.documentTitle), h("section", { key: 'd5439f7aeaf2ce3f07ac0ea3cfe9eba5ea4727fb', class: "invoice__layout" }, h("div", { key: '6a47a50cf80dd10acb74928338700239714efab0', class: "invoice__column invoice__column--details" }, h("div", { key: '9e53f3689848e607967bbcf793f26e81039ba52d', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'f74a60851067a1bfdd8a325f5477a08a17510f61', class: "invoice__meta-row" }, h("span", { key: '8e13a27adafa7c789b8a074154b0b9645d734b46', class: "invoice__meta-label" }, "Document #"), h("span", { key: 'a16fced8324af6b695885f4e7e24419035e1b512', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '3131e43badd901c3f8e69f14188bf8eef96d0d26', class: "invoice__meta-row" }, h("span", { key: 'a1edf8fcddbae63aa74fc7bca7b4a08c73e7c50e', class: "invoice__meta-label" }, "Date"), h("span", { key: 'd8ebc079eb8cd9f130980a57f959db656ad81125', class: "invoice__meta-value" }, hooks().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'cbf7358b45f2f644966c32540a3ea623971e8b01', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '42eea74be479ad14703fa40fd1cf3c2a04cc2d21', class: "section-heading" }, "Bill To"), h("div", { key: 'ede346b7ecdd471d4b762aab4a32f6581f5fc801', class: "bill-to" }, h("p", { key: 'a5cbe4ebc26622c10accc55bc3b365d62d2489de', class: "bill-to__name" }, this.agentName))))), h("div", { key: '3eaaa1e4ee305bb04aafe287dbd47704c29ae38d', class: "invoice__column invoice__column--property" }, h("div", { key: '1601b0a9887999ce8331afc00c80f0064b5284e0', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '927e3326499582181a2ac3ee86c7339be8aa911a', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'b8684913f60eaf10ba72164f721ddc4dd89925bc', class: "property-overview__text" }, h("p", { key: '24c7bce3d762a294db096f69fde77137862f2a94', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'ae782dcacb2f45b2d4c6a72021950cf0f0280a28', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '9d716148194cd1cabfad5ba932c25c194da239ed', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'e89e23e6aa70cba9dadbef13858a250e3c0da182', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'd9822a3cee5e8fcb1491e856b55d659c4308c414', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '01db9ff7c15526e70af55753a9a6ecac904ce0d5', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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