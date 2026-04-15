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
        return (h(Host, { key: 'f41db6b71f40b0ae39d4ba9c7233528ed0e463f3' }, h("header", { key: 'c518688619a9f40f8e6e05fe0f1b0bb90d737510', class: "invoice__header" }, h("h3", { key: 'd87d7c2b4e98f9693793c89f3368fbf445e6e9ec', class: "invoice__title" }, this.documentTitle), h("section", { key: '481c3c9a4b23ff92713d99b6930085c6f37fbb59', class: "invoice__layout" }, h("div", { key: '380dfd1d5ba71676a1774040254b8409ace7cfa2', class: "invoice__column invoice__column--details" }, h("div", { key: '18e9aecc42b1593057cf6f0abeddb8ca424d34e3', class: "invoice__details" }, this.documentNumber && (h("div", { key: '3b38049da6e64abf036bd8877171976e95b7feea', class: "invoice__meta-row" }, h("span", { key: '7e065c6a53ff0b559fb3df7585fb0c193d2ec553', class: "invoice__meta-label" }, "Document #"), h("span", { key: '7ebbbf88c04a51eac25d785fb1094d2495f353d9', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '1f05d27538d62fa56fc5a3ea0e8fe5f9ea31a738', class: "invoice__meta-row" }, h("span", { key: '9931905e539a008db93c0bda8301575f77033a96', class: "invoice__meta-label" }, "Date"), h("span", { key: '85f19e14a6f8470fc21c1a72b8ae5dc0a1a12aaa', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'cc664f3ae60a66206155c50d354ea2ace2b16475', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '8e851991068581fc59605e5a71ba7ff5cdfa14ad', class: "section-heading" }, "Bill To"), h("div", { key: '3b3c1547d75cf46e73fa04dafe33657c177df6dd', class: "bill-to" }, h("p", { key: '4e26f2b30c208b2d243f71c79aca19decb60092f', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'e14e6ac3578d824411ce59893f26b42f6091e1a0', class: "invoice__column invoice__column--property" }, h("div", { key: 'cd7dbadda15aefec0b5e1af06430a06e7e59de23', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '5b7a872e30c0cfc0c3fc8b421d0e18c3b460dcd0', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'd9fc2df77b53430a36961deb27032f39a2e58811', class: "property-overview__text" }, h("p", { key: '718fa9dde28c293080e8057aa84253a0cf7cdfc5', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '357702bfaf69ed6eeacb8c7354d0833da64d8c7b', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'ca5556a8f0e0dd491d0402dff6f88e84c3a835c7', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'f919761d0f8aa0c73a3b3baec3df6e30de0fd385', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'd358d47e3b84d58910489837e78df2b0d124894a', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'db23a861025e9fcd2d3e1561505499465bd93799', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
