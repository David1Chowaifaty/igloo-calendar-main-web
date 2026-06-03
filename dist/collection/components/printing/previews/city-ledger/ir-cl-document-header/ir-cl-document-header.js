import { Host, h } from "@stencil/core";
import moment from "moment";
const DATE_DISPLAY = 'MMM DD, YYYY';
export class IrClDocumentHeader {
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
        return (h(Host, { key: 'f37dda5f6d02786116432f5addd394d1ec042375' }, h("header", { key: 'add7f434110fb67d31b73171f09efa7193885b22', class: "invoice__header" }, h("h3", { key: '37b518e62dd4159d1e881fb63ffb16d1253c911f', class: "invoice__title" }, this.documentTitle), h("section", { key: 'eefb3db9f382bb1858e03a4a3fee10505c5838be', class: "invoice__layout" }, h("div", { key: 'bb0b36b9d88f56ec61e3c89495627e7af021ccbe', class: "invoice__column invoice__column--details" }, h("div", { key: 'a42c6f1c047ad7acda8f06afc1a391af6582a2e4', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'db9c2adc9fc881439fde1f75cf7cdd9d6d428392', class: "invoice__meta-row" }, h("span", { key: 'f0f35df410712513de229a7f41cdbbc5d2c67a94', class: "invoice__meta-label" }, "Document #"), h("span", { key: 'fbc341f9950ce50cab23320446c2ee2b12426e51', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '3131535a446dbcbf195b2bc51ecc12850652ae38', class: "invoice__meta-row" }, h("span", { key: '2d0f137797038cbc88edb094970ad7a5d30b69f9', class: "invoice__meta-label" }, "Date"), h("span", { key: '039ed3f278b7c607bc087d5ea71ddd6b7c0148fd', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '04e385cee0f23197443047e462eb72ebd151cf53', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '71ecb6030204a2db31b1eef785a6470a5e7f702d', class: "section-heading" }, "Bill To"), h("div", { key: 'c7a812a37a93a57d0a5e7b009b2ddbc43d8b6fe3', class: "bill-to" }, h("p", { key: '88e4f9153cd9be4d13e08a6ce7124f53129edf5c', class: "bill-to__name" }, this.agentName))))), h("div", { key: '7f8ccf266fce41929e43a97218e7dc5d1df1e4ba', class: "invoice__column invoice__column--property" }, h("div", { key: '056b4b8d5611d459b93d3344631ff29d7cc38348', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '3af4244ce9dd134356ecc68bff15af8249d63129', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'd8e0f197423d785fe0ead2977e7d384bd0c6a557', class: "property-overview__text" }, h("p", { key: '1fb31708bec8ace575359efb267c3dfa0ad23c4d', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'a4727fa9ce38ffe1435d285387151574d08f2478', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '23cce0fa1c5a60b906a77834889f21640ac21f63', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '18840a9262ca71f2dfddd13a92784293232b5c28', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '161747ca5db0ff7446a8837dec69a187b6c408cb', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'c43beb0aecff76e1a1d0d0199fffd6ea88d89ac7', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
    }
    static get is() { return "ir-cl-document-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-cl-document-header.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-cl-document-header.css"]
        };
    }
    static get properties() {
        return {
            "documentType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'invoice' | 'receipt' | 'creditnote' | 'debitnote' | 'statement'",
                    "resolved": "\"creditnote\" | \"debitnote\" | \"invoice\" | \"receipt\" | \"statement\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "document-type",
                "reflect": false,
                "defaultValue": "'invoice'"
            },
            "property": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IProperty",
                    "resolved": "IProperty",
                    "references": {
                        "IProperty": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::IProperty"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Property whose branding and details appear on the right side."
                },
                "getter": false,
                "setter": false
            },
            "documentNumber": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional document reference number shown in the meta block."
                },
                "getter": false,
                "setter": false,
                "attribute": "document-number",
                "reflect": false
            },
            "agentName": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Name of the agent/company to bill to."
                },
                "getter": false,
                "setter": false,
                "attribute": "agent-name",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-cl-document-header.js.map
