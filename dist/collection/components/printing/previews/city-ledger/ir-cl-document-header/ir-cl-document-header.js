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
        return (h(Host, { key: '36439bbab225f3eee262ab20e75b39baa45a0ee9' }, h("header", { key: 'd62f102cbe6b1a9ec6e3c36e9b65acfd90036c55', class: "invoice__header" }, h("h3", { key: 'c7d7059473bc385ce26fb289e40ac8e6bb5a82ee', class: "invoice__title" }, this.documentTitle), h("section", { key: '017349516fd977fefc0e789d70ef2b8294e93267', class: "invoice__layout" }, h("div", { key: 'e4345a29d64ed75a7eca518df4b3a17ad4b6cd30', class: "invoice__column invoice__column--details" }, h("div", { key: '8ec5f7bb39bf602e22b20f007fab44e0c2b7b42c', class: "invoice__details" }, this.documentNumber && (h("div", { key: '9764757a0dac247433c555cc7c2fdd4781a753d9', class: "invoice__meta-row" }, h("span", { key: '9f8c28fa461c184ac9fffa91b9f7c6000a131d59', class: "invoice__meta-label" }, "Document #"), h("span", { key: '8d75c3d145e90a1338c241d50738e99e8f1bcc32', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '216ba564049ec83107f8d8f0f7e59e88437709d4', class: "invoice__meta-row" }, h("span", { key: 'c5bb2bacbf9dfa1ed991d69e87375c88106c8f2d', class: "invoice__meta-label" }, "Date"), h("span", { key: 'dcbc67a9d6e8b19476a6f3f1c045436232e993b5', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'ccdeb701c6cc08864827e47f83ea90a3cf9266d0', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '0b87933e065e5ad4c6406c9282e3d2e42360e220', class: "section-heading" }, "Bill To"), h("div", { key: 'b73d8c2a762592852719ba31a9f7ea8ad9fff8ca', class: "bill-to" }, h("p", { key: '2bbaf8eed208224d59e0cf4574e56f2ca40c4823', class: "bill-to__name" }, this.agentName))))), h("div", { key: '8951bfab1e0bd808ba4b9f7d220e88b381eb27e1', class: "invoice__column invoice__column--property" }, h("div", { key: 'ff24b681e3800921c28b639887295a664465754a', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '3824cb195820561e8bcc7f53cf6921b381debe07', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '2e304a1da40125500b406d420ccad08348eabff7', class: "property-overview__text" }, h("p", { key: 'c0f018ea0f0aa202c1034c73efba12af8f7b3440', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '46b31a0d06b84e426d0716a8fa192e2c097ebfc3', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '85d6e571d84ef4ea61527f3f41ddaacef113dc02', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'ab888fe4883bdef9eed511bb92a1e49a330d1373', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'a86d21c3b6fd66ccef11d591004ddf9b8db38dd3', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '0c89dfe7a5230fbdc8e9efa8b102a805ed54228d', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
