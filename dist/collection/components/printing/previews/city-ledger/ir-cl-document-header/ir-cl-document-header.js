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
        return (h(Host, { key: 'f799488c03031e3831ca47b961cc3a35e1768ad8' }, h("header", { key: '08e61cf41585390a2b99bc217773642283a24a7f', class: "invoice__header" }, h("h3", { key: 'fe96f095636c1869cf02899665b992bb789660ac', class: "invoice__title" }, this.documentTitle), h("section", { key: '75a756770ce55c8fcaf2681605b1d7a759369718', class: "invoice__layout" }, h("div", { key: '8b46fb623ed166d3ea8064d6f6f7083d30cb6142', class: "invoice__column invoice__column--details" }, h("div", { key: '4bc64b7443372cfa94401021284fc4a8a9d86cc5', class: "invoice__details" }, this.documentNumber && (h("div", { key: '3929c5c7db5687cac599d082618accb4816c9aca', class: "invoice__meta-row" }, h("span", { key: '421d5ff4ec88f4e1b165182b330ad1efd4270f72', class: "invoice__meta-label" }, t('Lcz_DocumentNumberLabel', { fallback: 'Document #' })), h("span", { key: '69d4e1fb46c9bd93c1cadb0cea5d0c665dc8fb04', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'e3b8aed33efc5de92ac0ef51c6e0fc9df8345e2e', class: "invoice__meta-row" }, h("span", { key: '5f2c2605333a3cf4fa3992a82760200b8da3cfce', class: "invoice__meta-label" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("span", { key: 'fc681182c6677e6cebba5a2d4646523c0c42ac0b', class: "invoice__meta-value" }, formatDate(moment(), DATE_DISPLAY)))), this.agentName && (h("section", { key: '196563be14bf101cbe388e1f1a4600a184b77220', class: "bill-to-section", "aria-label": t('Lcz_BillTo', { fallback: 'Bill to' }) }, h("h4", { key: 'c8e38b490c98cd87376149357b8ade28b56a51e9', class: "section-heading" }, t('Lcz_BillTo', { fallback: 'Bill To' })), h("div", { key: '9e76f8e8d64a5ff2a26378c8aadc0ec128b88f31', class: "bill-to" }, h("p", { key: '01e98fa5c8faef1841ef232f5ed5005fc84ad7cc', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'e36a8775d6151bdc6e219c8fbe3ec1d4f5103ba0', class: "invoice__column invoice__column--property" }, h("div", { key: 'b5edffc6f2e874234ccc36ed9bc9fd0e9bb37971', class: "property-overview", "aria-label": t('Lcz_PropertyOverviewAria', { fallback: 'Property overview' }) }, logo && h("img", { key: '98e686e94c20f6fb449fb8308591d33d124d4e6c', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'fca3c89fd71b48d8d44927ddf59a5aef362c4dab', class: "property-overview__text" }, h("p", { key: '0dd3e26281960b0472dd78b1f1c72b0876ae334f', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'fe157f0c5de32a483ac67494f5778656db57515c', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '3369577af900972b06acff709e6f2804c528b34b', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'fde4786a8f1f9320396af28c5faad7ba21a6e44a', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'a2d823527ffb1db53d8572e7380a367db7fd9d9f', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && (h("p", { key: '1057e6969b59b9e93ee2cc0bfd021d060a023523', class: "property-overview__location" }, t('Lcz_TaxRegPrefix', { fallback: 'Tax Reg:' }), " ", p.tax_nbr)))))))));
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
