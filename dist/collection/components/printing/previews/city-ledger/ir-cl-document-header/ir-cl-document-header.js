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
        return (h(Host, { key: '2df7a55b665b8674a7867be55f5e5abe68dcf752' }, h("header", { key: '39fc7e07dcce4b0ac99a785cd1e414929cd03d8b', class: "invoice__header" }, h("h3", { key: '5a56387a145dfaa87a564bc1b64d916ce971dff6', class: "invoice__title" }, this.documentTitle), h("section", { key: '4718661976990345c17d7d86988f6e05152c9969', class: "invoice__layout" }, h("div", { key: '883897aeefe2219acf1fef4681364a3b56af9a8b', class: "invoice__column invoice__column--details" }, h("div", { key: '162ddf4f73e5936a87914f66b464af69e33630f5', class: "invoice__details" }, this.documentNumber && (h("div", { key: '13cb3552aa21eb056ed6dd8473ced16b35fa9ad9', class: "invoice__meta-row" }, h("span", { key: '6e7d49515357c8c71e14df837800ccfd3e846952', class: "invoice__meta-label" }, t('Lcz_DocumentNumberLabel', { fallback: 'Document #' })), h("span", { key: 'ff6c9e6f0c181ce84476fb65a5bcbd8bf1c197bd', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '25c3e64cac63d4cd3a1841619c0e00226cd9fa22', class: "invoice__meta-row" }, h("span", { key: '789954fdc04245ad0045af1628076016682b7c4e', class: "invoice__meta-label" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("span", { key: '392c8cb80f1c22227be59ff2ba5c5d02ac25cb3a', class: "invoice__meta-value" }, formatDate(moment(), DATE_DISPLAY)))), this.agentName && (h("section", { key: 'ee8ec4514d3e9273c00aa2bc9109f99f61dd06b6', class: "bill-to-section", "aria-label": t('Lcz_BillTo', { fallback: 'Bill to' }) }, h("h4", { key: '61e2bc2e9b2e2ee6e298e35497d27f11cdfaf856', class: "section-heading" }, t('Lcz_BillTo', { fallback: 'Bill To' })), h("div", { key: '114bc86480ecc9773825ccbb3f1c511d7e3858ba', class: "bill-to" }, h("p", { key: '05dd986f9680934eb36eb62ce04a7a27ce952968', class: "bill-to__name" }, this.agentName))))), h("div", { key: '0174a98d8bb812e1863dc4d4ade70a8657325620', class: "invoice__column invoice__column--property" }, h("div", { key: '8ccdee329b3adb2a877db3ec16dfd23b7d353214', class: "property-overview", "aria-label": t('Lcz_PropertyOverviewAria', { fallback: 'Property overview' }) }, logo && h("img", { key: '2b2841aad4adca614d129895e4d0220b9468d053', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '075116f9fdb195b69669f7d1650017370b6a4382', class: "property-overview__text" }, h("p", { key: 'ae0be3f1b27789bbd1a3801a91983b12548940f0', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '39c312647bd3bff724a675ae06203a4b0ba0d6d7', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '6d8807e1256fff91eb5946117438826d98b3c0a9', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '1ee0a0303bbf29f8440b7dc15caa94e344d4e4b1', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '75518c013d157708bf2ede30fc8c22fdc28f857e', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && (h("p", { key: 'ae009b30fe49897ad9bc94ccd92ef42adb115ff9', class: "property-overview__location" }, t('Lcz_TaxRegPrefix', { fallback: 'Tax Reg:' }), " ", p.tax_nbr)))))))));
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
