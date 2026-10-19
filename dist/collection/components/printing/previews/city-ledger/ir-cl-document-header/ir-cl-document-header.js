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
        return (h(Host, { key: '40d470d5d7a353215f262a7bbd35caa9517565af' }, h("header", { key: '5fde08894f536a95de184bb11ddd478bacc70471', class: "invoice__header" }, h("h3", { key: '4a23c92d71b7b0051fbbbe95562d520d89d1c104', class: "invoice__title" }, this.documentTitle), h("section", { key: '279588219a4a184bd8967c179f7805c19aa07594', class: "invoice__layout" }, h("div", { key: 'c80d62577d6b8081a79c45185eb2d6c735fdd299', class: "invoice__column invoice__column--details" }, h("div", { key: '23815a5b007751109a8b1fa3c1e7116060868459', class: "invoice__details" }, this.documentNumber && (h("div", { key: '4754baf506232085b7373ddaac29deeaaad05c19', class: "invoice__meta-row" }, h("span", { key: '2610a2b8fbf4b815747301c96215b4a4911d3f8e', class: "invoice__meta-label" }, t('Lcz_DocumentNumberLabel', { fallback: 'Document #' })), h("span", { key: 'cf0254cea231165123d14c8a5b16aea860bd252f', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '75cd21717f4353631b3897a414c692189c779756', class: "invoice__meta-row" }, h("span", { key: '462451e98c08726c3237b48dd11ff34a11f87406', class: "invoice__meta-label" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("span", { key: '055d1ffdd366e23c594a104c9313d5517f5a5625', class: "invoice__meta-value" }, formatDate(moment(), DATE_DISPLAY)))), this.agentName && (h("section", { key: '441b95277a88c330fedb6d6af358fed8d5604ab8', class: "bill-to-section", "aria-label": t('Lcz_BillTo', { fallback: 'Bill to' }) }, h("h4", { key: 'c251654560e64234a1d1af5efcdda79e7b44c639', class: "section-heading" }, t('Lcz_BillTo', { fallback: 'Bill To' })), h("div", { key: '6998e07dcafe5b04a04585e80cd15724c2b0cf55', class: "bill-to" }, h("p", { key: '4558b40b40d7625f20ec33ebc499833290223123', class: "bill-to__name" }, this.agentName))))), h("div", { key: '96b020f9e2bb7d90655aa8785ebca54f04c5cb49', class: "invoice__column invoice__column--property" }, h("div", { key: '009d10ea6e87c98846be49e6c7ab2bafd1612bd3', class: "property-overview", "aria-label": t('Lcz_PropertyOverviewAria', { fallback: 'Property overview' }) }, logo && h("img", { key: 'ac39016fe87371fb5c26c3dac9f4c21a68c5140e', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '167822ead9454c9872b588a90e212b803c008065', class: "property-overview__text" }, h("p", { key: '5607e2b7caea04b1ab33a8cc144e64e7524a1e2c', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '69dc667ef799e1b7bb018bc6f6343b1ee5cb9fcf', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '7c474f520b81407b112cb5a9123329673ef40fe1', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'd24bcdf92d82b322ad1c11eb4e03e358090bb128', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '663668bae336e54db3f0ba90b5605f8e40a7ad65', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && (h("p", { key: '14a214b5379a40fc9e7ee13395ff88dfc3d9c35c', class: "property-overview__location" }, t('Lcz_TaxRegPrefix', { fallback: 'Tax Reg:' }), " ", p.tax_nbr)))))))));
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
