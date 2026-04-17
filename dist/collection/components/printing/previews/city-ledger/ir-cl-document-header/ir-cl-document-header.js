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
        return (h(Host, { key: 'd6be8d6de34edce7da7fcb9bbdb14055cdc37e4e' }, h("header", { key: 'd1dd08e70e55d88e0122ed7f2db345d350bf0848', class: "invoice__header" }, h("h3", { key: 'd72b4dce6a95f2d13f095d679796fb627e9f82bd', class: "invoice__title" }, this.documentTitle), h("section", { key: 'af90659f64e3515f5fc0fa0cb4a6821fd64ef446', class: "invoice__layout" }, h("div", { key: 'defec1c459f0b8a07abaeb185c21d0b9f5b8e3f8', class: "invoice__column invoice__column--details" }, h("div", { key: '99c99ec66505e153e4bf768d7fc168b107eebf3d', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'a770b06b0c0d456fc57f962a0714e35b509c85f7', class: "invoice__meta-row" }, h("span", { key: '6a67b301f221c7beb56ade7fe2b6bf01aefb7212', class: "invoice__meta-label" }, "Document #"), h("span", { key: '2733f097154c55d26d513e9bb14cd701159a60b2', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '81de64678d952b6f0e705a5c0067d87318b01f7f', class: "invoice__meta-row" }, h("span", { key: '1c00e57f88981c65531241bf4974a76914cd177c', class: "invoice__meta-label" }, "Date"), h("span", { key: '939ee6a02ef285c6402412c93b808f8d928996d8', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'dd7409de06d01fb10d0904947c0c4123617e392b', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '70f2a3824869069599f003ad01afb1246ba940b9', class: "section-heading" }, "Bill To"), h("div", { key: 'd90eef8d288223c236ae79b323c7877d3c14bca6', class: "bill-to" }, h("p", { key: '235e1c4639482d9741cf2a14b2f489e200106972', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'e580e7ddab675f77d8879c7f8cd965af6f5eaae3', class: "invoice__column invoice__column--property" }, h("div", { key: 'cf1aab153fd8c0d28dfc8280c2aeef14dcfe3942', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'edb1889e07b49bf01a8df32c2e80ec8344128db9', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '582034ef0774a0889660bad38d970ff6c447197c', class: "property-overview__text" }, h("p", { key: '1fc23ff342b0fe68e8697b744d8a4eb9e3525988', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '22182a740311912b7e5e437d5f7f2c66c8df3d67', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'a9c87104f02efbd8eb63221205261335f3635698', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '301362272c0c483166d1a4e75c15dc757ecf755b', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '4699e5a10e36649211ca02c9b9c377217aca890c', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'f17f7dd0c721b321df6d5107eded421db165c6ab', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
