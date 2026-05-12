import { h, Host } from "@stencil/core";
export class IrPage {
    label;
    description;
    render() {
        return (h(Host, { key: '899d27305d85fdcf444cd3ebe3b9ebc750841145' }, h("ir-interceptor", { key: 'c89c44d476ef9f4bbc882e5dc92ad56e4265317c' }), h("ir-toast", { key: 'aa62778d8415c3c23d863ee2cf13178aeacb7483' }), h("main", { key: '9097064a7a835a3098bb2c5ea054c06e855f6ab7', class: "ir-page__container" }, h("header", { key: '4b4832595e2dba2fc9ddd7cc9d7f9180dae94c50', class: "tax-page__header" }, h("slot", { key: '4772a088f113ddb6427c91893c8084c0bed8424b', name: "heading" }, h("div", { key: '8921f60f00e57f74d71fe877c08cea5d7e8edf03', class: "tax-page__heading" }, h("h3", { key: '0aafa99904db79a00e725120f914942cf4dde66a', class: "page-title" }, this.label), this.description && h("p", { key: '9d01eb2f44fa8535e0a00b239e9a45442946fb3d', class: "tax-page__subtitle" }, this.description))), h("slot", { key: '792bd3fc8822990220386bc57cbc8fbc4803cb88', name: "page-header" })), h("slot", { key: '0ada52c96551185b1a1fcc129aaab68123464b99' }))));
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
