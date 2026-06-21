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
        return (h(Host, { key: '7999037250dd296a0417e722091afa87ef22925a' }, h("header", { key: '51874e211d1fec9b17996934a69375da5233df44', class: "invoice__header" }, h("h3", { key: '71b8811f63f0ff88d00a3144f346674a1442cc48', class: "invoice__title" }, this.documentTitle), h("section", { key: 'ffb295f10c9a0c02de0fd0f495696ee826293ed1', class: "invoice__layout" }, h("div", { key: '0e77141279858f115be9bc77bce8657d185e3b6e', class: "invoice__column invoice__column--details" }, h("div", { key: '49f169efb847d9ea09429d8c1f8e66d0a9cf07ca', class: "invoice__details" }, this.documentNumber && (h("div", { key: '40fc9314f6ef5d5beea6510dc0fc1ddc88107a5e', class: "invoice__meta-row" }, h("span", { key: '5963a89d06ef9bc4b0a4985a78e0ff948a8497b4', class: "invoice__meta-label" }, "Document #"), h("span", { key: '3fafd833e32d2fd293a1f2bc807f2477e2b8b814', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '6d2f60ab815eb435b97d7de0a86047f002e0cdc6', class: "invoice__meta-row" }, h("span", { key: '9e723cfc724e8eaf12b86c5c642914aaeda0546a', class: "invoice__meta-label" }, "Date"), h("span", { key: '8412c977d743322d0f535d8b9d6b82022df25b24', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '053521c641189007b133391690da933359fcd069', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '953e976bea02f46d3b75bccd1223b40a3728e1c5', class: "section-heading" }, "Bill To"), h("div", { key: '869d2e90843f1fced60f635960987355de44e0a0', class: "bill-to" }, h("p", { key: 'eb2b206d0b44e3374ccad27363591dbaf0090def', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'd00ef7867556d5cca1c728cf6d59f05a6be591ba', class: "invoice__column invoice__column--property" }, h("div", { key: '3defd235376bf79cb4c1483c723b1b8e1baaba26', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'cacc94766edb96d5922388e3a2e006f2086a7171', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'ad3d8ca34c8fddd041122532c3beb0de13d0da35', class: "property-overview__text" }, h("p", { key: '38866bae5bb74fe6cdca40228dac3c89d775b112', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'aa5dcd188c2176902e63be677ef9fa7bd06415ae', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'c3bb8ea4f3e2f0c25e4d7cd4dbca5f3469f119a3', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'c805824f5ba10de2d798b7f339446873657451af', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '510743e4babd652549e8b4be7dcd4b861ed06ace', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '62e37d4e83b2a9c57c0da4963676955dd1f2789d', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
