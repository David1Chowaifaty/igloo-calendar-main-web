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
        return (h(Host, { key: 'a3a59cd1df5928931eb831ceefd1e23f466c45e8' }, h("header", { key: '2020fbfaf1964be23fef29f6a7b04ef332e44d9d', class: "invoice__header" }, h("h3", { key: '7f8809c308d8faea9599343ac82ddb393fcc570c', class: "invoice__title" }, this.documentTitle), h("section", { key: '75b48b0186647c7325b1ed4a1d9e39b238758954', class: "invoice__layout" }, h("div", { key: '7131aa44195b3f7f723dc0b20eb7377d404786ac', class: "invoice__column invoice__column--details" }, h("div", { key: '32683f4ca446e9e0a84ba215b09c0ae3edcf41c9', class: "invoice__details" }, this.documentNumber && (h("div", { key: '323cb650f0d4773eeb3bc5382754d23ef425cee1', class: "invoice__meta-row" }, h("span", { key: 'b582cc1d792e679174998524e64ec4fd7f6218bf', class: "invoice__meta-label" }, t('Lcz_DocumentNumberLabel', { fallback: 'Document #' })), h("span", { key: '13ea49b065d2f94cbde477fc2a3b7acd7ac133fd', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '248676bd394d2cea93283cf9d5a591b558e5801a', class: "invoice__meta-row" }, h("span", { key: '0114aa429ab1266a09db8f48a23d7013f59acae0', class: "invoice__meta-label" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("span", { key: 'fdcfee42522c4d79e13e115a7aca195c1de150a8', class: "invoice__meta-value" }, formatDate(moment(), DATE_DISPLAY)))), this.agentName && (h("section", { key: '582495825ac62ddc53062036b87da3ddfe15107f', class: "bill-to-section", "aria-label": t('Lcz_BillTo', { fallback: 'Bill to' }) }, h("h4", { key: '1cfdf3ff866b58915e24b46edfaa419c1e831d42', class: "section-heading" }, t('Lcz_BillTo', { fallback: 'Bill To' })), h("div", { key: '02cd023b1065238f712d56e180abd88e42ea06c4', class: "bill-to" }, h("p", { key: 'bdca2b52438e5c234c40543e2b7ba6b148dfb8b1', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'fce9fc1f6f30668747627e7534e55513a4fff1e9', class: "invoice__column invoice__column--property" }, h("div", { key: '84acccf313c6d5494a0bf40b39822926abcbcac8', class: "property-overview", "aria-label": t('Lcz_PropertyOverviewAria', { fallback: 'Property overview' }) }, logo && h("img", { key: '1d4468d7b648200d3aa86a4220320fbade9148f2', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '1ae1bd296453b1f69dd8c932c0dfcb3869b7e12d', class: "property-overview__text" }, h("p", { key: '82f7982afda6d7629e51acefc24c5c8a70336428', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '12038e252f455c97fcf65c66fa302f16756d8c4a', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'd8aae9723f064e0bde41fb6b40be38e4a7e6c049', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '879eeeb42350141a925c19093ff1ccc9c13b3a94', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'e85892d8724cd6ec0ed4485404af1ae98888edf8', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && (h("p", { key: '0dac23a2d50011707b41147d2f3253093f2f922d', class: "property-overview__location" }, t('Lcz_TaxRegPrefix', { fallback: 'Tax Reg:' }), " ", p.tax_nbr)))))))));
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
