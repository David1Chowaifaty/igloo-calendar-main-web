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
                return 'invoice';
            case 'receipt':
                return 'receipt';
            case 'creditnote':
                return 'credit note';
            case 'debitnote':
                return 'debit note';
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
        return (h(Host, { key: 'f5f1805c498cdabc5a69be746f12db5b27e58f3f' }, h("header", { key: '33b1e3c028d9cebc54b6309bdfdcb17aec19d971', class: "invoice__header" }, h("h3", { key: '2aa74ebcb10fab7ea5ca560ee5b28ea23f51e125', class: "invoice__title" }, this.documentTitle), h("section", { key: '830d8cf56963f5c66921cbc09315ac4c6aed9a28', class: "invoice__layout" }, h("div", { key: '7760dfc8985801f74caa1ba89b8aff7df3c0d741', class: "invoice__column invoice__column--details" }, h("div", { key: '004601506813cb6719e1ab8ceda19df237ae0cb1', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'd54d650668c527665bed116b3c063a37e86a2549', class: "invoice__meta-row" }, h("span", { key: '2401c907402a54128cc9d3dba9ff82d56c2c9b4a', class: "invoice__meta-label" }, t('Lcz_DocumentNumberLabel', { fallback: 'Document #' })), h("span", { key: 'a553b492f53d062ed4712538c4095cfec387369a', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'df1737f733ee3107871b44cdca04cef357d3b423', class: "invoice__meta-row" }, h("span", { key: '75886bb134c199af67b7065ba82a58697fd3dfb4', class: "invoice__meta-label" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("span", { key: 'd64425a50054b6075ea5f3c03743c62352406efe', class: "invoice__meta-value" }, formatDate(moment(), DATE_DISPLAY)))), this.agentName && (h("section", { key: '3478f13ee4127a59b31eec5abcc804849009dc67', class: "bill-to-section", "aria-label": t('Lcz_BillTo', { fallback: 'Bill to' }) }, h("h4", { key: 'aa200ea6c369c1122d2840e7fc93b2e28ea6d324', class: "section-heading" }, t('Lcz_BillTo', { fallback: 'Bill To' })), h("div", { key: 'fe4d3ce09853cfe08ef708e255acd6f63cda33a1', class: "bill-to" }, h("p", { key: '20db85dd753a0f0e02a542c7238e094200fd7834', class: "bill-to__name" }, this.agentName))))), h("div", { key: '77f2d5de667a9a858b0f8a06b8c95b4ce1521c5f', class: "invoice__column invoice__column--property" }, h("div", { key: 'e90e322e436b61b408617a2a2c8842ff808974eb', class: "property-overview", "aria-label": t('Lcz_PropertyOverviewAria', { fallback: 'Property overview' }) }, logo && h("img", { key: '5f440ddc91271899f402e87c223556e8ef3473f5', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'c455076185ece74473a04769be920742da40312c', class: "property-overview__text" }, h("p", { key: 'de204e38266fb0e0754d9a6ecd5ae7478b48cfe3', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '988f0fad447bf2c1e6fb047164dfbabcb0c7ec73', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '8e5eb9ce5bb8bb1c90c8436784ca4624fd5e022d', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'a403304cab4d174c5f049f75376da180ce91f922', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'bad2112754042e0d113fa1f83f74fbf80f276ddf', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && (h("p", { key: 'c065da7b0d41e6ee63f018bbdf2828f0ff8e6670', class: "property-overview__location" }, t('Lcz_TaxRegPrefix', { fallback: 'Tax Reg:' }), " ", p.tax_nbr)))))))));
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
