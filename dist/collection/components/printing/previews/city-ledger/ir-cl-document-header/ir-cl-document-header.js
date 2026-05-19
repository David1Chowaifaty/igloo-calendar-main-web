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
        return (h(Host, { key: '3a83be60a86aec6a2395f3a617a81e8701a6e4a1' }, h("header", { key: 'ece20b5583e805070f525b007249a3af76f6ce99', class: "invoice__header" }, h("h3", { key: 'b96c6307ee2e47ff07df9f11beab2bf3ee249368', class: "invoice__title" }, this.documentTitle), h("section", { key: '016ac0eca0c1479b66a4f8d04416fd8e081121d2', class: "invoice__layout" }, h("div", { key: '6d6386dc95e046088f05176a2c2ff368ffee54e9', class: "invoice__column invoice__column--details" }, h("div", { key: '9ce9955cafbda6d9bfc3562a4b913a2899abe8b4', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'b897c88e8a62b0cf054795954b9560433e3fdf38', class: "invoice__meta-row" }, h("span", { key: '22fdbdd4f5b084b4a500934628e737c8e049a4e4', class: "invoice__meta-label" }, "Document #"), h("span", { key: '7e013a5d3715a22b8a6bcfcedd49662bc7de286e', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '9b6645a0b49f83e2705737d4d513de9a91755d6e', class: "invoice__meta-row" }, h("span", { key: '06274f6b62ab5978bad9310fbc49b74c1432c65c', class: "invoice__meta-label" }, "Date"), h("span", { key: 'afd3cd0899f29c0ffaf6d238752f70ff08336643', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'a400b5b93c609271e1618266bb17743965d028f4', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '5aba9c5d78218e429a66428e56246e80e7bcb3a9', class: "section-heading" }, "Bill To"), h("div", { key: 'bebc0e681f16d550fcfd43ec73421314a1551b66', class: "bill-to" }, h("p", { key: 'e98abf80616e0ee90be235dd680b8bc21deb6b8a', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'bc2ac8824b054733d782501888a9df5d396bfeda', class: "invoice__column invoice__column--property" }, h("div", { key: '2bbe69ea35e2ee86334d85779774ee8e535718d0', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'b6aa2dd4360ac173203d4a0f15a80dcd83425b19', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '5808e2e9da8d750c9a48798260ac33b3d2204778', class: "property-overview__text" }, h("p", { key: 'e2c8afb88cf1af154b64eb0d3e3f81d83fb87396', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '64d3b24fcdfc57d55ccac254ae149e1e287d090d', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '4ce74beb87bfbb3ef97ad5c9c7605af3f13b288c', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '5620832074b1e846969ac80b8cfad9d99f2473ac', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '5bf13b6904c17f7cf49e7b7f42082553ac939516', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'f3655e053ff4a4a3707e0d34bac7b05b9e140f65', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
