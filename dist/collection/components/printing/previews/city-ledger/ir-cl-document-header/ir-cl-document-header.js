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
        return (h(Host, { key: '1606ea4997b29ff78c8322dc2f018d60c699c0b6' }, h("header", { key: '07676407d63acffee9c137ba9130c32b38d51d5b', class: "invoice__header" }, h("h3", { key: '2e7df17a44865c29961adcae67e8509039112e74', class: "invoice__title" }, this.documentTitle), h("section", { key: '17ecd34ca82878775b3cb9a8bfc83adad120b043', class: "invoice__layout" }, h("div", { key: '96d8b7e62f602a765aef75709a024eced339776d', class: "invoice__column invoice__column--details" }, h("div", { key: '6268b895623d200892aa6aeb79a8e04f6adf7884', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'a15ed4568a6c014507715e39053737038ad3e165', class: "invoice__meta-row" }, h("span", { key: 'fc95cb86b7d5353971d5576c0c3071a4f42d91fb', class: "invoice__meta-label" }, t('Lcz_DocumentNumberLabel', { fallback: 'Document #' })), h("span", { key: 'f09f886bde189b5993d34af8b6555b233ec589b7', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '35940c42aa597a71b550baf1cad9a02799390fd2', class: "invoice__meta-row" }, h("span", { key: '2db3ac78a120fa03bde54d81dcd5c9c50432a788', class: "invoice__meta-label" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("span", { key: '9ab9d61af07e85d95b24ee9bb2fcf486c6bafd8d', class: "invoice__meta-value" }, formatDate(moment(), DATE_DISPLAY)))), this.agentName && (h("section", { key: '49de22fec78e5c6f8f8e2f9d72552df97d7a12c8', class: "bill-to-section", "aria-label": t('Lcz_BillTo', { fallback: 'Bill to' }) }, h("h4", { key: '355e80a540b81e82807f8bc54c6e0ccc9c0571ed', class: "section-heading" }, t('Lcz_BillTo', { fallback: 'Bill To' })), h("div", { key: 'c33b3fd639bef316e33bf52b11bd6f6e6c61fad5', class: "bill-to" }, h("p", { key: '5d7cf88cdb8f377797c9941fffe8a0b9720f3673', class: "bill-to__name" }, this.agentName))))), h("div", { key: '6deec73e96ede0360f4b3290803647585816f05d', class: "invoice__column invoice__column--property" }, h("div", { key: '30ccdb8bcbd20517392d627e7520fc50ee54b1d9', class: "property-overview", "aria-label": t('Lcz_PropertyOverviewAria', { fallback: 'Property overview' }) }, logo && h("img", { key: '101826f23e0c44ece545416039551e7d55efeafb', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'd12ab1f3a83e0f73eb53498cc4b88119b1187911', class: "property-overview__text" }, h("p", { key: '57348431e33bcf38215a4f6882df19ceeaf187f2', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '46345cbea29aba56d61268d59b2119ee8092a7cf', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'ada77b9548c3a2a9bc2bba33c1eda5e276eb3cc9', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '94bbcb566b8fc086e46555504e502d69bf859c40', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '4af77a91c2d51c38b1dd236922485dd4ab0df0cd', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && (h("p", { key: '8c80bee8f0b9d97e06217d0669bbbf4eaaf03953', class: "property-overview__location" }, t('Lcz_TaxRegPrefix', { fallback: 'Tax Reg:' }), " ", p.tax_nbr)))))))));
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
