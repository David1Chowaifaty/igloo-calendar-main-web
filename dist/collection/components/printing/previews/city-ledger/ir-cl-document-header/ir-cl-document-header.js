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
        return (h(Host, { key: 'd854bc3261f77a093873dc356615125dd42f92c6' }, h("header", { key: '0ff61f43652f3d6bccf6f2f5cc9400035260c5fe', class: "invoice__header" }, h("h3", { key: 'd68779416ec978d3eeba40a59aedaa1907af70ba', class: "invoice__title" }, this.documentTitle), h("section", { key: '5dc9f915e6ead22bc86db1ebb9042b0b1f03790f', class: "invoice__layout" }, h("div", { key: 'c4fcb0398707ee5a1b4ae8e60c1a5d58f2b2affc', class: "invoice__column invoice__column--details" }, h("div", { key: '02abd7cf544a8ce0f8f362e0dc9d28ea5a6c7150', class: "invoice__details" }, this.documentNumber && (h("div", { key: '5e8ebac839617ccf1331fc241849482b744ae606', class: "invoice__meta-row" }, h("span", { key: '2c096acb34af60ca84bf059b29a223ef9d322208', class: "invoice__meta-label" }, "Document #"), h("span", { key: '7eac7a35ecf997c898442ac074f35a5241b366af', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '933a88aa7743e564c367c93c2aa9a382b9658ce2', class: "invoice__meta-row" }, h("span", { key: '70f1fb9db7c17e3b8ca589c155b8f2b0cba0b040', class: "invoice__meta-label" }, "Date"), h("span", { key: '054ed8bda474dcc604d95b1c14e2a31547849485', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '8250815cd9644efa30f15ebdcfac1bda3391f9a8', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '5e485ca0ad54786c1d65d9784292ffe33e011297', class: "section-heading" }, "Bill To"), h("div", { key: '23a942826c79d5a575e5da2ceea06aebd616bcef', class: "bill-to" }, h("p", { key: '8033c1489868ed8c3406cabd20dd040e571372e6', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'bb41247cdd120968f48e6e16d5ef83c070640629', class: "invoice__column invoice__column--property" }, h("div", { key: '3905d5423d8272e3f7bb763cb1e7b8c7d7055752', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'aba9616576b029ba2bc94b48fccce643614c101e', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '5acab6006e00b7c8669ba9064b4a8c5936594209', class: "property-overview__text" }, h("p", { key: '00c61a42023ad7924c55f30d179063fa0af5ff0a', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'c6216c1d925cc142ec4c6a3fb479f67209aeeffe', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'c1db5732505164fa88b760f4a37436baa2eeb192', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'eda425ba01d2e54ac8be8a48918f987e6800f900', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '92adb0f8e0073f2698911b3e452a05b6acf1d47f', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'a8cdb9d5fd6da5c415b08df8ead1ae856f76086f', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
