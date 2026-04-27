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
        return (h(Host, { key: '6f8725a1e0ef3051cb0df55901fcc5f642cb8ee3' }, h("header", { key: 'df8dc6ad5fc44638963bb9cca595d1d6ecdc2623', class: "invoice__header" }, h("h3", { key: '7caebba88a9f3842692c99f0fb45f7446157e1c7', class: "invoice__title" }, this.documentTitle), h("section", { key: 'd1f62c21954a642adaf8cd18a4aa1eade0387a81', class: "invoice__layout" }, h("div", { key: '7c4c955c7b7de608df4eadc152e2530f3838c412', class: "invoice__column invoice__column--details" }, h("div", { key: '2996a317c2360c960f50a1120c222245a92b63a8', class: "invoice__details" }, this.documentNumber && (h("div", { key: '654d4531d615537119a2dc849b898e53e538b820', class: "invoice__meta-row" }, h("span", { key: '9b8353f65117ae38f2ea5ec3d0b45afb1e562442', class: "invoice__meta-label" }, "Document #"), h("span", { key: 'cd8d1b53e3fd4fe84e88e090760c1eee65105c0b', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '2cdac2cdde4fc649b690deed6111d18e215a0436', class: "invoice__meta-row" }, h("span", { key: '3983835bd453730f79e4060c55ed4f0bd27803b4', class: "invoice__meta-label" }, "Date"), h("span", { key: 'be8423aa9bcce9319a6b94820d5c53cc2baafa5c', class: "invoice__meta-value" }, moment().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'fe83fe5fcaad88e66db8bf9d4d29b174d6be020c', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '59fbe9c87199ca5c98658e1e8ef41e1e36002804', class: "section-heading" }, "Bill To"), h("div", { key: '0ddbc568c43c82240ef4597fbcfcdf3f75d958fe', class: "bill-to" }, h("p", { key: '765567c89eb718db6d933505a70f5de8695f6aa7', class: "bill-to__name" }, this.agentName))))), h("div", { key: 'c087fd949f391847edb96582a794184b67c0f275', class: "invoice__column invoice__column--property" }, h("div", { key: 'acbf778bc83446a2f69588b56e15e688ad8532ed', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '3f4b439feb5c5694e07914b786300eae8c56d791', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '1ee2213d0287fd29e9abc868d151529aa8fe1b2e', class: "property-overview__text" }, h("p", { key: '92f2d0043bd494267bb16a06a171c8b580e056fd', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'e70d1db1f5bc62036ebb0f12d5fdab3ff5d8cba4', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'fcbb9e13aecf63fa28e001627dfb1fc526dfa3a0', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'b23d5d7eaffcd8fcc2f34989f5943b633a0f5a79', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: 'dcefdf0ade880062dd65b21bc39134679bf800b3', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '33551ad423aa411eb7111f3094552062c6ca82e0', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
