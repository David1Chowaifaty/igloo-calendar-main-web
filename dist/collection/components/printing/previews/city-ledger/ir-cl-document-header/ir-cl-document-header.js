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
        return (h(Host, { key: '897cc5c3c0e516c734b97a1c7a149a3d7c079a3a' }, h("header", { key: 'c88344e9cc5cc6cd75631994a0ff44383b30502c', class: "invoice__header" }, h("h3", { key: 'dcbe331e3cb7d7e3e0c7c4523a7d15c7b5321150', class: "invoice__title" }, this.documentTitle), h("section", { key: '2fdfcdff7c24f07c04c186d70db17b071c2bfad2', class: "invoice__layout" }, h("div", { key: '7035e8c255bd6759c161757bdb5a4789f672e1ab', class: "invoice__column invoice__column--details" }, h("div", { key: '9392f8e458d0f63dc6b8b296fb8ec9bd00b9febc', class: "invoice__details" }, this.documentNumber && (h("div", { key: '5433dacf91533eb27555be71daa606c2281fca73', class: "invoice__meta-row" }, h("span", { key: '9f436aa26bc6c7e10060647acde3cbdc6fb7279f', class: "invoice__meta-label" }, "Document #"), h("span", { key: 'f7948a79bf44c2f0316a821ccd12f5b5990695a7', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '2e6c54eb68ebe242ca48e11a9b4af29ec8bce40f', class: "invoice__meta-row" }, h("span", { key: '47aeb07f4d79a441944b1c1b6acde360ff9c52ac', class: "invoice__meta-label" }, "Date"), h("span", { key: 'a2461ccb6216b85794c94542ec3aa2c7b79ebe62', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'bfdc0c91f0c8943cb1c0c20601c32f0a15880e3a', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '37c31ff4e0381a25956366e270c6095ef8e37c25', class: "section-heading" }, "Bill To"), h("div", { key: '925c0b24f689989d1894df94a834b99b8dac8915', class: "bill-to" }, h("p", { key: '3c628b3a2456f341174c722c34c63d542e87d1b4', class: "bill-to__name" }, this.agentName))))), h("div", { key: '3ed471eae4a843a4d1eb8701b0a7005947249772', class: "invoice__column invoice__column--property" }, h("div", { key: '9a6e5ae3169bcd3d12c01b14e74010bf0f7ae413', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '38fdcb86688f9ebd2afdf2fd4121e823e6b54ec0', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'ffdafe1cb16bf86fc7adb8a6cc9309f78503468a', class: "property-overview__text" }, h("p", { key: 'e54c8b18ed53116e297b2cd3fdcaa850f4bf6aa9', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '1e7a700c3d7e7973cf5426e30205e2e8aa8bf2d2', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'b477ad1de5a34713915bc7ac2cadeba41cb67e33', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '68256ee30a068b34b86ea7d661ea6f4c9d395994', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '843fc2efc063638b39d688b2a9d7ebb57c86cc4f', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '6d0201b6b2ccd958ba817e4c816fe3ae04000396', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
