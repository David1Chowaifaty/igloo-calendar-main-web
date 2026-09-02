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
        return (h(Host, { key: 'b4a0b56b3fce6a976311d21f1e37e90c13fa989c' }, h("header", { key: '0b2ee5e3886d9ac3e11b7a60a378acfedc3c1189', class: "invoice__header" }, h("h3", { key: 'a7ea7d526fbd4024e9ad562186b29ced5f951cff', class: "invoice__title" }, this.documentTitle), h("section", { key: 'fe04e3d8523d1b7e2b4497dcff8c4aec7db7ffbe', class: "invoice__layout" }, h("div", { key: 'fc26306fca21072de68640fee6879c61a2c1215b', class: "invoice__column invoice__column--details" }, h("div", { key: '92db3f874693abcc1f2dfe78d41a86e4f70432b4', class: "invoice__details" }, this.documentNumber && (h("div", { key: '951dddfaf7a6fa88bbca76f48d99c21c3efa3543', class: "invoice__meta-row" }, h("span", { key: '674a195208aaa11b60db614ff2266d726541de8a', class: "invoice__meta-label" }, "Document #"), h("span", { key: 'e52c8022bc3e0984e85ad554fa7ddea3065c453e', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'cc5520a695e70af686baf6c0ccfca0122661f7d2', class: "invoice__meta-row" }, h("span", { key: '69f199a85774c4ea67f9b9f0d1dc0fcc49a4f826', class: "invoice__meta-label" }, "Date"), h("span", { key: '827d2fc1853375414538bd867f3a1af99d6c60c4', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'e52f5c38a17b71e9b77080fdf3f3c9f70d1c5b4e', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '8d2ccc8febc252422e54a4d21e228e21058af063', class: "section-heading" }, "Bill To"), h("div", { key: 'be76e1e740286fb501d943d0d7eebe098dfd35a7', class: "bill-to" }, h("p", { key: '2ba78ed29cf880a3564f041df9e3001daa9d86d1', class: "bill-to__name" }, this.agentName))))), h("div", { key: '169d340befcc71b026c1e2a8c5393d8f8122bda5', class: "invoice__column invoice__column--property" }, h("div", { key: 'a1a0038bd6b357a2630e9f9d5360e3b68b47cf6a', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'e2f8111d171f89ec9468843310f1467737c0c624', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '5bba085dbcb291882b463c1f6cbca4a9f5d21165', class: "property-overview__text" }, h("p", { key: 'ac18bfdcfa678916bea52d292202f15fcdfa4b2a', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'fdecb6cadf56cf3610192968f9dc53974ffd889e', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '7d4a82a3ecb1694d0d9271cef18868daa97ab9ad', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'dfa58fd8481391702eceabf55eaff660cf61c124', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '09c5ba2cfc8310c1398e5491aa1705070dc13104', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'a000518a0717bfbdabe374ed8f3629faee57b148', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
