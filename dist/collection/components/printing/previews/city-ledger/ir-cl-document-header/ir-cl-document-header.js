import { Host, h } from "@stencil/core";
import moment from "moment";
import { t } from "../../../../../services/locale/t";
import { formatDate } from "../../../../../utils/date/index";
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
                return t('Lcz_DocumentTypeStatement', { fallback: 'account statement' });
            default:
                return '';
        }
    }
    render() {
        const p = this.property;
        const logo = p?.space_theme?.logo;
        const propertyLocation = [p?.city?.['name'] ?? null, p?.country?.name ?? null].filter(f => f !== null).join(', ');
        return (h(Host, { key: 'bf9c7cea66bc8c31a9ea836c5f8b3d70c07ce660' }, h("header", { key: '9a2cec4e450e74eb00b3de19b80122aaafffb466', class: "invoice__header" }, h("h3", { key: '315f5dabefb8866aac0e34caae58803e4f15e9eb', class: "invoice__title" }, this.documentTitle), h("section", { key: 'f44352821abb96ec69d5bfd99e63f1a5c35cb079', class: "invoice__layout" }, h("div", { key: 'b54ff43fc6ec1a2a1eea089b169f65a4b274b29a', class: "invoice__column invoice__column--details" }, h("div", { key: '9c8b7d14fcc328c3a044002056311bb972df2702', class: "invoice__details" }, this.documentNumber && (h("div", { key: '7d65048171812883d858b27ab4148d0fede211b8', class: "invoice__meta-row" }, h("span", { key: 'fda42cc62127c443ecec56c70f537d980b1987b1', class: "invoice__meta-label" }, t('Lcz_DocumentNumberLabel', { fallback: 'Document #' })), h("span", { key: '3fe590673a4aa6c38fc04e675968f17fe22df56b', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'e34d6709e1c57800a43058038e670ddddcb2903e', class: "invoice__meta-row" }, h("span", { key: '739cdfd1c2db665a9174d30b27fbf766ee9afdc0', class: "invoice__meta-label" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("span", { key: 'ff2998ee646411bc3ab398924519656db5dc3088', class: "invoice__meta-value" }, formatDate(moment(), DATE_DISPLAY)))), this.agentName && (h("section", { key: 'd24abc4168bacfc49e9f9531301a6babe48e764a', class: "bill-to-section", "aria-label": t('Lcz_BillTo', { fallback: 'Bill to' }) }, h("h4", { key: 'a8ed43d1db5e0423f3af94b90ff6d17f1446223f', class: "section-heading" }, t('Lcz_BillTo', { fallback: 'Bill To' })), h("div", { key: 'e4fe8bd502fd319597d17a9016943953040a3ae0', class: "bill-to" }, h("p", { key: '09304ddde6cea6a4c82d947b9ed5324806a4d89e', class: "bill-to__name" }, this.agentName))))), h("div", { key: '8ca7e06a2d85e3e79fb020287ec11ae20cc9cc54', class: "invoice__column invoice__column--property" }, h("div", { key: '7d212ac9f0638e91655efe6c7074a621fc3f7f62', class: "property-overview", "aria-label": t('Lcz_PropertyOverviewAria', { fallback: 'Property overview' }) }, logo && h("img", { key: '6e52bec1be64caa62a97d1d51fc7bd1013219eb5', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '2a5a74d51a63c15cf31a33f1d72a41572326b9ac', class: "property-overview__text" }, h("p", { key: '0a57edd1ca3915c9854628c686082b80d64ab4f4', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '2c275a665cbc5371526c107b585072aac5cbb868', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'a5aa7c3ef7741b6fd7925dfba4eebcfad6ff0ce4', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '77f331dedfb447e0154e52d89dcb4063eb899bf7', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '011e14af38a4b336066eb3b33c68ea4e4963ac86', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && (h("p", { key: 'a322866deb6222b19d689270c34e3abb9afbd484', class: "property-overview__location" }, t('Lcz_TaxRegPrefix', { fallback: 'Tax Reg:' }), " ", p.tax_nbr)))))))));
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
