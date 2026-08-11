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
        return (h(Host, { key: '4becfe727bf6b02a73b5493a1021c6ddbca450f3' }, h("header", { key: '502f910069de3f366475940236b43684311ebeb4', class: "invoice__header" }, h("h3", { key: 'f3d5ecd5926acb26a7cc247c4f58dc190b7531cb', class: "invoice__title" }, this.documentTitle), h("section", { key: '21a828603b3cfb42197ce730b8e5f9b17d8a3a9d', class: "invoice__layout" }, h("div", { key: '929a523008cbb7b8617b9e3ccb3f189b3dcdfb41', class: "invoice__column invoice__column--details" }, h("div", { key: 'dbb4fc346bd582be9e2726c71d238a4b2e1d3f65', class: "invoice__details" }, this.documentNumber && (h("div", { key: '86a1d397f6f0d70e5c18ed05dc28889bacbeaa0f', class: "invoice__meta-row" }, h("span", { key: '7992d887a935f94e2c1bf9a461dcf15c93a99a98', class: "invoice__meta-label" }, "Document #"), h("span", { key: '7efb903fe7ea7edd369942c2dff497ed6386bfd2', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '45c21f6453e2fb9b1bcba2174e66ba20866e917b', class: "invoice__meta-row" }, h("span", { key: '350881a0fc34dddacd968ecbdc833c4ad0820ab6', class: "invoice__meta-label" }, "Date"), h("span", { key: '4660a699daec9753001719bb027f5346541282ae', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '29c678b9fc7a9437955ca5770191150ebd22fec1', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: 'de4fd6869f5cb6c735f614d5f3e6451547465aef', class: "section-heading" }, "Bill To"), h("div", { key: '1adaae4f8016627743164a5599ccb04fb236762e', class: "bill-to" }, h("p", { key: '1094c95abf3684584930f6fd2190c081b87b4a9f', class: "bill-to__name" }, this.agentName))))), h("div", { key: '36b088f2b407f113e4a626895829eaa7a9a1b33c', class: "invoice__column invoice__column--property" }, h("div", { key: 'c8c4b245f5eab2aedcba8d2462a475dea1471f7a', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'b5367297d9a270ebe663358229f29916099d3e36', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '1bf0c5082c22b482e3459ba513e0b7816b4728a7', class: "property-overview__text" }, h("p", { key: 'fd97f226717f958f7e82fb0abf9db7f72e671a5e', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '9bb689a33f539d07ee282181864a77fc34e8080d', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '185842ddd6a49bbea6d76b3ed49490bcc3e4cf8f', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '5df979f4c491305be12920b5cb8284dfd5ba4122', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'bcc387d60896f5fb518cd23e7a21125bf98b00b4', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '04b0bc7c44a555236a60714641b1fa6d54535dcf', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
