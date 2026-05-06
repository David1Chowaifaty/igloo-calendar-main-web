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
        return (h(Host, { key: '8ed3cfbe19916e2384d0b5dc674fc01c7cc047ac' }, h("header", { key: 'c66b350f9f36cf635f86f8a98d4df7989d65eeff', class: "invoice__header" }, h("h3", { key: 'd0e3782d7353fd33d7b4d1da5d2294c93ff17022', class: "invoice__title" }, this.documentTitle), h("section", { key: '598963d301443fd599c6c224c756d54b834727da', class: "invoice__layout" }, h("div", { key: '9cbc33c6dc4d90db8d2891908f46cef20b4b0e76', class: "invoice__column invoice__column--details" }, h("div", { key: '9f3d08e4702eafbf7b31e41d41c0b525ceb2edd5', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'c426537dc28be49e89c84ef775a41424c491565a', class: "invoice__meta-row" }, h("span", { key: 'ab9faf1ddac69db04b7e73566ce7837c6e662af3', class: "invoice__meta-label" }, "Document #"), h("span", { key: '602366cc080eeb5c3e9a7ced01038a68fa690ceb', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'f7c53dc544430bfeb5539ff998bbb6bf9953d1a2', class: "invoice__meta-row" }, h("span", { key: 'e5aeb92d13ed5faa65e40406a4f61067dd4c7c63', class: "invoice__meta-label" }, "Date"), h("span", { key: 'f7589db4bab5ab6e4d5fbe74cb863f5d0e9417ab', class: "invoice__meta-value" }, hooks().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'da3c069c8611171853567f6a10ebe6f140e168e1', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '47ff302bc0fdca51f22d359a49753b894a52a593', class: "section-heading" }, "Bill To"), h("div", { key: 'b58dc9bf9e07bdf3b48e36f2a3166cb5a8270556', class: "bill-to" }, h("p", { key: 'af63eb5d9b3b2659f0ff67e189bc9925d9134c6e', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'a366479eb4ca11aa106a56a41be66f78579ccba4', class: "invoice__column invoice__column--property" }, h("div", { key: 'fa09dee0a123c054253aa18dabf2716a633962d1', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'b6c0b7f78e89ea2061f15e069d9e1640b04fc2eb', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '392b7d7739b8e1780bcc9669d000f9adf2ac8be3', class: "property-overview__text" }, h("p", { key: '13dcf9deb9eaa2daa2b00740edd686f972af7cb7', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '1f5fa83cd63d252d859503009e57a34777be88d1', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '57c98d31f3cbaff2698d4df523eb869bab4081cb', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '1150664ce95eb02fbc5f22147fbac48e7539b334', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '277cc870cf2191f5ee4edcffd4c30588bdd1534c', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'cb219680dfeeaae7c626f95991291d0dc378280a', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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