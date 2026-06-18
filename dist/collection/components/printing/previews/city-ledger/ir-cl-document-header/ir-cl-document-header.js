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
        return (h(Host, { key: '43b55f221b664fbd2f2965c4bbb4ee648f856962' }, h("header", { key: '581914cd6a6ed80095d7aa74d634b2fb18dbd053', class: "invoice__header" }, h("h3", { key: '2d3f37b12353ddf64c6417c5bbb5a83dc6823c40', class: "invoice__title" }, this.documentTitle), h("section", { key: '678e263f110c7ae08ac00fd75a9312d49bd29a84', class: "invoice__layout" }, h("div", { key: 'c8fc58e9c3066e6deee4c1ff375402ea33f8f264', class: "invoice__column invoice__column--details" }, h("div", { key: 'c6982e0aaa896e4b06d9dcf7729b8a0b9b510b72', class: "invoice__details" }, this.documentNumber && (h("div", { key: '82872508e07acb188d305f37b684c2a465951b8d', class: "invoice__meta-row" }, h("span", { key: 'ebdddba57ab8b11a284713353052f0ecd9e1419e', class: "invoice__meta-label" }, "Document #"), h("span", { key: '00b63eb561f03c1414743d174c1b7e8f72e0886f', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '1af614ef8ee6ff2a8b9df2961bdf0d4f5cf23a26', class: "invoice__meta-row" }, h("span", { key: '5cf9c2fbe220f4ab8005f42d4f7f6d13bfb5ccdc', class: "invoice__meta-label" }, "Date"), h("span", { key: '61c9d1461c7e0d3d591d91dc3012e88f46643314', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'a40af09a506cc3772f8dd97ee9afbfd93014ee73', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '0b3fbb0f2daf607616568db354f38df2117176a7', class: "section-heading" }, "Bill To"), h("div", { key: 'a3f53b38328d451d41a1c99ecd9a4e4c48a9e961', class: "bill-to" }, h("p", { key: 'cab62105ac53ffef7c4374925dd2f8ac405859b1', class: "bill-to__name" }, this.agentName))))), h("div", { key: '6b9536ff09e42ca5553a4a7f2f11b971de3d8144', class: "invoice__column invoice__column--property" }, h("div", { key: '8709c39d5deb75c6de0f857f05bd99ca848f4309', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'e6cad9f196cdd06b89bcec06dbd2c2aed0ec9355', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '1efcc6ed5b42b8987e346c28d2697d30c120a277', class: "property-overview__text" }, h("p", { key: 'e90453296d87abe18a9bad6d6be70cd3d6fc2d1b', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '0a6d8360d297cb6b6544944065c7720ad8d1be3b', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'ee0d10e714d336b5f01c187c7e955ca3ba6be8f9', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'bcb2ce4f56783a3e3e81127ddb2868379e54a4d7', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '3ac60fc47545f0b09d80a1a9d81cceda28db550a', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'a7c08118aa3a730080e4fa2fc62489392b950ad5', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
