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
        return (h(Host, { key: 'df02a571b6a84d4798acd973d2e97b4f24e4df9c' }, h("header", { key: '5108233c846d7e32c65ba3220094ac86e024a1e6', class: "invoice__header" }, h("h3", { key: '6c0b313955ba2c736748d8082cbb03aa9d5aad78', class: "invoice__title" }, this.documentTitle), h("section", { key: 'e41edfd98f11bb8fc6d26ecc6a383f1e3fa444f5', class: "invoice__layout" }, h("div", { key: '54856142b0876dc3b04c82d5fa289ef2c8734353', class: "invoice__column invoice__column--details" }, h("div", { key: '2c780461c18e34b27858c12e1d4514caa4f0d2a0', class: "invoice__details" }, this.documentNumber && (h("div", { key: '6a27b22cfebd0e1a8dd4fb5af6f3773957b74a23', class: "invoice__meta-row" }, h("span", { key: '8f8db2f9286661fcc08f34533d3ef026cd1d4f69', class: "invoice__meta-label" }, "Document #"), h("span", { key: 'd237638a854ee5a32b0ebb14914bbba057027a2a', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '15204f7e5ac07c9ce0cae291be857cd50881bd69', class: "invoice__meta-row" }, h("span", { key: '22481306ff6bb3ea3d11fb0dd12d85ba877e02af', class: "invoice__meta-label" }, "Date"), h("span", { key: '1c9be8e86965b37f879b72791ccfd697193d364a', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'fe06b3bf6af9eea2fa8e0311603dc800a158d7a5', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: 'bc8d38a135dfe9fca4def960b5d7499ac4ce635b', class: "section-heading" }, "Bill To"), h("div", { key: '25a2903a7855363c07b162bc1cf6cf061f046ec2', class: "bill-to" }, h("p", { key: 'c259c828d104a2ec66ee7098c1e2ffbb57b976db', class: "bill-to__name" }, this.agentName))))), h("div", { key: '60651be5de4ce87cd9c19bda2ae355c5e38ea0b5', class: "invoice__column invoice__column--property" }, h("div", { key: 'd967ba84c36bc8117ec60578f9ded1c5f2c3368e', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'd02c504503f1854485f50f84bdba04522d46af01', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '8b163667d665c80594ed24e6189a737a66d1031f', class: "property-overview__text" }, h("p", { key: 'f65990cf0ec721ea5993dc9b2b8febb41897fc73', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '3e8383f3c100fd4454650668e33492fc2553fc72', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '40c4847a715ba0e234aedf05f9d8cb57684c7514', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'a8754bae8b4252e0d4fe7642602a58612a1b4c8a', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '05d31fa16983f494cf1b52150b8b45ba0aa7ab29', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '4a1c62425f69a61547aee94d51f5ffe2eb52d29e', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
