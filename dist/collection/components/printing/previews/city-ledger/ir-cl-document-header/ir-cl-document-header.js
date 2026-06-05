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
        return (h(Host, { key: 'd68fcea9078b4895bdaa5ec9bd9bff1053bd37de' }, h("header", { key: 'd18d2dabc3cdc4290dc69d364997c7170794d4d2', class: "invoice__header" }, h("h3", { key: '530ad0f00eab41a31ce8123d334ea549896d8863', class: "invoice__title" }, this.documentTitle), h("section", { key: '9117f98250146190a1511cc2100eee0f91c46936', class: "invoice__layout" }, h("div", { key: 'e9639e2cbe37eb96ff4c6f7c214de04154707b14', class: "invoice__column invoice__column--details" }, h("div", { key: '6f357ace389693e29182916781fb89c756f73c60', class: "invoice__details" }, this.documentNumber && (h("div", { key: '23b7d49c482abd666ef95f5f8da9a8025b72aced', class: "invoice__meta-row" }, h("span", { key: 'cb4c78031764f82d276b905a77b1ca31f529382a', class: "invoice__meta-label" }, "Document #"), h("span", { key: '9c105d106476d398662eb2c038e5adf817cb562d', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '123f82755ccf924cd84286d79dc53f01d7f2ca80', class: "invoice__meta-row" }, h("span", { key: 'a75e2c25a600c876d9bf14f47f4bfaceda27c730', class: "invoice__meta-label" }, "Date"), h("span", { key: '997a4cdf16ff7cc0f904a463ac344d1292a78128', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'd7d3418138ecb075e641f143cb707f68155b42a0', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: 'ba242920d3713d5e92f1f6f9d90fd39be0df199a', class: "section-heading" }, "Bill To"), h("div", { key: '904c2253f139efd44145281f21e63e9eb9bc1a85', class: "bill-to" }, h("p", { key: '904dcf6f366a4813ba3a1beae381ea648dfbb8a1', class: "bill-to__name" }, this.agentName))))), h("div", { key: '69dec29f60b97f26209bf99f3e4b7fc8b2d912af', class: "invoice__column invoice__column--property" }, h("div", { key: '5a86524d8f0c3fdc65da93f7f213b68f0697818f', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'ee33a747710c16a0dbd10850e0a492d76813fe43', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '20de5f19c0b35d7f146999d038583011bf44261e', class: "property-overview__text" }, h("p", { key: '5103bf3e2837ea44449770bf8ed6fef618e1ba17', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '50cf625b83da47c60b79977e7c1e03f5b556200a', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '20e8c1967bda4ada300fa02376248370a8ba455f', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '56f96916d94a68e9c6f6315514681f066f81319f', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '06928b0a890f78573897c8861c581e3c7021d45c', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '1368c5241e05e4a3273e7467127ad5984fb7be4c', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
                "attribute": "document-type",
                "reflect": false,
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
                            "id": "src/models/property.ts::IProperty"
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
                "attribute": "document-number",
                "reflect": false
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
                "attribute": "agent-name",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-cl-document-header.js.map
