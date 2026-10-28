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
        return (h(Host, { key: '67e564a19a33ede2484b4185fb608a6d0e8285b4' }, h("header", { key: 'acac99fae7cf3f2853553f7ccf58167c8552afaf', class: "invoice__header" }, h("h3", { key: '77ecf5518773f9ca836a450462cc58de70936876', class: "invoice__title" }, this.documentTitle), h("section", { key: '50bdc68ec23644b353251552fddc1ed0df6a7170', class: "invoice__layout" }, h("div", { key: '90071621c75db449d8a0da31ea0574a623f9c353', class: "invoice__column invoice__column--details" }, h("div", { key: '7f42f09871bfc5a69657849010d41ae5f3a9d433', class: "invoice__details" }, this.documentNumber && (h("div", { key: '1330c849abf34854e7fe73f88d74747a77a13e15', class: "invoice__meta-row" }, h("span", { key: 'd2b51a0a7ac5e46381aacc749847bf2f01e1dd41', class: "invoice__meta-label" }, t('Lcz_DocumentNumberLabel', { fallback: 'Document #' })), h("span", { key: '3c6abb83dd548af98485d7d3c0d323134bb72c22', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '3f7f66a41cef92c07092885de895866d5bdc1f92', class: "invoice__meta-row" }, h("span", { key: '25fbd5e8b8f18eccd173af7ae2b0d67ce8e607c0', class: "invoice__meta-label" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("span", { key: '38cb0dc5341fa50f4d1794afc0236236568abc20', class: "invoice__meta-value" }, formatDate(moment(), DATE_DISPLAY)))), this.agentName && (h("section", { key: '7dc70a7821c6e87ced95093d34a22a7978b9c7fd', class: "bill-to-section", "aria-label": t('Lcz_BillTo', { fallback: 'Bill to' }) }, h("h4", { key: 'eef2164c043c9d85d0287919c284bdc160933d74', class: "section-heading" }, t('Lcz_BillTo', { fallback: 'Bill To' })), h("div", { key: '25814e91006e1f341d37ec7e0e1a3b7d2551665d', class: "bill-to" }, h("p", { key: '4922b5508231159fd21b8f55da3c2a01bcb7ed38', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'e47eaaaf0126a9a389b1cf768191cfa1c9418640', class: "invoice__column invoice__column--property" }, h("div", { key: 'dbd55e7acefaa135267c1735cd579ead13f008a4', class: "property-overview", "aria-label": t('Lcz_PropertyOverviewAria', { fallback: 'Property overview' }) }, logo && h("img", { key: '16e5754d51ead9e42de5d98fc1881a87e8ed2260', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '638253ed12a3102475335892e29b6edd188d3131', class: "property-overview__text" }, h("p", { key: '2c727076a3e05cb4c17721809720dcc7f2506888', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '4b1e869bfbb4c9c42515c92bc27035f7d03de786', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '4a75b633dfc236f6f107f282f8d3f84105087abc', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '91369145c16f0e3ecbe6fde73077a8974c50a7f8', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '869fbc18cc28765c34fe94b344c8cfcb8d22955a', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && (h("p", { key: 'bee48d684f45ab7f1e2462ab3ab7a12a6a89976b', class: "property-overview__location" }, t('Lcz_TaxRegPrefix', { fallback: 'Tax Reg:' }), " ", p.tax_nbr)))))))));
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
