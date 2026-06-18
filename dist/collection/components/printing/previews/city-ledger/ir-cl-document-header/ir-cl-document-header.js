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
        return (h(Host, { key: '654de7f40107663542334339a4ba63bf919c6b44' }, h("header", { key: '193383a20e308fd8bde50b00d95b45092d713c7f', class: "invoice__header" }, h("h3", { key: 'b1cc9b191eadbfde6bfb75d7d849bbe6b3ed0ccd', class: "invoice__title" }, this.documentTitle), h("section", { key: 'fd5c972bbf69c42f8db3d370d093e02223ca49ad', class: "invoice__layout" }, h("div", { key: '6b2f8c60856563b3a1f87f35cf13bd63dc1b0404', class: "invoice__column invoice__column--details" }, h("div", { key: '346fa6f4eb35ab5ae3fe6a81f00de319f8a14d86', class: "invoice__details" }, this.documentNumber && (h("div", { key: '54c4282ab3a9185a91ea01e460af25bf0956073f', class: "invoice__meta-row" }, h("span", { key: 'e4cb96ffa058c813368724f0e90066227f1f2bf7', class: "invoice__meta-label" }, "Document #"), h("span", { key: '999a5a0d6ddec96419e132b51d894a5b45b66e51', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'f1719377c0a492b16849bca562eda761b2abccd7', class: "invoice__meta-row" }, h("span", { key: '9eda31ea8496c58d681f45961c19a6dcfe7536c9', class: "invoice__meta-label" }, "Date"), h("span", { key: '2c1c3b3b6758bc7c184ae8eb265970b41d005bd7', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '2e380447f6cac86ec7cd22e8d9c8afa7aae18a42', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '9995ebe15f2fab6382dbbc347ec8850ca37ddd51', class: "section-heading" }, "Bill To"), h("div", { key: 'da7aeb5f5a91f4056f65c23e30f02bbef6cf1869', class: "bill-to" }, h("p", { key: '8336d887c3b3d702f86ca51262aa6bdf5c76b11f', class: "bill-to__name" }, this.agentName))))), h("div", { key: '740a6a478c4ff71b0ebf28800307a8de21291917', class: "invoice__column invoice__column--property" }, h("div", { key: '7a22bab50e4153827aa88fda210bc6086eae125e', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '356f3961f6a0d8744f166758ffaafa6db52e1667', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'deb41eeb9bd7cd8a0972f39f5dd962510b79dc7e', class: "property-overview__text" }, h("p", { key: '12e1ead2b65d68cfdc0554bdab21a40fe631ef64', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'b26ddb03e10ab04f4f244ae5eb1ee0507bc4b451', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'd303c5ceaff12b5ba854573c394ed43f758426c4', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '862c21e338634500519e1aceb45551be3a0363c8', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '7fcb181a5e1c84cb1802853990c81d541e4ebd1e', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'fdc18f7f058cb792340ae61f2171147c71a4e78f', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
