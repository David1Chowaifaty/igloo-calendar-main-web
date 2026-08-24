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
        return (h(Host, { key: '2749568a2358a1295e754cec4aca8e4c2c50819a' }, h("header", { key: '34fa153a2033308f9759f22728ea009d967fd027', class: "invoice__header" }, h("h3", { key: 'a6ca8d2ae7c1474b3a14cbac57c9e978442c4bdd', class: "invoice__title" }, this.documentTitle), h("section", { key: '983ff0f05f64b3e0b570cdbb182986b10ee4c3bd', class: "invoice__layout" }, h("div", { key: '0fdda246159af963f973ead0a694ba73ac6441ab', class: "invoice__column invoice__column--details" }, h("div", { key: 'e511514d030f3173a90f3f9b711873b45c7083eb', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'bdb1708efa9c759939353280273be721d3f62052', class: "invoice__meta-row" }, h("span", { key: '631c88413b0bf1c9f4fb2c2cc14cc3fa3ee69f34', class: "invoice__meta-label" }, "Document #"), h("span", { key: 'a171f89dca1febf2e5eec431b0e8bb78ffc9e4ce', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '701310044cc31a2566eaa55dd2a62d707c1b2142', class: "invoice__meta-row" }, h("span", { key: '9a46d1457a095809aca67ee55c8f6b24a0492278', class: "invoice__meta-label" }, "Date"), h("span", { key: 'a39e8ce466e4d76526070618f3d7beb47bcf2170', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '4d9c3a9cd3670c53864fcf926afe0624a16295c4', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '453ad9ed54c0007a0498444a7631bb1a20965784', class: "section-heading" }, "Bill To"), h("div", { key: 'dc1a9b108cc33f8aecdac9e97f4ed804b7956a37', class: "bill-to" }, h("p", { key: 'b2ba9bb93ed13816fbf3fefeb32cf64844f0ea69', class: "bill-to__name" }, this.agentName))))), h("div", { key: '48f0228d5a80492ff448ca9a929d9ee4ad5eab37', class: "invoice__column invoice__column--property" }, h("div", { key: 'cfbca57afa23c26a5d7e9f9379a0e6e2fa2e0c96', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '7538ee7964701488def6b5e51d2c62ecefd1990b', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '2aa5bef8b619fdb243d74dd82baf7c88d17abed9', class: "property-overview__text" }, h("p", { key: '64d714ff90e5dfd5161f7d3b6a1f8fcfaeebaa69', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '3d635742dca358aaf720efaff7c6ce1e16fa2074', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '08c119503bfb46112dc2652c3b247781501c843e', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '6dd283790bf5be6e1f5650170c505a45d2c1b8ae', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '0ec9cfe5bc2377c960041474bfc8fa68aceac06d', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '33b47fc65c3c28211254985ef19757fd937b9889', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
