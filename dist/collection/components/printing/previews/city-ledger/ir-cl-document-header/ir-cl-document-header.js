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
        return (h(Host, { key: 'c4e384c1d7c740b74fd55118179bb7e5a98d7e62' }, h("header", { key: 'b613204e6ba3f931b0ce24426c5c29325933d679', class: "invoice__header" }, h("h3", { key: 'd2d95a136d2eadbe2caa9f207cbe9f95f8c9156d', class: "invoice__title" }, this.documentTitle), h("section", { key: '83d83d693cdb3a805cdba7b63aad19aff7701655', class: "invoice__layout" }, h("div", { key: 'f5e6516dc98a96231363100e57ea1f0085ddd336', class: "invoice__column invoice__column--details" }, h("div", { key: '021c69ecc1c4c6775cbf0e58d91af4edb1c403ae', class: "invoice__details" }, this.documentNumber && (h("div", { key: '5159d08a8a783a3c93c8ec4d7a7137ec26e66334', class: "invoice__meta-row" }, h("span", { key: '10fa2d3ada67f3016d24a3eec406e247ff77188b', class: "invoice__meta-label" }, "Document #"), h("span", { key: '2b84b55e76d1bb76b623821880f82e200b16485f', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'e4c6d93cafb696e520d1cfea3273bdc1d988b5c5', class: "invoice__meta-row" }, h("span", { key: 'a94aa20eaf405cd52212a5a3ed6fa9420a68c7f8', class: "invoice__meta-label" }, "Date"), h("span", { key: '8fb8890aa97d1ddddd051fc52bceccae77d8e605', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '101552a8a0e4d241395dc5bd79c1b91b3801bd63', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: 'b58c06909a3d07f912caef8ae3006af21b415cff', class: "section-heading" }, "Bill To"), h("div", { key: '6268261c769a11f6a029081994122e87a9a9d116', class: "bill-to" }, h("p", { key: 'eb85ca5a7f43be6fa9deef9b964210757cff1484', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'fae118d9417ca344d04e9c531b68a2a31b6868f4', class: "invoice__column invoice__column--property" }, h("div", { key: '087d8682f739545c1677c5f4a2b4623c398f33b8', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'c92c18182f2ab0c99f628fb8ec41c7d5684fb622', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '9904c691b58f394bea95b68197f5d273387a164a', class: "property-overview__text" }, h("p", { key: 'd27df5c41cc8e7a84211d75c725ba411dc2e67de', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '36180f0ef88974428687c2e16028f67a8481a9a3', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'cf94760e6ee2f0604014b7c1981b5c730a8918f5', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'bdd8d494a5bbdcf03044ce522f383d725ce89f8d', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '3150d21d09c5f1044b52db72479d977c31b36d5d', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '5d79e3a3ebbe0cbb8c82a27b9448276d4ef158f7', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
