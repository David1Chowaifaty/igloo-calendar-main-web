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
        return (h(Host, { key: 'f826117281ee1b0954ea15ca1234199c3df5a5af' }, h("header", { key: '5a9384f67601146c498e3fd7335b9e9831f9e39d', class: "invoice__header" }, h("h3", { key: '14a71be5793ac2157f2377288a4ca156e399fbda', class: "invoice__title" }, this.documentTitle), h("section", { key: 'a46e48db690cb3dec52dddb429705010c56a731c', class: "invoice__layout" }, h("div", { key: '83472fbaea88c64ac5b193a5a80c9d4d1790099c', class: "invoice__column invoice__column--details" }, h("div", { key: 'e23694ed0231ac16d07ae85b6caf9da4b5fa4d23', class: "invoice__details" }, this.documentNumber && (h("div", { key: '58278abc141d4fb564cc69924a3756dba32eeeef', class: "invoice__meta-row" }, h("span", { key: '28fde1df37b3982748c9bf02d38bcc20d6322623', class: "invoice__meta-label" }, t('Lcz_DocumentNumberLabel', { fallback: 'Document #' })), h("span", { key: '6b26e96b996e99f0ba689bcd336e8737c20a9359', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '26226334ad8d76fe26162b2e978d7137957bfec0', class: "invoice__meta-row" }, h("span", { key: '642bd1dd778b8644099ddaeb84b906286723e928', class: "invoice__meta-label" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("span", { key: '6b274b4a7b010e1b90da573e28444dda72c4a9d1', class: "invoice__meta-value" }, formatDate(moment(), DATE_DISPLAY)))), this.agentName && (h("section", { key: '8d82c45e6b0edc244e216421979c6933c6ca4995', class: "bill-to-section", "aria-label": t('Lcz_BillTo', { fallback: 'Bill to' }) }, h("h4", { key: '669dd8772584900d955909acc3878c05fac56234', class: "section-heading" }, t('Lcz_BillTo', { fallback: 'Bill To' })), h("div", { key: '3915fd8430d92671bda55cc5e4d92e8fbc075b3c', class: "bill-to" }, h("p", { key: '02825b708aeb9a2e534ffc129e1ea46ba58b9579', class: "bill-to__name" }, this.agentName))))), h("div", { key: '406e3a68571836b1389c994832d15da191d3c140', class: "invoice__column invoice__column--property" }, h("div", { key: '6060a6691e2545786e14a4f2d009e426e397d3d2', class: "property-overview", "aria-label": t('Lcz_PropertyOverviewAria', { fallback: 'Property overview' }) }, logo && h("img", { key: '86a66c75d2ed5af7d4907b1ae5a913fc9b1698ac', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'e6d4c170ea601cc3e858d04b5b05d81ef8c1004d', class: "property-overview__text" }, h("p", { key: '51be8c61a0a060d0b5f07e604965fc208c165b42', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'df6f7eccd05b5e7c5d2c9b826fb62e25933373d1', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '8081c93a1a6387d5235dbfaa4ff2f3086de7d093', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'f9ec8daf27ed072c9bee5ff9f05288c12fcd9829', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'ac7795baebe8d64d157205773f476cace3cf482a', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && (h("p", { key: 'c29e66c8f0e54044e2682540dce5cb49367a1fd9', class: "property-overview__location" }, t('Lcz_TaxRegPrefix', { fallback: 'Tax Reg:' }), " ", p.tax_nbr)))))))));
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
