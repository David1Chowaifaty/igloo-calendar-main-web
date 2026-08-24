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
        return (h(Host, { key: '643fc8002715adce5e290c7d2103eafdea835062' }, h("header", { key: 'c03770d44bcea91709071715b7f7813310f99326', class: "invoice__header" }, h("h3", { key: '98d03e23167627e0c6437dbcf8ad2e2731f6c61b', class: "invoice__title" }, this.documentTitle), h("section", { key: '9b7de4c56cbacafd22e77f3278d4e2e43cc1cd45', class: "invoice__layout" }, h("div", { key: '15c3dfa576edf645d4474a904eda2bc3a1091ff9', class: "invoice__column invoice__column--details" }, h("div", { key: '14bda19d754c82a9ff1b16aa85387ab36c18aee0', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'ccde8996d614cd00650a6aff474cd2d1d8335f3f', class: "invoice__meta-row" }, h("span", { key: '21b379b14a14433698bf1f4fae4cbea68a05699a', class: "invoice__meta-label" }, "Document #"), h("span", { key: '8ae84cc942e423e3069e7d5cf4c791eb198f8a98', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'e3e7e85081a8c9003891bd449e36817ff2ca089f', class: "invoice__meta-row" }, h("span", { key: 'ad042f3afd284b0808bcd8d09a6c967ea43570ab', class: "invoice__meta-label" }, "Date"), h("span", { key: 'a038967b3bb38f6d55a76e597c3e0bc1ed3285e1', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '5e23d203bf78483abd652cf93dcf50005a4cd297', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: 'ce00f71423b972e18295eea97c337a3efa9e1229', class: "section-heading" }, "Bill To"), h("div", { key: '72b65457ff935c9b67137f755003ad8d6d9f852b', class: "bill-to" }, h("p", { key: '9b378d3fb1177694d51a08a5d5108a740cc038c7', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'bf9d953c16a837453a66cc5f0f2e74f55edaaf04', class: "invoice__column invoice__column--property" }, h("div", { key: '501e7d4f4154524b046be739094aa5d5435a84d0', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '058e1c81dcdc5e2512b81ff39289f821714d5e1f', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'e596306c3455e214336bb969f4e07fea4ec11653', class: "property-overview__text" }, h("p", { key: '73b28447eda1cc6f62722f044eb1466a320f5981', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'e424fd95abc4a9017d4bca10d2d8ae4494f353c4', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '3000ce9df5dcb037638713313c6074c3ec9f5652', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'b33659e2353bafcc6512641ccf1c8470b894abb1', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '3a274edcdf600c1fabfc31d1b32b3ddc47d9f8a4', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'd6da53b41b4aef4652466eab4c916f3aa382f78e', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
