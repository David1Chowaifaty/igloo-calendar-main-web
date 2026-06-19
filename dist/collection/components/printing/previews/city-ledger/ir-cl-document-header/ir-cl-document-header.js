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
        return (h(Host, { key: 'b8a8a2ca6d8f76caab70f447f0c51c38bbacbe08' }, h("header", { key: '4454f1b8b416a778fcb61831a72b2a48cba8d37a', class: "invoice__header" }, h("h3", { key: '8a16c39d2773a2f7caf9f222867ee17a6275547a', class: "invoice__title" }, this.documentTitle), h("section", { key: '8c28e3326ddf32d7f6963b378b03951a005512c7', class: "invoice__layout" }, h("div", { key: 'c09c19a44cb21ea69ffd7b8ecffd757f9245f6cc', class: "invoice__column invoice__column--details" }, h("div", { key: 'd71933bcc9326a1bfd0baec56daa4bed2e7f711b', class: "invoice__details" }, this.documentNumber && (h("div", { key: '1aba8d3f5cd5a90ede6470d1bfbe17f84c2abf02', class: "invoice__meta-row" }, h("span", { key: 'dbe9ff841d4484da73ab1b11ea940e8953b53aab', class: "invoice__meta-label" }, "Document #"), h("span", { key: '7d20fa2d9a420d2b8fd2b6e34c8f9df43b9fa04e', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'c0c09049e673cbc54964c12817fb31afd308059f', class: "invoice__meta-row" }, h("span", { key: '4cfa4c4825af2b156c0a95f1416398e30628d1a3', class: "invoice__meta-label" }, "Date"), h("span", { key: '809cc3a25036718fb2f183280bc6dc09c45aea8b', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'b3354e28b495297396addac40636fc41d3eaf81c', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '5df6ce95e788709336a7dd02bf5b48593303711e', class: "section-heading" }, "Bill To"), h("div", { key: '674a380102f0b80471d5bf337fefb9ae1cf4820e', class: "bill-to" }, h("p", { key: '7f3a8e31e64d5b35470f6d64be715b3bed3e2867', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'a08b46c54f650330eeb996186ff0c079a6d8ee3a', class: "invoice__column invoice__column--property" }, h("div", { key: '0c86707b257cfccab683727d22c7c4f95a104af2', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'aef3d430a04578b5d6199fa775b192dca3a81d84', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'b0cc9715302173d26345356c75e20caf7e382c1f', class: "property-overview__text" }, h("p", { key: '22ed668a0c7ae3eb9d835906d62610bba5491133', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'fda715f5280c4952de35eee182fad35b4cf1b3a2', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'dd3fe31701da5b059fa206f2ef3728f02678bd52', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'b09164661b0030cbb475433ff4d310e2185e07d2', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '655c3ac8c7723aa98e035c3fcd74dfd98aa1b51b', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'e8c05a93c2b71ad368c760a0770bc841609eccec', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
