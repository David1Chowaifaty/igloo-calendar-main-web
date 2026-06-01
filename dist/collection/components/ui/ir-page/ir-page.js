import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '899d27305d85fdcf444cd3ebe3b9ebc750841145' }, h("ir-interceptor", { key: 'c89c44d476ef9f4bbc882e5dc92ad56e4265317c' }), h("ir-toast", { key: 'aa62778d8415c3c23d863ee2cf13178aeacb7483' }), h("main", { key: '9097064a7a835a3098bb2c5ea054c06e855f6ab7', class: "ir-page__container" }, h("header", { key: '4b4832595e2dba2fc9ddd7cc9d7f9180dae94c50', class: "tax-page__header" }, h("slot", { key: '4772a088f113ddb6427c91893c8084c0bed8424b', name: "heading" }, h("div", { key: '8921f60f00e57f74d71fe877c08cea5d7e8edf03', class: "tax-page__heading" }, h("h3", { key: '0aafa99904db79a00e725120f914942cf4dde66a', class: "page-title" }, this.label), this.description && (h("p", { key: 'ad5a1fe6336c06b4a87adc9c8a16fc1cdd2ce560', class: "page__description" }, this.description, h("slot", { key: '269b777cb51ad02eb6468e7dbe7885f11a3a4f43', name: "page-description" }))))), h("slot", { key: '8a5b242714d97ba7d2195e1c59459c1bae83eff5', name: "page-header" })), h("slot", { key: '5b5f80a102f56e0e14327d057605c0c4c71b4a84' }))));
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
