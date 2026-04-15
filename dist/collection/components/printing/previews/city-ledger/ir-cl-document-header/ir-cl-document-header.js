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
        return (h(Host, { key: '0381e41fa915a9986b9c97a43efa88761728ed9f' }, h("header", { key: 'd7ced218aec7a4a170795bf4ec15ea1e597c6a11', class: "invoice__header" }, h("h3", { key: '98a29824d95d9557455912b710a06c31c8614101', class: "invoice__title" }, this.documentTitle), h("section", { key: '6e6054479f48e68ae8e2d3190312beb21f04543d', class: "invoice__layout" }, h("div", { key: '0f302b836a5b03790f746d5b1e6695865503e4a0', class: "invoice__column invoice__column--details" }, h("div", { key: 'c619e6f6aff4ec48094fe95adde373b412d1491f', class: "invoice__details" }, this.documentNumber && (h("div", { key: '10b561f70165eb1c44b7de653c3f71ee1a7b4da1', class: "invoice__meta-row" }, h("span", { key: 'd6f7b8f423dede117d5026ea5308407cbf1836b9', class: "invoice__meta-label" }, "Document #"), h("span", { key: '8ddb17d3a652f3ce27f1339e81e6fa717f528e22', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '4bd10b7eb5018790e408db383e4950efa4968c33', class: "invoice__meta-row" }, h("span", { key: 'cc1809e6ecc729eb8db79e6f5942c7e030611f93', class: "invoice__meta-label" }, "Date"), h("span", { key: '96886bbd013b76ef4f7d125dc2497769d3736647', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'a15a2eaf5c22bdc0dff8b7f98b976610536b6f7f', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '978aa299140d91825b0f76997b7158cf013d40c2', class: "section-heading" }, "Bill To"), h("div", { key: '3f00494652f1ab582112335e3a1fd2ff792a3437', class: "bill-to" }, h("p", { key: '435311e9a5f20199ec33928f1fe4ceda412df665', class: "bill-to__name" }, this.agentName))))), h("div", { key: '38ab4839a7eca199bc6f21cc590010988cae8388', class: "invoice__column invoice__column--property" }, h("div", { key: '56a616728b37774be0936451d953a317cd4ddae1', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'd7cb06aa659219a9f8e996af85ae585d406c5d54', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'e45d5fb32067a605e99c7fbb0b261580b408539c', class: "property-overview__text" }, h("p", { key: 'a61ad8b0bf343eb14fdbc876c8ff488e06c98dc5', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '5ebe62dbe9fcc85f0b05b7536b0b76c27fec69cc', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '1b7942e1aa75a4041763e71090349597d7f8a343', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '2adbeb69420da07784f91bb1aa3430126a4d7187', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '5c918206a14706cba7a881e6430cc46678de5370', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '91e7c671c24708d54f87739598c8fb2a0c952695', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
