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
        return (h(Host, { key: '5697c5d2ba06b2f1f7a4d7056dd07e953b3a9fc5' }, h("header", { key: 'bc6ae6874e59b7964e6d7a90db7eb8fff87590f4', class: "invoice__header" }, h("h3", { key: '61d44aaef64454192bc8e9a4f73a5eac1d78bb27', class: "invoice__title" }, this.documentTitle), h("section", { key: 'd55306d205df4fd7457288b38cec570993c95e9d', class: "invoice__layout" }, h("div", { key: '6e291a94c6ba495c3b6a0fe981ba2bf0948e6c3f', class: "invoice__column invoice__column--details" }, h("div", { key: 'be26ff210fb26e11286fdf3a5ed470923b751af7', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'bd4426a30be27fa0474773fc6a14e6f98245f15b', class: "invoice__meta-row" }, h("span", { key: 'f5b8c4004461a07a56888bc4c0c68da0b488ee9b', class: "invoice__meta-label" }, t('Lcz_DocumentNumberLabel', { fallback: 'Document #' })), h("span", { key: 'ddb7588e103b986afdb72e4f3e5786ed96d1934d', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'cb4ce4736d568bf31392d86944c4f3688015a02c', class: "invoice__meta-row" }, h("span", { key: '7effb23ea5b358e0790841797656ba622bb4b5a8', class: "invoice__meta-label" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("span", { key: '43070cd990bcb691d31abc79d0551dad4adae633', class: "invoice__meta-value" }, formatDate(moment(), DATE_DISPLAY)))), this.agentName && (h("section", { key: 'af874e2ef02bc4b9e62c2aab9a073fe8da2788c8', class: "bill-to-section", "aria-label": t('Lcz_BillTo', { fallback: 'Bill to' }) }, h("h4", { key: '81914466d329d1231b04e972b5d1054e98f69307', class: "section-heading" }, t('Lcz_BillTo', { fallback: 'Bill To' })), h("div", { key: '84570eee6087baa69ba757a9107ee264b8846af6', class: "bill-to" }, h("p", { key: 'fd035eeac59a55bcb1e9909af1f919b8a59de377', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'dffe3bd40a21bb11f3e7bf2252141362c1ebd89f', class: "invoice__column invoice__column--property" }, h("div", { key: '8a6e9e75bbfbfc77460ef36500d691d8dbc7ee9f', class: "property-overview", "aria-label": t('Lcz_PropertyOverviewAria', { fallback: 'Property overview' }) }, logo && h("img", { key: 'b4428aa3d4459cef36139a20f5c695c2170ce7fb', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '9e5d6fdf86bddc64011393f817cc42efc231c6fb', class: "property-overview__text" }, h("p", { key: '7e0812a65616ce7312edea9e6b4c15ae14dc8aa8', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '0656c52de608592a870f9f7e1020982a5c426f8c', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'e8bcfea0378a1e77be9e66315d531ae6d3c7a4cf', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '66def78a256e6af44f7362dbdbfbed501d508e61', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'd9887d5d498b839d9d22097847abe0dd1cd66a16', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && (h("p", { key: 'b3661b589030dbce42bfa2cfdb074c61375ca1d4', class: "property-overview__location" }, t('Lcz_TaxRegPrefix', { fallback: 'Tax Reg:' }), " ", p.tax_nbr)))))))));
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
