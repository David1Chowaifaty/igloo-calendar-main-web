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
        return (h(Host, { key: '601d0510c32f919a33dc5488a2ab39df8abc2f3c' }, h("header", { key: '0e71c54c59e1e184d759556182bb825606bc92b4', class: "invoice__header" }, h("h3", { key: 'a49968cf781c5a9052b8da61d36422ecc20204bd', class: "invoice__title" }, this.documentTitle), h("section", { key: '9e314ecf606f221a336f50d0eaa5e4fac3b37a0f', class: "invoice__layout" }, h("div", { key: '057bc6efa08a905da7e0a4f2af59fd94870e6770', class: "invoice__column invoice__column--details" }, h("div", { key: '3a8bed824aec3f58914748a71430878466ec7e48', class: "invoice__details" }, this.documentNumber && (h("div", { key: '20a95fff6d3df7601bdb18c25e2beeb7c8a59a6c', class: "invoice__meta-row" }, h("span", { key: 'a69ac04dc4bd0f7c1481ec4391b630c84de32389', class: "invoice__meta-label" }, "Document #"), h("span", { key: '29c7ed42c0fcedac2f0749c85d2ea6d169241b37', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'd602bfc8b722ad0ac1a5ae54b51241986d17938c', class: "invoice__meta-row" }, h("span", { key: '08ce2ffd516de3248c6b1a26ea29e84507bc8156', class: "invoice__meta-label" }, "Date"), h("span", { key: 'f3884e5cee4a143f13edcf3d37c293dd51778354', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '80e6f42d038e258a8d90151b0352467ca201c8bf', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '53a99abe6cde4e81d5596a567b263ad9e1976582', class: "section-heading" }, "Bill To"), h("div", { key: '39411f637d2970ad7a7f16e5e451d6a1c20ace3f', class: "bill-to" }, h("p", { key: '54410d839017aea52cd55ed6936c4b1c20562704', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'f4bbdabd8b4338e32bc42269e186a034d61362e5', class: "invoice__column invoice__column--property" }, h("div", { key: 'ca0c845c4590d24cd6871610ff7f9e271b0390ed', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'e6adbce0001b6d0e21b18912486ae7a693d78d9c', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '008251a62b3a9b6a0b6ac6464897e9cee1d3f910', class: "property-overview__text" }, h("p", { key: '4670a2c3182ab0ae74455cf549c04a62cc6bff47', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '8e0e6221639ff3f72095fc00f2c28b54c456e56c', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '95eaebdf8339e5c913a638c78b65783fed961e23', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '32e19a363d4cacc189b3fdb323c2a8fffce3c645', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'f9d3cb0cceb2157db8e8ab7edaacde7837260c84', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '0f7b745878d0d220930f0b6099dde1badd182f91', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
