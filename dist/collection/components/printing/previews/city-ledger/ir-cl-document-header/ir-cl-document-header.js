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
        return (h(Host, { key: '435cb3f81898bcbcbabc37a2acf506edf11cea78' }, h("header", { key: 'e324f138cf5c9e05434814c2279a5278845359a6', class: "invoice__header" }, h("h3", { key: '1fec2e5ad75ba71fad87343dbb4764b545f6049c', class: "invoice__title" }, this.documentTitle), h("section", { key: '242f308af25e6421b3bd39bee2fdaee3dbc888e4', class: "invoice__layout" }, h("div", { key: 'b0d7f2b79b2f6de0e58e93c5052f162a65259308', class: "invoice__column invoice__column--details" }, h("div", { key: '70a83dc3cebfed8a9c5400ed030e3692392548ea', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'c6548b8fb6d4218a077acda306596d4664839484', class: "invoice__meta-row" }, h("span", { key: '96897c73acaccd194efc5f702a0f607dc54dd65b', class: "invoice__meta-label" }, "Document #"), h("span", { key: 'bf1cc8002ddf168af5741c6fcac5d46afc1f9b4b', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'c6de0f01f5decb23f56bf15e4ebfe85ff0408e68', class: "invoice__meta-row" }, h("span", { key: 'ace8d39e346e02783390d9adb4385c1d27a9496f', class: "invoice__meta-label" }, "Date"), h("span", { key: '42c0eb0ed5c05f82a0c6e7ac83f78b9b40741ff6', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'bdd8724b6817b73905affb588f778cdce42f85d7', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '18d1439ee7d703a7bf481c149fbbdfe7991c1560', class: "section-heading" }, "Bill To"), h("div", { key: 'f13095ea58f089f5dc8866aeef09a72cb6642494', class: "bill-to" }, h("p", { key: '3e75387039c582901391d3da3d096e6435475ff0', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'a967eb3f38fe42519143d80138fcd28b849fcc1e', class: "invoice__column invoice__column--property" }, h("div", { key: '98f6221171950bc058360cd6b79dcdbe60880579', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '76ae72c32c95134c6aa8f9ee8292f0d325318ea7', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '4924951b3c40914838f863bb0416ce4b9b8a3f64', class: "property-overview__text" }, h("p", { key: '65cc6101ac829c9cbff2a4eeeaeee5425835c8c0', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '04f744c7c260316be432f8f171f514f8986f84b1', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'aa053ec2473268653daf527850c87d081fc4dead', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '59a2020bd1762b296fd701e8613cbf3e8e9afe10', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'f61d99935f8cea2b1a137f3d0233e04ee7fef682', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '1ce7cec4c5d92a86f4fc1c9b7cfa7ce4b12ccd2f', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
