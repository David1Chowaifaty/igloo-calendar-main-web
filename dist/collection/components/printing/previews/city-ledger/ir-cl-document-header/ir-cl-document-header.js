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
        return (h(Host, { key: '371dff3851cfb68ed5367953dd542e59d3d33ed1' }, h("header", { key: 'ed4818e05548827d121e1a3fdeda82fc9997ac2c', class: "invoice__header" }, h("h3", { key: 'a6afac3def8c0a00385e12725e20f7eb8c4495ed', class: "invoice__title" }, this.documentTitle), h("section", { key: '70a987e5552424a6cefb49ac8a6050879d465931', class: "invoice__layout" }, h("div", { key: '7331df40e7ed7e6def266f87586d50b0ec4b2605', class: "invoice__column invoice__column--details" }, h("div", { key: 'ed6ffde7a36c3fec6a03330b28295397cc28ee83', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'cf4768299d7f824b0c8c174fa043edb802e4118e', class: "invoice__meta-row" }, h("span", { key: '59e44246a97238b940e77a1e5b108ef55b6cea32', class: "invoice__meta-label" }, "Document #"), h("span", { key: '9c06b25319021157d0c435275d65af6504f7d694', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '52979aebff033e94c7535ba45384de0592442258', class: "invoice__meta-row" }, h("span", { key: '1e129e9f23d7c0d8edd313ca8ec7a7af80a5e31d', class: "invoice__meta-label" }, "Date"), h("span", { key: '8745c394e2a67f52573deb49b75897158ae21713', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '9fab399161d938eda19d6184811948b1f10327e5', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '874bd39244356415be54e89326f0167b8dde9e9c', class: "section-heading" }, "Bill To"), h("div", { key: '4865e969a2de190c428882285df425a3fd34f185', class: "bill-to" }, h("p", { key: '2e48ffea59f24eb760cbf6e1fe82998287ec14d7', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'ae4ae1104f3568059c891cf07be74d6bd417c3f5', class: "invoice__column invoice__column--property" }, h("div", { key: '9528acb1d7e23459b027083e4d49a62e65db342c', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '7e10006cd11520c8acfd9160ca873c91bddff401', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '0841855e09ce1f3dd06d4d0608c12d086fef7c6d', class: "property-overview__text" }, h("p", { key: 'dd991b61b42dc3019f5a7470f82c56486bd15f30', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '314c82e4f5144b0b9cc90efec8dbbf3ac7848221', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '6fd07e0abfc30898bcf84ec4994ea51a40713967', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '6bd8f1469288b703d5fe5ba4181ff97e940aa444', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '8d3d8dc309c4467731c60943309d45e79da4b215', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '11940fb7d4a3de69803255d04ed9841c776b829b', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
