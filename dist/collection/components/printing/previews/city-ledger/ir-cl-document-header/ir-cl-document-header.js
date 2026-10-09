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
                return t('Lcz_DocumentTypeInvoice', { fallback: 'Invoice' });
            case 'receipt':
                return t('Lcz_DocumentTypeReceipt', { fallback: 'Receipt' });
            case 'creditnote':
                return t('Lcz_DocumentTypeCreditNote', { fallback: 'Credit Note' });
            case 'debitnote':
                return t('Lcz_DocumentTypeDebitNote', { fallback: 'Debit Note' });
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
        return (h(Host, { key: '2efeb823f6d3af20bc2858818249418d55b17f1a' }, h("header", { key: 'ac8ae34391a0319d3d4242b8eedb3024deb30dc9', class: "invoice__header" }, h("h3", { key: '9ba2202538e03f0144711aab016c09d9e8d9ddc4', class: "invoice__title" }, this.documentTitle), h("section", { key: '1196cf0a7a0681eaa52b19a2eac70ada9858c8d7', class: "invoice__layout" }, h("div", { key: '0a5cf950bc7bdf0663acf758f2604374282b8515', class: "invoice__column invoice__column--details" }, h("div", { key: '06c9e902e812152c4666413908f049d280e0c30c', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'da13309aba0e28c7e8f95d3c5138c01fca8e820b', class: "invoice__meta-row" }, h("span", { key: '040dd22addfe494b0c8dae77b26f1dd97becb84b', class: "invoice__meta-label" }, t('Lcz_DocumentNumberLabel', { fallback: 'Document #' })), h("span", { key: '689397033aa1b09f5f6fd5004cc4440a3640c2ad', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'fe207bf38820d7f2f256bd8fc7f69fb91398d5b6', class: "invoice__meta-row" }, h("span", { key: 'fd6b8143107f37203f64d4d4c861486844fe7079', class: "invoice__meta-label" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("span", { key: '278f09cf6d70c41e4b6b7569b1b630ed756b3cd2', class: "invoice__meta-value" }, formatDate(moment(), DATE_DISPLAY)))), this.agentName && (h("section", { key: 'c958690122acc47f68dd03c10b2e63db900cca4f', class: "bill-to-section", "aria-label": t('Lcz_BillTo', { fallback: 'Bill to' }) }, h("h4", { key: '8fa9ee9878d73239f38efe575287cdabf2bc7310', class: "section-heading" }, t('Lcz_BillTo', { fallback: 'Bill To' })), h("div", { key: 'fc56b8ccd2658715d42804c886ab4d986199f1ba', class: "bill-to" }, h("p", { key: '704f38bc64534a3172a1e5d65f0e8854cc1d98b1', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'd56b9d066b0472b17ae8beff7b22d70ff9456005', class: "invoice__column invoice__column--property" }, h("div", { key: '43395a82ccbc157f094c49023caa50807a92265e', class: "property-overview", "aria-label": t('Lcz_PropertyOverviewAria', { fallback: 'Property overview' }) }, logo && h("img", { key: '6dcfefc1119cef614c89f4b7da75e4460dc2dde7', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'ba81707ca53b329b697d8c23bbd19bf95bcdeab7', class: "property-overview__text" }, h("p", { key: 'c5f03d6ecea85baba3a297bb19a806e9193a33dd', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'ca4f70c20b550ce0093d424862c6d85ea4be4a6a', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '1a02b8448fb4f1401a859362ece635ba4c8b50f8', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'e8c1d1f3c196b3325b6e2e8bdd22885b2cb1f7b3', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'f73c162600fada7e21e0a16b646303f70fffb17b', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && (h("p", { key: '7225ff02b975cd6bcbea29bfec8ed1ce9b7adb02', class: "property-overview__location" }, t('Lcz_TaxRegPrefix', { fallback: 'Tax Reg:' }), " ", p.tax_nbr)))))))));
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
