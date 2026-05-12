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
        return (h(Host, { key: 'a09567ad403bdfb59b11b2c23008c841f8cc4389' }, h("header", { key: 'd82459f03fd4ef2a83f8b6a1e9634bf11c40f855', class: "invoice__header" }, h("h3", { key: 'e7fbc7b2c45e8514f74551d5072bde86fd81ae50', class: "invoice__title" }, this.documentTitle), h("section", { key: '2058e0230de7bd6e29daa4a4ad7fe915696352f9', class: "invoice__layout" }, h("div", { key: '3a4129005647c6edc1ef146b75f491e685b4b930', class: "invoice__column invoice__column--details" }, h("div", { key: '9239fb3cbdae367659e0ad6d7e2352a6fdefce6a', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'bce4fcac14d3474bd46fe37bc8c15fc90125e8cb', class: "invoice__meta-row" }, h("span", { key: 'acea241869ba0220f76952df8335733cf501404e', class: "invoice__meta-label" }, "Document #"), h("span", { key: '4779a3e4369ebb4660ba4914224c97bd0e1b674b', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'e36bb1e92c9ca5f0495d895b37174f684d98f49e', class: "invoice__meta-row" }, h("span", { key: 'c53c09cd353a191be3ca50227658c0da8ff23070', class: "invoice__meta-label" }, "Date"), h("span", { key: '897d83ee517d2bd2eeab2344f34ae09a3f82d30f', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'ee1f3e58f873a830b974918bb67a8d1abd2e89da', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: 'b4914d330826d6b7ae00d00916b94e87afb42908', class: "section-heading" }, "Bill To"), h("div", { key: 'a5fee0acaa40904899d9443a0c51bd42193d8261', class: "bill-to" }, h("p", { key: '85f936b40396584a1ed1e870c5aee129f98b6f99', class: "bill-to__name" }, this.agentName))))), h("div", { key: '830605114e8b3585cb862753573e2a0e5b87270f', class: "invoice__column invoice__column--property" }, h("div", { key: 'c4055d43a53b00eafd3f8b3489cfec98b81afeac', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '7b7d53ba4f9f3ec410708442b0a394a4c2352e80', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '73e8ea9517f63424c973f6942c5d8afdb6e79e71', class: "property-overview__text" }, h("p", { key: 'e58781b8fa7ba552b35d6c8d2df447934e9257f6', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '547435b3eb368cc63c3ee85038b1105f9e16b724', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '66587f3293ea6246ed6d449c3443c007cf90ed98', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'e655a195fbe50ee9caa80117cd5337f464ef6cfb', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'f14958eb840bf90fb46b0a0cef83d08b4c4e09cf', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '96681af93f97a781eb930944e965557bfcac3dde', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
