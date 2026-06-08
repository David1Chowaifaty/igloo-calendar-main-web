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
        return (h(Host, { key: 'c15cf23a44725eae6dc303858c6e4ce5f8c21962' }, h("header", { key: '740bf7ee38452ea430a12fd04417597a3fd5ef7e', class: "invoice__header" }, h("h3", { key: 'c98cc116249f033efc5b1b852e6f81e1b399fc07', class: "invoice__title" }, this.documentTitle), h("section", { key: '06d3162cd814cbf1fad1300c39dfed612823226d', class: "invoice__layout" }, h("div", { key: 'df9c7f27260851de5f5c27af14fc06d27fbbaf83', class: "invoice__column invoice__column--details" }, h("div", { key: '89752686892ce408a85246f76e17b3a41d1d3777', class: "invoice__details" }, this.documentNumber && (h("div", { key: '162fe5e6fb43954ca8d67c1864186ad3ee798791', class: "invoice__meta-row" }, h("span", { key: 'c4200146ee2bbe39f7b2d424422d136339bcd2da', class: "invoice__meta-label" }, "Document #"), h("span", { key: '709bd79f6c68ff714cf967ea5bb0499187a90980', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '8a18ed5b4db6a004fe055f2230c9e97a2ea78d53', class: "invoice__meta-row" }, h("span", { key: 'aa98cca0c4467de5c2878b79d11b9d7017be82ac', class: "invoice__meta-label" }, "Date"), h("span", { key: '9876ab7f22246bf29ace0d3216e7a616c87fa6dc', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '5e96e3c56157ca3a4432c480f2516c1afc5cc931', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: 'a22682f76800768796488cb1c1789e2e6bc192d3', class: "section-heading" }, "Bill To"), h("div", { key: '801eb56eba0e5e7db3435f4c16a512ac18bca9bb', class: "bill-to" }, h("p", { key: '0351cbe64ca74a59564b510d0e79a95f92fdb502', class: "bill-to__name" }, this.agentName))))), h("div", { key: '633e094cf1968024f29686c2d33d5477cb0ab5a4', class: "invoice__column invoice__column--property" }, h("div", { key: '83385a405b485d0f29430979c84de3b84dd4a714', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'adf9fccbb0ea450282ef33e9e12574caa4933cc1', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '9e893f854776fc7c6e8e0e2d5f428bfcd5649b48', class: "property-overview__text" }, h("p", { key: 'dd2f6df6683fdfe92ac2ec4b3e08587acf5ed1fa', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'a06c377664f40f074a892cc65c7c5ec238d568c1', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'bd8581170f5601117852f9edb585f28740aa7d08', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '5d68305281a53bee1926089c5104ee722b1800f1', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'e09eaf53a28f74e4502e59e127c41e14a2062524', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'a803969fefed8db2402c8284bb1b679c92a865a4', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
