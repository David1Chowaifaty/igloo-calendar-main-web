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
        return (h(Host, { key: '07543e565e655e83084ec697425b6b8e1e5d3433' }, h("header", { key: 'c05fd685c253167d7bff26a3a4bdd7967216b48c', class: "invoice__header" }, h("h3", { key: '5fb567dd7e409a65c34e6c4e528cb07c3f75f1ef', class: "invoice__title" }, this.documentTitle), h("section", { key: 'a2798dea0c25635f72dd876f731f3cce6f6bf8a6', class: "invoice__layout" }, h("div", { key: 'ca39391621396c07c2b93e4349e793522f1bcf93', class: "invoice__column invoice__column--details" }, h("div", { key: '18eea699b49ca03539796f41b9295fc6338fb13c', class: "invoice__details" }, this.documentNumber && (h("div", { key: '3c020e195e9d19c5d41f6aa03398723252f4ac3f', class: "invoice__meta-row" }, h("span", { key: '747f455e8b51b58adf401e36df200f7e0f07965e', class: "invoice__meta-label" }, "Document #"), h("span", { key: 'de9db0430a8430266dbf64b22095efc2b1b03d29', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '9d491b5608fae22a89d5b3032552919390b5ea54', class: "invoice__meta-row" }, h("span", { key: '750558d5ee2e9811a76b7f0a594c23f919e53999', class: "invoice__meta-label" }, "Date"), h("span", { key: 'd7e5daaa2e7b69a2d88ec0c391598c463584433e', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '453fa915c1c443840976096914c857d9f375adda', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: 'f3a345f94bdf0c052cc5ac4d0e0062e7f4eae0c0', class: "section-heading" }, "Bill To"), h("div", { key: 'd5e5255fd098e359f8e9eb0e408e095ce4ed8f31', class: "bill-to" }, h("p", { key: '7f9f3ff1efa6063b431676e8d343ef3ff7926569', class: "bill-to__name" }, this.agentName))))), h("div", { key: '16f7e74a477093c8102a48e8c9ec8199ae39f66a', class: "invoice__column invoice__column--property" }, h("div", { key: '2e9ead4a5bae36b76f35a82a15f5ff62d35df32d', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'ea51cf680e52831d826130254110b77412f13ba7', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '6b21086e7c74d3277a13a1599684845265713a8a', class: "property-overview__text" }, h("p", { key: 'b2004c1cb2d1c5fbc5a89ec56f67da0c94326b56', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '7bc7a8bd83c7b39e953a9fe2b1344cbe6f749c4a', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '549de2e50bb81d5c3e5d7c2b85350374eae25a89', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '6c856dd2c21ca4f45987414e9e5f6db549858aa4', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '577b6e3e4ddc0938431305277497701bd499d177', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'ce50a7ca2ed2d339cc6654f161860e40b366a848', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
