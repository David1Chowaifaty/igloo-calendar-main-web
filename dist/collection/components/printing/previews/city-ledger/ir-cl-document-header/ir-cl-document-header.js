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
        return (h(Host, { key: 'ed051cad251789c6bf597fbc1b10f206761593b7' }, h("header", { key: '16362721eb0ea2a8a757bb188f70e125b621527b', class: "invoice__header" }, h("h3", { key: 'a3941457a1644fa86b4b2d3530d78a9c0c4cd71a', class: "invoice__title" }, this.documentTitle), h("section", { key: 'b862ba4b11ad1d05c8580cfe0cd63c986702495a', class: "invoice__layout" }, h("div", { key: '577e138c31f6521bdd03a3d540875a2a13c496fd', class: "invoice__column invoice__column--details" }, h("div", { key: '1f35d0a0a3cdd767e69bda6f8c491437f6d4d0aa', class: "invoice__details" }, this.documentNumber && (h("div", { key: '635281feddad153bf162ed8499ca1965385af09c', class: "invoice__meta-row" }, h("span", { key: '90c3b59458e8be5063b64309d0913a0dfef4fff4', class: "invoice__meta-label" }, "Document #"), h("span", { key: 'd4245ed4f2c5079db5d4044cafe268cccdc4df7e', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '37faa4883f4079821a1d2038c41cec84a1f17077', class: "invoice__meta-row" }, h("span", { key: '2338d4fb70fcff3eb1048c58f07d9201bda6c9b1', class: "invoice__meta-label" }, "Date"), h("span", { key: '8d5dbf5ecba253e6be9868f952b8d60132323b90', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'bd12d4e4c212e75471764b274e1216e3dde8460a', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '92cf9d3cf8a898761f8f755894a0ff263b79dea9', class: "section-heading" }, "Bill To"), h("div", { key: 'f8a2eff610e5b9dc711c704739222de198e6d86b', class: "bill-to" }, h("p", { key: 'fc75b4f513150bfae1817a6abe31fde2744c450f', class: "bill-to__name" }, this.agentName))))), h("div", { key: '6050ee24718bed415cb8320a91a6d0c4bd2b704a', class: "invoice__column invoice__column--property" }, h("div", { key: 'edcfe5155a4cd85415f17a191c406681d670fcfe', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '877d148070474ac77a9af681ec819cb1cfbc44f3', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '3b9074d1f34c734feeb03f753761b62373e75f1d', class: "property-overview__text" }, h("p", { key: '03b578cc4ee3fc618125fa61640c74d37ad909c0', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'ad28d2a31e08e1c3fcba5ab0434bfd53f1471d96', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'f7959fda62a85d6c65e04b313325979ad1121f6d', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '6b1515887d5abdddb0c61cbff3d9df9ffe814413', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '471fdd52cb12b0361c1d6328e895e4f6600760c0', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '3f41abcfd45c21cd66825e58b8fcab3e5358c0ff', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
