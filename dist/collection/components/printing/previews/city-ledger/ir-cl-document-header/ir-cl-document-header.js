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
        return (h(Host, { key: 'b00762117a4d5f2194eec21645c5e9601e2de35e' }, h("header", { key: '8b3e5471581b3be1d106d9dfdb58d6d96807e0ec', class: "invoice__header" }, h("h3", { key: 'b2728bc8379faea6fe016474f27f1cc492d8fa21', class: "invoice__title" }, this.documentTitle), h("section", { key: 'f0b01b53e040c76c67d6bfe6c5834cc5b1312082', class: "invoice__layout" }, h("div", { key: '6f8642a33f03e3956ded8f4fed5b08558b2188dc', class: "invoice__column invoice__column--details" }, h("div", { key: 'd3bbe6ffff1ea6325d3090f1fb349af57f787e23', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'dd1186e6a672031c09da01d0ae9a2104ec82f07d', class: "invoice__meta-row" }, h("span", { key: '6f102e75087f800d6f80199b28d96af1347cc3fc', class: "invoice__meta-label" }, "Document #"), h("span", { key: '061f28e81e82cdb9eef3a213bf5c98f4882edcd9', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '65b73a5e9862d283d38451676de338964ad0e164', class: "invoice__meta-row" }, h("span", { key: '8a84f1f8b9fa0916633f1a2870991ba5ae35e578', class: "invoice__meta-label" }, "Date"), h("span", { key: '65d67ae7db40b5addbc564673216e451a85364a0', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '69087a88c09dfaee01b8b1f2615ed6fd224699c4', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: 'f834c1632311db1840b274be94105213c6b6bce0', class: "section-heading" }, "Bill To"), h("div", { key: '7ec7e1f055772e4518d1380f53326351ebd3e940', class: "bill-to" }, h("p", { key: '055ba108ffad06e4ac2e4f5f318767fb9719270a', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'ae3fd953e0cdb0f5978b8fa8083132337f371d1f', class: "invoice__column invoice__column--property" }, h("div", { key: '7a2d8e6c20ac448be839db940a1f09e202892ba6', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '1018db406cb2876b466e3e1325dcb9840efcb832', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'fc75d1566cf243ea582ced89a8b399186547a554', class: "property-overview__text" }, h("p", { key: '5f9adb54dcc7d234c09ee58e1e4a3709e1b3ba60', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '31ee6a2ee5f581a8f9498df54e0891c3cbc46494', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '5eeb0e87204b5c2d9850a8e9c80ef2c66e3ed641', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '1109ba8e41aebc2d1fd74f3fcc88ec35cca9e7c6', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'c268b0a8d593550328dd1929ee35205783be5b1a', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'ae6003bfbb18fb7844c1737aae7cd603f7f21ee7', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
