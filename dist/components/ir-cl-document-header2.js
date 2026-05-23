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
        return (h(Host, { key: 'eee22b44ff17740c7c0317abfdcfd90698a8e0a8' }, h("header", { key: '2421f3b68b482c70b234dc946f2f3f2e4b045c5d', class: "invoice__header" }, h("h3", { key: 'c6e0506d70f67ce41b7e685fb8f5242f2061ec15', class: "invoice__title" }, this.documentTitle), h("section", { key: 'd9eee3d00e1c6a6aabd811f9971d39d81aafaa5b', class: "invoice__layout" }, h("div", { key: '0f44d17c91d65637a079540fc04987568a34ef9d', class: "invoice__column invoice__column--details" }, h("div", { key: '17c5b9308b0ca18746b45c083ce07e1c4391a3d6', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'c828d0f6cc5e1d13475764390ab57329b7c313a7', class: "invoice__meta-row" }, h("span", { key: 'd9b4ea5d1e4a39187813b750725effd4097b3175', class: "invoice__meta-label" }, "Document #"), h("span", { key: '89e1e349ae003d7a104588ba781fc829b56bbd24', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'b0ae3c7630d00561feaa506871be7ae225ba5d93', class: "invoice__meta-row" }, h("span", { key: '9ea8af82c6c2505eb6ae8522450d3f2761f5ab9e', class: "invoice__meta-label" }, "Date"), h("span", { key: 'd52b7a1233bdfd38145de797f3c963c1bb294d8e', class: "invoice__meta-value" }, hooks().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'e6301576497ac7c0062c19dbddd1e5483e9774d9', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: 'f13eb6c9078a7f0fdfcbe56255af3458a533bb0f', class: "section-heading" }, "Bill To"), h("div", { key: '87c89172f6aa391756fa33ad5cd3dc2b2852b1f0', class: "bill-to" }, h("p", { key: '3844312533142177a57d1c0b112287e5c1626421', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'e1b6d20128a36cf69551ee468b93f26256053dba', class: "invoice__column invoice__column--property" }, h("div", { key: '46290001f40db66f2664a7b8855dfa1be38323be', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '7bbe80876900864fb431d9c41b010eec1d2f4447', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '66940384d07631a999e75d7739e58220bc9153ef', class: "property-overview__text" }, h("p", { key: '8fce94a0c21d458bfd7355ab1f0d394b1673efe1', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'd0cbe36999abe87a0858a0566ddce96b694ebf94', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'e3bbc7ab6c21ae147d65a0d7057642b696de9d7c', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '4ebd48c567fc511d592b8a794fd39f248cdeb631', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '5da8e2f9fd0fde44db2589aef77824c7cb752fcf', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '9bb1c5fa469be198e53cd110ad111487537d2694', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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