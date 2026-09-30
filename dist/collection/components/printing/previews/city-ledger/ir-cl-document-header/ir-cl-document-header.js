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
        return (h(Host, { key: '4e1aa54d528a4f82cd3b88d56e1e3b5a7f83a96b' }, h("header", { key: '24f12593cd9414941d7ef7e1d75fa8b8ca62babf', class: "invoice__header" }, h("h3", { key: '8bb894aa970be3488ae1c314e10be83cac788ef6', class: "invoice__title" }, this.documentTitle), h("section", { key: '13b6812801ef8b58679fbff6fd9860e9fa21b70b', class: "invoice__layout" }, h("div", { key: '8edbd9d28c3ca190fa086c1f6e560b849767e6a3', class: "invoice__column invoice__column--details" }, h("div", { key: '40352b638c3d6610fb81c7decc65e29a4ef93b2c', class: "invoice__details" }, this.documentNumber && (h("div", { key: '514ce17fa41260ca5275dee3d37abab84f400fae', class: "invoice__meta-row" }, h("span", { key: '7f1e9ce88c393a5676b3d7fb91211dfc2b873143', class: "invoice__meta-label" }, t('Lcz_DocumentNumberLabel', { fallback: 'Document #' })), h("span", { key: 'cbd1444e2689ae8a576dab76cdd2a2657d002922', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '37d8a830fd21484610799b1c411e972a296e38f1', class: "invoice__meta-row" }, h("span", { key: '050f064720452fcf2d5a3f0bb8040baf16538b83', class: "invoice__meta-label" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("span", { key: '7b23f6574c20e35eddb18e4a7507d494cc3fd507', class: "invoice__meta-value" }, formatDate(moment(), DATE_DISPLAY)))), this.agentName && (h("section", { key: 'd8473d42a092fd63cc013495050c11e37c4a0679', class: "bill-to-section", "aria-label": t('Lcz_BillTo', { fallback: 'Bill to' }) }, h("h4", { key: '4027b54ae90d69dcab157155fe5d4554c23f643d', class: "section-heading" }, t('Lcz_BillTo', { fallback: 'Bill To' })), h("div", { key: 'bf635e6b62cb8f4c8833864c2811ced6b51254a9', class: "bill-to" }, h("p", { key: '520c2b308a4045862f450a99ed5445b0313bcdd6', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'f7eb934fbd5a7e59b4f28c11e67c556391eb199d', class: "invoice__column invoice__column--property" }, h("div", { key: 'c88d83f35c92cbf1c574060193d6f043df97ece0', class: "property-overview", "aria-label": t('Lcz_PropertyOverviewAria', { fallback: 'Property overview' }) }, logo && h("img", { key: '0f0cfcdcc422d9a9d7627997bff3092deaaf91e0', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'b5890c87c445a031e4962ab1673cf529e5c7b8e0', class: "property-overview__text" }, h("p", { key: '726a093a7e8cdd16a664079d06648d2678838049', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'ef836a45564c10aa66a83603c27dd6ca7e6a4e83', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'e6562d4cf491c561d8f576f3a35121a3055986bc', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '14fc4cd194cdb7ee46f58f978398e7c0a6a7b61f', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '574a47fd6ac106acd99c04b0b330a0f436ec40aa', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && (h("p", { key: '6ac8346c3aa75729c3f8a1f7fc457ae5f32d6948', class: "property-overview__location" }, t('Lcz_TaxRegPrefix', { fallback: 'Tax Reg:' }), " ", p.tax_nbr)))))))));
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
