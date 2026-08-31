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
        return (h(Host, { key: 'f0e2caced5cfae22a1f166f753c7b8d732fd3470' }, h("header", { key: 'd0fb3a563fdbd861332488cf097fe96f2866dd41', class: "invoice__header" }, h("h3", { key: '89d4d00cba4580971487d699140f7c14ee0411d9', class: "invoice__title" }, this.documentTitle), h("section", { key: '14f3ba67cc8ab8b1b8f7bba781079fac1efbe02a', class: "invoice__layout" }, h("div", { key: 'af40db73a58c761af225d523c3fc6c55046fd1bc', class: "invoice__column invoice__column--details" }, h("div", { key: '4f3c0938961f5f741f65e5247c8b9ff0f4af49e0', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'c2e5d18c7069ae5a9b7ef307e8eab7326f0ac09f', class: "invoice__meta-row" }, h("span", { key: '0d413df13177823ce9574c39f89630fd576b23b0', class: "invoice__meta-label" }, "Document #"), h("span", { key: '3dfaaac3f30a5570be9278e6e901b49f8e0d4b7f', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '964e65245f0ccf7368343d1a51e614e133a1484e', class: "invoice__meta-row" }, h("span", { key: 'a56a65b62267941ae2a5ac913dc9aae190d442f8', class: "invoice__meta-label" }, "Date"), h("span", { key: '5f9cd86e6740223ed8781caa9339c0ba4db293e9', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '661d45155b29e1c55df667088927f10a3af50dac', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '7e9f6ca66920c8794d968d0cbd0f89f343cf5e52', class: "section-heading" }, "Bill To"), h("div", { key: 'a6bf5e06b53ba8ae6add15abb9559d5bd7f9f1d9', class: "bill-to" }, h("p", { key: '5a3dcad4acf2db4ecb3d7bc9d9337dda36fb1131', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'bba2975c088e069672b42ad1d5577bc94d9aef81', class: "invoice__column invoice__column--property" }, h("div", { key: 'b2eaa0ea355435b7b3c952b42a281dd4770f681e', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: 'd4245aa2df450e2c17cd4c811f5e45eb201ec54b', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '06daeb21ef3daae84bc85b6cbd8c004b2c743911', class: "property-overview__text" }, h("p", { key: '5f4984d944758b358fa9df85ceb10d0ff25e9178', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'df1950cb278b956d648c0dc716df116b5c017af9', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'd9f8a1f7c939295f6e96f1129684e3e39be5bfe4', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '2b88592c611b00b0953ded6674f7d97f53d5e411', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'fa64f72c1012ab291a80c08e139f735cc3dfcea5', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'b76e1da3c572a3e2b987219cf5ec5a6b6313bef0', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
