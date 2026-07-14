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
        return (h(Host, { key: '0d3159835915597c01a21a9d54912ab07a33c7ec' }, h("header", { key: '58623d37908e11880eb3265c3543bb7463313482', class: "invoice__header" }, h("h3", { key: 'e3df5f4368eff2bbf36f56da8da758d48c6d7445', class: "invoice__title" }, this.documentTitle), h("section", { key: '3c2aa9fd47493739080307dc34337507a9933ada', class: "invoice__layout" }, h("div", { key: '4740d2bffac4165c7932a0549bc3d87a6bd0b694', class: "invoice__column invoice__column--details" }, h("div", { key: '19050d2443288cf492ea4cb051bbca059226ce24', class: "invoice__details" }, this.documentNumber && (h("div", { key: '7a4e65bf235baafd3ee7aff7bb69d085cd661f25', class: "invoice__meta-row" }, h("span", { key: '919ce6389fb551020817b2c6f3aa5dcf47e89811', class: "invoice__meta-label" }, "Document #"), h("span", { key: '168584bc9a3282495a7c71ef57a618618f5ac572', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'a22ab293fb2e24ff2c05e6b82cb3cbb03db08ecd', class: "invoice__meta-row" }, h("span", { key: 'e0717836a0965fd1d04557824eee96f6d5055d95', class: "invoice__meta-label" }, "Date"), h("span", { key: 'a5c3ac44f9878fa55943a9324cdf847da366973b', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '0f117c6de466d6db08f8bde99bb124b81e7a69d1', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '0ca8a900b9f5c312f530fd3eec5d29ef1f9a3fa9', class: "section-heading" }, "Bill To"), h("div", { key: 'b131503017527b4e7928995e3d4510bfd3cd3422', class: "bill-to" }, h("p", { key: '05f9ac12a8ec51c687a58beabc3d25d595af16bd', class: "bill-to__name" }, this.agentName))))), h("div", { key: '41bad5281cd80cc09e6bbccd9a3a29c991e0f238', class: "invoice__column invoice__column--property" }, h("div", { key: 'ed859101cc6dea3eb0b489829592b53cfa189479', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '69f8258799c147cae084c30aa437e3ebb0d3e024', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '37399de154b08ac0232b6028b3b6c29e60249269', class: "property-overview__text" }, h("p", { key: '1492e18b8acee52626b9284b8a614f633ba65cef', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'e30e32875f3c1a54002ed216724dd666bc783322', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '5576c231a219dfd30e5aca0da26b226a866cb522', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'a056c0663d2f47811b361b541aa66e4a63d259a1', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '61f5457fda4249867ebc4e1b1303fcd8c128f016', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '7bb450dad42058d36ce7c87681c670468223a9af', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
