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
        return (h(Host, { key: 'ff26dcaa6673726430d9c913b8a86292eb695739' }, h("header", { key: 'd5345aa8c24ed32620e1ee3db98721ae493cd2a6', class: "invoice__header" }, h("h3", { key: '9ec8aa8500ed9088e59c15e4a85065054d5f90be', class: "invoice__title" }, this.documentTitle), h("section", { key: 'bb1cf815400175e1205ca0e52aaddf8001261369', class: "invoice__layout" }, h("div", { key: 'ca172ab5bb8d3d070fe469062bf5bb232e15f4f5', class: "invoice__column invoice__column--details" }, h("div", { key: 'a18bcf8f6dae8f210dd101cbcbed871623fa193a', class: "invoice__details" }, this.documentNumber && (h("div", { key: '48115db8e69579ae075c92aa8057617ff566407d', class: "invoice__meta-row" }, h("span", { key: 'edb61958742f2bf2acb6cb242cbe9b35bf3c092f', class: "invoice__meta-label" }, "Document #"), h("span", { key: '9039e11f34ddeb0bf9a92d03d00d4c28eec05b3f', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '2ac3bcd37701de79cf1d99f7c6a9f2664668db4c', class: "invoice__meta-row" }, h("span", { key: '7e9dcc05cfb3d5225eeb2a19066216f4a69a21d9', class: "invoice__meta-label" }, "Date"), h("span", { key: '9bbbac5b9aaf7809e24fa649fd5968ba947f5821', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'd429f2230977fd4b47dfb9cda872d7fd6937c2db', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: 'e43224f4dc26fe0e0193451fd6d7abde6c7a95ba', class: "section-heading" }, "Bill To"), h("div", { key: '68e70ce61fa14fde74ed0f6f0285ba735203a0ca', class: "bill-to" }, h("p", { key: '545146716a5bb73f9de9f041c172355df775a646', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'e0b953a273f61a5d1834d7c11faa69b053d94097', class: "invoice__column invoice__column--property" }, h("div", { key: '92f28d3598de608a26285fee9b17c3c32aaab335', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'd6a5e70437a655757165d42ee7bf588ba8a8e002', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '9097495547ffa3bf1f7c6a1f045d7d0b4bca86d8', class: "property-overview__text" }, h("p", { key: 'c28618cf93bd46a72b85ea1ce470995944c6d26b', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '382913ddbe9ed6e2fa6f71ac0f59a5848073f647', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '0e344fbe1548e5d0ec82e3e1b990cc8751d7d66b', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'b982cce2c9b30df7d8162ca1bbbb4892dbe1973d', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '034356e8a8aa3ceaf603d5b8b5d90c68c4bdfdf1', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'd0a83323af60a83b3bc8e10ad1e229287f841044', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
