import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';

const irClDocumentHeaderCss = ":host{display:block}.invoice__title{margin:0 0 0.5rem;font-size:1.75rem;font-weight:800;letter-spacing:0.05em;color:#111827;text-transform:uppercase}.invoice__layout{display:flex;justify-content:space-between;padding:0.75rem 0 0}.invoice__column{display:flex;flex-direction:column}.invoice__column--property{align-items:flex-end;text-align:end}.invoice__details{display:flex;flex-direction:column;gap:0.25rem}.invoice__meta-row{display:flex;gap:1rem;font-size:0.8125rem;line-height:1.6}.invoice__meta-label{color:#9ca3af;font-weight:500;min-width:80px}.invoice__meta-value{color:#111827;font-weight:600}.bill-to-section{margin-top:0.875rem}.section-heading{margin:0 0 0.25rem;font-size:0.75rem;font-weight:600;letter-spacing:0.08em;color:#9ca3af;text-transform:uppercase}.bill-to__name{margin:0;font-size:1rem;font-weight:600;color:#111827}.property-overview{display:flex;flex-direction:column;align-items:flex-end;text-align:end}.property-logo{height:2.5rem;width:auto;object-fit:contain;margin-bottom:0.5rem}.property-overview__text{display:flex;flex-direction:column;gap:0.1rem}.property-overview__name{margin:0 0 0.125rem;font-size:1.125rem;font-weight:700;color:#111827}.property-overview__location{margin:0;font-size:0.8125rem;color:#6b7280;line-height:1.4}";
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
            default:
                return '';
        }
    }
    render() {
        const p = this.property;
        const logo = p?.space_theme?.logo;
        const propertyLocation = [p?.city?.['name'] ?? null, p?.country?.name ?? null].filter(f => f !== null).join(', ');
        return (h(Host, { key: '93cc3b5e051d5f75d935581ecfb0c2216f5e72ff' }, h("header", { key: 'b1b7cec3f150160e2f54455b7786bb4fd005de10', class: "invoice__header" }, h("h3", { key: '5c2fcf2ac52eba6f611654dd1ed775ef3e6df3e7', class: "invoice__title" }, this.documentTitle), h("section", { key: 'e9eae2caae3606880fe95ef4fd22c767b8deb0b5', class: "invoice__layout" }, h("div", { key: '95d790dced1584eb496e8aff2cb812cd6c48ebb6', class: "invoice__column invoice__column--details" }, h("div", { key: '028a167ac571ec714fdf390519ace9a9bcdcd9f8', class: "invoice__details" }, this.documentNumber && (h("div", { key: '8bb55b5220dd6f7f5255400604fd2d99ab643740', class: "invoice__meta-row" }, h("span", { key: '8f4a5d9936273a0a3aef7f070f47b5c28c148f60', class: "invoice__meta-label" }, "Document #"), h("span", { key: '7c90fd1643f2a583c1aa9851942613508bb8778d', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '0ddefebbb8d082bc0cfdaeb0610b2b34e7bf9e8c', class: "invoice__meta-row" }, h("span", { key: '87981defd93c07ed1e57706124430ccc6a7dc5e7', class: "invoice__meta-label" }, "Date"), h("span", { key: '5e0129b19209a7c68ee087be90bed8b7ffe77ce5', class: "invoice__meta-value" }, hooks().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '52dc1c9a71c44c9034d0d38c6741074c2cc0f27b', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '16b2209eb843e41cdf779ae89fc1e716c7383291', class: "section-heading" }, "Bill To"), h("div", { key: '095d355afb461b8d68fee4fe1e89f8613cf31332', class: "bill-to" }, h("p", { key: 'ae1ce0b1c8ea918af801a4e6c0cf35b53231c582', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'f7cf5887ba04204b274c4561ebae2c62d766a1b4', class: "invoice__column invoice__column--property" }, h("div", { key: 'e873e4427b2fde56cd0f85263399aaf8137ffb90', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'af9b86d546087f2d752adb4289605d3733e5355b', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'c8acb9b7c4e990b7978b5798acfc62b9f0ffe2f1', class: "property-overview__text" }, h("p", { key: 'bace72d95d0d38d229c144f35ff5293d92a9627d', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'd8d855cebe37b78583080e3db712fe5096da0573', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '4145a8cec88e6088990003e6136b30f5bf15bdea', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '3ce3a47477b0fecbdc538d5c7389b09b82864280', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'bb82239264d22a26a7ffbe5f9f190c0f0debd382', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'f7fbb434a17d03bbfbfb6ad272e97397ac6ee50a', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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