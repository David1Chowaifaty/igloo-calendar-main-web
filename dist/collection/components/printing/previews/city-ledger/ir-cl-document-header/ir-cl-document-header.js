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
        return (h(Host, { key: 'be95b377d5046835fcb860768e9e00e37f2ef614' }, h("header", { key: '8d5764d35cebaa2280ef58ff3c0c724894f790b4', class: "invoice__header" }, h("h3", { key: 'a64808271d9606201ca03a910d0a9303d73b3a84', class: "invoice__title" }, this.documentTitle), h("section", { key: 'b77d872e5d0a3c210617908a206ac5d3e5933024', class: "invoice__layout" }, h("div", { key: '5f518be9fbe284acfeaf440a9bb04c39927898c4', class: "invoice__column invoice__column--details" }, h("div", { key: '0a67388945d724d7145830aee853b70202936ee2', class: "invoice__details" }, this.documentNumber && (h("div", { key: '72586667b156327a68ffc7d92767d0840c3bd698', class: "invoice__meta-row" }, h("span", { key: '580c10d304b5572d2eb6d03ae58c21e0033ccafc', class: "invoice__meta-label" }, "Document #"), h("span", { key: '34376fcfbbe3a21dd27de6a5b6a6f101acdde56f', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '6718872a844c10a4c16df9646c07951dd4614241', class: "invoice__meta-row" }, h("span", { key: '8032ed38b62570d049e62597ba585bf297a5cb5a', class: "invoice__meta-label" }, "Date"), h("span", { key: 'c817166cae3d2ebdcd79d6ff17094b90aaea60d4', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '4590e865bdcb858427cad3ef266df8f83138ed72', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '469698f546e883f19739c2b1e2d51808d5207cf4', class: "section-heading" }, "Bill To"), h("div", { key: '666d8e1c3e4bc853b9c1030fe9a09ad1b8b66619', class: "bill-to" }, h("p", { key: 'f9485a44182b0816ed087c0ca646bf0104e4e371', class: "bill-to__name" }, this.agentName))))), h("div", { key: '7d93083f28cd4c2264ad66e42dd99ce021143429', class: "invoice__column invoice__column--property" }, h("div", { key: '955538c43a3bbe18d395a0bfb7500dd4b50e3191', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '4c247abc11338ab4af0ac16cf241db27de1cdd55', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '41fe9c53b4b264527954ed3618e193c368d0560c', class: "property-overview__text" }, h("p", { key: '7189bca5b56abe36cc281adf50b436141d11aedb', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '498d1a6d72b49267fe3faaf15630de2dc6318159', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '3cc209be3ef85cde270a9e7f9bda9b86a021675a', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '2397829a6ae21de49a6f3f6bd01a4ca7266c8db4', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '44b566cdd05d8391dc31cf3a874b67578f614451', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'c185507e095bc333d5bf7bd9ee9198e4d945836d', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
