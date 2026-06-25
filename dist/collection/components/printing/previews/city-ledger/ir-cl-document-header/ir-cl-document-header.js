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
        return (h(Host, { key: '3838aa6e0fe0455f4e73fadd7c0b4d8f30549e03' }, h("header", { key: '695555ad270c4448a22681c81a59005849525692', class: "invoice__header" }, h("h3", { key: '0d68c4851ab0ef53ab046a4b44a6ef4459fcfde4', class: "invoice__title" }, this.documentTitle), h("section", { key: 'd1f070a5dc7590357a9b83c671e348c677a57493', class: "invoice__layout" }, h("div", { key: 'e56fee98c330194a5f57b5f6af634b170f82b2ef', class: "invoice__column invoice__column--details" }, h("div", { key: 'a8ceb8fe482f2d4ee3d665968f14d68f5c3e5b08', class: "invoice__details" }, this.documentNumber && (h("div", { key: '035ba262b067911b00834b2f5764e90733f174dd', class: "invoice__meta-row" }, h("span", { key: '90ecf522adf81820978ff6fc80fba016386f2f2d', class: "invoice__meta-label" }, "Document #"), h("span", { key: '891ab7e48be4f56cfb89577daa23aa0d3b2cd977', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'f64b3c54baaef3e9410afb35815d5191c6e59e28', class: "invoice__meta-row" }, h("span", { key: '1deda75a32382672910bcee9c9a4930d44f56465', class: "invoice__meta-label" }, "Date"), h("span", { key: '730cdf311ba6448a18a8866ea97de02a7f88a758', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'f386cf6154ec0a5b088fc60ea02096c6aa84a942', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '19cb4c2db1b7237fbdca91e1d258e8613d69ba61', class: "section-heading" }, "Bill To"), h("div", { key: '79928930a8620bab56c2ae774237faf0acf2c47a', class: "bill-to" }, h("p", { key: '22f935470916380fd32bcf653dcf11e2fe3ff9b2', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'd16c3098fad9e7ab18705c8a3ccbf0e6def5cf6b', class: "invoice__column invoice__column--property" }, h("div", { key: '7519d8b3a767630f46c43e7abd0a85c805ad5fae', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '26050b11dfe0469b441aa229cc8c64d4cc36e9cf', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'c50f06c5c65d04b8066be36a435bc3db65b4c838', class: "property-overview__text" }, h("p", { key: '1e0e3392e0d2a77006e724de691ff3d472b8fd51', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '9cded4b4ee18bdf7590634ab9b155cc912bfcd89', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '89305f9b7d3af61e505def227a4e147b3a2f83fe', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'efe79151c08f5922e819faad093673c986e9fe02', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'd95d33f9ba70e6a8f223d8c697ad94fff45d3f20', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'b6d85bd28c9384e0a4ec3d587d5f5e8653becb9e', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
