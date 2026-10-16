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
        return (h(Host, { key: 'bb0405e32daec73b6b5d7f552f1891392fd78bc5' }, h("header", { key: 'bf2d00905dfd9be6c2baa4dfe315288c592a43f8', class: "invoice__header" }, h("h3", { key: 'f183474b1189df891ba880ebed308804452e76e3', class: "invoice__title" }, this.documentTitle), h("section", { key: 'da30033596a71d10d67e23cdb9df651993382db5', class: "invoice__layout" }, h("div", { key: '662c0a8b489daacd4c6fb6613b6e2ac67fb74c87', class: "invoice__column invoice__column--details" }, h("div", { key: '1fd7a6507c470864614cedce179c88e25bc26b38', class: "invoice__details" }, this.documentNumber && (h("div", { key: '432c0b83623ed1c7700192a8dea7e56e0b54338c', class: "invoice__meta-row" }, h("span", { key: '46ab16c372aac56bff40583bd945a57e46ad318e', class: "invoice__meta-label" }, "Document #"), h("span", { key: '2b060d3ae59a0a10ae367a246320a48d3a60d5d2', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'e7ee2a3bb90919a77761b8e520eb39377a789b68', class: "invoice__meta-row" }, h("span", { key: 'f533962b00f242033afa071b01fc5004acf51edb', class: "invoice__meta-label" }, "Date"), h("span", { key: 'ad551b9bc747d7b497dc7c017b97cc646d945f73', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '2833f7bb3d44395417c3666117804136c2298c90', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '8f4cdecb0b326348d3cbc66560e18449ebfa4b82', class: "section-heading" }, "Bill To"), h("div", { key: '41d7fc2bb3c1571aa396153fdfe96055abbad560', class: "bill-to" }, h("p", { key: '05a5b08b79a47e1510de47c83594a33c6071d0f9', class: "bill-to__name" }, this.agentName))))), h("div", { key: '2f1f602918eaa23db0a256f0186b07e030d5d2cf', class: "invoice__column invoice__column--property" }, h("div", { key: '2a2b17268a65c44b23fd2a16ae28ae50acdb9e80', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'd24bf834544dd8b007064fa366c1cf859e3aaf44', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '54591a3b451e8274f9f79c6dfd0f0ede8600790e', class: "property-overview__text" }, h("p", { key: '3075eda221772e86bd0afb851ba7682d6b206012', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '8c4e23cddcec6ebb9499b4b2362013554522e41b', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'd39bee2bc44c6744f46242f7eb92803981150b74', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '344e6cbcda5aa99f4b0853178263545eb6a247e8', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '0b44607f29b8f56bdbba7e37803b6b480d6318b4', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '2149a5ac2d3d1c4780ba23136d4544176de5aaf3', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
