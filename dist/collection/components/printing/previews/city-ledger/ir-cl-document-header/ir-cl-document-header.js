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
        return (h(Host, { key: '019805537105ef9ad2ff3397e9d8f792eba4cead' }, h("header", { key: 'e46ddb535a4a23c4db0c4ef27809229bbaac253a', class: "invoice__header" }, h("h3", { key: '7c1dd255ef2a8db1ab21593dced8c2eb10fa2274', class: "invoice__title" }, this.documentTitle), h("section", { key: '37f1357f1e28c0345cf2ec008c00743c321aa930', class: "invoice__layout" }, h("div", { key: '0000b8c99bb391bde54dded77123fa4d5a1ce98c', class: "invoice__column invoice__column--details" }, h("div", { key: 'b8d33d51a50577e93a20f44d60f7efcd433d3fed', class: "invoice__details" }, this.documentNumber && (h("div", { key: '185e320972b923b22056d4743bf0f580ed5c3868', class: "invoice__meta-row" }, h("span", { key: 'd8133a110cb99db60396f125b38c6a9dd656d236', class: "invoice__meta-label" }, t('Lcz_DocumentNumberLabel', { fallback: 'Document #' })), h("span", { key: '4054c986160ea743abb9f1623e214b3101cf3809', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '76bd9b5547f5a097b28d515cd68bff6f6f3416ec', class: "invoice__meta-row" }, h("span", { key: 'a2d8cad0dc6dc4eedc1139ecdfa483bae52614e7', class: "invoice__meta-label" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("span", { key: 'c85d46baf833db854997a75162b7fa24d344a187', class: "invoice__meta-value" }, formatDate(moment(), DATE_DISPLAY)))), this.agentName && (h("section", { key: '1ebf7a61984ed08d7665ba86aab1d5dab7ec0551', class: "bill-to-section", "aria-label": t('Lcz_BillTo', { fallback: 'Bill to' }) }, h("h4", { key: '1a3b07580ca07ebaebd049afd963d24cfc991b05', class: "section-heading" }, t('Lcz_BillTo', { fallback: 'Bill To' })), h("div", { key: 'f53c02f2c4e0d59c02da7ad4e437257da4d79116', class: "bill-to" }, h("p", { key: '4349fb5505ed5bb3b8bd7b5f266b58f984b029b0', class: "bill-to__name" }, this.agentName))))), h("div", { key: '004800aaf6cea6aadd8bc89b3c12791e4bc883f4', class: "invoice__column invoice__column--property" }, h("div", { key: 'e00942588a62916e732a7b309e77c3547ee9d0ed', class: "property-overview", "aria-label": t('Lcz_PropertyOverviewAria', { fallback: 'Property overview' }) }, logo && h("img", { key: '01f1089786058a9b86644c85fd092310d948c9da', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '598eaea49956ff0a4cd4a7a609ceb675bd3ab1b9', class: "property-overview__text" }, h("p", { key: 'ae50a340838dffa0a739608aa5231e71e81b4f66', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'b5dfbc94cf3a97b10302390a27cc14d97b45a8f8', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '54f3bad6e424168c3fb294b94ecd1e8b95b55b05', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'bab14bcd6470df94202f51faeacee4ef3cb01ff9', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '958c4a5b4798d4633bd6ea1bddd630dbea2ea670', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && (h("p", { key: 'af97032d87392bf26fa1c5a86f767a68cab103ce', class: "property-overview__location" }, t('Lcz_TaxRegPrefix', { fallback: 'Tax Reg:' }), " ", p.tax_nbr)))))))));
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
