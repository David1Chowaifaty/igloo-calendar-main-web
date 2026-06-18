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
        return (h(Host, { key: '87110ca471911084595f7852bb9483e99f485532' }, h("header", { key: '8dedb73e250a9f1a82e701f8d9d2e05c806a45db', class: "invoice__header" }, h("h3", { key: '3778e271785bee5c35f591fefe833148f95532d5', class: "invoice__title" }, this.documentTitle), h("section", { key: 'dbf56cf63eba494259d05e827b023f6339669e7c', class: "invoice__layout" }, h("div", { key: '4f97e3918cab6a18e61eb894151799ecc7b5bb46', class: "invoice__column invoice__column--details" }, h("div", { key: 'af6e71660523bcd4b038233dc40b07bd5dac9b2e', class: "invoice__details" }, this.documentNumber && (h("div", { key: '07d4d2b89779aa359a7a068fe3a165c0a5a5db59', class: "invoice__meta-row" }, h("span", { key: 'a75dca201864122da9f80e11376dafe3651acd06', class: "invoice__meta-label" }, "Document #"), h("span", { key: 'f1c7d6e48b5afe1054ab09933527109c9cc2a03e', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '5cfb7387e4cca26263a86f6bc6ddcb5423e3ebd0', class: "invoice__meta-row" }, h("span", { key: '9029dc7619188647d04b06701a17fde07fc9da02', class: "invoice__meta-label" }, "Date"), h("span", { key: '7a449189b383a8f2178c4aecb22d0a0999bea1e7', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'c266f66d18e467b88771b790d7a87d2b5ff9f705', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '93b96d2930b4eff4bfe6e46b86419eadd4652c54', class: "section-heading" }, "Bill To"), h("div", { key: 'edb5cb1630ba489ec489b216131498088fb2c1e7', class: "bill-to" }, h("p", { key: '9dee3d874519e1dee882e524c0ca1570f300bb14', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'a7a1015e478616f0fde7b23a85d6b49bf05b7196', class: "invoice__column invoice__column--property" }, h("div", { key: '1c0e16f9c8bd3fa31926e84947c9fd4c51e64844', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'fc9ac0c9da38ce6cd160a8eca1cfe6bdbfd65d3e', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '1c00a7400098d0245a78492ec17db6069bd99d10', class: "property-overview__text" }, h("p", { key: '89ead81db47149b57fa3ec84eeeeb758b0e73a51', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '701b9c17991c79baf85bb369e59f52b4ea08a39d', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '89328e136b11ad6b58f398f07a29ecdbe162f2cc', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'cc52730f87aebe47d596296f1395785db42f8a3e', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'deab6ee863f67520182c04d9b5807fe10ce9620a', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '5d7f2820796e2e31dc5baeac53987583f61d0d0c', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
                "reflect": false,
                "attribute": "document-type",
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
                            "id": "src/models/property.ts::IProperty",
                            "referenceLocation": "IProperty"
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
                "reflect": false,
                "attribute": "document-number"
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
                "reflect": false,
                "attribute": "agent-name"
            }
        };
    }
}
