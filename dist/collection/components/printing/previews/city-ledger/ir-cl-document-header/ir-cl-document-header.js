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
        return (h(Host, { key: '2c0c1d9ee20aa694bbd2afd7a798cef89201394b' }, h("header", { key: '8383f786b9f64a791cde5c22e667440c0e530b47', class: "invoice__header" }, h("h3", { key: '8608de160894ff32c21380bc09cb62b3d236d940', class: "invoice__title" }, this.documentTitle), h("section", { key: '17646757f9f2b8abd3a673831df132e60d8734f1', class: "invoice__layout" }, h("div", { key: '6c3db1500ebd199f089b567c9926438a8e31414a', class: "invoice__column invoice__column--details" }, h("div", { key: 'ec3b0d8aec589c90d12056a0b702e15aebdc4abf', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'fa6d2367b73b808cded6f7c0562bb1f36a00af5e', class: "invoice__meta-row" }, h("span", { key: '7982483f8df0b917c2c080b53f42760378d6b117', class: "invoice__meta-label" }, t('Lcz_DocumentNumberLabel', { fallback: 'Document #' })), h("span", { key: 'ed23254dc65f21871552ff6231fff0b99fdf6888', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '174c0d74f1c8ef681bf9461b032d870cfb584eed', class: "invoice__meta-row" }, h("span", { key: '896862384ff105ac8aeb6993bf4817f21046baf1', class: "invoice__meta-label" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("span", { key: 'd7dce57b9fd2c9e15ceb82795dcaeb380ecc2ea3', class: "invoice__meta-value" }, formatDate(moment(), DATE_DISPLAY)))), this.agentName && (h("section", { key: '1e032d77d0371c01222a378a20848e434e4f75d6', class: "bill-to-section", "aria-label": t('Lcz_BillTo', { fallback: 'Bill to' }) }, h("h4", { key: '7a376af00a43ae9797b93db11511229325f6b788', class: "section-heading" }, t('Lcz_BillTo', { fallback: 'Bill To' })), h("div", { key: '1483ca51303115c1fa087871919352e04bfd8e9d', class: "bill-to" }, h("p", { key: '0123eb8c435874e3103d0c84371085c1592686a5', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'd6427d61863b0bf55e1a21d03ce897a126d6fdfe', class: "invoice__column invoice__column--property" }, h("div", { key: '45528e12dea40d17528748a46ff18c970c64cd79', class: "property-overview", "aria-label": t('Lcz_PropertyOverviewAria', { fallback: 'Property overview' }) }, logo && h("img", { key: 'ebafd883641dc1d8a8c375bcdac39b8c0561d1ff', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '54b51f3a6d6a3ffcca5de35dd9bbcabbbe50f8da', class: "property-overview__text" }, h("p", { key: '95f31bae4055116884762f60446b5022f85ab357', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '94cf653509fe12179687918186c9d889272ae0e8', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '4f2ef10dc7c084d1c09e8401d316c9b6cd9511f2', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '27b95b918e2047a730ddccfb3e474839756875e0', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '3301b95d34410fdc3092e58bf9b0ae6b373ffaf8', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && (h("p", { key: '0e1bfe58f55fa9a12f744818510b4f210983ef27', class: "property-overview__location" }, t('Lcz_TaxRegPrefix', { fallback: 'Tax Reg:' }), " ", p.tax_nbr)))))))));
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
