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
        return (h(Host, { key: '08d24f09e56fdb39d4e817d42ecb9d9c821dc0aa' }, h("header", { key: '4db8f2ec9f21c33d59e276b4ccde6e5aa38e5b53', class: "invoice__header" }, h("h3", { key: '1352abc6832d82c6f5287f646f89697303d3bf07', class: "invoice__title" }, this.documentTitle), h("section", { key: 'b6f7c6a691708799ab6357ad9e7ab5eb079143f1', class: "invoice__layout" }, h("div", { key: '56b5c8652953cfb026c88250f1a5c97a915af3f6', class: "invoice__column invoice__column--details" }, h("div", { key: 'c57329e9874e9d44e39d5bf2734e10ee4d5d4567', class: "invoice__details" }, this.documentNumber && (h("div", { key: '206e9498cbb6effb7128758875d2de96540747ef', class: "invoice__meta-row" }, h("span", { key: '6d78770548e148c9eb22d30139ae4532a9621167', class: "invoice__meta-label" }, "Document #"), h("span", { key: 'b4a3e0b0724da4580ec79a775516c105fa4238c2', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'c769e81c2e84b414ca66820ef919b6433214f5a5', class: "invoice__meta-row" }, h("span", { key: '7946a25ee10bfea03017725d11b66607f95e3aa4', class: "invoice__meta-label" }, "Date"), h("span", { key: '1a112b33ecb6cc503d90225a39405692d812a655', class: "invoice__meta-value" }, hooks().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '77e576c5a1a2de3f9e88655cf1b3f07970021088', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: 'd06317d7cbbf113654b0cd588fd4738a1710e3ae', class: "section-heading" }, "Bill To"), h("div", { key: '50b1fc97623177d865602242487766f55ed17010', class: "bill-to" }, h("p", { key: '00988e2865c57a43ffdec5e4607270590f4aadd5', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'e0a35ab9c963f3cd7494287346391fa361d25288', class: "invoice__column invoice__column--property" }, h("div", { key: '5cd433e848751f63ae059581ee5b18faaddfd68b', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '4312c6c9c3b05bf3b7def8fa29602e254598867d', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'fbb4b0db6741fdea575a82b0adfc094f4779432d', class: "property-overview__text" }, h("p", { key: '532ec9929d2ec159cfd0e30abdfe48b7f015f050', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '30b34732be413b9a77da63ec8770a703c83f214c', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '96b0bea40a33b056cfdd30eecf7d589a05f0d891', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '917babfb551e78a185d2ecc38cefa59c7fcb5ef4', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'ddcb11d4c7e80f68270ad037ff085a36ccee011a', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'd83ee39549705d2bc1b2ed32f732925dcffa3c87', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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