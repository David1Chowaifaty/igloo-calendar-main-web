import { Host, h } from "@stencil/core";
import moment from "moment";
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
                return 'account statement';
            default:
                return '';
        }
    }
    render() {
        const p = this.property;
        const logo = p?.space_theme?.logo;
        const propertyLocation = [p?.city?.['name'] ?? null, p?.country?.name ?? null].filter(f => f !== null).join(', ');
        return (h(Host, { key: '55cd30475f383ae5bae3c890334eaae71c641380' }, h("header", { key: 'ef986c8b52736c6b81c249d1b961f6218f17f23c', class: "invoice__header" }, h("h3", { key: '87dd1f26cc871c37907fb294717ab466751d7d6e', class: "invoice__title" }, this.documentTitle), h("section", { key: '86b4561d9637d509711001977062167a7b473618', class: "invoice__layout" }, h("div", { key: 'fa3240c99a2693783e5a64129a0971a833633a83', class: "invoice__column invoice__column--details" }, h("div", { key: 'f0b62ce5bdfdee9f4a7f932e9358972e7b27560f', class: "invoice__details" }, this.documentNumber && (h("div", { key: '36419d313d672cefd56c5ce91c40c80e791f087d', class: "invoice__meta-row" }, h("span", { key: 'd6b4ca9190d6d873d53cb201cc5ad7c81c7bfdc1', class: "invoice__meta-label" }, "Document #"), h("span", { key: 'f4c24cac3fca44ffffe35496b74ecb4b4cdb3fd1', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: 'fde72c7548e5f374d392cdb97363c39a031cb6c8', class: "invoice__meta-row" }, h("span", { key: '36045d10408253eb46b70fa44d40834588187768', class: "invoice__meta-label" }, "Date"), h("span", { key: '327f3e352ba9d5a5c7a605ce81d59b1d86b2b587', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '5aaed82a4e4608683cca6c030a74e76f38bcc203', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '5aaab1255f19e9d2f12794ad0168ef674fd8b126', class: "section-heading" }, "Bill To"), h("div", { key: '313f2392956ca0d3361e8cec0337c650a3b69e96', class: "bill-to" }, h("p", { key: '02e953730de38047c9f2a498c778c975bebc9176', class: "bill-to__name" }, this.agentName))))), h("div", { key: '95c167edc9f66eef6f92e32476daff65a90a5189', class: "invoice__column invoice__column--property" }, h("div", { key: '0e3dde5329a34d048984a6b2416874926732a832', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '4be89538763b190ce997e68eaf854846ec68915c', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '357b0053d0f1d8c7bdf7652ef159a003a5c7e4a8', class: "property-overview__text" }, h("p", { key: '459878f4b0f2fbfa6a9ba7ac9b726c3c9d676eca', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '80e0eba79f9d9ec76834a5c70ea1fd5b3bc9f30b', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'db84180ea5876a69857dc0660a94153ef1e51711', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '402e7769669afdbbbf310a698b21a140e613e935', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '53076a4f09499f9351b9811a755f302b3526805d', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'd0d308612297ba4a5497ae99d5ec73261a60e08f', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
                "attribute": "document-type",
                "reflect": false,
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
                            "id": "src/models/property.ts::IProperty"
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
                "attribute": "document-number",
                "reflect": false
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
                "attribute": "agent-name",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-cl-document-header.js.map
