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
        return (h(Host, { key: 'd854bc3261f77a093873dc356615125dd42f92c6' }, h("header", { key: '0ff61f43652f3d6bccf6f2f5cc9400035260c5fe', class: "invoice__header" }, h("h3", { key: 'd68779416ec978d3eeba40a59aedaa1907af70ba', class: "invoice__title" }, this.documentTitle), h("section", { key: '5dc9f915e6ead22bc86db1ebb9042b0b1f03790f', class: "invoice__layout" }, h("div", { key: 'c4fcb0398707ee5a1b4ae8e60c1a5d58f2b2affc', class: "invoice__column invoice__column--details" }, h("div", { key: '02abd7cf544a8ce0f8f362e0dc9d28ea5a6c7150', class: "invoice__details" }, this.documentNumber && (h("div", { key: '5e8ebac839617ccf1331fc241849482b744ae606', class: "invoice__meta-row" }, h("span", { key: '2c096acb34af60ca84bf059b29a223ef9d322208', class: "invoice__meta-label" }, "Document #"), h("span", { key: '7eac7a35ecf997c898442ac074f35a5241b366af', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '933a88aa7743e564c367c93c2aa9a382b9658ce2', class: "invoice__meta-row" }, h("span", { key: '70f1fb9db7c17e3b8ca589c155b8f2b0cba0b040', class: "invoice__meta-label" }, "Date"), h("span", { key: '054ed8bda474dcc604d95b1c14e2a31547849485', class: "invoice__meta-value" }, hooks().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '8250815cd9644efa30f15ebdcfac1bda3391f9a8', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '5e485ca0ad54786c1d65d9784292ffe33e011297', class: "section-heading" }, "Bill To"), h("div", { key: '23a942826c79d5a575e5da2ceea06aebd616bcef', class: "bill-to" }, h("p", { key: '8033c1489868ed8c3406cabd20dd040e571372e6', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'bb41247cdd120968f48e6e16d5ef83c070640629', class: "invoice__column invoice__column--property" }, h("div", { key: '3905d5423d8272e3f7bb763cb1e7b8c7d7055752', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'aba9616576b029ba2bc94b48fccce643614c101e', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '5acab6006e00b7c8669ba9064b4a8c5936594209', class: "property-overview__text" }, h("p", { key: '00c61a42023ad7924c55f30d179063fa0af5ff0a', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'c6216c1d925cc142ec4c6a3fb479f67209aeeffe', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'c1db5732505164fa88b760f4a37436baa2eeb192', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'eda425ba01d2e54ac8be8a48918f987e6800f900', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '92adb0f8e0073f2698911b3e452a05b6acf1d47f', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'a8cdb9d5fd6da5c415b08df8ead1ae856f76086f', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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