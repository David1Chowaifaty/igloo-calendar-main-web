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
        return (h(Host, { key: 'fb2f5df3e0fc808377c38a9c5e5482ead37ec65d' }, h("header", { key: 'f4d8f683561b463fe47a9a64cc4ef1d5fdb87418', class: "invoice__header" }, h("h3", { key: '4c43a2d99c995eb15143a9bec835e78983af4c55', class: "invoice__title" }, this.documentTitle), h("section", { key: 'be7d6b33f032140200cb3d99ae5b89db32de3ec7', class: "invoice__layout" }, h("div", { key: '8c3c6621fc5810cd6bfc06e8721c18e8f9152afd', class: "invoice__column invoice__column--details" }, h("div", { key: 'ca53cce8005fbfe4f9c2a81be5c2b8a7a5832cdc', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'c9043e34f113b0ffd2a8980873c43cddfa54fedc', class: "invoice__meta-row" }, h("span", { key: '15f7468dcfce7e9998b202f8d0ed082fac435588', class: "invoice__meta-label" }, t('Lcz_DocumentNumberLabel', { fallback: 'Document #' })), h("span", { key: '6ec964d25280c8f5579574c6c8425864f09d69be', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'dc65f9ee0048970375c27990594d83ed1229d675', class: "invoice__meta-row" }, h("span", { key: 'c63f9dee603df940c30c5293c82a4f966b4b0133', class: "invoice__meta-label" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("span", { key: '30853e7c874f3e09ac9f6582e38973aabcf7bd76', class: "invoice__meta-value" }, formatDate(moment(), DATE_DISPLAY)))), this.agentName && (h("section", { key: '79e77d2b4b568a2cfe252bed7f8373e5a6ed0509', class: "bill-to-section", "aria-label": t('Lcz_BillTo', { fallback: 'Bill to' }) }, h("h4", { key: 'f143305ba024d2bb5080f4053c07d923337fd5a5', class: "section-heading" }, t('Lcz_BillTo', { fallback: 'Bill To' })), h("div", { key: 'c79a9a1d7a5a7adb0e0a78ebc71b98ad7db01695', class: "bill-to" }, h("p", { key: 'df26d4683d1f92d78f87dde259e7c7efbe45ebd9', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'f25010a4690bba7c1ea14ad37b853249f927446b', class: "invoice__column invoice__column--property" }, h("div", { key: '5b323da7d1ba81c9233269d4e560e7ba4d72afbd', class: "property-overview", "aria-label": t('Lcz_PropertyOverviewAria', { fallback: 'Property overview' }) }, logo && h("img", { key: 'f2209637bc6a26e435f7ec584cb35d953c57c8ef', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '5fe646d6bb0ec517ba574f9e96df70934e80bc0e', class: "property-overview__text" }, h("p", { key: '764d87df1985ab1782ad85cc8a267caa3b1acee0', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'e2b15ce4c8d650a1fce7579c7a5f1b5194abea80', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'a9a4a32af62ecc711766179d854b93027da40697', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'e36eea044faf9598ff809af5fc18c8fa1a1b71d4', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '7a0e5eff56edfa34fcade17f800cc1e610cb41c4', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && (h("p", { key: '43b3a150a70df5550d414db0ce9406fa344767dd', class: "property-overview__location" }, t('Lcz_TaxRegPrefix', { fallback: 'Tax Reg:' }), " ", p.tax_nbr)))))))));
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
