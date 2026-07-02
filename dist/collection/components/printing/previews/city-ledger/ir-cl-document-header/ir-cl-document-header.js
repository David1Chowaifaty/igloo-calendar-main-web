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
        return (h(Host, { key: '1c24bfa8eba457fe05c75ed1be4afe30250b78f6' }, h("header", { key: 'd3810b865b3e58e61387d4a2203b1cc910631b8f', class: "invoice__header" }, h("h3", { key: 'bbfaa5ba8277c665f47a6b121aa991e54da68ff1', class: "invoice__title" }, this.documentTitle), h("section", { key: 'cfcba206d69080207bc8f60a322ee8eb54cea4de', class: "invoice__layout" }, h("div", { key: '49468ab760f9952ada1eaf10d5d1e52bde0bcd6f', class: "invoice__column invoice__column--details" }, h("div", { key: 'ef24caedbcba417582632c32b3700c6fe0981ff7', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'c129f7e4021800bc72a6e19d15f8a408915a03e0', class: "invoice__meta-row" }, h("span", { key: 'cbdcf36e8f6938f98d8b8d4cae93cf191a9764f4', class: "invoice__meta-label" }, "Document #"), h("span", { key: '00ec10d316cde17564505dfe7ca67e78c0723e8f', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '306ce84ea68951700190d1ecf1729a0abe9e178a', class: "invoice__meta-row" }, h("span", { key: '1e0b86a94f5e5e22764ec95a5794155514055ee8', class: "invoice__meta-label" }, "Date"), h("span", { key: '4af3d4e14c19f8e9edf3a48ed5b056e06ff8269b', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'c83cbd618c482851ec081e813031f95bd0d2aaf1', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: 'b5fcf4d0fdc537cdeed7a03f557a3de0b9032ea0', class: "section-heading" }, "Bill To"), h("div", { key: '39afa6988314317fd60e8d50eb66bba93256b76d', class: "bill-to" }, h("p", { key: '5d179219feed2793311be39caaa9e6c642ab25d2', class: "bill-to__name" }, this.agentName))))), h("div", { key: '32cf19bc53a671c5c3a5a9e66a0a68a13e6ce5c1', class: "invoice__column invoice__column--property" }, h("div", { key: '88b0e625743f70da0fcf9a4f7b8560b02adb7321', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '980730a68df4e1b5ca3f98a578daeef31c48cd02', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'b07715a08d29ccd05ead35dd862176d924336d0e', class: "property-overview__text" }, h("p", { key: '8e618d64d7e49ee9a1bb0c651d0fc6d8f37cd74f', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '3db3d241acee3b2564d4009c8e4669e5b2eed2ff', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'cbf1dfe5f61324d874246a15cdf0ab78c61d80c8', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '73ac6357870e247847df15f772b30d28d52c6977', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '3e90b9aba5f84a256a426a154890e487e6beffb5', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '4e819918d31a6c5a15f416c819f5947e4c24dc46', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
