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
        return (h(Host, { key: 'e10757472d3f93688b6f09c0025304a141a4acad' }, h("header", { key: '4c2b7064fadc12a814afdcaaeb4bfd3aa2bd046a', class: "invoice__header" }, h("h3", { key: 'a7b217e0639066bc1da4cbeef31f259c608b8203', class: "invoice__title" }, this.documentTitle), h("section", { key: '54c5931c22d0879fda4140fe7b0051aeeebd1eec', class: "invoice__layout" }, h("div", { key: '20a4f3738a42bf62c3d741f34109a1981795d807', class: "invoice__column invoice__column--details" }, h("div", { key: '3e124caa016fdf50b25b2cede5dd6788045f7c59', class: "invoice__details" }, this.documentNumber && (h("div", { key: '4cf18eac48cc27a044bb43cae74ef809da5361ae', class: "invoice__meta-row" }, h("span", { key: '04692e50c3d5de42f6266e94ffdbbb77e3c89560', class: "invoice__meta-label" }, t('Lcz_DocumentNumberLabel', { fallback: 'Document #' })), h("span", { key: 'b1d8ad5aa3f33ac3c8fb8b68131121da4cb60fb1', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '8529bcedc03649828665fb014fc4bd7b3982044d', class: "invoice__meta-row" }, h("span", { key: '8dfba0b6eadfdb3ad72b6320b10057f9408275d7', class: "invoice__meta-label" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("span", { key: '68bc843a48557c91f9194c5b22f08b31986ce858', class: "invoice__meta-value" }, formatDate(moment(), DATE_DISPLAY)))), this.agentName && (h("section", { key: '671481ffcfea3e6e24269f57110a9bead5742236', class: "bill-to-section", "aria-label": t('Lcz_BillTo', { fallback: 'Bill to' }) }, h("h4", { key: '41e79902691a6d979e5b234006ab4c9aff3246c2', class: "section-heading" }, t('Lcz_BillTo', { fallback: 'Bill To' })), h("div", { key: 'b0a5a4ddb02dea041e2b790714c916871402bc61', class: "bill-to" }, h("p", { key: '29d7ba5fe200553ea81c700f7e8bfe85265081ec', class: "bill-to__name" }, this.agentName))))), h("div", { key: '8c8db916444302f23785638234222752e411f79f', class: "invoice__column invoice__column--property" }, h("div", { key: '5c3bef759eaebb5d62a787852162842bc6edcac9', class: "property-overview", "aria-label": t('Lcz_PropertyOverviewAria', { fallback: 'Property overview' }) }, logo && h("img", { key: '895ab22d0876589a437a663cd7c74a232c9d9ed1', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '8d6d7a37e74d9f647ffc8b5f1c1da7e9fe8c0df6', class: "property-overview__text" }, h("p", { key: '2aa9ba4fb6e927adf0b4fcdf3cf58a582b5b2de6', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'bd9c9996bbe33766000c5ee7cc9a2a1e1ce4179d', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'b9cf1f7634d7b9e9de66a927ebb510e85cbaa138', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '7eac4e8f6e6e9153c6c28301e62d7ec558c2d9df', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'ef8919d9e3980576dbb7b7f115cd61ad29aee4c5', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && (h("p", { key: '810d9b0fcd5b8a629222f40ff634fd4f4a87aa0b', class: "property-overview__location" }, t('Lcz_TaxRegPrefix', { fallback: 'Tax Reg:' }), " ", p.tax_nbr)))))))));
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
