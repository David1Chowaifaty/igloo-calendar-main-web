import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '90cc8ac6857bd72e0715dca09c55d7e4b914674a' }, h("ir-interceptor", { key: '689e84fa4a2214a5f32b6bf75d9255743d6a15aa' }), h("ir-toast", { key: '6ff47c79195427c56cd93c8af40d9190accd636e' }), h("main", { key: 'c5d77e28e68cfbcd1f735222484d39346a8b7b67', class: "ir-page__container" }, h("header", { key: '067b4fb20211a7cc1a79ea508d8725f8ea03a734', class: "tax-page__header" }, h("slot", { key: '8a2860bfe9bab7ca38657551f38a3b9518bce6b8', name: "heading" }, h("div", { key: '2a421c3e5532d0b1a727c6d1854eec9423e08e9b', class: "tax-page__heading" }, h("h3", { key: '49a23385404279966d4bb9712b1d6e90df64cc63', class: "page-title" }, this.label), this.description && h("p", { key: '8b8bb0424992b4effea82b5fce85b9192e42ef02', class: "tax-page__subtitle" }, this.description))), h("slot", { key: '5f2745f9008c230ec813dbfc08bfab01f24fce49', name: "page-header" })), h("slot", { key: '75f969a11c84ce43fd3bd52c58a43bf2d4eb1efa' }))));
    }
    static get is() { return "ir-page"; }
    static get encapsulation() { return "scoped"; }
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
                "attribute": "label",
                "reflect": false
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
                "attribute": "description",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-page.js.map
