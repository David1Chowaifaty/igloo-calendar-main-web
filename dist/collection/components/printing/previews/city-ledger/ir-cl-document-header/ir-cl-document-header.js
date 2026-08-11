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
        return (h(Host, { key: 'eb6f5b655b4917cccce4ec28e6069a130d71d4ca' }, h("header", { key: '387733e188ef8e39c9757a42112ae362dcafc3c6', class: "invoice__header" }, h("h3", { key: '73b106756e93da51f34fb48e63692ba2ddde3877', class: "invoice__title" }, this.documentTitle), h("section", { key: '0600b120b10c061a732df323efdc9f08c5dd7bde', class: "invoice__layout" }, h("div", { key: '7c95571aaaf1aa686d97157091d432a7e7ad4cbb', class: "invoice__column invoice__column--details" }, h("div", { key: '45ee54943c498ad7116c5b7d5b65146d05cf2f39', class: "invoice__details" }, this.documentNumber && (h("div", { key: '7ff4a100437d18b59ef7df17739c778209bd9917', class: "invoice__meta-row" }, h("span", { key: '2ece5cb65c0845b22dbb5d5c751dde3ede3bff74', class: "invoice__meta-label" }, "Document #"), h("span", { key: '7d68d37d6aab7a1b63bfa17cf526097629b3cb5c', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'f7d58432b202bab101be6df76f244cc470048ae3', class: "invoice__meta-row" }, h("span", { key: '99241cb55503c6d02cb8cb854e1fc83b4a7b32d6', class: "invoice__meta-label" }, "Date"), h("span", { key: 'e23c951ad3812b6e76960dc0354b58d104156e0e', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'a4beda51b1a4efa119d1da3b39c35e95cda8b9d4', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '13777f8423d8b126599ae98d462b4d29a5a6ac3e', class: "section-heading" }, "Bill To"), h("div", { key: 'bd6bd3b0bb4d6890f19dcb05d9263f9cc098451e', class: "bill-to" }, h("p", { key: '84ae496351c3fadc2bc396592e81d910c2a8b167', class: "bill-to__name" }, this.agentName))))), h("div", { key: '80a939716a1c26b6581eac3f5e07a1d1307011f3', class: "invoice__column invoice__column--property" }, h("div", { key: '813e43202ecb0d22084c7ccbaa108dea0d59fe22', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'a7b2bc64ad32a4768ffd17afe345672ee374dc07', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '5edeef96be25039bd93219009bde84e10538893f', class: "property-overview__text" }, h("p", { key: '717a57275b5140e622c2856958adbc07ae7abfa1', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '2c6207c362c329f4353587626ab5ccd11f4fb74d', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'a294094e4c24b431664f7c33ca124c1269dcd9cd', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'c8ffc2a92c54daa6ccbf16f148c2f9873facbf34', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '508c9577dce184bbfcb535dbc2d6724ea0244094', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '1e7568a7ae3194dcc3533aaf37bd37e29aece3bd', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
