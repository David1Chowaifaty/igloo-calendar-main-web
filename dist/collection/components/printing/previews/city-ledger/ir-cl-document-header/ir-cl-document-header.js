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
        return (h(Host, { key: 'd23b074bf3fae5b46e090508bbccc963e6c7a654' }, h("header", { key: 'bb30023c2f2a008d034d62f32e61e730d381b412', class: "invoice__header" }, h("h3", { key: '4d16fd3cd36b50f46433eea8b26ead2e838a2e4b', class: "invoice__title" }, this.documentTitle), h("section", { key: '90ef798e99f3d33159c52a427f6ef1190a1c6b9a', class: "invoice__layout" }, h("div", { key: 'e61b9edc7f9814ce2ade5f341cd7b1844dec26d1', class: "invoice__column invoice__column--details" }, h("div", { key: 'edfb455331f7ed720efa8e51c51a25b7df499f2d', class: "invoice__details" }, this.documentNumber && (h("div", { key: '4b6f544e07665fd3a002fdb415c29882b3664087', class: "invoice__meta-row" }, h("span", { key: '600869e12dc8b1b7a69828fb5c23c3809aeb5f17', class: "invoice__meta-label" }, "Document #"), h("span", { key: '27f32e237f8c74cebac4eb94f498ddd140133e0b', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '43efaac3a8cd23519bdfc98a308b9eaf3ed6e15d', class: "invoice__meta-row" }, h("span", { key: 'e3cc3af6833d90d0947c52d97117236cf0263a43', class: "invoice__meta-label" }, "Date"), h("span", { key: '7dc60dc66608bd6b833a00bb8b0bc28df021301b', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '7f3d6b74b56f0bc0690ff9be6b7654a24f55d864', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '0768359357218f20bbd7044ae124ab173465b7fe', class: "section-heading" }, "Bill To"), h("div", { key: '1b5ae8fc5e7eca9336916e31da620ca41d2cc306', class: "bill-to" }, h("p", { key: '08433d9cbc67b3d8f14132206f387723c7b5c600', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'b2380d67d5588aea2df3052fbacf20296a6db130', class: "invoice__column invoice__column--property" }, h("div", { key: '6b2393fe9eaf86c1ebab49148875195cfda5ef07', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'f257f3a20098981234fe68d36fa34984ea34e9a2', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '65daa032c16ac440db288f303e60e917b6193ef5', class: "property-overview__text" }, h("p", { key: '6ef3018a1d63a266e981c9f322750b5d0efe9a9b', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '24a22599241b39f6c86c1ee5ae3bc0bdd7b23a90', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'b8f1980c7056aeda5d5b298e0fc25a1f7efd2ace', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'f4f3c3d2da092119882781bb547e0b8eb42848bc', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'f9b3034d9852044bf77089076b1e6f3777d281da', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'de3d0922fc0cb6353d8428ec4bf528c8d702b4c7', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
