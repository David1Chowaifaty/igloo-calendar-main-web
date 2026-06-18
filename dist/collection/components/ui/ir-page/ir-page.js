import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: 'dd0d5d02bd5a75036eb4623249384f3f6b84039d' }, h("ir-interceptor", { key: 'b3e5d2371c1403a78fc463d197459d5053ea38d6' }), h("ir-toast", { key: 'ec7caf535426b4ff2595e5cb4a1200cffdd097cc' }), h("main", { key: 'fc7904e2605879d6669cd5311edbd2256a175d9f', class: "ir-page__container" }, h("header", { key: 'd15d20c4e1c96c916eefc9b2202bc2b110ecc27f', class: "tax-page__header" }, h("slot", { key: 'bd6ac3d2b30e1c212c4f3f470287ea2c7a534217', name: "heading" }, h("div", { key: 'f25d0e9af5a731d5ac395c0a29f63c5b97e0d519', class: "tax-page__heading" }, h("h3", { key: '3ee55788c3859b02d2e87179c9b2cc7925427959', class: "page-title" }, this.label), this.description && (h("p", { key: 'd37611120be793bb1fa16de7744811f5ad970489', class: "page__description" }, this.description, h("slot", { key: '0b11120c93341b00ae6ea250084f83c146828c14', name: "page-description" }))))), h("slot", { key: '7988ecd43d07f7ef94051854eb44784913d8c30e', name: "page-header" })), h("div", { key: '76fceeb6b0957d21f030ded612a9fa75cee014f5', part: "body", class: 'page-body' }, h("slot", { key: '6a0edbf070bf05be9c3fa80a99120bec5b60f029' })))));
    }
    static get is() { return "ir-page"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-page.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-page.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "label"
            },
            "description": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "description"
            }
        };
    }
}
