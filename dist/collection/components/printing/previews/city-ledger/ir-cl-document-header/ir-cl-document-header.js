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
        return (h(Host, { key: 'edf282fee785ee29d3a6e7f11533f77269a133b7' }, h("header", { key: 'b71bf33af15794eac5efb1e67a4b2639d906c8c7', class: "invoice__header" }, h("h3", { key: '5cfe82d7bc3e9dac2fb24cb1dcb5958c2c98137f', class: "invoice__title" }, this.documentTitle), h("section", { key: 'af8b50af8a570c0fbd4de1a2df51ebc63dc7f921', class: "invoice__layout" }, h("div", { key: 'd2d2e9b11a6d400edfda7686d147b1a9c8c1c5c9', class: "invoice__column invoice__column--details" }, h("div", { key: 'ab6fd67212b5ef920801c3de8f9cf4b19dd80978', class: "invoice__details" }, this.documentNumber && (h("div", { key: '453d1780aaef6f0e51df4df61ebf78ef563af2f1', class: "invoice__meta-row" }, h("span", { key: '97bd5c8ccf33bb4cfac2a4b673d682f8326696fe', class: "invoice__meta-label" }, t('Lcz_DocumentNumberLabel', { fallback: 'Document #' })), h("span", { key: '1c1bb099ae55aeae0135d089ed31b43971eb5aca', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '0f9af174b73c58af5dc9d263ef9853ddfb1768d3', class: "invoice__meta-row" }, h("span", { key: '7a9b6637a0222db85f3089ae6e73ab95e315087e', class: "invoice__meta-label" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("span", { key: '78e5e50235cfc265ae91ef0552ae5eaabd2dd19b', class: "invoice__meta-value" }, formatDate(moment(), DATE_DISPLAY)))), this.agentName && (h("section", { key: '5faee34bd646879745e09c0784b0ae0821a46544', class: "bill-to-section", "aria-label": t('Lcz_BillTo', { fallback: 'Bill to' }) }, h("h4", { key: 'c1aa59617a831916513534879803cec42a24cef9', class: "section-heading" }, t('Lcz_BillTo', { fallback: 'Bill To' })), h("div", { key: 'cbbe47a9afe6656434f0a77d96ed053d27aaa838', class: "bill-to" }, h("p", { key: 'afd0ec6ad15715e906605cf79aadf4ec0a3006ba', class: "bill-to__name" }, this.agentName))))), h("div", { key: '96dfee5890e55a96e3305d49eb94679a7c3bb253', class: "invoice__column invoice__column--property" }, h("div", { key: '027979def19ae3d575a57fdbf2398b69c6b07474', class: "property-overview", "aria-label": t('Lcz_PropertyOverviewAria', { fallback: 'Property overview' }) }, logo && h("img", { key: '3c70b9d6ea45ae134ea87a04e4314d6a5923a1b0', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '3788ad703c7250927f5fcafb2348cd6a92b1494a', class: "property-overview__text" }, h("p", { key: '5823d5d7760fadb0acc3fc5fc135939e86b8eab8', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'f8f31e6af188fb42164fe57208c9ec1fd2498775', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'c1168380bcc8dffbeb602d383d2ebee057460bc5', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'f7eaf6136ddff3030fb0a9d3854c1906d829a62a', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '5bb37692a7a96228555f59adc55d1f5cd7a2d680', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && (h("p", { key: '6c90a26ae4af5e9eadf96b2e2168abfa0c922c97', class: "property-overview__location" }, t('Lcz_TaxRegPrefix', { fallback: 'Tax Reg:' }), " ", p.tax_nbr)))))))));
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
