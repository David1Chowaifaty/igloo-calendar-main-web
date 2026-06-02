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
        return (h(Host, { key: '0aa9baf49e3618919904b424118018b735124863' }, h("header", { key: '4f5bb63e260bbfbf7da184eb3cd88c949dff35fc', class: "invoice__header" }, h("h3", { key: 'c94d509312ccaf85cbb2c4c1bc8dd043b35ee6be', class: "invoice__title" }, this.documentTitle), h("section", { key: 'cf812b497251e76a944da49fbe942dd523d394cc', class: "invoice__layout" }, h("div", { key: '8217b58578c6cf0de28a1bfa5fc8996d08f65365', class: "invoice__column invoice__column--details" }, h("div", { key: '1e437aa196524c37ee6ac0ca08752951729a85b4', class: "invoice__details" }, this.documentNumber && (h("div", { key: '58438570c3e5b008ccc2d56789e395f2e1cd0eb9', class: "invoice__meta-row" }, h("span", { key: 'a3a329556b10db0a0c254ea9581a2da05fe32b3f', class: "invoice__meta-label" }, "Document #"), h("span", { key: '8b316bf3ee554e20f075585dbd97ca1657e39078', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '4bdae8d6e7bb58405138c953f87bf680cb038713', class: "invoice__meta-row" }, h("span", { key: '348a9ca814c4e008af2c65251e9f708d8b192ba4', class: "invoice__meta-label" }, "Date"), h("span", { key: 'fa51157ff143ce913d5f1351b5d4e994390ab9ba', class: "invoice__meta-value" }, hooks().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'f6d2b3494c42c33071179642b982d7e60c2eee6a', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '3436a91c9b002147c34388019689547cc2ea74e3', class: "section-heading" }, "Bill To"), h("div", { key: '35ffb4364762a6d868d678a589f54703f58d6084', class: "bill-to" }, h("p", { key: '47c426afe7ffee131950a67987226d3431397231', class: "bill-to__name" }, this.agentName))))), h("div", { key: '1a07ccef3b6a4c03b56b95c0d82f6ea739c0ed71', class: "invoice__column invoice__column--property" }, h("div", { key: '11a01f8169ebc2d7979e5c6a743cbd02a27ee25d', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '061d31cabc2fe160d46777e0c228efdb1418913a', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'fb20cb1e300fd637d1770090e12509e4e5cba70b', class: "property-overview__text" }, h("p", { key: '80fdf56a4e58970bce1b5f077d7489ab5383b6c3', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'c4b9a0f2634c2840069152f0209089e634d5e9e1', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'bb6af90132c6b2506b22fa2ecdfb88a3250a9516', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'e21f5d0f1ced9f23e67415423bd9c301ced6720c', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '88e0b43c58568d0d88d2a3e063160fd838c84c69', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'b48f13b6c0c0e5bd19e328ede937eaa7cdc2e8db', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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