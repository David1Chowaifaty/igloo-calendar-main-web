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
        return (h(Host, { key: 'd609e85f7bcd8a1233ee48483841cb1b1e90e2be' }, h("header", { key: '2abee288f26ea383d2cbab757c41e82a1e9a1ae8', class: "invoice__header" }, h("h3", { key: '80333790e92ef333958370303c8d5ed65691e77c', class: "invoice__title" }, this.documentTitle), h("section", { key: '5246f72bdbf685c20b4f15810b88fc1a73b20cf6', class: "invoice__layout" }, h("div", { key: 'a80e73a0589587468125db22a2f719ec645d9c02', class: "invoice__column invoice__column--details" }, h("div", { key: '5fa47070a4fb91cbd45a3fce034dc65948ab1bc1', class: "invoice__details" }, this.documentNumber && (h("div", { key: '24db2e675c7d646f9402e18efe50f7afc87d24f1', class: "invoice__meta-row" }, h("span", { key: '395249301c0c5daeeaa2dcd1dd1184fed78a5b70', class: "invoice__meta-label" }, "Document #"), h("span", { key: 'c17ca94e7ac0b2bb7e33d8179509c3bf9bdb35a3', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '437b5a7b64ad962c3702a0630659ba9163f0c380', class: "invoice__meta-row" }, h("span", { key: '08375a8e363cf717a7ba9244d5a2c61fe74ec809', class: "invoice__meta-label" }, "Date"), h("span", { key: 'a3e43280f46fa2fb8af5cd22ac0243fb54ad68f1', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '7c9e5edd218b43a95d6c5bcfef364d5e9bf766a0', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: 'c276f13df4ed189e22b73c2ba64b7a2e42e5fe3f', class: "section-heading" }, "Bill To"), h("div", { key: 'fd849f329d1ed1c6ca1a3ad4f26237bdf24f80f9', class: "bill-to" }, h("p", { key: '7232b7f4892427eb1f9955dc334ef911b3c6e362', class: "bill-to__name" }, this.agentName))))), h("div", { key: '7f52c7b534a30daf7c43383b286e1b3d4ad1e2c8', class: "invoice__column invoice__column--property" }, h("div", { key: '61bebc6e855e21e950f937a36d67432ad8094ed4', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '844d96a37975f25219607cb0e756e1f93859a231', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '912931b47e46447f1e155040b5fed46f099f692f', class: "property-overview__text" }, h("p", { key: '48aa389b8df64a7256d4a2fb41f000ee1992ed13', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '170ab853e4a39e784f17ee38823b886cb1708842', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '1e93a9a23c68222384d0b6845ceed0ba857d3a86', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'a565abb74550674edc0c5886d1b35411aadd67ac', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '31425377db09f59ede773967a9c4f53296f16dee', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '4cbf3e61800ec511ddec658cd1ac1bc6a8696803', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
