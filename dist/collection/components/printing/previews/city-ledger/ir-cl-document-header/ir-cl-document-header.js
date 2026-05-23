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
        return (h(Host, { key: 'eee22b44ff17740c7c0317abfdcfd90698a8e0a8' }, h("header", { key: '2421f3b68b482c70b234dc946f2f3f2e4b045c5d', class: "invoice__header" }, h("h3", { key: 'c6e0506d70f67ce41b7e685fb8f5242f2061ec15', class: "invoice__title" }, this.documentTitle), h("section", { key: 'd9eee3d00e1c6a6aabd811f9971d39d81aafaa5b', class: "invoice__layout" }, h("div", { key: '0f44d17c91d65637a079540fc04987568a34ef9d', class: "invoice__column invoice__column--details" }, h("div", { key: '17c5b9308b0ca18746b45c083ce07e1c4391a3d6', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'c828d0f6cc5e1d13475764390ab57329b7c313a7', class: "invoice__meta-row" }, h("span", { key: 'd9b4ea5d1e4a39187813b750725effd4097b3175', class: "invoice__meta-label" }, "Document #"), h("span", { key: '89e1e349ae003d7a104588ba781fc829b56bbd24', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'b0ae3c7630d00561feaa506871be7ae225ba5d93', class: "invoice__meta-row" }, h("span", { key: '9ea8af82c6c2505eb6ae8522450d3f2761f5ab9e', class: "invoice__meta-label" }, "Date"), h("span", { key: 'd52b7a1233bdfd38145de797f3c963c1bb294d8e', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'e6301576497ac7c0062c19dbddd1e5483e9774d9', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: 'f13eb6c9078a7f0fdfcbe56255af3458a533bb0f', class: "section-heading" }, "Bill To"), h("div", { key: '87c89172f6aa391756fa33ad5cd3dc2b2852b1f0', class: "bill-to" }, h("p", { key: '3844312533142177a57d1c0b112287e5c1626421', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'e1b6d20128a36cf69551ee468b93f26256053dba', class: "invoice__column invoice__column--property" }, h("div", { key: '46290001f40db66f2664a7b8855dfa1be38323be', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '7bbe80876900864fb431d9c41b010eec1d2f4447', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '66940384d07631a999e75d7739e58220bc9153ef', class: "property-overview__text" }, h("p", { key: '8fce94a0c21d458bfd7355ab1f0d394b1673efe1', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'd0cbe36999abe87a0858a0566ddce96b694ebf94', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'e3bbc7ab6c21ae147d65a0d7057642b696de9d7c', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '4ebd48c567fc511d592b8a794fd39f248cdeb631', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '5da8e2f9fd0fde44db2589aef77824c7cb752fcf', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '9bb1c5fa469be198e53cd110ad111487537d2694', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
